import { deserialize } from "superjson";
import Console from "./lib/console";
import { Context, Request } from "./lib/paw";
import JsonToTS from "json-to-ts";
import * as Url from "url-parse";

const Mustache = require("mustache");

// USEFULL LINKs
// https://github.com/luckymarmot/Paw-OpenAPI3Generator/blob/master/src/index.ts

class MyCodeGenerator {
  public generate(context: Context, request: Request): string {
    //console.log(Console.stringifyWithCyclicSupport(request));
    //console.log(Console.stringifyWithCyclicSupport(context));

    const urlParts: string[] = [];

    for (const component of (request.getUrlBase(true) as DynamicString)
      .components) {
      if (typeof component !== "string") {
        urlParts.push(
          ":" +
            // @ts-ignore
            context.getEnvironmentVariableById(component.environmentVariable)
              .name
        );
      } else {
        urlParts.push(component);
      }
    }

    const url = urlParts.join("").replace(":baseUrl", "/api");

    console.log("URL", url);

    let body: string = undefined;
    let isBodyTypescript = true;

    if (
      request.body &&
      typeof request.body === "string" &&
      request.body.length !== 0
    ) {
      try {
        body = JsonToTS(JSON.parse(request.body), {
          rootName: "Request",
        }).join("\n\n");
      } catch (_) {
        body = request.body;
        isBodyTypescript = false;
      }
    }

    const urlParams = Object.entries(request.urlParameters).map(
      ([key, value]) => ({
        key,
        value,
      })
    );

    const exchanges = request.getAllExchanges();

    let responseBody: string = undefined;
    let isResponseBodyTypescript = true;

    const okResponse = exchanges.filter(
      (exchange) => exchange.responseStatusCode === 200
    )[0];

    if (okResponse) {
      if (
        okResponse.responseBody &&
        typeof okResponse.responseBody === "string" &&
        okResponse.responseBody.length !== 0 &&
        okResponse.responseBody !== '{"json":{}}' &&
        okResponse.responseBody !== '{"json":[]}'
      ) {
        try {
          responseBody = JsonToTS(
            deserialize(JSON.parse(okResponse.responseBody)),
            {
              rootName: "Response",
            }
          ).join("\n\n");
        } catch (_) {
          responseBody = okResponse.responseBody;
          isResponseBodyTypescript = false;
        }
      }
    }

    const errorCodes = Array.from(
      new Set(
        exchanges
          .filter(
            (exchange) =>
              exchange.responseStatusCode !== 500 &&
              exchange.responseStatusCode !== 200 &&
              exchange.responseStatusCode !== 0
          )
          .map((exchange) => "`" + exchange.responseStatusCode + "`")
      ).values()
    )
      .sort()
      .reverse()
      .join(", ");

    // @ts-ignore
    return Mustache.render(readFile("template.mustache"), {
      context,
      request,
      url,
      urlParams,
      urlParamsExists: urlParams.length !== 0,
      body,
      bodyExists: body !== undefined,
      isBodyTypescript,
      bodyOrUrlParamsExists: urlParams.length !== 0 || body !== undefined,
      responseBody,
      responseBodyExists: responseBody !== undefined,
      isResponseBodyTypescript,
      errorCodes,
      errorCodesExists: errorCodes.length !== 0,
    }).replace(/\n{3,}/g, "\n\n");
  }

  static identifier = "com.example.TypescriptCodeGenerator";
  static title = "Typescript Code generator";
}

// @ts-ignore
registerCodeGenerator(MyCodeGenerator);

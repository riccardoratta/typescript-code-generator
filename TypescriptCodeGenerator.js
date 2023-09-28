/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/array-includes/implementation.js":
/*!*******************************************************!*\
  !*** ./node_modules/array-includes/implementation.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ToIntegerOrInfinity = __webpack_require__(/*! es-abstract/2023/ToIntegerOrInfinity */ \"./node_modules/es-abstract/2023/ToIntegerOrInfinity.js\");\nvar ToLength = __webpack_require__(/*! es-abstract/2023/ToLength */ \"./node_modules/es-abstract/2023/ToLength.js\");\nvar ToObject = __webpack_require__(/*! es-abstract/2023/ToObject */ \"./node_modules/es-abstract/2023/ToObject.js\");\nvar SameValueZero = __webpack_require__(/*! es-abstract/2023/SameValueZero */ \"./node_modules/es-abstract/2023/SameValueZero.js\");\nvar $isNaN = __webpack_require__(/*! es-abstract/helpers/isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\nvar $isFinite = __webpack_require__(/*! es-abstract/helpers/isFinite */ \"./node_modules/es-abstract/helpers/isFinite.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\nvar $charAt = callBound('String.prototype.charAt');\nvar $indexOf = GetIntrinsic('%Array.prototype.indexOf%'); // TODO: use callBind.apply without breaking IE 8\nvar $max = GetIntrinsic('%Math.max%');\n\nmodule.exports = function includes(searchElement) {\n\tvar fromIndex = arguments.length > 1 ? ToIntegerOrInfinity(arguments[1]) : 0;\n\tif ($indexOf && !$isNaN(searchElement) && $isFinite(fromIndex) && typeof searchElement !== 'undefined') {\n\t\treturn $indexOf.apply(this, arguments) > -1;\n\t}\n\n\tvar O = ToObject(this);\n\tvar length = ToLength(O.length);\n\tif (length === 0) {\n\t\treturn false;\n\t}\n\tvar k = fromIndex >= 0 ? fromIndex : $max(0, length + fromIndex);\n\twhile (k < length) {\n\t\tif (SameValueZero(searchElement, isString(O) ? $charAt(O, k) : O[k])) {\n\t\t\treturn true;\n\t\t}\n\t\tk += 1;\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array-includes/implementation.js?");

/***/ }),

/***/ "./node_modules/array-includes/index.js":
/*!**********************************************!*\
  !*** ./node_modules/array-includes/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/array-includes/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/array-includes/polyfill.js\");\nvar polyfill = callBind.apply(getPolyfill());\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/array-includes/shim.js\");\n\nvar $slice = callBound('Array.prototype.slice');\n\n/* eslint-disable no-unused-vars */\nvar boundShim = function includes(array, searchElement) {\n/* eslint-enable no-unused-vars */\n\tRequireObjectCoercible(array);\n\treturn polyfill(array, $slice(arguments, 1));\n};\ndefine(boundShim, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundShim;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array-includes/index.js?");

/***/ }),

/***/ "./node_modules/array-includes/polyfill.js":
/*!*************************************************!*\
  !*** ./node_modules/array-includes/polyfill.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/array-includes/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (\n\t\tArray.prototype.includes\n\t\t&& Array(1).includes(undefined) // https://bugzilla.mozilla.org/show_bug.cgi?id=1767541\n\t) {\n\t\treturn Array.prototype.includes;\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array-includes/polyfill.js?");

/***/ }),

/***/ "./node_modules/array-includes/shim.js":
/*!*********************************************!*\
  !*** ./node_modules/array-includes/shim.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/array-includes/polyfill.js\");\n\nmodule.exports = function shimArrayPrototypeIncludes() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tArray.prototype,\n\t\t{ includes: polyfill },\n\t\t{ includes: function () { return Array.prototype.includes !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array-includes/shim.js?");

/***/ }),

/***/ "./node_modules/array.prototype.reduce/implementation.js":
/*!***************************************************************!*\
  !*** ./node_modules/array.prototype.reduce/implementation.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Call = __webpack_require__(/*! es-abstract/2023/Call */ \"./node_modules/es-abstract/2023/Call.js\");\nvar Get = __webpack_require__(/*! es-abstract/2023/Get */ \"./node_modules/es-abstract/2023/Get.js\");\nvar HasProperty = __webpack_require__(/*! es-abstract/2023/HasProperty */ \"./node_modules/es-abstract/2023/HasProperty.js\");\nvar IsCallable = __webpack_require__(/*! es-abstract/2023/IsCallable */ \"./node_modules/es-abstract/2023/IsCallable.js\");\nvar LengthOfArrayLike = __webpack_require__(/*! es-abstract/2023/LengthOfArrayLike */ \"./node_modules/es-abstract/2023/LengthOfArrayLike.js\");\nvar ToObject = __webpack_require__(/*! es-abstract/2023/ToObject */ \"./node_modules/es-abstract/2023/ToObject.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2023/ToString */ \"./node_modules/es-abstract/2023/ToString.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar isString = __webpack_require__(/*! is-string */ \"./node_modules/is-string/index.js\");\n\nvar $TypeError = TypeError;\n\n// Check failure of by-index access of string characters (IE < 9) and failure of `0 in boxedString` (Rhino)\nvar boxedString = Object('a');\nvar splitString = boxedString[0] !== 'a' || !(0 in boxedString);\n\nvar strSplit = callBound('%String.prototype.split%');\n\nmodule.exports = function reduce(callbackfn) {\n\tvar O = ToObject(this);\n\tvar self = splitString && isString(O) ? strSplit(O, '') : O;\n\tvar len = LengthOfArrayLike(self);\n\n\t// If no callback function or if callback is not a callable function\n\tif (!IsCallable(callbackfn)) {\n\t\tthrow new $TypeError('Array.prototype.reduce callback must be a function');\n\t}\n\n\tif (len === 0 && arguments.length < 2) {\n\t\tthrow new $TypeError('reduce of empty array with no initial value');\n\t}\n\n\tvar k = 0;\n\n\tvar accumulator;\n\tvar Pk, kPresent;\n\tif (arguments.length > 1) {\n\t\taccumulator = arguments[1];\n\t} else {\n\t\tkPresent = false;\n\t\twhile (!kPresent && k < len) {\n\t\t\tPk = ToString(k);\n\t\t\tkPresent = HasProperty(O, Pk);\n\t\t\tif (kPresent) {\n\t\t\t\taccumulator = Get(O, Pk);\n\t\t\t}\n\t\t\tk += 1;\n\t\t}\n\t\tif (!kPresent) {\n\t\t\tthrow new $TypeError('reduce of empty array with no initial value');\n\t\t}\n\t}\n\n\twhile (k < len) {\n\t\tPk = ToString(k);\n\t\tkPresent = HasProperty(O, Pk);\n\t\tif (kPresent) {\n\t\t\tvar kValue = Get(O, Pk);\n\t\t\taccumulator = Call(callbackfn, void undefined, [accumulator, kValue, k, O]);\n\t\t}\n\t\tk += 1;\n\t}\n\n\treturn accumulator;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array.prototype.reduce/implementation.js?");

/***/ }),

/***/ "./node_modules/array.prototype.reduce/index.js":
/*!******************************************************!*\
  !*** ./node_modules/array.prototype.reduce/index.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/array.prototype.reduce/implementation.js\");\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/array.prototype.reduce/polyfill.js\");\nvar polyfill = callBind.apply(getPolyfill());\n\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/array.prototype.reduce/shim.js\");\n\nvar $slice = callBound('%Array.prototype.slice%');\n\n// eslint-disable-next-line no-unused-vars\nvar boundShim = function reduce(array, callbackfn) {\n\tRequireObjectCoercible(array);\n\treturn polyfill(array, $slice(arguments, 1));\n};\ndefine(boundShim, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundShim;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array.prototype.reduce/index.js?");

/***/ }),

/***/ "./node_modules/array.prototype.reduce/polyfill.js":
/*!*********************************************************!*\
  !*** ./node_modules/array.prototype.reduce/polyfill.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar arrayMethodBoxesProperly = __webpack_require__(/*! es-array-method-boxes-properly */ \"./node_modules/es-array-method-boxes-properly/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/array.prototype.reduce/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tvar method = Array.prototype.reduce;\n\treturn arrayMethodBoxesProperly(method) ? method : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array.prototype.reduce/polyfill.js?");

/***/ }),

/***/ "./node_modules/array.prototype.reduce/shim.js":
/*!*****************************************************!*\
  !*** ./node_modules/array.prototype.reduce/shim.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/array.prototype.reduce/polyfill.js\");\n\nmodule.exports = function shimArrayPrototypeReduce() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tArray.prototype,\n\t\t{ reduce: polyfill },\n\t\t{ reduce: function () { return Array.prototype.reduce !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/array.prototype.reduce/shim.js?");

/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar callBind = __webpack_require__(/*! ./ */ \"./node_modules/call-bind/index.js\");\n\nvar $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));\n\nmodule.exports = function callBoundIntrinsic(name, allowMissing) {\n\tvar intrinsic = GetIntrinsic(name, !!allowMissing);\n\tif (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {\n\t\treturn callBind(intrinsic);\n\t}\n\treturn intrinsic;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/call-bind/callBound.js?");

/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $apply = GetIntrinsic('%Function.prototype.apply%');\nvar $call = GetIntrinsic('%Function.prototype.call%');\nvar $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\nvar $max = GetIntrinsic('%Math.max%');\n\nif ($defineProperty) {\n\ttry {\n\t\t$defineProperty({}, 'a', { value: 1 });\n\t} catch (e) {\n\t\t// IE 8 has a broken defineProperty\n\t\t$defineProperty = null;\n\t}\n}\n\nmodule.exports = function callBind(originalFunction) {\n\tvar func = $reflectApply(bind, $call, arguments);\n\tif ($gOPD && $defineProperty) {\n\t\tvar desc = $gOPD(func, 'length');\n\t\tif (desc.configurable) {\n\t\t\t// original length, plus the receiver, minus any additional arguments (after the receiver)\n\t\t\t$defineProperty(\n\t\t\t\tfunc,\n\t\t\t\t'length',\n\t\t\t\t{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }\n\t\t\t);\n\t\t}\n\t}\n\treturn func;\n};\n\nvar applyBind = function applyBind() {\n\treturn $reflectApply(bind, $apply, arguments);\n};\n\nif ($defineProperty) {\n\t$defineProperty(module.exports, 'apply', { value: applyBind });\n} else {\n\tmodule.exports.apply = applyBind;\n}\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/call-bind/index.js?");

/***/ }),

/***/ "./node_modules/define-data-property/index.js":
/*!****************************************************!*\
  !*** ./node_modules/define-data-property/index.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\")();\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = hasPropertyDescriptors && GetIntrinsic('%Object.defineProperty%', true);\n\nvar $SyntaxError = GetIntrinsic('%SyntaxError%');\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar gopd = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\n\n/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */\nmodule.exports = function defineDataProperty(\n\tobj,\n\tproperty,\n\tvalue\n) {\n\tif (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {\n\t\tthrow new $TypeError('`obj` must be an object or a function`');\n\t}\n\tif (typeof property !== 'string' && typeof property !== 'symbol') {\n\t\tthrow new $TypeError('`property` must be a string or a symbol`');\n\t}\n\tif (arguments.length > 3 && typeof arguments[3] !== 'boolean' && arguments[3] !== null) {\n\t\tthrow new $TypeError('`nonEnumerable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 4 && typeof arguments[4] !== 'boolean' && arguments[4] !== null) {\n\t\tthrow new $TypeError('`nonWritable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 5 && typeof arguments[5] !== 'boolean' && arguments[5] !== null) {\n\t\tthrow new $TypeError('`nonConfigurable`, if provided, must be a boolean or null');\n\t}\n\tif (arguments.length > 6 && typeof arguments[6] !== 'boolean') {\n\t\tthrow new $TypeError('`loose`, if provided, must be a boolean');\n\t}\n\n\tvar nonEnumerable = arguments.length > 3 ? arguments[3] : null;\n\tvar nonWritable = arguments.length > 4 ? arguments[4] : null;\n\tvar nonConfigurable = arguments.length > 5 ? arguments[5] : null;\n\tvar loose = arguments.length > 6 ? arguments[6] : false;\n\n\t/* @type {false | TypedPropertyDescriptor<unknown>} */\n\tvar desc = !!gopd && gopd(obj, property);\n\n\tif ($defineProperty) {\n\t\t$defineProperty(obj, property, {\n\t\t\tconfigurable: nonConfigurable === null && desc ? desc.configurable : !nonConfigurable,\n\t\t\tenumerable: nonEnumerable === null && desc ? desc.enumerable : !nonEnumerable,\n\t\t\tvalue: value,\n\t\t\twritable: nonWritable === null && desc ? desc.writable : !nonWritable\n\t\t});\n\t} else if (loose || (!nonEnumerable && !nonWritable && !nonConfigurable)) {\n\t\t// must fall back to [[Set]], and was not explicitly asked to make non-enumerable, non-writable, or non-configurable\n\t\tobj[property] = value; // eslint-disable-line no-param-reassign\n\t} else {\n\t\tthrow new $SyntaxError('This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.');\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/define-data-property/index.js?");

/***/ }),

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar keys = __webpack_require__(/*! object-keys */ \"./node_modules/object-keys/index.js\");\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';\n\nvar toStr = Object.prototype.toString;\nvar concat = Array.prototype.concat;\nvar defineDataProperty = __webpack_require__(/*! define-data-property */ \"./node_modules/define-data-property/index.js\");\n\nvar isFunction = function (fn) {\n\treturn typeof fn === 'function' && toStr.call(fn) === '[object Function]';\n};\n\nvar supportsDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\")();\n\nvar defineProperty = function (object, name, value, predicate) {\n\tif (name in object) {\n\t\tif (predicate === true) {\n\t\t\tif (object[name] === value) {\n\t\t\t\treturn;\n\t\t\t}\n\t\t} else if (!isFunction(predicate) || !predicate()) {\n\t\t\treturn;\n\t\t}\n\t}\n\n\tif (supportsDescriptors) {\n\t\tdefineDataProperty(object, name, value, true);\n\t} else {\n\t\tdefineDataProperty(object, name, value);\n\t}\n};\n\nvar defineProperties = function (object, map) {\n\tvar predicates = arguments.length > 2 ? arguments[2] : {};\n\tvar props = keys(map);\n\tif (hasSymbols) {\n\t\tprops = concat.call(props, Object.getOwnPropertySymbols(map));\n\t}\n\tfor (var i = 0; i < props.length; i += 1) {\n\t\tdefineProperty(object, props[i], map[props[i]], predicates[props[i]]);\n\t}\n};\n\ndefineProperties.supportsDescriptors = !!supportsDescriptors;\n\nmodule.exports = defineProperties;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/define-properties/index.js?");

/***/ }),

/***/ "./node_modules/es-array-method-boxes-properly/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/es-array-method-boxes-properly/index.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("module.exports = function properlyBoxed(method) {\n\t// Check node 0.6.21 bug where third parameter is not boxed\n\tvar properlyBoxesNonStrict = true;\n\tvar properlyBoxesStrict = true;\n\tvar threwException = false;\n\tif (typeof method === 'function') {\n\t\ttry {\n\t\t\t// eslint-disable-next-line max-params\n\t\t\tmethod.call('f', function (_, __, O) {\n\t\t\t\tif (typeof O !== 'object') {\n\t\t\t\t\tproperlyBoxesNonStrict = false;\n\t\t\t\t}\n\t\t\t});\n\n\t\t\tmethod.call(\n\t\t\t\t[null],\n\t\t\t\tfunction () {\n\t\t\t\t\t'use strict';\n\n\t\t\t\t\tproperlyBoxesStrict = typeof this === 'string'; // eslint-disable-line no-invalid-this\n\t\t\t\t},\n\t\t\t\t'x'\n\t\t\t);\n\t\t} catch (e) {\n\t\t\tthrewException = true;\n\t\t}\n\t\treturn !threwException && properlyBoxesNonStrict && properlyBoxesStrict;\n\t}\n\treturn false;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-array-method-boxes-properly/index.js?");

/***/ }),

/***/ "./node_modules/es-to-primitive/es2015.js":
/*!************************************************!*\
  !*** ./node_modules/es-to-primitive/es2015.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hasSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol';\n\nvar isPrimitive = __webpack_require__(/*! ./helpers/isPrimitive */ \"./node_modules/es-to-primitive/helpers/isPrimitive.js\");\nvar isCallable = __webpack_require__(/*! is-callable */ \"./node_modules/is-callable/index.js\");\nvar isDate = __webpack_require__(/*! is-date-object */ \"./node_modules/is-date-object/index.js\");\nvar isSymbol = __webpack_require__(/*! is-symbol */ \"./node_modules/is-symbol/index.js\");\n\nvar ordinaryToPrimitive = function OrdinaryToPrimitive(O, hint) {\n\tif (typeof O === 'undefined' || O === null) {\n\t\tthrow new TypeError('Cannot call method on ' + O);\n\t}\n\tif (typeof hint !== 'string' || (hint !== 'number' && hint !== 'string')) {\n\t\tthrow new TypeError('hint must be \"string\" or \"number\"');\n\t}\n\tvar methodNames = hint === 'string' ? ['toString', 'valueOf'] : ['valueOf', 'toString'];\n\tvar method, result, i;\n\tfor (i = 0; i < methodNames.length; ++i) {\n\t\tmethod = O[methodNames[i]];\n\t\tif (isCallable(method)) {\n\t\t\tresult = method.call(O);\n\t\t\tif (isPrimitive(result)) {\n\t\t\t\treturn result;\n\t\t\t}\n\t\t}\n\t}\n\tthrow new TypeError('No default value');\n};\n\nvar GetMethod = function GetMethod(O, P) {\n\tvar func = O[P];\n\tif (func !== null && typeof func !== 'undefined') {\n\t\tif (!isCallable(func)) {\n\t\t\tthrow new TypeError(func + ' returned for property ' + P + ' of object ' + O + ' is not a function');\n\t\t}\n\t\treturn func;\n\t}\n\treturn void 0;\n};\n\n// http://www.ecma-international.org/ecma-262/6.0/#sec-toprimitive\nmodule.exports = function ToPrimitive(input) {\n\tif (isPrimitive(input)) {\n\t\treturn input;\n\t}\n\tvar hint = 'default';\n\tif (arguments.length > 1) {\n\t\tif (arguments[1] === String) {\n\t\t\thint = 'string';\n\t\t} else if (arguments[1] === Number) {\n\t\t\thint = 'number';\n\t\t}\n\t}\n\n\tvar exoticToPrim;\n\tif (hasSymbols) {\n\t\tif (Symbol.toPrimitive) {\n\t\t\texoticToPrim = GetMethod(input, Symbol.toPrimitive);\n\t\t} else if (isSymbol(input)) {\n\t\t\texoticToPrim = Symbol.prototype.valueOf;\n\t\t}\n\t}\n\tif (typeof exoticToPrim !== 'undefined') {\n\t\tvar result = exoticToPrim.call(input, hint);\n\t\tif (isPrimitive(result)) {\n\t\t\treturn result;\n\t\t}\n\t\tthrow new TypeError('unable to convert exotic object to primitive');\n\t}\n\tif (hint === 'default' && (isDate(input) || isSymbol(input))) {\n\t\thint = 'string';\n\t}\n\treturn ordinaryToPrimitive(input, hint === 'default' ? 'number' : hint);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-to-primitive/es2015.js?");

/***/ }),

/***/ "./node_modules/es-to-primitive/es5.js":
/*!*********************************************!*\
  !*** ./node_modules/es-to-primitive/es5.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toStr = Object.prototype.toString;\n\nvar isPrimitive = __webpack_require__(/*! ./helpers/isPrimitive */ \"./node_modules/es-to-primitive/helpers/isPrimitive.js\");\n\nvar isCallable = __webpack_require__(/*! is-callable */ \"./node_modules/is-callable/index.js\");\n\n// http://ecma-international.org/ecma-262/5.1/#sec-8.12.8\nvar ES5internalSlots = {\n\t'[[DefaultValue]]': function (O) {\n\t\tvar actualHint;\n\t\tif (arguments.length > 1) {\n\t\t\tactualHint = arguments[1];\n\t\t} else {\n\t\t\tactualHint = toStr.call(O) === '[object Date]' ? String : Number;\n\t\t}\n\n\t\tif (actualHint === String || actualHint === Number) {\n\t\t\tvar methods = actualHint === String ? ['toString', 'valueOf'] : ['valueOf', 'toString'];\n\t\t\tvar value, i;\n\t\t\tfor (i = 0; i < methods.length; ++i) {\n\t\t\t\tif (isCallable(O[methods[i]])) {\n\t\t\t\t\tvalue = O[methods[i]]();\n\t\t\t\t\tif (isPrimitive(value)) {\n\t\t\t\t\t\treturn value;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\tthrow new TypeError('No default value');\n\t\t}\n\t\tthrow new TypeError('invalid [[DefaultValue]] hint supplied');\n\t}\n};\n\n// http://ecma-international.org/ecma-262/5.1/#sec-9.1\nmodule.exports = function ToPrimitive(input) {\n\tif (isPrimitive(input)) {\n\t\treturn input;\n\t}\n\tif (arguments.length > 1) {\n\t\treturn ES5internalSlots['[[DefaultValue]]'](input, arguments[1]);\n\t}\n\treturn ES5internalSlots['[[DefaultValue]]'](input);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-to-primitive/es5.js?");

/***/ }),

/***/ "./node_modules/es-to-primitive/helpers/isPrimitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/es-to-primitive/helpers/isPrimitive.js ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isPrimitive(value) {\n\treturn value === null || (typeof value !== 'function' && typeof value !== 'object');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-to-primitive/helpers/isPrimitive.js?");

/***/ }),

/***/ "./node_modules/es7-shim/Array.js":
/*!****************************************!*\
  !*** ./node_modules/es7-shim/Array.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar proto = __webpack_require__(/*! ./Array.prototype */ \"./node_modules/es7-shim/Array.prototype.js\");\n\nmodule.exports = {\n\tprototype: proto,\n\tshim: function shimArray() {\n\t\tproto.shim();\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/Array.js?");

/***/ }),

/***/ "./node_modules/es7-shim/Array.prototype.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/es7-shim/Array.prototype.includes.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! array-includes */ \"./node_modules/array-includes/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/Array.prototype.includes.js?");

/***/ }),

/***/ "./node_modules/es7-shim/Array.prototype.js":
/*!**************************************************!*\
  !*** ./node_modules/es7-shim/Array.prototype.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar includes = __webpack_require__(/*! ./Array.prototype.includes */ \"./node_modules/es7-shim/Array.prototype.includes.js\");\n\nmodule.exports = {\n\tincludes: includes,\n\tshim: function shimArrayPrototype() {\n\t\tincludes.shim();\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/Array.prototype.js?");

/***/ }),

/***/ "./node_modules/es7-shim/Object.js":
/*!*****************************************!*\
  !*** ./node_modules/es7-shim/Object.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getDescriptors = __webpack_require__(/*! object.getownpropertydescriptors */ \"./node_modules/object.getownpropertydescriptors/index.js\");\nvar entries = __webpack_require__(/*! object.entries */ \"./node_modules/object.entries/index.js\");\nvar values = __webpack_require__(/*! object.values */ \"./node_modules/object.values/index.js\");\n\nmodule.exports = {\n\tentries: entries,\n\tgetOwnPropertyDescriptors: getDescriptors,\n\tshim: function shimObject() {\n\t\tgetDescriptors.shim();\n\t\tentries.shim();\n\t\tvalues.shim();\n\t},\n\tvalues: values\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/Object.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.js":
/*!*****************************************!*\
  !*** ./node_modules/es7-shim/String.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar stringPrototype = __webpack_require__(/*! ./String.prototype */ \"./node_modules/es7-shim/String.prototype.js\");\n\nmodule.exports = {\n\tprototype: stringPrototype,\n\tshim: function shimString() {\n\t\tstringPrototype.shim();\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.at.js":
/*!******************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.at.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string-at */ \"./node_modules/string-at/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.at.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.js":
/*!***************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar at = __webpack_require__(/*! ./String.prototype.at */ \"./node_modules/es7-shim/String.prototype.at.js\");\nvar padStart = __webpack_require__(/*! ./String.prototype.padStart */ \"./node_modules/es7-shim/String.prototype.padStart.js\");\nvar padEnd = __webpack_require__(/*! ./String.prototype.padEnd */ \"./node_modules/es7-shim/String.prototype.padEnd.js\");\nvar trimLeft = __webpack_require__(/*! ./String.prototype.trimLeft */ \"./node_modules/es7-shim/String.prototype.trimLeft.js\");\nvar trimRight = __webpack_require__(/*! ./String.prototype.trimRight */ \"./node_modules/es7-shim/String.prototype.trimRight.js\");\n\nmodule.exports = {\n\tat: at,\n\tpadStart: padStart,\n\tpadEnd: padEnd,\n\ttrimLeft: trimLeft,\n\ttrimRight: trimRight,\n\tshim: function shimStringPrototype() {\n\t\tat.shim();\n\t\tpadStart.shim();\n\t\tpadEnd.shim();\n\t\ttrimLeft.shim();\n\t\ttrimRight.shim();\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.padEnd.js":
/*!**********************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.padEnd.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.padend */ \"./node_modules/string.prototype.padend/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.padEnd.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.padStart.js":
/*!************************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.padStart.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.padstart */ \"./node_modules/string.prototype.padstart/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.padStart.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.trimLeft.js":
/*!************************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.trimLeft.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.trimleft */ \"./node_modules/string.prototype.trimleft/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.trimLeft.js?");

/***/ }),

/***/ "./node_modules/es7-shim/String.prototype.trimRight.js":
/*!*************************************************************!*\
  !*** ./node_modules/es7-shim/String.prototype.trimRight.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.trimright */ \"./node_modules/string.prototype.trimright/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/String.prototype.trimRight.js?");

/***/ }),

/***/ "./node_modules/es7-shim/es7-shim.js":
/*!*******************************************!*\
  !*** ./node_modules/es7-shim/es7-shim.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*!\n * https://github.com/es-shims/es7-shim\n * @license es7-shim Copyright 2014 by contributors, MIT License\n * see https://github.com/es-shims/es7-shim/blob/master/LICENSE\n */\n\n\n\nvar $Array = __webpack_require__(/*! ./Array */ \"./node_modules/es7-shim/Array.js\");\nvar $Object = __webpack_require__(/*! ./Object */ \"./node_modules/es7-shim/Object.js\");\nvar $String = __webpack_require__(/*! ./String */ \"./node_modules/es7-shim/String.js\");\n\nmodule.exports = {\n\tArray: $Array,\n\tObject: $Object,\n\tString: $String,\n\tshim: function shimES7() {\n\t\t$Array.shim();\n\t\t$Object.shim();\n\t\t$String.shim();\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es7-shim/es7-shim.js?");

/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint no-invalid-this: 1 */\n\nvar ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';\nvar slice = Array.prototype.slice;\nvar toStr = Object.prototype.toString;\nvar funcType = '[object Function]';\n\nmodule.exports = function bind(that) {\n    var target = this;\n    if (typeof target !== 'function' || toStr.call(target) !== funcType) {\n        throw new TypeError(ERROR_MESSAGE + target);\n    }\n    var args = slice.call(arguments, 1);\n\n    var bound;\n    var binder = function () {\n        if (this instanceof bound) {\n            var result = target.apply(\n                this,\n                args.concat(slice.call(arguments))\n            );\n            if (Object(result) === result) {\n                return result;\n            }\n            return this;\n        } else {\n            return target.apply(\n                that,\n                args.concat(slice.call(arguments))\n            );\n        }\n    };\n\n    var boundLength = Math.max(0, target.length - args.length);\n    var boundArgs = [];\n    for (var i = 0; i < boundLength; i++) {\n        boundArgs.push('$' + i);\n    }\n\n    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);\n\n    if (target.prototype) {\n        var Empty = function Empty() {};\n        Empty.prototype = target.prototype;\n        bound.prototype = new Empty();\n        Empty.prototype = null;\n    }\n\n    return bound;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/function-bind/implementation.js?");

/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/function-bind/implementation.js\");\n\nmodule.exports = Function.prototype.bind || implementation;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/function-bind/index.js?");

/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar undefined;\n\nvar $SyntaxError = SyntaxError;\nvar $Function = Function;\nvar $TypeError = TypeError;\n\n// eslint-disable-next-line consistent-return\nvar getEvalledConstructor = function (expressionSyntax) {\n\ttry {\n\t\treturn $Function('\"use strict\"; return (' + expressionSyntax + ').constructor;')();\n\t} catch (e) {}\n};\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nif ($gOPD) {\n\ttry {\n\t\t$gOPD({}, '');\n\t} catch (e) {\n\t\t$gOPD = null; // this is IE 8, which has a broken gOPD\n\t}\n}\n\nvar throwTypeError = function () {\n\tthrow new $TypeError();\n};\nvar ThrowTypeError = $gOPD\n\t? (function () {\n\t\ttry {\n\t\t\t// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties\n\t\t\targuments.callee; // IE 8 does not throw here\n\t\t\treturn throwTypeError;\n\t\t} catch (calleeThrows) {\n\t\t\ttry {\n\t\t\t\t// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')\n\t\t\t\treturn $gOPD(arguments, 'callee').get;\n\t\t\t} catch (gOPDthrows) {\n\t\t\t\treturn throwTypeError;\n\t\t\t}\n\t\t}\n\t}())\n\t: throwTypeError;\n\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\nvar hasProto = __webpack_require__(/*! has-proto */ \"./node_modules/has-proto/index.js\")();\n\nvar getProto = Object.getPrototypeOf || (\n\thasProto\n\t\t? function (x) { return x.__proto__; } // eslint-disable-line no-proto\n\t\t: null\n);\n\nvar needsEval = {};\n\nvar TypedArray = typeof Uint8Array === 'undefined' || !getProto ? undefined : getProto(Uint8Array);\n\nvar INTRINSICS = {\n\t'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,\n\t'%Array%': Array,\n\t'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,\n\t'%ArrayIteratorPrototype%': hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,\n\t'%AsyncFromSyncIteratorPrototype%': undefined,\n\t'%AsyncFunction%': needsEval,\n\t'%AsyncGenerator%': needsEval,\n\t'%AsyncGeneratorFunction%': needsEval,\n\t'%AsyncIteratorPrototype%': needsEval,\n\t'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,\n\t'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,\n\t'%BigInt64Array%': typeof BigInt64Array === 'undefined' ? undefined : BigInt64Array,\n\t'%BigUint64Array%': typeof BigUint64Array === 'undefined' ? undefined : BigUint64Array,\n\t'%Boolean%': Boolean,\n\t'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,\n\t'%Date%': Date,\n\t'%decodeURI%': decodeURI,\n\t'%decodeURIComponent%': decodeURIComponent,\n\t'%encodeURI%': encodeURI,\n\t'%encodeURIComponent%': encodeURIComponent,\n\t'%Error%': Error,\n\t'%eval%': eval, // eslint-disable-line no-eval\n\t'%EvalError%': EvalError,\n\t'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,\n\t'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,\n\t'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,\n\t'%Function%': $Function,\n\t'%GeneratorFunction%': needsEval,\n\t'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,\n\t'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,\n\t'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,\n\t'%isFinite%': isFinite,\n\t'%isNaN%': isNaN,\n\t'%IteratorPrototype%': hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,\n\t'%JSON%': typeof JSON === 'object' ? JSON : undefined,\n\t'%Map%': typeof Map === 'undefined' ? undefined : Map,\n\t'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),\n\t'%Math%': Math,\n\t'%Number%': Number,\n\t'%Object%': Object,\n\t'%parseFloat%': parseFloat,\n\t'%parseInt%': parseInt,\n\t'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,\n\t'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,\n\t'%RangeError%': RangeError,\n\t'%ReferenceError%': ReferenceError,\n\t'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,\n\t'%RegExp%': RegExp,\n\t'%Set%': typeof Set === 'undefined' ? undefined : Set,\n\t'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),\n\t'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,\n\t'%String%': String,\n\t'%StringIteratorPrototype%': hasSymbols && getProto ? getProto(''[Symbol.iterator]()) : undefined,\n\t'%Symbol%': hasSymbols ? Symbol : undefined,\n\t'%SyntaxError%': $SyntaxError,\n\t'%ThrowTypeError%': ThrowTypeError,\n\t'%TypedArray%': TypedArray,\n\t'%TypeError%': $TypeError,\n\t'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,\n\t'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,\n\t'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,\n\t'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,\n\t'%URIError%': URIError,\n\t'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,\n\t'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,\n\t'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet\n};\n\nif (getProto) {\n\ttry {\n\t\tnull.error; // eslint-disable-line no-unused-expressions\n\t} catch (e) {\n\t\t// https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229\n\t\tvar errorProto = getProto(getProto(e));\n\t\tINTRINSICS['%Error.prototype%'] = errorProto;\n\t}\n}\n\nvar doEval = function doEval(name) {\n\tvar value;\n\tif (name === '%AsyncFunction%') {\n\t\tvalue = getEvalledConstructor('async function () {}');\n\t} else if (name === '%GeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('function* () {}');\n\t} else if (name === '%AsyncGeneratorFunction%') {\n\t\tvalue = getEvalledConstructor('async function* () {}');\n\t} else if (name === '%AsyncGenerator%') {\n\t\tvar fn = doEval('%AsyncGeneratorFunction%');\n\t\tif (fn) {\n\t\t\tvalue = fn.prototype;\n\t\t}\n\t} else if (name === '%AsyncIteratorPrototype%') {\n\t\tvar gen = doEval('%AsyncGenerator%');\n\t\tif (gen && getProto) {\n\t\t\tvalue = getProto(gen.prototype);\n\t\t}\n\t}\n\n\tINTRINSICS[name] = value;\n\n\treturn value;\n};\n\nvar LEGACY_ALIASES = {\n\t'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],\n\t'%ArrayPrototype%': ['Array', 'prototype'],\n\t'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],\n\t'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],\n\t'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],\n\t'%ArrayProto_values%': ['Array', 'prototype', 'values'],\n\t'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],\n\t'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],\n\t'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],\n\t'%BooleanPrototype%': ['Boolean', 'prototype'],\n\t'%DataViewPrototype%': ['DataView', 'prototype'],\n\t'%DatePrototype%': ['Date', 'prototype'],\n\t'%ErrorPrototype%': ['Error', 'prototype'],\n\t'%EvalErrorPrototype%': ['EvalError', 'prototype'],\n\t'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],\n\t'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],\n\t'%FunctionPrototype%': ['Function', 'prototype'],\n\t'%Generator%': ['GeneratorFunction', 'prototype'],\n\t'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],\n\t'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],\n\t'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],\n\t'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],\n\t'%JSONParse%': ['JSON', 'parse'],\n\t'%JSONStringify%': ['JSON', 'stringify'],\n\t'%MapPrototype%': ['Map', 'prototype'],\n\t'%NumberPrototype%': ['Number', 'prototype'],\n\t'%ObjectPrototype%': ['Object', 'prototype'],\n\t'%ObjProto_toString%': ['Object', 'prototype', 'toString'],\n\t'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],\n\t'%PromisePrototype%': ['Promise', 'prototype'],\n\t'%PromiseProto_then%': ['Promise', 'prototype', 'then'],\n\t'%Promise_all%': ['Promise', 'all'],\n\t'%Promise_reject%': ['Promise', 'reject'],\n\t'%Promise_resolve%': ['Promise', 'resolve'],\n\t'%RangeErrorPrototype%': ['RangeError', 'prototype'],\n\t'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],\n\t'%RegExpPrototype%': ['RegExp', 'prototype'],\n\t'%SetPrototype%': ['Set', 'prototype'],\n\t'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],\n\t'%StringPrototype%': ['String', 'prototype'],\n\t'%SymbolPrototype%': ['Symbol', 'prototype'],\n\t'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],\n\t'%TypedArrayPrototype%': ['TypedArray', 'prototype'],\n\t'%TypeErrorPrototype%': ['TypeError', 'prototype'],\n\t'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],\n\t'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],\n\t'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],\n\t'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],\n\t'%URIErrorPrototype%': ['URIError', 'prototype'],\n\t'%WeakMapPrototype%': ['WeakMap', 'prototype'],\n\t'%WeakSetPrototype%': ['WeakSet', 'prototype']\n};\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\nvar hasOwn = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar $concat = bind.call(Function.call, Array.prototype.concat);\nvar $spliceApply = bind.call(Function.apply, Array.prototype.splice);\nvar $replace = bind.call(Function.call, String.prototype.replace);\nvar $strSlice = bind.call(Function.call, String.prototype.slice);\nvar $exec = bind.call(Function.call, RegExp.prototype.exec);\n\n/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */\nvar rePropName = /[^%.[\\]]+|\\[(?:(-?\\d+(?:\\.\\d+)?)|([\"'])((?:(?!\\2)[^\\\\]|\\\\.)*?)\\2)\\]|(?=(?:\\.|\\[\\])(?:\\.|\\[\\]|%$))/g;\nvar reEscapeChar = /\\\\(\\\\)?/g; /** Used to match backslashes in property paths. */\nvar stringToPath = function stringToPath(string) {\n\tvar first = $strSlice(string, 0, 1);\n\tvar last = $strSlice(string, -1);\n\tif (first === '%' && last !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected closing `%`');\n\t} else if (last === '%' && first !== '%') {\n\t\tthrow new $SyntaxError('invalid intrinsic syntax, expected opening `%`');\n\t}\n\tvar result = [];\n\t$replace(string, rePropName, function (match, number, quote, subString) {\n\t\tresult[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;\n\t});\n\treturn result;\n};\n/* end adaptation */\n\nvar getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {\n\tvar intrinsicName = name;\n\tvar alias;\n\tif (hasOwn(LEGACY_ALIASES, intrinsicName)) {\n\t\talias = LEGACY_ALIASES[intrinsicName];\n\t\tintrinsicName = '%' + alias[0] + '%';\n\t}\n\n\tif (hasOwn(INTRINSICS, intrinsicName)) {\n\t\tvar value = INTRINSICS[intrinsicName];\n\t\tif (value === needsEval) {\n\t\t\tvalue = doEval(intrinsicName);\n\t\t}\n\t\tif (typeof value === 'undefined' && !allowMissing) {\n\t\t\tthrow new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');\n\t\t}\n\n\t\treturn {\n\t\t\talias: alias,\n\t\t\tname: intrinsicName,\n\t\t\tvalue: value\n\t\t};\n\t}\n\n\tthrow new $SyntaxError('intrinsic ' + name + ' does not exist!');\n};\n\nmodule.exports = function GetIntrinsic(name, allowMissing) {\n\tif (typeof name !== 'string' || name.length === 0) {\n\t\tthrow new $TypeError('intrinsic name must be a non-empty string');\n\t}\n\tif (arguments.length > 1 && typeof allowMissing !== 'boolean') {\n\t\tthrow new $TypeError('\"allowMissing\" argument must be a boolean');\n\t}\n\n\tif ($exec(/^%?[^%]*%?$/, name) === null) {\n\t\tthrow new $SyntaxError('`%` may not be present anywhere but at the beginning and end of the intrinsic name');\n\t}\n\tvar parts = stringToPath(name);\n\tvar intrinsicBaseName = parts.length > 0 ? parts[0] : '';\n\n\tvar intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);\n\tvar intrinsicRealName = intrinsic.name;\n\tvar value = intrinsic.value;\n\tvar skipFurtherCaching = false;\n\n\tvar alias = intrinsic.alias;\n\tif (alias) {\n\t\tintrinsicBaseName = alias[0];\n\t\t$spliceApply(parts, $concat([0, 1], alias));\n\t}\n\n\tfor (var i = 1, isOwn = true; i < parts.length; i += 1) {\n\t\tvar part = parts[i];\n\t\tvar first = $strSlice(part, 0, 1);\n\t\tvar last = $strSlice(part, -1);\n\t\tif (\n\t\t\t(\n\t\t\t\t(first === '\"' || first === \"'\" || first === '`')\n\t\t\t\t|| (last === '\"' || last === \"'\" || last === '`')\n\t\t\t)\n\t\t\t&& first !== last\n\t\t) {\n\t\t\tthrow new $SyntaxError('property names with quotes must have matching quotes');\n\t\t}\n\t\tif (part === 'constructor' || !isOwn) {\n\t\t\tskipFurtherCaching = true;\n\t\t}\n\n\t\tintrinsicBaseName += '.' + part;\n\t\tintrinsicRealName = '%' + intrinsicBaseName + '%';\n\n\t\tif (hasOwn(INTRINSICS, intrinsicRealName)) {\n\t\t\tvalue = INTRINSICS[intrinsicRealName];\n\t\t} else if (value != null) {\n\t\t\tif (!(part in value)) {\n\t\t\t\tif (!allowMissing) {\n\t\t\t\t\tthrow new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');\n\t\t\t\t}\n\t\t\t\treturn void undefined;\n\t\t\t}\n\t\t\tif ($gOPD && (i + 1) >= parts.length) {\n\t\t\t\tvar desc = $gOPD(value, part);\n\t\t\t\tisOwn = !!desc;\n\n\t\t\t\t// By convention, when a data property is converted to an accessor\n\t\t\t\t// property to emulate a data property that does not suffer from\n\t\t\t\t// the override mistake, that accessor's getter is marked with\n\t\t\t\t// an `originalValue` property. Here, when we detect this, we\n\t\t\t\t// uphold the illusion by pretending to see that original data\n\t\t\t\t// property, i.e., returning the value rather than the getter\n\t\t\t\t// itself.\n\t\t\t\tif (isOwn && 'get' in desc && !('originalValue' in desc.get)) {\n\t\t\t\t\tvalue = desc.get;\n\t\t\t\t} else {\n\t\t\t\t\tvalue = value[part];\n\t\t\t\t}\n\t\t\t} else {\n\t\t\t\tisOwn = hasOwn(value, part);\n\t\t\t\tvalue = value[part];\n\t\t\t}\n\n\t\t\tif (isOwn && !skipFurtherCaching) {\n\t\t\t\tINTRINSICS[intrinsicRealName] = value;\n\t\t\t}\n\t\t}\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/get-intrinsic/index.js?");

/***/ }),

/***/ "./node_modules/gopd/index.js":
/*!************************************!*\
  !*** ./node_modules/gopd/index.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);\n\nif ($gOPD) {\n\ttry {\n\t\t$gOPD([], 'length');\n\t} catch (e) {\n\t\t// IE 8 has a broken gOPD\n\t\t$gOPD = null;\n\t}\n}\n\nmodule.exports = $gOPD;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/gopd/index.js?");

/***/ }),

/***/ "./node_modules/has-property-descriptors/index.js":
/*!********************************************************!*\
  !*** ./node_modules/has-property-descriptors/index.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasPropertyDescriptors = function hasPropertyDescriptors() {\n\tif ($defineProperty) {\n\t\ttry {\n\t\t\t$defineProperty({}, 'a', { value: 1 });\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t\t// IE 8 has a broken defineProperty\n\t\t\treturn false;\n\t\t}\n\t}\n\treturn false;\n};\n\nhasPropertyDescriptors.hasArrayLengthDefineBug = function hasArrayLengthDefineBug() {\n\t// node v0.6 has a bug where array lengths can be Set but not Defined\n\tif (!hasPropertyDescriptors()) {\n\t\treturn null;\n\t}\n\ttry {\n\t\treturn $defineProperty([], 'length', { value: 1 }).length !== 1;\n\t} catch (e) {\n\t\t// In Firefox 4-22, defining length on an array throws an exception.\n\t\treturn true;\n\t}\n};\n\nmodule.exports = hasPropertyDescriptors;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has-property-descriptors/index.js?");

/***/ }),

/***/ "./node_modules/has-proto/index.js":
/*!*****************************************!*\
  !*** ./node_modules/has-proto/index.js ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar test = {\n\tfoo: {}\n};\n\nvar $Object = Object;\n\nmodule.exports = function hasProto() {\n\treturn { __proto__: test }.foo === test.foo && !({ __proto__: null } instanceof $Object);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has-proto/index.js?");

/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar origSymbol = typeof Symbol !== 'undefined' && Symbol;\nvar hasSymbolSham = __webpack_require__(/*! ./shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasNativeSymbols() {\n\tif (typeof origSymbol !== 'function') { return false; }\n\tif (typeof Symbol !== 'function') { return false; }\n\tif (typeof origSymbol('foo') !== 'symbol') { return false; }\n\tif (typeof Symbol('bar') !== 'symbol') { return false; }\n\n\treturn hasSymbolSham();\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has-symbols/index.js?");

/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* eslint complexity: [2, 18], max-statements: [2, 33] */\nmodule.exports = function hasSymbols() {\n\tif (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }\n\tif (typeof Symbol.iterator === 'symbol') { return true; }\n\n\tvar obj = {};\n\tvar sym = Symbol('test');\n\tvar symObj = Object(sym);\n\tif (typeof sym === 'string') { return false; }\n\n\tif (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }\n\tif (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }\n\n\t// temp disabled per https://github.com/ljharb/object.assign/issues/17\n\t// if (sym instanceof Symbol) { return false; }\n\t// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4\n\t// if (!(symObj instanceof Symbol)) { return false; }\n\n\t// if (typeof Symbol.prototype.toString !== 'function') { return false; }\n\t// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }\n\n\tvar symVal = 42;\n\tobj[sym] = symVal;\n\tfor (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop\n\tif (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }\n\n\tif (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }\n\n\tvar syms = Object.getOwnPropertySymbols(obj);\n\tif (syms.length !== 1 || syms[0] !== sym) { return false; }\n\n\tif (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }\n\n\tif (typeof Object.getOwnPropertyDescriptor === 'function') {\n\t\tvar descriptor = Object.getOwnPropertyDescriptor(obj, sym);\n\t\tif (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has-symbols/shams.js?");

/***/ }),

/***/ "./node_modules/has-tostringtag/shams.js":
/*!***********************************************!*\
  !*** ./node_modules/has-tostringtag/shams.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\");\n\nmodule.exports = function hasToStringTagShams() {\n\treturn hasSymbols() && !!Symbol.toStringTag;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has-tostringtag/shams.js?");

/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar bind = __webpack_require__(/*! function-bind */ \"./node_modules/function-bind/index.js\");\n\nmodule.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/has/src/index.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash.js":
/*!******************************************!*\
  !*** ./node_modules/hash.js/lib/hash.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("var hash = exports;\n\nhash.utils = __webpack_require__(/*! ./hash/utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nhash.common = __webpack_require__(/*! ./hash/common */ \"./node_modules/hash.js/lib/hash/common.js\");\nhash.sha = __webpack_require__(/*! ./hash/sha */ \"./node_modules/hash.js/lib/hash/sha.js\");\nhash.ripemd = __webpack_require__(/*! ./hash/ripemd */ \"./node_modules/hash.js/lib/hash/ripemd.js\");\nhash.hmac = __webpack_require__(/*! ./hash/hmac */ \"./node_modules/hash.js/lib/hash/hmac.js\");\n\n// Proxy hash functions to the main object\nhash.sha1 = hash.sha.sha1;\nhash.sha256 = hash.sha.sha256;\nhash.sha224 = hash.sha.sha224;\nhash.sha384 = hash.sha.sha384;\nhash.sha512 = hash.sha.sha512;\nhash.ripemd160 = hash.ripemd.ripemd160;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/common.js":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/common.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"./node_modules/minimalistic-assert/index.js\");\n\nfunction BlockHash() {\n  this.pending = null;\n  this.pendingTotal = 0;\n  this.blockSize = this.constructor.blockSize;\n  this.outSize = this.constructor.outSize;\n  this.hmacStrength = this.constructor.hmacStrength;\n  this.padLength = this.constructor.padLength / 8;\n  this.endian = 'big';\n\n  this._delta8 = this.blockSize / 8;\n  this._delta32 = this.blockSize / 32;\n}\nexports.BlockHash = BlockHash;\n\nBlockHash.prototype.update = function update(msg, enc) {\n  // Convert message to array, pad it, and join into 32bit blocks\n  msg = utils.toArray(msg, enc);\n  if (!this.pending)\n    this.pending = msg;\n  else\n    this.pending = this.pending.concat(msg);\n  this.pendingTotal += msg.length;\n\n  // Enough data, try updating\n  if (this.pending.length >= this._delta8) {\n    msg = this.pending;\n\n    // Process pending data in blocks\n    var r = msg.length % this._delta8;\n    this.pending = msg.slice(msg.length - r, msg.length);\n    if (this.pending.length === 0)\n      this.pending = null;\n\n    msg = utils.join32(msg, 0, msg.length - r, this.endian);\n    for (var i = 0; i < msg.length; i += this._delta32)\n      this._update(msg, i, i + this._delta32);\n  }\n\n  return this;\n};\n\nBlockHash.prototype.digest = function digest(enc) {\n  this.update(this._pad());\n  assert(this.pending === null);\n\n  return this._digest(enc);\n};\n\nBlockHash.prototype._pad = function pad() {\n  var len = this.pendingTotal;\n  var bytes = this._delta8;\n  var k = bytes - ((len + this.padLength) % bytes);\n  var res = new Array(k + this.padLength);\n  res[0] = 0x80;\n  for (var i = 1; i < k; i++)\n    res[i] = 0;\n\n  // Append length\n  len <<= 3;\n  if (this.endian === 'big') {\n    for (var t = 8; t < this.padLength; t++)\n      res[i++] = 0;\n\n    res[i++] = 0;\n    res[i++] = 0;\n    res[i++] = 0;\n    res[i++] = 0;\n    res[i++] = (len >>> 24) & 0xff;\n    res[i++] = (len >>> 16) & 0xff;\n    res[i++] = (len >>> 8) & 0xff;\n    res[i++] = len & 0xff;\n  } else {\n    res[i++] = len & 0xff;\n    res[i++] = (len >>> 8) & 0xff;\n    res[i++] = (len >>> 16) & 0xff;\n    res[i++] = (len >>> 24) & 0xff;\n    res[i++] = 0;\n    res[i++] = 0;\n    res[i++] = 0;\n    res[i++] = 0;\n\n    for (t = 8; t < this.padLength; t++)\n      res[i++] = 0;\n  }\n\n  return res;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/common.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/hmac.js":
/*!***********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/hmac.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"./node_modules/minimalistic-assert/index.js\");\n\nfunction Hmac(hash, key, enc) {\n  if (!(this instanceof Hmac))\n    return new Hmac(hash, key, enc);\n  this.Hash = hash;\n  this.blockSize = hash.blockSize / 8;\n  this.outSize = hash.outSize / 8;\n  this.inner = null;\n  this.outer = null;\n\n  this._init(utils.toArray(key, enc));\n}\nmodule.exports = Hmac;\n\nHmac.prototype._init = function init(key) {\n  // Shorten key, if needed\n  if (key.length > this.blockSize)\n    key = new this.Hash().update(key).digest();\n  assert(key.length <= this.blockSize);\n\n  // Add padding to key\n  for (var i = key.length; i < this.blockSize; i++)\n    key.push(0);\n\n  for (i = 0; i < key.length; i++)\n    key[i] ^= 0x36;\n  this.inner = new this.Hash().update(key);\n\n  // 0x36 ^ 0x5c = 0x6a\n  for (i = 0; i < key.length; i++)\n    key[i] ^= 0x6a;\n  this.outer = new this.Hash().update(key);\n};\n\nHmac.prototype.update = function update(msg, enc) {\n  this.inner.update(msg, enc);\n  return this;\n};\n\nHmac.prototype.digest = function digest(enc) {\n  this.outer.update(this.inner.digest());\n  return this.outer.digest(enc);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/hmac.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/ripemd.js":
/*!*************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/ripemd.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ./utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar common = __webpack_require__(/*! ./common */ \"./node_modules/hash.js/lib/hash/common.js\");\n\nvar rotl32 = utils.rotl32;\nvar sum32 = utils.sum32;\nvar sum32_3 = utils.sum32_3;\nvar sum32_4 = utils.sum32_4;\nvar BlockHash = common.BlockHash;\n\nfunction RIPEMD160() {\n  if (!(this instanceof RIPEMD160))\n    return new RIPEMD160();\n\n  BlockHash.call(this);\n\n  this.h = [ 0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0 ];\n  this.endian = 'little';\n}\nutils.inherits(RIPEMD160, BlockHash);\nexports.ripemd160 = RIPEMD160;\n\nRIPEMD160.blockSize = 512;\nRIPEMD160.outSize = 160;\nRIPEMD160.hmacStrength = 192;\nRIPEMD160.padLength = 64;\n\nRIPEMD160.prototype._update = function update(msg, start) {\n  var A = this.h[0];\n  var B = this.h[1];\n  var C = this.h[2];\n  var D = this.h[3];\n  var E = this.h[4];\n  var Ah = A;\n  var Bh = B;\n  var Ch = C;\n  var Dh = D;\n  var Eh = E;\n  for (var j = 0; j < 80; j++) {\n    var T = sum32(\n      rotl32(\n        sum32_4(A, f(j, B, C, D), msg[r[j] + start], K(j)),\n        s[j]),\n      E);\n    A = E;\n    E = D;\n    D = rotl32(C, 10);\n    C = B;\n    B = T;\n    T = sum32(\n      rotl32(\n        sum32_4(Ah, f(79 - j, Bh, Ch, Dh), msg[rh[j] + start], Kh(j)),\n        sh[j]),\n      Eh);\n    Ah = Eh;\n    Eh = Dh;\n    Dh = rotl32(Ch, 10);\n    Ch = Bh;\n    Bh = T;\n  }\n  T = sum32_3(this.h[1], C, Dh);\n  this.h[1] = sum32_3(this.h[2], D, Eh);\n  this.h[2] = sum32_3(this.h[3], E, Ah);\n  this.h[3] = sum32_3(this.h[4], A, Bh);\n  this.h[4] = sum32_3(this.h[0], B, Ch);\n  this.h[0] = T;\n};\n\nRIPEMD160.prototype._digest = function digest(enc) {\n  if (enc === 'hex')\n    return utils.toHex32(this.h, 'little');\n  else\n    return utils.split32(this.h, 'little');\n};\n\nfunction f(j, x, y, z) {\n  if (j <= 15)\n    return x ^ y ^ z;\n  else if (j <= 31)\n    return (x & y) | ((~x) & z);\n  else if (j <= 47)\n    return (x | (~y)) ^ z;\n  else if (j <= 63)\n    return (x & z) | (y & (~z));\n  else\n    return x ^ (y | (~z));\n}\n\nfunction K(j) {\n  if (j <= 15)\n    return 0x00000000;\n  else if (j <= 31)\n    return 0x5a827999;\n  else if (j <= 47)\n    return 0x6ed9eba1;\n  else if (j <= 63)\n    return 0x8f1bbcdc;\n  else\n    return 0xa953fd4e;\n}\n\nfunction Kh(j) {\n  if (j <= 15)\n    return 0x50a28be6;\n  else if (j <= 31)\n    return 0x5c4dd124;\n  else if (j <= 47)\n    return 0x6d703ef3;\n  else if (j <= 63)\n    return 0x7a6d76e9;\n  else\n    return 0x00000000;\n}\n\nvar r = [\n  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,\n  7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8,\n  3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12,\n  1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2,\n  4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13\n];\n\nvar rh = [\n  5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12,\n  6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2,\n  15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13,\n  8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14,\n  12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11\n];\n\nvar s = [\n  11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8,\n  7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12,\n  11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5,\n  11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12,\n  9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6\n];\n\nvar sh = [\n  8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6,\n  9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11,\n  9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5,\n  15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8,\n  8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11\n];\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/ripemd.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha.js":
/*!**********************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nexports.sha1 = __webpack_require__(/*! ./sha/1 */ \"./node_modules/hash.js/lib/hash/sha/1.js\");\nexports.sha224 = __webpack_require__(/*! ./sha/224 */ \"./node_modules/hash.js/lib/hash/sha/224.js\");\nexports.sha256 = __webpack_require__(/*! ./sha/256 */ \"./node_modules/hash.js/lib/hash/sha/256.js\");\nexports.sha384 = __webpack_require__(/*! ./sha/384 */ \"./node_modules/hash.js/lib/hash/sha/384.js\");\nexports.sha512 = __webpack_require__(/*! ./sha/512 */ \"./node_modules/hash.js/lib/hash/sha/512.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/1.js":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/1.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar common = __webpack_require__(/*! ../common */ \"./node_modules/hash.js/lib/hash/common.js\");\nvar shaCommon = __webpack_require__(/*! ./common */ \"./node_modules/hash.js/lib/hash/sha/common.js\");\n\nvar rotl32 = utils.rotl32;\nvar sum32 = utils.sum32;\nvar sum32_5 = utils.sum32_5;\nvar ft_1 = shaCommon.ft_1;\nvar BlockHash = common.BlockHash;\n\nvar sha1_K = [\n  0x5A827999, 0x6ED9EBA1,\n  0x8F1BBCDC, 0xCA62C1D6\n];\n\nfunction SHA1() {\n  if (!(this instanceof SHA1))\n    return new SHA1();\n\n  BlockHash.call(this);\n  this.h = [\n    0x67452301, 0xefcdab89, 0x98badcfe,\n    0x10325476, 0xc3d2e1f0 ];\n  this.W = new Array(80);\n}\n\nutils.inherits(SHA1, BlockHash);\nmodule.exports = SHA1;\n\nSHA1.blockSize = 512;\nSHA1.outSize = 160;\nSHA1.hmacStrength = 80;\nSHA1.padLength = 64;\n\nSHA1.prototype._update = function _update(msg, start) {\n  var W = this.W;\n\n  for (var i = 0; i < 16; i++)\n    W[i] = msg[start + i];\n\n  for(; i < W.length; i++)\n    W[i] = rotl32(W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16], 1);\n\n  var a = this.h[0];\n  var b = this.h[1];\n  var c = this.h[2];\n  var d = this.h[3];\n  var e = this.h[4];\n\n  for (i = 0; i < W.length; i++) {\n    var s = ~~(i / 20);\n    var t = sum32_5(rotl32(a, 5), ft_1(s, b, c, d), e, W[i], sha1_K[s]);\n    e = d;\n    d = c;\n    c = rotl32(b, 30);\n    b = a;\n    a = t;\n  }\n\n  this.h[0] = sum32(this.h[0], a);\n  this.h[1] = sum32(this.h[1], b);\n  this.h[2] = sum32(this.h[2], c);\n  this.h[3] = sum32(this.h[3], d);\n  this.h[4] = sum32(this.h[4], e);\n};\n\nSHA1.prototype._digest = function digest(enc) {\n  if (enc === 'hex')\n    return utils.toHex32(this.h, 'big');\n  else\n    return utils.split32(this.h, 'big');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/1.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/224.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/224.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar SHA256 = __webpack_require__(/*! ./256 */ \"./node_modules/hash.js/lib/hash/sha/256.js\");\n\nfunction SHA224() {\n  if (!(this instanceof SHA224))\n    return new SHA224();\n\n  SHA256.call(this);\n  this.h = [\n    0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,\n    0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4 ];\n}\nutils.inherits(SHA224, SHA256);\nmodule.exports = SHA224;\n\nSHA224.blockSize = 512;\nSHA224.outSize = 224;\nSHA224.hmacStrength = 192;\nSHA224.padLength = 64;\n\nSHA224.prototype._digest = function digest(enc) {\n  // Just truncate output\n  if (enc === 'hex')\n    return utils.toHex32(this.h.slice(0, 7), 'big');\n  else\n    return utils.split32(this.h.slice(0, 7), 'big');\n};\n\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/224.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/256.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/256.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar common = __webpack_require__(/*! ../common */ \"./node_modules/hash.js/lib/hash/common.js\");\nvar shaCommon = __webpack_require__(/*! ./common */ \"./node_modules/hash.js/lib/hash/sha/common.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"./node_modules/minimalistic-assert/index.js\");\n\nvar sum32 = utils.sum32;\nvar sum32_4 = utils.sum32_4;\nvar sum32_5 = utils.sum32_5;\nvar ch32 = shaCommon.ch32;\nvar maj32 = shaCommon.maj32;\nvar s0_256 = shaCommon.s0_256;\nvar s1_256 = shaCommon.s1_256;\nvar g0_256 = shaCommon.g0_256;\nvar g1_256 = shaCommon.g1_256;\n\nvar BlockHash = common.BlockHash;\n\nvar sha256_K = [\n  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,\n  0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,\n  0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3,\n  0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,\n  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,\n  0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,\n  0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,\n  0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,\n  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13,\n  0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,\n  0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3,\n  0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,\n  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,\n  0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,\n  0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,\n  0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2\n];\n\nfunction SHA256() {\n  if (!(this instanceof SHA256))\n    return new SHA256();\n\n  BlockHash.call(this);\n  this.h = [\n    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,\n    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19\n  ];\n  this.k = sha256_K;\n  this.W = new Array(64);\n}\nutils.inherits(SHA256, BlockHash);\nmodule.exports = SHA256;\n\nSHA256.blockSize = 512;\nSHA256.outSize = 256;\nSHA256.hmacStrength = 192;\nSHA256.padLength = 64;\n\nSHA256.prototype._update = function _update(msg, start) {\n  var W = this.W;\n\n  for (var i = 0; i < 16; i++)\n    W[i] = msg[start + i];\n  for (; i < W.length; i++)\n    W[i] = sum32_4(g1_256(W[i - 2]), W[i - 7], g0_256(W[i - 15]), W[i - 16]);\n\n  var a = this.h[0];\n  var b = this.h[1];\n  var c = this.h[2];\n  var d = this.h[3];\n  var e = this.h[4];\n  var f = this.h[5];\n  var g = this.h[6];\n  var h = this.h[7];\n\n  assert(this.k.length === W.length);\n  for (i = 0; i < W.length; i++) {\n    var T1 = sum32_5(h, s1_256(e), ch32(e, f, g), this.k[i], W[i]);\n    var T2 = sum32(s0_256(a), maj32(a, b, c));\n    h = g;\n    g = f;\n    f = e;\n    e = sum32(d, T1);\n    d = c;\n    c = b;\n    b = a;\n    a = sum32(T1, T2);\n  }\n\n  this.h[0] = sum32(this.h[0], a);\n  this.h[1] = sum32(this.h[1], b);\n  this.h[2] = sum32(this.h[2], c);\n  this.h[3] = sum32(this.h[3], d);\n  this.h[4] = sum32(this.h[4], e);\n  this.h[5] = sum32(this.h[5], f);\n  this.h[6] = sum32(this.h[6], g);\n  this.h[7] = sum32(this.h[7], h);\n};\n\nSHA256.prototype._digest = function digest(enc) {\n  if (enc === 'hex')\n    return utils.toHex32(this.h, 'big');\n  else\n    return utils.split32(this.h, 'big');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/256.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/384.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/384.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\n\nvar SHA512 = __webpack_require__(/*! ./512 */ \"./node_modules/hash.js/lib/hash/sha/512.js\");\n\nfunction SHA384() {\n  if (!(this instanceof SHA384))\n    return new SHA384();\n\n  SHA512.call(this);\n  this.h = [\n    0xcbbb9d5d, 0xc1059ed8,\n    0x629a292a, 0x367cd507,\n    0x9159015a, 0x3070dd17,\n    0x152fecd8, 0xf70e5939,\n    0x67332667, 0xffc00b31,\n    0x8eb44a87, 0x68581511,\n    0xdb0c2e0d, 0x64f98fa7,\n    0x47b5481d, 0xbefa4fa4 ];\n}\nutils.inherits(SHA384, SHA512);\nmodule.exports = SHA384;\n\nSHA384.blockSize = 1024;\nSHA384.outSize = 384;\nSHA384.hmacStrength = 192;\nSHA384.padLength = 128;\n\nSHA384.prototype._digest = function digest(enc) {\n  if (enc === 'hex')\n    return utils.toHex32(this.h.slice(0, 12), 'big');\n  else\n    return utils.split32(this.h.slice(0, 12), 'big');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/384.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/512.js":
/*!**************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/512.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar common = __webpack_require__(/*! ../common */ \"./node_modules/hash.js/lib/hash/common.js\");\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"./node_modules/minimalistic-assert/index.js\");\n\nvar rotr64_hi = utils.rotr64_hi;\nvar rotr64_lo = utils.rotr64_lo;\nvar shr64_hi = utils.shr64_hi;\nvar shr64_lo = utils.shr64_lo;\nvar sum64 = utils.sum64;\nvar sum64_hi = utils.sum64_hi;\nvar sum64_lo = utils.sum64_lo;\nvar sum64_4_hi = utils.sum64_4_hi;\nvar sum64_4_lo = utils.sum64_4_lo;\nvar sum64_5_hi = utils.sum64_5_hi;\nvar sum64_5_lo = utils.sum64_5_lo;\n\nvar BlockHash = common.BlockHash;\n\nvar sha512_K = [\n  0x428a2f98, 0xd728ae22, 0x71374491, 0x23ef65cd,\n  0xb5c0fbcf, 0xec4d3b2f, 0xe9b5dba5, 0x8189dbbc,\n  0x3956c25b, 0xf348b538, 0x59f111f1, 0xb605d019,\n  0x923f82a4, 0xaf194f9b, 0xab1c5ed5, 0xda6d8118,\n  0xd807aa98, 0xa3030242, 0x12835b01, 0x45706fbe,\n  0x243185be, 0x4ee4b28c, 0x550c7dc3, 0xd5ffb4e2,\n  0x72be5d74, 0xf27b896f, 0x80deb1fe, 0x3b1696b1,\n  0x9bdc06a7, 0x25c71235, 0xc19bf174, 0xcf692694,\n  0xe49b69c1, 0x9ef14ad2, 0xefbe4786, 0x384f25e3,\n  0x0fc19dc6, 0x8b8cd5b5, 0x240ca1cc, 0x77ac9c65,\n  0x2de92c6f, 0x592b0275, 0x4a7484aa, 0x6ea6e483,\n  0x5cb0a9dc, 0xbd41fbd4, 0x76f988da, 0x831153b5,\n  0x983e5152, 0xee66dfab, 0xa831c66d, 0x2db43210,\n  0xb00327c8, 0x98fb213f, 0xbf597fc7, 0xbeef0ee4,\n  0xc6e00bf3, 0x3da88fc2, 0xd5a79147, 0x930aa725,\n  0x06ca6351, 0xe003826f, 0x14292967, 0x0a0e6e70,\n  0x27b70a85, 0x46d22ffc, 0x2e1b2138, 0x5c26c926,\n  0x4d2c6dfc, 0x5ac42aed, 0x53380d13, 0x9d95b3df,\n  0x650a7354, 0x8baf63de, 0x766a0abb, 0x3c77b2a8,\n  0x81c2c92e, 0x47edaee6, 0x92722c85, 0x1482353b,\n  0xa2bfe8a1, 0x4cf10364, 0xa81a664b, 0xbc423001,\n  0xc24b8b70, 0xd0f89791, 0xc76c51a3, 0x0654be30,\n  0xd192e819, 0xd6ef5218, 0xd6990624, 0x5565a910,\n  0xf40e3585, 0x5771202a, 0x106aa070, 0x32bbd1b8,\n  0x19a4c116, 0xb8d2d0c8, 0x1e376c08, 0x5141ab53,\n  0x2748774c, 0xdf8eeb99, 0x34b0bcb5, 0xe19b48a8,\n  0x391c0cb3, 0xc5c95a63, 0x4ed8aa4a, 0xe3418acb,\n  0x5b9cca4f, 0x7763e373, 0x682e6ff3, 0xd6b2b8a3,\n  0x748f82ee, 0x5defb2fc, 0x78a5636f, 0x43172f60,\n  0x84c87814, 0xa1f0ab72, 0x8cc70208, 0x1a6439ec,\n  0x90befffa, 0x23631e28, 0xa4506ceb, 0xde82bde9,\n  0xbef9a3f7, 0xb2c67915, 0xc67178f2, 0xe372532b,\n  0xca273ece, 0xea26619c, 0xd186b8c7, 0x21c0c207,\n  0xeada7dd6, 0xcde0eb1e, 0xf57d4f7f, 0xee6ed178,\n  0x06f067aa, 0x72176fba, 0x0a637dc5, 0xa2c898a6,\n  0x113f9804, 0xbef90dae, 0x1b710b35, 0x131c471b,\n  0x28db77f5, 0x23047d84, 0x32caab7b, 0x40c72493,\n  0x3c9ebe0a, 0x15c9bebc, 0x431d67c4, 0x9c100d4c,\n  0x4cc5d4be, 0xcb3e42b6, 0x597f299c, 0xfc657e2a,\n  0x5fcb6fab, 0x3ad6faec, 0x6c44198c, 0x4a475817\n];\n\nfunction SHA512() {\n  if (!(this instanceof SHA512))\n    return new SHA512();\n\n  BlockHash.call(this);\n  this.h = [\n    0x6a09e667, 0xf3bcc908,\n    0xbb67ae85, 0x84caa73b,\n    0x3c6ef372, 0xfe94f82b,\n    0xa54ff53a, 0x5f1d36f1,\n    0x510e527f, 0xade682d1,\n    0x9b05688c, 0x2b3e6c1f,\n    0x1f83d9ab, 0xfb41bd6b,\n    0x5be0cd19, 0x137e2179 ];\n  this.k = sha512_K;\n  this.W = new Array(160);\n}\nutils.inherits(SHA512, BlockHash);\nmodule.exports = SHA512;\n\nSHA512.blockSize = 1024;\nSHA512.outSize = 512;\nSHA512.hmacStrength = 192;\nSHA512.padLength = 128;\n\nSHA512.prototype._prepareBlock = function _prepareBlock(msg, start) {\n  var W = this.W;\n\n  // 32 x 32bit words\n  for (var i = 0; i < 32; i++)\n    W[i] = msg[start + i];\n  for (; i < W.length; i += 2) {\n    var c0_hi = g1_512_hi(W[i - 4], W[i - 3]);  // i - 2\n    var c0_lo = g1_512_lo(W[i - 4], W[i - 3]);\n    var c1_hi = W[i - 14];  // i - 7\n    var c1_lo = W[i - 13];\n    var c2_hi = g0_512_hi(W[i - 30], W[i - 29]);  // i - 15\n    var c2_lo = g0_512_lo(W[i - 30], W[i - 29]);\n    var c3_hi = W[i - 32];  // i - 16\n    var c3_lo = W[i - 31];\n\n    W[i] = sum64_4_hi(\n      c0_hi, c0_lo,\n      c1_hi, c1_lo,\n      c2_hi, c2_lo,\n      c3_hi, c3_lo);\n    W[i + 1] = sum64_4_lo(\n      c0_hi, c0_lo,\n      c1_hi, c1_lo,\n      c2_hi, c2_lo,\n      c3_hi, c3_lo);\n  }\n};\n\nSHA512.prototype._update = function _update(msg, start) {\n  this._prepareBlock(msg, start);\n\n  var W = this.W;\n\n  var ah = this.h[0];\n  var al = this.h[1];\n  var bh = this.h[2];\n  var bl = this.h[3];\n  var ch = this.h[4];\n  var cl = this.h[5];\n  var dh = this.h[6];\n  var dl = this.h[7];\n  var eh = this.h[8];\n  var el = this.h[9];\n  var fh = this.h[10];\n  var fl = this.h[11];\n  var gh = this.h[12];\n  var gl = this.h[13];\n  var hh = this.h[14];\n  var hl = this.h[15];\n\n  assert(this.k.length === W.length);\n  for (var i = 0; i < W.length; i += 2) {\n    var c0_hi = hh;\n    var c0_lo = hl;\n    var c1_hi = s1_512_hi(eh, el);\n    var c1_lo = s1_512_lo(eh, el);\n    var c2_hi = ch64_hi(eh, el, fh, fl, gh, gl);\n    var c2_lo = ch64_lo(eh, el, fh, fl, gh, gl);\n    var c3_hi = this.k[i];\n    var c3_lo = this.k[i + 1];\n    var c4_hi = W[i];\n    var c4_lo = W[i + 1];\n\n    var T1_hi = sum64_5_hi(\n      c0_hi, c0_lo,\n      c1_hi, c1_lo,\n      c2_hi, c2_lo,\n      c3_hi, c3_lo,\n      c4_hi, c4_lo);\n    var T1_lo = sum64_5_lo(\n      c0_hi, c0_lo,\n      c1_hi, c1_lo,\n      c2_hi, c2_lo,\n      c3_hi, c3_lo,\n      c4_hi, c4_lo);\n\n    c0_hi = s0_512_hi(ah, al);\n    c0_lo = s0_512_lo(ah, al);\n    c1_hi = maj64_hi(ah, al, bh, bl, ch, cl);\n    c1_lo = maj64_lo(ah, al, bh, bl, ch, cl);\n\n    var T2_hi = sum64_hi(c0_hi, c0_lo, c1_hi, c1_lo);\n    var T2_lo = sum64_lo(c0_hi, c0_lo, c1_hi, c1_lo);\n\n    hh = gh;\n    hl = gl;\n\n    gh = fh;\n    gl = fl;\n\n    fh = eh;\n    fl = el;\n\n    eh = sum64_hi(dh, dl, T1_hi, T1_lo);\n    el = sum64_lo(dl, dl, T1_hi, T1_lo);\n\n    dh = ch;\n    dl = cl;\n\n    ch = bh;\n    cl = bl;\n\n    bh = ah;\n    bl = al;\n\n    ah = sum64_hi(T1_hi, T1_lo, T2_hi, T2_lo);\n    al = sum64_lo(T1_hi, T1_lo, T2_hi, T2_lo);\n  }\n\n  sum64(this.h, 0, ah, al);\n  sum64(this.h, 2, bh, bl);\n  sum64(this.h, 4, ch, cl);\n  sum64(this.h, 6, dh, dl);\n  sum64(this.h, 8, eh, el);\n  sum64(this.h, 10, fh, fl);\n  sum64(this.h, 12, gh, gl);\n  sum64(this.h, 14, hh, hl);\n};\n\nSHA512.prototype._digest = function digest(enc) {\n  if (enc === 'hex')\n    return utils.toHex32(this.h, 'big');\n  else\n    return utils.split32(this.h, 'big');\n};\n\nfunction ch64_hi(xh, xl, yh, yl, zh) {\n  var r = (xh & yh) ^ ((~xh) & zh);\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction ch64_lo(xh, xl, yh, yl, zh, zl) {\n  var r = (xl & yl) ^ ((~xl) & zl);\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction maj64_hi(xh, xl, yh, yl, zh) {\n  var r = (xh & yh) ^ (xh & zh) ^ (yh & zh);\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction maj64_lo(xh, xl, yh, yl, zh, zl) {\n  var r = (xl & yl) ^ (xl & zl) ^ (yl & zl);\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction s0_512_hi(xh, xl) {\n  var c0_hi = rotr64_hi(xh, xl, 28);\n  var c1_hi = rotr64_hi(xl, xh, 2);  // 34\n  var c2_hi = rotr64_hi(xl, xh, 7);  // 39\n\n  var r = c0_hi ^ c1_hi ^ c2_hi;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction s0_512_lo(xh, xl) {\n  var c0_lo = rotr64_lo(xh, xl, 28);\n  var c1_lo = rotr64_lo(xl, xh, 2);  // 34\n  var c2_lo = rotr64_lo(xl, xh, 7);  // 39\n\n  var r = c0_lo ^ c1_lo ^ c2_lo;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction s1_512_hi(xh, xl) {\n  var c0_hi = rotr64_hi(xh, xl, 14);\n  var c1_hi = rotr64_hi(xh, xl, 18);\n  var c2_hi = rotr64_hi(xl, xh, 9);  // 41\n\n  var r = c0_hi ^ c1_hi ^ c2_hi;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction s1_512_lo(xh, xl) {\n  var c0_lo = rotr64_lo(xh, xl, 14);\n  var c1_lo = rotr64_lo(xh, xl, 18);\n  var c2_lo = rotr64_lo(xl, xh, 9);  // 41\n\n  var r = c0_lo ^ c1_lo ^ c2_lo;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction g0_512_hi(xh, xl) {\n  var c0_hi = rotr64_hi(xh, xl, 1);\n  var c1_hi = rotr64_hi(xh, xl, 8);\n  var c2_hi = shr64_hi(xh, xl, 7);\n\n  var r = c0_hi ^ c1_hi ^ c2_hi;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction g0_512_lo(xh, xl) {\n  var c0_lo = rotr64_lo(xh, xl, 1);\n  var c1_lo = rotr64_lo(xh, xl, 8);\n  var c2_lo = shr64_lo(xh, xl, 7);\n\n  var r = c0_lo ^ c1_lo ^ c2_lo;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction g1_512_hi(xh, xl) {\n  var c0_hi = rotr64_hi(xh, xl, 19);\n  var c1_hi = rotr64_hi(xl, xh, 29);  // 61\n  var c2_hi = shr64_hi(xh, xl, 6);\n\n  var r = c0_hi ^ c1_hi ^ c2_hi;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\nfunction g1_512_lo(xh, xl) {\n  var c0_lo = rotr64_lo(xh, xl, 19);\n  var c1_lo = rotr64_lo(xl, xh, 29);  // 61\n  var c2_lo = shr64_lo(xh, xl, 6);\n\n  var r = c0_lo ^ c1_lo ^ c2_lo;\n  if (r < 0)\n    r += 0x100000000;\n  return r;\n}\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/512.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/sha/common.js":
/*!*****************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/sha/common.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar utils = __webpack_require__(/*! ../utils */ \"./node_modules/hash.js/lib/hash/utils.js\");\nvar rotr32 = utils.rotr32;\n\nfunction ft_1(s, x, y, z) {\n  if (s === 0)\n    return ch32(x, y, z);\n  if (s === 1 || s === 3)\n    return p32(x, y, z);\n  if (s === 2)\n    return maj32(x, y, z);\n}\nexports.ft_1 = ft_1;\n\nfunction ch32(x, y, z) {\n  return (x & y) ^ ((~x) & z);\n}\nexports.ch32 = ch32;\n\nfunction maj32(x, y, z) {\n  return (x & y) ^ (x & z) ^ (y & z);\n}\nexports.maj32 = maj32;\n\nfunction p32(x, y, z) {\n  return x ^ y ^ z;\n}\nexports.p32 = p32;\n\nfunction s0_256(x) {\n  return rotr32(x, 2) ^ rotr32(x, 13) ^ rotr32(x, 22);\n}\nexports.s0_256 = s0_256;\n\nfunction s1_256(x) {\n  return rotr32(x, 6) ^ rotr32(x, 11) ^ rotr32(x, 25);\n}\nexports.s1_256 = s1_256;\n\nfunction g0_256(x) {\n  return rotr32(x, 7) ^ rotr32(x, 18) ^ (x >>> 3);\n}\nexports.g0_256 = g0_256;\n\nfunction g1_256(x) {\n  return rotr32(x, 17) ^ rotr32(x, 19) ^ (x >>> 10);\n}\nexports.g1_256 = g1_256;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/sha/common.js?");

/***/ }),

/***/ "./node_modules/hash.js/lib/hash/utils.js":
/*!************************************************!*\
  !*** ./node_modules/hash.js/lib/hash/utils.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar assert = __webpack_require__(/*! minimalistic-assert */ \"./node_modules/minimalistic-assert/index.js\");\nvar inherits = __webpack_require__(/*! inherits */ \"./node_modules/inherits/inherits_browser.js\");\n\nexports.inherits = inherits;\n\nfunction isSurrogatePair(msg, i) {\n  if ((msg.charCodeAt(i) & 0xFC00) !== 0xD800) {\n    return false;\n  }\n  if (i < 0 || i + 1 >= msg.length) {\n    return false;\n  }\n  return (msg.charCodeAt(i + 1) & 0xFC00) === 0xDC00;\n}\n\nfunction toArray(msg, enc) {\n  if (Array.isArray(msg))\n    return msg.slice();\n  if (!msg)\n    return [];\n  var res = [];\n  if (typeof msg === 'string') {\n    if (!enc) {\n      // Inspired by stringToUtf8ByteArray() in closure-library by Google\n      // https://github.com/google/closure-library/blob/8598d87242af59aac233270742c8984e2b2bdbe0/closure/goog/crypt/crypt.js#L117-L143\n      // Apache License 2.0\n      // https://github.com/google/closure-library/blob/master/LICENSE\n      var p = 0;\n      for (var i = 0; i < msg.length; i++) {\n        var c = msg.charCodeAt(i);\n        if (c < 128) {\n          res[p++] = c;\n        } else if (c < 2048) {\n          res[p++] = (c >> 6) | 192;\n          res[p++] = (c & 63) | 128;\n        } else if (isSurrogatePair(msg, i)) {\n          c = 0x10000 + ((c & 0x03FF) << 10) + (msg.charCodeAt(++i) & 0x03FF);\n          res[p++] = (c >> 18) | 240;\n          res[p++] = ((c >> 12) & 63) | 128;\n          res[p++] = ((c >> 6) & 63) | 128;\n          res[p++] = (c & 63) | 128;\n        } else {\n          res[p++] = (c >> 12) | 224;\n          res[p++] = ((c >> 6) & 63) | 128;\n          res[p++] = (c & 63) | 128;\n        }\n      }\n    } else if (enc === 'hex') {\n      msg = msg.replace(/[^a-z0-9]+/ig, '');\n      if (msg.length % 2 !== 0)\n        msg = '0' + msg;\n      for (i = 0; i < msg.length; i += 2)\n        res.push(parseInt(msg[i] + msg[i + 1], 16));\n    }\n  } else {\n    for (i = 0; i < msg.length; i++)\n      res[i] = msg[i] | 0;\n  }\n  return res;\n}\nexports.toArray = toArray;\n\nfunction toHex(msg) {\n  var res = '';\n  for (var i = 0; i < msg.length; i++)\n    res += zero2(msg[i].toString(16));\n  return res;\n}\nexports.toHex = toHex;\n\nfunction htonl(w) {\n  var res = (w >>> 24) |\n            ((w >>> 8) & 0xff00) |\n            ((w << 8) & 0xff0000) |\n            ((w & 0xff) << 24);\n  return res >>> 0;\n}\nexports.htonl = htonl;\n\nfunction toHex32(msg, endian) {\n  var res = '';\n  for (var i = 0; i < msg.length; i++) {\n    var w = msg[i];\n    if (endian === 'little')\n      w = htonl(w);\n    res += zero8(w.toString(16));\n  }\n  return res;\n}\nexports.toHex32 = toHex32;\n\nfunction zero2(word) {\n  if (word.length === 1)\n    return '0' + word;\n  else\n    return word;\n}\nexports.zero2 = zero2;\n\nfunction zero8(word) {\n  if (word.length === 7)\n    return '0' + word;\n  else if (word.length === 6)\n    return '00' + word;\n  else if (word.length === 5)\n    return '000' + word;\n  else if (word.length === 4)\n    return '0000' + word;\n  else if (word.length === 3)\n    return '00000' + word;\n  else if (word.length === 2)\n    return '000000' + word;\n  else if (word.length === 1)\n    return '0000000' + word;\n  else\n    return word;\n}\nexports.zero8 = zero8;\n\nfunction join32(msg, start, end, endian) {\n  var len = end - start;\n  assert(len % 4 === 0);\n  var res = new Array(len / 4);\n  for (var i = 0, k = start; i < res.length; i++, k += 4) {\n    var w;\n    if (endian === 'big')\n      w = (msg[k] << 24) | (msg[k + 1] << 16) | (msg[k + 2] << 8) | msg[k + 3];\n    else\n      w = (msg[k + 3] << 24) | (msg[k + 2] << 16) | (msg[k + 1] << 8) | msg[k];\n    res[i] = w >>> 0;\n  }\n  return res;\n}\nexports.join32 = join32;\n\nfunction split32(msg, endian) {\n  var res = new Array(msg.length * 4);\n  for (var i = 0, k = 0; i < msg.length; i++, k += 4) {\n    var m = msg[i];\n    if (endian === 'big') {\n      res[k] = m >>> 24;\n      res[k + 1] = (m >>> 16) & 0xff;\n      res[k + 2] = (m >>> 8) & 0xff;\n      res[k + 3] = m & 0xff;\n    } else {\n      res[k + 3] = m >>> 24;\n      res[k + 2] = (m >>> 16) & 0xff;\n      res[k + 1] = (m >>> 8) & 0xff;\n      res[k] = m & 0xff;\n    }\n  }\n  return res;\n}\nexports.split32 = split32;\n\nfunction rotr32(w, b) {\n  return (w >>> b) | (w << (32 - b));\n}\nexports.rotr32 = rotr32;\n\nfunction rotl32(w, b) {\n  return (w << b) | (w >>> (32 - b));\n}\nexports.rotl32 = rotl32;\n\nfunction sum32(a, b) {\n  return (a + b) >>> 0;\n}\nexports.sum32 = sum32;\n\nfunction sum32_3(a, b, c) {\n  return (a + b + c) >>> 0;\n}\nexports.sum32_3 = sum32_3;\n\nfunction sum32_4(a, b, c, d) {\n  return (a + b + c + d) >>> 0;\n}\nexports.sum32_4 = sum32_4;\n\nfunction sum32_5(a, b, c, d, e) {\n  return (a + b + c + d + e) >>> 0;\n}\nexports.sum32_5 = sum32_5;\n\nfunction sum64(buf, pos, ah, al) {\n  var bh = buf[pos];\n  var bl = buf[pos + 1];\n\n  var lo = (al + bl) >>> 0;\n  var hi = (lo < al ? 1 : 0) + ah + bh;\n  buf[pos] = hi >>> 0;\n  buf[pos + 1] = lo;\n}\nexports.sum64 = sum64;\n\nfunction sum64_hi(ah, al, bh, bl) {\n  var lo = (al + bl) >>> 0;\n  var hi = (lo < al ? 1 : 0) + ah + bh;\n  return hi >>> 0;\n}\nexports.sum64_hi = sum64_hi;\n\nfunction sum64_lo(ah, al, bh, bl) {\n  var lo = al + bl;\n  return lo >>> 0;\n}\nexports.sum64_lo = sum64_lo;\n\nfunction sum64_4_hi(ah, al, bh, bl, ch, cl, dh, dl) {\n  var carry = 0;\n  var lo = al;\n  lo = (lo + bl) >>> 0;\n  carry += lo < al ? 1 : 0;\n  lo = (lo + cl) >>> 0;\n  carry += lo < cl ? 1 : 0;\n  lo = (lo + dl) >>> 0;\n  carry += lo < dl ? 1 : 0;\n\n  var hi = ah + bh + ch + dh + carry;\n  return hi >>> 0;\n}\nexports.sum64_4_hi = sum64_4_hi;\n\nfunction sum64_4_lo(ah, al, bh, bl, ch, cl, dh, dl) {\n  var lo = al + bl + cl + dl;\n  return lo >>> 0;\n}\nexports.sum64_4_lo = sum64_4_lo;\n\nfunction sum64_5_hi(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {\n  var carry = 0;\n  var lo = al;\n  lo = (lo + bl) >>> 0;\n  carry += lo < al ? 1 : 0;\n  lo = (lo + cl) >>> 0;\n  carry += lo < cl ? 1 : 0;\n  lo = (lo + dl) >>> 0;\n  carry += lo < dl ? 1 : 0;\n  lo = (lo + el) >>> 0;\n  carry += lo < el ? 1 : 0;\n\n  var hi = ah + bh + ch + dh + eh + carry;\n  return hi >>> 0;\n}\nexports.sum64_5_hi = sum64_5_hi;\n\nfunction sum64_5_lo(ah, al, bh, bl, ch, cl, dh, dl, eh, el) {\n  var lo = al + bl + cl + dl + el;\n\n  return lo >>> 0;\n}\nexports.sum64_5_lo = sum64_5_lo;\n\nfunction rotr64_hi(ah, al, num) {\n  var r = (al << (32 - num)) | (ah >>> num);\n  return r >>> 0;\n}\nexports.rotr64_hi = rotr64_hi;\n\nfunction rotr64_lo(ah, al, num) {\n  var r = (ah << (32 - num)) | (al >>> num);\n  return r >>> 0;\n}\nexports.rotr64_lo = rotr64_lo;\n\nfunction shr64_hi(ah, al, num) {\n  return ah >>> num;\n}\nexports.shr64_hi = shr64_hi;\n\nfunction shr64_lo(ah, al, num) {\n  var r = (ah << (32 - num)) | (al >>> num);\n  return r >>> 0;\n}\nexports.shr64_lo = shr64_lo;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/hash.js/lib/hash/utils.js?");

/***/ }),

/***/ "./node_modules/inherits/inherits_browser.js":
/*!***************************************************!*\
  !*** ./node_modules/inherits/inherits_browser.js ***!
  \***************************************************/
/***/ ((module) => {

eval("if (typeof Object.create === 'function') {\n  // implementation from standard node.js 'util' module\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      ctor.prototype = Object.create(superCtor.prototype, {\n        constructor: {\n          value: ctor,\n          enumerable: false,\n          writable: true,\n          configurable: true\n        }\n      })\n    }\n  };\n} else {\n  // old school shim for old browsers\n  module.exports = function inherits(ctor, superCtor) {\n    if (superCtor) {\n      ctor.super_ = superCtor\n      var TempCtor = function () {}\n      TempCtor.prototype = superCtor.prototype\n      ctor.prototype = new TempCtor()\n      ctor.prototype.constructor = ctor\n    }\n  }\n}\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/inherits/inherits_browser.js?");

/***/ }),

/***/ "./node_modules/is-callable/index.js":
/*!*******************************************!*\
  !*** ./node_modules/is-callable/index.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar fnToStr = Function.prototype.toString;\nvar reflectApply = typeof Reflect === 'object' && Reflect !== null && Reflect.apply;\nvar badArrayLike;\nvar isCallableMarker;\nif (typeof reflectApply === 'function' && typeof Object.defineProperty === 'function') {\n\ttry {\n\t\tbadArrayLike = Object.defineProperty({}, 'length', {\n\t\t\tget: function () {\n\t\t\t\tthrow isCallableMarker;\n\t\t\t}\n\t\t});\n\t\tisCallableMarker = {};\n\t\t// eslint-disable-next-line no-throw-literal\n\t\treflectApply(function () { throw 42; }, null, badArrayLike);\n\t} catch (_) {\n\t\tif (_ !== isCallableMarker) {\n\t\t\treflectApply = null;\n\t\t}\n\t}\n} else {\n\treflectApply = null;\n}\n\nvar constructorRegex = /^\\s*class\\b/;\nvar isES6ClassFn = function isES6ClassFunction(value) {\n\ttry {\n\t\tvar fnStr = fnToStr.call(value);\n\t\treturn constructorRegex.test(fnStr);\n\t} catch (e) {\n\t\treturn false; // not a function\n\t}\n};\n\nvar tryFunctionObject = function tryFunctionToStr(value) {\n\ttry {\n\t\tif (isES6ClassFn(value)) { return false; }\n\t\tfnToStr.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar objectClass = '[object Object]';\nvar fnClass = '[object Function]';\nvar genClass = '[object GeneratorFunction]';\nvar ddaClass = '[object HTMLAllCollection]'; // IE 11\nvar ddaClass2 = '[object HTML document.all class]';\nvar ddaClass3 = '[object HTMLCollection]'; // IE 9-10\nvar hasToStringTag = typeof Symbol === 'function' && !!Symbol.toStringTag; // better: use `has-tostringtag`\n\nvar isIE68 = !(0 in [,]); // eslint-disable-line no-sparse-arrays, comma-spacing\n\nvar isDDA = function isDocumentDotAll() { return false; };\nif (typeof document === 'object') {\n\t// Firefox 3 canonicalizes DDA to undefined when it's not accessed directly\n\tvar all = document.all;\n\tif (toStr.call(all) === toStr.call(document.all)) {\n\t\tisDDA = function isDocumentDotAll(value) {\n\t\t\t/* globals document: false */\n\t\t\t// in IE 6-8, typeof document.all is \"object\" and it's truthy\n\t\t\tif ((isIE68 || !value) && (typeof value === 'undefined' || typeof value === 'object')) {\n\t\t\t\ttry {\n\t\t\t\t\tvar str = toStr.call(value);\n\t\t\t\t\treturn (\n\t\t\t\t\t\tstr === ddaClass\n\t\t\t\t\t\t|| str === ddaClass2\n\t\t\t\t\t\t|| str === ddaClass3 // opera 12.16\n\t\t\t\t\t\t|| str === objectClass // IE 6-8\n\t\t\t\t\t) && value('') == null; // eslint-disable-line eqeqeq\n\t\t\t\t} catch (e) { /**/ }\n\t\t\t}\n\t\t\treturn false;\n\t\t};\n\t}\n}\n\nmodule.exports = reflectApply\n\t? function isCallable(value) {\n\t\tif (isDDA(value)) { return true; }\n\t\tif (!value) { return false; }\n\t\tif (typeof value !== 'function' && typeof value !== 'object') { return false; }\n\t\ttry {\n\t\t\treflectApply(value, null, badArrayLike);\n\t\t} catch (e) {\n\t\t\tif (e !== isCallableMarker) { return false; }\n\t\t}\n\t\treturn !isES6ClassFn(value) && tryFunctionObject(value);\n\t}\n\t: function isCallable(value) {\n\t\tif (isDDA(value)) { return true; }\n\t\tif (!value) { return false; }\n\t\tif (typeof value !== 'function' && typeof value !== 'object') { return false; }\n\t\tif (hasToStringTag) { return tryFunctionObject(value); }\n\t\tif (isES6ClassFn(value)) { return false; }\n\t\tvar strClass = toStr.call(value);\n\t\tif (strClass !== fnClass && strClass !== genClass && !(/^\\[object HTML/).test(strClass)) { return false; }\n\t\treturn tryFunctionObject(value);\n\t};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-callable/index.js?");

/***/ }),

/***/ "./node_modules/is-date-object/index.js":
/*!**********************************************!*\
  !*** ./node_modules/is-date-object/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getDay = Date.prototype.getDay;\nvar tryDateObject = function tryDateGetDayCall(value) {\n\ttry {\n\t\tgetDay.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\n\nvar toStr = Object.prototype.toString;\nvar dateClass = '[object Date]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isDateObject(value) {\n\tif (typeof value !== 'object' || value === null) {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryDateObject(value) : toStr.call(value) === dateClass;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-date-object/index.js?");

/***/ }),

/***/ "./node_modules/is-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/is-regex/index.js ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\nvar has;\nvar $exec;\nvar isRegexMarker;\nvar badStringifier;\n\nif (hasToStringTag) {\n\thas = callBound('Object.prototype.hasOwnProperty');\n\t$exec = callBound('RegExp.prototype.exec');\n\tisRegexMarker = {};\n\n\tvar throwRegexMarker = function () {\n\t\tthrow isRegexMarker;\n\t};\n\tbadStringifier = {\n\t\ttoString: throwRegexMarker,\n\t\tvalueOf: throwRegexMarker\n\t};\n\n\tif (typeof Symbol.toPrimitive === 'symbol') {\n\t\tbadStringifier[Symbol.toPrimitive] = throwRegexMarker;\n\t}\n}\n\nvar $toString = callBound('Object.prototype.toString');\nvar gOPD = Object.getOwnPropertyDescriptor;\nvar regexClass = '[object RegExp]';\n\nmodule.exports = hasToStringTag\n\t// eslint-disable-next-line consistent-return\n\t? function isRegex(value) {\n\t\tif (!value || typeof value !== 'object') {\n\t\t\treturn false;\n\t\t}\n\n\t\tvar descriptor = gOPD(value, 'lastIndex');\n\t\tvar hasLastIndexDataProperty = descriptor && has(descriptor, 'value');\n\t\tif (!hasLastIndexDataProperty) {\n\t\t\treturn false;\n\t\t}\n\n\t\ttry {\n\t\t\t$exec(value, badStringifier);\n\t\t} catch (e) {\n\t\t\treturn e === isRegexMarker;\n\t\t}\n\t}\n\t: function isRegex(value) {\n\t\t// In older browsers, typeof regex incorrectly returns 'function'\n\t\tif (!value || (typeof value !== 'object' && typeof value !== 'function')) {\n\t\t\treturn false;\n\t\t}\n\n\t\treturn $toString(value) === regexClass;\n\t};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-regex/index.js?");

/***/ }),

/***/ "./node_modules/is-string/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-string/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar strValue = String.prototype.valueOf;\nvar tryStringObject = function tryStringObject(value) {\n\ttry {\n\t\tstrValue.call(value);\n\t\treturn true;\n\t} catch (e) {\n\t\treturn false;\n\t}\n};\nvar toStr = Object.prototype.toString;\nvar strClass = '[object String]';\nvar hasToStringTag = __webpack_require__(/*! has-tostringtag/shams */ \"./node_modules/has-tostringtag/shams.js\")();\n\nmodule.exports = function isString(value) {\n\tif (typeof value === 'string') {\n\t\treturn true;\n\t}\n\tif (typeof value !== 'object') {\n\t\treturn false;\n\t}\n\treturn hasToStringTag ? tryStringObject(value) : toStr.call(value) === strClass;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-string/index.js?");

/***/ }),

/***/ "./node_modules/is-symbol/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-symbol/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toStr = Object.prototype.toString;\nvar hasSymbols = __webpack_require__(/*! has-symbols */ \"./node_modules/has-symbols/index.js\")();\n\nif (hasSymbols) {\n\tvar symToStr = Symbol.prototype.toString;\n\tvar symStringRegex = /^Symbol\\(.*\\)$/;\n\tvar isSymbolObject = function isRealSymbolObject(value) {\n\t\tif (typeof value.valueOf() !== 'symbol') {\n\t\t\treturn false;\n\t\t}\n\t\treturn symStringRegex.test(symToStr.call(value));\n\t};\n\n\tmodule.exports = function isSymbol(value) {\n\t\tif (typeof value === 'symbol') {\n\t\t\treturn true;\n\t\t}\n\t\tif (toStr.call(value) !== '[object Symbol]') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\treturn isSymbolObject(value);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n} else {\n\n\tmodule.exports = function isSymbol(value) {\n\t\t// this environment does not support Symbols.\n\t\treturn  false && 0;\n\t};\n}\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-symbol/index.js?");

/***/ }),

/***/ "./node_modules/isarray/index.js":
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/***/ ((module) => {

eval("var toString = {}.toString;\n\nmodule.exports = Array.isArray || function (arr) {\n  return toString.call(arr) == '[object Array]';\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/isarray/index.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/get-interfaces.js":
/*!*************************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/get-interfaces.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/json-to-ts/build/src/util.js\");\nfunction isKeyNameValid(keyName) {\n    var regex = /^[a-zA-Z_][a-zA-Z\\d_]*$/;\n    return regex.test(keyName);\n}\nfunction parseKeyMetaData(key) {\n    var isOptional = key.endsWith(\"--?\");\n    if (isOptional) {\n        return {\n            isOptional: isOptional,\n            keyValue: key.slice(0, -3)\n        };\n    }\n    else {\n        return {\n            isOptional: isOptional,\n            keyValue: key\n        };\n    }\n}\nfunction findNameById(id, names) {\n    return names.find(function (_) { return _.id === id; }).name;\n}\nfunction removeNullFromUnion(unionTypeName) {\n    var typeNames = unionTypeName.split(\" | \");\n    var nullIndex = typeNames.indexOf(\"null\");\n    typeNames.splice(nullIndex, 1);\n    return typeNames.join(\" | \");\n}\nfunction replaceTypeObjIdsWithNames(typeObj, names) {\n    return (Object.entries(typeObj)\n        // quote key if is invalid and question mark if optional from array merging\n        .map(function (_a) {\n        var key = _a[0], type = _a[1];\n        var _b = parseKeyMetaData(key), isOptional = _b.isOptional, keyValue = _b.keyValue;\n        var isValid = isKeyNameValid(keyValue);\n        var validName = isValid ? keyValue : \"'\" + keyValue + \"'\";\n        return isOptional ? [validName + \"?\", type, isOptional] : [validName, type, isOptional];\n    })\n        // replace hashes with names referencing the hashes\n        .map(function (_a) {\n        var key = _a[0], type = _a[1], isOptional = _a[2];\n        if (!util_1.isHash(type)) {\n            return [key, type, isOptional];\n        }\n        var newType = findNameById(type, names);\n        return [key, newType, isOptional];\n    })\n        // if union has null, remove null and make type optional\n        .map(function (_a) {\n        var key = _a[0], type = _a[1], isOptional = _a[2];\n        if (!(util_1.isNonArrayUnion(type) && type.includes(\"null\"))) {\n            return [key, type, isOptional];\n        }\n        var newType = removeNullFromUnion(type);\n        var newKey = isOptional ? key : key + \"?\"; // if already optional dont add question mark\n        return [newKey, newType, isOptional];\n    })\n        // make null optional and set type as any\n        .map(function (_a) {\n        var key = _a[0], type = _a[1], isOptional = _a[2];\n        if (type !== \"null\") {\n            return [key, type, isOptional];\n        }\n        var newType = \"any\";\n        var newKey = isOptional ? key : key + \"?\"; // if already optional dont add question mark\n        return [newKey, newType, isOptional];\n    })\n        .reduce(function (agg, _a) {\n        var key = _a[0], value = _a[1];\n        agg[key] = value;\n        return agg;\n    }, {}));\n}\nfunction getInterfaceStringFromDescription(_a) {\n    var name = _a.name, typeMap = _a.typeMap;\n    var stringTypeMap = Object.entries(typeMap)\n        .map(function (_a) {\n        var key = _a[0], name = _a[1];\n        return \"  \" + key + \": \" + name + \";\\n\";\n    })\n        .reduce(function (a, b) { return (a += b); }, \"\");\n    var interfaceString = \"interface \" + name + \" {\\n\";\n    interfaceString += stringTypeMap;\n    interfaceString += \"}\";\n    return interfaceString;\n}\nexports.getInterfaceStringFromDescription = getInterfaceStringFromDescription;\nfunction getInterfaceDescriptions(typeStructure, names) {\n    return names\n        .map(function (_a) {\n        var id = _a.id, name = _a.name;\n        var typeDescription = util_1.findTypeById(id, typeStructure.types);\n        if (typeDescription.typeObj) {\n            var typeMap = replaceTypeObjIdsWithNames(typeDescription.typeObj, names);\n            return { name: name, typeMap: typeMap };\n        }\n        else {\n            return null;\n        }\n    })\n        .filter(function (_) { return _ !== null; });\n}\nexports.getInterfaceDescriptions = getInterfaceDescriptions;\n//# sourceMappingURL=get-interfaces.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/get-interfaces.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/get-names.js":
/*!********************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/get-names.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar pluralize = __webpack_require__(/*! pluralize */ \"./node_modules/json-to-ts/node_modules/pluralize/pluralize.js\");\nvar model_1 = __webpack_require__(/*! ./model */ \"./node_modules/json-to-ts/build/src/model.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/json-to-ts/build/src/util.js\");\nfunction getName(_a, keyName, names, isInsideArray) {\n    var rootTypeId = _a.rootTypeId, types = _a.types;\n    var typeDesc = types.find(function (_) { return _.id === rootTypeId; });\n    switch (util_1.getTypeDescriptionGroup(typeDesc)) {\n        case model_1.TypeGroup.Array:\n            typeDesc.arrayOfTypes.forEach(function (typeIdOrPrimitive, i) {\n                getName({ rootTypeId: typeIdOrPrimitive, types: types }, \n                // to differenttiate array types\n                i === 0 ? keyName : \"\" + keyName + (i + 1), names, true);\n            });\n            return {\n                rootName: getNameById(typeDesc.id, keyName, isInsideArray, types, names),\n                names: names\n            };\n        case model_1.TypeGroup.Object:\n            Object.entries(typeDesc.typeObj).forEach(function (_a) {\n                var key = _a[0], value = _a[1];\n                getName({ rootTypeId: value, types: types }, key, names, false);\n            });\n            return {\n                rootName: getNameById(typeDesc.id, keyName, isInsideArray, types, names),\n                names: names\n            };\n        case model_1.TypeGroup.Primitive:\n            // in this case rootTypeId is primitive type string (string, null, number, boolean)\n            return {\n                rootName: rootTypeId,\n                names: names\n            };\n    }\n}\nfunction getNames(typeStructure, rootName) {\n    if (rootName === void 0) { rootName = \"RootObject\"; }\n    return getName(typeStructure, rootName, [], false).names.reverse();\n}\nexports.getNames = getNames;\nfunction getNameById(id, keyName, isInsideArray, types, nameMap) {\n    var nameEntry = nameMap.find(function (_) { return _.id === id; });\n    if (nameEntry) {\n        return nameEntry.name;\n    }\n    var typeDesc = util_1.findTypeById(id, types);\n    var group = util_1.getTypeDescriptionGroup(typeDesc);\n    var name;\n    switch (group) {\n        case model_1.TypeGroup.Array:\n            name = typeDesc.isUnion ? getArrayName(typeDesc, types, nameMap) : formatArrayName(typeDesc, types, nameMap);\n            break;\n        case model_1.TypeGroup.Object:\n            /**\n             * picking name for type in array requires to singularize that type name,\n             * and if not then no need to singularize\n             */\n            name = [keyName]\n                .map(function (key) { return util_1.parseKeyMetaData(key).keyValue; })\n                .map(function (name) { return (isInsideArray ? pluralize.singular(name) : name); })\n                .map(pascalCase)\n                .map(normalizeInvalidTypeName)\n                .map(pascalCase) // needed because removed symbols might leave first character uncapitalized\n                .map(function (name) {\n                return uniqueByIncrement(name, nameMap.map(function (_a) {\n                    var name = _a.name;\n                    return name;\n                }));\n            })\n                .pop();\n            break;\n    }\n    nameMap.push({ id: id, name: name });\n    return name;\n}\nfunction pascalCase(name) {\n    return name\n        .split(/\\s+/g)\n        .filter(function (_) { return _ !== \"\"; })\n        .map(capitalize)\n        .reduce(function (a, b) { return a + b; });\n}\nfunction capitalize(name) {\n    return name.charAt(0).toUpperCase() + name.slice(1);\n}\nfunction normalizeInvalidTypeName(name) {\n    if (/^[a-zA-Z][a-zA-Z0-9]*$/.test(name)) {\n        return name;\n    }\n    else {\n        var noSymbolsName = name.replace(/[^a-zA-Z0-9]/g, \"\");\n        var startsWithWordCharacter = /^[a-zA-Z]/.test(noSymbolsName);\n        return startsWithWordCharacter ? noSymbolsName : \"_\" + noSymbolsName;\n    }\n}\nfunction uniqueByIncrement(name, names) {\n    for (var i = 0; i < 1000; i++) {\n        var nameProposal = i === 0 ? name : \"\" + name + (i + 1);\n        if (!names.includes(nameProposal)) {\n            return nameProposal;\n        }\n    }\n}\nfunction getArrayName(typeDesc, types, nameMap) {\n    if (typeDesc.arrayOfTypes.length === 0) {\n        return \"any\";\n    }\n    else if (typeDesc.arrayOfTypes.length === 1) {\n        var idOrPrimitive = typeDesc.arrayOfTypes[0];\n        return convertToReadableType(idOrPrimitive, types, nameMap);\n    }\n    else {\n        return unionToString(typeDesc, types, nameMap);\n    }\n}\nfunction convertToReadableType(idOrPrimitive, types, nameMap) {\n    return util_1.isHash(idOrPrimitive)\n        ? // array keyName makes no difference in picking name for type\n            getNameById(idOrPrimitive, null, true, types, nameMap)\n        : idOrPrimitive;\n}\nfunction unionToString(typeDesc, types, nameMap) {\n    return typeDesc.arrayOfTypes.reduce(function (acc, type, i) {\n        var readableTypeName = convertToReadableType(type, types, nameMap);\n        return i === 0 ? readableTypeName : acc + \" | \" + readableTypeName;\n    }, \"\");\n}\nfunction formatArrayName(typeDesc, types, nameMap) {\n    var innerTypeId = typeDesc.arrayOfTypes[0];\n    // const isMultipleTypeArray = findTypeById(innerTypeId, types).arrayOfTypes.length > 1\n    var isMultipleTypeArray = util_1.isHash(innerTypeId) &&\n        util_1.findTypeById(innerTypeId, types).isUnion &&\n        util_1.findTypeById(innerTypeId, types).arrayOfTypes.length > 1;\n    var readableInnerType = getArrayName(typeDesc, types, nameMap);\n    return isMultipleTypeArray\n        ? \"(\" + readableInnerType + \")[]\" // add semicolons for union type\n        : readableInnerType + \"[]\";\n}\n//# sourceMappingURL=get-names.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/get-names.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/get-type-structure.js":
/*!*****************************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/get-type-structure.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArrays = (this && this.__spreadArrays) || function () {\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\n            r[k] = a[j];\n    return r;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar hash = __webpack_require__(/*! hash.js */ \"./node_modules/hash.js/lib/hash.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/json-to-ts/build/src/util.js\");\nvar model_1 = __webpack_require__(/*! ./model */ \"./node_modules/json-to-ts/build/src/model.js\");\nfunction createTypeDescription(typeObj, isUnion) {\n    if (util_1.isArray(typeObj)) {\n        return {\n            id: Hash(JSON.stringify(__spreadArrays(typeObj, [isUnion]))),\n            arrayOfTypes: typeObj,\n            isUnion: isUnion\n        };\n    }\n    else {\n        return {\n            id: Hash(JSON.stringify(typeObj)),\n            typeObj: typeObj\n        };\n    }\n}\nfunction getIdByType(typeObj, types, isUnion) {\n    if (isUnion === void 0) { isUnion = false; }\n    var typeDesc = types.find(function (el) {\n        return typeObjectMatchesTypeDesc(typeObj, el, isUnion);\n    });\n    if (!typeDesc) {\n        typeDesc = createTypeDescription(typeObj, isUnion);\n        types.push(typeDesc);\n    }\n    return typeDesc.id;\n}\nfunction Hash(content) {\n    return hash\n        .sha1()\n        .update(content)\n        .digest(\"hex\");\n}\nfunction typeObjectMatchesTypeDesc(typeObj, typeDesc, isUnion) {\n    if (util_1.isArray(typeObj)) {\n        return arraysContainSameElements(typeObj, typeDesc.arrayOfTypes) && typeDesc.isUnion === isUnion;\n    }\n    else {\n        return objectsHaveSameEntries(typeObj, typeDesc.typeObj);\n    }\n}\nfunction arraysContainSameElements(arr1, arr2) {\n    if (arr1 === undefined || arr2 === undefined)\n        return false;\n    return arr1.sort().join(\"\") === arr2.sort().join(\"\");\n}\nfunction objectsHaveSameEntries(obj1, obj2) {\n    if (obj1 === undefined || obj2 === undefined)\n        return false;\n    var entries1 = Object.entries(obj1);\n    var entries2 = Object.entries(obj2);\n    var sameLength = entries1.length === entries2.length;\n    var sameTypes = entries1.every(function (_a) {\n        var key = _a[0], value = _a[1];\n        return obj2[key] === value;\n    });\n    return sameLength && sameTypes;\n}\nfunction getSimpleTypeName(value) {\n    if (value === null) {\n        return \"null\";\n    }\n    else if (value instanceof Date) {\n        return \"Date\";\n    }\n    else {\n        return typeof value;\n    }\n}\nfunction getTypeGroup(value) {\n    if (util_1.isDate(value)) {\n        return model_1.TypeGroup.Date;\n    }\n    else if (util_1.isArray(value)) {\n        return model_1.TypeGroup.Array;\n    }\n    else if (util_1.isObject(value)) {\n        return model_1.TypeGroup.Object;\n    }\n    else {\n        return model_1.TypeGroup.Primitive;\n    }\n}\nfunction createTypeObject(obj, types) {\n    return Object.entries(obj).reduce(function (typeObj, _a) {\n        var _b;\n        var key = _a[0], value = _a[1];\n        var rootTypeId = getTypeStructure(value, types).rootTypeId;\n        return __assign(__assign({}, typeObj), (_b = {}, _b[key] = rootTypeId, _b));\n    }, {});\n}\nfunction getMergedObjects(typesOfArray, types) {\n    var typeObjects = typesOfArray.map(function (typeDesc) { return typeDesc.typeObj; });\n    var allKeys = typeObjects\n        .map(function (typeObj) { return Object.keys(typeObj); })\n        .reduce(function (a, b) { return __spreadArrays(a, b); }, [])\n        .filter(util_1.onlyUnique);\n    var commonKeys = typeObjects.reduce(function (commonKeys, typeObj) {\n        var keys = Object.keys(typeObj);\n        return commonKeys.filter(function (key) { return keys.includes(key); });\n    }, allKeys);\n    var getKeyType = function (key) {\n        var typesOfKey = typeObjects\n            .filter(function (typeObj) {\n            return Object.keys(typeObj).includes(key);\n        })\n            .map(function (typeObj) { return typeObj[key]; })\n            .filter(util_1.onlyUnique);\n        if (typesOfKey.length === 1) {\n            return typesOfKey.pop();\n        }\n        else {\n            return getInnerArrayType(typesOfKey, types);\n        }\n    };\n    var typeObj = allKeys.reduce(function (obj, key) {\n        var _a;\n        var isMandatory = commonKeys.includes(key);\n        var type = getKeyType(key);\n        var keyValue = isMandatory ? key : toOptionalKey(key);\n        return __assign(__assign({}, obj), (_a = {}, _a[keyValue] = type, _a));\n    }, {});\n    return getIdByType(typeObj, types, true);\n}\nfunction toOptionalKey(key) {\n    return key.endsWith(\"--?\") ? key : key + \"--?\";\n}\nfunction getMergedArrays(typesOfArray, types) {\n    var idsOfArrayTypes = typesOfArray\n        .map(function (typeDesc) { return typeDesc.arrayOfTypes; })\n        .reduce(function (a, b) { return __spreadArrays(a, b); }, [])\n        .filter(util_1.onlyUnique);\n    if (idsOfArrayTypes.length === 1) {\n        return getIdByType([idsOfArrayTypes.pop()], types);\n    }\n    else {\n        return getIdByType([getInnerArrayType(idsOfArrayTypes, types)], types);\n    }\n}\n// we merge union types example: (number | string), null -> (number | string | null)\nfunction getMergedUnion(typesOfArray, types) {\n    var innerUnionsTypes = typesOfArray\n        .map(function (id) {\n        return util_1.findTypeById(id, types);\n    })\n        .filter(function (_) { return !!_ && _.isUnion; })\n        .map(function (_) { return _.arrayOfTypes; })\n        .reduce(function (a, b) { return __spreadArrays(a, b); }, []);\n    var primitiveTypes = typesOfArray.filter(function (id) { return !util_1.findTypeById(id, types) || !util_1.findTypeById(id, types).isUnion; }); // primitives or not union\n    return getIdByType(__spreadArrays(innerUnionsTypes, primitiveTypes), types, true);\n}\nfunction getInnerArrayType(typesOfArray, types) {\n    // return inner array type\n    var containsNull = typesOfArray.includes(\"null\");\n    var arrayTypesDescriptions = typesOfArray.map(function (id) { return util_1.findTypeById(id, types); }).filter(function (_) { return !!_; });\n    var allArrayType = arrayTypesDescriptions.filter(function (typeDesc) { return util_1.getTypeDescriptionGroup(typeDesc) === model_1.TypeGroup.Array; }).length ===\n        typesOfArray.length;\n    var allArrayTypeWithNull = arrayTypesDescriptions.filter(function (typeDesc) { return util_1.getTypeDescriptionGroup(typeDesc) === model_1.TypeGroup.Array; }).length + 1 ===\n        typesOfArray.length && containsNull;\n    var allObjectTypeWithNull = arrayTypesDescriptions.filter(function (typeDesc) { return util_1.getTypeDescriptionGroup(typeDesc) === model_1.TypeGroup.Object; }).length + 1 ===\n        typesOfArray.length && containsNull;\n    var allObjectType = arrayTypesDescriptions.filter(function (typeDesc) { return util_1.getTypeDescriptionGroup(typeDesc) === model_1.TypeGroup.Object; }).length ===\n        typesOfArray.length;\n    if (typesOfArray.length === 0) {\n        // no types in array -> empty union type\n        return getIdByType([], types, true);\n    }\n    if (typesOfArray.length === 1) {\n        // one type in array -> that will be our inner type\n        return typesOfArray.pop();\n    }\n    if (typesOfArray.length > 1) {\n        // multiple types in merge array\n        // if all are object we can merge them and return merged object as inner type\n        if (allObjectType)\n            return getMergedObjects(arrayTypesDescriptions, types);\n        // if all are array we can merge them and return merged array as inner type\n        if (allArrayType)\n            return getMergedArrays(arrayTypesDescriptions, types);\n        // all array types with posibble null, result type = null | (*mergedArray*)[]\n        if (allArrayTypeWithNull) {\n            return getMergedUnion([getMergedArrays(arrayTypesDescriptions, types), \"null\"], types);\n        }\n        // all object types with posibble null, result type = null | *mergedObject*\n        if (allObjectTypeWithNull) {\n            return getMergedUnion([getMergedObjects(arrayTypesDescriptions, types), \"null\"], types);\n        }\n        // if they are mixed or all primitive we cant merge them so we return as mixed union type\n        return getMergedUnion(typesOfArray, types);\n    }\n}\nfunction getTypeStructure(targetObj, // object that we want to create types for\ntypes) {\n    if (types === void 0) { types = []; }\n    switch (getTypeGroup(targetObj)) {\n        case model_1.TypeGroup.Array:\n            var typesOfArray = targetObj.map(function (_) { return getTypeStructure(_, types).rootTypeId; }).filter(util_1.onlyUnique);\n            var arrayInnerTypeId = getInnerArrayType(typesOfArray, types); // create \"union type of array types\"\n            var typeId = getIdByType([arrayInnerTypeId], types); // create type \"array of union type\"\n            return {\n                rootTypeId: typeId,\n                types: types\n            };\n        case model_1.TypeGroup.Object:\n            var typeObj = createTypeObject(targetObj, types);\n            var objType = getIdByType(typeObj, types);\n            return {\n                rootTypeId: objType,\n                types: types\n            };\n        case model_1.TypeGroup.Primitive:\n            return {\n                rootTypeId: getSimpleTypeName(targetObj),\n                types: types\n            };\n        case model_1.TypeGroup.Date:\n            var dateType = getSimpleTypeName(targetObj);\n            return {\n                rootTypeId: dateType,\n                types: types\n            };\n    }\n}\nexports.getTypeStructure = getTypeStructure;\nfunction getAllUsedTypeIds(_a) {\n    var rootTypeId = _a.rootTypeId, types = _a.types;\n    var typeDesc = types.find(function (_) { return _.id === rootTypeId; });\n    var subTypes = function (typeDesc) {\n        switch (util_1.getTypeDescriptionGroup(typeDesc)) {\n            case model_1.TypeGroup.Array:\n                var arrSubTypes = typeDesc.arrayOfTypes\n                    .filter(util_1.isHash)\n                    .map(function (typeId) {\n                    var typeDesc = types.find(function (_) { return _.id === typeId; });\n                    return subTypes(typeDesc);\n                })\n                    .reduce(function (a, b) { return __spreadArrays(a, b); }, []);\n                return __spreadArrays([typeDesc.id], arrSubTypes);\n            case model_1.TypeGroup.Object:\n                var objSubTypes = Object.values(typeDesc.typeObj)\n                    .filter(util_1.isHash)\n                    .map(function (typeId) {\n                    var typeDesc = types.find(function (_) { return _.id === typeId; });\n                    return subTypes(typeDesc);\n                })\n                    .reduce(function (a, b) { return __spreadArrays(a, b); }, []);\n                return __spreadArrays([typeDesc.id], objSubTypes);\n        }\n    };\n    return subTypes(typeDesc);\n}\nfunction optimizeTypeStructure(typeStructure) {\n    var usedTypeIds = getAllUsedTypeIds(typeStructure);\n    var optimizedTypes = typeStructure.types.filter(function (typeDesc) { return usedTypeIds.includes(typeDesc.id); });\n    typeStructure.types = optimizedTypes;\n}\nexports.optimizeTypeStructure = optimizeTypeStructure;\n//# sourceMappingURL=get-type-structure.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/get-type-structure.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/index.js":
/*!****************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/index.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar get_type_structure_1 = __webpack_require__(/*! ./get-type-structure */ \"./node_modules/json-to-ts/build/src/get-type-structure.js\");\nvar es7_shim_1 = __webpack_require__(/*! es7-shim/es7-shim */ \"./node_modules/es7-shim/es7-shim.js\");\nvar get_interfaces_1 = __webpack_require__(/*! ./get-interfaces */ \"./node_modules/json-to-ts/build/src/get-interfaces.js\");\nvar get_names_1 = __webpack_require__(/*! ./get-names */ \"./node_modules/json-to-ts/build/src/get-names.js\");\nvar util_1 = __webpack_require__(/*! ./util */ \"./node_modules/json-to-ts/build/src/util.js\");\nes7_shim_1.shim();\nfunction JsonToTS(json, userOptions) {\n    var defaultOptions = {\n        rootName: \"RootObject\"\n    };\n    var options = __assign(__assign({}, defaultOptions), userOptions);\n    /**\n     * Parsing currently works with (Objects) and (Array of Objects) not and primitive types and mixed arrays etc..\n     * so we shall validate, so we dont start parsing non Object type\n     */\n    var isArrayOfObjects = util_1.isArray(json) &&\n        json.length > 0 &&\n        json.reduce(function (a, b) { return a && util_1.isObject(b); }, true);\n    if (!(util_1.isObject(json) || isArrayOfObjects)) {\n        throw new Error(\"Only (Object) and (Array of Object) are supported\");\n    }\n    var typeStructure = get_type_structure_1.getTypeStructure(json);\n    /**\n     * due to merging array types some types are switched out for merged ones\n     * so we delete the unused ones here\n     */\n    get_type_structure_1.optimizeTypeStructure(typeStructure);\n    var names = get_names_1.getNames(typeStructure, options.rootName);\n    return get_interfaces_1.getInterfaceDescriptions(typeStructure, names).map(get_interfaces_1.getInterfaceStringFromDescription);\n}\nexports[\"default\"] = JsonToTS;\nJsonToTS.default = JsonToTS;\nmodule.exports = JsonToTS;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/index.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/model.js":
/*!****************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/model.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar TypeGroup;\n(function (TypeGroup) {\n    TypeGroup[TypeGroup[\"Primitive\"] = 0] = \"Primitive\";\n    TypeGroup[TypeGroup[\"Array\"] = 1] = \"Array\";\n    TypeGroup[TypeGroup[\"Object\"] = 2] = \"Object\";\n    TypeGroup[TypeGroup[\"Date\"] = 3] = \"Date\";\n})(TypeGroup = exports.TypeGroup || (exports.TypeGroup = {}));\n//# sourceMappingURL=model.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/model.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/build/src/util.js":
/*!***************************************************!*\
  !*** ./node_modules/json-to-ts/build/src/util.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar model_1 = __webpack_require__(/*! ./model */ \"./node_modules/json-to-ts/build/src/model.js\");\nfunction isHash(str) {\n    return str.length === 40;\n}\nexports.isHash = isHash;\nfunction onlyUnique(value, index, self) {\n    return self.indexOf(value) === index;\n}\nexports.onlyUnique = onlyUnique;\nfunction isArray(x) {\n    return Object.prototype.toString.call(x) === \"[object Array]\";\n}\nexports.isArray = isArray;\nfunction isNonArrayUnion(typeName) {\n    var arrayUnionRegex = /^\\(.*\\)\\[\\]$/;\n    return typeName.includes(\" | \") && !arrayUnionRegex.test(typeName);\n}\nexports.isNonArrayUnion = isNonArrayUnion;\nfunction isObject(x) {\n    return Object.prototype.toString.call(x) === \"[object Object]\" && x !== null;\n}\nexports.isObject = isObject;\nfunction isDate(x) {\n    return x instanceof Date;\n}\nexports.isDate = isDate;\nfunction parseKeyMetaData(key) {\n    var isOptional = key.endsWith(\"--?\");\n    if (isOptional) {\n        return {\n            isOptional: isOptional,\n            keyValue: key.slice(0, -3)\n        };\n    }\n    else {\n        return {\n            isOptional: isOptional,\n            keyValue: key\n        };\n    }\n}\nexports.parseKeyMetaData = parseKeyMetaData;\nfunction getTypeDescriptionGroup(desc) {\n    if (desc === undefined) {\n        return model_1.TypeGroup.Primitive;\n    }\n    else if (desc.arrayOfTypes !== undefined) {\n        return model_1.TypeGroup.Array;\n    }\n    else {\n        return model_1.TypeGroup.Object;\n    }\n}\nexports.getTypeDescriptionGroup = getTypeDescriptionGroup;\nfunction findTypeById(id, types) {\n    return types.find(function (_) { return _.id === id; });\n}\nexports.findTypeById = findTypeById;\n//# sourceMappingURL=util.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/build/src/util.js?");

/***/ }),

/***/ "./node_modules/json-to-ts/node_modules/pluralize/pluralize.js":
/*!*********************************************************************!*\
  !*** ./node_modules/json-to-ts/node_modules/pluralize/pluralize.js ***!
  \*********************************************************************/
/***/ (function(module) {

eval("/* global define */\n\n(function (root, pluralize) {\n  /* istanbul ignore else */\n  if (true) {\n    // Node.\n    module.exports = pluralize();\n  } else {}\n})(this, function () {\n  // Rule storage - pluralize and singularize need to be run sequentially,\n  // while other rules can be optimized using an object for instant lookups.\n  var pluralRules = [];\n  var singularRules = [];\n  var uncountables = {};\n  var irregularPlurals = {};\n  var irregularSingles = {};\n\n  /**\n   * Title case a string.\n   *\n   * @param  {string} str\n   * @return {string}\n   */\n  function toTitleCase (str) {\n    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();\n  }\n\n  /**\n   * Sanitize a pluralization rule to a usable regular expression.\n   *\n   * @param  {(RegExp|string)} rule\n   * @return {RegExp}\n   */\n  function sanitizeRule (rule) {\n    if (typeof rule === 'string') {\n      return new RegExp('^' + rule + '$', 'i');\n    }\n\n    return rule;\n  }\n\n  /**\n   * Pass in a word token to produce a function that can replicate the case on\n   * another word.\n   *\n   * @param  {string}   word\n   * @param  {string}   token\n   * @return {Function}\n   */\n  function restoreCase (word, token) {\n    // Tokens are an exact match.\n    if (word === token) {\n      return token;\n    }\n\n    // Upper cased words. E.g. \"HELLO\".\n    if (word === word.toUpperCase()) {\n      return token.toUpperCase();\n    }\n\n    // Title cased words. E.g. \"Title\".\n    if (word[0] === word[0].toUpperCase()) {\n      return toTitleCase(token);\n    }\n\n    // Lower cased words. E.g. \"test\".\n    return token.toLowerCase();\n  }\n\n  /**\n   * Interpolate a regexp string.\n   *\n   * @param  {string} str\n   * @param  {Array}  args\n   * @return {string}\n   */\n  function interpolate (str, args) {\n    return str.replace(/\\$(\\d{1,2})/g, function (match, index) {\n      return args[index] || '';\n    });\n  }\n\n  /**\n   * Sanitize a word by passing in the word and sanitization rules.\n   *\n   * @param  {string}   token\n   * @param  {string}   word\n   * @param  {Array}    collection\n   * @return {string}\n   */\n  function sanitizeWord (token, word, collection) {\n    // Empty string or doesn't need fixing.\n    if (!token.length || uncountables.hasOwnProperty(token)) {\n      return word;\n    }\n\n    var len = collection.length;\n\n    // Iterate over the sanitization rules and use the first one to match.\n    while (len--) {\n      var rule = collection[len];\n\n      // If the rule passes, return the replacement.\n      if (rule[0].test(word)) {\n        return word.replace(rule[0], function (match, index, word) {\n          var result = interpolate(rule[1], arguments);\n\n          if (match === '') {\n            return restoreCase(word[index - 1], result);\n          }\n\n          return restoreCase(match, result);\n        });\n      }\n    }\n\n    return word;\n  }\n\n  /**\n   * Replace a word with the updated word.\n   *\n   * @param  {Object}   replaceMap\n   * @param  {Object}   keepMap\n   * @param  {Array}    rules\n   * @return {Function}\n   */\n  function replaceWord (replaceMap, keepMap, rules) {\n    return function (word) {\n      // Get the correct token and case restoration functions.\n      var token = word.toLowerCase();\n\n      // Check against the keep object map.\n      if (keepMap.hasOwnProperty(token)) {\n        return restoreCase(word, token);\n      }\n\n      // Check against the replacement map for a direct word replacement.\n      if (replaceMap.hasOwnProperty(token)) {\n        return restoreCase(word, replaceMap[token]);\n      }\n\n      // Run all the rules against the word.\n      return sanitizeWord(token, word, rules);\n    };\n  }\n\n  /**\n   * Pluralize or singularize a word based on the passed in count.\n   *\n   * @param  {string}  word\n   * @param  {number}  count\n   * @param  {boolean} inclusive\n   * @return {string}\n   */\n  function pluralize (word, count, inclusive) {\n    var pluralized = count === 1\n      ? pluralize.singular(word) : pluralize.plural(word);\n\n    return (inclusive ? count + ' ' : '') + pluralized;\n  }\n\n  /**\n   * Pluralize a word.\n   *\n   * @type {Function}\n   */\n  pluralize.plural = replaceWord(\n    irregularSingles, irregularPlurals, pluralRules\n  );\n\n  /**\n   * Singularize a word.\n   *\n   * @type {Function}\n   */\n  pluralize.singular = replaceWord(\n    irregularPlurals, irregularSingles, singularRules\n  );\n\n  /**\n   * Add a pluralization rule to the collection.\n   *\n   * @param {(string|RegExp)} rule\n   * @param {string}          replacement\n   */\n  pluralize.addPluralRule = function (rule, replacement) {\n    pluralRules.push([sanitizeRule(rule), replacement]);\n  };\n\n  /**\n   * Add a singularization rule to the collection.\n   *\n   * @param {(string|RegExp)} rule\n   * @param {string}          replacement\n   */\n  pluralize.addSingularRule = function (rule, replacement) {\n    singularRules.push([sanitizeRule(rule), replacement]);\n  };\n\n  /**\n   * Add an uncountable word rule.\n   *\n   * @param {(string|RegExp)} word\n   */\n  pluralize.addUncountableRule = function (word) {\n    if (typeof word === 'string') {\n      uncountables[word.toLowerCase()] = true;\n      return;\n    }\n\n    // Set singular and plural references for the word.\n    pluralize.addPluralRule(word, '$0');\n    pluralize.addSingularRule(word, '$0');\n  };\n\n  /**\n   * Add an irregular word definition.\n   *\n   * @param {string} single\n   * @param {string} plural\n   */\n  pluralize.addIrregularRule = function (single, plural) {\n    plural = plural.toLowerCase();\n    single = single.toLowerCase();\n\n    irregularSingles[single] = plural;\n    irregularPlurals[plural] = single;\n  };\n\n  /**\n   * Irregular rules.\n   */\n  [\n    // Pronouns.\n    ['I', 'we'],\n    ['me', 'us'],\n    ['he', 'they'],\n    ['she', 'they'],\n    ['them', 'them'],\n    ['myself', 'ourselves'],\n    ['yourself', 'yourselves'],\n    ['itself', 'themselves'],\n    ['herself', 'themselves'],\n    ['himself', 'themselves'],\n    ['themself', 'themselves'],\n    ['is', 'are'],\n    ['was', 'were'],\n    ['has', 'have'],\n    ['this', 'these'],\n    ['that', 'those'],\n    // Words ending in with a consonant and `o`.\n    ['echo', 'echoes'],\n    ['dingo', 'dingoes'],\n    ['volcano', 'volcanoes'],\n    ['tornado', 'tornadoes'],\n    ['torpedo', 'torpedoes'],\n    // Ends with `us`.\n    ['genus', 'genera'],\n    ['viscus', 'viscera'],\n    // Ends with `ma`.\n    ['stigma', 'stigmata'],\n    ['stoma', 'stomata'],\n    ['dogma', 'dogmata'],\n    ['lemma', 'lemmata'],\n    ['schema', 'schemata'],\n    ['anathema', 'anathemata'],\n    // Other irregular rules.\n    ['ox', 'oxen'],\n    ['axe', 'axes'],\n    ['die', 'dice'],\n    ['yes', 'yeses'],\n    ['foot', 'feet'],\n    ['eave', 'eaves'],\n    ['goose', 'geese'],\n    ['tooth', 'teeth'],\n    ['quiz', 'quizzes'],\n    ['human', 'humans'],\n    ['proof', 'proofs'],\n    ['carve', 'carves'],\n    ['valve', 'valves'],\n    ['looey', 'looies'],\n    ['thief', 'thieves'],\n    ['groove', 'grooves'],\n    ['pickaxe', 'pickaxes'],\n    ['whiskey', 'whiskies']\n  ].forEach(function (rule) {\n    return pluralize.addIrregularRule(rule[0], rule[1]);\n  });\n\n  /**\n   * Pluralization rules.\n   */\n  [\n    [/s?$/i, 's'],\n    [/([^aeiou]ese)$/i, '$1'],\n    [/(ax|test)is$/i, '$1es'],\n    [/(alias|[^aou]us|tlas|gas|ris)$/i, '$1es'],\n    [/(e[mn]u)s?$/i, '$1s'],\n    [/([^l]ias|[aeiou]las|[emjzr]as|[iu]am)$/i, '$1'],\n    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],\n    [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],\n    [/(seraph|cherub)(?:im)?$/i, '$1im'],\n    [/(her|at|gr)o$/i, '$1oes'],\n    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, '$1a'],\n    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, '$1a'],\n    [/sis$/i, 'ses'],\n    [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],\n    [/([^aeiouy]|qu)y$/i, '$1ies'],\n    [/([^ch][ieo][ln])ey$/i, '$1ies'],\n    [/(x|ch|ss|sh|zz)$/i, '$1es'],\n    [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],\n    [/(m|l)(?:ice|ouse)$/i, '$1ice'],\n    [/(pe)(?:rson|ople)$/i, '$1ople'],\n    [/(child)(?:ren)?$/i, '$1ren'],\n    [/eaux$/i, '$0'],\n    [/m[ae]n$/i, 'men'],\n    ['thou', 'you']\n  ].forEach(function (rule) {\n    return pluralize.addPluralRule(rule[0], rule[1]);\n  });\n\n  /**\n   * Singularization rules.\n   */\n  [\n    [/s$/i, ''],\n    [/(ss)$/i, '$1'],\n    [/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(?:sis|ses)$/i, '$1sis'],\n    [/(^analy)(?:sis|ses)$/i, '$1sis'],\n    [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\\w]|^)li)ves$/i, '$1fe'],\n    [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],\n    [/ies$/i, 'y'],\n    [/\\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, '$1ie'],\n    [/\\b(mon|smil)ies$/i, '$1ey'],\n    [/(m|l)ice$/i, '$1ouse'],\n    [/(seraph|cherub)im$/i, '$1'],\n    [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|tlas|gas|(?:her|at|gr)o|ris)(?:es)?$/i, '$1'],\n    [/(e[mn]u)s?$/i, '$1'],\n    [/(movie|twelve)s$/i, '$1'],\n    [/(cris|test|diagnos)(?:is|es)$/i, '$1is'],\n    [/(alumn|syllab|octop|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],\n    [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, '$1um'],\n    [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, '$1on'],\n    [/(alumn|alg|vertebr)ae$/i, '$1a'],\n    [/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],\n    [/(matr|append)ices$/i, '$1ix'],\n    [/(pe)(rson|ople)$/i, '$1rson'],\n    [/(child)ren$/i, '$1'],\n    [/(eau)x?$/i, '$1'],\n    [/men$/i, 'man']\n  ].forEach(function (rule) {\n    return pluralize.addSingularRule(rule[0], rule[1]);\n  });\n\n  /**\n   * Uncountable rules.\n   */\n  [\n    // Singular words with no plurals.\n    'advice',\n    'adulthood',\n    'agenda',\n    'aid',\n    'alcohol',\n    'ammo',\n    'athletics',\n    'bison',\n    'blood',\n    'bream',\n    'buffalo',\n    'butter',\n    'carp',\n    'cash',\n    'chassis',\n    'chess',\n    'clothing',\n    'commerce',\n    'cod',\n    'cooperation',\n    'corps',\n    'digestion',\n    'debris',\n    'diabetes',\n    'energy',\n    'equipment',\n    'elk',\n    'excretion',\n    'expertise',\n    'flounder',\n    'fun',\n    'gallows',\n    'garbage',\n    'graffiti',\n    'headquarters',\n    'health',\n    'herpes',\n    'highjinks',\n    'homework',\n    'housework',\n    'information',\n    'jeans',\n    'justice',\n    'kudos',\n    'labour',\n    'literature',\n    'machinery',\n    'mackerel',\n    'mail',\n    'media',\n    'mews',\n    'moose',\n    'music',\n    'news',\n    'pike',\n    'plankton',\n    'pliers',\n    'pollution',\n    'premises',\n    'rain',\n    'research',\n    'rice',\n    'salmon',\n    'scissors',\n    'series',\n    'sewage',\n    'shambles',\n    'shrimp',\n    'species',\n    'staff',\n    'swine',\n    'trout',\n    'traffic',\n    'transporation',\n    'tuna',\n    'wealth',\n    'welfare',\n    'whiting',\n    'wildebeest',\n    'wildlife',\n    'you',\n    // Regexes.\n    /pox$/i, // \"chickpox\", \"smallpox\"\n    /ois$/i,\n    /deer$/i, // \"deer\", \"reindeer\"\n    /fish$/i, // \"fish\", \"blowfish\", \"angelfish\"\n    /sheep$/i,\n    /measles$/i,\n    /[^aeiou]ese$/i // \"chinese\", \"japanese\"\n  ].forEach(pluralize.addUncountableRule);\n\n  return pluralize;\n});\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/json-to-ts/node_modules/pluralize/pluralize.js?");

/***/ }),

/***/ "./node_modules/minimalistic-assert/index.js":
/*!***************************************************!*\
  !*** ./node_modules/minimalistic-assert/index.js ***!
  \***************************************************/
/***/ ((module) => {

eval("module.exports = assert;\n\nfunction assert(val, msg) {\n  if (!val)\n    throw new Error(msg || 'Assertion failed');\n}\n\nassert.equal = function assertEqual(l, r, msg) {\n  if (l != r)\n    throw new Error(msg || ('Assertion failed: ' + l + ' != ' + r));\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/minimalistic-assert/index.js?");

/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/***/ (function(module) {

eval("(function (global, factory) {\n   true ? module.exports = factory() :\n  0;\n}(this, (function () { 'use strict';\n\n  /*!\n   * mustache.js - Logic-less {{mustache}} templates with JavaScript\n   * http://github.com/janl/mustache.js\n   */\n\n  var objectToString = Object.prototype.toString;\n  var isArray = Array.isArray || function isArrayPolyfill (object) {\n    return objectToString.call(object) === '[object Array]';\n  };\n\n  function isFunction (object) {\n    return typeof object === 'function';\n  }\n\n  /**\n   * More correct typeof string handling array\n   * which normally returns typeof 'object'\n   */\n  function typeStr (obj) {\n    return isArray(obj) ? 'array' : typeof obj;\n  }\n\n  function escapeRegExp (string) {\n    return string.replace(/[\\-\\[\\]{}()*+?.,\\\\\\^$|#\\s]/g, '\\\\$&');\n  }\n\n  /**\n   * Null safe way of checking whether or not an object,\n   * including its prototype, has a given property\n   */\n  function hasProperty (obj, propName) {\n    return obj != null && typeof obj === 'object' && (propName in obj);\n  }\n\n  /**\n   * Safe way of detecting whether or not the given thing is a primitive and\n   * whether it has the given property\n   */\n  function primitiveHasOwnProperty (primitive, propName) {\n    return (\n      primitive != null\n      && typeof primitive !== 'object'\n      && primitive.hasOwnProperty\n      && primitive.hasOwnProperty(propName)\n    );\n  }\n\n  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577\n  // See https://github.com/janl/mustache.js/issues/189\n  var regExpTest = RegExp.prototype.test;\n  function testRegExp (re, string) {\n    return regExpTest.call(re, string);\n  }\n\n  var nonSpaceRe = /\\S/;\n  function isWhitespace (string) {\n    return !testRegExp(nonSpaceRe, string);\n  }\n\n  var entityMap = {\n    '&': '&amp;',\n    '<': '&lt;',\n    '>': '&gt;',\n    '\"': '&quot;',\n    \"'\": '&#39;',\n    '/': '&#x2F;',\n    '`': '&#x60;',\n    '=': '&#x3D;'\n  };\n\n  function escapeHtml (string) {\n    return String(string).replace(/[&<>\"'`=\\/]/g, function fromEntityMap (s) {\n      return entityMap[s];\n    });\n  }\n\n  var whiteRe = /\\s*/;\n  var spaceRe = /\\s+/;\n  var equalsRe = /\\s*=/;\n  var curlyRe = /\\s*\\}/;\n  var tagRe = /#|\\^|\\/|>|\\{|&|=|!/;\n\n  /**\n   * Breaks up the given `template` string into a tree of tokens. If the `tags`\n   * argument is given here it must be an array with two string values: the\n   * opening and closing tags used in the template (e.g. [ \"<%\", \"%>\" ]). Of\n   * course, the default is to use mustaches (i.e. mustache.tags).\n   *\n   * A token is an array with at least 4 elements. The first element is the\n   * mustache symbol that was used inside the tag, e.g. \"#\" or \"&\". If the tag\n   * did not contain a symbol (i.e. {{myValue}}) this element is \"name\". For\n   * all text that appears outside a symbol this element is \"text\".\n   *\n   * The second element of a token is its \"value\". For mustache tags this is\n   * whatever else was inside the tag besides the opening symbol. For text tokens\n   * this is the text itself.\n   *\n   * The third and fourth elements of the token are the start and end indices,\n   * respectively, of the token in the original template.\n   *\n   * Tokens that are the root node of a subtree contain two more elements: 1) an\n   * array of tokens in the subtree and 2) the index in the original template at\n   * which the closing tag for that section begins.\n   *\n   * Tokens for partials also contain two more elements: 1) a string value of\n   * indendation prior to that tag and 2) the index of that tag on that line -\n   * eg a value of 2 indicates the partial is the third tag on this line.\n   */\n  function parseTemplate (template, tags) {\n    if (!template)\n      return [];\n    var lineHasNonSpace = false;\n    var sections = [];     // Stack to hold section tokens\n    var tokens = [];       // Buffer to hold the tokens\n    var spaces = [];       // Indices of whitespace tokens on the current line\n    var hasTag = false;    // Is there a {{tag}} on the current line?\n    var nonSpace = false;  // Is there a non-space char on the current line?\n    var indentation = '';  // Tracks indentation for tags that use it\n    var tagIndex = 0;      // Stores a count of number of tags encountered on a line\n\n    // Strips all whitespace tokens array for the current line\n    // if there was a {{#tag}} on it and otherwise only space.\n    function stripSpace () {\n      if (hasTag && !nonSpace) {\n        while (spaces.length)\n          delete tokens[spaces.pop()];\n      } else {\n        spaces = [];\n      }\n\n      hasTag = false;\n      nonSpace = false;\n    }\n\n    var openingTagRe, closingTagRe, closingCurlyRe;\n    function compileTags (tagsToCompile) {\n      if (typeof tagsToCompile === 'string')\n        tagsToCompile = tagsToCompile.split(spaceRe, 2);\n\n      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)\n        throw new Error('Invalid tags: ' + tagsToCompile);\n\n      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\\\s*');\n      closingTagRe = new RegExp('\\\\s*' + escapeRegExp(tagsToCompile[1]));\n      closingCurlyRe = new RegExp('\\\\s*' + escapeRegExp('}' + tagsToCompile[1]));\n    }\n\n    compileTags(tags || mustache.tags);\n\n    var scanner = new Scanner(template);\n\n    var start, type, value, chr, token, openSection;\n    while (!scanner.eos()) {\n      start = scanner.pos;\n\n      // Match any text between tags.\n      value = scanner.scanUntil(openingTagRe);\n\n      if (value) {\n        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {\n          chr = value.charAt(i);\n\n          if (isWhitespace(chr)) {\n            spaces.push(tokens.length);\n            indentation += chr;\n          } else {\n            nonSpace = true;\n            lineHasNonSpace = true;\n            indentation += ' ';\n          }\n\n          tokens.push([ 'text', chr, start, start + 1 ]);\n          start += 1;\n\n          // Check for whitespace on the current line.\n          if (chr === '\\n') {\n            stripSpace();\n            indentation = '';\n            tagIndex = 0;\n            lineHasNonSpace = false;\n          }\n        }\n      }\n\n      // Match the opening tag.\n      if (!scanner.scan(openingTagRe))\n        break;\n\n      hasTag = true;\n\n      // Get the tag type.\n      type = scanner.scan(tagRe) || 'name';\n      scanner.scan(whiteRe);\n\n      // Get the tag value.\n      if (type === '=') {\n        value = scanner.scanUntil(equalsRe);\n        scanner.scan(equalsRe);\n        scanner.scanUntil(closingTagRe);\n      } else if (type === '{') {\n        value = scanner.scanUntil(closingCurlyRe);\n        scanner.scan(curlyRe);\n        scanner.scanUntil(closingTagRe);\n        type = '&';\n      } else {\n        value = scanner.scanUntil(closingTagRe);\n      }\n\n      // Match the closing tag.\n      if (!scanner.scan(closingTagRe))\n        throw new Error('Unclosed tag at ' + scanner.pos);\n\n      if (type == '>') {\n        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];\n      } else {\n        token = [ type, value, start, scanner.pos ];\n      }\n      tagIndex++;\n      tokens.push(token);\n\n      if (type === '#' || type === '^') {\n        sections.push(token);\n      } else if (type === '/') {\n        // Check section nesting.\n        openSection = sections.pop();\n\n        if (!openSection)\n          throw new Error('Unopened section \"' + value + '\" at ' + start);\n\n        if (openSection[1] !== value)\n          throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + start);\n      } else if (type === 'name' || type === '{' || type === '&') {\n        nonSpace = true;\n      } else if (type === '=') {\n        // Set the tags for the next time around.\n        compileTags(value);\n      }\n    }\n\n    stripSpace();\n\n    // Make sure there are no open sections when we're done.\n    openSection = sections.pop();\n\n    if (openSection)\n      throw new Error('Unclosed section \"' + openSection[1] + '\" at ' + scanner.pos);\n\n    return nestTokens(squashTokens(tokens));\n  }\n\n  /**\n   * Combines the values of consecutive text tokens in the given `tokens` array\n   * to a single token.\n   */\n  function squashTokens (tokens) {\n    var squashedTokens = [];\n\n    var token, lastToken;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      token = tokens[i];\n\n      if (token) {\n        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {\n          lastToken[1] += token[1];\n          lastToken[3] = token[3];\n        } else {\n          squashedTokens.push(token);\n          lastToken = token;\n        }\n      }\n    }\n\n    return squashedTokens;\n  }\n\n  /**\n   * Forms the given array of `tokens` into a nested tree structure where\n   * tokens that represent a section have two additional items: 1) an array of\n   * all tokens that appear in that section and 2) the index in the original\n   * template that represents the end of that section.\n   */\n  function nestTokens (tokens) {\n    var nestedTokens = [];\n    var collector = nestedTokens;\n    var sections = [];\n\n    var token, section;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      token = tokens[i];\n\n      switch (token[0]) {\n        case '#':\n        case '^':\n          collector.push(token);\n          sections.push(token);\n          collector = token[4] = [];\n          break;\n        case '/':\n          section = sections.pop();\n          section[5] = token[2];\n          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;\n          break;\n        default:\n          collector.push(token);\n      }\n    }\n\n    return nestedTokens;\n  }\n\n  /**\n   * A simple string scanner that is used by the template parser to find\n   * tokens in template strings.\n   */\n  function Scanner (string) {\n    this.string = string;\n    this.tail = string;\n    this.pos = 0;\n  }\n\n  /**\n   * Returns `true` if the tail is empty (end of string).\n   */\n  Scanner.prototype.eos = function eos () {\n    return this.tail === '';\n  };\n\n  /**\n   * Tries to match the given regular expression at the current position.\n   * Returns the matched text if it can match, the empty string otherwise.\n   */\n  Scanner.prototype.scan = function scan (re) {\n    var match = this.tail.match(re);\n\n    if (!match || match.index !== 0)\n      return '';\n\n    var string = match[0];\n\n    this.tail = this.tail.substring(string.length);\n    this.pos += string.length;\n\n    return string;\n  };\n\n  /**\n   * Skips all text until the given regular expression can be matched. Returns\n   * the skipped string, which is the entire tail if no match can be made.\n   */\n  Scanner.prototype.scanUntil = function scanUntil (re) {\n    var index = this.tail.search(re), match;\n\n    switch (index) {\n      case -1:\n        match = this.tail;\n        this.tail = '';\n        break;\n      case 0:\n        match = '';\n        break;\n      default:\n        match = this.tail.substring(0, index);\n        this.tail = this.tail.substring(index);\n    }\n\n    this.pos += match.length;\n\n    return match;\n  };\n\n  /**\n   * Represents a rendering context by wrapping a view object and\n   * maintaining a reference to the parent context.\n   */\n  function Context (view, parentContext) {\n    this.view = view;\n    this.cache = { '.': this.view };\n    this.parent = parentContext;\n  }\n\n  /**\n   * Creates a new context using the given view with this context\n   * as the parent.\n   */\n  Context.prototype.push = function push (view) {\n    return new Context(view, this);\n  };\n\n  /**\n   * Returns the value of the given name in this context, traversing\n   * up the context hierarchy if the value is absent in this context's view.\n   */\n  Context.prototype.lookup = function lookup (name) {\n    var cache = this.cache;\n\n    var value;\n    if (cache.hasOwnProperty(name)) {\n      value = cache[name];\n    } else {\n      var context = this, intermediateValue, names, index, lookupHit = false;\n\n      while (context) {\n        if (name.indexOf('.') > 0) {\n          intermediateValue = context.view;\n          names = name.split('.');\n          index = 0;\n\n          /**\n           * Using the dot notion path in `name`, we descend through the\n           * nested objects.\n           *\n           * To be certain that the lookup has been successful, we have to\n           * check if the last object in the path actually has the property\n           * we are looking for. We store the result in `lookupHit`.\n           *\n           * This is specially necessary for when the value has been set to\n           * `undefined` and we want to avoid looking up parent contexts.\n           *\n           * In the case where dot notation is used, we consider the lookup\n           * to be successful even if the last \"object\" in the path is\n           * not actually an object but a primitive (e.g., a string, or an\n           * integer), because it is sometimes useful to access a property\n           * of an autoboxed primitive, such as the length of a string.\n           **/\n          while (intermediateValue != null && index < names.length) {\n            if (index === names.length - 1)\n              lookupHit = (\n                hasProperty(intermediateValue, names[index])\n                || primitiveHasOwnProperty(intermediateValue, names[index])\n              );\n\n            intermediateValue = intermediateValue[names[index++]];\n          }\n        } else {\n          intermediateValue = context.view[name];\n\n          /**\n           * Only checking against `hasProperty`, which always returns `false` if\n           * `context.view` is not an object. Deliberately omitting the check\n           * against `primitiveHasOwnProperty` if dot notation is not used.\n           *\n           * Consider this example:\n           * ```\n           * Mustache.render(\"The length of a football field is {{#length}}{{length}}{{/length}}.\", {length: \"100 yards\"})\n           * ```\n           *\n           * If we were to check also against `primitiveHasOwnProperty`, as we do\n           * in the dot notation case, then render call would return:\n           *\n           * \"The length of a football field is 9.\"\n           *\n           * rather than the expected:\n           *\n           * \"The length of a football field is 100 yards.\"\n           **/\n          lookupHit = hasProperty(context.view, name);\n        }\n\n        if (lookupHit) {\n          value = intermediateValue;\n          break;\n        }\n\n        context = context.parent;\n      }\n\n      cache[name] = value;\n    }\n\n    if (isFunction(value))\n      value = value.call(this.view);\n\n    return value;\n  };\n\n  /**\n   * A Writer knows how to take a stream of tokens and render them to a\n   * string, given a context. It also maintains a cache of templates to\n   * avoid the need to parse the same template twice.\n   */\n  function Writer () {\n    this.templateCache = {\n      _cache: {},\n      set: function set (key, value) {\n        this._cache[key] = value;\n      },\n      get: function get (key) {\n        return this._cache[key];\n      },\n      clear: function clear () {\n        this._cache = {};\n      }\n    };\n  }\n\n  /**\n   * Clears all cached templates in this writer.\n   */\n  Writer.prototype.clearCache = function clearCache () {\n    if (typeof this.templateCache !== 'undefined') {\n      this.templateCache.clear();\n    }\n  };\n\n  /**\n   * Parses and caches the given `template` according to the given `tags` or\n   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens\n   * that is generated from the parse.\n   */\n  Writer.prototype.parse = function parse (template, tags) {\n    var cache = this.templateCache;\n    var cacheKey = template + ':' + (tags || mustache.tags).join(':');\n    var isCacheEnabled = typeof cache !== 'undefined';\n    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;\n\n    if (tokens == undefined) {\n      tokens = parseTemplate(template, tags);\n      isCacheEnabled && cache.set(cacheKey, tokens);\n    }\n    return tokens;\n  };\n\n  /**\n   * High-level method that is used to render the given `template` with\n   * the given `view`.\n   *\n   * The optional `partials` argument may be an object that contains the\n   * names and templates of partials that are used in the template. It may\n   * also be a function that is used to load partial templates on the fly\n   * that takes a single argument: the name of the partial.\n   *\n   * If the optional `config` argument is given here, then it should be an\n   * object with a `tags` attribute or an `escape` attribute or both.\n   * If an array is passed, then it will be interpreted the same way as\n   * a `tags` attribute on a `config` object.\n   *\n   * The `tags` attribute of a `config` object must be an array with two\n   * string values: the opening and closing tags used in the template (e.g.\n   * [ \"<%\", \"%>\" ]). The default is to mustache.tags.\n   *\n   * The `escape` attribute of a `config` object must be a function which\n   * accepts a string as input and outputs a safely escaped string.\n   * If an `escape` function is not provided, then an HTML-safe string\n   * escaping function is used as the default.\n   */\n  Writer.prototype.render = function render (template, view, partials, config) {\n    var tags = this.getConfigTags(config);\n    var tokens = this.parse(template, tags);\n    var context = (view instanceof Context) ? view : new Context(view, undefined);\n    return this.renderTokens(tokens, context, partials, template, config);\n  };\n\n  /**\n   * Low-level method that renders the given array of `tokens` using\n   * the given `context` and `partials`.\n   *\n   * Note: The `originalTemplate` is only ever used to extract the portion\n   * of the original template that was contained in a higher-order section.\n   * If the template doesn't use higher-order sections, this argument may\n   * be omitted.\n   */\n  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, config) {\n    var buffer = '';\n\n    var token, symbol, value;\n    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {\n      value = undefined;\n      token = tokens[i];\n      symbol = token[0];\n\n      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate, config);\n      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate, config);\n      else if (symbol === '>') value = this.renderPartial(token, context, partials, config);\n      else if (symbol === '&') value = this.unescapedValue(token, context);\n      else if (symbol === 'name') value = this.escapedValue(token, context, config);\n      else if (symbol === 'text') value = this.rawValue(token);\n\n      if (value !== undefined)\n        buffer += value;\n    }\n\n    return buffer;\n  };\n\n  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate, config) {\n    var self = this;\n    var buffer = '';\n    var value = context.lookup(token[1]);\n\n    // This function is used to render an arbitrary template\n    // in the current context by higher-order sections.\n    function subRender (template) {\n      return self.render(template, context, partials, config);\n    }\n\n    if (!value) return;\n\n    if (isArray(value)) {\n      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {\n        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate, config);\n      }\n    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {\n      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate, config);\n    } else if (isFunction(value)) {\n      if (typeof originalTemplate !== 'string')\n        throw new Error('Cannot use higher-order sections without the original template');\n\n      // Extract the portion of the original template that the section contains.\n      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);\n\n      if (value != null)\n        buffer += value;\n    } else {\n      buffer += this.renderTokens(token[4], context, partials, originalTemplate, config);\n    }\n    return buffer;\n  };\n\n  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate, config) {\n    var value = context.lookup(token[1]);\n\n    // Use JavaScript's definition of falsy. Include empty arrays.\n    // See https://github.com/janl/mustache.js/issues/186\n    if (!value || (isArray(value) && value.length === 0))\n      return this.renderTokens(token[4], context, partials, originalTemplate, config);\n  };\n\n  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {\n    var filteredIndentation = indentation.replace(/[^ \\t]/g, '');\n    var partialByNl = partial.split('\\n');\n    for (var i = 0; i < partialByNl.length; i++) {\n      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {\n        partialByNl[i] = filteredIndentation + partialByNl[i];\n      }\n    }\n    return partialByNl.join('\\n');\n  };\n\n  Writer.prototype.renderPartial = function renderPartial (token, context, partials, config) {\n    if (!partials) return;\n    var tags = this.getConfigTags(config);\n\n    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];\n    if (value != null) {\n      var lineHasNonSpace = token[6];\n      var tagIndex = token[5];\n      var indentation = token[4];\n      var indentedValue = value;\n      if (tagIndex == 0 && indentation) {\n        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);\n      }\n      var tokens = this.parse(indentedValue, tags);\n      return this.renderTokens(tokens, context, partials, indentedValue, config);\n    }\n  };\n\n  Writer.prototype.unescapedValue = function unescapedValue (token, context) {\n    var value = context.lookup(token[1]);\n    if (value != null)\n      return value;\n  };\n\n  Writer.prototype.escapedValue = function escapedValue (token, context, config) {\n    var escape = this.getConfigEscape(config) || mustache.escape;\n    var value = context.lookup(token[1]);\n    if (value != null)\n      return (typeof value === 'number' && escape === mustache.escape) ? String(value) : escape(value);\n  };\n\n  Writer.prototype.rawValue = function rawValue (token) {\n    return token[1];\n  };\n\n  Writer.prototype.getConfigTags = function getConfigTags (config) {\n    if (isArray(config)) {\n      return config;\n    }\n    else if (config && typeof config === 'object') {\n      return config.tags;\n    }\n    else {\n      return undefined;\n    }\n  };\n\n  Writer.prototype.getConfigEscape = function getConfigEscape (config) {\n    if (config && typeof config === 'object' && !isArray(config)) {\n      return config.escape;\n    }\n    else {\n      return undefined;\n    }\n  };\n\n  var mustache = {\n    name: 'mustache.js',\n    version: '4.2.0',\n    tags: [ '{{', '}}' ],\n    clearCache: undefined,\n    escape: undefined,\n    parse: undefined,\n    render: undefined,\n    Scanner: undefined,\n    Context: undefined,\n    Writer: undefined,\n    /**\n     * Allows a user to override the default caching strategy, by providing an\n     * object with set, get and clear methods. This can also be used to disable\n     * the cache by setting it to the literal `undefined`.\n     */\n    set templateCache (cache) {\n      defaultWriter.templateCache = cache;\n    },\n    /**\n     * Gets the default or overridden caching object from the default writer.\n     */\n    get templateCache () {\n      return defaultWriter.templateCache;\n    }\n  };\n\n  // All high-level mustache.* functions use this writer.\n  var defaultWriter = new Writer();\n\n  /**\n   * Clears all cached templates in the default writer.\n   */\n  mustache.clearCache = function clearCache () {\n    return defaultWriter.clearCache();\n  };\n\n  /**\n   * Parses and caches the given template in the default writer and returns the\n   * array of tokens it contains. Doing this ahead of time avoids the need to\n   * parse templates on the fly as they are rendered.\n   */\n  mustache.parse = function parse (template, tags) {\n    return defaultWriter.parse(template, tags);\n  };\n\n  /**\n   * Renders the `template` with the given `view`, `partials`, and `config`\n   * using the default writer.\n   */\n  mustache.render = function render (template, view, partials, config) {\n    if (typeof template !== 'string') {\n      throw new TypeError('Invalid template! Template should be a \"string\" ' +\n                          'but \"' + typeStr(template) + '\" was given as the first ' +\n                          'argument for mustache#render(template, view, partials)');\n    }\n\n    return defaultWriter.render(template, view, partials, config);\n  };\n\n  // Export the escaping function so that the user may override it.\n  // See https://github.com/janl/mustache.js/issues/244\n  mustache.escape = escapeHtml;\n\n  // Export these mainly for testing, but also for advanced usage.\n  mustache.Scanner = Scanner;\n  mustache.Context = Context;\n  mustache.Writer = Writer;\n\n  return mustache;\n\n})));\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/mustache/mustache.js?");

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var hasMap = typeof Map === 'function' && Map.prototype;\nvar mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;\nvar mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;\nvar mapForEach = hasMap && Map.prototype.forEach;\nvar hasSet = typeof Set === 'function' && Set.prototype;\nvar setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;\nvar setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;\nvar setForEach = hasSet && Set.prototype.forEach;\nvar hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;\nvar weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;\nvar hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;\nvar weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;\nvar hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;\nvar weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;\nvar booleanValueOf = Boolean.prototype.valueOf;\nvar objectToString = Object.prototype.toString;\nvar functionToString = Function.prototype.toString;\nvar $match = String.prototype.match;\nvar $slice = String.prototype.slice;\nvar $replace = String.prototype.replace;\nvar $toUpperCase = String.prototype.toUpperCase;\nvar $toLowerCase = String.prototype.toLowerCase;\nvar $test = RegExp.prototype.test;\nvar $concat = Array.prototype.concat;\nvar $join = Array.prototype.join;\nvar $arrSlice = Array.prototype.slice;\nvar $floor = Math.floor;\nvar bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;\nvar gOPS = Object.getOwnPropertySymbols;\nvar symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;\nvar hasShammedSymbols = typeof Symbol === 'function' && typeof Symbol.iterator === 'object';\n// ie, `has-tostringtag/shams\nvar toStringTag = typeof Symbol === 'function' && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? 'object' : 'symbol')\n    ? Symbol.toStringTag\n    : null;\nvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\nvar gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (\n    [].__proto__ === Array.prototype // eslint-disable-line no-proto\n        ? function (O) {\n            return O.__proto__; // eslint-disable-line no-proto\n        }\n        : null\n);\n\nfunction addNumericSeparator(num, str) {\n    if (\n        num === Infinity\n        || num === -Infinity\n        || num !== num\n        || (num && num > -1000 && num < 1000)\n        || $test.call(/e/, str)\n    ) {\n        return str;\n    }\n    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;\n    if (typeof num === 'number') {\n        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)\n        if (int !== num) {\n            var intStr = String(int);\n            var dec = $slice.call(str, intStr.length + 1);\n            return $replace.call(intStr, sepRegex, '$&_') + '.' + $replace.call($replace.call(dec, /([0-9]{3})/g, '$&_'), /_$/, '');\n        }\n    }\n    return $replace.call(str, sepRegex, '$&_');\n}\n\nvar utilInspect = __webpack_require__(/*! ./util.inspect */ \"?4f7e\");\nvar inspectCustom = utilInspect.custom;\nvar inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;\n\nmodule.exports = function inspect_(obj, options, depth, seen) {\n    var opts = options || {};\n\n    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {\n        throw new TypeError('option \"quoteStyle\" must be \"single\" or \"double\"');\n    }\n    if (\n        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'\n            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity\n            : opts.maxStringLength !== null\n        )\n    ) {\n        throw new TypeError('option \"maxStringLength\", if provided, must be a positive integer, Infinity, or `null`');\n    }\n    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;\n    if (typeof customInspect !== 'boolean' && customInspect !== 'symbol') {\n        throw new TypeError('option \"customInspect\", if provided, must be `true`, `false`, or `\\'symbol\\'`');\n    }\n\n    if (\n        has(opts, 'indent')\n        && opts.indent !== null\n        && opts.indent !== '\\t'\n        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)\n    ) {\n        throw new TypeError('option \"indent\" must be \"\\\\t\", an integer > 0, or `null`');\n    }\n    if (has(opts, 'numericSeparator') && typeof opts.numericSeparator !== 'boolean') {\n        throw new TypeError('option \"numericSeparator\", if provided, must be `true` or `false`');\n    }\n    var numericSeparator = opts.numericSeparator;\n\n    if (typeof obj === 'undefined') {\n        return 'undefined';\n    }\n    if (obj === null) {\n        return 'null';\n    }\n    if (typeof obj === 'boolean') {\n        return obj ? 'true' : 'false';\n    }\n\n    if (typeof obj === 'string') {\n        return inspectString(obj, opts);\n    }\n    if (typeof obj === 'number') {\n        if (obj === 0) {\n            return Infinity / obj > 0 ? '0' : '-0';\n        }\n        var str = String(obj);\n        return numericSeparator ? addNumericSeparator(obj, str) : str;\n    }\n    if (typeof obj === 'bigint') {\n        var bigIntStr = String(obj) + 'n';\n        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;\n    }\n\n    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;\n    if (typeof depth === 'undefined') { depth = 0; }\n    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {\n        return isArray(obj) ? '[Array]' : '[Object]';\n    }\n\n    var indent = getIndent(opts, depth);\n\n    if (typeof seen === 'undefined') {\n        seen = [];\n    } else if (indexOf(seen, obj) >= 0) {\n        return '[Circular]';\n    }\n\n    function inspect(value, from, noIndent) {\n        if (from) {\n            seen = $arrSlice.call(seen);\n            seen.push(from);\n        }\n        if (noIndent) {\n            var newOpts = {\n                depth: opts.depth\n            };\n            if (has(opts, 'quoteStyle')) {\n                newOpts.quoteStyle = opts.quoteStyle;\n            }\n            return inspect_(value, newOpts, depth + 1, seen);\n        }\n        return inspect_(value, opts, depth + 1, seen);\n    }\n\n    if (typeof obj === 'function' && !isRegExp(obj)) { // in older engines, regexes are callable\n        var name = nameOf(obj);\n        var keys = arrObjKeys(obj, inspect);\n        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + $join.call(keys, ', ') + ' }' : '');\n    }\n    if (isSymbol(obj)) {\n        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\\(.*\\))_[^)]*$/, '$1') : symToString.call(obj);\n        return typeof obj === 'object' && !hasShammedSymbols ? markBoxed(symString) : symString;\n    }\n    if (isElement(obj)) {\n        var s = '<' + $toLowerCase.call(String(obj.nodeName));\n        var attrs = obj.attributes || [];\n        for (var i = 0; i < attrs.length; i++) {\n            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);\n        }\n        s += '>';\n        if (obj.childNodes && obj.childNodes.length) { s += '...'; }\n        s += '</' + $toLowerCase.call(String(obj.nodeName)) + '>';\n        return s;\n    }\n    if (isArray(obj)) {\n        if (obj.length === 0) { return '[]'; }\n        var xs = arrObjKeys(obj, inspect);\n        if (indent && !singleLineValues(xs)) {\n            return '[' + indentedJoin(xs, indent) + ']';\n        }\n        return '[ ' + $join.call(xs, ', ') + ' ]';\n    }\n    if (isError(obj)) {\n        var parts = arrObjKeys(obj, inspect);\n        if (!('cause' in Error.prototype) && 'cause' in obj && !isEnumerable.call(obj, 'cause')) {\n            return '{ [' + String(obj) + '] ' + $join.call($concat.call('[cause]: ' + inspect(obj.cause), parts), ', ') + ' }';\n        }\n        if (parts.length === 0) { return '[' + String(obj) + ']'; }\n        return '{ [' + String(obj) + '] ' + $join.call(parts, ', ') + ' }';\n    }\n    if (typeof obj === 'object' && customInspect) {\n        if (inspectSymbol && typeof obj[inspectSymbol] === 'function' && utilInspect) {\n            return utilInspect(obj, { depth: maxDepth - depth });\n        } else if (customInspect !== 'symbol' && typeof obj.inspect === 'function') {\n            return obj.inspect();\n        }\n    }\n    if (isMap(obj)) {\n        var mapParts = [];\n        if (mapForEach) {\n            mapForEach.call(obj, function (value, key) {\n                mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));\n            });\n        }\n        return collectionOf('Map', mapSize.call(obj), mapParts, indent);\n    }\n    if (isSet(obj)) {\n        var setParts = [];\n        if (setForEach) {\n            setForEach.call(obj, function (value) {\n                setParts.push(inspect(value, obj));\n            });\n        }\n        return collectionOf('Set', setSize.call(obj), setParts, indent);\n    }\n    if (isWeakMap(obj)) {\n        return weakCollectionOf('WeakMap');\n    }\n    if (isWeakSet(obj)) {\n        return weakCollectionOf('WeakSet');\n    }\n    if (isWeakRef(obj)) {\n        return weakCollectionOf('WeakRef');\n    }\n    if (isNumber(obj)) {\n        return markBoxed(inspect(Number(obj)));\n    }\n    if (isBigInt(obj)) {\n        return markBoxed(inspect(bigIntValueOf.call(obj)));\n    }\n    if (isBoolean(obj)) {\n        return markBoxed(booleanValueOf.call(obj));\n    }\n    if (isString(obj)) {\n        return markBoxed(inspect(String(obj)));\n    }\n    if (!isDate(obj) && !isRegExp(obj)) {\n        var ys = arrObjKeys(obj, inspect);\n        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;\n        var protoTag = obj instanceof Object ? '' : 'null prototype';\n        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? 'Object' : '';\n        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';\n        var tag = constructorTag + (stringTag || protoTag ? '[' + $join.call($concat.call([], stringTag || [], protoTag || []), ': ') + '] ' : '');\n        if (ys.length === 0) { return tag + '{}'; }\n        if (indent) {\n            return tag + '{' + indentedJoin(ys, indent) + '}';\n        }\n        return tag + '{ ' + $join.call(ys, ', ') + ' }';\n    }\n    return String(obj);\n};\n\nfunction wrapQuotes(s, defaultStyle, opts) {\n    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '\"' : \"'\";\n    return quoteChar + s + quoteChar;\n}\n\nfunction quote(s) {\n    return $replace.call(String(s), /\"/g, '&quot;');\n}\n\nfunction isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\nfunction isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }\n\n// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives\nfunction isSymbol(obj) {\n    if (hasShammedSymbols) {\n        return obj && typeof obj === 'object' && obj instanceof Symbol;\n    }\n    if (typeof obj === 'symbol') {\n        return true;\n    }\n    if (!obj || typeof obj !== 'object' || !symToString) {\n        return false;\n    }\n    try {\n        symToString.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isBigInt(obj) {\n    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {\n        return false;\n    }\n    try {\n        bigIntValueOf.call(obj);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nvar hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };\nfunction has(obj, key) {\n    return hasOwn.call(obj, key);\n}\n\nfunction toStr(obj) {\n    return objectToString.call(obj);\n}\n\nfunction nameOf(f) {\n    if (f.name) { return f.name; }\n    var m = $match.call(functionToString.call(f), /^function\\s*([\\w$]+)/);\n    if (m) { return m[1]; }\n    return null;\n}\n\nfunction indexOf(xs, x) {\n    if (xs.indexOf) { return xs.indexOf(x); }\n    for (var i = 0, l = xs.length; i < l; i++) {\n        if (xs[i] === x) { return i; }\n    }\n    return -1;\n}\n\nfunction isMap(x) {\n    if (!mapSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        mapSize.call(x);\n        try {\n            setSize.call(x);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof Map; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakMap(x) {\n    if (!weakMapHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakMapHas.call(x, weakMapHas);\n        try {\n            weakSetHas.call(x, weakSetHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakRef(x) {\n    if (!weakRefDeref || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakRefDeref.call(x);\n        return true;\n    } catch (e) {}\n    return false;\n}\n\nfunction isSet(x) {\n    if (!setSize || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        setSize.call(x);\n        try {\n            mapSize.call(x);\n        } catch (m) {\n            return true;\n        }\n        return x instanceof Set; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isWeakSet(x) {\n    if (!weakSetHas || !x || typeof x !== 'object') {\n        return false;\n    }\n    try {\n        weakSetHas.call(x, weakSetHas);\n        try {\n            weakMapHas.call(x, weakMapHas);\n        } catch (s) {\n            return true;\n        }\n        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0\n    } catch (e) {}\n    return false;\n}\n\nfunction isElement(x) {\n    if (!x || typeof x !== 'object') { return false; }\n    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {\n        return true;\n    }\n    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';\n}\n\nfunction inspectString(str, opts) {\n    if (str.length > opts.maxStringLength) {\n        var remaining = str.length - opts.maxStringLength;\n        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');\n        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;\n    }\n    // eslint-disable-next-line no-control-regex\n    var s = $replace.call($replace.call(str, /(['\\\\])/g, '\\\\$1'), /[\\x00-\\x1f]/g, lowbyte);\n    return wrapQuotes(s, 'single', opts);\n}\n\nfunction lowbyte(c) {\n    var n = c.charCodeAt(0);\n    var x = {\n        8: 'b',\n        9: 't',\n        10: 'n',\n        12: 'f',\n        13: 'r'\n    }[n];\n    if (x) { return '\\\\' + x; }\n    return '\\\\x' + (n < 0x10 ? '0' : '') + $toUpperCase.call(n.toString(16));\n}\n\nfunction markBoxed(str) {\n    return 'Object(' + str + ')';\n}\n\nfunction weakCollectionOf(type) {\n    return type + ' { ? }';\n}\n\nfunction collectionOf(type, size, entries, indent) {\n    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ', ');\n    return type + ' (' + size + ') {' + joinedEntries + '}';\n}\n\nfunction singleLineValues(xs) {\n    for (var i = 0; i < xs.length; i++) {\n        if (indexOf(xs[i], '\\n') >= 0) {\n            return false;\n        }\n    }\n    return true;\n}\n\nfunction getIndent(opts, depth) {\n    var baseIndent;\n    if (opts.indent === '\\t') {\n        baseIndent = '\\t';\n    } else if (typeof opts.indent === 'number' && opts.indent > 0) {\n        baseIndent = $join.call(Array(opts.indent + 1), ' ');\n    } else {\n        return null;\n    }\n    return {\n        base: baseIndent,\n        prev: $join.call(Array(depth + 1), baseIndent)\n    };\n}\n\nfunction indentedJoin(xs, indent) {\n    if (xs.length === 0) { return ''; }\n    var lineJoiner = '\\n' + indent.prev + indent.base;\n    return lineJoiner + $join.call(xs, ',' + lineJoiner) + '\\n' + indent.prev;\n}\n\nfunction arrObjKeys(obj, inspect) {\n    var isArr = isArray(obj);\n    var xs = [];\n    if (isArr) {\n        xs.length = obj.length;\n        for (var i = 0; i < obj.length; i++) {\n            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';\n        }\n    }\n    var syms = typeof gOPS === 'function' ? gOPS(obj) : [];\n    var symMap;\n    if (hasShammedSymbols) {\n        symMap = {};\n        for (var k = 0; k < syms.length; k++) {\n            symMap['$' + syms[k]] = syms[k];\n        }\n    }\n\n    for (var key in obj) { // eslint-disable-line no-restricted-syntax\n        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue\n        if (hasShammedSymbols && symMap['$' + key] instanceof Symbol) {\n            // this is to prevent shammed Symbols, which are stored as strings, from being included in the string key section\n            continue; // eslint-disable-line no-restricted-syntax, no-continue\n        } else if ($test.call(/[^\\w$]/, key)) {\n            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));\n        } else {\n            xs.push(key + ': ' + inspect(obj[key], obj));\n        }\n    }\n    if (typeof gOPS === 'function') {\n        for (var j = 0; j < syms.length; j++) {\n            if (isEnumerable.call(obj, syms[j])) {\n                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));\n            }\n        }\n    }\n    return xs;\n}\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object-inspect/index.js?");

/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar keysShim;\nif (!Object.keys) {\n\t// modified from https://github.com/es-shims/es5-shim\n\tvar has = Object.prototype.hasOwnProperty;\n\tvar toStr = Object.prototype.toString;\n\tvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\"); // eslint-disable-line global-require\n\tvar isEnumerable = Object.prototype.propertyIsEnumerable;\n\tvar hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');\n\tvar hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');\n\tvar dontEnums = [\n\t\t'toString',\n\t\t'toLocaleString',\n\t\t'valueOf',\n\t\t'hasOwnProperty',\n\t\t'isPrototypeOf',\n\t\t'propertyIsEnumerable',\n\t\t'constructor'\n\t];\n\tvar equalsConstructorPrototype = function (o) {\n\t\tvar ctor = o.constructor;\n\t\treturn ctor && ctor.prototype === o;\n\t};\n\tvar excludedKeys = {\n\t\t$applicationCache: true,\n\t\t$console: true,\n\t\t$external: true,\n\t\t$frame: true,\n\t\t$frameElement: true,\n\t\t$frames: true,\n\t\t$innerHeight: true,\n\t\t$innerWidth: true,\n\t\t$onmozfullscreenchange: true,\n\t\t$onmozfullscreenerror: true,\n\t\t$outerHeight: true,\n\t\t$outerWidth: true,\n\t\t$pageXOffset: true,\n\t\t$pageYOffset: true,\n\t\t$parent: true,\n\t\t$scrollLeft: true,\n\t\t$scrollTop: true,\n\t\t$scrollX: true,\n\t\t$scrollY: true,\n\t\t$self: true,\n\t\t$webkitIndexedDB: true,\n\t\t$webkitStorageInfo: true,\n\t\t$window: true\n\t};\n\tvar hasAutomationEqualityBug = (function () {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined') { return false; }\n\t\tfor (var k in window) {\n\t\t\ttry {\n\t\t\t\tif (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {\n\t\t\t\t\ttry {\n\t\t\t\t\t\tequalsConstructorPrototype(window[k]);\n\t\t\t\t\t} catch (e) {\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} catch (e) {\n\t\t\t\treturn true;\n\t\t\t}\n\t\t}\n\t\treturn false;\n\t}());\n\tvar equalsConstructorPrototypeIfNotBuggy = function (o) {\n\t\t/* global window */\n\t\tif (typeof window === 'undefined' || !hasAutomationEqualityBug) {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t}\n\t\ttry {\n\t\t\treturn equalsConstructorPrototype(o);\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t};\n\n\tkeysShim = function keys(object) {\n\t\tvar isObject = object !== null && typeof object === 'object';\n\t\tvar isFunction = toStr.call(object) === '[object Function]';\n\t\tvar isArguments = isArgs(object);\n\t\tvar isString = isObject && toStr.call(object) === '[object String]';\n\t\tvar theKeys = [];\n\n\t\tif (!isObject && !isFunction && !isArguments) {\n\t\t\tthrow new TypeError('Object.keys called on a non-object');\n\t\t}\n\n\t\tvar skipProto = hasProtoEnumBug && isFunction;\n\t\tif (isString && object.length > 0 && !has.call(object, 0)) {\n\t\t\tfor (var i = 0; i < object.length; ++i) {\n\t\t\t\ttheKeys.push(String(i));\n\t\t\t}\n\t\t}\n\n\t\tif (isArguments && object.length > 0) {\n\t\t\tfor (var j = 0; j < object.length; ++j) {\n\t\t\t\ttheKeys.push(String(j));\n\t\t\t}\n\t\t} else {\n\t\t\tfor (var name in object) {\n\t\t\t\tif (!(skipProto && name === 'prototype') && has.call(object, name)) {\n\t\t\t\t\ttheKeys.push(String(name));\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\tif (hasDontEnumBug) {\n\t\t\tvar skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);\n\n\t\t\tfor (var k = 0; k < dontEnums.length; ++k) {\n\t\t\t\tif (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {\n\t\t\t\t\ttheKeys.push(dontEnums[k]);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\treturn theKeys;\n\t};\n}\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object-keys/implementation.js?");

/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar slice = Array.prototype.slice;\nvar isArgs = __webpack_require__(/*! ./isArguments */ \"./node_modules/object-keys/isArguments.js\");\n\nvar origKeys = Object.keys;\nvar keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ \"./node_modules/object-keys/implementation.js\");\n\nvar originalKeys = Object.keys;\n\nkeysShim.shim = function shimObjectKeys() {\n\tif (Object.keys) {\n\t\tvar keysWorksWithArguments = (function () {\n\t\t\t// Safari 5.0 bug\n\t\t\tvar args = Object.keys(arguments);\n\t\t\treturn args && args.length === arguments.length;\n\t\t}(1, 2));\n\t\tif (!keysWorksWithArguments) {\n\t\t\tObject.keys = function keys(object) { // eslint-disable-line func-name-matching\n\t\t\t\tif (isArgs(object)) {\n\t\t\t\t\treturn originalKeys(slice.call(object));\n\t\t\t\t}\n\t\t\t\treturn originalKeys(object);\n\t\t\t};\n\t\t}\n\t} else {\n\t\tObject.keys = keysShim;\n\t}\n\treturn Object.keys || keysShim;\n};\n\nmodule.exports = keysShim;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object-keys/index.js?");

/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar toStr = Object.prototype.toString;\n\nmodule.exports = function isArguments(value) {\n\tvar str = toStr.call(value);\n\tvar isArgs = str === '[object Arguments]';\n\tif (!isArgs) {\n\t\tisArgs = str !== '[object Array]' &&\n\t\t\tvalue !== null &&\n\t\t\ttypeof value === 'object' &&\n\t\t\ttypeof value.length === 'number' &&\n\t\t\tvalue.length >= 0 &&\n\t\t\ttoStr.call(value.callee) === '[object Function]';\n\t}\n\treturn isArgs;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object-keys/isArguments.js?");

/***/ }),

/***/ "./node_modules/object.entries/implementation.js":
/*!*******************************************************!*\
  !*** ./node_modules/object.entries/implementation.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');\nvar $push = callBound('Array.prototype.push');\n\nmodule.exports = function entries(O) {\n\tvar obj = RequireObjectCoercible(O);\n\tvar entrys = [];\n\tfor (var key in obj) {\n\t\tif ($isEnumerable(obj, key)) { // checks own-ness as well\n\t\t\t$push(entrys, [key, obj[key]]);\n\t\t}\n\t}\n\treturn entrys;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.entries/implementation.js?");

/***/ }),

/***/ "./node_modules/object.entries/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object.entries/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.entries/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.entries/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.entries/shim.js\");\n\nvar polyfill = callBind(getPolyfill(), Object);\n\ndefine(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.entries/index.js?");

/***/ }),

/***/ "./node_modules/object.entries/polyfill.js":
/*!*************************************************!*\
  !*** ./node_modules/object.entries/polyfill.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.entries/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.entries === 'function' ? Object.entries : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.entries/polyfill.js?");

/***/ }),

/***/ "./node_modules/object.entries/shim.js":
/*!*********************************************!*\
  !*** ./node_modules/object.entries/shim.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.entries/polyfill.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nmodule.exports = function shimEntries() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { entries: polyfill }, {\n\t\tentries: function testEntries() {\n\t\t\treturn Object.entries !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.entries/shim.js?");

/***/ }),

/***/ "./node_modules/object.getownpropertydescriptors/implementation.js":
/*!*************************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/implementation.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar CreateDataProperty = __webpack_require__(/*! es-abstract/2023/CreateDataProperty */ \"./node_modules/es-abstract/2023/CreateDataProperty.js\");\nvar IsCallable = __webpack_require__(/*! es-abstract/2023/IsCallable */ \"./node_modules/es-abstract/2023/IsCallable.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar ToObject = __webpack_require__(/*! es-abstract/2023/ToObject */ \"./node_modules/es-abstract/2023/ToObject.js\");\nvar safeConcat = __webpack_require__(/*! safe-array-concat */ \"./node_modules/safe-array-concat/index.js\");\nvar reduce = __webpack_require__(/*! array.prototype.reduce */ \"./node_modules/array.prototype.reduce/index.js\");\n\nvar $gOPD = Object.getOwnPropertyDescriptor;\nvar $getOwnNames = Object.getOwnPropertyNames;\nvar $getSymbols = Object.getOwnPropertySymbols;\n\nvar getAll = $getSymbols ? function (obj) {\n\treturn safeConcat($getOwnNames(obj), $getSymbols(obj));\n} : $getOwnNames;\n\nvar isES5 = IsCallable($gOPD) && IsCallable($getOwnNames);\n\nmodule.exports = function getOwnPropertyDescriptors(value) {\n\tRequireObjectCoercible(value);\n\tif (!isES5) {\n\t\tthrow new TypeError('getOwnPropertyDescriptors requires Object.getOwnPropertyDescriptor');\n\t}\n\n\tvar O = ToObject(value);\n\treturn reduce(\n\t\tgetAll(O),\n\t\tfunction (acc, key) {\n\t\t\tvar descriptor = $gOPD(O, key);\n\t\t\tif (typeof descriptor !== 'undefined') {\n\t\t\t\tCreateDataProperty(acc, key, descriptor);\n\t\t\t}\n\t\t\treturn acc;\n\t\t},\n\t\t{}\n\t);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.getownpropertydescriptors/implementation.js?");

/***/ }),

/***/ "./node_modules/object.getownpropertydescriptors/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/index.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.getownpropertydescriptors/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.getownpropertydescriptors/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.getownpropertydescriptors/shim.js\");\n\nvar bound = callBind(getPolyfill(), Object);\n\ndefine(bound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = bound;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.getownpropertydescriptors/index.js?");

/***/ }),

/***/ "./node_modules/object.getownpropertydescriptors/polyfill.js":
/*!*******************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/polyfill.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.getownpropertydescriptors/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.getOwnPropertyDescriptors === 'function' ? Object.getOwnPropertyDescriptors : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.getownpropertydescriptors/polyfill.js?");

/***/ }),

/***/ "./node_modules/object.getownpropertydescriptors/shim.js":
/*!***************************************************************!*\
  !*** ./node_modules/object.getownpropertydescriptors/shim.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.getownpropertydescriptors/polyfill.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nmodule.exports = function shimGetOwnPropertyDescriptors() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tObject,\n\t\t{ getOwnPropertyDescriptors: polyfill },\n\t\t{ getOwnPropertyDescriptors: function () { return Object.getOwnPropertyDescriptors !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.getownpropertydescriptors/shim.js?");

/***/ }),

/***/ "./node_modules/object.values/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.values/implementation.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');\nvar $push = callBound('Array.prototype.push');\n\nmodule.exports = function values(O) {\n\tvar obj = RequireObjectCoercible(O);\n\tvar vals = [];\n\tfor (var key in obj) {\n\t\tif ($isEnumerable(obj, key)) { // checks own-ness as well\n\t\t\t$push(vals, obj[key]);\n\t\t}\n\t}\n\treturn vals;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.values/implementation.js?");

/***/ }),

/***/ "./node_modules/object.values/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.values/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.values/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.values/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/object.values/shim.js\");\n\nvar polyfill = callBind(getPolyfill(), Object);\n\ndefine(polyfill, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = polyfill;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.values/index.js?");

/***/ }),

/***/ "./node_modules/object.values/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.values/polyfill.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/object.values/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof Object.values === 'function' ? Object.values : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.values/polyfill.js?");

/***/ }),

/***/ "./node_modules/object.values/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.values/shim.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/object.values/polyfill.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nmodule.exports = function shimValues() {\n\tvar polyfill = getPolyfill();\n\tdefine(Object, { values: polyfill }, {\n\t\tvalues: function testValues() {\n\t\t\treturn Object.values !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/object.values/shim.js?");

/***/ }),

/***/ "./node_modules/safe-array-concat/index.js":
/*!*************************************************!*\
  !*** ./node_modules/safe-array-concat/index.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar $concat = GetIntrinsic('%Array.prototype.concat%');\n\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $slice = callBound('Array.prototype.slice');\n\nvar hasSymbols = __webpack_require__(/*! has-symbols/shams */ \"./node_modules/has-symbols/shams.js\")();\nvar isConcatSpreadable = hasSymbols && Symbol.isConcatSpreadable;\n\nvar empty = [];\nvar $concatApply = isConcatSpreadable ? callBind.apply($concat, empty) : null;\nvar $concatCall = isConcatSpreadable ? null : callBind($concat, empty);\n\nvar isArray = isConcatSpreadable ? __webpack_require__(/*! isarray */ \"./node_modules/isarray/index.js\") : null;\n\nmodule.exports = isConcatSpreadable\n\t// eslint-disable-next-line no-unused-vars\n\t? function safeArrayConcat(item) {\n\t\tfor (var i = 0; i < arguments.length; i += 1) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (arg && typeof arg === 'object' && typeof arg[isConcatSpreadable] === 'boolean') {\n\t\t\t\tif (!empty[isConcatSpreadable]) {\n\t\t\t\t\tempty[isConcatSpreadable] = true;\n\t\t\t\t}\n\t\t\t\tvar arr = isArray(arg) ? $slice(arg) : [arg];\n\t\t\t\tarr[isConcatSpreadable] = true; // shadow the property. TODO: use [[Define]]\n\t\t\t\targuments[i] = arr;\n\t\t\t}\n\t\t}\n\t\treturn $concatApply(arguments);\n\t}\n\t: $concatCall;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/safe-array-concat/index.js?");

/***/ }),

/***/ "./node_modules/safe-regex-test/index.js":
/*!***********************************************!*\
  !*** ./node_modules/safe-regex-test/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar isRegex = __webpack_require__(/*! is-regex */ \"./node_modules/is-regex/index.js\");\n\nvar $exec = callBound('RegExp.prototype.exec');\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nmodule.exports = function regexTester(regex) {\n\tif (!isRegex(regex)) {\n\t\tthrow new $TypeError('`regex` must be a RegExp');\n\t}\n\treturn function test(s) {\n\t\treturn $exec(regex, s) !== null;\n\t};\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/safe-regex-test/index.js?");

/***/ }),

/***/ "./node_modules/string-at/index.js":
/*!*****************************************!*\
  !*** ./node_modules/string-at/index.js ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar ToInteger = __webpack_require__(/*! es-abstract/2019/ToInteger */ \"./node_modules/es-abstract/2019/ToInteger.js\");\nvar ToObject = __webpack_require__(/*! es-abstract/2019/ToObject */ \"./node_modules/es-abstract/2019/ToObject.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2019/ToString */ \"./node_modules/es-abstract/2019/ToString.js\");\nvar callBind = __webpack_require__(/*! es-abstract/helpers/callBind */ \"./node_modules/es-abstract/helpers/callBind.js\");\n\nvar atShim = function at(pos) {\n\tvar O = ToObject(this);\n\tvar S = ToString(O);\n\tvar position = ToInteger(pos);\n\tvar size = S.length;\n\tif (position < 0 || position >= size) {\n\t\treturn '';\n\t}\n\t// Get the first code unit and code unit value\n\tvar cuFirst = S.charCodeAt(position);\n\tvar cuSecond;\n\tvar nextIndex = position + 1;\n\tvar len = 1;\n\t// Check if it’s the start of a surrogate pair.\n\tvar isHighSurrogate = cuFirst >= 0xD800 && cuFirst <= 0xDBFF;\n\tif (isHighSurrogate && size > nextIndex /* there is a next code unit */) {\n\t\tcuSecond = S.charCodeAt(nextIndex);\n\t\tif (cuSecond >= 0xDC00 && cuSecond <= 0xDFFF) { // low surrogate\n\t\t\tlen = 2;\n\t\t}\n\t}\n\treturn S.slice(position, position + len);\n};\n\nvar boundAt = callBind(atShim);\ndefine(boundAt, {\n\tmethod: atShim,\n\tshim: function shimStringPrototypeAt() {\n\t\tdefine(String.prototype, { at: atShim });\n\t\treturn String.prototype.at;\n\t}\n});\n\nmodule.exports = boundAt;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string-at/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padend/implementation.js":
/*!****************************************************************!*\
  !*** ./node_modules/string.prototype.padend/implementation.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ToLength = __webpack_require__(/*! es-abstract/2023/ToLength */ \"./node_modules/es-abstract/2023/ToLength.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2023/ToString */ \"./node_modules/es-abstract/2023/ToString.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $slice = callBound('String.prototype.slice');\n\nmodule.exports = function padEnd(maxLength) {\n\tvar O = RequireObjectCoercible(this);\n\tvar S = ToString(O);\n\tvar stringLength = ToLength(S.length);\n\tvar fillString;\n\tif (arguments.length > 1) {\n\t\tfillString = arguments[1];\n\t}\n\tvar filler = typeof fillString === 'undefined' ? '' : ToString(fillString);\n\tif (filler === '') {\n\t\tfiller = ' ';\n\t}\n\tvar intMaxLength = ToLength(maxLength);\n\tif (intMaxLength <= stringLength) {\n\t\treturn S;\n\t}\n\tvar fillLen = intMaxLength - stringLength;\n\twhile (filler.length < fillLen) {\n\t\tvar fLen = filler.length;\n\t\tvar remainingCodeUnits = fillLen - fLen;\n\t\tfiller += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;\n\t}\n\n\tvar truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;\n\treturn S + truncatedStringFiller;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padend/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padend/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/string.prototype.padend/index.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.padend/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.padend/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/string.prototype.padend/shim.js\");\n\nvar bound = callBind.apply(getPolyfill());\n\nvar boundPadEnd = function padEnd(str, maxLength) {\n\tRequireObjectCoercible(str);\n\tvar args = arguments.length > 2 ? [maxLength, arguments[2]] : [maxLength];\n\treturn bound(str, args);\n};\n\ndefine(boundPadEnd, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundPadEnd;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padend/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padend/polyfill.js":
/*!**********************************************************!*\
  !*** ./node_modules/string.prototype.padend/polyfill.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.padend/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof String.prototype.padEnd === 'function' ? String.prototype.padEnd : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padend/polyfill.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padend/shim.js":
/*!******************************************************!*\
  !*** ./node_modules/string.prototype.padend/shim.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.padend/polyfill.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nmodule.exports = function shimPadEnd() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { padEnd: polyfill }, {\n\t\tpadEnd: function testPadEnd() {\n\t\t\treturn String.prototype.padEnd !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padend/shim.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padstart/implementation.js":
/*!******************************************************************!*\
  !*** ./node_modules/string.prototype.padstart/implementation.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ToLength = __webpack_require__(/*! es-abstract/2023/ToLength */ \"./node_modules/es-abstract/2023/ToLength.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2023/ToString */ \"./node_modules/es-abstract/2023/ToString.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $slice = callBound('String.prototype.slice');\n\nmodule.exports = function padStart(maxLength) {\n\tvar O = RequireObjectCoercible(this);\n\tvar S = ToString(O);\n\tvar stringLength = ToLength(S.length);\n\tvar fillString;\n\tif (arguments.length > 1) {\n\t\tfillString = arguments[1];\n\t}\n\tvar filler = typeof fillString === 'undefined' ? '' : ToString(fillString);\n\tif (filler === '') {\n\t\tfiller = ' ';\n\t}\n\tvar intMaxLength = ToLength(maxLength);\n\tif (intMaxLength <= stringLength) {\n\t\treturn S;\n\t}\n\tvar fillLen = intMaxLength - stringLength;\n\twhile (filler.length < fillLen) {\n\t\tvar fLen = filler.length;\n\t\tvar remainingCodeUnits = fillLen - fLen;\n\t\tfiller += fLen > remainingCodeUnits ? $slice(filler, 0, remainingCodeUnits) : filler;\n\t}\n\n\tvar truncatedStringFiller = filler.length > fillLen ? $slice(filler, 0, fillLen) : filler;\n\treturn truncatedStringFiller + S;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padstart/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padstart/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/string.prototype.padstart/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.padstart/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.padstart/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/string.prototype.padstart/shim.js\");\n\nvar bound = callBind.apply(getPolyfill());\n\nvar boundPadStart = function padStart(str, maxLength) {\n\tRequireObjectCoercible(str);\n\tvar args = arguments.length > 2 ? [maxLength, arguments[2]] : [maxLength];\n\treturn bound(str, args);\n};\n\ndefine(boundPadStart, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundPadStart;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padstart/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padstart/polyfill.js":
/*!************************************************************!*\
  !*** ./node_modules/string.prototype.padstart/polyfill.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.padstart/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\treturn typeof String.prototype.padStart === 'function' ? String.prototype.padStart : implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padstart/polyfill.js?");

/***/ }),

/***/ "./node_modules/string.prototype.padstart/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/string.prototype.padstart/shim.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.padstart/polyfill.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nmodule.exports = function shimPadStart() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { padStart: polyfill }, {\n\t\tpadStart: function testPadStart() {\n\t\t\treturn String.prototype.padStart !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.padstart/shim.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trim/implementation.js":
/*!**************************************************************!*\
  !*** ./node_modules/string.prototype.trim/implementation.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\nvar ToString = __webpack_require__(/*! es-abstract/2023/ToString */ \"./node_modules/es-abstract/2023/ToString.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $replace = callBound('String.prototype.replace');\n\nvar mvsIsWS = (/^\\s$/).test('\\u180E');\n/* eslint-disable no-control-regex */\nvar leftWhitespace = mvsIsWS\n\t? /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/\n\t: /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/;\nvar rightWhitespace = mvsIsWS\n\t? /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/\n\t: /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/;\n/* eslint-enable no-control-regex */\n\nmodule.exports = function trim() {\n\tvar S = ToString(RequireObjectCoercible(this));\n\treturn $replace($replace(S, leftWhitespace, ''), rightWhitespace, '');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trim/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trim/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/string.prototype.trim/index.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar RequireObjectCoercible = __webpack_require__(/*! es-abstract/2023/RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trim/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trim/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/string.prototype.trim/shim.js\");\n\nvar bound = callBind(getPolyfill());\nvar boundMethod = function trim(receiver) {\n\tRequireObjectCoercible(receiver);\n\treturn bound(receiver);\n};\n\ndefine(boundMethod, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = boundMethod;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trim/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trim/polyfill.js":
/*!********************************************************!*\
  !*** ./node_modules/string.prototype.trim/polyfill.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trim/implementation.js\");\n\nvar zeroWidthSpace = '\\u200b';\nvar mongolianVowelSeparator = '\\u180E';\n\nmodule.exports = function getPolyfill() {\n\tif (\n\t\tString.prototype.trim\n\t\t&& zeroWidthSpace.trim() === zeroWidthSpace\n\t\t&& mongolianVowelSeparator.trim() === mongolianVowelSeparator\n\t\t&& ('_' + mongolianVowelSeparator).trim() === ('_' + mongolianVowelSeparator)\n\t\t&& (mongolianVowelSeparator + '_').trim() === (mongolianVowelSeparator + '_')\n\t) {\n\t\treturn String.prototype.trim;\n\t}\n\treturn implementation;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trim/polyfill.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trim/shim.js":
/*!****************************************************!*\
  !*** ./node_modules/string.prototype.trim/shim.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trim/polyfill.js\");\n\nmodule.exports = function shimStringTrim() {\n\tvar polyfill = getPolyfill();\n\tdefine(String.prototype, { trim: polyfill }, {\n\t\ttrim: function testTrim() {\n\t\t\treturn String.prototype.trim !== polyfill;\n\t\t}\n\t});\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trim/shim.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimend/implementation.js":
/*!*****************************************************************!*\
  !*** ./node_modules/string.prototype.trimend/implementation.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $replace = callBound('String.prototype.replace');\n\nvar mvsIsWS = (/^\\s$/).test('\\u180E');\n/* eslint-disable no-control-regex */\nvar endWhitespace = mvsIsWS\n\t? /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/\n\t: /[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+$/;\n/* eslint-enable no-control-regex */\n\nmodule.exports = function trimEnd() {\n\treturn $replace(this, endWhitespace, '');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimend/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimleft/implementation.js":
/*!******************************************************************!*\
  !*** ./node_modules/string.prototype.trimleft/implementation.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.trimstart/implementation */ \"./node_modules/string.prototype.trimstart/implementation.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimleft/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimleft/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/string.prototype.trimleft/index.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trimleft/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trimleft/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/string.prototype.trimleft/shim.js\");\n\nvar bound = callBind(getPolyfill());\n\ndefine(bound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = bound;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimleft/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimleft/polyfill.js":
/*!************************************************************!*\
  !*** ./node_modules/string.prototype.trimleft/polyfill.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trimleft/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (!String.prototype.trimLeft) {\n\t\treturn implementation;\n\t}\n\tvar zeroWidthSpace = '\\u200b';\n\tif (zeroWidthSpace.trimLeft() !== zeroWidthSpace) {\n\t\treturn implementation;\n\t}\n\treturn String.prototype.trimLeft;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimleft/polyfill.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimleft/shim.js":
/*!********************************************************!*\
  !*** ./node_modules/string.prototype.trimleft/shim.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trimleft/polyfill.js\");\n\nmodule.exports = function shimTrimLeft() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tString.prototype,\n\t\t{ trimLeft: polyfill },\n\t\t{ trimLeft: function () { return String.prototype.trimLeft !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimleft/shim.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimright/implementation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/string.prototype.trimright/implementation.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! string.prototype.trimend/implementation */ \"./node_modules/string.prototype.trimend/implementation.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimright/implementation.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimright/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/string.prototype.trimright/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBind = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trimright/implementation.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trimright/polyfill.js\");\nvar shim = __webpack_require__(/*! ./shim */ \"./node_modules/string.prototype.trimright/shim.js\");\n\nvar bound = callBind(getPolyfill());\n\ndefine(bound, {\n\tgetPolyfill: getPolyfill,\n\timplementation: implementation,\n\tshim: shim\n});\n\nmodule.exports = bound;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimright/index.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimright/polyfill.js":
/*!*************************************************************!*\
  !*** ./node_modules/string.prototype.trimright/polyfill.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar implementation = __webpack_require__(/*! ./implementation */ \"./node_modules/string.prototype.trimright/implementation.js\");\n\nmodule.exports = function getPolyfill() {\n\tif (!String.prototype.trimRight) {\n\t\treturn implementation;\n\t}\n\tvar zeroWidthSpace = '\\u200b';\n\tif (zeroWidthSpace.trimRight() !== zeroWidthSpace) {\n\t\treturn implementation;\n\t}\n\treturn String.prototype.trimRight;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimright/polyfill.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimright/shim.js":
/*!*********************************************************!*\
  !*** ./node_modules/string.prototype.trimright/shim.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar define = __webpack_require__(/*! define-properties */ \"./node_modules/define-properties/index.js\");\nvar getPolyfill = __webpack_require__(/*! ./polyfill */ \"./node_modules/string.prototype.trimright/polyfill.js\");\n\nmodule.exports = function shimTrimRight() {\n\tvar polyfill = getPolyfill();\n\tdefine(\n\t\tString.prototype,\n\t\t{ trimRight: polyfill },\n\t\t{ trimRight: function () { return String.prototype.trimRight !== polyfill; } }\n\t);\n\treturn polyfill;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimright/shim.js?");

/***/ }),

/***/ "./node_modules/string.prototype.trimstart/implementation.js":
/*!*******************************************************************!*\
  !*** ./node_modules/string.prototype.trimstart/implementation.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar $replace = callBound('String.prototype.replace');\n\nvar mvsIsWS = (/^\\s$/).test('\\u180E');\n/* eslint-disable no-control-regex */\nvar startWhitespace = mvsIsWS\n\t? /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/\n\t: /^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+/;\n/* eslint-enable no-control-regex */\n\nmodule.exports = function trimStart() {\n\treturn $replace(this, startWhitespace, '');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/string.prototype.trimstart/implementation.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/accessDeep.js":
/*!*******************************************************!*\
  !*** ./node_modules/superjson/dist/esm/accessDeep.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getDeep: () => (/* binding */ getDeep),\n/* harmony export */   setDeep: () => (/* binding */ setDeep)\n/* harmony export */ });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/superjson/dist/esm/is.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./node_modules/superjson/dist/esm/util.js\");\n\n\nvar getNthKey = function (value, n) {\n    var keys = value.keys();\n    while (n > 0) {\n        keys.next();\n        n--;\n    }\n    return keys.next().value;\n};\nfunction validatePath(path) {\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.includes)(path, '__proto__')) {\n        throw new Error('__proto__ is not allowed as a property');\n    }\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.includes)(path, 'prototype')) {\n        throw new Error('prototype is not allowed as a property');\n    }\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.includes)(path, 'constructor')) {\n        throw new Error('constructor is not allowed as a property');\n    }\n}\nvar getDeep = function (object, path) {\n    validatePath(path);\n    for (var i = 0; i < path.length; i++) {\n        var key = path[i];\n        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isSet)(object)) {\n            object = getNthKey(object, +key);\n        }\n        else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isMap)(object)) {\n            var row = +key;\n            var type = +path[++i] === 0 ? 'key' : 'value';\n            var keyOfRow = getNthKey(object, row);\n            switch (type) {\n                case 'key':\n                    object = keyOfRow;\n                    break;\n                case 'value':\n                    object = object.get(keyOfRow);\n                    break;\n            }\n        }\n        else {\n            object = object[key];\n        }\n    }\n    return object;\n};\nvar setDeep = function (object, path, mapper) {\n    validatePath(path);\n    if (path.length === 0) {\n        return mapper(object);\n    }\n    var parent = object;\n    for (var i = 0; i < path.length - 1; i++) {\n        var key = path[i];\n        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(parent)) {\n            var index = +key;\n            parent = parent[index];\n        }\n        else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(parent)) {\n            parent = parent[key];\n        }\n        else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isSet)(parent)) {\n            var row = +key;\n            parent = getNthKey(parent, row);\n        }\n        else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isMap)(parent)) {\n            var isEnd = i === path.length - 2;\n            if (isEnd) {\n                break;\n            }\n            var row = +key;\n            var type = +path[++i] === 0 ? 'key' : 'value';\n            var keyOfRow = getNthKey(parent, row);\n            switch (type) {\n                case 'key':\n                    parent = keyOfRow;\n                    break;\n                case 'value':\n                    parent = parent.get(keyOfRow);\n                    break;\n            }\n        }\n    }\n    var lastKey = path[path.length - 1];\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(parent)) {\n        parent[+lastKey] = mapper(parent[+lastKey]);\n    }\n    else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(parent)) {\n        parent[lastKey] = mapper(parent[lastKey]);\n    }\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isSet)(parent)) {\n        var oldValue = getNthKey(parent, +lastKey);\n        var newValue = mapper(oldValue);\n        if (oldValue !== newValue) {\n            parent[\"delete\"](oldValue);\n            parent.add(newValue);\n        }\n    }\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isMap)(parent)) {\n        var row = +path[path.length - 2];\n        var keyToRow = getNthKey(parent, row);\n        var type = +lastKey === 0 ? 'key' : 'value';\n        switch (type) {\n            case 'key': {\n                var newKey = mapper(keyToRow);\n                parent.set(newKey, parent.get(keyToRow));\n                if (newKey !== keyToRow) {\n                    parent[\"delete\"](keyToRow);\n                }\n                break;\n            }\n            case 'value': {\n                parent.set(keyToRow, mapper(parent.get(keyToRow)));\n                break;\n            }\n        }\n    }\n    return object;\n};\n//# sourceMappingURL=accessDeep.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/accessDeep.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/class-registry.js":
/*!***********************************************************!*\
  !*** ./node_modules/superjson/dist/esm/class-registry.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ClassRegistry: () => (/* binding */ ClassRegistry)\n/* harmony export */ });\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registry */ \"./node_modules/superjson/dist/esm/registry.js\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar ClassRegistry = /** @class */ (function (_super) {\n    __extends(ClassRegistry, _super);\n    function ClassRegistry() {\n        var _this = _super.call(this, function (c) { return c.name; }) || this;\n        _this.classToAllowedProps = new Map();\n        return _this;\n    }\n    ClassRegistry.prototype.register = function (value, options) {\n        if (typeof options === 'object') {\n            if (options.allowProps) {\n                this.classToAllowedProps.set(value, options.allowProps);\n            }\n            _super.prototype.register.call(this, value, options.identifier);\n        }\n        else {\n            _super.prototype.register.call(this, value, options);\n        }\n    };\n    ClassRegistry.prototype.getAllowedProps = function (value) {\n        return this.classToAllowedProps.get(value);\n    };\n    return ClassRegistry;\n}(_registry__WEBPACK_IMPORTED_MODULE_0__.Registry));\n\n//# sourceMappingURL=class-registry.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/class-registry.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/custom-transformer-registry.js":
/*!************************************************************************!*\
  !*** ./node_modules/superjson/dist/esm/custom-transformer-registry.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CustomTransformerRegistry: () => (/* binding */ CustomTransformerRegistry)\n/* harmony export */ });\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ \"./node_modules/superjson/dist/esm/util.js\");\n\nvar CustomTransformerRegistry = /** @class */ (function () {\n    function CustomTransformerRegistry() {\n        this.transfomers = {};\n    }\n    CustomTransformerRegistry.prototype.register = function (transformer) {\n        this.transfomers[transformer.name] = transformer;\n    };\n    CustomTransformerRegistry.prototype.findApplicable = function (v) {\n        return (0,_util__WEBPACK_IMPORTED_MODULE_0__.find)(this.transfomers, function (transformer) {\n            return transformer.isApplicable(v);\n        });\n    };\n    CustomTransformerRegistry.prototype.findByName = function (name) {\n        return this.transfomers[name];\n    };\n    return CustomTransformerRegistry;\n}());\n\n//# sourceMappingURL=custom-transformer-registry.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/custom-transformer-registry.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/double-indexed-kv.js":
/*!**************************************************************!*\
  !*** ./node_modules/superjson/dist/esm/double-indexed-kv.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DoubleIndexedKV: () => (/* binding */ DoubleIndexedKV)\n/* harmony export */ });\nvar DoubleIndexedKV = /** @class */ (function () {\n    function DoubleIndexedKV() {\n        this.keyToValue = new Map();\n        this.valueToKey = new Map();\n    }\n    DoubleIndexedKV.prototype.set = function (key, value) {\n        this.keyToValue.set(key, value);\n        this.valueToKey.set(value, key);\n    };\n    DoubleIndexedKV.prototype.getByKey = function (key) {\n        return this.keyToValue.get(key);\n    };\n    DoubleIndexedKV.prototype.getByValue = function (value) {\n        return this.valueToKey.get(value);\n    };\n    DoubleIndexedKV.prototype.clear = function () {\n        this.keyToValue.clear();\n        this.valueToKey.clear();\n    };\n    return DoubleIndexedKV;\n}());\n\n//# sourceMappingURL=double-indexed-kv.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/double-indexed-kv.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/index.js":
/*!**************************************************!*\
  !*** ./node_modules/superjson/dist/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SuperJSON: () => (/* binding */ SuperJSON),\n/* harmony export */   allowErrorProps: () => (/* binding */ allowErrorProps),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   deserialize: () => (/* binding */ deserialize),\n/* harmony export */   parse: () => (/* binding */ parse),\n/* harmony export */   registerClass: () => (/* binding */ registerClass),\n/* harmony export */   registerCustom: () => (/* binding */ registerCustom),\n/* harmony export */   registerSymbol: () => (/* binding */ registerSymbol),\n/* harmony export */   serialize: () => (/* binding */ serialize),\n/* harmony export */   stringify: () => (/* binding */ stringify)\n/* harmony export */ });\n/* harmony import */ var _class_registry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-registry */ \"./node_modules/superjson/dist/esm/class-registry.js\");\n/* harmony import */ var _registry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registry */ \"./node_modules/superjson/dist/esm/registry.js\");\n/* harmony import */ var _custom_transformer_registry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom-transformer-registry */ \"./node_modules/superjson/dist/esm/custom-transformer-registry.js\");\n/* harmony import */ var _plainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plainer */ \"./node_modules/superjson/dist/esm/plainer.js\");\n/* harmony import */ var copy_anything__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! copy-anything */ \"./node_modules/copy-anything/dist/index.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\n\n\n\n\n\nvar SuperJSON = /** @class */ (function () {\n    /**\n     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.\n     */\n    function SuperJSON(_a) {\n        var _b = _a === void 0 ? {} : _a, _c = _b.dedupe, dedupe = _c === void 0 ? false : _c;\n        this.classRegistry = new _class_registry__WEBPACK_IMPORTED_MODULE_0__.ClassRegistry();\n        this.symbolRegistry = new _registry__WEBPACK_IMPORTED_MODULE_1__.Registry(function (s) { var _a; return (_a = s.description) !== null && _a !== void 0 ? _a : ''; });\n        this.customTransformerRegistry = new _custom_transformer_registry__WEBPACK_IMPORTED_MODULE_2__.CustomTransformerRegistry();\n        this.allowedErrorProps = [];\n        this.dedupe = dedupe;\n    }\n    SuperJSON.prototype.serialize = function (object) {\n        var identities = new Map();\n        var output = (0,_plainer__WEBPACK_IMPORTED_MODULE_3__.walker)(object, identities, this, this.dedupe);\n        var res = {\n            json: output.transformedValue\n        };\n        if (output.annotations) {\n            res.meta = __assign(__assign({}, res.meta), { values: output.annotations });\n        }\n        var equalityAnnotations = (0,_plainer__WEBPACK_IMPORTED_MODULE_3__.generateReferentialEqualityAnnotations)(identities, this.dedupe);\n        if (equalityAnnotations) {\n            res.meta = __assign(__assign({}, res.meta), { referentialEqualities: equalityAnnotations });\n        }\n        return res;\n    };\n    SuperJSON.prototype.deserialize = function (payload) {\n        var json = payload.json, meta = payload.meta;\n        var result = (0,copy_anything__WEBPACK_IMPORTED_MODULE_4__.copy)(json);\n        if (meta === null || meta === void 0 ? void 0 : meta.values) {\n            result = (0,_plainer__WEBPACK_IMPORTED_MODULE_3__.applyValueAnnotations)(result, meta.values, this);\n        }\n        if (meta === null || meta === void 0 ? void 0 : meta.referentialEqualities) {\n            result = (0,_plainer__WEBPACK_IMPORTED_MODULE_3__.applyReferentialEqualityAnnotations)(result, meta.referentialEqualities);\n        }\n        return result;\n    };\n    SuperJSON.prototype.stringify = function (object) {\n        return JSON.stringify(this.serialize(object));\n    };\n    SuperJSON.prototype.parse = function (string) {\n        return this.deserialize(JSON.parse(string));\n    };\n    SuperJSON.prototype.registerClass = function (v, options) {\n        this.classRegistry.register(v, options);\n    };\n    SuperJSON.prototype.registerSymbol = function (v, identifier) {\n        this.symbolRegistry.register(v, identifier);\n    };\n    SuperJSON.prototype.registerCustom = function (transformer, name) {\n        this.customTransformerRegistry.register(__assign({ name: name }, transformer));\n    };\n    SuperJSON.prototype.allowErrorProps = function () {\n        var _a;\n        var props = [];\n        for (var _i = 0; _i < arguments.length; _i++) {\n            props[_i] = arguments[_i];\n        }\n        (_a = this.allowedErrorProps).push.apply(_a, __spreadArray([], __read(props)));\n    };\n    SuperJSON.defaultInstance = new SuperJSON();\n    SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);\n    SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);\n    SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);\n    SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);\n    SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);\n    SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);\n    SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);\n    SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);\n    return SuperJSON;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SuperJSON);\n\nvar serialize = SuperJSON.serialize;\nvar deserialize = SuperJSON.deserialize;\nvar stringify = SuperJSON.stringify;\nvar parse = SuperJSON.parse;\nvar registerClass = SuperJSON.registerClass;\nvar registerCustom = SuperJSON.registerCustom;\nvar registerSymbol = SuperJSON.registerSymbol;\nvar allowErrorProps = SuperJSON.allowErrorProps;\n//# sourceMappingURL=index.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/index.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/is.js":
/*!***********************************************!*\
  !*** ./node_modules/superjson/dist/esm/is.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isArray: () => (/* binding */ isArray),\n/* harmony export */   isBigint: () => (/* binding */ isBigint),\n/* harmony export */   isBoolean: () => (/* binding */ isBoolean),\n/* harmony export */   isDate: () => (/* binding */ isDate),\n/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),\n/* harmony export */   isError: () => (/* binding */ isError),\n/* harmony export */   isInfinite: () => (/* binding */ isInfinite),\n/* harmony export */   isMap: () => (/* binding */ isMap),\n/* harmony export */   isNaNValue: () => (/* binding */ isNaNValue),\n/* harmony export */   isNull: () => (/* binding */ isNull),\n/* harmony export */   isNumber: () => (/* binding */ isNumber),\n/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),\n/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),\n/* harmony export */   isRegExp: () => (/* binding */ isRegExp),\n/* harmony export */   isSet: () => (/* binding */ isSet),\n/* harmony export */   isString: () => (/* binding */ isString),\n/* harmony export */   isSymbol: () => (/* binding */ isSymbol),\n/* harmony export */   isTypedArray: () => (/* binding */ isTypedArray),\n/* harmony export */   isURL: () => (/* binding */ isURL),\n/* harmony export */   isUndefined: () => (/* binding */ isUndefined)\n/* harmony export */ });\nvar getType = function (payload) {\n    return Object.prototype.toString.call(payload).slice(8, -1);\n};\nvar isUndefined = function (payload) {\n    return typeof payload === 'undefined';\n};\nvar isNull = function (payload) { return payload === null; };\nvar isPlainObject = function (payload) {\n    if (typeof payload !== 'object' || payload === null)\n        return false;\n    if (payload === Object.prototype)\n        return false;\n    if (Object.getPrototypeOf(payload) === null)\n        return true;\n    return Object.getPrototypeOf(payload) === Object.prototype;\n};\nvar isEmptyObject = function (payload) {\n    return isPlainObject(payload) && Object.keys(payload).length === 0;\n};\nvar isArray = function (payload) {\n    return Array.isArray(payload);\n};\nvar isString = function (payload) {\n    return typeof payload === 'string';\n};\nvar isNumber = function (payload) {\n    return typeof payload === 'number' && !isNaN(payload);\n};\nvar isBoolean = function (payload) {\n    return typeof payload === 'boolean';\n};\nvar isRegExp = function (payload) {\n    return payload instanceof RegExp;\n};\nvar isMap = function (payload) {\n    return payload instanceof Map;\n};\nvar isSet = function (payload) {\n    return payload instanceof Set;\n};\nvar isSymbol = function (payload) {\n    return getType(payload) === 'Symbol';\n};\nvar isDate = function (payload) {\n    return payload instanceof Date && !isNaN(payload.valueOf());\n};\nvar isError = function (payload) {\n    return payload instanceof Error;\n};\nvar isNaNValue = function (payload) {\n    return typeof payload === 'number' && isNaN(payload);\n};\nvar isPrimitive = function (payload) {\n    return isBoolean(payload) ||\n        isNull(payload) ||\n        isUndefined(payload) ||\n        isNumber(payload) ||\n        isString(payload) ||\n        isSymbol(payload);\n};\nvar isBigint = function (payload) {\n    return typeof payload === 'bigint';\n};\nvar isInfinite = function (payload) {\n    return payload === Infinity || payload === -Infinity;\n};\nvar isTypedArray = function (payload) {\n    return ArrayBuffer.isView(payload) && !(payload instanceof DataView);\n};\nvar isURL = function (payload) { return payload instanceof URL; };\n//# sourceMappingURL=is.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/is.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/pathstringifier.js":
/*!************************************************************!*\
  !*** ./node_modules/superjson/dist/esm/pathstringifier.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   escapeKey: () => (/* binding */ escapeKey),\n/* harmony export */   parsePath: () => (/* binding */ parsePath),\n/* harmony export */   stringifyPath: () => (/* binding */ stringifyPath)\n/* harmony export */ });\nvar escapeKey = function (key) { return key.replace(/\\./g, '\\\\.'); };\nvar stringifyPath = function (path) {\n    return path\n        .map(String)\n        .map(escapeKey)\n        .join('.');\n};\nvar parsePath = function (string) {\n    var result = [];\n    var segment = '';\n    for (var i = 0; i < string.length; i++) {\n        var char = string.charAt(i);\n        var isEscapedDot = char === '\\\\' && string.charAt(i + 1) === '.';\n        if (isEscapedDot) {\n            segment += '.';\n            i++;\n            continue;\n        }\n        var isEndOfSegment = char === '.';\n        if (isEndOfSegment) {\n            result.push(segment);\n            segment = '';\n            continue;\n        }\n        segment += char;\n    }\n    var lastSegment = segment;\n    result.push(lastSegment);\n    return result;\n};\n//# sourceMappingURL=pathstringifier.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/pathstringifier.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/plainer.js":
/*!****************************************************!*\
  !*** ./node_modules/superjson/dist/esm/plainer.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyReferentialEqualityAnnotations: () => (/* binding */ applyReferentialEqualityAnnotations),\n/* harmony export */   applyValueAnnotations: () => (/* binding */ applyValueAnnotations),\n/* harmony export */   generateReferentialEqualityAnnotations: () => (/* binding */ generateReferentialEqualityAnnotations),\n/* harmony export */   walker: () => (/* binding */ walker)\n/* harmony export */ });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/superjson/dist/esm/is.js\");\n/* harmony import */ var _pathstringifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pathstringifier */ \"./node_modules/superjson/dist/esm/pathstringifier.js\");\n/* harmony import */ var _transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transformer */ \"./node_modules/superjson/dist/esm/transformer.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ \"./node_modules/superjson/dist/esm/util.js\");\n/* harmony import */ var _accessDeep__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./accessDeep */ \"./node_modules/superjson/dist/esm/accessDeep.js\");\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\n\n\n\n\n\n\nfunction traverse(tree, walker, origin) {\n    if (origin === void 0) { origin = []; }\n    if (!tree) {\n        return;\n    }\n    if (!(0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(tree)) {\n        (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(tree, function (subtree, key) {\n            return traverse(subtree, walker, __spreadArray(__spreadArray([], __read(origin)), __read((0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.parsePath)(key))));\n        });\n        return;\n    }\n    var _a = __read(tree, 2), nodeValue = _a[0], children = _a[1];\n    if (children) {\n        (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(children, function (child, key) {\n            traverse(child, walker, __spreadArray(__spreadArray([], __read(origin)), __read((0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.parsePath)(key))));\n        });\n    }\n    walker(nodeValue, origin);\n}\nfunction applyValueAnnotations(plain, annotations, superJson) {\n    traverse(annotations, function (type, path) {\n        plain = (0,_accessDeep__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, path, function (v) { return (0,_transformer__WEBPACK_IMPORTED_MODULE_2__.untransformValue)(v, type, superJson); });\n    });\n    return plain;\n}\nfunction applyReferentialEqualityAnnotations(plain, annotations) {\n    function apply(identicalPaths, path) {\n        var object = (0,_accessDeep__WEBPACK_IMPORTED_MODULE_4__.getDeep)(plain, (0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.parsePath)(path));\n        identicalPaths.map(_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.parsePath).forEach(function (identicalObjectPath) {\n            plain = (0,_accessDeep__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, identicalObjectPath, function () { return object; });\n        });\n    }\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(annotations)) {\n        var _a = __read(annotations, 2), root = _a[0], other = _a[1];\n        root.forEach(function (identicalPath) {\n            plain = (0,_accessDeep__WEBPACK_IMPORTED_MODULE_4__.setDeep)(plain, (0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.parsePath)(identicalPath), function () { return plain; });\n        });\n        if (other) {\n            (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(other, apply);\n        }\n    }\n    else {\n        (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(annotations, apply);\n    }\n    return plain;\n}\nvar isDeep = function (object, superJson) {\n    return (0,_is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(object) ||\n        (0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(object) ||\n        (0,_is__WEBPACK_IMPORTED_MODULE_0__.isMap)(object) ||\n        (0,_is__WEBPACK_IMPORTED_MODULE_0__.isSet)(object) ||\n        (0,_transformer__WEBPACK_IMPORTED_MODULE_2__.isInstanceOfRegisteredClass)(object, superJson);\n};\nfunction addIdentity(object, path, identities) {\n    var existingSet = identities.get(object);\n    if (existingSet) {\n        existingSet.push(path);\n    }\n    else {\n        identities.set(object, [path]);\n    }\n}\nfunction generateReferentialEqualityAnnotations(identitites, dedupe) {\n    var result = {};\n    var rootEqualityPaths = undefined;\n    identitites.forEach(function (paths) {\n        if (paths.length <= 1) {\n            return;\n        }\n        // if we're not deduping, all of these objects continue existing.\n        // putting the shortest path first makes it easier to parse for humans\n        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.\n        if (!dedupe) {\n            paths = paths\n                .map(function (path) { return path.map(String); })\n                .sort(function (a, b) { return a.length - b.length; });\n        }\n        var _a = __read(paths), representativePath = _a[0], identicalPaths = _a.slice(1);\n        if (representativePath.length === 0) {\n            rootEqualityPaths = identicalPaths.map(_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.stringifyPath);\n        }\n        else {\n            result[(0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.stringifyPath)(representativePath)] = identicalPaths.map(_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.stringifyPath);\n        }\n    });\n    if (rootEqualityPaths) {\n        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(result)) {\n            return [rootEqualityPaths];\n        }\n        else {\n            return [rootEqualityPaths, result];\n        }\n    }\n    else {\n        return (0,_is__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(result) ? undefined : result;\n    }\n}\nvar walker = function (object, identities, superJson, dedupe, path, objectsInThisPath, seenObjects) {\n    var _a;\n    if (path === void 0) { path = []; }\n    if (objectsInThisPath === void 0) { objectsInThisPath = []; }\n    if (seenObjects === void 0) { seenObjects = new Map(); }\n    var primitive = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isPrimitive)(object);\n    if (!primitive) {\n        addIdentity(object, path, identities);\n        var seen = seenObjects.get(object);\n        if (seen) {\n            // short-circuit result if we've seen this object before\n            return dedupe\n                ? {\n                    transformedValue: null\n                }\n                : seen;\n        }\n    }\n    if (!isDeep(object, superJson)) {\n        var transformed_1 = (0,_transformer__WEBPACK_IMPORTED_MODULE_2__.transformValue)(object, superJson);\n        var result_1 = transformed_1\n            ? {\n                transformedValue: transformed_1.value,\n                annotations: [transformed_1.type]\n            }\n            : {\n                transformedValue: object\n            };\n        if (!primitive) {\n            seenObjects.set(object, result_1);\n        }\n        return result_1;\n    }\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_3__.includes)(objectsInThisPath, object)) {\n        // prevent circular references\n        return {\n            transformedValue: null\n        };\n    }\n    var transformationResult = (0,_transformer__WEBPACK_IMPORTED_MODULE_2__.transformValue)(object, superJson);\n    var transformed = (_a = transformationResult === null || transformationResult === void 0 ? void 0 : transformationResult.value) !== null && _a !== void 0 ? _a : object;\n    var transformedValue = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(transformed) ? [] : {};\n    var innerAnnotations = {};\n    (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(transformed, function (value, index) {\n        var recursiveResult = walker(value, identities, superJson, dedupe, __spreadArray(__spreadArray([], __read(path)), [index]), __spreadArray(__spreadArray([], __read(objectsInThisPath)), [object]), seenObjects);\n        transformedValue[index] = recursiveResult.transformedValue;\n        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(recursiveResult.annotations)) {\n            innerAnnotations[index] = recursiveResult.annotations;\n        }\n        else if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(recursiveResult.annotations)) {\n            (0,_util__WEBPACK_IMPORTED_MODULE_3__.forEach)(recursiveResult.annotations, function (tree, key) {\n                innerAnnotations[(0,_pathstringifier__WEBPACK_IMPORTED_MODULE_1__.escapeKey)(index) + '.' + key] = tree;\n            });\n        }\n    });\n    var result = (0,_is__WEBPACK_IMPORTED_MODULE_0__.isEmptyObject)(innerAnnotations)\n        ? {\n            transformedValue: transformedValue,\n            annotations: !!transformationResult\n                ? [transformationResult.type]\n                : undefined\n        }\n        : {\n            transformedValue: transformedValue,\n            annotations: !!transformationResult\n                ? [transformationResult.type, innerAnnotations]\n                : innerAnnotations\n        };\n    if (!primitive) {\n        seenObjects.set(object, result);\n    }\n    return result;\n};\n//# sourceMappingURL=plainer.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/plainer.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/registry.js":
/*!*****************************************************!*\
  !*** ./node_modules/superjson/dist/esm/registry.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Registry: () => (/* binding */ Registry)\n/* harmony export */ });\n/* harmony import */ var _double_indexed_kv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./double-indexed-kv */ \"./node_modules/superjson/dist/esm/double-indexed-kv.js\");\n\nvar Registry = /** @class */ (function () {\n    function Registry(generateIdentifier) {\n        this.generateIdentifier = generateIdentifier;\n        this.kv = new _double_indexed_kv__WEBPACK_IMPORTED_MODULE_0__.DoubleIndexedKV();\n    }\n    Registry.prototype.register = function (value, identifier) {\n        if (this.kv.getByValue(value)) {\n            return;\n        }\n        if (!identifier) {\n            identifier = this.generateIdentifier(value);\n        }\n        this.kv.set(identifier, value);\n    };\n    Registry.prototype.clear = function () {\n        this.kv.clear();\n    };\n    Registry.prototype.getIdentifier = function (value) {\n        return this.kv.getByValue(value);\n    };\n    Registry.prototype.getValue = function (identifier) {\n        return this.kv.getByKey(identifier);\n    };\n    return Registry;\n}());\n\n//# sourceMappingURL=registry.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/registry.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/transformer.js":
/*!********************************************************!*\
  !*** ./node_modules/superjson/dist/esm/transformer.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   isInstanceOfRegisteredClass: () => (/* binding */ isInstanceOfRegisteredClass),\n/* harmony export */   transformValue: () => (/* binding */ transformValue),\n/* harmony export */   untransformValue: () => (/* binding */ untransformValue)\n/* harmony export */ });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./node_modules/superjson/dist/esm/is.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./node_modules/superjson/dist/esm/util.js\");\nvar __assign = (undefined && undefined.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nvar __spreadArray = (undefined && undefined.__spreadArray) || function (to, from) {\n    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)\n        to[j] = from[i];\n    return to;\n};\n\n\nfunction simpleTransformation(isApplicable, annotation, transform, untransform) {\n    return {\n        isApplicable: isApplicable,\n        annotation: annotation,\n        transform: transform,\n        untransform: untransform\n    };\n}\nvar simpleRules = [\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isUndefined, 'undefined', function () { return null; }, function () { return undefined; }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isBigint, 'bigint', function (v) { return v.toString(); }, function (v) {\n        if (typeof BigInt !== 'undefined') {\n            return BigInt(v);\n        }\n        console.error('Please add a BigInt polyfill.');\n        return v;\n    }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isDate, 'Date', function (v) { return v.toISOString(); }, function (v) { return new Date(v); }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isError, 'Error', function (v, superJson) {\n        var baseError = {\n            name: v.name,\n            message: v.message\n        };\n        superJson.allowedErrorProps.forEach(function (prop) {\n            baseError[prop] = v[prop];\n        });\n        return baseError;\n    }, function (v, superJson) {\n        var e = new Error(v.message);\n        e.name = v.name;\n        e.stack = v.stack;\n        superJson.allowedErrorProps.forEach(function (prop) {\n            e[prop] = v[prop];\n        });\n        return e;\n    }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isRegExp, 'regexp', function (v) { return '' + v; }, function (regex) {\n        var body = regex.slice(1, regex.lastIndexOf('/'));\n        var flags = regex.slice(regex.lastIndexOf('/') + 1);\n        return new RegExp(body, flags);\n    }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isSet, 'set', \n    // (sets only exist in es6+)\n    // eslint-disable-next-line es5/no-es6-methods\n    function (v) { return __spreadArray([], __read(v.values())); }, function (v) { return new Set(v); }),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isMap, 'map', function (v) { return __spreadArray([], __read(v.entries())); }, function (v) { return new Map(v); }),\n    simpleTransformation(function (v) { return (0,_is__WEBPACK_IMPORTED_MODULE_0__.isNaNValue)(v) || (0,_is__WEBPACK_IMPORTED_MODULE_0__.isInfinite)(v); }, 'number', function (v) {\n        if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isNaNValue)(v)) {\n            return 'NaN';\n        }\n        if (v > 0) {\n            return 'Infinity';\n        }\n        else {\n            return '-Infinity';\n        }\n    }, Number),\n    simpleTransformation(function (v) { return v === 0 && 1 / v === -Infinity; }, 'number', function () {\n        return '-0';\n    }, Number),\n    simpleTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isURL, 'URL', function (v) { return v.toString(); }, function (v) { return new URL(v); }),\n];\nfunction compositeTransformation(isApplicable, annotation, transform, untransform) {\n    return {\n        isApplicable: isApplicable,\n        annotation: annotation,\n        transform: transform,\n        untransform: untransform\n    };\n}\nvar symbolRule = compositeTransformation(function (s, superJson) {\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isSymbol)(s)) {\n        var isRegistered = !!superJson.symbolRegistry.getIdentifier(s);\n        return isRegistered;\n    }\n    return false;\n}, function (s, superJson) {\n    var identifier = superJson.symbolRegistry.getIdentifier(s);\n    return ['symbol', identifier];\n}, function (v) { return v.description; }, function (_, a, superJson) {\n    var value = superJson.symbolRegistry.getValue(a[1]);\n    if (!value) {\n        throw new Error('Trying to deserialize unknown symbol');\n    }\n    return value;\n});\nvar constructorToName = [\n    Int8Array,\n    Uint8Array,\n    Int16Array,\n    Uint16Array,\n    Int32Array,\n    Uint32Array,\n    Float32Array,\n    Float64Array,\n    Uint8ClampedArray,\n].reduce(function (obj, ctor) {\n    obj[ctor.name] = ctor;\n    return obj;\n}, {});\nvar typedArrayRule = compositeTransformation(_is__WEBPACK_IMPORTED_MODULE_0__.isTypedArray, function (v) { return ['typed-array', v.constructor.name]; }, function (v) { return __spreadArray([], __read(v)); }, function (v, a) {\n    var ctor = constructorToName[a[1]];\n    if (!ctor) {\n        throw new Error('Trying to deserialize unknown typed array');\n    }\n    return new ctor(v);\n});\nfunction isInstanceOfRegisteredClass(potentialClass, superJson) {\n    if (potentialClass === null || potentialClass === void 0 ? void 0 : potentialClass.constructor) {\n        var isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);\n        return isRegistered;\n    }\n    return false;\n}\nvar classRule = compositeTransformation(isInstanceOfRegisteredClass, function (clazz, superJson) {\n    var identifier = superJson.classRegistry.getIdentifier(clazz.constructor);\n    return ['class', identifier];\n}, function (clazz, superJson) {\n    var allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);\n    if (!allowedProps) {\n        return __assign({}, clazz);\n    }\n    var result = {};\n    allowedProps.forEach(function (prop) {\n        result[prop] = clazz[prop];\n    });\n    return result;\n}, function (v, a, superJson) {\n    var clazz = superJson.classRegistry.getValue(a[1]);\n    if (!clazz) {\n        throw new Error('Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564');\n    }\n    return Object.assign(Object.create(clazz.prototype), v);\n});\nvar customRule = compositeTransformation(function (value, superJson) {\n    return !!superJson.customTransformerRegistry.findApplicable(value);\n}, function (value, superJson) {\n    var transformer = superJson.customTransformerRegistry.findApplicable(value);\n    return ['custom', transformer.name];\n}, function (value, superJson) {\n    var transformer = superJson.customTransformerRegistry.findApplicable(value);\n    return transformer.serialize(value);\n}, function (v, a, superJson) {\n    var transformer = superJson.customTransformerRegistry.findByName(a[1]);\n    if (!transformer) {\n        throw new Error('Trying to deserialize unknown custom value');\n    }\n    return transformer.deserialize(v);\n});\nvar compositeRules = [classRule, symbolRule, customRule, typedArrayRule];\nvar transformValue = function (value, superJson) {\n    var applicableCompositeRule = (0,_util__WEBPACK_IMPORTED_MODULE_1__.findArr)(compositeRules, function (rule) {\n        return rule.isApplicable(value, superJson);\n    });\n    if (applicableCompositeRule) {\n        return {\n            value: applicableCompositeRule.transform(value, superJson),\n            type: applicableCompositeRule.annotation(value, superJson)\n        };\n    }\n    var applicableSimpleRule = (0,_util__WEBPACK_IMPORTED_MODULE_1__.findArr)(simpleRules, function (rule) {\n        return rule.isApplicable(value, superJson);\n    });\n    if (applicableSimpleRule) {\n        return {\n            value: applicableSimpleRule.transform(value, superJson),\n            type: applicableSimpleRule.annotation\n        };\n    }\n    return undefined;\n};\nvar simpleRulesByAnnotation = {};\nsimpleRules.forEach(function (rule) {\n    simpleRulesByAnnotation[rule.annotation] = rule;\n});\nvar untransformValue = function (json, type, superJson) {\n    if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(type)) {\n        switch (type[0]) {\n            case 'symbol':\n                return symbolRule.untransform(json, type, superJson);\n            case 'class':\n                return classRule.untransform(json, type, superJson);\n            case 'custom':\n                return customRule.untransform(json, type, superJson);\n            case 'typed-array':\n                return typedArrayRule.untransform(json, type, superJson);\n            default:\n                throw new Error('Unknown transformation: ' + type);\n        }\n    }\n    else {\n        var transformation = simpleRulesByAnnotation[type];\n        if (!transformation) {\n            throw new Error('Unknown transformation: ' + type);\n        }\n        return transformation.untransform(json, superJson);\n    }\n};\n//# sourceMappingURL=transformer.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/transformer.js?");

/***/ }),

/***/ "./node_modules/superjson/dist/esm/util.js":
/*!*************************************************!*\
  !*** ./node_modules/superjson/dist/esm/util.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   find: () => (/* binding */ find),\n/* harmony export */   findArr: () => (/* binding */ findArr),\n/* harmony export */   forEach: () => (/* binding */ forEach),\n/* harmony export */   includes: () => (/* binding */ includes)\n/* harmony export */ });\nvar __read = (undefined && undefined.__read) || function (o, n) {\n    var m = typeof Symbol === \"function\" && o[Symbol.iterator];\n    if (!m) return o;\n    var i = m.call(o), r, ar = [], e;\n    try {\n        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);\n    }\n    catch (error) { e = { error: error }; }\n    finally {\n        try {\n            if (r && !r.done && (m = i[\"return\"])) m.call(i);\n        }\n        finally { if (e) throw e.error; }\n    }\n    return ar;\n};\nfunction valuesOfObj(record) {\n    if ('values' in Object) {\n        // eslint-disable-next-line es5/no-es6-methods\n        return Object.values(record);\n    }\n    var values = [];\n    // eslint-disable-next-line no-restricted-syntax\n    for (var key in record) {\n        if (record.hasOwnProperty(key)) {\n            values.push(record[key]);\n        }\n    }\n    return values;\n}\nfunction find(record, predicate) {\n    var values = valuesOfObj(record);\n    if ('find' in values) {\n        // eslint-disable-next-line es5/no-es6-methods\n        return values.find(predicate);\n    }\n    var valuesNotNever = values;\n    for (var i = 0; i < valuesNotNever.length; i++) {\n        var value = valuesNotNever[i];\n        if (predicate(value)) {\n            return value;\n        }\n    }\n    return undefined;\n}\nfunction forEach(record, run) {\n    Object.entries(record).forEach(function (_a) {\n        var _b = __read(_a, 2), key = _b[0], value = _b[1];\n        return run(value, key);\n    });\n}\nfunction includes(arr, value) {\n    return arr.indexOf(value) !== -1;\n}\nfunction findArr(record, predicate) {\n    for (var i = 0; i < record.length; i++) {\n        var value = record[i];\n        if (predicate(value)) {\n            return value;\n        }\n    }\n    return undefined;\n}\n//# sourceMappingURL=util.js.map\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/superjson/dist/esm/util.js?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superjson */ \"./node_modules/superjson/dist/esm/index.js\");\n/* harmony import */ var json_to_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! json-to-ts */ \"./node_modules/json-to-ts/build/src/index.js\");\n/* harmony import */ var json_to_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(json_to_ts__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar Mustache = __webpack_require__(/*! mustache */ \"./node_modules/mustache/mustache.js\");\n// USEFULL LINKs\n// https://github.com/luckymarmot/Paw-OpenAPI3Generator/blob/master/src/index.ts\nvar MyCodeGenerator = /** @class */ (function () {\n    function MyCodeGenerator() {\n    }\n    MyCodeGenerator.prototype.generate = function (context, request) {\n        //console.log(Console.stringifyWithCyclicSupport(request));\n        //console.log(Console.stringifyWithCyclicSupport(context));\n        var urlParts = [];\n        for (var _i = 0, _a = request.getUrlBase(true)\n            .components; _i < _a.length; _i++) {\n            var component = _a[_i];\n            if (typeof component !== \"string\") {\n                urlParts.push(\":\" +\n                    // @ts-ignore\n                    context.getEnvironmentVariableById(component.environmentVariable)\n                        .name);\n            }\n            else {\n                urlParts.push(component);\n            }\n        }\n        var url = urlParts.join(\"\").replace(\":baseUrl\", \"/api\");\n        console.log(\"URL\", url);\n        var body = undefined;\n        var isBodyTypescript = true;\n        if (request.body &&\n            typeof request.body === \"string\" &&\n            request.body.length !== 0) {\n            try {\n                body = json_to_ts__WEBPACK_IMPORTED_MODULE_1___default()(JSON.parse(request.body), {\n                    rootName: \"Request\",\n                }).join(\"\\n\\n\");\n            }\n            catch (_) {\n                body = request.body;\n                isBodyTypescript = false;\n            }\n        }\n        var urlParams = Object.entries(request.urlParameters).map(function (_a) {\n            var key = _a[0], value = _a[1];\n            return ({\n                key: key,\n                value: value,\n            });\n        });\n        var exchanges = request.getAllExchanges();\n        var responseBody = undefined;\n        var isResponseBodyTypescript = true;\n        var okResponse = exchanges.filter(function (exchange) { return exchange.responseStatusCode === 200; })[0];\n        if (okResponse) {\n            if (okResponse.responseBody &&\n                typeof okResponse.responseBody === \"string\" &&\n                okResponse.responseBody.length !== 0 &&\n                okResponse.responseBody !== '{\"json\":{}}' &&\n                okResponse.responseBody !== '{\"json\":[]}') {\n                try {\n                    responseBody = json_to_ts__WEBPACK_IMPORTED_MODULE_1___default()((0,superjson__WEBPACK_IMPORTED_MODULE_0__.deserialize)(JSON.parse(okResponse.responseBody)), {\n                        rootName: \"Response\",\n                    }).join(\"\\n\\n\");\n                }\n                catch (_) {\n                    responseBody = okResponse.responseBody;\n                    isResponseBodyTypescript = false;\n                }\n            }\n        }\n        var errorCodes = Array.from(new Set(exchanges\n            .filter(function (exchange) {\n            return exchange.responseStatusCode !== 500 &&\n                exchange.responseStatusCode !== 200 &&\n                exchange.responseStatusCode !== 0;\n        })\n            .map(function (exchange) { return \"`\" + exchange.responseStatusCode + \"`\"; })).values())\n            .sort()\n            .reverse()\n            .join(\", \");\n        // @ts-ignore\n        return Mustache.render(readFile(\"template.mustache\"), {\n            context: context,\n            request: request,\n            url: url,\n            urlParams: urlParams,\n            urlParamsExists: urlParams.length !== 0,\n            body: body,\n            bodyExists: body !== undefined,\n            isBodyTypescript: isBodyTypescript,\n            bodyOrUrlParamsExists: urlParams.length !== 0 || body !== undefined,\n            responseBody: responseBody,\n            responseBodyExists: responseBody !== undefined,\n            isResponseBodyTypescript: isResponseBodyTypescript,\n            errorCodes: errorCodes,\n            errorCodesExists: errorCodes.length !== 0,\n        }).replace(/\\n{3,}/g, \"\\n\\n\");\n    };\n    MyCodeGenerator.identifier = \"com.example.TypescriptCodeGenerator\";\n    MyCodeGenerator.title = \"Typescript Code generator\";\n    return MyCodeGenerator;\n}());\n// @ts-ignore\nregisterCodeGenerator(MyCodeGenerator);\n\n\n//# sourceURL=webpack://typescript-code-generator/./src/index.ts?");

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack://typescript-code-generator/./util.inspect_(ignored)?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/RequireObjectCoercible.js":
/*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2019/RequireObjectCoercible.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ../5/CheckObjectCoercible */ \"./node_modules/es-abstract/5/CheckObjectCoercible.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/RequireObjectCoercible.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/ToInteger.js":
/*!****************************************************!*\
  !*** ./node_modules/es-abstract/2019/ToInteger.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ES5ToInteger = __webpack_require__(/*! ../5/ToInteger */ \"./node_modules/es-abstract/5/ToInteger.js\");\n\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ \"./node_modules/es-abstract/2019/ToNumber.js\");\n\n// https://262.ecma-international.org/6.0/#sec-tointeger\n\nmodule.exports = function ToInteger(value) {\n\tvar number = ToNumber(value);\n\treturn ES5ToInteger(number);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/ToInteger.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/ToNumber.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2019/ToNumber.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $Number = GetIntrinsic('%Number%');\nvar $RegExp = GetIntrinsic('%RegExp%');\nvar $parseInteger = GetIntrinsic('%parseInt%');\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar regexTester = __webpack_require__(/*! safe-regex-test */ \"./node_modules/safe-regex-test/index.js\");\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ \"./node_modules/es-abstract/helpers/isPrimitive.js\");\n\nvar $strSlice = callBound('String.prototype.slice');\nvar isBinary = regexTester(/^0b[01]+$/i);\nvar isOctal = regexTester(/^0o[0-7]+$/i);\nvar isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);\nvar nonWS = ['\\u0085', '\\u200b', '\\ufffe'].join('');\nvar nonWSregex = new $RegExp('[' + nonWS + ']', 'g');\nvar hasNonWS = regexTester(nonWSregex);\n\nvar $trim = __webpack_require__(/*! string.prototype.trim */ \"./node_modules/string.prototype.trim/index.js\");\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ \"./node_modules/es-abstract/2019/ToPrimitive.js\");\n\n// https://262.ecma-international.org/6.0/#sec-tonumber\n\nmodule.exports = function ToNumber(argument) {\n\tvar value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);\n\tif (typeof value === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a number');\n\t}\n\tif (typeof value === 'string') {\n\t\tif (isBinary(value)) {\n\t\t\treturn ToNumber($parseInteger($strSlice(value, 2), 2));\n\t\t} else if (isOctal(value)) {\n\t\t\treturn ToNumber($parseInteger($strSlice(value, 2), 8));\n\t\t} else if (hasNonWS(value) || isInvalidHexLiteral(value)) {\n\t\t\treturn NaN;\n\t\t}\n\t\tvar trimmed = $trim(value);\n\t\tif (trimmed !== value) {\n\t\t\treturn ToNumber(trimmed);\n\t\t}\n\n\t}\n\treturn $Number(value);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/ToNumber.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/ToObject.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2019/ToObject.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Object = GetIntrinsic('%Object%');\n\nvar RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ \"./node_modules/es-abstract/2019/RequireObjectCoercible.js\");\n\n// https://262.ecma-international.org/6.0/#sec-toobject\n\nmodule.exports = function ToObject(value) {\n\tRequireObjectCoercible(value);\n\treturn $Object(value);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/ToObject.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/ToPrimitive.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/2019/ToPrimitive.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ \"./node_modules/es-to-primitive/es2015.js\");\n\n// https://262.ecma-international.org/6.0/#sec-toprimitive\n\nmodule.exports = function ToPrimitive(input) {\n\tif (arguments.length > 1) {\n\t\treturn toPrimitive(input, arguments[1]);\n\t}\n\treturn toPrimitive(input);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/ToPrimitive.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2019/ToString.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2019/ToString.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $String = GetIntrinsic('%String%');\nvar $TypeError = GetIntrinsic('%TypeError%');\n\n// https://262.ecma-international.org/6.0/#sec-tostring\n\nmodule.exports = function ToString(argument) {\n\tif (typeof argument === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a string');\n\t}\n\treturn $String(argument);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2019/ToString.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/Call.js":
/*!***********************************************!*\
  !*** ./node_modules/es-abstract/2023/Call.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar IsArray = __webpack_require__(/*! ./IsArray */ \"./node_modules/es-abstract/2023/IsArray.js\");\n\nvar $apply = GetIntrinsic('%Reflect.apply%', true) || callBound('Function.prototype.apply');\n\n// https://262.ecma-international.org/6.0/#sec-call\n\nmodule.exports = function Call(F, V) {\n\tvar argumentsList = arguments.length > 2 ? arguments[2] : [];\n\tif (!IsArray(argumentsList)) {\n\t\tthrow new $TypeError('Assertion failed: optional `argumentsList`, if provided, must be a List');\n\t}\n\treturn $apply(F, V, argumentsList);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/Call.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/CreateDataProperty.js":
/*!*************************************************************!*\
  !*** ./node_modules/es-abstract/2023/CreateDataProperty.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar OrdinaryDefineOwnProperty = __webpack_require__(/*! ./OrdinaryDefineOwnProperty */ \"./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-createdataproperty\n\nmodule.exports = function CreateDataProperty(O, P, V) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: IsPropertyKey(P) is not true');\n\t}\n\tvar newDesc = {\n\t\t'[[Configurable]]': true,\n\t\t'[[Enumerable]]': true,\n\t\t'[[Value]]': V,\n\t\t'[[Writable]]': true\n\t};\n\treturn OrdinaryDefineOwnProperty(O, P, newDesc);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/CreateDataProperty.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/FromPropertyDescriptor.js":
/*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2023/FromPropertyDescriptor.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ \"./node_modules/es-abstract/helpers/assertRecord.js\");\nvar fromPropertyDescriptor = __webpack_require__(/*! ../helpers/fromPropertyDescriptor */ \"./node_modules/es-abstract/helpers/fromPropertyDescriptor.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-frompropertydescriptor\n\nmodule.exports = function FromPropertyDescriptor(Desc) {\n\tif (typeof Desc !== 'undefined') {\n\t\tassertRecord(Type, 'Property Descriptor', 'Desc', Desc);\n\t}\n\n\treturn fromPropertyDescriptor(Desc);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/FromPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/Get.js":
/*!**********************************************!*\
  !*** ./node_modules/es-abstract/2023/Get.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar inspect = __webpack_require__(/*! object-inspect */ \"./node_modules/object-inspect/index.js\");\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-get-o-p\n\nmodule.exports = function Get(O, P) {\n\t// 7.3.1.1\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: Type(O) is not Object');\n\t}\n\t// 7.3.1.2\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: IsPropertyKey(P) is not true, got ' + inspect(P));\n\t}\n\t// 7.3.1.3\n\treturn O[P];\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/Get.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/HasProperty.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/2023/HasProperty.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-hasproperty\n\nmodule.exports = function HasProperty(O, P) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: `O` must be an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: `P` must be a Property Key');\n\t}\n\treturn P in O;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/HasProperty.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsAccessorDescriptor.js":
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsAccessorDescriptor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\nvar assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ \"./node_modules/es-abstract/helpers/assertRecord.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.1\n\nmodule.exports = function IsAccessorDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tassertRecord(Type, 'Property Descriptor', 'Desc', Desc);\n\n\tif (!has(Desc, '[[Get]]') && !has(Desc, '[[Set]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsAccessorDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsArray.js":
/*!**************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsArray.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// https://262.ecma-international.org/6.0/#sec-isarray\nmodule.exports = __webpack_require__(/*! ../helpers/IsArray */ \"./node_modules/es-abstract/helpers/IsArray.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsArray.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsCallable.js":
/*!*****************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsCallable.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// http://262.ecma-international.org/5.1/#sec-9.11\n\nmodule.exports = __webpack_require__(/*! is-callable */ \"./node_modules/is-callable/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsCallable.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsDataDescriptor.js":
/*!***********************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsDataDescriptor.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\nvar assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ \"./node_modules/es-abstract/helpers/assertRecord.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.2\n\nmodule.exports = function IsDataDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tassertRecord(Type, 'Property Descriptor', 'Desc', Desc);\n\n\tif (!has(Desc, '[[Value]]') && !has(Desc, '[[Writable]]')) {\n\t\treturn false;\n\t}\n\n\treturn true;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsDataDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsExtensible.js":
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsExtensible.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $preventExtensions = GetIntrinsic('%Object.preventExtensions%', true);\nvar $isExtensible = GetIntrinsic('%Object.isExtensible%', true);\n\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ \"./node_modules/es-abstract/helpers/isPrimitive.js\");\n\n// https://262.ecma-international.org/6.0/#sec-isextensible-o\n\nmodule.exports = $preventExtensions\n\t? function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj) && $isExtensible(obj);\n\t}\n\t: function IsExtensible(obj) {\n\t\treturn !isPrimitive(obj);\n\t};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsExtensible.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsGenericDescriptor.js":
/*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsGenericDescriptor.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar assertRecord = __webpack_require__(/*! ../helpers/assertRecord */ \"./node_modules/es-abstract/helpers/assertRecord.js\");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2023/IsAccessorDescriptor.js\");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ \"./node_modules/es-abstract/2023/IsDataDescriptor.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/6.0/#sec-isgenericdescriptor\n\nmodule.exports = function IsGenericDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn false;\n\t}\n\n\tassertRecord(Type, 'Property Descriptor', 'Desc', Desc);\n\n\tif (!IsAccessorDescriptor(Desc) && !IsDataDescriptor(Desc)) {\n\t\treturn true;\n\t}\n\n\treturn false;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsGenericDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/IsPropertyKey.js":
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2023/IsPropertyKey.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// https://262.ecma-international.org/6.0/#sec-ispropertykey\n\nmodule.exports = function IsPropertyKey(argument) {\n\treturn typeof argument === 'string' || typeof argument === 'symbol';\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/IsPropertyKey.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/LengthOfArrayLike.js":
/*!************************************************************!*\
  !*** ./node_modules/es-abstract/2023/LengthOfArrayLike.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar Get = __webpack_require__(/*! ./Get */ \"./node_modules/es-abstract/2023/Get.js\");\nvar ToLength = __webpack_require__(/*! ./ToLength */ \"./node_modules/es-abstract/2023/ToLength.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/11.0/#sec-lengthofarraylike\n\nmodule.exports = function LengthOfArrayLike(obj) {\n\tif (Type(obj) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: `obj` must be an Object');\n\t}\n\treturn ToLength(Get(obj, 'length'));\n};\n\n// TODO: use this all over\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/LengthOfArrayLike.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js":
/*!********************************************************************!*\
  !*** ./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $gOPD = __webpack_require__(/*! gopd */ \"./node_modules/gopd/index.js\");\nvar $SyntaxError = GetIntrinsic('%SyntaxError%');\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/isPropertyDescriptor */ \"./node_modules/es-abstract/helpers/isPropertyDescriptor.js\");\n\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2023/IsAccessorDescriptor.js\");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ \"./node_modules/es-abstract/2023/IsDataDescriptor.js\");\nvar IsExtensible = __webpack_require__(/*! ./IsExtensible */ \"./node_modules/es-abstract/2023/IsExtensible.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar ToPropertyDescriptor = __webpack_require__(/*! ./ToPropertyDescriptor */ \"./node_modules/es-abstract/2023/ToPropertyDescriptor.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2023/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\nvar ValidateAndApplyPropertyDescriptor = __webpack_require__(/*! ./ValidateAndApplyPropertyDescriptor */ \"./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js\");\n\n// https://262.ecma-international.org/6.0/#sec-ordinarydefineownproperty\n\nmodule.exports = function OrdinaryDefineOwnProperty(O, P, Desc) {\n\tif (Type(O) !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (!isPropertyDescriptor({\n\t\tType: Type,\n\t\tIsDataDescriptor: IsDataDescriptor,\n\t\tIsAccessorDescriptor: IsAccessorDescriptor\n\t}, Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (!$gOPD) {\n\t\t// ES3/IE 8 fallback\n\t\tif (IsAccessorDescriptor(Desc)) {\n\t\t\tthrow new $SyntaxError('This environment does not support accessor property descriptors.');\n\t\t}\n\t\tvar creatingNormalDataProperty = !(P in O)\n\t\t\t&& Desc['[[Writable]]']\n\t\t\t&& Desc['[[Enumerable]]']\n\t\t\t&& Desc['[[Configurable]]']\n\t\t\t&& '[[Value]]' in Desc;\n\t\tvar settingExistingDataProperty = (P in O)\n\t\t\t&& (!('[[Configurable]]' in Desc) || Desc['[[Configurable]]'])\n\t\t\t&& (!('[[Enumerable]]' in Desc) || Desc['[[Enumerable]]'])\n\t\t\t&& (!('[[Writable]]' in Desc) || Desc['[[Writable]]'])\n\t\t\t&& '[[Value]]' in Desc;\n\t\tif (creatingNormalDataProperty || settingExistingDataProperty) {\n\t\t\tO[P] = Desc['[[Value]]']; // eslint-disable-line no-param-reassign\n\t\t\treturn SameValue(O[P], Desc['[[Value]]']);\n\t\t}\n\t\tthrow new $SyntaxError('This environment does not support defining non-writable, non-enumerable, or non-configurable properties');\n\t}\n\tvar desc = $gOPD(O, P);\n\tvar current = desc && ToPropertyDescriptor(desc);\n\tvar extensible = IsExtensible(O);\n\treturn ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/OrdinaryDefineOwnProperty.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/RequireObjectCoercible.js":
/*!*****************************************************************!*\
  !*** ./node_modules/es-abstract/2023/RequireObjectCoercible.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nmodule.exports = __webpack_require__(/*! ../5/CheckObjectCoercible */ \"./node_modules/es-abstract/5/CheckObjectCoercible.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/RequireObjectCoercible.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/SameValue.js":
/*!****************************************************!*\
  !*** ./node_modules/es-abstract/2023/SameValue.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\n\n// http://262.ecma-international.org/5.1/#sec-9.12\n\nmodule.exports = function SameValue(x, y) {\n\tif (x === y) { // 0 === -0, but they are not identical.\n\t\tif (x === 0) { return 1 / x === 1 / y; }\n\t\treturn true;\n\t}\n\treturn $isNaN(x) && $isNaN(y);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/SameValue.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/SameValueZero.js":
/*!********************************************************!*\
  !*** ./node_modules/es-abstract/2023/SameValueZero.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\n\n// https://262.ecma-international.org/6.0/#sec-samevaluezero\n\nmodule.exports = function SameValueZero(x, y) {\n\treturn (x === y) || ($isNaN(x) && $isNaN(y));\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/SameValueZero.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/StringToNumber.js":
/*!*********************************************************!*\
  !*** ./node_modules/es-abstract/2023/StringToNumber.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Number = GetIntrinsic('%Number%');\nvar $RegExp = GetIntrinsic('%RegExp%');\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $parseInteger = GetIntrinsic('%parseInt%');\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\nvar regexTester = __webpack_require__(/*! safe-regex-test */ \"./node_modules/safe-regex-test/index.js\");\n\nvar $strSlice = callBound('String.prototype.slice');\nvar isBinary = regexTester(/^0b[01]+$/i);\nvar isOctal = regexTester(/^0o[0-7]+$/i);\nvar isInvalidHexLiteral = regexTester(/^[-+]0x[0-9a-f]+$/i);\nvar nonWS = ['\\u0085', '\\u200b', '\\ufffe'].join('');\nvar nonWSregex = new $RegExp('[' + nonWS + ']', 'g');\nvar hasNonWS = regexTester(nonWSregex);\n\nvar $trim = __webpack_require__(/*! string.prototype.trim */ \"./node_modules/string.prototype.trim/index.js\");\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/13.0/#sec-stringtonumber\n\nmodule.exports = function StringToNumber(argument) {\n\tif (Type(argument) !== 'String') {\n\t\tthrow new $TypeError('Assertion failed: `argument` is not a String');\n\t}\n\tif (isBinary(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 2));\n\t}\n\tif (isOctal(argument)) {\n\t\treturn $Number($parseInteger($strSlice(argument, 2), 8));\n\t}\n\tif (hasNonWS(argument) || isInvalidHexLiteral(argument)) {\n\t\treturn NaN;\n\t}\n\tvar trimmed = $trim(argument);\n\tif (trimmed !== argument) {\n\t\treturn StringToNumber(trimmed);\n\t}\n\treturn $Number(argument);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/StringToNumber.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToBoolean.js":
/*!****************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToBoolean.js ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// http://262.ecma-international.org/5.1/#sec-9.2\n\nmodule.exports = function ToBoolean(value) { return !!value; };\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToBoolean.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToIntegerOrInfinity.js":
/*!**************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToIntegerOrInfinity.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ \"./node_modules/es-abstract/2023/ToNumber.js\");\nvar truncate = __webpack_require__(/*! ./truncate */ \"./node_modules/es-abstract/2023/truncate.js\");\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\nvar $isFinite = __webpack_require__(/*! ../helpers/isFinite */ \"./node_modules/es-abstract/helpers/isFinite.js\");\n\n// https://262.ecma-international.org/14.0/#sec-tointegerorinfinity\n\nmodule.exports = function ToIntegerOrInfinity(value) {\n\tvar number = ToNumber(value);\n\tif ($isNaN(number) || number === 0) { return 0; }\n\tif (!$isFinite(number)) { return number; }\n\treturn truncate(number);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToIntegerOrInfinity.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToLength.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToLength.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar MAX_SAFE_INTEGER = __webpack_require__(/*! ../helpers/maxSafeInteger */ \"./node_modules/es-abstract/helpers/maxSafeInteger.js\");\n\nvar ToIntegerOrInfinity = __webpack_require__(/*! ./ToIntegerOrInfinity */ \"./node_modules/es-abstract/2023/ToIntegerOrInfinity.js\");\n\nmodule.exports = function ToLength(argument) {\n\tvar len = ToIntegerOrInfinity(argument);\n\tif (len <= 0) { return 0; } // includes converting -0 to +0\n\tif (len > MAX_SAFE_INTEGER) { return MAX_SAFE_INTEGER; }\n\treturn len;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToLength.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToNumber.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToNumber.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $Number = GetIntrinsic('%Number%');\nvar isPrimitive = __webpack_require__(/*! ../helpers/isPrimitive */ \"./node_modules/es-abstract/helpers/isPrimitive.js\");\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ \"./node_modules/es-abstract/2023/ToPrimitive.js\");\nvar StringToNumber = __webpack_require__(/*! ./StringToNumber */ \"./node_modules/es-abstract/2023/StringToNumber.js\");\n\n// https://262.ecma-international.org/13.0/#sec-tonumber\n\nmodule.exports = function ToNumber(argument) {\n\tvar value = isPrimitive(argument) ? argument : ToPrimitive(argument, $Number);\n\tif (typeof value === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a number');\n\t}\n\tif (typeof value === 'bigint') {\n\t\tthrow new $TypeError('Conversion from \\'BigInt\\' to \\'number\\' is not allowed.');\n\t}\n\tif (typeof value === 'string') {\n\t\treturn StringToNumber(value);\n\t}\n\treturn $Number(value);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToNumber.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToObject.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToObject.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Object = GetIntrinsic('%Object%');\n\nvar RequireObjectCoercible = __webpack_require__(/*! ./RequireObjectCoercible */ \"./node_modules/es-abstract/2023/RequireObjectCoercible.js\");\n\n// https://262.ecma-international.org/6.0/#sec-toobject\n\nmodule.exports = function ToObject(value) {\n\tRequireObjectCoercible(value);\n\treturn $Object(value);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToObject.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToPrimitive.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToPrimitive.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar toPrimitive = __webpack_require__(/*! es-to-primitive/es2015 */ \"./node_modules/es-to-primitive/es2015.js\");\n\n// https://262.ecma-international.org/6.0/#sec-toprimitive\n\nmodule.exports = function ToPrimitive(input) {\n\tif (arguments.length > 1) {\n\t\treturn toPrimitive(input, arguments[1]);\n\t}\n\treturn toPrimitive(input);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToPrimitive.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToPropertyDescriptor.js":
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToPropertyDescriptor.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\nvar ToBoolean = __webpack_require__(/*! ./ToBoolean */ \"./node_modules/es-abstract/2023/ToBoolean.js\");\nvar IsCallable = __webpack_require__(/*! ./IsCallable */ \"./node_modules/es-abstract/2023/IsCallable.js\");\n\n// https://262.ecma-international.org/5.1/#sec-8.10.5\n\nmodule.exports = function ToPropertyDescriptor(Obj) {\n\tif (Type(Obj) !== 'Object') {\n\t\tthrow new $TypeError('ToPropertyDescriptor requires an object');\n\t}\n\n\tvar desc = {};\n\tif (has(Obj, 'enumerable')) {\n\t\tdesc['[[Enumerable]]'] = ToBoolean(Obj.enumerable);\n\t}\n\tif (has(Obj, 'configurable')) {\n\t\tdesc['[[Configurable]]'] = ToBoolean(Obj.configurable);\n\t}\n\tif (has(Obj, 'value')) {\n\t\tdesc['[[Value]]'] = Obj.value;\n\t}\n\tif (has(Obj, 'writable')) {\n\t\tdesc['[[Writable]]'] = ToBoolean(Obj.writable);\n\t}\n\tif (has(Obj, 'get')) {\n\t\tvar getter = Obj.get;\n\t\tif (typeof getter !== 'undefined' && !IsCallable(getter)) {\n\t\t\tthrow new $TypeError('getter must be a function');\n\t\t}\n\t\tdesc['[[Get]]'] = getter;\n\t}\n\tif (has(Obj, 'set')) {\n\t\tvar setter = Obj.set;\n\t\tif (typeof setter !== 'undefined' && !IsCallable(setter)) {\n\t\t\tthrow new $TypeError('setter must be a function');\n\t\t}\n\t\tdesc['[[Set]]'] = setter;\n\t}\n\n\tif ((has(desc, '[[Get]]') || has(desc, '[[Set]]')) && (has(desc, '[[Value]]') || has(desc, '[[Writable]]'))) {\n\t\tthrow new $TypeError('Invalid property descriptor. Cannot both specify accessors and a value or writable attribute');\n\t}\n\treturn desc;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ToString.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/ToString.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $String = GetIntrinsic('%String%');\nvar $TypeError = GetIntrinsic('%TypeError%');\n\n// https://262.ecma-international.org/6.0/#sec-tostring\n\nmodule.exports = function ToString(argument) {\n\tif (typeof argument === 'symbol') {\n\t\tthrow new $TypeError('Cannot convert a Symbol value to a string');\n\t}\n\treturn $String(argument);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ToString.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/Type.js":
/*!***********************************************!*\
  !*** ./node_modules/es-abstract/2023/Type.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ES5Type = __webpack_require__(/*! ../5/Type */ \"./node_modules/es-abstract/5/Type.js\");\n\n// https://262.ecma-international.org/11.0/#sec-ecmascript-data-types-and-values\n\nmodule.exports = function Type(x) {\n\tif (typeof x === 'symbol') {\n\t\treturn 'Symbol';\n\t}\n\tif (typeof x === 'bigint') {\n\t\treturn 'BigInt';\n\t}\n\treturn ES5Type(x);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/Type.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nvar DefineOwnProperty = __webpack_require__(/*! ../helpers/DefineOwnProperty */ \"./node_modules/es-abstract/helpers/DefineOwnProperty.js\");\nvar isFullyPopulatedPropertyDescriptor = __webpack_require__(/*! ../helpers/isFullyPopulatedPropertyDescriptor */ \"./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js\");\nvar isPropertyDescriptor = __webpack_require__(/*! ../helpers/isPropertyDescriptor */ \"./node_modules/es-abstract/helpers/isPropertyDescriptor.js\");\n\nvar FromPropertyDescriptor = __webpack_require__(/*! ./FromPropertyDescriptor */ \"./node_modules/es-abstract/2023/FromPropertyDescriptor.js\");\nvar IsAccessorDescriptor = __webpack_require__(/*! ./IsAccessorDescriptor */ \"./node_modules/es-abstract/2023/IsAccessorDescriptor.js\");\nvar IsDataDescriptor = __webpack_require__(/*! ./IsDataDescriptor */ \"./node_modules/es-abstract/2023/IsDataDescriptor.js\");\nvar IsGenericDescriptor = __webpack_require__(/*! ./IsGenericDescriptor */ \"./node_modules/es-abstract/2023/IsGenericDescriptor.js\");\nvar IsPropertyKey = __webpack_require__(/*! ./IsPropertyKey */ \"./node_modules/es-abstract/2023/IsPropertyKey.js\");\nvar SameValue = __webpack_require__(/*! ./SameValue */ \"./node_modules/es-abstract/2023/SameValue.js\");\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// https://262.ecma-international.org/13.0/#sec-validateandapplypropertydescriptor\n\n// see https://github.com/tc39/ecma262/pull/2468 for ES2022 changes\n\n// eslint-disable-next-line max-lines-per-function, max-statements\nmodule.exports = function ValidateAndApplyPropertyDescriptor(O, P, extensible, Desc, current) {\n\tvar oType = Type(O);\n\tif (oType !== 'Undefined' && oType !== 'Object') {\n\t\tthrow new $TypeError('Assertion failed: O must be undefined or an Object');\n\t}\n\tif (!IsPropertyKey(P)) {\n\t\tthrow new $TypeError('Assertion failed: P must be a Property Key');\n\t}\n\tif (Type(extensible) !== 'Boolean') {\n\t\tthrow new $TypeError('Assertion failed: extensible must be a Boolean');\n\t}\n\tif (!isPropertyDescriptor({\n\t\tType: Type,\n\t\tIsDataDescriptor: IsDataDescriptor,\n\t\tIsAccessorDescriptor: IsAccessorDescriptor\n\t}, Desc)) {\n\t\tthrow new $TypeError('Assertion failed: Desc must be a Property Descriptor');\n\t}\n\tif (Type(current) !== 'Undefined' && !isPropertyDescriptor({\n\t\tType: Type,\n\t\tIsDataDescriptor: IsDataDescriptor,\n\t\tIsAccessorDescriptor: IsAccessorDescriptor\n\t}, current)) {\n\t\tthrow new $TypeError('Assertion failed: current must be a Property Descriptor, or undefined');\n\t}\n\n\tif (Type(current) === 'Undefined') { // step 2\n\t\tif (!extensible) {\n\t\t\treturn false; // step 2.a\n\t\t}\n\t\tif (oType === 'Undefined') {\n\t\t\treturn true; // step 2.b\n\t\t}\n\t\tif (IsAccessorDescriptor(Desc)) { // step 2.c\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\tDesc\n\t\t\t);\n\t\t}\n\t\t// step 2.d\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\t{\n\t\t\t\t'[[Configurable]]': !!Desc['[[Configurable]]'],\n\t\t\t\t'[[Enumerable]]': !!Desc['[[Enumerable]]'],\n\t\t\t\t'[[Value]]': Desc['[[Value]]'],\n\t\t\t\t'[[Writable]]': !!Desc['[[Writable]]']\n\t\t\t}\n\t\t);\n\t}\n\n\t// 3. Assert: current is a fully populated Property Descriptor.\n\tif (!isFullyPopulatedPropertyDescriptor({\n\t\tIsAccessorDescriptor: IsAccessorDescriptor,\n\t\tIsDataDescriptor: IsDataDescriptor\n\t}, current)) {\n\t\tthrow new $TypeError('`current`, when present, must be a fully populated and valid Property Descriptor');\n\t}\n\n\t// 4. If every field in Desc is absent, return true.\n\t// this can't really match the assertion that it's a Property Descriptor in our JS implementation\n\n\t// 5. If current.[[Configurable]] is false, then\n\tif (!current['[[Configurable]]']) {\n\t\tif ('[[Configurable]]' in Desc && Desc['[[Configurable]]']) {\n\t\t\t// step 5.a\n\t\t\treturn false;\n\t\t}\n\t\tif ('[[Enumerable]]' in Desc && !SameValue(Desc['[[Enumerable]]'], current['[[Enumerable]]'])) {\n\t\t\t// step 5.b\n\t\t\treturn false;\n\t\t}\n\t\tif (!IsGenericDescriptor(Desc) && !SameValue(IsAccessorDescriptor(Desc), IsAccessorDescriptor(current))) {\n\t\t\t// step 5.c\n\t\t\treturn false;\n\t\t}\n\t\tif (IsAccessorDescriptor(current)) { // step 5.d\n\t\t\tif ('[[Get]]' in Desc && !SameValue(Desc['[[Get]]'], current['[[Get]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Set]]' in Desc && !SameValue(Desc['[[Set]]'], current['[[Set]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t} else if (!current['[[Writable]]']) { // step 5.e\n\t\t\tif ('[[Writable]]' in Desc && Desc['[[Writable]]']) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t\tif ('[[Value]]' in Desc && !SameValue(Desc['[[Value]]'], current['[[Value]]'])) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\t}\n\n\t// 6. If O is not undefined, then\n\tif (oType !== 'Undefined') {\n\t\tvar configurable;\n\t\tvar enumerable;\n\t\tif (IsDataDescriptor(current) && IsAccessorDescriptor(Desc)) { // step 6.a\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// Replace the property named P of object O with an accessor property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Get]]': ('[[Get]]' in Desc ? Desc : current)['[[Get]]'],\n\t\t\t\t\t'[[Set]]': ('[[Set]]' in Desc ? Desc : current)['[[Set]]']\n\t\t\t\t}\n\t\t\t);\n\t\t} else if (IsAccessorDescriptor(current) && IsDataDescriptor(Desc)) {\n\t\t\tconfigurable = ('[[Configurable]]' in Desc ? Desc : current)['[[Configurable]]'];\n\t\t\tenumerable = ('[[Enumerable]]' in Desc ? Desc : current)['[[Enumerable]]'];\n\t\t\t// i. Replace the property named P of object O with a data property having [[Configurable]] and [[Enumerable]] attributes as described by current and each other attribute set to its default value.\n\t\t\treturn DefineOwnProperty(\n\t\t\t\tIsDataDescriptor,\n\t\t\t\tSameValue,\n\t\t\t\tFromPropertyDescriptor,\n\t\t\t\tO,\n\t\t\t\tP,\n\t\t\t\t{\n\t\t\t\t\t'[[Configurable]]': !!configurable,\n\t\t\t\t\t'[[Enumerable]]': !!enumerable,\n\t\t\t\t\t'[[Value]]': ('[[Value]]' in Desc ? Desc : current)['[[Value]]'],\n\t\t\t\t\t'[[Writable]]': !!('[[Writable]]' in Desc ? Desc : current)['[[Writable]]']\n\t\t\t\t}\n\t\t\t);\n\t\t}\n\n\t\t// For each field of Desc that is present, set the corresponding attribute of the property named P of object O to the value of the field.\n\t\treturn DefineOwnProperty(\n\t\t\tIsDataDescriptor,\n\t\t\tSameValue,\n\t\t\tFromPropertyDescriptor,\n\t\t\tO,\n\t\t\tP,\n\t\t\tDesc\n\t\t);\n\t}\n\n\treturn true; // step 7\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/ValidateAndApplyPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/floor.js":
/*!************************************************!*\
  !*** ./node_modules/es-abstract/2023/floor.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar Type = __webpack_require__(/*! ./Type */ \"./node_modules/es-abstract/2023/Type.js\");\n\n// var modulo = require('./modulo');\nvar $floor = Math.floor;\n\n// http://262.ecma-international.org/11.0/#eqn-floor\n\nmodule.exports = function floor(x) {\n\t// return x - modulo(x, 1);\n\tif (Type(x) === 'BigInt') {\n\t\treturn x;\n\t}\n\treturn $floor(x);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/floor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/2023/truncate.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/2023/truncate.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar floor = __webpack_require__(/*! ./floor */ \"./node_modules/es-abstract/2023/floor.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\n// https://262.ecma-international.org/14.0/#eqn-truncate\n\nmodule.exports = function truncate(x) {\n\tif (typeof x !== 'number' && typeof x !== 'bigint') {\n\t\tthrow new $TypeError('argument must be a Number or a BigInt');\n\t}\n\tvar result = x < 0 ? -floor(-x) : floor(x);\n\treturn result === 0 ? 0 : result; // in the spec, these are math values, so we filter out -0 here\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/2023/truncate.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/CheckObjectCoercible.js":
/*!************************************************************!*\
  !*** ./node_modules/es-abstract/5/CheckObjectCoercible.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\n\n// http://262.ecma-international.org/5.1/#sec-9.10\n\nmodule.exports = function CheckObjectCoercible(value, optMessage) {\n\tif (value == null) {\n\t\tthrow new $TypeError(optMessage || ('Cannot call method on ' + value));\n\t}\n\treturn value;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/CheckObjectCoercible.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/ToInteger.js":
/*!*************************************************!*\
  !*** ./node_modules/es-abstract/5/ToInteger.js ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar abs = __webpack_require__(/*! ./abs */ \"./node_modules/es-abstract/5/abs.js\");\nvar floor = __webpack_require__(/*! ./floor */ \"./node_modules/es-abstract/5/floor.js\");\nvar ToNumber = __webpack_require__(/*! ./ToNumber */ \"./node_modules/es-abstract/5/ToNumber.js\");\n\nvar $isNaN = __webpack_require__(/*! ../helpers/isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\nvar $isFinite = __webpack_require__(/*! ../helpers/isFinite */ \"./node_modules/es-abstract/helpers/isFinite.js\");\nvar $sign = __webpack_require__(/*! ../helpers/sign */ \"./node_modules/es-abstract/helpers/sign.js\");\n\n// http://262.ecma-international.org/5.1/#sec-9.4\n\nmodule.exports = function ToInteger(value) {\n\tvar number = ToNumber(value);\n\tif ($isNaN(number)) { return 0; }\n\tif (number === 0 || !$isFinite(number)) { return number; }\n\treturn $sign(number) * floor(abs(number));\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/ToInteger.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/ToNumber.js":
/*!************************************************!*\
  !*** ./node_modules/es-abstract/5/ToNumber.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar ToPrimitive = __webpack_require__(/*! ./ToPrimitive */ \"./node_modules/es-abstract/5/ToPrimitive.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $replace = callBound('String.prototype.replace');\n\nvar safeRegexTester = __webpack_require__(/*! safe-regex-test */ \"./node_modules/safe-regex-test/index.js\");\n\nvar isNonDecimal = safeRegexTester(/^0[ob]|^[+-]0x/);\n\n// http://262.ecma-international.org/5.1/#sec-9.3\n\nmodule.exports = function ToNumber(value) {\n\tvar prim = ToPrimitive(value, Number);\n\tif (typeof prim !== 'string') {\n\t\treturn +prim; // eslint-disable-line no-implicit-coercion\n\t}\n\n\tvar trimmed = $replace(\n\t\tprim,\n\t\t// eslint-disable-next-line no-control-regex\n\t\t/^[ \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u0085]+|[ \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000\\u0085]+$/g,\n\t\t''\n\t);\n\tif (isNonDecimal(trimmed)) {\n\t\treturn NaN;\n\t}\n\n\treturn +trimmed; // eslint-disable-line no-implicit-coercion\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/ToNumber.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/ToPrimitive.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/5/ToPrimitive.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// http://262.ecma-international.org/5.1/#sec-9.1\n\nmodule.exports = __webpack_require__(/*! es-to-primitive/es5 */ \"./node_modules/es-to-primitive/es5.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/ToPrimitive.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/Type.js":
/*!********************************************!*\
  !*** ./node_modules/es-abstract/5/Type.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// https://262.ecma-international.org/5.1/#sec-8\n\nmodule.exports = function Type(x) {\n\tif (x === null) {\n\t\treturn 'Null';\n\t}\n\tif (typeof x === 'undefined') {\n\t\treturn 'Undefined';\n\t}\n\tif (typeof x === 'function' || typeof x === 'object') {\n\t\treturn 'Object';\n\t}\n\tif (typeof x === 'number') {\n\t\treturn 'Number';\n\t}\n\tif (typeof x === 'boolean') {\n\t\treturn 'Boolean';\n\t}\n\tif (typeof x === 'string') {\n\t\treturn 'String';\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/Type.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/abs.js":
/*!*******************************************!*\
  !*** ./node_modules/es-abstract/5/abs.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $abs = GetIntrinsic('%Math.abs%');\n\n// http://262.ecma-international.org/5.1/#sec-5.2\n\nmodule.exports = function abs(x) {\n\treturn $abs(x);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/abs.js?");

/***/ }),

/***/ "./node_modules/es-abstract/5/floor.js":
/*!*********************************************!*\
  !*** ./node_modules/es-abstract/5/floor.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\n\n// var modulo = require('./modulo');\nvar $floor = Math.floor;\n\n// http://262.ecma-international.org/5.1/#sec-5.2\n\nmodule.exports = function floor(x) {\n\t// return x - modulo(x, 1);\n\treturn $floor(x);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/5/floor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/DefineOwnProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/DefineOwnProperty.js ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar hasPropertyDescriptors = __webpack_require__(/*! has-property-descriptors */ \"./node_modules/has-property-descriptors/index.js\");\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $defineProperty = hasPropertyDescriptors() && GetIntrinsic('%Object.defineProperty%', true);\n\nvar hasArrayLengthDefineBug = hasPropertyDescriptors.hasArrayLengthDefineBug();\n\n// eslint-disable-next-line global-require\nvar isArray = hasArrayLengthDefineBug && __webpack_require__(/*! ../helpers/IsArray */ \"./node_modules/es-abstract/helpers/IsArray.js\");\n\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\");\n\nvar $isEnumerable = callBound('Object.prototype.propertyIsEnumerable');\n\n// eslint-disable-next-line max-params\nmodule.exports = function DefineOwnProperty(IsDataDescriptor, SameValue, FromPropertyDescriptor, O, P, desc) {\n\tif (!$defineProperty) {\n\t\tif (!IsDataDescriptor(desc)) {\n\t\t\t// ES3 does not support getters/setters\n\t\t\treturn false;\n\t\t}\n\t\tif (!desc['[[Configurable]]'] || !desc['[[Writable]]']) {\n\t\t\treturn false;\n\t\t}\n\n\t\t// fallback for ES3\n\t\tif (P in O && $isEnumerable(O, P) !== !!desc['[[Enumerable]]']) {\n\t\t\t// a non-enumerable existing property\n\t\t\treturn false;\n\t\t}\n\n\t\t// property does not exist at all, or exists but is enumerable\n\t\tvar V = desc['[[Value]]'];\n\t\t// eslint-disable-next-line no-param-reassign\n\t\tO[P] = V; // will use [[Define]]\n\t\treturn SameValue(O[P], V);\n\t}\n\tif (\n\t\thasArrayLengthDefineBug\n\t\t&& P === 'length'\n\t\t&& '[[Value]]' in desc\n\t\t&& isArray(O)\n\t\t&& O.length !== desc['[[Value]]']\n\t) {\n\t\t// eslint-disable-next-line no-param-reassign\n\t\tO.length = desc['[[Value]]'];\n\t\treturn O.length === desc['[[Value]]'];\n\t}\n\n\t$defineProperty(O, P, FromPropertyDescriptor(desc));\n\treturn true;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/DefineOwnProperty.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/IsArray.js":
/*!*****************************************************!*\
  !*** ./node_modules/es-abstract/helpers/IsArray.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $Array = GetIntrinsic('%Array%');\n\n// eslint-disable-next-line global-require\nvar toStr = !$Array.isArray && __webpack_require__(/*! call-bind/callBound */ \"./node_modules/call-bind/callBound.js\")('Object.prototype.toString');\n\nmodule.exports = $Array.isArray || function IsArray(argument) {\n\treturn toStr(argument) === '[object Array]';\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/IsArray.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/assertRecord.js":
/*!**********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/assertRecord.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $TypeError = GetIntrinsic('%TypeError%');\nvar $SyntaxError = GetIntrinsic('%SyntaxError%');\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar isInteger = __webpack_require__(/*! ./isInteger */ \"./node_modules/es-abstract/helpers/isInteger.js\");\n\nvar isMatchRecord = __webpack_require__(/*! ./isMatchRecord */ \"./node_modules/es-abstract/helpers/isMatchRecord.js\");\n\nvar predicates = {\n\t// https://262.ecma-international.org/6.0/#sec-property-descriptor-specification-type\n\t'Property Descriptor': function isPropertyDescriptor(Desc) {\n\t\tvar allowed = {\n\t\t\t'[[Configurable]]': true,\n\t\t\t'[[Enumerable]]': true,\n\t\t\t'[[Get]]': true,\n\t\t\t'[[Set]]': true,\n\t\t\t'[[Value]]': true,\n\t\t\t'[[Writable]]': true\n\t\t};\n\n\t\tif (!Desc) {\n\t\t\treturn false;\n\t\t}\n\t\tfor (var key in Desc) { // eslint-disable-line\n\t\t\tif (has(Desc, key) && !allowed[key]) {\n\t\t\t\treturn false;\n\t\t\t}\n\t\t}\n\n\t\tvar isData = has(Desc, '[[Value]]');\n\t\tvar IsAccessor = has(Desc, '[[Get]]') || has(Desc, '[[Set]]');\n\t\tif (isData && IsAccessor) {\n\t\t\tthrow new $TypeError('Property Descriptors may not be both accessor and data descriptors');\n\t\t}\n\t\treturn true;\n\t},\n\t// https://262.ecma-international.org/13.0/#sec-match-records\n\t'Match Record': isMatchRecord,\n\t'Iterator Record': function isIteratorRecord(value) {\n\t\treturn has(value, '[[Iterator]]') && has(value, '[[NextMethod]]') && has(value, '[[Done]]');\n\t},\n\t'PromiseCapability Record': function isPromiseCapabilityRecord(value) {\n\t\treturn !!value\n\t\t\t&& has(value, '[[Resolve]]')\n\t\t\t&& typeof value['[[Resolve]]'] === 'function'\n\t\t\t&& has(value, '[[Reject]]')\n\t\t\t&& typeof value['[[Reject]]'] === 'function'\n\t\t\t&& has(value, '[[Promise]]')\n\t\t\t&& value['[[Promise]]']\n\t\t\t&& typeof value['[[Promise]]'].then === 'function';\n\t},\n\t'AsyncGeneratorRequest Record': function isAsyncGeneratorRequestRecord(value) {\n\t\treturn !!value\n\t\t\t&& has(value, '[[Completion]]') // TODO: confirm is a completion record\n\t\t\t&& has(value, '[[Capability]]')\n\t\t\t&& predicates['PromiseCapability Record'](value['[[Capability]]']);\n\t},\n\t'RegExp Record': function isRegExpRecord(value) {\n\t\treturn value\n\t\t\t&& has(value, '[[IgnoreCase]]')\n\t\t\t&& typeof value['[[IgnoreCase]]'] === 'boolean'\n\t\t\t&& has(value, '[[Multiline]]')\n\t\t\t&& typeof value['[[Multiline]]'] === 'boolean'\n\t\t\t&& has(value, '[[DotAll]]')\n\t\t\t&& typeof value['[[DotAll]]'] === 'boolean'\n\t\t\t&& has(value, '[[Unicode]]')\n\t\t\t&& typeof value['[[Unicode]]'] === 'boolean'\n\t\t\t&& has(value, '[[CapturingGroupsCount]]')\n\t\t\t&& typeof value['[[CapturingGroupsCount]]'] === 'number'\n\t\t\t&& isInteger(value['[[CapturingGroupsCount]]'])\n\t\t\t&& value['[[CapturingGroupsCount]]'] >= 0;\n\t}\n};\n\nmodule.exports = function assertRecord(Type, recordType, argumentName, value) {\n\tvar predicate = predicates[recordType];\n\tif (typeof predicate !== 'function') {\n\t\tthrow new $SyntaxError('unknown record type: ' + recordType);\n\t}\n\tif (Type(value) !== 'Object' || !predicate(value)) {\n\t\tthrow new $TypeError(argumentName + ' must be a ' + recordType);\n\t}\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/assertRecord.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/callBind.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/callBind.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n// TODO; semver-major: remove\n\nmodule.exports = __webpack_require__(/*! call-bind */ \"./node_modules/call-bind/index.js\");\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/callBind.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/fromPropertyDescriptor.js":
/*!********************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/fromPropertyDescriptor.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function fromPropertyDescriptor(Desc) {\n\tif (typeof Desc === 'undefined') {\n\t\treturn Desc;\n\t}\n\tvar obj = {};\n\tif ('[[Value]]' in Desc) {\n\t\tobj.value = Desc['[[Value]]'];\n\t}\n\tif ('[[Writable]]' in Desc) {\n\t\tobj.writable = !!Desc['[[Writable]]'];\n\t}\n\tif ('[[Get]]' in Desc) {\n\t\tobj.get = Desc['[[Get]]'];\n\t}\n\tif ('[[Set]]' in Desc) {\n\t\tobj.set = Desc['[[Set]]'];\n\t}\n\tif ('[[Enumerable]]' in Desc) {\n\t\tobj.enumerable = !!Desc['[[Enumerable]]'];\n\t}\n\tif ('[[Configurable]]' in Desc) {\n\t\tobj.configurable = !!Desc['[[Configurable]]'];\n\t}\n\treturn obj;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/fromPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isFinite.js":
/*!******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isFinite.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar $isNaN = __webpack_require__(/*! ./isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\n\nmodule.exports = function (x) { return (typeof x === 'number' || typeof x === 'bigint') && !$isNaN(x) && x !== Infinity && x !== -Infinity; };\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isFinite.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js":
/*!********************************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isFullyPopulatedPropertyDescriptor(ES, Desc) {\n\treturn !!Desc\n\t\t&& typeof Desc === 'object'\n\t\t&& '[[Enumerable]]' in Desc\n\t\t&& '[[Configurable]]' in Desc\n\t\t&& (ES.IsAccessorDescriptor(Desc) || ES.IsDataDescriptor(Desc));\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isFullyPopulatedPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isInteger.js":
/*!*******************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isInteger.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar $abs = GetIntrinsic('%Math.abs%');\nvar $floor = GetIntrinsic('%Math.floor%');\n\nvar $isNaN = __webpack_require__(/*! ./isNaN */ \"./node_modules/es-abstract/helpers/isNaN.js\");\nvar $isFinite = __webpack_require__(/*! ./isFinite */ \"./node_modules/es-abstract/helpers/isFinite.js\");\n\nmodule.exports = function isInteger(argument) {\n\tif (typeof argument !== 'number' || $isNaN(argument) || !$isFinite(argument)) {\n\t\treturn false;\n\t}\n\tvar absValue = $abs(argument);\n\treturn $floor(absValue) === absValue;\n};\n\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isInteger.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isMatchRecord.js":
/*!***********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isMatchRecord.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\n\n// https://262.ecma-international.org/13.0/#sec-match-records\n\nmodule.exports = function isMatchRecord(record) {\n\treturn (\n\t\thas(record, '[[StartIndex]]')\n        && has(record, '[[EndIndex]]')\n        && record['[[StartIndex]]'] >= 0\n        && record['[[EndIndex]]'] >= record['[[StartIndex]]']\n        && String(parseInt(record['[[StartIndex]]'], 10)) === String(record['[[StartIndex]]'])\n        && String(parseInt(record['[[EndIndex]]'], 10)) === String(record['[[EndIndex]]'])\n\t);\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isMatchRecord.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isNaN.js":
/*!***************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isNaN.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = Number.isNaN || function isNaN(a) {\n\treturn a !== a;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isNaN.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isPrimitive.js":
/*!*********************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPrimitive.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function isPrimitive(value) {\n\treturn value === null || (typeof value !== 'function' && typeof value !== 'object');\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isPrimitive.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/isPropertyDescriptor.js":
/*!******************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/isPropertyDescriptor.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"./node_modules/get-intrinsic/index.js\");\n\nvar has = __webpack_require__(/*! has */ \"./node_modules/has/src/index.js\");\nvar $TypeError = GetIntrinsic('%TypeError%');\n\nmodule.exports = function IsPropertyDescriptor(ES, Desc) {\n\tif (ES.Type(Desc) !== 'Object') {\n\t\treturn false;\n\t}\n\tvar allowed = {\n\t\t'[[Configurable]]': true,\n\t\t'[[Enumerable]]': true,\n\t\t'[[Get]]': true,\n\t\t'[[Set]]': true,\n\t\t'[[Value]]': true,\n\t\t'[[Writable]]': true\n\t};\n\n\tfor (var key in Desc) { // eslint-disable-line no-restricted-syntax\n\t\tif (has(Desc, key) && !allowed[key]) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\tif (ES.IsDataDescriptor(Desc) && ES.IsAccessorDescriptor(Desc)) {\n\t\tthrow new $TypeError('Property Descriptors may not be both accessor and data descriptors');\n\t}\n\treturn true;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/isPropertyDescriptor.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/maxSafeInteger.js":
/*!************************************************************!*\
  !*** ./node_modules/es-abstract/helpers/maxSafeInteger.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = Number.MAX_SAFE_INTEGER || 9007199254740991; // Math.pow(2, 53) - 1;\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/maxSafeInteger.js?");

/***/ }),

/***/ "./node_modules/es-abstract/helpers/sign.js":
/*!**************************************************!*\
  !*** ./node_modules/es-abstract/helpers/sign.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function sign(number) {\n\treturn number >= 0 ? 1 : -1;\n};\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/es-abstract/helpers/sign.js?");

/***/ }),

/***/ "./node_modules/copy-anything/dist/index.js":
/*!**************************************************!*\
  !*** ./node_modules/copy-anything/dist/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   copy: () => (/* binding */ copy)\n/* harmony export */ });\n/* harmony import */ var is_what__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! is-what */ \"./node_modules/is-what/dist/index.js\");\n\n\nfunction assignProp(carry, key, newVal, originalObject, includeNonenumerable) {\n  const propType = {}.propertyIsEnumerable.call(originalObject, key) ? \"enumerable\" : \"nonenumerable\";\n  if (propType === \"enumerable\")\n    carry[key] = newVal;\n  if (includeNonenumerable && propType === \"nonenumerable\") {\n    Object.defineProperty(carry, key, {\n      value: newVal,\n      enumerable: false,\n      writable: true,\n      configurable: true\n    });\n  }\n}\nfunction copy(target, options = {}) {\n  if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(target)) {\n    return target.map((item) => copy(item, options));\n  }\n  if (!(0,is_what__WEBPACK_IMPORTED_MODULE_0__.isPlainObject)(target)) {\n    return target;\n  }\n  const props = Object.getOwnPropertyNames(target);\n  const symbols = Object.getOwnPropertySymbols(target);\n  return [...props, ...symbols].reduce((carry, key) => {\n    if ((0,is_what__WEBPACK_IMPORTED_MODULE_0__.isArray)(options.props) && !options.props.includes(key)) {\n      return carry;\n    }\n    const val = target[key];\n    const newVal = copy(val, options);\n    assignProp(carry, key, newVal, target, options.nonenumerable);\n    return carry;\n  }, {});\n}\n\n\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/copy-anything/dist/index.js?");

/***/ }),

/***/ "./node_modules/is-what/dist/index.js":
/*!********************************************!*\
  !*** ./node_modules/is-what/dist/index.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getType: () => (/* binding */ getType),\n/* harmony export */   isAnyObject: () => (/* binding */ isAnyObject),\n/* harmony export */   isArray: () => (/* binding */ isArray),\n/* harmony export */   isBlob: () => (/* binding */ isBlob),\n/* harmony export */   isBoolean: () => (/* binding */ isBoolean),\n/* harmony export */   isDate: () => (/* binding */ isDate),\n/* harmony export */   isEmptyArray: () => (/* binding */ isEmptyArray),\n/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),\n/* harmony export */   isEmptyString: () => (/* binding */ isEmptyString),\n/* harmony export */   isError: () => (/* binding */ isError),\n/* harmony export */   isFile: () => (/* binding */ isFile),\n/* harmony export */   isFullArray: () => (/* binding */ isFullArray),\n/* harmony export */   isFullObject: () => (/* binding */ isFullObject),\n/* harmony export */   isFullString: () => (/* binding */ isFullString),\n/* harmony export */   isFunction: () => (/* binding */ isFunction),\n/* harmony export */   isInstanceOf: () => (/* binding */ isInstanceOf),\n/* harmony export */   isMap: () => (/* binding */ isMap),\n/* harmony export */   isNaNValue: () => (/* binding */ isNaNValue),\n/* harmony export */   isNegativeNumber: () => (/* binding */ isNegativeNumber),\n/* harmony export */   isNull: () => (/* binding */ isNull),\n/* harmony export */   isNullOrUndefined: () => (/* binding */ isNullOrUndefined),\n/* harmony export */   isNumber: () => (/* binding */ isNumber),\n/* harmony export */   isObject: () => (/* binding */ isObject),\n/* harmony export */   isObjectLike: () => (/* binding */ isObjectLike),\n/* harmony export */   isOneOf: () => (/* binding */ isOneOf),\n/* harmony export */   isPlainObject: () => (/* binding */ isPlainObject),\n/* harmony export */   isPositiveNumber: () => (/* binding */ isPositiveNumber),\n/* harmony export */   isPrimitive: () => (/* binding */ isPrimitive),\n/* harmony export */   isPromise: () => (/* binding */ isPromise),\n/* harmony export */   isRegExp: () => (/* binding */ isRegExp),\n/* harmony export */   isSet: () => (/* binding */ isSet),\n/* harmony export */   isString: () => (/* binding */ isString),\n/* harmony export */   isSymbol: () => (/* binding */ isSymbol),\n/* harmony export */   isType: () => (/* binding */ isType),\n/* harmony export */   isUndefined: () => (/* binding */ isUndefined),\n/* harmony export */   isWeakMap: () => (/* binding */ isWeakMap),\n/* harmony export */   isWeakSet: () => (/* binding */ isWeakSet)\n/* harmony export */ });\nfunction getType(payload) {\n  return Object.prototype.toString.call(payload).slice(8, -1);\n}\nfunction isUndefined(payload) {\n  return getType(payload) === \"Undefined\";\n}\nfunction isNull(payload) {\n  return getType(payload) === \"Null\";\n}\nfunction isPlainObject(payload) {\n  if (getType(payload) !== \"Object\")\n    return false;\n  const prototype = Object.getPrototypeOf(payload);\n  return !!prototype && prototype.constructor === Object && prototype === Object.prototype;\n}\nfunction isObject(payload) {\n  return isPlainObject(payload);\n}\nfunction isEmptyObject(payload) {\n  return isPlainObject(payload) && Object.keys(payload).length === 0;\n}\nfunction isFullObject(payload) {\n  return isPlainObject(payload) && Object.keys(payload).length > 0;\n}\nfunction isAnyObject(payload) {\n  return getType(payload) === \"Object\";\n}\nfunction isObjectLike(payload) {\n  return isAnyObject(payload);\n}\nfunction isFunction(payload) {\n  return typeof payload === \"function\";\n}\nfunction isArray(payload) {\n  return getType(payload) === \"Array\";\n}\nfunction isFullArray(payload) {\n  return isArray(payload) && payload.length > 0;\n}\nfunction isEmptyArray(payload) {\n  return isArray(payload) && payload.length === 0;\n}\nfunction isString(payload) {\n  return getType(payload) === \"String\";\n}\nfunction isFullString(payload) {\n  return isString(payload) && payload !== \"\";\n}\nfunction isEmptyString(payload) {\n  return payload === \"\";\n}\nfunction isNumber(payload) {\n  return getType(payload) === \"Number\" && !isNaN(payload);\n}\nfunction isPositiveNumber(payload) {\n  return isNumber(payload) && payload > 0;\n}\nfunction isNegativeNumber(payload) {\n  return isNumber(payload) && payload < 0;\n}\nfunction isBoolean(payload) {\n  return getType(payload) === \"Boolean\";\n}\nfunction isRegExp(payload) {\n  return getType(payload) === \"RegExp\";\n}\nfunction isMap(payload) {\n  return getType(payload) === \"Map\";\n}\nfunction isWeakMap(payload) {\n  return getType(payload) === \"WeakMap\";\n}\nfunction isSet(payload) {\n  return getType(payload) === \"Set\";\n}\nfunction isWeakSet(payload) {\n  return getType(payload) === \"WeakSet\";\n}\nfunction isSymbol(payload) {\n  return getType(payload) === \"Symbol\";\n}\nfunction isDate(payload) {\n  return getType(payload) === \"Date\" && !isNaN(payload);\n}\nfunction isBlob(payload) {\n  return getType(payload) === \"Blob\";\n}\nfunction isFile(payload) {\n  return getType(payload) === \"File\";\n}\nfunction isPromise(payload) {\n  return getType(payload) === \"Promise\";\n}\nfunction isError(payload) {\n  return getType(payload) === \"Error\";\n}\nfunction isNaNValue(payload) {\n  return getType(payload) === \"Number\" && isNaN(payload);\n}\nfunction isPrimitive(payload) {\n  return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);\n}\nconst isNullOrUndefined = isOneOf(isNull, isUndefined);\nfunction isOneOf(a, b, c, d, e) {\n  return (value) => a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);\n}\nfunction isType(payload, type) {\n  if (!(type instanceof Function)) {\n    throw new TypeError(\"Type must be a function\");\n  }\n  if (!Object.prototype.hasOwnProperty.call(type, \"prototype\")) {\n    throw new TypeError(\"Type is not a class\");\n  }\n  const name = type.name;\n  return getType(payload) === name || Boolean(payload && payload.constructor === type);\n}\nfunction isInstanceOf(value, classOrClassName) {\n  if (typeof classOrClassName === \"function\") {\n    for (let p = value; p; p = Object.getPrototypeOf(p)) {\n      if (isType(p, classOrClassName)) {\n        return true;\n      }\n    }\n    return false;\n  } else {\n    for (let p = value; p; p = Object.getPrototypeOf(p)) {\n      if (getType(p) === classOrClassName) {\n        return true;\n      }\n    }\n    return false;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://typescript-code-generator/./node_modules/is-what/dist/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
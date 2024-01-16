(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Downshift = {}, global.React));
})(this, (function (exports, react) { 'use strict';

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }
    return target;
  }

  function _extends() {
    _extends = Object.assign ? Object.assign.bind() : function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    return _setPrototypeOf(o, p);
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    _setPrototypeOf(subClass, superClass);
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_development = createCommonjsModule(function (module, exports) {

    {
      (function () {

        // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
        // nor polyfill, then a plain number is used for performance.
        var hasSymbol = typeof Symbol === 'function' && Symbol.for;
        var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
        var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
        var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
        var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
        var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
        var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
        var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
        // (unstable) APIs that have been removed. Can we remove the symbols?

        var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
        var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
        var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
        var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
        var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
        var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
        var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
        var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
        var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
        var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
        var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;
        function isValidElementType(type) {
          return typeof type === 'string' || typeof type === 'function' ||
          // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
          type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
        }
        function typeOf(object) {
          if (typeof object === 'object' && object !== null) {
            var $$typeof = object.$$typeof;
            switch ($$typeof) {
              case REACT_ELEMENT_TYPE:
                var type = object.type;
                switch (type) {
                  case REACT_ASYNC_MODE_TYPE:
                  case REACT_CONCURRENT_MODE_TYPE:
                  case REACT_FRAGMENT_TYPE:
                  case REACT_PROFILER_TYPE:
                  case REACT_STRICT_MODE_TYPE:
                  case REACT_SUSPENSE_TYPE:
                    return type;
                  default:
                    var $$typeofType = type && type.$$typeof;
                    switch ($$typeofType) {
                      case REACT_CONTEXT_TYPE:
                      case REACT_FORWARD_REF_TYPE:
                      case REACT_LAZY_TYPE:
                      case REACT_MEMO_TYPE:
                      case REACT_PROVIDER_TYPE:
                        return $$typeofType;
                      default:
                        return $$typeof;
                    }
                }
              case REACT_PORTAL_TYPE:
                return $$typeof;
            }
          }
          return undefined;
        } // AsyncMode is deprecated along with isAsyncMode

        var AsyncMode = REACT_ASYNC_MODE_TYPE;
        var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
        var ContextConsumer = REACT_CONTEXT_TYPE;
        var ContextProvider = REACT_PROVIDER_TYPE;
        var Element = REACT_ELEMENT_TYPE;
        var ForwardRef = REACT_FORWARD_REF_TYPE;
        var Fragment = REACT_FRAGMENT_TYPE;
        var Lazy = REACT_LAZY_TYPE;
        var Memo = REACT_MEMO_TYPE;
        var Portal = REACT_PORTAL_TYPE;
        var Profiler = REACT_PROFILER_TYPE;
        var StrictMode = REACT_STRICT_MODE_TYPE;
        var Suspense = REACT_SUSPENSE_TYPE;
        var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

        function isAsyncMode(object) {
          {
            if (!hasWarnedAboutDeprecatedIsAsyncMode) {
              hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

              console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
            }
          }
          return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
        }
        function isConcurrentMode(object) {
          return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
        }
        function isContextConsumer(object) {
          return typeOf(object) === REACT_CONTEXT_TYPE;
        }
        function isContextProvider(object) {
          return typeOf(object) === REACT_PROVIDER_TYPE;
        }
        function isElement(object) {
          return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        function isForwardRef(object) {
          return typeOf(object) === REACT_FORWARD_REF_TYPE;
        }
        function isFragment(object) {
          return typeOf(object) === REACT_FRAGMENT_TYPE;
        }
        function isLazy(object) {
          return typeOf(object) === REACT_LAZY_TYPE;
        }
        function isMemo(object) {
          return typeOf(object) === REACT_MEMO_TYPE;
        }
        function isPortal(object) {
          return typeOf(object) === REACT_PORTAL_TYPE;
        }
        function isProfiler(object) {
          return typeOf(object) === REACT_PROFILER_TYPE;
        }
        function isStrictMode(object) {
          return typeOf(object) === REACT_STRICT_MODE_TYPE;
        }
        function isSuspense(object) {
          return typeOf(object) === REACT_SUSPENSE_TYPE;
        }
        exports.AsyncMode = AsyncMode;
        exports.ConcurrentMode = ConcurrentMode;
        exports.ContextConsumer = ContextConsumer;
        exports.ContextProvider = ContextProvider;
        exports.Element = Element;
        exports.ForwardRef = ForwardRef;
        exports.Fragment = Fragment;
        exports.Lazy = Lazy;
        exports.Memo = Memo;
        exports.Portal = Portal;
        exports.Profiler = Profiler;
        exports.StrictMode = StrictMode;
        exports.Suspense = Suspense;
        exports.isAsyncMode = isAsyncMode;
        exports.isConcurrentMode = isConcurrentMode;
        exports.isContextConsumer = isContextConsumer;
        exports.isContextProvider = isContextProvider;
        exports.isElement = isElement;
        exports.isForwardRef = isForwardRef;
        exports.isFragment = isFragment;
        exports.isLazy = isLazy;
        exports.isMemo = isMemo;
        exports.isPortal = isPortal;
        exports.isProfiler = isProfiler;
        exports.isStrictMode = isStrictMode;
        exports.isSuspense = isSuspense;
        exports.isValidElementType = isValidElementType;
        exports.typeOf = typeOf;
      })();
    }
  });
  reactIs_development.AsyncMode;
  reactIs_development.ConcurrentMode;
  reactIs_development.ContextConsumer;
  reactIs_development.ContextProvider;
  reactIs_development.Element;
  reactIs_development.ForwardRef;
  reactIs_development.Fragment;
  reactIs_development.Lazy;
  reactIs_development.Memo;
  reactIs_development.Portal;
  reactIs_development.Profiler;
  reactIs_development.StrictMode;
  reactIs_development.Suspense;
  reactIs_development.isAsyncMode;
  reactIs_development.isConcurrentMode;
  reactIs_development.isContextConsumer;
  reactIs_development.isContextProvider;
  reactIs_development.isElement;
  reactIs_development.isForwardRef;
  reactIs_development.isFragment;
  reactIs_development.isLazy;
  reactIs_development.isMemo;
  reactIs_development.isPortal;
  reactIs_development.isProfiler;
  reactIs_development.isStrictMode;
  reactIs_development.isSuspense;
  reactIs_development.isValidElementType;
  reactIs_development.typeOf;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_development;
    }
  });
  var reactIs_1 = reactIs.isForwardRef;

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */

  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;
  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }
    return Object(val);
  }
  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      }

      // Detect buggy property enumeration order in older V8 versions.

      // https://bugs.chromium.org/p/v8/issues/detail?id=4118
      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers
      test1[5] = 'de';
      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test2 = {};
      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }
      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });
      if (order2.join('') !== '0123456789') {
        return false;
      }

      // https://bugs.chromium.org/p/v8/issues/detail?id=3056
      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });
      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }
      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }
  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);
      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }
      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);
        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }
    return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret$2 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret$2;

  var has$2 = Function.call.bind(Object.prototype.hasOwnProperty);

  var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;

  var has$1 = has$2;

  var printWarning$1 = function () {};
  {
    var ReactPropTypesSecret = ReactPropTypesSecret$1;
    var loggedTypeFailures = {};
    var has = has$1;
    printWarning$1 = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {/**/}
    };
  }

  /**
   * Assert that the values match with the type specs.
   * Error messages are memorized and will only be shown once.
   *
   * @param {object} typeSpecs Map of name to a ReactPropType
   * @param {object} values Runtime values that need to be type-checked
   * @param {string} location e.g. "prop", "context", "child context"
   * @param {string} componentName Name of the component for error messages.
   * @param {?Function} getStack Returns the component stack.
   * @private
   */
  function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
    {
      for (var typeSpecName in typeSpecs) {
        if (has(typeSpecs, typeSpecName)) {
          var error;
          // Prop type validation may throw. In case they do, we don't want to
          // fail the render phase where it didn't fail before. So we log it.
          // After these have been cleaned up, we'll let them throw.
          try {
            // This is intentionally an invariant that gets caught. It's the same
            // behavior as without this statement except with a better message.
            if (typeof typeSpecs[typeSpecName] !== 'function') {
              var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
              err.name = 'Invariant Violation';
              throw err;
            }
            error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
          } catch (ex) {
            error = ex;
          }
          if (error && !(error instanceof Error)) {
            printWarning$1((componentName || 'React class') + ': type specification of ' + location + ' `' + typeSpecName + '` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a ' + typeof error + '. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).');
          }
          if (error instanceof Error && !(error.message in loggedTypeFailures)) {
            // Only monitor this failure once because there tends to be a lot of the
            // same error.
            loggedTypeFailures[error.message] = true;
            var stack = getStack ? getStack() : '';
            printWarning$1('Failed ' + location + ' type: ' + error.message + (stack != null ? stack : ''));
          }
        }
      }
    }
  }

  /**
   * Resets warning cache when testing.
   *
   * @private
   */
  checkPropTypes$1.resetWarningCache = function () {
    {
      loggedTypeFailures = {};
    }
  };
  var checkPropTypes_1 = checkPropTypes$1;

  var checkPropTypes = checkPropTypes_1;

  var printWarning = function () {};
  {
    printWarning = function (text) {
      var message = 'Warning: ' + text;
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // --- Welcome to debugging React ---
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    };
  }
  function emptyFunctionThatReturnsNull() {
    return null;
  }
  var factoryWithTypeCheckers = function (isValidElement, throwOnDirectAccess) {
    /* global Symbol */
    var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
    var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

    /**
     * Returns the iterator method function contained on the iterable object.
     *
     * Be sure to invoke the function with the iterable as context:
     *
     *     var iteratorFn = getIteratorFn(myIterable);
     *     if (iteratorFn) {
     *       var iterator = iteratorFn.call(myIterable);
     *       ...
     *     }
     *
     * @param {?object} maybeIterable
     * @return {?function}
     */
    function getIteratorFn(maybeIterable) {
      var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
      if (typeof iteratorFn === 'function') {
        return iteratorFn;
      }
    }

    /**
     * Collection of methods that allow declaration and validation of props that are
     * supplied to React components. Example usage:
     *
     *   var Props = require('ReactPropTypes');
     *   var MyArticle = React.createClass({
     *     propTypes: {
     *       // An optional string prop named "description".
     *       description: Props.string,
     *
     *       // A required enum prop named "category".
     *       category: Props.oneOf(['News','Photos']).isRequired,
     *
     *       // A prop named "dialog" that requires an instance of Dialog.
     *       dialog: Props.instanceOf(Dialog).isRequired
     *     },
     *     render: function() { ... }
     *   });
     *
     * A more formal specification of how these methods are used:
     *
     *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
     *   decl := ReactPropTypes.{type}(.isRequired)?
     *
     * Each and every declaration produces a function with the same signature. This
     * allows the creation of custom validation functions. For example:
     *
     *  var MyLink = React.createClass({
     *    propTypes: {
     *      // An optional string or URI prop named "href".
     *      href: function(props, propName, componentName) {
     *        var propValue = props[propName];
     *        if (propValue != null && typeof propValue !== 'string' &&
     *            !(propValue instanceof URI)) {
     *          return new Error(
     *            'Expected a string or an URI for ' + propName + ' in ' +
     *            componentName
     *          );
     *        }
     *      }
     *    },
     *    render: function() {...}
     *  });
     *
     * @internal
     */

    var ANONYMOUS = '<<anonymous>>';

    // Important!
    // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
    var ReactPropTypes = {
      array: createPrimitiveTypeChecker('array'),
      bigint: createPrimitiveTypeChecker('bigint'),
      bool: createPrimitiveTypeChecker('boolean'),
      func: createPrimitiveTypeChecker('function'),
      number: createPrimitiveTypeChecker('number'),
      object: createPrimitiveTypeChecker('object'),
      string: createPrimitiveTypeChecker('string'),
      symbol: createPrimitiveTypeChecker('symbol'),
      any: createAnyTypeChecker(),
      arrayOf: createArrayOfTypeChecker,
      element: createElementTypeChecker(),
      elementType: createElementTypeTypeChecker(),
      instanceOf: createInstanceTypeChecker,
      node: createNodeChecker(),
      objectOf: createObjectOfTypeChecker,
      oneOf: createEnumTypeChecker,
      oneOfType: createUnionTypeChecker,
      shape: createShapeTypeChecker,
      exact: createStrictShapeTypeChecker
    };

    /**
     * inlined Object.is polyfill to avoid requiring consumers ship their own
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    /*eslint-disable no-self-compare*/
    function is(x, y) {
      // SameValue algorithm
      if (x === y) {
        // Steps 1-5, 7-10
        // Steps 6.b-6.e: +0 != -0
        return x !== 0 || 1 / x === 1 / y;
      } else {
        // Step 6.a: NaN == NaN
        return x !== x && y !== y;
      }
    }
    /*eslint-enable no-self-compare*/

    /**
     * We use an Error-like object for backward compatibility as people may call
     * PropTypes directly and inspect their output. However, we don't use real
     * Errors anymore. We don't inspect their stack anyway, and creating them
     * is prohibitively expensive if they are created too often, such as what
     * happens in oneOfType() for any type before the one that matched.
     */
    function PropTypeError(message, data) {
      this.message = message;
      this.data = data && typeof data === 'object' ? data : {};
      this.stack = '';
    }
    // Make `instanceof Error` still work for returned errors.
    PropTypeError.prototype = Error.prototype;
    function createChainableTypeChecker(validate) {
      {
        var manualPropTypeCallCache = {};
        var manualPropTypeWarningCount = 0;
      }
      function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
        componentName = componentName || ANONYMOUS;
        propFullName = propFullName || propName;
        if (secret !== ReactPropTypesSecret$1) {
          if (throwOnDirectAccess) {
            // New behavior only for users of `prop-types` package
            var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
            err.name = 'Invariant Violation';
            throw err;
          } else if (typeof console !== 'undefined') {
            // Old behavior for people using React.PropTypes
            var cacheKey = componentName + ':' + propName;
            if (!manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3) {
              printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
              manualPropTypeCallCache[cacheKey] = true;
              manualPropTypeWarningCount++;
            }
          }
        }
        if (props[propName] == null) {
          if (isRequired) {
            if (props[propName] === null) {
              return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
            }
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
          }
          return null;
        } else {
          return validate(props, propName, componentName, location, propFullName);
        }
      }
      var chainedCheckType = checkType.bind(null, false);
      chainedCheckType.isRequired = checkType.bind(null, true);
      return chainedCheckType;
    }
    function createPrimitiveTypeChecker(expectedType) {
      function validate(props, propName, componentName, location, propFullName, secret) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== expectedType) {
          // `propValue` being instance of, say, date/regexp, pass the 'object'
          // check, but we can offer a more precise error message here rather than
          // 'of type `object`'.
          var preciseType = getPreciseType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
            expectedType: expectedType
          });
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createAnyTypeChecker() {
      return createChainableTypeChecker(emptyFunctionThatReturnsNull);
    }
    function createArrayOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
        }
        var propValue = props[propName];
        if (!Array.isArray(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
        }
        for (var i = 0; i < propValue.length; i++) {
          var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!isValidElement(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createElementTypeTypeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        if (!reactIs.isValidElementType(propValue)) {
          var propType = getPropType(propValue);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createInstanceTypeChecker(expectedClass) {
      function validate(props, propName, componentName, location, propFullName) {
        if (!(props[propName] instanceof expectedClass)) {
          var expectedClassName = expectedClass.name || ANONYMOUS;
          var actualClassName = getClassName(props[propName]);
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createEnumTypeChecker(expectedValues) {
      if (!Array.isArray(expectedValues)) {
        {
          if (arguments.length > 1) {
            printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
          } else {
            printWarning('Invalid argument supplied to oneOf, expected an array.');
          }
        }
        return emptyFunctionThatReturnsNull;
      }
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        for (var i = 0; i < expectedValues.length; i++) {
          if (is(propValue, expectedValues[i])) {
            return null;
          }
        }
        var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
          var type = getPreciseType(value);
          if (type === 'symbol') {
            return String(value);
          }
          return value;
        });
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createObjectOfTypeChecker(typeChecker) {
      function validate(props, propName, componentName, location, propFullName) {
        if (typeof typeChecker !== 'function') {
          return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
        }
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
        }
        for (var key in propValue) {
          if (has$1(propValue, key)) {
            var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
            if (error instanceof Error) {
              return error;
            }
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createUnionTypeChecker(arrayOfTypeCheckers) {
      if (!Array.isArray(arrayOfTypeCheckers)) {
        printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') ;
        return emptyFunctionThatReturnsNull;
      }
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (typeof checker !== 'function') {
          printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
          return emptyFunctionThatReturnsNull;
        }
      }
      function validate(props, propName, componentName, location, propFullName) {
        var expectedTypes = [];
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1);
          if (checkerResult == null) {
            return null;
          }
          if (checkerResult.data && has$1(checkerResult.data, 'expectedType')) {
            expectedTypes.push(checkerResult.data.expectedType);
          }
        }
        var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
      }
      return createChainableTypeChecker(validate);
    }
    function createNodeChecker() {
      function validate(props, propName, componentName, location, propFullName) {
        if (!isNode(props[propName])) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function invalidValidatorError(componentName, location, propFullName, key, type) {
      return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
    }
    function createShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        for (var key in shapeTypes) {
          var checker = shapeTypes[key];
          if (typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function createStrictShapeTypeChecker(shapeTypes) {
      function validate(props, propName, componentName, location, propFullName) {
        var propValue = props[propName];
        var propType = getPropType(propValue);
        if (propType !== 'object') {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
        }
        // We need to check all keys in case some are required but missing from props.
        var allKeys = objectAssign({}, props[propName], shapeTypes);
        for (var key in allKeys) {
          var checker = shapeTypes[key];
          if (has$1(shapeTypes, key) && typeof checker !== 'function') {
            return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
          }
          if (!checker) {
            return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
          }
          var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error) {
            return error;
          }
        }
        return null;
      }
      return createChainableTypeChecker(validate);
    }
    function isNode(propValue) {
      switch (typeof propValue) {
        case 'number':
        case 'string':
        case 'undefined':
          return true;
        case 'boolean':
          return !propValue;
        case 'object':
          if (Array.isArray(propValue)) {
            return propValue.every(isNode);
          }
          if (propValue === null || isValidElement(propValue)) {
            return true;
          }
          var iteratorFn = getIteratorFn(propValue);
          if (iteratorFn) {
            var iterator = iteratorFn.call(propValue);
            var step;
            if (iteratorFn !== propValue.entries) {
              while (!(step = iterator.next()).done) {
                if (!isNode(step.value)) {
                  return false;
                }
              }
            } else {
              // Iterator will provide entry [k,v] tuples rather than values.
              while (!(step = iterator.next()).done) {
                var entry = step.value;
                if (entry) {
                  if (!isNode(entry[1])) {
                    return false;
                  }
                }
              }
            }
          } else {
            return false;
          }
          return true;
        default:
          return false;
      }
    }
    function isSymbol(propType, propValue) {
      // Native Symbol.
      if (propType === 'symbol') {
        return true;
      }

      // falsy value can't be a Symbol
      if (!propValue) {
        return false;
      }

      // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
      if (propValue['@@toStringTag'] === 'Symbol') {
        return true;
      }

      // Fallback for non-spec compliant Symbols which are polyfilled.
      if (typeof Symbol === 'function' && propValue instanceof Symbol) {
        return true;
      }
      return false;
    }

    // Equivalent of `typeof` but with special handling for array and regexp.
    function getPropType(propValue) {
      var propType = typeof propValue;
      if (Array.isArray(propValue)) {
        return 'array';
      }
      if (propValue instanceof RegExp) {
        // Old webkits (at least until Android 4.0) return 'function' rather than
        // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
        // passes PropTypes.object.
        return 'object';
      }
      if (isSymbol(propType, propValue)) {
        return 'symbol';
      }
      return propType;
    }

    // This handles more types than `getPropType`. Only used for error messages.
    // See `createPrimitiveTypeChecker`.
    function getPreciseType(propValue) {
      if (typeof propValue === 'undefined' || propValue === null) {
        return '' + propValue;
      }
      var propType = getPropType(propValue);
      if (propType === 'object') {
        if (propValue instanceof Date) {
          return 'date';
        } else if (propValue instanceof RegExp) {
          return 'regexp';
        }
      }
      return propType;
    }

    // Returns a string that is postfixed to a warning about an invalid type.
    // For example, "undefined" or "of type array"
    function getPostfixForTypeWarning(value) {
      var type = getPreciseType(value);
      switch (type) {
        case 'array':
        case 'object':
          return 'an ' + type;
        case 'boolean':
        case 'date':
        case 'regexp':
          return 'a ' + type;
        default:
          return type;
      }
    }

    // Returns class name of the object, if any.
    function getClassName(propValue) {
      if (!propValue.constructor || !propValue.constructor.name) {
        return ANONYMOUS;
      }
      return propValue.constructor.name;
    }
    ReactPropTypes.checkPropTypes = checkPropTypes;
    ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var require$$1 = factoryWithTypeCheckers;

  var propTypes$2 = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */

    {
      var ReactIs = reactIs;

      // By explicitly using `prop-types` you are opting into new development behavior.
      // http://fb.me/prop-types-in-prod
      var throwOnDirectAccess = true;
      module.exports = require$$1(ReactIs.isElement, throwOnDirectAccess);
    }
  });
  var PropTypes = propTypes$2;

  function t(t) {
    return "object" == typeof t && null != t && 1 === t.nodeType;
  }
  function e(t, e) {
    return (!e || "hidden" !== t) && "visible" !== t && "clip" !== t;
  }
  function n(t, n) {
    if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
      var r = getComputedStyle(t, null);
      return e(r.overflowY, n) || e(r.overflowX, n) || function (t) {
        var e = function (t) {
          if (!t.ownerDocument || !t.ownerDocument.defaultView) return null;
          try {
            return t.ownerDocument.defaultView.frameElement;
          } catch (t) {
            return null;
          }
        }(t);
        return !!e && (e.clientHeight < t.scrollHeight || e.clientWidth < t.scrollWidth);
      }(t);
    }
    return !1;
  }
  function r(t, e, n, r, i, o, l, d) {
    return o < t && l > e || o > t && l < e ? 0 : o <= t && d <= n || l >= e && d >= n ? o - t - r : l > e && d < n || o < t && d > n ? l - e + i : 0;
  }
  var i = function (e, i) {
    var o = window,
      l = i.scrollMode,
      d = i.block,
      f = i.inline,
      h = i.boundary,
      u = i.skipOverflowHiddenElements,
      s = "function" == typeof h ? h : function (t) {
        return t !== h;
      };
    if (!t(e)) throw new TypeError("Invalid target");
    for (var a, c, g = document.scrollingElement || document.documentElement, p = [], m = e; t(m) && s(m);) {
      if ((m = null == (c = (a = m).parentElement) ? a.getRootNode().host || null : c) === g) {
        p.push(m);
        break;
      }
      null != m && m === document.body && n(m) && !n(document.documentElement) || null != m && n(m, u) && p.push(m);
    }
    for (var w = o.visualViewport ? o.visualViewport.width : innerWidth, v = o.visualViewport ? o.visualViewport.height : innerHeight, W = window.scrollX || pageXOffset, H = window.scrollY || pageYOffset, b = e.getBoundingClientRect(), y = b.height, E = b.width, M = b.top, V = b.right, x = b.bottom, I = b.left, C = "start" === d || "nearest" === d ? M : "end" === d ? x : M + y / 2, R = "center" === f ? I + E / 2 : "end" === f ? V : I, T = [], k = 0; k < p.length; k++) {
      var B = p[k],
        D = B.getBoundingClientRect(),
        O = D.height,
        X = D.width,
        Y = D.top,
        L = D.right,
        S = D.bottom,
        j = D.left;
      if ("if-needed" === l && M >= 0 && I >= 0 && x <= v && V <= w && M >= Y && x <= S && I >= j && V <= L) return T;
      var N = getComputedStyle(B),
        q = parseInt(N.borderLeftWidth, 10),
        z = parseInt(N.borderTopWidth, 10),
        A = parseInt(N.borderRightWidth, 10),
        F = parseInt(N.borderBottomWidth, 10),
        G = 0,
        J = 0,
        K = "offsetWidth" in B ? B.offsetWidth - B.clientWidth - q - A : 0,
        P = "offsetHeight" in B ? B.offsetHeight - B.clientHeight - z - F : 0,
        Q = "offsetWidth" in B ? 0 === B.offsetWidth ? 0 : X / B.offsetWidth : 0,
        U = "offsetHeight" in B ? 0 === B.offsetHeight ? 0 : O / B.offsetHeight : 0;
      if (g === B) G = "start" === d ? C : "end" === d ? C - v : "nearest" === d ? r(H, H + v, v, z, F, H + C, H + C + y, y) : C - v / 2, J = "start" === f ? R : "center" === f ? R - w / 2 : "end" === f ? R - w : r(W, W + w, w, q, A, W + R, W + R + E, E), G = Math.max(0, G + H), J = Math.max(0, J + W);else {
        G = "start" === d ? C - Y - z : "end" === d ? C - S + F + P : "nearest" === d ? r(Y, S, O, z, F + P, C, C + y, y) : C - (Y + O / 2) + P / 2, J = "start" === f ? R - j - q : "center" === f ? R - (j + X / 2) + K / 2 : "end" === f ? R - L + A + K : r(j, L, X, q, A + K, R, R + E, E);
        var Z = B.scrollLeft,
          $ = B.scrollTop;
        C += $ - (G = Math.max(0, Math.min($ + G / U, B.scrollHeight - O / U + P))), R += Z - (J = Math.max(0, Math.min(Z + J / Q, B.scrollWidth - X / Q + K)));
      }
      T.push({
        el: B,
        top: G,
        left: J
      });
    }
    return T;
  };

  var idCounter = 0;

  /**
   * Accepts a parameter and returns it if it's a function
   * or a noop function if it's not. This allows us to
   * accept a callback, but not worry about it if it's not
   * passed.
   * @param {Function} cb the callback
   * @return {Function} a function
   */
  function cbToCb(cb) {
    return typeof cb === 'function' ? cb : noop;
  }
  function noop() {}

  /**
   * Scroll node into view if necessary
   * @param {HTMLElement} node the element that should scroll into view
   * @param {HTMLElement} menuNode the menu element of the component
   */
  function scrollIntoView(node, menuNode) {
    if (!node) {
      return;
    }
    var actions = i(node, {
      boundary: menuNode,
      block: 'nearest',
      scrollMode: 'if-needed'
    });
    actions.forEach(function (_ref) {
      var el = _ref.el,
        top = _ref.top,
        left = _ref.left;
      el.scrollTop = top;
      el.scrollLeft = left;
    });
  }

  /**
   * @param {HTMLElement} parent the parent node
   * @param {HTMLElement} child the child node
   * @return {Boolean} whether the parent is the child or the child is in the parent
   */
  function isOrContainsNode(parent, child) {
    return parent === child || parent.contains && parent.contains(child);
  }

  /**
   * Simple debounce implementation. Will call the given
   * function once after the time given has passed since
   * it was last called.
   * @param {Function} fn the function to call after the time
   * @param {Number} time the time to wait
   * @return {Function} the debounced function
   */
  function debounce(fn, time) {
    var timeoutId;
    function cancel() {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }
    function wrapper() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      cancel();
      timeoutId = setTimeout(function () {
        timeoutId = null;
        fn.apply(void 0, args);
      }, time);
    }
    wrapper.cancel = cancel;
    return wrapper;
  }

  /**
   * This is intended to be used to compose event handlers.
   * They are executed in order until one of them sets
   * `event.preventDownshiftDefault = true`.
   * @param {...Function} fns the event handler functions
   * @return {Function} the event handler to add to an element
   */
  function callAllEventHandlers() {
    for (var _len2 = arguments.length, fns = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      fns[_key2] = arguments[_key2];
    }
    return function (event) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }
      return fns.some(function (fn) {
        if (fn) {
          fn.apply(void 0, [event].concat(args));
        }
        return event.preventDownshiftDefault || event.hasOwnProperty('nativeEvent') && event.nativeEvent.preventDownshiftDefault;
      });
    };
  }
  function handleRefs() {
    for (var _len4 = arguments.length, refs = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      refs[_key4] = arguments[_key4];
    }
    return function (node) {
      refs.forEach(function (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
      });
    };
  }

  /**
   * This generates a unique ID for an instance of Downshift
   * @return {String} the unique ID
   */
  function generateId() {
    return String(idCounter++);
  }

  /**
   * Resets idCounter to 0. Used for SSR.
   */
  function resetIdCounter() {
    idCounter = 0;
  }

  /**
   * Default implementation for status message. Only added when menu is open.
   * Will specift if there are results in the list, and if so, how many,
   * and what keys are relevant.
   *
   * @param {Object} param the downshift state and other relevant properties
   * @return {String} the a11y status message
   */
  function getA11yStatusMessage$1(_ref2) {
    var isOpen = _ref2.isOpen,
      resultCount = _ref2.resultCount,
      previousResultCount = _ref2.previousResultCount;
    if (!isOpen) {
      return '';
    }
    if (!resultCount) {
      return 'No results are available.';
    }
    if (resultCount !== previousResultCount) {
      return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter key to select.";
    }
    return '';
  }

  /**
   * Takes an argument and if it's an array, returns the first item in the array
   * otherwise returns the argument
   * @param {*} arg the maybe-array
   * @param {*} defaultValue the value if arg is falsey not defined
   * @return {*} the arg or it's first item
   */
  function unwrapArray(arg, defaultValue) {
    arg = Array.isArray(arg) ? /* istanbul ignore next (preact) */arg[0] : arg;
    if (!arg && defaultValue) {
      return defaultValue;
    } else {
      return arg;
    }
  }

  /**
   * @param {Object} element (P)react element
   * @return {Boolean} whether it's a DOM element
   */
  function isDOMElement(element) {
    // then we assume this is react
    return typeof element.type === 'string';
  }

  /**
   * @param {Object} element (P)react element
   * @return {Object} the props
   */
  function getElementProps(element) {
    return element.props;
  }

  /**
   * Throws a helpful error message for required properties. Useful
   * to be used as a default in destructuring or object params.
   * @param {String} fnName the function name
   * @param {String} propName the prop name
   */
  function requiredProp(fnName, propName) {
    // eslint-disable-next-line no-console
    console.error("The property \"" + propName + "\" is required in \"" + fnName + "\"");
  }
  var stateKeys = ['highlightedIndex', 'inputValue', 'isOpen', 'selectedItem', 'type'];
  /**
   * @param {Object} state the state object
   * @return {Object} state that is relevant to downshift
   */
  function pickState(state) {
    if (state === void 0) {
      state = {};
    }
    var result = {};
    stateKeys.forEach(function (k) {
      if (state.hasOwnProperty(k)) {
        result[k] = state[k];
      }
    });
    return result;
  }

  /**
   * This will perform a shallow merge of the given state object
   * with the state coming from props
   * (for the controlled component scenario)
   * This is used in state updater functions so they're referencing
   * the right state regardless of where it comes from.
   *
   * @param {Object} state The state of the component/hook.
   * @param {Object} props The props that may contain controlled values.
   * @returns {Object} The merged controlled state.
   */
  function getState(state, props) {
    return Object.keys(state).reduce(function (prevState, key) {
      prevState[key] = isControlledProp(props, key) ? props[key] : state[key];
      return prevState;
    }, {});
  }

  /**
   * This determines whether a prop is a "controlled prop" meaning it is
   * state which is controlled by the outside of this component rather
   * than within this component.
   *
   * @param {Object} props The props that may contain controlled values.
   * @param {String} key the key to check
   * @return {Boolean} whether it is a controlled controlled prop
   */
  function isControlledProp(props, key) {
    return props[key] !== undefined;
  }

  /**
   * Normalizes the 'key' property of a KeyboardEvent in IE/Edge
   * @param {Object} event a keyboardEvent object
   * @return {String} keyboard key
   */
  function normalizeArrowKey(event) {
    var key = event.key,
      keyCode = event.keyCode;
    /* istanbul ignore next (ie) */
    if (keyCode >= 37 && keyCode <= 40 && key.indexOf('Arrow') !== 0) {
      return "Arrow" + key;
    }
    return key;
  }

  /**
   * Simple check if the value passed is object literal
   * @param {*} obj any things
   * @return {Boolean} whether it's object literal
   */
  function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
  }

  /**
   * Returns the new index in the list, in a circular way. If next value is out of bonds from the total,
   * it will wrap to either 0 or itemCount - 1.
   *
   * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
   * @param {number} baseIndex The initial position to move from.
   * @param {number} itemCount The total number of items.
   * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
   * @param {boolean} circular Specify if navigation is circular. Default is true.
   * @returns {number} The new index after the move.
   */
  function getNextWrappingIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
    if (circular === void 0) {
      circular = true;
    }
    if (itemCount === 0) {
      return -1;
    }
    var itemsLastIndex = itemCount - 1;
    if (typeof baseIndex !== 'number' || baseIndex < 0 || baseIndex >= itemCount) {
      baseIndex = moveAmount > 0 ? -1 : itemsLastIndex + 1;
    }
    var newIndex = baseIndex + moveAmount;
    if (newIndex < 0) {
      newIndex = circular ? itemsLastIndex : 0;
    } else if (newIndex > itemsLastIndex) {
      newIndex = circular ? 0 : itemsLastIndex;
    }
    var nonDisabledNewIndex = getNextNonDisabledIndex(moveAmount, newIndex, itemCount, getItemNodeFromIndex, circular);
    return nonDisabledNewIndex === -1 ? baseIndex : nonDisabledNewIndex;
  }

  /**
   * Returns the next index in the list of an item that is not disabled.
   *
   * @param {number} moveAmount Number of positions to move. Negative to move backwards, positive forwards.
   * @param {number} baseIndex The initial position to move from.
   * @param {number} itemCount The total number of items.
   * @param {Function} getItemNodeFromIndex Used to check if item is disabled.
   * @param {boolean} circular Specify if navigation is circular. Default is true.
   * @returns {number} The new index. Returns baseIndex if item is not disabled. Returns next non-disabled item otherwise. If no non-disabled found it will return -1.
   */
  function getNextNonDisabledIndex(moveAmount, baseIndex, itemCount, getItemNodeFromIndex, circular) {
    var currentElementNode = getItemNodeFromIndex(baseIndex);
    if (!currentElementNode || !currentElementNode.hasAttribute('disabled')) {
      return baseIndex;
    }
    if (moveAmount > 0) {
      for (var index = baseIndex + 1; index < itemCount; index++) {
        if (!getItemNodeFromIndex(index).hasAttribute('disabled')) {
          return index;
        }
      }
    } else {
      for (var _index = baseIndex - 1; _index >= 0; _index--) {
        if (!getItemNodeFromIndex(_index).hasAttribute('disabled')) {
          return _index;
        }
      }
    }
    if (circular) {
      return moveAmount > 0 ? getNextNonDisabledIndex(1, 0, itemCount, getItemNodeFromIndex, false) : getNextNonDisabledIndex(-1, itemCount - 1, itemCount, getItemNodeFromIndex, false);
    }
    return -1;
  }

  /**
   * Checks if event target is within the downshift elements.
   *
   * @param {EventTarget} target Target to check.
   * @param {HTMLElement[]} downshiftElements The elements that form downshift (list, toggle button etc).
   * @param {Document} document The document.
   * @param {boolean} checkActiveElement Whether to also check activeElement.
   *
   * @returns {boolean} Whether or not the target is within downshift elements.
   */
  function targetWithinDownshift(target, downshiftElements, document, checkActiveElement) {
    if (checkActiveElement === void 0) {
      checkActiveElement = true;
    }
    return downshiftElements.some(function (contextNode) {
      return contextNode && (isOrContainsNode(contextNode, target) || checkActiveElement && isOrContainsNode(contextNode, document.activeElement));
    });
  }
  function validateControlledUnchanged(state, prevProps, nextProps) {
    var warningDescription = "This prop should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled Downshift element for the lifetime of the component. More info: https://github.com/downshift-js/downshift#control-props";
    Object.keys(state).forEach(function (propKey) {
      if (prevProps[propKey] !== undefined && nextProps[propKey] === undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the controlled prop \"" + propKey + "\" to be uncontrolled. " + warningDescription);
      } else if (prevProps[propKey] === undefined && nextProps[propKey] !== undefined) {
        // eslint-disable-next-line no-console
        console.error("downshift: A component has changed the uncontrolled prop \"" + propKey + "\" to be controlled. " + warningDescription);
      }
    });
  }

  var cleanupStatus = debounce(function () {
    getStatusDiv().textContent = '';
  }, 500);

  /**
   * @param {String} status the status message
   * @param {Object} documentProp document passed by the user.
   */
  function setStatus(status, documentProp) {
    var div = getStatusDiv(documentProp);
    if (!status) {
      return;
    }
    div.textContent = status;
    cleanupStatus();
  }

  /**
   * Get the status node or create it if it does not already exist.
   * @param {Object} documentProp document passed by the user.
   * @return {HTMLElement} the status node.
   */
  function getStatusDiv(documentProp) {
    if (documentProp === void 0) {
      documentProp = document;
    }
    var statusDiv = documentProp.getElementById('a11y-status-message');
    if (statusDiv) {
      return statusDiv;
    }
    statusDiv = documentProp.createElement('div');
    statusDiv.setAttribute('id', 'a11y-status-message');
    statusDiv.setAttribute('role', 'status');
    statusDiv.setAttribute('aria-live', 'polite');
    statusDiv.setAttribute('aria-relevant', 'additions text');
    Object.assign(statusDiv.style, {
      border: '0',
      clip: 'rect(0 0 0 0)',
      height: '1px',
      margin: '-1px',
      overflow: 'hidden',
      padding: '0',
      position: 'absolute',
      width: '1px'
    });
    documentProp.body.appendChild(statusDiv);
    return statusDiv;
  }

  var unknown = '__autocomplete_unknown__';
  var mouseUp = '__autocomplete_mouseup__';
  var itemMouseEnter = '__autocomplete_item_mouseenter__';
  var keyDownArrowUp = '__autocomplete_keydown_arrow_up__';
  var keyDownArrowDown = '__autocomplete_keydown_arrow_down__';
  var keyDownEscape = '__autocomplete_keydown_escape__';
  var keyDownEnter = '__autocomplete_keydown_enter__';
  var keyDownHome = '__autocomplete_keydown_home__';
  var keyDownEnd = '__autocomplete_keydown_end__';
  var clickItem = '__autocomplete_click_item__';
  var blurInput = '__autocomplete_blur_input__';
  var changeInput = '__autocomplete_change_input__';
  var keyDownSpaceButton = '__autocomplete_keydown_space_button__';
  var clickButton = '__autocomplete_click_button__';
  var blurButton = '__autocomplete_blur_button__';
  var controlledPropUpdatedSelectedItem = '__autocomplete_controlled_prop_updated_selected_item__';
  var touchEnd = '__autocomplete_touchend__';

  var stateChangeTypes$3 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    unknown: unknown,
    mouseUp: mouseUp,
    itemMouseEnter: itemMouseEnter,
    keyDownArrowUp: keyDownArrowUp,
    keyDownArrowDown: keyDownArrowDown,
    keyDownEscape: keyDownEscape,
    keyDownEnter: keyDownEnter,
    keyDownHome: keyDownHome,
    keyDownEnd: keyDownEnd,
    clickItem: clickItem,
    blurInput: blurInput,
    changeInput: changeInput,
    keyDownSpaceButton: keyDownSpaceButton,
    clickButton: clickButton,
    blurButton: blurButton,
    controlledPropUpdatedSelectedItem: controlledPropUpdatedSelectedItem,
    touchEnd: touchEnd
  });

  var _excluded$4 = ["refKey", "ref"],
    _excluded2$3 = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"],
    _excluded3$2 = ["onKeyDown", "onBlur", "onChange", "onInput", "onChangeText"],
    _excluded4$1 = ["refKey", "ref"],
    _excluded5$1 = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"];
  var Downshift = /*#__PURE__*/function () {
    var Downshift = /*#__PURE__*/function (_Component) {
      _inheritsLoose(Downshift, _Component);
      function Downshift(_props) {
        var _this = _Component.call(this, _props) || this;
        // fancy destructuring + defaults + aliases
        // this basically says each value of state should either be set to
        // the initial value or the default value if the initial value is not provided
        _this.id = _this.props.id || "downshift-" + generateId();
        _this.menuId = _this.props.menuId || _this.id + "-menu";
        _this.labelId = _this.props.labelId || _this.id + "-label";
        _this.inputId = _this.props.inputId || _this.id + "-input";
        _this.getItemId = _this.props.getItemId || function (index) {
          return _this.id + "-item-" + index;
        };
        _this.input = null;
        _this.items = [];
        // itemCount can be changed asynchronously
        // from within downshift (so it can't come from a prop)
        // this is why we store it as an instance and use
        // getItemCount rather than just use items.length
        // (to support windowing + async)
        _this.itemCount = null;
        _this.previousResultCount = 0;
        _this.timeoutIds = [];
        /**
         * @param {Function} fn the function to call after the time
         * @param {Number} time the time to wait
         */
        _this.internalSetTimeout = function (fn, time) {
          var id = setTimeout(function () {
            _this.timeoutIds = _this.timeoutIds.filter(function (i) {
              return i !== id;
            });
            fn();
          }, time);
          _this.timeoutIds.push(id);
        };
        _this.setItemCount = function (count) {
          _this.itemCount = count;
        };
        _this.unsetItemCount = function () {
          _this.itemCount = null;
        };
        _this.setHighlightedIndex = function (highlightedIndex, otherStateToSet) {
          if (highlightedIndex === void 0) {
            highlightedIndex = _this.props.defaultHighlightedIndex;
          }
          if (otherStateToSet === void 0) {
            otherStateToSet = {};
          }
          otherStateToSet = pickState(otherStateToSet);
          _this.internalSetState(_extends({
            highlightedIndex: highlightedIndex
          }, otherStateToSet));
        };
        _this.clearSelection = function (cb) {
          _this.internalSetState({
            selectedItem: null,
            inputValue: '',
            highlightedIndex: _this.props.defaultHighlightedIndex,
            isOpen: _this.props.defaultIsOpen
          }, cb);
        };
        _this.selectItem = function (item, otherStateToSet, cb) {
          otherStateToSet = pickState(otherStateToSet);
          _this.internalSetState(_extends({
            isOpen: _this.props.defaultIsOpen,
            highlightedIndex: _this.props.defaultHighlightedIndex,
            selectedItem: item,
            inputValue: _this.props.itemToString(item)
          }, otherStateToSet), cb);
        };
        _this.selectItemAtIndex = function (itemIndex, otherStateToSet, cb) {
          var item = _this.items[itemIndex];
          if (item == null) {
            return;
          }
          _this.selectItem(item, otherStateToSet, cb);
        };
        _this.selectHighlightedItem = function (otherStateToSet, cb) {
          return _this.selectItemAtIndex(_this.getState().highlightedIndex, otherStateToSet, cb);
        };
        // any piece of our state can live in two places:
        // 1. Uncontrolled: it's internal (this.state)
        //    We will call this.setState to update that state
        // 2. Controlled: it's external (this.props)
        //    We will call this.props.onStateChange to update that state
        //
        // In addition, we'll call this.props.onChange if the
        // selectedItem is changed.
        _this.internalSetState = function (stateToSet, cb) {
          var isItemSelected, onChangeArg;
          var onStateChangeArg = {};
          var isStateToSetFunction = typeof stateToSet === 'function';

          // we want to call `onInputValueChange` before the `setState` call
          // so someone controlling the `inputValue` state gets notified of
          // the input change as soon as possible. This avoids issues with
          // preserving the cursor position.
          // See https://github.com/downshift-js/downshift/issues/217 for more info.
          if (!isStateToSetFunction && stateToSet.hasOwnProperty('inputValue')) {
            _this.props.onInputValueChange(stateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), stateToSet));
          }
          return _this.setState(function (state) {
            state = _this.getState(state);
            var newStateToSet = isStateToSetFunction ? stateToSet(state) : stateToSet;

            // Your own function that could modify the state that will be set.
            newStateToSet = _this.props.stateReducer(state, newStateToSet);

            // checks if an item is selected, regardless of if it's different from
            // what was selected before
            // used to determine if onSelect and onChange callbacks should be called
            isItemSelected = newStateToSet.hasOwnProperty('selectedItem');
            // this keeps track of the object we want to call with setState
            var nextState = {};
            // we need to call on change if the outside world is controlling any of our state
            // and we're trying to update that state. OR if the selection has changed and we're
            // trying to update the selection
            if (isItemSelected && newStateToSet.selectedItem !== state.selectedItem) {
              onChangeArg = newStateToSet.selectedItem;
            }
            newStateToSet.type = newStateToSet.type || unknown;
            Object.keys(newStateToSet).forEach(function (key) {
              // onStateChangeArg should only have the state that is
              // actually changing
              if (state[key] !== newStateToSet[key]) {
                onStateChangeArg[key] = newStateToSet[key];
              }
              // the type is useful for the onStateChangeArg
              // but we don't actually want to set it in internal state.
              // this is an undocumented feature for now... Not all internalSetState
              // calls support it and I'm not certain we want them to yet.
              // But it enables users controlling the isOpen state to know when
              // the isOpen state changes due to mouseup events which is quite handy.
              if (key === 'type') {
                return;
              }
              newStateToSet[key];
              // if it's coming from props, then we don't care to set it internally
              if (!isControlledProp(_this.props, key)) {
                nextState[key] = newStateToSet[key];
              }
            });

            // if stateToSet is a function, then we weren't able to call onInputValueChange
            // earlier, so we'll call it now that we know what the inputValue state will be.
            if (isStateToSetFunction && newStateToSet.hasOwnProperty('inputValue')) {
              _this.props.onInputValueChange(newStateToSet.inputValue, _extends({}, _this.getStateAndHelpers(), newStateToSet));
            }
            return nextState;
          }, function () {
            // call the provided callback if it's a function
            cbToCb(cb)();

            // only call the onStateChange and onChange callbacks if
            // we have relevant information to pass them.
            var hasMoreStateThanType = Object.keys(onStateChangeArg).length > 1;
            if (hasMoreStateThanType) {
              _this.props.onStateChange(onStateChangeArg, _this.getStateAndHelpers());
            }
            if (isItemSelected) {
              _this.props.onSelect(stateToSet.selectedItem, _this.getStateAndHelpers());
            }
            if (onChangeArg !== undefined) {
              _this.props.onChange(onChangeArg, _this.getStateAndHelpers());
            }
            // this is currently undocumented and therefore subject to change
            // We'll try to not break it, but just be warned.
            _this.props.onUserAction(onStateChangeArg, _this.getStateAndHelpers());
          });
        };
        //////////////////////////// ROOT
        _this.rootRef = function (node) {
          return _this._rootNode = node;
        };
        _this.getRootProps = function (_temp, _temp2) {
          var _extends2;
          var _ref = _temp === void 0 ? {} : _temp,
            _ref$refKey = _ref.refKey,
            refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
            ref = _ref.ref,
            rest = _objectWithoutPropertiesLoose(_ref, _excluded$4);
          var _ref2 = _temp2 === void 0 ? {} : _temp2,
            _ref2$suppressRefErro = _ref2.suppressRefError,
            suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
          // this is used in the render to know whether the user has called getRootProps.
          // It uses that to know whether to apply the props automatically
          _this.getRootProps.called = true;
          _this.getRootProps.refKey = refKey;
          _this.getRootProps.suppressRefError = suppressRefError;
          var _this$getState = _this.getState(),
            isOpen = _this$getState.isOpen;
          return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, _this.rootRef), _extends2.role = 'combobox', _extends2['aria-expanded'] = isOpen, _extends2['aria-haspopup'] = 'listbox', _extends2['aria-owns'] = isOpen ? _this.menuId : null, _extends2['aria-labelledby'] = _this.labelId, _extends2), rest);
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\ ROOT
        _this.keyDownHandlers = {
          ArrowDown: function ArrowDown(event) {
            var _this2 = this;
            event.preventDefault();
            if (this.getState().isOpen) {
              var amount = event.shiftKey ? 5 : 1;
              this.moveHighlightedIndex(amount, {
                type: keyDownArrowDown
              });
            } else {
              this.internalSetState({
                isOpen: true,
                type: keyDownArrowDown
              }, function () {
                var itemCount = _this2.getItemCount();
                if (itemCount > 0) {
                  var _this2$getState = _this2.getState(),
                    highlightedIndex = _this2$getState.highlightedIndex;
                  var nextHighlightedIndex = getNextWrappingIndex(1, highlightedIndex, itemCount, function (index) {
                    return _this2.getItemNodeFromIndex(index);
                  });
                  _this2.setHighlightedIndex(nextHighlightedIndex, {
                    type: keyDownArrowDown
                  });
                }
              });
            }
          },
          ArrowUp: function ArrowUp(event) {
            var _this3 = this;
            event.preventDefault();
            if (this.getState().isOpen) {
              var amount = event.shiftKey ? -5 : -1;
              this.moveHighlightedIndex(amount, {
                type: keyDownArrowUp
              });
            } else {
              this.internalSetState({
                isOpen: true,
                type: keyDownArrowUp
              }, function () {
                var itemCount = _this3.getItemCount();
                if (itemCount > 0) {
                  var _this3$getState = _this3.getState(),
                    highlightedIndex = _this3$getState.highlightedIndex;
                  var nextHighlightedIndex = getNextWrappingIndex(-1, highlightedIndex, itemCount, function (index) {
                    return _this3.getItemNodeFromIndex(index);
                  });
                  _this3.setHighlightedIndex(nextHighlightedIndex, {
                    type: keyDownArrowUp
                  });
                }
              });
            }
          },
          Enter: function Enter(event) {
            if (event.which === 229) {
              return;
            }
            var _this$getState2 = this.getState(),
              isOpen = _this$getState2.isOpen,
              highlightedIndex = _this$getState2.highlightedIndex;
            if (isOpen && highlightedIndex != null) {
              event.preventDefault();
              var item = this.items[highlightedIndex];
              var itemNode = this.getItemNodeFromIndex(highlightedIndex);
              if (item == null || itemNode && itemNode.hasAttribute('disabled')) {
                return;
              }
              this.selectHighlightedItem({
                type: keyDownEnter
              });
            }
          },
          Escape: function Escape(event) {
            event.preventDefault();
            this.reset({
              type: keyDownEscape,
              selectedItem: null,
              inputValue: ''
            });
          }
        };
        //////////////////////////// BUTTON
        _this.buttonKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
          ' ': function _(event) {
            event.preventDefault();
            this.toggleMenu({
              type: keyDownSpaceButton
            });
          }
        });
        _this.inputKeyDownHandlers = _extends({}, _this.keyDownHandlers, {
          Home: function Home(event) {
            var _this4 = this;
            event.preventDefault();
            var itemCount = this.getItemCount();
            var _this$getState3 = this.getState(),
              isOpen = _this$getState3.isOpen;
            if (itemCount <= 0 || !isOpen) {
              return;
            }

            // get next non-disabled starting downwards from 0 if that's disabled.
            var newHighlightedIndex = getNextNonDisabledIndex(1, 0, itemCount, function (index) {
              return _this4.getItemNodeFromIndex(index);
            }, false);
            this.setHighlightedIndex(newHighlightedIndex, {
              type: keyDownHome
            });
          },
          End: function End(event) {
            var _this5 = this;
            event.preventDefault();
            var itemCount = this.getItemCount();
            var _this$getState4 = this.getState(),
              isOpen = _this$getState4.isOpen;
            if (itemCount <= 0 || !isOpen) {
              return;
            }

            // get next non-disabled starting upwards from last index if that's disabled.
            var newHighlightedIndex = getNextNonDisabledIndex(-1, itemCount - 1, itemCount, function (index) {
              return _this5.getItemNodeFromIndex(index);
            }, false);
            this.setHighlightedIndex(newHighlightedIndex, {
              type: keyDownEnd
            });
          }
        });
        _this.getToggleButtonProps = function (_temp3) {
          var _ref3 = _temp3 === void 0 ? {} : _temp3,
            onClick = _ref3.onClick;
            _ref3.onPress;
            var onKeyDown = _ref3.onKeyDown,
            onKeyUp = _ref3.onKeyUp,
            onBlur = _ref3.onBlur,
            rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$3);
          var _this$getState5 = _this.getState(),
            isOpen = _this$getState5.isOpen;
          var enabledEventHandlers = {
            onClick: callAllEventHandlers(onClick, _this.buttonHandleClick),
            onKeyDown: callAllEventHandlers(onKeyDown, _this.buttonHandleKeyDown),
            onKeyUp: callAllEventHandlers(onKeyUp, _this.buttonHandleKeyUp),
            onBlur: callAllEventHandlers(onBlur, _this.buttonHandleBlur)
          };
          var eventHandlers = rest.disabled ? {} : enabledEventHandlers;
          return _extends({
            type: 'button',
            role: 'button',
            'aria-label': isOpen ? 'close menu' : 'open menu',
            'aria-haspopup': true,
            'data-toggle': true
          }, eventHandlers, rest);
        };
        _this.buttonHandleKeyUp = function (event) {
          // Prevent click event from emitting in Firefox
          event.preventDefault();
        };
        _this.buttonHandleKeyDown = function (event) {
          var key = normalizeArrowKey(event);
          if (_this.buttonKeyDownHandlers[key]) {
            _this.buttonKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
          }
        };
        _this.buttonHandleClick = function (event) {
          event.preventDefault();
          // handle odd case for Safari and Firefox which
          // don't give the button the focus properly.
          /* istanbul ignore if (can't reasonably test this) */
          if (_this.props.environment.document.activeElement === _this.props.environment.document.body) {
            event.target.focus();
          }
          // to simplify testing components that use downshift, we'll not wrap this in a setTimeout
          // if the NODE_ENV is test. With the proper build system, this should be dead code eliminated
          // when building for production and should therefore have no impact on production code.

          // Ensure that toggle of menu occurs after the potential blur event in iOS
          _this.internalSetTimeout(function () {
            return _this.toggleMenu({
              type: clickButton
            });
          });
        };
        _this.buttonHandleBlur = function (event) {
          var blurTarget = event.target; // Save blur target for comparison with activeElement later
          // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not body element
          _this.internalSetTimeout(function () {
            if (!_this.isMouseDown && (_this.props.environment.document.activeElement == null || _this.props.environment.document.activeElement.id !== _this.inputId) && _this.props.environment.document.activeElement !== blurTarget // Do nothing if we refocus the same element again (to solve issue in Safari on iOS)
            ) {
              _this.reset({
                type: blurButton
              });
            }
          });
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ BUTTON
        /////////////////////////////// LABEL
        _this.getLabelProps = function (props) {
          return _extends({
            htmlFor: _this.inputId,
            id: _this.labelId
          }, props);
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ LABEL
        /////////////////////////////// INPUT
        _this.getInputProps = function (_temp4) {
          var _ref4 = _temp4 === void 0 ? {} : _temp4,
            onKeyDown = _ref4.onKeyDown,
            onBlur = _ref4.onBlur,
            onChange = _ref4.onChange,
            onInput = _ref4.onInput;
            _ref4.onChangeText;
            var rest = _objectWithoutPropertiesLoose(_ref4, _excluded3$2);
          var onChangeKey;
          var eventHandlers = {};

          /* istanbul ignore next (preact) */

          onChangeKey = 'onChange';
          var _this$getState6 = _this.getState(),
            inputValue = _this$getState6.inputValue,
            isOpen = _this$getState6.isOpen,
            highlightedIndex = _this$getState6.highlightedIndex;
          if (!rest.disabled) {
            var _eventHandlers;
            eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, _this.inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, _this.inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, _this.inputHandleBlur), _eventHandlers);
          }

          /* istanbul ignore if (react-native) */

          return _extends({
            'aria-autocomplete': 'list',
            'aria-activedescendant': isOpen && typeof highlightedIndex === 'number' && highlightedIndex >= 0 ? _this.getItemId(highlightedIndex) : null,
            'aria-controls': isOpen ? _this.menuId : null,
            'aria-labelledby': _this.labelId,
            // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
            // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
            autoComplete: 'off',
            value: inputValue,
            id: _this.inputId
          }, eventHandlers, rest);
        };
        _this.inputHandleKeyDown = function (event) {
          var key = normalizeArrowKey(event);
          if (key && _this.inputKeyDownHandlers[key]) {
            _this.inputKeyDownHandlers[key].call(_assertThisInitialized(_this), event);
          }
        };
        _this.inputHandleChange = function (event) {
          _this.internalSetState({
            type: changeInput,
            isOpen: true,
            inputValue: event.target.value,
            highlightedIndex: _this.props.defaultHighlightedIndex
          });
        };
        _this.inputHandleBlur = function () {
          // Need setTimeout, so that when the user presses Tab, the activeElement is the next focused element, not the body element
          _this.internalSetTimeout(function () {
            var downshiftButtonIsActive = _this.props.environment.document && !!_this.props.environment.document.activeElement && !!_this.props.environment.document.activeElement.dataset && _this.props.environment.document.activeElement.dataset.toggle && _this._rootNode && _this._rootNode.contains(_this.props.environment.document.activeElement);
            if (!_this.isMouseDown && !downshiftButtonIsActive) {
              _this.reset({
                type: blurInput
              });
            }
          });
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ INPUT
        /////////////////////////////// MENU
        _this.menuRef = function (node) {
          _this._menuNode = node;
        };
        _this.getMenuProps = function (_temp5, _temp6) {
          var _extends3;
          var _ref5 = _temp5 === void 0 ? {} : _temp5,
            _ref5$refKey = _ref5.refKey,
            refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
            ref = _ref5.ref,
            props = _objectWithoutPropertiesLoose(_ref5, _excluded4$1);
          var _ref6 = _temp6 === void 0 ? {} : _temp6,
            _ref6$suppressRefErro = _ref6.suppressRefError,
            suppressRefError = _ref6$suppressRefErro === void 0 ? false : _ref6$suppressRefErro;
          _this.getMenuProps.called = true;
          _this.getMenuProps.refKey = refKey;
          _this.getMenuProps.suppressRefError = suppressRefError;
          return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, _this.menuRef), _extends3.role = 'listbox', _extends3['aria-labelledby'] = props && props['aria-label'] ? null : _this.labelId, _extends3.id = _this.menuId, _extends3), props);
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ MENU
        /////////////////////////////// ITEM
        _this.getItemProps = function (_temp7) {
          var _enabledEventHandlers;
          var _ref7 = _temp7 === void 0 ? {} : _temp7,
            onMouseMove = _ref7.onMouseMove,
            onMouseDown = _ref7.onMouseDown,
            onClick = _ref7.onClick;
            _ref7.onPress;
            var index = _ref7.index,
            _ref7$item = _ref7.item,
            item = _ref7$item === void 0 ? requiredProp('getItemProps', 'item') : _ref7$item,
            rest = _objectWithoutPropertiesLoose(_ref7, _excluded5$1);
          if (index === undefined) {
            _this.items.push(item);
            index = _this.items.indexOf(item);
          } else {
            _this.items[index] = item;
          }
          var onSelectKey = 'onClick';
          var customClickHandler = onClick;
          var enabledEventHandlers = (_enabledEventHandlers = {
            // onMouseMove is used over onMouseEnter here. onMouseMove
            // is only triggered on actual mouse movement while onMouseEnter
            // can fire on DOM changes, interrupting keyboard navigation
            onMouseMove: callAllEventHandlers(onMouseMove, function () {
              if (index === _this.getState().highlightedIndex) {
                return;
              }
              _this.setHighlightedIndex(index, {
                type: itemMouseEnter
              });

              // We never want to manually scroll when changing state based
              // on `onMouseMove` because we will be moving the element out
              // from under the user which is currently scrolling/moving the
              // cursor
              _this.avoidScrolling = true;
              _this.internalSetTimeout(function () {
                return _this.avoidScrolling = false;
              }, 250);
            }),
            onMouseDown: callAllEventHandlers(onMouseDown, function (event) {
              // This prevents the activeElement from being changed
              // to the item so it can remain with the current activeElement
              // which is a more common use case.
              event.preventDefault();
            })
          }, _enabledEventHandlers[onSelectKey] = callAllEventHandlers(customClickHandler, function () {
            _this.selectItemAtIndex(index, {
              type: clickItem
            });
          }), _enabledEventHandlers);

          // Passing down the onMouseDown handler to prevent redirect
          // of the activeElement if clicking on disabled items
          var eventHandlers = rest.disabled ? {
            onMouseDown: enabledEventHandlers.onMouseDown
          } : enabledEventHandlers;
          return _extends({
            id: _this.getItemId(index),
            role: 'option',
            'aria-selected': _this.getState().highlightedIndex === index
          }, eventHandlers, rest);
        };
        //\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ ITEM
        _this.clearItems = function () {
          _this.items = [];
        };
        _this.reset = function (otherStateToSet, cb) {
          if (otherStateToSet === void 0) {
            otherStateToSet = {};
          }
          otherStateToSet = pickState(otherStateToSet);
          _this.internalSetState(function (_ref8) {
            var selectedItem = _ref8.selectedItem;
            return _extends({
              isOpen: _this.props.defaultIsOpen,
              highlightedIndex: _this.props.defaultHighlightedIndex,
              inputValue: _this.props.itemToString(selectedItem)
            }, otherStateToSet);
          }, cb);
        };
        _this.toggleMenu = function (otherStateToSet, cb) {
          if (otherStateToSet === void 0) {
            otherStateToSet = {};
          }
          otherStateToSet = pickState(otherStateToSet);
          _this.internalSetState(function (_ref9) {
            var isOpen = _ref9.isOpen;
            return _extends({
              isOpen: !isOpen
            }, isOpen && {
              highlightedIndex: _this.props.defaultHighlightedIndex
            }, otherStateToSet);
          }, function () {
            var _this$getState7 = _this.getState(),
              isOpen = _this$getState7.isOpen,
              highlightedIndex = _this$getState7.highlightedIndex;
            if (isOpen) {
              if (_this.getItemCount() > 0 && typeof highlightedIndex === 'number') {
                _this.setHighlightedIndex(highlightedIndex, otherStateToSet);
              }
            }
            cbToCb(cb)();
          });
        };
        _this.openMenu = function (cb) {
          _this.internalSetState({
            isOpen: true
          }, cb);
        };
        _this.closeMenu = function (cb) {
          _this.internalSetState({
            isOpen: false
          }, cb);
        };
        _this.updateStatus = debounce(function () {
          var state = _this.getState();
          var item = _this.items[state.highlightedIndex];
          var resultCount = _this.getItemCount();
          var status = _this.props.getA11yStatusMessage(_extends({
            itemToString: _this.props.itemToString,
            previousResultCount: _this.previousResultCount,
            resultCount: resultCount,
            highlightedItem: item
          }, state));
          _this.previousResultCount = resultCount;
          setStatus(status, _this.props.environment.document);
        }, 200);
        var _this$props = _this.props,
          defaultHighlightedIndex = _this$props.defaultHighlightedIndex,
          _this$props$initialHi = _this$props.initialHighlightedIndex,
          _highlightedIndex = _this$props$initialHi === void 0 ? defaultHighlightedIndex : _this$props$initialHi,
          defaultIsOpen = _this$props.defaultIsOpen,
          _this$props$initialIs = _this$props.initialIsOpen,
          _isOpen = _this$props$initialIs === void 0 ? defaultIsOpen : _this$props$initialIs,
          _this$props$initialIn = _this$props.initialInputValue,
          _inputValue = _this$props$initialIn === void 0 ? '' : _this$props$initialIn,
          _this$props$initialSe = _this$props.initialSelectedItem,
          _selectedItem = _this$props$initialSe === void 0 ? null : _this$props$initialSe;
        var _state = _this.getState({
          highlightedIndex: _highlightedIndex,
          isOpen: _isOpen,
          inputValue: _inputValue,
          selectedItem: _selectedItem
        });
        if (_state.selectedItem != null && _this.props.initialInputValue === undefined) {
          _state.inputValue = _this.props.itemToString(_state.selectedItem);
        }
        _this.state = _state;
        return _this;
      }
      var _proto = Downshift.prototype;
      /**
       * Clear all running timeouts
       */
      _proto.internalClearTimeouts = function internalClearTimeouts() {
        this.timeoutIds.forEach(function (id) {
          clearTimeout(id);
        });
        this.timeoutIds = [];
      }

      /**
       * Gets the state based on internal state or props
       * If a state value is passed via props, then that
       * is the value given, otherwise it's retrieved from
       * stateToMerge
       *
       * @param {Object} stateToMerge defaults to this.state
       * @return {Object} the state
       */;
      _proto.getState = function getState$1(stateToMerge) {
        if (stateToMerge === void 0) {
          stateToMerge = this.state;
        }
        return getState(stateToMerge, this.props);
      };
      _proto.getItemCount = function getItemCount() {
        // things read better this way. They're in priority order:
        // 1. `this.itemCount`
        // 2. `this.props.itemCount`
        // 3. `this.items.length`
        var itemCount = this.items.length;
        if (this.itemCount != null) {
          itemCount = this.itemCount;
        } else if (this.props.itemCount !== undefined) {
          itemCount = this.props.itemCount;
        }
        return itemCount;
      };
      _proto.getItemNodeFromIndex = function getItemNodeFromIndex(index) {
        return this.props.environment.document.getElementById(this.getItemId(index));
      };
      _proto.scrollHighlightedItemIntoView = function scrollHighlightedItemIntoView() {
        /* istanbul ignore else (react-native) */

        var node = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(node, this._menuNode);
      };
      _proto.moveHighlightedIndex = function moveHighlightedIndex(amount, otherStateToSet) {
        var _this6 = this;
        var itemCount = this.getItemCount();
        var _this$getState8 = this.getState(),
          highlightedIndex = _this$getState8.highlightedIndex;
        if (itemCount > 0) {
          var nextHighlightedIndex = getNextWrappingIndex(amount, highlightedIndex, itemCount, function (index) {
            return _this6.getItemNodeFromIndex(index);
          });
          this.setHighlightedIndex(nextHighlightedIndex, otherStateToSet);
        }
      };
      _proto.getStateAndHelpers = function getStateAndHelpers() {
        var _this$getState9 = this.getState(),
          highlightedIndex = _this$getState9.highlightedIndex,
          inputValue = _this$getState9.inputValue,
          selectedItem = _this$getState9.selectedItem,
          isOpen = _this$getState9.isOpen;
        var itemToString = this.props.itemToString;
        var id = this.id;
        var getRootProps = this.getRootProps,
          getToggleButtonProps = this.getToggleButtonProps,
          getLabelProps = this.getLabelProps,
          getMenuProps = this.getMenuProps,
          getInputProps = this.getInputProps,
          getItemProps = this.getItemProps,
          openMenu = this.openMenu,
          closeMenu = this.closeMenu,
          toggleMenu = this.toggleMenu,
          selectItem = this.selectItem,
          selectItemAtIndex = this.selectItemAtIndex,
          selectHighlightedItem = this.selectHighlightedItem,
          setHighlightedIndex = this.setHighlightedIndex,
          clearSelection = this.clearSelection,
          clearItems = this.clearItems,
          reset = this.reset,
          setItemCount = this.setItemCount,
          unsetItemCount = this.unsetItemCount,
          setState = this.internalSetState;
        return {
          // prop getters
          getRootProps: getRootProps,
          getToggleButtonProps: getToggleButtonProps,
          getLabelProps: getLabelProps,
          getMenuProps: getMenuProps,
          getInputProps: getInputProps,
          getItemProps: getItemProps,
          // actions
          reset: reset,
          openMenu: openMenu,
          closeMenu: closeMenu,
          toggleMenu: toggleMenu,
          selectItem: selectItem,
          selectItemAtIndex: selectItemAtIndex,
          selectHighlightedItem: selectHighlightedItem,
          setHighlightedIndex: setHighlightedIndex,
          clearSelection: clearSelection,
          clearItems: clearItems,
          setItemCount: setItemCount,
          unsetItemCount: unsetItemCount,
          setState: setState,
          // props
          itemToString: itemToString,
          // derived
          id: id,
          // state
          highlightedIndex: highlightedIndex,
          inputValue: inputValue,
          isOpen: isOpen,
          selectedItem: selectedItem
        };
      };
      _proto.componentDidMount = function componentDidMount() {
        var _this7 = this;
        /* istanbul ignore if (react-native) */
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }

        /* istanbul ignore if (react-native) */

        // this.isMouseDown helps us track whether the mouse is currently held down.
        // This is useful when the user clicks on an item in the list, but holds the mouse
        // down long enough for the list to disappear (because the blur event fires on the input)
        // this.isMouseDown is used in the blur handler on the input to determine whether the blur event should
        // trigger hiding the menu.
        var onMouseDown = function () {
          _this7.isMouseDown = true;
        };
        var onMouseUp = function (event) {
          _this7.isMouseDown = false;
          // if the target element or the activeElement is within a downshift node
          // then we don't want to reset downshift
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document);
          if (!contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: mouseUp
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };
        // Touching an element in iOS gives focus and hover states, but touching out of
        // the element will remove hover, and persist the focus state, resulting in the
        // blur event not being triggered.
        // this.isTouchMove helps us track whether the user is tapping or swiping on a touch screen.
        // If the user taps outside of Downshift, the component should be reset,
        // but not if the user is swiping
        var onTouchStart = function () {
          _this7.isTouchMove = false;
        };
        var onTouchMove = function () {
          _this7.isTouchMove = true;
        };
        var onTouchEnd = function (event) {
          var contextWithinDownshift = targetWithinDownshift(event.target, [_this7._rootNode, _this7._menuNode], _this7.props.environment.document, false);
          if (!_this7.isTouchMove && !contextWithinDownshift && _this7.getState().isOpen) {
            _this7.reset({
              type: touchEnd
            }, function () {
              return _this7.props.onOuterClick(_this7.getStateAndHelpers());
            });
          }
        };
        var environment = this.props.environment;
        environment.addEventListener('mousedown', onMouseDown);
        environment.addEventListener('mouseup', onMouseUp);
        environment.addEventListener('touchstart', onTouchStart);
        environment.addEventListener('touchmove', onTouchMove);
        environment.addEventListener('touchend', onTouchEnd);
        this.cleanup = function () {
          _this7.internalClearTimeouts();
          _this7.updateStatus.cancel();
          environment.removeEventListener('mousedown', onMouseDown);
          environment.removeEventListener('mouseup', onMouseUp);
          environment.removeEventListener('touchstart', onTouchStart);
          environment.removeEventListener('touchmove', onTouchMove);
          environment.removeEventListener('touchend', onTouchEnd);
        };
      };
      _proto.shouldScroll = function shouldScroll(prevState, prevProps) {
        var _ref10 = this.props.highlightedIndex === undefined ? this.getState() : this.props,
          currentHighlightedIndex = _ref10.highlightedIndex;
        var _ref11 = prevProps.highlightedIndex === undefined ? prevState : prevProps,
          prevHighlightedIndex = _ref11.highlightedIndex;
        var scrollWhenOpen = currentHighlightedIndex && this.getState().isOpen && !prevState.isOpen;
        return scrollWhenOpen || currentHighlightedIndex !== prevHighlightedIndex;
      };
      _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
        validateControlledUnchanged(this.state, prevProps, this.props);
        /* istanbul ignore if (react-native) */
        if (this.getMenuProps.called && !this.getMenuProps.suppressRefError) {
          validateGetMenuPropsCalledCorrectly(this._menuNode, this.getMenuProps);
        }
        if (isControlledProp(this.props, 'selectedItem') && this.props.selectedItemChanged(prevProps.selectedItem, this.props.selectedItem)) {
          this.internalSetState({
            type: controlledPropUpdatedSelectedItem,
            inputValue: this.props.itemToString(this.props.selectedItem)
          });
        }
        if (!this.avoidScrolling && this.shouldScroll(prevState, prevProps)) {
          this.scrollHighlightedItemIntoView();
        }

        /* istanbul ignore else (react-native) */

        this.updateStatus();
      };
      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cleanup(); // avoids memory leak
      };
      _proto.render = function render() {
        var children = unwrapArray(this.props.children, noop);
        // because the items are rerendered every time we call the children
        // we clear this out each render and it will be populated again as
        // getItemProps is called.
        this.clearItems();
        // we reset this so we know whether the user calls getRootProps during
        // this render. If they do then we don't need to do anything,
        // if they don't then we need to clone the element they return and
        // apply the props for them.
        this.getRootProps.called = false;
        this.getRootProps.refKey = undefined;
        this.getRootProps.suppressRefError = undefined;
        // we do something similar for getMenuProps
        this.getMenuProps.called = false;
        this.getMenuProps.refKey = undefined;
        this.getMenuProps.suppressRefError = undefined;
        // we do something similar for getLabelProps
        this.getLabelProps.called = false;
        // and something similar for getInputProps
        this.getInputProps.called = false;
        var element = unwrapArray(children(this.getStateAndHelpers()));
        if (!element) {
          return null;
        }
        if (this.getRootProps.called || this.props.suppressRefError) {
          if (!this.getRootProps.suppressRefError && !this.props.suppressRefError) {
            validateGetRootPropsCalledCorrectly(element, this.getRootProps);
          }
          return element;
        } else if (isDOMElement(element)) {
          // they didn't apply the root props, but we can clone
          // this and apply the props ourselves
          return /*#__PURE__*/react.cloneElement(element, this.getRootProps(getElementProps(element)));
        }

        /* istanbul ignore else */

        // they didn't apply the root props, but they need to
        // otherwise we can't query around the autocomplete
        throw new Error('downshift: If you return a non-DOM element, you must apply the getRootProps function');

        /* istanbul ignore next */
      };
      return Downshift;
    }(react.Component);
    Downshift.defaultProps = {
      defaultHighlightedIndex: null,
      defaultIsOpen: false,
      getA11yStatusMessage: getA11yStatusMessage$1,
      itemToString: function itemToString(i) {
        if (i == null) {
          return '';
        }
        if (isPlainObject(i) && !i.hasOwnProperty('toString')) {
          // eslint-disable-next-line no-console
          console.warn('downshift: An object was passed to the default implementation of `itemToString`. You should probably provide your own `itemToString` implementation. Please refer to the `itemToString` API documentation.', 'The object that was passed:', i);
        }
        return String(i);
      },
      onStateChange: noop,
      onInputValueChange: noop,
      onUserAction: noop,
      onChange: noop,
      onSelect: noop,
      onOuterClick: noop,
      selectedItemChanged: function selectedItemChanged(prevItem, item) {
        return prevItem !== item;
      },
      environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */ ? {} : window,
      stateReducer: function stateReducer(state, stateToSet) {
        return stateToSet;
      },
      suppressRefError: false,
      scrollIntoView: scrollIntoView
    };
    Downshift.stateChangeTypes = stateChangeTypes$3;
    return Downshift;
  }();
  Downshift.propTypes = {
    children: PropTypes.func,
    defaultHighlightedIndex: PropTypes.number,
    defaultIsOpen: PropTypes.bool,
    initialHighlightedIndex: PropTypes.number,
    initialSelectedItem: PropTypes.any,
    initialInputValue: PropTypes.string,
    initialIsOpen: PropTypes.bool,
    getA11yStatusMessage: PropTypes.func,
    itemToString: PropTypes.func,
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    onStateChange: PropTypes.func,
    onInputValueChange: PropTypes.func,
    onUserAction: PropTypes.func,
    onOuterClick: PropTypes.func,
    selectedItemChanged: PropTypes.func,
    stateReducer: PropTypes.func,
    itemCount: PropTypes.number,
    id: PropTypes.string,
    environment: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func,
      document: PropTypes.shape({
        getElementById: PropTypes.func,
        activeElement: PropTypes.any,
        body: PropTypes.any
      })
    }),
    suppressRefError: PropTypes.bool,
    scrollIntoView: PropTypes.func,
    // things we keep in state for uncontrolled components
    // but can accept as props for controlled components
    /* eslint-disable react/no-unused-prop-types */
    selectedItem: PropTypes.any,
    isOpen: PropTypes.bool,
    inputValue: PropTypes.string,
    highlightedIndex: PropTypes.number,
    labelId: PropTypes.string,
    inputId: PropTypes.string,
    menuId: PropTypes.string,
    getItemId: PropTypes.func
    /* eslint-enable react/no-unused-prop-types */
  };
  var Downshift$1 = Downshift;
  function validateGetMenuPropsCalledCorrectly(node, _ref12) {
    var refKey = _ref12.refKey;
    if (!node) {
      // eslint-disable-next-line no-console
      console.error("downshift: The ref prop \"" + refKey + "\" from getMenuProps was not applied correctly on your menu element.");
    }
  }
  function validateGetRootPropsCalledCorrectly(element, _ref13) {
    var refKey = _ref13.refKey;
    var refKeySpecified = refKey !== 'ref';
    var isComposite = !isDOMElement(element);
    if (isComposite && !refKeySpecified && !reactIs_1(element)) {
      // eslint-disable-next-line no-console
      console.error('downshift: You returned a non-DOM element. You must specify a refKey in getRootProps');
    } else if (!isComposite && refKeySpecified) {
      // eslint-disable-next-line no-console
      console.error("downshift: You returned a DOM element. You should not specify a refKey in getRootProps. You specified \"" + refKey + "\"");
    }
    if (!reactIs_1(element) && !getElementProps(element)[refKey]) {
      // eslint-disable-next-line no-console
      console.error("downshift: You must apply the ref prop \"" + refKey + "\" from getRootProps onto your root element.");
    }
  }

  var dropdownDefaultStateValues = {
    highlightedIndex: -1,
    isOpen: false,
    selectedItem: null,
    inputValue: ''
  };
  function callOnChangeProps(action, state, newState) {
    var props = action.props,
      type = action.type;
    var changes = {};
    Object.keys(state).forEach(function (key) {
      invokeOnChangeHandler(key, props, state, newState);
      if (newState[key] !== state[key]) {
        changes[key] = newState[key];
      }
    });
    if (props.onStateChange && Object.keys(changes).length) {
      props.onStateChange(_extends({
        type: type
      }, changes));
    }
  }
  function invokeOnChangeHandler(key, props, state, newState) {
    var handler = "on" + capitalizeString(key) + "Change";
    if (props[handler] && newState[key] !== undefined && newState[key] !== state[key]) {
      props[handler](newState);
    }
  }

  /**
   * Default state reducer that returns the changes.
   *
   * @param {Object} s state.
   * @param {Object} a action with changes.
   * @returns {Object} changes.
   */
  function stateReducer(s, a) {
    return a.changes;
  }

  /**
   * Returns a message to be added to aria-live region when item is selected.
   *
   * @param {Object} selectionParameters Parameters required to build the message.
   * @returns {string} The a11y message.
   */
  function getA11ySelectionMessage(selectionParameters) {
    var selectedItem = selectionParameters.selectedItem,
      itemToStringLocal = selectionParameters.itemToString;
    return selectedItem ? itemToStringLocal(selectedItem) + " has been selected." : '';
  }

  /**
   * Debounced call for updating the a11y message.
   */
  var updateA11yStatus = debounce(function (getA11yMessage, document) {
    setStatus(getA11yMessage(), document);
  }, 200);
  function getElementIds$1(_ref) {
    var id = _ref.id,
      labelId = _ref.labelId,
      menuId = _ref.menuId,
      getItemId = _ref.getItemId,
      toggleButtonId = _ref.toggleButtonId;
    var uniqueId = id === undefined ? "downshift-" + generateId() : id;
    return {
      labelId: labelId || uniqueId + "-label",
      menuId: menuId || uniqueId + "-menu",
      getItemId: getItemId || function (index) {
        return uniqueId + "-item-" + index;
      },
      toggleButtonId: toggleButtonId || uniqueId + "-toggle-button"
    };
  }
  function getItemIndex(index, item, items) {
    if (index !== undefined) {
      return index;
    }
    if (items.length === 0) {
      return -1;
    }
    return items.indexOf(item);
  }
  function itemToString(item) {
    return item ? String(item) : '';
  }
  function getPropTypesValidator(caller, propTypes) {
    // istanbul ignore next
    return function (options) {
      if (options === void 0) {
        options = {};
      }
      Object.keys(propTypes).forEach(function (key) {
        PropTypes.checkPropTypes(propTypes, options, key, caller.name);
      });
    };
  }
  function isAcceptedCharacterKey(key) {
    return /^\S{1}$/.test(key);
  }
  function capitalizeString(string) {
    return "" + string.slice(0, 1).toUpperCase() + string.slice(1);
  }
  function useLatestRef(val) {
    var ref = react.useRef(val);
    // technically this is not "concurrent mode safe" because we're manipulating
    // the value during render (so it's not idempotent). However, the places this
    // hook is used is to support memoizing callbacks which will be called
    // *during* render, so we need the latest values *during* render.
    // If not for this, then we'd probably want to use useLayoutEffect instead.
    ref.current = val;
    return ref;
  }

  /**
   * Computes the controlled state using a the previous state, props,
   * two reducers, one from downshift and an optional one from the user.
   * Also calls the onChange handlers for state values that have changed.
   *
   * @param {Function} reducer Reducer function from downshift.
   * @param {Object} initialState Initial state of the hook.
   * @param {Object} props The hook props.
   * @param {Function} isStateEqual Function that checks if a previous state is equal to the next.
   * @returns {Array} An array with the state and an action dispatcher.
   */
  function useEnhancedReducer(reducer, initialState, props, isStateEqual) {
    var prevStateRef = react.useRef();
    var actionRef = react.useRef();
    var enhancedReducer = react.useCallback(function (state, action) {
      actionRef.current = action;
      state = getState(state, action.props);
      var changes = reducer(state, action);
      var newState = action.props.stateReducer(state, _extends({}, action, {
        changes: changes
      }));
      return newState;
    }, [reducer]);
    var _useReducer = react.useReducer(enhancedReducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];
    var propsRef = useLatestRef(props);
    var dispatchWithProps = react.useCallback(function (action) {
      return dispatch(_extends({
        props: propsRef.current
      }, action));
    }, [propsRef]);
    var action = actionRef.current;
    react.useEffect(function () {
      var shouldCallOnChangeProps = action && prevStateRef.current && !isStateEqual(prevStateRef.current, state);
      if (shouldCallOnChangeProps) {
        callOnChangeProps(action, getState(prevStateRef.current, action.props), state);
      }
      prevStateRef.current = state;
    }, [state, action, isStateEqual]);
    return [state, dispatchWithProps];
  }

  /**
   * Wraps the useEnhancedReducer and applies the controlled prop values before
   * returning the new state.
   *
   * @param {Function} reducer Reducer function from downshift.
   * @param {Object} initialState Initial state of the hook.
   * @param {Object} props The hook props.
   * @param {Function} isStateEqual Function that checks if a previous state is equal to the next.
   * @returns {Array} An array with the state and an action dispatcher.
   */
  function useControlledReducer$1(reducer, initialState, props, isStateEqual) {
    var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props, isStateEqual),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1];
    return [getState(state, props), dispatch];
  }
  var defaultProps$3 = {
    itemToString: itemToString,
    stateReducer: stateReducer,
    getA11ySelectionMessage: getA11ySelectionMessage,
    scrollIntoView: scrollIntoView,
    circularNavigation: false,
    environment: typeof window === 'undefined' /* istanbul ignore next (ssr) */ ? {} : window
  };
  function getDefaultValue$1(props, propKey, defaultStateValues) {
    if (defaultStateValues === void 0) {
      defaultStateValues = dropdownDefaultStateValues;
    }
    var defaultPropKey = "default" + capitalizeString(propKey);
    if (defaultPropKey in props) {
      return props[defaultPropKey];
    }
    return defaultStateValues[propKey];
  }
  function getInitialValue$1(props, propKey, defaultStateValues) {
    if (defaultStateValues === void 0) {
      defaultStateValues = dropdownDefaultStateValues;
    }
    if (propKey in props) {
      return props[propKey];
    }
    var initialPropKey = "initial" + capitalizeString(propKey);
    if (initialPropKey in props) {
      return props[initialPropKey];
    }
    return getDefaultValue$1(props, propKey, defaultStateValues);
  }
  function getInitialState$2(props) {
    var selectedItem = getInitialValue$1(props, 'selectedItem');
    var isOpen = getInitialValue$1(props, 'isOpen');
    var highlightedIndex = getInitialValue$1(props, 'highlightedIndex');
    var inputValue = getInitialValue$1(props, 'inputValue');
    return {
      highlightedIndex: highlightedIndex < 0 && selectedItem ? props.items.indexOf(selectedItem) : highlightedIndex,
      isOpen: isOpen,
      selectedItem: selectedItem,
      inputValue: inputValue
    };
  }
  function getHighlightedIndexOnOpen(props, state, offset, getItemNodeFromIndex) {
    var items = props.items,
      initialHighlightedIndex = props.initialHighlightedIndex,
      defaultHighlightedIndex = props.defaultHighlightedIndex;
    var selectedItem = state.selectedItem,
      highlightedIndex = state.highlightedIndex;
    if (items.length === 0) {
      return -1;
    }

    // initialHighlightedIndex will give value to highlightedIndex on initial state only.
    if (initialHighlightedIndex !== undefined && highlightedIndex === initialHighlightedIndex) {
      return initialHighlightedIndex;
    }
    if (defaultHighlightedIndex !== undefined) {
      return defaultHighlightedIndex;
    }
    if (selectedItem) {
      if (offset === 0) {
        return items.indexOf(selectedItem);
      }
      return getNextWrappingIndex(offset, items.indexOf(selectedItem), items.length, getItemNodeFromIndex, false);
    }
    if (offset === 0) {
      return -1;
    }
    return offset < 0 ? items.length - 1 : 0;
  }

  /**
   * Reuse the movement tracking of mouse and touch events.
   *
   * @param {boolean} isOpen Whether the dropdown is open or not.
   * @param {Array<Object>} downshiftElementRefs Downshift element refs to track movement (toggleButton, menu etc.)
   * @param {Object} environment Environment where component/hook exists.
   * @param {Function} handleBlur Handler on blur from mouse or touch.
   * @returns {Object} Ref containing whether mouseDown or touchMove event is happening
   */
  function useMouseAndTouchTracker(isOpen, downshiftElementRefs, environment, handleBlur) {
    var mouseAndTouchTrackersRef = react.useRef({
      isMouseDown: false,
      isTouchMove: false
    });
    react.useEffect(function () {
      // The same strategy for checking if a click occurred inside or outside downsift
      // as in downshift.js.
      var onMouseDown = function () {
        mouseAndTouchTrackersRef.current.isMouseDown = true;
      };
      var onMouseUp = function (event) {
        mouseAndTouchTrackersRef.current.isMouseDown = false;
        if (isOpen && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
          return ref.current;
        }), environment.document)) {
          handleBlur();
        }
      };
      var onTouchStart = function () {
        mouseAndTouchTrackersRef.current.isTouchMove = false;
      };
      var onTouchMove = function () {
        mouseAndTouchTrackersRef.current.isTouchMove = true;
      };
      var onTouchEnd = function (event) {
        if (isOpen && !mouseAndTouchTrackersRef.current.isTouchMove && !targetWithinDownshift(event.target, downshiftElementRefs.map(function (ref) {
          return ref.current;
        }), environment.document, false)) {
          handleBlur();
        }
      };
      environment.addEventListener('mousedown', onMouseDown);
      environment.addEventListener('mouseup', onMouseUp);
      environment.addEventListener('touchstart', onTouchStart);
      environment.addEventListener('touchmove', onTouchMove);
      environment.addEventListener('touchend', onTouchEnd);
      return function () {
        environment.removeEventListener('mousedown', onMouseDown);
        environment.removeEventListener('mouseup', onMouseUp);
        environment.removeEventListener('touchstart', onTouchStart);
        environment.removeEventListener('touchmove', onTouchMove);
        environment.removeEventListener('touchend', onTouchEnd);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, environment]);
    return mouseAndTouchTrackersRef;
  }

  /**
   * Custom hook that checks if getter props are called correctly.
   *
   * @param  {...any} propKeys Getter prop names to be handled.
   * @returns {Function} Setter function called inside getter props to set call information.
   */
  function useGetterPropsCalledChecker() {
    for (var _len = arguments.length, propKeys = new Array(_len), _key = 0; _key < _len; _key++) {
      propKeys[_key] = arguments[_key];
    }
    var getterPropsCalledRef = react.useRef(propKeys.reduce(function (acc, propKey) {
      acc[propKey] = {};
      return acc;
    }, {}));
    Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
      getterPropsCalledRef.current[propKey] = null;
    });
    react.useEffect(function () {
      Object.keys(getterPropsCalledRef.current).forEach(function (propKey) {
        if (!getterPropsCalledRef.current[propKey]) {
          // eslint-disable-next-line no-console
          console.error("downshift: You forgot to call the " + propKey + " getter function on your component / element.");
          return;
        }
        var _getterPropsCalledRef = getterPropsCalledRef.current[propKey],
          suppressRefError = _getterPropsCalledRef.suppressRefError,
          refKey = _getterPropsCalledRef.refKey,
          elementRef = _getterPropsCalledRef.elementRef;
        if ((!elementRef || !elementRef.current) && !suppressRefError) {
          // eslint-disable-next-line no-console
          console.error("downshift: The ref prop \"" + refKey + "\" from " + propKey + " was not applied correctly on your element.");
        }
      });
    });
    var setGetterPropCallInfo = react.useCallback(function (propKey, suppressRefError, refKey, elementRef) {
      getterPropsCalledRef.current[propKey] = {
        suppressRefError: suppressRefError,
        refKey: refKey,
        elementRef: elementRef
      };
    }, []);
    return setGetterPropCallInfo;
  }

  /**
   * Check if a state is equal for dropdowns, by comparing isOpen, inputValue, highlightedIndex and selected item.
   * Used by useSelect and useCombobox.
   *
   * @param {Object} prevState
   * @param {Object} newState
   * @returns {boolean} Wheather the states are deeply equal.
   */
  function isDropdownsStateEqual(prevState, newState) {
    return prevState.isOpen === newState.isOpen && prevState.inputValue === newState.inputValue && prevState.highlightedIndex === newState.highlightedIndex && prevState.selectedItem === newState.selectedItem;
  }

  function getItemIndexByCharacterKey(keysSoFar, highlightedIndex, items, itemToStringParam, getItemNodeFromIndex) {
    var lowerCasedItemStrings = items.map(function (item) {
      return itemToStringParam(item).toLowerCase();
    });
    var lowerCasedKeysSoFar = keysSoFar.toLowerCase();
    var isValid = function (itemString, index) {
      var element = getItemNodeFromIndex(index);
      return itemString.startsWith(lowerCasedKeysSoFar) && !(element && element.hasAttribute('disabled'));
    };
    for (var index = highlightedIndex + 1; index < lowerCasedItemStrings.length; index++) {
      var itemString = lowerCasedItemStrings[index];
      if (isValid(itemString, index)) {
        return index;
      }
    }
    for (var _index = 0; _index < highlightedIndex; _index++) {
      var _itemString = lowerCasedItemStrings[_index];
      if (isValid(_itemString, _index)) {
        return _index;
      }
    }
    return highlightedIndex;
  }
  var propTypes$1 = {
    items: PropTypes.array.isRequired,
    itemToString: PropTypes.func,
    getA11yStatusMessage: PropTypes.func,
    getA11ySelectionMessage: PropTypes.func,
    circularNavigation: PropTypes.bool,
    highlightedIndex: PropTypes.number,
    defaultHighlightedIndex: PropTypes.number,
    initialHighlightedIndex: PropTypes.number,
    isOpen: PropTypes.bool,
    defaultIsOpen: PropTypes.bool,
    initialIsOpen: PropTypes.bool,
    selectedItem: PropTypes.any,
    initialSelectedItem: PropTypes.any,
    defaultSelectedItem: PropTypes.any,
    id: PropTypes.string,
    labelId: PropTypes.string,
    menuId: PropTypes.string,
    getItemId: PropTypes.func,
    toggleButtonId: PropTypes.string,
    stateReducer: PropTypes.func,
    onSelectedItemChange: PropTypes.func,
    onHighlightedIndexChange: PropTypes.func,
    onStateChange: PropTypes.func,
    onIsOpenChange: PropTypes.func,
    environment: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func,
      document: PropTypes.shape({
        getElementById: PropTypes.func,
        activeElement: PropTypes.any,
        body: PropTypes.any
      })
    })
  };

  /**
   * Default implementation for status message. Only added when menu is open.
   * Will specift if there are results in the list, and if so, how many,
   * and what keys are relevant.
   *
   * @param {Object} param the downshift state and other relevant properties
   * @return {String} the a11y status message
   */
  function getA11yStatusMessage(_ref) {
    var isOpen = _ref.isOpen,
      resultCount = _ref.resultCount,
      previousResultCount = _ref.previousResultCount;
    if (!isOpen) {
      return '';
    }
    if (!resultCount) {
      return 'No results are available.';
    }
    if (resultCount !== previousResultCount) {
      return resultCount + " result" + (resultCount === 1 ? ' is' : 's are') + " available, use up and down arrow keys to navigate. Press Enter or Space Bar keys to select.";
    }
    return '';
  }
  var defaultProps$2 = _extends({}, defaultProps$3, {
    getA11yStatusMessage: getA11yStatusMessage
  });

  var MenuKeyDownArrowDown = '__menu_keydown_arrow_down__';
  var MenuKeyDownArrowUp = '__menu_keydown_arrow_up__';
  var MenuKeyDownEscape = '__menu_keydown_escape__';
  var MenuKeyDownHome = '__menu_keydown_home__';
  var MenuKeyDownEnd = '__menu_keydown_end__';
  var MenuKeyDownEnter = '__menu_keydown_enter__';
  var MenuKeyDownSpaceButton = '__menu_keydown_space_button__';
  var MenuKeyDownCharacter = '__menu_keydown_character__';
  var MenuBlur = '__menu_blur__';
  var MenuMouseLeave$1 = '__menu_mouse_leave__';
  var ItemMouseMove$1 = '__item_mouse_move__';
  var ItemClick$1 = '__item_click__';
  var ToggleButtonClick$1 = '__togglebutton_click__';
  var ToggleButtonKeyDownArrowDown = '__togglebutton_keydown_arrow_down__';
  var ToggleButtonKeyDownArrowUp = '__togglebutton_keydown_arrow_up__';
  var ToggleButtonKeyDownCharacter = '__togglebutton_keydown_character__';
  var FunctionToggleMenu$1 = '__function_toggle_menu__';
  var FunctionOpenMenu$1 = '__function_open_menu__';
  var FunctionCloseMenu$1 = '__function_close_menu__';
  var FunctionSetHighlightedIndex$1 = '__function_set_highlighted_index__';
  var FunctionSelectItem$1 = '__function_select_item__';
  var FunctionSetInputValue$1 = '__function_set_input_value__';
  var FunctionReset$2 = '__function_reset__';

  var stateChangeTypes$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    MenuKeyDownArrowDown: MenuKeyDownArrowDown,
    MenuKeyDownArrowUp: MenuKeyDownArrowUp,
    MenuKeyDownEscape: MenuKeyDownEscape,
    MenuKeyDownHome: MenuKeyDownHome,
    MenuKeyDownEnd: MenuKeyDownEnd,
    MenuKeyDownEnter: MenuKeyDownEnter,
    MenuKeyDownSpaceButton: MenuKeyDownSpaceButton,
    MenuKeyDownCharacter: MenuKeyDownCharacter,
    MenuBlur: MenuBlur,
    MenuMouseLeave: MenuMouseLeave$1,
    ItemMouseMove: ItemMouseMove$1,
    ItemClick: ItemClick$1,
    ToggleButtonClick: ToggleButtonClick$1,
    ToggleButtonKeyDownArrowDown: ToggleButtonKeyDownArrowDown,
    ToggleButtonKeyDownArrowUp: ToggleButtonKeyDownArrowUp,
    ToggleButtonKeyDownCharacter: ToggleButtonKeyDownCharacter,
    FunctionToggleMenu: FunctionToggleMenu$1,
    FunctionOpenMenu: FunctionOpenMenu$1,
    FunctionCloseMenu: FunctionCloseMenu$1,
    FunctionSetHighlightedIndex: FunctionSetHighlightedIndex$1,
    FunctionSelectItem: FunctionSelectItem$1,
    FunctionSetInputValue: FunctionSetInputValue$1,
    FunctionReset: FunctionReset$2
  });

  /* eslint-disable complexity */
  function downshiftSelectReducer(state, action) {
    var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
    var changes;
    switch (type) {
      case ItemMouseMove$1:
        changes = {
          highlightedIndex: action.index
        };
        break;
      case ItemClick$1:
        changes = {
          isOpen: getDefaultValue$1(props, 'isOpen'),
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          selectedItem: props.items[action.index]
        };
        break;
      case ToggleButtonKeyDownCharacter:
        {
          var lowercasedKey = action.key;
          var inputValue = "" + state.inputValue + lowercasedKey;
          var itemIndex = getItemIndexByCharacterKey(inputValue, state.selectedItem ? props.items.indexOf(state.selectedItem) : -1, props.items, props.itemToString, action.getItemNodeFromIndex);
          changes = _extends({
            inputValue: inputValue
          }, itemIndex >= 0 && {
            selectedItem: props.items[itemIndex]
          });
        }
        break;
      case ToggleButtonKeyDownArrowDown:
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
          isOpen: true
        };
        break;
      case ToggleButtonKeyDownArrowUp:
        changes = {
          highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
          isOpen: true
        };
        break;
      case MenuKeyDownEnter:
      case MenuKeyDownSpaceButton:
        changes = _extends({
          isOpen: getDefaultValue$1(props, 'isOpen'),
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex')
        }, state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex]
        });
        break;
      case MenuKeyDownHome:
        changes = {
          highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
        };
        break;
      case MenuKeyDownEnd:
        changes = {
          highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
        };
        break;
      case MenuKeyDownEscape:
        changes = {
          isOpen: false,
          highlightedIndex: -1
        };
        break;
      case MenuBlur:
        changes = {
          isOpen: false,
          highlightedIndex: -1
        };
        break;
      case MenuKeyDownCharacter:
        {
          var _lowercasedKey = action.key;
          var _inputValue = "" + state.inputValue + _lowercasedKey;
          var highlightedIndex = getItemIndexByCharacterKey(_inputValue, state.highlightedIndex, props.items, props.itemToString, action.getItemNodeFromIndex);
          changes = _extends({
            inputValue: _inputValue
          }, highlightedIndex >= 0 && {
            highlightedIndex: highlightedIndex
          });
        }
        break;
      case MenuKeyDownArrowDown:
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
        break;
      case MenuKeyDownArrowUp:
        changes = {
          highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
        };
        break;
      case MenuMouseLeave$1:
        changes = {
          highlightedIndex: -1
        };
        break;
      case ToggleButtonClick$1:
      case FunctionToggleMenu$1:
        changes = {
          isOpen: !state.isOpen,
          highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
        };
        break;
      case FunctionOpenMenu$1:
        changes = {
          isOpen: true,
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
        };
        break;
      case FunctionCloseMenu$1:
        changes = {
          isOpen: false
        };
        break;
      case FunctionSetHighlightedIndex$1:
        changes = {
          highlightedIndex: action.highlightedIndex
        };
        break;
      case FunctionSelectItem$1:
        changes = {
          selectedItem: action.selectedItem
        };
        break;
      case FunctionSetInputValue$1:
        changes = {
          inputValue: action.inputValue
        };
        break;
      case FunctionReset$2:
        changes = {
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          isOpen: getDefaultValue$1(props, 'isOpen'),
          selectedItem: getDefaultValue$1(props, 'selectedItem'),
          inputValue: getDefaultValue$1(props, 'inputValue')
        };
        break;
      default:
        throw new Error('Reducer called without proper action type.');
    }
    return _extends({}, state, changes);
  }
  /* eslint-enable complexity */

  var _excluded$3 = ["onMouseLeave", "refKey", "onKeyDown", "onBlur", "ref"],
    _excluded2$2 = ["onClick", "onKeyDown", "refKey", "ref"],
    _excluded3$1 = ["item", "index", "onMouseMove", "onClick", "refKey", "ref"];
  var validatePropTypes$1 = getPropTypesValidator(useSelect, propTypes$1);
  useSelect.stateChangeTypes = stateChangeTypes$2;
  function useSelect(userProps) {
    if (userProps === void 0) {
      userProps = {};
    }
    /* istanbul ignore else */

    validatePropTypes$1(userProps);

    // Props defaults and destructuring.
    var props = _extends({}, defaultProps$2, userProps);
    var items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      itemToString = props.itemToString,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      getA11yStatusMessage = props.getA11yStatusMessage;
    // Initial state depending on controlled props.
    var initialState = getInitialState$2(props);
    var _useControlledReducer = useControlledReducer$1(downshiftSelectReducer, initialState, props, isDropdownsStateEqual),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];
    var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue;

    // Element efs.
    var toggleButtonRef = react.useRef(null);
    var menuRef = react.useRef(null);
    var itemRefs = react.useRef();
    itemRefs.current = {};
    // used not to scroll when highlight by mouse.
    var shouldScrollRef = react.useRef(true);
    // used not to trigger menu blur action in some scenarios.
    var shouldBlurRef = react.useRef(true);
    // used to keep the inputValue clearTimeout object between renders.
    var clearTimeoutRef = react.useRef(null);
    // prevent id re-generation between renders.
    var elementIdsRef = react.useRef(getElementIds$1(props));
    // used to keep track of how many items we had on previous cycle.
    var previousResultCountRef = react.useRef();
    var isInitialMountRef = react.useRef(true);
    // used for checking when props are moving from controlled to uncontrolled.
    var prevPropsRef = react.useRef(props);
    // utility callback to get item element.
    var latest = useLatestRef({
      state: state,
      props: props
    });

    // Some utils.
    var getItemNodeFromIndex = function (index) {
      return itemRefs.current[elementIdsRef.current.getItemId(index)];
    };

    // Effects.
    // Sets a11y status message on changes in state.
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      var previousResultCount = previousResultCountRef.current;
      updateA11yStatus(function () {
        return getA11yStatusMessage({
          isOpen: isOpen,
          highlightedIndex: highlightedIndex,
          selectedItem: selectedItem,
          inputValue: inputValue,
          highlightedItem: items[highlightedIndex],
          resultCount: items.length,
          itemToString: itemToString,
          previousResultCount: previousResultCount
        });
      }, environment.document);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, highlightedIndex, inputValue, items]);
    // Sets a11y status message on changes in selectedItem.
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      var previousResultCount = previousResultCountRef.current;
      updateA11yStatus(function () {
        return getA11ySelectionMessage({
          isOpen: isOpen,
          highlightedIndex: highlightedIndex,
          selectedItem: selectedItem,
          inputValue: inputValue,
          highlightedItem: items[highlightedIndex],
          resultCount: items.length,
          itemToString: itemToString,
          previousResultCount: previousResultCount
        });
      }, environment.document);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem]);
    // Sets cleanup for the keysSoFar after 500ms.
    react.useEffect(function () {
      // init the clean function here as we need access to dispatch.
      if (isInitialMountRef.current) {
        clearTimeoutRef.current = debounce(function (outerDispatch) {
          outerDispatch({
            type: FunctionSetInputValue$1,
            inputValue: ''
          });
        }, 500);
      }
      if (!inputValue) {
        return;
      }
      clearTimeoutRef.current(dispatch);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inputValue]);
    /* Controls the focus on the menu or the toggle button. */
    react.useEffect(function () {
      // Don't focus menu on first render.
      if (isInitialMountRef.current) {
        // Unless it was initialised as open.
        if ((initialIsOpen || defaultIsOpen || isOpen) && menuRef.current) {
          menuRef.current.focus();
        }
        return;
      }
      // Focus menu on open.
      if (isOpen) {
        // istanbul ignore else
        if (menuRef.current) {
          menuRef.current.focus();
        }
        return;
      }
      // Focus toggleButton on close, but not if it was closed with (Shift+)Tab.
      if (environment.document.activeElement === menuRef.current) {
        // istanbul ignore else
        if (toggleButtonRef.current) {
          shouldBlurRef.current = false;
          toggleButtonRef.current.focus();
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    // Scroll on highlighted item if change comes from keyboard.
    react.useEffect(function () {
      if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
        return;
      }
      if (shouldScrollRef.current === false) {
        shouldScrollRef.current = true;
      } else {
        scrollIntoView(getItemNodeFromIndex(highlightedIndex), menuRef.current);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [highlightedIndex]);
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      previousResultCountRef.current = items.length;
    });
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props]);
    // Add mouse/touch events to document.
    var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [menuRef, toggleButtonRef], environment, function () {
      dispatch({
        type: MenuBlur
      });
    });
    var setGetterPropCallInfo = useGetterPropsCalledChecker('getMenuProps', 'getToggleButtonProps');
    // Make initial ref false.
    react.useEffect(function () {
      isInitialMountRef.current = false;
    }, []);

    // Event handler functions.
    var toggleButtonKeyDownHandlers = react.useMemo(function () {
      return {
        ArrowDown: function ArrowDown(event) {
          event.preventDefault();
          dispatch({
            type: ToggleButtonKeyDownArrowDown,
            getItemNodeFromIndex: getItemNodeFromIndex,
            shiftKey: event.shiftKey
          });
        },
        ArrowUp: function ArrowUp(event) {
          event.preventDefault();
          dispatch({
            type: ToggleButtonKeyDownArrowUp,
            getItemNodeFromIndex: getItemNodeFromIndex,
            shiftKey: event.shiftKey
          });
        }
      };
    }, [dispatch]);
    var menuKeyDownHandlers = react.useMemo(function () {
      return {
        ArrowDown: function ArrowDown(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownArrowDown,
            getItemNodeFromIndex: getItemNodeFromIndex,
            shiftKey: event.shiftKey
          });
        },
        ArrowUp: function ArrowUp(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownArrowUp,
            getItemNodeFromIndex: getItemNodeFromIndex,
            shiftKey: event.shiftKey
          });
        },
        Home: function Home(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownHome,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        End: function End(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownEnd,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        Escape: function Escape() {
          dispatch({
            type: MenuKeyDownEscape
          });
        },
        Enter: function Enter(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownEnter
          });
        },
        ' ': function _(event) {
          event.preventDefault();
          dispatch({
            type: MenuKeyDownSpaceButton
          });
        }
      };
    }, [dispatch]);

    // Action functions.
    var toggleMenu = react.useCallback(function () {
      dispatch({
        type: FunctionToggleMenu$1
      });
    }, [dispatch]);
    var closeMenu = react.useCallback(function () {
      dispatch({
        type: FunctionCloseMenu$1
      });
    }, [dispatch]);
    var openMenu = react.useCallback(function () {
      dispatch({
        type: FunctionOpenMenu$1
      });
    }, [dispatch]);
    var setHighlightedIndex = react.useCallback(function (newHighlightedIndex) {
      dispatch({
        type: FunctionSetHighlightedIndex$1,
        highlightedIndex: newHighlightedIndex
      });
    }, [dispatch]);
    var selectItem = react.useCallback(function (newSelectedItem) {
      dispatch({
        type: FunctionSelectItem$1,
        selectedItem: newSelectedItem
      });
    }, [dispatch]);
    var reset = react.useCallback(function () {
      dispatch({
        type: FunctionReset$2
      });
    }, [dispatch]);
    var setInputValue = react.useCallback(function (newInputValue) {
      dispatch({
        type: FunctionSetInputValue$1,
        inputValue: newInputValue
      });
    }, [dispatch]);
    // Getter functions.
    var getLabelProps = react.useCallback(function (labelProps) {
      return _extends({
        id: elementIdsRef.current.labelId,
        htmlFor: elementIdsRef.current.toggleButtonId
      }, labelProps);
    }, []);
    var getMenuProps = react.useCallback(function (_temp, _temp2) {
      var _extends2;
      var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        onKeyDown = _ref.onKeyDown,
        onBlur = _ref.onBlur,
        ref = _ref.ref,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded$3);
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
      var latestState = latest.current.state;
      setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
        menuRef.current = menuNode;
      }), _extends2.id = elementIdsRef.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIdsRef.current.labelId, _extends2.tabIndex = -1, _extends2), latestState.isOpen && latestState.highlightedIndex > -1 && {
        'aria-activedescendant': elementIdsRef.current.getItemId(latestState.highlightedIndex)
      }, {
        onMouseLeave: callAllEventHandlers(onMouseLeave, function menuHandleMouseLeave() {
          dispatch({
            type: MenuMouseLeave$1
          });
        }),
        onKeyDown: callAllEventHandlers(onKeyDown, function menuHandleKeyDown(event) {
          var key = normalizeArrowKey(event);
          if (key && menuKeyDownHandlers[key]) {
            menuKeyDownHandlers[key](event);
          } else if (isAcceptedCharacterKey(key)) {
            dispatch({
              type: MenuKeyDownCharacter,
              key: key,
              getItemNodeFromIndex: getItemNodeFromIndex
            });
          }
        }),
        onBlur: callAllEventHandlers(onBlur, function menuHandleBlur() {
          // if the blur was a result of selection, we don't trigger this action.
          if (shouldBlurRef.current === false) {
            shouldBlurRef.current = true;
            return;
          }
          var shouldBlur = !mouseAndTouchTrackersRef.current.isMouseDown;
          /* istanbul ignore else */
          if (shouldBlur) {
            dispatch({
              type: MenuBlur
            });
          }
        })
      }, rest);
    }, [dispatch, latest, menuKeyDownHandlers, mouseAndTouchTrackersRef, setGetterPropCallInfo]);
    var getToggleButtonProps = react.useCallback(function (_temp3, _temp4) {
      var _extends3;
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$2);
      var _ref4 = _temp4 === void 0 ? {} : _temp4,
        _ref4$suppressRefErro = _ref4.suppressRefError,
        suppressRefError = _ref4$suppressRefErro === void 0 ? false : _ref4$suppressRefErro;
      var toggleButtonHandleClick = function () {
        dispatch({
          type: ToggleButtonClick$1
        });
      };
      var toggleButtonHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);
        if (key && toggleButtonKeyDownHandlers[key]) {
          toggleButtonKeyDownHandlers[key](event);
        } else if (isAcceptedCharacterKey(key)) {
          dispatch({
            type: ToggleButtonKeyDownCharacter,
            key: key,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        }
      };
      var toggleProps = _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (toggleButtonNode) {
        toggleButtonRef.current = toggleButtonNode;
      }), _extends3.id = elementIdsRef.current.toggleButtonId, _extends3['aria-haspopup'] = 'listbox', _extends3['aria-expanded'] = latest.current.state.isOpen, _extends3['aria-labelledby'] = elementIdsRef.current.labelId + " " + elementIdsRef.current.toggleButtonId, _extends3), rest);
      if (!rest.disabled) {
        toggleProps.onClick = callAllEventHandlers(onClick, toggleButtonHandleClick);
        toggleProps.onKeyDown = callAllEventHandlers(onKeyDown, toggleButtonHandleKeyDown);
      }
      setGetterPropCallInfo('getToggleButtonProps', suppressRefError, refKey, toggleButtonRef);
      return toggleProps;
    }, [dispatch, latest, toggleButtonKeyDownHandlers, setGetterPropCallInfo]);
    var getItemProps = react.useCallback(function (_temp5) {
      var _extends4;
      var _ref5 = _temp5 === void 0 ? {} : _temp5,
        item = _ref5.item,
        index = _ref5.index,
        onMouseMove = _ref5.onMouseMove,
        onClick = _ref5.onClick,
        _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = _objectWithoutPropertiesLoose(_ref5, _excluded3$1);
      var _latest$current = latest.current,
        latestState = _latest$current.state,
        latestProps = _latest$current.props;
      var itemHandleMouseMove = function () {
        if (index === latestState.highlightedIndex) {
          return;
        }
        shouldScrollRef.current = false;
        dispatch({
          type: ItemMouseMove$1,
          index: index
        });
      };
      var itemHandleClick = function () {
        dispatch({
          type: ItemClick$1,
          index: index
        });
      };
      var itemIndex = getItemIndex(index, item, latestProps.items);
      if (itemIndex < 0) {
        throw new Error('Pass either item or item index in getItemProps!');
      }
      var itemProps = _extends((_extends4 = {
        role: 'option',
        'aria-selected': "" + (itemIndex === latestState.highlightedIndex),
        id: elementIdsRef.current.getItemId(itemIndex)
      }, _extends4[refKey] = handleRefs(ref, function (itemNode) {
        if (itemNode) {
          itemRefs.current[elementIdsRef.current.getItemId(itemIndex)] = itemNode;
        }
      }), _extends4), rest);
      if (!rest.disabled) {
        itemProps.onMouseMove = callAllEventHandlers(onMouseMove, itemHandleMouseMove);
        itemProps.onClick = callAllEventHandlers(onClick, itemHandleClick);
      }
      return itemProps;
    }, [dispatch, latest]);
    return {
      // prop getters.
      getToggleButtonProps: getToggleButtonProps,
      getLabelProps: getLabelProps,
      getMenuProps: getMenuProps,
      getItemProps: getItemProps,
      // actions.
      toggleMenu: toggleMenu,
      openMenu: openMenu,
      closeMenu: closeMenu,
      setHighlightedIndex: setHighlightedIndex,
      selectItem: selectItem,
      reset: reset,
      setInputValue: setInputValue,
      // state.
      highlightedIndex: highlightedIndex,
      isOpen: isOpen,
      selectedItem: selectedItem,
      inputValue: inputValue
    };
  }

  var InputKeyDownArrowDown = '__input_keydown_arrow_down__';
  var InputKeyDownArrowUp = '__input_keydown_arrow_up__';
  var InputKeyDownEscape = '__input_keydown_escape__';
  var InputKeyDownHome = '__input_keydown_home__';
  var InputKeyDownEnd = '__input_keydown_end__';
  var InputKeyDownEnter = '__input_keydown_enter__';
  var InputChange = '__input_change__';
  var InputBlur = '__input_blur__';
  var MenuMouseLeave = '__menu_mouse_leave__';
  var ItemMouseMove = '__item_mouse_move__';
  var ItemClick = '__item_click__';
  var ToggleButtonClick = '__togglebutton_click__';
  var FunctionToggleMenu = '__function_toggle_menu__';
  var FunctionOpenMenu = '__function_open_menu__';
  var FunctionCloseMenu = '__function_close_menu__';
  var FunctionSetHighlightedIndex = '__function_set_highlighted_index__';
  var FunctionSelectItem = '__function_select_item__';
  var FunctionSetInputValue = '__function_set_input_value__';
  var FunctionReset$1 = '__function_reset__';
  var ControlledPropUpdatedSelectedItem = '__controlled_prop_updated_selected_item__';

  var stateChangeTypes$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    InputKeyDownArrowDown: InputKeyDownArrowDown,
    InputKeyDownArrowUp: InputKeyDownArrowUp,
    InputKeyDownEscape: InputKeyDownEscape,
    InputKeyDownHome: InputKeyDownHome,
    InputKeyDownEnd: InputKeyDownEnd,
    InputKeyDownEnter: InputKeyDownEnter,
    InputChange: InputChange,
    InputBlur: InputBlur,
    MenuMouseLeave: MenuMouseLeave,
    ItemMouseMove: ItemMouseMove,
    ItemClick: ItemClick,
    ToggleButtonClick: ToggleButtonClick,
    FunctionToggleMenu: FunctionToggleMenu,
    FunctionOpenMenu: FunctionOpenMenu,
    FunctionCloseMenu: FunctionCloseMenu,
    FunctionSetHighlightedIndex: FunctionSetHighlightedIndex,
    FunctionSelectItem: FunctionSelectItem,
    FunctionSetInputValue: FunctionSetInputValue,
    FunctionReset: FunctionReset$1,
    ControlledPropUpdatedSelectedItem: ControlledPropUpdatedSelectedItem
  });

  var _excluded$2 = ["id", "inputId"];
  function getElementIds(_ref) {
    var id = _ref.id,
      inputId = _ref.inputId,
      rest = _objectWithoutPropertiesLoose(_ref, _excluded$2);
    var uniqueId = id === undefined ? "downshift-" + generateId() : id;
    return _extends({
      inputId: inputId || uniqueId + "-input"
    }, getElementIds$1(_extends({
      id: id
    }, rest)));
  }
  function getInitialState$1(props) {
    var initialState = getInitialState$2(props);
    var selectedItem = initialState.selectedItem;
    var inputValue = initialState.inputValue;
    if (inputValue === '' && selectedItem && props.defaultInputValue === undefined && props.initialInputValue === undefined && props.inputValue === undefined) {
      inputValue = props.itemToString(selectedItem);
    }
    return _extends({}, initialState, {
      inputValue: inputValue
    });
  }
  var propTypes = {
    items: PropTypes.array.isRequired,
    itemToString: PropTypes.func,
    getA11yStatusMessage: PropTypes.func,
    getA11ySelectionMessage: PropTypes.func,
    circularNavigation: PropTypes.bool,
    highlightedIndex: PropTypes.number,
    defaultHighlightedIndex: PropTypes.number,
    initialHighlightedIndex: PropTypes.number,
    isOpen: PropTypes.bool,
    defaultIsOpen: PropTypes.bool,
    initialIsOpen: PropTypes.bool,
    selectedItem: PropTypes.any,
    initialSelectedItem: PropTypes.any,
    defaultSelectedItem: PropTypes.any,
    inputValue: PropTypes.string,
    defaultInputValue: PropTypes.string,
    initialInputValue: PropTypes.string,
    id: PropTypes.string,
    labelId: PropTypes.string,
    menuId: PropTypes.string,
    getItemId: PropTypes.func,
    inputId: PropTypes.string,
    toggleButtonId: PropTypes.string,
    stateReducer: PropTypes.func,
    onSelectedItemChange: PropTypes.func,
    onHighlightedIndexChange: PropTypes.func,
    onStateChange: PropTypes.func,
    onIsOpenChange: PropTypes.func,
    onInputValueChange: PropTypes.func,
    environment: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func,
      document: PropTypes.shape({
        getElementById: PropTypes.func,
        activeElement: PropTypes.any,
        body: PropTypes.any
      })
    })
  };

  /**
   * The useCombobox version of useControlledReducer, which also
   * checks if the controlled prop selectedItem changed between
   * renders. If so, it will also update inputValue with its
   * string equivalent. It uses the common useEnhancedReducer to
   * compute the rest of the state.
   *
   * @param {Function} reducer Reducer function from downshift.
   * @param {Object} initialState Initial state of the hook.
   * @param {Object} props The hook props.
   * @returns {Array} An array with the state and an action dispatcher.
   */
  function useControlledReducer(reducer, initialState, props) {
    var previousSelectedItemRef = react.useRef();
    var _useEnhancedReducer = useEnhancedReducer(reducer, initialState, props),
      state = _useEnhancedReducer[0],
      dispatch = _useEnhancedReducer[1];

    // ToDo: if needed, make same approach as selectedItemChanged from Downshift.
    if (isControlledProp(props, 'selectedItem')) {
      if (previousSelectedItemRef.current !== props.selectedItem) {
        dispatch({
          type: ControlledPropUpdatedSelectedItem,
          inputValue: props.itemToString(props.selectedItem)
        });
      }
      previousSelectedItemRef.current = state.selectedItem === previousSelectedItemRef.current ? props.selectedItem : state.selectedItem;
    }
    return [getState(state, props), dispatch];
  }
  var defaultProps$1 = _extends({}, defaultProps$3, {
    getA11yStatusMessage: getA11yStatusMessage$1,
    circularNavigation: true
  });

  /* eslint-disable complexity */
  function downshiftUseComboboxReducer(state, action) {
    var type = action.type,
      props = action.props,
      shiftKey = action.shiftKey;
    var changes;
    switch (type) {
      case ItemMouseMove:
        changes = {
          highlightedIndex: action.index
        };
        break;
      case ItemClick:
        changes = {
          isOpen: getDefaultValue$1(props, 'isOpen'),
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          selectedItem: props.items[action.index],
          inputValue: props.itemToString(props.items[action.index])
        };
        break;
      case InputKeyDownArrowDown:
        if (state.isOpen) {
          changes = {
            highlightedIndex: getNextWrappingIndex(shiftKey ? 5 : 1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
          };
        } else {
          changes = {
            highlightedIndex: getHighlightedIndexOnOpen(props, state, 1, action.getItemNodeFromIndex),
            isOpen: true
          };
        }
        break;
      case InputKeyDownArrowUp:
        if (state.isOpen) {
          changes = {
            highlightedIndex: getNextWrappingIndex(shiftKey ? -5 : -1, state.highlightedIndex, props.items.length, action.getItemNodeFromIndex, props.circularNavigation)
          };
        } else {
          changes = {
            highlightedIndex: getHighlightedIndexOnOpen(props, state, -1, action.getItemNodeFromIndex),
            isOpen: true
          };
        }
        break;
      case InputKeyDownEnter:
        changes = _extends({}, state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
          isOpen: getDefaultValue$1(props, 'isOpen'),
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          inputValue: props.itemToString(props.items[state.highlightedIndex])
        });
        break;
      case InputKeyDownEscape:
        changes = {
          isOpen: false,
          selectedItem: null,
          highlightedIndex: -1,
          inputValue: ''
        };
        break;
      case InputKeyDownHome:
        changes = {
          highlightedIndex: getNextNonDisabledIndex(1, 0, props.items.length, action.getItemNodeFromIndex, false)
        };
        break;
      case InputKeyDownEnd:
        changes = {
          highlightedIndex: getNextNonDisabledIndex(-1, props.items.length - 1, props.items.length, action.getItemNodeFromIndex, false)
        };
        break;
      case InputBlur:
        changes = _extends({
          isOpen: false
        }, state.highlightedIndex >= 0 && {
          selectedItem: props.items[state.highlightedIndex],
          inputValue: props.itemToString(props.items[state.highlightedIndex]),
          highlightedIndex: -1
        });
        break;
      case InputChange:
        changes = {
          isOpen: true,
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          inputValue: action.inputValue
        };
        break;
      case MenuMouseLeave:
        changes = {
          highlightedIndex: -1
        };
        break;
      case ToggleButtonClick:
      case FunctionToggleMenu:
        changes = {
          isOpen: !state.isOpen,
          highlightedIndex: state.isOpen ? -1 : getHighlightedIndexOnOpen(props, state, 0)
        };
        break;
      case FunctionOpenMenu:
        changes = {
          isOpen: true,
          highlightedIndex: getHighlightedIndexOnOpen(props, state, 0)
        };
        break;
      case FunctionCloseMenu:
        changes = {
          isOpen: false
        };
        break;
      case FunctionSetHighlightedIndex:
        changes = {
          highlightedIndex: action.highlightedIndex
        };
        break;
      case FunctionSelectItem:
        changes = {
          selectedItem: action.selectedItem,
          inputValue: props.itemToString(action.selectedItem)
        };
        break;
      case ControlledPropUpdatedSelectedItem:
      case FunctionSetInputValue:
        changes = {
          inputValue: action.inputValue
        };
        break;
      case FunctionReset$1:
        changes = {
          highlightedIndex: getDefaultValue$1(props, 'highlightedIndex'),
          isOpen: getDefaultValue$1(props, 'isOpen'),
          selectedItem: getDefaultValue$1(props, 'selectedItem'),
          inputValue: getDefaultValue$1(props, 'inputValue')
        };
        break;
      default:
        throw new Error('Reducer called without proper action type.');
    }
    return _extends({}, state, changes);
  }
  /* eslint-enable complexity */

  var _excluded$1 = ["onMouseLeave", "refKey", "ref"],
    _excluded2$1 = ["item", "index", "refKey", "ref", "onMouseMove", "onClick", "onPress"],
    _excluded3 = ["onClick", "onPress", "refKey", "ref"],
    _excluded4 = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "refKey", "ref"],
    _excluded5 = ["refKey", "ref"];
  var validatePropTypes = getPropTypesValidator(useCombobox, propTypes);
  useCombobox.stateChangeTypes = stateChangeTypes$1;
  function useCombobox(userProps) {
    if (userProps === void 0) {
      userProps = {};
    }
    /* istanbul ignore else */

    validatePropTypes(userProps);

    // Props defaults and destructuring.
    var props = _extends({}, defaultProps$1, userProps);
    var initialIsOpen = props.initialIsOpen,
      defaultIsOpen = props.defaultIsOpen,
      items = props.items,
      scrollIntoView = props.scrollIntoView,
      environment = props.environment,
      getA11yStatusMessage = props.getA11yStatusMessage,
      getA11ySelectionMessage = props.getA11ySelectionMessage,
      itemToString = props.itemToString;
    // Initial state depending on controlled props.
    var initialState = getInitialState$1(props);
    var _useControlledReducer = useControlledReducer(downshiftUseComboboxReducer, initialState, props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];
    var isOpen = state.isOpen,
      highlightedIndex = state.highlightedIndex,
      selectedItem = state.selectedItem,
      inputValue = state.inputValue;

    // Element refs.
    var menuRef = react.useRef(null);
    var itemRefs = react.useRef();
    var inputRef = react.useRef(null);
    var toggleButtonRef = react.useRef(null);
    var comboboxRef = react.useRef(null);
    itemRefs.current = {};
    // used not to scroll on highlight by mouse.
    var shouldScrollRef = react.useRef(true);
    var isInitialMountRef = react.useRef(true);
    // prevent id re-generation between renders.
    var elementIdsRef = react.useRef(getElementIds(props));
    // used to keep track of how many items we had on previous cycle.
    var previousResultCountRef = react.useRef();
    // used for checking when props are moving from controlled to uncontrolled.
    var prevPropsRef = react.useRef(props);
    // used to store information about getter props being called on render.
    // utility callback to get item element.
    var latest = useLatestRef({
      state: state,
      props: props
    });
    var getItemNodeFromIndex = function (index) {
      return itemRefs.current[elementIdsRef.current.getItemId(index)];
    };

    // Effects.
    // Sets a11y status message on changes in state.
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      var previousResultCount = previousResultCountRef.current;
      updateA11yStatus(function () {
        return getA11yStatusMessage({
          isOpen: isOpen,
          highlightedIndex: highlightedIndex,
          selectedItem: selectedItem,
          inputValue: inputValue,
          highlightedItem: items[highlightedIndex],
          resultCount: items.length,
          itemToString: itemToString,
          previousResultCount: previousResultCount
        });
      }, environment.document);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, highlightedIndex, inputValue, items]);
    // Sets a11y status message on changes in selectedItem.
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      var previousResultCount = previousResultCountRef.current;
      updateA11yStatus(function () {
        return getA11ySelectionMessage({
          isOpen: isOpen,
          highlightedIndex: highlightedIndex,
          selectedItem: selectedItem,
          inputValue: inputValue,
          highlightedItem: items[highlightedIndex],
          resultCount: items.length,
          itemToString: itemToString,
          previousResultCount: previousResultCount
        });
      }, environment.document);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItem]);
    // Scroll on highlighted item if change comes from keyboard.
    react.useEffect(function () {
      if (highlightedIndex < 0 || !isOpen || !Object.keys(itemRefs.current).length) {
        return;
      }
      if (shouldScrollRef.current === false) {
        shouldScrollRef.current = true;
      } else {
        scrollIntoView(getItemNodeFromIndex(highlightedIndex), menuRef.current);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [highlightedIndex]);
    // Controls the focus on the menu or the toggle button.
    react.useEffect(function () {
      // Don't focus menu on first render.
      if (isInitialMountRef.current) {
        // Unless it was initialised as open.
        if (initialIsOpen || defaultIsOpen || isOpen) {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      previousResultCountRef.current = items.length;
    });
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props]);
    // Add mouse/touch events to document.
    var mouseAndTouchTrackersRef = useMouseAndTouchTracker(isOpen, [comboboxRef, menuRef, toggleButtonRef], environment, function () {
      dispatch({
        type: InputBlur
      });
    });
    var setGetterPropCallInfo = useGetterPropsCalledChecker('getInputProps', 'getComboboxProps', 'getMenuProps');
    // Make initial ref false.
    react.useEffect(function () {
      isInitialMountRef.current = false;
    }, []);

    /* Event handler functions */
    var inputKeyDownHandlers = react.useMemo(function () {
      return {
        ArrowDown: function ArrowDown(event) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownArrowDown,
            shiftKey: event.shiftKey,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        ArrowUp: function ArrowUp(event) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownArrowUp,
            shiftKey: event.shiftKey,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        Home: function Home(event) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownHome,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        End: function End(event) {
          event.preventDefault();
          dispatch({
            type: InputKeyDownEnd,
            getItemNodeFromIndex: getItemNodeFromIndex
          });
        },
        Escape: function Escape() {
          dispatch({
            type: InputKeyDownEscape
          });
        },
        Enter: function Enter(event) {
          // if IME composing, wait for next Enter keydown event.
          if (event.which === 229) {
            return;
          }
          var latestState = latest.current.state;
          if (latestState.isOpen && latestState.highlightedIndex > -1) {
            event.preventDefault();
            dispatch({
              type: InputKeyDownEnter,
              getItemNodeFromIndex: getItemNodeFromIndex
            });
          }
        }
      };
    }, [dispatch, latest]);

    // Getter props.
    var getLabelProps = react.useCallback(function (labelProps) {
      return _extends({
        id: elementIdsRef.current.labelId,
        htmlFor: elementIdsRef.current.inputId
      }, labelProps);
    }, []);
    var getMenuProps = react.useCallback(function (_temp, _temp2) {
      var _extends2;
      var _ref = _temp === void 0 ? {} : _temp,
        onMouseLeave = _ref.onMouseLeave,
        _ref$refKey = _ref.refKey,
        refKey = _ref$refKey === void 0 ? 'ref' : _ref$refKey,
        ref = _ref.ref,
        rest = _objectWithoutPropertiesLoose(_ref, _excluded$1);
      var _ref2 = _temp2 === void 0 ? {} : _temp2,
        _ref2$suppressRefErro = _ref2.suppressRefError,
        suppressRefError = _ref2$suppressRefErro === void 0 ? false : _ref2$suppressRefErro;
      setGetterPropCallInfo('getMenuProps', suppressRefError, refKey, menuRef);
      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (menuNode) {
        menuRef.current = menuNode;
      }), _extends2.id = elementIdsRef.current.menuId, _extends2.role = 'listbox', _extends2['aria-labelledby'] = elementIdsRef.current.labelId, _extends2.onMouseLeave = callAllEventHandlers(onMouseLeave, function () {
        dispatch({
          type: MenuMouseLeave
        });
      }), _extends2), rest);
    }, [dispatch, setGetterPropCallInfo]);
    var getItemProps = react.useCallback(function (_temp3) {
      var _extends3, _ref4;
      var _ref3 = _temp3 === void 0 ? {} : _temp3,
        item = _ref3.item,
        index = _ref3.index,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onMouseMove = _ref3.onMouseMove,
        onClick = _ref3.onClick;
        _ref3.onPress;
        var rest = _objectWithoutPropertiesLoose(_ref3, _excluded2$1);
      var _latest$current = latest.current,
        latestProps = _latest$current.props,
        latestState = _latest$current.state;
      var itemIndex = getItemIndex(index, item, latestProps.items);
      if (itemIndex < 0) {
        throw new Error('Pass either item or item index in getItemProps!');
      }
      var onSelectKey = 'onClick';
      var customClickHandler = onClick;
      return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (itemNode) {
        if (itemNode) {
          itemRefs.current[elementIdsRef.current.getItemId(itemIndex)] = itemNode;
        }
      }), _extends3.role = 'option', _extends3['aria-selected'] = "" + (itemIndex === latestState.highlightedIndex), _extends3.id = elementIdsRef.current.getItemId(itemIndex), _extends3), !rest.disabled && (_ref4 = {
        onMouseMove: callAllEventHandlers(onMouseMove, function itemHandleMouseMove() {
          if (index === latestState.highlightedIndex) {
            return;
          }
          shouldScrollRef.current = false;
          dispatch({
            type: ItemMouseMove,
            index: index
          });
        })
      }, _ref4[onSelectKey] = callAllEventHandlers(customClickHandler, function itemHandleClick() {
        dispatch({
          type: ItemClick,
          index: index
        });
      }), _ref4), rest);
    }, [dispatch, latest]);
    var getToggleButtonProps = react.useCallback(function (_temp4) {
      var _extends4;
      var _ref5 = _temp4 === void 0 ? {} : _temp4,
        onClick = _ref5.onClick;
        _ref5.onPress;
        var _ref5$refKey = _ref5.refKey,
        refKey = _ref5$refKey === void 0 ? 'ref' : _ref5$refKey,
        ref = _ref5.ref,
        rest = _objectWithoutPropertiesLoose(_ref5, _excluded3);
      var toggleButtonHandleClick = function () {
        dispatch({
          type: ToggleButtonClick
        });
        if (!latest.current.state.isOpen && inputRef.current) {
          inputRef.current.focus();
        }
      };
      return _extends((_extends4 = {}, _extends4[refKey] = handleRefs(ref, function (toggleButtonNode) {
        toggleButtonRef.current = toggleButtonNode;
      }), _extends4.id = elementIdsRef.current.toggleButtonId, _extends4.tabIndex = -1, _extends4), !rest.disabled && _extends({}, {
        onClick: callAllEventHandlers(onClick, toggleButtonHandleClick)
      }), rest);
    }, [dispatch, latest]);
    var getInputProps = react.useCallback(function (_temp5, _temp6) {
      var _extends5;
      var _ref6 = _temp5 === void 0 ? {} : _temp5,
        onKeyDown = _ref6.onKeyDown,
        onChange = _ref6.onChange,
        onInput = _ref6.onInput,
        onBlur = _ref6.onBlur;
        _ref6.onChangeText;
        var _ref6$refKey = _ref6.refKey,
        refKey = _ref6$refKey === void 0 ? 'ref' : _ref6$refKey,
        ref = _ref6.ref,
        rest = _objectWithoutPropertiesLoose(_ref6, _excluded4);
      var _ref7 = _temp6 === void 0 ? {} : _temp6,
        _ref7$suppressRefErro = _ref7.suppressRefError,
        suppressRefError = _ref7$suppressRefErro === void 0 ? false : _ref7$suppressRefErro;
      setGetterPropCallInfo('getInputProps', suppressRefError, refKey, inputRef);
      var latestState = latest.current.state;
      var inputHandleKeyDown = function (event) {
        var key = normalizeArrowKey(event);
        if (key && inputKeyDownHandlers[key]) {
          inputKeyDownHandlers[key](event);
        }
      };
      var inputHandleChange = function (event) {
        dispatch({
          type: InputChange,
          inputValue: event.target.value
        });
      };
      var inputHandleBlur = function () {
        /* istanbul ignore else */
        if (!mouseAndTouchTrackersRef.current.isMouseDown) {
          dispatch({
            type: InputBlur
          });
        }
      };

      /* istanbul ignore next (preact) */
      var onChangeKey = 'onChange';
      var eventHandlers = {};
      if (!rest.disabled) {
        var _eventHandlers;
        eventHandlers = (_eventHandlers = {}, _eventHandlers[onChangeKey] = callAllEventHandlers(onChange, onInput, inputHandleChange), _eventHandlers.onKeyDown = callAllEventHandlers(onKeyDown, inputHandleKeyDown), _eventHandlers.onBlur = callAllEventHandlers(onBlur, inputHandleBlur), _eventHandlers);
      }

      /* istanbul ignore if (react-native) */

      return _extends((_extends5 = {}, _extends5[refKey] = handleRefs(ref, function (inputNode) {
        inputRef.current = inputNode;
      }), _extends5.id = elementIdsRef.current.inputId, _extends5['aria-autocomplete'] = 'list', _extends5['aria-controls'] = elementIdsRef.current.menuId, _extends5), latestState.isOpen && latestState.highlightedIndex > -1 && {
        'aria-activedescendant': elementIdsRef.current.getItemId(latestState.highlightedIndex)
      }, {
        'aria-labelledby': elementIdsRef.current.labelId,
        // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
        // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
        autoComplete: 'off',
        value: latestState.inputValue
      }, eventHandlers, rest);
    }, [dispatch, inputKeyDownHandlers, latest, mouseAndTouchTrackersRef, setGetterPropCallInfo]);
    var getComboboxProps = react.useCallback(function (_temp7, _temp8) {
      var _extends6;
      var _ref8 = _temp7 === void 0 ? {} : _temp7,
        _ref8$refKey = _ref8.refKey,
        refKey = _ref8$refKey === void 0 ? 'ref' : _ref8$refKey,
        ref = _ref8.ref,
        rest = _objectWithoutPropertiesLoose(_ref8, _excluded5);
      var _ref9 = _temp8 === void 0 ? {} : _temp8,
        _ref9$suppressRefErro = _ref9.suppressRefError,
        suppressRefError = _ref9$suppressRefErro === void 0 ? false : _ref9$suppressRefErro;
      setGetterPropCallInfo('getComboboxProps', suppressRefError, refKey, comboboxRef);
      return _extends((_extends6 = {}, _extends6[refKey] = handleRefs(ref, function (comboboxNode) {
        comboboxRef.current = comboboxNode;
      }), _extends6.role = 'combobox', _extends6['aria-haspopup'] = 'listbox', _extends6['aria-owns'] = elementIdsRef.current.menuId, _extends6['aria-expanded'] = latest.current.state.isOpen, _extends6), rest);
    }, [latest, setGetterPropCallInfo]);

    // returns
    var toggleMenu = react.useCallback(function () {
      dispatch({
        type: FunctionToggleMenu
      });
    }, [dispatch]);
    var closeMenu = react.useCallback(function () {
      dispatch({
        type: FunctionCloseMenu
      });
    }, [dispatch]);
    var openMenu = react.useCallback(function () {
      dispatch({
        type: FunctionOpenMenu
      });
    }, [dispatch]);
    var setHighlightedIndex = react.useCallback(function (newHighlightedIndex) {
      dispatch({
        type: FunctionSetHighlightedIndex,
        highlightedIndex: newHighlightedIndex
      });
    }, [dispatch]);
    var selectItem = react.useCallback(function (newSelectedItem) {
      dispatch({
        type: FunctionSelectItem,
        selectedItem: newSelectedItem
      });
    }, [dispatch]);
    var setInputValue = react.useCallback(function (newInputValue) {
      dispatch({
        type: FunctionSetInputValue,
        inputValue: newInputValue
      });
    }, [dispatch]);
    var reset = react.useCallback(function () {
      dispatch({
        type: FunctionReset$1
      });
    }, [dispatch]);
    return {
      // prop getters.
      getItemProps: getItemProps,
      getLabelProps: getLabelProps,
      getMenuProps: getMenuProps,
      getInputProps: getInputProps,
      getComboboxProps: getComboboxProps,
      getToggleButtonProps: getToggleButtonProps,
      // actions.
      toggleMenu: toggleMenu,
      openMenu: openMenu,
      closeMenu: closeMenu,
      setHighlightedIndex: setHighlightedIndex,
      setInputValue: setInputValue,
      selectItem: selectItem,
      reset: reset,
      // state.
      highlightedIndex: highlightedIndex,
      isOpen: isOpen,
      selectedItem: selectedItem,
      inputValue: inputValue
    };
  }

  var defaultStateValues = {
    activeIndex: -1,
    selectedItems: []
  };

  /**
   * Returns the initial value for a state key in the following order:
   * 1. controlled prop, 2. initial prop, 3. default prop, 4. default
   * value from Downshift.
   *
   * @param {Object} props Props passed to the hook.
   * @param {string} propKey Props key to generate the value for.
   * @returns {any} The initial value for that prop.
   */
  function getInitialValue(props, propKey) {
    return getInitialValue$1(props, propKey, defaultStateValues);
  }

  /**
   * Returns the default value for a state key in the following order:
   * 1. controlled prop, 2. default prop, 3. default value from Downshift.
   *
   * @param {Object} props Props passed to the hook.
   * @param {string} propKey Props key to generate the value for.
   * @returns {any} The initial value for that prop.
   */
  function getDefaultValue(props, propKey) {
    return getDefaultValue$1(props, propKey, defaultStateValues);
  }

  /**
   * Gets the initial state based on the provided props. It uses initial, default
   * and controlled props related to state in order to compute the initial value.
   *
   * @param {Object} props Props passed to the hook.
   * @returns {Object} The initial state.
   */
  function getInitialState(props) {
    var activeIndex = getInitialValue(props, 'activeIndex');
    var selectedItems = getInitialValue(props, 'selectedItems');
    return {
      activeIndex: activeIndex,
      selectedItems: selectedItems
    };
  }

  /**
   * Returns true if dropdown keydown operation is permitted. Should not be
   * allowed on keydown with modifier keys (ctrl, alt, shift, meta), on
   * input element with text content that is either highlighted or selection
   * cursor is not at the starting position.
   *
   * @param {KeyboardEvent} event The event from keydown.
   * @returns {boolean} Whether the operation is allowed.
   */
  function isKeyDownOperationPermitted(event) {
    if (event.shiftKey || event.metaKey || event.ctrlKey || event.altKey) {
      return false;
    }
    var element = event.target;
    if (element instanceof HTMLInputElement &&
    // if element is a text input
    element.value !== '' && (
    // and we have text in it
    // and cursor is either not at the start or is currently highlighting text.
    element.selectionStart !== 0 || element.selectionEnd !== 0)) {
      return false;
    }
    return true;
  }

  /**
   * Returns a message to be added to aria-live region when item is removed.
   *
   * @param {Object} selectionParameters Parameters required to build the message.
   * @returns {string} The a11y message.
   */
  function getA11yRemovalMessage(selectionParameters) {
    var removedSelectedItem = selectionParameters.removedSelectedItem,
      itemToStringLocal = selectionParameters.itemToString;
    return itemToStringLocal(removedSelectedItem) + " has been removed.";
  }
  ({
    selectedItems: PropTypes.array,
    initialSelectedItems: PropTypes.array,
    defaultSelectedItems: PropTypes.array,
    itemToString: PropTypes.func,
    getA11yRemovalMessage: PropTypes.func,
    stateReducer: PropTypes.func,
    activeIndex: PropTypes.number,
    initialActiveIndex: PropTypes.number,
    defaultActiveIndex: PropTypes.number,
    onActiveIndexChange: PropTypes.func,
    onSelectedItemsChange: PropTypes.func,
    keyNavigationNext: PropTypes.string,
    keyNavigationPrevious: PropTypes.string,
    environment: PropTypes.shape({
      addEventListener: PropTypes.func,
      removeEventListener: PropTypes.func,
      document: PropTypes.shape({
        getElementById: PropTypes.func,
        activeElement: PropTypes.any,
        body: PropTypes.any
      })
    })
  });
  var defaultProps = {
    itemToString: defaultProps$3.itemToString,
    stateReducer: defaultProps$3.stateReducer,
    environment: defaultProps$3.environment,
    getA11yRemovalMessage: getA11yRemovalMessage,
    keyNavigationNext: 'ArrowRight',
    keyNavigationPrevious: 'ArrowLeft'
  };

  var SelectedItemClick = '__selected_item_click__';
  var SelectedItemKeyDownDelete = '__selected_item_keydown_delete__';
  var SelectedItemKeyDownBackspace = '__selected_item_keydown_backspace__';
  var SelectedItemKeyDownNavigationNext = '__selected_item_keydown_navigation_next__';
  var SelectedItemKeyDownNavigationPrevious = '__selected_item_keydown_navigation_previous__';
  var DropdownKeyDownNavigationPrevious = '__dropdown_keydown_navigation_previous__';
  var DropdownKeyDownBackspace = '__dropdown_keydown_backspace__';
  var DropdownClick = '__dropdown_click__';
  var FunctionAddSelectedItem = '__function_add_selected_item__';
  var FunctionRemoveSelectedItem = '__function_remove_selected_item__';
  var FunctionSetSelectedItems = '__function_set_selected_items__';
  var FunctionSetActiveIndex = '__function_set_active_index__';
  var FunctionReset = '__function_reset__';

  var stateChangeTypes = /*#__PURE__*/Object.freeze({
    __proto__: null,
    SelectedItemClick: SelectedItemClick,
    SelectedItemKeyDownDelete: SelectedItemKeyDownDelete,
    SelectedItemKeyDownBackspace: SelectedItemKeyDownBackspace,
    SelectedItemKeyDownNavigationNext: SelectedItemKeyDownNavigationNext,
    SelectedItemKeyDownNavigationPrevious: SelectedItemKeyDownNavigationPrevious,
    DropdownKeyDownNavigationPrevious: DropdownKeyDownNavigationPrevious,
    DropdownKeyDownBackspace: DropdownKeyDownBackspace,
    DropdownClick: DropdownClick,
    FunctionAddSelectedItem: FunctionAddSelectedItem,
    FunctionRemoveSelectedItem: FunctionRemoveSelectedItem,
    FunctionSetSelectedItems: FunctionSetSelectedItems,
    FunctionSetActiveIndex: FunctionSetActiveIndex,
    FunctionReset: FunctionReset
  });

  /* eslint-disable complexity */
  function downshiftMultipleSelectionReducer(state, action) {
    var type = action.type,
      index = action.index,
      props = action.props,
      selectedItem = action.selectedItem;
    var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems;
    var changes;
    switch (type) {
      case SelectedItemClick:
        changes = {
          activeIndex: index
        };
        break;
      case SelectedItemKeyDownNavigationPrevious:
        changes = {
          activeIndex: activeIndex - 1 < 0 ? 0 : activeIndex - 1
        };
        break;
      case SelectedItemKeyDownNavigationNext:
        changes = {
          activeIndex: activeIndex + 1 >= selectedItems.length ? -1 : activeIndex + 1
        };
        break;
      case SelectedItemKeyDownBackspace:
      case SelectedItemKeyDownDelete:
        {
          var newActiveIndex = activeIndex;
          if (selectedItems.length === 1) {
            newActiveIndex = -1;
          } else if (activeIndex === selectedItems.length - 1) {
            newActiveIndex = selectedItems.length - 2;
          }
          changes = _extends({
            selectedItems: [].concat(selectedItems.slice(0, activeIndex), selectedItems.slice(activeIndex + 1))
          }, {
            activeIndex: newActiveIndex
          });
          break;
        }
      case DropdownKeyDownNavigationPrevious:
        changes = {
          activeIndex: selectedItems.length - 1
        };
        break;
      case DropdownKeyDownBackspace:
        changes = {
          selectedItems: selectedItems.slice(0, selectedItems.length - 1)
        };
        break;
      case FunctionAddSelectedItem:
        changes = {
          selectedItems: [].concat(selectedItems, [selectedItem])
        };
        break;
      case DropdownClick:
        changes = {
          activeIndex: -1
        };
        break;
      case FunctionRemoveSelectedItem:
        {
          var _newActiveIndex = activeIndex;
          var selectedItemIndex = selectedItems.indexOf(selectedItem);
          if (selectedItems.length === 1) {
            _newActiveIndex = -1;
          } else if (selectedItemIndex === selectedItems.length - 1) {
            _newActiveIndex = selectedItems.length - 2;
          }
          changes = _extends({
            selectedItems: [].concat(selectedItems.slice(0, selectedItemIndex), selectedItems.slice(selectedItemIndex + 1))
          }, {
            activeIndex: _newActiveIndex
          });
          break;
        }
      case FunctionSetSelectedItems:
        {
          var newSelectedItems = action.selectedItems;
          changes = {
            selectedItems: newSelectedItems
          };
          break;
        }
      case FunctionSetActiveIndex:
        {
          var _newActiveIndex2 = action.activeIndex;
          changes = {
            activeIndex: _newActiveIndex2
          };
          break;
        }
      case FunctionReset:
        changes = {
          activeIndex: getDefaultValue(props, 'activeIndex'),
          selectedItems: getDefaultValue(props, 'selectedItems')
        };
        break;
      default:
        throw new Error('Reducer called without proper action type.');
    }
    return _extends({}, state, changes);
  }

  var _excluded = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"],
    _excluded2 = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyAction"];
  useMultipleSelection.stateChangeTypes = stateChangeTypes;
  function useMultipleSelection(userProps) {
    if (userProps === void 0) {
      userProps = {};
    }
    // Props defaults and destructuring.
    var props = _extends({}, defaultProps, userProps);
    var getA11yRemovalMessage = props.getA11yRemovalMessage,
      itemToString = props.itemToString,
      environment = props.environment,
      keyNavigationNext = props.keyNavigationNext,
      keyNavigationPrevious = props.keyNavigationPrevious;

    // Reducer init.
    var _useControlledReducer = useControlledReducer$1(downshiftMultipleSelectionReducer, getInitialState(props), props),
      state = _useControlledReducer[0],
      dispatch = _useControlledReducer[1];
    var activeIndex = state.activeIndex,
      selectedItems = state.selectedItems;

    // Refs.
    var isInitialMountRef = react.useRef(true);
    var dropdownRef = react.useRef(null);
    var previousSelectedItemsRef = react.useRef(selectedItems);
    var selectedItemRefs = react.useRef();
    selectedItemRefs.current = [];
    // used for checking when props are moving from controlled to uncontrolled.
    var prevPropsRef = react.useRef(props);
    var latest = useLatestRef({
      state: state,
      props: props
    });

    // Effects.
    /* Sets a11y status message on changes in selectedItem. */
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      if (selectedItems.length < previousSelectedItemsRef.current.length) {
        var removedSelectedItem = previousSelectedItemsRef.current.find(function (item) {
          return selectedItems.indexOf(item) < 0;
        });
        setStatus(getA11yRemovalMessage({
          itemToString: itemToString,
          resultCount: selectedItems.length,
          removedSelectedItem: removedSelectedItem,
          activeIndex: activeIndex,
          activeSelectedItem: selectedItems[activeIndex]
        }), environment.document);
      }
      previousSelectedItemsRef.current = selectedItems;

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedItems.length]);
    // Sets focus on active item.
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      if (activeIndex === -1 && dropdownRef.current) {
        dropdownRef.current.focus();
      } else if (selectedItemRefs.current[activeIndex]) {
        selectedItemRefs.current[activeIndex].focus();
      }
    }, [activeIndex]);
    react.useEffect(function () {
      if (isInitialMountRef.current) {
        return;
      }
      validateControlledUnchanged(state, prevPropsRef.current, props);
      prevPropsRef.current = props;
    }, [state, props]);
    var setGetterPropCallInfo = useGetterPropsCalledChecker('getDropdownProps');
    // Make initial ref false.
    react.useEffect(function () {
      isInitialMountRef.current = false;
    }, []);

    // Event handler functions.
    var selectedItemKeyDownHandlers = react.useMemo(function () {
      var _ref;
      return _ref = {}, _ref[keyNavigationPrevious] = function () {
        dispatch({
          type: SelectedItemKeyDownNavigationPrevious
        });
      }, _ref[keyNavigationNext] = function () {
        dispatch({
          type: SelectedItemKeyDownNavigationNext
        });
      }, _ref.Delete = function Delete() {
        dispatch({
          type: SelectedItemKeyDownDelete
        });
      }, _ref.Backspace = function Backspace() {
        dispatch({
          type: SelectedItemKeyDownBackspace
        });
      }, _ref;
    }, [dispatch, keyNavigationNext, keyNavigationPrevious]);
    var dropdownKeyDownHandlers = react.useMemo(function () {
      var _ref2;
      return _ref2 = {}, _ref2[keyNavigationPrevious] = function (event) {
        if (isKeyDownOperationPermitted(event)) {
          dispatch({
            type: DropdownKeyDownNavigationPrevious
          });
        }
      }, _ref2.Backspace = function Backspace(event) {
        if (isKeyDownOperationPermitted(event)) {
          dispatch({
            type: DropdownKeyDownBackspace
          });
        }
      }, _ref2;
    }, [dispatch, keyNavigationPrevious]);

    // Getter props.
    var getSelectedItemProps = react.useCallback(function (_temp) {
      var _extends2;
      var _ref3 = _temp === void 0 ? {} : _temp,
        _ref3$refKey = _ref3.refKey,
        refKey = _ref3$refKey === void 0 ? 'ref' : _ref3$refKey,
        ref = _ref3.ref,
        onClick = _ref3.onClick,
        onKeyDown = _ref3.onKeyDown,
        selectedItem = _ref3.selectedItem,
        index = _ref3.index,
        rest = _objectWithoutPropertiesLoose(_ref3, _excluded);
      var latestState = latest.current.state;
      var itemIndex = getItemIndex(index, selectedItem, latestState.selectedItems);
      if (itemIndex < 0) {
        throw new Error('Pass either selectedItem or index in getSelectedItemProps!');
      }
      return _extends((_extends2 = {}, _extends2[refKey] = handleRefs(ref, function (selectedItemNode) {
        if (selectedItemNode) {
          selectedItemRefs.current.push(selectedItemNode);
        }
      }), _extends2.tabIndex = index === latestState.activeIndex ? 0 : -1, _extends2.onClick = callAllEventHandlers(onClick, function selectedItemHandleClick() {
        dispatch({
          type: SelectedItemClick,
          index: index
        });
      }), _extends2.onKeyDown = callAllEventHandlers(onKeyDown, function selectedItemHandleKeyDown(event) {
        var key = normalizeArrowKey(event);
        if (key && selectedItemKeyDownHandlers[key]) {
          selectedItemKeyDownHandlers[key](event);
        }
      }), _extends2), rest);
    }, [dispatch, latest, selectedItemKeyDownHandlers]);
    var getDropdownProps = react.useCallback(function (_temp2, _temp3) {
      var _extends3;
      var _ref4 = _temp2 === void 0 ? {} : _temp2,
        _ref4$refKey = _ref4.refKey,
        refKey = _ref4$refKey === void 0 ? 'ref' : _ref4$refKey,
        ref = _ref4.ref,
        onKeyDown = _ref4.onKeyDown,
        onClick = _ref4.onClick,
        _ref4$preventKeyActio = _ref4.preventKeyAction,
        preventKeyAction = _ref4$preventKeyActio === void 0 ? false : _ref4$preventKeyActio,
        rest = _objectWithoutPropertiesLoose(_ref4, _excluded2);
      var _ref5 = _temp3 === void 0 ? {} : _temp3,
        _ref5$suppressRefErro = _ref5.suppressRefError,
        suppressRefError = _ref5$suppressRefErro === void 0 ? false : _ref5$suppressRefErro;
      setGetterPropCallInfo('getDropdownProps', suppressRefError, refKey, dropdownRef);
      return _extends((_extends3 = {}, _extends3[refKey] = handleRefs(ref, function (dropdownNode) {
        if (dropdownNode) {
          dropdownRef.current = dropdownNode;
        }
      }), _extends3), !preventKeyAction && {
        onKeyDown: callAllEventHandlers(onKeyDown, function dropdownHandleKeyDown(event) {
          var key = normalizeArrowKey(event);
          if (key && dropdownKeyDownHandlers[key]) {
            dropdownKeyDownHandlers[key](event);
          }
        }),
        onClick: callAllEventHandlers(onClick, function dropdownHandleClick() {
          dispatch({
            type: DropdownClick
          });
        })
      }, rest);
    }, [dispatch, dropdownKeyDownHandlers, setGetterPropCallInfo]);

    // returns
    var addSelectedItem = react.useCallback(function (selectedItem) {
      dispatch({
        type: FunctionAddSelectedItem,
        selectedItem: selectedItem
      });
    }, [dispatch]);
    var removeSelectedItem = react.useCallback(function (selectedItem) {
      dispatch({
        type: FunctionRemoveSelectedItem,
        selectedItem: selectedItem
      });
    }, [dispatch]);
    var setSelectedItems = react.useCallback(function (newSelectedItems) {
      dispatch({
        type: FunctionSetSelectedItems,
        selectedItems: newSelectedItems
      });
    }, [dispatch]);
    var setActiveIndex = react.useCallback(function (newActiveIndex) {
      dispatch({
        type: FunctionSetActiveIndex,
        activeIndex: newActiveIndex
      });
    }, [dispatch]);
    var reset = react.useCallback(function () {
      dispatch({
        type: FunctionReset
      });
    }, [dispatch]);
    return {
      getSelectedItemProps: getSelectedItemProps,
      getDropdownProps: getDropdownProps,
      addSelectedItem: addSelectedItem,
      removeSelectedItem: removeSelectedItem,
      setSelectedItems: setSelectedItems,
      setActiveIndex: setActiveIndex,
      reset: reset,
      selectedItems: selectedItems,
      activeIndex: activeIndex
    };
  }

  exports["default"] = Downshift$1;
  exports.resetIdCounter = resetIdCounter;
  exports.useCombobox = useCombobox;
  exports.useMultipleSelection = useMultipleSelection;
  exports.useSelect = useSelect;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=downshift.umd.js.map

import ua, { useRef as ra, useState as Su, useEffect as Cu } from "react";
var nt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, bu = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ta;
function g_() {
  if (ta)
    return et;
  ta = 1;
  var _e = ua, Jn = Symbol.for("react.element"), a = Symbol.for("react.fragment"), fe = Object.prototype.hasOwnProperty, Bn = _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Un = { key: !0, ref: !0, __self: !0, __source: !0 };
  function on(Qn, k, oe) {
    var j, nn = {}, pn = null, F = null;
    oe !== void 0 && (pn = "" + oe), k.key !== void 0 && (pn = "" + k.key), k.ref !== void 0 && (F = k.ref);
    for (j in k)
      fe.call(k, j) && !Un.hasOwnProperty(j) && (nn[j] = k[j]);
    if (Qn && Qn.defaultProps)
      for (j in k = Qn.defaultProps, k)
        nn[j] === void 0 && (nn[j] = k[j]);
    return { $$typeof: Jn, type: Qn, key: pn, ref: F, props: nn, _owner: Bn.current };
  }
  return et.Fragment = a, et.jsx = on, et.jsxs = on, et;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ia;
function p_() {
  return ia || (ia = 1, process.env.NODE_ENV !== "production" && function() {
    var _e = ua, Jn = Symbol.for("react.element"), a = Symbol.for("react.portal"), fe = Symbol.for("react.fragment"), Bn = Symbol.for("react.strict_mode"), Un = Symbol.for("react.profiler"), on = Symbol.for("react.provider"), Qn = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), nn = Symbol.for("react.memo"), pn = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), J = Symbol.iterator, Cn = "@@iterator";
    function en(l) {
      if (l === null || typeof l != "object")
        return null;
      var w = J && l[J] || l[Cn];
      return typeof w == "function" ? w : null;
    }
    var rn = _e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function tn(l) {
      {
        for (var w = arguments.length, x = new Array(w > 1 ? w - 1 : 0), S = 1; S < w; S++)
          x[S - 1] = arguments[S];
        En("error", l, x);
      }
    }
    function En(l, w, x) {
      {
        var S = rn.ReactDebugCurrentFrame, U = S.getStackAddendum();
        U !== "" && (w += "%s", x = x.concat([U]));
        var $ = x.map(function(D) {
          return String(D);
        });
        $.unshift("Warning: " + w), Function.prototype.apply.call(console[l], console, $);
      }
    }
    var be = !1, Nn = !1, Oe = !1, Vn = !1, Ye = !1, ir;
    ir = Symbol.for("react.module.reference");
    function fi(l) {
      return !!(typeof l == "string" || typeof l == "function" || l === fe || l === Un || Ye || l === Bn || l === oe || l === j || Vn || l === F || be || Nn || Oe || typeof l == "object" && l !== null && (l.$$typeof === pn || l.$$typeof === nn || l.$$typeof === on || l.$$typeof === Qn || l.$$typeof === k || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      l.$$typeof === ir || l.getModuleId !== void 0));
    }
    function oi(l, w, x) {
      var S = l.displayName;
      if (S)
        return S;
      var U = w.displayName || w.name || "";
      return U !== "" ? x + "(" + U + ")" : x;
    }
    function it(l) {
      return l.displayName || "Context";
    }
    function kn(l) {
      if (l == null)
        return null;
      if (typeof l.tag == "number" && tn("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof l == "function")
        return l.displayName || l.name || null;
      if (typeof l == "string")
        return l;
      switch (l) {
        case fe:
          return "Fragment";
        case a:
          return "Portal";
        case Un:
          return "Profiler";
        case Bn:
          return "StrictMode";
        case oe:
          return "Suspense";
        case j:
          return "SuspenseList";
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case Qn:
            var w = l;
            return it(w) + ".Consumer";
          case on:
            var x = l;
            return it(x._context) + ".Provider";
          case k:
            return oi(l, l.render, "ForwardRef");
          case nn:
            var S = l.displayName || null;
            return S !== null ? S : kn(l.type) || "Memo";
          case pn: {
            var U = l, $ = U._payload, D = U._init;
            try {
              return kn(D($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ae = Object.assign, qe = 0, ut, le, jn, ft, Ke, bn, ot;
    function at() {
    }
    at.__reactDisabledLog = !0;
    function ai() {
      {
        if (qe === 0) {
          ut = console.log, le = console.info, jn = console.warn, ft = console.error, Ke = console.group, bn = console.groupCollapsed, ot = console.groupEnd;
          var l = {
            configurable: !0,
            enumerable: !0,
            value: at,
            writable: !0
          };
          Object.defineProperties(console, {
            info: l,
            log: l,
            warn: l,
            error: l,
            group: l,
            groupCollapsed: l,
            groupEnd: l
          });
        }
        qe++;
      }
    }
    function Ie() {
      {
        if (qe--, qe === 0) {
          var l = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ae({}, l, {
              value: ut
            }),
            info: ae({}, l, {
              value: le
            }),
            warn: ae({}, l, {
              value: jn
            }),
            error: ae({}, l, {
              value: ft
            }),
            group: ae({}, l, {
              value: Ke
            }),
            groupCollapsed: ae({}, l, {
              value: bn
            }),
            groupEnd: ae({}, l, {
              value: ot
            })
          });
        }
        qe < 0 && tn("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Le = rn.ReactCurrentDispatcher, Cr;
    function se(l, w, x) {
      {
        if (Cr === void 0)
          try {
            throw Error();
          } catch (U) {
            var S = U.stack.trim().match(/\n( *(at )?)/);
            Cr = S && S[1] || "";
          }
        return `
` + Cr + l;
      }
    }
    var ve = !1, ur;
    {
      var fr = typeof WeakMap == "function" ? WeakMap : Map;
      ur = new fr();
    }
    function ze(l, w) {
      if (!l || ve)
        return "";
      {
        var x = ur.get(l);
        if (x !== void 0)
          return x;
      }
      var S;
      ve = !0;
      var U = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = Le.current, Le.current = null, ai();
      try {
        if (w) {
          var D = function() {
            throw Error();
          };
          if (Object.defineProperty(D.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(D, []);
            } catch (mn) {
              S = mn;
            }
            Reflect.construct(l, [], D);
          } else {
            try {
              D.call();
            } catch (mn) {
              S = mn;
            }
            l.call(D.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mn) {
            S = mn;
          }
          l();
        }
      } catch (mn) {
        if (mn && S && typeof mn.stack == "string") {
          for (var P = mn.stack.split(`
`), cn = S.stack.split(`
`), X = P.length - 1, Q = cn.length - 1; X >= 1 && Q >= 0 && P[X] !== cn[Q]; )
            Q--;
          for (; X >= 1 && Q >= 0; X--, Q--)
            if (P[X] !== cn[Q]) {
              if (X !== 1 || Q !== 1)
                do
                  if (X--, Q--, Q < 0 || P[X] !== cn[Q]) {
                    var Rn = `
` + P[X].replace(" at new ", " at ");
                    return l.displayName && Rn.includes("<anonymous>") && (Rn = Rn.replace("<anonymous>", l.displayName)), typeof l == "function" && ur.set(l, Rn), Rn;
                  }
                while (X >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        ve = !1, Le.current = $, Ie(), Error.prepareStackTrace = U;
      }
      var ee = l ? l.displayName || l.name : "", wt = ee ? se(ee) : "";
      return typeof l == "function" && ur.set(l, wt), wt;
    }
    function lt(l, w, x) {
      return ze(l, !1);
    }
    function On(l) {
      var w = l.prototype;
      return !!(w && w.isReactComponent);
    }
    function ce(l, w, x) {
      if (l == null)
        return "";
      if (typeof l == "function")
        return ze(l, On(l));
      if (typeof l == "string")
        return se(l);
      switch (l) {
        case oe:
          return se("Suspense");
        case j:
          return se("SuspenseList");
      }
      if (typeof l == "object")
        switch (l.$$typeof) {
          case k:
            return lt(l.render);
          case nn:
            return ce(l.type, w, x);
          case pn: {
            var S = l, U = S._payload, $ = S._init;
            try {
              return ce($(U), w, x);
            } catch {
            }
          }
        }
      return "";
    }
    var or = Object.prototype.hasOwnProperty, $n = {}, br = rn.ReactDebugCurrentFrame;
    function ar(l) {
      if (l) {
        var w = l._owner, x = ce(l.type, l._source, w ? w.type : null);
        br.setExtraStackFrame(x);
      } else
        br.setExtraStackFrame(null);
    }
    function Xe(l, w, x, S, U) {
      {
        var $ = Function.call.bind(or);
        for (var D in l)
          if ($(l, D)) {
            var P = void 0;
            try {
              if (typeof l[D] != "function") {
                var cn = Error((S || "React class") + ": " + x + " type `" + D + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[D] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw cn.name = "Invariant Violation", cn;
              }
              P = l[D](w, D, S, x, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (X) {
              P = X;
            }
            P && !(P instanceof Error) && (ar(U), tn("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", x, D, typeof P), ar(null)), P instanceof Error && !(P.message in $n) && ($n[P.message] = !0, ar(U), tn("Failed %s type: %s", x, P.message), ar(null));
          }
      }
    }
    var In = Array.isArray;
    function de(l) {
      return In(l);
    }
    function lr(l) {
      {
        var w = typeof Symbol == "function" && Symbol.toStringTag, x = w && l[Symbol.toStringTag] || l.constructor.name || "Object";
        return x;
      }
    }
    function li(l) {
      try {
        return Pe(l), !1;
      } catch {
        return !0;
      }
    }
    function Pe(l) {
      return "" + l;
    }
    function st(l) {
      if (li(l))
        return tn("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(l)), Pe(l);
    }
    var ne = rn.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, sr, cr, Ze;
    Ze = {};
    function Or(l) {
      if (or.call(l, "ref")) {
        var w = Object.getOwnPropertyDescriptor(l, "ref").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return l.ref !== void 0;
    }
    function Ir(l) {
      if (or.call(l, "key")) {
        var w = Object.getOwnPropertyDescriptor(l, "key").get;
        if (w && w.isReactWarning)
          return !1;
      }
      return l.key !== void 0;
    }
    function Lr(l, w) {
      if (typeof l.ref == "string" && ne.current && w && ne.current.stateNode !== w) {
        var x = kn(ne.current.type);
        Ze[x] || (tn('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', kn(ne.current.type), l.ref), Ze[x] = !0);
      }
    }
    function Pr(l, w) {
      {
        var x = function() {
          sr || (sr = !0, tn("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "key", {
          get: x,
          configurable: !0
        });
      }
    }
    function Wr(l, w) {
      {
        var x = function() {
          cr || (cr = !0, tn("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", w));
        };
        x.isReactWarning = !0, Object.defineProperty(l, "ref", {
          get: x,
          configurable: !0
        });
      }
    }
    var Fr = function(l, w, x, S, U, $, D) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: Jn,
        // Built-in properties that belong on the element
        type: l,
        key: w,
        ref: x,
        props: D,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: S
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function si(l, w, x, S, U) {
      {
        var $, D = {}, P = null, cn = null;
        x !== void 0 && (st(x), P = "" + x), Ir(w) && (st(w.key), P = "" + w.key), Or(w) && (cn = w.ref, Lr(w, U));
        for ($ in w)
          or.call(w, $) && !We.hasOwnProperty($) && (D[$] = w[$]);
        if (l && l.defaultProps) {
          var X = l.defaultProps;
          for ($ in X)
            D[$] === void 0 && (D[$] = X[$]);
        }
        if (P || cn) {
          var Q = typeof l == "function" ? l.displayName || l.name || "Unknown" : l;
          P && Pr(D, Q), cn && Wr(D, Q);
        }
        return Fr(l, P, cn, U, S, ne.current, D);
      }
    }
    var Dr = rn.ReactCurrentOwner, ct = rn.ReactDebugCurrentFrame;
    function we(l) {
      if (l) {
        var w = l._owner, x = ce(l.type, l._source, w ? w.type : null);
        ct.setExtraStackFrame(x);
      } else
        ct.setExtraStackFrame(null);
    }
    var hr;
    hr = !1;
    function Mr(l) {
      return typeof l == "object" && l !== null && l.$$typeof === Jn;
    }
    function ht() {
      {
        if (Dr.current) {
          var l = kn(Dr.current.type);
          if (l)
            return `

Check the render method of \`` + l + "`.";
        }
        return "";
      }
    }
    function ci(l) {
      {
        if (l !== void 0) {
          var w = l.fileName.replace(/^.*[\\\/]/, ""), x = l.lineNumber;
          return `

Check your code at ` + w + ":" + x + ".";
        }
        return "";
      }
    }
    var gt = {};
    function pt(l) {
      {
        var w = ht();
        if (!w) {
          var x = typeof l == "string" ? l : l.displayName || l.name;
          x && (w = `

Check the top-level render call using <` + x + ">.");
        }
        return w;
      }
    }
    function _t(l, w) {
      {
        if (!l._store || l._store.validated || l.key != null)
          return;
        l._store.validated = !0;
        var x = pt(w);
        if (gt[x])
          return;
        gt[x] = !0;
        var S = "";
        l && l._owner && l._owner !== Dr.current && (S = " It was passed a child from " + kn(l._owner.type) + "."), we(l), tn('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', x, S), we(null);
      }
    }
    function vt(l, w) {
      {
        if (typeof l != "object")
          return;
        if (de(l))
          for (var x = 0; x < l.length; x++) {
            var S = l[x];
            Mr(S) && _t(S, w);
          }
        else if (Mr(l))
          l._store && (l._store.validated = !0);
        else if (l) {
          var U = en(l);
          if (typeof U == "function" && U !== l.entries)
            for (var $ = U.call(l), D; !(D = $.next()).done; )
              Mr(D.value) && _t(D.value, w);
        }
      }
    }
    function hi(l) {
      {
        var w = l.type;
        if (w == null || typeof w == "string")
          return;
        var x;
        if (typeof w == "function")
          x = w.propTypes;
        else if (typeof w == "object" && (w.$$typeof === k || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        w.$$typeof === nn))
          x = w.propTypes;
        else
          return;
        if (x) {
          var S = kn(w);
          Xe(x, l.props, "prop", S, l);
        } else if (w.PropTypes !== void 0 && !hr) {
          hr = !0;
          var U = kn(w);
          tn("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", U || "Unknown");
        }
        typeof w.getDefaultProps == "function" && !w.getDefaultProps.isReactClassApproved && tn("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Br(l) {
      {
        for (var w = Object.keys(l.props), x = 0; x < w.length; x++) {
          var S = w[x];
          if (S !== "children" && S !== "key") {
            we(l), tn("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), we(null);
            break;
          }
        }
        l.ref !== null && (we(l), tn("Invalid attribute `ref` supplied to `React.Fragment`."), we(null));
      }
    }
    function dt(l, w, x, S, U, $) {
      {
        var D = fi(l);
        if (!D) {
          var P = "";
          (l === void 0 || typeof l == "object" && l !== null && Object.keys(l).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var cn = ci(U);
          cn ? P += cn : P += ht();
          var X;
          l === null ? X = "null" : de(l) ? X = "array" : l !== void 0 && l.$$typeof === Jn ? (X = "<" + (kn(l.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : X = typeof l, tn("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", X, P);
        }
        var Q = si(l, w, x, U, $);
        if (Q == null)
          return Q;
        if (D) {
          var Rn = w.children;
          if (Rn !== void 0)
            if (S)
              if (de(Rn)) {
                for (var ee = 0; ee < Rn.length; ee++)
                  vt(Rn[ee], l);
                Object.freeze && Object.freeze(Rn);
              } else
                tn("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(Rn, l);
        }
        return l === fe ? Br(Q) : hi(Q), Q;
      }
    }
    function Ur(l, w, x) {
      return dt(l, w, x, !0);
    }
    function gi(l, w, x) {
      return dt(l, w, x, !1);
    }
    var pi = gi, _i = Ur;
    rt.Fragment = fe, rt.jsx = pi, rt.jsxs = _i;
  }()), rt;
}
process.env.NODE_ENV === "production" ? bu.exports = g_() : bu.exports = p_();
var tt = bu.exports;
var ui = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
ui.exports;
(function(_e, Jn) {
  (function() {
    var a, fe = "4.17.21", Bn = 200, Un = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", on = "Expected a function", Qn = "Invalid `variable` option passed into `_.template`", k = "__lodash_hash_undefined__", oe = 500, j = "__lodash_placeholder__", nn = 1, pn = 2, F = 4, J = 1, Cn = 2, en = 1, rn = 2, tn = 4, En = 8, be = 16, Nn = 32, Oe = 64, Vn = 128, Ye = 256, ir = 512, fi = 30, oi = "...", it = 800, kn = 16, ae = 1, qe = 2, ut = 3, le = 1 / 0, jn = 9007199254740991, ft = 17976931348623157e292, Ke = 0 / 0, bn = 4294967295, ot = bn - 1, at = bn >>> 1, ai = [
      ["ary", Vn],
      ["bind", en],
      ["bindKey", rn],
      ["curry", En],
      ["curryRight", be],
      ["flip", ir],
      ["partial", Nn],
      ["partialRight", Oe],
      ["rearg", Ye]
    ], Ie = "[object Arguments]", Le = "[object Array]", Cr = "[object AsyncFunction]", se = "[object Boolean]", ve = "[object Date]", ur = "[object DOMException]", fr = "[object Error]", ze = "[object Function]", lt = "[object GeneratorFunction]", On = "[object Map]", ce = "[object Number]", or = "[object Null]", $n = "[object Object]", br = "[object Promise]", ar = "[object Proxy]", Xe = "[object RegExp]", In = "[object Set]", de = "[object String]", lr = "[object Symbol]", li = "[object Undefined]", Pe = "[object WeakMap]", st = "[object WeakSet]", ne = "[object ArrayBuffer]", We = "[object DataView]", sr = "[object Float32Array]", cr = "[object Float64Array]", Ze = "[object Int8Array]", Or = "[object Int16Array]", Ir = "[object Int32Array]", Lr = "[object Uint8Array]", Pr = "[object Uint8ClampedArray]", Wr = "[object Uint16Array]", Fr = "[object Uint32Array]", si = /\b__p \+= '';/g, Dr = /\b(__p \+=) '' \+/g, ct = /(__e\(.*?\)|\b__t\)) \+\n'';/g, we = /&(?:amp|lt|gt|quot|#39);/g, hr = /[&<>"']/g, Mr = RegExp(we.source), ht = RegExp(hr.source), ci = /<%-([\s\S]+?)%>/g, gt = /<%([\s\S]+?)%>/g, pt = /<%=([\s\S]+?)%>/g, _t = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, vt = /^\w*$/, hi = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Br = /[\\^$.*+?()[\]{}|]/g, dt = RegExp(Br.source), Ur = /^\s+/, gi = /\s/, pi = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, _i = /\{\n\/\* \[wrapped with (.+)\] \*/, l = /,? & /, w = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, x = /[()=,{}\[\]\/\s]/, S = /\\(\\)?/g, U = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, $ = /\w*$/, D = /^[-+]0x[0-9a-f]+$/i, P = /^0b[01]+$/i, cn = /^\[object .+?Constructor\]$/, X = /^0o[0-7]+$/i, Q = /^(?:0|[1-9]\d*)$/, Rn = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, ee = /($^)/, wt = /['\n\r\u2028\u2029\\]/g, mn = "\\ud800-\\udfff", fa = "\\u0300-\\u036f", oa = "\\ufe20-\\ufe2f", aa = "\\u20d0-\\u20ff", Ou = fa + oa + aa, Iu = "\\u2700-\\u27bf", Lu = "a-z\\xdf-\\xf6\\xf8-\\xff", la = "\\xac\\xb1\\xd7\\xf7", sa = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", ca = "\\u2000-\\u206f", ha = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Pu = "A-Z\\xc0-\\xd6\\xd8-\\xde", Wu = "\\ufe0e\\ufe0f", Fu = la + sa + ca + ha, vi = "['’]", ga = "[" + mn + "]", Du = "[" + Fu + "]", xt = "[" + Ou + "]", Mu = "\\d+", pa = "[" + Iu + "]", Bu = "[" + Lu + "]", Uu = "[^" + mn + Fu + Mu + Iu + Lu + Pu + "]", di = "\\ud83c[\\udffb-\\udfff]", _a = "(?:" + xt + "|" + di + ")", Nu = "[^" + mn + "]", wi = "(?:\\ud83c[\\udde6-\\uddff]){2}", xi = "[\\ud800-\\udbff][\\udc00-\\udfff]", gr = "[" + Pu + "]", $u = "\\u200d", Gu = "(?:" + Bu + "|" + Uu + ")", va = "(?:" + gr + "|" + Uu + ")", Hu = "(?:" + vi + "(?:d|ll|m|re|s|t|ve))?", Yu = "(?:" + vi + "(?:D|LL|M|RE|S|T|VE))?", qu = _a + "?", Ku = "[" + Wu + "]?", da = "(?:" + $u + "(?:" + [Nu, wi, xi].join("|") + ")" + Ku + qu + ")*", wa = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", xa = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", zu = Ku + qu + da, Ea = "(?:" + [pa, wi, xi].join("|") + ")" + zu, Ra = "(?:" + [Nu + xt + "?", xt, wi, xi, ga].join("|") + ")", ma = RegExp(vi, "g"), ya = RegExp(xt, "g"), Ei = RegExp(di + "(?=" + di + ")|" + Ra + zu, "g"), Aa = RegExp([
      gr + "?" + Bu + "+" + Hu + "(?=" + [Du, gr, "$"].join("|") + ")",
      va + "+" + Yu + "(?=" + [Du, gr + Gu, "$"].join("|") + ")",
      gr + "?" + Gu + "+" + Hu,
      gr + "+" + Yu,
      xa,
      wa,
      Mu,
      Ea
    ].join("|"), "g"), Ta = RegExp("[" + $u + mn + Ou + Wu + "]"), Sa = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, Ca = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ], ba = -1, K = {};
    K[sr] = K[cr] = K[Ze] = K[Or] = K[Ir] = K[Lr] = K[Pr] = K[Wr] = K[Fr] = !0, K[Ie] = K[Le] = K[ne] = K[se] = K[We] = K[ve] = K[fr] = K[ze] = K[On] = K[ce] = K[$n] = K[Xe] = K[In] = K[de] = K[Pe] = !1;
    var q = {};
    q[Ie] = q[Le] = q[ne] = q[We] = q[se] = q[ve] = q[sr] = q[cr] = q[Ze] = q[Or] = q[Ir] = q[On] = q[ce] = q[$n] = q[Xe] = q[In] = q[de] = q[lr] = q[Lr] = q[Pr] = q[Wr] = q[Fr] = !0, q[fr] = q[ze] = q[Pe] = !1;
    var Oa = {
      // Latin-1 Supplement block.
      À: "A",
      Á: "A",
      Â: "A",
      Ã: "A",
      Ä: "A",
      Å: "A",
      à: "a",
      á: "a",
      â: "a",
      ã: "a",
      ä: "a",
      å: "a",
      Ç: "C",
      ç: "c",
      Ð: "D",
      ð: "d",
      È: "E",
      É: "E",
      Ê: "E",
      Ë: "E",
      è: "e",
      é: "e",
      ê: "e",
      ë: "e",
      Ì: "I",
      Í: "I",
      Î: "I",
      Ï: "I",
      ì: "i",
      í: "i",
      î: "i",
      ï: "i",
      Ñ: "N",
      ñ: "n",
      Ò: "O",
      Ó: "O",
      Ô: "O",
      Õ: "O",
      Ö: "O",
      Ø: "O",
      ò: "o",
      ó: "o",
      ô: "o",
      õ: "o",
      ö: "o",
      ø: "o",
      Ù: "U",
      Ú: "U",
      Û: "U",
      Ü: "U",
      ù: "u",
      ú: "u",
      û: "u",
      ü: "u",
      Ý: "Y",
      ý: "y",
      ÿ: "y",
      Æ: "Ae",
      æ: "ae",
      Þ: "Th",
      þ: "th",
      ß: "ss",
      // Latin Extended-A block.
      Ā: "A",
      Ă: "A",
      Ą: "A",
      ā: "a",
      ă: "a",
      ą: "a",
      Ć: "C",
      Ĉ: "C",
      Ċ: "C",
      Č: "C",
      ć: "c",
      ĉ: "c",
      ċ: "c",
      č: "c",
      Ď: "D",
      Đ: "D",
      ď: "d",
      đ: "d",
      Ē: "E",
      Ĕ: "E",
      Ė: "E",
      Ę: "E",
      Ě: "E",
      ē: "e",
      ĕ: "e",
      ė: "e",
      ę: "e",
      ě: "e",
      Ĝ: "G",
      Ğ: "G",
      Ġ: "G",
      Ģ: "G",
      ĝ: "g",
      ğ: "g",
      ġ: "g",
      ģ: "g",
      Ĥ: "H",
      Ħ: "H",
      ĥ: "h",
      ħ: "h",
      Ĩ: "I",
      Ī: "I",
      Ĭ: "I",
      Į: "I",
      İ: "I",
      ĩ: "i",
      ī: "i",
      ĭ: "i",
      į: "i",
      ı: "i",
      Ĵ: "J",
      ĵ: "j",
      Ķ: "K",
      ķ: "k",
      ĸ: "k",
      Ĺ: "L",
      Ļ: "L",
      Ľ: "L",
      Ŀ: "L",
      Ł: "L",
      ĺ: "l",
      ļ: "l",
      ľ: "l",
      ŀ: "l",
      ł: "l",
      Ń: "N",
      Ņ: "N",
      Ň: "N",
      Ŋ: "N",
      ń: "n",
      ņ: "n",
      ň: "n",
      ŋ: "n",
      Ō: "O",
      Ŏ: "O",
      Ő: "O",
      ō: "o",
      ŏ: "o",
      ő: "o",
      Ŕ: "R",
      Ŗ: "R",
      Ř: "R",
      ŕ: "r",
      ŗ: "r",
      ř: "r",
      Ś: "S",
      Ŝ: "S",
      Ş: "S",
      Š: "S",
      ś: "s",
      ŝ: "s",
      ş: "s",
      š: "s",
      Ţ: "T",
      Ť: "T",
      Ŧ: "T",
      ţ: "t",
      ť: "t",
      ŧ: "t",
      Ũ: "U",
      Ū: "U",
      Ŭ: "U",
      Ů: "U",
      Ű: "U",
      Ų: "U",
      ũ: "u",
      ū: "u",
      ŭ: "u",
      ů: "u",
      ű: "u",
      ų: "u",
      Ŵ: "W",
      ŵ: "w",
      Ŷ: "Y",
      ŷ: "y",
      Ÿ: "Y",
      Ź: "Z",
      Ż: "Z",
      Ž: "Z",
      ź: "z",
      ż: "z",
      ž: "z",
      Ĳ: "IJ",
      ĳ: "ij",
      Œ: "Oe",
      œ: "oe",
      ŉ: "'n",
      ſ: "s"
    }, Ia = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }, La = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    }, Pa = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    }, Wa = parseFloat, Fa = parseInt, Xu = typeof nt == "object" && nt && nt.Object === Object && nt, Da = typeof self == "object" && self && self.Object === Object && self, hn = Xu || Da || Function("return this")(), Ri = Jn && !Jn.nodeType && Jn, Je = Ri && !0 && _e && !_e.nodeType && _e, Zu = Je && Je.exports === Ri, mi = Zu && Xu.process, Gn = function() {
      try {
        var c = Je && Je.require && Je.require("util").types;
        return c || mi && mi.binding && mi.binding("util");
      } catch {
      }
    }(), Ju = Gn && Gn.isArrayBuffer, Qu = Gn && Gn.isDate, Vu = Gn && Gn.isMap, ku = Gn && Gn.isRegExp, ju = Gn && Gn.isSet, nf = Gn && Gn.isTypedArray;
    function Ln(c, p, g) {
      switch (g.length) {
        case 0:
          return c.call(p);
        case 1:
          return c.call(p, g[0]);
        case 2:
          return c.call(p, g[0], g[1]);
        case 3:
          return c.call(p, g[0], g[1], g[2]);
      }
      return c.apply(p, g);
    }
    function Ma(c, p, g, R) {
      for (var C = -1, N = c == null ? 0 : c.length; ++C < N; ) {
        var an = c[C];
        p(R, an, g(an), c);
      }
      return R;
    }
    function Hn(c, p) {
      for (var g = -1, R = c == null ? 0 : c.length; ++g < R && p(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function Ba(c, p) {
      for (var g = c == null ? 0 : c.length; g-- && p(c[g], g, c) !== !1; )
        ;
      return c;
    }
    function ef(c, p) {
      for (var g = -1, R = c == null ? 0 : c.length; ++g < R; )
        if (!p(c[g], g, c))
          return !1;
      return !0;
    }
    function Fe(c, p) {
      for (var g = -1, R = c == null ? 0 : c.length, C = 0, N = []; ++g < R; ) {
        var an = c[g];
        p(an, g, c) && (N[C++] = an);
      }
      return N;
    }
    function Et(c, p) {
      var g = c == null ? 0 : c.length;
      return !!g && pr(c, p, 0) > -1;
    }
    function yi(c, p, g) {
      for (var R = -1, C = c == null ? 0 : c.length; ++R < C; )
        if (g(p, c[R]))
          return !0;
      return !1;
    }
    function z(c, p) {
      for (var g = -1, R = c == null ? 0 : c.length, C = Array(R); ++g < R; )
        C[g] = p(c[g], g, c);
      return C;
    }
    function De(c, p) {
      for (var g = -1, R = p.length, C = c.length; ++g < R; )
        c[C + g] = p[g];
      return c;
    }
    function Ai(c, p, g, R) {
      var C = -1, N = c == null ? 0 : c.length;
      for (R && N && (g = c[++C]); ++C < N; )
        g = p(g, c[C], C, c);
      return g;
    }
    function Ua(c, p, g, R) {
      var C = c == null ? 0 : c.length;
      for (R && C && (g = c[--C]); C--; )
        g = p(g, c[C], C, c);
      return g;
    }
    function Ti(c, p) {
      for (var g = -1, R = c == null ? 0 : c.length; ++g < R; )
        if (p(c[g], g, c))
          return !0;
      return !1;
    }
    var Na = Si("length");
    function $a(c) {
      return c.split("");
    }
    function Ga(c) {
      return c.match(w) || [];
    }
    function rf(c, p, g) {
      var R;
      return g(c, function(C, N, an) {
        if (p(C, N, an))
          return R = N, !1;
      }), R;
    }
    function Rt(c, p, g, R) {
      for (var C = c.length, N = g + (R ? 1 : -1); R ? N-- : ++N < C; )
        if (p(c[N], N, c))
          return N;
      return -1;
    }
    function pr(c, p, g) {
      return p === p ? ja(c, p, g) : Rt(c, tf, g);
    }
    function Ha(c, p, g, R) {
      for (var C = g - 1, N = c.length; ++C < N; )
        if (R(c[C], p))
          return C;
      return -1;
    }
    function tf(c) {
      return c !== c;
    }
    function uf(c, p) {
      var g = c == null ? 0 : c.length;
      return g ? bi(c, p) / g : Ke;
    }
    function Si(c) {
      return function(p) {
        return p == null ? a : p[c];
      };
    }
    function Ci(c) {
      return function(p) {
        return c == null ? a : c[p];
      };
    }
    function ff(c, p, g, R, C) {
      return C(c, function(N, an, Y) {
        g = R ? (R = !1, N) : p(g, N, an, Y);
      }), g;
    }
    function Ya(c, p) {
      var g = c.length;
      for (c.sort(p); g--; )
        c[g] = c[g].value;
      return c;
    }
    function bi(c, p) {
      for (var g, R = -1, C = c.length; ++R < C; ) {
        var N = p(c[R]);
        N !== a && (g = g === a ? N : g + N);
      }
      return g;
    }
    function Oi(c, p) {
      for (var g = -1, R = Array(c); ++g < c; )
        R[g] = p(g);
      return R;
    }
    function qa(c, p) {
      return z(p, function(g) {
        return [g, c[g]];
      });
    }
    function of(c) {
      return c && c.slice(0, cf(c) + 1).replace(Ur, "");
    }
    function Pn(c) {
      return function(p) {
        return c(p);
      };
    }
    function Ii(c, p) {
      return z(p, function(g) {
        return c[g];
      });
    }
    function Nr(c, p) {
      return c.has(p);
    }
    function af(c, p) {
      for (var g = -1, R = c.length; ++g < R && pr(p, c[g], 0) > -1; )
        ;
      return g;
    }
    function lf(c, p) {
      for (var g = c.length; g-- && pr(p, c[g], 0) > -1; )
        ;
      return g;
    }
    function Ka(c, p) {
      for (var g = c.length, R = 0; g--; )
        c[g] === p && ++R;
      return R;
    }
    var za = Ci(Oa), Xa = Ci(Ia);
    function Za(c) {
      return "\\" + Pa[c];
    }
    function Ja(c, p) {
      return c == null ? a : c[p];
    }
    function _r(c) {
      return Ta.test(c);
    }
    function Qa(c) {
      return Sa.test(c);
    }
    function Va(c) {
      for (var p, g = []; !(p = c.next()).done; )
        g.push(p.value);
      return g;
    }
    function Li(c) {
      var p = -1, g = Array(c.size);
      return c.forEach(function(R, C) {
        g[++p] = [C, R];
      }), g;
    }
    function sf(c, p) {
      return function(g) {
        return c(p(g));
      };
    }
    function Me(c, p) {
      for (var g = -1, R = c.length, C = 0, N = []; ++g < R; ) {
        var an = c[g];
        (an === p || an === j) && (c[g] = j, N[C++] = g);
      }
      return N;
    }
    function mt(c) {
      var p = -1, g = Array(c.size);
      return c.forEach(function(R) {
        g[++p] = R;
      }), g;
    }
    function ka(c) {
      var p = -1, g = Array(c.size);
      return c.forEach(function(R) {
        g[++p] = [R, R];
      }), g;
    }
    function ja(c, p, g) {
      for (var R = g - 1, C = c.length; ++R < C; )
        if (c[R] === p)
          return R;
      return -1;
    }
    function nl(c, p, g) {
      for (var R = g + 1; R--; )
        if (c[R] === p)
          return R;
      return R;
    }
    function vr(c) {
      return _r(c) ? rl(c) : Na(c);
    }
    function re(c) {
      return _r(c) ? tl(c) : $a(c);
    }
    function cf(c) {
      for (var p = c.length; p-- && gi.test(c.charAt(p)); )
        ;
      return p;
    }
    var el = Ci(La);
    function rl(c) {
      for (var p = Ei.lastIndex = 0; Ei.test(c); )
        ++p;
      return p;
    }
    function tl(c) {
      return c.match(Ei) || [];
    }
    function il(c) {
      return c.match(Aa) || [];
    }
    var ul = function c(p) {
      p = p == null ? hn : dr.defaults(hn.Object(), p, dr.pick(hn, Ca));
      var g = p.Array, R = p.Date, C = p.Error, N = p.Function, an = p.Math, Y = p.Object, Pi = p.RegExp, fl = p.String, Yn = p.TypeError, yt = g.prototype, ol = N.prototype, wr = Y.prototype, At = p["__core-js_shared__"], Tt = ol.toString, H = wr.hasOwnProperty, al = 0, hf = function() {
        var n = /[^.]+$/.exec(At && At.keys && At.keys.IE_PROTO || "");
        return n ? "Symbol(src)_1." + n : "";
      }(), St = wr.toString, ll = Tt.call(Y), sl = hn._, cl = Pi(
        "^" + Tt.call(H).replace(Br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      ), Ct = Zu ? p.Buffer : a, Be = p.Symbol, bt = p.Uint8Array, gf = Ct ? Ct.allocUnsafe : a, Ot = sf(Y.getPrototypeOf, Y), pf = Y.create, _f = wr.propertyIsEnumerable, It = yt.splice, vf = Be ? Be.isConcatSpreadable : a, $r = Be ? Be.iterator : a, Qe = Be ? Be.toStringTag : a, Lt = function() {
        try {
          var n = er(Y, "defineProperty");
          return n({}, "", {}), n;
        } catch {
        }
      }(), hl = p.clearTimeout !== hn.clearTimeout && p.clearTimeout, gl = R && R.now !== hn.Date.now && R.now, pl = p.setTimeout !== hn.setTimeout && p.setTimeout, Pt = an.ceil, Wt = an.floor, Wi = Y.getOwnPropertySymbols, _l = Ct ? Ct.isBuffer : a, df = p.isFinite, vl = yt.join, dl = sf(Y.keys, Y), ln = an.max, _n = an.min, wl = R.now, xl = p.parseInt, wf = an.random, El = yt.reverse, Fi = er(p, "DataView"), Gr = er(p, "Map"), Di = er(p, "Promise"), xr = er(p, "Set"), Hr = er(p, "WeakMap"), Yr = er(Y, "create"), Ft = Hr && new Hr(), Er = {}, Rl = rr(Fi), ml = rr(Gr), yl = rr(Di), Al = rr(xr), Tl = rr(Hr), Dt = Be ? Be.prototype : a, qr = Dt ? Dt.valueOf : a, xf = Dt ? Dt.toString : a;
      function u(n) {
        if (V(n) && !b(n) && !(n instanceof M)) {
          if (n instanceof qn)
            return n;
          if (H.call(n, "__wrapped__"))
            return Ro(n);
        }
        return new qn(n);
      }
      var Rr = function() {
        function n() {
        }
        return function(e) {
          if (!Z(e))
            return {};
          if (pf)
            return pf(e);
          n.prototype = e;
          var r = new n();
          return n.prototype = a, r;
        };
      }();
      function Mt() {
      }
      function qn(n, e) {
        this.__wrapped__ = n, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = a;
      }
      u.templateSettings = {
        /**
         * Used to detect `data` property values to be HTML-escaped.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        escape: ci,
        /**
         * Used to detect code to be evaluated.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        evaluate: gt,
        /**
         * Used to detect `data` property values to inject.
         *
         * @memberOf _.templateSettings
         * @type {RegExp}
         */
        interpolate: pt,
        /**
         * Used to reference the data object in the template text.
         *
         * @memberOf _.templateSettings
         * @type {string}
         */
        variable: "",
        /**
         * Used to import variables into the compiled template.
         *
         * @memberOf _.templateSettings
         * @type {Object}
         */
        imports: {
          /**
           * A reference to the `lodash` function.
           *
           * @memberOf _.templateSettings.imports
           * @type {Function}
           */
          _: u
        }
      }, u.prototype = Mt.prototype, u.prototype.constructor = u, qn.prototype = Rr(Mt.prototype), qn.prototype.constructor = qn;
      function M(n) {
        this.__wrapped__ = n, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = bn, this.__views__ = [];
      }
      function Sl() {
        var n = new M(this.__wrapped__);
        return n.__actions__ = yn(this.__actions__), n.__dir__ = this.__dir__, n.__filtered__ = this.__filtered__, n.__iteratees__ = yn(this.__iteratees__), n.__takeCount__ = this.__takeCount__, n.__views__ = yn(this.__views__), n;
      }
      function Cl() {
        if (this.__filtered__) {
          var n = new M(this);
          n.__dir__ = -1, n.__filtered__ = !0;
        } else
          n = this.clone(), n.__dir__ *= -1;
        return n;
      }
      function bl() {
        var n = this.__wrapped__.value(), e = this.__dir__, r = b(n), t = e < 0, i = r ? n.length : 0, f = $s(0, i, this.__views__), o = f.start, s = f.end, h = s - o, _ = t ? s : o - 1, v = this.__iteratees__, d = v.length, E = 0, m = _n(h, this.__takeCount__);
        if (!r || !t && i == h && m == h)
          return Yf(n, this.__actions__);
        var A = [];
        n:
          for (; h-- && E < m; ) {
            _ += e;
            for (var I = -1, T = n[_]; ++I < d; ) {
              var W = v[I], B = W.iteratee, Dn = W.type, xn = B(T);
              if (Dn == qe)
                T = xn;
              else if (!xn) {
                if (Dn == ae)
                  continue n;
                break n;
              }
            }
            A[E++] = T;
          }
        return A;
      }
      M.prototype = Rr(Mt.prototype), M.prototype.constructor = M;
      function Ve(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function Ol() {
        this.__data__ = Yr ? Yr(null) : {}, this.size = 0;
      }
      function Il(n) {
        var e = this.has(n) && delete this.__data__[n];
        return this.size -= e ? 1 : 0, e;
      }
      function Ll(n) {
        var e = this.__data__;
        if (Yr) {
          var r = e[n];
          return r === k ? a : r;
        }
        return H.call(e, n) ? e[n] : a;
      }
      function Pl(n) {
        var e = this.__data__;
        return Yr ? e[n] !== a : H.call(e, n);
      }
      function Wl(n, e) {
        var r = this.__data__;
        return this.size += this.has(n) ? 0 : 1, r[n] = Yr && e === a ? k : e, this;
      }
      Ve.prototype.clear = Ol, Ve.prototype.delete = Il, Ve.prototype.get = Ll, Ve.prototype.has = Pl, Ve.prototype.set = Wl;
      function xe(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function Fl() {
        this.__data__ = [], this.size = 0;
      }
      function Dl(n) {
        var e = this.__data__, r = Bt(e, n);
        if (r < 0)
          return !1;
        var t = e.length - 1;
        return r == t ? e.pop() : It.call(e, r, 1), --this.size, !0;
      }
      function Ml(n) {
        var e = this.__data__, r = Bt(e, n);
        return r < 0 ? a : e[r][1];
      }
      function Bl(n) {
        return Bt(this.__data__, n) > -1;
      }
      function Ul(n, e) {
        var r = this.__data__, t = Bt(r, n);
        return t < 0 ? (++this.size, r.push([n, e])) : r[t][1] = e, this;
      }
      xe.prototype.clear = Fl, xe.prototype.delete = Dl, xe.prototype.get = Ml, xe.prototype.has = Bl, xe.prototype.set = Ul;
      function Ee(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.clear(); ++e < r; ) {
          var t = n[e];
          this.set(t[0], t[1]);
        }
      }
      function Nl() {
        this.size = 0, this.__data__ = {
          hash: new Ve(),
          map: new (Gr || xe)(),
          string: new Ve()
        };
      }
      function $l(n) {
        var e = Jt(this, n).delete(n);
        return this.size -= e ? 1 : 0, e;
      }
      function Gl(n) {
        return Jt(this, n).get(n);
      }
      function Hl(n) {
        return Jt(this, n).has(n);
      }
      function Yl(n, e) {
        var r = Jt(this, n), t = r.size;
        return r.set(n, e), this.size += r.size == t ? 0 : 1, this;
      }
      Ee.prototype.clear = Nl, Ee.prototype.delete = $l, Ee.prototype.get = Gl, Ee.prototype.has = Hl, Ee.prototype.set = Yl;
      function ke(n) {
        var e = -1, r = n == null ? 0 : n.length;
        for (this.__data__ = new Ee(); ++e < r; )
          this.add(n[e]);
      }
      function ql(n) {
        return this.__data__.set(n, k), this;
      }
      function Kl(n) {
        return this.__data__.has(n);
      }
      ke.prototype.add = ke.prototype.push = ql, ke.prototype.has = Kl;
      function te(n) {
        var e = this.__data__ = new xe(n);
        this.size = e.size;
      }
      function zl() {
        this.__data__ = new xe(), this.size = 0;
      }
      function Xl(n) {
        var e = this.__data__, r = e.delete(n);
        return this.size = e.size, r;
      }
      function Zl(n) {
        return this.__data__.get(n);
      }
      function Jl(n) {
        return this.__data__.has(n);
      }
      function Ql(n, e) {
        var r = this.__data__;
        if (r instanceof xe) {
          var t = r.__data__;
          if (!Gr || t.length < Bn - 1)
            return t.push([n, e]), this.size = ++r.size, this;
          r = this.__data__ = new Ee(t);
        }
        return r.set(n, e), this.size = r.size, this;
      }
      te.prototype.clear = zl, te.prototype.delete = Xl, te.prototype.get = Zl, te.prototype.has = Jl, te.prototype.set = Ql;
      function Ef(n, e) {
        var r = b(n), t = !r && tr(n), i = !r && !t && He(n), f = !r && !t && !i && Tr(n), o = r || t || i || f, s = o ? Oi(n.length, fl) : [], h = s.length;
        for (var _ in n)
          (e || H.call(n, _)) && !(o && // Safari 9 has enumerable `arguments.length` in strict mode.
          (_ == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
          i && (_ == "offset" || _ == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
          f && (_ == "buffer" || _ == "byteLength" || _ == "byteOffset") || // Skip index properties.
          Ae(_, h))) && s.push(_);
        return s;
      }
      function Rf(n) {
        var e = n.length;
        return e ? n[zi(0, e - 1)] : a;
      }
      function Vl(n, e) {
        return Qt(yn(n), je(e, 0, n.length));
      }
      function kl(n) {
        return Qt(yn(n));
      }
      function Mi(n, e, r) {
        (r !== a && !ie(n[e], r) || r === a && !(e in n)) && Re(n, e, r);
      }
      function Kr(n, e, r) {
        var t = n[e];
        (!(H.call(n, e) && ie(t, r)) || r === a && !(e in n)) && Re(n, e, r);
      }
      function Bt(n, e) {
        for (var r = n.length; r--; )
          if (ie(n[r][0], e))
            return r;
        return -1;
      }
      function jl(n, e, r, t) {
        return Ue(n, function(i, f, o) {
          e(t, i, r(i), o);
        }), t;
      }
      function mf(n, e) {
        return n && ge(e, sn(e), n);
      }
      function ns(n, e) {
        return n && ge(e, Tn(e), n);
      }
      function Re(n, e, r) {
        e == "__proto__" && Lt ? Lt(n, e, {
          configurable: !0,
          enumerable: !0,
          value: r,
          writable: !0
        }) : n[e] = r;
      }
      function Bi(n, e) {
        for (var r = -1, t = e.length, i = g(t), f = n == null; ++r < t; )
          i[r] = f ? a : du(n, e[r]);
        return i;
      }
      function je(n, e, r) {
        return n === n && (r !== a && (n = n <= r ? n : r), e !== a && (n = n >= e ? n : e)), n;
      }
      function Kn(n, e, r, t, i, f) {
        var o, s = e & nn, h = e & pn, _ = e & F;
        if (r && (o = i ? r(n, t, i, f) : r(n)), o !== a)
          return o;
        if (!Z(n))
          return n;
        var v = b(n);
        if (v) {
          if (o = Hs(n), !s)
            return yn(n, o);
        } else {
          var d = vn(n), E = d == ze || d == lt;
          if (He(n))
            return zf(n, s);
          if (d == $n || d == Ie || E && !i) {
            if (o = h || E ? {} : co(n), !s)
              return h ? Ls(n, ns(o, n)) : Is(n, mf(o, n));
          } else {
            if (!q[d])
              return i ? n : {};
            o = Ys(n, d, s);
          }
        }
        f || (f = new te());
        var m = f.get(n);
        if (m)
          return m;
        f.set(n, o), Go(n) ? n.forEach(function(T) {
          o.add(Kn(T, e, r, T, n, f));
        }) : No(n) && n.forEach(function(T, W) {
          o.set(W, Kn(T, e, r, W, n, f));
        });
        var A = _ ? h ? tu : ru : h ? Tn : sn, I = v ? a : A(n);
        return Hn(I || n, function(T, W) {
          I && (W = T, T = n[W]), Kr(o, W, Kn(T, e, r, W, n, f));
        }), o;
      }
      function es(n) {
        var e = sn(n);
        return function(r) {
          return yf(r, n, e);
        };
      }
      function yf(n, e, r) {
        var t = r.length;
        if (n == null)
          return !t;
        for (n = Y(n); t--; ) {
          var i = r[t], f = e[i], o = n[i];
          if (o === a && !(i in n) || !f(o))
            return !1;
        }
        return !0;
      }
      function Af(n, e, r) {
        if (typeof n != "function")
          throw new Yn(on);
        return kr(function() {
          n.apply(a, r);
        }, e);
      }
      function zr(n, e, r, t) {
        var i = -1, f = Et, o = !0, s = n.length, h = [], _ = e.length;
        if (!s)
          return h;
        r && (e = z(e, Pn(r))), t ? (f = yi, o = !1) : e.length >= Bn && (f = Nr, o = !1, e = new ke(e));
        n:
          for (; ++i < s; ) {
            var v = n[i], d = r == null ? v : r(v);
            if (v = t || v !== 0 ? v : 0, o && d === d) {
              for (var E = _; E--; )
                if (e[E] === d)
                  continue n;
              h.push(v);
            } else
              f(e, d, t) || h.push(v);
          }
        return h;
      }
      var Ue = Vf(he), Tf = Vf(Ni, !0);
      function rs(n, e) {
        var r = !0;
        return Ue(n, function(t, i, f) {
          return r = !!e(t, i, f), r;
        }), r;
      }
      function Ut(n, e, r) {
        for (var t = -1, i = n.length; ++t < i; ) {
          var f = n[t], o = e(f);
          if (o != null && (s === a ? o === o && !Fn(o) : r(o, s)))
            var s = o, h = f;
        }
        return h;
      }
      function ts(n, e, r, t) {
        var i = n.length;
        for (r = O(r), r < 0 && (r = -r > i ? 0 : i + r), t = t === a || t > i ? i : O(t), t < 0 && (t += i), t = r > t ? 0 : Yo(t); r < t; )
          n[r++] = e;
        return n;
      }
      function Sf(n, e) {
        var r = [];
        return Ue(n, function(t, i, f) {
          e(t, i, f) && r.push(t);
        }), r;
      }
      function gn(n, e, r, t, i) {
        var f = -1, o = n.length;
        for (r || (r = Ks), i || (i = []); ++f < o; ) {
          var s = n[f];
          e > 0 && r(s) ? e > 1 ? gn(s, e - 1, r, t, i) : De(i, s) : t || (i[i.length] = s);
        }
        return i;
      }
      var Ui = kf(), Cf = kf(!0);
      function he(n, e) {
        return n && Ui(n, e, sn);
      }
      function Ni(n, e) {
        return n && Cf(n, e, sn);
      }
      function Nt(n, e) {
        return Fe(e, function(r) {
          return Te(n[r]);
        });
      }
      function nr(n, e) {
        e = $e(e, n);
        for (var r = 0, t = e.length; n != null && r < t; )
          n = n[pe(e[r++])];
        return r && r == t ? n : a;
      }
      function bf(n, e, r) {
        var t = e(n);
        return b(n) ? t : De(t, r(n));
      }
      function dn(n) {
        return n == null ? n === a ? li : or : Qe && Qe in Y(n) ? Ns(n) : ks(n);
      }
      function $i(n, e) {
        return n > e;
      }
      function is(n, e) {
        return n != null && H.call(n, e);
      }
      function us(n, e) {
        return n != null && e in Y(n);
      }
      function fs(n, e, r) {
        return n >= _n(e, r) && n < ln(e, r);
      }
      function Gi(n, e, r) {
        for (var t = r ? yi : Et, i = n[0].length, f = n.length, o = f, s = g(f), h = 1 / 0, _ = []; o--; ) {
          var v = n[o];
          o && e && (v = z(v, Pn(e))), h = _n(v.length, h), s[o] = !r && (e || i >= 120 && v.length >= 120) ? new ke(o && v) : a;
        }
        v = n[0];
        var d = -1, E = s[0];
        n:
          for (; ++d < i && _.length < h; ) {
            var m = v[d], A = e ? e(m) : m;
            if (m = r || m !== 0 ? m : 0, !(E ? Nr(E, A) : t(_, A, r))) {
              for (o = f; --o; ) {
                var I = s[o];
                if (!(I ? Nr(I, A) : t(n[o], A, r)))
                  continue n;
              }
              E && E.push(A), _.push(m);
            }
          }
        return _;
      }
      function os(n, e, r, t) {
        return he(n, function(i, f, o) {
          e(t, r(i), f, o);
        }), t;
      }
      function Xr(n, e, r) {
        e = $e(e, n), n = _o(n, e);
        var t = n == null ? n : n[pe(Xn(e))];
        return t == null ? a : Ln(t, n, r);
      }
      function Of(n) {
        return V(n) && dn(n) == Ie;
      }
      function as(n) {
        return V(n) && dn(n) == ne;
      }
      function ls(n) {
        return V(n) && dn(n) == ve;
      }
      function Zr(n, e, r, t, i) {
        return n === e ? !0 : n == null || e == null || !V(n) && !V(e) ? n !== n && e !== e : ss(n, e, r, t, Zr, i);
      }
      function ss(n, e, r, t, i, f) {
        var o = b(n), s = b(e), h = o ? Le : vn(n), _ = s ? Le : vn(e);
        h = h == Ie ? $n : h, _ = _ == Ie ? $n : _;
        var v = h == $n, d = _ == $n, E = h == _;
        if (E && He(n)) {
          if (!He(e))
            return !1;
          o = !0, v = !1;
        }
        if (E && !v)
          return f || (f = new te()), o || Tr(n) ? ao(n, e, r, t, i, f) : Bs(n, e, h, r, t, i, f);
        if (!(r & J)) {
          var m = v && H.call(n, "__wrapped__"), A = d && H.call(e, "__wrapped__");
          if (m || A) {
            var I = m ? n.value() : n, T = A ? e.value() : e;
            return f || (f = new te()), i(I, T, r, t, f);
          }
        }
        return E ? (f || (f = new te()), Us(n, e, r, t, i, f)) : !1;
      }
      function cs(n) {
        return V(n) && vn(n) == On;
      }
      function Hi(n, e, r, t) {
        var i = r.length, f = i, o = !t;
        if (n == null)
          return !f;
        for (n = Y(n); i--; ) {
          var s = r[i];
          if (o && s[2] ? s[1] !== n[s[0]] : !(s[0] in n))
            return !1;
        }
        for (; ++i < f; ) {
          s = r[i];
          var h = s[0], _ = n[h], v = s[1];
          if (o && s[2]) {
            if (_ === a && !(h in n))
              return !1;
          } else {
            var d = new te();
            if (t)
              var E = t(_, v, h, n, e, d);
            if (!(E === a ? Zr(v, _, J | Cn, t, d) : E))
              return !1;
          }
        }
        return !0;
      }
      function If(n) {
        if (!Z(n) || Xs(n))
          return !1;
        var e = Te(n) ? cl : cn;
        return e.test(rr(n));
      }
      function hs(n) {
        return V(n) && dn(n) == Xe;
      }
      function gs(n) {
        return V(n) && vn(n) == In;
      }
      function ps(n) {
        return V(n) && ri(n.length) && !!K[dn(n)];
      }
      function Lf(n) {
        return typeof n == "function" ? n : n == null ? Sn : typeof n == "object" ? b(n) ? Ff(n[0], n[1]) : Wf(n) : na(n);
      }
      function Yi(n) {
        if (!Vr(n))
          return dl(n);
        var e = [];
        for (var r in Y(n))
          H.call(n, r) && r != "constructor" && e.push(r);
        return e;
      }
      function _s(n) {
        if (!Z(n))
          return Vs(n);
        var e = Vr(n), r = [];
        for (var t in n)
          t == "constructor" && (e || !H.call(n, t)) || r.push(t);
        return r;
      }
      function qi(n, e) {
        return n < e;
      }
      function Pf(n, e) {
        var r = -1, t = An(n) ? g(n.length) : [];
        return Ue(n, function(i, f, o) {
          t[++r] = e(i, f, o);
        }), t;
      }
      function Wf(n) {
        var e = uu(n);
        return e.length == 1 && e[0][2] ? go(e[0][0], e[0][1]) : function(r) {
          return r === n || Hi(r, n, e);
        };
      }
      function Ff(n, e) {
        return ou(n) && ho(e) ? go(pe(n), e) : function(r) {
          var t = du(r, n);
          return t === a && t === e ? wu(r, n) : Zr(e, t, J | Cn);
        };
      }
      function $t(n, e, r, t, i) {
        n !== e && Ui(e, function(f, o) {
          if (i || (i = new te()), Z(f))
            vs(n, e, o, r, $t, t, i);
          else {
            var s = t ? t(lu(n, o), f, o + "", n, e, i) : a;
            s === a && (s = f), Mi(n, o, s);
          }
        }, Tn);
      }
      function vs(n, e, r, t, i, f, o) {
        var s = lu(n, r), h = lu(e, r), _ = o.get(h);
        if (_) {
          Mi(n, r, _);
          return;
        }
        var v = f ? f(s, h, r + "", n, e, o) : a, d = v === a;
        if (d) {
          var E = b(h), m = !E && He(h), A = !E && !m && Tr(h);
          v = h, E || m || A ? b(s) ? v = s : un(s) ? v = yn(s) : m ? (d = !1, v = zf(h, !0)) : A ? (d = !1, v = Xf(h, !0)) : v = [] : jr(h) || tr(h) ? (v = s, tr(s) ? v = qo(s) : (!Z(s) || Te(s)) && (v = co(h))) : d = !1;
        }
        d && (o.set(h, v), i(v, h, t, f, o), o.delete(h)), Mi(n, r, v);
      }
      function Df(n, e) {
        var r = n.length;
        if (r)
          return e += e < 0 ? r : 0, Ae(e, r) ? n[e] : a;
      }
      function Mf(n, e, r) {
        e.length ? e = z(e, function(f) {
          return b(f) ? function(o) {
            return nr(o, f.length === 1 ? f[0] : f);
          } : f;
        }) : e = [Sn];
        var t = -1;
        e = z(e, Pn(y()));
        var i = Pf(n, function(f, o, s) {
          var h = z(e, function(_) {
            return _(f);
          });
          return { criteria: h, index: ++t, value: f };
        });
        return Ya(i, function(f, o) {
          return Os(f, o, r);
        });
      }
      function ds(n, e) {
        return Bf(n, e, function(r, t) {
          return wu(n, t);
        });
      }
      function Bf(n, e, r) {
        for (var t = -1, i = e.length, f = {}; ++t < i; ) {
          var o = e[t], s = nr(n, o);
          r(s, o) && Jr(f, $e(o, n), s);
        }
        return f;
      }
      function ws(n) {
        return function(e) {
          return nr(e, n);
        };
      }
      function Ki(n, e, r, t) {
        var i = t ? Ha : pr, f = -1, o = e.length, s = n;
        for (n === e && (e = yn(e)), r && (s = z(n, Pn(r))); ++f < o; )
          for (var h = 0, _ = e[f], v = r ? r(_) : _; (h = i(s, v, h, t)) > -1; )
            s !== n && It.call(s, h, 1), It.call(n, h, 1);
        return n;
      }
      function Uf(n, e) {
        for (var r = n ? e.length : 0, t = r - 1; r--; ) {
          var i = e[r];
          if (r == t || i !== f) {
            var f = i;
            Ae(i) ? It.call(n, i, 1) : Ji(n, i);
          }
        }
        return n;
      }
      function zi(n, e) {
        return n + Wt(wf() * (e - n + 1));
      }
      function xs(n, e, r, t) {
        for (var i = -1, f = ln(Pt((e - n) / (r || 1)), 0), o = g(f); f--; )
          o[t ? f : ++i] = n, n += r;
        return o;
      }
      function Xi(n, e) {
        var r = "";
        if (!n || e < 1 || e > jn)
          return r;
        do
          e % 2 && (r += n), e = Wt(e / 2), e && (n += n);
        while (e);
        return r;
      }
      function L(n, e) {
        return su(po(n, e, Sn), n + "");
      }
      function Es(n) {
        return Rf(Sr(n));
      }
      function Rs(n, e) {
        var r = Sr(n);
        return Qt(r, je(e, 0, r.length));
      }
      function Jr(n, e, r, t) {
        if (!Z(n))
          return n;
        e = $e(e, n);
        for (var i = -1, f = e.length, o = f - 1, s = n; s != null && ++i < f; ) {
          var h = pe(e[i]), _ = r;
          if (h === "__proto__" || h === "constructor" || h === "prototype")
            return n;
          if (i != o) {
            var v = s[h];
            _ = t ? t(v, h, s) : a, _ === a && (_ = Z(v) ? v : Ae(e[i + 1]) ? [] : {});
          }
          Kr(s, h, _), s = s[h];
        }
        return n;
      }
      var Nf = Ft ? function(n, e) {
        return Ft.set(n, e), n;
      } : Sn, ms = Lt ? function(n, e) {
        return Lt(n, "toString", {
          configurable: !0,
          enumerable: !1,
          value: Eu(e),
          writable: !0
        });
      } : Sn;
      function ys(n) {
        return Qt(Sr(n));
      }
      function zn(n, e, r) {
        var t = -1, i = n.length;
        e < 0 && (e = -e > i ? 0 : i + e), r = r > i ? i : r, r < 0 && (r += i), i = e > r ? 0 : r - e >>> 0, e >>>= 0;
        for (var f = g(i); ++t < i; )
          f[t] = n[t + e];
        return f;
      }
      function As(n, e) {
        var r;
        return Ue(n, function(t, i, f) {
          return r = e(t, i, f), !r;
        }), !!r;
      }
      function Gt(n, e, r) {
        var t = 0, i = n == null ? t : n.length;
        if (typeof e == "number" && e === e && i <= at) {
          for (; t < i; ) {
            var f = t + i >>> 1, o = n[f];
            o !== null && !Fn(o) && (r ? o <= e : o < e) ? t = f + 1 : i = f;
          }
          return i;
        }
        return Zi(n, e, Sn, r);
      }
      function Zi(n, e, r, t) {
        var i = 0, f = n == null ? 0 : n.length;
        if (f === 0)
          return 0;
        e = r(e);
        for (var o = e !== e, s = e === null, h = Fn(e), _ = e === a; i < f; ) {
          var v = Wt((i + f) / 2), d = r(n[v]), E = d !== a, m = d === null, A = d === d, I = Fn(d);
          if (o)
            var T = t || A;
          else
            _ ? T = A && (t || E) : s ? T = A && E && (t || !m) : h ? T = A && E && !m && (t || !I) : m || I ? T = !1 : T = t ? d <= e : d < e;
          T ? i = v + 1 : f = v;
        }
        return _n(f, ot);
      }
      function $f(n, e) {
        for (var r = -1, t = n.length, i = 0, f = []; ++r < t; ) {
          var o = n[r], s = e ? e(o) : o;
          if (!r || !ie(s, h)) {
            var h = s;
            f[i++] = o === 0 ? 0 : o;
          }
        }
        return f;
      }
      function Gf(n) {
        return typeof n == "number" ? n : Fn(n) ? Ke : +n;
      }
      function Wn(n) {
        if (typeof n == "string")
          return n;
        if (b(n))
          return z(n, Wn) + "";
        if (Fn(n))
          return xf ? xf.call(n) : "";
        var e = n + "";
        return e == "0" && 1 / n == -le ? "-0" : e;
      }
      function Ne(n, e, r) {
        var t = -1, i = Et, f = n.length, o = !0, s = [], h = s;
        if (r)
          o = !1, i = yi;
        else if (f >= Bn) {
          var _ = e ? null : Ds(n);
          if (_)
            return mt(_);
          o = !1, i = Nr, h = new ke();
        } else
          h = e ? [] : s;
        n:
          for (; ++t < f; ) {
            var v = n[t], d = e ? e(v) : v;
            if (v = r || v !== 0 ? v : 0, o && d === d) {
              for (var E = h.length; E--; )
                if (h[E] === d)
                  continue n;
              e && h.push(d), s.push(v);
            } else
              i(h, d, r) || (h !== s && h.push(d), s.push(v));
          }
        return s;
      }
      function Ji(n, e) {
        return e = $e(e, n), n = _o(n, e), n == null || delete n[pe(Xn(e))];
      }
      function Hf(n, e, r, t) {
        return Jr(n, e, r(nr(n, e)), t);
      }
      function Ht(n, e, r, t) {
        for (var i = n.length, f = t ? i : -1; (t ? f-- : ++f < i) && e(n[f], f, n); )
          ;
        return r ? zn(n, t ? 0 : f, t ? f + 1 : i) : zn(n, t ? f + 1 : 0, t ? i : f);
      }
      function Yf(n, e) {
        var r = n;
        return r instanceof M && (r = r.value()), Ai(e, function(t, i) {
          return i.func.apply(i.thisArg, De([t], i.args));
        }, r);
      }
      function Qi(n, e, r) {
        var t = n.length;
        if (t < 2)
          return t ? Ne(n[0]) : [];
        for (var i = -1, f = g(t); ++i < t; )
          for (var o = n[i], s = -1; ++s < t; )
            s != i && (f[i] = zr(f[i] || o, n[s], e, r));
        return Ne(gn(f, 1), e, r);
      }
      function qf(n, e, r) {
        for (var t = -1, i = n.length, f = e.length, o = {}; ++t < i; ) {
          var s = t < f ? e[t] : a;
          r(o, n[t], s);
        }
        return o;
      }
      function Vi(n) {
        return un(n) ? n : [];
      }
      function ki(n) {
        return typeof n == "function" ? n : Sn;
      }
      function $e(n, e) {
        return b(n) ? n : ou(n, e) ? [n] : Eo(G(n));
      }
      var Ts = L;
      function Ge(n, e, r) {
        var t = n.length;
        return r = r === a ? t : r, !e && r >= t ? n : zn(n, e, r);
      }
      var Kf = hl || function(n) {
        return hn.clearTimeout(n);
      };
      function zf(n, e) {
        if (e)
          return n.slice();
        var r = n.length, t = gf ? gf(r) : new n.constructor(r);
        return n.copy(t), t;
      }
      function ji(n) {
        var e = new n.constructor(n.byteLength);
        return new bt(e).set(new bt(n)), e;
      }
      function Ss(n, e) {
        var r = e ? ji(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.byteLength);
      }
      function Cs(n) {
        var e = new n.constructor(n.source, $.exec(n));
        return e.lastIndex = n.lastIndex, e;
      }
      function bs(n) {
        return qr ? Y(qr.call(n)) : {};
      }
      function Xf(n, e) {
        var r = e ? ji(n.buffer) : n.buffer;
        return new n.constructor(r, n.byteOffset, n.length);
      }
      function Zf(n, e) {
        if (n !== e) {
          var r = n !== a, t = n === null, i = n === n, f = Fn(n), o = e !== a, s = e === null, h = e === e, _ = Fn(e);
          if (!s && !_ && !f && n > e || f && o && h && !s && !_ || t && o && h || !r && h || !i)
            return 1;
          if (!t && !f && !_ && n < e || _ && r && i && !t && !f || s && r && i || !o && i || !h)
            return -1;
        }
        return 0;
      }
      function Os(n, e, r) {
        for (var t = -1, i = n.criteria, f = e.criteria, o = i.length, s = r.length; ++t < o; ) {
          var h = Zf(i[t], f[t]);
          if (h) {
            if (t >= s)
              return h;
            var _ = r[t];
            return h * (_ == "desc" ? -1 : 1);
          }
        }
        return n.index - e.index;
      }
      function Jf(n, e, r, t) {
        for (var i = -1, f = n.length, o = r.length, s = -1, h = e.length, _ = ln(f - o, 0), v = g(h + _), d = !t; ++s < h; )
          v[s] = e[s];
        for (; ++i < o; )
          (d || i < f) && (v[r[i]] = n[i]);
        for (; _--; )
          v[s++] = n[i++];
        return v;
      }
      function Qf(n, e, r, t) {
        for (var i = -1, f = n.length, o = -1, s = r.length, h = -1, _ = e.length, v = ln(f - s, 0), d = g(v + _), E = !t; ++i < v; )
          d[i] = n[i];
        for (var m = i; ++h < _; )
          d[m + h] = e[h];
        for (; ++o < s; )
          (E || i < f) && (d[m + r[o]] = n[i++]);
        return d;
      }
      function yn(n, e) {
        var r = -1, t = n.length;
        for (e || (e = g(t)); ++r < t; )
          e[r] = n[r];
        return e;
      }
      function ge(n, e, r, t) {
        var i = !r;
        r || (r = {});
        for (var f = -1, o = e.length; ++f < o; ) {
          var s = e[f], h = t ? t(r[s], n[s], s, r, n) : a;
          h === a && (h = n[s]), i ? Re(r, s, h) : Kr(r, s, h);
        }
        return r;
      }
      function Is(n, e) {
        return ge(n, fu(n), e);
      }
      function Ls(n, e) {
        return ge(n, lo(n), e);
      }
      function Yt(n, e) {
        return function(r, t) {
          var i = b(r) ? Ma : jl, f = e ? e() : {};
          return i(r, n, y(t, 2), f);
        };
      }
      function mr(n) {
        return L(function(e, r) {
          var t = -1, i = r.length, f = i > 1 ? r[i - 1] : a, o = i > 2 ? r[2] : a;
          for (f = n.length > 3 && typeof f == "function" ? (i--, f) : a, o && wn(r[0], r[1], o) && (f = i < 3 ? a : f, i = 1), e = Y(e); ++t < i; ) {
            var s = r[t];
            s && n(e, s, t, f);
          }
          return e;
        });
      }
      function Vf(n, e) {
        return function(r, t) {
          if (r == null)
            return r;
          if (!An(r))
            return n(r, t);
          for (var i = r.length, f = e ? i : -1, o = Y(r); (e ? f-- : ++f < i) && t(o[f], f, o) !== !1; )
            ;
          return r;
        };
      }
      function kf(n) {
        return function(e, r, t) {
          for (var i = -1, f = Y(e), o = t(e), s = o.length; s--; ) {
            var h = o[n ? s : ++i];
            if (r(f[h], h, f) === !1)
              break;
          }
          return e;
        };
      }
      function Ps(n, e, r) {
        var t = e & en, i = Qr(n);
        function f() {
          var o = this && this !== hn && this instanceof f ? i : n;
          return o.apply(t ? r : this, arguments);
        }
        return f;
      }
      function jf(n) {
        return function(e) {
          e = G(e);
          var r = _r(e) ? re(e) : a, t = r ? r[0] : e.charAt(0), i = r ? Ge(r, 1).join("") : e.slice(1);
          return t[n]() + i;
        };
      }
      function yr(n) {
        return function(e) {
          return Ai(ko(Vo(e).replace(ma, "")), n, "");
        };
      }
      function Qr(n) {
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return new n();
            case 1:
              return new n(e[0]);
            case 2:
              return new n(e[0], e[1]);
            case 3:
              return new n(e[0], e[1], e[2]);
            case 4:
              return new n(e[0], e[1], e[2], e[3]);
            case 5:
              return new n(e[0], e[1], e[2], e[3], e[4]);
            case 6:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5]);
            case 7:
              return new n(e[0], e[1], e[2], e[3], e[4], e[5], e[6]);
          }
          var r = Rr(n.prototype), t = n.apply(r, e);
          return Z(t) ? t : r;
        };
      }
      function Ws(n, e, r) {
        var t = Qr(n);
        function i() {
          for (var f = arguments.length, o = g(f), s = f, h = Ar(i); s--; )
            o[s] = arguments[s];
          var _ = f < 3 && o[0] !== h && o[f - 1] !== h ? [] : Me(o, h);
          if (f -= _.length, f < r)
            return io(
              n,
              e,
              qt,
              i.placeholder,
              a,
              o,
              _,
              a,
              a,
              r - f
            );
          var v = this && this !== hn && this instanceof i ? t : n;
          return Ln(v, this, o);
        }
        return i;
      }
      function no(n) {
        return function(e, r, t) {
          var i = Y(e);
          if (!An(e)) {
            var f = y(r, 3);
            e = sn(e), r = function(s) {
              return f(i[s], s, i);
            };
          }
          var o = n(e, r, t);
          return o > -1 ? i[f ? e[o] : o] : a;
        };
      }
      function eo(n) {
        return ye(function(e) {
          var r = e.length, t = r, i = qn.prototype.thru;
          for (n && e.reverse(); t--; ) {
            var f = e[t];
            if (typeof f != "function")
              throw new Yn(on);
            if (i && !o && Zt(f) == "wrapper")
              var o = new qn([], !0);
          }
          for (t = o ? t : r; ++t < r; ) {
            f = e[t];
            var s = Zt(f), h = s == "wrapper" ? iu(f) : a;
            h && au(h[0]) && h[1] == (Vn | En | Nn | Ye) && !h[4].length && h[9] == 1 ? o = o[Zt(h[0])].apply(o, h[3]) : o = f.length == 1 && au(f) ? o[s]() : o.thru(f);
          }
          return function() {
            var _ = arguments, v = _[0];
            if (o && _.length == 1 && b(v))
              return o.plant(v).value();
            for (var d = 0, E = r ? e[d].apply(this, _) : v; ++d < r; )
              E = e[d].call(this, E);
            return E;
          };
        });
      }
      function qt(n, e, r, t, i, f, o, s, h, _) {
        var v = e & Vn, d = e & en, E = e & rn, m = e & (En | be), A = e & ir, I = E ? a : Qr(n);
        function T() {
          for (var W = arguments.length, B = g(W), Dn = W; Dn--; )
            B[Dn] = arguments[Dn];
          if (m)
            var xn = Ar(T), Mn = Ka(B, xn);
          if (t && (B = Jf(B, t, i, m)), f && (B = Qf(B, f, o, m)), W -= Mn, m && W < _) {
            var fn = Me(B, xn);
            return io(
              n,
              e,
              qt,
              T.placeholder,
              r,
              B,
              fn,
              s,
              h,
              _ - W
            );
          }
          var ue = d ? r : this, Ce = E ? ue[n] : n;
          return W = B.length, s ? B = js(B, s) : A && W > 1 && B.reverse(), v && h < W && (B.length = h), this && this !== hn && this instanceof T && (Ce = I || Qr(Ce)), Ce.apply(ue, B);
        }
        return T;
      }
      function ro(n, e) {
        return function(r, t) {
          return os(r, n, e(t), {});
        };
      }
      function Kt(n, e) {
        return function(r, t) {
          var i;
          if (r === a && t === a)
            return e;
          if (r !== a && (i = r), t !== a) {
            if (i === a)
              return t;
            typeof r == "string" || typeof t == "string" ? (r = Wn(r), t = Wn(t)) : (r = Gf(r), t = Gf(t)), i = n(r, t);
          }
          return i;
        };
      }
      function nu(n) {
        return ye(function(e) {
          return e = z(e, Pn(y())), L(function(r) {
            var t = this;
            return n(e, function(i) {
              return Ln(i, t, r);
            });
          });
        });
      }
      function zt(n, e) {
        e = e === a ? " " : Wn(e);
        var r = e.length;
        if (r < 2)
          return r ? Xi(e, n) : e;
        var t = Xi(e, Pt(n / vr(e)));
        return _r(e) ? Ge(re(t), 0, n).join("") : t.slice(0, n);
      }
      function Fs(n, e, r, t) {
        var i = e & en, f = Qr(n);
        function o() {
          for (var s = -1, h = arguments.length, _ = -1, v = t.length, d = g(v + h), E = this && this !== hn && this instanceof o ? f : n; ++_ < v; )
            d[_] = t[_];
          for (; h--; )
            d[_++] = arguments[++s];
          return Ln(E, i ? r : this, d);
        }
        return o;
      }
      function to(n) {
        return function(e, r, t) {
          return t && typeof t != "number" && wn(e, r, t) && (r = t = a), e = Se(e), r === a ? (r = e, e = 0) : r = Se(r), t = t === a ? e < r ? 1 : -1 : Se(t), xs(e, r, t, n);
        };
      }
      function Xt(n) {
        return function(e, r) {
          return typeof e == "string" && typeof r == "string" || (e = Zn(e), r = Zn(r)), n(e, r);
        };
      }
      function io(n, e, r, t, i, f, o, s, h, _) {
        var v = e & En, d = v ? o : a, E = v ? a : o, m = v ? f : a, A = v ? a : f;
        e |= v ? Nn : Oe, e &= ~(v ? Oe : Nn), e & tn || (e &= ~(en | rn));
        var I = [
          n,
          e,
          i,
          m,
          d,
          A,
          E,
          s,
          h,
          _
        ], T = r.apply(a, I);
        return au(n) && vo(T, I), T.placeholder = t, wo(T, n, e);
      }
      function eu(n) {
        var e = an[n];
        return function(r, t) {
          if (r = Zn(r), t = t == null ? 0 : _n(O(t), 292), t && df(r)) {
            var i = (G(r) + "e").split("e"), f = e(i[0] + "e" + (+i[1] + t));
            return i = (G(f) + "e").split("e"), +(i[0] + "e" + (+i[1] - t));
          }
          return e(r);
        };
      }
      var Ds = xr && 1 / mt(new xr([, -0]))[1] == le ? function(n) {
        return new xr(n);
      } : yu;
      function uo(n) {
        return function(e) {
          var r = vn(e);
          return r == On ? Li(e) : r == In ? ka(e) : qa(e, n(e));
        };
      }
      function me(n, e, r, t, i, f, o, s) {
        var h = e & rn;
        if (!h && typeof n != "function")
          throw new Yn(on);
        var _ = t ? t.length : 0;
        if (_ || (e &= ~(Nn | Oe), t = i = a), o = o === a ? o : ln(O(o), 0), s = s === a ? s : O(s), _ -= i ? i.length : 0, e & Oe) {
          var v = t, d = i;
          t = i = a;
        }
        var E = h ? a : iu(n), m = [
          n,
          e,
          r,
          t,
          i,
          v,
          d,
          f,
          o,
          s
        ];
        if (E && Qs(m, E), n = m[0], e = m[1], r = m[2], t = m[3], i = m[4], s = m[9] = m[9] === a ? h ? 0 : n.length : ln(m[9] - _, 0), !s && e & (En | be) && (e &= ~(En | be)), !e || e == en)
          var A = Ps(n, e, r);
        else
          e == En || e == be ? A = Ws(n, e, s) : (e == Nn || e == (en | Nn)) && !i.length ? A = Fs(n, e, r, t) : A = qt.apply(a, m);
        var I = E ? Nf : vo;
        return wo(I(A, m), n, e);
      }
      function fo(n, e, r, t) {
        return n === a || ie(n, wr[r]) && !H.call(t, r) ? e : n;
      }
      function oo(n, e, r, t, i, f) {
        return Z(n) && Z(e) && (f.set(e, n), $t(n, e, a, oo, f), f.delete(e)), n;
      }
      function Ms(n) {
        return jr(n) ? a : n;
      }
      function ao(n, e, r, t, i, f) {
        var o = r & J, s = n.length, h = e.length;
        if (s != h && !(o && h > s))
          return !1;
        var _ = f.get(n), v = f.get(e);
        if (_ && v)
          return _ == e && v == n;
        var d = -1, E = !0, m = r & Cn ? new ke() : a;
        for (f.set(n, e), f.set(e, n); ++d < s; ) {
          var A = n[d], I = e[d];
          if (t)
            var T = o ? t(I, A, d, e, n, f) : t(A, I, d, n, e, f);
          if (T !== a) {
            if (T)
              continue;
            E = !1;
            break;
          }
          if (m) {
            if (!Ti(e, function(W, B) {
              if (!Nr(m, B) && (A === W || i(A, W, r, t, f)))
                return m.push(B);
            })) {
              E = !1;
              break;
            }
          } else if (!(A === I || i(A, I, r, t, f))) {
            E = !1;
            break;
          }
        }
        return f.delete(n), f.delete(e), E;
      }
      function Bs(n, e, r, t, i, f, o) {
        switch (r) {
          case We:
            if (n.byteLength != e.byteLength || n.byteOffset != e.byteOffset)
              return !1;
            n = n.buffer, e = e.buffer;
          case ne:
            return !(n.byteLength != e.byteLength || !f(new bt(n), new bt(e)));
          case se:
          case ve:
          case ce:
            return ie(+n, +e);
          case fr:
            return n.name == e.name && n.message == e.message;
          case Xe:
          case de:
            return n == e + "";
          case On:
            var s = Li;
          case In:
            var h = t & J;
            if (s || (s = mt), n.size != e.size && !h)
              return !1;
            var _ = o.get(n);
            if (_)
              return _ == e;
            t |= Cn, o.set(n, e);
            var v = ao(s(n), s(e), t, i, f, o);
            return o.delete(n), v;
          case lr:
            if (qr)
              return qr.call(n) == qr.call(e);
        }
        return !1;
      }
      function Us(n, e, r, t, i, f) {
        var o = r & J, s = ru(n), h = s.length, _ = ru(e), v = _.length;
        if (h != v && !o)
          return !1;
        for (var d = h; d--; ) {
          var E = s[d];
          if (!(o ? E in e : H.call(e, E)))
            return !1;
        }
        var m = f.get(n), A = f.get(e);
        if (m && A)
          return m == e && A == n;
        var I = !0;
        f.set(n, e), f.set(e, n);
        for (var T = o; ++d < h; ) {
          E = s[d];
          var W = n[E], B = e[E];
          if (t)
            var Dn = o ? t(B, W, E, e, n, f) : t(W, B, E, n, e, f);
          if (!(Dn === a ? W === B || i(W, B, r, t, f) : Dn)) {
            I = !1;
            break;
          }
          T || (T = E == "constructor");
        }
        if (I && !T) {
          var xn = n.constructor, Mn = e.constructor;
          xn != Mn && "constructor" in n && "constructor" in e && !(typeof xn == "function" && xn instanceof xn && typeof Mn == "function" && Mn instanceof Mn) && (I = !1);
        }
        return f.delete(n), f.delete(e), I;
      }
      function ye(n) {
        return su(po(n, a, Ao), n + "");
      }
      function ru(n) {
        return bf(n, sn, fu);
      }
      function tu(n) {
        return bf(n, Tn, lo);
      }
      var iu = Ft ? function(n) {
        return Ft.get(n);
      } : yu;
      function Zt(n) {
        for (var e = n.name + "", r = Er[e], t = H.call(Er, e) ? r.length : 0; t--; ) {
          var i = r[t], f = i.func;
          if (f == null || f == n)
            return i.name;
        }
        return e;
      }
      function Ar(n) {
        var e = H.call(u, "placeholder") ? u : n;
        return e.placeholder;
      }
      function y() {
        var n = u.iteratee || Ru;
        return n = n === Ru ? Lf : n, arguments.length ? n(arguments[0], arguments[1]) : n;
      }
      function Jt(n, e) {
        var r = n.__data__;
        return zs(e) ? r[typeof e == "string" ? "string" : "hash"] : r.map;
      }
      function uu(n) {
        for (var e = sn(n), r = e.length; r--; ) {
          var t = e[r], i = n[t];
          e[r] = [t, i, ho(i)];
        }
        return e;
      }
      function er(n, e) {
        var r = Ja(n, e);
        return If(r) ? r : a;
      }
      function Ns(n) {
        var e = H.call(n, Qe), r = n[Qe];
        try {
          n[Qe] = a;
          var t = !0;
        } catch {
        }
        var i = St.call(n);
        return t && (e ? n[Qe] = r : delete n[Qe]), i;
      }
      var fu = Wi ? function(n) {
        return n == null ? [] : (n = Y(n), Fe(Wi(n), function(e) {
          return _f.call(n, e);
        }));
      } : Au, lo = Wi ? function(n) {
        for (var e = []; n; )
          De(e, fu(n)), n = Ot(n);
        return e;
      } : Au, vn = dn;
      (Fi && vn(new Fi(new ArrayBuffer(1))) != We || Gr && vn(new Gr()) != On || Di && vn(Di.resolve()) != br || xr && vn(new xr()) != In || Hr && vn(new Hr()) != Pe) && (vn = function(n) {
        var e = dn(n), r = e == $n ? n.constructor : a, t = r ? rr(r) : "";
        if (t)
          switch (t) {
            case Rl:
              return We;
            case ml:
              return On;
            case yl:
              return br;
            case Al:
              return In;
            case Tl:
              return Pe;
          }
        return e;
      });
      function $s(n, e, r) {
        for (var t = -1, i = r.length; ++t < i; ) {
          var f = r[t], o = f.size;
          switch (f.type) {
            case "drop":
              n += o;
              break;
            case "dropRight":
              e -= o;
              break;
            case "take":
              e = _n(e, n + o);
              break;
            case "takeRight":
              n = ln(n, e - o);
              break;
          }
        }
        return { start: n, end: e };
      }
      function Gs(n) {
        var e = n.match(_i);
        return e ? e[1].split(l) : [];
      }
      function so(n, e, r) {
        e = $e(e, n);
        for (var t = -1, i = e.length, f = !1; ++t < i; ) {
          var o = pe(e[t]);
          if (!(f = n != null && r(n, o)))
            break;
          n = n[o];
        }
        return f || ++t != i ? f : (i = n == null ? 0 : n.length, !!i && ri(i) && Ae(o, i) && (b(n) || tr(n)));
      }
      function Hs(n) {
        var e = n.length, r = new n.constructor(e);
        return e && typeof n[0] == "string" && H.call(n, "index") && (r.index = n.index, r.input = n.input), r;
      }
      function co(n) {
        return typeof n.constructor == "function" && !Vr(n) ? Rr(Ot(n)) : {};
      }
      function Ys(n, e, r) {
        var t = n.constructor;
        switch (e) {
          case ne:
            return ji(n);
          case se:
          case ve:
            return new t(+n);
          case We:
            return Ss(n, r);
          case sr:
          case cr:
          case Ze:
          case Or:
          case Ir:
          case Lr:
          case Pr:
          case Wr:
          case Fr:
            return Xf(n, r);
          case On:
            return new t();
          case ce:
          case de:
            return new t(n);
          case Xe:
            return Cs(n);
          case In:
            return new t();
          case lr:
            return bs(n);
        }
      }
      function qs(n, e) {
        var r = e.length;
        if (!r)
          return n;
        var t = r - 1;
        return e[t] = (r > 1 ? "& " : "") + e[t], e = e.join(r > 2 ? ", " : " "), n.replace(pi, `{
/* [wrapped with ` + e + `] */
`);
      }
      function Ks(n) {
        return b(n) || tr(n) || !!(vf && n && n[vf]);
      }
      function Ae(n, e) {
        var r = typeof n;
        return e = e ?? jn, !!e && (r == "number" || r != "symbol" && Q.test(n)) && n > -1 && n % 1 == 0 && n < e;
      }
      function wn(n, e, r) {
        if (!Z(r))
          return !1;
        var t = typeof e;
        return (t == "number" ? An(r) && Ae(e, r.length) : t == "string" && e in r) ? ie(r[e], n) : !1;
      }
      function ou(n, e) {
        if (b(n))
          return !1;
        var r = typeof n;
        return r == "number" || r == "symbol" || r == "boolean" || n == null || Fn(n) ? !0 : vt.test(n) || !_t.test(n) || e != null && n in Y(e);
      }
      function zs(n) {
        var e = typeof n;
        return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? n !== "__proto__" : n === null;
      }
      function au(n) {
        var e = Zt(n), r = u[e];
        if (typeof r != "function" || !(e in M.prototype))
          return !1;
        if (n === r)
          return !0;
        var t = iu(r);
        return !!t && n === t[0];
      }
      function Xs(n) {
        return !!hf && hf in n;
      }
      var Zs = At ? Te : Tu;
      function Vr(n) {
        var e = n && n.constructor, r = typeof e == "function" && e.prototype || wr;
        return n === r;
      }
      function ho(n) {
        return n === n && !Z(n);
      }
      function go(n, e) {
        return function(r) {
          return r == null ? !1 : r[n] === e && (e !== a || n in Y(r));
        };
      }
      function Js(n) {
        var e = ni(n, function(t) {
          return r.size === oe && r.clear(), t;
        }), r = e.cache;
        return e;
      }
      function Qs(n, e) {
        var r = n[1], t = e[1], i = r | t, f = i < (en | rn | Vn), o = t == Vn && r == En || t == Vn && r == Ye && n[7].length <= e[8] || t == (Vn | Ye) && e[7].length <= e[8] && r == En;
        if (!(f || o))
          return n;
        t & en && (n[2] = e[2], i |= r & en ? 0 : tn);
        var s = e[3];
        if (s) {
          var h = n[3];
          n[3] = h ? Jf(h, s, e[4]) : s, n[4] = h ? Me(n[3], j) : e[4];
        }
        return s = e[5], s && (h = n[5], n[5] = h ? Qf(h, s, e[6]) : s, n[6] = h ? Me(n[5], j) : e[6]), s = e[7], s && (n[7] = s), t & Vn && (n[8] = n[8] == null ? e[8] : _n(n[8], e[8])), n[9] == null && (n[9] = e[9]), n[0] = e[0], n[1] = i, n;
      }
      function Vs(n) {
        var e = [];
        if (n != null)
          for (var r in Y(n))
            e.push(r);
        return e;
      }
      function ks(n) {
        return St.call(n);
      }
      function po(n, e, r) {
        return e = ln(e === a ? n.length - 1 : e, 0), function() {
          for (var t = arguments, i = -1, f = ln(t.length - e, 0), o = g(f); ++i < f; )
            o[i] = t[e + i];
          i = -1;
          for (var s = g(e + 1); ++i < e; )
            s[i] = t[i];
          return s[e] = r(o), Ln(n, this, s);
        };
      }
      function _o(n, e) {
        return e.length < 2 ? n : nr(n, zn(e, 0, -1));
      }
      function js(n, e) {
        for (var r = n.length, t = _n(e.length, r), i = yn(n); t--; ) {
          var f = e[t];
          n[t] = Ae(f, r) ? i[f] : a;
        }
        return n;
      }
      function lu(n, e) {
        if (!(e === "constructor" && typeof n[e] == "function") && e != "__proto__")
          return n[e];
      }
      var vo = xo(Nf), kr = pl || function(n, e) {
        return hn.setTimeout(n, e);
      }, su = xo(ms);
      function wo(n, e, r) {
        var t = e + "";
        return su(n, qs(t, nc(Gs(t), r)));
      }
      function xo(n) {
        var e = 0, r = 0;
        return function() {
          var t = wl(), i = kn - (t - r);
          if (r = t, i > 0) {
            if (++e >= it)
              return arguments[0];
          } else
            e = 0;
          return n.apply(a, arguments);
        };
      }
      function Qt(n, e) {
        var r = -1, t = n.length, i = t - 1;
        for (e = e === a ? t : e; ++r < e; ) {
          var f = zi(r, i), o = n[f];
          n[f] = n[r], n[r] = o;
        }
        return n.length = e, n;
      }
      var Eo = Js(function(n) {
        var e = [];
        return n.charCodeAt(0) === 46 && e.push(""), n.replace(hi, function(r, t, i, f) {
          e.push(i ? f.replace(S, "$1") : t || r);
        }), e;
      });
      function pe(n) {
        if (typeof n == "string" || Fn(n))
          return n;
        var e = n + "";
        return e == "0" && 1 / n == -le ? "-0" : e;
      }
      function rr(n) {
        if (n != null) {
          try {
            return Tt.call(n);
          } catch {
          }
          try {
            return n + "";
          } catch {
          }
        }
        return "";
      }
      function nc(n, e) {
        return Hn(ai, function(r) {
          var t = "_." + r[0];
          e & r[1] && !Et(n, t) && n.push(t);
        }), n.sort();
      }
      function Ro(n) {
        if (n instanceof M)
          return n.clone();
        var e = new qn(n.__wrapped__, n.__chain__);
        return e.__actions__ = yn(n.__actions__), e.__index__ = n.__index__, e.__values__ = n.__values__, e;
      }
      function ec(n, e, r) {
        (r ? wn(n, e, r) : e === a) ? e = 1 : e = ln(O(e), 0);
        var t = n == null ? 0 : n.length;
        if (!t || e < 1)
          return [];
        for (var i = 0, f = 0, o = g(Pt(t / e)); i < t; )
          o[f++] = zn(n, i, i += e);
        return o;
      }
      function rc(n) {
        for (var e = -1, r = n == null ? 0 : n.length, t = 0, i = []; ++e < r; ) {
          var f = n[e];
          f && (i[t++] = f);
        }
        return i;
      }
      function tc() {
        var n = arguments.length;
        if (!n)
          return [];
        for (var e = g(n - 1), r = arguments[0], t = n; t--; )
          e[t - 1] = arguments[t];
        return De(b(r) ? yn(r) : [r], gn(e, 1));
      }
      var ic = L(function(n, e) {
        return un(n) ? zr(n, gn(e, 1, un, !0)) : [];
      }), uc = L(function(n, e) {
        var r = Xn(e);
        return un(r) && (r = a), un(n) ? zr(n, gn(e, 1, un, !0), y(r, 2)) : [];
      }), fc = L(function(n, e) {
        var r = Xn(e);
        return un(r) && (r = a), un(n) ? zr(n, gn(e, 1, un, !0), a, r) : [];
      });
      function oc(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === a ? 1 : O(e), zn(n, e < 0 ? 0 : e, t)) : [];
      }
      function ac(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === a ? 1 : O(e), e = t - e, zn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function lc(n, e) {
        return n && n.length ? Ht(n, y(e, 3), !0, !0) : [];
      }
      function sc(n, e) {
        return n && n.length ? Ht(n, y(e, 3), !0) : [];
      }
      function cc(n, e, r, t) {
        var i = n == null ? 0 : n.length;
        return i ? (r && typeof r != "number" && wn(n, e, r) && (r = 0, t = i), ts(n, e, r, t)) : [];
      }
      function mo(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = r == null ? 0 : O(r);
        return i < 0 && (i = ln(t + i, 0)), Rt(n, y(e, 3), i);
      }
      function yo(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = t - 1;
        return r !== a && (i = O(r), i = r < 0 ? ln(t + i, 0) : _n(i, t - 1)), Rt(n, y(e, 3), i, !0);
      }
      function Ao(n) {
        var e = n == null ? 0 : n.length;
        return e ? gn(n, 1) : [];
      }
      function hc(n) {
        var e = n == null ? 0 : n.length;
        return e ? gn(n, le) : [];
      }
      function gc(n, e) {
        var r = n == null ? 0 : n.length;
        return r ? (e = e === a ? 1 : O(e), gn(n, e)) : [];
      }
      function pc(n) {
        for (var e = -1, r = n == null ? 0 : n.length, t = {}; ++e < r; ) {
          var i = n[e];
          t[i[0]] = i[1];
        }
        return t;
      }
      function To(n) {
        return n && n.length ? n[0] : a;
      }
      function _c(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = r == null ? 0 : O(r);
        return i < 0 && (i = ln(t + i, 0)), pr(n, e, i);
      }
      function vc(n) {
        var e = n == null ? 0 : n.length;
        return e ? zn(n, 0, -1) : [];
      }
      var dc = L(function(n) {
        var e = z(n, Vi);
        return e.length && e[0] === n[0] ? Gi(e) : [];
      }), wc = L(function(n) {
        var e = Xn(n), r = z(n, Vi);
        return e === Xn(r) ? e = a : r.pop(), r.length && r[0] === n[0] ? Gi(r, y(e, 2)) : [];
      }), xc = L(function(n) {
        var e = Xn(n), r = z(n, Vi);
        return e = typeof e == "function" ? e : a, e && r.pop(), r.length && r[0] === n[0] ? Gi(r, a, e) : [];
      });
      function Ec(n, e) {
        return n == null ? "" : vl.call(n, e);
      }
      function Xn(n) {
        var e = n == null ? 0 : n.length;
        return e ? n[e - 1] : a;
      }
      function Rc(n, e, r) {
        var t = n == null ? 0 : n.length;
        if (!t)
          return -1;
        var i = t;
        return r !== a && (i = O(r), i = i < 0 ? ln(t + i, 0) : _n(i, t - 1)), e === e ? nl(n, e, i) : Rt(n, tf, i, !0);
      }
      function mc(n, e) {
        return n && n.length ? Df(n, O(e)) : a;
      }
      var yc = L(So);
      function So(n, e) {
        return n && n.length && e && e.length ? Ki(n, e) : n;
      }
      function Ac(n, e, r) {
        return n && n.length && e && e.length ? Ki(n, e, y(r, 2)) : n;
      }
      function Tc(n, e, r) {
        return n && n.length && e && e.length ? Ki(n, e, a, r) : n;
      }
      var Sc = ye(function(n, e) {
        var r = n == null ? 0 : n.length, t = Bi(n, e);
        return Uf(n, z(e, function(i) {
          return Ae(i, r) ? +i : i;
        }).sort(Zf)), t;
      });
      function Cc(n, e) {
        var r = [];
        if (!(n && n.length))
          return r;
        var t = -1, i = [], f = n.length;
        for (e = y(e, 3); ++t < f; ) {
          var o = n[t];
          e(o, t, n) && (r.push(o), i.push(t));
        }
        return Uf(n, i), r;
      }
      function cu(n) {
        return n == null ? n : El.call(n);
      }
      function bc(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (r && typeof r != "number" && wn(n, e, r) ? (e = 0, r = t) : (e = e == null ? 0 : O(e), r = r === a ? t : O(r)), zn(n, e, r)) : [];
      }
      function Oc(n, e) {
        return Gt(n, e);
      }
      function Ic(n, e, r) {
        return Zi(n, e, y(r, 2));
      }
      function Lc(n, e) {
        var r = n == null ? 0 : n.length;
        if (r) {
          var t = Gt(n, e);
          if (t < r && ie(n[t], e))
            return t;
        }
        return -1;
      }
      function Pc(n, e) {
        return Gt(n, e, !0);
      }
      function Wc(n, e, r) {
        return Zi(n, e, y(r, 2), !0);
      }
      function Fc(n, e) {
        var r = n == null ? 0 : n.length;
        if (r) {
          var t = Gt(n, e, !0) - 1;
          if (ie(n[t], e))
            return t;
        }
        return -1;
      }
      function Dc(n) {
        return n && n.length ? $f(n) : [];
      }
      function Mc(n, e) {
        return n && n.length ? $f(n, y(e, 2)) : [];
      }
      function Bc(n) {
        var e = n == null ? 0 : n.length;
        return e ? zn(n, 1, e) : [];
      }
      function Uc(n, e, r) {
        return n && n.length ? (e = r || e === a ? 1 : O(e), zn(n, 0, e < 0 ? 0 : e)) : [];
      }
      function Nc(n, e, r) {
        var t = n == null ? 0 : n.length;
        return t ? (e = r || e === a ? 1 : O(e), e = t - e, zn(n, e < 0 ? 0 : e, t)) : [];
      }
      function $c(n, e) {
        return n && n.length ? Ht(n, y(e, 3), !1, !0) : [];
      }
      function Gc(n, e) {
        return n && n.length ? Ht(n, y(e, 3)) : [];
      }
      var Hc = L(function(n) {
        return Ne(gn(n, 1, un, !0));
      }), Yc = L(function(n) {
        var e = Xn(n);
        return un(e) && (e = a), Ne(gn(n, 1, un, !0), y(e, 2));
      }), qc = L(function(n) {
        var e = Xn(n);
        return e = typeof e == "function" ? e : a, Ne(gn(n, 1, un, !0), a, e);
      });
      function Kc(n) {
        return n && n.length ? Ne(n) : [];
      }
      function zc(n, e) {
        return n && n.length ? Ne(n, y(e, 2)) : [];
      }
      function Xc(n, e) {
        return e = typeof e == "function" ? e : a, n && n.length ? Ne(n, a, e) : [];
      }
      function hu(n) {
        if (!(n && n.length))
          return [];
        var e = 0;
        return n = Fe(n, function(r) {
          if (un(r))
            return e = ln(r.length, e), !0;
        }), Oi(e, function(r) {
          return z(n, Si(r));
        });
      }
      function Co(n, e) {
        if (!(n && n.length))
          return [];
        var r = hu(n);
        return e == null ? r : z(r, function(t) {
          return Ln(e, a, t);
        });
      }
      var Zc = L(function(n, e) {
        return un(n) ? zr(n, e) : [];
      }), Jc = L(function(n) {
        return Qi(Fe(n, un));
      }), Qc = L(function(n) {
        var e = Xn(n);
        return un(e) && (e = a), Qi(Fe(n, un), y(e, 2));
      }), Vc = L(function(n) {
        var e = Xn(n);
        return e = typeof e == "function" ? e : a, Qi(Fe(n, un), a, e);
      }), kc = L(hu);
      function jc(n, e) {
        return qf(n || [], e || [], Kr);
      }
      function nh(n, e) {
        return qf(n || [], e || [], Jr);
      }
      var eh = L(function(n) {
        var e = n.length, r = e > 1 ? n[e - 1] : a;
        return r = typeof r == "function" ? (n.pop(), r) : a, Co(n, r);
      });
      function bo(n) {
        var e = u(n);
        return e.__chain__ = !0, e;
      }
      function rh(n, e) {
        return e(n), n;
      }
      function Vt(n, e) {
        return e(n);
      }
      var th = ye(function(n) {
        var e = n.length, r = e ? n[0] : 0, t = this.__wrapped__, i = function(f) {
          return Bi(f, n);
        };
        return e > 1 || this.__actions__.length || !(t instanceof M) || !Ae(r) ? this.thru(i) : (t = t.slice(r, +r + (e ? 1 : 0)), t.__actions__.push({
          func: Vt,
          args: [i],
          thisArg: a
        }), new qn(t, this.__chain__).thru(function(f) {
          return e && !f.length && f.push(a), f;
        }));
      });
      function ih() {
        return bo(this);
      }
      function uh() {
        return new qn(this.value(), this.__chain__);
      }
      function fh() {
        this.__values__ === a && (this.__values__ = Ho(this.value()));
        var n = this.__index__ >= this.__values__.length, e = n ? a : this.__values__[this.__index__++];
        return { done: n, value: e };
      }
      function oh() {
        return this;
      }
      function ah(n) {
        for (var e, r = this; r instanceof Mt; ) {
          var t = Ro(r);
          t.__index__ = 0, t.__values__ = a, e ? i.__wrapped__ = t : e = t;
          var i = t;
          r = r.__wrapped__;
        }
        return i.__wrapped__ = n, e;
      }
      function lh() {
        var n = this.__wrapped__;
        if (n instanceof M) {
          var e = n;
          return this.__actions__.length && (e = new M(this)), e = e.reverse(), e.__actions__.push({
            func: Vt,
            args: [cu],
            thisArg: a
          }), new qn(e, this.__chain__);
        }
        return this.thru(cu);
      }
      function sh() {
        return Yf(this.__wrapped__, this.__actions__);
      }
      var ch = Yt(function(n, e, r) {
        H.call(n, r) ? ++n[r] : Re(n, r, 1);
      });
      function hh(n, e, r) {
        var t = b(n) ? ef : rs;
        return r && wn(n, e, r) && (e = a), t(n, y(e, 3));
      }
      function gh(n, e) {
        var r = b(n) ? Fe : Sf;
        return r(n, y(e, 3));
      }
      var ph = no(mo), _h = no(yo);
      function vh(n, e) {
        return gn(kt(n, e), 1);
      }
      function dh(n, e) {
        return gn(kt(n, e), le);
      }
      function wh(n, e, r) {
        return r = r === a ? 1 : O(r), gn(kt(n, e), r);
      }
      function Oo(n, e) {
        var r = b(n) ? Hn : Ue;
        return r(n, y(e, 3));
      }
      function Io(n, e) {
        var r = b(n) ? Ba : Tf;
        return r(n, y(e, 3));
      }
      var xh = Yt(function(n, e, r) {
        H.call(n, r) ? n[r].push(e) : Re(n, r, [e]);
      });
      function Eh(n, e, r, t) {
        n = An(n) ? n : Sr(n), r = r && !t ? O(r) : 0;
        var i = n.length;
        return r < 0 && (r = ln(i + r, 0)), ti(n) ? r <= i && n.indexOf(e, r) > -1 : !!i && pr(n, e, r) > -1;
      }
      var Rh = L(function(n, e, r) {
        var t = -1, i = typeof e == "function", f = An(n) ? g(n.length) : [];
        return Ue(n, function(o) {
          f[++t] = i ? Ln(e, o, r) : Xr(o, e, r);
        }), f;
      }), mh = Yt(function(n, e, r) {
        Re(n, r, e);
      });
      function kt(n, e) {
        var r = b(n) ? z : Pf;
        return r(n, y(e, 3));
      }
      function yh(n, e, r, t) {
        return n == null ? [] : (b(e) || (e = e == null ? [] : [e]), r = t ? a : r, b(r) || (r = r == null ? [] : [r]), Mf(n, e, r));
      }
      var Ah = Yt(function(n, e, r) {
        n[r ? 0 : 1].push(e);
      }, function() {
        return [[], []];
      });
      function Th(n, e, r) {
        var t = b(n) ? Ai : ff, i = arguments.length < 3;
        return t(n, y(e, 4), r, i, Ue);
      }
      function Sh(n, e, r) {
        var t = b(n) ? Ua : ff, i = arguments.length < 3;
        return t(n, y(e, 4), r, i, Tf);
      }
      function Ch(n, e) {
        var r = b(n) ? Fe : Sf;
        return r(n, ei(y(e, 3)));
      }
      function bh(n) {
        var e = b(n) ? Rf : Es;
        return e(n);
      }
      function Oh(n, e, r) {
        (r ? wn(n, e, r) : e === a) ? e = 1 : e = O(e);
        var t = b(n) ? Vl : Rs;
        return t(n, e);
      }
      function Ih(n) {
        var e = b(n) ? kl : ys;
        return e(n);
      }
      function Lh(n) {
        if (n == null)
          return 0;
        if (An(n))
          return ti(n) ? vr(n) : n.length;
        var e = vn(n);
        return e == On || e == In ? n.size : Yi(n).length;
      }
      function Ph(n, e, r) {
        var t = b(n) ? Ti : As;
        return r && wn(n, e, r) && (e = a), t(n, y(e, 3));
      }
      var Wh = L(function(n, e) {
        if (n == null)
          return [];
        var r = e.length;
        return r > 1 && wn(n, e[0], e[1]) ? e = [] : r > 2 && wn(e[0], e[1], e[2]) && (e = [e[0]]), Mf(n, gn(e, 1), []);
      }), jt = gl || function() {
        return hn.Date.now();
      };
      function Fh(n, e) {
        if (typeof e != "function")
          throw new Yn(on);
        return n = O(n), function() {
          if (--n < 1)
            return e.apply(this, arguments);
        };
      }
      function Lo(n, e, r) {
        return e = r ? a : e, e = n && e == null ? n.length : e, me(n, Vn, a, a, a, a, e);
      }
      function Po(n, e) {
        var r;
        if (typeof e != "function")
          throw new Yn(on);
        return n = O(n), function() {
          return --n > 0 && (r = e.apply(this, arguments)), n <= 1 && (e = a), r;
        };
      }
      var gu = L(function(n, e, r) {
        var t = en;
        if (r.length) {
          var i = Me(r, Ar(gu));
          t |= Nn;
        }
        return me(n, t, e, r, i);
      }), Wo = L(function(n, e, r) {
        var t = en | rn;
        if (r.length) {
          var i = Me(r, Ar(Wo));
          t |= Nn;
        }
        return me(e, t, n, r, i);
      });
      function Fo(n, e, r) {
        e = r ? a : e;
        var t = me(n, En, a, a, a, a, a, e);
        return t.placeholder = Fo.placeholder, t;
      }
      function Do(n, e, r) {
        e = r ? a : e;
        var t = me(n, be, a, a, a, a, a, e);
        return t.placeholder = Do.placeholder, t;
      }
      function Mo(n, e, r) {
        var t, i, f, o, s, h, _ = 0, v = !1, d = !1, E = !0;
        if (typeof n != "function")
          throw new Yn(on);
        e = Zn(e) || 0, Z(r) && (v = !!r.leading, d = "maxWait" in r, f = d ? ln(Zn(r.maxWait) || 0, e) : f, E = "trailing" in r ? !!r.trailing : E);
        function m(fn) {
          var ue = t, Ce = i;
          return t = i = a, _ = fn, o = n.apply(Ce, ue), o;
        }
        function A(fn) {
          return _ = fn, s = kr(W, e), v ? m(fn) : o;
        }
        function I(fn) {
          var ue = fn - h, Ce = fn - _, ea = e - ue;
          return d ? _n(ea, f - Ce) : ea;
        }
        function T(fn) {
          var ue = fn - h, Ce = fn - _;
          return h === a || ue >= e || ue < 0 || d && Ce >= f;
        }
        function W() {
          var fn = jt();
          if (T(fn))
            return B(fn);
          s = kr(W, I(fn));
        }
        function B(fn) {
          return s = a, E && t ? m(fn) : (t = i = a, o);
        }
        function Dn() {
          s !== a && Kf(s), _ = 0, t = h = i = s = a;
        }
        function xn() {
          return s === a ? o : B(jt());
        }
        function Mn() {
          var fn = jt(), ue = T(fn);
          if (t = arguments, i = this, h = fn, ue) {
            if (s === a)
              return A(h);
            if (d)
              return Kf(s), s = kr(W, e), m(h);
          }
          return s === a && (s = kr(W, e)), o;
        }
        return Mn.cancel = Dn, Mn.flush = xn, Mn;
      }
      var Dh = L(function(n, e) {
        return Af(n, 1, e);
      }), Mh = L(function(n, e, r) {
        return Af(n, Zn(e) || 0, r);
      });
      function Bh(n) {
        return me(n, ir);
      }
      function ni(n, e) {
        if (typeof n != "function" || e != null && typeof e != "function")
          throw new Yn(on);
        var r = function() {
          var t = arguments, i = e ? e.apply(this, t) : t[0], f = r.cache;
          if (f.has(i))
            return f.get(i);
          var o = n.apply(this, t);
          return r.cache = f.set(i, o) || f, o;
        };
        return r.cache = new (ni.Cache || Ee)(), r;
      }
      ni.Cache = Ee;
      function ei(n) {
        if (typeof n != "function")
          throw new Yn(on);
        return function() {
          var e = arguments;
          switch (e.length) {
            case 0:
              return !n.call(this);
            case 1:
              return !n.call(this, e[0]);
            case 2:
              return !n.call(this, e[0], e[1]);
            case 3:
              return !n.call(this, e[0], e[1], e[2]);
          }
          return !n.apply(this, e);
        };
      }
      function Uh(n) {
        return Po(2, n);
      }
      var Nh = Ts(function(n, e) {
        e = e.length == 1 && b(e[0]) ? z(e[0], Pn(y())) : z(gn(e, 1), Pn(y()));
        var r = e.length;
        return L(function(t) {
          for (var i = -1, f = _n(t.length, r); ++i < f; )
            t[i] = e[i].call(this, t[i]);
          return Ln(n, this, t);
        });
      }), pu = L(function(n, e) {
        var r = Me(e, Ar(pu));
        return me(n, Nn, a, e, r);
      }), Bo = L(function(n, e) {
        var r = Me(e, Ar(Bo));
        return me(n, Oe, a, e, r);
      }), $h = ye(function(n, e) {
        return me(n, Ye, a, a, a, e);
      });
      function Gh(n, e) {
        if (typeof n != "function")
          throw new Yn(on);
        return e = e === a ? e : O(e), L(n, e);
      }
      function Hh(n, e) {
        if (typeof n != "function")
          throw new Yn(on);
        return e = e == null ? 0 : ln(O(e), 0), L(function(r) {
          var t = r[e], i = Ge(r, 0, e);
          return t && De(i, t), Ln(n, this, i);
        });
      }
      function Yh(n, e, r) {
        var t = !0, i = !0;
        if (typeof n != "function")
          throw new Yn(on);
        return Z(r) && (t = "leading" in r ? !!r.leading : t, i = "trailing" in r ? !!r.trailing : i), Mo(n, e, {
          leading: t,
          maxWait: e,
          trailing: i
        });
      }
      function qh(n) {
        return Lo(n, 1);
      }
      function Kh(n, e) {
        return pu(ki(e), n);
      }
      function zh() {
        if (!arguments.length)
          return [];
        var n = arguments[0];
        return b(n) ? n : [n];
      }
      function Xh(n) {
        return Kn(n, F);
      }
      function Zh(n, e) {
        return e = typeof e == "function" ? e : a, Kn(n, F, e);
      }
      function Jh(n) {
        return Kn(n, nn | F);
      }
      function Qh(n, e) {
        return e = typeof e == "function" ? e : a, Kn(n, nn | F, e);
      }
      function Vh(n, e) {
        return e == null || yf(n, e, sn(e));
      }
      function ie(n, e) {
        return n === e || n !== n && e !== e;
      }
      var kh = Xt($i), jh = Xt(function(n, e) {
        return n >= e;
      }), tr = Of(function() {
        return arguments;
      }()) ? Of : function(n) {
        return V(n) && H.call(n, "callee") && !_f.call(n, "callee");
      }, b = g.isArray, ng = Ju ? Pn(Ju) : as;
      function An(n) {
        return n != null && ri(n.length) && !Te(n);
      }
      function un(n) {
        return V(n) && An(n);
      }
      function eg(n) {
        return n === !0 || n === !1 || V(n) && dn(n) == se;
      }
      var He = _l || Tu, rg = Qu ? Pn(Qu) : ls;
      function tg(n) {
        return V(n) && n.nodeType === 1 && !jr(n);
      }
      function ig(n) {
        if (n == null)
          return !0;
        if (An(n) && (b(n) || typeof n == "string" || typeof n.splice == "function" || He(n) || Tr(n) || tr(n)))
          return !n.length;
        var e = vn(n);
        if (e == On || e == In)
          return !n.size;
        if (Vr(n))
          return !Yi(n).length;
        for (var r in n)
          if (H.call(n, r))
            return !1;
        return !0;
      }
      function ug(n, e) {
        return Zr(n, e);
      }
      function fg(n, e, r) {
        r = typeof r == "function" ? r : a;
        var t = r ? r(n, e) : a;
        return t === a ? Zr(n, e, a, r) : !!t;
      }
      function _u(n) {
        if (!V(n))
          return !1;
        var e = dn(n);
        return e == fr || e == ur || typeof n.message == "string" && typeof n.name == "string" && !jr(n);
      }
      function og(n) {
        return typeof n == "number" && df(n);
      }
      function Te(n) {
        if (!Z(n))
          return !1;
        var e = dn(n);
        return e == ze || e == lt || e == Cr || e == ar;
      }
      function Uo(n) {
        return typeof n == "number" && n == O(n);
      }
      function ri(n) {
        return typeof n == "number" && n > -1 && n % 1 == 0 && n <= jn;
      }
      function Z(n) {
        var e = typeof n;
        return n != null && (e == "object" || e == "function");
      }
      function V(n) {
        return n != null && typeof n == "object";
      }
      var No = Vu ? Pn(Vu) : cs;
      function ag(n, e) {
        return n === e || Hi(n, e, uu(e));
      }
      function lg(n, e, r) {
        return r = typeof r == "function" ? r : a, Hi(n, e, uu(e), r);
      }
      function sg(n) {
        return $o(n) && n != +n;
      }
      function cg(n) {
        if (Zs(n))
          throw new C(Un);
        return If(n);
      }
      function hg(n) {
        return n === null;
      }
      function gg(n) {
        return n == null;
      }
      function $o(n) {
        return typeof n == "number" || V(n) && dn(n) == ce;
      }
      function jr(n) {
        if (!V(n) || dn(n) != $n)
          return !1;
        var e = Ot(n);
        if (e === null)
          return !0;
        var r = H.call(e, "constructor") && e.constructor;
        return typeof r == "function" && r instanceof r && Tt.call(r) == ll;
      }
      var vu = ku ? Pn(ku) : hs;
      function pg(n) {
        return Uo(n) && n >= -jn && n <= jn;
      }
      var Go = ju ? Pn(ju) : gs;
      function ti(n) {
        return typeof n == "string" || !b(n) && V(n) && dn(n) == de;
      }
      function Fn(n) {
        return typeof n == "symbol" || V(n) && dn(n) == lr;
      }
      var Tr = nf ? Pn(nf) : ps;
      function _g(n) {
        return n === a;
      }
      function vg(n) {
        return V(n) && vn(n) == Pe;
      }
      function dg(n) {
        return V(n) && dn(n) == st;
      }
      var wg = Xt(qi), xg = Xt(function(n, e) {
        return n <= e;
      });
      function Ho(n) {
        if (!n)
          return [];
        if (An(n))
          return ti(n) ? re(n) : yn(n);
        if ($r && n[$r])
          return Va(n[$r]());
        var e = vn(n), r = e == On ? Li : e == In ? mt : Sr;
        return r(n);
      }
      function Se(n) {
        if (!n)
          return n === 0 ? n : 0;
        if (n = Zn(n), n === le || n === -le) {
          var e = n < 0 ? -1 : 1;
          return e * ft;
        }
        return n === n ? n : 0;
      }
      function O(n) {
        var e = Se(n), r = e % 1;
        return e === e ? r ? e - r : e : 0;
      }
      function Yo(n) {
        return n ? je(O(n), 0, bn) : 0;
      }
      function Zn(n) {
        if (typeof n == "number")
          return n;
        if (Fn(n))
          return Ke;
        if (Z(n)) {
          var e = typeof n.valueOf == "function" ? n.valueOf() : n;
          n = Z(e) ? e + "" : e;
        }
        if (typeof n != "string")
          return n === 0 ? n : +n;
        n = of(n);
        var r = P.test(n);
        return r || X.test(n) ? Fa(n.slice(2), r ? 2 : 8) : D.test(n) ? Ke : +n;
      }
      function qo(n) {
        return ge(n, Tn(n));
      }
      function Eg(n) {
        return n ? je(O(n), -jn, jn) : n === 0 ? n : 0;
      }
      function G(n) {
        return n == null ? "" : Wn(n);
      }
      var Rg = mr(function(n, e) {
        if (Vr(e) || An(e)) {
          ge(e, sn(e), n);
          return;
        }
        for (var r in e)
          H.call(e, r) && Kr(n, r, e[r]);
      }), Ko = mr(function(n, e) {
        ge(e, Tn(e), n);
      }), ii = mr(function(n, e, r, t) {
        ge(e, Tn(e), n, t);
      }), mg = mr(function(n, e, r, t) {
        ge(e, sn(e), n, t);
      }), yg = ye(Bi);
      function Ag(n, e) {
        var r = Rr(n);
        return e == null ? r : mf(r, e);
      }
      var Tg = L(function(n, e) {
        n = Y(n);
        var r = -1, t = e.length, i = t > 2 ? e[2] : a;
        for (i && wn(e[0], e[1], i) && (t = 1); ++r < t; )
          for (var f = e[r], o = Tn(f), s = -1, h = o.length; ++s < h; ) {
            var _ = o[s], v = n[_];
            (v === a || ie(v, wr[_]) && !H.call(n, _)) && (n[_] = f[_]);
          }
        return n;
      }), Sg = L(function(n) {
        return n.push(a, oo), Ln(zo, a, n);
      });
      function Cg(n, e) {
        return rf(n, y(e, 3), he);
      }
      function bg(n, e) {
        return rf(n, y(e, 3), Ni);
      }
      function Og(n, e) {
        return n == null ? n : Ui(n, y(e, 3), Tn);
      }
      function Ig(n, e) {
        return n == null ? n : Cf(n, y(e, 3), Tn);
      }
      function Lg(n, e) {
        return n && he(n, y(e, 3));
      }
      function Pg(n, e) {
        return n && Ni(n, y(e, 3));
      }
      function Wg(n) {
        return n == null ? [] : Nt(n, sn(n));
      }
      function Fg(n) {
        return n == null ? [] : Nt(n, Tn(n));
      }
      function du(n, e, r) {
        var t = n == null ? a : nr(n, e);
        return t === a ? r : t;
      }
      function Dg(n, e) {
        return n != null && so(n, e, is);
      }
      function wu(n, e) {
        return n != null && so(n, e, us);
      }
      var Mg = ro(function(n, e, r) {
        e != null && typeof e.toString != "function" && (e = St.call(e)), n[e] = r;
      }, Eu(Sn)), Bg = ro(function(n, e, r) {
        e != null && typeof e.toString != "function" && (e = St.call(e)), H.call(n, e) ? n[e].push(r) : n[e] = [r];
      }, y), Ug = L(Xr);
      function sn(n) {
        return An(n) ? Ef(n) : Yi(n);
      }
      function Tn(n) {
        return An(n) ? Ef(n, !0) : _s(n);
      }
      function Ng(n, e) {
        var r = {};
        return e = y(e, 3), he(n, function(t, i, f) {
          Re(r, e(t, i, f), t);
        }), r;
      }
      function $g(n, e) {
        var r = {};
        return e = y(e, 3), he(n, function(t, i, f) {
          Re(r, i, e(t, i, f));
        }), r;
      }
      var Gg = mr(function(n, e, r) {
        $t(n, e, r);
      }), zo = mr(function(n, e, r, t) {
        $t(n, e, r, t);
      }), Hg = ye(function(n, e) {
        var r = {};
        if (n == null)
          return r;
        var t = !1;
        e = z(e, function(f) {
          return f = $e(f, n), t || (t = f.length > 1), f;
        }), ge(n, tu(n), r), t && (r = Kn(r, nn | pn | F, Ms));
        for (var i = e.length; i--; )
          Ji(r, e[i]);
        return r;
      });
      function Yg(n, e) {
        return Xo(n, ei(y(e)));
      }
      var qg = ye(function(n, e) {
        return n == null ? {} : ds(n, e);
      });
      function Xo(n, e) {
        if (n == null)
          return {};
        var r = z(tu(n), function(t) {
          return [t];
        });
        return e = y(e), Bf(n, r, function(t, i) {
          return e(t, i[0]);
        });
      }
      function Kg(n, e, r) {
        e = $e(e, n);
        var t = -1, i = e.length;
        for (i || (i = 1, n = a); ++t < i; ) {
          var f = n == null ? a : n[pe(e[t])];
          f === a && (t = i, f = r), n = Te(f) ? f.call(n) : f;
        }
        return n;
      }
      function zg(n, e, r) {
        return n == null ? n : Jr(n, e, r);
      }
      function Xg(n, e, r, t) {
        return t = typeof t == "function" ? t : a, n == null ? n : Jr(n, e, r, t);
      }
      var Zo = uo(sn), Jo = uo(Tn);
      function Zg(n, e, r) {
        var t = b(n), i = t || He(n) || Tr(n);
        if (e = y(e, 4), r == null) {
          var f = n && n.constructor;
          i ? r = t ? new f() : [] : Z(n) ? r = Te(f) ? Rr(Ot(n)) : {} : r = {};
        }
        return (i ? Hn : he)(n, function(o, s, h) {
          return e(r, o, s, h);
        }), r;
      }
      function Jg(n, e) {
        return n == null ? !0 : Ji(n, e);
      }
      function Qg(n, e, r) {
        return n == null ? n : Hf(n, e, ki(r));
      }
      function Vg(n, e, r, t) {
        return t = typeof t == "function" ? t : a, n == null ? n : Hf(n, e, ki(r), t);
      }
      function Sr(n) {
        return n == null ? [] : Ii(n, sn(n));
      }
      function kg(n) {
        return n == null ? [] : Ii(n, Tn(n));
      }
      function jg(n, e, r) {
        return r === a && (r = e, e = a), r !== a && (r = Zn(r), r = r === r ? r : 0), e !== a && (e = Zn(e), e = e === e ? e : 0), je(Zn(n), e, r);
      }
      function np(n, e, r) {
        return e = Se(e), r === a ? (r = e, e = 0) : r = Se(r), n = Zn(n), fs(n, e, r);
      }
      function ep(n, e, r) {
        if (r && typeof r != "boolean" && wn(n, e, r) && (e = r = a), r === a && (typeof e == "boolean" ? (r = e, e = a) : typeof n == "boolean" && (r = n, n = a)), n === a && e === a ? (n = 0, e = 1) : (n = Se(n), e === a ? (e = n, n = 0) : e = Se(e)), n > e) {
          var t = n;
          n = e, e = t;
        }
        if (r || n % 1 || e % 1) {
          var i = wf();
          return _n(n + i * (e - n + Wa("1e-" + ((i + "").length - 1))), e);
        }
        return zi(n, e);
      }
      var rp = yr(function(n, e, r) {
        return e = e.toLowerCase(), n + (r ? Qo(e) : e);
      });
      function Qo(n) {
        return xu(G(n).toLowerCase());
      }
      function Vo(n) {
        return n = G(n), n && n.replace(Rn, za).replace(ya, "");
      }
      function tp(n, e, r) {
        n = G(n), e = Wn(e);
        var t = n.length;
        r = r === a ? t : je(O(r), 0, t);
        var i = r;
        return r -= e.length, r >= 0 && n.slice(r, i) == e;
      }
      function ip(n) {
        return n = G(n), n && ht.test(n) ? n.replace(hr, Xa) : n;
      }
      function up(n) {
        return n = G(n), n && dt.test(n) ? n.replace(Br, "\\$&") : n;
      }
      var fp = yr(function(n, e, r) {
        return n + (r ? "-" : "") + e.toLowerCase();
      }), op = yr(function(n, e, r) {
        return n + (r ? " " : "") + e.toLowerCase();
      }), ap = jf("toLowerCase");
      function lp(n, e, r) {
        n = G(n), e = O(e);
        var t = e ? vr(n) : 0;
        if (!e || t >= e)
          return n;
        var i = (e - t) / 2;
        return zt(Wt(i), r) + n + zt(Pt(i), r);
      }
      function sp(n, e, r) {
        n = G(n), e = O(e);
        var t = e ? vr(n) : 0;
        return e && t < e ? n + zt(e - t, r) : n;
      }
      function cp(n, e, r) {
        n = G(n), e = O(e);
        var t = e ? vr(n) : 0;
        return e && t < e ? zt(e - t, r) + n : n;
      }
      function hp(n, e, r) {
        return r || e == null ? e = 0 : e && (e = +e), xl(G(n).replace(Ur, ""), e || 0);
      }
      function gp(n, e, r) {
        return (r ? wn(n, e, r) : e === a) ? e = 1 : e = O(e), Xi(G(n), e);
      }
      function pp() {
        var n = arguments, e = G(n[0]);
        return n.length < 3 ? e : e.replace(n[1], n[2]);
      }
      var _p = yr(function(n, e, r) {
        return n + (r ? "_" : "") + e.toLowerCase();
      });
      function vp(n, e, r) {
        return r && typeof r != "number" && wn(n, e, r) && (e = r = a), r = r === a ? bn : r >>> 0, r ? (n = G(n), n && (typeof e == "string" || e != null && !vu(e)) && (e = Wn(e), !e && _r(n)) ? Ge(re(n), 0, r) : n.split(e, r)) : [];
      }
      var dp = yr(function(n, e, r) {
        return n + (r ? " " : "") + xu(e);
      });
      function wp(n, e, r) {
        return n = G(n), r = r == null ? 0 : je(O(r), 0, n.length), e = Wn(e), n.slice(r, r + e.length) == e;
      }
      function xp(n, e, r) {
        var t = u.templateSettings;
        r && wn(n, e, r) && (e = a), n = G(n), e = ii({}, e, t, fo);
        var i = ii({}, e.imports, t.imports, fo), f = sn(i), o = Ii(i, f), s, h, _ = 0, v = e.interpolate || ee, d = "__p += '", E = Pi(
          (e.escape || ee).source + "|" + v.source + "|" + (v === pt ? U : ee).source + "|" + (e.evaluate || ee).source + "|$",
          "g"
        ), m = "//# sourceURL=" + (H.call(e, "sourceURL") ? (e.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++ba + "]") + `
`;
        n.replace(E, function(T, W, B, Dn, xn, Mn) {
          return B || (B = Dn), d += n.slice(_, Mn).replace(wt, Za), W && (s = !0, d += `' +
__e(` + W + `) +
'`), xn && (h = !0, d += `';
` + xn + `;
__p += '`), B && (d += `' +
((__t = (` + B + `)) == null ? '' : __t) +
'`), _ = Mn + T.length, T;
        }), d += `';
`;
        var A = H.call(e, "variable") && e.variable;
        if (!A)
          d = `with (obj) {
` + d + `
}
`;
        else if (x.test(A))
          throw new C(Qn);
        d = (h ? d.replace(si, "") : d).replace(Dr, "$1").replace(ct, "$1;"), d = "function(" + (A || "obj") + `) {
` + (A ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (h ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + d + `return __p
}`;
        var I = jo(function() {
          return N(f, m + "return " + d).apply(a, o);
        });
        if (I.source = d, _u(I))
          throw I;
        return I;
      }
      function Ep(n) {
        return G(n).toLowerCase();
      }
      function Rp(n) {
        return G(n).toUpperCase();
      }
      function mp(n, e, r) {
        if (n = G(n), n && (r || e === a))
          return of(n);
        if (!n || !(e = Wn(e)))
          return n;
        var t = re(n), i = re(e), f = af(t, i), o = lf(t, i) + 1;
        return Ge(t, f, o).join("");
      }
      function yp(n, e, r) {
        if (n = G(n), n && (r || e === a))
          return n.slice(0, cf(n) + 1);
        if (!n || !(e = Wn(e)))
          return n;
        var t = re(n), i = lf(t, re(e)) + 1;
        return Ge(t, 0, i).join("");
      }
      function Ap(n, e, r) {
        if (n = G(n), n && (r || e === a))
          return n.replace(Ur, "");
        if (!n || !(e = Wn(e)))
          return n;
        var t = re(n), i = af(t, re(e));
        return Ge(t, i).join("");
      }
      function Tp(n, e) {
        var r = fi, t = oi;
        if (Z(e)) {
          var i = "separator" in e ? e.separator : i;
          r = "length" in e ? O(e.length) : r, t = "omission" in e ? Wn(e.omission) : t;
        }
        n = G(n);
        var f = n.length;
        if (_r(n)) {
          var o = re(n);
          f = o.length;
        }
        if (r >= f)
          return n;
        var s = r - vr(t);
        if (s < 1)
          return t;
        var h = o ? Ge(o, 0, s).join("") : n.slice(0, s);
        if (i === a)
          return h + t;
        if (o && (s += h.length - s), vu(i)) {
          if (n.slice(s).search(i)) {
            var _, v = h;
            for (i.global || (i = Pi(i.source, G($.exec(i)) + "g")), i.lastIndex = 0; _ = i.exec(v); )
              var d = _.index;
            h = h.slice(0, d === a ? s : d);
          }
        } else if (n.indexOf(Wn(i), s) != s) {
          var E = h.lastIndexOf(i);
          E > -1 && (h = h.slice(0, E));
        }
        return h + t;
      }
      function Sp(n) {
        return n = G(n), n && Mr.test(n) ? n.replace(we, el) : n;
      }
      var Cp = yr(function(n, e, r) {
        return n + (r ? " " : "") + e.toUpperCase();
      }), xu = jf("toUpperCase");
      function ko(n, e, r) {
        return n = G(n), e = r ? a : e, e === a ? Qa(n) ? il(n) : Ga(n) : n.match(e) || [];
      }
      var jo = L(function(n, e) {
        try {
          return Ln(n, a, e);
        } catch (r) {
          return _u(r) ? r : new C(r);
        }
      }), bp = ye(function(n, e) {
        return Hn(e, function(r) {
          r = pe(r), Re(n, r, gu(n[r], n));
        }), n;
      });
      function Op(n) {
        var e = n == null ? 0 : n.length, r = y();
        return n = e ? z(n, function(t) {
          if (typeof t[1] != "function")
            throw new Yn(on);
          return [r(t[0]), t[1]];
        }) : [], L(function(t) {
          for (var i = -1; ++i < e; ) {
            var f = n[i];
            if (Ln(f[0], this, t))
              return Ln(f[1], this, t);
          }
        });
      }
      function Ip(n) {
        return es(Kn(n, nn));
      }
      function Eu(n) {
        return function() {
          return n;
        };
      }
      function Lp(n, e) {
        return n == null || n !== n ? e : n;
      }
      var Pp = eo(), Wp = eo(!0);
      function Sn(n) {
        return n;
      }
      function Ru(n) {
        return Lf(typeof n == "function" ? n : Kn(n, nn));
      }
      function Fp(n) {
        return Wf(Kn(n, nn));
      }
      function Dp(n, e) {
        return Ff(n, Kn(e, nn));
      }
      var Mp = L(function(n, e) {
        return function(r) {
          return Xr(r, n, e);
        };
      }), Bp = L(function(n, e) {
        return function(r) {
          return Xr(n, r, e);
        };
      });
      function mu(n, e, r) {
        var t = sn(e), i = Nt(e, t);
        r == null && !(Z(e) && (i.length || !t.length)) && (r = e, e = n, n = this, i = Nt(e, sn(e)));
        var f = !(Z(r) && "chain" in r) || !!r.chain, o = Te(n);
        return Hn(i, function(s) {
          var h = e[s];
          n[s] = h, o && (n.prototype[s] = function() {
            var _ = this.__chain__;
            if (f || _) {
              var v = n(this.__wrapped__), d = v.__actions__ = yn(this.__actions__);
              return d.push({ func: h, args: arguments, thisArg: n }), v.__chain__ = _, v;
            }
            return h.apply(n, De([this.value()], arguments));
          });
        }), n;
      }
      function Up() {
        return hn._ === this && (hn._ = sl), this;
      }
      function yu() {
      }
      function Np(n) {
        return n = O(n), L(function(e) {
          return Df(e, n);
        });
      }
      var $p = nu(z), Gp = nu(ef), Hp = nu(Ti);
      function na(n) {
        return ou(n) ? Si(pe(n)) : ws(n);
      }
      function Yp(n) {
        return function(e) {
          return n == null ? a : nr(n, e);
        };
      }
      var qp = to(), Kp = to(!0);
      function Au() {
        return [];
      }
      function Tu() {
        return !1;
      }
      function zp() {
        return {};
      }
      function Xp() {
        return "";
      }
      function Zp() {
        return !0;
      }
      function Jp(n, e) {
        if (n = O(n), n < 1 || n > jn)
          return [];
        var r = bn, t = _n(n, bn);
        e = y(e), n -= bn;
        for (var i = Oi(t, e); ++r < n; )
          e(r);
        return i;
      }
      function Qp(n) {
        return b(n) ? z(n, pe) : Fn(n) ? [n] : yn(Eo(G(n)));
      }
      function Vp(n) {
        var e = ++al;
        return G(n) + e;
      }
      var kp = Kt(function(n, e) {
        return n + e;
      }, 0), jp = eu("ceil"), n_ = Kt(function(n, e) {
        return n / e;
      }, 1), e_ = eu("floor");
      function r_(n) {
        return n && n.length ? Ut(n, Sn, $i) : a;
      }
      function t_(n, e) {
        return n && n.length ? Ut(n, y(e, 2), $i) : a;
      }
      function i_(n) {
        return uf(n, Sn);
      }
      function u_(n, e) {
        return uf(n, y(e, 2));
      }
      function f_(n) {
        return n && n.length ? Ut(n, Sn, qi) : a;
      }
      function o_(n, e) {
        return n && n.length ? Ut(n, y(e, 2), qi) : a;
      }
      var a_ = Kt(function(n, e) {
        return n * e;
      }, 1), l_ = eu("round"), s_ = Kt(function(n, e) {
        return n - e;
      }, 0);
      function c_(n) {
        return n && n.length ? bi(n, Sn) : 0;
      }
      function h_(n, e) {
        return n && n.length ? bi(n, y(e, 2)) : 0;
      }
      return u.after = Fh, u.ary = Lo, u.assign = Rg, u.assignIn = Ko, u.assignInWith = ii, u.assignWith = mg, u.at = yg, u.before = Po, u.bind = gu, u.bindAll = bp, u.bindKey = Wo, u.castArray = zh, u.chain = bo, u.chunk = ec, u.compact = rc, u.concat = tc, u.cond = Op, u.conforms = Ip, u.constant = Eu, u.countBy = ch, u.create = Ag, u.curry = Fo, u.curryRight = Do, u.debounce = Mo, u.defaults = Tg, u.defaultsDeep = Sg, u.defer = Dh, u.delay = Mh, u.difference = ic, u.differenceBy = uc, u.differenceWith = fc, u.drop = oc, u.dropRight = ac, u.dropRightWhile = lc, u.dropWhile = sc, u.fill = cc, u.filter = gh, u.flatMap = vh, u.flatMapDeep = dh, u.flatMapDepth = wh, u.flatten = Ao, u.flattenDeep = hc, u.flattenDepth = gc, u.flip = Bh, u.flow = Pp, u.flowRight = Wp, u.fromPairs = pc, u.functions = Wg, u.functionsIn = Fg, u.groupBy = xh, u.initial = vc, u.intersection = dc, u.intersectionBy = wc, u.intersectionWith = xc, u.invert = Mg, u.invertBy = Bg, u.invokeMap = Rh, u.iteratee = Ru, u.keyBy = mh, u.keys = sn, u.keysIn = Tn, u.map = kt, u.mapKeys = Ng, u.mapValues = $g, u.matches = Fp, u.matchesProperty = Dp, u.memoize = ni, u.merge = Gg, u.mergeWith = zo, u.method = Mp, u.methodOf = Bp, u.mixin = mu, u.negate = ei, u.nthArg = Np, u.omit = Hg, u.omitBy = Yg, u.once = Uh, u.orderBy = yh, u.over = $p, u.overArgs = Nh, u.overEvery = Gp, u.overSome = Hp, u.partial = pu, u.partialRight = Bo, u.partition = Ah, u.pick = qg, u.pickBy = Xo, u.property = na, u.propertyOf = Yp, u.pull = yc, u.pullAll = So, u.pullAllBy = Ac, u.pullAllWith = Tc, u.pullAt = Sc, u.range = qp, u.rangeRight = Kp, u.rearg = $h, u.reject = Ch, u.remove = Cc, u.rest = Gh, u.reverse = cu, u.sampleSize = Oh, u.set = zg, u.setWith = Xg, u.shuffle = Ih, u.slice = bc, u.sortBy = Wh, u.sortedUniq = Dc, u.sortedUniqBy = Mc, u.split = vp, u.spread = Hh, u.tail = Bc, u.take = Uc, u.takeRight = Nc, u.takeRightWhile = $c, u.takeWhile = Gc, u.tap = rh, u.throttle = Yh, u.thru = Vt, u.toArray = Ho, u.toPairs = Zo, u.toPairsIn = Jo, u.toPath = Qp, u.toPlainObject = qo, u.transform = Zg, u.unary = qh, u.union = Hc, u.unionBy = Yc, u.unionWith = qc, u.uniq = Kc, u.uniqBy = zc, u.uniqWith = Xc, u.unset = Jg, u.unzip = hu, u.unzipWith = Co, u.update = Qg, u.updateWith = Vg, u.values = Sr, u.valuesIn = kg, u.without = Zc, u.words = ko, u.wrap = Kh, u.xor = Jc, u.xorBy = Qc, u.xorWith = Vc, u.zip = kc, u.zipObject = jc, u.zipObjectDeep = nh, u.zipWith = eh, u.entries = Zo, u.entriesIn = Jo, u.extend = Ko, u.extendWith = ii, mu(u, u), u.add = kp, u.attempt = jo, u.camelCase = rp, u.capitalize = Qo, u.ceil = jp, u.clamp = jg, u.clone = Xh, u.cloneDeep = Jh, u.cloneDeepWith = Qh, u.cloneWith = Zh, u.conformsTo = Vh, u.deburr = Vo, u.defaultTo = Lp, u.divide = n_, u.endsWith = tp, u.eq = ie, u.escape = ip, u.escapeRegExp = up, u.every = hh, u.find = ph, u.findIndex = mo, u.findKey = Cg, u.findLast = _h, u.findLastIndex = yo, u.findLastKey = bg, u.floor = e_, u.forEach = Oo, u.forEachRight = Io, u.forIn = Og, u.forInRight = Ig, u.forOwn = Lg, u.forOwnRight = Pg, u.get = du, u.gt = kh, u.gte = jh, u.has = Dg, u.hasIn = wu, u.head = To, u.identity = Sn, u.includes = Eh, u.indexOf = _c, u.inRange = np, u.invoke = Ug, u.isArguments = tr, u.isArray = b, u.isArrayBuffer = ng, u.isArrayLike = An, u.isArrayLikeObject = un, u.isBoolean = eg, u.isBuffer = He, u.isDate = rg, u.isElement = tg, u.isEmpty = ig, u.isEqual = ug, u.isEqualWith = fg, u.isError = _u, u.isFinite = og, u.isFunction = Te, u.isInteger = Uo, u.isLength = ri, u.isMap = No, u.isMatch = ag, u.isMatchWith = lg, u.isNaN = sg, u.isNative = cg, u.isNil = gg, u.isNull = hg, u.isNumber = $o, u.isObject = Z, u.isObjectLike = V, u.isPlainObject = jr, u.isRegExp = vu, u.isSafeInteger = pg, u.isSet = Go, u.isString = ti, u.isSymbol = Fn, u.isTypedArray = Tr, u.isUndefined = _g, u.isWeakMap = vg, u.isWeakSet = dg, u.join = Ec, u.kebabCase = fp, u.last = Xn, u.lastIndexOf = Rc, u.lowerCase = op, u.lowerFirst = ap, u.lt = wg, u.lte = xg, u.max = r_, u.maxBy = t_, u.mean = i_, u.meanBy = u_, u.min = f_, u.minBy = o_, u.stubArray = Au, u.stubFalse = Tu, u.stubObject = zp, u.stubString = Xp, u.stubTrue = Zp, u.multiply = a_, u.nth = mc, u.noConflict = Up, u.noop = yu, u.now = jt, u.pad = lp, u.padEnd = sp, u.padStart = cp, u.parseInt = hp, u.random = ep, u.reduce = Th, u.reduceRight = Sh, u.repeat = gp, u.replace = pp, u.result = Kg, u.round = l_, u.runInContext = c, u.sample = bh, u.size = Lh, u.snakeCase = _p, u.some = Ph, u.sortedIndex = Oc, u.sortedIndexBy = Ic, u.sortedIndexOf = Lc, u.sortedLastIndex = Pc, u.sortedLastIndexBy = Wc, u.sortedLastIndexOf = Fc, u.startCase = dp, u.startsWith = wp, u.subtract = s_, u.sum = c_, u.sumBy = h_, u.template = xp, u.times = Jp, u.toFinite = Se, u.toInteger = O, u.toLength = Yo, u.toLower = Ep, u.toNumber = Zn, u.toSafeInteger = Eg, u.toString = G, u.toUpper = Rp, u.trim = mp, u.trimEnd = yp, u.trimStart = Ap, u.truncate = Tp, u.unescape = Sp, u.uniqueId = Vp, u.upperCase = Cp, u.upperFirst = xu, u.each = Oo, u.eachRight = Io, u.first = To, mu(u, function() {
        var n = {};
        return he(u, function(e, r) {
          H.call(u.prototype, r) || (n[r] = e);
        }), n;
      }(), { chain: !1 }), u.VERSION = fe, Hn(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(n) {
        u[n].placeholder = u;
      }), Hn(["drop", "take"], function(n, e) {
        M.prototype[n] = function(r) {
          r = r === a ? 1 : ln(O(r), 0);
          var t = this.__filtered__ && !e ? new M(this) : this.clone();
          return t.__filtered__ ? t.__takeCount__ = _n(r, t.__takeCount__) : t.__views__.push({
            size: _n(r, bn),
            type: n + (t.__dir__ < 0 ? "Right" : "")
          }), t;
        }, M.prototype[n + "Right"] = function(r) {
          return this.reverse()[n](r).reverse();
        };
      }), Hn(["filter", "map", "takeWhile"], function(n, e) {
        var r = e + 1, t = r == ae || r == ut;
        M.prototype[n] = function(i) {
          var f = this.clone();
          return f.__iteratees__.push({
            iteratee: y(i, 3),
            type: r
          }), f.__filtered__ = f.__filtered__ || t, f;
        };
      }), Hn(["head", "last"], function(n, e) {
        var r = "take" + (e ? "Right" : "");
        M.prototype[n] = function() {
          return this[r](1).value()[0];
        };
      }), Hn(["initial", "tail"], function(n, e) {
        var r = "drop" + (e ? "" : "Right");
        M.prototype[n] = function() {
          return this.__filtered__ ? new M(this) : this[r](1);
        };
      }), M.prototype.compact = function() {
        return this.filter(Sn);
      }, M.prototype.find = function(n) {
        return this.filter(n).head();
      }, M.prototype.findLast = function(n) {
        return this.reverse().find(n);
      }, M.prototype.invokeMap = L(function(n, e) {
        return typeof n == "function" ? new M(this) : this.map(function(r) {
          return Xr(r, n, e);
        });
      }), M.prototype.reject = function(n) {
        return this.filter(ei(y(n)));
      }, M.prototype.slice = function(n, e) {
        n = O(n);
        var r = this;
        return r.__filtered__ && (n > 0 || e < 0) ? new M(r) : (n < 0 ? r = r.takeRight(-n) : n && (r = r.drop(n)), e !== a && (e = O(e), r = e < 0 ? r.dropRight(-e) : r.take(e - n)), r);
      }, M.prototype.takeRightWhile = function(n) {
        return this.reverse().takeWhile(n).reverse();
      }, M.prototype.toArray = function() {
        return this.take(bn);
      }, he(M.prototype, function(n, e) {
        var r = /^(?:filter|find|map|reject)|While$/.test(e), t = /^(?:head|last)$/.test(e), i = u[t ? "take" + (e == "last" ? "Right" : "") : e], f = t || /^find/.test(e);
        i && (u.prototype[e] = function() {
          var o = this.__wrapped__, s = t ? [1] : arguments, h = o instanceof M, _ = s[0], v = h || b(o), d = function(W) {
            var B = i.apply(u, De([W], s));
            return t && E ? B[0] : B;
          };
          v && r && typeof _ == "function" && _.length != 1 && (h = v = !1);
          var E = this.__chain__, m = !!this.__actions__.length, A = f && !E, I = h && !m;
          if (!f && v) {
            o = I ? o : new M(this);
            var T = n.apply(o, s);
            return T.__actions__.push({ func: Vt, args: [d], thisArg: a }), new qn(T, E);
          }
          return A && I ? n.apply(this, s) : (T = this.thru(d), A ? t ? T.value()[0] : T.value() : T);
        });
      }), Hn(["pop", "push", "shift", "sort", "splice", "unshift"], function(n) {
        var e = yt[n], r = /^(?:push|sort|unshift)$/.test(n) ? "tap" : "thru", t = /^(?:pop|shift)$/.test(n);
        u.prototype[n] = function() {
          var i = arguments;
          if (t && !this.__chain__) {
            var f = this.value();
            return e.apply(b(f) ? f : [], i);
          }
          return this[r](function(o) {
            return e.apply(b(o) ? o : [], i);
          });
        };
      }), he(M.prototype, function(n, e) {
        var r = u[e];
        if (r) {
          var t = r.name + "";
          H.call(Er, t) || (Er[t] = []), Er[t].push({ name: e, func: r });
        }
      }), Er[qt(a, rn).name] = [{
        name: "wrapper",
        func: a
      }], M.prototype.clone = Sl, M.prototype.reverse = Cl, M.prototype.value = bl, u.prototype.at = th, u.prototype.chain = ih, u.prototype.commit = uh, u.prototype.next = fh, u.prototype.plant = ah, u.prototype.reverse = lh, u.prototype.toJSON = u.prototype.valueOf = u.prototype.value = sh, u.prototype.first = u.prototype.head, $r && (u.prototype[$r] = oh), u;
    }, dr = ul();
    Je ? ((Je.exports = dr)._ = dr, Ri._ = dr) : hn._ = dr;
  }).call(nt);
})(ui, ui.exports);
var __ = ui.exports;
const d_ = (_e) => {
  const { video: Jn, width: a, lengthScroll: fe } = _e, Bn = ra(null), Un = ra(null), [on, Qn] = Su(0), [k, oe] = Su(0), [j, nn] = Su(!1), pn = __.throttle(() => {
    window.requestAnimationFrame(() => {
      const F = Bn.current, J = Un.current;
      if (!F || !J)
        return;
      const Cn = J.scrollWidth - J.clientWidth, en = J.scrollLeft / Cn, rn = F.duration, tn = en * rn;
      F.currentTime = tn;
    });
  }, 50);
  return Cu(() => {
    const F = Un.current;
    if (!F)
      return;
    const J = (rn) => {
      Qn(rn.touches[0].clientX), oe(F.scrollLeft), nn(!0);
    }, Cn = (rn) => {
      if (j) {
        const En = rn.touches[0].clientX - on;
        F.scrollLeft = k - En, rn.preventDefault(), pn();
      }
    }, en = () => {
      nn(!1);
    };
    return F.addEventListener("touchstart", J), F.addEventListener("touchmove", Cn), F.addEventListener("touchend", en), () => {
      F.removeEventListener("touchstart", J), F.removeEventListener("touchmove", Cn), F.removeEventListener("touchend", en);
    };
  }, [j, pn]), Cu(() => {
    const F = Un.current;
    if (F)
      return F.addEventListener("scroll", pn), () => {
        F.removeEventListener("scroll", pn);
      };
  }, [pn]), Cu(() => {
    const F = Bn.current, J = Un.current;
    if (!(!J || !F) && F)
      return F.addEventListener("loadedmetadata", () => {
        const Cn = J.scrollWidth - J.clientWidth, en = F.currentTime / F.duration * Cn;
        J.scrollLeft = en;
      }), () => {
        F.removeEventListener("loadedmetadata", () => {
        });
      };
  }, []), /* @__PURE__ */ tt.jsxs(
    "div",
    {
      className: "video-scroll-container",
      style: {
        width: a
      },
      children: [
        /* @__PURE__ */ tt.jsx("div", { ref: Un, className: "scroll-container", children: /* @__PURE__ */ tt.jsx(
          "div",
          {
            className: "scroll-content",
            style: {
              minWidth: `${Math.round((fe || 2) * 100)}%`
            }
          }
        ) }),
        /* @__PURE__ */ tt.jsx("video", { ref: Bn, width: "100%", height: "auto", preload: "auto", playsInline: !0, muted: !0, children: /* @__PURE__ */ tt.jsx("source", { src: Jn, type: "video/mp4" }) })
      ]
    }
  );
};
export {
  d_ as VideoScroll
};

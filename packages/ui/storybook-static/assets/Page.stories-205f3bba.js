import { H as Ld } from './Header-eae9a791.js';
import { R as kd } from './index-f1f749bf.js';
import { j as xe } from './jsx-runtime-ccada58e.js';

import './_commonjsHelpers-042e6b4d.js';
import './index-4d501b15.js';
import './Button-42bbe43d.js';

var $d = Object.defineProperty;
var Dd = (e, t, r) =>
  t in e ? $d(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r);
var Jt = (e, t, r) => (Dd(e, typeof t != 'symbol' ? t + '' : t, r), r);

const { addons: Fd } = __STORYBOOK_MODULE_PREVIEW_API__,
  { once: Ud, logger: Hd } = __STORYBOOK_MODULE_CLIENT_LOGGER__,
  {
    FORCE_REMOUNT: qa,
    STORY_RENDER_PHASE_CHANGED: zd,
    SET_CURRENT_STORY: Vd,
    IGNORED_EXCEPTION: Wd,
  } = __STORYBOOK_MODULE_CORE_EVENTS__,
  { global: Ze } = __STORYBOOK_MODULE_GLOBAL__;
var Gd = Object.create,
  dl = Object.defineProperty,
  Kd = Object.getOwnPropertyDescriptor,
  pl = Object.getOwnPropertyNames,
  Yd = Object.getPrototypeOf,
  Jd = Object.prototype.hasOwnProperty,
  Xd = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  Fe = (e, t) =>
    function () {
      return t || (0, e[pl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Qd = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of pl(t))
        !Jd.call(e, a) &&
          a !== r &&
          dl(e, a, { get: () => t[a], enumerable: !(o = Kd(t, a)) || o.enumerable });
    return e;
  },
  kt = (e, t, r) => (
    (r = e != null ? Gd(Yd(e)) : {}),
    Qd(t || !e || !e.__esModule ? dl(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  Zd = Fe({
    '../../node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(i.toString(16));
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((p) => p + p)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: { value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)), enumerable: !1 },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  pn = Fe({
    '../../node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n),
          s = i !== null ? l.sort(i) : l;
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((u) => {
              Object.getOwnPropertyDescriptor(n, u).enumerable && s.push(u);
            }),
          s
        );
      };
      function r(n, i, l, s, u, p, d = ': ') {
        let f = '',
          m = 0,
          y = n.next();
        if (!y.done) {
          f += i.spacingOuter;
          let g = l + i.indent;
          for (; !y.done; ) {
            if (((f += g), m++ === i.maxWidth)) {
              f += '…';
              break;
            }
            let h = p(y.value[0], i, g, s, u),
              v = p(y.value[1], i, g, s, u);
            (f += h + d + v),
              (y = n.next()),
              y.done ? i.min || (f += ',') : (f += `,${i.spacingInner}`);
          }
          f += i.spacingOuter + l;
        }
        return f;
      }
      function o(n, i, l, s, u, p) {
        let d = '',
          f = 0,
          m = n.next();
        if (!m.done) {
          d += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            if (((d += y), f++ === i.maxWidth)) {
              d += '…';
              break;
            }
            (d += p(m.value, i, y, s, u)),
              (m = n.next()),
              m.done ? i.min || (d += ',') : (d += `,${i.spacingInner}`);
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, p) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let f = l + i.indent;
          for (let m = 0; m < n.length; m++) {
            if (((d += f), m === i.maxWidth)) {
              d += '…';
              break;
            }
            m in n && (d += p(n[m], i, f, s, u)),
              m < n.length - 1 ? (d += `,${i.spacingInner}`) : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, p) {
        let d = '',
          f = t(n, i.compareKeys);
        if (f.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < f.length; y++) {
            let g = f[y],
              h = p(g, i, m, s, u),
              v = p(n[g], i, m, s, u);
            (d += `${m + h}: ${v}`),
              y < f.length - 1 ? (d += `,${i.spacingInner}`) : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  ep = Fe({
    '../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o = typeof r == 'function' && r.for ? r.for('jest.asymmetricMatcher') : 1267621,
        a = ' ',
        c = (s, u, p, d, f, m) => {
          let y = s.toString();
          if (y === 'ArrayContaining' || y === 'ArrayNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}[${(0, t.printListItems)(s.sample, u, p, d, f, m)}]`;
          if (y === 'ObjectContaining' || y === 'ObjectNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}{${(0, t.printObjectProperties)(s.sample, u, p, d, f, m)}}`;
          if (
            y === 'StringMatching' ||
            y === 'StringNotMatching' ||
            y === 'StringContaining' ||
            y === 'StringNotContaining'
          )
            return y + a + m(s.sample, u, p, d, f);
          if (typeof s.toAsymmetricMatcher != 'function')
            throw new Error(
              `Asymmetric matcher ${s.constructor.name} does not implement toAsymmetricMatcher()`,
            );
          return s.toAsymmetricMatcher();
        };
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  tp = Fe({
    '../../node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (p) => o.indexOf(p) !== -1 || a.test(p),
        n = (p) => p && p.constructor && !!p.constructor.name && c(p.constructor.name);
      e.test = n;
      var i = (p) => p.constructor.name === 'NamedNodeMap',
        l = (p, d, f, m, y, g) => {
          let h = p.constructor.name;
          return ++m > d.maxDepth
            ? `[${h}]`
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? `{${(0, t.printObjectProperties)(
                      i(p)
                        ? Array.from(p).reduce((v, S) => ((v[S.name] = S.value), v), {})
                        : { ...p },
                      d,
                      f,
                      m,
                      y,
                      g,
                    )}}`
                  : `[${(0, t.printListItems)(Array.from(p), d, f, m, y, g)}]`);
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  rp = Fe({
    '../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  Io = Fe({
    '../../node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(rp());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, p, d, f, m, y) => {
        let g = d + p.indent,
          h = p.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, p, g, f, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = p.spacingOuter + g + E + p.spacingOuter + d),
                (E = `{${E}}`)),
              `${p.spacingInner + d + h.prop.open + v + h.prop.close}=${h.value.open}${E}${
                h.value.close
              }`
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, p, d, f, m) =>
        s
          .map((y) => u.spacingOuter + p + (typeof y == 'string' ? c(y, u) : m(y, u, p, d, f)))
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let p = u.colors.content;
        return p.open + (0, t.default)(s) + p.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let p = u.colors.comment;
        return `${p.open}<!--${(0, t.default)(s)}-->${p.close}`;
      };
      e.printComment = n;
      var i = (s, u, p, d, f) => {
        let m = d.colors.tag;
        return `${m.open}<${s}${u && m.close + u + d.spacingOuter + f + m.open}${
          p ? `>${m.close}${p}${d.spacingOuter}${f}${m.open}</${s}` : `${u && !d.min ? '' : ' '}/`
        }>${m.close}`;
      };
      e.printElement = i;
      var l = (s, u) => {
        let p = u.colors.tag;
        return `${p.open}<${s}${p.close} …${p.open} />${p.close}`;
      };
      e.printElementAsLeaf = l;
    },
  }),
  np = Fe({
    '../../node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Io(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return ((h = g == null ? void 0 : g.constructor) == null ? void 0 : h.name) && l(g);
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function p(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var f = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (p(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g) ? [] : Array.from(g.attributes, (R) => R.name).sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce((R, _) => ((R[_.name] = _.value), R), {}),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              h,
              v,
            );
      };
      e.serialize = f;
      var m = { serialize: f, test: s },
        y = m;
      e.default = y;
    },
  }),
  op = Fe({
    '../../node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = pn(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        p = (_) => `Immutable.${_}`,
        d = (_) => `[${_}]`,
        f = ' ',
        m = '…',
        y = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : `${p(U) + f}{${(0, t.printIteratorEntries)(_.entries(), O, x, j, z, V)}}`;
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, j, z, V) => {
          let U = p(_._name || 'Record');
          return ++j > O.maxDepth
            ? d(U)
            : `${U + f}{${(0, t.printIteratorEntries)(g(_), O, x, j, z, V)}}`;
        },
        v = (_, O, x, j, z, V) => {
          let U = p('Seq');
          return ++j > O.maxDepth
            ? d(U)
            : _[a]
              ? `${U + f}{${
                  _._iter || _._object ? (0, t.printIteratorEntries)(_.entries(), O, x, j, z, V) : m
                }}`
              : `${U + f}[${
                  _._iter || _._array || _._collection || _._iterable
                    ? (0, t.printIteratorValues)(_.values(), O, x, j, z, V)
                    : m
                }]`;
        },
        S = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : `${p(U) + f}[${(0, t.printIteratorValues)(_.values(), O, x, j, z, V)}]`,
        E = (_, O, x, j, z, V) =>
          _[c]
            ? y(_, O, x, j, z, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, j, z, V, 'List')
              : _[s]
                ? S(_, O, x, j, z, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, j, z, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, j, z, V)
                    : h(_, O, x, j, z, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  ap = Fe({
    '../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          c = Symbol.for('react.profiler'),
          n = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          s = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          p = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          m = Symbol.for('react.offscreen'),
          y = !1,
          g = !1,
          h = !1,
          v = !1,
          S = !1,
          E;
        E = Symbol.for('react.module.reference');
        function C(L) {
          return !!(
            typeof L == 'string' ||
            typeof L == 'function' ||
            L === o ||
            L === c ||
            S ||
            L === a ||
            L === u ||
            L === p ||
            v ||
            L === m ||
            y ||
            g ||
            h ||
            (typeof L == 'object' &&
              L !== null &&
              (L.$$typeof === f ||
                L.$$typeof === d ||
                L.$$typeof === n ||
                L.$$typeof === i ||
                L.$$typeof === s ||
                L.$$typeof === E ||
                L.getModuleId !== void 0))
          );
        }
        function A(L) {
          if (typeof L == 'object' && L !== null) {
            var ae = L.$$typeof;
            switch (ae) {
              case t:
                var ie = L.type;
                switch (ie) {
                  case o:
                  case c:
                  case a:
                  case u:
                  case p:
                    return ie;
                  default:
                    var pe = ie && ie.$$typeof;
                    switch (pe) {
                      case l:
                      case i:
                      case s:
                      case f:
                      case d:
                      case n:
                        return pe;
                      default:
                        return ae;
                    }
                }
              case r:
                return ae;
            }
          }
        }
        var R = i,
          _ = n,
          O = t,
          x = s,
          j = o,
          z = f,
          V = d,
          U = r,
          ee = c,
          G = a,
          ne = u,
          oe = p,
          ue = !1,
          ce = !1;
        function q(L) {
          return (
            ue ||
              ((ue = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function M(L) {
          return (
            ce ||
              ((ce = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function k(L) {
          return A(L) === i;
        }
        function D(L) {
          return A(L) === n;
        }
        function Y(L) {
          return typeof L == 'object' && L !== null && L.$$typeof === t;
        }
        function I(L) {
          return A(L) === s;
        }
        function N(L) {
          return A(L) === o;
        }
        function H(L) {
          return A(L) === f;
        }
        function Z(L) {
          return A(L) === d;
        }
        function b(L) {
          return A(L) === r;
        }
        function B(L) {
          return A(L) === c;
        }
        function $(L) {
          return A(L) === a;
        }
        function X(L) {
          return A(L) === u;
        }
        function W(L) {
          return A(L) === p;
        }
        (e.ContextConsumer = R),
          (e.ContextProvider = _),
          (e.Element = O),
          (e.ForwardRef = x),
          (e.Fragment = j),
          (e.Lazy = z),
          (e.Memo = V),
          (e.Portal = U),
          (e.Profiler = ee),
          (e.StrictMode = G),
          (e.Suspense = ne),
          (e.SuspenseList = oe),
          (e.isAsyncMode = q),
          (e.isConcurrentMode = M),
          (e.isContextConsumer = k),
          (e.isContextProvider = D),
          (e.isElement = Y),
          (e.isForwardRef = I),
          (e.isFragment = N),
          (e.isLazy = H),
          (e.isMemo = Z),
          (e.isPortal = b),
          (e.isProfiler = B),
          (e.isStrictMode = $),
          (e.isSuspense = X),
          (e.isSuspenseList = W),
          (e.isValidElementType = C),
          (e.typeOf = A);
      })();
    },
  }),
  ip = Fe({
    '../../node_modules/pretty-format/node_modules/react-is/index.js'(e, t) {
      t.exports = ap();
    },
  }),
  lp = Fe({
    '../../node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(ip()),
        r = Io();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var f = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : f;
        })(d);
      }
      function a(d, f) {
        if (!f && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function')) return { default: d };
        var m = o(f);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set) ? Object.defineProperty(y, h, v) : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, f = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, f);
              })
            : d != null && d !== !1 && f.push(d),
          f
        ),
        n = (d) => {
          let f = d.type;
          if (typeof f == 'string') return f;
          if (typeof f == 'function') return f.displayName || f.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof f == 'object' && f !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (f.displayName) return f.displayName;
              let m = f.render.displayName || f.render.name || '';
              return m !== '' ? `ForwardRef(${m})` : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = f.displayName || f.type.displayName || f.type.name || '';
              return m !== '' ? `Memo(${m})` : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: f } = d;
          return Object.keys(f)
            .filter((m) => m !== 'children' && f[m] !== void 0)
            .sort();
        },
        l = (d, f, m, y, g, h) =>
          ++y > f.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), f)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, f, m + f.indent, y, g, h),
                (0, r.printChildren)(c(d.props.children), f, m + f.indent, y, g, h),
                f,
                m,
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        p = u;
      e.default = p;
    },
  }),
  sp = Fe({
    '../../node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Io(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o = typeof r == 'function' && r.for ? r.for('react.test.json') : 245830487,
        a = (s) => {
          let { props: u } = s;
          return u
            ? Object.keys(u)
                .filter((p) => u[p] !== void 0)
                .sort()
            : [];
        },
        c = (s, u, p, d, f, m) =>
          ++d > u.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, u)
            : (0, t.printElement)(
                s.type,
                s.props ? (0, t.printProps)(a(s), s.props, u, p + u.indent, d, f, m) : '',
                s.children ? (0, t.printChildren)(s.children, u, p + u.indent, d, f, m) : '',
                u,
                p,
              );
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  No = Fe({
    '../../node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = N),
        (e.plugins = void 0);
      var t = s(Zd()),
        r = pn(),
        o = s(ep()),
        a = s(tp()),
        c = s(np()),
        n = s(op()),
        i = s(lp()),
        l = s(sp());
      function s(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var u = Object.prototype.toString,
        p = Date.prototype.toISOString,
        d = Error.prototype.toString,
        f = RegExp.prototype.toString,
        m = (b) => (typeof b.constructor == 'function' && b.constructor.name) || 'Object',
        y = (b) => typeof window < 'u' && b === window,
        g = /^Symbol\((.*)\)(.*)$/,
        h = /\n/gi,
        v = class extends Error {
          constructor(b, B) {
            super(b), (this.stack = B), (this.name = this.constructor.name);
          }
        };
      function S(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function E(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function C(b) {
        return `${b}n`;
      }
      function A(b, B) {
        return B ? `[Function ${b.name || 'anonymous'}]` : '[Function]';
      }
      function R(b) {
        return String(b).replace(g, 'Symbol($1)');
      }
      function _(b) {
        return `[${d.call(b)}]`;
      }
      function O(b, B, $, X) {
        if (b === !0 || b === !1) return `${b}`;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return E(b);
        if (W === 'bigint') return C(b);
        if (W === 'string') return X ? `"${b.replace(/"|\\/g, '\\$&')}"` : `"${b}"`;
        if (W === 'function') return A(b, B);
        if (W === 'symbol') return R(b);
        let L = u.call(b);
        return L === '[object WeakMap]'
          ? 'WeakMap {}'
          : L === '[object WeakSet]'
            ? 'WeakSet {}'
            : L === '[object Function]' || L === '[object GeneratorFunction]'
              ? A(b, B)
              : L === '[object Symbol]'
                ? R(b)
                : L === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : p.call(b)
                  : L === '[object Error]'
                    ? _(b)
                    : L === '[object RegExp]'
                      ? $
                        ? f.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : f.call(b)
                      : b instanceof Error
                        ? _(b)
                        : null;
      }
      function x(b, B, $, X, W, L) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ae = ++X > B.maxDepth,
          ie = B.min;
        if (B.callToJSON && !ae && b.toJSON && typeof b.toJSON == 'function' && !L)
          return U(b.toJSON(), B, $, X, W, !0);
        let pe = u.call(b);
        return pe === '[object Arguments]'
          ? ae
            ? '[Arguments]'
            : `${ie ? '' : 'Arguments '}[${(0, r.printListItems)(b, B, $, X, W, U)}]`
          : S(pe)
            ? ae
              ? `[${b.constructor.name}]`
              : `${
                  ie || (!B.printBasicPrototype && b.constructor.name === 'Array')
                    ? ''
                    : `${b.constructor.name} `
                }[${(0, r.printListItems)(b, B, $, X, W, U)}]`
            : pe === '[object Map]'
              ? ae
                ? '[Map]'
                : `Map {${(0, r.printIteratorEntries)(b.entries(), B, $, X, W, U, ' => ')}}`
              : pe === '[object Set]'
                ? ae
                  ? '[Set]'
                  : `Set {${(0, r.printIteratorValues)(b.values(), B, $, X, W, U)}}`
                : ae || y(b)
                  ? `[${m(b)}]`
                  : `${ie || (!B.printBasicPrototype && m(b) === 'Object') ? '' : `${m(b)} `}{${(0,
                    r.printObjectProperties)(b, B, $, X, W, U)}}`;
      }
      function j(b) {
        return b.serialize != null;
      }
      function z(b, B, $, X, W, L) {
        let ae;
        try {
          ae = j(b)
            ? b.serialize(B, $, X, W, L, U)
            : b.print(
                B,
                (ie) => U(ie, $, X, W, L),
                (ie) => {
                  let pe = X + $.indent;
                  return (
                    pe +
                    ie.replace(
                      h,
                      `
${pe}`,
                    )
                  );
                },
                { edgeSpacing: $.spacingOuter, min: $.min, spacing: $.spacingInner },
                $.colors,
              );
        } catch (ie) {
          throw new v(ie.message, ie.stack);
        }
        if (typeof ae != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ae}".`,
          );
        return ae;
      }
      function V(b, B) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(B)) return b[$];
          } catch (X) {
            throw new v(X.message, X.stack);
          }
        return null;
      }
      function U(b, B, $, X, W, L) {
        let ae = V(B.plugins, b);
        if (ae !== null) return z(ae, b, B, $, X, W);
        let ie = O(b, B.printFunctionName, B.escapeRegex, B.escapeString);
        return ie !== null ? ie : x(b, B, $, X, W, L);
      }
      var ee = { comment: 'gray', content: 'reset', prop: 'yellow', tag: 'cyan', value: 'green' },
        G = Object.keys(ee),
        ne = (b) => b,
        oe = ne({
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          maxWidth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: ee,
        });
      e.DEFAULT_OPTIONS = oe;
      function ue(b) {
        if (
          (Object.keys(b).forEach((B) => {
            if (!Object.prototype.hasOwnProperty.call(oe, B))
              throw new Error(`pretty-format: Unknown option "${B}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
        if (b.theme !== void 0) {
          if (b.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`,
            );
        }
      }
      var ce = (b) =>
          G.reduce((B, $) => {
            let X = b.theme && b.theme[$] !== void 0 ? b.theme[$] : ee[$],
              W = X && t.default[X];
            if (W && typeof W.close == 'string' && typeof W.open == 'string') B[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${X}" is undefined in ansi-styles.`,
              );
            return B;
          }, Object.create(null)),
        q = () => G.reduce((b, B) => ((b[B] = { close: '', open: '' }), b), Object.create(null)),
        M = (b) => (b == null ? void 0 : b.printFunctionName) ?? oe.printFunctionName,
        k = (b) => (b == null ? void 0 : b.escapeRegex) ?? oe.escapeRegex,
        D = (b) => (b == null ? void 0 : b.escapeString) ?? oe.escapeString,
        Y = (b) => ({
          callToJSON: (b == null ? void 0 : b.callToJSON) ?? oe.callToJSON,
          colors: b != null && b.highlight ? ce(b) : q(),
          compareKeys:
            typeof (b == null ? void 0 : b.compareKeys) == 'function' ||
            (b == null ? void 0 : b.compareKeys) === null
              ? b.compareKeys
              : oe.compareKeys,
          escapeRegex: k(b),
          escapeString: D(b),
          indent: b != null && b.min ? '' : I((b == null ? void 0 : b.indent) ?? oe.indent),
          maxDepth: (b == null ? void 0 : b.maxDepth) ?? oe.maxDepth,
          maxWidth: (b == null ? void 0 : b.maxWidth) ?? oe.maxWidth,
          min: (b == null ? void 0 : b.min) ?? oe.min,
          plugins: (b == null ? void 0 : b.plugins) ?? oe.plugins,
          printBasicPrototype: (b == null ? void 0 : b.printBasicPrototype) ?? !0,
          printFunctionName: M(b),
          spacingInner:
            b != null && b.min
              ? ' '
              : `
`,
          spacingOuter:
            b != null && b.min
              ? ''
              : `
`,
        });
      function I(b) {
        return new Array(b + 1).join(' ');
      }
      function N(b, B) {
        if (B && (ue(B), B.plugins)) {
          let X = V(B.plugins, b);
          if (X !== null) return z(X, b, Y(B), '', 0, []);
        }
        let $ = O(b, M(B), k(B), D(B));
        return $ !== null ? $ : x(b, Y(B), '', 0, []);
      }
      var H = {
        AsymmetricMatcher: o.default,
        DOMCollection: a.default,
        DOMElement: c.default,
        Immutable: n.default,
        ReactElement: i.default,
        ReactTestComponent: l.default,
      };
      e.plugins = H;
      var Z = N;
      e.default = Z;
    },
  }),
  fl = Fe({
    '../../node_modules/diff-sequences/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = f);
      var t = 'diff-sequences',
        r = 0,
        o = (m, y, g, h, v) => {
          let S = 0;
          for (; m < y && g < h && v(m, g); ) (m += 1), (g += 1), (S += 1);
          return S;
        },
        a = (m, y, g, h, v) => {
          let S = 0;
          for (; m <= y && g <= h && v(y, h); ) (y -= 1), (h -= 1), (S += 1);
          return S;
        },
        c = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = -m,
            R = S[C],
            _ = R;
          S[C] += o(R + 1, y, h + R - A + 1, g, v);
          let O = m < E ? m : E;
          for (C += 1, A += 2; C <= O; C += 1, A += 2) {
            if (C !== m && _ < S[C]) R = S[C];
            else if (((R = _ + 1), y <= R)) return C - 1;
            (_ = S[C]), (S[C] = R + o(R + 1, y, h + R - A + 1, g, v));
          }
          return E;
        },
        n = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = m,
            R = S[C],
            _ = R;
          S[C] -= a(y, R - 1, g, h + R - A - 1, v);
          let O = m < E ? m : E;
          for (C += 1, A -= 2; C <= O; C += 1, A -= 2) {
            if (C !== m && S[C] < _) R = S[C];
            else if (((R = _ - 1), R < y)) return C - 1;
            (_ = S[C]), (S[C] = R - a(y, R - 1, g, h + R - A - 1, v));
          }
          return E;
        },
        i = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = h - y,
            x = g - y,
            j = v - h - x,
            z = -j - (m - 1),
            V = -j + (m - 1),
            U = r,
            ee = m < C ? m : C;
          for (let G = 0, ne = -m; G <= ee; G += 1, ne += 2) {
            let oe = G === 0 || (G !== m && U < E[G]),
              ue = oe ? E[G] : U,
              ce = oe ? ue : ue + 1,
              q = O + ce - ne,
              M = o(ce + 1, g, q + 1, v, S),
              k = ce + M;
            if (((U = E[G]), (E[G] = k), z <= ne && ne <= V)) {
              let D = (m - 1 - (ne + j)) / 2;
              if (D <= R && A[D] - 1 <= k) {
                let Y = O + ue - (oe ? ne + 1 : ne - 1),
                  I = a(y, ue, h, Y, S),
                  N = ue - I,
                  H = Y - I,
                  Z = N + 1,
                  b = H + 1;
                (_.nChangePreceding = m - 1),
                  m - 1 === Z + b - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = Z), (_.bEndPreceding = b)),
                  (_.nCommonPreceding = I),
                  I !== 0 && ((_.aCommonPreceding = Z), (_.bCommonPreceding = b)),
                  (_.nCommonFollowing = M),
                  M !== 0 && ((_.aCommonFollowing = ce + 1), (_.bCommonFollowing = q + 1));
                let B = k + 1,
                  $ = q + M + 1;
                return (
                  (_.nChangeFollowing = m - 1),
                  m - 1 === g + v - B - $
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = B), (_.bStartFollowing = $)),
                  !0
                );
              }
            }
          }
          return !1;
        },
        l = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = v - g,
            x = g - y,
            j = v - h - x,
            z = j - m,
            V = j + m,
            U = r,
            ee = m < R ? m : R;
          for (let G = 0, ne = m; G <= ee; G += 1, ne -= 2) {
            let oe = G === 0 || (G !== m && A[G] < U),
              ue = oe ? A[G] : U,
              ce = oe ? ue : ue - 1,
              q = O + ce - ne,
              M = a(y, ce - 1, h, q - 1, S),
              k = ce - M;
            if (((U = A[G]), (A[G] = k), z <= ne && ne <= V)) {
              let D = (m + (ne - j)) / 2;
              if (D <= C && k - 1 <= E[D]) {
                let Y = q - M;
                if (
                  ((_.nChangePreceding = m),
                  m === k + Y - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = k), (_.bEndPreceding = Y)),
                  (_.nCommonPreceding = M),
                  M !== 0 && ((_.aCommonPreceding = k), (_.bCommonPreceding = Y)),
                  (_.nChangeFollowing = m - 1),
                  m === 1)
                )
                  (_.nCommonFollowing = 0), (_.aStartFollowing = g), (_.bStartFollowing = v);
                else {
                  let I = O + ue - (oe ? ne - 1 : ne + 1),
                    N = o(ue, g, I, v, S);
                  (_.nCommonFollowing = N),
                    N !== 0 && ((_.aCommonFollowing = ue), (_.bCommonFollowing = I));
                  let H = ue + N,
                    Z = I + N;
                  m - 1 === g + v - H - Z
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = H), (_.bStartFollowing = Z));
                }
                return !0;
              }
            }
          }
          return !1;
        },
        s = (m, y, g, h, v, S, E, C, A) => {
          let R = h - y,
            _ = v - g,
            O = g - y,
            x = v - h,
            j = x - O,
            z = O,
            V = O;
          if (((E[0] = y - 1), (C[0] = g), j % 2 === 0)) {
            let U = (m || j) / 2,
              ee = (O + x) / 2;
            for (let G = 1; G <= ee; G += 1)
              if (((z = c(G, g, v, R, S, E, z)), G < U)) V = n(G, y, h, _, S, C, V);
              else if (l(G, y, g, h, v, S, E, z, C, V, A)) return;
          } else {
            let U = ((m || j) + 1) / 2,
              ee = (O + x + 1) / 2,
              G = 1;
            for (z = c(G, g, v, R, S, E, z), G += 1; G <= ee; G += 1)
              if (((V = n(G - 1, y, h, _, S, C, V)), G < U)) z = c(G, g, v, R, S, E, z);
              else if (i(G, y, g, h, v, S, E, z, C, V, A)) return;
          }
          throw new Error(`${t}: no overlap aStart=${y} aEnd=${g} bStart=${h} bEnd=${v}`);
        },
        u = (m, y, g, h, v, S, E, C, A, R) => {
          if (v - h < g - y) {
            if (((S = !S), S && E.length === 1)) {
              let { foundSubsequence: D, isCommon: Y } = E[0];
              E[1] = {
                foundSubsequence: (I, N, H) => {
                  D(I, H, N);
                },
                isCommon: (I, N) => Y(N, I),
              };
            }
            let M = y,
              k = g;
            (y = h), (g = v), (h = M), (v = k);
          }
          let { foundSubsequence: _, isCommon: O } = E[S ? 1 : 0];
          s(m, y, g, h, v, O, C, A, R);
          let {
            nChangePreceding: x,
            aEndPreceding: j,
            bEndPreceding: z,
            nCommonPreceding: V,
            aCommonPreceding: U,
            bCommonPreceding: ee,
            nCommonFollowing: G,
            aCommonFollowing: ne,
            bCommonFollowing: oe,
            nChangeFollowing: ue,
            aStartFollowing: ce,
            bStartFollowing: q,
          } = R;
          y < j && h < z && u(x, y, j, h, z, S, E, C, A, R),
            V !== 0 && _(V, U, ee),
            G !== 0 && _(G, ne, oe),
            ce < g && q < v && u(ue, ce, g, q, v, S, E, C, A, R);
        },
        p = (m, y) => {
          if (typeof y != 'number')
            throw new TypeError(`${t}: ${m} typeof ${typeof y} is not a number`);
          if (!Number.isSafeInteger(y))
            throw new RangeError(`${t}: ${m} value ${y} is not a safe integer`);
          if (y < 0) throw new RangeError(`${t}: ${m} value ${y} is a negative integer`);
        },
        d = (m, y) => {
          let g = typeof y;
          if (g !== 'function') throw new TypeError(`${t}: ${m} typeof ${g} is not a function`);
        };
      function f(m, y, g, h) {
        p('aLength', m), p('bLength', y), d('isCommon', g), d('foundSubsequence', h);
        let v = o(0, m, 0, y, g);
        if ((v !== 0 && h(v, 0, 0), m !== v || y !== v)) {
          let S = v,
            E = v,
            C = a(S, m - 1, E, y - 1, g),
            A = m - C,
            R = y - C,
            _ = v + C;
          m !== _ &&
            y !== _ &&
            u(0, S, A, E, R, !1, [{ foundSubsequence: h, isCommon: g }], [r], [r], {
              aCommonFollowing: r,
              aCommonPreceding: r,
              aEndPreceding: r,
              aStartFollowing: r,
              bCommonFollowing: r,
              bCommonPreceding: r,
              bEndPreceding: r,
              bStartFollowing: r,
              nChangeFollowing: r,
              nChangePreceding: r,
              nCommonFollowing: r,
              nCommonPreceding: r,
            }),
            C !== 0 && h(C, A, R);
        }
      }
    },
  }),
  ml = Fe({
    '../../node_modules/loupe/loupe.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? o(e)
          : typeof define == 'function' && define.amd
            ? define(['exports'], o)
            : ((r = typeof globalThis < 'u' ? globalThis : r || self), o((r.loupe = {})));
      })(e, function (r) {
        function o(w) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (o = function (T) {
                  return typeof T;
                })
              : (o = function (T) {
                  return T &&
                    typeof Symbol == 'function' &&
                    T.constructor === Symbol &&
                    T !== Symbol.prototype
                    ? 'symbol'
                    : typeof T;
                }),
            o(w)
          );
        }
        function a(w, T) {
          return c(w) || n(w, T) || i(w, T) || s();
        }
        function c(w) {
          if (Array.isArray(w)) return w;
        }
        function n(w, T) {
          if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(w)))) {
            var F = [],
              K = !0,
              te = !1,
              le = void 0;
            try {
              for (
                var se = w[Symbol.iterator](), de;
                !(K = (de = se.next()).done) && (F.push(de.value), !(T && F.length === T));
                K = !0
              );
            } catch (ye) {
              (te = !0), (le = ye);
            } finally {
              try {
                !K && se.return != null && se.return();
              } finally {
                if (te) throw le;
              }
            }
            return F;
          }
        }
        function i(w, T) {
          if (w) {
            if (typeof w == 'string') return l(w, T);
            var F = Object.prototype.toString.call(w).slice(8, -1);
            if (
              (F === 'Object' && w.constructor && (F = w.constructor.name),
              F === 'Map' || F === 'Set')
            )
              return Array.from(w);
            if (F === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))
              return l(w, T);
          }
        }
        function l(w, T) {
          (T == null || T > w.length) && (T = w.length);
          for (var F = 0, K = new Array(T); F < T; F++) K[F] = w[F];
          return K;
        }
        function s() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var u = {
            bold: ['1', '22'],
            dim: ['2', '22'],
            italic: ['3', '23'],
            underline: ['4', '24'],
            inverse: ['7', '27'],
            hidden: ['8', '28'],
            strike: ['9', '29'],
            black: ['30', '39'],
            red: ['31', '39'],
            green: ['32', '39'],
            yellow: ['33', '39'],
            blue: ['34', '39'],
            magenta: ['35', '39'],
            cyan: ['36', '39'],
            white: ['37', '39'],
            brightblack: ['30;1', '39'],
            brightred: ['31;1', '39'],
            brightgreen: ['32;1', '39'],
            brightyellow: ['33;1', '39'],
            brightblue: ['34;1', '39'],
            brightmagenta: ['35;1', '39'],
            brightcyan: ['36;1', '39'],
            brightwhite: ['37;1', '39'],
            grey: ['90', '39'],
          },
          p = {
            special: 'cyan',
            number: 'yellow',
            bigint: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            symbol: 'green',
            date: 'magenta',
            regexp: 'red',
          },
          d = '…';
        function f(w, T) {
          var F = u[p[T]] || u[T];
          return F
            ? '\x1B['.concat(F[0], 'm').concat(String(w), '\x1B[').concat(F[1], 'm')
            : String(w);
        }
        function m() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            T = w.showHidden,
            F = T === void 0 ? !1 : T,
            K = w.depth,
            te = K === void 0 ? 2 : K,
            le = w.colors,
            se = le === void 0 ? !1 : le,
            de = w.customInspect,
            ye = de === void 0 ? !0 : de,
            me = w.showProxy,
            re = me === void 0 ? !1 : me,
            Pe = w.maxArrayLength,
            Je = Pe === void 0 ? 1 / 0 : Pe,
            Ae = w.breakLength,
            qe = Ae === void 0 ? 1 / 0 : Ae,
            ke = w.seen,
            St = ke === void 0 ? [] : ke,
            dt = w.truncate,
            jt = dt === void 0 ? 1 / 0 : dt,
            Ct = w.stylize,
            Kt = Ct === void 0 ? String : Ct,
            rt = {
              showHidden: !!F,
              depth: Number(te),
              colors: !!se,
              customInspect: !!ye,
              showProxy: !!re,
              maxArrayLength: Number(Je),
              breakLength: Number(qe),
              truncate: Number(jt),
              seen: St,
              stylize: Kt,
            };
          return rt.colors && (rt.stylize = f), rt;
        }
        function y(w, T) {
          var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : d;
          w = String(w);
          var K = F.length,
            te = w.length;
          return K > T && te > K
            ? F
            : te > T && te > K
              ? ''.concat(w.slice(0, T - K)).concat(F)
              : w;
        }
        function g(w, T, F) {
          var K = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ', ';
          F = F || T.inspect;
          var te = w.length;
          if (te === 0) return '';
          for (var le = T.truncate, se = '', de = '', ye = '', me = 0; me < te; me += 1) {
            var re = me + 1 === w.length,
              Pe = me + 2 === w.length;
            ye = ''.concat(d, '(').concat(w.length - me, ')');
            var Je = w[me];
            T.truncate = le - se.length - (re ? 0 : K.length);
            var Ae = de || F(Je, T) + (re ? '' : K),
              qe = se.length + Ae.length,
              ke = qe + ye.length;
            if (
              (re && qe > le && se.length + ye.length <= le) ||
              (!re && !Pe && ke > le) ||
              ((de = re ? '' : F(w[me + 1], T) + (Pe ? '' : K)),
              !re && Pe && ke > le && qe + de.length > le)
            )
              break;
            if (((se += Ae), !re && !Pe && qe + de.length >= le)) {
              ye = ''.concat(d, '(').concat(w.length - me - 1, ')');
              break;
            }
            ye = '';
          }
          return ''.concat(se).concat(ye);
        }
        function h(w) {
          return w.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
            ? w
            : JSON.stringify(w)
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
        }
        function v(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 2),
            typeof K == 'string'
              ? (K = h(K))
              : typeof K != 'number' && (K = '['.concat(T.inspect(K, T), ']')),
            (T.truncate -= K.length),
            (te = T.inspect(te, T)),
            ''.concat(K, ': ').concat(te)
          );
        }
        function S(w, T) {
          var F = Object.keys(w).slice(w.length);
          if (!w.length && !F.length) return '[]';
          T.truncate -= 4;
          var K = g(w, T);
          T.truncate -= K.length;
          var te = '';
          return (
            F.length &&
              (te = g(
                F.map(function (le) {
                  return [le, w[le]];
                }),
                T,
                v,
              )),
            '[ '.concat(K).concat(te ? ', '.concat(te) : '', ' ]')
          );
        }
        var E = Function.prototype.toString,
          C = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
        function A(w) {
          if (typeof w != 'function') return null;
          var T = '';
          if (typeof Function.prototype.name > 'u' && typeof w.name > 'u') {
            var F = E.call(w).match(C);
            F && (T = F[1]);
          } else T = w.name;
          return T;
        }
        var R = A,
          _ = function (w) {
            return typeof Buffer == 'function' && w instanceof Buffer
              ? 'Buffer'
              : w[Symbol.toStringTag]
                ? w[Symbol.toStringTag]
                : R(w.constructor);
          };
        function O(w, T) {
          var F = _(w);
          T.truncate -= F.length + 4;
          var K = Object.keys(w).slice(w.length);
          if (!w.length && !K.length) return ''.concat(F, '[]');
          for (var te = '', le = 0; le < w.length; le++) {
            var se = ''
              .concat(T.stylize(y(w[le], T.truncate), 'number'))
              .concat(le === w.length - 1 ? '' : ', ');
            if (((T.truncate -= se.length), w[le] !== w.length && T.truncate <= 3)) {
              te += ''.concat(d, '(').concat(w.length - w[le] + 1, ')');
              break;
            }
            te += se;
          }
          var de = '';
          return (
            K.length &&
              (de = g(
                K.map(function (ye) {
                  return [ye, w[ye]];
                }),
                T,
                v,
              )),
            ''
              .concat(F, '[ ')
              .concat(te)
              .concat(de ? ', '.concat(de) : '', ' ]')
          );
        }
        function x(w, T) {
          var F = w.toJSON();
          if (F === null) return 'Invalid Date';
          var K = F.split('T'),
            te = K[0];
          return T.stylize(''.concat(te, 'T').concat(y(K[1], T.truncate - te.length - 1)), 'date');
        }
        function j(w, T) {
          var F = R(w);
          return F
            ? T.stylize('[Function '.concat(y(F, T.truncate - 11), ']'), 'special')
            : T.stylize('[Function]', 'special');
        }
        function z(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 4),
            (K = T.inspect(K, T)),
            (T.truncate -= K.length),
            (te = T.inspect(te, T)),
            ''.concat(K, ' => ').concat(te)
          );
        }
        function V(w) {
          var T = [];
          return (
            w.forEach(function (F, K) {
              T.push([K, F]);
            }),
            T
          );
        }
        function U(w, T) {
          var F = w.size - 1;
          return F <= 0 ? 'Map{}' : ((T.truncate -= 7), 'Map{ '.concat(g(V(w), T, z), ' }'));
        }
        var ee =
          Number.isNaN ||
          function (w) {
            return w !== w;
          };
        function G(w, T) {
          return ee(w)
            ? T.stylize('NaN', 'number')
            : w === 1 / 0
              ? T.stylize('Infinity', 'number')
              : w === -1 / 0
                ? T.stylize('-Infinity', 'number')
                : w === 0
                  ? T.stylize(1 / w === 1 / 0 ? '+0' : '-0', 'number')
                  : T.stylize(y(w, T.truncate), 'number');
        }
        function ne(w, T) {
          var F = y(w.toString(), T.truncate - 1);
          return F !== d && (F += 'n'), T.stylize(F, 'bigint');
        }
        function oe(w, T) {
          var F = w.toString().split('/')[2],
            K = T.truncate - (2 + F.length),
            te = w.source;
          return T.stylize('/'.concat(y(te, K), '/').concat(F), 'regexp');
        }
        function ue(w) {
          var T = [];
          return (
            w.forEach(function (F) {
              T.push(F);
            }),
            T
          );
        }
        function ce(w, T) {
          return w.size === 0 ? 'Set{}' : ((T.truncate -= 7), 'Set{ '.concat(g(ue(w), T), ' }'));
        }
        var q = new RegExp(
            "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
            'g',
          ),
          M = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            "'": "\\'",
            '\\': '\\\\',
          },
          k = 16,
          D = 4;
        function Y(w) {
          return M[w] || '\\u'.concat('0000'.concat(w.charCodeAt(0).toString(k)).slice(-D));
        }
        function I(w, T) {
          return (
            q.test(w) && (w = w.replace(q, Y)),
            T.stylize("'".concat(y(w, T.truncate - 2), "'"), 'string')
          );
        }
        function N(w) {
          return 'description' in Symbol.prototype
            ? w.description
              ? 'Symbol('.concat(w.description, ')')
              : 'Symbol()'
            : w.toString();
        }
        var H = function () {
          return 'Promise{…}';
        };
        try {
          var Z = process.binding('util'),
            b = Z.getPromiseDetails,
            B = Z.kPending,
            $ = Z.kRejected;
          Array.isArray(b(Promise.resolve())) &&
            (H = function (w, T) {
              var F = b(w),
                K = a(F, 2),
                te = K[0],
                le = K[1];
              return te === B
                ? 'Promise{<pending>}'
                : 'Promise'.concat(te === $ ? '!' : '', '{').concat(T.inspect(le, T), '}');
            });
        } catch {}
        var X = H;
        function W(w, T) {
          var F = Object.getOwnPropertyNames(w),
            K = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(w) : [];
          if (F.length === 0 && K.length === 0) return '{}';
          if (((T.truncate -= 4), (T.seen = T.seen || []), T.seen.indexOf(w) >= 0))
            return '[Circular]';
          T.seen.push(w);
          var te = g(
              F.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v,
            ),
            le = g(
              K.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v,
            );
          T.seen.pop();
          var se = '';
          return te && le && (se = ', '), '{ '.concat(te).concat(se).concat(le, ' }');
        }
        var L = typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
        function ae(w, T) {
          var F = '';
          return (
            L && L in w && (F = w[L]),
            (F = F || R(w.constructor)),
            (!F || F === '_class') && (F = '<Anonymous Class>'),
            (T.truncate -= F.length),
            ''.concat(F).concat(W(w, T))
          );
        }
        function ie(w, T) {
          return w.length === 0
            ? 'Arguments[]'
            : ((T.truncate -= 13), 'Arguments[ '.concat(g(w, T), ' ]'));
        }
        var pe = [
          'stack',
          'line',
          'column',
          'name',
          'message',
          'fileName',
          'lineNumber',
          'columnNumber',
          'number',
          'description',
        ];
        function Re(w, T) {
          var F = Object.getOwnPropertyNames(w).filter(function (se) {
              return pe.indexOf(se) === -1;
            }),
            K = w.name;
          T.truncate -= K.length;
          var te = '';
          typeof w.message == 'string' ? (te = y(w.message, T.truncate)) : F.unshift('message'),
            (te = te ? ': '.concat(te) : ''),
            (T.truncate -= te.length + 5);
          var le = g(
            F.map(function (se) {
              return [se, w[se]];
            }),
            T,
            v,
          );
          return ''
            .concat(K)
            .concat(te)
            .concat(le ? ' { '.concat(le, ' }') : '');
        }
        function lt(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 3),
            te
              ? ''
                  .concat(T.stylize(K, 'yellow'), '=')
                  .concat(T.stylize('"'.concat(te, '"'), 'string'))
              : ''.concat(T.stylize(K, 'yellow'))
          );
        }
        function Ue(w, T) {
          return g(
            w,
            T,
            Ke,
            `
`,
          );
        }
        function Ke(w, T) {
          var F = w.getAttributeNames(),
            K = w.tagName.toLowerCase(),
            te = T.stylize('<'.concat(K), 'special'),
            le = T.stylize('>', 'special'),
            se = T.stylize('</'.concat(K, '>'), 'special');
          T.truncate -= K.length * 2 + 5;
          var de = '';
          F.length > 0 &&
            ((de += ' '),
            (de += g(
              F.map(function (re) {
                return [re, w.getAttribute(re)];
              }),
              T,
              lt,
              ' ',
            ))),
            (T.truncate -= de.length);
          var ye = T.truncate,
            me = Ue(w.children, T);
          return (
            me && me.length > ye && (me = ''.concat(d, '(').concat(w.children.length, ')')),
            ''.concat(te).concat(de).concat(le).concat(me).concat(se)
          );
        }
        var st = typeof Symbol == 'function' && typeof Symbol.for == 'function',
          Ne = st ? Symbol.for('chai/inspect') : '@@chai/inspect',
          Oe = !1;
        try {
          var We = Xd('util');
          Oe = We.inspect ? We.inspect.custom : !1;
        } catch {
          Oe = !1;
        }
        function Ye() {
          this.key = 'chai/loupe__' + Math.random() + Date.now();
        }
        Ye.prototype = {
          get: function (w) {
            return w[this.key];
          },
          has: function (w) {
            return this.key in w;
          },
          set: function (w, T) {
            Object.isExtensible(w) &&
              Object.defineProperty(w, this.key, { value: T, configurable: !0 });
          },
        };
        var Se = new (typeof WeakMap == 'function' ? WeakMap : Ye)(),
          Te = {},
          He = {
            undefined: function (w, T) {
              return T.stylize('undefined', 'undefined');
            },
            null: function (w, T) {
              return T.stylize(null, 'null');
            },
            boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            Boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            number: G,
            Number: G,
            bigint: ne,
            BigInt: ne,
            string: I,
            String: I,
            function: j,
            Function: j,
            symbol: N,
            Symbol: N,
            Array: S,
            Date: x,
            Map: U,
            Set: ce,
            RegExp: oe,
            Promise: X,
            WeakSet: function (w, T) {
              return T.stylize('WeakSet{…}', 'special');
            },
            WeakMap: function (w, T) {
              return T.stylize('WeakMap{…}', 'special');
            },
            Arguments: ie,
            Int8Array: O,
            Uint8Array: O,
            Uint8ClampedArray: O,
            Int16Array: O,
            Uint16Array: O,
            Int32Array: O,
            Uint32Array: O,
            Float32Array: O,
            Float64Array: O,
            Generator: function () {
              return '';
            },
            DataView: function () {
              return '';
            },
            ArrayBuffer: function () {
              return '';
            },
            Error: Re,
            HTMLCollection: Ue,
            NodeList: Ue,
          },
          ut = function (w, T, F) {
            return Ne in w && typeof w[Ne] == 'function'
              ? w[Ne](T)
              : Oe && Oe in w && typeof w[Oe] == 'function'
                ? w[Oe](T.depth, T)
                : 'inspect' in w && typeof w.inspect == 'function'
                  ? w.inspect(T.depth, T)
                  : 'constructor' in w && Se.has(w.constructor)
                    ? Se.get(w.constructor)(w, T)
                    : Te[F]
                      ? Te[F](w, T)
                      : '';
          },
          Mt = Object.prototype.toString;
        function De(w, T) {
          (T = m(T)), (T.inspect = De);
          var F = T,
            K = F.customInspect,
            te = w === null ? 'null' : o(w);
          if ((te === 'object' && (te = Mt.call(w).slice(8, -1)), He[te])) return He[te](w, T);
          if (K && w) {
            var le = ut(w, T, te);
            if (le) return typeof le == 'string' ? le : De(le, T);
          }
          var se = w ? Object.getPrototypeOf(w) : !1;
          return se === Object.prototype || se === null
            ? W(w, T)
            : w && typeof HTMLElement == 'function' && w instanceof HTMLElement
              ? Ke(w, T)
              : 'constructor' in w
                ? w.constructor !== Object
                  ? ae(w, T)
                  : W(w, T)
                : w === Object(w)
                  ? W(w, T)
                  : T.stylize(String(w), te);
        }
        function ct(w, T) {
          return Se.has(w) ? !1 : (Se.set(w, T), !0);
        }
        function J(w, T) {
          return w in Te ? !1 : ((Te[w] = T), !0);
        }
        var Q = Ne;
        (r.custom = Q),
          (r.default = De),
          (r.inspect = De),
          (r.registerConstructor = ct),
          (r.registerStringTag = J),
          Object.defineProperty(r, '__esModule', { value: !0 });
      });
    },
  }),
  ft = kt(No(), 1),
  xa = kt(fl(), 1),
  up = Symbol('vitest:SAFE_COLORS'),
  cp = {
    bold: ['\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m'],
    dim: ['\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    inverse: ['\x1B[7m', '\x1B[27m'],
    hidden: ['\x1B[8m', '\x1B[28m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],
    black: ['\x1B[30m', '\x1B[39m'],
    red: ['\x1B[31m', '\x1B[39m'],
    green: ['\x1B[32m', '\x1B[39m'],
    yellow: ['\x1B[33m', '\x1B[39m'],
    blue: ['\x1B[34m', '\x1B[39m'],
    magenta: ['\x1B[35m', '\x1B[39m'],
    cyan: ['\x1B[36m', '\x1B[39m'],
    white: ['\x1B[37m', '\x1B[39m'],
    gray: ['\x1B[90m', '\x1B[39m'],
    bgBlack: ['\x1B[40m', '\x1B[49m'],
    bgRed: ['\x1B[41m', '\x1B[49m'],
    bgGreen: ['\x1B[42m', '\x1B[49m'],
    bgYellow: ['\x1B[43m', '\x1B[49m'],
    bgBlue: ['\x1B[44m', '\x1B[49m'],
    bgMagenta: ['\x1B[45m', '\x1B[49m'],
    bgCyan: ['\x1B[46m', '\x1B[49m'],
    bgWhite: ['\x1B[47m', '\x1B[49m'],
  },
  dp = Object.entries(cp);
function Bo(e) {
  return String(e);
}
Bo.open = '';
Bo.close = '';
var pp = dp.reduce((e, [t]) => ((e[t] = Bo), e), { isColorSupported: !1 });
function fp() {
  return globalThis[up] || pp;
}
function Ma(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var tr = -1,
  rr = 1,
  Zr = 0,
  br = class {
    constructor(t, r) {
      Jt(this, 0);
      Jt(this, 1);
      (this[0] = t), (this[1] = r);
    }
  },
  yl = 'Compared values have no visual difference.',
  mp =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.';
function yp(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function $o(e, t, r, o, a, c) {
  return e.length !== 0
    ? r(`${o} ${yp(e, a)}`)
    : o !== ' '
      ? r(o)
      : t && c.length !== 0
        ? r(`${o} ${c}`)
        : '';
}
function hl(
  e,
  t,
  { aColor: r, aIndicator: o, changeLineTrailingSpaceColor: a, emptyFirstOrLastLinePlaceholder: c },
) {
  return $o(e, t, r, o, a, c);
}
function bl(
  e,
  t,
  { bColor: r, bIndicator: o, changeLineTrailingSpaceColor: a, emptyFirstOrLastLinePlaceholder: c },
) {
  return $o(e, t, r, o, a, c);
}
function gl(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: o,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  },
) {
  return $o(e, t, r, o, a, c);
}
function ja(e, t, r, o, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${o - r} @@`);
}
function hp(e, t) {
  let r = e.length,
    o = t.contextLines,
    a = o + o,
    c = r,
    n = !1,
    i = 0,
    l = 0;
  for (; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === Zr; ) l += 1;
    if (E !== l)
      if (E === 0) l > o && ((c -= l - o), (n = !0));
      else if (l === r) {
        let C = l - E;
        C > o && ((c -= C - o), (n = !0));
      } else {
        let C = l - E;
        C > a && ((c -= C - a), (i += 1));
      }
    for (; l !== r && e[l][0] !== Zr; ) l += 1;
  }
  let s = i !== 0 || n;
  i !== 0 ? (c += i + 1) : n && (c += 1);
  let u = c - 1,
    p = [],
    d = 0;
  s && p.push('');
  let f = 0,
    m = 0,
    y = 0,
    g = 0,
    h = (E) => {
      let C = p.length;
      p.push(gl(E, C === 0 || C === u, t)), (y += 1), (g += 1);
    },
    v = (E) => {
      let C = p.length;
      p.push(hl(E, C === 0 || C === u, t)), (y += 1);
    },
    S = (E) => {
      let C = p.length;
      p.push(bl(E, C === 0 || C === u, t)), (g += 1);
    };
  for (l = 0; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === Zr; ) l += 1;
    if (E !== l)
      if (E === 0) {
        l > o && ((E = l - o), (f = E), (m = E), (y = f), (g = m));
        for (let C = E; C !== l; C += 1) h(e[C][1]);
      } else if (l === r) {
        let C = l - E > o ? E + o : l;
        for (let A = E; A !== C; A += 1) h(e[A][1]);
      } else {
        let C = l - E;
        if (C > a) {
          let A = E + o;
          for (let _ = E; _ !== A; _ += 1) h(e[_][1]);
          (p[d] = ja(f, y, m, g, t)), (d = p.length), p.push('');
          let R = C - a;
          (f = y + R), (m = g + R), (y = f), (g = m);
          for (let _ = l - o; _ !== l; _ += 1) h(e[_][1]);
        } else for (let A = E; A !== l; A += 1) h(e[A][1]);
      }
    for (; l !== r && e[l][0] === tr; ) v(e[l][1]), (l += 1);
    for (; l !== r && e[l][0] === rr; ) S(e[l][1]), (l += 1);
  }
  return (
    s && (p[d] = ja(f, y, m, g, t)),
    p.join(`
`)
  );
}
function bp(e, t) {
  return e.map((r, o, a) => {
    let c = r[1],
      n = o === 0 || o === a.length - 1;
    switch (r[0]) {
      case tr:
        return hl(c, n, t);
      case rr:
        return bl(c, n, t);
      default:
        return gl(c, n, t);
    }
  }).join(`
`);
}
var Ia = (e) => e,
  vl = 5;
function gp() {
  let e = fp();
  return {
    aAnnotation: 'Expected',
    aColor: e.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: e.red,
    bIndicator: '+',
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: Ia,
    commonColor: e.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: Ia,
    compareKeys: void 0,
    contextLines: vl,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow,
  };
}
function vp(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function _p(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : vl;
}
function Dr(e = {}) {
  return { ...gp(), ...e, compareKeys: vp(e.compareKeys), contextLines: _p(e.contextLines) };
}
function Xt(e) {
  return e.length === 1 && e[0].length === 0;
}
function Ep(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case tr:
          t += 1;
          break;
        case rr:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function wp(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: o,
    bColor: a,
    bIndicator: c,
    includeChangeCounts: n,
    omitAnnotationLines: i,
  },
  l,
) {
  if (i) return '';
  let s = '',
    u = '';
  if (n) {
    let f = String(l.a),
      m = String(l.b),
      y = o.length - e.length,
      g = ' '.repeat(Math.max(0, y)),
      h = ' '.repeat(Math.max(0, -y)),
      v = m.length - f.length,
      S = ' '.repeat(Math.max(0, v)),
      E = ' '.repeat(Math.max(0, -v));
    (s = `${g}  ${r} ${S}${f}`), (u = `${h}  ${c} ${E}${m}`);
  }
  let p = `${r} ${e}${s}`,
    d = `${c} ${o}${u}`;
  return `${t(p)}
${a(d)}

`;
}
function _l(e, t) {
  return wp(t, Ep(e)) + (t.expand ? bp(e, t) : hp(e, t));
}
function Do(e, t, r) {
  return _l(El(Xt(e) ? [] : e, Xt(t) ? [] : t), Dr(r));
}
function Sp(e, t, r, o, a) {
  if (
    (Xt(e) && Xt(r) && ((e = []), (r = [])),
    Xt(t) && Xt(o) && ((t = []), (o = [])),
    e.length !== r.length || t.length !== o.length)
  )
    return Do(e, t, a);
  let c = El(r, o),
    n = 0,
    i = 0;
  return (
    c.forEach((l) => {
      switch (l[0]) {
        case tr:
          (l[1] = e[n]), (n += 1);
          break;
        case rr:
          (l[1] = t[i]), (i += 1);
          break;
        default:
          (l[1] = t[i]), (n += 1), (i += 1);
      }
    }),
    _l(c, Dr(a))
  );
}
function El(e, t) {
  let r = e.length,
    o = t.length,
    a = (s, u) => e[s] === t[u],
    c = [],
    n = 0,
    i = 0,
    l = (s, u, p) => {
      for (; n !== u; n += 1) c.push(new br(tr, e[n]));
      for (; i !== p; i += 1) c.push(new br(rr, t[i]));
      for (; s !== 0; s -= 1, n += 1, i += 1) c.push(new br(Zr, t[i]));
    };
  for ((xa.default.default || xa.default)(r, o, a, l); n !== r; n += 1) c.push(new br(tr, e[n]));
  for (; i !== o; i += 1) c.push(new br(rr, t[i]));
  return c;
}
function Xn(e, t) {
  let { commonColor: r } = Dr(t);
  return r(e);
}
var {
    AsymmetricMatcher: Cp,
    DOMCollection: Op,
    DOMElement: Pp,
    Immutable: Rp,
    ReactElement: Tp,
    ReactTestComponent: Ap,
  } = ft.plugins,
  wl = [Ap, Tp, Pp, Op, Rp, Cp],
  Qn = { plugins: wl },
  Sl = { callToJSON: !1, maxDepth: 10, plugins: wl };
function qp(e, t, r) {
  if (Object.is(e, t)) return '';
  let o = Ma(e),
    a = o,
    c = !1;
  if (o === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return null;
    (a = e.getExpectedType()), (c = a === 'string');
  }
  if (a !== Ma(t)) {
    let {
        aAnnotation: n,
        aColor: i,
        aIndicator: l,
        bAnnotation: s,
        bColor: u,
        bIndicator: p,
      } = Dr(r),
      d = Zn(Sl, r),
      f = (0, ft.format)(e, d),
      m = (0, ft.format)(t, d),
      y = `${i(`${l} ${n}:`)} 
${f}`,
      g = `${u(`${p} ${s}:`)} 
${m}`;
    return `${y}

${g}`;
  }
  if (c) return null;
  switch (o) {
    case 'string':
      return Do(
        e.split(`
`),
        t.split(`
`),
        r,
      );
    case 'boolean':
    case 'number':
      return xp(e, t, r);
    case 'map':
      return Ln(Na(e), Na(t), r);
    case 'set':
      return Ln(Ba(e), Ba(t), r);
    default:
      return Ln(e, t, r);
  }
}
function xp(e, t, r) {
  let o = (0, ft.format)(e, Qn),
    a = (0, ft.format)(t, Qn);
  return o === a
    ? ''
    : Do(
        o.split(`
`),
        a.split(`
`),
        r,
      );
}
function Na(e) {
  return new Map(Array.from(e.entries()).sort());
}
function Ba(e) {
  return new Set(Array.from(e.values()).sort());
}
function Ln(e, t, r) {
  let o,
    a = !1;
  try {
    let n = Zn(Qn, r);
    o = $a(e, t, n, r);
  } catch {
    a = !0;
  }
  let c = Xn(yl, r);
  if (o === void 0 || o === c) {
    let n = Zn(Sl, r);
    (o = $a(e, t, n, r)),
      o !== c &&
        !a &&
        (o = `${Xn(mp, r)}

${o}`);
  }
  return o;
}
function Zn(e, t) {
  let { compareKeys: r } = Dr(t);
  return { ...e, compareKeys: r };
}
function $a(e, t, r, o) {
  let a = { ...r, indent: 0 },
    c = (0, ft.format)(e, a),
    n = (0, ft.format)(t, a);
  if (c === n) return Xn(yl, o);
  {
    let i = (0, ft.format)(e, r),
      l = (0, ft.format)(t, r);
    return Sp(
      i.split(`
`),
      l.split(`
`),
      c.split(`
`),
      n.split(`
`),
      o,
    );
  }
}
var eo = kt(No(), 1),
  Mp = kt(ml(), 1),
  {
    AsymmetricMatcher: jp,
    DOMCollection: Ip,
    DOMElement: Np,
    Immutable: Bp,
    ReactElement: $p,
    ReactTestComponent: Dp,
  } = eo.plugins,
  Da = [Dp, $p, Np, Ip, Bp, jp];
function to(e, t = 10, { maxLength: r, ...o } = {}) {
  let a = r ?? 1e4,
    c;
  try {
    c = (0, eo.format)(e, { maxDepth: t, escapeString: !1, plugins: Da, ...o });
  } catch {
    c = (0, eo.format)(e, { callToJSON: !1, maxDepth: t, escapeString: !1, plugins: Da, ...o });
  }
  return c.length >= a && t > 1 ? to(e, Math.floor(t / 2)) : c;
}
var kp = /%[sdjifoOcj%]/g;
function Lp(...e) {
  if (typeof e[0] != 'string') {
    let c = [];
    for (let n = 0; n < e.length; n++) c.push(gr(e[n], { depth: 0, colors: !1, compact: 3 }));
    return c.join(' ');
  }
  let t = e.length,
    r = 1,
    o = e[0],
    a = String(o).replace(kp, (c) => {
      if (c === '%%') return '%';
      if (r >= t) return c;
      switch (c) {
        case '%s': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : typeof n == 'number' && n === 0 && 1 / n < 0
              ? '-0'
              : typeof n == 'object' && n !== null
                ? gr(n, { depth: 0, colors: !1, compact: 3 })
                : String(n);
        }
        case '%d': {
          let n = e[r++];
          return typeof n == 'bigint' ? `${n.toString()}n` : Number(n).toString();
        }
        case '%i': {
          let n = e[r++];
          return typeof n == 'bigint' ? `${n.toString()}n` : Number.parseInt(String(n)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return gr(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return gr(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (n) {
            let i = n.message;
            if (
              i.includes('circular structure') ||
              i.includes('cyclic structures') ||
              i.includes('cyclic object')
            )
              return '[Circular]';
            throw n;
          }
        default:
          return c;
      }
    });
  for (let c = e[r]; r < t; c = e[++r])
    c === null || typeof c != 'object' ? (a += ` ${c}`) : (a += ` ${gr(c)}`);
  return a;
}
function gr(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), (0, Mp.inspect)(e, t);
}
function Fp(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function ro(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function Up(e, t) {
  let r = typeof t == 'function' ? t : (o) => t.add(o);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function Cl(e) {
  let t = new Set();
  return Fp(e) ? [] : (Up(e, t), Array.from(t));
}
var Ol = { forceWritable: !1 };
function ka(e, t = Ol) {
  return no(e, new WeakMap(), t);
}
function no(e, t, r = Ol) {
  let o, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((o = e.length)), t.set(e, a); o--; ) a[o] = no(e[o], t);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let c = Cl(e);
    for (let n of c) {
      let i = Object.getOwnPropertyDescriptor(e, n);
      if (!i) continue;
      let l = no(e[n], t);
      'get' in i
        ? Object.defineProperty(a, n, {
            ...i,
            get() {
              return l;
            },
          })
        : Object.defineProperty(a, n, {
            ...i,
            writable: r.forceWritable ? !0 : i.writable,
            value: l,
          });
    }
    return a;
  }
  return e;
}
kt(No(), 1);
kt(fl(), 1);
kt(ml(), 1);
var Hp = '@@__IMMUTABLE_RECORD__@@',
  zp = '@@__IMMUTABLE_ITERABLE__@@';
function Vp(e) {
  return e && (e[zp] || e[Hp]);
}
var Wp = Object.getPrototypeOf({});
function La(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function Sr(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (Vp(e)) return Sr(e.toJSON(), t);
  if (e instanceof Promise || (e.constructor && e.constructor.prototype === 'AsyncFunction'))
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function') return `${e.toString()} ${Lp(e.sample)}`;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((o, a) => {
        try {
          r[a] = Sr(o, t);
        } catch (c) {
          r[a] = La(c);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let o = e;
    for (; o && o !== Wp; )
      Object.getOwnPropertyNames(o).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = Sr(e[a], t);
          } catch (c) {
            delete r[a], (r[a] = La(c));
          }
      }),
        (o = Object.getPrototypeOf(o));
    return r;
  }
}
function Fa(e) {
  return e.replace(/__vite_ssr_import_\d+__\./g, '');
}
function Gp(e, t) {
  if (!e || typeof e != 'object') return { message: e };
  if (
    (e.stack && (e.stackStr = String(e.stack)),
    e.name && (e.nameStr = String(e.name)),
    e.showDiff || (e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0))
  ) {
    let r = ka(e.actual, { forceWritable: !0 }),
      o = ka(e.expected, { forceWritable: !0 }),
      { replacedActual: a, replacedExpected: c } = Pl(r, o);
    e.diff = qp(c, a, t);
  }
  typeof e.expected != 'string' && (e.expected = to(e.expected, 10)),
    typeof e.actual != 'string' && (e.actual = to(e.actual, 10));
  try {
    typeof e.message == 'string' && (e.message = Fa(e.message)),
      typeof e.cause == 'object' &&
        typeof e.cause.message == 'string' &&
        (e.cause.message = Fa(e.cause.message));
  } catch {}
  try {
    return Sr(e);
  } catch (r) {
    return Sr(
      new Error(`Failed to fully serialize error: ${r == null ? void 0 : r.message}
Inner error message: ${e == null ? void 0 : e.message}`),
    );
  }
}
function Ua(e) {
  return ro(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function Ha(e, t) {
  let r = ro(e),
    o = ro(t);
  return r === o && r === 'Object';
}
function Pl(e, t, r = new WeakSet(), o = new WeakSet()) {
  return Ha(e, t)
    ? r.has(e) || o.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        o.add(t),
        Cl(t).forEach((a) => {
          let c = t[a],
            n = e[a];
          if (Ua(c)) c.asymmetricMatch(n) && (e[a] = c);
          else if (Ua(n)) n.asymmetricMatch(c) && (t[a] = n);
          else if (Ha(n, c)) {
            let i = Pl(n, c, r, o);
            (e[a] = i.replacedActual), (t[a] = i.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
var Kp = ((e) => (
    (e.DONE = 'done'), (e.ERROR = 'error'), (e.ACTIVE = 'active'), (e.WAITING = 'waiting'), e
  ))(Kp || {}),
  pt = {
    CALL: 'storybook/instrumenter/call',
    SYNC: 'storybook/instrumenter/sync',
    START: 'storybook/instrumenter/start',
    BACK: 'storybook/instrumenter/back',
    GOTO: 'storybook/instrumenter/goto',
    NEXT: 'storybook/instrumenter/next',
    END: 'storybook/instrumenter/end',
  },
  za = { start: !1, back: !1, goto: !1, next: !1, end: !1 },
  Va = new Error(
    'This function ran after the play function completed. Did you forget to `await` it?',
  ),
  Wa = (e) => Object.prototype.toString.call(e) === '[object Object]',
  Yp = (e) => Object.prototype.toString.call(e) === '[object Module]',
  Jp = (e) => {
    if (!Wa(e) && !Yp(e)) return !1;
    if (e.constructor === void 0) return !0;
    let t = e.constructor.prototype;
    return !!Wa(t);
  },
  Xp = (e) => {
    try {
      return new e.constructor();
    } catch {
      return {};
    }
  },
  Fn = () => ({
    renderPhase: void 0,
    isDebugging: !1,
    isPlaying: !1,
    isLocked: !1,
    cursor: 0,
    calls: [],
    shadowCalls: [],
    callRefsByResult: new Map(),
    chainedCallIds: new Set(),
    ancestors: [],
    playUntil: void 0,
    resolvers: {},
    syncTimeout: void 0,
  }),
  Ga = (e, t = !1) => {
    let r = (t ? e.shadowCalls : e.calls).filter((a) => a.retain);
    if (!r.length) return;
    let o = new Map(Array.from(e.callRefsByResult.entries()).filter(([, a]) => a.retain));
    return { cursor: r.length, calls: r, callRefsByResult: o };
  },
  Qp = class {
    constructor() {
      (this.initialized = !1),
        (this.channel = Fd.getChannel()),
        (this.state = Ze.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ || {});
      let e = ({ storyId: n, isPlaying: i = !0, isDebugging: l = !1 }) => {
        let s = this.getState(n);
        this.setState(n, {
          ...Fn(),
          ...Ga(s, l),
          shadowCalls: l ? s.shadowCalls : [],
          chainedCallIds: l ? s.chainedCallIds : new Set(),
          playUntil: l ? s.playUntil : void 0,
          isPlaying: i,
          isDebugging: l,
        }),
          this.sync(n);
      };
      this.channel.on(qa, e),
        this.channel.on(zd, ({ storyId: n, newPhase: i }) => {
          let { isDebugging: l } = this.getState(n);
          this.setState(n, { renderPhase: i }),
            i === 'preparing' && l && e({ storyId: n }),
            i === 'playing' && e({ storyId: n, isDebugging: l }),
            i === 'played' && this.setState(n, { isLocked: !1, isPlaying: !1, isDebugging: !1 }),
            i === 'errored' && this.setState(n, { isLocked: !1, isPlaying: !1 });
        }),
        this.channel.on(Vd, () => {
          this.initialized ? this.cleanup() : (this.initialized = !0);
        });
      let t = ({ storyId: n, playUntil: i }) => {
          this.getState(n).isDebugging ||
            this.setState(n, ({ calls: s }) => ({
              calls: [],
              shadowCalls: s.map((u) => ({ ...u, status: 'waiting' })),
              isDebugging: !0,
            }));
          let l = this.getLog(n);
          this.setState(n, ({ shadowCalls: s }) => {
            var p;
            if (i || !l.length) return { playUntil: i };
            let u = s.findIndex((d) => d.id === l[0].callId);
            return {
              playUntil:
                (p = s
                  .slice(0, u)
                  .filter((d) => d.interceptable && !d.ancestors.length)
                  .slice(-1)[0]) == null
                  ? void 0
                  : p.id,
            };
          }),
            this.channel.emit(qa, { storyId: n, isDebugging: !0 });
        },
        r = ({ storyId: n }) => {
          var s;
          let i = this.getLog(n).filter((u) => !u.ancestors.length),
            l = i.reduceRight((u, p, d) => (u >= 0 || p.status === 'waiting' ? u : d), -1);
          t({ storyId: n, playUntil: (s = i[l - 1]) == null ? void 0 : s.callId });
        },
        o = ({ storyId: n, callId: i }) => {
          var f;
          let { calls: l, shadowCalls: s, resolvers: u } = this.getState(n),
            p = l.find(({ id: m }) => m === i),
            d = s.find(({ id: m }) => m === i);
          if (!p && d && Object.values(u).length > 0) {
            let m =
              (f = this.getLog(n).find((y) => y.status === 'waiting')) == null ? void 0 : f.callId;
            d.id !== m && this.setState(n, { playUntil: d.id }),
              Object.values(u).forEach((y) => y());
          } else t({ storyId: n, playUntil: i });
        },
        a = ({ storyId: n }) => {
          var l;
          let { resolvers: i } = this.getState(n);
          if (Object.values(i).length > 0) Object.values(i).forEach((s) => s());
          else {
            let s =
              (l = this.getLog(n).find((u) => u.status === 'waiting')) == null ? void 0 : l.callId;
            s ? t({ storyId: n, playUntil: s }) : c({ storyId: n });
          }
        },
        c = ({ storyId: n }) => {
          this.setState(n, { playUntil: void 0, isDebugging: !1 }),
            Object.values(this.getState(n).resolvers).forEach((i) => i());
        };
      this.channel.on(pt.START, t),
        this.channel.on(pt.BACK, r),
        this.channel.on(pt.GOTO, o),
        this.channel.on(pt.NEXT, a),
        this.channel.on(pt.END, c);
    }
    getState(e) {
      return this.state[e] || Fn();
    }
    setState(e, t) {
      let r = this.getState(e),
        o = typeof t == 'function' ? t(r) : t;
      (this.state = { ...this.state, [e]: { ...r, ...o } }),
        (Ze.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
    }
    cleanup() {
      this.state = Object.entries(this.state).reduce((t, [r, o]) => {
        let a = Ga(o);
        return a && (t[r] = Object.assign(Fn(), a)), t;
      }, {});
      let e = { controlStates: za, logItems: [] };
      this.channel.emit(pt.SYNC, e),
        (Ze.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__ = this.state);
    }
    getLog(e) {
      let { calls: t, shadowCalls: r } = this.getState(e),
        o = [...r];
      t.forEach((c, n) => {
        o[n] = c;
      });
      let a = new Set();
      return o.reduceRight(
        (c, n) => (
          n.args.forEach((i) => {
            i != null && i.__callId__ && a.add(i.__callId__);
          }),
          n.path.forEach((i) => {
            i.__callId__ && a.add(i.__callId__);
          }),
          (n.interceptable || n.exception) &&
            !a.has(n.id) &&
            (c.unshift({ callId: n.id, status: n.status, ancestors: n.ancestors }), a.add(n.id)),
          c
        ),
        [],
      );
    }
    instrument(e, t, r = 0) {
      if (!Jp(e)) return e;
      let { mutate: o = !1, path: a = [] } = t,
        c = t.getKeys ? t.getKeys(e, r) : Object.keys(e);
      return (
        (r += 1),
        c.reduce(
          (n, i) => {
            let l = Zp(e, i);
            if (typeof (l == null ? void 0 : l.get) == 'function') {
              let u = () => {
                var p, d;
                return (d = (p = l == null ? void 0 : l.get) == null ? void 0 : p.bind(e)) == null
                  ? void 0
                  : d();
              };
              return (
                Object.defineProperty(n, i, {
                  get: () => this.instrument(u(), { ...t, path: a.concat(i) }, r),
                }),
                n
              );
            }
            let s = e[i];
            return typeof s != 'function'
              ? ((n[i] = this.instrument(s, { ...t, path: a.concat(i) }, r)), n)
              : '__originalFn__' in s && typeof s.__originalFn__ == 'function'
                ? ((n[i] = s), n)
                : ((n[i] = (...u) => this.track(i, s, e, u, t)),
                  (n[i].__originalFn__ = s),
                  Object.defineProperty(n[i], 'name', { value: i, writable: !1 }),
                  Object.keys(s).length > 0 &&
                    Object.assign(n[i], this.instrument({ ...s }, { ...t, path: a.concat(i) }, r)),
                  n);
          },
          o ? e : Xp(e),
        )
      );
    }
    track(e, t, r, o, a) {
      var y, g, h, v;
      let c =
          ((y = o == null ? void 0 : o[0]) == null ? void 0 : y.__storyId__) ||
          ((v =
            (h = (g = Ze.__STORYBOOK_PREVIEW__) == null ? void 0 : g.selectionStore) == null
              ? void 0
              : h.selection) == null
            ? void 0
            : v.storyId),
        { cursor: n, ancestors: i } = this.getState(c);
      this.setState(c, { cursor: n + 1 });
      let l = `${i.slice(-1)[0] || c} [${n}] ${e}`,
        { path: s = [], intercept: u = !1, retain: p = !1 } = a,
        d = typeof u == 'function' ? u(e, s) : u,
        f = {
          id: l,
          cursor: n,
          storyId: c,
          ancestors: i,
          path: s,
          method: e,
          args: o,
          interceptable: d,
          retain: p,
        },
        m = (d && !i.length ? this.intercept : this.invoke).call(this, t, r, f, a);
      return this.instrument(m, { ...a, mutate: !0, path: [{ __callId__: f.id }] });
    }
    intercept(e, t, r, o) {
      let { chainedCallIds: a, isDebugging: c, playUntil: n } = this.getState(r.storyId),
        i = a.has(r.id);
      return !c || i || n
        ? (n === r.id && this.setState(r.storyId, { playUntil: void 0 }), this.invoke(e, t, r, o))
        : new Promise((l) => {
            this.setState(r.storyId, ({ resolvers: s }) => ({
              isLocked: !1,
              resolvers: { ...s, [r.id]: l },
            }));
          }).then(
            () => (
              this.setState(r.storyId, (l) => {
                let { [r.id]: s, ...u } = l.resolvers;
                return { isLocked: !0, resolvers: u };
              }),
              this.invoke(e, t, r, o)
            ),
          );
    }
    invoke(e, t, r, o) {
      let { callRefsByResult: a, renderPhase: c } = this.getState(r.storyId),
        n = (s) => {
          var u, p;
          if (a.has(s)) return a.get(s);
          if (s instanceof Array) return s.map(n);
          if (s instanceof Date) return { __date__: { value: s.toISOString() } };
          if (s instanceof Error) {
            let { name: d, message: f, stack: m } = s;
            return { __error__: { name: d, message: f, stack: m } };
          }
          if (s instanceof RegExp) {
            let { flags: d, source: f } = s;
            return { __regexp__: { flags: d, source: f } };
          }
          if (s instanceof Ze.window.HTMLElement) {
            let { prefix: d, localName: f, id: m, classList: y, innerText: g } = s,
              h = Array.from(y);
            return { __element__: { prefix: d, localName: f, id: m, classNames: h, innerText: g } };
          }
          return typeof s == 'function'
            ? { __function__: { name: s.name } }
            : typeof s == 'symbol'
              ? { __symbol__: { description: s.description } }
              : typeof s == 'object' &&
                  (u = s == null ? void 0 : s.constructor) != null &&
                  u.name &&
                  ((p = s == null ? void 0 : s.constructor) == null ? void 0 : p.name) !== 'Object'
                ? { __class__: { name: s.constructor.name } }
                : Object.prototype.toString.call(s) === '[object Object]'
                  ? Object.fromEntries(Object.entries(s).map(([d, f]) => [d, n(f)]))
                  : s;
        },
        i = { ...r, args: r.args.map(n) };
      r.path.forEach((s) => {
        s != null &&
          s.__callId__ &&
          this.setState(r.storyId, ({ chainedCallIds: u }) => ({
            chainedCallIds: new Set(Array.from(u).concat(s.__callId__)),
          }));
      });
      let l = (s) => {
        if (s instanceof Error) {
          let { name: u, message: p, stack: d, callId: f = r.id } = s,
            {
              showDiff: m = void 0,
              diff: y = void 0,
              actual: g = void 0,
              expected: h = void 0,
            } = Gp(s),
            v = {
              name: u,
              message: p,
              stack: d,
              callId: f,
              showDiff: m,
              diff: y,
              actual: g,
              expected: h,
            };
          if (
            (this.update({ ...i, status: 'error', exception: v }),
            this.setState(r.storyId, (S) => ({
              callRefsByResult: new Map([
                ...Array.from(S.callRefsByResult.entries()),
                [s, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
            r.ancestors.length)
          )
            throw (
              (Object.prototype.hasOwnProperty.call(s, 'callId') ||
                Object.defineProperty(s, 'callId', { value: r.id }),
              s)
            );
          if (s !== Va) throw (Hd.warn(s), Wd);
        }
        throw s;
      };
      try {
        if (c === 'played' && !r.retain) throw Va;
        let s = (o.getArgs ? o.getArgs(r, this.getState(r.storyId)) : r.args).map((p) =>
            typeof p != 'function' || Object.keys(p).length
              ? p
              : (...d) => {
                  let { cursor: f, ancestors: m } = this.getState(r.storyId);
                  this.setState(r.storyId, { cursor: 0, ancestors: [...m, r.id] });
                  let y = () => this.setState(r.storyId, { cursor: f, ancestors: m }),
                    g = !1;
                  try {
                    let h = p(...d);
                    return h instanceof Promise ? ((g = !0), h.finally(y)) : h;
                  } finally {
                    g || y();
                  }
                },
          ),
          u = e.apply(t, s);
        return (
          u &&
            ['object', 'function', 'symbol'].includes(typeof u) &&
            this.setState(r.storyId, (p) => ({
              callRefsByResult: new Map([
                ...Array.from(p.callRefsByResult.entries()),
                [u, { __callId__: r.id, retain: r.retain }],
              ]),
            })),
          this.update({ ...i, status: u instanceof Promise ? 'active' : 'done' }),
          u instanceof Promise ? u.then((p) => (this.update({ ...i, status: 'done' }), p), l) : u
        );
      } catch (s) {
        return l(s);
      }
    }
    update(e) {
      this.channel.emit(pt.CALL, e),
        this.setState(e.storyId, ({ calls: t }) => {
          let r = t.concat(e).reduce((o, a) => Object.assign(o, { [a.id]: a }), {});
          return {
            calls: Object.values(r).sort((o, a) =>
              o.id.localeCompare(a.id, void 0, { numeric: !0 }),
            ),
          };
        }),
        this.sync(e.storyId);
    }
    sync(e) {
      let t = () => {
        var s;
        let { isLocked: r, isPlaying: o } = this.getState(e),
          a = this.getLog(e),
          c =
            (s = a.filter(({ ancestors: u }) => !u.length).find((u) => u.status === 'waiting')) ==
            null
              ? void 0
              : s.callId,
          n = a.some((u) => u.status === 'active');
        if (r || n || a.length === 0) {
          let u = { controlStates: za, logItems: a };
          this.channel.emit(pt.SYNC, u);
          return;
        }
        let i = a.some((u) => u.status === 'done' || u.status === 'error'),
          l = {
            controlStates: { start: i, back: i, goto: !0, next: o, end: o },
            logItems: a,
            pausedAt: c,
          };
        this.channel.emit(pt.SYNC, l);
      };
      this.setState(
        e,
        ({ syncTimeout: r }) => (clearTimeout(r), { syncTimeout: setTimeout(t, 0) }),
      );
    }
  };
function ko(e, t = {}) {
  var r, o, a, c;
  try {
    let n = !1,
      i = !1;
    return (
      (o = (r = Ze.window.location) == null ? void 0 : r.search) != null &&
      o.includes('instrument=true')
        ? (n = !0)
        : (c = (a = Ze.window.location) == null ? void 0 : a.search) != null &&
          c.includes('instrument=false') &&
          (i = !0),
      (Ze.window.parent === Ze.window && !n) || i
        ? e
        : (Ze.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ ||
            (Ze.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__ = new Qp()),
          Ze.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__.instrument(e, t))
    );
  } catch (n) {
    return Ud.warn(n), e;
  }
}
function Zp(e, t) {
  let r = e;
  for (; r != null; ) {
    let o = Object.getOwnPropertyDescriptor(r, t);
    if (o) return o;
    r = Object.getPrototypeOf(r);
  }
}
const { once: ef } = __STORYBOOK_MODULE_CLIENT_LOGGER__;
var tf = Object.create,
  Lo = Object.defineProperty,
  rf = Object.getOwnPropertyDescriptor,
  Rl = Object.getOwnPropertyNames,
  nf = Object.getPrototypeOf,
  of = Object.prototype.hasOwnProperty,
  af = ((e) =>
    typeof require < 'u'
      ? require
      : typeof Proxy < 'u'
        ? new Proxy(e, { get: (t, r) => (typeof require < 'u' ? require : t)[r] })
        : e)(function (e) {
    if (typeof require < 'u') return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  }),
  P = (e, t) =>
    function () {
      return t || (0, e[Rl(e)[0]])((t = { exports: {} }).exports, t), t.exports;
    },
  Tl = (e, t) => {
    for (var r in t) Lo(e, r, { get: t[r], enumerable: !0 });
  },
  lf = (e, t, r, o) => {
    if ((t && typeof t == 'object') || typeof t == 'function')
      for (let a of Rl(t))
        !of.call(e, a) &&
          a !== r &&
          Lo(e, a, { get: () => t[a], enumerable: !(o = rf(t, a)) || o.enumerable });
    return e;
  },
  ve = (e, t, r) => (
    (r = e != null ? tf(nf(e)) : {}),
    lf(t || !e || !e.__esModule ? Lo(r, 'default', { value: e, enumerable: !0 }) : r, e)
  ),
  Al = P({
    '../../node_modules/assertion-error/index.js'(e, t) {
      function r() {
        var a = [].slice.call(arguments);
        function c(n, i) {
          Object.keys(i).forEach(function (l) {
            ~a.indexOf(l) || (n[l] = i[l]);
          });
        }
        return function () {
          for (var n = [].slice.call(arguments), i = 0, l = {}; i < n.length; i++) c(l, n[i]);
          return l;
        };
      }
      t.exports = o;
      function o(a, c, n) {
        var i = r('name', 'message', 'stack', 'constructor', 'toJSON'),
          l = i(c || {});
        (this.message = a || 'Unspecified AssertionError'), (this.showDiff = !1);
        for (var s in l) this[s] = l[s];
        if (((n = n || o), Error.captureStackTrace)) Error.captureStackTrace(this, n);
        else
          try {
            throw new Error();
          } catch (u) {
            this.stack = u.stack;
          }
      }
      (o.prototype = Object.create(Error.prototype)),
        (o.prototype.name = 'AssertionError'),
        (o.prototype.constructor = o),
        (o.prototype.toJSON = function (a) {
          var c = r('constructor', 'toJSON', 'stack'),
            n = c({ name: this.name }, this);
          return a !== !1 && this.stack && (n.stack = this.stack), n;
        });
    },
  }),
  sf = P({
    '../../node_modules/pathval/index.js'(e, t) {
      function r(s, u) {
        return typeof s > 'u' || s === null ? !1 : u in Object(s);
      }
      function o(s) {
        var u = s.replace(/([^\\])\[/g, '$1.['),
          p = u.match(/(\\\.|[^.]+?)+/g);
        return p.map(function (d) {
          if (d === 'constructor' || d === '__proto__' || d === 'prototype') return {};
          var f = /^\[(\d+)\]$/,
            m = f.exec(d),
            y = null;
          return m ? (y = { i: parseFloat(m[1]) }) : (y = { p: d.replace(/\\([.[\]])/g, '$1') }), y;
        });
      }
      function a(s, u, p) {
        var d = s,
          f = null;
        p = typeof p > 'u' ? u.length : p;
        for (var m = 0; m < p; m++) {
          var y = u[m];
          d && (typeof y.p > 'u' ? (d = d[y.i]) : (d = d[y.p]), m === p - 1 && (f = d));
        }
        return f;
      }
      function c(s, u, p) {
        for (var d = s, f = p.length, m = null, y = 0; y < f; y++) {
          var g = null,
            h = null;
          if (((m = p[y]), y === f - 1)) (g = typeof m.p > 'u' ? m.i : m.p), (d[g] = u);
          else if (typeof m.p < 'u' && d[m.p]) d = d[m.p];
          else if (typeof m.i < 'u' && d[m.i]) d = d[m.i];
          else {
            var v = p[y + 1];
            (g = typeof m.p > 'u' ? m.i : m.p),
              (h = typeof v.p > 'u' ? [] : {}),
              (d[g] = h),
              (d = d[g]);
          }
        }
      }
      function n(s, u) {
        var p = o(u),
          d = p[p.length - 1],
          f = {
            parent: p.length > 1 ? a(s, p, p.length - 1) : s,
            name: d.p || d.i,
            value: a(s, p),
          };
        return (f.exists = r(f.parent, f.name)), f;
      }
      function i(s, u) {
        var p = n(s, u);
        return p.value;
      }
      function l(s, u, p) {
        var d = o(u);
        return c(s, p, d), s;
      }
      t.exports = { hasProperty: r, getPathInfo: n, getPathValue: i, setPathValue: l };
    },
  }),
  at = P({
    '../../node_modules/chai/lib/chai/utils/flag.js'(e, t) {
      t.exports = function (r, o, a) {
        var c = r.__flags || (r.__flags = Object.create(null));
        if (arguments.length === 3) c[o] = a;
        else return c[o];
      };
    },
  }),
  uf = P({
    '../../node_modules/chai/lib/chai/utils/test.js'(e, t) {
      var r = at();
      t.exports = function (o, a) {
        var c = r(o, 'negate'),
          n = a[0];
        return c ? !n : n;
      };
    },
  }),
  fn = P({
    '../../node_modules/type-detect/type-detect.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? (t.exports = o())
          : typeof define == 'function' && define.amd
            ? define(o)
            : (r.typeDetect = o());
      })(e, function () {
        var r = typeof Promise == 'function',
          o = typeof self == 'object' ? self : global,
          a = typeof Symbol < 'u',
          c = typeof Map < 'u',
          n = typeof Set < 'u',
          i = typeof WeakMap < 'u',
          l = typeof WeakSet < 'u',
          s = typeof DataView < 'u',
          u = a && typeof Symbol.iterator < 'u',
          p = a && typeof Symbol.toStringTag < 'u',
          d = n && typeof Set.prototype.entries == 'function',
          f = c && typeof Map.prototype.entries == 'function',
          m = d && Object.getPrototypeOf(new Set().entries()),
          y = f && Object.getPrototypeOf(new Map().entries()),
          g = u && typeof Array.prototype[Symbol.iterator] == 'function',
          h = g && Object.getPrototypeOf([][Symbol.iterator]()),
          v = u && typeof String.prototype[Symbol.iterator] == 'function',
          S = v && Object.getPrototypeOf(''[Symbol.iterator]()),
          E = 8,
          C = -1;
        function A(R) {
          var _ = typeof R;
          if (_ !== 'object') return _;
          if (R === null) return 'null';
          if (R === o) return 'global';
          if (Array.isArray(R) && (p === !1 || !(Symbol.toStringTag in R))) return 'Array';
          if (typeof window == 'object' && window !== null) {
            if (typeof window.location == 'object' && R === window.location) return 'Location';
            if (typeof window.document == 'object' && R === window.document) return 'Document';
            if (typeof window.navigator == 'object') {
              if (typeof window.navigator.mimeTypes == 'object' && R === window.navigator.mimeTypes)
                return 'MimeTypeArray';
              if (typeof window.navigator.plugins == 'object' && R === window.navigator.plugins)
                return 'PluginArray';
            }
            if (
              (typeof window.HTMLElement == 'function' || typeof window.HTMLElement == 'object') &&
              R instanceof window.HTMLElement
            ) {
              if (R.tagName === 'BLOCKQUOTE') return 'HTMLQuoteElement';
              if (R.tagName === 'TD') return 'HTMLTableDataCellElement';
              if (R.tagName === 'TH') return 'HTMLTableHeaderCellElement';
            }
          }
          var O = p && R[Symbol.toStringTag];
          if (typeof O == 'string') return O;
          var x = Object.getPrototypeOf(R);
          return x === RegExp.prototype
            ? 'RegExp'
            : x === Date.prototype
              ? 'Date'
              : r && x === Promise.prototype
                ? 'Promise'
                : n && x === Set.prototype
                  ? 'Set'
                  : c && x === Map.prototype
                    ? 'Map'
                    : l && x === WeakSet.prototype
                      ? 'WeakSet'
                      : i && x === WeakMap.prototype
                        ? 'WeakMap'
                        : s && x === DataView.prototype
                          ? 'DataView'
                          : c && x === y
                            ? 'Map Iterator'
                            : n && x === m
                              ? 'Set Iterator'
                              : g && x === h
                                ? 'Array Iterator'
                                : v && x === S
                                  ? 'String Iterator'
                                  : x === null
                                    ? 'Object'
                                    : Object.prototype.toString.call(R).slice(E, C);
        }
        return A;
      });
    },
  }),
  cf = P({
    '../../node_modules/chai/lib/chai/utils/expectTypes.js'(e, t) {
      var r = Al(),
        o = at(),
        a = fn();
      t.exports = function (c, n) {
        var i = o(c, 'message'),
          l = o(c, 'ssfi');
        (i = i ? i + ': ' : ''),
          (c = o(c, 'object')),
          (n = n.map(function (p) {
            return p.toLowerCase();
          })),
          n.sort();
        var s = n
            .map(function (p, d) {
              var f = ~['a', 'e', 'i', 'o', 'u'].indexOf(p.charAt(0)) ? 'an' : 'a',
                m = n.length > 1 && d === n.length - 1 ? 'or ' : '';
              return m + f + ' ' + p;
            })
            .join(', '),
          u = a(c).toLowerCase();
        if (
          !n.some(function (p) {
            return u === p;
          })
        )
          throw new r(i + 'object tested must be ' + s + ', but ' + u + ' given', void 0, l);
      };
    },
  }),
  ql = P({
    '../../node_modules/chai/lib/chai/utils/getActual.js'(e, t) {
      t.exports = function (r, o) {
        return o.length > 4 ? o[4] : r._obj;
      };
    },
  }),
  Fo = P({
    '../../node_modules/get-func-name/index.js'(e, t) {
      var r = Function.prototype.toString,
        o = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/,
        a = 512;
      function c(n) {
        if (typeof n != 'function') return null;
        var i = '';
        if (typeof Function.prototype.name > 'u' && typeof n.name > 'u') {
          var l = r.call(n);
          if (l.indexOf('(') > a) return i;
          var s = l.match(o);
          s && (i = s[1]);
        } else i = n.name;
        return i;
      }
      t.exports = c;
    },
  }),
  mn = P({
    '../../node_modules/loupe/loupe.js'(e, t) {
      (function (r, o) {
        typeof e == 'object' && typeof t < 'u'
          ? o(e)
          : typeof define == 'function' && define.amd
            ? define(['exports'], o)
            : ((r = typeof globalThis < 'u' ? globalThis : r || self), o((r.loupe = {})));
      })(e, function (r) {
        function o(w) {
          '@babel/helpers - typeof';
          return (
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? (o = function (T) {
                  return typeof T;
                })
              : (o = function (T) {
                  return T &&
                    typeof Symbol == 'function' &&
                    T.constructor === Symbol &&
                    T !== Symbol.prototype
                    ? 'symbol'
                    : typeof T;
                }),
            o(w)
          );
        }
        function a(w, T) {
          return c(w) || n(w, T) || i(w, T) || s();
        }
        function c(w) {
          if (Array.isArray(w)) return w;
        }
        function n(w, T) {
          if (!(typeof Symbol > 'u' || !(Symbol.iterator in Object(w)))) {
            var F = [],
              K = !0,
              te = !1,
              le = void 0;
            try {
              for (
                var se = w[Symbol.iterator](), de;
                !(K = (de = se.next()).done) && (F.push(de.value), !(T && F.length === T));
                K = !0
              );
            } catch (ye) {
              (te = !0), (le = ye);
            } finally {
              try {
                !K && se.return != null && se.return();
              } finally {
                if (te) throw le;
              }
            }
            return F;
          }
        }
        function i(w, T) {
          if (w) {
            if (typeof w == 'string') return l(w, T);
            var F = Object.prototype.toString.call(w).slice(8, -1);
            if (
              (F === 'Object' && w.constructor && (F = w.constructor.name),
              F === 'Map' || F === 'Set')
            )
              return Array.from(w);
            if (F === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(F))
              return l(w, T);
          }
        }
        function l(w, T) {
          (T == null || T > w.length) && (T = w.length);
          for (var F = 0, K = new Array(T); F < T; F++) K[F] = w[F];
          return K;
        }
        function s() {
          throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var u = {
            bold: ['1', '22'],
            dim: ['2', '22'],
            italic: ['3', '23'],
            underline: ['4', '24'],
            inverse: ['7', '27'],
            hidden: ['8', '28'],
            strike: ['9', '29'],
            black: ['30', '39'],
            red: ['31', '39'],
            green: ['32', '39'],
            yellow: ['33', '39'],
            blue: ['34', '39'],
            magenta: ['35', '39'],
            cyan: ['36', '39'],
            white: ['37', '39'],
            brightblack: ['30;1', '39'],
            brightred: ['31;1', '39'],
            brightgreen: ['32;1', '39'],
            brightyellow: ['33;1', '39'],
            brightblue: ['34;1', '39'],
            brightmagenta: ['35;1', '39'],
            brightcyan: ['36;1', '39'],
            brightwhite: ['37;1', '39'],
            grey: ['90', '39'],
          },
          p = {
            special: 'cyan',
            number: 'yellow',
            bigint: 'yellow',
            boolean: 'yellow',
            undefined: 'grey',
            null: 'bold',
            string: 'green',
            symbol: 'green',
            date: 'magenta',
            regexp: 'red',
          },
          d = '…';
        function f(w, T) {
          var F = u[p[T]] || u[T];
          return F
            ? '\x1B['.concat(F[0], 'm').concat(String(w), '\x1B[').concat(F[1], 'm')
            : String(w);
        }
        function m() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
            T = w.showHidden,
            F = T === void 0 ? !1 : T,
            K = w.depth,
            te = K === void 0 ? 2 : K,
            le = w.colors,
            se = le === void 0 ? !1 : le,
            de = w.customInspect,
            ye = de === void 0 ? !0 : de,
            me = w.showProxy,
            re = me === void 0 ? !1 : me,
            Pe = w.maxArrayLength,
            Je = Pe === void 0 ? 1 / 0 : Pe,
            Ae = w.breakLength,
            qe = Ae === void 0 ? 1 / 0 : Ae,
            ke = w.seen,
            St = ke === void 0 ? [] : ke,
            dt = w.truncate,
            jt = dt === void 0 ? 1 / 0 : dt,
            Ct = w.stylize,
            Kt = Ct === void 0 ? String : Ct,
            rt = {
              showHidden: !!F,
              depth: Number(te),
              colors: !!se,
              customInspect: !!ye,
              showProxy: !!re,
              maxArrayLength: Number(Je),
              breakLength: Number(qe),
              truncate: Number(jt),
              seen: St,
              stylize: Kt,
            };
          return rt.colors && (rt.stylize = f), rt;
        }
        function y(w, T) {
          var F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : d;
          w = String(w);
          var K = F.length,
            te = w.length;
          return K > T && te > K
            ? F
            : te > T && te > K
              ? ''.concat(w.slice(0, T - K)).concat(F)
              : w;
        }
        function g(w, T, F) {
          var K = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : ', ';
          F = F || T.inspect;
          var te = w.length;
          if (te === 0) return '';
          for (var le = T.truncate, se = '', de = '', ye = '', me = 0; me < te; me += 1) {
            var re = me + 1 === w.length,
              Pe = me + 2 === w.length;
            ye = ''.concat(d, '(').concat(w.length - me, ')');
            var Je = w[me];
            T.truncate = le - se.length - (re ? 0 : K.length);
            var Ae = de || F(Je, T) + (re ? '' : K),
              qe = se.length + Ae.length,
              ke = qe + ye.length;
            if (
              (re && qe > le && se.length + ye.length <= le) ||
              (!re && !Pe && ke > le) ||
              ((de = re ? '' : F(w[me + 1], T) + (Pe ? '' : K)),
              !re && Pe && ke > le && qe + de.length > le)
            )
              break;
            if (((se += Ae), !re && !Pe && qe + de.length >= le)) {
              ye = ''.concat(d, '(').concat(w.length - me - 1, ')');
              break;
            }
            ye = '';
          }
          return ''.concat(se).concat(ye);
        }
        function h(w) {
          return w.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)
            ? w
            : JSON.stringify(w)
                .replace(/'/g, "\\'")
                .replace(/\\"/g, '"')
                .replace(/(^"|"$)/g, "'");
        }
        function v(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 2),
            typeof K == 'string'
              ? (K = h(K))
              : typeof K != 'number' && (K = '['.concat(T.inspect(K, T), ']')),
            (T.truncate -= K.length),
            (te = T.inspect(te, T)),
            ''.concat(K, ': ').concat(te)
          );
        }
        function S(w, T) {
          var F = Object.keys(w).slice(w.length);
          if (!w.length && !F.length) return '[]';
          T.truncate -= 4;
          var K = g(w, T);
          T.truncate -= K.length;
          var te = '';
          return (
            F.length &&
              (te = g(
                F.map(function (le) {
                  return [le, w[le]];
                }),
                T,
                v,
              )),
            '[ '.concat(K).concat(te ? ', '.concat(te) : '', ' ]')
          );
        }
        var E = Function.prototype.toString,
          C = /\s*function(?:\s|\s*\/\*[^(?:*\/)]+\*\/\s*)*([^\s\(\/]+)/;
        function A(w) {
          if (typeof w != 'function') return null;
          var T = '';
          if (typeof Function.prototype.name > 'u' && typeof w.name > 'u') {
            var F = E.call(w).match(C);
            F && (T = F[1]);
          } else T = w.name;
          return T;
        }
        var R = A,
          _ = function (w) {
            return typeof Buffer == 'function' && w instanceof Buffer
              ? 'Buffer'
              : w[Symbol.toStringTag]
                ? w[Symbol.toStringTag]
                : R(w.constructor);
          };
        function O(w, T) {
          var F = _(w);
          T.truncate -= F.length + 4;
          var K = Object.keys(w).slice(w.length);
          if (!w.length && !K.length) return ''.concat(F, '[]');
          for (var te = '', le = 0; le < w.length; le++) {
            var se = ''
              .concat(T.stylize(y(w[le], T.truncate), 'number'))
              .concat(le === w.length - 1 ? '' : ', ');
            if (((T.truncate -= se.length), w[le] !== w.length && T.truncate <= 3)) {
              te += ''.concat(d, '(').concat(w.length - w[le] + 1, ')');
              break;
            }
            te += se;
          }
          var de = '';
          return (
            K.length &&
              (de = g(
                K.map(function (ye) {
                  return [ye, w[ye]];
                }),
                T,
                v,
              )),
            ''
              .concat(F, '[ ')
              .concat(te)
              .concat(de ? ', '.concat(de) : '', ' ]')
          );
        }
        function x(w, T) {
          var F = w.toJSON();
          if (F === null) return 'Invalid Date';
          var K = F.split('T'),
            te = K[0];
          return T.stylize(''.concat(te, 'T').concat(y(K[1], T.truncate - te.length - 1)), 'date');
        }
        function j(w, T) {
          var F = R(w);
          return F
            ? T.stylize('[Function '.concat(y(F, T.truncate - 11), ']'), 'special')
            : T.stylize('[Function]', 'special');
        }
        function z(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 4),
            (K = T.inspect(K, T)),
            (T.truncate -= K.length),
            (te = T.inspect(te, T)),
            ''.concat(K, ' => ').concat(te)
          );
        }
        function V(w) {
          var T = [];
          return (
            w.forEach(function (F, K) {
              T.push([K, F]);
            }),
            T
          );
        }
        function U(w, T) {
          var F = w.size - 1;
          return F <= 0 ? 'Map{}' : ((T.truncate -= 7), 'Map{ '.concat(g(V(w), T, z), ' }'));
        }
        var ee =
          Number.isNaN ||
          function (w) {
            return w !== w;
          };
        function G(w, T) {
          return ee(w)
            ? T.stylize('NaN', 'number')
            : w === 1 / 0
              ? T.stylize('Infinity', 'number')
              : w === -1 / 0
                ? T.stylize('-Infinity', 'number')
                : w === 0
                  ? T.stylize(1 / w === 1 / 0 ? '+0' : '-0', 'number')
                  : T.stylize(y(w, T.truncate), 'number');
        }
        function ne(w, T) {
          var F = y(w.toString(), T.truncate - 1);
          return F !== d && (F += 'n'), T.stylize(F, 'bigint');
        }
        function oe(w, T) {
          var F = w.toString().split('/')[2],
            K = T.truncate - (2 + F.length),
            te = w.source;
          return T.stylize('/'.concat(y(te, K), '/').concat(F), 'regexp');
        }
        function ue(w) {
          var T = [];
          return (
            w.forEach(function (F) {
              T.push(F);
            }),
            T
          );
        }
        function ce(w, T) {
          return w.size === 0 ? 'Set{}' : ((T.truncate -= 7), 'Set{ '.concat(g(ue(w), T), ' }'));
        }
        var q = new RegExp(
            "['\\u0000-\\u001f\\u007f-\\u009f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]",
            'g',
          ),
          M = {
            '\b': '\\b',
            '	': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            "'": "\\'",
            '\\': '\\\\',
          },
          k = 16,
          D = 4;
        function Y(w) {
          return M[w] || '\\u'.concat('0000'.concat(w.charCodeAt(0).toString(k)).slice(-D));
        }
        function I(w, T) {
          return (
            q.test(w) && (w = w.replace(q, Y)),
            T.stylize("'".concat(y(w, T.truncate - 2), "'"), 'string')
          );
        }
        function N(w) {
          return 'description' in Symbol.prototype
            ? w.description
              ? 'Symbol('.concat(w.description, ')')
              : 'Symbol()'
            : w.toString();
        }
        var H = function () {
          return 'Promise{…}';
        };
        try {
          var Z = process.binding('util'),
            b = Z.getPromiseDetails,
            B = Z.kPending,
            $ = Z.kRejected;
          Array.isArray(b(Promise.resolve())) &&
            (H = function (w, T) {
              var F = b(w),
                K = a(F, 2),
                te = K[0],
                le = K[1];
              return te === B
                ? 'Promise{<pending>}'
                : 'Promise'.concat(te === $ ? '!' : '', '{').concat(T.inspect(le, T), '}');
            });
        } catch {}
        var X = H;
        function W(w, T) {
          var F = Object.getOwnPropertyNames(w),
            K = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(w) : [];
          if (F.length === 0 && K.length === 0) return '{}';
          if (((T.truncate -= 4), (T.seen = T.seen || []), T.seen.indexOf(w) >= 0))
            return '[Circular]';
          T.seen.push(w);
          var te = g(
              F.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v,
            ),
            le = g(
              K.map(function (de) {
                return [de, w[de]];
              }),
              T,
              v,
            );
          T.seen.pop();
          var se = '';
          return te && le && (se = ', '), '{ '.concat(te).concat(se).concat(le, ' }');
        }
        var L = typeof Symbol < 'u' && Symbol.toStringTag ? Symbol.toStringTag : !1;
        function ae(w, T) {
          var F = '';
          return (
            L && L in w && (F = w[L]),
            (F = F || R(w.constructor)),
            (!F || F === '_class') && (F = '<Anonymous Class>'),
            (T.truncate -= F.length),
            ''.concat(F).concat(W(w, T))
          );
        }
        function ie(w, T) {
          return w.length === 0
            ? 'Arguments[]'
            : ((T.truncate -= 13), 'Arguments[ '.concat(g(w, T), ' ]'));
        }
        var pe = [
          'stack',
          'line',
          'column',
          'name',
          'message',
          'fileName',
          'lineNumber',
          'columnNumber',
          'number',
          'description',
        ];
        function Re(w, T) {
          var F = Object.getOwnPropertyNames(w).filter(function (se) {
              return pe.indexOf(se) === -1;
            }),
            K = w.name;
          T.truncate -= K.length;
          var te = '';
          typeof w.message == 'string' ? (te = y(w.message, T.truncate)) : F.unshift('message'),
            (te = te ? ': '.concat(te) : ''),
            (T.truncate -= te.length + 5);
          var le = g(
            F.map(function (se) {
              return [se, w[se]];
            }),
            T,
            v,
          );
          return ''
            .concat(K)
            .concat(te)
            .concat(le ? ' { '.concat(le, ' }') : '');
        }
        function lt(w, T) {
          var F = a(w, 2),
            K = F[0],
            te = F[1];
          return (
            (T.truncate -= 3),
            te
              ? ''
                  .concat(T.stylize(K, 'yellow'), '=')
                  .concat(T.stylize('"'.concat(te, '"'), 'string'))
              : ''.concat(T.stylize(K, 'yellow'))
          );
        }
        function Ue(w, T) {
          return g(
            w,
            T,
            Ke,
            `
`,
          );
        }
        function Ke(w, T) {
          var F = w.getAttributeNames(),
            K = w.tagName.toLowerCase(),
            te = T.stylize('<'.concat(K), 'special'),
            le = T.stylize('>', 'special'),
            se = T.stylize('</'.concat(K, '>'), 'special');
          T.truncate -= K.length * 2 + 5;
          var de = '';
          F.length > 0 &&
            ((de += ' '),
            (de += g(
              F.map(function (re) {
                return [re, w.getAttribute(re)];
              }),
              T,
              lt,
              ' ',
            ))),
            (T.truncate -= de.length);
          var ye = T.truncate,
            me = Ue(w.children, T);
          return (
            me && me.length > ye && (me = ''.concat(d, '(').concat(w.children.length, ')')),
            ''.concat(te).concat(de).concat(le).concat(me).concat(se)
          );
        }
        var st = typeof Symbol == 'function' && typeof Symbol.for == 'function',
          Ne = st ? Symbol.for('chai/inspect') : '@@chai/inspect',
          Oe = !1;
        try {
          var We = af('util');
          Oe = We.inspect ? We.inspect.custom : !1;
        } catch {
          Oe = !1;
        }
        function Ye() {
          this.key = 'chai/loupe__' + Math.random() + Date.now();
        }
        Ye.prototype = {
          get: function (w) {
            return w[this.key];
          },
          has: function (w) {
            return this.key in w;
          },
          set: function (w, T) {
            Object.isExtensible(w) &&
              Object.defineProperty(w, this.key, { value: T, configurable: !0 });
          },
        };
        var Se = new (typeof WeakMap == 'function' ? WeakMap : Ye)(),
          Te = {},
          He = {
            undefined: function (w, T) {
              return T.stylize('undefined', 'undefined');
            },
            null: function (w, T) {
              return T.stylize(null, 'null');
            },
            boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            Boolean: function (w, T) {
              return T.stylize(w, 'boolean');
            },
            number: G,
            Number: G,
            bigint: ne,
            BigInt: ne,
            string: I,
            String: I,
            function: j,
            Function: j,
            symbol: N,
            Symbol: N,
            Array: S,
            Date: x,
            Map: U,
            Set: ce,
            RegExp: oe,
            Promise: X,
            WeakSet: function (w, T) {
              return T.stylize('WeakSet{…}', 'special');
            },
            WeakMap: function (w, T) {
              return T.stylize('WeakMap{…}', 'special');
            },
            Arguments: ie,
            Int8Array: O,
            Uint8Array: O,
            Uint8ClampedArray: O,
            Int16Array: O,
            Uint16Array: O,
            Int32Array: O,
            Uint32Array: O,
            Float32Array: O,
            Float64Array: O,
            Generator: function () {
              return '';
            },
            DataView: function () {
              return '';
            },
            ArrayBuffer: function () {
              return '';
            },
            Error: Re,
            HTMLCollection: Ue,
            NodeList: Ue,
          },
          ut = function (w, T, F) {
            return Ne in w && typeof w[Ne] == 'function'
              ? w[Ne](T)
              : Oe && Oe in w && typeof w[Oe] == 'function'
                ? w[Oe](T.depth, T)
                : 'inspect' in w && typeof w.inspect == 'function'
                  ? w.inspect(T.depth, T)
                  : 'constructor' in w && Se.has(w.constructor)
                    ? Se.get(w.constructor)(w, T)
                    : Te[F]
                      ? Te[F](w, T)
                      : '';
          },
          Mt = Object.prototype.toString;
        function De(w, T) {
          (T = m(T)), (T.inspect = De);
          var F = T,
            K = F.customInspect,
            te = w === null ? 'null' : o(w);
          if ((te === 'object' && (te = Mt.call(w).slice(8, -1)), He[te])) return He[te](w, T);
          if (K && w) {
            var le = ut(w, T, te);
            if (le) return typeof le == 'string' ? le : De(le, T);
          }
          var se = w ? Object.getPrototypeOf(w) : !1;
          return se === Object.prototype || se === null
            ? W(w, T)
            : w && typeof HTMLElement == 'function' && w instanceof HTMLElement
              ? Ke(w, T)
              : 'constructor' in w
                ? w.constructor !== Object
                  ? ae(w, T)
                  : W(w, T)
                : w === Object(w)
                  ? W(w, T)
                  : T.stylize(String(w), te);
        }
        function ct(w, T) {
          return Se.has(w) ? !1 : (Se.set(w, T), !0);
        }
        function J(w, T) {
          return w in Te ? !1 : ((Te[w] = T), !0);
        }
        var Q = Ne;
        (r.custom = Q),
          (r.default = De),
          (r.inspect = De),
          (r.registerConstructor = ct),
          (r.registerStringTag = J),
          Object.defineProperty(r, '__esModule', { value: !0 });
      });
    },
  }),
  dr = P({
    '../../node_modules/chai/lib/chai/config.js'(e, t) {
      t.exports = {
        includeStack: !1,
        showDiff: !0,
        truncateThreshold: 40,
        useProxy: !0,
        proxyExcludedKeys: ['then', 'catch', 'inspect', 'toJSON'],
      };
    },
  }),
  Uo = P({
    '../../node_modules/chai/lib/chai/utils/inspect.js'(e, t) {
      Fo();
      var r = mn(),
        o = dr();
      t.exports = a;
      function a(c, n, i, l) {
        var s = {
          colors: l,
          depth: typeof i > 'u' ? 2 : i,
          showHidden: n,
          truncate: o.truncateThreshold ? o.truncateThreshold : 1 / 0,
        };
        return r.inspect(c, s);
      }
    },
  }),
  xl = P({
    '../../node_modules/chai/lib/chai/utils/objDisplay.js'(e, t) {
      var r = Uo(),
        o = dr();
      t.exports = function (a) {
        var c = r(a),
          n = Object.prototype.toString.call(a);
        if (o.truncateThreshold && c.length >= o.truncateThreshold) {
          if (n === '[object Function]')
            return !a.name || a.name === '' ? '[Function]' : '[Function: ' + a.name + ']';
          if (n === '[object Array]') return '[ Array(' + a.length + ') ]';
          if (n === '[object Object]') {
            var i = Object.keys(a),
              l = i.length > 2 ? i.splice(0, 2).join(', ') + ', ...' : i.join(', ');
            return '{ Object (' + l + ') }';
          } else return c;
        } else return c;
      };
    },
  }),
  df = P({
    '../../node_modules/chai/lib/chai/utils/getMessage.js'(e, t) {
      var r = at(),
        o = ql(),
        a = xl();
      t.exports = function (c, n) {
        var i = r(c, 'negate'),
          l = r(c, 'object'),
          s = n[3],
          u = o(c, n),
          p = i ? n[2] : n[1],
          d = r(c, 'message');
        return (
          typeof p == 'function' && (p = p()),
          (p = p || ''),
          (p = p
            .replace(/#\{this\}/g, function () {
              return a(l);
            })
            .replace(/#\{act\}/g, function () {
              return a(u);
            })
            .replace(/#\{exp\}/g, function () {
              return a(s);
            })),
          d ? d + ': ' + p : p
        );
      };
    },
  }),
  Lt = P({
    '../../node_modules/chai/lib/chai/utils/transferFlags.js'(e, t) {
      t.exports = function (r, o, a) {
        var c = r.__flags || (r.__flags = Object.create(null));
        o.__flags || (o.__flags = Object.create(null)), (a = arguments.length === 3 ? a : !0);
        for (var n in c)
          (a || (n !== 'object' && n !== 'ssfi' && n !== 'lockSsfi' && n != 'message')) &&
            (o.__flags[n] = c[n]);
      };
    },
  }),
  pf = P({
    '../../node_modules/deep-eql/index.js'(e, t) {
      var r = fn();
      function o() {
        this._key = 'chai/deep-eql__' + Math.random() + Date.now();
      }
      o.prototype = {
        get: function (_) {
          return _[this._key];
        },
        set: function (_, O) {
          Object.isExtensible(_) &&
            Object.defineProperty(_, this._key, { value: O, configurable: !0 });
        },
      };
      var a = typeof WeakMap == 'function' ? WeakMap : o;
      function c(_, O, x) {
        if (!x || A(_) || A(O)) return null;
        var j = x.get(_);
        if (j) {
          var z = j.get(O);
          if (typeof z == 'boolean') return z;
        }
        return null;
      }
      function n(_, O, x, j) {
        if (!(!x || A(_) || A(O))) {
          var z = x.get(_);
          z ? z.set(O, j) : ((z = new a()), z.set(O, j), x.set(_, z));
        }
      }
      (t.exports = i), (t.exports.MemoizeMap = a);
      function i(_, O, x) {
        if (x && x.comparator) return s(_, O, x);
        var j = l(_, O);
        return j !== null ? j : s(_, O, x);
      }
      function l(_, O) {
        return _ === O
          ? _ !== 0 || 1 / _ === 1 / O
          : _ !== _ && O !== O
            ? !0
            : A(_) || A(O)
              ? !1
              : null;
      }
      function s(_, O, x) {
        (x = x || {}), (x.memoize = x.memoize === !1 ? !1 : x.memoize || new a());
        var j = x && x.comparator,
          z = c(_, O, x.memoize);
        if (z !== null) return z;
        var V = c(O, _, x.memoize);
        if (V !== null) return V;
        if (j) {
          var U = j(_, O);
          if (U === !1 || U === !0) return n(_, O, x.memoize, U), U;
          var ee = l(_, O);
          if (ee !== null) return ee;
        }
        var G = r(_);
        if (G !== r(O)) return n(_, O, x.memoize, !1), !1;
        n(_, O, x.memoize, !0);
        var ne = u(_, O, G, x);
        return n(_, O, x.memoize, ne), ne;
      }
      function u(_, O, x, j) {
        switch (x) {
          case 'String':
          case 'Number':
          case 'Boolean':
          case 'Date':
            return i(_.valueOf(), O.valueOf());
          case 'Promise':
          case 'Symbol':
          case 'function':
          case 'WeakMap':
          case 'WeakSet':
            return _ === O;
          case 'Error':
            return E(_, O, ['name', 'message', 'code'], j);
          case 'Arguments':
          case 'Int8Array':
          case 'Uint8Array':
          case 'Uint8ClampedArray':
          case 'Int16Array':
          case 'Uint16Array':
          case 'Int32Array':
          case 'Uint32Array':
          case 'Float32Array':
          case 'Float64Array':
          case 'Array':
            return f(_, O, j);
          case 'RegExp':
            return p(_, O);
          case 'Generator':
            return m(_, O, j);
          case 'DataView':
            return f(new Uint8Array(_.buffer), new Uint8Array(O.buffer), j);
          case 'ArrayBuffer':
            return f(new Uint8Array(_), new Uint8Array(O), j);
          case 'Set':
            return d(_, O, j);
          case 'Map':
            return d(_, O, j);
          case 'Temporal.PlainDate':
          case 'Temporal.PlainTime':
          case 'Temporal.PlainDateTime':
          case 'Temporal.Instant':
          case 'Temporal.ZonedDateTime':
          case 'Temporal.PlainYearMonth':
          case 'Temporal.PlainMonthDay':
            return _.equals(O);
          case 'Temporal.Duration':
            return _.total('nanoseconds') === O.total('nanoseconds');
          case 'Temporal.TimeZone':
          case 'Temporal.Calendar':
            return _.toString() === O.toString();
          default:
            return C(_, O, j);
        }
      }
      function p(_, O) {
        return _.toString() === O.toString();
      }
      function d(_, O, x) {
        if (_.size !== O.size) return !1;
        if (_.size === 0) return !0;
        var j = [],
          z = [];
        return (
          _.forEach(function (V, U) {
            j.push([V, U]);
          }),
          O.forEach(function (V, U) {
            z.push([V, U]);
          }),
          f(j.sort(), z.sort(), x)
        );
      }
      function f(_, O, x) {
        var j = _.length;
        if (j !== O.length) return !1;
        if (j === 0) return !0;
        for (var z = -1; ++z < j; ) if (i(_[z], O[z], x) === !1) return !1;
        return !0;
      }
      function m(_, O, x) {
        return f(h(_), h(O), x);
      }
      function y(_) {
        return (
          typeof Symbol < 'u' &&
          typeof _ == 'object' &&
          typeof Symbol.iterator < 'u' &&
          typeof _[Symbol.iterator] == 'function'
        );
      }
      function g(_) {
        if (y(_))
          try {
            return h(_[Symbol.iterator]());
          } catch {
            return [];
          }
        return [];
      }
      function h(_) {
        for (var O = _.next(), x = [O.value]; O.done === !1; ) (O = _.next()), x.push(O.value);
        return x;
      }
      function v(_) {
        var O = [];
        for (var x in _) O.push(x);
        return O;
      }
      function S(_) {
        for (var O = [], x = Object.getOwnPropertySymbols(_), j = 0; j < x.length; j += 1) {
          var z = x[j];
          Object.getOwnPropertyDescriptor(_, z).enumerable && O.push(z);
        }
        return O;
      }
      function E(_, O, x, j) {
        var z = x.length;
        if (z === 0) return !0;
        for (var V = 0; V < z; V += 1) if (i(_[x[V]], O[x[V]], j) === !1) return !1;
        return !0;
      }
      function C(_, O, x) {
        var j = v(_),
          z = v(O),
          V = S(_),
          U = S(O);
        if (((j = j.concat(V)), (z = z.concat(U)), j.length && j.length === z.length))
          return f(R(j).sort(), R(z).sort()) === !1 ? !1 : E(_, O, j, x);
        var ee = g(_),
          G = g(O);
        return ee.length && ee.length === G.length
          ? (ee.sort(), G.sort(), f(ee, G, x))
          : j.length === 0 && ee.length === 0 && z.length === 0 && G.length === 0;
      }
      function A(_) {
        return _ === null || typeof _ != 'object';
      }
      function R(_) {
        return _.map(function (O) {
          return typeof O == 'symbol' ? O.toString() : O;
        });
      }
    },
  }),
  yn = P({
    '../../node_modules/chai/lib/chai/utils/isProxyEnabled.js'(e, t) {
      var r = dr();
      t.exports = function () {
        return r.useProxy && typeof Proxy < 'u' && typeof Reflect < 'u';
      };
    },
  }),
  ff = P({
    '../../node_modules/chai/lib/chai/utils/addProperty.js'(e, t) {
      var r = Ft(),
        o = at(),
        a = yn(),
        c = Lt();
      t.exports = function (n, i, l) {
        (l = l === void 0 ? function () {} : l),
          Object.defineProperty(n, i, {
            get: function s() {
              !a() && !o(this, 'lockSsfi') && o(this, 'ssfi', s);
              var u = l.call(this);
              if (u !== void 0) return u;
              var p = new r.Assertion();
              return c(this, p), p;
            },
            configurable: !0,
          });
      };
    },
  }),
  hn = P({
    '../../node_modules/chai/lib/chai/utils/addLengthGuard.js'(e, t) {
      var r = Object.getOwnPropertyDescriptor(function () {}, 'length');
      t.exports = function (o, a, c) {
        return (
          r.configurable &&
            Object.defineProperty(o, 'length', {
              get: function () {
                throw Error(
                  c
                    ? 'Invalid Chai property: ' +
                        a +
                        '.length. Due to a compatibility issue, "length" cannot directly follow "' +
                        a +
                        '". Use "' +
                        a +
                        '.lengthOf" instead.'
                    : 'Invalid Chai property: ' +
                        a +
                        '.length. See docs for proper usage of "' +
                        a +
                        '".',
                );
              },
            }),
          o
        );
      };
    },
  }),
  mf = P({
    '../../node_modules/chai/lib/chai/utils/getProperties.js'(e, t) {
      t.exports = function (r) {
        var o = Object.getOwnPropertyNames(r);
        function a(n) {
          o.indexOf(n) === -1 && o.push(n);
        }
        for (var c = Object.getPrototypeOf(r); c !== null; )
          Object.getOwnPropertyNames(c).forEach(a), (c = Object.getPrototypeOf(c));
        return o;
      };
    },
  }),
  bn = P({
    '../../node_modules/chai/lib/chai/utils/proxify.js'(e, t) {
      var r = dr(),
        o = at(),
        a = mf(),
        c = yn(),
        n = ['__flags', '__methods', '_obj', 'assert'];
      t.exports = function (l, s) {
        return c()
          ? new Proxy(l, {
              get: function u(p, d) {
                if (
                  typeof d == 'string' &&
                  r.proxyExcludedKeys.indexOf(d) === -1 &&
                  !Reflect.has(p, d)
                ) {
                  if (s)
                    throw Error(
                      'Invalid Chai property: ' +
                        s +
                        '.' +
                        d +
                        '. See docs for proper usage of "' +
                        s +
                        '".',
                    );
                  var f = null,
                    m = 4;
                  throw (
                    (a(p).forEach(function (y) {
                      if (!Object.prototype.hasOwnProperty(y) && n.indexOf(y) === -1) {
                        var g = i(d, y, m);
                        g < m && ((f = y), (m = g));
                      }
                    }),
                    Error(
                      f !== null
                        ? 'Invalid Chai property: ' + d + '. Did you mean "' + f + '"?'
                        : 'Invalid Chai property: ' + d,
                    ))
                  );
                }
                return (
                  n.indexOf(d) === -1 && !o(p, 'lockSsfi') && o(p, 'ssfi', u), Reflect.get(p, d)
                );
              },
            })
          : l;
      };
      function i(l, s, u) {
        if (Math.abs(l.length - s.length) >= u) return u;
        for (var p = [], d = 0; d <= l.length; d++)
          (p[d] = Array(s.length + 1).fill(0)), (p[d][0] = d);
        for (var f = 0; f < s.length; f++) p[0][f] = f;
        for (var d = 1; d <= l.length; d++)
          for (var m = l.charCodeAt(d - 1), f = 1; f <= s.length; f++) {
            if (Math.abs(d - f) >= u) {
              p[d][f] = u;
              continue;
            }
            p[d][f] = Math.min(
              p[d - 1][f] + 1,
              p[d][f - 1] + 1,
              p[d - 1][f - 1] + (m === s.charCodeAt(f - 1) ? 0 : 1),
            );
          }
        return p[l.length][s.length];
      }
    },
  }),
  yf = P({
    '../../node_modules/chai/lib/chai/utils/addMethod.js'(e, t) {
      var r = hn(),
        o = Ft(),
        a = at(),
        c = bn(),
        n = Lt();
      t.exports = function (i, l, s) {
        var u = function () {
          a(this, 'lockSsfi') || a(this, 'ssfi', u);
          var p = s.apply(this, arguments);
          if (p !== void 0) return p;
          var d = new o.Assertion();
          return n(this, d), d;
        };
        r(u, l, !1), (i[l] = c(u, l));
      };
    },
  }),
  hf = P({
    '../../node_modules/chai/lib/chai/utils/overwriteProperty.js'(e, t) {
      var r = Ft(),
        o = at(),
        a = yn(),
        c = Lt();
      t.exports = function (n, i, l) {
        var s = Object.getOwnPropertyDescriptor(n, i),
          u = function () {};
        s && typeof s.get == 'function' && (u = s.get),
          Object.defineProperty(n, i, {
            get: function p() {
              !a() && !o(this, 'lockSsfi') && o(this, 'ssfi', p);
              var d = o(this, 'lockSsfi');
              o(this, 'lockSsfi', !0);
              var f = l(u).call(this);
              if ((o(this, 'lockSsfi', d), f !== void 0)) return f;
              var m = new r.Assertion();
              return c(this, m), m;
            },
            configurable: !0,
          });
      };
    },
  }),
  bf = P({
    '../../node_modules/chai/lib/chai/utils/overwriteMethod.js'(e, t) {
      var r = hn(),
        o = Ft(),
        a = at(),
        c = bn(),
        n = Lt();
      t.exports = function (i, l, s) {
        var u = i[l],
          p = function () {
            throw new Error(l + ' is not a function');
          };
        u && typeof u == 'function' && (p = u);
        var d = function () {
          a(this, 'lockSsfi') || a(this, 'ssfi', d);
          var f = a(this, 'lockSsfi');
          a(this, 'lockSsfi', !0);
          var m = s(p).apply(this, arguments);
          if ((a(this, 'lockSsfi', f), m !== void 0)) return m;
          var y = new o.Assertion();
          return n(this, y), y;
        };
        r(d, l, !1), (i[l] = c(d, l));
      };
    },
  }),
  gf = P({
    '../../node_modules/chai/lib/chai/utils/addChainableMethod.js'(e, t) {
      var r = hn(),
        o = Ft(),
        a = at(),
        c = bn(),
        n = Lt(),
        i = typeof Object.setPrototypeOf == 'function',
        l = function () {},
        s = Object.getOwnPropertyNames(l).filter(function (d) {
          var f = Object.getOwnPropertyDescriptor(l, d);
          return typeof f != 'object' ? !0 : !f.configurable;
        }),
        u = Function.prototype.call,
        p = Function.prototype.apply;
      t.exports = function (d, f, m, y) {
        typeof y != 'function' && (y = function () {});
        var g = { method: m, chainingBehavior: y };
        d.__methods || (d.__methods = {}),
          (d.__methods[f] = g),
          Object.defineProperty(d, f, {
            get: function () {
              g.chainingBehavior.call(this);
              var h = function () {
                a(this, 'lockSsfi') || a(this, 'ssfi', h);
                var E = g.method.apply(this, arguments);
                if (E !== void 0) return E;
                var C = new o.Assertion();
                return n(this, C), C;
              };
              if ((r(h, f, !0), i)) {
                var v = Object.create(this);
                (v.call = u), (v.apply = p), Object.setPrototypeOf(h, v);
              } else {
                var S = Object.getOwnPropertyNames(d);
                S.forEach(function (E) {
                  if (s.indexOf(E) === -1) {
                    var C = Object.getOwnPropertyDescriptor(d, E);
                    Object.defineProperty(h, E, C);
                  }
                });
              }
              return n(this, h), c(h);
            },
            configurable: !0,
          });
      };
    },
  }),
  vf = P({
    '../../node_modules/chai/lib/chai/utils/overwriteChainableMethod.js'(e, t) {
      var r = Ft(),
        o = Lt();
      t.exports = function (a, c, n, i) {
        var l = a.__methods[c],
          s = l.chainingBehavior;
        l.chainingBehavior = function () {
          var p = i(s).call(this);
          if (p !== void 0) return p;
          var d = new r.Assertion();
          return o(this, d), d;
        };
        var u = l.method;
        l.method = function () {
          var p = n(u).apply(this, arguments);
          if (p !== void 0) return p;
          var d = new r.Assertion();
          return o(this, d), d;
        };
      };
    },
  }),
  _f = P({
    '../../node_modules/chai/lib/chai/utils/compareByInspect.js'(e, t) {
      var r = Uo();
      t.exports = function (o, a) {
        return r(o) < r(a) ? -1 : 1;
      };
    },
  }),
  Ml = P({
    '../../node_modules/chai/lib/chai/utils/getOwnEnumerablePropertySymbols.js'(e, t) {
      t.exports = function (r) {
        return typeof Object.getOwnPropertySymbols != 'function'
          ? []
          : Object.getOwnPropertySymbols(r).filter(function (o) {
              return Object.getOwnPropertyDescriptor(r, o).enumerable;
            });
      };
    },
  }),
  Ef = P({
    '../../node_modules/chai/lib/chai/utils/getOwnEnumerableProperties.js'(e, t) {
      var r = Ml();
      t.exports = function (o) {
        return Object.keys(o).concat(r(o));
      };
    },
  }),
  wf = P({
    '../../node_modules/check-error/index.js'(e, t) {
      var r = Fo();
      function o(l, s) {
        return s instanceof Error && l === s;
      }
      function a(l, s) {
        return s instanceof Error
          ? l.constructor === s.constructor || l instanceof s.constructor
          : s.prototype instanceof Error || s === Error
            ? l.constructor === s || l instanceof s
            : !1;
      }
      function c(l, s) {
        var u = typeof l == 'string' ? l : l.message;
        return s instanceof RegExp ? s.test(u) : typeof s == 'string' ? u.indexOf(s) !== -1 : !1;
      }
      function n(l) {
        var s = l;
        if (l instanceof Error) s = r(l.constructor);
        else if (typeof l == 'function' && ((s = r(l)), s === '')) {
          var u = r(new l());
          s = u || s;
        }
        return s;
      }
      function i(l) {
        var s = '';
        return l && l.message ? (s = l.message) : typeof l == 'string' && (s = l), s;
      }
      t.exports = {
        compatibleInstance: o,
        compatibleConstructor: a,
        compatibleMessage: c,
        getMessage: i,
        getConstructorName: n,
      };
    },
  }),
  Sf = P({
    '../../node_modules/chai/lib/chai/utils/isNaN.js'(e, t) {
      function r(o) {
        return o !== o;
      }
      t.exports = Number.isNaN || r;
    },
  }),
  Cf = P({
    '../../node_modules/chai/lib/chai/utils/getOperator.js'(e, t) {
      var r = fn(),
        o = at();
      function a(c) {
        var n = r(c),
          i = ['Array', 'Object', 'function'];
        return i.indexOf(n) !== -1;
      }
      t.exports = function (c, n) {
        var i = o(c, 'operator'),
          l = o(c, 'negate'),
          s = n[3],
          u = l ? n[2] : n[1];
        if (i) return i;
        if ((typeof u == 'function' && (u = u()), (u = u || ''), !!u && !/\shave\s/.test(u))) {
          var p = a(s);
          return /\snot\s/.test(u)
            ? p
              ? 'notDeepStrictEqual'
              : 'notStrictEqual'
            : p
              ? 'deepStrictEqual'
              : 'strictEqual';
        }
      };
    },
  }),
  Of = P({
    '../../node_modules/chai/lib/chai/utils/index.js'(e) {
      var t = sf();
      (e.test = uf()),
        (e.type = fn()),
        (e.expectTypes = cf()),
        (e.getMessage = df()),
        (e.getActual = ql()),
        (e.inspect = Uo()),
        (e.objDisplay = xl()),
        (e.flag = at()),
        (e.transferFlags = Lt()),
        (e.eql = pf()),
        (e.getPathInfo = t.getPathInfo),
        (e.hasProperty = t.hasProperty),
        (e.getName = Fo()),
        (e.addProperty = ff()),
        (e.addMethod = yf()),
        (e.overwriteProperty = hf()),
        (e.overwriteMethod = bf()),
        (e.addChainableMethod = gf()),
        (e.overwriteChainableMethod = vf()),
        (e.compareByInspect = _f()),
        (e.getOwnEnumerablePropertySymbols = Ml()),
        (e.getOwnEnumerableProperties = Ef()),
        (e.checkError = wf()),
        (e.proxify = bn()),
        (e.addLengthGuard = hn()),
        (e.isProxyEnabled = yn()),
        (e.isNaN = Sf()),
        (e.getOperator = Cf());
    },
  }),
  Pf = P({
    '../../node_modules/chai/lib/chai/assertion.js'(e, t) {
      var r = dr();
      t.exports = function (o, a) {
        var c = o.AssertionError,
          n = a.flag;
        o.Assertion = i;
        function i(l, s, u, p) {
          return (
            n(this, 'ssfi', u || i),
            n(this, 'lockSsfi', p),
            n(this, 'object', l),
            n(this, 'message', s),
            a.proxify(this)
          );
        }
        Object.defineProperty(i, 'includeStack', {
          get: function () {
            return (
              console.warn(
                'Assertion.includeStack is deprecated, use chai.config.includeStack instead.',
              ),
              r.includeStack
            );
          },
          set: function (l) {
            console.warn(
              'Assertion.includeStack is deprecated, use chai.config.includeStack instead.',
            ),
              (r.includeStack = l);
          },
        }),
          Object.defineProperty(i, 'showDiff', {
            get: function () {
              return (
                console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.'),
                r.showDiff
              );
            },
            set: function (l) {
              console.warn('Assertion.showDiff is deprecated, use chai.config.showDiff instead.'),
                (r.showDiff = l);
            },
          }),
          (i.addProperty = function (l, s) {
            a.addProperty(this.prototype, l, s);
          }),
          (i.addMethod = function (l, s) {
            a.addMethod(this.prototype, l, s);
          }),
          (i.addChainableMethod = function (l, s, u) {
            a.addChainableMethod(this.prototype, l, s, u);
          }),
          (i.overwriteProperty = function (l, s) {
            a.overwriteProperty(this.prototype, l, s);
          }),
          (i.overwriteMethod = function (l, s) {
            a.overwriteMethod(this.prototype, l, s);
          }),
          (i.overwriteChainableMethod = function (l, s, u) {
            a.overwriteChainableMethod(this.prototype, l, s, u);
          }),
          (i.prototype.assert = function (l, s, u, p, d, f) {
            var m = a.test(this, arguments);
            if (
              (f !== !1 && (f = !0),
              p === void 0 && d === void 0 && (f = !1),
              r.showDiff !== !0 && (f = !1),
              !m)
            ) {
              s = a.getMessage(this, arguments);
              var y = a.getActual(this, arguments),
                g = { actual: y, expected: p, showDiff: f },
                h = a.getOperator(this, arguments);
              throw (
                (h && (g.operator = h), new c(s, g, r.includeStack ? this.assert : n(this, 'ssfi')))
              );
            }
          }),
          Object.defineProperty(i.prototype, '_obj', {
            get: function () {
              return n(this, 'object');
            },
            set: function (l) {
              n(this, 'object', l);
            },
          });
      };
    },
  }),
  Rf = P({
    '../../node_modules/chai/lib/chai/core/assertions.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion,
          c = r.AssertionError,
          n = o.flag;
        [
          'to',
          'be',
          'been',
          'is',
          'and',
          'has',
          'have',
          'with',
          'that',
          'which',
          'at',
          'of',
          'same',
          'but',
          'does',
          'still',
          'also',
        ].forEach(function (q) {
          a.addProperty(q);
        }),
          a.addProperty('not', function () {
            n(this, 'negate', !0);
          }),
          a.addProperty('deep', function () {
            n(this, 'deep', !0);
          }),
          a.addProperty('nested', function () {
            n(this, 'nested', !0);
          }),
          a.addProperty('own', function () {
            n(this, 'own', !0);
          }),
          a.addProperty('ordered', function () {
            n(this, 'ordered', !0);
          }),
          a.addProperty('any', function () {
            n(this, 'any', !0), n(this, 'all', !1);
          }),
          a.addProperty('all', function () {
            n(this, 'all', !0), n(this, 'any', !1);
          });
        function i(q, M) {
          M && n(this, 'message', M), (q = q.toLowerCase());
          var k = n(this, 'object'),
            D = ~['a', 'e', 'i', 'o', 'u'].indexOf(q.charAt(0)) ? 'an ' : 'a ';
          this.assert(
            q === o.type(k).toLowerCase(),
            'expected #{this} to be ' + D + q,
            'expected #{this} not to be ' + D + q,
          );
        }
        a.addChainableMethod('an', i), a.addChainableMethod('a', i);
        function l(q, M) {
          return (o.isNaN(q) && o.isNaN(M)) || q === M;
        }
        function s() {
          n(this, 'contains', !0);
        }
        function u(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = o.type(k).toLowerCase(),
            Y = n(this, 'message'),
            I = n(this, 'negate'),
            N = n(this, 'ssfi'),
            H = n(this, 'deep'),
            Z = H ? 'deep ' : '';
          Y = Y ? Y + ': ' : '';
          var b = !1;
          switch (D) {
            case 'string':
              b = k.indexOf(q) !== -1;
              break;
            case 'weakset':
              if (H) throw new c(Y + 'unable to use .deep.include with WeakSet', void 0, N);
              b = k.has(q);
              break;
            case 'map':
              var B = H ? o.eql : l;
              k.forEach(function (L) {
                b = b || B(L, q);
              });
              break;
            case 'set':
              H
                ? k.forEach(function (L) {
                    b = b || o.eql(L, q);
                  })
                : (b = k.has(q));
              break;
            case 'array':
              H
                ? (b = k.some(function (L) {
                    return o.eql(L, q);
                  }))
                : (b = k.indexOf(q) !== -1);
              break;
            default:
              if (q !== Object(q))
                throw new c(
                  Y +
                    'the given combination of arguments (' +
                    D +
                    ' and ' +
                    o.type(q).toLowerCase() +
                    ') is invalid for this assertion. You can use an array, a map, an object, a set, a string, or a weakset instead of a ' +
                    o.type(q).toLowerCase(),
                  void 0,
                  N,
                );
              var $ = Object.keys(q),
                X = null,
                W = 0;
              if (
                ($.forEach(function (L) {
                  var ae = new a(k);
                  if (
                    (o.transferFlags(this, ae, !0), n(ae, 'lockSsfi', !0), !I || $.length === 1)
                  ) {
                    ae.property(L, q[L]);
                    return;
                  }
                  try {
                    ae.property(L, q[L]);
                  } catch (ie) {
                    if (!o.checkError.compatibleConstructor(ie, c)) throw ie;
                    X === null && (X = ie), W++;
                  }
                }, this),
                I && $.length > 1 && W === $.length)
              )
                throw X;
              return;
          }
          this.assert(
            b,
            'expected #{this} to ' + Z + 'include ' + o.inspect(q),
            'expected #{this} to not ' + Z + 'include ' + o.inspect(q),
          );
        }
        a.addChainableMethod('include', u, s),
          a.addChainableMethod('contain', u, s),
          a.addChainableMethod('contains', u, s),
          a.addChainableMethod('includes', u, s),
          a.addProperty('ok', function () {
            this.assert(
              n(this, 'object'),
              'expected #{this} to be truthy',
              'expected #{this} to be falsy',
            );
          }),
          a.addProperty('true', function () {
            this.assert(
              n(this, 'object') === !0,
              'expected #{this} to be true',
              'expected #{this} to be false',
              !n(this, 'negate'),
            );
          }),
          a.addProperty('false', function () {
            this.assert(
              n(this, 'object') === !1,
              'expected #{this} to be false',
              'expected #{this} to be true',
              !!n(this, 'negate'),
            );
          }),
          a.addProperty('null', function () {
            this.assert(
              n(this, 'object') === null,
              'expected #{this} to be null',
              'expected #{this} not to be null',
            );
          }),
          a.addProperty('undefined', function () {
            this.assert(
              n(this, 'object') === void 0,
              'expected #{this} to be undefined',
              'expected #{this} not to be undefined',
            );
          }),
          a.addProperty('NaN', function () {
            this.assert(
              o.isNaN(n(this, 'object')),
              'expected #{this} to be NaN',
              'expected #{this} not to be NaN',
            );
          });
        function p() {
          var q = n(this, 'object');
          this.assert(q != null, 'expected #{this} to exist', 'expected #{this} to not exist');
        }
        a.addProperty('exist', p),
          a.addProperty('exists', p),
          a.addProperty('empty', function () {
            var q = n(this, 'object'),
              M = n(this, 'ssfi'),
              k = n(this, 'message'),
              D;
            switch (((k = k ? k + ': ' : ''), o.type(q).toLowerCase())) {
              case 'array':
              case 'string':
                D = q.length;
                break;
              case 'map':
              case 'set':
                D = q.size;
                break;
              case 'weakmap':
              case 'weakset':
                throw new c(k + '.empty was passed a weak collection', void 0, M);
              case 'function':
                var Y = k + '.empty was passed a function ' + o.getName(q);
                throw new c(Y.trim(), void 0, M);
              default:
                if (q !== Object(q))
                  throw new c(
                    k + '.empty was passed non-string primitive ' + o.inspect(q),
                    void 0,
                    M,
                  );
                D = Object.keys(q).length;
            }
            this.assert(
              D === 0,
              'expected #{this} to be empty',
              'expected #{this} not to be empty',
            );
          });
        function d() {
          var q = n(this, 'object'),
            M = o.type(q);
          this.assert(
            M === 'Arguments',
            'expected #{this} to be arguments but got ' + M,
            'expected #{this} to not be arguments',
          );
        }
        a.addProperty('arguments', d), a.addProperty('Arguments', d);
        function f(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object');
          if (n(this, 'deep')) {
            var D = n(this, 'lockSsfi');
            n(this, 'lockSsfi', !0), this.eql(q), n(this, 'lockSsfi', D);
          } else
            this.assert(
              q === k,
              'expected #{this} to equal #{exp}',
              'expected #{this} to not equal #{exp}',
              q,
              this._obj,
              !0,
            );
        }
        a.addMethod('equal', f), a.addMethod('equals', f), a.addMethod('eq', f);
        function m(q, M) {
          M && n(this, 'message', M),
            this.assert(
              o.eql(q, n(this, 'object')),
              'expected #{this} to deeply equal #{exp}',
              'expected #{this} to not deeply equal #{exp}',
              q,
              this._obj,
              !0,
            );
        }
        a.addMethod('eql', m), a.addMethod('eqls', m);
        function y(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'doLength'),
            Y = n(this, 'message'),
            I = Y ? Y + ': ' : '',
            N = n(this, 'ssfi'),
            H = o.type(k).toLowerCase(),
            Z = o.type(q).toLowerCase(),
            b,
            B = !0;
          if (
            (D && H !== 'map' && H !== 'set' && new a(k, Y, N, !0).to.have.property('length'),
            !D && H === 'date' && Z !== 'date')
          )
            b = I + 'the argument to above must be a date';
          else if (Z !== 'number' && (D || H === 'number'))
            b = I + 'the argument to above must be a number';
          else if (!D && H !== 'date' && H !== 'number') {
            var $ = H === 'string' ? "'" + k + "'" : k;
            b = I + 'expected ' + $ + ' to be a number or a date';
          } else B = !1;
          if (B) throw new c(b, void 0, N);
          if (D) {
            var X = 'length',
              W;
            H === 'map' || H === 'set' ? ((X = 'size'), (W = k.size)) : (W = k.length),
              this.assert(
                W > q,
                'expected #{this} to have a ' + X + ' above #{exp} but got #{act}',
                'expected #{this} to not have a ' + X + ' above #{exp}',
                q,
                W,
              );
          } else
            this.assert(
              k > q,
              'expected #{this} to be above #{exp}',
              'expected #{this} to be at most #{exp}',
              q,
            );
        }
        a.addMethod('above', y), a.addMethod('gt', y), a.addMethod('greaterThan', y);
        function g(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'doLength'),
            Y = n(this, 'message'),
            I = Y ? Y + ': ' : '',
            N = n(this, 'ssfi'),
            H = o.type(k).toLowerCase(),
            Z = o.type(q).toLowerCase(),
            b,
            B = !0;
          if (
            (D && H !== 'map' && H !== 'set' && new a(k, Y, N, !0).to.have.property('length'),
            !D && H === 'date' && Z !== 'date')
          )
            b = I + 'the argument to least must be a date';
          else if (Z !== 'number' && (D || H === 'number'))
            b = I + 'the argument to least must be a number';
          else if (!D && H !== 'date' && H !== 'number') {
            var $ = H === 'string' ? "'" + k + "'" : k;
            b = I + 'expected ' + $ + ' to be a number or a date';
          } else B = !1;
          if (B) throw new c(b, void 0, N);
          if (D) {
            var X = 'length',
              W;
            H === 'map' || H === 'set' ? ((X = 'size'), (W = k.size)) : (W = k.length),
              this.assert(
                W >= q,
                'expected #{this} to have a ' + X + ' at least #{exp} but got #{act}',
                'expected #{this} to have a ' + X + ' below #{exp}',
                q,
                W,
              );
          } else
            this.assert(
              k >= q,
              'expected #{this} to be at least #{exp}',
              'expected #{this} to be below #{exp}',
              q,
            );
        }
        a.addMethod('least', g), a.addMethod('gte', g), a.addMethod('greaterThanOrEqual', g);
        function h(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'doLength'),
            Y = n(this, 'message'),
            I = Y ? Y + ': ' : '',
            N = n(this, 'ssfi'),
            H = o.type(k).toLowerCase(),
            Z = o.type(q).toLowerCase(),
            b,
            B = !0;
          if (
            (D && H !== 'map' && H !== 'set' && new a(k, Y, N, !0).to.have.property('length'),
            !D && H === 'date' && Z !== 'date')
          )
            b = I + 'the argument to below must be a date';
          else if (Z !== 'number' && (D || H === 'number'))
            b = I + 'the argument to below must be a number';
          else if (!D && H !== 'date' && H !== 'number') {
            var $ = H === 'string' ? "'" + k + "'" : k;
            b = I + 'expected ' + $ + ' to be a number or a date';
          } else B = !1;
          if (B) throw new c(b, void 0, N);
          if (D) {
            var X = 'length',
              W;
            H === 'map' || H === 'set' ? ((X = 'size'), (W = k.size)) : (W = k.length),
              this.assert(
                W < q,
                'expected #{this} to have a ' + X + ' below #{exp} but got #{act}',
                'expected #{this} to not have a ' + X + ' below #{exp}',
                q,
                W,
              );
          } else
            this.assert(
              k < q,
              'expected #{this} to be below #{exp}',
              'expected #{this} to be at least #{exp}',
              q,
            );
        }
        a.addMethod('below', h), a.addMethod('lt', h), a.addMethod('lessThan', h);
        function v(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'doLength'),
            Y = n(this, 'message'),
            I = Y ? Y + ': ' : '',
            N = n(this, 'ssfi'),
            H = o.type(k).toLowerCase(),
            Z = o.type(q).toLowerCase(),
            b,
            B = !0;
          if (
            (D && H !== 'map' && H !== 'set' && new a(k, Y, N, !0).to.have.property('length'),
            !D && H === 'date' && Z !== 'date')
          )
            b = I + 'the argument to most must be a date';
          else if (Z !== 'number' && (D || H === 'number'))
            b = I + 'the argument to most must be a number';
          else if (!D && H !== 'date' && H !== 'number') {
            var $ = H === 'string' ? "'" + k + "'" : k;
            b = I + 'expected ' + $ + ' to be a number or a date';
          } else B = !1;
          if (B) throw new c(b, void 0, N);
          if (D) {
            var X = 'length',
              W;
            H === 'map' || H === 'set' ? ((X = 'size'), (W = k.size)) : (W = k.length),
              this.assert(
                W <= q,
                'expected #{this} to have a ' + X + ' at most #{exp} but got #{act}',
                'expected #{this} to have a ' + X + ' above #{exp}',
                q,
                W,
              );
          } else
            this.assert(
              k <= q,
              'expected #{this} to be at most #{exp}',
              'expected #{this} to be above #{exp}',
              q,
            );
        }
        a.addMethod('most', v),
          a.addMethod('lte', v),
          a.addMethod('lessThanOrEqual', v),
          a.addMethod('within', function (q, M, k) {
            k && n(this, 'message', k);
            var D = n(this, 'object'),
              Y = n(this, 'doLength'),
              I = n(this, 'message'),
              N = I ? I + ': ' : '',
              H = n(this, 'ssfi'),
              Z = o.type(D).toLowerCase(),
              b = o.type(q).toLowerCase(),
              B = o.type(M).toLowerCase(),
              $,
              X = !0,
              W =
                b === 'date' && B === 'date'
                  ? q.toISOString() + '..' + M.toISOString()
                  : q + '..' + M;
            if (
              (Y && Z !== 'map' && Z !== 'set' && new a(D, I, H, !0).to.have.property('length'),
              !Y && Z === 'date' && (b !== 'date' || B !== 'date'))
            )
              $ = N + 'the arguments to within must be dates';
            else if ((b !== 'number' || B !== 'number') && (Y || Z === 'number'))
              $ = N + 'the arguments to within must be numbers';
            else if (!Y && Z !== 'date' && Z !== 'number') {
              var L = Z === 'string' ? "'" + D + "'" : D;
              $ = N + 'expected ' + L + ' to be a number or a date';
            } else X = !1;
            if (X) throw new c($, void 0, H);
            if (Y) {
              var ae = 'length',
                ie;
              Z === 'map' || Z === 'set' ? ((ae = 'size'), (ie = D.size)) : (ie = D.length),
                this.assert(
                  ie >= q && ie <= M,
                  'expected #{this} to have a ' + ae + ' within ' + W,
                  'expected #{this} to not have a ' + ae + ' within ' + W,
                );
            } else
              this.assert(
                D >= q && D <= M,
                'expected #{this} to be within ' + W,
                'expected #{this} to not be within ' + W,
              );
          });
        function S(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'ssfi'),
            Y = n(this, 'message');
          try {
            var I = k instanceof q;
          } catch (H) {
            throw H instanceof TypeError
              ? ((Y = Y ? Y + ': ' : ''),
                new c(
                  Y +
                    'The instanceof assertion needs a constructor but ' +
                    o.type(q) +
                    ' was given.',
                  void 0,
                  D,
                ))
              : H;
          }
          var N = o.getName(q);
          N === null && (N = 'an unnamed constructor'),
            this.assert(
              I,
              'expected #{this} to be an instance of ' + N,
              'expected #{this} to not be an instance of ' + N,
            );
        }
        a.addMethod('instanceof', S), a.addMethod('instanceOf', S);
        function E(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'nested'),
            Y = n(this, 'own'),
            I = n(this, 'message'),
            N = n(this, 'object'),
            H = n(this, 'ssfi'),
            Z = typeof q;
          if (((I = I ? I + ': ' : ''), D)) {
            if (Z !== 'string')
              throw new c(
                I + 'the argument to property must be a string when using nested syntax',
                void 0,
                H,
              );
          } else if (Z !== 'string' && Z !== 'number' && Z !== 'symbol')
            throw new c(
              I + 'the argument to property must be a string, number, or symbol',
              void 0,
              H,
            );
          if (D && Y)
            throw new c(I + 'The "nested" and "own" flags cannot be combined.', void 0, H);
          if (N == null) throw new c(I + 'Target cannot be null or undefined.', void 0, H);
          var b = n(this, 'deep'),
            B = n(this, 'negate'),
            $ = D ? o.getPathInfo(N, q) : null,
            X = D ? $.value : N[q],
            W = '';
          b && (W += 'deep '), Y && (W += 'own '), D && (W += 'nested '), (W += 'property ');
          var L;
          Y
            ? (L = Object.prototype.hasOwnProperty.call(N, q))
            : D
              ? (L = $.exists)
              : (L = o.hasProperty(N, q)),
            (!B || arguments.length === 1) &&
              this.assert(
                L,
                'expected #{this} to have ' + W + o.inspect(q),
                'expected #{this} to not have ' + W + o.inspect(q),
              ),
            arguments.length > 1 &&
              this.assert(
                L && (b ? o.eql(M, X) : M === X),
                'expected #{this} to have ' + W + o.inspect(q) + ' of #{exp}, but got #{act}',
                'expected #{this} to not have ' + W + o.inspect(q) + ' of #{act}',
                M,
                X,
              ),
            n(this, 'object', X);
        }
        a.addMethod('property', E);
        function C(q, M, k) {
          n(this, 'own', !0), E.apply(this, arguments);
        }
        a.addMethod('ownProperty', C), a.addMethod('haveOwnProperty', C);
        function A(q, M, k) {
          typeof M == 'string' && ((k = M), (M = null)), k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = Object.getOwnPropertyDescriptor(Object(D), q);
          Y && M
            ? this.assert(
                o.eql(M, Y),
                'expected the own property descriptor for ' +
                  o.inspect(q) +
                  ' on #{this} to match ' +
                  o.inspect(M) +
                  ', got ' +
                  o.inspect(Y),
                'expected the own property descriptor for ' +
                  o.inspect(q) +
                  ' on #{this} to not match ' +
                  o.inspect(M),
                M,
                Y,
                !0,
              )
            : this.assert(
                Y,
                'expected #{this} to have an own property descriptor for ' + o.inspect(q),
                'expected #{this} to not have an own property descriptor for ' + o.inspect(q),
              ),
            n(this, 'object', Y);
        }
        a.addMethod('ownPropertyDescriptor', A), a.addMethod('haveOwnPropertyDescriptor', A);
        function R() {
          n(this, 'doLength', !0);
        }
        function _(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = o.type(k).toLowerCase(),
            Y = n(this, 'message'),
            I = n(this, 'ssfi'),
            N = 'length',
            H;
          switch (D) {
            case 'map':
            case 'set':
              (N = 'size'), (H = k.size);
              break;
            default:
              new a(k, Y, I, !0).to.have.property('length'), (H = k.length);
          }
          this.assert(
            H == q,
            'expected #{this} to have a ' + N + ' of #{exp} but got #{act}',
            'expected #{this} to not have a ' + N + ' of #{act}',
            q,
            H,
          );
        }
        a.addChainableMethod('length', _, R), a.addChainableMethod('lengthOf', _, R);
        function O(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object');
          this.assert(
            q.exec(k),
            'expected #{this} to match ' + q,
            'expected #{this} not to match ' + q,
          );
        }
        a.addMethod('match', O),
          a.addMethod('matches', O),
          a.addMethod('string', function (q, M) {
            M && n(this, 'message', M);
            var k = n(this, 'object'),
              D = n(this, 'message'),
              Y = n(this, 'ssfi');
            new a(k, D, Y, !0).is.a('string'),
              this.assert(
                ~k.indexOf(q),
                'expected #{this} to contain ' + o.inspect(q),
                'expected #{this} to not contain ' + o.inspect(q),
              );
          });
        function x(q) {
          var M = n(this, 'object'),
            k = o.type(M),
            D = o.type(q),
            Y = n(this, 'ssfi'),
            I = n(this, 'deep'),
            N,
            H = '',
            Z,
            b = !0,
            B = n(this, 'message');
          B = B ? B + ': ' : '';
          var $ =
            B +
            'when testing keys against an object or an array you must give a single Array|Object|String argument or multiple String arguments';
          if (k === 'Map' || k === 'Set')
            (H = I ? 'deeply ' : ''),
              (Z = []),
              M.forEach(function (pe, Re) {
                Z.push(Re);
              }),
              D !== 'Array' && (q = Array.prototype.slice.call(arguments));
          else {
            switch (((Z = o.getOwnEnumerableProperties(M)), D)) {
              case 'Array':
                if (arguments.length > 1) throw new c($, void 0, Y);
                break;
              case 'Object':
                if (arguments.length > 1) throw new c($, void 0, Y);
                q = Object.keys(q);
                break;
              default:
                q = Array.prototype.slice.call(arguments);
            }
            q = q.map(function (pe) {
              return typeof pe == 'symbol' ? pe : String(pe);
            });
          }
          if (!q.length) throw new c(B + 'keys required', void 0, Y);
          var X = q.length,
            W = n(this, 'any'),
            L = n(this, 'all'),
            ae = q;
          if (
            (!W && !L && (L = !0),
            W &&
              (b = ae.some(function (pe) {
                return Z.some(function (Re) {
                  return I ? o.eql(pe, Re) : pe === Re;
                });
              })),
            L &&
              ((b = ae.every(function (pe) {
                return Z.some(function (Re) {
                  return I ? o.eql(pe, Re) : pe === Re;
                });
              })),
              n(this, 'contains') || (b = b && q.length == Z.length)),
            X > 1)
          ) {
            q = q.map(function (pe) {
              return o.inspect(pe);
            });
            var ie = q.pop();
            L && (N = q.join(', ') + ', and ' + ie), W && (N = q.join(', ') + ', or ' + ie);
          } else N = o.inspect(q[0]);
          (N = (X > 1 ? 'keys ' : 'key ') + N),
            (N = (n(this, 'contains') ? 'contain ' : 'have ') + N),
            this.assert(
              b,
              'expected #{this} to ' + H + N,
              'expected #{this} to not ' + H + N,
              ae.slice(0).sort(o.compareByInspect),
              Z.sort(o.compareByInspect),
              !0,
            );
        }
        a.addMethod('keys', x), a.addMethod('key', x);
        function j(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = n(this, 'ssfi'),
            I = n(this, 'message'),
            N = n(this, 'negate') || !1;
          new a(D, I, Y, !0).is.a('function'),
            (q instanceof RegExp || typeof q == 'string') && ((M = q), (q = null));
          var H;
          try {
            D();
          } catch (pe) {
            H = pe;
          }
          var Z = q === void 0 && M === void 0,
            b = !!(q && M),
            B = !1,
            $ = !1;
          if (Z || (!Z && !N)) {
            var X = 'an error';
            q instanceof Error ? (X = '#{exp}') : q && (X = o.checkError.getConstructorName(q)),
              this.assert(
                H,
                'expected #{this} to throw ' + X,
                'expected #{this} to not throw an error but #{act} was thrown',
                q && q.toString(),
                H instanceof Error
                  ? H.toString()
                  : typeof H == 'string'
                    ? H
                    : H && o.checkError.getConstructorName(H),
              );
          }
          if (q && H) {
            if (q instanceof Error) {
              var W = o.checkError.compatibleInstance(H, q);
              W === N &&
                (b && N
                  ? (B = !0)
                  : this.assert(
                      N,
                      'expected #{this} to throw #{exp} but #{act} was thrown',
                      'expected #{this} to not throw #{exp}' +
                        (H && !N ? ' but #{act} was thrown' : ''),
                      q.toString(),
                      H.toString(),
                    ));
            }
            var L = o.checkError.compatibleConstructor(H, q);
            L === N &&
              (b && N
                ? (B = !0)
                : this.assert(
                    N,
                    'expected #{this} to throw #{exp} but #{act} was thrown',
                    'expected #{this} to not throw #{exp}' + (H ? ' but #{act} was thrown' : ''),
                    q instanceof Error ? q.toString() : q && o.checkError.getConstructorName(q),
                    H instanceof Error ? H.toString() : H && o.checkError.getConstructorName(H),
                  ));
          }
          if (H && M !== void 0 && M !== null) {
            var ae = 'including';
            M instanceof RegExp && (ae = 'matching');
            var ie = o.checkError.compatibleMessage(H, M);
            ie === N &&
              (b && N
                ? ($ = !0)
                : this.assert(
                    N,
                    'expected #{this} to throw error ' + ae + ' #{exp} but got #{act}',
                    'expected #{this} to throw error not ' + ae + ' #{exp}',
                    M,
                    o.checkError.getMessage(H),
                  ));
          }
          B &&
            $ &&
            this.assert(
              N,
              'expected #{this} to throw #{exp} but #{act} was thrown',
              'expected #{this} to not throw #{exp}' + (H ? ' but #{act} was thrown' : ''),
              q instanceof Error ? q.toString() : q && o.checkError.getConstructorName(q),
              H instanceof Error ? H.toString() : H && o.checkError.getConstructorName(H),
            ),
            n(this, 'object', H);
        }
        a.addMethod('throw', j), a.addMethod('throws', j), a.addMethod('Throw', j);
        function z(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'itself'),
            Y = typeof k == 'function' && !D ? k.prototype[q] : k[q];
          this.assert(
            typeof Y == 'function',
            'expected #{this} to respond to ' + o.inspect(q),
            'expected #{this} to not respond to ' + o.inspect(q),
          );
        }
        a.addMethod('respondTo', z),
          a.addMethod('respondsTo', z),
          a.addProperty('itself', function () {
            n(this, 'itself', !0);
          });
        function V(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = q(k);
          this.assert(
            D,
            'expected #{this} to satisfy ' + o.objDisplay(q),
            'expected #{this} to not satisfy' + o.objDisplay(q),
            !n(this, 'negate'),
            D,
          );
        }
        a.addMethod('satisfy', V), a.addMethod('satisfies', V);
        function U(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = n(this, 'message'),
            I = n(this, 'ssfi');
          if ((new a(D, Y, I, !0).is.a('number'), typeof q != 'number' || typeof M != 'number')) {
            Y = Y ? Y + ': ' : '';
            var N = M === void 0 ? ', and a delta is required' : '';
            throw new c(
              Y + 'the arguments to closeTo or approximately must be numbers' + N,
              void 0,
              I,
            );
          }
          this.assert(
            Math.abs(D - q) <= M,
            'expected #{this} to be close to ' + q + ' +/- ' + M,
            'expected #{this} not to be close to ' + q + ' +/- ' + M,
          );
        }
        a.addMethod('closeTo', U), a.addMethod('approximately', U);
        function ee(q, M, k, D, Y) {
          if (!D) {
            if (q.length !== M.length) return !1;
            M = M.slice();
          }
          return q.every(function (I, N) {
            if (Y) return k ? k(I, M[N]) : I === M[N];
            if (!k) {
              var H = M.indexOf(I);
              return H === -1 ? !1 : (D || M.splice(H, 1), !0);
            }
            return M.some(function (Z, b) {
              return k(I, Z) ? (D || M.splice(b, 1), !0) : !1;
            });
          });
        }
        a.addMethod('members', function (q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'message'),
            Y = n(this, 'ssfi');
          new a(k, D, Y, !0).to.be.an('array'), new a(q, D, Y, !0).to.be.an('array');
          var I = n(this, 'contains'),
            N = n(this, 'ordered'),
            H,
            Z,
            b;
          I
            ? ((H = N ? 'an ordered superset' : 'a superset'),
              (Z = 'expected #{this} to be ' + H + ' of #{exp}'),
              (b = 'expected #{this} to not be ' + H + ' of #{exp}'))
            : ((H = N ? 'ordered members' : 'members'),
              (Z = 'expected #{this} to have the same ' + H + ' as #{exp}'),
              (b = 'expected #{this} to not have the same ' + H + ' as #{exp}'));
          var B = n(this, 'deep') ? o.eql : void 0;
          this.assert(ee(q, k, B, I, N), Z, b, q, k, !0);
        });
        function G(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'object'),
            D = n(this, 'message'),
            Y = n(this, 'ssfi'),
            I = n(this, 'contains'),
            N = n(this, 'deep');
          new a(q, D, Y, !0).to.be.an('array'),
            I
              ? this.assert(
                  q.some(function (H) {
                    return k.indexOf(H) > -1;
                  }),
                  'expected #{this} to contain one of #{exp}',
                  'expected #{this} to not contain one of #{exp}',
                  q,
                  k,
                )
              : N
                ? this.assert(
                    q.some(function (H) {
                      return o.eql(k, H);
                    }),
                    'expected #{this} to deeply equal one of #{exp}',
                    'expected #{this} to deeply equal one of #{exp}',
                    q,
                    k,
                  )
                : this.assert(
                    q.indexOf(k) > -1,
                    'expected #{this} to be one of #{exp}',
                    'expected #{this} to not be one of #{exp}',
                    q,
                    k,
                  );
        }
        a.addMethod('oneOf', G);
        function ne(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = n(this, 'message'),
            I = n(this, 'ssfi');
          new a(D, Y, I, !0).is.a('function');
          var N;
          M
            ? (new a(q, Y, I, !0).to.have.property(M), (N = q[M]))
            : (new a(q, Y, I, !0).is.a('function'), (N = q())),
            D();
          var H = M == null ? q() : q[M],
            Z = M == null ? N : '.' + M;
          n(this, 'deltaMsgObj', Z),
            n(this, 'initialDeltaValue', N),
            n(this, 'finalDeltaValue', H),
            n(this, 'deltaBehavior', 'change'),
            n(this, 'realDelta', H !== N),
            this.assert(
              N !== H,
              'expected ' + Z + ' to change',
              'expected ' + Z + ' to not change',
            );
        }
        a.addMethod('change', ne), a.addMethod('changes', ne);
        function oe(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = n(this, 'message'),
            I = n(this, 'ssfi');
          new a(D, Y, I, !0).is.a('function');
          var N;
          M
            ? (new a(q, Y, I, !0).to.have.property(M), (N = q[M]))
            : (new a(q, Y, I, !0).is.a('function'), (N = q())),
            new a(N, Y, I, !0).is.a('number'),
            D();
          var H = M == null ? q() : q[M],
            Z = M == null ? N : '.' + M;
          n(this, 'deltaMsgObj', Z),
            n(this, 'initialDeltaValue', N),
            n(this, 'finalDeltaValue', H),
            n(this, 'deltaBehavior', 'increase'),
            n(this, 'realDelta', H - N),
            this.assert(
              H - N > 0,
              'expected ' + Z + ' to increase',
              'expected ' + Z + ' to not increase',
            );
        }
        a.addMethod('increase', oe), a.addMethod('increases', oe);
        function ue(q, M, k) {
          k && n(this, 'message', k);
          var D = n(this, 'object'),
            Y = n(this, 'message'),
            I = n(this, 'ssfi');
          new a(D, Y, I, !0).is.a('function');
          var N;
          M
            ? (new a(q, Y, I, !0).to.have.property(M), (N = q[M]))
            : (new a(q, Y, I, !0).is.a('function'), (N = q())),
            new a(N, Y, I, !0).is.a('number'),
            D();
          var H = M == null ? q() : q[M],
            Z = M == null ? N : '.' + M;
          n(this, 'deltaMsgObj', Z),
            n(this, 'initialDeltaValue', N),
            n(this, 'finalDeltaValue', H),
            n(this, 'deltaBehavior', 'decrease'),
            n(this, 'realDelta', N - H),
            this.assert(
              H - N < 0,
              'expected ' + Z + ' to decrease',
              'expected ' + Z + ' to not decrease',
            );
        }
        a.addMethod('decrease', ue), a.addMethod('decreases', ue);
        function ce(q, M) {
          M && n(this, 'message', M);
          var k = n(this, 'deltaMsgObj'),
            D = n(this, 'initialDeltaValue'),
            Y = n(this, 'finalDeltaValue'),
            I = n(this, 'deltaBehavior'),
            N = n(this, 'realDelta'),
            H;
          I === 'change' ? (H = Math.abs(Y - D) === Math.abs(q)) : (H = N === Math.abs(q)),
            this.assert(
              H,
              'expected ' + k + ' to ' + I + ' by ' + q,
              'expected ' + k + ' to not ' + I + ' by ' + q,
            );
        }
        a.addMethod('by', ce),
          a.addProperty('extensible', function () {
            var q = n(this, 'object'),
              M = q === Object(q) && Object.isExtensible(q);
            this.assert(
              M,
              'expected #{this} to be extensible',
              'expected #{this} to not be extensible',
            );
          }),
          a.addProperty('sealed', function () {
            var q = n(this, 'object'),
              M = q === Object(q) ? Object.isSealed(q) : !0;
            this.assert(M, 'expected #{this} to be sealed', 'expected #{this} to not be sealed');
          }),
          a.addProperty('frozen', function () {
            var q = n(this, 'object'),
              M = q === Object(q) ? Object.isFrozen(q) : !0;
            this.assert(M, 'expected #{this} to be frozen', 'expected #{this} to not be frozen');
          }),
          a.addProperty('finite', function (q) {
            var M = n(this, 'object');
            this.assert(
              typeof M == 'number' && isFinite(M),
              'expected #{this} to be a finite number',
              'expected #{this} to not be a finite number',
            );
          });
      };
    },
  }),
  Tf = P({
    '../../node_modules/chai/lib/chai/interface/expect.js'(e, t) {
      t.exports = function (r, o) {
        (r.expect = function (a, c) {
          return new r.Assertion(a, c);
        }),
          (r.expect.fail = function (a, c, n, i) {
            throw (
              (arguments.length < 2 && ((n = a), (a = void 0)),
              (n = n || 'expect.fail()'),
              new r.AssertionError(n, { actual: a, expected: c, operator: i }, r.expect.fail))
            );
          });
      };
    },
  }),
  Af = P({
    '../../node_modules/chai/lib/chai/interface/should.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion;
        function c() {
          function n() {
            return this instanceof String ||
              this instanceof Number ||
              this instanceof Boolean ||
              (typeof Symbol == 'function' && this instanceof Symbol) ||
              (typeof BigInt == 'function' && this instanceof BigInt)
              ? new a(this.valueOf(), null, n)
              : new a(this, null, n);
          }
          function i(s) {
            Object.defineProperty(this, 'should', {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            });
          }
          Object.defineProperty(Object.prototype, 'should', { set: i, get: n, configurable: !0 });
          var l = {};
          return (
            (l.fail = function (s, u, p, d) {
              throw (
                (arguments.length < 2 && ((p = s), (s = void 0)),
                (p = p || 'should.fail()'),
                new r.AssertionError(p, { actual: s, expected: u, operator: d }, l.fail))
              );
            }),
            (l.equal = function (s, u, p) {
              new a(s, p).to.equal(u);
            }),
            (l.Throw = function (s, u, p, d) {
              new a(s, d).to.Throw(u, p);
            }),
            (l.exist = function (s, u) {
              new a(s, u).to.exist;
            }),
            (l.not = {}),
            (l.not.equal = function (s, u, p) {
              new a(s, p).to.not.equal(u);
            }),
            (l.not.Throw = function (s, u, p, d) {
              new a(s, d).to.not.Throw(u, p);
            }),
            (l.not.exist = function (s, u) {
              new a(s, u).to.not.exist;
            }),
            (l.throw = l.Throw),
            (l.not.throw = l.not.Throw),
            l
          );
        }
        (r.should = c), (r.Should = c);
      };
    },
  }),
  qf = P({
    '../../node_modules/chai/lib/chai/interface/assert.js'(e, t) {
      t.exports = function (r, o) {
        var a = r.Assertion,
          c = o.flag,
          n = (r.assert = function (i, l) {
            var s = new a(null, null, r.assert, !0);
            s.assert(i, l, '[ negation message unavailable ]');
          });
        (n.fail = function (i, l, s, u) {
          throw (
            (arguments.length < 2 && ((s = i), (i = void 0)),
            (s = s || 'assert.fail()'),
            new r.AssertionError(s, { actual: i, expected: l, operator: u }, n.fail))
          );
        }),
          (n.isOk = function (i, l) {
            new a(i, l, n.isOk, !0).is.ok;
          }),
          (n.isNotOk = function (i, l) {
            new a(i, l, n.isNotOk, !0).is.not.ok;
          }),
          (n.equal = function (i, l, s) {
            var u = new a(i, s, n.equal, !0);
            u.assert(
              l == c(u, 'object'),
              'expected #{this} to equal #{exp}',
              'expected #{this} to not equal #{act}',
              l,
              i,
              !0,
            );
          }),
          (n.notEqual = function (i, l, s) {
            var u = new a(i, s, n.notEqual, !0);
            u.assert(
              l != c(u, 'object'),
              'expected #{this} to not equal #{exp}',
              'expected #{this} to equal #{act}',
              l,
              i,
              !0,
            );
          }),
          (n.strictEqual = function (i, l, s) {
            new a(i, s, n.strictEqual, !0).to.equal(l);
          }),
          (n.notStrictEqual = function (i, l, s) {
            new a(i, s, n.notStrictEqual, !0).to.not.equal(l);
          }),
          (n.deepEqual = n.deepStrictEqual =
            function (i, l, s) {
              new a(i, s, n.deepEqual, !0).to.eql(l);
            }),
          (n.notDeepEqual = function (i, l, s) {
            new a(i, s, n.notDeepEqual, !0).to.not.eql(l);
          }),
          (n.isAbove = function (i, l, s) {
            new a(i, s, n.isAbove, !0).to.be.above(l);
          }),
          (n.isAtLeast = function (i, l, s) {
            new a(i, s, n.isAtLeast, !0).to.be.least(l);
          }),
          (n.isBelow = function (i, l, s) {
            new a(i, s, n.isBelow, !0).to.be.below(l);
          }),
          (n.isAtMost = function (i, l, s) {
            new a(i, s, n.isAtMost, !0).to.be.most(l);
          }),
          (n.isTrue = function (i, l) {
            new a(i, l, n.isTrue, !0).is.true;
          }),
          (n.isNotTrue = function (i, l) {
            new a(i, l, n.isNotTrue, !0).to.not.equal(!0);
          }),
          (n.isFalse = function (i, l) {
            new a(i, l, n.isFalse, !0).is.false;
          }),
          (n.isNotFalse = function (i, l) {
            new a(i, l, n.isNotFalse, !0).to.not.equal(!1);
          }),
          (n.isNull = function (i, l) {
            new a(i, l, n.isNull, !0).to.equal(null);
          }),
          (n.isNotNull = function (i, l) {
            new a(i, l, n.isNotNull, !0).to.not.equal(null);
          }),
          (n.isNaN = function (i, l) {
            new a(i, l, n.isNaN, !0).to.be.NaN;
          }),
          (n.isNotNaN = function (i, l) {
            new a(i, l, n.isNotNaN, !0).not.to.be.NaN;
          }),
          (n.exists = function (i, l) {
            new a(i, l, n.exists, !0).to.exist;
          }),
          (n.notExists = function (i, l) {
            new a(i, l, n.notExists, !0).to.not.exist;
          }),
          (n.isUndefined = function (i, l) {
            new a(i, l, n.isUndefined, !0).to.equal(void 0);
          }),
          (n.isDefined = function (i, l) {
            new a(i, l, n.isDefined, !0).to.not.equal(void 0);
          }),
          (n.isFunction = function (i, l) {
            new a(i, l, n.isFunction, !0).to.be.a('function');
          }),
          (n.isNotFunction = function (i, l) {
            new a(i, l, n.isNotFunction, !0).to.not.be.a('function');
          }),
          (n.isObject = function (i, l) {
            new a(i, l, n.isObject, !0).to.be.a('object');
          }),
          (n.isNotObject = function (i, l) {
            new a(i, l, n.isNotObject, !0).to.not.be.a('object');
          }),
          (n.isArray = function (i, l) {
            new a(i, l, n.isArray, !0).to.be.an('array');
          }),
          (n.isNotArray = function (i, l) {
            new a(i, l, n.isNotArray, !0).to.not.be.an('array');
          }),
          (n.isString = function (i, l) {
            new a(i, l, n.isString, !0).to.be.a('string');
          }),
          (n.isNotString = function (i, l) {
            new a(i, l, n.isNotString, !0).to.not.be.a('string');
          }),
          (n.isNumber = function (i, l) {
            new a(i, l, n.isNumber, !0).to.be.a('number');
          }),
          (n.isNotNumber = function (i, l) {
            new a(i, l, n.isNotNumber, !0).to.not.be.a('number');
          }),
          (n.isFinite = function (i, l) {
            new a(i, l, n.isFinite, !0).to.be.finite;
          }),
          (n.isBoolean = function (i, l) {
            new a(i, l, n.isBoolean, !0).to.be.a('boolean');
          }),
          (n.isNotBoolean = function (i, l) {
            new a(i, l, n.isNotBoolean, !0).to.not.be.a('boolean');
          }),
          (n.typeOf = function (i, l, s) {
            new a(i, s, n.typeOf, !0).to.be.a(l);
          }),
          (n.notTypeOf = function (i, l, s) {
            new a(i, s, n.notTypeOf, !0).to.not.be.a(l);
          }),
          (n.instanceOf = function (i, l, s) {
            new a(i, s, n.instanceOf, !0).to.be.instanceOf(l);
          }),
          (n.notInstanceOf = function (i, l, s) {
            new a(i, s, n.notInstanceOf, !0).to.not.be.instanceOf(l);
          }),
          (n.include = function (i, l, s) {
            new a(i, s, n.include, !0).include(l);
          }),
          (n.notInclude = function (i, l, s) {
            new a(i, s, n.notInclude, !0).not.include(l);
          }),
          (n.deepInclude = function (i, l, s) {
            new a(i, s, n.deepInclude, !0).deep.include(l);
          }),
          (n.notDeepInclude = function (i, l, s) {
            new a(i, s, n.notDeepInclude, !0).not.deep.include(l);
          }),
          (n.nestedInclude = function (i, l, s) {
            new a(i, s, n.nestedInclude, !0).nested.include(l);
          }),
          (n.notNestedInclude = function (i, l, s) {
            new a(i, s, n.notNestedInclude, !0).not.nested.include(l);
          }),
          (n.deepNestedInclude = function (i, l, s) {
            new a(i, s, n.deepNestedInclude, !0).deep.nested.include(l);
          }),
          (n.notDeepNestedInclude = function (i, l, s) {
            new a(i, s, n.notDeepNestedInclude, !0).not.deep.nested.include(l);
          }),
          (n.ownInclude = function (i, l, s) {
            new a(i, s, n.ownInclude, !0).own.include(l);
          }),
          (n.notOwnInclude = function (i, l, s) {
            new a(i, s, n.notOwnInclude, !0).not.own.include(l);
          }),
          (n.deepOwnInclude = function (i, l, s) {
            new a(i, s, n.deepOwnInclude, !0).deep.own.include(l);
          }),
          (n.notDeepOwnInclude = function (i, l, s) {
            new a(i, s, n.notDeepOwnInclude, !0).not.deep.own.include(l);
          }),
          (n.match = function (i, l, s) {
            new a(i, s, n.match, !0).to.match(l);
          }),
          (n.notMatch = function (i, l, s) {
            new a(i, s, n.notMatch, !0).to.not.match(l);
          }),
          (n.property = function (i, l, s) {
            new a(i, s, n.property, !0).to.have.property(l);
          }),
          (n.notProperty = function (i, l, s) {
            new a(i, s, n.notProperty, !0).to.not.have.property(l);
          }),
          (n.propertyVal = function (i, l, s, u) {
            new a(i, u, n.propertyVal, !0).to.have.property(l, s);
          }),
          (n.notPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notPropertyVal, !0).to.not.have.property(l, s);
          }),
          (n.deepPropertyVal = function (i, l, s, u) {
            new a(i, u, n.deepPropertyVal, !0).to.have.deep.property(l, s);
          }),
          (n.notDeepPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notDeepPropertyVal, !0).to.not.have.deep.property(l, s);
          }),
          (n.ownProperty = function (i, l, s) {
            new a(i, s, n.ownProperty, !0).to.have.own.property(l);
          }),
          (n.notOwnProperty = function (i, l, s) {
            new a(i, s, n.notOwnProperty, !0).to.not.have.own.property(l);
          }),
          (n.ownPropertyVal = function (i, l, s, u) {
            new a(i, u, n.ownPropertyVal, !0).to.have.own.property(l, s);
          }),
          (n.notOwnPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notOwnPropertyVal, !0).to.not.have.own.property(l, s);
          }),
          (n.deepOwnPropertyVal = function (i, l, s, u) {
            new a(i, u, n.deepOwnPropertyVal, !0).to.have.deep.own.property(l, s);
          }),
          (n.notDeepOwnPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notDeepOwnPropertyVal, !0).to.not.have.deep.own.property(l, s);
          }),
          (n.nestedProperty = function (i, l, s) {
            new a(i, s, n.nestedProperty, !0).to.have.nested.property(l);
          }),
          (n.notNestedProperty = function (i, l, s) {
            new a(i, s, n.notNestedProperty, !0).to.not.have.nested.property(l);
          }),
          (n.nestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.nestedPropertyVal, !0).to.have.nested.property(l, s);
          }),
          (n.notNestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notNestedPropertyVal, !0).to.not.have.nested.property(l, s);
          }),
          (n.deepNestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.deepNestedPropertyVal, !0).to.have.deep.nested.property(l, s);
          }),
          (n.notDeepNestedPropertyVal = function (i, l, s, u) {
            new a(i, u, n.notDeepNestedPropertyVal, !0).to.not.have.deep.nested.property(l, s);
          }),
          (n.lengthOf = function (i, l, s) {
            new a(i, s, n.lengthOf, !0).to.have.lengthOf(l);
          }),
          (n.hasAnyKeys = function (i, l, s) {
            new a(i, s, n.hasAnyKeys, !0).to.have.any.keys(l);
          }),
          (n.hasAllKeys = function (i, l, s) {
            new a(i, s, n.hasAllKeys, !0).to.have.all.keys(l);
          }),
          (n.containsAllKeys = function (i, l, s) {
            new a(i, s, n.containsAllKeys, !0).to.contain.all.keys(l);
          }),
          (n.doesNotHaveAnyKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAnyKeys, !0).to.not.have.any.keys(l);
          }),
          (n.doesNotHaveAllKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAllKeys, !0).to.not.have.all.keys(l);
          }),
          (n.hasAnyDeepKeys = function (i, l, s) {
            new a(i, s, n.hasAnyDeepKeys, !0).to.have.any.deep.keys(l);
          }),
          (n.hasAllDeepKeys = function (i, l, s) {
            new a(i, s, n.hasAllDeepKeys, !0).to.have.all.deep.keys(l);
          }),
          (n.containsAllDeepKeys = function (i, l, s) {
            new a(i, s, n.containsAllDeepKeys, !0).to.contain.all.deep.keys(l);
          }),
          (n.doesNotHaveAnyDeepKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAnyDeepKeys, !0).to.not.have.any.deep.keys(l);
          }),
          (n.doesNotHaveAllDeepKeys = function (i, l, s) {
            new a(i, s, n.doesNotHaveAllDeepKeys, !0).to.not.have.all.deep.keys(l);
          }),
          (n.throws = function (i, l, s, u) {
            (typeof l == 'string' || l instanceof RegExp) && ((s = l), (l = null));
            var p = new a(i, u, n.throws, !0).to.throw(l, s);
            return c(p, 'object');
          }),
          (n.doesNotThrow = function (i, l, s, u) {
            (typeof l == 'string' || l instanceof RegExp) && ((s = l), (l = null)),
              new a(i, u, n.doesNotThrow, !0).to.not.throw(l, s);
          }),
          (n.operator = function (i, l, s, u) {
            var p;
            switch (l) {
              case '==':
                p = i == s;
                break;
              case '===':
                p = i === s;
                break;
              case '>':
                p = i > s;
                break;
              case '>=':
                p = i >= s;
                break;
              case '<':
                p = i < s;
                break;
              case '<=':
                p = i <= s;
                break;
              case '!=':
                p = i != s;
                break;
              case '!==':
                p = i !== s;
                break;
              default:
                throw (
                  ((u = u && u + ': '),
                  new r.AssertionError(u + 'Invalid operator "' + l + '"', void 0, n.operator))
                );
            }
            var d = new a(p, u, n.operator, !0);
            d.assert(
              c(d, 'object') === !0,
              'expected ' + o.inspect(i) + ' to be ' + l + ' ' + o.inspect(s),
              'expected ' + o.inspect(i) + ' to not be ' + l + ' ' + o.inspect(s),
            );
          }),
          (n.closeTo = function (i, l, s, u) {
            new a(i, u, n.closeTo, !0).to.be.closeTo(l, s);
          }),
          (n.approximately = function (i, l, s, u) {
            new a(i, u, n.approximately, !0).to.be.approximately(l, s);
          }),
          (n.sameMembers = function (i, l, s) {
            new a(i, s, n.sameMembers, !0).to.have.same.members(l);
          }),
          (n.notSameMembers = function (i, l, s) {
            new a(i, s, n.notSameMembers, !0).to.not.have.same.members(l);
          }),
          (n.sameDeepMembers = function (i, l, s) {
            new a(i, s, n.sameDeepMembers, !0).to.have.same.deep.members(l);
          }),
          (n.notSameDeepMembers = function (i, l, s) {
            new a(i, s, n.notSameDeepMembers, !0).to.not.have.same.deep.members(l);
          }),
          (n.sameOrderedMembers = function (i, l, s) {
            new a(i, s, n.sameOrderedMembers, !0).to.have.same.ordered.members(l);
          }),
          (n.notSameOrderedMembers = function (i, l, s) {
            new a(i, s, n.notSameOrderedMembers, !0).to.not.have.same.ordered.members(l);
          }),
          (n.sameDeepOrderedMembers = function (i, l, s) {
            new a(i, s, n.sameDeepOrderedMembers, !0).to.have.same.deep.ordered.members(l);
          }),
          (n.notSameDeepOrderedMembers = function (i, l, s) {
            new a(i, s, n.notSameDeepOrderedMembers, !0).to.not.have.same.deep.ordered.members(l);
          }),
          (n.includeMembers = function (i, l, s) {
            new a(i, s, n.includeMembers, !0).to.include.members(l);
          }),
          (n.notIncludeMembers = function (i, l, s) {
            new a(i, s, n.notIncludeMembers, !0).to.not.include.members(l);
          }),
          (n.includeDeepMembers = function (i, l, s) {
            new a(i, s, n.includeDeepMembers, !0).to.include.deep.members(l);
          }),
          (n.notIncludeDeepMembers = function (i, l, s) {
            new a(i, s, n.notIncludeDeepMembers, !0).to.not.include.deep.members(l);
          }),
          (n.includeOrderedMembers = function (i, l, s) {
            new a(i, s, n.includeOrderedMembers, !0).to.include.ordered.members(l);
          }),
          (n.notIncludeOrderedMembers = function (i, l, s) {
            new a(i, s, n.notIncludeOrderedMembers, !0).to.not.include.ordered.members(l);
          }),
          (n.includeDeepOrderedMembers = function (i, l, s) {
            new a(i, s, n.includeDeepOrderedMembers, !0).to.include.deep.ordered.members(l);
          }),
          (n.notIncludeDeepOrderedMembers = function (i, l, s) {
            new a(i, s, n.notIncludeDeepOrderedMembers, !0).to.not.include.deep.ordered.members(l);
          }),
          (n.oneOf = function (i, l, s) {
            new a(i, s, n.oneOf, !0).to.be.oneOf(l);
          }),
          (n.changes = function (i, l, s, u) {
            arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.changes, !0).to.change(l, s);
          }),
          (n.changesBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.changesBy, !0).to.change(l, s).by(u);
          }),
          (n.doesNotChange = function (i, l, s, u) {
            return (
              arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.doesNotChange, !0).to.not.change(l, s)
            );
          }),
          (n.changesButNotBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.changesButNotBy, !0).to.change(l, s).but.not.by(u);
          }),
          (n.increases = function (i, l, s, u) {
            return (
              arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.increases, !0).to.increase(l, s)
            );
          }),
          (n.increasesBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.increasesBy, !0).to.increase(l, s).by(u);
          }),
          (n.doesNotIncrease = function (i, l, s, u) {
            return (
              arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.doesNotIncrease, !0).to.not.increase(l, s)
            );
          }),
          (n.increasesButNotBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.increasesButNotBy, !0).to.increase(l, s).but.not.by(u);
          }),
          (n.decreases = function (i, l, s, u) {
            return (
              arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.decreases, !0).to.decrease(l, s)
            );
          }),
          (n.decreasesBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.decreasesBy, !0).to.decrease(l, s).by(u);
          }),
          (n.doesNotDecrease = function (i, l, s, u) {
            return (
              arguments.length === 3 && typeof l == 'function' && ((u = s), (s = null)),
              new a(i, u, n.doesNotDecrease, !0).to.not.decrease(l, s)
            );
          }),
          (n.doesNotDecreaseBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            return new a(i, p, n.doesNotDecreaseBy, !0).to.not.decrease(l, s).by(u);
          }),
          (n.decreasesButNotBy = function (i, l, s, u, p) {
            if (arguments.length === 4 && typeof l == 'function') {
              var d = u;
              (u = s), (p = d);
            } else arguments.length === 3 && ((u = s), (s = null));
            new a(i, p, n.decreasesButNotBy, !0).to.decrease(l, s).but.not.by(u);
          }),
          (n.ifError = function (i) {
            if (i) throw i;
          }),
          (n.isExtensible = function (i, l) {
            new a(i, l, n.isExtensible, !0).to.be.extensible;
          }),
          (n.isNotExtensible = function (i, l) {
            new a(i, l, n.isNotExtensible, !0).to.not.be.extensible;
          }),
          (n.isSealed = function (i, l) {
            new a(i, l, n.isSealed, !0).to.be.sealed;
          }),
          (n.isNotSealed = function (i, l) {
            new a(i, l, n.isNotSealed, !0).to.not.be.sealed;
          }),
          (n.isFrozen = function (i, l) {
            new a(i, l, n.isFrozen, !0).to.be.frozen;
          }),
          (n.isNotFrozen = function (i, l) {
            new a(i, l, n.isNotFrozen, !0).to.not.be.frozen;
          }),
          (n.isEmpty = function (i, l) {
            new a(i, l, n.isEmpty, !0).to.be.empty;
          }),
          (n.isNotEmpty = function (i, l) {
            new a(i, l, n.isNotEmpty, !0).to.not.be.empty;
          }),
          (function i(l, s) {
            return (n[s] = n[l]), i;
          })('isOk', 'ok')('isNotOk', 'notOk')('throws', 'throw')('throws', 'Throw')(
            'isExtensible',
            'extensible',
          )('isNotExtensible', 'notExtensible')('isSealed', 'sealed')('isNotSealed', 'notSealed')(
            'isFrozen',
            'frozen',
          )('isNotFrozen', 'notFrozen')('isEmpty', 'empty')('isNotEmpty', 'notEmpty');
      };
    },
  }),
  Ft = P({
    '../../node_modules/chai/lib/chai.js'(e) {
      var t = [];
      (e.version = '4.3.8'), (e.AssertionError = Al());
      var r = Of();
      (e.use = function (s) {
        return ~t.indexOf(s) || (s(e, r), t.push(s)), e;
      }),
        (e.util = r);
      var o = dr();
      e.config = o;
      var a = Pf();
      e.use(a);
      var c = Rf();
      e.use(c);
      var n = Tf();
      e.use(n);
      var i = Af();
      e.use(i);
      var l = qf();
      e.use(l);
    },
  }),
  xf = P({
    '../../node_modules/chai/index.js'(e, t) {
      t.exports = Ft();
    },
  }),
  Mf = P({
    '../../node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(i.toString(16));
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((p) => p + p)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: { value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)), enumerable: !1 },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  gn = P({
    '../../node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n),
          s = i !== null ? l.sort(i) : l;
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((u) => {
              Object.getOwnPropertyDescriptor(n, u).enumerable && s.push(u);
            }),
          s
        );
      };
      function r(n, i, l, s, u, p, d = ': ') {
        let f = '',
          m = 0,
          y = n.next();
        if (!y.done) {
          f += i.spacingOuter;
          let g = l + i.indent;
          for (; !y.done; ) {
            if (((f += g), m++ === i.maxWidth)) {
              f += '…';
              break;
            }
            let h = p(y.value[0], i, g, s, u),
              v = p(y.value[1], i, g, s, u);
            (f += h + d + v),
              (y = n.next()),
              y.done ? i.min || (f += ',') : (f += `,${i.spacingInner}`);
          }
          f += i.spacingOuter + l;
        }
        return f;
      }
      function o(n, i, l, s, u, p) {
        let d = '',
          f = 0,
          m = n.next();
        if (!m.done) {
          d += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            if (((d += y), f++ === i.maxWidth)) {
              d += '…';
              break;
            }
            (d += p(m.value, i, y, s, u)),
              (m = n.next()),
              m.done ? i.min || (d += ',') : (d += `,${i.spacingInner}`);
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, p) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let f = l + i.indent;
          for (let m = 0; m < n.length; m++) {
            if (((d += f), m === i.maxWidth)) {
              d += '…';
              break;
            }
            m in n && (d += p(n[m], i, f, s, u)),
              m < n.length - 1 ? (d += `,${i.spacingInner}`) : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, p) {
        let d = '',
          f = t(n, i.compareKeys);
        if (f.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < f.length; y++) {
            let g = f[y],
              h = p(g, i, m, s, u),
              v = p(n[g], i, m, s, u);
            (d += `${m + h}: ${v}`),
              y < f.length - 1 ? (d += `,${i.spacingInner}`) : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  jf = P({
    '../../node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = gn(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o = typeof r == 'function' && r.for ? r.for('jest.asymmetricMatcher') : 1267621,
        a = ' ',
        c = (s, u, p, d, f, m) => {
          let y = s.toString();
          if (y === 'ArrayContaining' || y === 'ArrayNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}[${(0, t.printListItems)(s.sample, u, p, d, f, m)}]`;
          if (y === 'ObjectContaining' || y === 'ObjectNotContaining')
            return ++d > u.maxDepth
              ? `[${y}]`
              : `${y + a}{${(0, t.printObjectProperties)(s.sample, u, p, d, f, m)}}`;
          if (
            y === 'StringMatching' ||
            y === 'StringNotMatching' ||
            y === 'StringContaining' ||
            y === 'StringNotContaining'
          )
            return y + a + m(s.sample, u, p, d, f);
          if (typeof s.toAsymmetricMatcher != 'function')
            throw new Error(
              `Asymmetric matcher ${s.constructor.name} does not implement toAsymmetricMatcher()`,
            );
          return s.toAsymmetricMatcher();
        };
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  If = P({
    '../../node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = gn(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (p) => o.indexOf(p) !== -1 || a.test(p),
        n = (p) => p && p.constructor && !!p.constructor.name && c(p.constructor.name);
      e.test = n;
      var i = (p) => p.constructor.name === 'NamedNodeMap',
        l = (p, d, f, m, y, g) => {
          let h = p.constructor.name;
          return ++m > d.maxDepth
            ? `[${h}]`
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? `{${(0, t.printObjectProperties)(
                      i(p)
                        ? Array.from(p).reduce((v, S) => ((v[S.name] = S.value), v), {})
                        : { ...p },
                      d,
                      f,
                      m,
                      y,
                      g,
                    )}}`
                  : `[${(0, t.printListItems)(Array.from(p), d, f, m, y, g)}]`);
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  Nf = P({
    '../../node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  Ho = P({
    '../../node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r(Nf());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, p, d, f, m, y) => {
        let g = d + p.indent,
          h = p.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, p, g, f, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = p.spacingOuter + g + E + p.spacingOuter + d),
                (E = `{${E}}`)),
              `${p.spacingInner + d + h.prop.open + v + h.prop.close}=${h.value.open}${E}${
                h.value.close
              }`
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, p, d, f, m) =>
        s
          .map((y) => u.spacingOuter + p + (typeof y == 'string' ? c(y, u) : m(y, u, p, d, f)))
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let p = u.colors.content;
        return p.open + (0, t.default)(s) + p.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let p = u.colors.comment;
        return `${p.open}<!--${(0, t.default)(s)}-->${p.close}`;
      };
      e.printComment = n;
      var i = (s, u, p, d, f) => {
        let m = d.colors.tag;
        return `${m.open}<${s}${u && m.close + u + d.spacingOuter + f + m.open}${
          p ? `>${m.close}${p}${d.spacingOuter}${f}${m.open}</${s}` : `${u && !d.min ? '' : ' '}/`
        }>${m.close}`;
      };
      e.printElement = i;
      var l = (s, u) => {
        let p = u.colors.tag;
        return `${p.open}<${s}${p.close} …${p.open} />${p.close}`;
      };
      e.printElementAsLeaf = l;
    },
  }),
  Bf = P({
    '../../node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Ho(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return ((h = g == null ? void 0 : g.constructor) == null ? void 0 : h.name) && l(g);
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function p(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var f = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (p(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g) ? [] : Array.from(g.attributes, (R) => R.name).sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce((R, _) => ((R[_.name] = _.value), R), {}),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              h,
              v,
            );
      };
      e.serialize = f;
      var m = { serialize: f, test: s },
        y = m;
      e.default = y;
    },
  }),
  $f = P({
    '../../node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = gn(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        p = (_) => `Immutable.${_}`,
        d = (_) => `[${_}]`,
        f = ' ',
        m = '…',
        y = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : `${p(U) + f}{${(0, t.printIteratorEntries)(_.entries(), O, x, j, z, V)}}`;
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, j, z, V) => {
          let U = p(_._name || 'Record');
          return ++j > O.maxDepth
            ? d(U)
            : `${U + f}{${(0, t.printIteratorEntries)(g(_), O, x, j, z, V)}}`;
        },
        v = (_, O, x, j, z, V) => {
          let U = p('Seq');
          return ++j > O.maxDepth
            ? d(U)
            : _[a]
              ? `${U + f}{${
                  _._iter || _._object ? (0, t.printIteratorEntries)(_.entries(), O, x, j, z, V) : m
                }}`
              : `${U + f}[${
                  _._iter || _._array || _._collection || _._iterable
                    ? (0, t.printIteratorValues)(_.values(), O, x, j, z, V)
                    : m
                }]`;
        },
        S = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : `${p(U) + f}[${(0, t.printIteratorValues)(_.values(), O, x, j, z, V)}]`,
        E = (_, O, x, j, z, V) =>
          _[c]
            ? y(_, O, x, j, z, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, j, z, V, 'List')
              : _[s]
                ? S(_, O, x, j, z, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, j, z, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, j, z, V)
                    : h(_, O, x, j, z, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  Df = P({
    '../../node_modules/pretty-format/node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = Symbol.for('react.element'),
          r = Symbol.for('react.portal'),
          o = Symbol.for('react.fragment'),
          a = Symbol.for('react.strict_mode'),
          c = Symbol.for('react.profiler'),
          n = Symbol.for('react.provider'),
          i = Symbol.for('react.context'),
          l = Symbol.for('react.server_context'),
          s = Symbol.for('react.forward_ref'),
          u = Symbol.for('react.suspense'),
          p = Symbol.for('react.suspense_list'),
          d = Symbol.for('react.memo'),
          f = Symbol.for('react.lazy'),
          m = Symbol.for('react.offscreen'),
          y = !1,
          g = !1,
          h = !1,
          v = !1,
          S = !1,
          E;
        E = Symbol.for('react.module.reference');
        function C(L) {
          return !!(
            typeof L == 'string' ||
            typeof L == 'function' ||
            L === o ||
            L === c ||
            S ||
            L === a ||
            L === u ||
            L === p ||
            v ||
            L === m ||
            y ||
            g ||
            h ||
            (typeof L == 'object' &&
              L !== null &&
              (L.$$typeof === f ||
                L.$$typeof === d ||
                L.$$typeof === n ||
                L.$$typeof === i ||
                L.$$typeof === s ||
                L.$$typeof === E ||
                L.getModuleId !== void 0))
          );
        }
        function A(L) {
          if (typeof L == 'object' && L !== null) {
            var ae = L.$$typeof;
            switch (ae) {
              case t:
                var ie = L.type;
                switch (ie) {
                  case o:
                  case c:
                  case a:
                  case u:
                  case p:
                    return ie;
                  default:
                    var pe = ie && ie.$$typeof;
                    switch (pe) {
                      case l:
                      case i:
                      case s:
                      case f:
                      case d:
                      case n:
                        return pe;
                      default:
                        return ae;
                    }
                }
              case r:
                return ae;
            }
          }
        }
        var R = i,
          _ = n,
          O = t,
          x = s,
          j = o,
          z = f,
          V = d,
          U = r,
          ee = c,
          G = a,
          ne = u,
          oe = p,
          ue = !1,
          ce = !1;
        function q(L) {
          return (
            ue ||
              ((ue = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function M(L) {
          return (
            ce ||
              ((ce = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function k(L) {
          return A(L) === i;
        }
        function D(L) {
          return A(L) === n;
        }
        function Y(L) {
          return typeof L == 'object' && L !== null && L.$$typeof === t;
        }
        function I(L) {
          return A(L) === s;
        }
        function N(L) {
          return A(L) === o;
        }
        function H(L) {
          return A(L) === f;
        }
        function Z(L) {
          return A(L) === d;
        }
        function b(L) {
          return A(L) === r;
        }
        function B(L) {
          return A(L) === c;
        }
        function $(L) {
          return A(L) === a;
        }
        function X(L) {
          return A(L) === u;
        }
        function W(L) {
          return A(L) === p;
        }
        (e.ContextConsumer = R),
          (e.ContextProvider = _),
          (e.Element = O),
          (e.ForwardRef = x),
          (e.Fragment = j),
          (e.Lazy = z),
          (e.Memo = V),
          (e.Portal = U),
          (e.Profiler = ee),
          (e.StrictMode = G),
          (e.Suspense = ne),
          (e.SuspenseList = oe),
          (e.isAsyncMode = q),
          (e.isConcurrentMode = M),
          (e.isContextConsumer = k),
          (e.isContextProvider = D),
          (e.isElement = Y),
          (e.isForwardRef = I),
          (e.isFragment = N),
          (e.isLazy = H),
          (e.isMemo = Z),
          (e.isPortal = b),
          (e.isProfiler = B),
          (e.isStrictMode = $),
          (e.isSuspense = X),
          (e.isSuspenseList = W),
          (e.isValidElementType = C),
          (e.typeOf = A);
      })();
    },
  }),
  kf = P({
    '../../node_modules/pretty-format/node_modules/react-is/index.js'(e, t) {
      t.exports = Df();
    },
  }),
  Lf = P({
    '../../node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(kf()),
        r = Ho();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var f = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : f;
        })(d);
      }
      function a(d, f) {
        if (!f && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function')) return { default: d };
        var m = o(f);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set) ? Object.defineProperty(y, h, v) : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, f = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, f);
              })
            : d != null && d !== !1 && f.push(d),
          f
        ),
        n = (d) => {
          let f = d.type;
          if (typeof f == 'string') return f;
          if (typeof f == 'function') return f.displayName || f.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof f == 'object' && f !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (f.displayName) return f.displayName;
              let m = f.render.displayName || f.render.name || '';
              return m !== '' ? `ForwardRef(${m})` : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = f.displayName || f.type.displayName || f.type.name || '';
              return m !== '' ? `Memo(${m})` : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: f } = d;
          return Object.keys(f)
            .filter((m) => m !== 'children' && f[m] !== void 0)
            .sort();
        },
        l = (d, f, m, y, g, h) =>
          ++y > f.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), f)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, f, m + f.indent, y, g, h),
                (0, r.printChildren)(c(d.props.children), f, m + f.indent, y, g, h),
                f,
                m,
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        p = u;
      e.default = p;
    },
  }),
  Ff = P({
    '../../node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Ho(),
        r = globalThis['jest-symbol-do-not-touch'] || globalThis.Symbol,
        o = typeof r == 'function' && r.for ? r.for('react.test.json') : 245830487,
        a = (s) => {
          let { props: u } = s;
          return u
            ? Object.keys(u)
                .filter((p) => u[p] !== void 0)
                .sort()
            : [];
        },
        c = (s, u, p, d, f, m) =>
          ++d > u.maxDepth
            ? (0, t.printElementAsLeaf)(s.type, u)
            : (0, t.printElement)(
                s.type,
                s.props ? (0, t.printProps)(a(s), s.props, u, p + u.indent, d, f, m) : '',
                s.children ? (0, t.printChildren)(s.children, u, p + u.indent, d, f, m) : '',
                u,
                p,
              );
      e.serialize = c;
      var n = (s) => s && s.$$typeof === o;
      e.test = n;
      var i = { serialize: c, test: n },
        l = i;
      e.default = l;
    },
  }),
  vn = P({
    '../../node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = N),
        (e.plugins = void 0);
      var t = s(Mf()),
        r = gn(),
        o = s(jf()),
        a = s(If()),
        c = s(Bf()),
        n = s($f()),
        i = s(Lf()),
        l = s(Ff());
      function s(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var u = Object.prototype.toString,
        p = Date.prototype.toISOString,
        d = Error.prototype.toString,
        f = RegExp.prototype.toString,
        m = (b) => (typeof b.constructor == 'function' && b.constructor.name) || 'Object',
        y = (b) => typeof window < 'u' && b === window,
        g = /^Symbol\((.*)\)(.*)$/,
        h = /\n/gi,
        v = class extends Error {
          constructor(b, B) {
            super(b), (this.stack = B), (this.name = this.constructor.name);
          }
        };
      function S(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function E(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function C(b) {
        return `${b}n`;
      }
      function A(b, B) {
        return B ? `[Function ${b.name || 'anonymous'}]` : '[Function]';
      }
      function R(b) {
        return String(b).replace(g, 'Symbol($1)');
      }
      function _(b) {
        return `[${d.call(b)}]`;
      }
      function O(b, B, $, X) {
        if (b === !0 || b === !1) return `${b}`;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return E(b);
        if (W === 'bigint') return C(b);
        if (W === 'string') return X ? `"${b.replace(/"|\\/g, '\\$&')}"` : `"${b}"`;
        if (W === 'function') return A(b, B);
        if (W === 'symbol') return R(b);
        let L = u.call(b);
        return L === '[object WeakMap]'
          ? 'WeakMap {}'
          : L === '[object WeakSet]'
            ? 'WeakSet {}'
            : L === '[object Function]' || L === '[object GeneratorFunction]'
              ? A(b, B)
              : L === '[object Symbol]'
                ? R(b)
                : L === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : p.call(b)
                  : L === '[object Error]'
                    ? _(b)
                    : L === '[object RegExp]'
                      ? $
                        ? f.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : f.call(b)
                      : b instanceof Error
                        ? _(b)
                        : null;
      }
      function x(b, B, $, X, W, L) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ae = ++X > B.maxDepth,
          ie = B.min;
        if (B.callToJSON && !ae && b.toJSON && typeof b.toJSON == 'function' && !L)
          return U(b.toJSON(), B, $, X, W, !0);
        let pe = u.call(b);
        return pe === '[object Arguments]'
          ? ae
            ? '[Arguments]'
            : `${ie ? '' : 'Arguments '}[${(0, r.printListItems)(b, B, $, X, W, U)}]`
          : S(pe)
            ? ae
              ? `[${b.constructor.name}]`
              : `${
                  ie || (!B.printBasicPrototype && b.constructor.name === 'Array')
                    ? ''
                    : `${b.constructor.name} `
                }[${(0, r.printListItems)(b, B, $, X, W, U)}]`
            : pe === '[object Map]'
              ? ae
                ? '[Map]'
                : `Map {${(0, r.printIteratorEntries)(b.entries(), B, $, X, W, U, ' => ')}}`
              : pe === '[object Set]'
                ? ae
                  ? '[Set]'
                  : `Set {${(0, r.printIteratorValues)(b.values(), B, $, X, W, U)}}`
                : ae || y(b)
                  ? `[${m(b)}]`
                  : `${ie || (!B.printBasicPrototype && m(b) === 'Object') ? '' : `${m(b)} `}{${(0,
                    r.printObjectProperties)(b, B, $, X, W, U)}}`;
      }
      function j(b) {
        return b.serialize != null;
      }
      function z(b, B, $, X, W, L) {
        let ae;
        try {
          ae = j(b)
            ? b.serialize(B, $, X, W, L, U)
            : b.print(
                B,
                (ie) => U(ie, $, X, W, L),
                (ie) => {
                  let pe = X + $.indent;
                  return (
                    pe +
                    ie.replace(
                      h,
                      `
${pe}`,
                    )
                  );
                },
                { edgeSpacing: $.spacingOuter, min: $.min, spacing: $.spacingInner },
                $.colors,
              );
        } catch (ie) {
          throw new v(ie.message, ie.stack);
        }
        if (typeof ae != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ae}".`,
          );
        return ae;
      }
      function V(b, B) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(B)) return b[$];
          } catch (X) {
            throw new v(X.message, X.stack);
          }
        return null;
      }
      function U(b, B, $, X, W, L) {
        let ae = V(B.plugins, b);
        if (ae !== null) return z(ae, b, B, $, X, W);
        let ie = O(b, B.printFunctionName, B.escapeRegex, B.escapeString);
        return ie !== null ? ie : x(b, B, $, X, W, L);
      }
      var ee = { comment: 'gray', content: 'reset', prop: 'yellow', tag: 'cyan', value: 'green' },
        G = Object.keys(ee),
        ne = (b) => b,
        oe = ne({
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          maxWidth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: ee,
        });
      e.DEFAULT_OPTIONS = oe;
      function ue(b) {
        if (
          (Object.keys(b).forEach((B) => {
            if (!Object.prototype.hasOwnProperty.call(oe, B))
              throw new Error(`pretty-format: Unknown option "${B}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
        if (b.theme !== void 0) {
          if (b.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`,
            );
        }
      }
      var ce = (b) =>
          G.reduce((B, $) => {
            let X = b.theme && b.theme[$] !== void 0 ? b.theme[$] : ee[$],
              W = X && t.default[X];
            if (W && typeof W.close == 'string' && typeof W.open == 'string') B[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${X}" is undefined in ansi-styles.`,
              );
            return B;
          }, Object.create(null)),
        q = () => G.reduce((b, B) => ((b[B] = { close: '', open: '' }), b), Object.create(null)),
        M = (b) => (b == null ? void 0 : b.printFunctionName) ?? oe.printFunctionName,
        k = (b) => (b == null ? void 0 : b.escapeRegex) ?? oe.escapeRegex,
        D = (b) => (b == null ? void 0 : b.escapeString) ?? oe.escapeString,
        Y = (b) => ({
          callToJSON: (b == null ? void 0 : b.callToJSON) ?? oe.callToJSON,
          colors: b != null && b.highlight ? ce(b) : q(),
          compareKeys:
            typeof (b == null ? void 0 : b.compareKeys) == 'function' ||
            (b == null ? void 0 : b.compareKeys) === null
              ? b.compareKeys
              : oe.compareKeys,
          escapeRegex: k(b),
          escapeString: D(b),
          indent: b != null && b.min ? '' : I((b == null ? void 0 : b.indent) ?? oe.indent),
          maxDepth: (b == null ? void 0 : b.maxDepth) ?? oe.maxDepth,
          maxWidth: (b == null ? void 0 : b.maxWidth) ?? oe.maxWidth,
          min: (b == null ? void 0 : b.min) ?? oe.min,
          plugins: (b == null ? void 0 : b.plugins) ?? oe.plugins,
          printBasicPrototype: (b == null ? void 0 : b.printBasicPrototype) ?? !0,
          printFunctionName: M(b),
          spacingInner:
            b != null && b.min
              ? ' '
              : `
`,
          spacingOuter:
            b != null && b.min
              ? ''
              : `
`,
        });
      function I(b) {
        return new Array(b + 1).join(' ');
      }
      function N(b, B) {
        if (B && (ue(B), B.plugins)) {
          let X = V(B.plugins, b);
          if (X !== null) return z(X, b, Y(B), '', 0, []);
        }
        let $ = O(b, M(B), k(B), D(B));
        return $ !== null ? $ : x(b, Y(B), '', 0, []);
      }
      var H = {
        AsymmetricMatcher: o.default,
        DOMCollection: a.default,
        DOMElement: c.default,
        Immutable: n.default,
        ReactElement: i.default,
        ReactTestComponent: l.default,
      };
      e.plugins = H;
      var Z = N;
      e.default = Z;
    },
  }),
  jl = P({
    '../../node_modules/diff-sequences/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = f);
      var t = 'diff-sequences',
        r = 0,
        o = (m, y, g, h, v) => {
          let S = 0;
          for (; m < y && g < h && v(m, g); ) (m += 1), (g += 1), (S += 1);
          return S;
        },
        a = (m, y, g, h, v) => {
          let S = 0;
          for (; m <= y && g <= h && v(y, h); ) (y -= 1), (h -= 1), (S += 1);
          return S;
        },
        c = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = -m,
            R = S[C],
            _ = R;
          S[C] += o(R + 1, y, h + R - A + 1, g, v);
          let O = m < E ? m : E;
          for (C += 1, A += 2; C <= O; C += 1, A += 2) {
            if (C !== m && _ < S[C]) R = S[C];
            else if (((R = _ + 1), y <= R)) return C - 1;
            (_ = S[C]), (S[C] = R + o(R + 1, y, h + R - A + 1, g, v));
          }
          return E;
        },
        n = (m, y, g, h, v, S, E) => {
          let C = 0,
            A = m,
            R = S[C],
            _ = R;
          S[C] -= a(y, R - 1, g, h + R - A - 1, v);
          let O = m < E ? m : E;
          for (C += 1, A -= 2; C <= O; C += 1, A -= 2) {
            if (C !== m && S[C] < _) R = S[C];
            else if (((R = _ - 1), R < y)) return C - 1;
            (_ = S[C]), (S[C] = R - a(y, R - 1, g, h + R - A - 1, v));
          }
          return E;
        },
        i = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = h - y,
            x = g - y,
            j = v - h - x,
            z = -j - (m - 1),
            V = -j + (m - 1),
            U = r,
            ee = m < C ? m : C;
          for (let G = 0, ne = -m; G <= ee; G += 1, ne += 2) {
            let oe = G === 0 || (G !== m && U < E[G]),
              ue = oe ? E[G] : U,
              ce = oe ? ue : ue + 1,
              q = O + ce - ne,
              M = o(ce + 1, g, q + 1, v, S),
              k = ce + M;
            if (((U = E[G]), (E[G] = k), z <= ne && ne <= V)) {
              let D = (m - 1 - (ne + j)) / 2;
              if (D <= R && A[D] - 1 <= k) {
                let Y = O + ue - (oe ? ne + 1 : ne - 1),
                  I = a(y, ue, h, Y, S),
                  N = ue - I,
                  H = Y - I,
                  Z = N + 1,
                  b = H + 1;
                (_.nChangePreceding = m - 1),
                  m - 1 === Z + b - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = Z), (_.bEndPreceding = b)),
                  (_.nCommonPreceding = I),
                  I !== 0 && ((_.aCommonPreceding = Z), (_.bCommonPreceding = b)),
                  (_.nCommonFollowing = M),
                  M !== 0 && ((_.aCommonFollowing = ce + 1), (_.bCommonFollowing = q + 1));
                let B = k + 1,
                  $ = q + M + 1;
                return (
                  (_.nChangeFollowing = m - 1),
                  m - 1 === g + v - B - $
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = B), (_.bStartFollowing = $)),
                  !0
                );
              }
            }
          }
          return !1;
        },
        l = (m, y, g, h, v, S, E, C, A, R, _) => {
          let O = v - g,
            x = g - y,
            j = v - h - x,
            z = j - m,
            V = j + m,
            U = r,
            ee = m < R ? m : R;
          for (let G = 0, ne = m; G <= ee; G += 1, ne -= 2) {
            let oe = G === 0 || (G !== m && A[G] < U),
              ue = oe ? A[G] : U,
              ce = oe ? ue : ue - 1,
              q = O + ce - ne,
              M = a(y, ce - 1, h, q - 1, S),
              k = ce - M;
            if (((U = A[G]), (A[G] = k), z <= ne && ne <= V)) {
              let D = (m + (ne - j)) / 2;
              if (D <= C && k - 1 <= E[D]) {
                let Y = q - M;
                if (
                  ((_.nChangePreceding = m),
                  m === k + Y - y - h
                    ? ((_.aEndPreceding = y), (_.bEndPreceding = h))
                    : ((_.aEndPreceding = k), (_.bEndPreceding = Y)),
                  (_.nCommonPreceding = M),
                  M !== 0 && ((_.aCommonPreceding = k), (_.bCommonPreceding = Y)),
                  (_.nChangeFollowing = m - 1),
                  m === 1)
                )
                  (_.nCommonFollowing = 0), (_.aStartFollowing = g), (_.bStartFollowing = v);
                else {
                  let I = O + ue - (oe ? ne - 1 : ne + 1),
                    N = o(ue, g, I, v, S);
                  (_.nCommonFollowing = N),
                    N !== 0 && ((_.aCommonFollowing = ue), (_.bCommonFollowing = I));
                  let H = ue + N,
                    Z = I + N;
                  m - 1 === g + v - H - Z
                    ? ((_.aStartFollowing = g), (_.bStartFollowing = v))
                    : ((_.aStartFollowing = H), (_.bStartFollowing = Z));
                }
                return !0;
              }
            }
          }
          return !1;
        },
        s = (m, y, g, h, v, S, E, C, A) => {
          let R = h - y,
            _ = v - g,
            O = g - y,
            x = v - h,
            j = x - O,
            z = O,
            V = O;
          if (((E[0] = y - 1), (C[0] = g), j % 2 === 0)) {
            let U = (m || j) / 2,
              ee = (O + x) / 2;
            for (let G = 1; G <= ee; G += 1)
              if (((z = c(G, g, v, R, S, E, z)), G < U)) V = n(G, y, h, _, S, C, V);
              else if (l(G, y, g, h, v, S, E, z, C, V, A)) return;
          } else {
            let U = ((m || j) + 1) / 2,
              ee = (O + x + 1) / 2,
              G = 1;
            for (z = c(G, g, v, R, S, E, z), G += 1; G <= ee; G += 1)
              if (((V = n(G - 1, y, h, _, S, C, V)), G < U)) z = c(G, g, v, R, S, E, z);
              else if (i(G, y, g, h, v, S, E, z, C, V, A)) return;
          }
          throw new Error(`${t}: no overlap aStart=${y} aEnd=${g} bStart=${h} bEnd=${v}`);
        },
        u = (m, y, g, h, v, S, E, C, A, R) => {
          if (v - h < g - y) {
            if (((S = !S), S && E.length === 1)) {
              let { foundSubsequence: D, isCommon: Y } = E[0];
              E[1] = {
                foundSubsequence: (I, N, H) => {
                  D(I, H, N);
                },
                isCommon: (I, N) => Y(N, I),
              };
            }
            let M = y,
              k = g;
            (y = h), (g = v), (h = M), (v = k);
          }
          let { foundSubsequence: _, isCommon: O } = E[S ? 1 : 0];
          s(m, y, g, h, v, O, C, A, R);
          let {
            nChangePreceding: x,
            aEndPreceding: j,
            bEndPreceding: z,
            nCommonPreceding: V,
            aCommonPreceding: U,
            bCommonPreceding: ee,
            nCommonFollowing: G,
            aCommonFollowing: ne,
            bCommonFollowing: oe,
            nChangeFollowing: ue,
            aStartFollowing: ce,
            bStartFollowing: q,
          } = R;
          y < j && h < z && u(x, y, j, h, z, S, E, C, A, R),
            V !== 0 && _(V, U, ee),
            G !== 0 && _(G, ne, oe),
            ce < g && q < v && u(ue, ce, g, q, v, S, E, C, A, R);
        },
        p = (m, y) => {
          if (typeof y != 'number')
            throw new TypeError(`${t}: ${m} typeof ${typeof y} is not a number`);
          if (!Number.isSafeInteger(y))
            throw new RangeError(`${t}: ${m} value ${y} is not a safe integer`);
          if (y < 0) throw new RangeError(`${t}: ${m} value ${y} is a negative integer`);
        },
        d = (m, y) => {
          let g = typeof y;
          if (g !== 'function') throw new TypeError(`${t}: ${m} typeof ${g} is not a function`);
        };
      function f(m, y, g, h) {
        p('aLength', m), p('bLength', y), d('isCommon', g), d('foundSubsequence', h);
        let v = o(0, m, 0, y, g);
        if ((v !== 0 && h(v, 0, 0), m !== v || y !== v)) {
          let S = v,
            E = v,
            C = a(S, m - 1, E, y - 1, g),
            A = m - C,
            R = y - C,
            _ = v + C;
          m !== _ &&
            y !== _ &&
            u(0, S, A, E, R, !1, [{ foundSubsequence: h, isCommon: g }], [r], [r], {
              aCommonFollowing: r,
              aCommonPreceding: r,
              aEndPreceding: r,
              aStartFollowing: r,
              bCommonFollowing: r,
              bCommonPreceding: r,
              bEndPreceding: r,
              bStartFollowing: r,
              nChangeFollowing: r,
              nChangePreceding: r,
              nCommonFollowing: r,
              nCommonPreceding: r,
            }),
            C !== 0 && h(C, A, R);
        }
      }
    },
  }),
  Uf = P({
    '../../node_modules/min-indent/index.js'(e, t) {
      t.exports = (r) => {
        let o = r.match(/^[ \t]*(?=\S)/gm);
        return o ? o.reduce((a, c) => Math.min(a, c.length), 1 / 0) : 0;
      };
    },
  }),
  Hf = P({
    '../../node_modules/strip-indent/index.js'(e, t) {
      var r = Uf();
      t.exports = (o) => {
        let a = r(o);
        if (a === 0) return o;
        let c = new RegExp(`^[ \\t]{${a}}`, 'gm');
        return o.replace(c, '');
      };
    },
  }),
  zf = P({
    '../../node_modules/indent-string/index.js'(e, t) {
      t.exports = (r, o = 1, a) => {
        if (((a = { indent: ' ', includeEmptyLines: !1, ...a }), typeof r != 'string'))
          throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof r}\``);
        if (typeof o != 'number')
          throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof o}\``);
        if (typeof a.indent != 'string')
          throw new TypeError(
            `Expected \`options.indent\` to be a \`string\`, got \`${typeof a.indent}\``,
          );
        if (o === 0) return r;
        let c = a.includeEmptyLines ? /^/gm : /^(?!\s*$)/gm;
        return r.replace(c, a.indent.repeat(o));
      };
    },
  }),
  Il = P({
    '../../node_modules/redent/index.js'(e, t) {
      var r = Hf(),
        o = zf();
      t.exports = (a, c = 0, n) => o(r(a), c, n);
    },
  }),
  Vf = P({
    '../../node_modules/lodash/_listCacheClear.js'(e, t) {
      function r() {
        (this.__data__ = []), (this.size = 0);
      }
      t.exports = r;
    },
  }),
  Nl = P({
    '../../node_modules/lodash/eq.js'(e, t) {
      function r(o, a) {
        return o === a || (o !== o && a !== a);
      }
      t.exports = r;
    },
  }),
  _n = P({
    '../../node_modules/lodash/_assocIndexOf.js'(e, t) {
      var r = Nl();
      function o(a, c) {
        for (var n = a.length; n--; ) if (r(a[n][0], c)) return n;
        return -1;
      }
      t.exports = o;
    },
  }),
  Wf = P({
    '../../node_modules/lodash/_listCacheDelete.js'(e, t) {
      var r = _n(),
        o = Array.prototype,
        a = o.splice;
      function c(n) {
        var i = this.__data__,
          l = r(i, n);
        if (l < 0) return !1;
        var s = i.length - 1;
        return l == s ? i.pop() : a.call(i, l, 1), --this.size, !0;
      }
      t.exports = c;
    },
  }),
  Gf = P({
    '../../node_modules/lodash/_listCacheGet.js'(e, t) {
      var r = _n();
      function o(a) {
        var c = this.__data__,
          n = r(c, a);
        return n < 0 ? void 0 : c[n][1];
      }
      t.exports = o;
    },
  }),
  Kf = P({
    '../../node_modules/lodash/_listCacheHas.js'(e, t) {
      var r = _n();
      function o(a) {
        return r(this.__data__, a) > -1;
      }
      t.exports = o;
    },
  }),
  Yf = P({
    '../../node_modules/lodash/_listCacheSet.js'(e, t) {
      var r = _n();
      function o(a, c) {
        var n = this.__data__,
          i = r(n, a);
        return i < 0 ? (++this.size, n.push([a, c])) : (n[i][1] = c), this;
      }
      t.exports = o;
    },
  }),
  En = P({
    '../../node_modules/lodash/_ListCache.js'(e, t) {
      var r = Vf(),
        o = Wf(),
        a = Gf(),
        c = Kf(),
        n = Yf();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var p = l[s];
          this.set(p[0], p[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  Jf = P({
    '../../node_modules/lodash/_stackClear.js'(e, t) {
      var r = En();
      function o() {
        (this.__data__ = new r()), (this.size = 0);
      }
      t.exports = o;
    },
  }),
  Xf = P({
    '../../node_modules/lodash/_stackDelete.js'(e, t) {
      function r(o) {
        var a = this.__data__,
          c = a.delete(o);
        return (this.size = a.size), c;
      }
      t.exports = r;
    },
  }),
  Qf = P({
    '../../node_modules/lodash/_stackGet.js'(e, t) {
      function r(o) {
        return this.__data__.get(o);
      }
      t.exports = r;
    },
  }),
  Zf = P({
    '../../node_modules/lodash/_stackHas.js'(e, t) {
      function r(o) {
        return this.__data__.has(o);
      }
      t.exports = r;
    },
  }),
  Bl = P({
    '../../node_modules/lodash/_freeGlobal.js'(e, t) {
      var r = typeof global == 'object' && global && global.Object === Object && global;
      t.exports = r;
    },
  }),
  gt = P({
    '../../node_modules/lodash/_root.js'(e, t) {
      var r = Bl(),
        o = typeof self == 'object' && self && self.Object === Object && self,
        a = r || o || Function('return this')();
      t.exports = a;
    },
  }),
  zo = P({
    '../../node_modules/lodash/_Symbol.js'(e, t) {
      var r = gt(),
        o = r.Symbol;
      t.exports = o;
    },
  }),
  em = P({
    '../../node_modules/lodash/_getRawTag.js'(e, t) {
      var r = zo(),
        o = Object.prototype,
        a = o.hasOwnProperty,
        c = o.toString,
        n = r ? r.toStringTag : void 0;
      function i(l) {
        var s = a.call(l, n),
          u = l[n];
        try {
          l[n] = void 0;
          var p = !0;
        } catch {}
        var d = c.call(l);
        return p && (s ? (l[n] = u) : delete l[n]), d;
      }
      t.exports = i;
    },
  }),
  tm = P({
    '../../node_modules/lodash/_objectToString.js'(e, t) {
      var r = Object.prototype,
        o = r.toString;
      function a(c) {
        return o.call(c);
      }
      t.exports = a;
    },
  }),
  wn = P({
    '../../node_modules/lodash/_baseGetTag.js'(e, t) {
      var r = zo(),
        o = em(),
        a = tm(),
        c = '[object Null]',
        n = '[object Undefined]',
        i = r ? r.toStringTag : void 0;
      function l(s) {
        return s == null ? (s === void 0 ? n : c) : i && i in Object(s) ? o(s) : a(s);
      }
      t.exports = l;
    },
  }),
  $l = P({
    '../../node_modules/lodash/isObject.js'(e, t) {
      function r(o) {
        var a = typeof o;
        return o != null && (a == 'object' || a == 'function');
      }
      t.exports = r;
    },
  }),
  Dl = P({
    '../../node_modules/lodash/isFunction.js'(e, t) {
      var r = wn(),
        o = $l(),
        a = '[object AsyncFunction]',
        c = '[object Function]',
        n = '[object GeneratorFunction]',
        i = '[object Proxy]';
      function l(s) {
        if (!o(s)) return !1;
        var u = r(s);
        return u == c || u == n || u == a || u == i;
      }
      t.exports = l;
    },
  }),
  rm = P({
    '../../node_modules/lodash/_coreJsData.js'(e, t) {
      var r = gt(),
        o = r['__core-js_shared__'];
      t.exports = o;
    },
  }),
  nm = P({
    '../../node_modules/lodash/_isMasked.js'(e, t) {
      var r = rm(),
        o = (function () {
          var c = /[^.]+$/.exec((r && r.keys && r.keys.IE_PROTO) || '');
          return c ? 'Symbol(src)_1.' + c : '';
        })();
      function a(c) {
        return !!o && o in c;
      }
      t.exports = a;
    },
  }),
  kl = P({
    '../../node_modules/lodash/_toSource.js'(e, t) {
      var r = Function.prototype,
        o = r.toString;
      function a(c) {
        if (c != null) {
          try {
            return o.call(c);
          } catch {}
          try {
            return c + '';
          } catch {}
        }
        return '';
      }
      t.exports = a;
    },
  }),
  om = P({
    '../../node_modules/lodash/_baseIsNative.js'(e, t) {
      var r = Dl(),
        o = nm(),
        a = $l(),
        c = kl(),
        n = /[\\^$.*+?()[\]{}|]/g,
        i = /^\[object .+?Constructor\]$/,
        l = Function.prototype,
        s = Object.prototype,
        u = l.toString,
        p = s.hasOwnProperty,
        d = RegExp(
          '^' +
            u
              .call(p)
              .replace(n, '\\$&')
              .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
            '$',
        );
      function f(m) {
        if (!a(m) || o(m)) return !1;
        var y = r(m) ? d : i;
        return y.test(c(m));
      }
      t.exports = f;
    },
  }),
  am = P({
    '../../node_modules/lodash/_getValue.js'(e, t) {
      function r(o, a) {
        return o == null ? void 0 : o[a];
      }
      t.exports = r;
    },
  }),
  pr = P({
    '../../node_modules/lodash/_getNative.js'(e, t) {
      var r = om(),
        o = am();
      function a(c, n) {
        var i = o(c, n);
        return r(i) ? i : void 0;
      }
      t.exports = a;
    },
  }),
  Vo = P({
    '../../node_modules/lodash/_Map.js'(e, t) {
      var r = pr(),
        o = gt(),
        a = r(o, 'Map');
      t.exports = a;
    },
  }),
  Sn = P({
    '../../node_modules/lodash/_nativeCreate.js'(e, t) {
      var r = pr(),
        o = r(Object, 'create');
      t.exports = o;
    },
  }),
  im = P({
    '../../node_modules/lodash/_hashClear.js'(e, t) {
      var r = Sn();
      function o() {
        (this.__data__ = r ? r(null) : {}), (this.size = 0);
      }
      t.exports = o;
    },
  }),
  lm = P({
    '../../node_modules/lodash/_hashDelete.js'(e, t) {
      function r(o) {
        var a = this.has(o) && delete this.__data__[o];
        return (this.size -= a ? 1 : 0), a;
      }
      t.exports = r;
    },
  }),
  sm = P({
    '../../node_modules/lodash/_hashGet.js'(e, t) {
      var r = Sn(),
        o = '__lodash_hash_undefined__',
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i) {
        var l = this.__data__;
        if (r) {
          var s = l[i];
          return s === o ? void 0 : s;
        }
        return c.call(l, i) ? l[i] : void 0;
      }
      t.exports = n;
    },
  }),
  um = P({
    '../../node_modules/lodash/_hashHas.js'(e, t) {
      var r = Sn(),
        o = Object.prototype,
        a = o.hasOwnProperty;
      function c(n) {
        var i = this.__data__;
        return r ? i[n] !== void 0 : a.call(i, n);
      }
      t.exports = c;
    },
  }),
  cm = P({
    '../../node_modules/lodash/_hashSet.js'(e, t) {
      var r = Sn(),
        o = '__lodash_hash_undefined__';
      function a(c, n) {
        var i = this.__data__;
        return (this.size += this.has(c) ? 0 : 1), (i[c] = r && n === void 0 ? o : n), this;
      }
      t.exports = a;
    },
  }),
  dm = P({
    '../../node_modules/lodash/_Hash.js'(e, t) {
      var r = im(),
        o = lm(),
        a = sm(),
        c = um(),
        n = cm();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var p = l[s];
          this.set(p[0], p[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  pm = P({
    '../../node_modules/lodash/_mapCacheClear.js'(e, t) {
      var r = dm(),
        o = En(),
        a = Vo();
      function c() {
        (this.size = 0), (this.__data__ = { hash: new r(), map: new (a || o)(), string: new r() });
      }
      t.exports = c;
    },
  }),
  fm = P({
    '../../node_modules/lodash/_isKeyable.js'(e, t) {
      function r(o) {
        var a = typeof o;
        return a == 'string' || a == 'number' || a == 'symbol' || a == 'boolean'
          ? o !== '__proto__'
          : o === null;
      }
      t.exports = r;
    },
  }),
  Cn = P({
    '../../node_modules/lodash/_getMapData.js'(e, t) {
      var r = fm();
      function o(a, c) {
        var n = a.__data__;
        return r(c) ? n[typeof c == 'string' ? 'string' : 'hash'] : n.map;
      }
      t.exports = o;
    },
  }),
  mm = P({
    '../../node_modules/lodash/_mapCacheDelete.js'(e, t) {
      var r = Cn();
      function o(a) {
        var c = r(this, a).delete(a);
        return (this.size -= c ? 1 : 0), c;
      }
      t.exports = o;
    },
  }),
  ym = P({
    '../../node_modules/lodash/_mapCacheGet.js'(e, t) {
      var r = Cn();
      function o(a) {
        return r(this, a).get(a);
      }
      t.exports = o;
    },
  }),
  hm = P({
    '../../node_modules/lodash/_mapCacheHas.js'(e, t) {
      var r = Cn();
      function o(a) {
        return r(this, a).has(a);
      }
      t.exports = o;
    },
  }),
  bm = P({
    '../../node_modules/lodash/_mapCacheSet.js'(e, t) {
      var r = Cn();
      function o(a, c) {
        var n = r(this, a),
          i = n.size;
        return n.set(a, c), (this.size += n.size == i ? 0 : 1), this;
      }
      t.exports = o;
    },
  }),
  Ll = P({
    '../../node_modules/lodash/_MapCache.js'(e, t) {
      var r = pm(),
        o = mm(),
        a = ym(),
        c = hm(),
        n = bm();
      function i(l) {
        var s = -1,
          u = l == null ? 0 : l.length;
        for (this.clear(); ++s < u; ) {
          var p = l[s];
          this.set(p[0], p[1]);
        }
      }
      (i.prototype.clear = r),
        (i.prototype.delete = o),
        (i.prototype.get = a),
        (i.prototype.has = c),
        (i.prototype.set = n),
        (t.exports = i);
    },
  }),
  gm = P({
    '../../node_modules/lodash/_stackSet.js'(e, t) {
      var r = En(),
        o = Vo(),
        a = Ll(),
        c = 200;
      function n(i, l) {
        var s = this.__data__;
        if (s instanceof r) {
          var u = s.__data__;
          if (!o || u.length < c - 1) return u.push([i, l]), (this.size = ++s.size), this;
          s = this.__data__ = new a(u);
        }
        return s.set(i, l), (this.size = s.size), this;
      }
      t.exports = n;
    },
  }),
  vm = P({
    '../../node_modules/lodash/_Stack.js'(e, t) {
      var r = En(),
        o = Jf(),
        a = Xf(),
        c = Qf(),
        n = Zf(),
        i = gm();
      function l(s) {
        var u = (this.__data__ = new r(s));
        this.size = u.size;
      }
      (l.prototype.clear = o),
        (l.prototype.delete = a),
        (l.prototype.get = c),
        (l.prototype.has = n),
        (l.prototype.set = i),
        (t.exports = l);
    },
  }),
  _m = P({
    '../../node_modules/lodash/_setCacheAdd.js'(e, t) {
      var r = '__lodash_hash_undefined__';
      function o(a) {
        return this.__data__.set(a, r), this;
      }
      t.exports = o;
    },
  }),
  Em = P({
    '../../node_modules/lodash/_setCacheHas.js'(e, t) {
      function r(o) {
        return this.__data__.has(o);
      }
      t.exports = r;
    },
  }),
  Fl = P({
    '../../node_modules/lodash/_SetCache.js'(e, t) {
      var r = Ll(),
        o = _m(),
        a = Em();
      function c(n) {
        var i = -1,
          l = n == null ? 0 : n.length;
        for (this.__data__ = new r(); ++i < l; ) this.add(n[i]);
      }
      (c.prototype.add = c.prototype.push = o), (c.prototype.has = a), (t.exports = c);
    },
  }),
  wm = P({
    '../../node_modules/lodash/_arraySome.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = o == null ? 0 : o.length; ++c < n; ) if (a(o[c], c, o)) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  Ul = P({
    '../../node_modules/lodash/_cacheHas.js'(e, t) {
      function r(o, a) {
        return o.has(a);
      }
      t.exports = r;
    },
  }),
  Hl = P({
    '../../node_modules/lodash/_equalArrays.js'(e, t) {
      var r = Fl(),
        o = wm(),
        a = Ul(),
        c = 1,
        n = 2;
      function i(l, s, u, p, d, f) {
        var m = u & c,
          y = l.length,
          g = s.length;
        if (y != g && !(m && g > y)) return !1;
        var h = f.get(l),
          v = f.get(s);
        if (h && v) return h == s && v == l;
        var S = -1,
          E = !0,
          C = u & n ? new r() : void 0;
        for (f.set(l, s), f.set(s, l); ++S < y; ) {
          var A = l[S],
            R = s[S];
          if (p) var _ = m ? p(R, A, S, s, l, f) : p(A, R, S, l, s, f);
          if (_ !== void 0) {
            if (_) continue;
            E = !1;
            break;
          }
          if (C) {
            if (
              !o(s, function (O, x) {
                if (!a(C, x) && (A === O || d(A, O, u, p, f))) return C.push(x);
              })
            ) {
              E = !1;
              break;
            }
          } else if (!(A === R || d(A, R, u, p, f))) {
            E = !1;
            break;
          }
        }
        return f.delete(l), f.delete(s), E;
      }
      t.exports = i;
    },
  }),
  Sm = P({
    '../../node_modules/lodash/_Uint8Array.js'(e, t) {
      var r = gt(),
        o = r.Uint8Array;
      t.exports = o;
    },
  }),
  Cm = P({
    '../../node_modules/lodash/_mapToArray.js'(e, t) {
      function r(o) {
        var a = -1,
          c = Array(o.size);
        return (
          o.forEach(function (n, i) {
            c[++a] = [i, n];
          }),
          c
        );
      }
      t.exports = r;
    },
  }),
  Wo = P({
    '../../node_modules/lodash/_setToArray.js'(e, t) {
      function r(o) {
        var a = -1,
          c = Array(o.size);
        return (
          o.forEach(function (n) {
            c[++a] = n;
          }),
          c
        );
      }
      t.exports = r;
    },
  }),
  Om = P({
    '../../node_modules/lodash/_equalByTag.js'(e, t) {
      var r = zo(),
        o = Sm(),
        a = Nl(),
        c = Hl(),
        n = Cm(),
        i = Wo(),
        l = 1,
        s = 2,
        u = '[object Boolean]',
        p = '[object Date]',
        d = '[object Error]',
        f = '[object Map]',
        m = '[object Number]',
        y = '[object RegExp]',
        g = '[object Set]',
        h = '[object String]',
        v = '[object Symbol]',
        S = '[object ArrayBuffer]',
        E = '[object DataView]',
        C = r ? r.prototype : void 0,
        A = C ? C.valueOf : void 0;
      function R(_, O, x, j, z, V, U) {
        switch (x) {
          case E:
            if (_.byteLength != O.byteLength || _.byteOffset != O.byteOffset) return !1;
            (_ = _.buffer), (O = O.buffer);
          case S:
            return !(_.byteLength != O.byteLength || !V(new o(_), new o(O)));
          case u:
          case p:
          case m:
            return a(+_, +O);
          case d:
            return _.name == O.name && _.message == O.message;
          case y:
          case h:
            return _ == O + '';
          case f:
            var ee = n;
          case g:
            var G = j & l;
            if ((ee || (ee = i), _.size != O.size && !G)) return !1;
            var ne = U.get(_);
            if (ne) return ne == O;
            (j |= s), U.set(_, O);
            var oe = c(ee(_), ee(O), j, z, V, U);
            return U.delete(_), oe;
          case v:
            if (A) return A.call(_) == A.call(O);
        }
        return !1;
      }
      t.exports = R;
    },
  }),
  Pm = P({
    '../../node_modules/lodash/_arrayPush.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = a.length, i = o.length; ++c < n; ) o[i + c] = a[c];
        return o;
      }
      t.exports = r;
    },
  }),
  Go = P({
    '../../node_modules/lodash/isArray.js'(e, t) {
      var r = Array.isArray;
      t.exports = r;
    },
  }),
  Rm = P({
    '../../node_modules/lodash/_baseGetAllKeys.js'(e, t) {
      var r = Pm(),
        o = Go();
      function a(c, n, i) {
        var l = n(c);
        return o(c) ? l : r(l, i(c));
      }
      t.exports = a;
    },
  }),
  Tm = P({
    '../../node_modules/lodash/_arrayFilter.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = o == null ? 0 : o.length, i = 0, l = []; ++c < n; ) {
          var s = o[c];
          a(s, c, o) && (l[i++] = s);
        }
        return l;
      }
      t.exports = r;
    },
  }),
  Am = P({
    '../../node_modules/lodash/stubArray.js'(e, t) {
      function r() {
        return [];
      }
      t.exports = r;
    },
  }),
  qm = P({
    '../../node_modules/lodash/_getSymbols.js'(e, t) {
      var r = Tm(),
        o = Am(),
        a = Object.prototype,
        c = a.propertyIsEnumerable,
        n = Object.getOwnPropertySymbols,
        i = n
          ? function (l) {
              return l == null
                ? []
                : ((l = Object(l)),
                  r(n(l), function (s) {
                    return c.call(l, s);
                  }));
            }
          : o;
      t.exports = i;
    },
  }),
  xm = P({
    '../../node_modules/lodash/_baseTimes.js'(e, t) {
      function r(o, a) {
        for (var c = -1, n = Array(o); ++c < o; ) n[c] = a(c);
        return n;
      }
      t.exports = r;
    },
  }),
  On = P({
    '../../node_modules/lodash/isObjectLike.js'(e, t) {
      function r(o) {
        return o != null && typeof o == 'object';
      }
      t.exports = r;
    },
  }),
  Mm = P({
    '../../node_modules/lodash/_baseIsArguments.js'(e, t) {
      var r = wn(),
        o = On(),
        a = '[object Arguments]';
      function c(n) {
        return o(n) && r(n) == a;
      }
      t.exports = c;
    },
  }),
  jm = P({
    '../../node_modules/lodash/isArguments.js'(e, t) {
      var r = Mm(),
        o = On(),
        a = Object.prototype,
        c = a.hasOwnProperty,
        n = a.propertyIsEnumerable,
        i = r(
          (function () {
            return arguments;
          })(),
        )
          ? r
          : function (l) {
              return o(l) && c.call(l, 'callee') && !n.call(l, 'callee');
            };
      t.exports = i;
    },
  }),
  Im = P({
    '../../node_modules/lodash/stubFalse.js'(e, t) {
      function r() {
        return !1;
      }
      t.exports = r;
    },
  }),
  zl = P({
    '../../node_modules/lodash/isBuffer.js'(e, t) {
      var r = gt(),
        o = Im(),
        a = typeof e == 'object' && e && !e.nodeType && e,
        c = a && typeof t == 'object' && t && !t.nodeType && t,
        n = c && c.exports === a,
        i = n ? r.Buffer : void 0,
        l = i ? i.isBuffer : void 0,
        s = l || o;
      t.exports = s;
    },
  }),
  Nm = P({
    '../../node_modules/lodash/_isIndex.js'(e, t) {
      var r = 9007199254740991,
        o = /^(?:0|[1-9]\d*)$/;
      function a(c, n) {
        var i = typeof c;
        return (
          (n = n ?? r),
          !!n && (i == 'number' || (i != 'symbol' && o.test(c))) && c > -1 && c % 1 == 0 && c < n
        );
      }
      t.exports = a;
    },
  }),
  Vl = P({
    '../../node_modules/lodash/isLength.js'(e, t) {
      var r = 9007199254740991;
      function o(a) {
        return typeof a == 'number' && a > -1 && a % 1 == 0 && a <= r;
      }
      t.exports = o;
    },
  }),
  Bm = P({
    '../../node_modules/lodash/_baseIsTypedArray.js'(e, t) {
      var r = wn(),
        o = Vl(),
        a = On(),
        c = '[object Arguments]',
        n = '[object Array]',
        i = '[object Boolean]',
        l = '[object Date]',
        s = '[object Error]',
        u = '[object Function]',
        p = '[object Map]',
        d = '[object Number]',
        f = '[object Object]',
        m = '[object RegExp]',
        y = '[object Set]',
        g = '[object String]',
        h = '[object WeakMap]',
        v = '[object ArrayBuffer]',
        S = '[object DataView]',
        E = '[object Float32Array]',
        C = '[object Float64Array]',
        A = '[object Int8Array]',
        R = '[object Int16Array]',
        _ = '[object Int32Array]',
        O = '[object Uint8Array]',
        x = '[object Uint8ClampedArray]',
        j = '[object Uint16Array]',
        z = '[object Uint32Array]',
        V = {};
      (V[E] = V[C] = V[A] = V[R] = V[_] = V[O] = V[x] = V[j] = V[z] = !0),
        (V[c] =
          V[n] =
          V[v] =
          V[i] =
          V[S] =
          V[l] =
          V[s] =
          V[u] =
          V[p] =
          V[d] =
          V[f] =
          V[m] =
          V[y] =
          V[g] =
          V[h] =
            !1);
      function U(ee) {
        return a(ee) && o(ee.length) && !!V[r(ee)];
      }
      t.exports = U;
    },
  }),
  $m = P({
    '../../node_modules/lodash/_baseUnary.js'(e, t) {
      function r(o) {
        return function (a) {
          return o(a);
        };
      }
      t.exports = r;
    },
  }),
  Dm = P({
    '../../node_modules/lodash/_nodeUtil.js'(e, t) {
      var r = Bl(),
        o = typeof e == 'object' && e && !e.nodeType && e,
        a = o && typeof t == 'object' && t && !t.nodeType && t,
        c = a && a.exports === o,
        n = c && r.process,
        i = (function () {
          try {
            var l = a && a.require && a.require('util').types;
            return l || (n && n.binding && n.binding('util'));
          } catch {}
        })();
      t.exports = i;
    },
  }),
  Wl = P({
    '../../node_modules/lodash/isTypedArray.js'(e, t) {
      var r = Bm(),
        o = $m(),
        a = Dm(),
        c = a && a.isTypedArray,
        n = c ? o(c) : r;
      t.exports = n;
    },
  }),
  km = P({
    '../../node_modules/lodash/_arrayLikeKeys.js'(e, t) {
      var r = xm(),
        o = jm(),
        a = Go(),
        c = zl(),
        n = Nm(),
        i = Wl(),
        l = Object.prototype,
        s = l.hasOwnProperty;
      function u(p, d) {
        var f = a(p),
          m = !f && o(p),
          y = !f && !m && c(p),
          g = !f && !m && !y && i(p),
          h = f || m || y || g,
          v = h ? r(p.length, String) : [],
          S = v.length;
        for (var E in p)
          (d || s.call(p, E)) &&
            !(
              h &&
              (E == 'length' ||
                (y && (E == 'offset' || E == 'parent')) ||
                (g && (E == 'buffer' || E == 'byteLength' || E == 'byteOffset')) ||
                n(E, S))
            ) &&
            v.push(E);
        return v;
      }
      t.exports = u;
    },
  }),
  Lm = P({
    '../../node_modules/lodash/_isPrototype.js'(e, t) {
      var r = Object.prototype;
      function o(a) {
        var c = a && a.constructor,
          n = (typeof c == 'function' && c.prototype) || r;
        return a === n;
      }
      t.exports = o;
    },
  }),
  Fm = P({
    '../../node_modules/lodash/_overArg.js'(e, t) {
      function r(o, a) {
        return function (c) {
          return o(a(c));
        };
      }
      t.exports = r;
    },
  }),
  Um = P({
    '../../node_modules/lodash/_nativeKeys.js'(e, t) {
      var r = Fm(),
        o = r(Object.keys, Object);
      t.exports = o;
    },
  }),
  Hm = P({
    '../../node_modules/lodash/_baseKeys.js'(e, t) {
      var r = Lm(),
        o = Um(),
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i) {
        if (!r(i)) return o(i);
        var l = [];
        for (var s in Object(i)) c.call(i, s) && s != 'constructor' && l.push(s);
        return l;
      }
      t.exports = n;
    },
  }),
  zm = P({
    '../../node_modules/lodash/isArrayLike.js'(e, t) {
      var r = Dl(),
        o = Vl();
      function a(c) {
        return c != null && o(c.length) && !r(c);
      }
      t.exports = a;
    },
  }),
  Vm = P({
    '../../node_modules/lodash/keys.js'(e, t) {
      var r = km(),
        o = Hm(),
        a = zm();
      function c(n) {
        return a(n) ? r(n) : o(n);
      }
      t.exports = c;
    },
  }),
  Wm = P({
    '../../node_modules/lodash/_getAllKeys.js'(e, t) {
      var r = Rm(),
        o = qm(),
        a = Vm();
      function c(n) {
        return r(n, a, o);
      }
      t.exports = c;
    },
  }),
  Gm = P({
    '../../node_modules/lodash/_equalObjects.js'(e, t) {
      var r = Wm(),
        o = 1,
        a = Object.prototype,
        c = a.hasOwnProperty;
      function n(i, l, s, u, p, d) {
        var f = s & o,
          m = r(i),
          y = m.length,
          g = r(l),
          h = g.length;
        if (y != h && !f) return !1;
        for (var v = y; v--; ) {
          var S = m[v];
          if (!(f ? S in l : c.call(l, S))) return !1;
        }
        var E = d.get(i),
          C = d.get(l);
        if (E && C) return E == l && C == i;
        var A = !0;
        d.set(i, l), d.set(l, i);
        for (var R = f; ++v < y; ) {
          S = m[v];
          var _ = i[S],
            O = l[S];
          if (u) var x = f ? u(O, _, S, l, i, d) : u(_, O, S, i, l, d);
          if (!(x === void 0 ? _ === O || p(_, O, s, u, d) : x)) {
            A = !1;
            break;
          }
          R || (R = S == 'constructor');
        }
        if (A && !R) {
          var j = i.constructor,
            z = l.constructor;
          j != z &&
            'constructor' in i &&
            'constructor' in l &&
            !(
              typeof j == 'function' &&
              j instanceof j &&
              typeof z == 'function' &&
              z instanceof z
            ) &&
            (A = !1);
        }
        return d.delete(i), d.delete(l), A;
      }
      t.exports = n;
    },
  }),
  Km = P({
    '../../node_modules/lodash/_DataView.js'(e, t) {
      var r = pr(),
        o = gt(),
        a = r(o, 'DataView');
      t.exports = a;
    },
  }),
  Ym = P({
    '../../node_modules/lodash/_Promise.js'(e, t) {
      var r = pr(),
        o = gt(),
        a = r(o, 'Promise');
      t.exports = a;
    },
  }),
  Gl = P({
    '../../node_modules/lodash/_Set.js'(e, t) {
      var r = pr(),
        o = gt(),
        a = r(o, 'Set');
      t.exports = a;
    },
  }),
  Jm = P({
    '../../node_modules/lodash/_WeakMap.js'(e, t) {
      var r = pr(),
        o = gt(),
        a = r(o, 'WeakMap');
      t.exports = a;
    },
  }),
  Xm = P({
    '../../node_modules/lodash/_getTag.js'(e, t) {
      var r = Km(),
        o = Vo(),
        a = Ym(),
        c = Gl(),
        n = Jm(),
        i = wn(),
        l = kl(),
        s = '[object Map]',
        u = '[object Object]',
        p = '[object Promise]',
        d = '[object Set]',
        f = '[object WeakMap]',
        m = '[object DataView]',
        y = l(r),
        g = l(o),
        h = l(a),
        v = l(c),
        S = l(n),
        E = i;
      ((r && E(new r(new ArrayBuffer(1))) != m) ||
        (o && E(new o()) != s) ||
        (a && E(a.resolve()) != p) ||
        (c && E(new c()) != d) ||
        (n && E(new n()) != f)) &&
        (E = function (C) {
          var A = i(C),
            R = A == u ? C.constructor : void 0,
            _ = R ? l(R) : '';
          if (_)
            switch (_) {
              case y:
                return m;
              case g:
                return s;
              case h:
                return p;
              case v:
                return d;
              case S:
                return f;
            }
          return A;
        }),
        (t.exports = E);
    },
  }),
  Qm = P({
    '../../node_modules/lodash/_baseIsEqualDeep.js'(e, t) {
      var r = vm(),
        o = Hl(),
        a = Om(),
        c = Gm(),
        n = Xm(),
        i = Go(),
        l = zl(),
        s = Wl(),
        u = 1,
        p = '[object Arguments]',
        d = '[object Array]',
        f = '[object Object]',
        m = Object.prototype,
        y = m.hasOwnProperty;
      function g(h, v, S, E, C, A) {
        var R = i(h),
          _ = i(v),
          O = R ? d : n(h),
          x = _ ? d : n(v);
        (O = O == p ? f : O), (x = x == p ? f : x);
        var j = O == f,
          z = x == f,
          V = O == x;
        if (V && l(h)) {
          if (!l(v)) return !1;
          (R = !0), (j = !1);
        }
        if (V && !j)
          return A || (A = new r()), R || s(h) ? o(h, v, S, E, C, A) : a(h, v, O, S, E, C, A);
        if (!(S & u)) {
          var U = j && y.call(h, '__wrapped__'),
            ee = z && y.call(v, '__wrapped__');
          if (U || ee) {
            var G = U ? h.value() : h,
              ne = ee ? v.value() : v;
            return A || (A = new r()), C(G, ne, S, E, A);
          }
        }
        return V ? (A || (A = new r()), c(h, v, S, E, C, A)) : !1;
      }
      t.exports = g;
    },
  }),
  Kl = P({
    '../../node_modules/lodash/_baseIsEqual.js'(e, t) {
      var r = Qm(),
        o = On();
      function a(c, n, i, l, s) {
        return c === n
          ? !0
          : c == null || n == null || (!o(c) && !o(n))
            ? c !== c && n !== n
            : r(c, n, i, l, a, s);
      }
      t.exports = a;
    },
  }),
  Yl = P({
    '../../node_modules/lodash/isEqual.js'(e, t) {
      var r = Kl();
      function o(a, c) {
        return r(a, c);
      }
      t.exports = o;
    },
  }),
  Zm = P({
    '../../node_modules/color-name/index.js'(e, t) {
      t.exports = {
        aliceblue: [240, 248, 255],
        antiquewhite: [250, 235, 215],
        aqua: [0, 255, 255],
        aquamarine: [127, 255, 212],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        bisque: [255, 228, 196],
        black: [0, 0, 0],
        blanchedalmond: [255, 235, 205],
        blue: [0, 0, 255],
        blueviolet: [138, 43, 226],
        brown: [165, 42, 42],
        burlywood: [222, 184, 135],
        cadetblue: [95, 158, 160],
        chartreuse: [127, 255, 0],
        chocolate: [210, 105, 30],
        coral: [255, 127, 80],
        cornflowerblue: [100, 149, 237],
        cornsilk: [255, 248, 220],
        crimson: [220, 20, 60],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgoldenrod: [184, 134, 11],
        darkgray: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkgrey: [169, 169, 169],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkseagreen: [143, 188, 143],
        darkslateblue: [72, 61, 139],
        darkslategray: [47, 79, 79],
        darkslategrey: [47, 79, 79],
        darkturquoise: [0, 206, 209],
        darkviolet: [148, 0, 211],
        deeppink: [255, 20, 147],
        deepskyblue: [0, 191, 255],
        dimgray: [105, 105, 105],
        dimgrey: [105, 105, 105],
        dodgerblue: [30, 144, 255],
        firebrick: [178, 34, 34],
        floralwhite: [255, 250, 240],
        forestgreen: [34, 139, 34],
        fuchsia: [255, 0, 255],
        gainsboro: [220, 220, 220],
        ghostwhite: [248, 248, 255],
        gold: [255, 215, 0],
        goldenrod: [218, 165, 32],
        gray: [128, 128, 128],
        green: [0, 128, 0],
        greenyellow: [173, 255, 47],
        grey: [128, 128, 128],
        honeydew: [240, 255, 240],
        hotpink: [255, 105, 180],
        indianred: [205, 92, 92],
        indigo: [75, 0, 130],
        ivory: [255, 255, 240],
        khaki: [240, 230, 140],
        lavender: [230, 230, 250],
        lavenderblush: [255, 240, 245],
        lawngreen: [124, 252, 0],
        lemonchiffon: [255, 250, 205],
        lightblue: [173, 216, 230],
        lightcoral: [240, 128, 128],
        lightcyan: [224, 255, 255],
        lightgoldenrodyellow: [250, 250, 210],
        lightgray: [211, 211, 211],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightsalmon: [255, 160, 122],
        lightseagreen: [32, 178, 170],
        lightskyblue: [135, 206, 250],
        lightslategray: [119, 136, 153],
        lightslategrey: [119, 136, 153],
        lightsteelblue: [176, 196, 222],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        limegreen: [50, 205, 50],
        linen: [250, 240, 230],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        mediumaquamarine: [102, 205, 170],
        mediumblue: [0, 0, 205],
        mediumorchid: [186, 85, 211],
        mediumpurple: [147, 112, 219],
        mediumseagreen: [60, 179, 113],
        mediumslateblue: [123, 104, 238],
        mediumspringgreen: [0, 250, 154],
        mediumturquoise: [72, 209, 204],
        mediumvioletred: [199, 21, 133],
        midnightblue: [25, 25, 112],
        mintcream: [245, 255, 250],
        mistyrose: [255, 228, 225],
        moccasin: [255, 228, 181],
        navajowhite: [255, 222, 173],
        navy: [0, 0, 128],
        oldlace: [253, 245, 230],
        olive: [128, 128, 0],
        olivedrab: [107, 142, 35],
        orange: [255, 165, 0],
        orangered: [255, 69, 0],
        orchid: [218, 112, 214],
        palegoldenrod: [238, 232, 170],
        palegreen: [152, 251, 152],
        paleturquoise: [175, 238, 238],
        palevioletred: [219, 112, 147],
        papayawhip: [255, 239, 213],
        peachpuff: [255, 218, 185],
        peru: [205, 133, 63],
        pink: [255, 192, 203],
        plum: [221, 160, 221],
        powderblue: [176, 224, 230],
        purple: [128, 0, 128],
        rebeccapurple: [102, 51, 153],
        red: [255, 0, 0],
        rosybrown: [188, 143, 143],
        royalblue: [65, 105, 225],
        saddlebrown: [139, 69, 19],
        salmon: [250, 128, 114],
        sandybrown: [244, 164, 96],
        seagreen: [46, 139, 87],
        seashell: [255, 245, 238],
        sienna: [160, 82, 45],
        silver: [192, 192, 192],
        skyblue: [135, 206, 235],
        slateblue: [106, 90, 205],
        slategray: [112, 128, 144],
        slategrey: [112, 128, 144],
        snow: [255, 250, 250],
        springgreen: [0, 255, 127],
        steelblue: [70, 130, 180],
        tan: [210, 180, 140],
        teal: [0, 128, 128],
        thistle: [216, 191, 216],
        tomato: [255, 99, 71],
        turquoise: [64, 224, 208],
        violet: [238, 130, 238],
        wheat: [245, 222, 179],
        white: [255, 255, 255],
        whitesmoke: [245, 245, 245],
        yellow: [255, 255, 0],
        yellowgreen: [154, 205, 50],
      };
    },
  }),
  Jl = P({
    '../../node_modules/color-convert/conversions.js'(e, t) {
      var r = Zm(),
        o = {};
      for (let n of Object.keys(r)) o[r[n]] = n;
      var a = {
        rgb: { channels: 3, labels: 'rgb' },
        hsl: { channels: 3, labels: 'hsl' },
        hsv: { channels: 3, labels: 'hsv' },
        hwb: { channels: 3, labels: 'hwb' },
        cmyk: { channels: 4, labels: 'cmyk' },
        xyz: { channels: 3, labels: 'xyz' },
        lab: { channels: 3, labels: 'lab' },
        lch: { channels: 3, labels: 'lch' },
        hex: { channels: 1, labels: ['hex'] },
        keyword: { channels: 1, labels: ['keyword'] },
        ansi16: { channels: 1, labels: ['ansi16'] },
        ansi256: { channels: 1, labels: ['ansi256'] },
        hcg: { channels: 3, labels: ['h', 'c', 'g'] },
        apple: { channels: 3, labels: ['r16', 'g16', 'b16'] },
        gray: { channels: 1, labels: ['gray'] },
      };
      t.exports = a;
      for (let n of Object.keys(a)) {
        if (!('channels' in a[n])) throw new Error('missing channels property: ' + n);
        if (!('labels' in a[n])) throw new Error('missing channel labels property: ' + n);
        if (a[n].labels.length !== a[n].channels)
          throw new Error('channel and label counts mismatch: ' + n);
        let { channels: i, labels: l } = a[n];
        delete a[n].channels,
          delete a[n].labels,
          Object.defineProperty(a[n], 'channels', { value: i }),
          Object.defineProperty(a[n], 'labels', { value: l });
      }
      (a.rgb.hsl = function (n) {
        let i = n[0] / 255,
          l = n[1] / 255,
          s = n[2] / 255,
          u = Math.min(i, l, s),
          p = Math.max(i, l, s),
          d = p - u,
          f,
          m;
        p === u
          ? (f = 0)
          : i === p
            ? (f = (l - s) / d)
            : l === p
              ? (f = 2 + (s - i) / d)
              : s === p && (f = 4 + (i - l) / d),
          (f = Math.min(f * 60, 360)),
          f < 0 && (f += 360);
        let y = (u + p) / 2;
        return (
          p === u ? (m = 0) : y <= 0.5 ? (m = d / (p + u)) : (m = d / (2 - p - u)),
          [f, m * 100, y * 100]
        );
      }),
        (a.rgb.hsv = function (n) {
          let i,
            l,
            s,
            u,
            p,
            d = n[0] / 255,
            f = n[1] / 255,
            m = n[2] / 255,
            y = Math.max(d, f, m),
            g = y - Math.min(d, f, m),
            h = function (v) {
              return (y - v) / 6 / g + 1 / 2;
            };
          return (
            g === 0
              ? ((u = 0), (p = 0))
              : ((p = g / y),
                (i = h(d)),
                (l = h(f)),
                (s = h(m)),
                d === y
                  ? (u = s - l)
                  : f === y
                    ? (u = 1 / 3 + i - s)
                    : m === y && (u = 2 / 3 + l - i),
                u < 0 ? (u += 1) : u > 1 && (u -= 1)),
            [u * 360, p * 100, y * 100]
          );
        }),
        (a.rgb.hwb = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u = a.rgb.hsl(n)[0],
            p = (1 / 255) * Math.min(i, Math.min(l, s));
          return (s = 1 - (1 / 255) * Math.max(i, Math.max(l, s))), [u, p * 100, s * 100];
        }),
        (a.rgb.cmyk = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255,
            u = Math.min(1 - i, 1 - l, 1 - s),
            p = (1 - i - u) / (1 - u) || 0,
            d = (1 - l - u) / (1 - u) || 0,
            f = (1 - s - u) / (1 - u) || 0;
          return [p * 100, d * 100, f * 100, u * 100];
        });
      function c(n, i) {
        return (n[0] - i[0]) ** 2 + (n[1] - i[1]) ** 2 + (n[2] - i[2]) ** 2;
      }
      (a.rgb.keyword = function (n) {
        let i = o[n];
        if (i) return i;
        let l = 1 / 0,
          s;
        for (let u of Object.keys(r)) {
          let p = r[u],
            d = c(n, p);
          d < l && ((l = d), (s = u));
        }
        return s;
      }),
        (a.keyword.rgb = function (n) {
          return r[n];
        }),
        (a.rgb.xyz = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255;
          (i = i > 0.04045 ? ((i + 0.055) / 1.055) ** 2.4 : i / 12.92),
            (l = l > 0.04045 ? ((l + 0.055) / 1.055) ** 2.4 : l / 12.92),
            (s = s > 0.04045 ? ((s + 0.055) / 1.055) ** 2.4 : s / 12.92);
          let u = i * 0.4124 + l * 0.3576 + s * 0.1805,
            p = i * 0.2126 + l * 0.7152 + s * 0.0722,
            d = i * 0.0193 + l * 0.1192 + s * 0.9505;
          return [u * 100, p * 100, d * 100];
        }),
        (a.rgb.lab = function (n) {
          let i = a.rgb.xyz(n),
            l = i[0],
            s = i[1],
            u = i[2];
          (l /= 95.047),
            (s /= 100),
            (u /= 108.883),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116),
            (u = u > 0.008856 ? u ** (1 / 3) : 7.787 * u + 16 / 116);
          let p = 116 * s - 16,
            d = 500 * (l - s),
            f = 200 * (s - u);
          return [p, d, f];
        }),
        (a.hsl.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100,
            u,
            p,
            d;
          if (l === 0) return (d = s * 255), [d, d, d];
          s < 0.5 ? (u = s * (1 + l)) : (u = s + l - s * l);
          let f = 2 * s - u,
            m = [0, 0, 0];
          for (let y = 0; y < 3; y++)
            (p = i + (1 / 3) * -(y - 1)),
              p < 0 && p++,
              p > 1 && p--,
              6 * p < 1
                ? (d = f + (u - f) * 6 * p)
                : 2 * p < 1
                  ? (d = u)
                  : 3 * p < 2
                    ? (d = f + (u - f) * (2 / 3 - p) * 6)
                    : (d = f),
              (m[y] = d * 255);
          return m;
        }),
        (a.hsl.hsv = function (n) {
          let i = n[0],
            l = n[1] / 100,
            s = n[2] / 100,
            u = l,
            p = Math.max(s, 0.01);
          (s *= 2), (l *= s <= 1 ? s : 2 - s), (u *= p <= 1 ? p : 2 - p);
          let d = (s + l) / 2,
            f = s === 0 ? (2 * u) / (p + u) : (2 * l) / (s + l);
          return [i, f * 100, d * 100];
        }),
        (a.hsv.rgb = function (n) {
          let i = n[0] / 60,
            l = n[1] / 100,
            s = n[2] / 100,
            u = Math.floor(i) % 6,
            p = i - Math.floor(i),
            d = 255 * s * (1 - l),
            f = 255 * s * (1 - l * p),
            m = 255 * s * (1 - l * (1 - p));
          switch (((s *= 255), u)) {
            case 0:
              return [s, m, d];
            case 1:
              return [f, s, d];
            case 2:
              return [d, s, m];
            case 3:
              return [d, f, s];
            case 4:
              return [m, d, s];
            case 5:
              return [s, d, f];
          }
        }),
        (a.hsv.hsl = function (n) {
          let i = n[0],
            l = n[1] / 100,
            s = n[2] / 100,
            u = Math.max(s, 0.01),
            p,
            d;
          d = (2 - l) * s;
          let f = (2 - l) * u;
          return (
            (p = l * u), (p /= f <= 1 ? f : 2 - f), (p = p || 0), (d /= 2), [i, p * 100, d * 100]
          );
        }),
        (a.hwb.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100,
            u = l + s,
            p;
          u > 1 && ((l /= u), (s /= u));
          let d = Math.floor(6 * i),
            f = 1 - s;
          (p = 6 * i - d), d & 1 && (p = 1 - p);
          let m = l + p * (f - l),
            y,
            g,
            h;
          switch (d) {
            default:
            case 6:
            case 0:
              (y = f), (g = m), (h = l);
              break;
            case 1:
              (y = m), (g = f), (h = l);
              break;
            case 2:
              (y = l), (g = f), (h = m);
              break;
            case 3:
              (y = l), (g = m), (h = f);
              break;
            case 4:
              (y = m), (g = l), (h = f);
              break;
            case 5:
              (y = f), (g = l), (h = m);
              break;
          }
          return [y * 255, g * 255, h * 255];
        }),
        (a.cmyk.rgb = function (n) {
          let i = n[0] / 100,
            l = n[1] / 100,
            s = n[2] / 100,
            u = n[3] / 100,
            p = 1 - Math.min(1, i * (1 - u) + u),
            d = 1 - Math.min(1, l * (1 - u) + u),
            f = 1 - Math.min(1, s * (1 - u) + u);
          return [p * 255, d * 255, f * 255];
        }),
        (a.xyz.rgb = function (n) {
          let i = n[0] / 100,
            l = n[1] / 100,
            s = n[2] / 100,
            u,
            p,
            d;
          return (
            (u = i * 3.2406 + l * -1.5372 + s * -0.4986),
            (p = i * -0.9689 + l * 1.8758 + s * 0.0415),
            (d = i * 0.0557 + l * -0.204 + s * 1.057),
            (u = u > 0.0031308 ? 1.055 * u ** (1 / 2.4) - 0.055 : u * 12.92),
            (p = p > 0.0031308 ? 1.055 * p ** (1 / 2.4) - 0.055 : p * 12.92),
            (d = d > 0.0031308 ? 1.055 * d ** (1 / 2.4) - 0.055 : d * 12.92),
            (u = Math.min(Math.max(0, u), 1)),
            (p = Math.min(Math.max(0, p), 1)),
            (d = Math.min(Math.max(0, d), 1)),
            [u * 255, p * 255, d * 255]
          );
        }),
        (a.xyz.lab = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2];
          (i /= 95.047),
            (l /= 100),
            (s /= 108.883),
            (i = i > 0.008856 ? i ** (1 / 3) : 7.787 * i + 16 / 116),
            (l = l > 0.008856 ? l ** (1 / 3) : 7.787 * l + 16 / 116),
            (s = s > 0.008856 ? s ** (1 / 3) : 7.787 * s + 16 / 116);
          let u = 116 * l - 16,
            p = 500 * (i - l),
            d = 200 * (l - s);
          return [u, p, d];
        }),
        (a.lab.xyz = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u,
            p,
            d;
          (p = (i + 16) / 116), (u = l / 500 + p), (d = p - s / 200);
          let f = p ** 3,
            m = u ** 3,
            y = d ** 3;
          return (
            (p = f > 0.008856 ? f : (p - 16 / 116) / 7.787),
            (u = m > 0.008856 ? m : (u - 16 / 116) / 7.787),
            (d = y > 0.008856 ? y : (d - 16 / 116) / 7.787),
            (u *= 95.047),
            (p *= 100),
            (d *= 108.883),
            [u, p, d]
          );
        }),
        (a.lab.lch = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2],
            u;
          (u = (Math.atan2(s, l) * 360) / 2 / Math.PI), u < 0 && (u += 360);
          let p = Math.sqrt(l * l + s * s);
          return [i, p, u];
        }),
        (a.lch.lab = function (n) {
          let i = n[0],
            l = n[1],
            s = (n[2] / 360) * 2 * Math.PI,
            u = l * Math.cos(s),
            p = l * Math.sin(s);
          return [i, u, p];
        }),
        (a.rgb.ansi16 = function (n, i = null) {
          let [l, s, u] = n,
            p = i === null ? a.rgb.hsv(n)[2] : i;
          if (((p = Math.round(p / 50)), p === 0)) return 30;
          let d =
            30 + ((Math.round(u / 255) << 2) | (Math.round(s / 255) << 1) | Math.round(l / 255));
          return p === 2 && (d += 60), d;
        }),
        (a.hsv.ansi16 = function (n) {
          return a.rgb.ansi16(a.hsv.rgb(n), n[2]);
        }),
        (a.rgb.ansi256 = function (n) {
          let i = n[0],
            l = n[1],
            s = n[2];
          return i === l && l === s
            ? i < 8
              ? 16
              : i > 248
                ? 231
                : Math.round(((i - 8) / 247) * 24) + 232
            : 16 +
                36 * Math.round((i / 255) * 5) +
                6 * Math.round((l / 255) * 5) +
                Math.round((s / 255) * 5);
        }),
        (a.ansi16.rgb = function (n) {
          let i = n % 10;
          if (i === 0 || i === 7) return n > 50 && (i += 3.5), (i = (i / 10.5) * 255), [i, i, i];
          let l = (~~(n > 50) + 1) * 0.5,
            s = (i & 1) * l * 255,
            u = ((i >> 1) & 1) * l * 255,
            p = ((i >> 2) & 1) * l * 255;
          return [s, u, p];
        }),
        (a.ansi256.rgb = function (n) {
          if (n >= 232) {
            let p = (n - 232) * 10 + 8;
            return [p, p, p];
          }
          n -= 16;
          let i,
            l = (Math.floor(n / 36) / 5) * 255,
            s = (Math.floor((i = n % 36) / 6) / 5) * 255,
            u = ((i % 6) / 5) * 255;
          return [l, s, u];
        }),
        (a.rgb.hex = function (n) {
          let i = (
            ((Math.round(n[0]) & 255) << 16) +
            ((Math.round(n[1]) & 255) << 8) +
            (Math.round(n[2]) & 255)
          )
            .toString(16)
            .toUpperCase();
          return '000000'.substring(i.length) + i;
        }),
        (a.hex.rgb = function (n) {
          let i = n.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!i) return [0, 0, 0];
          let l = i[0];
          i[0].length === 3 &&
            (l = l
              .split('')
              .map((f) => f + f)
              .join(''));
          let s = parseInt(l, 16),
            u = (s >> 16) & 255,
            p = (s >> 8) & 255,
            d = s & 255;
          return [u, p, d];
        }),
        (a.rgb.hcg = function (n) {
          let i = n[0] / 255,
            l = n[1] / 255,
            s = n[2] / 255,
            u = Math.max(Math.max(i, l), s),
            p = Math.min(Math.min(i, l), s),
            d = u - p,
            f,
            m;
          return (
            d < 1 ? (f = p / (1 - d)) : (f = 0),
            d <= 0
              ? (m = 0)
              : u === i
                ? (m = ((l - s) / d) % 6)
                : u === l
                  ? (m = 2 + (s - i) / d)
                  : (m = 4 + (i - l) / d),
            (m /= 6),
            (m %= 1),
            [m * 360, d * 100, f * 100]
          );
        }),
        (a.hsl.hcg = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = l < 0.5 ? 2 * i * l : 2 * i * (1 - l),
            u = 0;
          return s < 1 && (u = (l - 0.5 * s) / (1 - s)), [n[0], s * 100, u * 100];
        }),
        (a.hsv.hcg = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i * l,
            u = 0;
          return s < 1 && (u = (l - s) / (1 - s)), [n[0], s * 100, u * 100];
        }),
        (a.hcg.rgb = function (n) {
          let i = n[0] / 360,
            l = n[1] / 100,
            s = n[2] / 100;
          if (l === 0) return [s * 255, s * 255, s * 255];
          let u = [0, 0, 0],
            p = (i % 1) * 6,
            d = p % 1,
            f = 1 - d,
            m = 0;
          switch (Math.floor(p)) {
            case 0:
              (u[0] = 1), (u[1] = d), (u[2] = 0);
              break;
            case 1:
              (u[0] = f), (u[1] = 1), (u[2] = 0);
              break;
            case 2:
              (u[0] = 0), (u[1] = 1), (u[2] = d);
              break;
            case 3:
              (u[0] = 0), (u[1] = f), (u[2] = 1);
              break;
            case 4:
              (u[0] = d), (u[1] = 0), (u[2] = 1);
              break;
            default:
              (u[0] = 1), (u[1] = 0), (u[2] = f);
          }
          return (
            (m = (1 - l) * s), [(l * u[0] + m) * 255, (l * u[1] + m) * 255, (l * u[2] + m) * 255]
          );
        }),
        (a.hcg.hsv = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i + l * (1 - i),
            u = 0;
          return s > 0 && (u = i / s), [n[0], u * 100, s * 100];
        }),
        (a.hcg.hsl = function (n) {
          let i = n[1] / 100,
            l = (n[2] / 100) * (1 - i) + 0.5 * i,
            s = 0;
          return (
            l > 0 && l < 0.5 ? (s = i / (2 * l)) : l >= 0.5 && l < 1 && (s = i / (2 * (1 - l))),
            [n[0], s * 100, l * 100]
          );
        }),
        (a.hcg.hwb = function (n) {
          let i = n[1] / 100,
            l = n[2] / 100,
            s = i + l * (1 - i);
          return [n[0], (s - i) * 100, (1 - s) * 100];
        }),
        (a.hwb.hcg = function (n) {
          let i = n[1] / 100,
            l = 1 - n[2] / 100,
            s = l - i,
            u = 0;
          return s < 1 && (u = (l - s) / (1 - s)), [n[0], s * 100, u * 100];
        }),
        (a.apple.rgb = function (n) {
          return [(n[0] / 65535) * 255, (n[1] / 65535) * 255, (n[2] / 65535) * 255];
        }),
        (a.rgb.apple = function (n) {
          return [(n[0] / 255) * 65535, (n[1] / 255) * 65535, (n[2] / 255) * 65535];
        }),
        (a.gray.rgb = function (n) {
          return [(n[0] / 100) * 255, (n[0] / 100) * 255, (n[0] / 100) * 255];
        }),
        (a.gray.hsl = function (n) {
          return [0, 0, n[0]];
        }),
        (a.gray.hsv = a.gray.hsl),
        (a.gray.hwb = function (n) {
          return [0, 100, n[0]];
        }),
        (a.gray.cmyk = function (n) {
          return [0, 0, 0, n[0]];
        }),
        (a.gray.lab = function (n) {
          return [n[0], 0, 0];
        }),
        (a.gray.hex = function (n) {
          let i = Math.round((n[0] / 100) * 255) & 255,
            l = ((i << 16) + (i << 8) + i).toString(16).toUpperCase();
          return '000000'.substring(l.length) + l;
        }),
        (a.rgb.gray = function (n) {
          return [((n[0] + n[1] + n[2]) / 3 / 255) * 100];
        });
    },
  }),
  ey = P({
    '../../node_modules/color-convert/route.js'(e, t) {
      var r = Jl();
      function o() {
        let i = {},
          l = Object.keys(r);
        for (let s = l.length, u = 0; u < s; u++) i[l[u]] = { distance: -1, parent: null };
        return i;
      }
      function a(i) {
        let l = o(),
          s = [i];
        for (l[i].distance = 0; s.length; ) {
          let u = s.pop(),
            p = Object.keys(r[u]);
          for (let d = p.length, f = 0; f < d; f++) {
            let m = p[f],
              y = l[m];
            y.distance === -1 && ((y.distance = l[u].distance + 1), (y.parent = u), s.unshift(m));
          }
        }
        return l;
      }
      function c(i, l) {
        return function (s) {
          return l(i(s));
        };
      }
      function n(i, l) {
        let s = [l[i].parent, i],
          u = r[l[i].parent][i],
          p = l[i].parent;
        for (; l[p].parent; )
          s.unshift(l[p].parent), (u = c(r[l[p].parent][p], u)), (p = l[p].parent);
        return (u.conversion = s), u;
      }
      t.exports = function (i) {
        let l = a(i),
          s = {},
          u = Object.keys(l);
        for (let p = u.length, d = 0; d < p; d++) {
          let f = u[d];
          l[f].parent !== null && (s[f] = n(f, l));
        }
        return s;
      };
    },
  }),
  ty = P({
    '../../node_modules/color-convert/index.js'(e, t) {
      var r = Jl(),
        o = ey(),
        a = {},
        c = Object.keys(r);
      function n(l) {
        let s = function (...u) {
          let p = u[0];
          return p == null ? p : (p.length > 1 && (u = p), l(u));
        };
        return 'conversion' in l && (s.conversion = l.conversion), s;
      }
      function i(l) {
        let s = function (...u) {
          let p = u[0];
          if (p == null) return p;
          p.length > 1 && (u = p);
          let d = l(u);
          if (typeof d == 'object')
            for (let f = d.length, m = 0; m < f; m++) d[m] = Math.round(d[m]);
          return d;
        };
        return 'conversion' in l && (s.conversion = l.conversion), s;
      }
      c.forEach((l) => {
        (a[l] = {}),
          Object.defineProperty(a[l], 'channels', { value: r[l].channels }),
          Object.defineProperty(a[l], 'labels', { value: r[l].labels });
        let s = o(l);
        Object.keys(s).forEach((u) => {
          let p = s[u];
          (a[l][u] = i(p)), (a[l][u].raw = n(p));
        });
      }),
        (t.exports = a);
    },
  }),
  ry = P({
    '../../node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (p, d) =>
          (...f) =>
            `\x1B[${p(...f) + d}m`,
        o =
          (p, d) =>
          (...f) => {
            let m = p(...f);
            return `\x1B[${38 + d};5;${m}m`;
          },
        a =
          (p, d) =>
          (...f) => {
            let m = p(...f);
            return `\x1B[${38 + d};2;${m[0]};${m[1]};${m[2]}m`;
          },
        c = (p) => p,
        n = (p, d, f) => [p, d, f],
        i = (p, d, f) => {
          Object.defineProperty(p, d, {
            get: () => {
              let m = f();
              return Object.defineProperty(p, d, { value: m, enumerable: !0, configurable: !0 }), m;
            },
            enumerable: !0,
            configurable: !0,
          });
        },
        l,
        s = (p, d, f, m) => {
          l === void 0 && (l = ty());
          let y = m ? 10 : 0,
            g = {};
          for (let [h, v] of Object.entries(l)) {
            let S = h === 'ansi16' ? 'ansi' : h;
            h === d ? (g[S] = p(f, y)) : typeof v == 'object' && (g[S] = p(v[d], y));
          }
          return g;
        };
      function u() {
        let p = new Map(),
          d = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (d.color.gray = d.color.blackBright),
          (d.bgColor.bgGray = d.bgColor.bgBlackBright),
          (d.color.grey = d.color.blackBright),
          (d.bgColor.bgGrey = d.bgColor.bgBlackBright);
        for (let [f, m] of Object.entries(d)) {
          for (let [y, g] of Object.entries(m))
            (d[y] = { open: `\x1B[${g[0]}m`, close: `\x1B[${g[1]}m` }),
              (m[y] = d[y]),
              p.set(g[0], g[1]);
          Object.defineProperty(d, f, { value: m, enumerable: !1 });
        }
        return (
          Object.defineProperty(d, 'codes', { value: p, enumerable: !1 }),
          (d.color.close = '\x1B[39m'),
          (d.bgColor.close = '\x1B[49m'),
          i(d.color, 'ansi', () => s(r, 'ansi16', c, !1)),
          i(d.color, 'ansi256', () => s(o, 'ansi256', c, !1)),
          i(d.color, 'ansi16m', () => s(a, 'rgb', n, !1)),
          i(d.bgColor, 'ansi', () => s(r, 'ansi16', c, !0)),
          i(d.bgColor, 'ansi256', () => s(o, 'ansi256', c, !0)),
          i(d.bgColor, 'ansi16m', () => s(a, 'rgb', n, !0)),
          d
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: u });
    },
  }),
  ny = P({
    '../../node_modules/supports-color/browser.js'(e, t) {
      t.exports = { stdout: !1, stderr: !1 };
    },
  }),
  oy = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/util.js'(e, t) {
      var r = (a, c, n) => {
          let i = a.indexOf(c);
          if (i === -1) return a;
          let l = c.length,
            s = 0,
            u = '';
          do (u += a.substr(s, i - s) + c + n), (s = i + l), (i = a.indexOf(c, s));
          while (i !== -1);
          return (u += a.substr(s)), u;
        },
        o = (a, c, n, i) => {
          let l = 0,
            s = '';
          do {
            let u = a[i - 1] === '\r';
            (s +=
              a.substr(l, (u ? i - 1 : i) - l) +
              c +
              (u
                ? `\r
`
                : `
`) +
              n),
              (l = i + 1),
              (i = a.indexOf(
                `
`,
                l,
              ));
          } while (i !== -1);
          return (s += a.substr(l)), s;
        };
      t.exports = { stringReplaceAll: r, stringEncaseCRLFWithFirstIndex: o };
    },
  }),
  ay = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/templates.js'(e, t) {
      var r =
          /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi,
        o = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g,
        a = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/,
        c = /\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.)|([^\\])/gi,
        n = new Map([
          [
            'n',
            `
`,
          ],
          ['r', '\r'],
          ['t', '	'],
          ['b', '\b'],
          ['f', '\f'],
          ['v', '\v'],
          ['0', '\0'],
          ['\\', '\\'],
          ['e', '\x1B'],
          ['a', '\x07'],
        ]);
      function i(p) {
        let d = p[0] === 'u',
          f = p[1] === '{';
        return (d && !f && p.length === 5) || (p[0] === 'x' && p.length === 3)
          ? String.fromCharCode(parseInt(p.slice(1), 16))
          : d && f
            ? String.fromCodePoint(parseInt(p.slice(2, -1), 16))
            : n.get(p) || p;
      }
      function l(p, d) {
        let f = [],
          m = d.trim().split(/\s*,\s*/g),
          y;
        for (let g of m) {
          let h = Number(g);
          if (!Number.isNaN(h)) f.push(h);
          else if ((y = g.match(a))) f.push(y[2].replace(c, (v, S, E) => (S ? i(S) : E)));
          else throw new Error(`Invalid Chalk template style argument: ${g} (in style '${p}')`);
        }
        return f;
      }
      function s(p) {
        o.lastIndex = 0;
        let d = [],
          f;
        for (; (f = o.exec(p)) !== null; ) {
          let m = f[1];
          if (f[2]) {
            let y = l(m, f[2]);
            d.push([m].concat(y));
          } else d.push([m]);
        }
        return d;
      }
      function u(p, d) {
        let f = {};
        for (let y of d) for (let g of y.styles) f[g[0]] = y.inverse ? null : g.slice(1);
        let m = p;
        for (let [y, g] of Object.entries(f))
          if (Array.isArray(g)) {
            if (!(y in m)) throw new Error(`Unknown Chalk style: ${y}`);
            m = g.length > 0 ? m[y](...g) : m[y];
          }
        return m;
      }
      t.exports = (p, d) => {
        let f = [],
          m = [],
          y = [];
        if (
          (d.replace(r, (g, h, v, S, E, C) => {
            if (h) y.push(i(h));
            else if (S) {
              let A = y.join('');
              (y = []),
                m.push(f.length === 0 ? A : u(p, f)(A)),
                f.push({ inverse: v, styles: s(S) });
            } else if (E) {
              if (f.length === 0) throw new Error('Found extraneous } in Chalk template literal');
              m.push(u(p, f)(y.join(''))), (y = []), f.pop();
            } else y.push(C);
          }),
          m.push(y.join('')),
          f.length > 0)
        ) {
          let g = `Chalk template literal is missing ${f.length} closing bracket${
            f.length === 1 ? '' : 's'
          } (\`}\`)`;
          throw new Error(g);
        }
        return m.join('');
      };
    },
  }),
  Xl = P({
    'node_modules/@testing-library/jest-dom/node_modules/chalk/source/index.js'(e, t) {
      var r = ry(),
        { stdout: o, stderr: a } = ny(),
        { stringReplaceAll: c, stringEncaseCRLFWithFirstIndex: n } = oy(),
        i = ['ansi', 'ansi', 'ansi256', 'ansi16m'],
        l = Object.create(null),
        s = (C, A = {}) => {
          if (A.level > 3 || A.level < 0)
            throw new Error('The `level` option should be an integer from 0 to 3');
          let R = o ? o.level : 0;
          C.level = A.level === void 0 ? R : A.level;
        },
        u = class {
          constructor(C) {
            return p(C);
          }
        },
        p = (C) => {
          let A = {};
          return (
            s(A, C),
            (A.template = (...R) => S(A.template, ...R)),
            Object.setPrototypeOf(A, d.prototype),
            Object.setPrototypeOf(A.template, A),
            (A.template.constructor = () => {
              throw new Error(
                '`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.',
              );
            }),
            (A.template.Instance = u),
            A.template
          );
        };
      function d(C) {
        return p(C);
      }
      for (let [C, A] of Object.entries(r))
        l[C] = {
          get() {
            let R = g(this, y(A.open, A.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, C, { value: R }), R;
          },
        };
      l.visible = {
        get() {
          let C = g(this, this._styler, !0);
          return Object.defineProperty(this, 'visible', { value: C }), C;
        },
      };
      var f = ['rgb', 'hex', 'keyword', 'hsl', 'hsv', 'hwb', 'ansi', 'ansi256'];
      for (let C of f)
        l[C] = {
          get() {
            let { level: A } = this;
            return function (...R) {
              let _ = y(r.color[i[A]][C](...R), r.color.close, this._styler);
              return g(this, _, this._isEmpty);
            };
          },
        };
      for (let C of f) {
        let A = 'bg' + C[0].toUpperCase() + C.slice(1);
        l[A] = {
          get() {
            let { level: R } = this;
            return function (..._) {
              let O = y(r.bgColor[i[R]][C](..._), r.bgColor.close, this._styler);
              return g(this, O, this._isEmpty);
            };
          },
        };
      }
      var m = Object.defineProperties(() => {}, {
          ...l,
          level: {
            enumerable: !0,
            get() {
              return this._generator.level;
            },
            set(C) {
              this._generator.level = C;
            },
          },
        }),
        y = (C, A, R) => {
          let _, O;
          return (
            R === void 0 ? ((_ = C), (O = A)) : ((_ = R.openAll + C), (O = A + R.closeAll)),
            { open: C, close: A, openAll: _, closeAll: O, parent: R }
          );
        },
        g = (C, A, R) => {
          let _ = (...O) => h(_, O.length === 1 ? '' + O[0] : O.join(' '));
          return (_.__proto__ = m), (_._generator = C), (_._styler = A), (_._isEmpty = R), _;
        },
        h = (C, A) => {
          if (C.level <= 0 || !A) return C._isEmpty ? '' : A;
          let R = C._styler;
          if (R === void 0) return A;
          let { openAll: _, closeAll: O } = R;
          if (A.indexOf('\x1B') !== -1)
            for (; R !== void 0; ) (A = c(A, R.close, R.open)), (R = R.parent);
          let x = A.indexOf(`
`);
          return x !== -1 && (A = n(A, O, _, x)), _ + A + O;
        },
        v,
        S = (C, ...A) => {
          let [R] = A;
          if (!Array.isArray(R)) return A.join(' ');
          let _ = A.slice(1),
            O = [R.raw[0]];
          for (let x = 1; x < R.length; x++)
            O.push(String(_[x - 1]).replace(/[{}\\]/g, '\\$&'), String(R.raw[x]));
          return v === void 0 && (v = ay()), v(C, O.join(''));
        };
      Object.defineProperties(d.prototype, l);
      var E = d();
      (E.supportsColor = o),
        (E.stderr = d({ level: a ? a.level : 0 })),
        (E.stderr.supportsColor = a),
        (E.Level = {
          None: 0,
          Basic: 1,
          Ansi256: 2,
          TrueColor: 3,
          0: 'None',
          1: 'Basic',
          2: 'Ansi256',
          3: 'TrueColor',
        }),
        (t.exports = E);
    },
  }),
  Ql = P({
    '../../node_modules/lodash/isEqualWith.js'(e, t) {
      var r = Kl();
      function o(a, c, n) {
        n = typeof n == 'function' ? n : void 0;
        var i = n ? n(a, c) : void 0;
        return i === void 0 ? r(a, c, void 0, n) : !!i;
      }
      t.exports = o;
    },
  }),
  iy = P({
    '../../node_modules/lodash/_baseFindIndex.js'(e, t) {
      function r(o, a, c, n) {
        for (var i = o.length, l = c + (n ? 1 : -1); n ? l-- : ++l < i; )
          if (a(o[l], l, o)) return l;
        return -1;
      }
      t.exports = r;
    },
  }),
  ly = P({
    '../../node_modules/lodash/_baseIsNaN.js'(e, t) {
      function r(o) {
        return o !== o;
      }
      t.exports = r;
    },
  }),
  sy = P({
    '../../node_modules/lodash/_strictIndexOf.js'(e, t) {
      function r(o, a, c) {
        for (var n = c - 1, i = o.length; ++n < i; ) if (o[n] === a) return n;
        return -1;
      }
      t.exports = r;
    },
  }),
  uy = P({
    '../../node_modules/lodash/_baseIndexOf.js'(e, t) {
      var r = iy(),
        o = ly(),
        a = sy();
      function c(n, i, l) {
        return i === i ? a(n, i, l) : r(n, o, l);
      }
      t.exports = c;
    },
  }),
  cy = P({
    '../../node_modules/lodash/_arrayIncludes.js'(e, t) {
      var r = uy();
      function o(a, c) {
        var n = a == null ? 0 : a.length;
        return !!n && r(a, c, 0) > -1;
      }
      t.exports = o;
    },
  }),
  dy = P({
    '../../node_modules/lodash/_arrayIncludesWith.js'(e, t) {
      function r(o, a, c) {
        for (var n = -1, i = o == null ? 0 : o.length; ++n < i; ) if (c(a, o[n])) return !0;
        return !1;
      }
      t.exports = r;
    },
  }),
  py = P({
    '../../node_modules/lodash/noop.js'(e, t) {
      function r() {}
      t.exports = r;
    },
  }),
  fy = P({
    '../../node_modules/lodash/_createSet.js'(e, t) {
      var r = Gl(),
        o = py(),
        a = Wo(),
        c = 1 / 0,
        n =
          r && 1 / a(new r([, -0]))[1] == c
            ? function (i) {
                return new r(i);
              }
            : o;
      t.exports = n;
    },
  }),
  my = P({
    '../../node_modules/lodash/_baseUniq.js'(e, t) {
      var r = Fl(),
        o = cy(),
        a = dy(),
        c = Ul(),
        n = fy(),
        i = Wo(),
        l = 200;
      function s(u, p, d) {
        var f = -1,
          m = o,
          y = u.length,
          g = !0,
          h = [],
          v = h;
        if (d) (g = !1), (m = a);
        else if (y >= l) {
          var S = p ? null : n(u);
          if (S) return i(S);
          (g = !1), (m = c), (v = new r());
        } else v = p ? [] : h;
        e: for (; ++f < y; ) {
          var E = u[f],
            C = p ? p(E) : E;
          if (((E = d || E !== 0 ? E : 0), g && C === C)) {
            for (var A = v.length; A--; ) if (v[A] === C) continue e;
            p && v.push(C), h.push(E);
          } else m(v, C, d) || (v !== h && v.push(C), h.push(E));
        }
        return h;
      }
      t.exports = s;
    },
  }),
  Zl = P({
    '../../node_modules/lodash/uniq.js'(e, t) {
      var r = my();
      function o(a) {
        return a && a.length ? r(a) : [];
      }
      t.exports = o;
    },
  }),
  es = P({
    '../../node_modules/css.escape/css.escape.js'(e, t) {
      (function (r, o) {
        typeof e == 'object'
          ? (t.exports = o(r))
          : typeof define == 'function' && define.amd
            ? define([], o.bind(r, r))
            : o(r);
      })(typeof global < 'u' ? global : e, function (r) {
        if (r.CSS && r.CSS.escape) return r.CSS.escape;
        var o = function (a) {
          if (arguments.length == 0) throw new TypeError('`CSS.escape` requires an argument.');
          for (var c = String(a), n = c.length, i = -1, l, s = '', u = c.charCodeAt(0); ++i < n; ) {
            if (((l = c.charCodeAt(i)), l == 0)) {
              s += '�';
              continue;
            }
            if (
              (l >= 1 && l <= 31) ||
              l == 127 ||
              (i == 0 && l >= 48 && l <= 57) ||
              (i == 1 && l >= 48 && l <= 57 && u == 45)
            ) {
              s += '\\' + l.toString(16) + ' ';
              continue;
            }
            if (i == 0 && n == 1 && l == 45) {
              s += '\\' + c.charAt(i);
              continue;
            }
            if (
              l >= 128 ||
              l == 45 ||
              l == 95 ||
              (l >= 48 && l <= 57) ||
              (l >= 65 && l <= 90) ||
              (l >= 97 && l <= 122)
            ) {
              s += c.charAt(i);
              continue;
            }
            s += '\\' + c.charAt(i);
          }
          return s;
        };
        return r.CSS || (r.CSS = {}), (r.CSS.escape = o), o;
      });
    },
  }),
  yy = P({
    '../../node_modules/aria-query/lib/util/iteratorProxy.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      function t() {
        var o = this,
          a = 0,
          c = {
            '@@iterator': function () {
              return c;
            },
            next: function () {
              if (a < o.length) {
                var n = o[a];
                return (a = a + 1), { done: !1, value: n };
              } else return { done: !0 };
            },
          };
        return c;
      }
      var r = t;
      e.default = r;
    },
  }),
  kr = P({
    '../../node_modules/aria-query/lib/util/iterationDecorator.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = a);
      var t = r(yy());
      function r(c) {
        return c && c.__esModule ? c : { default: c };
      }
      function o(c) {
        '@babel/helpers - typeof';
        return (
          (o =
            typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
              ? function (n) {
                  return typeof n;
                }
              : function (n) {
                  return n &&
                    typeof Symbol == 'function' &&
                    n.constructor === Symbol &&
                    n !== Symbol.prototype
                    ? 'symbol'
                    : typeof n;
                }),
          o(c)
        );
      }
      function a(c, n) {
        return (
          typeof Symbol == 'function' &&
            o(Symbol.iterator) === 'symbol' &&
            Object.defineProperty(c, Symbol.iterator, { value: t.default.bind(n) }),
          c
        );
      }
    },
  }),
  hy = P({
    '../../node_modules/aria-query/lib/ariaPropsMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = r(kr());
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      function o(f, m) {
        return n(f) || c(f, m) || l(f, m) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function c(f, m) {
        var y = f == null ? null : (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (y != null) {
          var g = [],
            h = !0,
            v = !1,
            S,
            E;
          try {
            for (
              y = y.call(f);
              !(h = (S = y.next()).done) && (g.push(S.value), !(m && g.length === m));
              h = !0
            );
          } catch (C) {
            (v = !0), (E = C);
          } finally {
            try {
              !h && y.return != null && y.return();
            } finally {
              if (v) throw E;
            }
          }
          return g;
        }
      }
      function n(f) {
        if (Array.isArray(f)) return f;
      }
      function i(f, m) {
        var y = (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (!y) {
          if (Array.isArray(f) || (y = l(f)) || (m && f && typeof f.length == 'number')) {
            y && (f = y);
            var g = 0,
              h = function () {};
            return {
              s: h,
              n: function () {
                return g >= f.length ? { done: !0 } : { done: !1, value: f[g++] };
              },
              e: function (C) {
                throw C;
              },
              f: h,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var v = !0,
          S = !1,
          E;
        return {
          s: function () {
            y = y.call(f);
          },
          n: function () {
            var C = y.next();
            return (v = C.done), C;
          },
          e: function (C) {
            (S = !0), (E = C);
          },
          f: function () {
            try {
              !v && y.return != null && y.return();
            } finally {
              if (S) throw E;
            }
          },
        };
      }
      function l(f, m) {
        if (f) {
          if (typeof f == 'string') return s(f, m);
          var y = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (y === 'Object' && f.constructor && (y = f.constructor.name),
            y === 'Map' || y === 'Set')
          )
            return Array.from(f);
          if (y === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
            return s(f, m);
        }
      }
      function s(f, m) {
        (m == null || m > f.length) && (m = f.length);
        for (var y = 0, g = new Array(m); y < m; y++) g[y] = f[y];
        return g;
      }
      var u = [
          ['aria-activedescendant', { type: 'id' }],
          ['aria-atomic', { type: 'boolean' }],
          ['aria-autocomplete', { type: 'token', values: ['inline', 'list', 'both', 'none'] }],
          ['aria-busy', { type: 'boolean' }],
          ['aria-checked', { type: 'tristate' }],
          ['aria-colcount', { type: 'integer' }],
          ['aria-colindex', { type: 'integer' }],
          ['aria-colspan', { type: 'integer' }],
          ['aria-controls', { type: 'idlist' }],
          [
            'aria-current',
            { type: 'token', values: ['page', 'step', 'location', 'date', 'time', !0, !1] },
          ],
          ['aria-describedby', { type: 'idlist' }],
          ['aria-details', { type: 'id' }],
          ['aria-disabled', { type: 'boolean' }],
          [
            'aria-dropeffect',
            { type: 'tokenlist', values: ['copy', 'execute', 'link', 'move', 'none', 'popup'] },
          ],
          ['aria-errormessage', { type: 'id' }],
          ['aria-expanded', { type: 'boolean', allowundefined: !0 }],
          ['aria-flowto', { type: 'idlist' }],
          ['aria-grabbed', { type: 'boolean', allowundefined: !0 }],
          [
            'aria-haspopup',
            { type: 'token', values: [!1, !0, 'menu', 'listbox', 'tree', 'grid', 'dialog'] },
          ],
          ['aria-hidden', { type: 'boolean', allowundefined: !0 }],
          ['aria-invalid', { type: 'token', values: ['grammar', !1, 'spelling', !0] }],
          ['aria-keyshortcuts', { type: 'string' }],
          ['aria-label', { type: 'string' }],
          ['aria-labelledby', { type: 'idlist' }],
          ['aria-level', { type: 'integer' }],
          ['aria-live', { type: 'token', values: ['assertive', 'off', 'polite'] }],
          ['aria-modal', { type: 'boolean' }],
          ['aria-multiline', { type: 'boolean' }],
          ['aria-multiselectable', { type: 'boolean' }],
          ['aria-orientation', { type: 'token', values: ['vertical', 'undefined', 'horizontal'] }],
          ['aria-owns', { type: 'idlist' }],
          ['aria-placeholder', { type: 'string' }],
          ['aria-posinset', { type: 'integer' }],
          ['aria-pressed', { type: 'tristate' }],
          ['aria-readonly', { type: 'boolean' }],
          [
            'aria-relevant',
            { type: 'tokenlist', values: ['additions', 'all', 'removals', 'text'] },
          ],
          ['aria-required', { type: 'boolean' }],
          ['aria-roledescription', { type: 'string' }],
          ['aria-rowcount', { type: 'integer' }],
          ['aria-rowindex', { type: 'integer' }],
          ['aria-rowspan', { type: 'integer' }],
          ['aria-selected', { type: 'boolean', allowundefined: !0 }],
          ['aria-setsize', { type: 'integer' }],
          ['aria-sort', { type: 'token', values: ['ascending', 'descending', 'none', 'other'] }],
          ['aria-valuemax', { type: 'number' }],
          ['aria-valuemin', { type: 'number' }],
          ['aria-valuenow', { type: 'number' }],
          ['aria-valuetext', { type: 'string' }],
        ],
        p = {
          entries: function () {
            return u;
          },
          forEach: function (f) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              y = i(u),
              g;
            try {
              for (y.s(); !(g = y.n()).done; ) {
                var h = o(g.value, 2),
                  v = h[0],
                  S = h[1];
                f.call(m, S, v, u);
              }
            } catch (E) {
              y.e(E);
            } finally {
              y.f();
            }
          },
          get: function (f) {
            var m = u.find(function (y) {
              return y[0] === f;
            });
            return m && m[1];
          },
          has: function (f) {
            return !!p.get(f);
          },
          keys: function () {
            return u.map(function (f) {
              var m = o(f, 1),
                y = m[0];
              return y;
            });
          },
          values: function () {
            return u.map(function (f) {
              var m = o(f, 2),
                y = m[1];
              return y;
            });
          },
        },
        d = (0, t.default)(p, p.entries());
      e.default = d;
    },
  }),
  by = P({
    '../../node_modules/aria-query/lib/domMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = r(kr());
      function r(f) {
        return f && f.__esModule ? f : { default: f };
      }
      function o(f, m) {
        return n(f) || c(f, m) || l(f, m) || a();
      }
      function a() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function c(f, m) {
        var y = f == null ? null : (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (y != null) {
          var g = [],
            h = !0,
            v = !1,
            S,
            E;
          try {
            for (
              y = y.call(f);
              !(h = (S = y.next()).done) && (g.push(S.value), !(m && g.length === m));
              h = !0
            );
          } catch (C) {
            (v = !0), (E = C);
          } finally {
            try {
              !h && y.return != null && y.return();
            } finally {
              if (v) throw E;
            }
          }
          return g;
        }
      }
      function n(f) {
        if (Array.isArray(f)) return f;
      }
      function i(f, m) {
        var y = (typeof Symbol < 'u' && f[Symbol.iterator]) || f['@@iterator'];
        if (!y) {
          if (Array.isArray(f) || (y = l(f)) || (m && f && typeof f.length == 'number')) {
            y && (f = y);
            var g = 0,
              h = function () {};
            return {
              s: h,
              n: function () {
                return g >= f.length ? { done: !0 } : { done: !1, value: f[g++] };
              },
              e: function (C) {
                throw C;
              },
              f: h,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var v = !0,
          S = !1,
          E;
        return {
          s: function () {
            y = y.call(f);
          },
          n: function () {
            var C = y.next();
            return (v = C.done), C;
          },
          e: function (C) {
            (S = !0), (E = C);
          },
          f: function () {
            try {
              !v && y.return != null && y.return();
            } finally {
              if (S) throw E;
            }
          },
        };
      }
      function l(f, m) {
        if (f) {
          if (typeof f == 'string') return s(f, m);
          var y = Object.prototype.toString.call(f).slice(8, -1);
          if (
            (y === 'Object' && f.constructor && (y = f.constructor.name),
            y === 'Map' || y === 'Set')
          )
            return Array.from(f);
          if (y === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(y))
            return s(f, m);
        }
      }
      function s(f, m) {
        (m == null || m > f.length) && (m = f.length);
        for (var y = 0, g = new Array(m); y < m; y++) g[y] = f[y];
        return g;
      }
      var u = [
          ['a', { reserved: !1 }],
          ['abbr', { reserved: !1 }],
          ['acronym', { reserved: !1 }],
          ['address', { reserved: !1 }],
          ['applet', { reserved: !1 }],
          ['area', { reserved: !1 }],
          ['article', { reserved: !1 }],
          ['aside', { reserved: !1 }],
          ['audio', { reserved: !1 }],
          ['b', { reserved: !1 }],
          ['base', { reserved: !0 }],
          ['bdi', { reserved: !1 }],
          ['bdo', { reserved: !1 }],
          ['big', { reserved: !1 }],
          ['blink', { reserved: !1 }],
          ['blockquote', { reserved: !1 }],
          ['body', { reserved: !1 }],
          ['br', { reserved: !1 }],
          ['button', { reserved: !1 }],
          ['canvas', { reserved: !1 }],
          ['caption', { reserved: !1 }],
          ['center', { reserved: !1 }],
          ['cite', { reserved: !1 }],
          ['code', { reserved: !1 }],
          ['col', { reserved: !0 }],
          ['colgroup', { reserved: !0 }],
          ['content', { reserved: !1 }],
          ['data', { reserved: !1 }],
          ['datalist', { reserved: !1 }],
          ['dd', { reserved: !1 }],
          ['del', { reserved: !1 }],
          ['details', { reserved: !1 }],
          ['dfn', { reserved: !1 }],
          ['dialog', { reserved: !1 }],
          ['dir', { reserved: !1 }],
          ['div', { reserved: !1 }],
          ['dl', { reserved: !1 }],
          ['dt', { reserved: !1 }],
          ['em', { reserved: !1 }],
          ['embed', { reserved: !1 }],
          ['fieldset', { reserved: !1 }],
          ['figcaption', { reserved: !1 }],
          ['figure', { reserved: !1 }],
          ['font', { reserved: !1 }],
          ['footer', { reserved: !1 }],
          ['form', { reserved: !1 }],
          ['frame', { reserved: !1 }],
          ['frameset', { reserved: !1 }],
          ['h1', { reserved: !1 }],
          ['h2', { reserved: !1 }],
          ['h3', { reserved: !1 }],
          ['h4', { reserved: !1 }],
          ['h5', { reserved: !1 }],
          ['h6', { reserved: !1 }],
          ['head', { reserved: !0 }],
          ['header', { reserved: !1 }],
          ['hgroup', { reserved: !1 }],
          ['hr', { reserved: !1 }],
          ['html', { reserved: !0 }],
          ['i', { reserved: !1 }],
          ['iframe', { reserved: !1 }],
          ['img', { reserved: !1 }],
          ['input', { reserved: !1 }],
          ['ins', { reserved: !1 }],
          ['kbd', { reserved: !1 }],
          ['keygen', { reserved: !1 }],
          ['label', { reserved: !1 }],
          ['legend', { reserved: !1 }],
          ['li', { reserved: !1 }],
          ['link', { reserved: !0 }],
          ['main', { reserved: !1 }],
          ['map', { reserved: !1 }],
          ['mark', { reserved: !1 }],
          ['marquee', { reserved: !1 }],
          ['menu', { reserved: !1 }],
          ['menuitem', { reserved: !1 }],
          ['meta', { reserved: !0 }],
          ['meter', { reserved: !1 }],
          ['nav', { reserved: !1 }],
          ['noembed', { reserved: !0 }],
          ['noscript', { reserved: !0 }],
          ['object', { reserved: !1 }],
          ['ol', { reserved: !1 }],
          ['optgroup', { reserved: !1 }],
          ['option', { reserved: !1 }],
          ['output', { reserved: !1 }],
          ['p', { reserved: !1 }],
          ['param', { reserved: !0 }],
          ['picture', { reserved: !0 }],
          ['pre', { reserved: !1 }],
          ['progress', { reserved: !1 }],
          ['q', { reserved: !1 }],
          ['rp', { reserved: !1 }],
          ['rt', { reserved: !1 }],
          ['rtc', { reserved: !1 }],
          ['ruby', { reserved: !1 }],
          ['s', { reserved: !1 }],
          ['samp', { reserved: !1 }],
          ['script', { reserved: !0 }],
          ['section', { reserved: !1 }],
          ['select', { reserved: !1 }],
          ['small', { reserved: !1 }],
          ['source', { reserved: !0 }],
          ['spacer', { reserved: !1 }],
          ['span', { reserved: !1 }],
          ['strike', { reserved: !1 }],
          ['strong', { reserved: !1 }],
          ['style', { reserved: !0 }],
          ['sub', { reserved: !1 }],
          ['summary', { reserved: !1 }],
          ['sup', { reserved: !1 }],
          ['table', { reserved: !1 }],
          ['tbody', { reserved: !1 }],
          ['td', { reserved: !1 }],
          ['textarea', { reserved: !1 }],
          ['tfoot', { reserved: !1 }],
          ['th', { reserved: !1 }],
          ['thead', { reserved: !1 }],
          ['time', { reserved: !1 }],
          ['title', { reserved: !0 }],
          ['tr', { reserved: !1 }],
          ['track', { reserved: !0 }],
          ['tt', { reserved: !1 }],
          ['u', { reserved: !1 }],
          ['ul', { reserved: !1 }],
          ['var', { reserved: !1 }],
          ['video', { reserved: !1 }],
          ['wbr', { reserved: !1 }],
          ['xmp', { reserved: !1 }],
        ],
        p = {
          entries: function () {
            return u;
          },
          forEach: function (f) {
            var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              y = i(u),
              g;
            try {
              for (y.s(); !(g = y.n()).done; ) {
                var h = o(g.value, 2),
                  v = h[0],
                  S = h[1];
                f.call(m, S, v, u);
              }
            } catch (E) {
              y.e(E);
            } finally {
              y.f();
            }
          },
          get: function (f) {
            var m = u.find(function (y) {
              return y[0] === f;
            });
            return m && m[1];
          },
          has: function (f) {
            return !!p.get(f);
          },
          keys: function () {
            return u.map(function (f) {
              var m = o(f, 1),
                y = m[0];
              return y;
            });
          },
          values: function () {
            return u.map(function (f) {
              var m = o(f, 2),
                y = m[1];
              return y;
            });
          },
        },
        d = (0, t.default)(p, p.entries());
      e.default = d;
    },
  }),
  gy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/commandRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  vy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/compositeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  _y = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/inputRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-disabled': null },
          relatedConcepts: [{ concept: { name: 'input' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ey = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/landmarkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  wy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/rangeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-valuemax': null, 'aria-valuemin': null, 'aria-valuenow': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/roletypeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {
            'aria-atomic': null,
            'aria-busy': null,
            'aria-controls': null,
            'aria-current': null,
            'aria-describedby': null,
            'aria-details': null,
            'aria-dropeffect': null,
            'aria-flowto': null,
            'aria-grabbed': null,
            'aria-hidden': null,
            'aria-keyshortcuts': null,
            'aria-label': null,
            'aria-labelledby': null,
            'aria-live': null,
            'aria-owns': null,
            'aria-relevant': null,
            'aria-roledescription': null,
          },
          relatedConcepts: [
            { concept: { name: 'rel' }, module: 'HTML' },
            { concept: { name: 'role' }, module: 'XHTML' },
            { concept: { name: 'type' }, module: 'Dublin Core' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  Cy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'frontmatter' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'DTB' },
            { concept: { name: 'level' }, module: 'SMIL' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Oy = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/sectionheadRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Py = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/selectRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'group'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Ry = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/structureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ty = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/widgetRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ay = P({
    '../../node_modules/aria-query/lib/etc/roles/abstract/windowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !0,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-modal': null },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype']],
        },
        r = t;
      e.default = r;
    },
  }),
  qy = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaAbstractRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = f(gy()),
        r = f(vy()),
        o = f(_y()),
        a = f(Ey()),
        c = f(wy()),
        n = f(Sy()),
        i = f(Cy()),
        l = f(Oy()),
        s = f(Py()),
        u = f(Ry()),
        p = f(Ty()),
        d = f(Ay());
      function f(g) {
        return g && g.__esModule ? g : { default: g };
      }
      var m = [
          ['command', t.default],
          ['composite', r.default],
          ['input', o.default],
          ['landmark', a.default],
          ['range', c.default],
          ['roletype', n.default],
          ['section', i.default],
          ['sectionhead', l.default],
          ['select', s.default],
          ['structure', u.default],
          ['widget', p.default],
          ['window', d.default],
        ],
        y = m;
      e.default = y;
    },
  }),
  xy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'assertive' },
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  My = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/alertdialogRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'alert' }, module: 'XForms' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'alert'],
            ['roletype', 'window', 'dialog'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  jy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/applicationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'Device Independence Delivery Unit' } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Iy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/articleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-posinset': null, 'aria-setsize': null },
          relatedConcepts: [{ concept: { name: 'article' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ny = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/bannerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: { constraints: ['direct descendant of document'], name: 'header' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  By = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/blockquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  $y = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/buttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-pressed': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'aria-pressed' },
                  { name: 'type', value: 'checkbox' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'aria-expanded', value: 'false' }], name: 'summary' },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ name: 'aria-expanded', value: 'true' }],
                constraints: [
                  'direct descendant of details element with the open attribute defined',
                ],
                name: 'summary',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'type', value: 'button' }], name: 'input' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'type', value: 'image' }], name: 'input' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'type', value: 'reset' }], name: 'input' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'type', value: 'submit' }], name: 'input' },
              module: 'HTML',
            },
            { concept: { name: 'button' }, module: 'HTML' },
            { concept: { name: 'trigger' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  Dy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/captionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: ['figure', 'grid', 'table'],
          requiredContextRole: ['figure', 'grid', 'table'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ky = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/cellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-colspan': null,
            'aria-rowindex': null,
            'aria-rowspan': null,
          },
          relatedConcepts: [
            { concept: { constraints: ['descendant of table'], name: 'td' }, module: 'HTML' },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ly = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/checkboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'type', value: 'checkbox' }], name: 'input' },
              module: 'HTML',
            },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Fy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/codeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Uy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/columnheaderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            {
              attributes: [{ name: 'scope', value: 'col' }],
              concept: { name: 'th' },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Hy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/comboboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-expanded': 'false',
            'aria-haspopup': 'listbox',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['set'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'multiple' },
                  { constraints: ['undefined'], name: 'size' },
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'multiple' },
                  { name: 'size', value: 1 },
                ],
                name: 'select',
              },
              module: 'HTML',
            },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-expanded': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  zy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/complementaryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'aside' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/contentinfoRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: { constraints: ['direct descendant of document'], name: 'footer' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Wy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/definitionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dd' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Gy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/deletionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ky = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/dialogRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'dialog' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'window']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/directoryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ module: 'DAISY Guide' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  Jy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/documentRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'Device Independence Delivery Unit' } },
            { concept: { name: 'body' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Xy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/emphasisRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Qy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/feedRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['article']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'list']],
        },
        r = t;
      e.default = r;
    },
  }),
  Zy = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/figureRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'figure' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  eh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/formRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: { attributes: [{ constraints: ['set'], name: 'aria-label' }], name: 'form' },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'form',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ constraints: ['set'], name: 'name' }], name: 'form' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  th = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/genericRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [
            { concept: { name: 'span' }, module: 'HTML' },
            { concept: { name: 'div' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  rh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-multiselectable': null, 'aria-readonly': null },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'role', value: 'grid' }], name: 'table' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'structure', 'section', 'table'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  nh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/gridcellRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-selected': null,
          },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'role', value: 'gridcell' }], name: 'td' },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row'],
          requiredContextRole: ['row'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  oh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/groupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-activedescendant': null, 'aria-disabled': null },
          relatedConcepts: [
            { concept: { name: 'details' }, module: 'HTML' },
            { concept: { name: 'fieldset' }, module: 'HTML' },
            { concept: { name: 'optgroup' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ah = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/headingRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-level': '2' },
          relatedConcepts: [
            { concept: { name: 'h1' }, module: 'HTML' },
            { concept: { name: 'h2' }, module: 'HTML' },
            { concept: { name: 'h3' }, module: 'HTML' },
            { concept: { name: 'h4' }, module: 'HTML' },
            { concept: { name: 'h5' }, module: 'HTML' },
            { concept: { name: 'h6' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-level': '2' },
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  ih = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/imgRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: { attributes: [{ constraints: ['set'], name: 'alt' }], name: 'img' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ constraints: ['undefined'], name: 'alt' }], name: 'img' },
              module: 'HTML',
            },
            { concept: { name: 'imggroup' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  lh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/insertionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  sh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/linkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-disabled': null, 'aria-expanded': null, 'aria-haspopup': null },
          relatedConcepts: [
            { concept: { attributes: [{ name: 'href' }], name: 'a' }, module: 'HTML' },
            { concept: { attributes: [{ name: 'href' }], name: 'area' }, module: 'HTML' },
            { concept: { attributes: [{ name: 'href' }], name: 'link' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  uh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'menu' }, module: 'HTML' },
            { concept: { name: 'ol' }, module: 'HTML' },
            { concept: { name: 'ul' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['listitem']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ch = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['>1'], name: 'size' }, { name: 'multiple' }],
                name: 'select',
              },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ constraints: ['>1'], name: 'size' }], name: 'select' },
              module: 'HTML',
            },
            { concept: { attributes: [{ name: 'multiple' }], name: 'select' }, module: 'HTML' },
            { concept: { name: 'datalist' }, module: 'HTML' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['option', 'group'], ['option']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  dh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/listitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-level': null, 'aria-posinset': null, 'aria-setsize': null },
          relatedConcepts: [
            {
              concept: { constraints: ['direct descendant of ol, ul or menu'], name: 'li' },
              module: 'HTML',
            },
            { concept: { name: 'item' }, module: 'XForms' },
          ],
          requireContextRole: ['directory', 'list'],
          requiredContextRole: ['directory', 'list'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  ph = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/logRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-live': 'polite' },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  fh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/mainRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'main' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  mh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/marqueeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  yh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/mathRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'math' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  hh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'vertical' },
          relatedConcepts: [
            { concept: { name: 'MENU' }, module: 'JAPI' },
            { concept: { name: 'list' }, module: 'ARIA' },
            { concept: { name: 'select' }, module: 'XForms' },
            { concept: { name: 'sidebar' }, module: 'DTB' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  bh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menubarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'toolbar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [
            ['menuitem', 'group'],
            ['menuitemradio', 'group'],
            ['menuitemcheckbox', 'group'],
            ['menuitem'],
            ['menuitemcheckbox'],
            ['menuitemradio'],
          ],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select', 'menu'],
            ['roletype', 'structure', 'section', 'group', 'select', 'menu'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  gh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
          },
          relatedConcepts: [
            { concept: { name: 'MENU_ITEM' }, module: 'JAPI' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'menuitem' }, module: 'HTML' },
            { concept: { name: 'option' }, module: 'ARIA' },
          ],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command']],
        },
        r = t;
      e.default = r;
    },
  }),
  vh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemcheckboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox'],
            ['roletype', 'widget', 'command', 'menuitem'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  _h = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/menuitemradioRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'menuitem' }, module: 'ARIA' }],
          requireContextRole: ['group', 'menu', 'menubar'],
          requiredContextRole: ['group', 'menu', 'menubar'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [
            ['roletype', 'widget', 'input', 'checkbox', 'menuitemcheckbox'],
            ['roletype', 'widget', 'command', 'menuitem', 'menuitemcheckbox'],
            ['roletype', 'widget', 'input', 'radio'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Eh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/meterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-valuetext': null, 'aria-valuemax': '100', 'aria-valuemin': '0' },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [['roletype', 'structure', 'range']],
        },
        r = t;
      e.default = r;
    },
  }),
  wh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/navigationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'nav' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/noneRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: [],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [],
        },
        r = t;
      e.default = r;
    },
  }),
  Ch = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/noteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Oh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/optionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-checked': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [
            { concept: { name: 'item' }, module: 'XForms' },
            { concept: { name: 'listitem' }, module: 'ARIA' },
            { concept: { name: 'option' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': 'false' },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ph = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/paragraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Rh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/presentationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Th = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/progressbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-valuetext': null },
          relatedConcepts: [
            { concept: { name: 'progress' }, module: 'HTML' },
            { concept: { name: 'status' }, module: 'ARIA' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Ah = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/radioRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-checked': null, 'aria-posinset': null, 'aria-setsize': null },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'type', value: 'radio' }], name: 'input' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  qh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/radiogroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [{ concept: { name: 'list' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['radio']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  xh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/regionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-label' }],
                name: 'section',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [{ constraints: ['set'], name: 'aria-labelledby' }],
                name: 'section',
              },
              module: 'HTML',
            },
            { concept: { name: 'Device Independence Glossart perceivable unit' } },
            { concept: { name: 'frame' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Mh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-colindex': null,
            'aria-expanded': null,
            'aria-level': null,
            'aria-posinset': null,
            'aria-rowindex': null,
            'aria-selected': null,
            'aria-setsize': null,
          },
          relatedConcepts: [{ concept: { name: 'tr' }, module: 'HTML' }],
          requireContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'rowgroup', 'table', 'treegrid'],
          requiredOwnedElements: [['cell'], ['columnheader'], ['gridcell'], ['rowheader']],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'group'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  jh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowgroupRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'tbody' }, module: 'HTML' },
            { concept: { name: 'tfoot' }, module: 'HTML' },
            { concept: { name: 'thead' }, module: 'HTML' },
          ],
          requireContextRole: ['grid', 'table', 'treegrid'],
          requiredContextRole: ['grid', 'table', 'treegrid'],
          requiredOwnedElements: [['row']],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ih = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/rowheaderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-sort': null },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'scope', value: 'row' }], name: 'th' },
              module: 'HTML',
            },
            {
              concept: { attributes: [{ name: 'scope', value: 'rowgroup' }], name: 'th' },
              module: 'HTML',
            },
          ],
          requireContextRole: ['row', 'rowgroup'],
          requiredContextRole: ['row', 'rowgroup'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'section', 'cell'],
            ['roletype', 'structure', 'section', 'cell', 'gridcell'],
            ['roletype', 'widget', 'gridcell'],
            ['roletype', 'structure', 'sectionhead'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Nh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/scrollbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-valuetext': null,
            'aria-orientation': 'vertical',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-controls': null, 'aria-valuenow': null },
          superClass: [
            ['roletype', 'structure', 'range'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Bh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  $h = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/searchboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'search' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input', 'textbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  Dh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/separatorRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
            'aria-valuenow': null,
            'aria-valuetext': null,
          },
          relatedConcepts: [{ concept: { name: 'hr' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure']],
        },
        r = t;
      e.default = r;
    },
  }),
  kh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/sliderRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-valuetext': null,
            'aria-orientation': 'horizontal',
            'aria-valuemax': '100',
            'aria-valuemin': '0',
          },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'type', value: 'range' }], name: 'input' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-valuenow': null },
          superClass: [
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Lh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/spinbuttonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-readonly': null,
            'aria-required': null,
            'aria-valuetext': null,
            'aria-valuenow': '0',
          },
          relatedConcepts: [
            {
              concept: { attributes: [{ name: 'type', value: 'number' }], name: 'input' },
              module: 'HTML',
            },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite'],
            ['roletype', 'widget', 'input'],
            ['roletype', 'structure', 'range'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Fh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/statusRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-atomic': 'true', 'aria-live': 'polite' },
          relatedConcepts: [{ concept: { name: 'output' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Uh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/strongRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Hh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/subscriptRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  zh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/superscriptRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['prohibited'],
          prohibitedProps: ['aria-label', 'aria-labelledby'],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/switchRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'button' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: { 'aria-checked': null },
          superClass: [['roletype', 'widget', 'input', 'checkbox']],
        },
        r = t;
      e.default = r;
    },
  }),
  Wh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-posinset': null,
            'aria-setsize': null,
            'aria-selected': 'false',
          },
          relatedConcepts: [],
          requireContextRole: ['tablist'],
          requiredContextRole: ['tablist'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [
            ['roletype', 'structure', 'sectionhead'],
            ['roletype', 'widget'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  Gh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tableRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-colcount': null, 'aria-rowcount': null },
          relatedConcepts: [{ concept: { name: 'table' }, module: 'HTML' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Kh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tablistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-level': null,
            'aria-multiselectable': null,
            'aria-orientation': 'horizontal',
          },
          relatedConcepts: [{ module: 'DAISY', concept: { name: 'guide' } }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['tab']],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'composite']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tabpanelRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Jh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/termRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [
            { concept: { name: 'dfn' }, module: 'HTML' },
            { concept: { name: 'dt' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Xh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/textboxRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-activedescendant': null,
            'aria-autocomplete': null,
            'aria-errormessage': null,
            'aria-haspopup': null,
            'aria-invalid': null,
            'aria-multiline': null,
            'aria-placeholder': null,
            'aria-readonly': null,
            'aria-required': null,
          },
          relatedConcepts: [
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'type' },
                  { constraints: ['undefined'], name: 'list' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'email' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'tel' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'text' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            {
              concept: {
                attributes: [
                  { constraints: ['undefined'], name: 'list' },
                  { name: 'type', value: 'url' },
                ],
                name: 'input',
              },
              module: 'HTML',
            },
            { concept: { name: 'input' }, module: 'XForms' },
            { concept: { name: 'textarea' }, module: 'HTML' },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'input']],
        },
        r = t;
      e.default = r;
    },
  }),
  Qh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/timeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Zh = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/timerRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'status']],
        },
        r = t;
      e.default = r;
    },
  }),
  eb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/toolbarRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: { 'aria-orientation': 'horizontal' },
          relatedConcepts: [{ concept: { name: 'menubar' }, module: 'ARIA' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  tb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/tooltipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  rb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-invalid': null,
            'aria-multiselectable': null,
            'aria-required': null,
            'aria-orientation': 'vertical',
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['treeitem', 'group'], ['treeitem']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'select'],
            ['roletype', 'structure', 'section', 'group', 'select'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  nb = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treegridRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['row'], ['row', 'rowgroup']],
          requiredProps: {},
          superClass: [
            ['roletype', 'widget', 'composite', 'grid'],
            ['roletype', 'structure', 'section', 'table', 'grid'],
            ['roletype', 'widget', 'composite', 'select', 'tree'],
            ['roletype', 'structure', 'section', 'group', 'select', 'tree'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ob = P({
    '../../node_modules/aria-query/lib/etc/roles/literal/treeitemRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-expanded': null, 'aria-haspopup': null },
          relatedConcepts: [],
          requireContextRole: ['group', 'tree'],
          requiredContextRole: ['group', 'tree'],
          requiredOwnedElements: [],
          requiredProps: { 'aria-selected': null },
          superClass: [
            ['roletype', 'structure', 'section', 'listitem'],
            ['roletype', 'widget', 'input', 'option'],
          ],
        },
        r = t;
      e.default = r;
    },
  }),
  ab = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaLiteralRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = re(xy()),
        r = re(My()),
        o = re(jy()),
        a = re(Iy()),
        c = re(Ny()),
        n = re(By()),
        i = re($y()),
        l = re(Dy()),
        s = re(ky()),
        u = re(Ly()),
        p = re(Fy()),
        d = re(Uy()),
        f = re(Hy()),
        m = re(zy()),
        y = re(Vy()),
        g = re(Wy()),
        h = re(Gy()),
        v = re(Ky()),
        S = re(Yy()),
        E = re(Jy()),
        C = re(Xy()),
        A = re(Qy()),
        R = re(Zy()),
        _ = re(eh()),
        O = re(th()),
        x = re(rh()),
        j = re(nh()),
        z = re(oh()),
        V = re(ah()),
        U = re(ih()),
        ee = re(lh()),
        G = re(sh()),
        ne = re(uh()),
        oe = re(ch()),
        ue = re(dh()),
        ce = re(ph()),
        q = re(fh()),
        M = re(mh()),
        k = re(yh()),
        D = re(hh()),
        Y = re(bh()),
        I = re(gh()),
        N = re(vh()),
        H = re(_h()),
        Z = re(Eh()),
        b = re(wh()),
        B = re(Sh()),
        $ = re(Ch()),
        X = re(Oh()),
        W = re(Ph()),
        L = re(Rh()),
        ae = re(Th()),
        ie = re(Ah()),
        pe = re(qh()),
        Re = re(xh()),
        lt = re(Mh()),
        Ue = re(jh()),
        Ke = re(Ih()),
        st = re(Nh()),
        Ne = re(Bh()),
        Oe = re($h()),
        We = re(Dh()),
        Ye = re(kh()),
        Se = re(Lh()),
        Te = re(Fh()),
        He = re(Uh()),
        ut = re(Hh()),
        Mt = re(zh()),
        De = re(Vh()),
        ct = re(Wh()),
        J = re(Gh()),
        Q = re(Kh()),
        w = re(Yh()),
        T = re(Jh()),
        F = re(Xh()),
        K = re(Qh()),
        te = re(Zh()),
        le = re(eb()),
        se = re(tb()),
        de = re(rb()),
        ye = re(nb()),
        me = re(ob());
      function re(Ae) {
        return Ae && Ae.__esModule ? Ae : { default: Ae };
      }
      var Pe = [
          ['alert', t.default],
          ['alertdialog', r.default],
          ['application', o.default],
          ['article', a.default],
          ['banner', c.default],
          ['blockquote', n.default],
          ['button', i.default],
          ['caption', l.default],
          ['cell', s.default],
          ['checkbox', u.default],
          ['code', p.default],
          ['columnheader', d.default],
          ['combobox', f.default],
          ['complementary', m.default],
          ['contentinfo', y.default],
          ['definition', g.default],
          ['deletion', h.default],
          ['dialog', v.default],
          ['directory', S.default],
          ['document', E.default],
          ['emphasis', C.default],
          ['feed', A.default],
          ['figure', R.default],
          ['form', _.default],
          ['generic', O.default],
          ['grid', x.default],
          ['gridcell', j.default],
          ['group', z.default],
          ['heading', V.default],
          ['img', U.default],
          ['insertion', ee.default],
          ['link', G.default],
          ['list', ne.default],
          ['listbox', oe.default],
          ['listitem', ue.default],
          ['log', ce.default],
          ['main', q.default],
          ['marquee', M.default],
          ['math', k.default],
          ['menu', D.default],
          ['menubar', Y.default],
          ['menuitem', I.default],
          ['menuitemcheckbox', N.default],
          ['menuitemradio', H.default],
          ['meter', Z.default],
          ['navigation', b.default],
          ['none', B.default],
          ['note', $.default],
          ['option', X.default],
          ['paragraph', W.default],
          ['presentation', L.default],
          ['progressbar', ae.default],
          ['radio', ie.default],
          ['radiogroup', pe.default],
          ['region', Re.default],
          ['row', lt.default],
          ['rowgroup', Ue.default],
          ['rowheader', Ke.default],
          ['scrollbar', st.default],
          ['search', Ne.default],
          ['searchbox', Oe.default],
          ['separator', We.default],
          ['slider', Ye.default],
          ['spinbutton', Se.default],
          ['status', Te.default],
          ['strong', He.default],
          ['subscript', ut.default],
          ['superscript', Mt.default],
          ['switch', De.default],
          ['tab', ct.default],
          ['table', J.default],
          ['tablist', Q.default],
          ['tabpanel', w.default],
          ['term', T.default],
          ['textbox', F.default],
          ['time', K.default],
          ['timer', te.default],
          ['toolbar', le.default],
          ['tooltip', se.default],
          ['tree', de.default],
          ['treegrid', ye.default],
          ['treeitem', me.default],
        ],
        Je = Pe;
      e.default = Je;
    },
  }),
  ib = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAbstractRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'abstract [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  lb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAcknowledgmentsRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'acknowledgments [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  sb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAfterwordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'afterword [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  ub = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docAppendixRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'appendix [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  cb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBacklinkRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'content'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [{ concept: { name: 'referrer [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  db = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBiblioentryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'EPUB biblioentry [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: ['doc-bibliography'],
          requiredContextRole: ['doc-bibliography'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  pb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliographyRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'bibliography [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-biblioentry']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  fb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docBibliorefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [{ concept: { name: 'biblioref [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  mb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docChapterRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'chapter [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  yb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docColophonRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'colophon [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  hb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docConclusionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'conclusion [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  bb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCoverRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'cover [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  gb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'credit [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  vb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docCreditsRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'credits [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  _b = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docDedicationRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'dedication [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Eb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'rearnote [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: ['doc-endnotes'],
          requiredContextRole: ['doc-endnotes'],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'listitem']],
        },
        r = t;
      e.default = r;
    },
  }),
  wb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEndnotesRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'rearnotes [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['doc-endnote']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Sb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpigraphRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'epigraph [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Cb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docEpilogueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'epilogue [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ob = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docErrataRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'errata [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Pb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docExampleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Rb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docFootnoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'footnote [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Tb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docForewordRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'foreword [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ab = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossaryRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'glossary [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [['definition'], ['term']],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  qb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docGlossrefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [{ concept: { name: 'glossref [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  xb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIndexRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'index [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
        },
        r = t;
      e.default = r;
    },
  }),
  Mb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docIntroductionRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'introduction [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  jb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoterefRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: { 'aria-errormessage': null, 'aria-invalid': null },
          relatedConcepts: [{ concept: { name: 'noteref [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'widget', 'command', 'link']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ib = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docNoticeRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'notice [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  Nb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagebreakRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'pagebreak [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'separator']],
        },
        r = t;
      e.default = r;
    },
  }),
  Bb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPagelistRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'page-list [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
        },
        r = t;
      e.default = r;
    },
  }),
  $b = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPartRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'part [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Db = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrefaceRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'preface [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  kb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPrologueRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'prologue [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark']],
        },
        r = t;
      e.default = r;
    },
  }),
  Lb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docPullquoteRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {},
          relatedConcepts: [{ concept: { name: 'pullquote [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['none']],
        },
        r = t;
      e.default = r;
    },
  }),
  Fb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docQnaRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'qna [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section']],
        },
        r = t;
      e.default = r;
    },
  }),
  Ub = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docSubtitleRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'subtitle [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'sectionhead']],
        },
        r = t;
      e.default = r;
    },
  }),
  Hb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTipRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'help [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'note']],
        },
        r = t;
      e.default = r;
    },
  }),
  zb = P({
    '../../node_modules/aria-query/lib/etc/roles/dpub/docTocRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [{ concept: { name: 'toc [EPUB-SSV]' }, module: 'EPUB' }],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'landmark', 'navigation']],
        },
        r = t;
      e.default = r;
    },
  }),
  Vb = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaDpubRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = D(ib()),
        r = D(lb()),
        o = D(sb()),
        a = D(ub()),
        c = D(cb()),
        n = D(db()),
        i = D(pb()),
        l = D(fb()),
        s = D(mb()),
        u = D(yb()),
        p = D(hb()),
        d = D(bb()),
        f = D(gb()),
        m = D(vb()),
        y = D(_b()),
        g = D(Eb()),
        h = D(wb()),
        v = D(Sb()),
        S = D(Cb()),
        E = D(Ob()),
        C = D(Pb()),
        A = D(Rb()),
        R = D(Tb()),
        _ = D(Ab()),
        O = D(qb()),
        x = D(xb()),
        j = D(Mb()),
        z = D(jb()),
        V = D(Ib()),
        U = D(Nb()),
        ee = D(Bb()),
        G = D($b()),
        ne = D(Db()),
        oe = D(kb()),
        ue = D(Lb()),
        ce = D(Fb()),
        q = D(Ub()),
        M = D(Hb()),
        k = D(zb());
      function D(N) {
        return N && N.__esModule ? N : { default: N };
      }
      var Y = [
          ['doc-abstract', t.default],
          ['doc-acknowledgments', r.default],
          ['doc-afterword', o.default],
          ['doc-appendix', a.default],
          ['doc-backlink', c.default],
          ['doc-biblioentry', n.default],
          ['doc-bibliography', i.default],
          ['doc-biblioref', l.default],
          ['doc-chapter', s.default],
          ['doc-colophon', u.default],
          ['doc-conclusion', p.default],
          ['doc-cover', d.default],
          ['doc-credit', f.default],
          ['doc-credits', m.default],
          ['doc-dedication', y.default],
          ['doc-endnote', g.default],
          ['doc-endnotes', h.default],
          ['doc-epigraph', v.default],
          ['doc-epilogue', S.default],
          ['doc-errata', E.default],
          ['doc-example', C.default],
          ['doc-footnote', A.default],
          ['doc-foreword', R.default],
          ['doc-glossary', _.default],
          ['doc-glossref', O.default],
          ['doc-index', x.default],
          ['doc-introduction', j.default],
          ['doc-noteref', z.default],
          ['doc-notice', V.default],
          ['doc-pagebreak', U.default],
          ['doc-pagelist', ee.default],
          ['doc-part', G.default],
          ['doc-preface', ne.default],
          ['doc-prologue', oe.default],
          ['doc-pullquote', ue.default],
          ['doc-qna', ce.default],
          ['doc-subtitle', q.default],
          ['doc-tip', M.default],
          ['doc-toc', k.default],
        ],
        I = Y;
      e.default = I;
    },
  }),
  Wb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsDocumentRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-object' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'ARIA', concept: { name: 'article' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'document']],
        },
        r = t;
      e.default = r;
    },
  }),
  Gb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsObjectRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !1,
          baseConcepts: [],
          childrenPresentational: !1,
          nameFrom: ['author', 'contents'],
          prohibitedProps: [],
          props: {
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [
            { module: 'GRAPHICS', concept: { name: 'graphics-document' } },
            { module: 'ARIA', concept: { name: 'group' } },
            { module: 'ARIA', concept: { name: 'img' } },
            { module: 'GRAPHICS', concept: { name: 'graphics-symbol' } },
          ],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'group']],
        },
        r = t;
      e.default = r;
    },
  }),
  Kb = P({
    '../../node_modules/aria-query/lib/etc/roles/graphics/graphicsSymbolRole.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = {
          abstract: !1,
          accessibleNameRequired: !0,
          baseConcepts: [],
          childrenPresentational: !0,
          nameFrom: ['author'],
          prohibitedProps: [],
          props: {
            'aria-disabled': null,
            'aria-errormessage': null,
            'aria-expanded': null,
            'aria-haspopup': null,
            'aria-invalid': null,
          },
          relatedConcepts: [],
          requireContextRole: [],
          requiredContextRole: [],
          requiredOwnedElements: [],
          requiredProps: {},
          superClass: [['roletype', 'structure', 'section', 'img']],
        },
        r = t;
      e.default = r;
    },
  }),
  Yb = P({
    '../../node_modules/aria-query/lib/etc/roles/ariaGraphicsRoles.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = a(Wb()),
        r = a(Gb()),
        o = a(Kb());
      function a(i) {
        return i && i.__esModule ? i : { default: i };
      }
      var c = [
          ['graphics-document', t.default],
          ['graphics-object', r.default],
          ['graphics-symbol', o.default],
        ],
        n = c;
      e.default = n;
    },
  }),
  Ko = P({
    '../../node_modules/aria-query/lib/rolesMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = n(qy()),
        r = n(ab()),
        o = n(Vb()),
        a = n(Yb()),
        c = n(kr());
      function n(v) {
        return v && v.__esModule ? v : { default: v };
      }
      function i(v, S, E) {
        return (
          S in v
            ? Object.defineProperty(v, S, {
                value: E,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (v[S] = E),
          v
        );
      }
      function l(v, S) {
        var E = (typeof Symbol < 'u' && v[Symbol.iterator]) || v['@@iterator'];
        if (!E) {
          if (Array.isArray(v) || (E = p(v)) || (S && v && typeof v.length == 'number')) {
            E && (v = E);
            var C = 0,
              A = function () {};
            return {
              s: A,
              n: function () {
                return C >= v.length ? { done: !0 } : { done: !1, value: v[C++] };
              },
              e: function (x) {
                throw x;
              },
              f: A,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var R = !0,
          _ = !1,
          O;
        return {
          s: function () {
            E = E.call(v);
          },
          n: function () {
            var x = E.next();
            return (R = x.done), x;
          },
          e: function (x) {
            (_ = !0), (O = x);
          },
          f: function () {
            try {
              !R && E.return != null && E.return();
            } finally {
              if (_) throw O;
            }
          },
        };
      }
      function s(v, S) {
        return m(v) || f(v, S) || p(v, S) || u();
      }
      function u() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function p(v, S) {
        if (v) {
          if (typeof v == 'string') return d(v, S);
          var E = Object.prototype.toString.call(v).slice(8, -1);
          if (
            (E === 'Object' && v.constructor && (E = v.constructor.name),
            E === 'Map' || E === 'Set')
          )
            return Array.from(v);
          if (E === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(E))
            return d(v, S);
        }
      }
      function d(v, S) {
        (S == null || S > v.length) && (S = v.length);
        for (var E = 0, C = new Array(S); E < S; E++) C[E] = v[E];
        return C;
      }
      function f(v, S) {
        var E = v == null ? null : (typeof Symbol < 'u' && v[Symbol.iterator]) || v['@@iterator'];
        if (E != null) {
          var C = [],
            A = !0,
            R = !1,
            _,
            O;
          try {
            for (
              E = E.call(v);
              !(A = (_ = E.next()).done) && (C.push(_.value), !(S && C.length === S));
              A = !0
            );
          } catch (x) {
            (R = !0), (O = x);
          } finally {
            try {
              !A && E.return != null && E.return();
            } finally {
              if (R) throw O;
            }
          }
          return C;
        }
      }
      function m(v) {
        if (Array.isArray(v)) return v;
      }
      var y = [].concat(t.default, r.default, o.default, a.default);
      y.forEach(function (v) {
        var S = s(v, 2),
          E = S[1],
          C = l(E.superClass),
          A;
        try {
          for (C.s(); !(A = C.n()).done; ) {
            var R = A.value,
              _ = l(R),
              O;
            try {
              var x = function () {
                var j = O.value,
                  z = y.find(function (ne) {
                    var oe = s(ne, 1),
                      ue = oe[0];
                    return ue === j;
                  });
                if (z)
                  for (var V = z[1], U = 0, ee = Object.keys(V.props); U < ee.length; U++) {
                    var G = ee[U];
                    Object.prototype.hasOwnProperty.call(E.props, G) ||
                      Object.assign(E.props, i({}, G, V.props[G]));
                  }
              };
              for (_.s(); !(O = _.n()).done; ) x();
            } catch (j) {
              _.e(j);
            } finally {
              _.f();
            }
          }
        } catch (j) {
          C.e(j);
        } finally {
          C.f();
        }
      });
      var g = {
          entries: function () {
            return y;
          },
          forEach: function (v) {
            var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              E = l(y),
              C;
            try {
              for (E.s(); !(C = E.n()).done; ) {
                var A = s(C.value, 2),
                  R = A[0],
                  _ = A[1];
                v.call(S, _, R, y);
              }
            } catch (O) {
              E.e(O);
            } finally {
              E.f();
            }
          },
          get: function (v) {
            var S = y.find(function (E) {
              return E[0] === v;
            });
            return S && S[1];
          },
          has: function (v) {
            return !!g.get(v);
          },
          keys: function () {
            return y.map(function (v) {
              var S = s(v, 1),
                E = S[0];
              return E;
            });
          },
          values: function () {
            return y.map(function (v) {
              var S = s(v, 2),
                E = S[1];
              return E;
            });
          },
        },
        h = (0, c.default)(g, g.entries());
      e.default = h;
    },
  }),
  ts = P({
    '../../node_modules/object-keys/isArguments.js'(e, t) {
      var r = Object.prototype.toString;
      t.exports = function (o) {
        var a = r.call(o),
          c = a === '[object Arguments]';
        return (
          c ||
            (c =
              a !== '[object Array]' &&
              o !== null &&
              typeof o == 'object' &&
              typeof o.length == 'number' &&
              o.length >= 0 &&
              r.call(o.callee) === '[object Function]'),
          c
        );
      };
    },
  }),
  Jb = P({
    '../../node_modules/object-keys/implementation.js'(e, t) {
      var r;
      Object.keys ||
        ((o = Object.prototype.hasOwnProperty),
        (a = Object.prototype.toString),
        (c = ts()),
        (n = Object.prototype.propertyIsEnumerable),
        (i = !n.call({ toString: null }, 'toString')),
        (l = n.call(function () {}, 'prototype')),
        (s = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor',
        ]),
        (u = function (m) {
          var y = m.constructor;
          return y && y.prototype === m;
        }),
        (p = {
          $applicationCache: !0,
          $console: !0,
          $external: !0,
          $frame: !0,
          $frameElement: !0,
          $frames: !0,
          $innerHeight: !0,
          $innerWidth: !0,
          $onmozfullscreenchange: !0,
          $onmozfullscreenerror: !0,
          $outerHeight: !0,
          $outerWidth: !0,
          $pageXOffset: !0,
          $pageYOffset: !0,
          $parent: !0,
          $scrollLeft: !0,
          $scrollTop: !0,
          $scrollX: !0,
          $scrollY: !0,
          $self: !0,
          $webkitIndexedDB: !0,
          $webkitStorageInfo: !0,
          $window: !0,
        }),
        (d = (function () {
          if (typeof window > 'u') return !1;
          for (var m in window)
            try {
              if (
                !p['$' + m] &&
                o.call(window, m) &&
                window[m] !== null &&
                typeof window[m] == 'object'
              )
                try {
                  u(window[m]);
                } catch {
                  return !0;
                }
            } catch {
              return !0;
            }
          return !1;
        })()),
        (f = function (m) {
          if (typeof window > 'u' || !d) return u(m);
          try {
            return u(m);
          } catch {
            return !1;
          }
        }),
        (r = function (m) {
          var y = m !== null && typeof m == 'object',
            g = a.call(m) === '[object Function]',
            h = c(m),
            v = y && a.call(m) === '[object String]',
            S = [];
          if (!y && !g && !h) throw new TypeError('Object.keys called on a non-object');
          var E = l && g;
          if (v && m.length > 0 && !o.call(m, 0))
            for (var C = 0; C < m.length; ++C) S.push(String(C));
          if (h && m.length > 0) for (var A = 0; A < m.length; ++A) S.push(String(A));
          else for (var R in m) !(E && R === 'prototype') && o.call(m, R) && S.push(String(R));
          if (i)
            for (var _ = f(m), O = 0; O < s.length; ++O)
              !(_ && s[O] === 'constructor') && o.call(m, s[O]) && S.push(s[O]);
          return S;
        }));
      var o, a, c, n, i, l, s, u, p, d, f;
      t.exports = r;
    },
  }),
  Yo = P({
    '../../node_modules/object-keys/index.js'(e, t) {
      var r = Array.prototype.slice,
        o = ts(),
        a = Object.keys,
        c = a
          ? function (i) {
              return a(i);
            }
          : Jb(),
        n = Object.keys;
      (c.shim = function () {
        if (Object.keys) {
          var i = (function () {
            var l = Object.keys(arguments);
            return l && l.length === arguments.length;
          })(1, 2);
          i ||
            (Object.keys = function (l) {
              return o(l) ? n(r.call(l)) : n(l);
            });
        } else Object.keys = c;
        return Object.keys || c;
      }),
        (t.exports = c);
    },
  }),
  Pn = P({
    '../../node_modules/has-symbols/shams.js'(e, t) {
      t.exports = function () {
        if (typeof Symbol != 'function' || typeof Object.getOwnPropertySymbols != 'function')
          return !1;
        if (typeof Symbol.iterator == 'symbol') return !0;
        var r = {},
          o = Symbol('test'),
          a = Object(o);
        if (
          typeof o == 'string' ||
          Object.prototype.toString.call(o) !== '[object Symbol]' ||
          Object.prototype.toString.call(a) !== '[object Symbol]'
        )
          return !1;
        var c = 42;
        r[o] = c;
        for (o in r) return !1;
        if (
          (typeof Object.keys == 'function' && Object.keys(r).length !== 0) ||
          (typeof Object.getOwnPropertyNames == 'function' &&
            Object.getOwnPropertyNames(r).length !== 0)
        )
          return !1;
        var n = Object.getOwnPropertySymbols(r);
        if (n.length !== 1 || n[0] !== o || !Object.prototype.propertyIsEnumerable.call(r, o))
          return !1;
        if (typeof Object.getOwnPropertyDescriptor == 'function') {
          var i = Object.getOwnPropertyDescriptor(r, o);
          if (i.value !== c || i.enumerable !== !0) return !1;
        }
        return !0;
      };
    },
  }),
  Jo = P({
    '../../node_modules/has-symbols/index.js'(e, t) {
      var r = typeof Symbol < 'u' && Symbol,
        o = Pn();
      t.exports = function () {
        return typeof r != 'function' ||
          typeof Symbol != 'function' ||
          typeof r('foo') != 'symbol' ||
          typeof Symbol('bar') != 'symbol'
          ? !1
          : o();
      };
    },
  }),
  Xb = P({
    '../../node_modules/has-proto/index.js'(e, t) {
      var r = { foo: {} },
        o = Object;
      t.exports = function () {
        return { __proto__: r }.foo === r.foo && !({ __proto__: null } instanceof o);
      };
    },
  }),
  Qb = P({
    '../../node_modules/function-bind/implementation.js'(e, t) {
      var r = 'Function.prototype.bind called on incompatible ',
        o = Object.prototype.toString,
        a = Math.max,
        c = '[object Function]',
        n = function (s, u) {
          for (var p = [], d = 0; d < s.length; d += 1) p[d] = s[d];
          for (var f = 0; f < u.length; f += 1) p[f + s.length] = u[f];
          return p;
        },
        i = function (s, u) {
          for (var p = [], d = u || 0, f = 0; d < s.length; d += 1, f += 1) p[f] = s[d];
          return p;
        },
        l = function (s, u) {
          for (var p = '', d = 0; d < s.length; d += 1) (p += s[d]), d + 1 < s.length && (p += u);
          return p;
        };
      t.exports = function (s) {
        var u = this;
        if (typeof u != 'function' || o.apply(u) !== c) throw new TypeError(r + u);
        for (
          var p = i(arguments, 1),
            d,
            f = function () {
              if (this instanceof d) {
                var v = u.apply(this, n(p, arguments));
                return Object(v) === v ? v : this;
              }
              return u.apply(s, n(p, arguments));
            },
            m = a(0, u.length - p.length),
            y = [],
            g = 0;
          g < m;
          g++
        )
          y[g] = '$' + g;
        if (
          ((d = Function(
            'binder',
            'return function (' + l(y, ',') + '){ return binder.apply(this,arguments); }',
          )(f)),
          u.prototype)
        ) {
          var h = function () {};
          (h.prototype = u.prototype), (d.prototype = new h()), (h.prototype = null);
        }
        return d;
      };
    },
  }),
  rs = P({
    '../../node_modules/function-bind/index.js'(e, t) {
      var r = Qb();
      t.exports = Function.prototype.bind || r;
    },
  }),
  ns = P({
    '../../node_modules/has/src/index.js'(e, t) {
      var r = {}.hasOwnProperty,
        o = Function.prototype.call;
      t.exports = o.bind
        ? o.bind(r)
        : function (a, c) {
            return o.call(r, a, c);
          };
    },
  }),
  et = P({
    '../../node_modules/get-intrinsic/index.js'(e, t) {
      var r,
        o = SyntaxError,
        a = Function,
        c = TypeError,
        n = function (U) {
          try {
            return a('"use strict"; return (' + U + ').constructor;')();
          } catch {}
        },
        i = Object.getOwnPropertyDescriptor;
      if (i)
        try {
          i({}, '');
        } catch {
          i = null;
        }
      var l = function () {
          throw new c();
        },
        s = i
          ? (function () {
              try {
                return arguments.callee, l;
              } catch {
                try {
                  return i(arguments, 'callee').get;
                } catch {
                  return l;
                }
              }
            })()
          : l,
        u = Jo()(),
        p = Xb()(),
        d =
          Object.getPrototypeOf ||
          (p
            ? function (U) {
                return U.__proto__;
              }
            : null),
        f = {},
        m = typeof Uint8Array > 'u' || !d ? r : d(Uint8Array),
        y = {
          '%AggregateError%': typeof AggregateError > 'u' ? r : AggregateError,
          '%Array%': Array,
          '%ArrayBuffer%': typeof ArrayBuffer > 'u' ? r : ArrayBuffer,
          '%ArrayIteratorPrototype%': u && d ? d([][Symbol.iterator]()) : r,
          '%AsyncFromSyncIteratorPrototype%': r,
          '%AsyncFunction%': f,
          '%AsyncGenerator%': f,
          '%AsyncGeneratorFunction%': f,
          '%AsyncIteratorPrototype%': f,
          '%Atomics%': typeof Atomics > 'u' ? r : Atomics,
          '%BigInt%': typeof BigInt > 'u' ? r : BigInt,
          '%BigInt64Array%': typeof BigInt64Array > 'u' ? r : BigInt64Array,
          '%BigUint64Array%': typeof BigUint64Array > 'u' ? r : BigUint64Array,
          '%Boolean%': Boolean,
          '%DataView%': typeof DataView > 'u' ? r : DataView,
          '%Date%': Date,
          '%decodeURI%': decodeURI,
          '%decodeURIComponent%': decodeURIComponent,
          '%encodeURI%': encodeURI,
          '%encodeURIComponent%': encodeURIComponent,
          '%Error%': Error,
          '%eval%': eval,
          '%EvalError%': EvalError,
          '%Float32Array%': typeof Float32Array > 'u' ? r : Float32Array,
          '%Float64Array%': typeof Float64Array > 'u' ? r : Float64Array,
          '%FinalizationRegistry%': typeof FinalizationRegistry > 'u' ? r : FinalizationRegistry,
          '%Function%': a,
          '%GeneratorFunction%': f,
          '%Int8Array%': typeof Int8Array > 'u' ? r : Int8Array,
          '%Int16Array%': typeof Int16Array > 'u' ? r : Int16Array,
          '%Int32Array%': typeof Int32Array > 'u' ? r : Int32Array,
          '%isFinite%': isFinite,
          '%isNaN%': isNaN,
          '%IteratorPrototype%': u && d ? d(d([][Symbol.iterator]())) : r,
          '%JSON%': typeof JSON == 'object' ? JSON : r,
          '%Map%': typeof Map > 'u' ? r : Map,
          '%MapIteratorPrototype%':
            typeof Map > 'u' || !u || !d ? r : d(new Map()[Symbol.iterator]()),
          '%Math%': Math,
          '%Number%': Number,
          '%Object%': Object,
          '%parseFloat%': parseFloat,
          '%parseInt%': parseInt,
          '%Promise%': typeof Promise > 'u' ? r : Promise,
          '%Proxy%': typeof Proxy > 'u' ? r : Proxy,
          '%RangeError%': RangeError,
          '%ReferenceError%': ReferenceError,
          '%Reflect%': typeof Reflect > 'u' ? r : Reflect,
          '%RegExp%': RegExp,
          '%Set%': typeof Set > 'u' ? r : Set,
          '%SetIteratorPrototype%':
            typeof Set > 'u' || !u || !d ? r : d(new Set()[Symbol.iterator]()),
          '%SharedArrayBuffer%': typeof SharedArrayBuffer > 'u' ? r : SharedArrayBuffer,
          '%String%': String,
          '%StringIteratorPrototype%': u && d ? d(''[Symbol.iterator]()) : r,
          '%Symbol%': u ? Symbol : r,
          '%SyntaxError%': o,
          '%ThrowTypeError%': s,
          '%TypedArray%': m,
          '%TypeError%': c,
          '%Uint8Array%': typeof Uint8Array > 'u' ? r : Uint8Array,
          '%Uint8ClampedArray%': typeof Uint8ClampedArray > 'u' ? r : Uint8ClampedArray,
          '%Uint16Array%': typeof Uint16Array > 'u' ? r : Uint16Array,
          '%Uint32Array%': typeof Uint32Array > 'u' ? r : Uint32Array,
          '%URIError%': URIError,
          '%WeakMap%': typeof WeakMap > 'u' ? r : WeakMap,
          '%WeakRef%': typeof WeakRef > 'u' ? r : WeakRef,
          '%WeakSet%': typeof WeakSet > 'u' ? r : WeakSet,
        };
      if (d)
        try {
          null.error;
        } catch (U) {
          (g = d(d(U))), (y['%Error.prototype%'] = g);
        }
      var g,
        h = function U(ee) {
          var G;
          if (ee === '%AsyncFunction%') G = n('async function () {}');
          else if (ee === '%GeneratorFunction%') G = n('function* () {}');
          else if (ee === '%AsyncGeneratorFunction%') G = n('async function* () {}');
          else if (ee === '%AsyncGenerator%') {
            var ne = U('%AsyncGeneratorFunction%');
            ne && (G = ne.prototype);
          } else if (ee === '%AsyncIteratorPrototype%') {
            var oe = U('%AsyncGenerator%');
            oe && d && (G = d(oe.prototype));
          }
          return (y[ee] = G), G;
        },
        v = {
          '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
          '%ArrayPrototype%': ['Array', 'prototype'],
          '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
          '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
          '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
          '%ArrayProto_values%': ['Array', 'prototype', 'values'],
          '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
          '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
          '%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
          '%BooleanPrototype%': ['Boolean', 'prototype'],
          '%DataViewPrototype%': ['DataView', 'prototype'],
          '%DatePrototype%': ['Date', 'prototype'],
          '%ErrorPrototype%': ['Error', 'prototype'],
          '%EvalErrorPrototype%': ['EvalError', 'prototype'],
          '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
          '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
          '%FunctionPrototype%': ['Function', 'prototype'],
          '%Generator%': ['GeneratorFunction', 'prototype'],
          '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
          '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
          '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
          '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
          '%JSONParse%': ['JSON', 'parse'],
          '%JSONStringify%': ['JSON', 'stringify'],
          '%MapPrototype%': ['Map', 'prototype'],
          '%NumberPrototype%': ['Number', 'prototype'],
          '%ObjectPrototype%': ['Object', 'prototype'],
          '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
          '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
          '%PromisePrototype%': ['Promise', 'prototype'],
          '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
          '%Promise_all%': ['Promise', 'all'],
          '%Promise_reject%': ['Promise', 'reject'],
          '%Promise_resolve%': ['Promise', 'resolve'],
          '%RangeErrorPrototype%': ['RangeError', 'prototype'],
          '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
          '%RegExpPrototype%': ['RegExp', 'prototype'],
          '%SetPrototype%': ['Set', 'prototype'],
          '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
          '%StringPrototype%': ['String', 'prototype'],
          '%SymbolPrototype%': ['Symbol', 'prototype'],
          '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
          '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
          '%TypeErrorPrototype%': ['TypeError', 'prototype'],
          '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
          '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
          '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
          '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
          '%URIErrorPrototype%': ['URIError', 'prototype'],
          '%WeakMapPrototype%': ['WeakMap', 'prototype'],
          '%WeakSetPrototype%': ['WeakSet', 'prototype'],
        },
        S = rs(),
        E = ns(),
        C = S.call(Function.call, Array.prototype.concat),
        A = S.call(Function.apply, Array.prototype.splice),
        R = S.call(Function.call, String.prototype.replace),
        _ = S.call(Function.call, String.prototype.slice),
        O = S.call(Function.call, RegExp.prototype.exec),
        x =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        j = /\\(\\)?/g,
        z = function (U) {
          var ee = _(U, 0, 1),
            G = _(U, -1);
          if (ee === '%' && G !== '%')
            throw new o('invalid intrinsic syntax, expected closing `%`');
          if (G === '%' && ee !== '%')
            throw new o('invalid intrinsic syntax, expected opening `%`');
          var ne = [];
          return (
            R(U, x, function (oe, ue, ce, q) {
              ne[ne.length] = ce ? R(q, j, '$1') : ue || oe;
            }),
            ne
          );
        },
        V = function (U, ee) {
          var G = U,
            ne;
          if ((E(v, G) && ((ne = v[G]), (G = '%' + ne[0] + '%')), E(y, G))) {
            var oe = y[G];
            if ((oe === f && (oe = h(G)), typeof oe > 'u' && !ee))
              throw new c(
                'intrinsic ' + U + ' exists, but is not available. Please file an issue!',
              );
            return { alias: ne, name: G, value: oe };
          }
          throw new o('intrinsic ' + U + ' does not exist!');
        };
      t.exports = function (U, ee) {
        if (typeof U != 'string' || U.length === 0)
          throw new c('intrinsic name must be a non-empty string');
        if (arguments.length > 1 && typeof ee != 'boolean')
          throw new c('"allowMissing" argument must be a boolean');
        if (O(/^%?[^%]*%?$/, U) === null)
          throw new o(
            '`%` may not be present anywhere but at the beginning and end of the intrinsic name',
          );
        var G = z(U),
          ne = G.length > 0 ? G[0] : '',
          oe = V('%' + ne + '%', ee),
          ue = oe.name,
          ce = oe.value,
          q = !1,
          M = oe.alias;
        M && ((ne = M[0]), A(G, C([0, 1], M)));
        for (var k = 1, D = !0; k < G.length; k += 1) {
          var Y = G[k],
            I = _(Y, 0, 1),
            N = _(Y, -1);
          if (
            (I === '"' || I === "'" || I === '`' || N === '"' || N === "'" || N === '`') &&
            I !== N
          )
            throw new o('property names with quotes must have matching quotes');
          if (
            ((Y === 'constructor' || !D) && (q = !0),
            (ne += '.' + Y),
            (ue = '%' + ne + '%'),
            E(y, ue))
          )
            ce = y[ue];
          else if (ce != null) {
            if (!(Y in ce)) {
              if (!ee)
                throw new c(
                  'base intrinsic for ' + U + ' exists, but the property is not available.',
                );
              return;
            }
            if (i && k + 1 >= G.length) {
              var H = i(ce, Y);
              (D = !!H),
                D && 'get' in H && !('originalValue' in H.get) ? (ce = H.get) : (ce = ce[Y]);
            } else (D = E(ce, Y)), (ce = ce[Y]);
            D && !q && (y[ue] = ce);
          }
        }
        return ce;
      };
    },
  }),
  Rn = P({
    '../../node_modules/has-property-descriptors/index.js'(e, t) {
      var r = et(),
        o = r('%Object.defineProperty%', !0),
        a = function () {
          if (o)
            try {
              return o({}, 'a', { value: 1 }), !0;
            } catch {
              return !1;
            }
          return !1;
        };
      (a.hasArrayLengthDefineBug = function () {
        if (!a()) return null;
        try {
          return o([], 'length', { value: 1 }).length !== 1;
        } catch {
          return !0;
        }
      }),
        (t.exports = a);
    },
  }),
  Xo = P({
    '../../node_modules/gopd/index.js'(e, t) {
      var r = et(),
        o = r('%Object.getOwnPropertyDescriptor%', !0);
      if (o)
        try {
          o([], 'length');
        } catch {
          o = null;
        }
      t.exports = o;
    },
  }),
  Qo = P({
    '../../node_modules/define-data-property/index.js'(e, t) {
      var r = Rn()(),
        o = et(),
        a = r && o('%Object.defineProperty%', !0);
      if (a)
        try {
          a({}, 'a', { value: 1 });
        } catch {
          a = !1;
        }
      var c = o('%SyntaxError%'),
        n = o('%TypeError%'),
        i = Xo();
      t.exports = function (l, s, u) {
        if (!l || (typeof l != 'object' && typeof l != 'function'))
          throw new n('`obj` must be an object or a function`');
        if (typeof s != 'string' && typeof s != 'symbol')
          throw new n('`property` must be a string or a symbol`');
        if (arguments.length > 3 && typeof arguments[3] != 'boolean' && arguments[3] !== null)
          throw new n('`nonEnumerable`, if provided, must be a boolean or null');
        if (arguments.length > 4 && typeof arguments[4] != 'boolean' && arguments[4] !== null)
          throw new n('`nonWritable`, if provided, must be a boolean or null');
        if (arguments.length > 5 && typeof arguments[5] != 'boolean' && arguments[5] !== null)
          throw new n('`nonConfigurable`, if provided, must be a boolean or null');
        if (arguments.length > 6 && typeof arguments[6] != 'boolean')
          throw new n('`loose`, if provided, must be a boolean');
        var p = arguments.length > 3 ? arguments[3] : null,
          d = arguments.length > 4 ? arguments[4] : null,
          f = arguments.length > 5 ? arguments[5] : null,
          m = arguments.length > 6 ? arguments[6] : !1,
          y = !!i && i(l, s);
        if (a)
          a(l, s, {
            configurable: f === null && y ? y.configurable : !f,
            enumerable: p === null && y ? y.enumerable : !p,
            value: u,
            writable: d === null && y ? y.writable : !d,
          });
        else if (m || (!p && !d && !f)) l[s] = u;
        else
          throw new c(
            'This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.',
          );
      };
    },
  }),
  Ut = P({
    '../../node_modules/define-properties/index.js'(e, t) {
      var r = Yo(),
        o = typeof Symbol == 'function' && typeof Symbol('foo') == 'symbol',
        a = Object.prototype.toString,
        c = Array.prototype.concat,
        n = Qo(),
        i = function (p) {
          return typeof p == 'function' && a.call(p) === '[object Function]';
        },
        l = Rn()(),
        s = function (p, d, f, m) {
          if (d in p) {
            if (m === !0) {
              if (p[d] === f) return;
            } else if (!i(m) || !m()) return;
          }
          l ? n(p, d, f, !0) : n(p, d, f);
        },
        u = function (p, d) {
          var f = arguments.length > 2 ? arguments[2] : {},
            m = r(d);
          o && (m = c.call(m, Object.getOwnPropertySymbols(d)));
          for (var y = 0; y < m.length; y += 1) s(p, m[y], d[m[y]], f[m[y]]);
        };
      (u.supportsDescriptors = !!l), (t.exports = u);
    },
  }),
  Zb = P({
    '../../node_modules/set-function-length/index.js'(e, t) {
      var r = et(),
        o = Qo(),
        a = Rn()(),
        c = Xo(),
        n = r('%TypeError%'),
        i = r('%Math.floor%');
      t.exports = function (l, s) {
        if (typeof l != 'function') throw new n('`fn` is not a function');
        if (typeof s != 'number' || s < 0 || s > 4294967295 || i(s) !== s)
          throw new n('`length` must be a positive 32-bit integer');
        var u = arguments.length > 2 && !!arguments[2],
          p = !0,
          d = !0;
        if ('length' in l && c) {
          var f = c(l, 'length');
          f && !f.configurable && (p = !1), f && !f.writable && (d = !1);
        }
        return (p || d || !u) && (a ? o(l, 'length', s, !0, !0) : o(l, 'length', s)), l;
      };
    },
  }),
  fr = P({
    '../../node_modules/call-bind/index.js'(e, t) {
      var r = rs(),
        o = et(),
        a = Zb(),
        c = o('%TypeError%'),
        n = o('%Function.prototype.apply%'),
        i = o('%Function.prototype.call%'),
        l = o('%Reflect.apply%', !0) || r.call(i, n),
        s = o('%Object.defineProperty%', !0),
        u = o('%Math.max%');
      if (s)
        try {
          s({}, 'a', { value: 1 });
        } catch {
          s = null;
        }
      t.exports = function (d) {
        if (typeof d != 'function') throw new c('a function is required');
        var f = l(r, i, arguments);
        return a(f, 1 + u(0, d.length - (arguments.length - 1)), !0);
      };
      var p = function () {
        return l(r, n, arguments);
      };
      s ? s(t.exports, 'apply', { value: p }) : (t.exports.apply = p);
    },
  }),
  tt = P({
    '../../node_modules/call-bind/callBound.js'(e, t) {
      var r = et(),
        o = fr(),
        a = o(r('String.prototype.indexOf'));
      t.exports = function (c, n) {
        var i = r(c, !!n);
        return typeof i == 'function' && a(c, '.prototype.') > -1 ? o(i) : i;
      };
    },
  }),
  os = P({
    '../../node_modules/object.assign/implementation.js'(e, t) {
      var r = Yo(),
        o = Pn()(),
        a = tt(),
        c = Object,
        n = a('Array.prototype.push'),
        i = a('Object.prototype.propertyIsEnumerable'),
        l = o ? Object.getOwnPropertySymbols : null;
      t.exports = function (s, u) {
        if (s == null) throw new TypeError('target must be an object');
        var p = c(s);
        if (arguments.length === 1) return p;
        for (var d = 1; d < arguments.length; ++d) {
          var f = c(arguments[d]),
            m = r(f),
            y = o && (Object.getOwnPropertySymbols || l);
          if (y)
            for (var g = y(f), h = 0; h < g.length; ++h) {
              var v = g[h];
              i(f, v) && n(m, v);
            }
          for (var S = 0; S < m.length; ++S) {
            var E = m[S];
            if (i(f, E)) {
              var C = f[E];
              p[E] = C;
            }
          }
        }
        return p;
      };
    },
  }),
  as = P({
    '../../node_modules/object.assign/polyfill.js'(e, t) {
      var r = os(),
        o = function () {
          if (!Object.assign) return !1;
          for (var c = 'abcdefghijklmnopqrst', n = c.split(''), i = {}, l = 0; l < n.length; ++l)
            i[n[l]] = n[l];
          var s = Object.assign({}, i),
            u = '';
          for (var p in s) u += p;
          return c !== u;
        },
        a = function () {
          if (!Object.assign || !Object.preventExtensions) return !1;
          var c = Object.preventExtensions({ 1: 2 });
          try {
            Object.assign(c, 'xy');
          } catch {
            return c[1] === 'y';
          }
          return !1;
        };
      t.exports = function () {
        return !Object.assign || o() || a() ? r : Object.assign;
      };
    },
  }),
  eg = P({
    '../../node_modules/object.assign/shim.js'(e, t) {
      var r = Ut(),
        o = as();
      t.exports = function () {
        var a = o();
        return (
          r(
            Object,
            { assign: a },
            {
              assign: function () {
                return Object.assign !== a;
              },
            },
          ),
          a
        );
      };
    },
  }),
  tg = P({
    '../../node_modules/object.assign/index.js'(e, t) {
      var r = Ut(),
        o = fr(),
        a = os(),
        c = as(),
        n = eg(),
        i = o.apply(c()),
        l = function (s, u) {
          return i(Object, arguments);
        };
      r(l, { getPolyfill: c, implementation: a, shim: n }), (t.exports = l);
    },
  }),
  rg = P({
    '../../node_modules/functions-have-names/index.js'(e, t) {
      var r = function () {
          return typeof function () {}.name == 'string';
        },
        o = Object.getOwnPropertyDescriptor;
      if (o)
        try {
          o([], 'length');
        } catch {
          o = null;
        }
      r.functionsHaveConfigurableNames = function () {
        if (!r() || !o) return !1;
        var c = o(function () {}, 'name');
        return !!c && !!c.configurable;
      };
      var a = Function.prototype.bind;
      (r.boundFunctionsHaveNames = function () {
        return r() && typeof a == 'function' && function () {}.bind().name !== '';
      }),
        (t.exports = r);
    },
  }),
  ng = P({
    '../../node_modules/set-function-name/index.js'(e, t) {
      var r = Qo(),
        o = Rn()(),
        a = rg().functionsHaveConfigurableNames(),
        c = TypeError;
      t.exports = function (n, i) {
        if (typeof n != 'function') throw new c('`fn` is not a function');
        var l = arguments.length > 2 && !!arguments[2];
        return (!l || a) && (o ? r(n, 'name', i, !0, !0) : r(n, 'name', i)), n;
      };
    },
  }),
  is = P({
    '../../node_modules/regexp.prototype.flags/implementation.js'(e, t) {
      var r = ng(),
        o = Object,
        a = TypeError;
      t.exports = r(
        function () {
          if (this != null && this !== o(this))
            throw new a('RegExp.prototype.flags getter called on non-object');
          var c = '';
          return (
            this.hasIndices && (c += 'd'),
            this.global && (c += 'g'),
            this.ignoreCase && (c += 'i'),
            this.multiline && (c += 'm'),
            this.dotAll && (c += 's'),
            this.unicode && (c += 'u'),
            this.unicodeSets && (c += 'v'),
            this.sticky && (c += 'y'),
            c
          );
        },
        'get flags',
        !0,
      );
    },
  }),
  ls = P({
    '../../node_modules/regexp.prototype.flags/polyfill.js'(e, t) {
      var r = is(),
        o = Ut().supportsDescriptors,
        a = Object.getOwnPropertyDescriptor;
      t.exports = function () {
        if (o && /a/gim.flags === 'gim') {
          var c = a(RegExp.prototype, 'flags');
          if (
            c &&
            typeof c.get == 'function' &&
            typeof RegExp.prototype.dotAll == 'boolean' &&
            typeof RegExp.prototype.hasIndices == 'boolean'
          ) {
            var n = '',
              i = {};
            if (
              (Object.defineProperty(i, 'hasIndices', {
                get: function () {
                  n += 'd';
                },
              }),
              Object.defineProperty(i, 'sticky', {
                get: function () {
                  n += 'y';
                },
              }),
              n === 'dy')
            )
              return c.get;
          }
        }
        return r;
      };
    },
  }),
  og = P({
    '../../node_modules/regexp.prototype.flags/shim.js'(e, t) {
      var r = Ut().supportsDescriptors,
        o = ls(),
        a = Object.getOwnPropertyDescriptor,
        c = Object.defineProperty,
        n = TypeError,
        i = Object.getPrototypeOf,
        l = /a/;
      t.exports = function () {
        if (!r || !i)
          throw new n(
            'RegExp.prototype.flags requires a true ES5 environment that supports property descriptors',
          );
        var s = o(),
          u = i(l),
          p = a(u, 'flags');
        return (
          (!p || p.get !== s) && c(u, 'flags', { configurable: !0, enumerable: !1, get: s }), s
        );
      };
    },
  }),
  ag = P({
    '../../node_modules/regexp.prototype.flags/index.js'(e, t) {
      var r = Ut(),
        o = fr(),
        a = is(),
        c = ls(),
        n = og(),
        i = o(c());
      r(i, { getPolyfill: c, implementation: a, shim: n }), (t.exports = i);
    },
  }),
  Ht = P({
    '../../node_modules/has-tostringtag/shams.js'(e, t) {
      var r = Pn();
      t.exports = function () {
        return r() && !!Symbol.toStringTag;
      };
    },
  }),
  ss = P({
    '../../node_modules/is-arguments/index.js'(e, t) {
      var r = Ht()(),
        o = tt(),
        a = o('Object.prototype.toString'),
        c = function (l) {
          return r && l && typeof l == 'object' && Symbol.toStringTag in l
            ? !1
            : a(l) === '[object Arguments]';
        },
        n = function (l) {
          return c(l)
            ? !0
            : l !== null &&
                typeof l == 'object' &&
                typeof l.length == 'number' &&
                l.length >= 0 &&
                a(l) !== '[object Array]' &&
                a(l.callee) === '[object Function]';
        },
        i = (function () {
          return c(arguments);
        })();
      (c.isLegacyArguments = n), (t.exports = i ? c : n);
    },
  }),
  ig = P({ '(disabled):../../node_modules/object-inspect/util.inspect'() {} }),
  lg = P({
    '../../node_modules/object-inspect/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype,
        o =
          Object.getOwnPropertyDescriptor && r
            ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
            : null,
        a = r && o && typeof o.get == 'function' ? o.get : null,
        c = r && Map.prototype.forEach,
        n = typeof Set == 'function' && Set.prototype,
        i =
          Object.getOwnPropertyDescriptor && n
            ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
            : null,
        l = n && i && typeof i.get == 'function' ? i.get : null,
        s = n && Set.prototype.forEach,
        u = typeof WeakMap == 'function' && WeakMap.prototype,
        p = u ? WeakMap.prototype.has : null,
        d = typeof WeakSet == 'function' && WeakSet.prototype,
        f = d ? WeakSet.prototype.has : null,
        m = typeof WeakRef == 'function' && WeakRef.prototype,
        y = m ? WeakRef.prototype.deref : null,
        g = Boolean.prototype.valueOf,
        h = Object.prototype.toString,
        v = Function.prototype.toString,
        S = String.prototype.match,
        E = String.prototype.slice,
        C = String.prototype.replace,
        A = String.prototype.toUpperCase,
        R = String.prototype.toLowerCase,
        _ = RegExp.prototype.test,
        O = Array.prototype.concat,
        x = Array.prototype.join,
        j = Array.prototype.slice,
        z = Math.floor,
        V = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
        U = Object.getOwnPropertySymbols,
        ee =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? Symbol.prototype.toString
            : null,
        G = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
        ne =
          typeof Symbol == 'function' &&
          Symbol.toStringTag &&
          (typeof Symbol.toStringTag === G || 'symbol')
            ? Symbol.toStringTag
            : null,
        oe = Object.prototype.propertyIsEnumerable,
        ue =
          (typeof Reflect == 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) ||
          ([].__proto__ === Array.prototype
            ? function (J) {
                return J.__proto__;
              }
            : null);
      function ce(J, Q) {
        if (J === 1 / 0 || J === -1 / 0 || J !== J || (J && J > -1e3 && J < 1e3) || _.call(/e/, Q))
          return Q;
        var w = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
        if (typeof J == 'number') {
          var T = J < 0 ? -z(-J) : z(J);
          if (T !== J) {
            var F = String(T),
              K = E.call(Q, F.length + 1);
            return C.call(F, w, '$&_') + '.' + C.call(C.call(K, /([0-9]{3})/g, '$&_'), /_$/, '');
          }
        }
        return C.call(Q, w, '$&_');
      }
      var q = ig(),
        M = q.custom,
        k = X(M) ? M : null;
      t.exports = function J(Q, w, T, F) {
        var K = w || {};
        if (ae(K, 'quoteStyle') && K.quoteStyle !== 'single' && K.quoteStyle !== 'double')
          throw new TypeError('option "quoteStyle" must be "single" or "double"');
        if (
          ae(K, 'maxStringLength') &&
          (typeof K.maxStringLength == 'number'
            ? K.maxStringLength < 0 && K.maxStringLength !== 1 / 0
            : K.maxStringLength !== null)
        )
          throw new TypeError(
            'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`',
          );
        var te = ae(K, 'customInspect') ? K.customInspect : !0;
        if (typeof te != 'boolean' && te !== 'symbol')
          throw new TypeError(
            'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`',
          );
        if (
          ae(K, 'indent') &&
          K.indent !== null &&
          K.indent !== '	' &&
          !(parseInt(K.indent, 10) === K.indent && K.indent > 0)
        )
          throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
        if (ae(K, 'numericSeparator') && typeof K.numericSeparator != 'boolean')
          throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
        var le = K.numericSeparator;
        if (typeof Q > 'u') return 'undefined';
        if (Q === null) return 'null';
        if (typeof Q == 'boolean') return Q ? 'true' : 'false';
        if (typeof Q == 'string') return We(Q, K);
        if (typeof Q == 'number') {
          if (Q === 0) return 1 / 0 / Q > 0 ? '0' : '-0';
          var se = String(Q);
          return le ? ce(Q, se) : se;
        }
        if (typeof Q == 'bigint') {
          var de = String(Q) + 'n';
          return le ? ce(Q, de) : de;
        }
        var ye = typeof K.depth > 'u' ? 5 : K.depth;
        if ((typeof T > 'u' && (T = 0), T >= ye && ye > 0 && typeof Q == 'object'))
          return I(Q) ? '[Array]' : '[Object]';
        var me = Mt(K, T);
        if (typeof F > 'u') F = [];
        else if (Re(F, Q) >= 0) return '[Circular]';
        function re(Yt, Vr, Bd) {
          if ((Vr && ((F = j.call(F)), F.push(Vr)), Bd)) {
            var Aa = { depth: K.depth };
            return ae(K, 'quoteStyle') && (Aa.quoteStyle = K.quoteStyle), J(Yt, Aa, T + 1, F);
          }
          return J(Yt, K, T + 1, F);
        }
        if (typeof Q == 'function' && !H(Q)) {
          var Pe = pe(Q),
            Je = ct(Q, re);
          return (
            '[Function' +
            (Pe ? ': ' + Pe : ' (anonymous)') +
            ']' +
            (Je.length > 0 ? ' { ' + x.call(Je, ', ') + ' }' : '')
          );
        }
        if (X(Q)) {
          var Ae = G ? C.call(String(Q), /^(Symbol\(.*\))_[^)]*$/, '$1') : ee.call(Q);
          return typeof Q == 'object' && !G ? Se(Ae) : Ae;
        }
        if (Oe(Q)) {
          for (
            var qe = '<' + R.call(String(Q.nodeName)), ke = Q.attributes || [], St = 0;
            St < ke.length;
            St++
          )
            qe += ' ' + ke[St].name + '=' + D(Y(ke[St].value), 'double', K);
          return (
            (qe += '>'),
            Q.childNodes && Q.childNodes.length && (qe += '...'),
            (qe += '</' + R.call(String(Q.nodeName)) + '>'),
            qe
          );
        }
        if (I(Q)) {
          if (Q.length === 0) return '[]';
          var dt = ct(Q, re);
          return me && !ut(dt) ? '[' + De(dt, me) + ']' : '[ ' + x.call(dt, ', ') + ' ]';
        }
        if (Z(Q)) {
          var jt = ct(Q, re);
          return !('cause' in Error.prototype) && 'cause' in Q && !oe.call(Q, 'cause')
            ? '{ [' + String(Q) + '] ' + x.call(O.call('[cause]: ' + re(Q.cause), jt), ', ') + ' }'
            : jt.length === 0
              ? '[' + String(Q) + ']'
              : '{ [' + String(Q) + '] ' + x.call(jt, ', ') + ' }';
        }
        if (typeof Q == 'object' && te) {
          if (k && typeof Q[k] == 'function' && q) return q(Q, { depth: ye - T });
          if (te !== 'symbol' && typeof Q.inspect == 'function') return Q.inspect();
        }
        if (lt(Q)) {
          var Ct = [];
          return (
            c &&
              c.call(Q, function (Yt, Vr) {
                Ct.push(re(Vr, Q, !0) + ' => ' + re(Yt, Q));
              }),
            He('Map', a.call(Q), Ct, me)
          );
        }
        if (st(Q)) {
          var Kt = [];
          return (
            s &&
              s.call(Q, function (Yt) {
                Kt.push(re(Yt, Q));
              }),
            He('Set', l.call(Q), Kt, me)
          );
        }
        if (Ue(Q)) return Te('WeakMap');
        if (Ne(Q)) return Te('WeakSet');
        if (Ke(Q)) return Te('WeakRef');
        if (B(Q)) return Se(re(Number(Q)));
        if (W(Q)) return Se(re(V.call(Q)));
        if ($(Q)) return Se(g.call(Q));
        if (b(Q)) return Se(re(String(Q)));
        if (typeof window < 'u' && Q === window) return '{ [object Window] }';
        if (Q === global) return '{ [object globalThis] }';
        if (!N(Q) && !H(Q)) {
          var rt = ct(Q, re),
            Ra = ue ? ue(Q) === Object.prototype : Q instanceof Object || Q.constructor === Object,
            Dn = Q instanceof Object ? '' : 'null prototype',
            Ta =
              !Ra && ne && Object(Q) === Q && ne in Q ? E.call(ie(Q), 8, -1) : Dn ? 'Object' : '',
            Nd =
              Ra || typeof Q.constructor != 'function'
                ? ''
                : Q.constructor.name
                  ? Q.constructor.name + ' '
                  : '',
            kn = Nd + (Ta || Dn ? '[' + x.call(O.call([], Ta || [], Dn || []), ': ') + '] ' : '');
          return rt.length === 0
            ? kn + '{}'
            : me
              ? kn + '{' + De(rt, me) + '}'
              : kn + '{ ' + x.call(rt, ', ') + ' }';
        }
        return String(Q);
      };
      function D(J, Q, w) {
        var T = (w.quoteStyle || Q) === 'double' ? '"' : "'";
        return T + J + T;
      }
      function Y(J) {
        return C.call(String(J), /"/g, '&quot;');
      }
      function I(J) {
        return ie(J) === '[object Array]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function N(J) {
        return ie(J) === '[object Date]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function H(J) {
        return ie(J) === '[object RegExp]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function Z(J) {
        return ie(J) === '[object Error]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function b(J) {
        return ie(J) === '[object String]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function B(J) {
        return ie(J) === '[object Number]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function $(J) {
        return ie(J) === '[object Boolean]' && (!ne || !(typeof J == 'object' && ne in J));
      }
      function X(J) {
        if (G) return J && typeof J == 'object' && J instanceof Symbol;
        if (typeof J == 'symbol') return !0;
        if (!J || typeof J != 'object' || !ee) return !1;
        try {
          return ee.call(J), !0;
        } catch {}
        return !1;
      }
      function W(J) {
        if (!J || typeof J != 'object' || !V) return !1;
        try {
          return V.call(J), !0;
        } catch {}
        return !1;
      }
      var L =
        Object.prototype.hasOwnProperty ||
        function (J) {
          return J in this;
        };
      function ae(J, Q) {
        return L.call(J, Q);
      }
      function ie(J) {
        return h.call(J);
      }
      function pe(J) {
        if (J.name) return J.name;
        var Q = S.call(v.call(J), /^function\s*([\w$]+)/);
        return Q ? Q[1] : null;
      }
      function Re(J, Q) {
        if (J.indexOf) return J.indexOf(Q);
        for (var w = 0, T = J.length; w < T; w++) if (J[w] === Q) return w;
        return -1;
      }
      function lt(J) {
        if (!a || !J || typeof J != 'object') return !1;
        try {
          a.call(J);
          try {
            l.call(J);
          } catch {
            return !0;
          }
          return J instanceof Map;
        } catch {}
        return !1;
      }
      function Ue(J) {
        if (!p || !J || typeof J != 'object') return !1;
        try {
          p.call(J, p);
          try {
            f.call(J, f);
          } catch {
            return !0;
          }
          return J instanceof WeakMap;
        } catch {}
        return !1;
      }
      function Ke(J) {
        if (!y || !J || typeof J != 'object') return !1;
        try {
          return y.call(J), !0;
        } catch {}
        return !1;
      }
      function st(J) {
        if (!l || !J || typeof J != 'object') return !1;
        try {
          l.call(J);
          try {
            a.call(J);
          } catch {
            return !0;
          }
          return J instanceof Set;
        } catch {}
        return !1;
      }
      function Ne(J) {
        if (!f || !J || typeof J != 'object') return !1;
        try {
          f.call(J, f);
          try {
            p.call(J, p);
          } catch {
            return !0;
          }
          return J instanceof WeakSet;
        } catch {}
        return !1;
      }
      function Oe(J) {
        return !J || typeof J != 'object'
          ? !1
          : typeof HTMLElement < 'u' && J instanceof HTMLElement
            ? !0
            : typeof J.nodeName == 'string' && typeof J.getAttribute == 'function';
      }
      function We(J, Q) {
        if (J.length > Q.maxStringLength) {
          var w = J.length - Q.maxStringLength,
            T = '... ' + w + ' more character' + (w > 1 ? 's' : '');
          return We(E.call(J, 0, Q.maxStringLength), Q) + T;
        }
        var F = C.call(C.call(J, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, Ye);
        return D(F, 'single', Q);
      }
      function Ye(J) {
        var Q = J.charCodeAt(0),
          w = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[Q];
        return w ? '\\' + w : '\\x' + (Q < 16 ? '0' : '') + A.call(Q.toString(16));
      }
      function Se(J) {
        return 'Object(' + J + ')';
      }
      function Te(J) {
        return J + ' { ? }';
      }
      function He(J, Q, w, T) {
        var F = T ? De(w, T) : x.call(w, ', ');
        return J + ' (' + Q + ') {' + F + '}';
      }
      function ut(J) {
        for (var Q = 0; Q < J.length; Q++)
          if (
            Re(
              J[Q],
              `
`,
            ) >= 0
          )
            return !1;
        return !0;
      }
      function Mt(J, Q) {
        var w;
        if (J.indent === '	') w = '	';
        else if (typeof J.indent == 'number' && J.indent > 0) w = x.call(Array(J.indent + 1), ' ');
        else return null;
        return { base: w, prev: x.call(Array(Q + 1), w) };
      }
      function De(J, Q) {
        if (J.length === 0) return '';
        var w =
          `
` +
          Q.prev +
          Q.base;
        return (
          w +
          x.call(J, ',' + w) +
          `
` +
          Q.prev
        );
      }
      function ct(J, Q) {
        var w = I(J),
          T = [];
        if (w) {
          T.length = J.length;
          for (var F = 0; F < J.length; F++) T[F] = ae(J, F) ? Q(J[F], J) : '';
        }
        var K = typeof U == 'function' ? U(J) : [],
          te;
        if (G) {
          te = {};
          for (var le = 0; le < K.length; le++) te['$' + K[le]] = K[le];
        }
        for (var se in J)
          ae(J, se) &&
            ((w && String(Number(se)) === se && se < J.length) ||
              (G && te['$' + se] instanceof Symbol) ||
              (_.call(/[^\w$]/, se)
                ? T.push(Q(se, J) + ': ' + Q(J[se], J))
                : T.push(se + ': ' + Q(J[se], J))));
        if (typeof U == 'function')
          for (var de = 0; de < K.length; de++)
            oe.call(J, K[de]) && T.push('[' + Q(K[de]) + ']: ' + Q(J[K[de]], J));
        return T;
      }
    },
  }),
  us = P({
    '../../node_modules/side-channel/index.js'(e, t) {
      var r = et(),
        o = tt(),
        a = lg(),
        c = r('%TypeError%'),
        n = r('%WeakMap%', !0),
        i = r('%Map%', !0),
        l = o('WeakMap.prototype.get', !0),
        s = o('WeakMap.prototype.set', !0),
        u = o('WeakMap.prototype.has', !0),
        p = o('Map.prototype.get', !0),
        d = o('Map.prototype.set', !0),
        f = o('Map.prototype.has', !0),
        m = function (v, S) {
          for (var E = v, C; (C = E.next) !== null; E = C)
            if (C.key === S) return (E.next = C.next), (C.next = v.next), (v.next = C), C;
        },
        y = function (v, S) {
          var E = m(v, S);
          return E && E.value;
        },
        g = function (v, S, E) {
          var C = m(v, S);
          C ? (C.value = E) : (v.next = { key: S, next: v.next, value: E });
        },
        h = function (v, S) {
          return !!m(v, S);
        };
      t.exports = function () {
        var v,
          S,
          E,
          C = {
            assert: function (A) {
              if (!C.has(A)) throw new c('Side channel does not contain ' + a(A));
            },
            get: function (A) {
              if (n && A && (typeof A == 'object' || typeof A == 'function')) {
                if (v) return l(v, A);
              } else if (i) {
                if (S) return p(S, A);
              } else if (E) return y(E, A);
            },
            has: function (A) {
              if (n && A && (typeof A == 'object' || typeof A == 'function')) {
                if (v) return u(v, A);
              } else if (i) {
                if (S) return f(S, A);
              } else if (E) return h(E, A);
              return !1;
            },
            set: function (A, R) {
              n && A && (typeof A == 'object' || typeof A == 'function')
                ? (v || (v = new n()), s(v, A, R))
                : i
                  ? (S || (S = new i()), d(S, A, R))
                  : (E || (E = { key: {}, next: null }), g(E, A, R));
            },
          };
        return C;
      };
    },
  }),
  sg = P({
    '../../node_modules/internal-slot/index.js'(e, t) {
      var r = et(),
        o = ns(),
        a = us()(),
        c = r('%TypeError%'),
        n = {
          assert: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            if ((a.assert(i), !n.has(i, l))) throw new c('`' + l + '` is not present on `O`');
          },
          get: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var s = a.get(i);
            return s && s['$' + l];
          },
          has: function (i, l) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var s = a.get(i);
            return !!s && o(s, '$' + l);
          },
          set: function (i, l, s) {
            if (!i || (typeof i != 'object' && typeof i != 'function'))
              throw new c('`O` is not an object');
            if (typeof l != 'string') throw new c('`slot` must be a string');
            var u = a.get(i);
            u || ((u = {}), a.set(i, u)), (u['$' + l] = s);
          },
        };
      Object.freeze && Object.freeze(n), (t.exports = n);
    },
  }),
  ug = P({
    '../../node_modules/stop-iteration-iterator/index.js'(e, t) {
      var r = sg(),
        o = SyntaxError,
        a = typeof StopIteration == 'object' ? StopIteration : null;
      t.exports = function (c) {
        if (!a) throw new o('this environment lacks StopIteration');
        r.set(c, '[[Done]]', !1);
        var n = {
          next: function () {
            var i = r.get(this, '[[Iterator]]'),
              l = r.get(i, '[[Done]]');
            try {
              return { done: l, value: l ? void 0 : i.next() };
            } catch (s) {
              if ((r.set(i, '[[Done]]', !0), s !== a)) throw s;
              return { done: !0, value: void 0 };
            }
          },
        };
        return r.set(n, '[[Iterator]]', c), n;
      };
    },
  }),
  cs = P({
    '../../node_modules/isarray/index.js'(e, t) {
      var r = {}.toString;
      t.exports =
        Array.isArray ||
        function (o) {
          return r.call(o) == '[object Array]';
        };
    },
  }),
  ds = P({
    '../../node_modules/is-string/index.js'(e, t) {
      var r = String.prototype.valueOf,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object String]',
        n = Ht()();
      t.exports = function (i) {
        return typeof i == 'string' ? !0 : typeof i != 'object' ? !1 : n ? o(i) : a.call(i) === c;
      };
    },
  }),
  ps = P({
    '../../node_modules/is-map/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype ? Map : null,
        o = typeof Set == 'function' && Set.prototype ? Set : null,
        a;
      r ||
        (a = function (i) {
          return !1;
        });
      var c = r ? Map.prototype.has : null,
        n = o ? Set.prototype.has : null;
      !a &&
        !c &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c.call(i), n))
                try {
                  n.call(i);
                } catch {
                  return !0;
                }
              return i instanceof r;
            } catch {}
            return !1;
          });
    },
  }),
  fs = P({
    '../../node_modules/is-set/index.js'(e, t) {
      var r = typeof Map == 'function' && Map.prototype ? Map : null,
        o = typeof Set == 'function' && Set.prototype ? Set : null,
        a;
      o ||
        (a = function (i) {
          return !1;
        });
      var c = r ? Map.prototype.has : null,
        n = o ? Set.prototype.has : null;
      !a &&
        !n &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((n.call(i), c))
                try {
                  c.call(i);
                } catch {
                  return !0;
                }
              return i instanceof o;
            } catch {}
            return !1;
          });
    },
  }),
  cg = P({
    '../../node_modules/es-get-iterator/index.js'(e, t) {
      var r = ss(),
        o = ug();
      Jo()() || Pn()()
        ? ((a = Symbol.iterator),
          (t.exports = function (x) {
            if (x != null && typeof x[a] < 'u') return x[a]();
            if (r(x)) return Array.prototype[a].call(x);
          }))
        : ((c = cs()),
          (n = ds()),
          (i = et()),
          (l = i('%Map%', !0)),
          (s = i('%Set%', !0)),
          (u = tt()),
          (p = u('Array.prototype.push')),
          (d = u('String.prototype.charCodeAt')),
          (f = u('String.prototype.slice')),
          (m = function (x, j) {
            var z = x.length;
            if (j + 1 >= z) return j + 1;
            var V = d(x, j);
            if (V < 55296 || V > 56319) return j + 1;
            var U = d(x, j + 1);
            return U < 56320 || U > 57343 ? j + 1 : j + 2;
          }),
          (y = function (x) {
            var j = 0;
            return {
              next: function () {
                var z = j >= x.length,
                  V;
                return z || ((V = x[j]), (j += 1)), { done: z, value: V };
              },
            };
          }),
          (g = function (x, j) {
            if (c(x) || r(x)) return y(x);
            if (n(x)) {
              var z = 0;
              return {
                next: function () {
                  var V = m(x, z),
                    U = f(x, z, V);
                  return (z = V), { done: V > x.length, value: U };
                },
              };
            }
            if (j && typeof x['_es6-shim iterator_'] < 'u') return x['_es6-shim iterator_']();
          }),
          !l && !s
            ? (t.exports = function (x) {
                if (x != null) return g(x, !0);
              })
            : ((h = ps()),
              (v = fs()),
              (S = u('Map.prototype.forEach', !0)),
              (E = u('Set.prototype.forEach', !0)),
              (typeof process > 'u' || !process.versions || !process.versions.node) &&
                ((C = u('Map.prototype.iterator', !0)), (A = u('Set.prototype.iterator', !0))),
              (R = u('Map.prototype.@@iterator', !0) || u('Map.prototype._es6-shim iterator_', !0)),
              (_ = u('Set.prototype.@@iterator', !0) || u('Set.prototype._es6-shim iterator_', !0)),
              (O = function (x) {
                if (h(x)) {
                  if (C) return o(C(x));
                  if (R) return R(x);
                  if (S) {
                    var j = [];
                    return (
                      S(x, function (V, U) {
                        p(j, [U, V]);
                      }),
                      y(j)
                    );
                  }
                }
                if (v(x)) {
                  if (A) return o(A(x));
                  if (_) return _(x);
                  if (E) {
                    var z = [];
                    return (
                      E(x, function (V) {
                        p(z, V);
                      }),
                      y(z)
                    );
                  }
                }
              }),
              (t.exports = function (x) {
                return O(x) || g(x);
              })));
      var a, c, n, i, l, s, u, p, d, f, m, y, g, h, v, S, E, C, A, R, _, O;
    },
  }),
  ms = P({
    '../../node_modules/object-is/implementation.js'(e, t) {
      var r = function (o) {
        return o !== o;
      };
      t.exports = function (o, a) {
        return o === 0 && a === 0 ? 1 / o === 1 / a : !!(o === a || (r(o) && r(a)));
      };
    },
  }),
  ys = P({
    '../../node_modules/object-is/polyfill.js'(e, t) {
      var r = ms();
      t.exports = function () {
        return typeof Object.is == 'function' ? Object.is : r;
      };
    },
  }),
  dg = P({
    '../../node_modules/object-is/shim.js'(e, t) {
      var r = ys(),
        o = Ut();
      t.exports = function () {
        var a = r();
        return (
          o(
            Object,
            { is: a },
            {
              is: function () {
                return Object.is !== a;
              },
            },
          ),
          a
        );
      };
    },
  }),
  pg = P({
    '../../node_modules/object-is/index.js'(e, t) {
      var r = Ut(),
        o = fr(),
        a = ms(),
        c = ys(),
        n = dg(),
        i = o(c(), Object);
      r(i, { getPolyfill: c, implementation: a, shim: n }), (t.exports = i);
    },
  }),
  fg = P({
    '../../node_modules/is-callable/index.js'(e, t) {
      var r = Function.prototype.toString,
        o = typeof Reflect == 'object' && Reflect !== null && Reflect.apply,
        a,
        c;
      if (typeof o == 'function' && typeof Object.defineProperty == 'function')
        try {
          (a = Object.defineProperty({}, 'length', {
            get: function () {
              throw c;
            },
          })),
            (c = {}),
            o(
              function () {
                throw 42;
              },
              null,
              a,
            );
        } catch (E) {
          E !== c && (o = null);
        }
      else o = null;
      var n = /^\s*class\b/,
        i = function (E) {
          try {
            var C = r.call(E);
            return n.test(C);
          } catch {
            return !1;
          }
        },
        l = function (E) {
          try {
            return i(E) ? !1 : (r.call(E), !0);
          } catch {
            return !1;
          }
        },
        s = Object.prototype.toString,
        u = '[object Object]',
        p = '[object Function]',
        d = '[object GeneratorFunction]',
        f = '[object HTMLAllCollection]',
        m = '[object HTML document.all class]',
        y = '[object HTMLCollection]',
        g = typeof Symbol == 'function' && !!Symbol.toStringTag,
        h = !(0 in [,]),
        v = function () {
          return !1;
        };
      typeof document == 'object' &&
        ((S = document.all),
        s.call(S) === s.call(document.all) &&
          (v = function (E) {
            if ((h || !E) && (typeof E > 'u' || typeof E == 'object'))
              try {
                var C = s.call(E);
                return (C === f || C === m || C === y || C === u) && E('') == null;
              } catch {}
            return !1;
          }));
      var S;
      t.exports = o
        ? function (E) {
            if (v(E)) return !0;
            if (!E || (typeof E != 'function' && typeof E != 'object')) return !1;
            try {
              o(E, null, a);
            } catch (C) {
              if (C !== c) return !1;
            }
            return !i(E) && l(E);
          }
        : function (E) {
            if (v(E)) return !0;
            if (!E || (typeof E != 'function' && typeof E != 'object')) return !1;
            if (g) return l(E);
            if (i(E)) return !1;
            var C = s.call(E);
            return C !== p && C !== d && !/^\[object HTML/.test(C) ? !1 : l(E);
          };
    },
  }),
  mg = P({
    '../../node_modules/for-each/index.js'(e, t) {
      var r = fg(),
        o = Object.prototype.toString,
        a = Object.prototype.hasOwnProperty,
        c = function (s, u, p) {
          for (var d = 0, f = s.length; d < f; d++)
            a.call(s, d) && (p == null ? u(s[d], d, s) : u.call(p, s[d], d, s));
        },
        n = function (s, u, p) {
          for (var d = 0, f = s.length; d < f; d++)
            p == null ? u(s.charAt(d), d, s) : u.call(p, s.charAt(d), d, s);
        },
        i = function (s, u, p) {
          for (var d in s) a.call(s, d) && (p == null ? u(s[d], d, s) : u.call(p, s[d], d, s));
        },
        l = function (s, u, p) {
          if (!r(u)) throw new TypeError('iterator must be a function');
          var d;
          arguments.length >= 3 && (d = p),
            o.call(s) === '[object Array]'
              ? c(s, u, d)
              : typeof s == 'string'
                ? n(s, u, d)
                : i(s, u, d);
        };
      t.exports = l;
    },
  }),
  yg = P({
    '../../node_modules/available-typed-arrays/index.js'(e, t) {
      var r = [
          'BigInt64Array',
          'BigUint64Array',
          'Float32Array',
          'Float64Array',
          'Int16Array',
          'Int32Array',
          'Int8Array',
          'Uint16Array',
          'Uint32Array',
          'Uint8Array',
          'Uint8ClampedArray',
        ],
        o = typeof globalThis > 'u' ? global : globalThis;
      t.exports = function () {
        for (var a = [], c = 0; c < r.length; c++)
          typeof o[r[c]] == 'function' && (a[a.length] = r[c]);
        return a;
      };
    },
  }),
  hs = P({
    '../../node_modules/which-typed-array/index.js'(e, t) {
      var r = mg(),
        o = yg(),
        a = fr(),
        c = tt(),
        n = Xo(),
        i = c('Object.prototype.toString'),
        l = Ht()(),
        s = typeof globalThis > 'u' ? global : globalThis,
        u = o(),
        p = c('String.prototype.slice'),
        d = Object.getPrototypeOf,
        f =
          c('Array.prototype.indexOf', !0) ||
          function (h, v) {
            for (var S = 0; S < h.length; S += 1) if (h[S] === v) return S;
            return -1;
          },
        m = { __proto__: null };
      l && n && d
        ? r(u, function (h) {
            var v = new s[h]();
            if (Symbol.toStringTag in v) {
              var S = d(v),
                E = n(S, Symbol.toStringTag);
              if (!E) {
                var C = d(S);
                E = n(C, Symbol.toStringTag);
              }
              m['$' + h] = a(E.get);
            }
          })
        : r(u, function (h) {
            var v = new s[h]();
            m['$' + h] = a(v.slice);
          });
      var y = function (h) {
          var v = !1;
          return (
            r(m, function (S, E) {
              if (!v)
                try {
                  '$' + S(h) === E && (v = p(E, 1));
                } catch {}
            }),
            v
          );
        },
        g = function (h) {
          var v = !1;
          return (
            r(m, function (S, E) {
              if (!v)
                try {
                  S(h), (v = p(E, 1));
                } catch {}
            }),
            v
          );
        };
      t.exports = function (h) {
        if (!h || typeof h != 'object') return !1;
        if (!l) {
          var v = p(i(h), 8, -1);
          return f(u, v) > -1 ? v : v !== 'Object' ? !1 : g(h);
        }
        return n ? y(h) : null;
      };
    },
  }),
  hg = P({
    '../../node_modules/is-typed-array/index.js'(e, t) {
      var r = hs();
      t.exports = function (o) {
        return !!r(o);
      };
    },
  }),
  bs = P({
    '../../node_modules/is-array-buffer/index.js'(e, t) {
      var r = fr(),
        o = tt(),
        a = et(),
        c = hg(),
        n = a('ArrayBuffer', !0),
        i = a('Float32Array', !0),
        l = o('ArrayBuffer.prototype.byteLength', !0),
        s = n && !l && new n().slice,
        u = s && r(s);
      t.exports =
        l || u
          ? function (p) {
              if (!p || typeof p != 'object') return !1;
              try {
                return l ? l(p) : u(p, 0), !0;
              } catch {
                return !1;
              }
            }
          : i
            ? function (p) {
                try {
                  return new i(p).buffer === p && !c(p);
                } catch (d) {
                  return typeof p == 'object' && d.name === 'RangeError';
                }
              }
            : function (p) {
                return !1;
              };
    },
  }),
  bg = P({
    '../../node_modules/is-date-object/index.js'(e, t) {
      var r = Date.prototype.getDay,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object Date]',
        n = Ht()();
      t.exports = function (i) {
        return typeof i != 'object' || i === null ? !1 : n ? o(i) : a.call(i) === c;
      };
    },
  }),
  gg = P({
    '../../node_modules/is-regex/index.js'(e, t) {
      var r = tt(),
        o = Ht()(),
        a,
        c,
        n,
        i;
      o &&
        ((a = r('Object.prototype.hasOwnProperty')),
        (c = r('RegExp.prototype.exec')),
        (n = {}),
        (l = function () {
          throw n;
        }),
        (i = { toString: l, valueOf: l }),
        typeof Symbol.toPrimitive == 'symbol' && (i[Symbol.toPrimitive] = l));
      var l,
        s = r('Object.prototype.toString'),
        u = Object.getOwnPropertyDescriptor,
        p = '[object RegExp]';
      t.exports = o
        ? function (d) {
            if (!d || typeof d != 'object') return !1;
            var f = u(d, 'lastIndex'),
              m = f && a(f, 'value');
            if (!m) return !1;
            try {
              c(d, i);
            } catch (y) {
              return y === n;
            }
          }
        : function (d) {
            return !d || (typeof d != 'object' && typeof d != 'function') ? !1 : s(d) === p;
          };
    },
  }),
  vg = P({
    '../../node_modules/is-shared-array-buffer/index.js'(e, t) {
      var r = tt(),
        o = r('SharedArrayBuffer.prototype.byteLength', !0);
      t.exports = o
        ? function (a) {
            if (!a || typeof a != 'object') return !1;
            try {
              return o(a), !0;
            } catch {
              return !1;
            }
          }
        : function (a) {
            return !1;
          };
    },
  }),
  _g = P({
    '../../node_modules/is-number-object/index.js'(e, t) {
      var r = Number.prototype.toString,
        o = function (i) {
          try {
            return r.call(i), !0;
          } catch {
            return !1;
          }
        },
        a = Object.prototype.toString,
        c = '[object Number]',
        n = Ht()();
      t.exports = function (i) {
        return typeof i == 'number' ? !0 : typeof i != 'object' ? !1 : n ? o(i) : a.call(i) === c;
      };
    },
  }),
  Eg = P({
    '../../node_modules/is-boolean-object/index.js'(e, t) {
      var r = tt(),
        o = r('Boolean.prototype.toString'),
        a = r('Object.prototype.toString'),
        c = function (l) {
          try {
            return o(l), !0;
          } catch {
            return !1;
          }
        },
        n = '[object Boolean]',
        i = Ht()();
      t.exports = function (l) {
        return typeof l == 'boolean'
          ? !0
          : l === null || typeof l != 'object'
            ? !1
            : i && Symbol.toStringTag in l
              ? c(l)
              : a(l) === n;
      };
    },
  }),
  wg = P({
    '../../node_modules/is-symbol/index.js'(e, t) {
      var r = Object.prototype.toString,
        o = Jo()();
      o
        ? ((a = Symbol.prototype.toString),
          (c = /^Symbol\(.*\)$/),
          (n = function (i) {
            return typeof i.valueOf() != 'symbol' ? !1 : c.test(a.call(i));
          }),
          (t.exports = function (i) {
            if (typeof i == 'symbol') return !0;
            if (r.call(i) !== '[object Symbol]') return !1;
            try {
              return n(i);
            } catch {
              return !1;
            }
          }))
        : (t.exports = function (i) {
            return !1;
          });
      var a, c, n;
    },
  }),
  Sg = P({
    '../../node_modules/has-bigints/index.js'(e, t) {
      var r = typeof BigInt < 'u' && BigInt;
      t.exports = function () {
        return (
          typeof r == 'function' &&
          typeof BigInt == 'function' &&
          typeof r(42) == 'bigint' &&
          typeof BigInt(42) == 'bigint'
        );
      };
    },
  }),
  Cg = P({
    '../../node_modules/is-bigint/index.js'(e, t) {
      var r = Sg()();
      r
        ? ((o = BigInt.prototype.valueOf),
          (a = function (c) {
            try {
              return o.call(c), !0;
            } catch {}
            return !1;
          }),
          (t.exports = function (c) {
            return c === null ||
              typeof c > 'u' ||
              typeof c == 'boolean' ||
              typeof c == 'string' ||
              typeof c == 'number' ||
              typeof c == 'symbol' ||
              typeof c == 'function'
              ? !1
              : typeof c == 'bigint'
                ? !0
                : a(c);
          }))
        : (t.exports = function (c) {
            return !1;
          });
      var o, a;
    },
  }),
  Og = P({
    '../../node_modules/which-boxed-primitive/index.js'(e, t) {
      var r = ds(),
        o = _g(),
        a = Eg(),
        c = wg(),
        n = Cg();
      t.exports = function (i) {
        if (i == null || (typeof i != 'object' && typeof i != 'function')) return null;
        if (r(i)) return 'String';
        if (o(i)) return 'Number';
        if (a(i)) return 'Boolean';
        if (c(i)) return 'Symbol';
        if (n(i)) return 'BigInt';
      };
    },
  }),
  Pg = P({
    '../../node_modules/is-weakmap/index.js'(e, t) {
      var r = typeof WeakMap == 'function' && WeakMap.prototype ? WeakMap : null,
        o = typeof WeakSet == 'function' && WeakSet.prototype ? WeakSet : null,
        a;
      r ||
        (a = function (i) {
          return !1;
        });
      var c = r ? r.prototype.has : null,
        n = o ? o.prototype.has : null;
      !a &&
        !c &&
        (a = function (i) {
          return !1;
        }),
        (t.exports =
          a ||
          function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c.call(i, c), n))
                try {
                  n.call(i, n);
                } catch {
                  return !0;
                }
              return i instanceof r;
            } catch {}
            return !1;
          });
    },
  }),
  Rg = P({
    '../../node_modules/is-weakset/index.js'(e, t) {
      var r = et(),
        o = tt(),
        a = r('%WeakSet%', !0),
        c = o('WeakSet.prototype.has', !0);
      c
        ? ((n = o('WeakMap.prototype.has', !0)),
          (t.exports = function (i) {
            if (!i || typeof i != 'object') return !1;
            try {
              if ((c(i, c), n))
                try {
                  n(i, n);
                } catch {
                  return !0;
                }
              return i instanceof a;
            } catch {}
            return !1;
          }))
        : (t.exports = function (i) {
            return !1;
          });
      var n;
    },
  }),
  Tg = P({
    '../../node_modules/which-collection/index.js'(e, t) {
      var r = ps(),
        o = fs(),
        a = Pg(),
        c = Rg();
      t.exports = function (n) {
        if (n && typeof n == 'object') {
          if (r(n)) return 'Map';
          if (o(n)) return 'Set';
          if (a(n)) return 'WeakMap';
          if (c(n)) return 'WeakSet';
        }
        return !1;
      };
    },
  }),
  Ag = P({
    '../../node_modules/array-buffer-byte-length/index.js'(e, t) {
      var r = tt(),
        o = r('ArrayBuffer.prototype.byteLength', !0),
        a = bs();
      t.exports = function (c) {
        return a(c) ? (o ? o(c) : c.byteLength) : NaN;
      };
    },
  }),
  qg = P({
    '../../node_modules/deep-equal/index.js'(e, t) {
      var r = tg(),
        o = tt(),
        a = ag(),
        c = et(),
        n = cg(),
        i = us(),
        l = pg(),
        s = ss(),
        u = cs(),
        p = bs(),
        d = bg(),
        f = gg(),
        m = vg(),
        y = Yo(),
        g = Og(),
        h = Tg(),
        v = hs(),
        S = Ag(),
        E = o('SharedArrayBuffer.prototype.byteLength', !0),
        C = o('Date.prototype.getTime'),
        A = Object.getPrototypeOf,
        R = o('Object.prototype.toString'),
        _ = c('%Set%', !0),
        O = o('Map.prototype.has', !0),
        x = o('Map.prototype.get', !0),
        j = o('Map.prototype.size', !0),
        z = o('Set.prototype.add', !0),
        V = o('Set.prototype.delete', !0),
        U = o('Set.prototype.has', !0),
        ee = o('Set.prototype.size', !0);
      function G(I, N, H, Z) {
        for (var b = n(I), B; (B = b.next()) && !B.done; )
          if (q(N, B.value, H, Z)) return V(I, B.value), !0;
        return !1;
      }
      function ne(I) {
        if (typeof I > 'u') return null;
        if (typeof I != 'object')
          return typeof I == 'symbol'
            ? !1
            : typeof I == 'string' || typeof I == 'number'
              ? +I == +I
              : !0;
      }
      function oe(I, N, H, Z, b, B) {
        var $ = ne(H);
        if ($ != null) return $;
        var X = x(N, $),
          W = r({}, b, { strict: !1 });
        return (typeof X > 'u' && !O(N, $)) || !q(Z, X, W, B) ? !1 : !O(I, $) && q(Z, X, W, B);
      }
      function ue(I, N, H) {
        var Z = ne(H);
        return Z ?? (U(N, Z) && !U(I, Z));
      }
      function ce(I, N, H, Z, b, B) {
        for (var $ = n(I), X, W; (X = $.next()) && !X.done; )
          if (((W = X.value), q(H, W, b, B) && q(Z, x(N, W), b, B))) return V(I, W), !0;
        return !1;
      }
      function q(I, N, H, Z) {
        var b = H || {};
        if (b.strict ? l(I, N) : I === N) return !0;
        var B = g(I),
          $ = g(N);
        if (B !== $) return !1;
        if (!I || !N || (typeof I != 'object' && typeof N != 'object'))
          return b.strict ? l(I, N) : I == N;
        var X = Z.has(I),
          W = Z.has(N),
          L;
        if (X && W) {
          if (Z.get(I) === Z.get(N)) return !0;
        } else L = {};
        return X || Z.set(I, L), W || Z.set(N, L), Y(I, N, b, Z);
      }
      function M(I) {
        return !I ||
          typeof I != 'object' ||
          typeof I.length != 'number' ||
          typeof I.copy != 'function' ||
          typeof I.slice != 'function' ||
          (I.length > 0 && typeof I[0] != 'number')
          ? !1
          : !!(I.constructor && I.constructor.isBuffer && I.constructor.isBuffer(I));
      }
      function k(I, N, H, Z) {
        if (ee(I) !== ee(N)) return !1;
        for (var b = n(I), B = n(N), $, X, W; ($ = b.next()) && !$.done; )
          if ($.value && typeof $.value == 'object') W || (W = new _()), z(W, $.value);
          else if (!U(N, $.value)) {
            if (H.strict || !ue(I, N, $.value)) return !1;
            W || (W = new _()), z(W, $.value);
          }
        if (W) {
          for (; (X = B.next()) && !X.done; )
            if (X.value && typeof X.value == 'object') {
              if (!G(W, X.value, H.strict, Z)) return !1;
            } else if (!H.strict && !U(I, X.value) && !G(W, X.value, H.strict, Z)) return !1;
          return ee(W) === 0;
        }
        return !0;
      }
      function D(I, N, H, Z) {
        if (j(I) !== j(N)) return !1;
        for (var b = n(I), B = n(N), $, X, W, L, ae, ie; ($ = b.next()) && !$.done; )
          if (((L = $.value[0]), (ae = $.value[1]), L && typeof L == 'object'))
            W || (W = new _()), z(W, L);
          else if (((ie = x(N, L)), (typeof ie > 'u' && !O(N, L)) || !q(ae, ie, H, Z))) {
            if (H.strict || !oe(I, N, L, ae, H, Z)) return !1;
            W || (W = new _()), z(W, L);
          }
        if (W) {
          for (; (X = B.next()) && !X.done; )
            if (((L = X.value[0]), (ie = X.value[1]), L && typeof L == 'object')) {
              if (!ce(W, I, L, ie, H, Z)) return !1;
            } else if (
              !H.strict &&
              (!I.has(L) || !q(x(I, L), ie, H, Z)) &&
              !ce(W, I, L, ie, r({}, H, { strict: !1 }), Z)
            )
              return !1;
          return ee(W) === 0;
        }
        return !0;
      }
      function Y(I, N, H, Z) {
        var b, B;
        if (typeof I != typeof N || I == null || N == null || R(I) !== R(N) || s(I) !== s(N))
          return !1;
        var $ = u(I),
          X = u(N);
        if ($ !== X) return !1;
        var W = I instanceof Error,
          L = N instanceof Error;
        if (W !== L || ((W || L) && (I.name !== N.name || I.message !== N.message))) return !1;
        var ae = f(I),
          ie = f(N);
        if (ae !== ie || ((ae || ie) && (I.source !== N.source || a(I) !== a(N)))) return !1;
        var pe = d(I),
          Re = d(N);
        if (pe !== Re || ((pe || Re) && C(I) !== C(N)) || (H.strict && A && A(I) !== A(N)))
          return !1;
        var lt = v(I),
          Ue = v(N);
        if (lt !== Ue) return !1;
        if (lt || Ue) {
          if (I.length !== N.length) return !1;
          for (b = 0; b < I.length; b++) if (I[b] !== N[b]) return !1;
          return !0;
        }
        var Ke = M(I),
          st = M(N);
        if (Ke !== st) return !1;
        if (Ke || st) {
          if (I.length !== N.length) return !1;
          for (b = 0; b < I.length; b++) if (I[b] !== N[b]) return !1;
          return !0;
        }
        var Ne = p(I),
          Oe = p(N);
        if (Ne !== Oe) return !1;
        if (Ne || Oe)
          return S(I) !== S(N)
            ? !1
            : typeof Uint8Array == 'function' && q(new Uint8Array(I), new Uint8Array(N), H, Z);
        var We = m(I),
          Ye = m(N);
        if (We !== Ye) return !1;
        if (We || Ye)
          return E(I) !== E(N)
            ? !1
            : typeof Uint8Array == 'function' && q(new Uint8Array(I), new Uint8Array(N), H, Z);
        if (typeof I != typeof N) return !1;
        var Se = y(I),
          Te = y(N);
        if (Se.length !== Te.length) return !1;
        for (Se.sort(), Te.sort(), b = Se.length - 1; b >= 0; b--) if (Se[b] != Te[b]) return !1;
        for (b = Se.length - 1; b >= 0; b--) if (((B = Se[b]), !q(I[B], N[B], H, Z))) return !1;
        var He = h(I),
          ut = h(N);
        return He !== ut
          ? !1
          : He === 'Set' || ut === 'Set'
            ? k(I, N, H, Z)
            : He === 'Map'
              ? D(I, N, H, Z)
              : !0;
      }
      t.exports = function (I, N, H) {
        return q(I, N, H, i());
      };
    },
  }),
  xg = P({
    '../../node_modules/aria-query/lib/elementRoleMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = a(qg()),
        r = a(kr()),
        o = a(Ko());
      function a(R) {
        return R && R.__esModule ? R : { default: R };
      }
      function c(R, _) {
        return l(R) || i(R, _) || u(R, _) || n();
      }
      function n() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function i(R, _) {
        var O = R == null ? null : (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
        if (O != null) {
          var x = [],
            j = !0,
            z = !1,
            V,
            U;
          try {
            for (
              O = O.call(R);
              !(j = (V = O.next()).done) && (x.push(V.value), !(_ && x.length === _));
              j = !0
            );
          } catch (ee) {
            (z = !0), (U = ee);
          } finally {
            try {
              !j && O.return != null && O.return();
            } finally {
              if (z) throw U;
            }
          }
          return x;
        }
      }
      function l(R) {
        if (Array.isArray(R)) return R;
      }
      function s(R, _) {
        var O = (typeof Symbol < 'u' && R[Symbol.iterator]) || R['@@iterator'];
        if (!O) {
          if (Array.isArray(R) || (O = u(R)) || (_ && R && typeof R.length == 'number')) {
            O && (R = O);
            var x = 0,
              j = function () {};
            return {
              s: j,
              n: function () {
                return x >= R.length ? { done: !0 } : { done: !1, value: R[x++] };
              },
              e: function (ee) {
                throw ee;
              },
              f: j,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var z = !0,
          V = !1,
          U;
        return {
          s: function () {
            O = O.call(R);
          },
          n: function () {
            var ee = O.next();
            return (z = ee.done), ee;
          },
          e: function (ee) {
            (V = !0), (U = ee);
          },
          f: function () {
            try {
              !z && O.return != null && O.return();
            } finally {
              if (V) throw U;
            }
          },
        };
      }
      function u(R, _) {
        if (R) {
          if (typeof R == 'string') return p(R, _);
          var O = Object.prototype.toString.call(R).slice(8, -1);
          if (
            (O === 'Object' && R.constructor && (O = R.constructor.name),
            O === 'Map' || O === 'Set')
          )
            return Array.from(R);
          if (O === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(O))
            return p(R, _);
        }
      }
      function p(R, _) {
        (_ == null || _ > R.length) && (_ = R.length);
        for (var O = 0, x = new Array(_); O < _; O++) x[O] = R[O];
        return x;
      }
      var d = [],
        f = o.default.keys();
      for (E = 0; E < f.length; E++)
        if (((m = f[E]), (y = o.default.get(m)), y))
          for (g = [].concat(y.baseConcepts, y.relatedConcepts), S = 0; S < g.length; S++)
            (h = g[S]),
              h.module === 'HTML' &&
                ((v = h.concept),
                v &&
                  (function () {
                    var R = JSON.stringify(v),
                      _ = d.find(function (z) {
                        return JSON.stringify(z[0]) === R;
                      }),
                      O = void 0;
                    _ ? (O = _[1]) : (O = []);
                    for (var x = !0, j = 0; j < O.length; j++)
                      if (O[j] === m) {
                        x = !1;
                        break;
                      }
                    x && O.push(m), d.push([v, O]);
                  })());
      var m,
        y,
        g,
        h,
        v,
        S,
        E,
        C = {
          entries: function () {
            return d;
          },
          forEach: function (R) {
            var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              O = s(d),
              x;
            try {
              for (O.s(); !(x = O.n()).done; ) {
                var j = c(x.value, 2),
                  z = j[0],
                  V = j[1];
                R.call(_, V, z, d);
              }
            } catch (U) {
              O.e(U);
            } finally {
              O.f();
            }
          },
          get: function (R) {
            var _ = d.find(function (O) {
              return (0, t.default)(R, O[0]);
            });
            return _ && _[1];
          },
          has: function (R) {
            return !!C.get(R);
          },
          keys: function () {
            return d.map(function (R) {
              var _ = c(R, 1),
                O = _[0];
              return O;
            });
          },
          values: function () {
            return d.map(function (R) {
              var _ = c(R, 2),
                O = _[1];
              return O;
            });
          },
        },
        A = (0, r.default)(C, C.entries());
      e.default = A;
    },
  }),
  Mg = P({
    '../../node_modules/aria-query/lib/roleElementMap.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = void 0);
      var t = o(kr()),
        r = o(Ko());
      function o(h) {
        return h && h.__esModule ? h : { default: h };
      }
      function a(h, v) {
        return i(h) || n(h, v) || s(h, v) || c();
      }
      function c() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function n(h, v) {
        var S = h == null ? null : (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
        if (S != null) {
          var E = [],
            C = !0,
            A = !1,
            R,
            _;
          try {
            for (
              S = S.call(h);
              !(C = (R = S.next()).done) && (E.push(R.value), !(v && E.length === v));
              C = !0
            );
          } catch (O) {
            (A = !0), (_ = O);
          } finally {
            try {
              !C && S.return != null && S.return();
            } finally {
              if (A) throw _;
            }
          }
          return E;
        }
      }
      function i(h) {
        if (Array.isArray(h)) return h;
      }
      function l(h, v) {
        var S = (typeof Symbol < 'u' && h[Symbol.iterator]) || h['@@iterator'];
        if (!S) {
          if (Array.isArray(h) || (S = s(h)) || (v && h && typeof h.length == 'number')) {
            S && (h = S);
            var E = 0,
              C = function () {};
            return {
              s: C,
              n: function () {
                return E >= h.length ? { done: !0 } : { done: !1, value: h[E++] };
              },
              e: function (O) {
                throw O;
              },
              f: C,
            };
          }
          throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
        }
        var A = !0,
          R = !1,
          _;
        return {
          s: function () {
            S = S.call(h);
          },
          n: function () {
            var O = S.next();
            return (A = O.done), O;
          },
          e: function (O) {
            (R = !0), (_ = O);
          },
          f: function () {
            try {
              !A && S.return != null && S.return();
            } finally {
              if (R) throw _;
            }
          },
        };
      }
      function s(h, v) {
        if (h) {
          if (typeof h == 'string') return u(h, v);
          var S = Object.prototype.toString.call(h).slice(8, -1);
          if (
            (S === 'Object' && h.constructor && (S = h.constructor.name),
            S === 'Map' || S === 'Set')
          )
            return Array.from(h);
          if (S === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))
            return u(h, v);
        }
      }
      function u(h, v) {
        (v == null || v > h.length) && (v = h.length);
        for (var S = 0, E = new Array(v); S < v; S++) E[S] = h[S];
        return E;
      }
      var p = [],
        d = r.default.keys(),
        f = function (h) {
          var v = d[h],
            S = r.default.get(v);
          if (S)
            for (var E = [].concat(S.baseConcepts, S.relatedConcepts), C = 0; C < E.length; C++) {
              var A = E[C];
              if (A.module === 'HTML') {
                var R = A.concept;
                if (R) {
                  var _ = p.find(function (x) {
                      return x[0] === v;
                    }),
                    O = void 0;
                  _ ? (O = _[1]) : (O = []), O.push(R), p.push([v, O]);
                }
              }
            }
        };
      for (m = 0; m < d.length; m++) f(m);
      var m,
        y = {
          entries: function () {
            return p;
          },
          forEach: function (h) {
            var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
              S = l(p),
              E;
            try {
              for (S.s(); !(E = S.n()).done; ) {
                var C = a(E.value, 2),
                  A = C[0],
                  R = C[1];
                h.call(v, R, A, p);
              }
            } catch (_) {
              S.e(_);
            } finally {
              S.f();
            }
          },
          get: function (h) {
            var v = p.find(function (S) {
              return S[0] === h;
            });
            return v && v[1];
          },
          has: function (h) {
            return !!y.get(h);
          },
          keys: function () {
            return p.map(function (h) {
              var v = a(h, 1),
                S = v[0];
              return S;
            });
          },
          values: function () {
            return p.map(function (h) {
              var v = a(h, 2),
                S = v[1];
              return S;
            });
          },
        },
        g = (0, t.default)(y, y.entries());
      e.default = g;
    },
  }),
  Zo = P({
    '../../node_modules/aria-query/lib/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.roles = e.roleElements = e.elementRoles = e.dom = e.aria = void 0);
      var t = n(hy()),
        r = n(by()),
        o = n(Ko()),
        a = n(xg()),
        c = n(Mg());
      function n(d) {
        return d && d.__esModule ? d : { default: d };
      }
      var i = t.default;
      e.aria = i;
      var l = r.default;
      e.dom = l;
      var s = o.default;
      e.roles = s;
      var u = a.default;
      e.elementRoles = u;
      var p = c.default;
      e.roleElements = p;
    },
  }),
  gs = P({
    'node_modules/pretty-format/node_modules/ansi-styles/index.js'(e, t) {
      var r =
          (c = 0) =>
          (n) =>
            `\x1B[${38 + c};5;${n}m`,
        o =
          (c = 0) =>
          (n, i, l) =>
            `\x1B[${38 + c};2;${n};${i};${l}m`;
      function a() {
        let c = new Map(),
          n = {
            modifier: {
              reset: [0, 0],
              bold: [1, 22],
              dim: [2, 22],
              italic: [3, 23],
              underline: [4, 24],
              overline: [53, 55],
              inverse: [7, 27],
              hidden: [8, 28],
              strikethrough: [9, 29],
            },
            color: {
              black: [30, 39],
              red: [31, 39],
              green: [32, 39],
              yellow: [33, 39],
              blue: [34, 39],
              magenta: [35, 39],
              cyan: [36, 39],
              white: [37, 39],
              blackBright: [90, 39],
              redBright: [91, 39],
              greenBright: [92, 39],
              yellowBright: [93, 39],
              blueBright: [94, 39],
              magentaBright: [95, 39],
              cyanBright: [96, 39],
              whiteBright: [97, 39],
            },
            bgColor: {
              bgBlack: [40, 49],
              bgRed: [41, 49],
              bgGreen: [42, 49],
              bgYellow: [43, 49],
              bgBlue: [44, 49],
              bgMagenta: [45, 49],
              bgCyan: [46, 49],
              bgWhite: [47, 49],
              bgBlackBright: [100, 49],
              bgRedBright: [101, 49],
              bgGreenBright: [102, 49],
              bgYellowBright: [103, 49],
              bgBlueBright: [104, 49],
              bgMagentaBright: [105, 49],
              bgCyanBright: [106, 49],
              bgWhiteBright: [107, 49],
            },
          };
        (n.color.gray = n.color.blackBright),
          (n.bgColor.bgGray = n.bgColor.bgBlackBright),
          (n.color.grey = n.color.blackBright),
          (n.bgColor.bgGrey = n.bgColor.bgBlackBright);
        for (let [i, l] of Object.entries(n)) {
          for (let [s, u] of Object.entries(l))
            (n[s] = { open: `\x1B[${u[0]}m`, close: `\x1B[${u[1]}m` }),
              (l[s] = n[s]),
              c.set(u[0], u[1]);
          Object.defineProperty(n, i, { value: l, enumerable: !1 });
        }
        return (
          Object.defineProperty(n, 'codes', { value: c, enumerable: !1 }),
          (n.color.close = '\x1B[39m'),
          (n.bgColor.close = '\x1B[49m'),
          (n.color.ansi256 = r()),
          (n.color.ansi16m = o()),
          (n.bgColor.ansi256 = r(10)),
          (n.bgColor.ansi16m = o(10)),
          Object.defineProperties(n, {
            rgbToAnsi256: {
              value: (i, l, s) =>
                i === l && l === s
                  ? i < 8
                    ? 16
                    : i > 248
                      ? 231
                      : Math.round(((i - 8) / 247) * 24) + 232
                  : 16 +
                    36 * Math.round((i / 255) * 5) +
                    6 * Math.round((l / 255) * 5) +
                    Math.round((s / 255) * 5),
              enumerable: !1,
            },
            hexToRgb: {
              value: (i) => {
                let l = /(?<colorString>[a-f\d]{6}|[a-f\d]{3})/i.exec(i.toString(16));
                if (!l) return [0, 0, 0];
                let { colorString: s } = l.groups;
                s.length === 3 &&
                  (s = s
                    .split('')
                    .map((p) => p + p)
                    .join(''));
                let u = Number.parseInt(s, 16);
                return [(u >> 16) & 255, (u >> 8) & 255, u & 255];
              },
              enumerable: !1,
            },
            hexToAnsi256: { value: (i) => n.rgbToAnsi256(...n.hexToRgb(i)), enumerable: !1 },
          }),
          n
        );
      }
      Object.defineProperty(t, 'exports', { enumerable: !0, get: a });
    },
  }),
  Tn = P({
    'node_modules/pretty-format/build/collections.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printIteratorEntries = r),
        (e.printIteratorValues = o),
        (e.printListItems = a),
        (e.printObjectProperties = c);
      var t = (n, i) => {
        let l = Object.keys(n).sort(i);
        return (
          Object.getOwnPropertySymbols &&
            Object.getOwnPropertySymbols(n).forEach((s) => {
              Object.getOwnPropertyDescriptor(n, s).enumerable && l.push(s);
            }),
          l
        );
      };
      function r(n, i, l, s, u, p, d = ': ') {
        let f = '',
          m = n.next();
        if (!m.done) {
          f += i.spacingOuter;
          let y = l + i.indent;
          for (; !m.done; ) {
            let g = p(m.value[0], i, y, s, u),
              h = p(m.value[1], i, y, s, u);
            (f += y + g + d + h),
              (m = n.next()),
              m.done ? i.min || (f += ',') : (f += ',' + i.spacingInner);
          }
          f += i.spacingOuter + l;
        }
        return f;
      }
      function o(n, i, l, s, u, p) {
        let d = '',
          f = n.next();
        if (!f.done) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (; !f.done; )
            (d += m + p(f.value, i, m, s, u)),
              (f = n.next()),
              f.done ? i.min || (d += ',') : (d += ',' + i.spacingInner);
          d += i.spacingOuter + l;
        }
        return d;
      }
      function a(n, i, l, s, u, p) {
        let d = '';
        if (n.length) {
          d += i.spacingOuter;
          let f = l + i.indent;
          for (let m = 0; m < n.length; m++)
            (d += f),
              m in n && (d += p(n[m], i, f, s, u)),
              m < n.length - 1 ? (d += ',' + i.spacingInner) : i.min || (d += ',');
          d += i.spacingOuter + l;
        }
        return d;
      }
      function c(n, i, l, s, u, p) {
        let d = '',
          f = t(n, i.compareKeys);
        if (f.length) {
          d += i.spacingOuter;
          let m = l + i.indent;
          for (let y = 0; y < f.length; y++) {
            let g = f[y],
              h = p(g, i, m, s, u),
              v = p(n[g], i, m, s, u);
            (d += m + h + ': ' + v),
              y < f.length - 1 ? (d += ',' + i.spacingInner) : i.min || (d += ',');
          }
          d += i.spacingOuter + l;
        }
        return d;
      }
    },
  }),
  jg = P({
    'node_modules/pretty-format/build/plugins/AsymmetricMatcher.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Tn(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        o = r['jest-symbol-do-not-touch'] || r.Symbol,
        a = typeof o == 'function' && o.for ? o.for('jest.asymmetricMatcher') : 1267621,
        c = ' ',
        n = (u, p, d, f, m, y) => {
          let g = u.toString();
          return g === 'ArrayContaining' || g === 'ArrayNotContaining'
            ? ++f > p.maxDepth
              ? '[' + g + ']'
              : g + c + '[' + (0, t.printListItems)(u.sample, p, d, f, m, y) + ']'
            : g === 'ObjectContaining' || g === 'ObjectNotContaining'
              ? ++f > p.maxDepth
                ? '[' + g + ']'
                : g + c + '{' + (0, t.printObjectProperties)(u.sample, p, d, f, m, y) + '}'
              : g === 'StringMatching' ||
                  g === 'StringNotMatching' ||
                  g === 'StringContaining' ||
                  g === 'StringNotContaining'
                ? g + c + y(u.sample, p, d, f, m)
                : u.toAsymmetricMatcher();
        };
      e.serialize = n;
      var i = (u) => u && u.$$typeof === a;
      e.test = i;
      var l = { serialize: n, test: i },
        s = l;
      e.default = s;
    },
  }),
  Ig = P({
    '../../node_modules/ansi-regex/index.js'(e, t) {
      t.exports = ({ onlyFirst: r = !1 } = {}) => {
        let o = [
          '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
          '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))',
        ].join('|');
        return new RegExp(o, r ? void 0 : 'g');
      };
    },
  }),
  Ng = P({
    'node_modules/pretty-format/build/plugins/ConvertAnsi.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = o(Ig()),
        r = o(gs());
      function o(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var a = (s) =>
          s.replace((0, t.default)(), (u) => {
            switch (u) {
              case r.default.red.close:
              case r.default.green.close:
              case r.default.cyan.close:
              case r.default.gray.close:
              case r.default.white.close:
              case r.default.yellow.close:
              case r.default.bgRed.close:
              case r.default.bgGreen.close:
              case r.default.bgYellow.close:
              case r.default.inverse.close:
              case r.default.dim.close:
              case r.default.bold.close:
              case r.default.reset.open:
              case r.default.reset.close:
                return '</>';
              case r.default.red.open:
                return '<red>';
              case r.default.green.open:
                return '<green>';
              case r.default.cyan.open:
                return '<cyan>';
              case r.default.gray.open:
                return '<gray>';
              case r.default.white.open:
                return '<white>';
              case r.default.yellow.open:
                return '<yellow>';
              case r.default.bgRed.open:
                return '<bgRed>';
              case r.default.bgGreen.open:
                return '<bgGreen>';
              case r.default.bgYellow.open:
                return '<bgYellow>';
              case r.default.inverse.open:
                return '<inverse>';
              case r.default.dim.open:
                return '<dim>';
              case r.default.bold.open:
                return '<bold>';
              default:
                return '';
            }
          }),
        c = (s) => typeof s == 'string' && !!s.match((0, t.default)());
      e.test = c;
      var n = (s, u, p, d, f, m) => m(a(s), u, p, d, f);
      e.serialize = n;
      var i = { serialize: n, test: c },
        l = i;
      e.default = l;
    },
  }),
  Bg = P({
    'node_modules/pretty-format/build/plugins/DOMCollection.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Tn(),
        r = ' ',
        o = ['DOMStringMap', 'NamedNodeMap'],
        a = /^(HTML\w*Collection|NodeList)$/,
        c = (p) => o.indexOf(p) !== -1 || a.test(p),
        n = (p) => p && p.constructor && !!p.constructor.name && c(p.constructor.name);
      e.test = n;
      var i = (p) => p.constructor.name === 'NamedNodeMap',
        l = (p, d, f, m, y, g) => {
          let h = p.constructor.name;
          return ++m > d.maxDepth
            ? '[' + h + ']'
            : (d.min ? '' : h + r) +
                (o.indexOf(h) !== -1
                  ? '{' +
                    (0, t.printObjectProperties)(
                      i(p)
                        ? Array.from(p).reduce((v, S) => ((v[S.name] = S.value), v), {})
                        : { ...p },
                      d,
                      f,
                      m,
                      y,
                      g,
                    ) +
                    '}'
                  : '[' + (0, t.printListItems)(Array.from(p), d, f, m, y, g) + ']');
        };
      e.serialize = l;
      var s = { serialize: l, test: n },
        u = s;
      e.default = u;
    },
  }),
  $g = P({
    'node_modules/pretty-format/build/plugins/lib/escapeHTML.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }), (e.default = t);
      function t(r) {
        return r.replace(/</g, '&lt;').replace(/>/g, '&gt;');
      }
    },
  }),
  ea = P({
    'node_modules/pretty-format/build/plugins/lib/markup.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.printText =
          e.printProps =
          e.printElementAsLeaf =
          e.printElement =
          e.printComment =
          e.printChildren =
            void 0);
      var t = r($g());
      function r(s) {
        return s && s.__esModule ? s : { default: s };
      }
      var o = (s, u, p, d, f, m, y) => {
        let g = d + p.indent,
          h = p.colors;
        return s
          .map((v) => {
            let S = u[v],
              E = y(S, p, g, f, m);
            return (
              typeof S != 'string' &&
                (E.indexOf(`
`) !== -1 && (E = p.spacingOuter + g + E + p.spacingOuter + d),
                (E = '{' + E + '}')),
              p.spacingInner +
                d +
                h.prop.open +
                v +
                h.prop.close +
                '=' +
                h.value.open +
                E +
                h.value.close
            );
          })
          .join('');
      };
      e.printProps = o;
      var a = (s, u, p, d, f, m) =>
        s
          .map((y) => u.spacingOuter + p + (typeof y == 'string' ? c(y, u) : m(y, u, p, d, f)))
          .join('');
      e.printChildren = a;
      var c = (s, u) => {
        let p = u.colors.content;
        return p.open + (0, t.default)(s) + p.close;
      };
      e.printText = c;
      var n = (s, u) => {
        let p = u.colors.comment;
        return p.open + '<!--' + (0, t.default)(s) + '-->' + p.close;
      };
      e.printComment = n;
      var i = (s, u, p, d, f) => {
        let m = d.colors.tag;
        return (
          m.open +
          '<' +
          s +
          (u && m.close + u + d.spacingOuter + f + m.open) +
          (p
            ? '>' + m.close + p + d.spacingOuter + f + m.open + '</' + s
            : (u && !d.min ? '' : ' ') + '/') +
          '>' +
          m.close
        );
      };
      e.printElement = i;
      var l = (s, u) => {
        let p = u.colors.tag;
        return p.open + '<' + s + p.close + ' …' + p.open + ' />' + p.close;
      };
      e.printElementAsLeaf = l;
    },
  }),
  Dg = P({
    'node_modules/pretty-format/build/plugins/DOMElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ea(),
        r = 1,
        o = 3,
        a = 8,
        c = 11,
        n = /^((HTML|SVG)\w*)?Element$/,
        i = (g) => {
          try {
            return typeof g.hasAttribute == 'function' && g.hasAttribute('is');
          } catch {
            return !1;
          }
        },
        l = (g) => {
          let h = g.constructor.name,
            { nodeType: v, tagName: S } = g,
            E = (typeof S == 'string' && S.includes('-')) || i(g);
          return (
            (v === r && (n.test(h) || E)) ||
            (v === o && h === 'Text') ||
            (v === a && h === 'Comment') ||
            (v === c && h === 'DocumentFragment')
          );
        },
        s = (g) => {
          var h;
          return (
            (g == null || (h = g.constructor) === null || h === void 0 ? void 0 : h.name) && l(g)
          );
        };
      e.test = s;
      function u(g) {
        return g.nodeType === o;
      }
      function p(g) {
        return g.nodeType === a;
      }
      function d(g) {
        return g.nodeType === c;
      }
      var f = (g, h, v, S, E, C) => {
        if (u(g)) return (0, t.printText)(g.data, h);
        if (p(g)) return (0, t.printComment)(g.data, h);
        let A = d(g) ? 'DocumentFragment' : g.tagName.toLowerCase();
        return ++S > h.maxDepth
          ? (0, t.printElementAsLeaf)(A, h)
          : (0, t.printElement)(
              A,
              (0, t.printProps)(
                d(g)
                  ? []
                  : Array.from(g.attributes)
                      .map((R) => R.name)
                      .sort(),
                d(g)
                  ? {}
                  : Array.from(g.attributes).reduce((R, _) => ((R[_.name] = _.value), R), {}),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              (0, t.printChildren)(
                Array.prototype.slice.call(g.childNodes || g.children),
                h,
                v + h.indent,
                S,
                E,
                C,
              ),
              h,
              v,
            );
      };
      e.serialize = f;
      var m = { serialize: f, test: s },
        y = m;
      e.default = y;
    },
  }),
  kg = P({
    'node_modules/pretty-format/build/plugins/Immutable.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = Tn(),
        r = '@@__IMMUTABLE_ITERABLE__@@',
        o = '@@__IMMUTABLE_LIST__@@',
        a = '@@__IMMUTABLE_KEYED__@@',
        c = '@@__IMMUTABLE_MAP__@@',
        n = '@@__IMMUTABLE_ORDERED__@@',
        i = '@@__IMMUTABLE_RECORD__@@',
        l = '@@__IMMUTABLE_SEQ__@@',
        s = '@@__IMMUTABLE_SET__@@',
        u = '@@__IMMUTABLE_STACK__@@',
        p = (_) => 'Immutable.' + _,
        d = (_) => '[' + _ + ']',
        f = ' ',
        m = '…',
        y = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : p(U) + f + '{' + (0, t.printIteratorEntries)(_.entries(), O, x, j, z, V) + '}';
      function g(_) {
        let O = 0;
        return {
          next() {
            if (O < _._keys.length) {
              let x = _._keys[O++];
              return { done: !1, value: [x, _.get(x)] };
            }
            return { done: !0, value: void 0 };
          },
        };
      }
      var h = (_, O, x, j, z, V) => {
          let U = p(_._name || 'Record');
          return ++j > O.maxDepth
            ? d(U)
            : U + f + '{' + (0, t.printIteratorEntries)(g(_), O, x, j, z, V) + '}';
        },
        v = (_, O, x, j, z, V) => {
          let U = p('Seq');
          return ++j > O.maxDepth
            ? d(U)
            : _[a]
              ? U +
                f +
                '{' +
                (_._iter || _._object
                  ? (0, t.printIteratorEntries)(_.entries(), O, x, j, z, V)
                  : m) +
                '}'
              : U +
                f +
                '[' +
                (_._iter || _._array || _._collection || _._iterable
                  ? (0, t.printIteratorValues)(_.values(), O, x, j, z, V)
                  : m) +
                ']';
        },
        S = (_, O, x, j, z, V, U) =>
          ++j > O.maxDepth
            ? d(p(U))
            : p(U) + f + '[' + (0, t.printIteratorValues)(_.values(), O, x, j, z, V) + ']',
        E = (_, O, x, j, z, V) =>
          _[c]
            ? y(_, O, x, j, z, V, _[n] ? 'OrderedMap' : 'Map')
            : _[o]
              ? S(_, O, x, j, z, V, 'List')
              : _[s]
                ? S(_, O, x, j, z, V, _[n] ? 'OrderedSet' : 'Set')
                : _[u]
                  ? S(_, O, x, j, z, V, 'Stack')
                  : _[l]
                    ? v(_, O, x, j, z, V)
                    : h(_, O, x, j, z, V);
      e.serialize = E;
      var C = (_) => _ && (_[r] === !0 || _[i] === !0);
      e.test = C;
      var A = { serialize: E, test: C },
        R = A;
      e.default = R;
    },
  }),
  Lg = P({
    'node_modules/react-is/cjs/react-is.development.js'(e) {
      (function () {
        var t = 60103,
          r = 60106,
          o = 60107,
          a = 60108,
          c = 60114,
          n = 60109,
          i = 60110,
          l = 60112,
          s = 60113,
          u = 60120,
          p = 60115,
          d = 60116,
          f = 60121,
          m = 60122,
          y = 60117,
          g = 60129,
          h = 60131;
        if (typeof Symbol == 'function' && Symbol.for) {
          var v = Symbol.for;
          (t = v('react.element')),
            (r = v('react.portal')),
            (o = v('react.fragment')),
            (a = v('react.strict_mode')),
            (c = v('react.profiler')),
            (n = v('react.provider')),
            (i = v('react.context')),
            (l = v('react.forward_ref')),
            (s = v('react.suspense')),
            (u = v('react.suspense_list')),
            (p = v('react.memo')),
            (d = v('react.lazy')),
            (f = v('react.block')),
            (m = v('react.server.block')),
            (y = v('react.fundamental')),
            v('react.scope'),
            v('react.opaque.id'),
            (g = v('react.debug_trace_mode')),
            v('react.offscreen'),
            (h = v('react.legacy_hidden'));
        }
        var S = !1;
        function E($) {
          return !!(
            typeof $ == 'string' ||
            typeof $ == 'function' ||
            $ === o ||
            $ === c ||
            $ === g ||
            $ === a ||
            $ === s ||
            $ === u ||
            $ === h ||
            S ||
            (typeof $ == 'object' &&
              $ !== null &&
              ($.$$typeof === d ||
                $.$$typeof === p ||
                $.$$typeof === n ||
                $.$$typeof === i ||
                $.$$typeof === l ||
                $.$$typeof === y ||
                $.$$typeof === f ||
                $[0] === m))
          );
        }
        function C($) {
          if (typeof $ == 'object' && $ !== null) {
            var X = $.$$typeof;
            switch (X) {
              case t:
                var W = $.type;
                switch (W) {
                  case o:
                  case c:
                  case a:
                  case s:
                  case u:
                    return W;
                  default:
                    var L = W && W.$$typeof;
                    switch (L) {
                      case i:
                      case l:
                      case d:
                      case p:
                      case n:
                        return L;
                      default:
                        return X;
                    }
                }
              case r:
                return X;
            }
          }
        }
        var A = i,
          R = n,
          _ = t,
          O = l,
          x = o,
          j = d,
          z = p,
          V = r,
          U = c,
          ee = a,
          G = s,
          ne = !1,
          oe = !1;
        function ue($) {
          return (
            ne ||
              ((ne = !0),
              console.warn(
                'The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function ce($) {
          return (
            oe ||
              ((oe = !0),
              console.warn(
                'The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.',
              )),
            !1
          );
        }
        function q($) {
          return C($) === i;
        }
        function M($) {
          return C($) === n;
        }
        function k($) {
          return typeof $ == 'object' && $ !== null && $.$$typeof === t;
        }
        function D($) {
          return C($) === l;
        }
        function Y($) {
          return C($) === o;
        }
        function I($) {
          return C($) === d;
        }
        function N($) {
          return C($) === p;
        }
        function H($) {
          return C($) === r;
        }
        function Z($) {
          return C($) === c;
        }
        function b($) {
          return C($) === a;
        }
        function B($) {
          return C($) === s;
        }
        (e.ContextConsumer = A),
          (e.ContextProvider = R),
          (e.Element = _),
          (e.ForwardRef = O),
          (e.Fragment = x),
          (e.Lazy = j),
          (e.Memo = z),
          (e.Portal = V),
          (e.Profiler = U),
          (e.StrictMode = ee),
          (e.Suspense = G),
          (e.isAsyncMode = ue),
          (e.isConcurrentMode = ce),
          (e.isContextConsumer = q),
          (e.isContextProvider = M),
          (e.isElement = k),
          (e.isForwardRef = D),
          (e.isFragment = Y),
          (e.isLazy = I),
          (e.isMemo = N),
          (e.isPortal = H),
          (e.isProfiler = Z),
          (e.isStrictMode = b),
          (e.isSuspense = B),
          (e.isValidElementType = E),
          (e.typeOf = C);
      })();
    },
  }),
  Fg = P({
    'node_modules/react-is/index.js'(e, t) {
      t.exports = Lg();
    },
  }),
  Ug = P({
    'node_modules/pretty-format/build/plugins/ReactElement.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = a(Fg()),
        r = ea();
      function o(d) {
        if (typeof WeakMap != 'function') return null;
        var f = new WeakMap(),
          m = new WeakMap();
        return (o = function (y) {
          return y ? m : f;
        })(d);
      }
      function a(d, f) {
        if (!f && d && d.__esModule) return d;
        if (d === null || (typeof d != 'object' && typeof d != 'function')) return { default: d };
        var m = o(f);
        if (m && m.has(d)) return m.get(d);
        var y = {},
          g = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var h in d)
          if (h !== 'default' && Object.prototype.hasOwnProperty.call(d, h)) {
            var v = g ? Object.getOwnPropertyDescriptor(d, h) : null;
            v && (v.get || v.set) ? Object.defineProperty(y, h, v) : (y[h] = d[h]);
          }
        return (y.default = d), m && m.set(d, y), y;
      }
      var c = (d, f = []) => (
          Array.isArray(d)
            ? d.forEach((m) => {
                c(m, f);
              })
            : d != null && d !== !1 && f.push(d),
          f
        ),
        n = (d) => {
          let f = d.type;
          if (typeof f == 'string') return f;
          if (typeof f == 'function') return f.displayName || f.name || 'Unknown';
          if (t.isFragment(d)) return 'React.Fragment';
          if (t.isSuspense(d)) return 'React.Suspense';
          if (typeof f == 'object' && f !== null) {
            if (t.isContextProvider(d)) return 'Context.Provider';
            if (t.isContextConsumer(d)) return 'Context.Consumer';
            if (t.isForwardRef(d)) {
              if (f.displayName) return f.displayName;
              let m = f.render.displayName || f.render.name || '';
              return m !== '' ? 'ForwardRef(' + m + ')' : 'ForwardRef';
            }
            if (t.isMemo(d)) {
              let m = f.displayName || f.type.displayName || f.type.name || '';
              return m !== '' ? 'Memo(' + m + ')' : 'Memo';
            }
          }
          return 'UNDEFINED';
        },
        i = (d) => {
          let { props: f } = d;
          return Object.keys(f)
            .filter((m) => m !== 'children' && f[m] !== void 0)
            .sort();
        },
        l = (d, f, m, y, g, h) =>
          ++y > f.maxDepth
            ? (0, r.printElementAsLeaf)(n(d), f)
            : (0, r.printElement)(
                n(d),
                (0, r.printProps)(i(d), d.props, f, m + f.indent, y, g, h),
                (0, r.printChildren)(c(d.props.children), f, m + f.indent, y, g, h),
                f,
                m,
              );
      e.serialize = l;
      var s = (d) => d != null && t.isElement(d);
      e.test = s;
      var u = { serialize: l, test: s },
        p = u;
      e.default = p;
    },
  }),
  Hg = P({
    'node_modules/pretty-format/build/plugins/ReactTestComponent.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.test = e.serialize = e.default = void 0);
      var t = ea(),
        r = (function () {
          return typeof globalThis < 'u'
            ? globalThis
            : typeof r < 'u'
              ? r
              : typeof self < 'u'
                ? self
                : typeof window < 'u'
                  ? window
                  : Function('return this')();
        })(),
        o = r['jest-symbol-do-not-touch'] || r.Symbol,
        a = typeof o == 'function' && o.for ? o.for('react.test.json') : 245830487,
        c = (u) => {
          let { props: p } = u;
          return p
            ? Object.keys(p)
                .filter((d) => p[d] !== void 0)
                .sort()
            : [];
        },
        n = (u, p, d, f, m, y) =>
          ++f > p.maxDepth
            ? (0, t.printElementAsLeaf)(u.type, p)
            : (0, t.printElement)(
                u.type,
                u.props ? (0, t.printProps)(c(u), u.props, p, d + p.indent, f, m, y) : '',
                u.children ? (0, t.printChildren)(u.children, p, d + p.indent, f, m, y) : '',
                p,
                d,
              );
      e.serialize = n;
      var i = (u) => u && u.$$typeof === a;
      e.test = i;
      var l = { serialize: n, test: i },
        s = l;
      e.default = s;
    },
  }),
  zg = P({
    'node_modules/pretty-format/build/index.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.default = e.DEFAULT_OPTIONS = void 0),
        (e.format = N),
        (e.plugins = void 0);
      var t = u(gs()),
        r = Tn(),
        o = u(jg()),
        a = u(Ng()),
        c = u(Bg()),
        n = u(Dg()),
        i = u(kg()),
        l = u(Ug()),
        s = u(Hg());
      function u(b) {
        return b && b.__esModule ? b : { default: b };
      }
      var p = Object.prototype.toString,
        d = Date.prototype.toISOString,
        f = Error.prototype.toString,
        m = RegExp.prototype.toString,
        y = (b) => (typeof b.constructor == 'function' && b.constructor.name) || 'Object',
        g = (b) => typeof window < 'u' && b === window,
        h = /^Symbol\((.*)\)(.*)$/,
        v = /\n/gi,
        S = class extends Error {
          constructor(b, B) {
            super(b), (this.stack = B), (this.name = this.constructor.name);
          }
        };
      function E(b) {
        return (
          b === '[object Array]' ||
          b === '[object ArrayBuffer]' ||
          b === '[object DataView]' ||
          b === '[object Float32Array]' ||
          b === '[object Float64Array]' ||
          b === '[object Int8Array]' ||
          b === '[object Int16Array]' ||
          b === '[object Int32Array]' ||
          b === '[object Uint8Array]' ||
          b === '[object Uint8ClampedArray]' ||
          b === '[object Uint16Array]' ||
          b === '[object Uint32Array]'
        );
      }
      function C(b) {
        return Object.is(b, -0) ? '-0' : String(b);
      }
      function A(b) {
        return `${b}n`;
      }
      function R(b, B) {
        return B ? '[Function ' + (b.name || 'anonymous') + ']' : '[Function]';
      }
      function _(b) {
        return String(b).replace(h, 'Symbol($1)');
      }
      function O(b) {
        return '[' + f.call(b) + ']';
      }
      function x(b, B, $, X) {
        if (b === !0 || b === !1) return '' + b;
        if (b === void 0) return 'undefined';
        if (b === null) return 'null';
        let W = typeof b;
        if (W === 'number') return C(b);
        if (W === 'bigint') return A(b);
        if (W === 'string') return X ? '"' + b.replace(/"|\\/g, '\\$&') + '"' : '"' + b + '"';
        if (W === 'function') return R(b, B);
        if (W === 'symbol') return _(b);
        let L = p.call(b);
        return L === '[object WeakMap]'
          ? 'WeakMap {}'
          : L === '[object WeakSet]'
            ? 'WeakSet {}'
            : L === '[object Function]' || L === '[object GeneratorFunction]'
              ? R(b, B)
              : L === '[object Symbol]'
                ? _(b)
                : L === '[object Date]'
                  ? isNaN(+b)
                    ? 'Date { NaN }'
                    : d.call(b)
                  : L === '[object Error]'
                    ? O(b)
                    : L === '[object RegExp]'
                      ? $
                        ? m.call(b).replace(/[\\^$*+?.()|[\]{}]/g, '\\$&')
                        : m.call(b)
                      : b instanceof Error
                        ? O(b)
                        : null;
      }
      function j(b, B, $, X, W, L) {
        if (W.indexOf(b) !== -1) return '[Circular]';
        (W = W.slice()), W.push(b);
        let ae = ++X > B.maxDepth,
          ie = B.min;
        if (B.callToJSON && !ae && b.toJSON && typeof b.toJSON == 'function' && !L)
          return ee(b.toJSON(), B, $, X, W, !0);
        let pe = p.call(b);
        return pe === '[object Arguments]'
          ? ae
            ? '[Arguments]'
            : (ie ? '' : 'Arguments ') + '[' + (0, r.printListItems)(b, B, $, X, W, ee) + ']'
          : E(pe)
            ? ae
              ? '[' + b.constructor.name + ']'
              : (ie || (!B.printBasicPrototype && b.constructor.name === 'Array')
                  ? ''
                  : b.constructor.name + ' ') +
                '[' +
                (0, r.printListItems)(b, B, $, X, W, ee) +
                ']'
            : pe === '[object Map]'
              ? ae
                ? '[Map]'
                : 'Map {' + (0, r.printIteratorEntries)(b.entries(), B, $, X, W, ee, ' => ') + '}'
              : pe === '[object Set]'
                ? ae
                  ? '[Set]'
                  : 'Set {' + (0, r.printIteratorValues)(b.values(), B, $, X, W, ee) + '}'
                : ae || g(b)
                  ? '[' + y(b) + ']'
                  : (ie || (!B.printBasicPrototype && y(b) === 'Object') ? '' : y(b) + ' ') +
                    '{' +
                    (0, r.printObjectProperties)(b, B, $, X, W, ee) +
                    '}';
      }
      function z(b) {
        return b.serialize != null;
      }
      function V(b, B, $, X, W, L) {
        let ae;
        try {
          ae = z(b)
            ? b.serialize(B, $, X, W, L, ee)
            : b.print(
                B,
                (ie) => ee(ie, $, X, W, L),
                (ie) => {
                  let pe = X + $.indent;
                  return (
                    pe +
                    ie.replace(
                      v,
                      `
` + pe,
                    )
                  );
                },
                { edgeSpacing: $.spacingOuter, min: $.min, spacing: $.spacingInner },
                $.colors,
              );
        } catch (ie) {
          throw new S(ie.message, ie.stack);
        }
        if (typeof ae != 'string')
          throw new Error(
            `pretty-format: Plugin must return type "string" but instead returned "${typeof ae}".`,
          );
        return ae;
      }
      function U(b, B) {
        for (let $ = 0; $ < b.length; $++)
          try {
            if (b[$].test(B)) return b[$];
          } catch (X) {
            throw new S(X.message, X.stack);
          }
        return null;
      }
      function ee(b, B, $, X, W, L) {
        let ae = U(B.plugins, b);
        if (ae !== null) return V(ae, b, B, $, X, W);
        let ie = x(b, B.printFunctionName, B.escapeRegex, B.escapeString);
        return ie !== null ? ie : j(b, B, $, X, W, L);
      }
      var G = { comment: 'gray', content: 'reset', prop: 'yellow', tag: 'cyan', value: 'green' },
        ne = Object.keys(G),
        oe = {
          callToJSON: !0,
          compareKeys: void 0,
          escapeRegex: !1,
          escapeString: !0,
          highlight: !1,
          indent: 2,
          maxDepth: 1 / 0,
          min: !1,
          plugins: [],
          printBasicPrototype: !0,
          printFunctionName: !0,
          theme: G,
        };
      e.DEFAULT_OPTIONS = oe;
      function ue(b) {
        if (
          (Object.keys(b).forEach((B) => {
            if (!oe.hasOwnProperty(B)) throw new Error(`pretty-format: Unknown option "${B}".`);
          }),
          b.min && b.indent !== void 0 && b.indent !== 0)
        )
          throw new Error('pretty-format: Options "min" and "indent" cannot be used together.');
        if (b.theme !== void 0) {
          if (b.theme === null) throw new Error('pretty-format: Option "theme" must not be null.');
          if (typeof b.theme != 'object')
            throw new Error(
              `pretty-format: Option "theme" must be of type "object" but instead received "${typeof b.theme}".`,
            );
        }
      }
      var ce = (b) =>
          ne.reduce((B, $) => {
            let X = b.theme && b.theme[$] !== void 0 ? b.theme[$] : G[$],
              W = X && t.default[X];
            if (W && typeof W.close == 'string' && typeof W.open == 'string') B[$] = W;
            else
              throw new Error(
                `pretty-format: Option "theme" has a key "${$}" whose value "${X}" is undefined in ansi-styles.`,
              );
            return B;
          }, Object.create(null)),
        q = () => ne.reduce((b, B) => ((b[B] = { close: '', open: '' }), b), Object.create(null)),
        M = (b) =>
          b && b.printFunctionName !== void 0 ? b.printFunctionName : oe.printFunctionName,
        k = (b) => (b && b.escapeRegex !== void 0 ? b.escapeRegex : oe.escapeRegex),
        D = (b) => (b && b.escapeString !== void 0 ? b.escapeString : oe.escapeString),
        Y = (b) => {
          var B;
          return {
            callToJSON: b && b.callToJSON !== void 0 ? b.callToJSON : oe.callToJSON,
            colors: b && b.highlight ? ce(b) : q(),
            compareKeys: b && typeof b.compareKeys == 'function' ? b.compareKeys : oe.compareKeys,
            escapeRegex: k(b),
            escapeString: D(b),
            indent: b && b.min ? '' : I(b && b.indent !== void 0 ? b.indent : oe.indent),
            maxDepth: b && b.maxDepth !== void 0 ? b.maxDepth : oe.maxDepth,
            min: b && b.min !== void 0 ? b.min : oe.min,
            plugins: b && b.plugins !== void 0 ? b.plugins : oe.plugins,
            printBasicPrototype:
              (B = b == null ? void 0 : b.printBasicPrototype) !== null && B !== void 0 ? B : !0,
            printFunctionName: M(b),
            spacingInner:
              b && b.min
                ? ' '
                : `
`,
            spacingOuter:
              b && b.min
                ? ''
                : `
`,
          };
        };
      function I(b) {
        return new Array(b + 1).join(' ');
      }
      function N(b, B) {
        if (B && (ue(B), B.plugins)) {
          let X = U(B.plugins, b);
          if (X !== null) return V(X, b, Y(B), '', 0, []);
        }
        let $ = x(b, M(B), k(B), D(B));
        return $ !== null ? $ : j(b, Y(B), '', 0, []);
      }
      var H = {
        AsymmetricMatcher: o.default,
        ConvertAnsi: a.default,
        DOMCollection: c.default,
        DOMElement: n.default,
        Immutable: i.default,
        ReactElement: l.default,
        ReactTestComponent: s.default,
      };
      e.plugins = H;
      var Z = N;
      e.default = Z;
    },
  }),
  Vg = P({
    '../../node_modules/lz-string/libs/lz-string.js'(e, t) {
      var r = (function () {
        var o = String.fromCharCode,
          a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
          c = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$',
          n = {};
        function i(s, u) {
          if (!n[s]) {
            n[s] = {};
            for (var p = 0; p < s.length; p++) n[s][s.charAt(p)] = p;
          }
          return n[s][u];
        }
        var l = {
          compressToBase64: function (s) {
            if (s == null) return '';
            var u = l._compress(s, 6, function (p) {
              return a.charAt(p);
            });
            switch (u.length % 4) {
              default:
              case 0:
                return u;
              case 1:
                return u + '===';
              case 2:
                return u + '==';
              case 3:
                return u + '=';
            }
          },
          decompressFromBase64: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 32, function (u) {
                    return i(a, s.charAt(u));
                  });
          },
          compressToUTF16: function (s) {
            return s == null
              ? ''
              : l._compress(s, 15, function (u) {
                  return o(u + 32);
                }) + ' ';
          },
          decompressFromUTF16: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 16384, function (u) {
                    return s.charCodeAt(u) - 32;
                  });
          },
          compressToUint8Array: function (s) {
            for (
              var u = l.compress(s), p = new Uint8Array(u.length * 2), d = 0, f = u.length;
              d < f;
              d++
            ) {
              var m = u.charCodeAt(d);
              (p[d * 2] = m >>> 8), (p[d * 2 + 1] = m % 256);
            }
            return p;
          },
          decompressFromUint8Array: function (s) {
            if (s == null) return l.decompress(s);
            for (var u = new Array(s.length / 2), p = 0, d = u.length; p < d; p++)
              u[p] = s[p * 2] * 256 + s[p * 2 + 1];
            var f = [];
            return (
              u.forEach(function (m) {
                f.push(o(m));
              }),
              l.decompress(f.join(''))
            );
          },
          compressToEncodedURIComponent: function (s) {
            return s == null
              ? ''
              : l._compress(s, 6, function (u) {
                  return c.charAt(u);
                });
          },
          decompressFromEncodedURIComponent: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : ((s = s.replace(/ /g, '+')),
                  l._decompress(s.length, 32, function (u) {
                    return i(c, s.charAt(u));
                  }));
          },
          compress: function (s) {
            return l._compress(s, 16, function (u) {
              return o(u);
            });
          },
          _compress: function (s, u, p) {
            if (s == null) return '';
            var d,
              f,
              m = {},
              y = {},
              g = '',
              h = '',
              v = '',
              S = 2,
              E = 3,
              C = 2,
              A = [],
              R = 0,
              _ = 0,
              O;
            for (O = 0; O < s.length; O += 1)
              if (
                ((g = s.charAt(O)),
                Object.prototype.hasOwnProperty.call(m, g) || ((m[g] = E++), (y[g] = !0)),
                (h = v + g),
                Object.prototype.hasOwnProperty.call(m, h))
              )
                v = h;
              else {
                if (Object.prototype.hasOwnProperty.call(y, v)) {
                  if (v.charCodeAt(0) < 256) {
                    for (d = 0; d < C; d++)
                      (R = R << 1), _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++;
                    for (f = v.charCodeAt(0), d = 0; d < 8; d++)
                      (R = (R << 1) | (f & 1)),
                        _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                        (f = f >> 1);
                  } else {
                    for (f = 1, d = 0; d < C; d++)
                      (R = (R << 1) | f),
                        _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                        (f = 0);
                    for (f = v.charCodeAt(0), d = 0; d < 16; d++)
                      (R = (R << 1) | (f & 1)),
                        _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                        (f = f >> 1);
                  }
                  S--, S == 0 && ((S = Math.pow(2, C)), C++), delete y[v];
                } else
                  for (f = m[v], d = 0; d < C; d++)
                    (R = (R << 1) | (f & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                      (f = f >> 1);
                S--, S == 0 && ((S = Math.pow(2, C)), C++), (m[h] = E++), (v = String(g));
              }
            if (v !== '') {
              if (Object.prototype.hasOwnProperty.call(y, v)) {
                if (v.charCodeAt(0) < 256) {
                  for (d = 0; d < C; d++)
                    (R = R << 1), _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++;
                  for (f = v.charCodeAt(0), d = 0; d < 8; d++)
                    (R = (R << 1) | (f & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                      (f = f >> 1);
                } else {
                  for (f = 1, d = 0; d < C; d++)
                    (R = (R << 1) | f),
                      _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                      (f = 0);
                  for (f = v.charCodeAt(0), d = 0; d < 16; d++)
                    (R = (R << 1) | (f & 1)),
                      _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                      (f = f >> 1);
                }
                S--, S == 0 && ((S = Math.pow(2, C)), C++), delete y[v];
              } else
                for (f = m[v], d = 0; d < C; d++)
                  (R = (R << 1) | (f & 1)),
                    _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                    (f = f >> 1);
              S--, S == 0 && ((S = Math.pow(2, C)), C++);
            }
            for (f = 2, d = 0; d < C; d++)
              (R = (R << 1) | (f & 1)),
                _ == u - 1 ? ((_ = 0), A.push(p(R)), (R = 0)) : _++,
                (f = f >> 1);
            for (;;)
              if (((R = R << 1), _ == u - 1)) {
                A.push(p(R));
                break;
              } else _++;
            return A.join('');
          },
          decompress: function (s) {
            return s == null
              ? ''
              : s == ''
                ? null
                : l._decompress(s.length, 32768, function (u) {
                    return s.charCodeAt(u);
                  });
          },
          _decompress: function (s, u, p) {
            var d = [],
              f = 4,
              m = 4,
              y = 3,
              g = '',
              h = [],
              v,
              S,
              E,
              C,
              A,
              R,
              _,
              O = { val: p(0), position: u, index: 1 };
            for (v = 0; v < 3; v += 1) d[v] = v;
            for (E = 0, A = Math.pow(2, 2), R = 1; R != A; )
              (C = O.val & O.position),
                (O.position >>= 1),
                O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                (E |= (C > 0 ? 1 : 0) * R),
                (R <<= 1);
            switch (E) {
              case 0:
                for (E = 0, A = Math.pow(2, 8), R = 1; R != A; )
                  (C = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                    (E |= (C > 0 ? 1 : 0) * R),
                    (R <<= 1);
                _ = o(E);
                break;
              case 1:
                for (E = 0, A = Math.pow(2, 16), R = 1; R != A; )
                  (C = O.val & O.position),
                    (O.position >>= 1),
                    O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                    (E |= (C > 0 ? 1 : 0) * R),
                    (R <<= 1);
                _ = o(E);
                break;
              case 2:
                return '';
            }
            for (d[3] = _, S = _, h.push(_); ; ) {
              if (O.index > s) return '';
              for (E = 0, A = Math.pow(2, y), R = 1; R != A; )
                (C = O.val & O.position),
                  (O.position >>= 1),
                  O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                  (E |= (C > 0 ? 1 : 0) * R),
                  (R <<= 1);
              switch ((_ = E)) {
                case 0:
                  for (E = 0, A = Math.pow(2, 8), R = 1; R != A; )
                    (C = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                      (E |= (C > 0 ? 1 : 0) * R),
                      (R <<= 1);
                  (d[m++] = o(E)), (_ = m - 1), f--;
                  break;
                case 1:
                  for (E = 0, A = Math.pow(2, 16), R = 1; R != A; )
                    (C = O.val & O.position),
                      (O.position >>= 1),
                      O.position == 0 && ((O.position = u), (O.val = p(O.index++))),
                      (E |= (C > 0 ? 1 : 0) * R),
                      (R <<= 1);
                  (d[m++] = o(E)), (_ = m - 1), f--;
                  break;
                case 2:
                  return h.join('');
              }
              if ((f == 0 && ((f = Math.pow(2, y)), y++), d[_])) g = d[_];
              else if (_ === m) g = S + S.charAt(0);
              else return null;
              h.push(g),
                (d[m++] = S + g.charAt(0)),
                f--,
                (S = g),
                f == 0 && ((f = Math.pow(2, y)), y++);
            }
          },
        };
        return l;
      })();
      typeof define == 'function' && define.amd
        ? define(function () {
            return r;
          })
        : typeof t < 'u' && t != null
          ? (t.exports = r)
          : typeof angular < 'u' &&
            angular != null &&
            angular.module('LZString', []).factory('LZString', function () {
              return r;
            });
    },
  }),
  Wg = P({
    'node_modules/@testing-library/dom/dist/helpers.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.TEXT_NODE = void 0),
        (e.checkContainerType = c),
        (e.getDocument = o),
        (e.getWindowFromNode = a),
        (e.jestFakeTimersAreEnabled = r);
      var t = 3;
      e.TEXT_NODE = t;
      function r() {
        return typeof jest < 'u' && jest !== null
          ? setTimeout._isMockFunction === !0 ||
              Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
          : !1;
      }
      function o() {
        if (typeof window > 'u') throw new Error('Could not find default container');
        return window.document;
      }
      function a(n) {
        if (n.defaultView) return n.defaultView;
        if (n.ownerDocument && n.ownerDocument.defaultView) return n.ownerDocument.defaultView;
        if (n.window) return n.window;
        throw n.ownerDocument && n.ownerDocument.defaultView === null
          ? new Error('It looks like the window object is not available for the provided node.')
          : n.then instanceof Function
            ? new Error(
                'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
              )
            : Array.isArray(n)
              ? new Error(
                  'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
                )
              : typeof n.debug == 'function' && typeof n.logTestingPlaygroundURL == 'function'
                ? new Error(
                    'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
                  )
                : new Error(`The given node is not an Element, the node type is: ${typeof n}.`);
      }
      function c(n) {
        if (!n || typeof n.querySelector != 'function' || typeof n.querySelectorAll != 'function')
          throw new TypeError(
            `Expected container to be an Element, a Document or a DocumentFragment but got ${i(
              n,
            )}.`,
          );
        function i(l) {
          return typeof l == 'object' ? (l === null ? 'null' : l.constructor.name) : typeof l;
        }
      }
    },
  }),
  vs = P({
    'node_modules/@testing-library/dom/dist/event-map.js'(e) {
      Object.defineProperty(e, '__esModule', { value: !0 }),
        (e.eventMap = e.eventAliasMap = void 0);
      var t = {
        copy: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        cut: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        paste: {
          EventType: 'ClipboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionEnd: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionStart: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        compositionUpdate: {
          EventType: 'CompositionEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        keyDown: {
          EventType: 'KeyboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
        },
        keyPress: {
          EventType: 'KeyboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
        },
        keyUp: {
          EventType: 'KeyboardEvent',
          defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
        },
        focus: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        blur: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        focusIn: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        focusOut: {
          EventType: 'FocusEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
        input: {
          EventType: 'InputEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        invalid: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !0 } },
        submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
        reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
        click: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
        },
        contextMenu: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dblClick: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drag: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragEnd: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragEnter: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragExit: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragLeave: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        dragOver: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        dragStart: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        drop: {
          EventType: 'DragEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseDown: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseEnter: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseLeave: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
        },
        mouseMove: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOut: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseOver: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        mouseUp: {
          EventType: 'MouseEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        select: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
        touchCancel: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        touchEnd: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchMove: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        touchStart: {
          EventType: 'TouchEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        resize: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        scroll: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        wheel: {
          EventType: 'WheelEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        canPlay: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        canPlayThrough: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        durationChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        emptied: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        encrypted: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        loadedData: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        loadedMetadata: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        loadStart: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        playing: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        progress: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        rateChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        seeked: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        seeking: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        stalled: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        suspend: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        timeUpdate: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        volumeChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        waiting: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        animationStart: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        animationEnd: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
        animationIteration: {
          EventType: 'AnimationEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionCancel: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionEnd: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !0 },
        },
        transitionRun: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        transitionStart: {
          EventType: 'TransitionEvent',
          defaultInit: { bubbles: !0, cancelable: !1 },
        },
        pointerOver: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerEnter: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        pointerDown: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerMove: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerUp: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerCancel: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        pointerOut: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
        },
        pointerLeave: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
        gotPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        lostPointerCapture: {
          EventType: 'PointerEvent',
          defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
        },
        popState: { EventType: 'PopStateEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
        offline: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
        online: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
      };
      e.eventMap = t;
      var r = { doubleClick: 'dblClick' };
      e.eventAliasMap = r;
    },
  }),
  it = ve(xf(), 1),
  Un = it.default.expect;
it.default.version;
it.default.Assertion;
it.default.AssertionError;
var on = it.default.util;
it.default.config;
var Hn = it.default.use;
it.default.should;
var Gg = it.default.assert;
it.default.core;
var Kg = it.default,
  Yg = (() => {
    let e;
    return (
      typeof window < 'u'
        ? (e = window)
        : typeof globalThis < 'u'
          ? (e = globalThis)
          : typeof global < 'u'
            ? (e = global)
            : typeof self < 'u'
              ? (e = self)
              : (e = {}),
      e
    );
  })();
function Ot(e, t, r) {
  let o = typeof e;
  if (!r.includes(o)) throw new TypeError(`${t} value must be ${r.join(' or ')}, received "${o}"`);
}
function Jg(e) {
  return e != null && typeof e == 'object' && !Array.isArray(e);
}
function Xg(e) {
  return e === Object.prototype || e === Function.prototype || e === RegExp.prototype;
}
function oo(e) {
  return Object.prototype.toString.apply(e).slice(8, -1);
}
function Qg(e, t) {
  let r = typeof t == 'function' ? t : (o) => t.add(o);
  Object.getOwnPropertyNames(e).forEach(r), Object.getOwnPropertySymbols(e).forEach(r);
}
function _s(e) {
  let t = new Set();
  return Xg(e) ? [] : (Qg(e, t), Array.from(t));
}
var Es = { forceWritable: !1 };
function Ka(e, t = Es) {
  return ao(e, new WeakMap(), t);
}
function ao(e, t, r = Es) {
  let o, a;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    for (a = Array((o = e.length)), t.set(e, a); o--; ) a[o] = ao(e[o], t);
    return a;
  }
  if (Object.prototype.toString.call(e) === '[object Object]') {
    (a = Object.create(Object.getPrototypeOf(e))), t.set(e, a);
    let c = _s(e);
    for (let n of c) {
      let i = Object.getOwnPropertyDescriptor(e, n);
      if (!i) continue;
      let l = ao(e[n], t);
      'get' in i
        ? Object.defineProperty(a, n, {
            ...i,
            get() {
              return l;
            },
          })
        : Object.defineProperty(a, n, {
            ...i,
            writable: r.forceWritable ? !0 : i.writable,
            value: l,
          });
    }
    return a;
  }
  return e;
}
var io = ve(vn(), 1),
  Zg = ve(mn(), 1),
  {
    AsymmetricMatcher: ev,
    DOMCollection: tv,
    DOMElement: rv,
    Immutable: nv,
    ReactElement: ov,
    ReactTestComponent: av,
  } = io.plugins,
  Ya = [av, ov, rv, tv, nv, ev];
function bt(e, t = 10, { maxLength: r, ...o } = {}) {
  let a = r ?? 1e4,
    c;
  try {
    c = (0, io.format)(e, { maxDepth: t, escapeString: !1, plugins: Ya, ...o });
  } catch {
    c = (0, io.format)(e, { callToJSON: !1, maxDepth: t, escapeString: !1, plugins: Ya, ...o });
  }
  return c.length >= a && t > 1 ? bt(e, Math.floor(t / 2)) : c;
}
var iv = /%[sdjifoOcj%]/g;
function lv(...e) {
  if (typeof e[0] != 'string') {
    let c = [];
    for (let n = 0; n < e.length; n++) c.push(vr(e[n], { depth: 0, colors: !1, compact: 3 }));
    return c.join(' ');
  }
  let t = e.length,
    r = 1,
    o = e[0],
    a = String(o).replace(iv, (c) => {
      if (c === '%%') return '%';
      if (r >= t) return c;
      switch (c) {
        case '%s': {
          let n = e[r++];
          return typeof n == 'bigint'
            ? `${n.toString()}n`
            : typeof n == 'number' && n === 0 && 1 / n < 0
              ? '-0'
              : typeof n == 'object' && n !== null
                ? vr(n, { depth: 0, colors: !1, compact: 3 })
                : String(n);
        }
        case '%d': {
          let n = e[r++];
          return typeof n == 'bigint' ? `${n.toString()}n` : Number(n).toString();
        }
        case '%i': {
          let n = e[r++];
          return typeof n == 'bigint' ? `${n.toString()}n` : Number.parseInt(String(n)).toString();
        }
        case '%f':
          return Number.parseFloat(String(e[r++])).toString();
        case '%o':
          return vr(e[r++], { showHidden: !0, showProxy: !0 });
        case '%O':
          return vr(e[r++]);
        case '%c':
          return r++, '';
        case '%j':
          try {
            return JSON.stringify(e[r++]);
          } catch (n) {
            let i = n.message;
            if (
              i.includes('circular structure') ||
              i.includes('cyclic structures') ||
              i.includes('cyclic object')
            )
              return '[Circular]';
            throw n;
          }
        default:
          return c;
      }
    });
  for (let c = e[r]; r < t; c = e[++r])
    c === null || typeof c != 'object' ? (a += ` ${c}`) : (a += ` ${vr(c)}`);
  return a;
}
function vr(e, t = {}) {
  return t.truncate === 0 && (t.truncate = Number.POSITIVE_INFINITY), (0, Zg.inspect)(e, t);
}
var sv = Symbol('vitest:SAFE_COLORS'),
  uv = {
    bold: ['\x1B[1m', '\x1B[22m', '\x1B[22m\x1B[1m'],
    dim: ['\x1B[2m', '\x1B[22m', '\x1B[22m\x1B[2m'],
    italic: ['\x1B[3m', '\x1B[23m'],
    underline: ['\x1B[4m', '\x1B[24m'],
    inverse: ['\x1B[7m', '\x1B[27m'],
    hidden: ['\x1B[8m', '\x1B[28m'],
    strikethrough: ['\x1B[9m', '\x1B[29m'],
    black: ['\x1B[30m', '\x1B[39m'],
    red: ['\x1B[31m', '\x1B[39m'],
    green: ['\x1B[32m', '\x1B[39m'],
    yellow: ['\x1B[33m', '\x1B[39m'],
    blue: ['\x1B[34m', '\x1B[39m'],
    magenta: ['\x1B[35m', '\x1B[39m'],
    cyan: ['\x1B[36m', '\x1B[39m'],
    white: ['\x1B[37m', '\x1B[39m'],
    gray: ['\x1B[90m', '\x1B[39m'],
    bgBlack: ['\x1B[40m', '\x1B[49m'],
    bgRed: ['\x1B[41m', '\x1B[49m'],
    bgGreen: ['\x1B[42m', '\x1B[49m'],
    bgYellow: ['\x1B[43m', '\x1B[49m'],
    bgBlue: ['\x1B[44m', '\x1B[49m'],
    bgMagenta: ['\x1B[45m', '\x1B[49m'],
    bgCyan: ['\x1B[46m', '\x1B[49m'],
    bgWhite: ['\x1B[47m', '\x1B[49m'],
  },
  cv = Object.entries(uv);
function ta(e) {
  return String(e);
}
ta.open = '';
ta.close = '';
var dv = cv.reduce((e, [t]) => ((e[t] = ta), e), { isColorSupported: !1 });
function ra() {
  return globalThis[sv] || dv;
}
ve(vn(), 1);
ve(mn(), 1);
var mt = ve(vn(), 1),
  Ja = ve(jl(), 1);
function Xa(e) {
  if (e === void 0) return 'undefined';
  if (e === null) return 'null';
  if (Array.isArray(e)) return 'array';
  if (typeof e == 'boolean') return 'boolean';
  if (typeof e == 'function') return 'function';
  if (typeof e == 'number') return 'number';
  if (typeof e == 'string') return 'string';
  if (typeof e == 'bigint') return 'bigint';
  if (typeof e == 'object') {
    if (e != null) {
      if (e.constructor === RegExp) return 'regexp';
      if (e.constructor === Map) return 'map';
      if (e.constructor === Set) return 'set';
      if (e.constructor === Date) return 'date';
    }
    return 'object';
  } else if (typeof e == 'symbol') return 'symbol';
  throw new Error(`value of unknown type: ${e}`);
}
var nr = -1,
  or = 1,
  en = 0,
  _r = class {
    constructor(e, t) {
      Jt(this, 0);
      Jt(this, 1);
      (this[0] = e), (this[1] = t);
    }
  },
  ws = 'Compared values have no visual difference.',
  pv =
    'Compared values serialize to the same structure.\nPrinting internal object structure without calling `toJSON` instead.';
function fv(e, t) {
  return e.replace(/\s+$/, (r) => t(r));
}
function na(e, t, r, o, a, c) {
  return e.length !== 0
    ? r(`${o} ${fv(e, a)}`)
    : o !== ' '
      ? r(o)
      : t && c.length !== 0
        ? r(`${o} ${c}`)
        : '';
}
function Ss(
  e,
  t,
  { aColor: r, aIndicator: o, changeLineTrailingSpaceColor: a, emptyFirstOrLastLinePlaceholder: c },
) {
  return na(e, t, r, o, a, c);
}
function Cs(
  e,
  t,
  { bColor: r, bIndicator: o, changeLineTrailingSpaceColor: a, emptyFirstOrLastLinePlaceholder: c },
) {
  return na(e, t, r, o, a, c);
}
function Os(
  e,
  t,
  {
    commonColor: r,
    commonIndicator: o,
    commonLineTrailingSpaceColor: a,
    emptyFirstOrLastLinePlaceholder: c,
  },
) {
  return na(e, t, r, o, a, c);
}
function Qa(e, t, r, o, { patchColor: a }) {
  return a(`@@ -${e + 1},${t - e} +${r + 1},${o - r} @@`);
}
function mv(e, t) {
  let r = e.length,
    o = t.contextLines,
    a = o + o,
    c = r,
    n = !1,
    i = 0,
    l = 0;
  for (; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === en; ) l += 1;
    if (E !== l)
      if (E === 0) l > o && ((c -= l - o), (n = !0));
      else if (l === r) {
        let C = l - E;
        C > o && ((c -= C - o), (n = !0));
      } else {
        let C = l - E;
        C > a && ((c -= C - a), (i += 1));
      }
    for (; l !== r && e[l][0] !== en; ) l += 1;
  }
  let s = i !== 0 || n;
  i !== 0 ? (c += i + 1) : n && (c += 1);
  let u = c - 1,
    p = [],
    d = 0;
  s && p.push('');
  let f = 0,
    m = 0,
    y = 0,
    g = 0,
    h = (E) => {
      let C = p.length;
      p.push(Os(E, C === 0 || C === u, t)), (y += 1), (g += 1);
    },
    v = (E) => {
      let C = p.length;
      p.push(Ss(E, C === 0 || C === u, t)), (y += 1);
    },
    S = (E) => {
      let C = p.length;
      p.push(Cs(E, C === 0 || C === u, t)), (g += 1);
    };
  for (l = 0; l !== r; ) {
    let E = l;
    for (; l !== r && e[l][0] === en; ) l += 1;
    if (E !== l)
      if (E === 0) {
        l > o && ((E = l - o), (f = E), (m = E), (y = f), (g = m));
        for (let C = E; C !== l; C += 1) h(e[C][1]);
      } else if (l === r) {
        let C = l - E > o ? E + o : l;
        for (let A = E; A !== C; A += 1) h(e[A][1]);
      } else {
        let C = l - E;
        if (C > a) {
          let A = E + o;
          for (let _ = E; _ !== A; _ += 1) h(e[_][1]);
          (p[d] = Qa(f, y, m, g, t)), (d = p.length), p.push('');
          let R = C - a;
          (f = y + R), (m = g + R), (y = f), (g = m);
          for (let _ = l - o; _ !== l; _ += 1) h(e[_][1]);
        } else for (let A = E; A !== l; A += 1) h(e[A][1]);
      }
    for (; l !== r && e[l][0] === nr; ) v(e[l][1]), (l += 1);
    for (; l !== r && e[l][0] === or; ) S(e[l][1]), (l += 1);
  }
  return (
    s && (p[d] = Qa(f, y, m, g, t)),
    p.join(`
`)
  );
}
function yv(e, t) {
  return e.map((r, o, a) => {
    let c = r[1],
      n = o === 0 || o === a.length - 1;
    switch (r[0]) {
      case nr:
        return Ss(c, n, t);
      case or:
        return Cs(c, n, t);
      default:
        return Os(c, n, t);
    }
  }).join(`
`);
}
var Za = (e) => e,
  Ps = 5;
function hv() {
  let e = ra();
  return {
    aAnnotation: 'Expected',
    aColor: e.green,
    aIndicator: '-',
    bAnnotation: 'Received',
    bColor: e.red,
    bIndicator: '+',
    changeColor: e.inverse,
    changeLineTrailingSpaceColor: Za,
    commonColor: e.dim,
    commonIndicator: ' ',
    commonLineTrailingSpaceColor: Za,
    compareKeys: void 0,
    contextLines: Ps,
    emptyFirstOrLastLinePlaceholder: '',
    expand: !0,
    includeChangeCounts: !1,
    omitAnnotationLines: !1,
    patchColor: e.yellow,
  };
}
function bv(e) {
  return e && typeof e == 'function' ? e : void 0;
}
function gv(e) {
  return typeof e == 'number' && Number.isSafeInteger(e) && e >= 0 ? e : Ps;
}
function Lr(e = {}) {
  return { ...hv(), ...e, compareKeys: bv(e.compareKeys), contextLines: gv(e.contextLines) };
}
function Qt(e) {
  return e.length === 1 && e[0].length === 0;
}
function vv(e) {
  let t = 0,
    r = 0;
  return (
    e.forEach((o) => {
      switch (o[0]) {
        case nr:
          t += 1;
          break;
        case or:
          r += 1;
          break;
      }
    }),
    { a: t, b: r }
  );
}
function _v(
  {
    aAnnotation: e,
    aColor: t,
    aIndicator: r,
    bAnnotation: o,
    bColor: a,
    bIndicator: c,
    includeChangeCounts: n,
    omitAnnotationLines: i,
  },
  l,
) {
  if (i) return '';
  let s = '',
    u = '';
  if (n) {
    let f = String(l.a),
      m = String(l.b),
      y = o.length - e.length,
      g = ' '.repeat(Math.max(0, y)),
      h = ' '.repeat(Math.max(0, -y)),
      v = m.length - f.length,
      S = ' '.repeat(Math.max(0, v)),
      E = ' '.repeat(Math.max(0, -v));
    (s = `${g}  ${r} ${S}${f}`), (u = `${h}  ${c} ${E}${m}`);
  }
  let p = `${r} ${e}${s}`,
    d = `${c} ${o}${u}`;
  return `${t(p)}
${a(d)}

`;
}
function Rs(e, t) {
  return _v(t, vv(e)) + (t.expand ? yv(e, t) : mv(e, t));
}
function oa(e, t, r) {
  return Rs(Ts(Qt(e) ? [] : e, Qt(t) ? [] : t), Lr(r));
}
function Ev(e, t, r, o, a) {
  if (
    (Qt(e) && Qt(r) && ((e = []), (r = [])),
    Qt(t) && Qt(o) && ((t = []), (o = [])),
    e.length !== r.length || t.length !== o.length)
  )
    return oa(e, t, a);
  let c = Ts(r, o),
    n = 0,
    i = 0;
  return (
    c.forEach((l) => {
      switch (l[0]) {
        case nr:
          (l[1] = e[n]), (n += 1);
          break;
        case or:
          (l[1] = t[i]), (i += 1);
          break;
        default:
          (l[1] = t[i]), (n += 1), (i += 1);
      }
    }),
    Rs(c, Lr(a))
  );
}
function Ts(e, t) {
  let r = e.length,
    o = t.length,
    a = (s, u) => e[s] === t[u],
    c = [],
    n = 0,
    i = 0,
    l = (s, u, p) => {
      for (; n !== u; n += 1) c.push(new _r(nr, e[n]));
      for (; i !== p; i += 1) c.push(new _r(or, t[i]));
      for (; s !== 0; s -= 1, n += 1, i += 1) c.push(new _r(en, t[i]));
    };
  for ((Ja.default.default || Ja.default)(r, o, a, l); n !== r; n += 1) c.push(new _r(nr, e[n]));
  for (; i !== o; i += 1) c.push(new _r(or, t[i]));
  return c;
}
function lo(e, t) {
  let { commonColor: r } = Lr(t);
  return r(e);
}
var {
    AsymmetricMatcher: wv,
    DOMCollection: Sv,
    DOMElement: Cv,
    Immutable: Ov,
    ReactElement: Pv,
    ReactTestComponent: Rv,
  } = mt.plugins,
  As = [Rv, Pv, Cv, Sv, Ov, wv],
  so = { plugins: As },
  qs = { callToJSON: !1, maxDepth: 10, plugins: As };
function Pr(e, t, r) {
  if (Object.is(e, t)) return '';
  let o = Xa(e),
    a = o,
    c = !1;
  if (o === 'object' && typeof e.asymmetricMatch == 'function') {
    if (
      e.$$typeof !== Symbol.for('jest.asymmetricMatcher') ||
      typeof e.getExpectedType != 'function'
    )
      return null;
    (a = e.getExpectedType()), (c = a === 'string');
  }
  if (a !== Xa(t)) {
    let {
        aAnnotation: n,
        aColor: i,
        aIndicator: l,
        bAnnotation: s,
        bColor: u,
        bIndicator: p,
      } = Lr(r),
      d = uo(qs, r),
      f = (0, mt.format)(e, d),
      m = (0, mt.format)(t, d),
      y = `${i(`${l} ${n}:`)} 
${f}`,
      g = `${u(`${p} ${s}:`)} 
${m}`;
    return `${y}

${g}`;
  }
  if (c) return null;
  switch (o) {
    case 'string':
      return oa(
        e.split(`
`),
        t.split(`
`),
        r,
      );
    case 'boolean':
    case 'number':
      return Tv(e, t, r);
    case 'map':
      return zn(ei(e), ei(t), r);
    case 'set':
      return zn(ti(e), ti(t), r);
    default:
      return zn(e, t, r);
  }
}
function Tv(e, t, r) {
  let o = (0, mt.format)(e, so),
    a = (0, mt.format)(t, so);
  return o === a
    ? ''
    : oa(
        o.split(`
`),
        a.split(`
`),
        r,
      );
}
function ei(e) {
  return new Map(Array.from(e.entries()).sort());
}
function ti(e) {
  return new Set(Array.from(e.values()).sort());
}
function zn(e, t, r) {
  let o,
    a = !1;
  try {
    let n = uo(so, r);
    o = ri(e, t, n, r);
  } catch {
    a = !0;
  }
  let c = lo(ws, r);
  if (o === void 0 || o === c) {
    let n = uo(qs, r);
    (o = ri(e, t, n, r)),
      o !== c &&
        !a &&
        (o = `${lo(pv, r)}

${o}`);
  }
  return o;
}
function uo(e, t) {
  let { compareKeys: r } = Lr(t);
  return { ...e, compareKeys: r };
}
function ri(e, t, r, o) {
  let a = { ...r, indent: 0 },
    c = (0, mt.format)(e, a),
    n = (0, mt.format)(t, a);
  if (c === n) return lo(ws, o);
  {
    let i = (0, mt.format)(e, r),
      l = (0, mt.format)(t, r);
    return Ev(
      i.split(`
`),
      l.split(`
`),
      c.split(`
`),
      n.split(`
`),
      o,
    );
  }
}
function Av(e) {
  return typeof e == 'function' && '_isMockFunction' in e && e._isMockFunction;
}
ve(vn(), 1);
ve(jl(), 1);
ve(mn(), 1);
var qv = '@@__IMMUTABLE_RECORD__@@',
  xv = '@@__IMMUTABLE_ITERABLE__@@';
function Mv(e) {
  return e && (e[xv] || e[qv]);
}
var jv = Object.getPrototypeOf({});
function ni(e) {
  return e instanceof Error
    ? `<unserializable>: ${e.message}`
    : typeof e == 'string'
      ? `<unserializable>: ${e}`
      : '<unserializable>';
}
function Cr(e, t = new WeakMap()) {
  if (!e || typeof e == 'string') return e;
  if (typeof e == 'function') return `Function<${e.name || 'anonymous'}>`;
  if (typeof e == 'symbol') return e.toString();
  if (typeof e != 'object') return e;
  if (Mv(e)) return Cr(e.toJSON(), t);
  if (e instanceof Promise || (e.constructor && e.constructor.prototype === 'AsyncFunction'))
    return 'Promise';
  if (typeof Element < 'u' && e instanceof Element) return e.tagName;
  if (typeof e.asymmetricMatch == 'function') return `${e.toString()} ${lv(e.sample)}`;
  if (t.has(e)) return t.get(e);
  if (Array.isArray(e)) {
    let r = new Array(e.length);
    return (
      t.set(e, r),
      e.forEach((o, a) => {
        try {
          r[a] = Cr(o, t);
        } catch (c) {
          r[a] = ni(c);
        }
      }),
      r
    );
  } else {
    let r = Object.create(null);
    t.set(e, r);
    let o = e;
    for (; o && o !== jv; )
      Object.getOwnPropertyNames(o).forEach((a) => {
        if (!(a in r))
          try {
            r[a] = Cr(e[a], t);
          } catch (c) {
            delete r[a], (r[a] = ni(c));
          }
      }),
        (o = Object.getPrototypeOf(o));
    return r;
  }
}
function oi(e) {
  return e.replace(/__vite_ssr_import_\d+__\./g, '');
}
function Iv(e, t) {
  if (!e || typeof e != 'object') return { message: e };
  if (
    (e.stack && (e.stackStr = String(e.stack)),
    e.name && (e.nameStr = String(e.name)),
    e.showDiff || (e.showDiff === void 0 && e.expected !== void 0 && e.actual !== void 0))
  ) {
    let r = Ka(e.actual, { forceWritable: !0 }),
      o = Ka(e.expected, { forceWritable: !0 }),
      { replacedActual: a, replacedExpected: c } = xs(r, o);
    e.diff = Pr(c, a, t);
  }
  typeof e.expected != 'string' && (e.expected = bt(e.expected, 10)),
    typeof e.actual != 'string' && (e.actual = bt(e.actual, 10));
  try {
    typeof e.message == 'string' && (e.message = oi(e.message)),
      typeof e.cause == 'object' &&
        typeof e.cause.message == 'string' &&
        (e.cause.message = oi(e.cause.message));
  } catch {}
  try {
    return Cr(e);
  } catch (r) {
    return Cr(
      new Error(`Failed to fully serialize error: ${r == null ? void 0 : r.message}
Inner error message: ${e == null ? void 0 : e.message}`),
    );
  }
}
function ai(e) {
  return oo(e) === 'Object' && typeof e.asymmetricMatch == 'function';
}
function ii(e, t) {
  let r = oo(e),
    o = oo(t);
  return r === o && r === 'Object';
}
function xs(e, t, r = new WeakSet(), o = new WeakSet()) {
  return ii(e, t)
    ? r.has(e) || o.has(t)
      ? { replacedActual: e, replacedExpected: t }
      : (r.add(e),
        o.add(t),
        _s(t).forEach((a) => {
          let c = t[a],
            n = e[a];
          if (ai(c)) c.asymmetricMatch(n) && (e[a] = c);
          else if (ai(n)) n.asymmetricMatch(c) && (t[a] = n);
          else if (ii(n, c)) {
            let i = xs(n, c, r, o);
            (e[a] = i.replacedActual), (t[a] = i.replacedExpected);
          }
        }),
        { replacedActual: e, replacedExpected: t })
    : { replacedActual: e, replacedExpected: t };
}
var Rr = Symbol.for('matchers-object'),
  an = Symbol.for('$$jest-matchers-object-storybook'),
  An = Symbol.for('expect-global');
if (!Object.prototype.hasOwnProperty.call(globalThis, Rr)) {
  let e = new WeakMap();
  Object.defineProperty(globalThis, Rr, { get: () => e });
}
if (!Object.prototype.hasOwnProperty.call(globalThis, an)) {
  let e = Object.create(null);
  Object.defineProperty(globalThis, an, {
    configurable: !0,
    get: () => ({ state: globalThis[Rr].get(globalThis[An]), matchers: e }),
  });
}
function Tr(e) {
  return globalThis[Rr].get(e);
}
function Vn(e, t) {
  let r = globalThis[Rr],
    o = r.get(t) || {};
  Object.assign(o, e), r.set(t, o);
}
function Ms() {
  let e = () => ra(),
    t = e().green,
    r = e().red,
    o = e().inverse,
    a = e().bold,
    c = e().dim;
  function n(s, u = 'received', p = 'expected', d = {}) {
    let {
        comment: f = '',
        isDirectExpectCall: m = !1,
        isNot: y = !1,
        promise: g = '',
        secondArgument: h = '',
        expectedColor: v = t,
        receivedColor: S = r,
        secondArgumentColor: E = t,
      } = d,
      C = '',
      A = 'expect';
    return (
      !m && u !== '' && ((C += c(`${A}(`) + S(u)), (A = ')')),
      g !== '' && ((C += c(`${A}.`) + g), (A = '')),
      y && ((C += `${c(`${A}.`)}not`), (A = '')),
      s.includes('.') ? (A += s) : ((C += c(`${A}.`) + s), (A = '')),
      p === '' ? (A += '()') : ((C += c(`${A}(`) + v(p)), h && (C += c(', ') + E(h)), (A = ')')),
      f !== '' && (A += ` // ${f}`),
      A !== '' && (C += c(A)),
      C
    );
  }
  let i = '·',
    l = (s) => s.replace(/\s+$/gm, (u) => i.repeat(u.length));
  return {
    EXPECTED_COLOR: t,
    RECEIVED_COLOR: r,
    INVERTED_COLOR: o,
    BOLD_WEIGHT: a,
    DIM_COLOR: c,
    matcherHint: n,
    printReceived: (s) => r(l(bt(s))),
    printExpected: (s) => t(l(bt(s))),
  };
}
function we(e, t, r, o) {
  return (r = r || []), js(e, t, [], [], r, o ? Is : Bv);
}
function li(e) {
  return !!e && typeof e == 'object' && 'asymmetricMatch' in e && Tt('Function', e.asymmetricMatch);
}
function Nv(e, t) {
  let r = li(e),
    o = li(t);
  if (!(r && o)) {
    if (r) return e.asymmetricMatch(t);
    if (o) return t.asymmetricMatch(e);
  }
}
function js(e, t, r, o, a, c) {
  let n = !0,
    i = Nv(e, t);
  if (i !== void 0) return i;
  for (let f = 0; f < a.length; f++) {
    let m = a[f](e, t);
    if (m !== void 0) return m;
  }
  if (e instanceof Error && t instanceof Error) return e.message === t.message;
  if (Object.is(e, t)) return !0;
  if (e === null || t === null) return e === t;
  let l = Object.prototype.toString.call(e);
  if (l !== Object.prototype.toString.call(t)) return !1;
  switch (l) {
    case '[object Boolean]':
    case '[object String]':
    case '[object Number]':
      return typeof e != typeof t
        ? !1
        : typeof e != 'object' && typeof t != 'object'
          ? Object.is(e, t)
          : Object.is(e.valueOf(), t.valueOf());
    case '[object Date]': {
      let f = +e,
        m = +t;
      return f === m || (Number.isNaN(f) && Number.isNaN(m));
    }
    case '[object RegExp]':
      return e.source === t.source && e.flags === t.flags;
  }
  if (typeof e != 'object' || typeof t != 'object') return !1;
  if (ui(e) && ui(t)) return e.isEqualNode(t);
  let s = r.length;
  for (; s--; ) {
    if (r[s] === e) return o[s] === t;
    if (o[s] === t) return !1;
  }
  if ((r.push(e), o.push(t), l === '[object Array]' && e.length !== t.length)) return !1;
  let u = si(e, c),
    p,
    d = u.length;
  if (si(t, c).length !== d) return !1;
  for (; d--; ) if (((p = u[d]), (n = c(t, p) && js(e[p], t[p], r, o, a, c)), !n)) return !1;
  return r.pop(), o.pop(), n;
}
function si(e, t) {
  let r = [];
  for (let o in e) t(e, o) && r.push(o);
  return r.concat(
    Object.getOwnPropertySymbols(e).filter((o) => Object.getOwnPropertyDescriptor(e, o).enumerable),
  );
}
function Bv(e, t) {
  return Is(e, t) && e[t] !== void 0;
}
function Is(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function Tt(e, t) {
  return Object.prototype.toString.apply(t) === `[object ${e}]`;
}
function ui(e) {
  return (
    e !== null &&
    typeof e == 'object' &&
    'nodeType' in e &&
    typeof e.nodeType == 'number' &&
    'nodeName' in e &&
    typeof e.nodeName == 'string' &&
    'isEqualNode' in e &&
    typeof e.isEqualNode == 'function'
  );
}
var $v = '@@__IMMUTABLE_KEYED__@@',
  Dv = '@@__IMMUTABLE_SET__@@',
  Ns = '@@__IMMUTABLE_ORDERED__@@';
function kv(e) {
  return !!(e && e[$v] && !e[Ns]);
}
function Lv(e) {
  return !!(e && e[Dv] && !e[Ns]);
}
var Bs = Symbol.iterator;
function ci(e) {
  return !!(e != null && e[Bs]);
}
function ze(e, t, r = [], o = []) {
  if (
    typeof e != 'object' ||
    typeof t != 'object' ||
    Array.isArray(e) ||
    Array.isArray(t) ||
    !ci(e) ||
    !ci(t)
  )
    return;
  if (e.constructor !== t.constructor) return !1;
  let a = r.length;
  for (; a--; ) if (r[a] === e) return o[a] === t;
  r.push(e), o.push(t);
  let c = (i, l) => ze(i, l, [...r], [...o]);
  if (e.size !== void 0) {
    if (e.size !== t.size) return !1;
    if (Tt('Set', e) || Lv(e)) {
      let i = !0;
      for (let l of e)
        if (!t.has(l)) {
          let s = !1;
          for (let u of t) we(l, u, [c]) === !0 && (s = !0);
          if (s === !1) {
            i = !1;
            break;
          }
        }
      return r.pop(), o.pop(), i;
    } else if (Tt('Map', e) || kv(e)) {
      let i = !0;
      for (let l of e)
        if (!t.has(l[0]) || !we(l[1], t.get(l[0]), [c])) {
          let s = !1;
          for (let u of t) {
            let p = we(l[0], u[0], [c]),
              d = !1;
            p === !0 && (d = we(l[1], u[1], [c])), d === !0 && (s = !0);
          }
          if (s === !1) {
            i = !1;
            break;
          }
        }
      return r.pop(), o.pop(), i;
    }
  }
  let n = t[Bs]();
  for (let i of e) {
    let l = n.next();
    if (l.done || !we(i, l.value, [c])) return !1;
  }
  return n.next().done ? (r.pop(), o.pop(), !0) : !1;
}
function $s(e, t) {
  return !e || typeof e != 'object' || e === Object.prototype
    ? !1
    : Object.prototype.hasOwnProperty.call(e, t) || $s(Object.getPrototypeOf(e), t);
}
function di(e) {
  return Jg(e) && !(e instanceof Error) && !Array.isArray(e) && !(e instanceof Date);
}
function aa(e, t) {
  let r =
    (o = new WeakMap()) =>
    (a, c) => {
      if (di(c))
        return Object.keys(c).every((n) => {
          if (di(c[n])) {
            if (o.has(c[n])) return we(a[n], c[n], [ze]);
            o.set(c[n], !0);
          }
          let i = a != null && $s(a, n) && we(a[n], c[n], [ze, r(o)]);
          return o.delete(c[n]), i;
        });
    };
  return r()(e, t);
}
function co(e, t) {
  if (!(e == null || t == null || e.constructor === t.constructor)) return !1;
}
function pi(e, t) {
  let r = e,
    o = t;
  if (!(e instanceof DataView && t instanceof DataView)) {
    if (!(e instanceof ArrayBuffer) || !(t instanceof ArrayBuffer)) return;
    try {
      (r = new DataView(e)), (o = new DataView(t));
    } catch {
      return;
    }
  }
  if (r.byteLength !== o.byteLength) return !1;
  for (let a = 0; a < r.byteLength; a++) if (r.getUint8(a) !== o.getUint8(a)) return !1;
  return !0;
}
function fi(e, t) {
  if (!Array.isArray(e) || !Array.isArray(t)) return;
  let r = Object.keys(e),
    o = Object.keys(t);
  return we(e, t, [ze, co], !0) && we(r, o);
}
function Fv(e, t = '#{this}', r = '#{exp}') {
  let o = `expected ${t} to be ${r} // Object.is equality`;
  return ['toStrictEqual', 'toEqual'].includes(e)
    ? `${o}

If it should pass with deep equality, replace "toBe" with "${e}"

Expected: ${t}
Received: serializes to the same string
`
    : o;
}
var zt = class {
    constructor(e, t = !1) {
      Jt(this, '$$typeof', Symbol.for('jest.asymmetricMatcher'));
      (this.sample = e), (this.inverse = t);
    }
    getMatcherContext(e) {
      return {
        ...Tr(e || globalThis[An]),
        equals: we,
        isNot: this.inverse,
        utils: { ...Ms(), diff: Pr, stringify: bt, iterableEquality: ze, subsetEquality: aa },
      };
    }
  },
  mi = class extends zt {
    constructor(e, t = !1) {
      if (!Tt('String', e)) throw new Error('Expected is not a string');
      super(e, t);
    }
    asymmetricMatch(e) {
      let t = Tt('String', e) && e.includes(this.sample);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  Uv = class extends zt {
    asymmetricMatch(e) {
      return e != null;
    }
    toString() {
      return 'Anything';
    }
    toAsymmetricMatcher() {
      return 'Anything';
    }
  },
  yi = class extends zt {
    constructor(e, t = !1) {
      super(e, t);
    }
    getPrototype(e) {
      return Object.getPrototypeOf
        ? Object.getPrototypeOf(e)
        : e.constructor.prototype === e
          ? null
          : e.constructor.prototype;
    }
    hasProperty(e, t) {
      return e
        ? Object.prototype.hasOwnProperty.call(e, t)
          ? !0
          : this.hasProperty(this.getPrototype(e), t)
        : !1;
    }
    asymmetricMatch(e) {
      if (typeof this.sample != 'object')
        throw new TypeError(
          `You must provide an object to ${this.toString()}, not '${typeof this.sample}'.`,
        );
      let t = !0;
      for (let r in this.sample)
        if (!this.hasProperty(e, r) || !we(this.sample[r], e[r])) {
          t = !1;
          break;
        }
      return this.inverse ? !t : t;
    }
    toString() {
      return `Object${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'object';
    }
  },
  hi = class extends zt {
    constructor(e, t = !1) {
      super(e, t);
    }
    asymmetricMatch(e) {
      if (!Array.isArray(this.sample))
        throw new TypeError(
          `You must provide an array to ${this.toString()}, not '${typeof this.sample}'.`,
        );
      let t =
        this.sample.length === 0 ||
        (Array.isArray(e) && this.sample.every((r) => e.some((o) => we(r, o))));
      return this.inverse ? !t : t;
    }
    toString() {
      return `Array${this.inverse ? 'Not' : ''}Containing`;
    }
    getExpectedType() {
      return 'array';
    }
  },
  Hv = class extends zt {
    constructor(e) {
      if (typeof e > 'u')
        throw new TypeError(
          'any() expects to be passed a constructor function. Please pass one or use anything() to match any object.',
        );
      super(e);
    }
    fnNameFor(e) {
      if (e.name) return e.name;
      let t = Function.prototype.toString
        .call(e)
        .match(/^(?:async)?\s*function\s*\*?\s*([\w$]+)\s*\(/);
      return t ? t[1] : '<anonymous>';
    }
    asymmetricMatch(e) {
      return this.sample === String
        ? typeof e == 'string' || e instanceof String
        : this.sample === Number
          ? typeof e == 'number' || e instanceof Number
          : this.sample === Function
            ? typeof e == 'function' || e instanceof Function
            : this.sample === Boolean
              ? typeof e == 'boolean' || e instanceof Boolean
              : this.sample === BigInt
                ? typeof e == 'bigint' || e instanceof BigInt
                : this.sample === Symbol
                  ? typeof e == 'symbol' || e instanceof Symbol
                  : this.sample === Object
                    ? typeof e == 'object'
                    : e instanceof this.sample;
    }
    toString() {
      return 'Any';
    }
    getExpectedType() {
      return this.sample === String
        ? 'string'
        : this.sample === Number
          ? 'number'
          : this.sample === Function
            ? 'function'
            : this.sample === Object
              ? 'object'
              : this.sample === Boolean
                ? 'boolean'
                : this.fnNameFor(this.sample);
    }
    toAsymmetricMatcher() {
      return `Any<${this.fnNameFor(this.sample)}>`;
    }
  },
  bi = class extends zt {
    constructor(e, t = !1) {
      if (!Tt('String', e) && !Tt('RegExp', e))
        throw new Error('Expected is not a String or a RegExp');
      super(new RegExp(e), t);
    }
    asymmetricMatch(e) {
      let t = Tt('String', e) && this.sample.test(e);
      return this.inverse ? !t : t;
    }
    toString() {
      return `String${this.inverse ? 'Not' : ''}Matching`;
    }
    getExpectedType() {
      return 'string';
    }
  },
  zv = (e, t) => {
    t.addMethod(e.expect, 'anything', () => new Uv()),
      t.addMethod(e.expect, 'any', (r) => new Hv(r)),
      t.addMethod(e.expect, 'stringContaining', (r) => new mi(r)),
      t.addMethod(e.expect, 'objectContaining', (r) => new yi(r)),
      t.addMethod(e.expect, 'arrayContaining', (r) => new hi(r)),
      t.addMethod(e.expect, 'stringMatching', (r) => new bi(r)),
      (e.expect.not = {
        stringContaining: (r) => new mi(r, !0),
        objectContaining: (r) => new yi(r, !0),
        arrayContaining: (r) => new hi(r, !0),
        stringMatching: (r) => new bi(r, !0),
      });
  };
function gi(e, t) {
  return (
    e &&
      t instanceof Promise &&
      ((t = t.finally(() => {
        let r = e.promises.indexOf(t);
        r !== -1 && e.promises.splice(r, 1);
      })),
      e.promises || (e.promises = []),
      e.promises.push(t)),
    t
  );
}
function Ds(e, t) {
  return function (...r) {
    var o;
    let a = e.flag(this, 'vitest-test');
    if (!(a != null && a.context._local ? a.context.expect.getState() : Tr(globalThis[An])).soft)
      return t.apply(this, r);
    if (!a) throw new Error('expect.soft() can only be used inside a test');
    try {
      return t.apply(this, r);
    } catch (c) {
      a.result || (a.result = { state: 'fail' }),
        (a.result.state = 'fail'),
        (o = a.result).errors || (o.errors = []),
        a.result.errors.push(Iv(c));
    }
  };
}
var Vv = (e, t) => {
  let { AssertionError: r } = e,
    o = () => ra();
  function a(u, p) {
    let d = (f) => {
      let m = Ds(t, p);
      t.addMethod(e.Assertion.prototype, f, m), t.addMethod(globalThis[an].matchers, f, m);
    };
    Array.isArray(u) ? u.forEach((f) => d(f)) : d(u);
  }
  ['throw', 'throws', 'Throw'].forEach((u) => {
    t.overwriteMethod(
      e.Assertion.prototype,
      u,
      (p) =>
        function (...d) {
          let f = t.flag(this, 'promise'),
            m = t.flag(this, 'object'),
            y = t.flag(this, 'negate');
          if (f === 'rejects')
            t.flag(this, 'object', () => {
              throw m;
            });
          else if (f === 'resolves' && typeof m != 'function') {
            if (y) return;
            {
              let g =
                  t.flag(this, 'message') || "expected promise to throw an error, but it didn't",
                h = { showDiff: !1 };
              throw new r(g, h, t.flag(this, 'ssfi'));
            }
          }
          p.apply(this, d);
        },
    );
  }),
    a('withTest', function (u) {
      return t.flag(this, 'vitest-test', u), this;
    }),
    a('toEqual', function (u) {
      let p = t.flag(this, 'object'),
        d = we(p, u, [ze]);
      return this.assert(
        d,
        'expected #{this} to deeply equal #{exp}',
        'expected #{this} to not deeply equal #{exp}',
        u,
        p,
      );
    }),
    a('toStrictEqual', function (u) {
      let p = t.flag(this, 'object'),
        d = we(p, u, [ze, co, fi, pi], !0);
      return this.assert(
        d,
        'expected #{this} to strictly equal #{exp}',
        'expected #{this} to not strictly equal #{exp}',
        u,
        p,
      );
    }),
    a('toBe', function (u) {
      let p = this._obj,
        d = Object.is(p, u),
        f = '';
      return (
        d ||
          (we(p, u, [ze, co, fi, pi], !0)
            ? (f = 'toStrictEqual')
            : we(p, u, [ze]) && (f = 'toEqual')),
        this.assert(d, Fv(f), 'expected #{this} not to be #{exp} // Object.is equality', u, p)
      );
    }),
    a('toMatchObject', function (u) {
      let p = this._obj;
      return this.assert(
        we(p, u, [ze, aa]),
        'expected #{this} to match object #{exp}',
        'expected #{this} to not match object #{exp}',
        u,
        p,
      );
    }),
    a('toMatch', function (u) {
      return typeof u == 'string' ? this.include(u) : this.match(u);
    }),
    a('toContain', function (u) {
      return this.contain(u);
    }),
    a('toContainEqual', function (u) {
      let p = t.flag(this, 'object'),
        d = Array.from(p).findIndex((f) => we(f, u));
      this.assert(
        d !== -1,
        'expected #{this} to deep equally contain #{exp}',
        'expected #{this} to not deep equally contain #{exp}',
        u,
      );
    }),
    a('toBeTruthy', function () {
      let u = t.flag(this, 'object');
      this.assert(!!u, 'expected #{this} to be truthy', 'expected #{this} to not be truthy', u, !1);
    }),
    a('toBeFalsy', function () {
      let u = t.flag(this, 'object');
      this.assert(!u, 'expected #{this} to be falsy', 'expected #{this} to not be falsy', u, !1);
    }),
    a('toBeGreaterThan', function (u) {
      let p = this._obj;
      return (
        Ot(p, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          p > u,
          `expected ${p} to be greater than ${u}`,
          `expected ${p} to be not greater than ${u}`,
          p,
          u,
          !1,
        )
      );
    }),
    a('toBeGreaterThanOrEqual', function (u) {
      let p = this._obj;
      return (
        Ot(p, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          p >= u,
          `expected ${p} to be greater than or equal to ${u}`,
          `expected ${p} to be not greater than or equal to ${u}`,
          p,
          u,
          !1,
        )
      );
    }),
    a('toBeLessThan', function (u) {
      let p = this._obj;
      return (
        Ot(p, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          p < u,
          `expected ${p} to be less than ${u}`,
          `expected ${p} to be not less than ${u}`,
          p,
          u,
          !1,
        )
      );
    }),
    a('toBeLessThanOrEqual', function (u) {
      let p = this._obj;
      return (
        Ot(p, 'actual', ['number', 'bigint']),
        Ot(u, 'expected', ['number', 'bigint']),
        this.assert(
          p <= u,
          `expected ${p} to be less than or equal to ${u}`,
          `expected ${p} to be not less than or equal to ${u}`,
          p,
          u,
          !1,
        )
      );
    }),
    a('toBeNaN', function () {
      return this.be.NaN;
    }),
    a('toBeUndefined', function () {
      return this.be.undefined;
    }),
    a('toBeNull', function () {
      return this.be.null;
    }),
    a('toBeDefined', function () {
      let u = t.flag(this, 'negate');
      return t.flag(this, 'negate', !1), u ? this.be.undefined : this.not.be.undefined;
    }),
    a('toBeTypeOf', function (u) {
      let p = typeof this._obj,
        d = u === p;
      return this.assert(
        d,
        'expected #{this} to be type of #{exp}',
        'expected #{this} not to be type of #{exp}',
        u,
        p,
      );
    }),
    a('toBeInstanceOf', function (u) {
      return this.instanceOf(u);
    }),
    a('toHaveLength', function (u) {
      return this.have.length(u);
    }),
    a('toHaveProperty', function (...u) {
      Array.isArray(u[0]) &&
        (u[0] = u[0].map((S) => String(S).replace(/([.[\]])/g, '\\$1')).join('.'));
      let p = this._obj,
        [d, f] = u,
        m = () =>
          Object.prototype.hasOwnProperty.call(p, d)
            ? { value: p[d], exists: !0 }
            : t.getPathInfo(p, d),
        { value: y, exists: g } = m(),
        h = g && (u.length === 1 || we(f, y)),
        v = u.length === 1 ? '' : ` with value ${t.objDisplay(f)}`;
      return this.assert(
        h,
        `expected #{this} to have property "${d}"${v}`,
        `expected #{this} to not have property "${d}"${v}`,
        p,
      );
    }),
    a('toBeCloseTo', function (u, p = 2) {
      let d = this._obj,
        f = !1,
        m = 0,
        y = 0;
      return (
        (u === Number.POSITIVE_INFINITY && d === Number.POSITIVE_INFINITY) ||
        (u === Number.NEGATIVE_INFINITY && d === Number.NEGATIVE_INFINITY)
          ? (f = !0)
          : ((m = 10 ** -p / 2), (y = Math.abs(d - u)), (f = y < m)),
        this.assert(
          f,
          `expected #{this} to be close to #{exp}, received difference is ${y}, but expected ${m}`,
          `expected #{this} to not be close to #{exp}, received difference is ${y}, but expected ${m}`,
          u,
          d,
          !1,
        )
      );
    });
  let c = (u) => {
      if (!Av(u._obj)) throw new TypeError(`${t.inspect(u._obj)} is not a spy or a call to a spy!`);
    },
    n = (u) => (c(u), u._obj),
    i = (u) => {
      let p = u % 10,
        d = u % 100;
      return p === 1 && d !== 11
        ? `${u}st`
        : p === 2 && d !== 12
          ? `${u}nd`
          : p === 3 && d !== 13
            ? `${u}rd`
            : `${u}th`;
    },
    l = (u, p, d) => (
      u.mock.calls &&
        (p += o().gray(`

Received: 

${u.mock.calls.map((f, m) => {
  let y = o().bold(`  ${i(m + 1)} ${u.getMockName()} call:

`);
  return (
    d
      ? (y += Pr(d, f, { omitAnnotationLines: !0 }))
      : (y += bt(f)
          .split(
            `
`,
          )
          .map((g) => `    ${g}`).join(`
`)),
    (y += `
`),
    y
  );
}).join(`
`)}`)),
      (p += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`)),
      p
    ),
    s = (u, p, d) => (
      (p += o().gray(`

Received: 

${u.mock.results.map((f, m) => {
  let y = o().bold(`  ${i(m + 1)} ${u.getMockName()} call return:

`);
  return (
    d
      ? (y += Pr(d, f.value, { omitAnnotationLines: !0 }))
      : (y += bt(f)
          .split(
            `
`,
          )
          .map((g) => `    ${g}`).join(`
`)),
    (y += `
`),
    y
  );
}).join(`
`)}`)),
      (p += o().gray(`

Number of calls: ${o().bold(u.mock.calls.length)}
`)),
      p
    );
  a(['toHaveBeenCalledTimes', 'toBeCalledTimes'], function (u) {
    let p = n(this),
      d = p.getMockName(),
      f = p.mock.calls.length;
    return this.assert(
      f === u,
      `expected "${d}" to be called #{exp} times, but got ${f} times`,
      `expected "${d}" to not be called #{exp} times`,
      u,
      f,
      !1,
    );
  }),
    a('toHaveBeenCalledOnce', function () {
      let u = n(this),
        p = u.getMockName(),
        d = u.mock.calls.length;
      return this.assert(
        d === 1,
        `expected "${p}" to be called once, but got ${d} times`,
        `expected "${p}" to not be called once`,
        1,
        d,
        !1,
      );
    }),
    a(['toHaveBeenCalled', 'toBeCalled'], function () {
      let u = n(this),
        p = u.getMockName(),
        d = u.mock.calls.length,
        f = d > 0,
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          f,
          `expected "${p}" to be called at least once`,
          `expected "${p}" to not be called at all, but actually been called ${d} times`,
          !0,
          f,
        ]);
      if ((f && m && (y = l(u, y)), (f && m) || (!f && !m))) throw new r(y);
    }),
    a(['toHaveBeenCalledWith', 'toBeCalledWith'], function (...u) {
      let p = n(this),
        d = p.getMockName(),
        f = p.mock.calls.some((g) => we(g, u, [ze])),
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          f,
          `expected "${d}" to be called with arguments: #{exp}`,
          `expected "${d}" to not be called with arguments: #{exp}`,
          u,
        ]);
      if ((f && m) || (!f && !m)) throw new r(l(p, y, u));
    }),
    a(['toHaveBeenNthCalledWith', 'nthCalledWith'], function (u, ...p) {
      let d = n(this),
        f = d.getMockName(),
        m = d.mock.calls[u - 1];
      this.assert(
        we(m, p, [ze]),
        `expected ${i(u)} "${f}" call to have been called with #{exp}`,
        `expected ${i(u)} "${f}" call to not have been called with #{exp}`,
        p,
        m,
      );
    }),
    a(['toHaveBeenLastCalledWith', 'lastCalledWith'], function (...u) {
      let p = n(this),
        d = p.getMockName(),
        f = p.mock.calls[p.mock.calls.length - 1];
      this.assert(
        we(f, u, [ze]),
        `expected last "${d}" call to have been called with #{exp}`,
        `expected last "${d}" call to not have been called with #{exp}`,
        u,
        f,
      );
    }),
    a(['toThrow', 'toThrowError'], function (u) {
      if (typeof u == 'string' || typeof u > 'u' || u instanceof RegExp) return this.throws(u);
      let p = this._obj,
        d = t.flag(this, 'promise'),
        f = t.flag(this, 'negate'),
        m = null;
      if (d === 'rejects') m = p;
      else if (d === 'resolves' && typeof p != 'function') {
        if (f) return;
        {
          let y = t.flag(this, 'message') || "expected promise to throw an error, but it didn't",
            g = { showDiff: !1 };
          throw new r(y, g, t.flag(this, 'ssfi'));
        }
      } else {
        let y = !1;
        try {
          p();
        } catch (g) {
          (y = !0), (m = g);
        }
        if (!y && !f) {
          let g = t.flag(this, 'message') || "expected function to throw an error, but it didn't",
            h = { showDiff: !1 };
          throw new r(g, h, t.flag(this, 'ssfi'));
        }
      }
      if (typeof u == 'function') {
        let y = u.name || u.prototype.constructor.name;
        return this.assert(
          m && m instanceof u,
          `expected error to be instance of ${y}`,
          `expected error not to be instance of ${y}`,
          u,
          m,
          !1,
        );
      }
      if (u instanceof Error)
        return this.assert(
          m && u.message === m.message,
          `expected error to have message: ${u.message}`,
          `expected error not to have message: ${u.message}`,
          u.message,
          m && m.message,
        );
      if (
        typeof u == 'object' &&
        'asymmetricMatch' in u &&
        typeof u.asymmetricMatch == 'function'
      ) {
        let y = u;
        return this.assert(
          m && y.asymmetricMatch(m),
          'expected error to match asymmetric matcher',
          'expected error not to match asymmetric matcher',
          y.toString(),
          m,
          !1,
        );
      }
      throw new Error(
        `"toThrow" expects string, RegExp, function, Error instance or asymmetric matcher, got "${typeof u}"`,
      );
    }),
    a(['toHaveReturned', 'toReturn'], function () {
      let u = n(this),
        p = u.getMockName(),
        d = u.mock.calls.length > 0 && u.mock.results.some(({ type: f }) => f !== 'throw');
      this.assert(
        d,
        `expected "${p}" to be successfully called at least once`,
        `expected "${p}" to not be successfully called`,
        d,
        !d,
        !1,
      );
    }),
    a(['toHaveReturnedTimes', 'toReturnTimes'], function (u) {
      let p = n(this),
        d = p.getMockName(),
        f = p.mock.results.reduce((m, { type: y }) => (y === 'throw' ? m : ++m), 0);
      this.assert(
        f === u,
        `expected "${d}" to be successfully called ${u} times`,
        `expected "${d}" to not be successfully called ${u} times`,
        `expected number of returns: ${u}`,
        `received number of returns: ${f}`,
        !1,
      );
    }),
    a(['toHaveReturnedWith', 'toReturnWith'], function (u) {
      let p = n(this),
        d = p.getMockName(),
        f = p.mock.results.some(({ type: g, value: h }) => g === 'return' && we(u, h)),
        m = t.flag(this, 'negate'),
        y = t.getMessage(this, [
          f,
          `expected "${d}" to return with: #{exp} at least once`,
          `expected "${d}" to not return with: #{exp}`,
          u,
        ]);
      if ((f && m) || (!f && !m)) throw new r(s(p, y, u));
    }),
    a(['toHaveLastReturnedWith', 'lastReturnedWith'], function (u) {
      let p = n(this),
        d = p.getMockName(),
        { value: f } = p.mock.results[p.mock.results.length - 1],
        m = we(f, u);
      this.assert(
        m,
        `expected last "${d}" call to return #{exp}`,
        `expected last "${d}" call to not return #{exp}`,
        u,
        f,
      );
    }),
    a(['toHaveNthReturnedWith', 'nthReturnedWith'], function (u, p) {
      let d = n(this),
        f = d.getMockName(),
        m = t.flag(this, 'negate'),
        { type: y, value: g } = d.mock.results[u - 1],
        h = `${i(u)} call`;
      !m &&
        y === 'throw' &&
        e.assert.fail(`expected ${h} to return #{exp}, but instead it threw an error`);
      let v = we(g, p);
      this.assert(
        v,
        `expected ${h} "${f}" call to return #{exp}`,
        `expected ${h} "${f}" call to not return #{exp}`,
        p,
        g,
      );
    }),
    a('toSatisfy', function (u, p) {
      return this.be.satisfy(u, p);
    }),
    t.addProperty(e.Assertion.prototype, 'resolves', function () {
      let u = new Error('resolves');
      t.flag(this, 'promise', 'resolves'), t.flag(this, 'error', u);
      let p = t.flag(this, 'vitest-test'),
        d = t.flag(this, 'object');
      if (typeof (d == null ? void 0 : d.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .resolves, not '${typeof d}'.`,
        );
      let f = new Proxy(this, {
        get: (m, y, g) => {
          let h = Reflect.get(m, y, g);
          return typeof h != 'function'
            ? h instanceof e.Assertion
              ? f
              : h
            : async (...v) => {
                let S = d.then(
                  (E) => (t.flag(this, 'object', E), h.call(this, ...v)),
                  (E) => {
                    let C = new r(`promise rejected "${t.inspect(E)}" instead of resolving`, {
                      showDiff: !1,
                    });
                    throw ((C.stack = u.stack.replace(u.message, C.message)), C);
                  },
                );
                return gi(p, S);
              };
        },
      });
      return f;
    }),
    t.addProperty(e.Assertion.prototype, 'rejects', function () {
      let u = new Error('rejects');
      t.flag(this, 'promise', 'rejects'), t.flag(this, 'error', u);
      let p = t.flag(this, 'vitest-test'),
        d = t.flag(this, 'object'),
        f = typeof d == 'function' ? d() : d;
      if (typeof (f == null ? void 0 : f.then) != 'function')
        throw new TypeError(
          `You must provide a Promise to expect() when using .rejects, not '${typeof f}'.`,
        );
      let m = new Proxy(this, {
        get: (y, g, h) => {
          let v = Reflect.get(y, g, h);
          return typeof v != 'function'
            ? v instanceof e.Assertion
              ? m
              : v
            : async (...S) => {
                let E = f.then(
                  (C) => {
                    let A = new r(`promise resolved "${t.inspect(C)}" instead of rejecting`, {
                      showDiff: !1,
                    });
                    throw ((A.stack = u.stack.replace(u.message, A.message)), A);
                  },
                  (C) => (t.flag(this, 'object', C), v.call(this, ...S)),
                );
                return gi(p, E);
              };
        },
      });
      return m;
    });
};
function Wv(e, t) {
  let r = e._obj,
    o = on.flag(e, 'negate'),
    a = on.flag(e, 'promise') || '',
    c = { ...Ms(), diff: Pr, stringify: bt, iterableEquality: ze, subsetEquality: aa };
  return {
    state: { ...Tr(t), isNot: o, utils: c, promise: a, equals: we, suppressedErrors: [] },
    isNot: o,
    obj: r,
  };
}
var vi = class extends Error {
  constructor(e, t, r) {
    super(e), (this.actual = t), (this.expected = r);
  }
};
function Gv(e, t) {
  return (r, o) => {
    Object.entries(t).forEach(([a, c]) => {
      function n(...s) {
        let { state: u, isNot: p, obj: d } = Wv(this, e),
          f = c.call(u, d, ...s);
        if (f && typeof f == 'object' && f instanceof Promise)
          return f.then(({ pass: v, message: S, actual: E, expected: C }) => {
            if ((v && p) || (!v && !p)) throw new vi(S(), E, C);
          });
        let { pass: m, message: y, actual: g, expected: h } = f;
        if ((m && p) || (!m && !p)) throw new vi(y(), g, h);
      }
      let i = Ds(o, n);
      o.addMethod(globalThis[an].matchers, a, i), o.addMethod(r.Assertion.prototype, a, i);
      class l extends zt {
        constructor(u = !1, ...p) {
          super(p, u);
        }
        asymmetricMatch(u) {
          let { pass: p } = c.call(this.getMatcherContext(e), u, ...this.sample);
          return this.inverse ? !p : p;
        }
        toString() {
          return `${this.inverse ? 'not.' : ''}${a}`;
        }
        getExpectedType() {
          return 'any';
        }
        toAsymmetricMatcher() {
          return `${this.toString()}<${this.sample.map(String).join(', ')}>`;
        }
      }
      Object.defineProperty(e, a, {
        configurable: !0,
        enumerable: !0,
        value: (...s) => new l(!1, ...s),
        writable: !0,
      }),
        Object.defineProperty(e.not, a, {
          configurable: !0,
          enumerable: !0,
          value: (...s) => new l(!0, ...s),
          writable: !0,
        });
    });
  };
}
var Kv = (e, t) => {
    t.addMethod(e.expect, 'extend', (r, o) => {
      e.use(Gv(r, o));
    });
  },
  ks = {};
Tl(ks, {
  toBeChecked: () => Tu,
  toBeDisabled: () => _u,
  toBeEmpty: () => au,
  toBeEmptyDOMElement: () => iu,
  toBeEnabled: () => Eu,
  toBeInTheDOM: () => fo,
  toBeInTheDocument: () => ou,
  toBeInvalid: () => Cu,
  toBePartiallyChecked: () => qu,
  toBeRequired: () => wu,
  toBeValid: () => Ou,
  toBeVisible: () => yu,
  toContainElement: () => mo,
  toContainHTML: () => lu,
  toHaveAccessibleDescription: () => yo,
  toHaveAccessibleErrorMessage: () => uu,
  toHaveAccessibleName: () => ho,
  toHaveAttribute: () => cu,
  toHaveClass: () => du,
  toHaveDescription: () => xu,
  toHaveDisplayValue: () => Ru,
  toHaveErrorMessage: () => Mu,
  toHaveFocus: () => pu,
  toHaveFormValues: () => fu,
  toHaveStyle: () => bo,
  toHaveTextContent: () => su,
  toHaveValue: () => Pu,
});
var _i = ve(Il(), 1),
  Yv = ve(Yl(), 1);
function Ls(e) {
  Object.defineProperty(e, '__esModule', { value: !0, configurable: !0 });
}
function ia(e, t, r, o) {
  Object.defineProperty(e, t, { get: r, set: o, enumerable: !0, configurable: !0 });
}
var Fs = {};
Ls(Fs);
ia(Fs, 'default', () => Us);
var Us = class extends Error {
    constructor(e, t, r, o, a) {
      super(e + ':' + r + ':' + o + ': ' + t),
        (this.reason = t),
        (this.filename = e),
        (this.line = r),
        (this.column = o),
        (this.source = a);
    }
  },
  Hs = {};
Ls(Hs);
ia(Hs, 'default', () => zs);
var zs = class {
    constructor(e, t, r) {
      (this.start = e), (this.end = t), (this.source = r);
    }
  },
  Jv = {};
ia(Jv, 'CssTypes', () => Me);
var Me;
(function (e) {
  (e.stylesheet = 'stylesheet'),
    (e.rule = 'rule'),
    (e.declaration = 'declaration'),
    (e.comment = 'comment'),
    (e.container = 'container'),
    (e.charset = 'charset'),
    (e.document = 'document'),
    (e.customMedia = 'custom-media'),
    (e.fontFace = 'font-face'),
    (e.host = 'host'),
    (e.import = 'import'),
    (e.keyframes = 'keyframes'),
    (e.keyframe = 'keyframe'),
    (e.layer = 'layer'),
    (e.media = 'media'),
    (e.namespace = 'namespace'),
    (e.page = 'page'),
    (e.supports = 'supports');
})(Me || (Me = {}));
var Wn = /\/\*[^]*?(?:\*\/|$)/g,
  Xv = (e, t) => {
    t = t || {};
    let r = 1,
      o = 1;
    function a(q) {
      let M = q.match(/\n/g);
      M && (r += M.length);
      let k = q.lastIndexOf(`
`);
      o = ~k ? q.length - k : o + q.length;
    }
    function c() {
      let q = { line: r, column: o };
      return function (M) {
        return (
          (M.position = new zs(q, { line: r, column: o }, (t == null ? void 0 : t.source) || '')),
          f(),
          M
        );
      };
    }
    let n = [];
    function i(q) {
      let M = new Us((t == null ? void 0 : t.source) || '', q, r, o, e);
      if (t != null && t.silent) n.push(M);
      else throw M;
    }
    function l() {
      let q = p();
      return {
        type: Me.stylesheet,
        stylesheet: { source: t == null ? void 0 : t.source, rules: q, parsingErrors: n },
      };
    }
    function s() {
      return d(/^{\s*/);
    }
    function u() {
      return d(/^}/);
    }
    function p() {
      let q,
        M = [];
      for (f(), m(M); e.length && e.charAt(0) !== '}' && (q = ue() || ce()); )
        q && (M.push(q), m(M));
      return M;
    }
    function d(q) {
      let M = q.exec(e);
      if (!M) return;
      let k = M[0];
      return a(k), (e = e.slice(k.length)), M;
    }
    function f() {
      d(/^\s*/);
    }
    function m(q) {
      let M;
      for (q = q || []; (M = y()); ) M && q.push(M);
      return q;
    }
    function y() {
      let q = c();
      if (e.charAt(0) !== '/' || e.charAt(1) !== '*') return;
      let M = d(/^\/\*[^]*?\*\//);
      return M ? q({ type: Me.comment, comment: M[0].slice(2, -2) }) : i('End of comment missing');
    }
    function g(q, M, k) {
      let D = M + 1,
        Y = !1,
        I = q.indexOf(')', D);
      for (; !Y && I !== -1; ) {
        let N = q.indexOf('(', D);
        N !== -1 && N < I ? ((D = g(q, N + 1) + 1), (I = q.indexOf(')', D))) : (Y = !0);
      }
      return Y && I !== -1 ? I : -1;
    }
    function h() {
      let q = d(/^([^{]+)/);
      if (!q) return;
      let M = Xe(q[0]).replace(Wn, '');
      if (M.indexOf(',') === -1) return [M];
      let k = 0,
        D = M.indexOf('(', k);
      for (; D !== -1; ) {
        let Y = g(M, D);
        if (Y === -1) break;
        (k = Y + 1),
          (M = M.substring(0, D) + M.substring(D, Y).replace(/,/g, '‌') + M.substring(Y)),
          (D = M.indexOf('(', k));
      }
      return (
        (M = M.replace(/("|')(?:\\\1|.)*?\1/g, (Y) => Y.replace(/,/g, '‌'))),
        M.split(',').map((Y) => Xe(Y.replace(/\u200C/g, ',')))
      );
    }
    function v() {
      let q = c(),
        M = d(/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/);
      if (!M) return;
      let k = Xe(M[0]);
      if (!d(/^:\s*/)) return i("property missing ':'");
      let D = d(/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/),
        Y = q({
          type: Me.declaration,
          property: k.replace(Wn, ''),
          value: D ? Xe(D[0]).replace(Wn, '') : '',
        });
      return d(/^[;\s]*/), Y;
    }
    function S() {
      let q = [];
      if (!s()) return i("missing '{'");
      m(q);
      let M;
      for (; (M = v()); ) M && (q.push(M), m(q));
      return u() ? q : i("missing '}'");
    }
    function E() {
      let q,
        M = [],
        k = c();
      for (; (q = d(/^((\d+\.\d+|\.\d+|\d+)%?|[a-z]+)\s*/)); ) M.push(q[1]), d(/^,\s*/);
      if (M.length) return k({ type: Me.keyframe, values: M, declarations: S() || [] });
    }
    function C() {
      let q = c(),
        M = d(/^@([-\w]+)?keyframes\s*/);
      if (!M) return;
      let k = M[1],
        D = d(/^([-\w]+)\s*/);
      if (!D) return i('@keyframes missing name');
      let Y = D[1];
      if (!s()) return i("@keyframes missing '{'");
      let I,
        N = m();
      for (; (I = E()); ) N.push(I), (N = N.concat(m()));
      return u()
        ? q({ type: Me.keyframes, name: Y, vendor: k, keyframes: N })
        : i("@keyframes missing '}'");
    }
    function A() {
      let q = c(),
        M = d(/^@supports *([^{]+)/);
      if (!M) return;
      let k = Xe(M[1]);
      if (!s()) return i("@supports missing '{'");
      let D = m().concat(p());
      return u() ? q({ type: Me.supports, supports: k, rules: D }) : i("@supports missing '}'");
    }
    function R() {
      let q = c();
      if (!d(/^@host\s*/)) return;
      if (!s()) return i("@host missing '{'");
      let M = m().concat(p());
      return u() ? q({ type: Me.host, rules: M }) : i("@host missing '}'");
    }
    function _() {
      let q = c(),
        M = d(/^@container *([^{]+)/);
      if (!M) return;
      let k = Xe(M[1]);
      if (!s()) return i("@container missing '{'");
      let D = m().concat(p());
      return u() ? q({ type: Me.container, container: k, rules: D }) : i("@container missing '}'");
    }
    function O() {
      let q = c(),
        M = d(/^@layer *([^{;@]+)/);
      if (!M) return;
      let k = Xe(M[1]);
      if (!s()) return d(/^[;\s]*/), q({ type: Me.layer, layer: k });
      let D = m().concat(p());
      return u() ? q({ type: Me.layer, layer: k, rules: D }) : i("@layer missing '}'");
    }
    function x() {
      let q = c(),
        M = d(/^@media *([^{]+)/);
      if (!M) return;
      let k = Xe(M[1]);
      if (!s()) return i("@media missing '{'");
      let D = m().concat(p());
      return u() ? q({ type: Me.media, media: k, rules: D }) : i("@media missing '}'");
    }
    function j() {
      let q = c(),
        M = d(/^@custom-media\s+(--\S+)\s*([^{;\s][^{;]*);/);
      if (M) return q({ type: Me.customMedia, name: Xe(M[1]), media: Xe(M[2]) });
    }
    function z() {
      let q = c();
      if (!d(/^@page */)) return;
      let M = h() || [];
      if (!s()) return i("@page missing '{'");
      let k = m(),
        D;
      for (; (D = v()); ) k.push(D), (k = k.concat(m()));
      return u() ? q({ type: Me.page, selectors: M, declarations: k }) : i("@page missing '}'");
    }
    function V() {
      let q = c(),
        M = d(/^@([-\w]+)?document *([^{]+)/);
      if (!M) return;
      let k = Xe(M[1]),
        D = Xe(M[2]);
      if (!s()) return i("@document missing '{'");
      let Y = m().concat(p());
      return u()
        ? q({ type: Me.document, document: D, vendor: k, rules: Y })
        : i("@document missing '}'");
    }
    function U() {
      let q = c();
      if (!d(/^@font-face\s*/)) return;
      if (!s()) return i("@font-face missing '{'");
      let M = m(),
        k;
      for (; (k = v()); ) M.push(k), (M = M.concat(m()));
      return u() ? q({ type: Me.fontFace, declarations: M }) : i("@font-face missing '}'");
    }
    let ee = oe('import'),
      G = oe('charset'),
      ne = oe('namespace');
    function oe(q) {
      let M = new RegExp(
        '^@' + q + `\\s*((?::?[^;'"]|"(?:\\\\"|[^"])*?"|'(?:\\\\'|[^'])*?')+)(?:;|$)`,
      );
      return function () {
        let k = c(),
          D = d(M);
        if (!D) return;
        let Y = { type: q };
        return (Y[q] = D[1].trim()), k(Y);
      };
    }
    function ue() {
      if (e[0] === '@')
        return (
          C() || x() || j() || A() || ee() || G() || ne() || V() || z() || R() || U() || _() || O()
        );
    }
    function ce() {
      let q = c(),
        M = h();
      return M
        ? (m(), q({ type: Me.rule, selectors: M, declarations: S() || [] }))
        : i('selector missing');
    }
    return po(l());
  };
function Xe(e) {
  return e ? e.trim() : '';
}
function po(e, t) {
  let r = e && typeof e.type == 'string',
    o = r ? e : t;
  for (let a in e) {
    let c = e[a];
    Array.isArray(c)
      ? c.forEach((n) => {
          po(n, o);
        })
      : c && typeof c == 'object' && po(c, o);
  }
  return (
    r &&
      Object.defineProperty(e, 'parent', {
        configurable: !0,
        writable: !0,
        enumerable: !1,
        value: t || null,
      }),
    e
  );
}
var Qv = Xv,
  Zv = Qv,
  e0 = Object.prototype.toString;
function Ei(e) {
  return typeof e == 'function' || e0.call(e) === '[object Function]';
}
function t0(e) {
  var t = Number(e);
  return isNaN(t) ? 0 : t === 0 || !isFinite(t) ? t : (t > 0 ? 1 : -1) * Math.floor(Math.abs(t));
}
var r0 = Math.pow(2, 53) - 1;
function n0(e) {
  var t = t0(e);
  return Math.min(Math.max(t, 0), r0);
}
function nt(e, t) {
  var r = Array,
    o = Object(e);
  if (e == null)
    throw new TypeError('Array.from requires an array-like object - not null or undefined');
  if (typeof t < 'u' && !Ei(t))
    throw new TypeError('Array.from: when provided, the second argument must be a function');
  for (var a = n0(o.length), c = Ei(r) ? Object(new r(a)) : new Array(a), n = 0, i; n < a; )
    (i = o[n]), t ? (c[n] = t(i, n)) : (c[n] = i), (n += 1);
  return (c.length = a), c;
}
function Ar(e) {
  '@babel/helpers - typeof';
  return (
    (Ar =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    Ar(e)
  );
}
function o0(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function wi(e, t) {
  for (var r = 0; r < t.length; r++) {
    var o = t[r];
    (o.enumerable = o.enumerable || !1),
      (o.configurable = !0),
      'value' in o && (o.writable = !0),
      Object.defineProperty(e, Vs(o.key), o);
  }
}
function a0(e, t, r) {
  return (
    t && wi(e.prototype, t),
    r && wi(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  );
}
function i0(e, t, r) {
  return (
    (t = Vs(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function Vs(e) {
  var t = l0(e, 'string');
  return Ar(t) === 'symbol' ? t : String(t);
}
function l0(e, t) {
  if (Ar(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || 'default');
    if (Ar(o) !== 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var s0 = (function () {
    function e() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
      o0(this, e), i0(this, 'items', void 0), (this.items = t);
    }
    return (
      a0(e, [
        {
          key: 'add',
          value: function (t) {
            return this.has(t) === !1 && this.items.push(t), this;
          },
        },
        {
          key: 'clear',
          value: function () {
            this.items = [];
          },
        },
        {
          key: 'delete',
          value: function (t) {
            var r = this.items.length;
            return (
              (this.items = this.items.filter(function (o) {
                return o !== t;
              })),
              r !== this.items.length
            );
          },
        },
        {
          key: 'forEach',
          value: function (t) {
            var r = this;
            this.items.forEach(function (o) {
              t(o, o, r);
            });
          },
        },
        {
          key: 'has',
          value: function (t) {
            return this.items.indexOf(t) !== -1;
          },
        },
        {
          key: 'size',
          get: function () {
            return this.items.length;
          },
        },
      ]),
      e
    );
  })(),
  u0 = typeof Set > 'u' ? Set : s0;
function Be(e) {
  var t;
  return (t = e.localName) !== null && t !== void 0 ? t : e.tagName.toLowerCase();
}
var c0 = {
    article: 'article',
    aside: 'complementary',
    button: 'button',
    datalist: 'listbox',
    dd: 'definition',
    details: 'group',
    dialog: 'dialog',
    dt: 'term',
    fieldset: 'group',
    figure: 'figure',
    form: 'form',
    footer: 'contentinfo',
    h1: 'heading',
    h2: 'heading',
    h3: 'heading',
    h4: 'heading',
    h5: 'heading',
    h6: 'heading',
    header: 'banner',
    hr: 'separator',
    html: 'document',
    legend: 'legend',
    li: 'listitem',
    math: 'math',
    main: 'main',
    menu: 'list',
    nav: 'navigation',
    ol: 'list',
    optgroup: 'group',
    option: 'option',
    output: 'status',
    progress: 'progressbar',
    section: 'region',
    summary: 'button',
    table: 'table',
    tbody: 'rowgroup',
    textarea: 'textbox',
    tfoot: 'rowgroup',
    td: 'cell',
    th: 'columnheader',
    thead: 'rowgroup',
    tr: 'row',
    ul: 'list',
  },
  d0 = {
    caption: new Set(['aria-label', 'aria-labelledby']),
    code: new Set(['aria-label', 'aria-labelledby']),
    deletion: new Set(['aria-label', 'aria-labelledby']),
    emphasis: new Set(['aria-label', 'aria-labelledby']),
    generic: new Set(['aria-label', 'aria-labelledby', 'aria-roledescription']),
    insertion: new Set(['aria-label', 'aria-labelledby']),
    paragraph: new Set(['aria-label', 'aria-labelledby']),
    presentation: new Set(['aria-label', 'aria-labelledby']),
    strong: new Set(['aria-label', 'aria-labelledby']),
    subscript: new Set(['aria-label', 'aria-labelledby']),
    superscript: new Set(['aria-label', 'aria-labelledby']),
  };
function p0(e, t) {
  return [
    'aria-atomic',
    'aria-busy',
    'aria-controls',
    'aria-current',
    'aria-describedby',
    'aria-details',
    'aria-dropeffect',
    'aria-flowto',
    'aria-grabbed',
    'aria-hidden',
    'aria-keyshortcuts',
    'aria-label',
    'aria-labelledby',
    'aria-live',
    'aria-owns',
    'aria-relevant',
    'aria-roledescription',
  ].some(function (r) {
    var o;
    return e.hasAttribute(r) && !((o = d0[t]) !== null && o !== void 0 && o.has(r));
  });
}
function Ws(e, t) {
  return p0(e, t);
}
function f0(e) {
  var t = y0(e);
  if (t === null || t === 'presentation') {
    var r = m0(e);
    if (t !== 'presentation' || Ws(e, r || '')) return r;
  }
  return t;
}
function m0(e) {
  var t = c0[Be(e)];
  if (t !== void 0) return t;
  switch (Be(e)) {
    case 'a':
    case 'area':
    case 'link':
      if (e.hasAttribute('href')) return 'link';
      break;
    case 'img':
      return e.getAttribute('alt') === '' && !Ws(e, 'img') ? 'presentation' : 'img';
    case 'input': {
      var r = e,
        o = r.type;
      switch (o) {
        case 'button':
        case 'image':
        case 'reset':
        case 'submit':
          return 'button';
        case 'checkbox':
        case 'radio':
          return o;
        case 'range':
          return 'slider';
        case 'email':
        case 'tel':
        case 'text':
        case 'url':
          return e.hasAttribute('list') ? 'combobox' : 'textbox';
        case 'search':
          return e.hasAttribute('list') ? 'combobox' : 'searchbox';
        case 'number':
          return 'spinbutton';
        default:
          return null;
      }
    }
    case 'select':
      return e.hasAttribute('multiple') || e.size > 1 ? 'listbox' : 'combobox';
  }
  return null;
}
function y0(e) {
  var t = e.getAttribute('role');
  if (t !== null) {
    var r = t.trim().split(' ')[0];
    if (r.length > 0) return r;
  }
  return null;
}
function Ce(e) {
  return e !== null && e.nodeType === e.ELEMENT_NODE;
}
function Gs(e) {
  return Ce(e) && Be(e) === 'caption';
}
function tn(e) {
  return Ce(e) && Be(e) === 'input';
}
function h0(e) {
  return Ce(e) && Be(e) === 'optgroup';
}
function b0(e) {
  return Ce(e) && Be(e) === 'select';
}
function g0(e) {
  return Ce(e) && Be(e) === 'table';
}
function v0(e) {
  return Ce(e) && Be(e) === 'textarea';
}
function _0(e) {
  var t = e.ownerDocument === null ? e : e.ownerDocument,
    r = t.defaultView;
  if (r === null) throw new TypeError('no window available');
  return r;
}
function E0(e) {
  return Ce(e) && Be(e) === 'fieldset';
}
function w0(e) {
  return Ce(e) && Be(e) === 'legend';
}
function S0(e) {
  return Ce(e) && Be(e) === 'slot';
}
function C0(e) {
  return Ce(e) && e.ownerSVGElement !== void 0;
}
function O0(e) {
  return Ce(e) && Be(e) === 'svg';
}
function P0(e) {
  return C0(e) && Be(e) === 'title';
}
function ln(e, t) {
  if (Ce(e) && e.hasAttribute(t)) {
    var r = e.getAttribute(t).split(' '),
      o = e.getRootNode ? e.getRootNode() : e.ownerDocument;
    return r
      .map(function (a) {
        return o.getElementById(a);
      })
      .filter(function (a) {
        return a !== null;
      });
  }
  return [];
}
function yt(e, t) {
  return Ce(e) ? t.indexOf(f0(e)) !== -1 : !1;
}
function R0(e) {
  return e.trim().replace(/\s\s+/g, ' ');
}
function T0(e, t) {
  if (!Ce(e)) return !1;
  if (e.hasAttribute('hidden') || e.getAttribute('aria-hidden') === 'true') return !0;
  var r = t(e);
  return r.getPropertyValue('display') === 'none' || r.getPropertyValue('visibility') === 'hidden';
}
function A0(e) {
  return yt(e, ['button', 'combobox', 'listbox', 'textbox']) || Ks(e, 'range');
}
function Ks(e, t) {
  if (!Ce(e)) return !1;
  switch (t) {
    case 'range':
      return yt(e, ['meter', 'progressbar', 'scrollbar', 'slider', 'spinbutton']);
    default:
      throw new TypeError(
        "No knowledge about abstract role '".concat(t, "'. This is likely a bug :("),
      );
  }
}
function Si(e, t) {
  var r = nt(e.querySelectorAll(t));
  return (
    ln(e, 'aria-owns').forEach(function (o) {
      r.push.apply(r, nt(o.querySelectorAll(t)));
    }),
    r
  );
}
function q0(e) {
  return b0(e) ? e.selectedOptions || Si(e, '[selected]') : Si(e, '[aria-selected="true"]');
}
function x0(e) {
  return yt(e, ['none', 'presentation']);
}
function M0(e) {
  return Gs(e);
}
function j0(e) {
  return yt(e, [
    'button',
    'cell',
    'checkbox',
    'columnheader',
    'gridcell',
    'heading',
    'label',
    'legend',
    'link',
    'menuitem',
    'menuitemcheckbox',
    'menuitemradio',
    'option',
    'radio',
    'row',
    'rowheader',
    'switch',
    'tab',
    'tooltip',
    'treeitem',
  ]);
}
function I0(e) {
  return !1;
}
function N0(e) {
  return tn(e) || v0(e) ? e.value : e.textContent || '';
}
function Ci(e) {
  var t = e.getPropertyValue('content');
  return /^["'].*["']$/.test(t) ? t.slice(1, -1) : '';
}
function Ys(e) {
  var t = Be(e);
  return (
    t === 'button' ||
    (t === 'input' && e.getAttribute('type') !== 'hidden') ||
    t === 'meter' ||
    t === 'output' ||
    t === 'progress' ||
    t === 'select' ||
    t === 'textarea'
  );
}
function Js(e) {
  if (Ys(e)) return e;
  var t = null;
  return (
    e.childNodes.forEach(function (r) {
      if (t === null && Ce(r)) {
        var o = Js(r);
        o !== null && (t = o);
      }
    }),
    t
  );
}
function B0(e) {
  if (e.control !== void 0) return e.control;
  var t = e.getAttribute('for');
  return t !== null ? e.ownerDocument.getElementById(t) : Js(e);
}
function $0(e) {
  var t = e.labels;
  if (t === null) return t;
  if (t !== void 0) return nt(t);
  if (!Ys(e)) return null;
  var r = e.ownerDocument;
  return nt(r.querySelectorAll('label')).filter(function (o) {
    return B0(o) === e;
  });
}
function D0(e) {
  var t = e.assignedNodes();
  return t.length === 0 ? nt(e.childNodes) : t;
}
function Xs(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = new u0(),
    o = _0(e),
    a = t.compute,
    c = a === void 0 ? 'name' : a,
    n = t.computedStyleSupportsPseudoElements,
    i = n === void 0 ? t.getComputedStyle !== void 0 : n,
    l = t.getComputedStyle,
    s = l === void 0 ? o.getComputedStyle.bind(o) : l,
    u = t.hidden,
    p = u === void 0 ? !1 : u;
  function d(h, v) {
    var S = '';
    if (Ce(h) && i) {
      var E = s(h, '::before'),
        C = Ci(E);
      S = ''.concat(C, ' ').concat(S);
    }
    var A = S0(h) ? D0(h) : nt(h.childNodes).concat(ln(h, 'aria-owns'));
    if (
      (A.forEach(function (O) {
        var x = g(O, { isEmbeddedInLabel: v.isEmbeddedInLabel, isReferenced: !1, recursion: !0 }),
          j = Ce(O) ? s(O).getPropertyValue('display') : 'inline',
          z = j !== 'inline' ? ' ' : '';
        S += ''.concat(z).concat(x).concat(z);
      }),
      Ce(h) && i)
    ) {
      var R = s(h, '::after'),
        _ = Ci(R);
      S = ''.concat(S, ' ').concat(_);
    }
    return S.trim();
  }
  function f(h, v) {
    var S = h.getAttributeNode(v);
    return S !== null && !r.has(S) && S.value.trim() !== '' ? (r.add(S), S.value) : null;
  }
  function m(h) {
    return Ce(h) ? f(h, 'title') : null;
  }
  function y(h) {
    if (!Ce(h)) return null;
    if (E0(h)) {
      r.add(h);
      for (var v = nt(h.childNodes), S = 0; S < v.length; S += 1) {
        var E = v[S];
        if (w0(E)) return g(E, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (g0(h)) {
      r.add(h);
      for (var C = nt(h.childNodes), A = 0; A < C.length; A += 1) {
        var R = C[A];
        if (Gs(R)) return g(R, { isEmbeddedInLabel: !1, isReferenced: !1, recursion: !1 });
      }
    } else if (O0(h)) {
      r.add(h);
      for (var _ = nt(h.childNodes), O = 0; O < _.length; O += 1) {
        var x = _[O];
        if (P0(x)) return x.textContent;
      }
      return null;
    } else if (Be(h) === 'img' || Be(h) === 'area') {
      var j = f(h, 'alt');
      if (j !== null) return j;
    } else if (h0(h)) {
      var z = f(h, 'label');
      if (z !== null) return z;
    }
    if (tn(h) && (h.type === 'button' || h.type === 'submit' || h.type === 'reset')) {
      var V = f(h, 'value');
      if (V !== null) return V;
      if (h.type === 'submit') return 'Submit';
      if (h.type === 'reset') return 'Reset';
    }
    var U = $0(h);
    if (U !== null && U.length !== 0)
      return (
        r.add(h),
        nt(U)
          .map(function (oe) {
            return g(oe, { isEmbeddedInLabel: !0, isReferenced: !1, recursion: !0 });
          })
          .filter(function (oe) {
            return oe.length > 0;
          })
          .join(' ')
      );
    if (tn(h) && h.type === 'image') {
      var ee = f(h, 'alt');
      if (ee !== null) return ee;
      var G = f(h, 'title');
      return G !== null ? G : 'Submit Query';
    }
    if (yt(h, ['button'])) {
      var ne = d(h, { isEmbeddedInLabel: !1, isReferenced: !1 });
      if (ne !== '') return ne;
    }
    return null;
  }
  function g(h, v) {
    if (r.has(h)) return '';
    if (!p && T0(h, s) && !v.isReferenced) return r.add(h), '';
    var S = Ce(h) ? h.getAttributeNode('aria-labelledby') : null,
      E = S !== null && !r.has(S) ? ln(h, 'aria-labelledby') : [];
    if (c === 'name' && !v.isReferenced && E.length > 0)
      return (
        r.add(S),
        E.map(function (j) {
          return g(j, { isEmbeddedInLabel: v.isEmbeddedInLabel, isReferenced: !0, recursion: !1 });
        }).join(' ')
      );
    var C = v.recursion && A0(h) && c === 'name';
    if (!C) {
      var A = ((Ce(h) && h.getAttribute('aria-label')) || '').trim();
      if (A !== '' && c === 'name') return r.add(h), A;
      if (!x0(h)) {
        var R = y(h);
        if (R !== null) return r.add(h), R;
      }
    }
    if (yt(h, ['menu'])) return r.add(h), '';
    if (C || v.isEmbeddedInLabel || v.isReferenced) {
      if (yt(h, ['combobox', 'listbox'])) {
        r.add(h);
        var _ = q0(h);
        return _.length === 0
          ? tn(h)
            ? h.value
            : ''
          : nt(_)
              .map(function (j) {
                return g(j, {
                  isEmbeddedInLabel: v.isEmbeddedInLabel,
                  isReferenced: !1,
                  recursion: !0,
                });
              })
              .join(' ');
      }
      if (Ks(h, 'range'))
        return (
          r.add(h),
          h.hasAttribute('aria-valuetext')
            ? h.getAttribute('aria-valuetext')
            : h.hasAttribute('aria-valuenow')
              ? h.getAttribute('aria-valuenow')
              : h.getAttribute('value') || ''
        );
      if (yt(h, ['textbox'])) return r.add(h), N0(h);
    }
    if (j0(h) || (Ce(h) && v.isReferenced) || M0(h) || I0()) {
      var O = d(h, { isEmbeddedInLabel: v.isEmbeddedInLabel, isReferenced: !1 });
      if (O !== '') return r.add(h), O;
    }
    if (h.nodeType === h.TEXT_NODE) return r.add(h), h.textContent || '';
    if (v.recursion)
      return r.add(h), d(h, { isEmbeddedInLabel: v.isEmbeddedInLabel, isReferenced: !1 });
    var x = m(h);
    return x !== null ? (r.add(h), x) : (r.add(h), '');
  }
  return R0(g(e, { isEmbeddedInLabel: !1, isReferenced: c === 'description', recursion: !1 }));
}
function qr(e) {
  '@babel/helpers - typeof';
  return (
    (qr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t;
          }),
    qr(e)
  );
}
function Oi(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    t &&
      (o = o.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      r.push.apply(r, o);
  }
  return r;
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Oi(Object(r), !0).forEach(function (o) {
          k0(e, o, r[o]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : Oi(Object(r)).forEach(function (o) {
            Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(r, o));
          });
  }
  return e;
}
function k0(e, t, r) {
  return (
    (t = L0(t)),
    t in e
      ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 })
      : (e[t] = r),
    e
  );
}
function L0(e) {
  var t = F0(e, 'string');
  return qr(t) === 'symbol' ? t : String(t);
}
function F0(e, t) {
  if (qr(e) !== 'object' || e === null) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(e, t || 'default');
    if (qr(o) !== 'object') return o;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function la(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = ln(e, 'aria-describedby')
      .map(function (a) {
        return Xs(a, Pi(Pi({}, t), {}, { compute: 'description' }));
      })
      .join(' ');
  if (r === '') {
    var o = e.getAttribute('title');
    r = o === null ? '' : o;
  }
  return r;
}
function U0(e) {
  return yt(e, [
    'caption',
    'code',
    'deletion',
    'emphasis',
    'generic',
    'insertion',
    'paragraph',
    'presentation',
    'strong',
    'subscript',
    'superscript',
  ]);
}
function qn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return U0(e) ? '' : Xs(e, t);
}
var H0 = ve(Xl(), 1),
  Qs = ve(Ql(), 1),
  z0 = ve(Zl(), 1),
  V0 = ve(es(), 1),
  Zs = ve(Zo(), 1),
  eu = class extends Error {
    constructor(e, t, r, o) {
      super(), Error.captureStackTrace && Error.captureStackTrace(this, r);
      let a = '';
      try {
        a = o.utils.printWithType('Received', t, o.utils.printReceived);
      } catch {}
      this.message = [
        o.utils.matcherHint(`${o.isNot ? '.not' : ''}.${r.name}`, 'received', ''),
        '',
        `${o.utils.RECEIVED_COLOR('received')} value must ${e}.`,
        a,
      ].join(`
`);
    }
  },
  Ri = class extends eu {
    constructor(...e) {
      super('be an HTMLElement or an SVGElement', ...e);
    }
  },
  Ti = class extends eu {
    constructor(...e) {
      super('be a Node', ...e);
    }
  };
function tu(e, t, ...r) {
  if (!e || !e.ownerDocument || !e.ownerDocument.defaultView) throw new t(e, ...r);
}
function W0(e, ...t) {
  tu(e, Ti, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.Node)) throw new Ti(e, ...t);
}
function _e(e, ...t) {
  tu(e, Ri, ...t);
  let r = e.ownerDocument.defaultView;
  if (!(e instanceof r.HTMLElement) && !(e instanceof r.SVGElement)) throw new Ri(e, ...t);
}
var G0 = class extends Error {
  constructor(e, t, r) {
    super(),
      Error.captureStackTrace && Error.captureStackTrace(this, t),
      (this.message = [
        e.message,
        '',
        r.utils.RECEIVED_COLOR('Failing css:'),
        r.utils.RECEIVED_COLOR(`${e.css}`),
      ].join(`
`));
  }
};
function K0(e, ...t) {
  let r = Zv(`selector { ${e} }`, { silent: !0 }).stylesheet;
  if (r.parsingErrors && r.parsingErrors.length > 0) {
    let { reason: o, line: a } = r.parsingErrors[0];
    throw new G0(
      { css: e, message: `Syntax error parsing expected css: ${o} on line: ${a}` },
      ...t,
    );
  }
  return r.rules[0].declarations
    .filter((o) => o.type === 'declaration')
    .reduce((o, { property: a, value: c }) => Object.assign(o, { [a]: c }), {});
}
function Ai(e, t) {
  return typeof t == 'string' ? t : e.utils.stringify(t);
}
function Le(e, t, r, o, a, c) {
  return [
    `${t}
`,
    `${r}:
${e.utils.EXPECTED_COLOR((0, _i.default)(Ai(e, o), 2))}`,
    `${a}:
${e.utils.RECEIVED_COLOR((0, _i.default)(Ai(e, c), 2))}`,
  ].join(`
`);
}
function Y0(e, t) {
  return t instanceof RegExp ? t.test(e) : e.includes(String(t));
}
function xn(e, t) {
  console.warn(`Warning: ${e} has been deprecated and will be removed in future updates.`, t);
}
function Mn(e) {
  return e.replace(/\s+/g, ' ').trim();
}
function At(e) {
  return e.tagName && e.tagName.toLowerCase();
}
function J0({ multiple: e, options: t }) {
  let r = [...t].filter((o) => o.selected);
  if (e) return [...r].map((o) => o.value);
  if (r.length !== 0) return r[0].value;
}
function X0(e) {
  switch (e.type) {
    case 'number':
      return e.value === '' ? null : Number(e.value);
    case 'checkbox':
      return e.checked;
    default:
      return e.value;
  }
}
function ru(e) {
  if (e)
    switch (e.tagName.toLowerCase()) {
      case 'input':
        return X0(e);
      case 'select':
        return J0(e);
      default:
        return e.value;
    }
}
function nu(e, t) {
  if (Array.isArray(e) && Array.isArray(t)) return (0, Yv.default)(new Set(e), new Set(t));
}
function Q0(e, { wordConnector: t = ', ', lastWordConnector: r = ' and ' } = {}) {
  return [e.slice(0, -1).join(t), e[e.length - 1]].join(e.length > 1 ? r : '');
}
function fo(e, t) {
  return (
    xn(
      'toBeInTheDOM',
      'Please use toBeInTheDocument for searching the entire document and toContainElement for searching a specific container.',
    ),
    e && _e(e, fo, this),
    t && _e(t, fo, this),
    {
      pass: t ? t.contains(e) : !!e,
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeInTheDOM`, 'element', ''),
          '',
          'Received:',
          `  ${this.utils.printReceived(e && e.cloneNode(!1))}`,
        ].join(`
`),
    }
  );
}
function ou(e) {
  (e !== null || !this.isNot) && _e(e, ou, this);
  let t = e === null ? !1 : e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = () =>
      `expected document not to contain element, found ${this.utils.stringify(
        e.cloneNode(!0),
      )} instead`,
    o = () => 'element could not be found in the document';
  return {
    pass: t,
    message: () =>
      [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeInTheDocument`, 'element', ''),
        '',
        this.utils.RECEIVED_COLOR(this.isNot ? r() : o()),
      ].join(`
`),
  };
}
function au(e) {
  return (
    xn('toBeEmpty', 'Please use instead toBeEmptyDOMElement for finding empty nodes in the DOM.'),
    _e(e, au, this),
    {
      pass: e.innerHTML === '',
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeEmpty`, 'element', ''),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function iu(e) {
  return (
    _e(e, iu, this),
    {
      pass: Z0(e),
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeEmptyDOMElement`, 'element', ''),
          '',
          'Received:',
          `  ${this.utils.printReceived(e.innerHTML)}`,
        ].join(`
`),
    }
  );
}
function Z0(e) {
  return [...e.childNodes].filter((t) => t.nodeType !== 8).length === 0;
}
function mo(e, t) {
  return (
    _e(e, mo, this),
    t !== null && _e(t, mo, this),
    {
      pass: e.contains(t),
      message: () =>
        [
          this.utils.matcherHint(
            `${this.isNot ? '.not' : ''}.toContainElement`,
            'element',
            'element',
          ),
          '',
          this.utils.RECEIVED_COLOR(`${this.utils.stringify(e.cloneNode(!1))} ${
            this.isNot ? 'contains:' : 'does not contain:'
          } ${this.utils.stringify(t && t.cloneNode(!1))}
        `),
        ].join(`
`),
    }
  );
}
function e1(e, t) {
  let r = e.ownerDocument.createElement('div');
  return (r.innerHTML = t), r.innerHTML;
}
function lu(e, t) {
  if ((_e(e, lu, this), typeof t != 'string'))
    throw new Error(`.toContainHTML() expects a string value, got ${t}`);
  return {
    pass: e.outerHTML.includes(e1(e, t)),
    message: () =>
      [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toContainHTML`, 'element', ''),
        'Expected:',
        `  ${this.utils.EXPECTED_COLOR(t)}`,
        'Received:',
        `  ${this.utils.printReceived(e.cloneNode(!0))}`,
      ].join(`
`),
  };
}
function su(e, t, r = { normalizeWhitespace: !0 }) {
  W0(e, su, this);
  let o = r.normalizeWhitespace ? Mn(e.textContent) : e.textContent.replace(/\u00a0/g, ' '),
    a = o !== '' && t === '';
  return {
    pass: !a && Y0(o, t),
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return Le(
        this,
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveTextContent`, 'element', ''),
        a
          ? 'Checking with empty string will always match, use .toBeEmptyDOMElement() instead'
          : `Expected element ${c} have text content`,
        t,
        'Received',
        o,
      );
    },
  };
}
function yo(e, t) {
  _e(e, yo, this);
  let r = la(e),
    o = arguments.length === 1,
    a = !1;
  return (
    o ? (a = r !== '') : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let c = this.isNot ? 'not to' : 'to';
        return Le(
          this,
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.${yo.name}`, 'element', ''),
          `Expected element ${c} have accessible description`,
          t,
          'Received',
          r,
        );
      },
    }
  );
}
var Er = 'aria-invalid',
  t1 = ['false'];
function uu(e, t) {
  var i;
  _e(e, uu, this);
  let r = this.isNot ? 'not to' : 'to',
    o = this.isNot ? '.not.toHaveAccessibleErrorMessage' : '.toHaveAccessibleErrorMessage',
    a = e.getAttribute('aria-errormessage');
  if (a && /\s+/.test(a))
    return {
      pass: !1,
      message: () =>
        Le(
          this,
          this.utils.matcherHint(o, 'element'),
          "Expected element's `aria-errormessage` attribute to be empty or a single, valid ID",
          '',
          'Received',
          `aria-errormessage="${a}"`,
        ),
    };
  let c = e.getAttribute(Er);
  if (!e.hasAttribute(Er) || t1.includes(c))
    return {
      pass: !1,
      message: () =>
        Le(
          this,
          this.utils.matcherHint(o, 'element'),
          'Expected element to be marked as invalid with attribute',
          `${Er}="${String(!0)}"`,
          'Received',
          e.hasAttribute('aria-invalid') ? `${Er}="${e.getAttribute(Er)}` : null,
        ),
    };
  let n = Mn(((i = e.ownerDocument.getElementById(a)) == null ? void 0 : i.textContent) ?? '');
  return {
    pass: t === void 0 ? !!n : t instanceof RegExp ? t.test(n) : this.equals(n, t),
    message: () =>
      Le(
        this,
        this.utils.matcherHint(o, 'element'),
        `Expected element ${r} have accessible error message`,
        t ?? '',
        'Received',
        n,
      ),
  };
}
function ho(e, t) {
  _e(e, ho, this);
  let r = qn(e),
    o = arguments.length === 1,
    a = !1;
  return (
    o ? (a = r !== '') : (a = t instanceof RegExp ? t.test(r) : this.equals(r, t)),
    {
      pass: a,
      message: () => {
        let c = this.isNot ? 'not to' : 'to';
        return Le(
          this,
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.${ho.name}`, 'element', ''),
          `Expected element ${c} have accessible name`,
          t,
          'Received',
          r,
        );
      },
    }
  );
}
function qi(e, t, r) {
  return r === void 0 ? t : `${t}=${e(r)}`;
}
function r1(e, t, r) {
  return r === void 0
    ? `element.hasAttribute(${e(t)})`
    : `element.getAttribute(${e(t)}) === ${e(r)}`;
}
function cu(e, t, r) {
  _e(e, cu, this);
  let o = r !== void 0,
    a = e.hasAttribute(t),
    c = e.getAttribute(t);
  return {
    pass: o ? a && this.equals(c, r) : a,
    message: () => {
      let n = this.isNot ? 'not to' : 'to',
        i = a ? qi(this.utils.stringify, t, c) : null,
        l = this.utils.matcherHint(
          `${this.isNot ? '.not' : ''}.toHaveAttribute`,
          'element',
          this.utils.printExpected(t),
          {
            secondArgument: o ? this.utils.printExpected(r) : void 0,
            comment: r1(this.utils.stringify, t, r),
          },
        );
      return Le(
        this,
        l,
        `Expected the element ${n} have attribute`,
        qi(this.utils.stringify, t, r),
        'Received',
        i,
      );
    },
  };
}
function n1(e) {
  let t = e.pop(),
    r,
    o;
  return (
    typeof t == 'object' ? ((r = e), (o = t)) : ((r = e.concat(t)), (o = { exact: !1 })),
    { expectedClassNames: r, options: o }
  );
}
function xi(e) {
  return e ? e.split(/\s+/).filter((t) => t.length > 0) : [];
}
function Mi(e, t) {
  return e.every((r) => t.includes(r));
}
function du(e, ...t) {
  _e(e, du, this);
  let { expectedClassNames: r, options: o } = n1(t),
    a = xi(e.getAttribute('class')),
    c = r.reduce((n, i) => n.concat(xi(i)), []);
  return o.exact
    ? {
        pass: Mi(c, a) && c.length === a.length,
        message: () => {
          let n = this.isNot ? 'not to' : 'to';
          return Le(
            this,
            this.utils.matcherHint(
              `${this.isNot ? '.not' : ''}.toHaveClass`,
              'element',
              this.utils.printExpected(c.join(' ')),
            ),
            `Expected the element ${n} have EXACTLY defined classes`,
            c.join(' '),
            'Received',
            a.join(' '),
          );
        },
      }
    : c.length > 0
      ? {
          pass: Mi(c, a),
          message: () => {
            let n = this.isNot ? 'not to' : 'to';
            return Le(
              this,
              this.utils.matcherHint(
                `${this.isNot ? '.not' : ''}.toHaveClass`,
                'element',
                this.utils.printExpected(c.join(' ')),
              ),
              `Expected the element ${n} have class`,
              c.join(' '),
              'Received',
              a.join(' '),
            );
          },
        }
      : {
          pass: this.isNot ? a.length > 0 : !1,
          message: () =>
            this.isNot
              ? Le(
                  this,
                  this.utils.matcherHint('.not.toHaveClass', 'element', ''),
                  'Expected the element to have classes',
                  '(none)',
                  'Received',
                  a.join(' '),
                )
              : [
                  this.utils.matcherHint('.toHaveClass', 'element'),
                  'At least one expected class must be provided.',
                ].join(`
`),
        };
}
function o1(e, t) {
  let r = {},
    o = e.createElement('div');
  return (
    Object.keys(t).forEach((a) => {
      (o.style[a] = t[a]), (r[a] = o.style[a]);
    }),
    r
  );
}
function a1(e, t) {
  return (
    !!Object.keys(e).length &&
    Object.entries(e).every(([r, o]) => {
      let a = r.startsWith('--'),
        c = [r];
      return a || c.push(r.toLowerCase()), c.some((n) => t[n] === o || t.getPropertyValue(n) === o);
    })
  );
}
function ji(e) {
  return Object.keys(e)
    .sort()
    .map((t) => `${t}: ${e[t]};`).join(`
`);
}
function i1(e, t, r) {
  let o = Array.from(r)
    .filter((a) => t[a] !== void 0)
    .reduce((a, c) => Object.assign(a, { [c]: r.getPropertyValue(c) }), {});
  return e(ji(t), ji(o)).replace(
    `${H0.default.red('+ Received')}
`,
    '',
  );
}
function bo(e, t) {
  _e(e, bo, this);
  let r = typeof t == 'object' ? t : K0(t, bo, this),
    { getComputedStyle: o } = e.ownerDocument.defaultView,
    a = o1(e.ownerDocument, r),
    c = o(e);
  return {
    pass: a1(a, c),
    message: () => {
      let n = `${this.isNot ? '.not' : ''}.toHaveStyle`;
      return [this.utils.matcherHint(n, 'element', ''), i1(this.utils.diff, a, c)].join(`

`);
    },
  };
}
function pu(e) {
  return (
    _e(e, pu, this),
    {
      pass: e.ownerDocument.activeElement === e,
      message: () =>
        [
          this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveFocus`, 'element', ''),
          '',
          ...(this.isNot
            ? ['Received element is focused:', `  ${this.utils.printReceived(e)}`]
            : [
                'Expected element with focus:',
                `  ${this.utils.printExpected(e)}`,
                'Received element with focus:',
                `  ${this.utils.printReceived(e.ownerDocument.activeElement)}`,
              ]),
        ].join(`
`),
    }
  );
}
function l1(e) {
  let t = (0, z0.default)(e.map((r) => r.type));
  if (t.length !== 1)
    throw new Error('Multiple form elements with the same name must be of the same type');
  switch (t[0]) {
    case 'radio': {
      let r = e.find((o) => o.checked);
      return r ? r.value : void 0;
    }
    case 'checkbox':
      return e.filter((r) => r.checked).map((r) => r.value);
    default:
      return e.map((r) => r.value);
  }
}
function s1(e, t) {
  let r = [...e.querySelectorAll(`[name="${(0, V0.default)(t)}"]`)];
  if (r.length !== 0)
    switch (r.length) {
      case 1:
        return ru(r[0]);
      default:
        return l1(r);
    }
}
function u1(e) {
  return /\[\]$/.test(e) ? e.slice(0, -2) : e;
}
function c1(e) {
  return Array.from(e.elements)
    .map((t) => t.name)
    .reduce((t, r) => ({ ...t, [u1(r)]: s1(e, r) }), {});
}
function fu(e, t) {
  if ((_e(e, fu, this), !e.elements))
    throw new Error('toHaveFormValues must be called on a form or a fieldset');
  let r = c1(e);
  return {
    pass: Object.entries(t).every(([o, a]) => (0, Qs.default)(r[o], a, nu)),
    message: () => {
      let o = this.isNot ? 'not to' : 'to',
        a = `${this.isNot ? '.not' : ''}.toHaveFormValues`,
        c = Object.keys(r)
          .filter((n) => t.hasOwnProperty(n))
          .reduce((n, i) => ({ ...n, [i]: r[i] }), {});
      return [
        this.utils.matcherHint(a, 'element', ''),
        `Expected the element ${o} have form values`,
        this.utils.diff(t, c),
      ].join(`

`);
    },
  };
}
function d1(e) {
  let { getComputedStyle: t } = e.ownerDocument.defaultView,
    { display: r, visibility: o, opacity: a } = t(e);
  return r !== 'none' && o !== 'hidden' && o !== 'collapse' && a !== '0' && a !== 0;
}
function p1(e, t) {
  let r;
  return (
    t
      ? (r = e.nodeName === 'DETAILS' && t.nodeName !== 'SUMMARY' ? e.hasAttribute('open') : !0)
      : (r = e.nodeName === 'DETAILS' ? e.hasAttribute('open') : !0),
    !e.hasAttribute('hidden') && r
  );
}
function mu(e, t) {
  return d1(e) && p1(e, t) && (!e.parentElement || mu(e.parentElement, e));
}
function yu(e) {
  _e(e, yu, this);
  let t = e.ownerDocument === e.getRootNode({ composed: !0 }),
    r = t && mu(e);
  return {
    pass: r,
    message: () => {
      let o = r ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeVisible`, 'element', ''),
        '',
        `Received element ${o} visible${t ? '' : ' (element is not in the document)'}:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var f1 = ['fieldset', 'input', 'select', 'optgroup', 'option', 'button', 'textarea'];
function m1(e, t) {
  return (
    At(e) === 'legend' &&
    At(t) === 'fieldset' &&
    e.isSameNode(Array.from(t.children).find((r) => At(r) === 'legend'))
  );
}
function y1(e, t) {
  return bu(t) && !m1(e, t);
}
function h1(e) {
  return e.includes('-');
}
function hu(e) {
  let t = At(e);
  return f1.includes(t) || h1(t);
}
function bu(e) {
  return hu(e) && e.hasAttribute('disabled');
}
function gu(e) {
  let t = e.parentElement;
  return !!t && (y1(e, t) || gu(t));
}
function vu(e) {
  return hu(e) && (bu(e) || gu(e));
}
function _u(e) {
  _e(e, _u, this);
  let t = vu(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeDisabled`, 'element', ''),
        '',
        `Received element ${r} disabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Eu(e) {
  _e(e, Eu, this);
  let t = !vu(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeEnabled`, 'element', ''),
        '',
        `Received element ${r} enabled:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var b1 = ['select', 'textarea'],
  g1 = ['input', 'select', 'textarea'],
  v1 = ['color', 'hidden', 'range', 'submit', 'image', 'reset'],
  _1 = ['combobox', 'gridcell', 'radiogroup', 'spinbutton', 'tree'];
function E1(e) {
  return b1.includes(At(e)) && e.hasAttribute('required');
}
function w1(e) {
  return (
    At(e) === 'input' &&
    e.hasAttribute('required') &&
    ((e.hasAttribute('type') && !v1.includes(e.getAttribute('type'))) || !e.hasAttribute('type'))
  );
}
function S1(e) {
  return (
    e.hasAttribute('aria-required') &&
    e.getAttribute('aria-required') === 'true' &&
    (g1.includes(At(e)) || (e.hasAttribute('role') && _1.includes(e.getAttribute('role'))))
  );
}
function wu(e) {
  _e(e, wu, this);
  let t = E1(e) || w1(e) || S1(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeRequired`, 'element', ''),
        '',
        `Received element ${r} required:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
var C1 = ['form', 'input', 'select', 'textarea'];
function O1(e) {
  return e.hasAttribute('aria-invalid') && e.getAttribute('aria-invalid') !== 'false';
}
function P1(e) {
  return C1.includes(At(e));
}
function Su(e) {
  let t = O1(e);
  return P1(e) ? t || !e.checkValidity() : t;
}
function Cu(e) {
  _e(e, Cu, this);
  let t = Su(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeInvalid`, 'element', ''),
        '',
        `Received element ${r} currently invalid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Ou(e) {
  _e(e, Ou, this);
  let t = !Su(e);
  return {
    pass: t,
    message: () => {
      let r = t ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeValid`, 'element', ''),
        '',
        `Received element ${r} currently valid:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function Pu(e, t) {
  if (
    (_e(e, Pu, this), e.tagName.toLowerCase() === 'input' && ['checkbox', 'radio'].includes(e.type))
  )
    throw new Error(
      'input with type=checkbox or type=radio cannot be used with .toHaveValue(). Use .toBeChecked() for type=checkbox or .toHaveFormValues() instead',
    );
  let r = ru(e),
    o = t !== void 0,
    a = t,
    c = r;
  return (
    t == r && t !== r && ((a = `${t} (${typeof t})`), (c = `${r} (${typeof r})`)),
    {
      pass: o ? (0, Qs.default)(r, t, nu) : !!r,
      message: () => {
        let n = this.isNot ? 'not to' : 'to',
          i = this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveValue`, 'element', t);
        return Le(this, i, `Expected the element ${n} have value`, o ? a : '(any)', 'Received', c);
      },
    }
  );
}
function Ru(e, t) {
  _e(e, Ru, this);
  let r = e.tagName.toLowerCase();
  if (!['select', 'input', 'textarea'].includes(r))
    throw new Error(
      '.toHaveDisplayValue() currently supports only input, textarea or select elements, try with another matcher instead.',
    );
  if (r === 'input' && ['radio', 'checkbox'].includes(e.type))
    throw new Error(
      `.toHaveDisplayValue() currently does not support input[type="${e.type}"], try with another matcher instead.`,
    );
  let o = R1(r, e),
    a = T1(t),
    c = a.filter((l) =>
      o.some((s) => (l instanceof RegExp ? l.test(s) : this.equals(s, String(l)))),
    ).length,
    n = c === o.length,
    i = c === a.length;
  return {
    pass: n && i,
    message: () =>
      Le(
        this,
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveDisplayValue`, 'element', ''),
        `Expected element ${this.isNot ? 'not ' : ''}to have display value`,
        t,
        'Received',
        o,
      ),
  };
}
function R1(e, t) {
  return e === 'select'
    ? Array.from(t)
        .filter((r) => r.selected)
        .map((r) => r.textContent)
    : [t.value];
}
function T1(e) {
  return e instanceof Array ? e : [e];
}
function Tu(e) {
  _e(e, Tu, this);
  let t = () => e.tagName.toLowerCase() === 'input' && ['checkbox', 'radio'].includes(e.type),
    r = () =>
      Au(e.getAttribute('role')) && ['true', 'false'].includes(e.getAttribute('aria-checked'));
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        `only inputs with type="checkbox" or type="radio" or elements with ${A1()} and a valid aria-checked attribute can be used with .toBeChecked(). Use .toHaveValue() instead`,
    };
  let o = () => (t() ? e.checked : e.getAttribute('aria-checked') === 'true');
  return {
    pass: o(),
    message: () => {
      let a = o() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBeChecked`, 'element', ''),
        '',
        `Received element ${a} checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function A1() {
  return Q0(
    q1().map((e) => `role="${e}"`),
    { lastWordConnector: ' or ' },
  );
}
function q1() {
  return Zs.roles.keys().filter(Au);
}
function Au(e) {
  var t;
  return ((t = Zs.roles.get(e)) == null ? void 0 : t.props['aria-checked']) !== void 0;
}
function qu(e) {
  _e(e, qu, this);
  let t = () => e.tagName.toLowerCase() === 'input' && e.type === 'checkbox',
    r = () => e.getAttribute('role') === 'checkbox';
  if (!t() && !r())
    return {
      pass: !1,
      message: () =>
        'only inputs with type="checkbox" or elements with role="checkbox" and a valid aria-checked attribute can be used with .toBePartiallyChecked(). Use .toHaveValue() instead',
    };
  let o = () => {
    let a = e.getAttribute('aria-checked') === 'mixed';
    return (t() && e.indeterminate) || a;
  };
  return {
    pass: o(),
    message: () => {
      let a = o() ? 'is' : 'is not';
      return [
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toBePartiallyChecked`, 'element', ''),
        '',
        `Received element ${a} partially checked:`,
        `  ${this.utils.printReceived(e.cloneNode(!1))}`,
      ].join(`
`);
    },
  };
}
function xu(e, t) {
  xn('toHaveDescription', 'Please use toHaveAccessibleDescription.'), _e(e, xu, this);
  let r = t !== void 0,
    o = (e.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean),
    a = '';
  if (o.length > 0) {
    let c = e.ownerDocument,
      n = o.map((i) => c.getElementById(i)).filter(Boolean);
    a = Mn(n.map((i) => i.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return Le(
        this,
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveDescription`, 'element', ''),
        `Expected the element ${c} have description`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a),
      );
    },
  };
}
function Mu(e, t) {
  if (
    (xn('toHaveErrorMessage', 'Please use toHaveAccessibleErrorMessage.'),
    _e(e, Mu, this),
    !e.hasAttribute('aria-invalid') || e.getAttribute('aria-invalid') === 'false')
  ) {
    let c = this.isNot ? '.not' : '';
    return {
      pass: !1,
      message: () =>
        Le(
          this,
          this.utils.matcherHint(`${c}.toHaveErrorMessage`, 'element', ''),
          'Expected the element to have invalid state indicated by',
          'aria-invalid="true"',
          'Received',
          e.hasAttribute('aria-invalid')
            ? `aria-invalid="${e.getAttribute('aria-invalid')}"`
            : this.utils.printReceived(''),
        ),
    };
  }
  let r = t !== void 0,
    o = (e.getAttribute('aria-errormessage') || '').split(/\s+/).filter(Boolean),
    a = '';
  if (o.length > 0) {
    let c = e.ownerDocument,
      n = o.map((i) => c.getElementById(i)).filter(Boolean);
    a = Mn(n.map((i) => i.textContent).join(' '));
  }
  return {
    pass: r ? (t instanceof RegExp ? t.test(a) : this.equals(a, t)) : !!a,
    message: () => {
      let c = this.isNot ? 'not to' : 'to';
      return Le(
        this,
        this.utils.matcherHint(`${this.isNot ? '.not' : ''}.toHaveErrorMessage`, 'element', ''),
        `Expected the element ${c} have error message`,
        this.utils.printExpected(t),
        'Received',
        this.utils.printReceived(a),
      );
    },
  };
}
ve(Il(), 1);
ve(Yl(), 1);
ve(Xl(), 1);
ve(Ql(), 1);
ve(Zl(), 1);
ve(es(), 1);
ve(Zo(), 1);
function x1() {
  Hn(Kv), Hn(Vv), Hn(zv);
  let e = (o, a) => {
    let { assertionCalls: c } = Tr(e);
    return Vn({ assertionCalls: c + 1, soft: !1 }, e), Un(o, a);
  };
  Object.assign(e, Un),
    (e.getState = () => Tr(e)),
    (e.setState = (o) => Vn(o, e)),
    (e.extend = (o) => Un.extend(e, o)),
    (e.soft = (...o) => {
      let a = e(...o);
      return e.setState({ soft: !0 }), a;
    }),
    (e.unreachable = (o) => {
      Gg.fail(`expected${o ? ` "${o}" ` : ' '}not to be reached`);
    });
  function t(o) {
    let a = () =>
      new Error(`expected number of assertions to be ${o}, but got ${e.getState().assertionCalls}`);
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(a(), t),
      e.setState({ expectedAssertionsNumber: o, expectedAssertionsNumberErrorGen: a });
  }
  function r() {
    let o = new Error('expected any number of assertion, but got none');
    'captureStackTrace' in Error &&
      typeof Error.captureStackTrace == 'function' &&
      Error.captureStackTrace(o, r),
      e.setState({ isExpectingAssertions: !0, isExpectingAssertionsError: o });
  }
  return (
    Vn(
      {
        assertionCalls: 0,
        isExpectingAssertions: !1,
        isExpectingAssertionsError: null,
        expectedAssertionsNumber: null,
        expectedAssertionsNumberErrorGen: null,
      },
      e,
    ),
    on.addMethod(e, 'assertions', t),
    on.addMethod(e, 'hasAssertions', r),
    e.extend(ks),
    e
  );
}
var ju = x1();
Object.defineProperty(globalThis, An, { value: ju, writable: !0, configurable: !0 });
var sa = new Set();
function M1() {
  sa.forEach((e) => e.mockClear());
}
function j1() {
  sa.forEach((e) => e.mockReset());
}
function I1() {
  sa.forEach((e) => e.mockRestore());
}
var Iu = {};
Tl(Iu, {
  buildQueries: () => _t,
  configure: () => r_,
  createEvent: () => Or,
  findAllByAltText: () => Ac,
  findAllByDisplayValue: () => Sc,
  findAllByLabelText: () => rc,
  findAllByPlaceholderText: () => dc,
  findAllByRole: () => Uc,
  findAllByTestId: () => Kc,
  findAllByText: () => bc,
  findAllByTitle: () => Nc,
  findByAltText: () => qc,
  findByDisplayValue: () => Cc,
  findByLabelText: () => nc,
  findByPlaceholderText: () => pc,
  findByRole: () => Hc,
  findByTestId: () => Yc,
  findByText: () => gc,
  findByTitle: () => Bc,
  fireEvent: () => jr,
  getAllByAltText: () => Rc,
  getAllByDisplayValue: () => Ec,
  getAllByLabelText: () => oc,
  getAllByPlaceholderText: () => uc,
  getAllByRole: () => Lc,
  getAllByTestId: () => Wc,
  getAllByText: () => yc,
  getAllByTitle: () => jc,
  getByAltText: () => Tc,
  getByDisplayValue: () => wc,
  getByLabelText: () => ac,
  getByPlaceholderText: () => cc,
  getByRole: () => Fc,
  getByTestId: () => Gc,
  getByText: () => hc,
  getByTitle: () => Ic,
  getConfig: () => ge,
  getDefaultNormalizer: () => fa,
  getElementError: () => In,
  getMultipleElementsFoundError: () => Nn,
  getNodeText: () => Fr,
  getQueriesForElement: () => Ro,
  getRoles: () => Yu,
  getSuggestedQuery: () => sn,
  isInaccessible: () => jn,
  logDOM: () => go,
  logRoles: () => l_,
  makeFindQuery: () => ir,
  makeGetAllQuery: () => ha,
  makeSingleQuery: () => ar,
  prettyDOM: () => xr,
  prettyFormat: () => ua,
  queries: () => un,
  queryAllByAltText: () => Oc,
  queryAllByAttribute: () => Wt,
  queryAllByDisplayValue: () => vc,
  queryAllByLabelText: () => ic,
  queryAllByPlaceholderText: () => lc,
  queryAllByRole: () => Dc,
  queryAllByTestId: () => zc,
  queryAllByText: () => fc,
  queryAllByTitle: () => xc,
  queryByAltText: () => Pc,
  queryByAttribute: () => Xu,
  queryByDisplayValue: () => _c,
  queryByLabelText: () => ec,
  queryByPlaceholderText: () => sc,
  queryByRole: () => kc,
  queryByTestId: () => Vc,
  queryByText: () => mc,
  queryByTitle: () => Mc,
  queryHelpers: () => E_,
  screen: () => Y_,
  waitFor: () => ya,
  waitForElementToBeRemoved: () => U_,
  within: () => Ro,
  wrapAllByQueryWithSuggestion: () => Ve,
  wrapSingleQueryWithSuggestion: () => qt,
});
var ua = ve(zg()),
  Qe = ve(Zo()),
  N1 = ve(Vg());
function Nu(e) {
  return e.replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
var B1 = (e, t, r, o, a, c, n) => {
    let i = o + r.indent,
      l = r.colors;
    return e
      .map((s) => {
        let u = t[s],
          p = n(u, r, i, a, c);
        return (
          typeof u != 'string' &&
            (p.indexOf(`
`) !== -1 && (p = r.spacingOuter + i + p + r.spacingOuter + o),
            (p = '{' + p + '}')),
          r.spacingInner +
            o +
            l.prop.open +
            s +
            l.prop.close +
            '=' +
            l.value.open +
            p +
            l.value.close
        );
      })
      .join('');
  },
  $1 = 3,
  D1 = (e, t, r, o, a, c) =>
    e
      .map((n) => {
        let i = typeof n == 'string' ? Bu(n, t) : c(n, t, r, o, a);
        return i === '' && typeof n == 'object' && n !== null && n.nodeType !== $1
          ? ''
          : t.spacingOuter + r + i;
      })
      .join(''),
  Bu = (e, t) => {
    let r = t.colors.content;
    return r.open + Nu(e) + r.close;
  },
  k1 = (e, t) => {
    let r = t.colors.comment;
    return r.open + '<!--' + Nu(e) + '-->' + r.close;
  },
  L1 = (e, t, r, o, a) => {
    let c = o.colors.tag;
    return (
      c.open +
      '<' +
      e +
      (t && c.close + t + o.spacingOuter + a + c.open) +
      (r
        ? '>' + c.close + r + o.spacingOuter + a + c.open + '</' + e
        : (t && !o.min ? '' : ' ') + '/') +
      '>' +
      c.close
    );
  },
  F1 = (e, t) => {
    let r = t.colors.tag;
    return r.open + '<' + e + r.close + ' …' + r.open + ' />' + r.close;
  },
  U1 = 1,
  $u = 3,
  Du = 8,
  ku = 11,
  H1 = /^((HTML|SVG)\w*)?Element$/,
  z1 = (e) => {
    let t = e.constructor.name,
      { nodeType: r, tagName: o } = e,
      a =
        (typeof o == 'string' && o.includes('-')) ||
        (typeof e.hasAttribute == 'function' && e.hasAttribute('is'));
    return (
      (r === U1 && (H1.test(t) || a)) ||
      (r === $u && t === 'Text') ||
      (r === Du && t === 'Comment') ||
      (r === ku && t === 'DocumentFragment')
    );
  };
function V1(e) {
  return e.nodeType === $u;
}
function W1(e) {
  return e.nodeType === Du;
}
function Gn(e) {
  return e.nodeType === ku;
}
function G1(e) {
  return {
    test: (t) => {
      var r;
      return (t == null || (r = t.constructor) == null ? void 0 : r.name) && z1(t);
    },
    serialize: (t, r, o, a, c, n) => {
      if (V1(t)) return Bu(t.data, r);
      if (W1(t)) return k1(t.data, r);
      let i = Gn(t) ? 'DocumentFragment' : t.tagName.toLowerCase();
      return ++a > r.maxDepth
        ? F1(i, r)
        : L1(
            i,
            B1(
              Gn(t)
                ? []
                : Array.from(t.attributes)
                    .map((l) => l.name)
                    .sort(),
              Gn(t)
                ? {}
                : Array.from(t.attributes).reduce((l, s) => ((l[s.name] = s.value), l), {}),
              r,
              o + r.indent,
              a,
              c,
              n,
            ),
            D1(
              Array.prototype.slice.call(t.childNodes || t.children).filter(e),
              r,
              o + r.indent,
              a,
              c,
              n,
            ),
            r,
            o,
          );
    },
  };
}
var Lu = null,
  ca = null,
  da = null;
try {
  let e = module && module.require;
  (ca = e.call(module, 'fs').readFileSync),
    (da = e.call(module, '@babel/code-frame').codeFrameColumns),
    (Lu = e.call(module, 'chalk'));
} catch {}
function K1(e) {
  let t = e.indexOf('(') + 1,
    r = e.indexOf(')'),
    o = e.slice(t, r),
    a = o.split(':'),
    [c, n, i] = [a[0], parseInt(a[1], 10), parseInt(a[2], 10)],
    l = '';
  try {
    l = ca(c, 'utf-8');
  } catch {
    return '';
  }
  let s = da(l, { start: { line: n, column: i } }, { highlightCode: !0, linesBelow: 0 });
  return (
    Lu.dim(o) +
    `
` +
    s +
    `
`
  );
}
function Y1() {
  if (!ca || !da) return '';
  let e = new Error().stack
    .split(
      `
`,
    )
    .slice(1)
    .find((t) => !t.includes('node_modules/'));
  return K1(e);
}
var Fu = 3;
function Kn() {
  return typeof jest < 'u' && jest !== null
    ? setTimeout._isMockFunction === !0 || Object.prototype.hasOwnProperty.call(setTimeout, 'clock')
    : !1;
}
function pa() {
  if (typeof window > 'u') throw new Error('Could not find default container');
  return window.document;
}
function Uu(e) {
  if (e.defaultView) return e.defaultView;
  if (e.ownerDocument && e.ownerDocument.defaultView) return e.ownerDocument.defaultView;
  if (e.window) return e.window;
  throw e.ownerDocument && e.ownerDocument.defaultView === null
    ? new Error('It looks like the window object is not available for the provided node.')
    : e.then instanceof Function
      ? new Error(
          'It looks like you passed a Promise object instead of a DOM node. Did you do something like `fireEvent.click(screen.findBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`, or await the findBy query `fireEvent.click(await screen.findBy...`?',
        )
      : Array.isArray(e)
        ? new Error(
            'It looks like you passed an Array instead of a DOM node. Did you do something like `fireEvent.click(screen.getAllBy...` when you meant to use a `getBy` query `fireEvent.click(screen.getBy...`?',
          )
        : typeof e.debug == 'function' && typeof e.logTestingPlaygroundURL == 'function'
          ? new Error(
              'It looks like you passed a `screen` object. Did you do something like `fireEvent.click(screen, ...` when you meant to use a query, e.g. `fireEvent.click(screen.getBy..., `?',
            )
          : new Error('The given node is not an Element, the node type is: ' + typeof e + '.');
}
function vt(e) {
  if (!e || typeof e.querySelector != 'function' || typeof e.querySelectorAll != 'function')
    throw new TypeError(
      'Expected container to be an Element, a Document or a DocumentFragment but got ' + t(e) + '.',
    );
  function t(r) {
    return typeof r == 'object' ? (r === null ? 'null' : r.constructor.name) : typeof r;
  }
}
var J1 = () => {
    let e;
    try {
      var t;
      e = JSON.parse((t = process) == null || (t = t.env) == null ? void 0 : t.COLORS);
    } catch {}
    return typeof e == 'boolean'
      ? e
      : typeof process < 'u' && process.versions !== void 0 && process.versions.node !== void 0;
  },
  { DOMCollection: X1 } = ua.plugins,
  Q1 = 1,
  Z1 = 8;
function e_(e) {
  return e.nodeType !== Z1 && (e.nodeType !== Q1 || !e.matches(ge().defaultIgnore));
}
function xr(e, t, r) {
  if (
    (r === void 0 && (r = {}),
    e || (e = pa().body),
    typeof t != 'number' && (t = (typeof process < 'u' && {}.DEBUG_PRINT_LIMIT) || 7e3),
    t === 0)
  )
    return '';
  e.documentElement && (e = e.documentElement);
  let o = typeof e;
  if ((o === 'object' ? (o = e.constructor.name) : (e = {}), !('outerHTML' in e)))
    throw new TypeError('Expected an element or document but got ' + o);
  let { filterNode: a = e_, ...c } = r,
    n = ua.format(e, { plugins: [G1(a), X1], printFunctionName: !1, highlight: J1(), ...c });
  return t !== void 0 && e.outerHTML.length > t ? n.slice(0, t) + '...' : n;
}
var go = function () {
    let e = Y1();
    console.log(
      e
        ? xr(...arguments) +
            `

` +
            e
        : xr(...arguments),
    );
  },
  It = {
    testIdAttribute: 'data-testid',
    asyncUtilTimeout: 1e3,
    asyncWrapper: (e) => e(),
    unstable_advanceTimersWrapper: (e) => e(),
    eventWrapper: (e) => e(),
    defaultHidden: !1,
    defaultIgnore: 'script, style',
    showOriginalStackTrace: !1,
    throwSuggestions: !1,
    getElementError(e, t) {
      let r = xr(t),
        o = new Error(
          [
            e,
            'Ignored nodes: comments, ' +
              It.defaultIgnore +
              `
` +
              r,
          ].filter(Boolean).join(`

`),
        );
      return (o.name = 'TestingLibraryElementError'), o;
    },
    _disableExpensiveErrorDiagnostics: !1,
    computedStyleSupportsPseudoElements: !1,
  };
function t_(e) {
  try {
    return (It._disableExpensiveErrorDiagnostics = !0), e();
  } finally {
    It._disableExpensiveErrorDiagnostics = !1;
  }
}
function r_(e) {
  typeof e == 'function' && (e = e(It)), (It = { ...It, ...e });
}
function ge() {
  return It;
}
var n_ = ['button', 'meter', 'output', 'progress', 'select', 'textarea', 'input'];
function Hu(e) {
  return n_.includes(e.nodeName.toLowerCase())
    ? ''
    : e.nodeType === Fu
      ? e.textContent
      : Array.from(e.childNodes)
          .map((t) => Hu(t))
          .join('');
}
function vo(e) {
  let t;
  return e.tagName.toLowerCase() === 'label' ? (t = Hu(e)) : (t = e.value || e.textContent), t;
}
function zu(e) {
  if (e.labels !== void 0) {
    var t;
    return (t = e.labels) != null ? t : [];
  }
  if (!o_(e)) return [];
  let r = e.ownerDocument.querySelectorAll('label');
  return Array.from(r).filter((o) => o.control === e);
}
function o_(e) {
  return (
    /BUTTON|METER|OUTPUT|PROGRESS|SELECT|TEXTAREA/.test(e.tagName) ||
    (e.tagName === 'INPUT' && e.getAttribute('type') !== 'hidden')
  );
}
function Vu(e, t, r) {
  let { selector: o = '*' } = r === void 0 ? {} : r,
    a = t.getAttribute('aria-labelledby'),
    c = a ? a.split(' ') : [];
  return c.length
    ? c.map((n) => {
        let i = e.querySelector('[id="' + n + '"]');
        return i ? { content: vo(i), formControl: null } : { content: '', formControl: null };
      })
    : Array.from(zu(t)).map((n) => {
        let i = vo(n),
          l = 'button, input, meter, output, progress, select, textarea',
          s = Array.from(n.querySelectorAll(l)).filter((u) => u.matches(o))[0];
        return { content: i, formControl: s };
      });
}
function Wu(e) {
  if (e == null)
    throw new Error(
      'It looks like ' +
        e +
        ' was passed instead of a matcher. Did you do something like getByText(' +
        e +
        ')?',
    );
}
function mr(e, t, r, o) {
  if (typeof e != 'string') return !1;
  Wu(r);
  let a = o(e);
  return typeof r == 'string' || typeof r == 'number'
    ? a.toLowerCase().includes(r.toString().toLowerCase())
    : typeof r == 'function'
      ? r(a, t)
      : Gu(r, a);
}
function ht(e, t, r, o) {
  if (typeof e != 'string') return !1;
  Wu(r);
  let a = o(e);
  return r instanceof Function ? r(a, t) : r instanceof RegExp ? Gu(r, a) : a === String(r);
}
function fa(e) {
  let { trim: t = !0, collapseWhitespace: r = !0 } = e === void 0 ? {} : e;
  return (o) => {
    let a = o;
    return (a = t ? a.trim() : a), (a = r ? a.replace(/\s+/g, ' ') : a), a;
  };
}
function Vt(e) {
  let { trim: t, collapseWhitespace: r, normalizer: o } = e;
  if (!o) return fa({ trim: t, collapseWhitespace: r });
  if (typeof t < 'u' || typeof r < 'u')
    throw new Error(
      'trim and collapseWhitespace are not supported with a normalizer. If you want to use the default trim and collapseWhitespace logic in your normalizer, use "getDefaultNormalizer({trim, collapseWhitespace})" and compose that into your normalizer',
    );
  return o;
}
function Gu(e, t) {
  let r = e.test(t);
  return (
    e.global &&
      e.lastIndex !== 0 &&
      (console.warn(
        'To match all elements we had to reset the lastIndex of the RegExp because the global flag is enabled. We encourage to remove the global flag from the RegExp.',
      ),
      (e.lastIndex = 0)),
    r
  );
}
function Fr(e) {
  return e.matches('input[type=submit], input[type=button], input[type=reset]')
    ? e.value
    : Array.from(e.childNodes)
        .filter((t) => t.nodeType === Fu && !!t.textContent)
        .map((t) => t.textContent)
        .join('');
}
var a_ = i_(Qe.elementRoles);
function Ku(e) {
  return (
    e.hidden === !0 ||
    e.getAttribute('aria-hidden') === 'true' ||
    e.ownerDocument.defaultView.getComputedStyle(e).display === 'none'
  );
}
function jn(e, t) {
  t === void 0 && (t = {});
  let { isSubtreeInaccessible: r = Ku } = t;
  if (e.ownerDocument.defaultView.getComputedStyle(e).visibility === 'hidden') return !0;
  let o = e;
  for (; o; ) {
    if (r(o)) return !0;
    o = o.parentElement;
  }
  return !1;
}
function ma(e) {
  for (let { match: t, roles: r } of a_) if (t(e)) return [...r];
  return [];
}
function i_(e) {
  function t(n) {
    let { name: i, attributes: l } = n;
    return (
      '' +
      i +
      l
        .map((s) => {
          let { name: u, value: p, constraints: d = [] } = s;
          return d.indexOf('undefined') !== -1
            ? ':not([' + u + '])'
            : p
              ? '[' + u + '="' + p + '"]'
              : '[' + u + ']';
        })
        .join('')
    );
  }
  function r(n) {
    let { attributes: i = [] } = n;
    return i.length;
  }
  function o(n, i) {
    let { specificity: l } = n,
      { specificity: s } = i;
    return s - l;
  }
  function a(n) {
    let { attributes: i = [] } = n,
      l = i.findIndex((u) => u.value && u.name === 'type' && u.value === 'text');
    l >= 0 && (i = [...i.slice(0, l), ...i.slice(l + 1)]);
    let s = t({ ...n, attributes: i });
    return (u) => (l >= 0 && u.type !== 'text' ? !1 : u.matches(s));
  }
  let c = [];
  for (let [n, i] of e.entries())
    c = [...c, { match: a(n), roles: Array.from(i), specificity: r(n) }];
  return c.sort(o);
}
function Yu(e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  function o(a) {
    return [a, ...Array.from(a.children).reduce((c, n) => [...c, ...o(n)], [])];
  }
  return o(e)
    .filter((a) => (r === !1 ? jn(a) === !1 : !0))
    .reduce((a, c) => {
      let n = [];
      return (
        c.hasAttribute('role') ? (n = c.getAttribute('role').split(' ').slice(0, 1)) : (n = ma(c)),
        n.reduce(
          (i, l) => (Array.isArray(i[l]) ? { ...i, [l]: [...i[l], c] } : { ...i, [l]: [c] }),
          a,
        )
      );
    }, {});
}
function Ju(e, t) {
  let { hidden: r, includeDescription: o } = t,
    a = Yu(e, { hidden: r });
  return Object.entries(a)
    .filter((c) => {
      let [n] = c;
      return n !== 'generic';
    })
    .map((c) => {
      let [n, i] = c,
        l = '-'.repeat(50),
        s = i.map((u) => {
          let p =
              'Name "' +
              qn(u, {
                computedStyleSupportsPseudoElements: ge().computedStyleSupportsPseudoElements,
              }) +
              `":
`,
            d = xr(u.cloneNode(!1));
          if (o) {
            let f =
              'Description "' +
              la(u, {
                computedStyleSupportsPseudoElements: ge().computedStyleSupportsPseudoElements,
              }) +
              `":
`;
            return '' + p + f + d;
          }
          return '' + p + d;
        }).join(`

`);
      return (
        n +
        `:

` +
        s +
        `

` +
        l
      );
    }).join(`
`);
}
var l_ = function (e, t) {
  let { hidden: r = !1 } = t === void 0 ? {} : t;
  return console.log(Ju(e, { hidden: r }));
};
function s_(e) {
  return e.tagName === 'OPTION' ? e.selected : Ur(e, 'aria-selected');
}
function u_(e) {
  return e.getAttribute('aria-busy') === 'true';
}
function c_(e) {
  if (!('indeterminate' in e && e.indeterminate))
    return 'checked' in e ? e.checked : Ur(e, 'aria-checked');
}
function d_(e) {
  return Ur(e, 'aria-pressed');
}
function p_(e) {
  var t, r;
  return (t = (r = Ur(e, 'aria-current')) != null ? r : e.getAttribute('aria-current')) != null
    ? t
    : !1;
}
function f_(e) {
  return Ur(e, 'aria-expanded');
}
function Ur(e, t) {
  let r = e.getAttribute(t);
  if (r === 'true') return !0;
  if (r === 'false') return !1;
}
function m_(e) {
  let t = { H1: 1, H2: 2, H3: 3, H4: 4, H5: 5, H6: 6 };
  return (e.getAttribute('aria-level') && Number(e.getAttribute('aria-level'))) || t[e.tagName];
}
function y_(e) {
  let t = e.getAttribute('aria-valuenow');
  return t === null ? void 0 : +t;
}
function h_(e) {
  let t = e.getAttribute('aria-valuemax');
  return t === null ? void 0 : +t;
}
function b_(e) {
  let t = e.getAttribute('aria-valuemin');
  return t === null ? void 0 : +t;
}
function g_(e) {
  let t = e.getAttribute('aria-valuetext');
  return t === null ? void 0 : t;
}
var Ii = fa();
function v_(e) {
  return e.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&');
}
function Ni(e) {
  return new RegExp(v_(e.toLowerCase()), 'i');
}
function Pt(e, t, r, o) {
  let { variant: a, name: c } = o,
    n = '',
    i = {},
    l = [['Role', 'TestId'].includes(e) ? r : Ni(r)];
  c && (i.name = Ni(c)),
    e === 'Role' &&
      jn(t) &&
      ((i.hidden = !0),
      (n = `Element is inaccessible. This means that the element and all its children are invisible to screen readers.
    If you are using the aria-hidden prop, make sure this is the right choice for your case.
    `)),
    Object.keys(i).length > 0 && l.push(i);
  let s = a + 'By' + e;
  return {
    queryName: e,
    queryMethod: s,
    queryArgs: l,
    variant: a,
    warning: n,
    toString() {
      n && console.warn(n);
      let [u, p] = l;
      return (
        (u = typeof u == 'string' ? "'" + u + "'" : u),
        (p = p
          ? ', { ' +
            Object.entries(p)
              .map((d) => {
                let [f, m] = d;
                return f + ': ' + m;
              })
              .join(', ') +
            ' }'
          : ''),
        s + '(' + u + p + ')'
      );
    },
  };
}
function Rt(e, t, r) {
  return r && (!t || t.toLowerCase() === e.toLowerCase());
}
function sn(e, t, r) {
  var o, a;
  if ((t === void 0 && (t = 'get'), e.matches(ge().defaultIgnore))) return;
  let c = (o = e.getAttribute('role')) != null ? o : (a = ma(e)) == null ? void 0 : a[0];
  if (c !== 'generic' && Rt('Role', r, c))
    return Pt('Role', e, c, {
      variant: t,
      name: qn(e, {
        computedStyleSupportsPseudoElements: ge().computedStyleSupportsPseudoElements,
      }),
    });
  let n = Vu(document, e)
    .map((d) => d.content)
    .join(' ');
  if (Rt('LabelText', r, n)) return Pt('LabelText', e, n, { variant: t });
  let i = e.getAttribute('placeholder');
  if (Rt('PlaceholderText', r, i)) return Pt('PlaceholderText', e, i, { variant: t });
  let l = Ii(Fr(e));
  if (Rt('Text', r, l)) return Pt('Text', e, l, { variant: t });
  if (Rt('DisplayValue', r, e.value)) return Pt('DisplayValue', e, Ii(e.value), { variant: t });
  let s = e.getAttribute('alt');
  if (Rt('AltText', r, s)) return Pt('AltText', e, s, { variant: t });
  let u = e.getAttribute('title');
  if (Rt('Title', r, u)) return Pt('Title', e, u, { variant: t });
  let p = e.getAttribute(ge().testIdAttribute);
  if (Rt('TestId', r, p)) return Pt('TestId', e, p, { variant: t });
}
function Wr(e, t) {
  e.stack = t.stack.replace(t.message, e.message);
}
function __(e, t) {
  let {
    container: r = pa(),
    timeout: o = ge().asyncUtilTimeout,
    showOriginalStackTrace: a = ge().showOriginalStackTrace,
    stackTraceError: c,
    interval: n = 50,
    onTimeout: i = (s) => (
      Object.defineProperty(s, 'message', { value: ge().getElementError(s.message, r).message }), s
    ),
    mutationObserverOptions: l = { subtree: !0, childList: !0, attributes: !0, characterData: !0 },
  } = t;
  if (typeof e != 'function') throw new TypeError('Received `callback` arg must be a function');
  return new Promise(async (s, u) => {
    let p,
      d,
      f,
      m = !1,
      y = 'idle',
      g = setTimeout(C, o),
      h = Kn();
    if (h) {
      let { unstable_advanceTimersWrapper: A } = ge();
      for (E(); !m; ) {
        if (!Kn()) {
          let R = new Error(
            "Changed from using fake timers to real timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to real timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
          );
          a || Wr(R, c), u(R);
          return;
        }
        if (
          (await A(async () => {
            jest.advanceTimersByTime(n);
          }),
          E(),
          m)
        )
          break;
      }
    } else {
      try {
        vt(r);
      } catch (R) {
        u(R);
        return;
      }
      d = setInterval(S, n);
      let { MutationObserver: A } = Uu(r);
      (f = new A(S)), f.observe(r, l), E();
    }
    function v(A, R) {
      (m = !0), clearTimeout(g), h || (clearInterval(d), f.disconnect()), A ? u(A) : s(R);
    }
    function S() {
      if (Kn()) {
        let A = new Error(
          "Changed from using real timers to fake timers while using waitFor. This is not allowed and will result in very strange behavior. Please ensure you're awaiting all async things your test is doing before changing to fake timers. For more info, please go to https://github.com/testing-library/dom-testing-library/issues/830",
        );
        return a || Wr(A, c), u(A);
      } else return E();
    }
    function E() {
      if (y !== 'pending')
        try {
          let A = t_(e);
          typeof (A == null ? void 0 : A.then) == 'function'
            ? ((y = 'pending'),
              A.then(
                (R) => {
                  (y = 'resolved'), v(null, R);
                },
                (R) => {
                  (y = 'rejected'), (p = R);
                },
              ))
            : v(null, A);
        } catch (A) {
          p = A;
        }
    }
    function C() {
      let A;
      p
        ? ((A = p), !a && A.name === 'TestingLibraryElementError' && Wr(A, c))
        : ((A = new Error('Timed out in waitFor.')), a || Wr(A, c)),
        v(i(A), null);
    }
  });
}
function ya(e, t) {
  let r = new Error('STACK_TRACE_MESSAGE');
  return ge().asyncWrapper(() => __(e, { stackTraceError: r, ...t }));
}
function In(e, t) {
  return ge().getElementError(e, t);
}
function Nn(e, t) {
  return In(
    e +
      '\n\n(If this is intentional, then use the `*AllBy*` variant of the query (like `queryAllByText`, `getAllByText`, or `findAllByText`)).',
    t,
  );
}
function Wt(e, t, r, o) {
  let { exact: a = !0, collapseWhitespace: c, trim: n, normalizer: i } = o === void 0 ? {} : o,
    l = a ? ht : mr,
    s = Vt({ collapseWhitespace: c, trim: n, normalizer: i });
  return Array.from(t.querySelectorAll('[' + e + ']')).filter((u) => l(u.getAttribute(e), u, r, s));
}
function Xu(e, t, r, o) {
  let a = Wt(e, t, r, o);
  if (a.length > 1) throw Nn('Found multiple elements by [' + e + '=' + r + ']', t);
  return a[0] || null;
}
function ar(e, t) {
  return function (r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      a[c - 1] = arguments[c];
    let n = e(r, ...a);
    if (n.length > 1) {
      let i = n.map((l) => In(null, l).message).join(`

`);
      throw Nn(
        t(r, ...a) +
          `

Here are the matching elements:

` +
          i,
        r,
      );
    }
    return n[0] || null;
  };
}
function Qu(e, t) {
  return ge().getElementError(
    `A better query is available, try this:
` +
      e.toString() +
      `
`,
    t,
  );
}
function ha(e, t) {
  return function (r) {
    for (var o = arguments.length, a = new Array(o > 1 ? o - 1 : 0), c = 1; c < o; c++)
      a[c - 1] = arguments[c];
    let n = e(r, ...a);
    if (!n.length) throw ge().getElementError(t(r, ...a), r);
    return n;
  };
}
function ir(e) {
  return (t, r, o, a) => ya(() => e(t, r, o), { container: t, ...a });
}
var qt = (e, t, r) =>
    function (o) {
      for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
        c[n - 1] = arguments[n];
      let i = e(o, ...c),
        [{ suggest: l = ge().throwSuggestions } = {}] = c.slice(-1);
      if (i && l) {
        let s = sn(i, r);
        if (s && !t.endsWith(s.queryName)) throw Qu(s.toString(), o);
      }
      return i;
    },
  Ve = (e, t, r) =>
    function (o) {
      for (var a = arguments.length, c = new Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++)
        c[n - 1] = arguments[n];
      let i = e(o, ...c),
        [{ suggest: l = ge().throwSuggestions } = {}] = c.slice(-1);
      if (i.length && l) {
        let s = [
          ...new Set(
            i.map((u) => {
              var p;
              return (p = sn(u, r)) == null ? void 0 : p.toString();
            }),
          ),
        ];
        if (s.length === 1 && !t.endsWith(sn(i[0], r).queryName)) throw Qu(s[0], o);
      }
      return i;
    };
function _t(e, t, r) {
  let o = qt(ar(e, t), e.name, 'query'),
    a = ha(e, r),
    c = ar(a, t),
    n = qt(c, e.name, 'get'),
    i = Ve(a, e.name.replace('query', 'get'), 'getAll'),
    l = ir(Ve(a, e.name, 'findAll')),
    s = ir(qt(c, e.name, 'find'));
  return [o, i, n, l, s];
}
var E_ = Object.freeze({
  __proto__: null,
  getElementError: In,
  wrapAllByQueryWithSuggestion: Ve,
  wrapSingleQueryWithSuggestion: qt,
  getMultipleElementsFoundError: Nn,
  queryAllByAttribute: Wt,
  queryByAttribute: Xu,
  makeSingleQuery: ar,
  makeGetAllQuery: ha,
  makeFindQuery: ir,
  buildQueries: _t,
});
function w_(e) {
  return Array.from(e.querySelectorAll('label,input'))
    .map((t) => ({ node: t, textToMatch: vo(t) }))
    .filter((t) => {
      let { textToMatch: r } = t;
      return r !== null;
    });
}
var S_ = function (e, t, r) {
    let { exact: o = !0, trim: a, collapseWhitespace: c, normalizer: n } = r === void 0 ? {} : r,
      i = o ? ht : mr,
      l = Vt({ collapseWhitespace: c, trim: a, normalizer: n });
    return w_(e)
      .filter((s) => {
        let { node: u, textToMatch: p } = s;
        return i(p, u, t, l);
      })
      .map((s) => {
        let { node: u } = s;
        return u;
      });
  },
  Mr = function (e, t, r) {
    let {
      selector: o = '*',
      exact: a = !0,
      collapseWhitespace: c,
      trim: n,
      normalizer: i,
    } = r === void 0 ? {} : r;
    vt(e);
    let l = a ? ht : mr,
      s = Vt({ collapseWhitespace: c, trim: n, normalizer: i }),
      u = Array.from(e.querySelectorAll('*'))
        .filter((p) => zu(p).length || p.hasAttribute('aria-labelledby'))
        .reduce((p, d) => {
          let f = Vu(e, d, { selector: o });
          f.filter((y) => !!y.formControl).forEach((y) => {
            l(y.content, y.formControl, t, s) && y.formControl && p.push(y.formControl);
          });
          let m = f.filter((y) => !!y.content).map((y) => y.content);
          return (
            l(m.join(' '), d, t, s) && p.push(d),
            m.length > 1 &&
              m.forEach((y, g) => {
                l(y, d, t, s) && p.push(d);
                let h = [...m];
                h.splice(g, 1), h.length > 1 && l(h.join(' '), d, t, s) && p.push(d);
              }),
            p
          );
        }, [])
        .concat(Wt('aria-label', e, t, { exact: a, normalizer: s }));
    return Array.from(new Set(u)).filter((p) => p.matches(o));
  },
  Nt = function (e, t) {
    for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), a = 2; a < r; a++)
      o[a - 2] = arguments[a];
    let c = Mr(e, t, ...o);
    if (!c.length) {
      let n = S_(e, t, ...o);
      if (n.length) {
        let i = n.map((l) => C_(e, l)).filter((l) => !!l);
        throw i.length
          ? ge().getElementError(
              i.map(
                (l) =>
                  'Found a label with the text of: ' +
                  t +
                  ', however the element associated with this label (<' +
                  l +
                  ' />) is non-labellable [https://html.spec.whatwg.org/multipage/forms.html#category-label]. If you really need to label a <' +
                  l +
                  ' />, you can use aria-label or aria-labelledby instead.',
              ).join(`

`),
              e,
            )
          : ge().getElementError(
              'Found a label with the text of: ' +
                t +
                `, however no form control was found associated to that label. Make sure you're using the "for" attribute or "aria-labelledby" attribute correctly.`,
              e,
            );
      } else throw ge().getElementError('Unable to find a label with the text of: ' + t, e);
    }
    return c;
  };
function C_(e, t) {
  let r = t.getAttribute('for');
  if (!r) return null;
  let o = e.querySelector('[id="' + r + '"]');
  return o ? o.tagName.toLowerCase() : null;
}
var Zu = (e, t) => 'Found multiple elements with the text of: ' + t,
  ec = qt(ar(Mr, Zu), Mr.name, 'query'),
  tc = ar(Nt, Zu),
  rc = ir(Ve(Nt, Nt.name, 'findAll')),
  nc = ir(qt(tc, Nt.name, 'find')),
  oc = Ve(Nt, Nt.name, 'getAll'),
  ac = qt(tc, Nt.name, 'get'),
  ic = Ve(Mr, Mr.name, 'queryAll'),
  _o = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return vt(t[0]), Wt('placeholder', ...t);
  },
  O_ = (e, t) => 'Found multiple elements with the placeholder text of: ' + t,
  P_ = (e, t) => 'Unable to find an element with the placeholder text of: ' + t,
  lc = Ve(_o, _o.name, 'queryAll'),
  [sc, uc, cc, dc, pc] = _t(_o, O_, P_),
  Eo = function (e, t, r) {
    let {
      selector: o = '*',
      exact: a = !0,
      collapseWhitespace: c,
      trim: n,
      ignore: i = ge().defaultIgnore,
      normalizer: l,
    } = r === void 0 ? {} : r;
    vt(e);
    let s = a ? ht : mr,
      u = Vt({ collapseWhitespace: c, trim: n, normalizer: l }),
      p = [];
    return (
      typeof e.matches == 'function' && e.matches(o) && (p = [e]),
      [...p, ...Array.from(e.querySelectorAll(o))]
        .filter((d) => !i || !d.matches(i))
        .filter((d) => s(Fr(d), d, t, u))
    );
  },
  R_ = (e, t) => 'Found multiple elements with the text: ' + t,
  T_ = function (e, t, r) {
    r === void 0 && (r = {});
    let { collapseWhitespace: o, trim: a, normalizer: c, selector: n } = r,
      i = Vt({ collapseWhitespace: o, trim: a, normalizer: c })(t.toString()),
      l = i !== t.toString(),
      s = (n ?? '*') !== '*';
    return (
      'Unable to find an element with the text: ' +
      (l ? i + " (normalized from '" + t + "')" : t) +
      (s ? ", which matches selector '" + n + "'" : '') +
      '. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.'
    );
  },
  fc = Ve(Eo, Eo.name, 'queryAll'),
  [mc, yc, hc, bc, gc] = _t(Eo, R_, T_),
  wo = function (e, t, r) {
    let { exact: o = !0, collapseWhitespace: a, trim: c, normalizer: n } = r === void 0 ? {} : r;
    vt(e);
    let i = o ? ht : mr,
      l = Vt({ collapseWhitespace: a, trim: c, normalizer: n });
    return Array.from(e.querySelectorAll('input,textarea,select')).filter((s) =>
      s.tagName === 'SELECT'
        ? Array.from(s.options)
            .filter((u) => u.selected)
            .some((u) => i(Fr(u), u, t, l))
        : i(s.value, s, t, l),
    );
  },
  A_ = (e, t) => 'Found multiple elements with the display value: ' + t + '.',
  q_ = (e, t) => 'Unable to find an element with the display value: ' + t + '.',
  vc = Ve(wo, wo.name, 'queryAll'),
  [_c, Ec, wc, Sc, Cc] = _t(wo, A_, q_),
  x_ = /^(img|input|area|.+-.+)$/i,
  So = function (e, t, r) {
    return r === void 0 && (r = {}), vt(e), Wt('alt', e, t, r).filter((o) => x_.test(o.tagName));
  },
  M_ = (e, t) => 'Found multiple elements with the alt text: ' + t,
  j_ = (e, t) => 'Unable to find an element with the alt text: ' + t,
  Oc = Ve(So, So.name, 'queryAll'),
  [Pc, Rc, Tc, Ac, qc] = _t(So, M_, j_),
  I_ = (e) => {
    var t;
    return (
      e.tagName.toLowerCase() === 'title' &&
      ((t = e.parentElement) == null ? void 0 : t.tagName.toLowerCase()) === 'svg'
    );
  },
  Co = function (e, t, r) {
    let { exact: o = !0, collapseWhitespace: a, trim: c, normalizer: n } = r === void 0 ? {} : r;
    vt(e);
    let i = o ? ht : mr,
      l = Vt({ collapseWhitespace: a, trim: c, normalizer: n });
    return Array.from(e.querySelectorAll('[title], svg > title')).filter(
      (s) => i(s.getAttribute('title'), s, t, l) || (I_(s) && i(Fr(s), s, t, l)),
    );
  },
  N_ = (e, t) => 'Found multiple elements with the title: ' + t + '.',
  B_ = (e, t) => 'Unable to find an element with the title: ' + t + '.',
  xc = Ve(Co, Co.name, 'queryAll'),
  [Mc, jc, Ic, Nc, Bc] = _t(Co, N_, B_),
  Oo = function (e, t, r) {
    let {
      hidden: o = ge().defaultHidden,
      name: a,
      description: c,
      queryFallbacks: n = !1,
      selected: i,
      busy: l,
      checked: s,
      pressed: u,
      current: p,
      level: d,
      expanded: f,
      value: { now: m, min: y, max: g, text: h } = {},
    } = r === void 0 ? {} : r;
    if ((vt(e), i !== void 0)) {
      var v;
      if (((v = Qe.roles.get(t)) == null ? void 0 : v.props['aria-selected']) === void 0)
        throw new Error('"aria-selected" is not supported on role "' + t + '".');
    }
    if (l !== void 0) {
      var S;
      if (((S = Qe.roles.get(t)) == null ? void 0 : S.props['aria-busy']) === void 0)
        throw new Error('"aria-busy" is not supported on role "' + t + '".');
    }
    if (s !== void 0) {
      var E;
      if (((E = Qe.roles.get(t)) == null ? void 0 : E.props['aria-checked']) === void 0)
        throw new Error('"aria-checked" is not supported on role "' + t + '".');
    }
    if (u !== void 0) {
      var C;
      if (((C = Qe.roles.get(t)) == null ? void 0 : C.props['aria-pressed']) === void 0)
        throw new Error('"aria-pressed" is not supported on role "' + t + '".');
    }
    if (p !== void 0) {
      var A;
      if (((A = Qe.roles.get(t)) == null ? void 0 : A.props['aria-current']) === void 0)
        throw new Error('"aria-current" is not supported on role "' + t + '".');
    }
    if (d !== void 0 && t !== 'heading')
      throw new Error('Role "' + t + '" cannot have "level" property.');
    if (m !== void 0) {
      var R;
      if (((R = Qe.roles.get(t)) == null ? void 0 : R.props['aria-valuenow']) === void 0)
        throw new Error('"aria-valuenow" is not supported on role "' + t + '".');
    }
    if (g !== void 0) {
      var _;
      if (((_ = Qe.roles.get(t)) == null ? void 0 : _.props['aria-valuemax']) === void 0)
        throw new Error('"aria-valuemax" is not supported on role "' + t + '".');
    }
    if (y !== void 0) {
      var O;
      if (((O = Qe.roles.get(t)) == null ? void 0 : O.props['aria-valuemin']) === void 0)
        throw new Error('"aria-valuemin" is not supported on role "' + t + '".');
    }
    if (h !== void 0) {
      var x;
      if (((x = Qe.roles.get(t)) == null ? void 0 : x.props['aria-valuetext']) === void 0)
        throw new Error('"aria-valuetext" is not supported on role "' + t + '".');
    }
    if (f !== void 0) {
      var j;
      if (((j = Qe.roles.get(t)) == null ? void 0 : j.props['aria-expanded']) === void 0)
        throw new Error('"aria-expanded" is not supported on role "' + t + '".');
    }
    let z = new WeakMap();
    function V(U) {
      return z.has(U) || z.set(U, Ku(U)), z.get(U);
    }
    return Array.from(e.querySelectorAll($_(t)))
      .filter((U) => {
        if (U.hasAttribute('role')) {
          let ee = U.getAttribute('role');
          if (n)
            return ee
              .split(' ')
              .filter(Boolean)
              .some((ne) => ne === t);
          let [G] = ee.split(' ');
          return G === t;
        }
        return ma(U).some((ee) => ee === t);
      })
      .filter((U) => {
        if (i !== void 0) return i === s_(U);
        if (l !== void 0) return l === u_(U);
        if (s !== void 0) return s === c_(U);
        if (u !== void 0) return u === d_(U);
        if (p !== void 0) return p === p_(U);
        if (f !== void 0) return f === f_(U);
        if (d !== void 0) return d === m_(U);
        if (m !== void 0 || g !== void 0 || y !== void 0 || h !== void 0) {
          let G = !0;
          if (
            (m !== void 0 && G && (G = m === y_(U)),
            g !== void 0 && G && (G = g === h_(U)),
            y !== void 0 && G && (G = y === b_(U)),
            h !== void 0)
          ) {
            var ee;
            G && (G = ht((ee = g_(U)) != null ? ee : null, U, h, (ne) => ne));
          }
          return G;
        }
        return !0;
      })
      .filter((U) =>
        a === void 0
          ? !0
          : ht(
              qn(U, {
                computedStyleSupportsPseudoElements: ge().computedStyleSupportsPseudoElements,
              }),
              U,
              a,
              (ee) => ee,
            ),
      )
      .filter((U) =>
        c === void 0
          ? !0
          : ht(
              la(U, {
                computedStyleSupportsPseudoElements: ge().computedStyleSupportsPseudoElements,
              }),
              U,
              c,
              (ee) => ee,
            ),
      )
      .filter((U) => (o === !1 ? jn(U, { isSubtreeInaccessible: V }) === !1 : !0));
  };
function $_(e) {
  var t;
  let r = '*[role~="' + e + '"]',
    o = (t = Qe.roleElements.get(e)) != null ? t : new Set(),
    a = new Set(
      Array.from(o).map((c) => {
        let { name: n } = c;
        return n;
      }),
    );
  return [r].concat(Array.from(a)).join(',');
}
var $c = (e) => {
    let t = '';
    return (
      e === void 0
        ? (t = '')
        : typeof e == 'string'
          ? (t = ' and name "' + e + '"')
          : (t = ' and name `' + e + '`'),
      t
    );
  },
  D_ = function (e, t, r) {
    let { name: o } = r === void 0 ? {} : r;
    return 'Found multiple elements with the role "' + t + '"' + $c(o);
  },
  k_ = function (e, t, r) {
    let { hidden: o = ge().defaultHidden, name: a, description: c } = r === void 0 ? {} : r;
    if (ge()._disableExpensiveErrorDiagnostics) return 'Unable to find role="' + t + '"' + $c(a);
    let n = '';
    Array.from(e.children).forEach((u) => {
      n += Ju(u, { hidden: o, includeDescription: c !== void 0 });
    });
    let i;
    n.length === 0
      ? o === !1
        ? (i =
            'There are no accessible roles. But there might be some inaccessible roles. If you wish to access them, then set the `hidden` option to `true`. Learn more about this here: https://testing-library.com/docs/dom-testing-library/api-queries#byrole')
        : (i = 'There are no available roles.')
      : (i = (
          `
Here are the ` +
          (o === !1 ? 'accessible' : 'available') +
          ` roles:

  ` +
          n
            .replace(
              /\n/g,
              `
  `,
            )
            .replace(
              /\n\s\s\n/g,
              `

`,
            ) +
          `
`
        ).trim());
    let l = '';
    a === void 0
      ? (l = '')
      : typeof a == 'string'
        ? (l = ' and name "' + a + '"')
        : (l = ' and name `' + a + '`');
    let s = '';
    return (
      c === void 0
        ? (s = '')
        : typeof c == 'string'
          ? (s = ' and description "' + c + '"')
          : (s = ' and description `' + c + '`'),
      (
        `
Unable to find an ` +
        (o === !1 ? 'accessible ' : '') +
        'element with the role "' +
        t +
        '"' +
        l +
        s +
        `

` +
        i
      ).trim()
    );
  },
  Dc = Ve(Oo, Oo.name, 'queryAll'),
  [kc, Lc, Fc, Uc, Hc] = _t(Oo, D_, k_),
  ba = () => ge().testIdAttribute,
  Po = function () {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return vt(t[0]), Wt(ba(), ...t);
  },
  L_ = (e, t) => 'Found multiple elements by: [' + ba() + '="' + t + '"]',
  F_ = (e, t) => 'Unable to find an element by: [' + ba() + '="' + t + '"]',
  zc = Ve(Po, Po.name, 'queryAll'),
  [Vc, Wc, Gc, Kc, Yc] = _t(Po, L_, F_),
  un = Object.freeze({
    __proto__: null,
    queryAllByLabelText: ic,
    queryByLabelText: ec,
    getAllByLabelText: oc,
    getByLabelText: ac,
    findAllByLabelText: rc,
    findByLabelText: nc,
    queryByPlaceholderText: sc,
    queryAllByPlaceholderText: lc,
    getByPlaceholderText: cc,
    getAllByPlaceholderText: uc,
    findAllByPlaceholderText: dc,
    findByPlaceholderText: pc,
    queryByText: mc,
    queryAllByText: fc,
    getByText: hc,
    getAllByText: yc,
    findAllByText: bc,
    findByText: gc,
    queryByDisplayValue: _c,
    queryAllByDisplayValue: vc,
    getByDisplayValue: wc,
    getAllByDisplayValue: Ec,
    findAllByDisplayValue: Sc,
    findByDisplayValue: Cc,
    queryByAltText: Pc,
    queryAllByAltText: Oc,
    getByAltText: Tc,
    getAllByAltText: Rc,
    findAllByAltText: Ac,
    findByAltText: qc,
    queryByTitle: Mc,
    queryAllByTitle: xc,
    getByTitle: Ic,
    getAllByTitle: jc,
    findAllByTitle: Nc,
    findByTitle: Bc,
    queryByRole: kc,
    queryAllByRole: Dc,
    getAllByRole: Lc,
    getByRole: Fc,
    findAllByRole: Uc,
    findByRole: Hc,
    queryByTestId: Vc,
    queryAllByTestId: zc,
    getByTestId: Gc,
    getAllByTestId: Wc,
    findAllByTestId: Kc,
    findByTestId: Yc,
  });
function Ro(e, t, r) {
  return (
    t === void 0 && (t = un),
    r === void 0 && (r = {}),
    Object.keys(t).reduce((o, a) => {
      let c = t[a];
      return (o[a] = c.bind(null, e)), o;
    }, r)
  );
}
var Jc = (e) => !e || (Array.isArray(e) && !e.length);
function Bi(e) {
  if (Jc(e))
    throw new Error(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.',
    );
}
async function U_(e, t) {
  let r = new Error('Timed out in waitForElementToBeRemoved.');
  if (typeof e != 'function') {
    Bi(e);
    let o = (Array.isArray(e) ? e : [e]).map((a) => {
      let c = a.parentElement;
      if (c === null) return () => null;
      for (; c.parentElement; ) c = c.parentElement;
      return () => (c.contains(a) ? a : null);
    });
    e = () => o.map((a) => a()).filter(Boolean);
  }
  return (
    Bi(e()),
    ya(() => {
      let o;
      try {
        o = e();
      } catch (a) {
        if (a.name === 'TestingLibraryElementError') return;
        throw a;
      }
      if (!Jc(o)) throw r;
    }, t)
  );
}
var $i = {
    copy: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    cut: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    paste: {
      EventType: 'ClipboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionEnd: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionStart: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    compositionUpdate: {
      EventType: 'CompositionEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    keyDown: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyPress: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    keyUp: {
      EventType: 'KeyboardEvent',
      defaultInit: { bubbles: !0, cancelable: !0, charCode: 0, composed: !0 },
    },
    focus: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    blur: { EventType: 'FocusEvent', defaultInit: { bubbles: !1, cancelable: !1, composed: !0 } },
    focusIn: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    focusOut: {
      EventType: 'FocusEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    change: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
    input: { EventType: 'InputEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    invalid: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !0 } },
    submit: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    reset: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !0 } },
    click: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, button: 0, composed: !0 },
    },
    contextMenu: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dblClick: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drag: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    dragEnd: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !1, composed: !0 } },
    dragEnter: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragExit: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragLeave: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    dragOver: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    dragStart: {
      EventType: 'DragEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    drop: { EventType: 'DragEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    mouseDown: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseEnter: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseLeave: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !1, cancelable: !1, composed: !0 },
    },
    mouseMove: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOut: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseOver: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    mouseUp: {
      EventType: 'MouseEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    select: { EventType: 'Event', defaultInit: { bubbles: !0, cancelable: !1 } },
    touchCancel: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    touchEnd: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchMove: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    touchStart: {
      EventType: 'TouchEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    resize: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    scroll: { EventType: 'UIEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    wheel: { EventType: 'WheelEvent', defaultInit: { bubbles: !0, cancelable: !0, composed: !0 } },
    abort: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlay: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    canPlayThrough: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    durationChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    emptied: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    encrypted: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    ended: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedData: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadedMetadata: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    loadStart: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    pause: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    play: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    playing: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    progress: { EventType: 'ProgressEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    rateChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    seeked: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    seeking: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    stalled: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    suspend: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    timeUpdate: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    volumeChange: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    waiting: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    load: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    error: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    animationStart: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
    animationEnd: { EventType: 'AnimationEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
    animationIteration: {
      EventType: 'AnimationEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionCancel: {
      EventType: 'TransitionEvent',
      defaultInit: { bubbles: !0, cancelable: !1 },
    },
    transitionEnd: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !0 } },
    transitionRun: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
    transitionStart: { EventType: 'TransitionEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
    pointerOver: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerEnter: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    pointerDown: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerMove: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerUp: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerCancel: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    pointerOut: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
    pointerLeave: { EventType: 'PointerEvent', defaultInit: { bubbles: !1, cancelable: !1 } },
    gotPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    lostPointerCapture: {
      EventType: 'PointerEvent',
      defaultInit: { bubbles: !0, cancelable: !1, composed: !0 },
    },
    popState: { EventType: 'PopStateEvent', defaultInit: { bubbles: !0, cancelable: !1 } },
    offline: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
    online: { EventType: 'Event', defaultInit: { bubbles: !1, cancelable: !1 } },
  },
  Di = { doubleClick: 'dblClick' };
function jr(e, t) {
  return ge().eventWrapper(() => {
    if (!t) throw new Error('Unable to fire an event - please provide an event object.');
    if (!e)
      throw new Error('Unable to fire a "' + t.type + '" event - please provide a DOM element.');
    return e.dispatchEvent(t);
  });
}
function Or(e, t, r, o) {
  let { EventType: a = 'Event', defaultInit: c = {} } = o === void 0 ? {} : o;
  if (!t) throw new Error('Unable to fire a "' + e + '" event - please provide a DOM element.');
  let n = { ...c, ...r },
    { target: { value: i, files: l, ...s } = {} } = n;
  i !== void 0 && H_(t, i),
    l !== void 0 &&
      Object.defineProperty(t, 'files', {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: l,
      }),
    Object.assign(t, s);
  let u = Uu(t),
    p = u[a] || u.Event,
    d;
  if (typeof p == 'function') d = new p(e, n);
  else {
    d = u.document.createEvent(a);
    let { bubbles: f, cancelable: m, detail: y, ...g } = n;
    d.initEvent(e, f, m, y),
      Object.keys(g).forEach((h) => {
        d[h] = g[h];
      });
  }
  return (
    ['dataTransfer', 'clipboardData'].forEach((f) => {
      let m = n[f];
      typeof m == 'object' &&
        (typeof u.DataTransfer == 'function'
          ? Object.defineProperty(d, f, {
              value: Object.getOwnPropertyNames(m).reduce(
                (y, g) => (Object.defineProperty(y, g, { value: m[g] }), y),
                new u.DataTransfer(),
              ),
            })
          : Object.defineProperty(d, f, { value: m }));
    }),
    d
  );
}
Object.keys($i).forEach((e) => {
  let { EventType: t, defaultInit: r } = $i[e],
    o = e.toLowerCase();
  (Or[e] = (a, c) => Or(o, a, c, { EventType: t, defaultInit: r })),
    (jr[e] = (a, c) => jr(a, Or[e](a, c)));
});
function H_(e, t) {
  let { set: r } = Object.getOwnPropertyDescriptor(e, 'value') || {},
    o = Object.getPrototypeOf(e),
    { set: a } = Object.getOwnPropertyDescriptor(o, 'value') || {};
  if (a && r !== a) a.call(e, t);
  else if (r) r.call(e, t);
  else throw new Error('The given element does not have a value setter');
}
Object.keys(Di).forEach((e) => {
  let t = Di[e];
  jr[e] = function () {
    return jr[t](...arguments);
  };
});
function z_(e) {
  return e.replace(
    /[ \t]*[\n][ \t]*/g,
    `
`,
  );
}
function V_(e) {
  return N1.default.compressToEncodedURIComponent(z_(e));
}
function W_(e) {
  return 'https://testing-playground.com/#markup=' + V_(e);
}
var G_ = (e, t, r) => (Array.isArray(e) ? e.forEach((o) => go(o, t, r)) : go(e, t, r)),
  K_ = function (e) {
    if ((e === void 0 && (e = pa().body), !e || !('innerHTML' in e))) {
      console.log("The element you're providing isn't a valid DOM element.");
      return;
    }
    if (!e.innerHTML) {
      console.log("The provided element doesn't have any children.");
      return;
    }
    let t = W_(e.innerHTML);
    return (
      console.log(
        `Open this URL in your browser

` + t,
      ),
      t
    );
  },
  ki = { debug: G_, logTestingPlaygroundURL: K_ },
  Y_ =
    typeof document < 'u' && document.body
      ? Ro(document.body, un, ki)
      : Object.keys(un).reduce(
          (e, t) => (
            (e[t] = () => {
              throw new TypeError(
                'For queries bound to document.body a global document has to be available... Learn more: https://testing-library.com/s/screen-global-error',
              );
            }),
            e
          ),
          ki,
        ),
  J_ = ve(Wg(), 1),
  X_ = ve(vs(), 1),
  Xc = ve(vs(), 1),
  Qc = Object.defineProperty,
  Q_ = Object.defineProperties,
  Z_ = Object.getOwnPropertyDescriptors,
  Li = Object.getOwnPropertySymbols,
  eE = Object.prototype.hasOwnProperty,
  tE = Object.prototype.propertyIsEnumerable,
  rE = Math.pow,
  Fi = (e, t, r) =>
    t in e ? Qc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (e[t] = r),
  he = (e, t) => {
    for (var r in t || (t = {})) eE.call(t, r) && Fi(e, r, t[r]);
    if (Li) for (var r of Li(t)) tE.call(t, r) && Fi(e, r, t[r]);
    return e;
  },
  je = (e, t) => Q_(e, Z_(t)),
  Zc = (e, t) => {
    for (var r in t) Qc(e, r, { get: t[r], enumerable: !0 });
  },
  be = (e, t, r) =>
    new Promise((o, a) => {
      var c = (l) => {
          try {
            i(r.next(l));
          } catch (s) {
            a(s);
          }
        },
        n = (l) => {
          try {
            i(r.throw(l));
          } catch (s) {
            a(s);
          }
        },
        i = (l) => (l.done ? o(l.value) : Promise.resolve(l.value).then(c, n));
      i((r = r.apply(e, t)).next());
    });
function fe(e, t, r) {
  return (e.namespaceURI && e.namespaceURI !== 'http://www.w3.org/1999/xhtml') ||
    ((t = Array.isArray(t) ? t : [t]), !t.includes(e.tagName.toLowerCase()))
    ? !1
    : r
      ? Object.entries(r).every(([o, a]) => e[o] === a)
      : !0;
}
var nE = ['button', 'color', 'file', 'image', 'reset', 'submit', 'checkbox', 'radio'];
function oE(e) {
  return fe(e, 'button') || (fe(e, 'input') && nE.includes(e.type));
}
function ed(e, t) {
  return new Promise((r, o) => {
    let a = new t();
    (a.onerror = o),
      (a.onabort = o),
      (a.onload = () => {
        r(String(a.result));
      }),
      a.readAsText(e);
  });
}
function ga(e, t) {
  let r = je(he({}, t), {
    length: t.length,
    item: (o) => r[o],
    [Symbol.iterator]: function* () {
      for (let o = 0; o < r.length; o++) yield r[o];
    },
  });
  return (
    (r.constructor = e.FileList),
    Object.setPrototypeOf(r, e.FileList.prototype),
    Object.freeze(r),
    r
  );
}
var td = class {
    constructor(e, t) {
      (this.file = null),
        (this.data = void 0),
        typeof e == 'string'
          ? ((this.kind = 'string'), (this.type = String(t)), (this.data = e))
          : ((this.kind = 'file'), (this.type = e.type), (this.file = e));
    }
    getAsFile() {
      return this.file;
    }
    getAsString(e) {
      typeof this.data == 'string' && e(this.data);
    }
    webkitGetAsEntry() {
      throw new Error('not implemented');
    }
  },
  aE = class extends Array {
    add(...e) {
      let t = new td(e[0], e[1]);
      return this.push(t), t;
    }
    clear() {
      this.splice(0, this.length);
    }
    remove(e) {
      this.splice(e, 1);
    }
  };
function Gr(e, t) {
  let [r, o] = e.split('/'),
    a = !o || o === '*';
  return (c) => (t ? c.type === (a ? r : e) : a ? c.type.startsWith(`${r}/`) : c.type === r);
}
function iE(e) {
  return new (class {
    constructor() {
      (this.dropEffect = 'none'),
        (this.effectAllowed = 'uninitialized'),
        (this.items = new aE()),
        (this.files = ga(e, []));
    }
    getData(t) {
      var r;
      let o = (r = this.items.find(Gr(t, !0))) != null ? r : this.items.find(Gr(t, !1)),
        a = '';
      return (
        o == null ||
          o.getAsString((c) => {
            a = c;
          }),
        a
      );
    }
    setData(t, r) {
      let o = this.items.findIndex(Gr(t, !0)),
        a = new td(r, t);
      o >= 0 ? this.items.splice(o, 1, a) : this.items.push(a);
    }
    clearData(t) {
      if (t) {
        let r = this.items.findIndex(Gr(t, !0));
        r >= 0 && this.items.remove(r);
      } else this.items.clear();
    }
    get types() {
      let t = [];
      return (
        this.files.length && t.push('Files'),
        this.items.forEach((r) => t.push(r.type)),
        Object.freeze(t),
        t
      );
    }
    setDragImage() {}
  })();
}
function va(e, t = []) {
  let r = typeof e.DataTransfer > 'u' ? iE(e) : new e.DataTransfer();
  return Object.defineProperty(r, 'files', { get: () => ga(e, t) }), r;
}
function lE(e, t) {
  if (t.kind === 'file') return t.getAsFile();
  let r = '';
  return (
    t.getAsString((o) => {
      r = o;
    }),
    new e.Blob([r], { type: t.type })
  );
}
function Et(e) {
  return (0, J_.getWindowFromNode)(e);
}
function rd(e, ...t) {
  let r = Object.fromEntries(
    t.map((o) => [typeof o == 'string' ? 'text/plain' : o.type, Promise.resolve(o)]),
  );
  return typeof e.ClipboardItem < 'u'
    ? new e.ClipboardItem(r)
    : new (class {
        constructor(o) {
          this.data = o;
        }
        get types() {
          return Array.from(Object.keys(this.data));
        }
        getType(o) {
          return be(this, null, function* () {
            let a = yield this.data[o];
            if (!a) throw new Error(`${o} is not one of the available MIME types on this item.`);
            return a instanceof e.Blob ? a : new e.Blob([a], { type: o });
          });
        }
      })(r);
}
var lr = Symbol('Manage ClipboardSub');
function Ui(e, t) {
  return Object.assign(
    new (class extends e.EventTarget {
      constructor() {
        super(...arguments), (this.items = []);
      }
      read() {
        return be(this, null, function* () {
          return Array.from(this.items);
        });
      }
      readText() {
        return be(this, null, function* () {
          let r = '';
          for (let o of this.items) {
            let a = o.types.includes('text/plain')
              ? 'text/plain'
              : o.types.find((c) => c.startsWith('text/'));
            a && (r += yield o.getType(a).then((c) => ed(c, e.FileReader)));
          }
          return r;
        });
      }
      write(r) {
        return be(this, null, function* () {
          this.items = r;
        });
      }
      writeText(r) {
        return be(this, null, function* () {
          this.items = [rd(e, r)];
        });
      }
    })(),
    { [lr]: t },
  );
}
function _a(e) {
  return !!(e != null && e[lr]);
}
function sE(e) {
  if (_a(e.navigator.clipboard)) return e.navigator.clipboard[lr];
  let t = Object.getOwnPropertyDescriptor(e.navigator, 'clipboard'),
    r,
    o = {
      resetClipboardStub: () => {
        r = Ui(e, o);
      },
      detachClipboardStub: () => {
        t
          ? Object.defineProperty(e.navigator, 'clipboard', t)
          : Object.defineProperty(e.navigator, 'clipboard', { value: void 0, configurable: !0 });
      },
    };
  return (
    (r = Ui(e, o)),
    Object.defineProperty(e.navigator, 'clipboard', { get: () => r, configurable: !0 }),
    r[lr]
  );
}
function uE(e) {
  _a(e.navigator.clipboard) && e.navigator.clipboard[lr].resetClipboardStub();
}
function cE(e) {
  _a(e.navigator.clipboard) && e.navigator.clipboard[lr].detachClipboardStub();
}
function dE(e) {
  return be(this, null, function* () {
    let t = e.defaultView,
      r = t == null ? void 0 : t.navigator.clipboard,
      o = r && (yield r.read());
    if (!o) throw new Error('The Clipboard API is unavailable.');
    let a = va(t);
    for (let c of o)
      for (let n of c.types) a.setData(n, yield c.getType(n).then((i) => ed(i, t.FileReader)));
    return a;
  });
}
function nd(e, t) {
  return be(this, null, function* () {
    let r = Et(e),
      o = r.navigator.clipboard,
      a = [];
    for (let c = 0; c < t.items.length; c++) {
      let n = t.items[c],
        i = lE(r, n);
      a.push(rd(r, i));
    }
    if (
      !(
        o &&
        (yield o.write(a).then(
          () => !0,
          () => !1,
        ))
      )
    )
      throw new Error('The Clipboard API is unavailable.');
  });
}
typeof globalThis.afterEach == 'function' && globalThis.afterEach(() => uE(globalThis.window));
typeof globalThis.afterAll == 'function' && globalThis.afterAll(() => cE(globalThis.window));
function Bt(e) {
  return (
    e.hasAttribute('contenteditable') &&
    (e.getAttribute('contenteditable') == 'true' || e.getAttribute('contenteditable') == '')
  );
}
function Ir(e) {
  let t = pE(e);
  return t && (t.closest('[contenteditable=""]') || t.closest('[contenteditable="true"]'));
}
function pE(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function To(e) {
  return e ? (Bt(e) ? e.textContent : wt(e)) : null;
}
var cn = globalThis.parseInt;
function fE(e) {
  let t = e.replace(/\D/g, '');
  if (t.length < 2) return e;
  let r = cn(t[0], 10),
    o = cn(t[1], 10);
  if (r >= 3 || (r === 2 && o >= 4)) {
    let a;
    return r >= 3 ? (a = 1) : (a = 2), Hi(t, a);
  }
  return e.length === 2 ? e : Hi(t, 2);
}
function Hi(e, t) {
  let r = e.slice(0, t),
    o = Math.min(cn(r, 10), 23),
    a = e.slice(t),
    c = cn(a, 10),
    n = Math.min(c, 59);
  return `${o.toString().padStart(2, '0')}:${n.toString().padStart(2, '0')}`;
}
function od(e, t) {
  let r = e.cloneNode();
  return (r.value = t), r.value === t;
}
var ad = ((e) => (
  (e.email = 'email'),
  (e.password = 'password'),
  (e.search = 'search'),
  (e.telephone = 'telephone'),
  (e.text = 'text'),
  (e.url = 'url'),
  e
))(ad || {});
function mE(e) {
  let t = To(e);
  if (t === null) return;
  let r = yE(e);
  return r ? r - t.length : void 0;
}
function yE(e) {
  var t;
  if (!hE(e)) return;
  let r = (t = e.getAttribute('maxlength')) != null ? t : '';
  return /^\d+$/.test(r) && Number(r) >= 0 ? Number(r) : void 0;
}
function hE(e) {
  return fe(e, 'textarea') || (fe(e, 'input') && !!ad[e.type]);
}
function id(e) {
  return fe(e, 'input') && ['date', 'time'].includes(e.type);
}
function sr(e, t, r, o = 'insertText') {
  let a = qE(t);
  a &&
    ((!id(t) && !Ie(e, t, 'beforeinput', { inputType: o, data: r })) ||
      ('startContainer' in a ? bE(e, t, a, r, o) : gE(e, t, a, r, o)));
}
function bE(e, t, r, o, a) {
  let c = !1;
  if (!r.collapsed) (c = !0), r.deleteContents();
  else if (['deleteContentBackward', 'deleteContentForward'].includes(a)) {
    let n = ud(r.startContainer, r.startOffset, a === 'deleteContentBackward' ? -1 : 1, a);
    if (n) {
      c = !0;
      let i = r.cloneRange();
      i.comparePoint(n.node, n.offset) < 0
        ? i.setStart(n.node, n.offset)
        : i.setEnd(n.node, n.offset),
        i.deleteContents();
    }
  }
  if (o)
    if (r.endContainer.nodeType === 3) {
      let n = r.endOffset;
      r.endContainer.insertData(n, o),
        r.setStart(r.endContainer, n + o.length),
        r.setEnd(r.endContainer, n + o.length);
    } else {
      let n = t.ownerDocument.createTextNode(o);
      r.insertNode(n), r.setStart(n, o.length), r.setEnd(n, o.length);
    }
  (c || o) && Ie(e, t, 'input', { inputType: a });
}
function gE(e, t, r, o, a) {
  let c = o,
    n = mE(t);
  if (n !== void 0 && o.length > 0)
    if (n > 0) c = o.substring(0, n);
    else return;
  let { newValue: i, newOffset: l, oldValue: s } = vE(c, t, r, a);
  (i === s && l === r.startOffset && l === r.endOffset) ||
    (fe(t, 'input', { type: 'number' }) && !_E(i)) ||
    (fw(t, i),
    $t({ focusNode: t, anchorOffset: l, focusOffset: l }),
    id(t)
      ? od(t, i) && (zi(e, t, l, {}), Ie(e, t, 'change'), Cd(t))
      : zi(e, t, l, { data: o, inputType: a }));
}
function vE(e, t, { startOffset: r, endOffset: o }, a) {
  let c = wt(t),
    n = Math.max(0, r === o && a === 'deleteContentBackward' ? r - 1 : r),
    i = c.substring(0, n),
    l = Math.min(c.length, r === o && a === 'deleteContentForward' ? r + 1 : o),
    s = c.substring(l, c.length),
    u = `${i}${e}${s}`,
    p = n + e.length;
  if (fe(t, 'input', { type: 'time' })) {
    let d = fE(u);
    d !== '' && od(t, d) && ((u = d), (p = d.length));
  }
  return { oldValue: c, newValue: u, newOffset: p };
}
function zi(e, t, r, o) {
  Ie(e, t, 'input', o), gw(t, r);
}
function _E(e) {
  var t, r;
  let o = e.split('e', 2);
  return !(
    /[^\d.\-e]/.test(e) ||
    Number((t = e.match(/-/g)) == null ? void 0 : t.length) > 2 ||
    Number((r = e.match(/\./g)) == null ? void 0 : r.length) > 1 ||
    (o[1] && !/^-?\d*$/.test(o[1]))
  );
}
function ur(e) {
  return EE(e) || fe(e, 'textarea', { readOnly: !1 }) || Bt(e);
}
var Hr = ((e) => (
  (e.text = 'text'),
  (e.date = 'date'),
  (e['datetime-local'] = 'datetime-local'),
  (e.email = 'email'),
  (e.month = 'month'),
  (e.number = 'number'),
  (e.password = 'password'),
  (e.search = 'search'),
  (e.tel = 'tel'),
  (e.time = 'time'),
  (e.url = 'url'),
  (e.week = 'week'),
  e
))(Hr || {});
function EE(e) {
  return fe(e, 'input', { readOnly: !1 }) && !!Hr[e.type];
}
var Vi = Symbol('files and value properties are mocked');
function wE(e, t) {
  var r;
  (r = e[Vi]) == null || r.restore();
  let o = Object.getOwnPropertyDescriptors(e),
    a = Object.getOwnPropertyDescriptors(Object.getPrototypeOf(e));
  function c() {
    Object.defineProperties(e, {
      files: he(he({}, a.files), o.files),
      value: he(he({}, a.value), o.value),
      type: he(he({}, a.type), o.type),
    });
  }
  (e[Vi] = { restore: c }),
    Object.defineProperties(e, {
      files: je(he(he({}, a.files), o.files), { get: () => t }),
      value: je(he(he({}, a.value), o.value), {
        get: () => (t.length ? `C:\\fakepath\\${t[0].name}` : ''),
        set(n) {
          var i;
          n === '' ? c() : (i = o.value.set) == null || i.call(e, n);
        },
      }),
      type: je(he(he({}, a.type), o.type), {
        set(n) {
          n !== 'file' && (c(), (e.type = n));
        },
      }),
    });
}
function ld(e) {
  let t;
  return (
    ge().eventWrapper(() => {
      t = e();
    }),
    t
  );
}
function SE(e, t) {
  let r = e;
  do {
    if (t(r)) return r;
    r = r.parentElement;
  } while (r && r !== e.ownerDocument.body);
}
function ot(e) {
  var t;
  for (let r = e; r; r = r.parentElement)
    if (fe(r, ['button', 'input', 'select', 'textarea', 'optgroup', 'option'])) {
      if (r.hasAttribute('disabled')) return !0;
    } else if (fe(r, 'fieldset')) {
      if (
        r.hasAttribute('disabled') &&
        !((t = r.querySelector(':scope > legend')) != null && t.contains(e))
      )
        return !0;
    } else if (
      r.tagName.includes('-') &&
      r.constructor.formAssociated &&
      r.hasAttribute('disabled')
    )
      return !0;
  return !1;
}
function Bn(e) {
  let t = e.activeElement;
  return t != null && t.shadowRoot
    ? Bn(t.shadowRoot)
    : ot(t)
      ? e.ownerDocument
        ? e.ownerDocument.body
        : e.body
      : t;
}
var sd = [
  'input:not([type=hidden]):not([disabled])',
  'button:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[contenteditable=""]',
  '[contenteditable="true"]',
  'a[href]',
  '[tabindex]:not([disabled])',
].join(', ');
function Ea(e) {
  return e.matches(sd);
}
function ud(e, t, r, o) {
  if (rn(e) && t + r >= 0 && t + r <= e.nodeValue.length) return { node: e, offset: t + r };
  let a = Wi(e, t, r);
  if (a) {
    if (rn(a))
      return {
        node: a,
        offset: r > 0 ? Math.min(1, a.nodeValue.length) : Math.max(a.nodeValue.length - 1, 0),
      };
    if (fe(a, 'br')) {
      let c = Wi(a, void 0, r);
      return c
        ? rn(c)
          ? { node: c, offset: r > 0 ? 0 : c.nodeValue.length }
          : r < 0 && fe(c, 'br')
            ? { node: a.parentNode, offset: Kr(a) }
            : { node: c.parentNode, offset: Kr(c) + (r > 0 ? 0 : 1) }
        : r < 0 && o === 'deleteContentBackward'
          ? { node: a.parentNode, offset: Kr(a) }
          : void 0;
    } else return { node: a.parentNode, offset: Kr(a) + (r > 0 ? 1 : 0) };
  }
}
function Wi(e, t, r) {
  let o = Number(t) + (r < 0 ? -1 : 0);
  return (
    t !== void 0 && wa(e) && o >= 0 && o < e.children.length && (e = e.children[o]),
    OE(e, r === 1 ? 'next' : 'previous', CE)
  );
}
function CE(e) {
  if (rn(e)) return !0;
  if (wa(e)) {
    if (fe(e, ['input', 'textarea'])) return e.type !== 'hidden';
    if (fe(e, 'br')) return !0;
  }
  return !1;
}
function Kr(e) {
  let t = 0;
  for (; e.previousSibling; ) t++, (e = e.previousSibling);
  return t;
}
function wa(e) {
  return e.nodeType === 1;
}
function rn(e) {
  return e.nodeType === 3;
}
function OE(e, t, r) {
  for (var o; ; ) {
    let a = e[`${t}Sibling`];
    if (a) {
      if (((e = PE(a, t === 'next' ? 'first' : 'last')), r(e))) return e;
    } else if (
      e.parentNode &&
      (!wa(e.parentNode) ||
        (!Bt(e.parentNode) && e.parentNode !== ((o = e.ownerDocument) == null ? void 0 : o.body)))
    )
      e = e.parentNode;
    else break;
  }
}
function PE(e, t) {
  for (; e.hasChildNodes(); ) e = e[`${t}Child`];
  return e;
}
function wr(e, t, r) {
  var o;
  if (yr(e)) return $t({ focusNode: e, anchorOffset: t, focusOffset: r });
  if (Bt(e) && ((o = e.firstChild) == null ? void 0 : o.nodeType) === 3)
    return $t({ focusNode: e.firstChild, anchorOffset: t, focusOffset: r });
  throw new Error('Not implemented. The result of this interaction is unreliable.');
}
function yr(e) {
  return RE(e) && (fe(e, 'textarea') || (fe(e, 'input') && e.type in Hr));
}
function RE(e) {
  return e.nodeType === 1;
}
function cd(e) {
  let t = TE(e);
  if (t && yr(t)) return { type: 'input', selection: Br(t) };
  let r = t == null ? void 0 : t.ownerDocument.getSelection();
  return {
    type: Ir(e) && r != null && r.anchorNode && Ir(r.anchorNode) ? 'contenteditable' : 'default',
    selection: r,
  };
}
function TE(e) {
  return e.nodeType === 1 ? e : e.parentElement;
}
function AE(e) {
  var t;
  let r = e.ownerDocument.getSelection();
  if (r != null && r.focusNode && yr(e)) {
    let o = Ir(r.focusNode);
    if (o) {
      if (!r.isCollapsed) {
        let a = ((t = o.firstChild) == null ? void 0 : t.nodeType) === 3 ? o.firstChild : o;
        r.setBaseAndExtent(a, 0, a, 0);
      }
    } else r.setBaseAndExtent(e, 0, e, 0);
  }
}
function qE(e) {
  var t;
  let r = cd(e);
  if (r.type === 'input') return r.selection;
  if (r.type === 'contenteditable') return (t = r.selection) == null ? void 0 : t.getRangeAt(0);
}
function $t({ focusNode: e, focusOffset: t, anchorNode: r = e, anchorOffset: o = t }) {
  var a, c;
  if (cd(e).type === 'input') return hr(e, { anchorOffset: o, focusOffset: t });
  (c = (a = r.ownerDocument) == null ? void 0 : a.getSelection()) == null ||
    c.setBaseAndExtent(r, o, e, t);
}
function Gi(e, t) {
  if (yr(e)) {
    let r = Br(e);
    $t({
      focusNode: e,
      focusOffset:
        r.startOffset === r.endOffset ? r.focusOffset + t : t < 0 ? r.startOffset : r.endOffset,
    });
  } else {
    let r = e.ownerDocument.getSelection();
    if (!(r != null && r.focusNode)) return;
    if (r.isCollapsed) {
      let o = ud(r.focusNode, r.focusOffset, t);
      o && $t({ focusNode: o.node, focusOffset: o.offset });
    } else r[t < 0 ? 'collapseToStart' : 'collapseToEnd']();
  }
}
function xt(e) {
  let t = SE(e, Ea),
    r = Bn(e.ownerDocument);
  (t ?? e.ownerDocument.body) !== r &&
    (ld(t ? () => t.focus() : () => (r == null ? void 0 : r.blur())),
    AE(t ?? e.ownerDocument.body));
}
function Yr(e, t, r) {
  let o = Et(t),
    a = Array.from(
      t.ownerDocument.querySelectorAll(
        t.name
          ? `input[type="radio"][name="${o.CSS.escape(t.name)}"]`
          : 'input[type="radio"][name=""], input[type="radio"]:not([name])',
      ),
    );
  for (let c = a.findIndex((n) => n === t) + r; ; c += r) {
    if ((a[c] || (c = r > 0 ? 0 : a.length - 1), a[c] === t)) return;
    ot(a[c]) || (xt(a[c]), Ie(e, a[c], 'click'));
  }
}
function xE(e) {
  !Ea(e) || Bn(e.ownerDocument) !== e || ld(() => e.blur());
}
function dd(e) {
  let t = yr(e)
      ? { 'text/plain': ME(e) }
      : { 'text/plain': String(e.ownerDocument.getSelection()) },
    r = va(Et(e));
  for (let o in t) t[o] && r.setData(o, t[o]);
  return r;
}
function ME(e) {
  let t = Br(e);
  return wt(e).substring(t.startOffset, t.endOffset);
}
function jE(e) {
  let t = Et(e);
  for (let r = e; r != null && r.ownerDocument; r = r.parentElement) {
    let { display: o, visibility: a } = t.getComputedStyle(r);
    if (o === 'none' || a === 'hidden') return !1;
  }
  return !0;
}
function IE(e, t) {
  let r = e.ownerDocument,
    o = r.querySelectorAll(sd),
    a = Array.from(o).filter((l) => l === e || !(Number(l.getAttribute('tabindex')) < 0 || ot(l)));
  Number(e.getAttribute('tabindex')) >= 0 &&
    a.sort((l, s) => {
      let u = Number(l.getAttribute('tabindex')),
        p = Number(s.getAttribute('tabindex'));
      return u === p ? 0 : u === 0 ? 1 : p === 0 ? -1 : u - p;
    });
  let c = {},
    n = [r.body],
    i = fe(e, 'input', { type: 'radio' }) ? e.name : void 0;
  a.forEach((l) => {
    let s = l;
    if (fe(s, 'input', { type: 'radio' }) && s.name) {
      if (s === e) {
        n.push(s);
        return;
      } else if (s.name === i) return;
      if (s.checked) {
        (n = n.filter((u) => !fe(u, 'input', { type: 'radio', name: s.name }))),
          n.push(s),
          (c[s.name] = s);
        return;
      }
      if (typeof c[s.name] < 'u') return;
    }
    n.push(s);
  });
  for (let l = n.findIndex((s) => s === e); ; )
    if (
      ((l += t ? -1 : 1),
      l === n.length ? (l = 0) : l === -1 && (l = n.length - 1),
      n[l] === e || n[l] === r.body || jE(n[l]))
    )
      return n[l];
}
function pd(e) {
  var t;
  if (fe(e, 'textarea') || (fe(e, 'input') && e.type in Hr))
    return $t({ focusNode: e, anchorOffset: 0, focusOffset: wt(e).length });
  let r = (t = Ir(e)) != null ? t : e.ownerDocument.body;
  $t({ focusNode: r, anchorOffset: 0, focusOffset: r.childNodes.length });
}
function NE(e) {
  var t;
  if (fe(e, 'textarea') || (fe(e, 'input') && e.type in Hr))
    return Br(e).startOffset === 0 && Br(e).endOffset === wt(e).length;
  let r = (t = Ir(e)) != null ? t : e.ownerDocument.body,
    o = e.ownerDocument.getSelection();
  return (
    (o == null ? void 0 : o.anchorNode) === r &&
    o.focusNode === r &&
    o.anchorOffset === 0 &&
    o.focusOffset === r.childNodes.length
  );
}
function zr(e) {
  return { key: e.key, code: e.code };
}
function BE(e) {
  return {
    altKey: e.modifiers.Alt,
    ctrlKey: e.modifiers.Control,
    metaKey: e.modifiers.Meta,
    shiftKey: e.modifiers.Shift,
    modifierAltGraph: e.modifiers.AltGraph,
    modifierCapsLock: e.modifiers.CapsLock,
    modifierFn: e.modifiers.Fn,
    modifierFnLock: e.modifiers.FnLock,
    modifierNumLock: e.modifiers.NumLock,
    modifierScrollLock: e.modifiers.ScrollLock,
    modifierSymbol: e.modifiers.Symbol,
    modifierSymbolLock: e.modifiers.SymbolLock,
  };
}
var Sa = ((e) => ((e['{'] = '}'), (e['['] = ']'), e))(Sa || {});
function fd(e, t) {
  let r = 0,
    o = e[r] in Sa ? e[r] : '';
  r += o.length;
  let a = new RegExp(`^\\${o}{2}`).test(e) ? '' : o;
  return he({ type: a }, a === '' ? $E(e, r, t) : DE(e, r, a, t));
}
function $E(e, t, r) {
  let o = e[t];
  return (
    md(o, e, t, r),
    (t += o.length),
    { consumedLength: t, descriptor: o, releasePrevious: !1, releaseSelf: !0, repeat: 1 }
  );
}
function DE(e, t, r, o) {
  var a, c, n;
  let i = e[t] === '/' ? '/' : '';
  t += i.length;
  let l = r === '{' && e[t] === '\\';
  t += Number(l);
  let s = l
    ? e[t]
    : (a = e.slice(t).match(r === '{' ? /^\w+|^[^}>/]/ : /^\w+/)) == null
      ? void 0
      : a[0];
  md(s, e, t, o), (t += s.length);
  let u = (n = (c = e.slice(t).match(/^>\d+/)) == null ? void 0 : c[0]) != null ? n : '';
  t += u.length;
  let p = e[t] === '/' || (!u && e[t] === '>') ? e[t] : '';
  t += p.length;
  let d = Sa[r],
    f = e[t] === d ? d : '';
  if (!f)
    throw new Error(
      yd(
        [!u && 'repeat modifier', !p && 'release modifier', `"${d}"`].filter(Boolean).join(' or '),
        e[t],
        e,
        o,
      ),
    );
  return (
    (t += f.length),
    {
      consumedLength: t,
      descriptor: s,
      releasePrevious: !!i,
      repeat: u ? Math.max(Number(u.substr(1)), 1) : 1,
      releaseSelf: kE(p, u),
    }
  );
}
function md(e, t, r, o) {
  if (!e) throw new Error(yd('key descriptor', t[r], t, o));
}
function kE(e, t) {
  if (e) return e === '/';
  if (t) return !1;
}
function yd(e, t, r, o) {
  return `Expected ${e} but found "${t ?? ''}" in "${r}"
    See ${
      o === 'pointer'
        ? 'https://testing-library.com/docs/user-event/pointer#pressing-a-button-or-touching-the-screen'
        : 'https://testing-library.com/docs/user-event/keyboard'
    }
    for more information about how userEvent parses your input.`;
}
function LE(e) {
  return new e.constructor(e.type, e);
}
function FE(e) {
  return UE(e) ? e : e.ownerDocument;
}
function UE(e) {
  return e.nodeType === 9;
}
function Ki(e, t) {
  let r = e;
  do {
    if (r === t) return !0;
    r = r.parentElement;
  } while (r);
  return !1;
}
var nn = Symbol('Api level refs');
function Nr(e, t) {
  e[nn] != null || (e[nn] = {}), (e[nn][t] = {});
}
function Jr(e, t) {
  var r;
  return (r = e[nn]) == null ? void 0 : r[t];
}
function cr(e) {
  let t = e.delay;
  if (typeof t == 'number')
    return Promise.all([
      new Promise((r) => globalThis.setTimeout(() => r(), t)),
      e.advanceTimers(t),
    ]);
}
var HE = [
    ...'0123456789'.split('').map((e) => ({ code: `Digit${e}`, key: e })),
    ...')!@#$%^&*('.split('').map((e, t) => ({ code: `Digit${t}`, key: e, shiftKey: !0 })),
    ...'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .map((e) => ({ code: `Key${e.toUpperCase()}`, key: e })),
    ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      .split('')
      .map((e) => ({ code: `Key${e}`, key: e, shiftKey: !0 })),
    { code: 'Space', key: ' ' },
    { code: 'AltLeft', key: 'Alt', location: 1 },
    { code: 'AltRight', key: 'Alt', location: 2 },
    { code: 'ShiftLeft', key: 'Shift', location: 1 },
    { code: 'ShiftRight', key: 'Shift', location: 2 },
    { code: 'ControlLeft', key: 'Control', location: 1 },
    { code: 'ControlRight', key: 'Control', location: 2 },
    { code: 'MetaLeft', key: 'Meta', location: 1 },
    { code: 'MetaRight', key: 'Meta', location: 2 },
    { code: 'OSLeft', key: 'OS', location: 1 },
    { code: 'OSRight', key: 'OS', location: 2 },
    { code: 'Tab', key: 'Tab' },
    { code: 'CapsLock', key: 'CapsLock' },
    { code: 'Backspace', key: 'Backspace' },
    { code: 'Enter', key: 'Enter' },
    { code: 'Escape', key: 'Escape' },
    { code: 'ArrowUp', key: 'ArrowUp' },
    { code: 'ArrowDown', key: 'ArrowDown' },
    { code: 'ArrowLeft', key: 'ArrowLeft' },
    { code: 'ArrowRight', key: 'ArrowRight' },
    { code: 'Home', key: 'Home' },
    { code: 'End', key: 'End' },
    { code: 'Delete', key: 'Delete' },
    { code: 'PageUp', key: 'PageUp' },
    { code: 'PageDown', key: 'PageDown' },
    { code: 'Fn', key: 'Fn' },
    { code: 'Symbol', key: 'Symbol' },
    { code: 'AltRight', key: 'AltGraph' },
  ],
  zE = [
    { name: 'MouseLeft', pointerType: 'mouse', button: 'primary' },
    { name: 'MouseRight', pointerType: 'mouse', button: 'secondary' },
    { name: 'MouseMiddle', pointerType: 'mouse', button: 'auxiliary' },
    { name: 'TouchA', pointerType: 'touch' },
    { name: 'TouchB', pointerType: 'touch' },
    { name: 'TouchC', pointerType: 'touch' },
  ],
  hd = {
    applyAccept: !0,
    autoModify: !0,
    delay: 0,
    document: globalThis.document,
    keyboardMap: HE,
    pointerMap: zE,
    pointerEventsCheck: 2,
    skipAutoClose: !1,
    skipClick: !1,
    skipHover: !1,
    writeToClipboard: !1,
    advanceTimers: () => Promise.resolve(),
  },
  VE = je(he({}, hd), { writeToClipboard: !0 });
function Ao(e, t) {
  var r;
  return ((r = bd(e, t)) == null ? void 0 : r.pointerEvents) !== 'none';
}
function WE(e) {
  let t = Et(e);
  for (let r = e, o = []; r != null && r.ownerDocument; r = r.parentElement) {
    o.push(r);
    let a = t.getComputedStyle(r).pointerEvents;
    if (a && !['inherit', 'unset'].includes(a)) return { pointerEvents: a, tree: o };
  }
}
var Yi = Symbol('Last check for pointer-events');
function bd(e, t) {
  let r = t[Yi];
  if (
    !(
      e.pointerEventsCheck !== 0 &&
      (!r ||
        (Ji(e.pointerEventsCheck, 2) && r[1] !== Jr(e, 1)) ||
        (Ji(e.pointerEventsCheck, 4) && r[2] !== Jr(e, 2)))
    )
  )
    return r == null ? void 0 : r.result;
  let o = WE(t);
  return (t[Yi] = { 1: Jr(e, 1), 2: Jr(e, 2), result: o }), o;
}
function $n(e, t) {
  let r = bd(e, t);
  if ((r == null ? void 0 : r.pointerEvents) === 'none')
    throw new Error(
      [
        `Unable to perform pointer interaction as the element ${
          r.tree.length > 1 ? 'inherits' : 'has'
        } \`pointer-events: none\`:`,
        '',
        GE(r.tree),
      ].join(`
`),
    );
}
function GE(e) {
  return e
    .reverse()
    .map((t, r) =>
      [
        ''.padEnd(r),
        t.tagName,
        t.id && `#${t.id}`,
        t.hasAttribute('data-testid') && `(testId=${t.getAttribute('data-testid')})`,
        KE(t),
        e.length > 1 && r === 0 && '  <-- This element declared `pointer-events: none`',
        e.length > 1 && r === e.length - 1 && '  <-- Asserted pointer events here',
      ]
        .filter(Boolean)
        .join(''),
    ).join(`
`);
}
function KE(e) {
  var t, r, o, a;
  let c;
  return (
    e.hasAttribute('aria-label')
      ? (c = e.getAttribute('aria-label'))
      : e.hasAttribute('aria-labelledby')
        ? (c =
            (r =
              (t = e.ownerDocument.getElementById(e.getAttribute('aria-labelledby'))) == null
                ? void 0
                : t.textContent) == null
              ? void 0
              : r.trim())
        : fe(e, ['button', 'input', 'meter', 'output', 'progress', 'select', 'textarea']) &&
            (o = e.labels) != null &&
            o.length
          ? (c = Array.from(e.labels)
              .map((n) => {
                var i;
                return (i = n.textContent) == null ? void 0 : i.trim();
              })
              .join('|'))
          : fe(e, 'button') && (c = (a = e.textContent) == null ? void 0 : a.trim()),
    (c = c == null ? void 0 : c.replace(/\n/g, '  ')),
    Number(c == null ? void 0 : c.length) > 30 &&
      (c = `${c == null ? void 0 : c.substring(0, 29)}…`),
    c ? `(label=${c})` : ''
  );
}
function Ji(e, t) {
  return (e & t) > 0;
}
var gd = { primary: 0, secondary: 1, auxiliary: 2, back: 3, X1: 3, forward: 4, X2: 4 },
  Xi = { auxiliary: 1, secondary: 2, 1: 2, 2: 1 };
function YE(e) {
  return e in Xi ? Xi[e] : typeof e == 'number' ? e : gd[e];
}
function JE(...e) {
  let t = 0;
  for (let r of e) {
    let o = typeof r == 'number' ? r : gd[r];
    t |= rE(2, o);
  }
  return t;
}
var vd = je(he({}, X_.eventMap), {
    beforeInput: {
      EventType: 'InputEvent',
      defaultInit: { bubbles: !0, cancelable: !0, composed: !0 },
    },
  }),
  XE = Object.fromEntries(Object.keys(vd).map((e) => [e.toLowerCase(), e])),
  Qi = Object.fromEntries(Object.keys(Xc.eventMap).map((e) => [e.toLowerCase(), e]));
function _d(e) {
  return e in Qi ? Xc.eventMap[Qi[e]].EventType : 'Event';
}
var QE = ['MouseEvent', 'PointerEvent'];
function Ed(e) {
  return QE.includes(_d(e));
}
function ZE(e) {
  return _d(e) === 'KeyboardEvent';
}
function ew(e, t, r) {
  let o = Or(e, t, r, vd[XE[e]]);
  return Ed(e) && r && (tw(o, r), rw(o, r)), o;
}
function wd(e, t) {
  for (let [r, o] of Object.entries(t)) Object.defineProperty(e, r, { get: () => o });
}
function tw(
  e,
  {
    x: t,
    y: r,
    clientX: o,
    clientY: a,
    offsetX: c,
    offsetY: n,
    pageX: i,
    pageY: l,
    screenX: s,
    screenY: u,
  },
) {
  var p, d, f, m;
  wd(e, {
    x: (p = t ?? o) != null ? p : 0,
    y: (d = r ?? a) != null ? d : 0,
    clientX: (f = t ?? o) != null ? f : 0,
    clientY: (m = r ?? a) != null ? m : 0,
    offsetX: c ?? 0,
    offsetY: n ?? 0,
    pageX: i ?? 0,
    pageY: l ?? 0,
    screenX: s ?? 0,
    screenY: u ?? 0,
  });
}
function rw(e, { isPrimary: t, pointerId: r, pointerType: o }) {
  wd(e, { isPrimary: t, pointerId: r, pointerType: o });
}
var Gt = {};
Gt.click = (e, t, r) => {
  let o = t.closest('button,input,label,select,textarea'),
    a = o && fe(o, 'label') && o.control;
  if (a)
    return () => {
      Ea(a) && xt(a), Sd(r, a, LE(e));
    };
  if (fe(t, 'input', { type: 'file' }))
    return () => {
      xE(t), t.dispatchEvent(new (Et(t).Event)('fileDialog')), xt(t);
    };
};
Gt.cut = (e, t, r) => () => {
  ur(t) && sr(r, t, '', 'deleteByCut');
};
Gt.keydown = (e, t, r) => {
  var o, a;
  return (a = (o = Zi[e.key]) == null ? void 0 : o.call(Zi, e, t, r)) != null ? a : nw(e, t, r);
};
var Zi = {
    ArrowDown: (e, t, r) => {
      if (fe(t, 'input', { type: 'radio' })) return () => Yr(r, t, -1);
    },
    ArrowLeft: (e, t, r) =>
      fe(t, 'input', { type: 'radio' }) ? () => Yr(r, t, -1) : () => Gi(t, -1),
    ArrowRight: (e, t, r) =>
      fe(t, 'input', { type: 'radio' }) ? () => Yr(r, t, 1) : () => Gi(t, 1),
    ArrowUp: (e, t, r) => {
      if (fe(t, 'input', { type: 'radio' })) return () => Yr(r, t, 1);
    },
    Backspace: (e, t, r) => {
      if (ur(t))
        return () => {
          sr(r, t, '', 'deleteContentBackward');
        };
    },
    Delete: (e, t, r) => {
      if (ur(t))
        return () => {
          sr(r, t, '', 'deleteContentForward');
        };
    },
    End: (e, t) => {
      if (fe(t, ['input', 'textarea']) || Bt(t))
        return () => {
          var r, o;
          let a = (o = (r = To(t)) == null ? void 0 : r.length) != null ? o : 0;
          wr(t, a, a);
        };
    },
    Home: (e, t) => {
      if (fe(t, ['input', 'textarea']) || Bt(t))
        return () => {
          wr(t, 0, 0);
        };
    },
    PageDown: (e, t) => {
      if (fe(t, ['input']))
        return () => {
          let r = To(t).length;
          wr(t, r, r);
        };
    },
    PageUp: (e, t) => {
      if (fe(t, ['input']))
        return () => {
          wr(t, 0, 0);
        };
    },
    Tab:
      (e, t, { keyboardState: r }) =>
      () => {
        let o = IE(t, r.modifiers.Shift);
        xt(o), yr(o) && hr(o, { anchorOffset: 0, focusOffset: o.value.length });
      },
  },
  nw = (e, t, r) => {
    if (e.code === 'KeyA' && r.keyboardState.modifiers.Control) return () => pd(t);
  };
Gt.keypress = (e, t, r) => {
  if (e.key === 'Enter') {
    if (fe(t, 'button') || (fe(t, 'input') && ow.includes(t.type)) || (fe(t, 'a') && t.href))
      return () => {
        Ie(r, t, 'click');
      };
    if (fe(t, 'input')) {
      let o = t.form,
        a =
          o == null
            ? void 0
            : o.querySelector('input[type="submit"], button:not([type]), button[type="submit"]');
      return a
        ? () => Ie(r, a, 'click')
        : o && aw.includes(t.type) && o.querySelectorAll('input').length === 1
          ? () => Ie(r, o, 'submit')
          : void 0;
    }
  }
  if (ur(t)) {
    let o =
        e.key === 'Enter'
          ? Bt(t) && !r.keyboardState.modifiers.Shift
            ? 'insertParagraph'
            : 'insertLineBreak'
          : 'insertText',
      a =
        e.key === 'Enter'
          ? `
`
          : e.key;
    return () => sr(r, t, a, o);
  }
};
var ow = ['button', 'color', 'file', 'image', 'reset', 'submit'],
  aw = ['email', 'month', 'password', 'search', 'tel', 'text', 'url', 'week'];
Gt.keyup = (e, t, r) => {
  var o;
  return (o = el[e.key]) == null ? void 0 : o.call(el, e, t, r);
};
var el = {
  ' ': (e, t, r) => {
    if (oE(t)) return () => Ie(r, t, 'click');
  },
};
Gt.paste = (e, t, r) => {
  if (ur(t))
    return () => {
      var o;
      let a = (o = e.clipboardData) == null ? void 0 : o.getData('text');
      a && sr(r, t, a, 'insertFromPaste');
    };
};
function tl(e, t) {
  return ge().eventWrapper(e);
}
function Sd(e, t, r, o = !1) {
  var a, c;
  let n = r.type,
    i = o ? () => {} : (c = (a = Gt)[n]) == null ? void 0 : c.call(a, r, t, e);
  if (i) {
    r.preventDefault();
    let l = !1;
    return (
      Object.defineProperty(r, 'defaultPrevented', { get: () => l }),
      Object.defineProperty(r, 'preventDefault', {
        value: () => {
          l = r.cancelable;
        },
      }),
      tl(() => t.dispatchEvent(r)),
      l || i(),
      !l
    );
  }
  return tl(() => t.dispatchEvent(r));
}
function Ie(e, t, r, o, a = !1) {
  (Ed(r) || ZE(r)) && (o = he(he({}, o), BE(e.keyboardState)));
  let c = ew(r, t, o);
  return Sd(e, t, c, a);
}
function iw(e) {
  return Ie.bind(void 0, e);
}
var Yn = Symbol('Interceptor for programmatical calls');
function Zt(e, t, r) {
  let o = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    a = Object.getOwnPropertyDescriptor(e, t),
    c = o != null && o.set ? 'set' : 'value';
  if (typeof (o == null ? void 0 : o[c]) != 'function' || o[c][Yn])
    throw new Error(`Element ${e.tagName} does not implement "${String(t)}".`);
  function n(...i) {
    let { applyNative: l = !1, realArgs: s, then: u } = r.call(this, ...i),
      p = ((!l && a) || o)[c];
    c === 'set' ? p.call(this, s) : p.call(this, ...s), u == null || u();
  }
  (n[Yn] = Yn), Object.defineProperty(e, t, je(he({}, a ?? o), { [c]: n }));
}
var Ge = Symbol('Displayed selection in UI');
function lw(e) {
  Zt(e, 'setSelectionRange', function (t, ...r) {
    let o = t && typeof t == 'object' && t[Ge];
    return o || (this[Ge] = void 0), { applyNative: !!o, realArgs: [Number(t), ...r] };
  }),
    Zt(e, 'selectionStart', function (t) {
      return (this[Ge] = void 0), { realArgs: t };
    }),
    Zt(e, 'selectionEnd', function (t) {
      return (this[Ge] = void 0), { realArgs: t };
    }),
    Zt(e, 'select', function () {
      return (this[Ge] = { anchorOffset: 0, focusOffset: wt(e).length }), { realArgs: [] };
    });
}
function hr(e, { focusOffset: t, anchorOffset: r = t }, o = 'replace') {
  let a = wt(e).length,
    c = (p) => Math.max(0, Math.min(a, p)),
    n = o === 'replace' || e[Ge] === void 0 ? c(r) : e[Ge].anchorOffset,
    i = c(t),
    l = Math.min(n, i),
    s = Math.max(n, i);
  if (
    ((e[Ge] = { anchorOffset: n, focusOffset: i }), e.selectionStart === l && e.selectionEnd === s)
  )
    return;
  let u = new Number(l);
  u[Ge] = Ge;
  try {
    e.setSelectionRange(u, s);
  } catch {}
}
function Br(e) {
  var t, r, o;
  let a =
    (o = e[Ge]) != null
      ? o
      : {
          anchorOffset: (t = e.selectionStart) != null ? t : 0,
          focusOffset: (r = e.selectionEnd) != null ? r : 0,
        };
  return je(he({}, a), {
    startOffset: Math.min(a.anchorOffset, a.focusOffset),
    endOffset: Math.max(a.anchorOffset, a.focusOffset),
  });
}
function sw(e) {
  return !!e[Ge];
}
function uw(e) {
  e[Ge] = void 0;
}
var Dt = Symbol('Displayed value in UI'),
  dn = Symbol('Initial value to compare on blur'),
  $r = Symbol('Track programmatic changes for React workaround');
function cw(e) {
  let t = typeof e == 'object' && e[Dt];
  return (
    t && ((this[Dt] = String(e)), hw(this)),
    { applyNative: !!t, realArgs: dw(this, e), then: t ? void 0 : () => bw(this, String(e)) }
  );
}
function dw(e, t) {
  return fe(e, 'input', { type: 'number' }) && String(t) !== '' && !Number.isNaN(Number(t))
    ? String(Number(t))
    : String(t);
}
function pw(e) {
  Zt(e, 'value', cw);
}
function fw(e, t) {
  e[dn] === void 0 && (e[dn] = e.value), (e.value = { [Dt]: Dt, toString: () => t });
}
function wt(e) {
  return e[Dt] === void 0 ? e.value : String(e[Dt]);
}
function Ca(e) {
  e[Dt] = void 0;
}
function Cd(e) {
  e[dn] = void 0;
}
function mw(e) {
  return e[dn];
}
function yw(e) {
  return (
    Object.getOwnPropertyNames(e).some((t) => t.startsWith('__react')) && Et(e).REACT_VERSION === 17
  );
}
function hw(e) {
  yw(e) && (e[$r] = { previousValue: String(e.value), tracked: [] });
}
function bw(e, t) {
  var r, o;
  (o = (r = e[$r]) == null ? void 0 : r.tracked) == null || o.push(t),
    e[$r] || (Ca(e), hr(e, { focusOffset: t.length }));
}
function gw(e, t) {
  var r;
  let o = e[$r];
  if (((e[$r] = void 0), !((r = o == null ? void 0 : o.tracked) != null && r.length))) return;
  let a = o.tracked.length === 2 && o.tracked[0] === o.previousValue && o.tracked[1] === e.value;
  a || Ca(e), sw(e) && hr(e, { focusOffset: a ? t : e.value.length });
}
function vw(e) {
  Zt(e, 'setRangeText', function (...t) {
    return {
      realArgs: t,
      then: () => {
        Ca(e), uw(e);
      },
    };
  });
}
var er = Symbol('Node prepared with document state workarounds');
function Od(e) {
  e[er] ||
    (e.addEventListener(
      'focus',
      (t) => {
        let r = t.target;
        rl(r);
      },
      { capture: !0, passive: !0 },
    ),
    e.activeElement && rl(e.activeElement),
    e.addEventListener(
      'blur',
      (t) => {
        let r = t.target,
          o = mw(r);
        o !== void 0 && (r.value !== o && Ie({}, r, 'change'), Cd(r));
      },
      { capture: !0, passive: !0 },
    ),
    (e[er] = er));
}
function rl(e) {
  e[er] || (fe(e, ['input', 'textarea']) && (pw(e), lw(e), vw(e)), (e[er] = er));
}
var _w = ['Alt', 'AltGraph', 'Control', 'Fn', 'Meta', 'Shift', 'Symbol'];
function Pd(e) {
  return _w.includes(e);
}
var Ew = ['CapsLock', 'FnLock', 'NumLock', 'ScrollLock', 'SymbolLock'];
function Rd(e) {
  return Ew.includes(e);
}
function ww(e, { key: t }, r) {
  var o;
  if (Pd(t)) {
    if (((e.keyboardState.modifiers[t] = !0), t === 'AltGraph')) {
      let a =
        (o = e.keyboardMap.find((c) => c.key === 'Control')) != null
          ? o
          : { key: 'Control', code: 'Control' };
      Ie(e, r, 'keydown', zr(a));
    }
  } else
    Rd(t) &&
      ((e.keyboardState.modifierPhase[t] = e.keyboardState.modifiers[t]),
      e.keyboardState.modifierPhase[t] || (e.keyboardState.modifiers[t] = !0));
}
function Sw(e, { key: t }) {
  (Pd(t) || (Rd(t) && e.keyboardState.modifierPhase[t])) && (e.keyboardState.modifiers[t] = !1);
}
function Cw(e, { key: t }, r) {
  var o;
  if (t === 'AltGraph') {
    let a =
      (o = e.keyboardMap.find((c) => c.key === 'Control')) != null
        ? o
        : { key: 'Control', code: 'Control' };
    Ie(e, r, 'keyup', zr(a));
  }
}
function Ow(e, t) {
  return be(this, null, function* () {
    for (let r = 0; r < t.length; r++) yield Pw(e, t[r]), r < t.length - 1 && (yield cr(e));
  });
}
function Pw(e, t) {
  return be(
    this,
    arguments,
    function* (r, { keyDef: o, releasePrevious: a, releaseSelf: c, repeat: n }) {
      let { document: i, keyboardState: l } = r,
        s = () => Td(i),
        u = l.pressed.find((p) => p.keyDef === o);
      if ((u && (yield qo(o, s, r, u.unpreventedDefault)), !a)) {
        let p = !0;
        for (let d = 1; d <= n; d++)
          (p = yield Tw(o, s, r)), p && qw(o, r) && (yield Aw(o, s, r)), d < n && (yield cr(r));
        c && (yield qo(o, s, r, p));
      }
    },
  );
}
function Td(e) {
  var t;
  return (t = Bn(e)) != null ? t : e.body;
}
function Rw(e) {
  return be(this, null, function* () {
    let t = () => Td(e.document);
    for (let r of e.keyboardState.pressed) yield qo(r.keyDef, t, e, r.unpreventedDefault);
  });
}
function Tw(e, t, r) {
  return be(this, null, function* () {
    let o = t();
    o !== r.keyboardState.activeElement &&
      ((r.keyboardState.carryValue = void 0), (r.keyboardState.carryChar = '')),
      (r.keyboardState.activeElement = o),
      ww(r, e, o);
    let a = Ie(r, o, 'keydown', zr(e));
    return r.keyboardState.pressed.push({ keyDef: e, unpreventedDefault: a }), a;
  });
}
function Aw(e, t, r) {
  return be(this, null, function* () {
    let o = t();
    Ie(
      r,
      o,
      'keypress',
      je(he({}, zr(e)), { charCode: e.key === 'Enter' ? 13 : String(e.key).charCodeAt(0) }),
    );
  });
}
function qo(e, t, r, o) {
  return be(this, null, function* () {
    let a = t();
    Sw(r, e),
      Ie(r, a, 'keyup', zr(e), !o),
      (r.keyboardState.pressed = r.keyboardState.pressed.filter((c) => c.keyDef !== e)),
      Cw(r, e, a);
  });
}
function qw(e, t) {
  var r;
  return (
    (((r = e.key) == null ? void 0 : r.length) === 1 || e.key === 'Enter') &&
    !t.keyboardState.modifiers.Control &&
    !t.keyboardState.modifiers.Alt
  );
}
function xw(e, t) {
  var r;
  let o = [];
  do {
    let {
        type: a,
        descriptor: c,
        consumedLength: n,
        releasePrevious: i,
        releaseSelf: l = !0,
        repeat: s,
      } = fd(t, 'keyboard'),
      u =
        (r = e.find((p) => {
          var d, f;
          return a === '['
            ? ((d = p.code) == null ? void 0 : d.toLowerCase()) === c.toLowerCase()
            : a === '{'
              ? ((f = p.key) == null ? void 0 : f.toLowerCase()) === c.toLowerCase()
              : p.key === c;
        })) != null
          ? r
          : { key: 'Unknown', code: 'Unknown', [a === '[' ? 'code' : 'key']: c };
    o.push({ keyDef: u, releasePrevious: i, releaseSelf: l, repeat: s }), (t = t.slice(n));
  } while (t);
  return o;
}
function Mw(e) {
  return be(this, null, function* () {
    let t = xw(this[Ee].keyboardMap, e);
    return Ow(this[Ee], t);
  });
}
function jw() {
  return {
    activeElement: null,
    pressed: [],
    carryChar: '',
    modifiers: {
      Alt: !1,
      AltGraph: !1,
      Control: !1,
      CapsLock: !1,
      Fn: !1,
      FnLock: !1,
      Meta: !1,
      NumLock: !1,
      ScrollLock: !1,
      Shift: !1,
      Symbol: !1,
      SymbolLock: !1,
    },
    modifierPhase: {},
  };
}
function nl(e, t) {
  let r = [];
  do {
    let {
        descriptor: o,
        consumedLength: a,
        releasePrevious: c,
        releaseSelf: n = !0,
      } = fd(t, 'pointer'),
      i = e.find((l) => l.name === o);
    i && r.push({ keyDef: i, releasePrevious: c, releaseSelf: n }), (t = t.slice(a));
  } while (t);
  return r;
}
function Oa(
  e,
  t,
  r,
  { pointerType: o, button: a, coords: c, pointerId: n, isPrimary: i, clickCount: l },
) {
  let s = he({}, c);
  return (
    (r === 'click' || r.startsWith('pointer')) && ((s.pointerId = n), (s.pointerType = o)),
    ['pointerdown', 'pointerup'].includes(r) && (s.isPrimary = i),
    (s.button = YE(a ?? 0)),
    (s.buttons = JE(
      ...e.pointerState.pressed
        .filter((u) => u.keyDef.pointerType === o)
        .map((u) => {
          var p;
          return (p = u.keyDef.button) != null ? p : 0;
        }),
    )),
    ['mousedown', 'mouseup', 'click', 'dblclick', 'contextmenu'].includes(r) && (s.detail = l),
    Ie(e, t, r, s)
  );
}
function xo({ target: e, node: t, offset: r }) {
  return fe(e, ['input', 'textarea'])
    ? { node: e, offset: r ?? wt(e).length }
    : t
      ? { node: t, offset: r ?? (t.nodeType === 3 ? t.nodeValue.length : t.childNodes.length) }
      : Ad(e, r);
}
function Ad(e, t, r = !0) {
  let o = t === void 0 ? e.childNodes.length - 1 : 0,
    a = t === void 0 ? -1 : 1;
  for (
    ;
    t === void 0 ? o >= (r ? Math.max(e.childNodes.length - 1, 0) : 0) : o <= e.childNodes.length;

  ) {
    let c = e.childNodes.item(o),
      n = String(c.textContent);
    if (n.length)
      if (t !== void 0 && n.length < t) t -= n.length;
      else {
        if (c.nodeType === 1) return Ad(c, t, !1);
        if (c.nodeType === 3) return { node: c, offset: t ?? c.nodeValue.length };
      }
    o += a;
  }
  return { node: e, offset: e.childNodes.length };
}
function Iw(e, t) {
  return be(
    this,
    arguments,
    function* (r, { pointerName: o = 'mouse', target: a, coords: c, node: n, offset: i }) {
      let { pointerState: l } = r;
      if (!(o in l.position))
        throw new Error(`Trying to move pointer "${o}" which does not exist.`);
      let { pointerId: s, pointerType: u, target: p, coords: d, selectionRange: f } = l.position[o];
      if (
        (p && p !== a && (Nr(r, 2), Ao(r, p) && (m(p, d), Ki(a, p) || y(p, d))),
        Nr(r, 2),
        $n(r, a),
        (l.position[o] = je(he({}, l.position[o]), { target: a, coords: c })),
        p !== a && (!p || !Ki(p, a)) && g(a, c),
        m(a, c),
        f)
      ) {
        let v = xo({ target: a, node: n, offset: i });
        if ('node' in f) {
          if (v.node === f.node) {
            let S = v.offset < f.start ? f.end : f.start,
              E = v.offset > f.end || v.offset < f.start ? v.offset : f.end;
            hr(f.node, { anchorOffset: S, focusOffset: E });
          }
        } else {
          let S = f.cloneRange(),
            E = S.comparePoint(v.node, v.offset);
          E < 0 ? S.setStart(v.node, v.offset) : E > 0 && S.setEnd(v.node, v.offset);
          let C = a.ownerDocument.getSelection();
          C.removeAllRanges(), C.addRange(S.cloneRange());
        }
      }
      function m(v, S) {
        h(v, 'pointermove', S), u === 'mouse' && !ot(v) && h(v, 'mousemove', S);
      }
      function y(v, S) {
        h(v, 'pointerout', S),
          h(v, 'pointerleave', S),
          u === 'mouse' && !ot(v) && (h(v, 'mouseout', S), h(v, 'mouseleave', S));
      }
      function g(v, S) {
        h(v, 'pointerover', S),
          h(v, 'pointerenter', S),
          u === 'mouse' && !ot(v) && (h(v, 'mouseover', S), h(v, 'mouseenter', S));
      }
      function h(v, S, E) {
        return Oa(r, v, S, { coords: E, pointerId: s, pointerType: u });
      }
    },
  );
}
function Nw(e, t) {
  return be(this, null, function* () {
    let { keyDef: r, target: o, releasePrevious: a, releaseSelf: c } = t,
      n = e.pointerState.pressed.find((s) => s.keyDef === r),
      i = r.pointerType === 'touch' ? r.name : r.pointerType,
      l = ot(o);
    if ((n && ol(e, i, t, n, l), !a)) {
      let s = $w(e, i, t, l);
      c && ol(e, i, t, s, l);
    }
  });
}
function Bw(e) {
  return (e.pointerId = e.pointerId + 1), e.pointerId;
}
function $w(e, t, { keyDef: r, node: o, offset: a, target: c, coords: n }, i) {
  var l, s, u;
  Nr(e, 2), $n(e, c);
  let { pointerState: p } = e,
    { name: d, pointerType: f, button: m } = r,
    y = f === 'mouse' ? 1 : Bw(p);
  p.position[t] = je(he({}, p.position[t]), { pointerId: y, pointerType: f, target: c, coords: n });
  let g = !1,
    h = !0;
  if (f !== 'mouse')
    for (let C of p.pressed)
      C.keyDef.pointerType === f && ((C.isMultiTouch = !0), (g = !0), (h = !1));
  ((l = p.activeClickCount) == null ? void 0 : l[0]) !== d && delete p.activeClickCount;
  let v = Number((u = (s = p.activeClickCount) == null ? void 0 : s[1]) != null ? u : 0) + 1;
  p.activeClickCount = [d, v];
  let S = {
    keyDef: r,
    downTarget: c,
    pointerId: y,
    unpreventedDefault: !0,
    isMultiTouch: g,
    isPrimary: h,
    clickCount: v,
  };
  return (
    p.pressed.push(S),
    f !== 'mouse' && (E('pointerover'), E('pointerenter')),
    (f !== 'mouse' || !p.pressed.some((C) => C.keyDef !== r && C.keyDef.pointerType === f)) &&
      E('pointerdown'),
    f === 'mouse' &&
      (i || (S.unpreventedDefault = E('mousedown')),
      S.unpreventedDefault &&
        qd({
          target: c,
          targetIsDisabled: i,
          clickCount: v,
          position: p.position[t],
          node: o,
          offset: a,
        }),
      m === 'secondary' && E('contextmenu')),
    S
  );
  function E(C) {
    return Oa(e, c, C, {
      button: m,
      clickCount: v,
      coords: n,
      isPrimary: h,
      pointerId: y,
      pointerType: f,
    });
  }
}
function ol(
  e,
  t,
  { keyDef: { pointerType: r, button: o }, target: a, coords: c, node: n, offset: i },
  l,
  s,
) {
  Nr(e, 2), $n(e, a);
  let { pointerState: u } = e;
  u.pressed = u.pressed.filter((h) => h !== l);
  let { isMultiTouch: p, isPrimary: d, pointerId: f, clickCount: m } = l,
    { unpreventedDefault: y } = l;
  (u.position[t] = je(he({}, u.position[t]), { target: a, coords: c })),
    (r !== 'mouse' || !u.pressed.filter((h) => h.keyDef.pointerType === r).length) &&
      g('pointerup'),
    r !== 'mouse' && (g('pointerout'), g('pointerleave')),
    r !== 'mouse' &&
      !p &&
      (s ||
        (m === 1 && (g('mouseover'), g('mouseenter')), g('mousemove'), (y = g('mousedown') && y)),
      y &&
        qd({
          target: a,
          targetIsDisabled: s,
          clickCount: m,
          position: u.position[t],
          node: n,
          offset: i,
        })),
    delete u.position[t].selectionRange,
    s ||
      ((r === 'mouse' || !p) &&
        ((y = g('mouseup') && y),
        (r !== 'mouse' || o === 'primary') &&
          a === l.downTarget &&
          (g('click'), m === 2 && g('dblclick'))));
  function g(h) {
    return Oa(e, a, h, {
      button: o,
      clickCount: m,
      coords: c,
      isPrimary: d,
      pointerId: f,
      pointerType: r,
    });
  }
}
function qd({ position: e, target: t, targetIsDisabled: r, clickCount: o, node: a, offset: c }) {
  if (!r) {
    let n = fe(t, ['input', 'textarea']),
      i = String(n ? wt(t) : t.textContent),
      [l, s] = a ? [c, c] : Dw(i, c, o);
    if (n)
      hr(t, { anchorOffset: l ?? i.length, focusOffset: s ?? i.length }),
        (e.selectionRange = { node: t, start: l ?? 0, end: s ?? i.length });
    else {
      let { node: u, offset: p } = xo({ target: t, node: a, offset: l }),
        { node: d, offset: f } = xo({ target: t, node: a, offset: s }),
        m = t.ownerDocument.createRange();
      m.setStart(u, p), m.setEnd(d, f), (e.selectionRange = m);
      let y = t.ownerDocument.getSelection();
      y.removeAllRanges(), y.addRange(m.cloneRange());
    }
  }
  xt(t);
}
function Dw(e, t, r) {
  if (r % 3 === 1 || e.length === 0) return [t, t];
  let o = t ?? e.length;
  return r % 3 === 2
    ? [
        o - e.substr(0, t).match(/(\w+|\s+|\W)?$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^(\w+|\s+|\W)?/)[0].length,
      ]
    : [
        o - e.substr(0, t).match(/[^\r\n]*$/)[0].length,
        t === void 0 ? t : t + e.substr(t).match(/^[^\r\n]*/)[0].length,
      ];
}
function kw(e, t) {
  return be(this, null, function* () {
    var r, o;
    for (let a = 0; a < t.length; a++) {
      let c = t[a],
        n =
          'pointerName' in c && c.pointerName
            ? c.pointerName
            : 'keyDef' in c
              ? c.keyDef.pointerType === 'touch'
                ? c.keyDef.name
                : c.keyDef.pointerType
              : 'mouse',
        i = (r = c.target) != null ? r : Lw(n, e.pointerState),
        l =
          (o = c.coords) != null
            ? o
            : n in e.pointerState.position
              ? e.pointerState.position[n].coords
              : void 0;
      yield 'keyDef' in c
        ? Nw(e, je(he({}, c), { target: i, coords: l }))
        : Iw(e, je(he({}, c), { target: i, coords: l })),
        a < t.length - 1 && (yield cr(e));
    }
    delete e.pointerState.activeClickCount;
  });
}
function Lw(e, t) {
  if (!(e in t.position) || !t.position[e].target)
    throw new Error('This pointer has no previous position. Provide a target property!');
  return t.position[e].target;
}
function Fw(e) {
  return be(this, null, function* () {
    let { pointerMap: t } = this[Ee],
      r = [];
    return (
      (Array.isArray(e) ? e : [e]).forEach((o) => {
        typeof o == 'string'
          ? r.push(...nl(t, o))
          : 'keys' in o
            ? r.push(...nl(t, o.keys).map((a) => he(he({}, o), a)))
            : r.push(o);
      }),
      kw(this[Ee], r).then(() => {})
    );
  });
}
function Uw(e) {
  return {
    pointerId: 1,
    position: {
      mouse: {
        pointerType: 'mouse',
        pointerId: 1,
        target: e.body,
        coords: { clientX: 0, clientY: 0, offsetX: 0, offsetY: 0, pageX: 0, pageY: 0, x: 0, y: 0 },
      },
    },
    pressed: [],
  };
}
var Ee = Symbol('Config'),
  Mo = {};
Zc(Mo, {
  clear: () => Zw,
  click: () => Hw,
  copy: () => Yw,
  cut: () => Jw,
  dblClick: () => zw,
  deselectOptions: () => tS,
  hover: () => Ww,
  keyboard: () => Mw,
  paste: () => Xw,
  pointer: () => Fw,
  selectOptions: () => eS,
  tab: () => Kw,
  tripleClick: () => Vw,
  type: () => rS,
  unhover: () => Gw,
  upload: () => nS,
});
function Hw(e) {
  return be(this, null, function* () {
    let t = [];
    return (
      this[Ee].skipHover || t.push({ target: e }),
      t.push({ keys: '[MouseLeft]', target: e }),
      this.pointer(t)
    );
  });
}
function zw(e) {
  return be(this, null, function* () {
    return this.pointer([{ target: e }, '[MouseLeft][MouseLeft]']);
  });
}
function Vw(e) {
  return be(this, null, function* () {
    return this.pointer([{ target: e }, '[MouseLeft][MouseLeft][MouseLeft]']);
  });
}
function Ww(e) {
  return be(this, null, function* () {
    return this.pointer({ target: e });
  });
}
function Gw(e) {
  return be(this, null, function* () {
    return (
      $n(this[Ee], this[Ee].pointerState.position.mouse.target),
      this.pointer({ target: e.ownerDocument.body })
    );
  });
}
function Kw() {
  return be(this, arguments, function* ({ shift: e } = {}) {
    return this.keyboard(
      e === !0 ? '{Shift>}{Tab}{/Shift}' : e === !1 ? '[/ShiftLeft][/ShiftRight]{Tab}' : '{Tab}',
    );
  });
}
function Yw() {
  return be(this, null, function* () {
    var e;
    let t = this[Ee].document,
      r = (e = t.activeElement) != null ? e : t.body,
      o = dd(r);
    if (o.items.length !== 0)
      return (
        this.dispatchUIEvent(r, 'copy', { clipboardData: o }) &&
          this[Ee].writeToClipboard &&
          (yield nd(t, o)),
        o
      );
  });
}
function Jw() {
  return be(this, null, function* () {
    var e;
    let t = this[Ee].document,
      r = (e = t.activeElement) != null ? e : t.body,
      o = dd(r);
    if (o.items.length !== 0)
      return (
        this.dispatchUIEvent(r, 'cut', { clipboardData: o }) &&
          this[Ee].writeToClipboard &&
          (yield nd(r.ownerDocument, o)),
        o
      );
  });
}
function Xw(e) {
  return be(this, null, function* () {
    var t, r;
    let o = this[Ee].document,
      a = (t = o.activeElement) != null ? t : o.body,
      c =
        (r = typeof e == 'string' ? Qw(o, e) : e) != null
          ? r
          : yield dE(o).catch(() => {
              throw new Error(
                '`userEvent.paste()` without `clipboardData` requires the `ClipboardAPI` to be available.',
              );
            });
    this.dispatchUIEvent(a, 'paste', { clipboardData: c });
  });
}
function Qw(e, t) {
  let r = va(Et(e));
  return r.setData('text', t), r;
}
function Zw(e) {
  return be(this, null, function* () {
    if (!ur(e) || ot(e)) throw new Error('clear()` is only supported on editable elements.');
    if ((xt(e), e.ownerDocument.activeElement !== e))
      throw new Error('The element to be cleared could not be focused.');
    if ((pd(e), !NE(e)))
      throw new Error('The element content to be cleared could not be selected.');
    sr(this[Ee], e, '', 'deleteContentBackward');
  });
}
function eS(e, t) {
  return be(this, null, function* () {
    return xd.call(this, !0, e, t);
  });
}
function tS(e, t) {
  return be(this, null, function* () {
    return xd.call(this, !1, e, t);
  });
}
function xd(e, t, r) {
  return be(this, null, function* () {
    if (!e && !t.multiple)
      throw ge().getElementError(
        'Unable to deselect an option in a non-multiple select. Use selectOptions to change the selection instead.',
        t,
      );
    let o = Array.isArray(r) ? r : [r],
      a = Array.from(t.querySelectorAll('option, [role="option"]')),
      c = o
        .map((i) => {
          if (typeof i != 'string' && a.includes(i)) return i;
          {
            let l = a.find((s) => s.value === i || s.innerHTML === i);
            if (l) return l;
            throw ge().getElementError(`Value "${String(i)}" not found in options`, t);
          }
        })
        .filter((i) => !ot(i));
    if (ot(t) || !c.length) return;
    let n = (i) => {
      (i.selected = e),
        this.dispatchUIEvent(t, 'input', { bubbles: !0, cancelable: !1, composed: !0 }),
        this.dispatchUIEvent(t, 'change');
    };
    if (fe(t, 'select'))
      if (t.multiple)
        for (let i of c) {
          let l = this[Ee].pointerEventsCheck === 0 ? !0 : Ao(this[Ee], i);
          l &&
            (this.dispatchUIEvent(i, 'pointerover'),
            this.dispatchUIEvent(t, 'pointerenter'),
            this.dispatchUIEvent(i, 'mouseover'),
            this.dispatchUIEvent(t, 'mouseenter'),
            this.dispatchUIEvent(i, 'pointermove'),
            this.dispatchUIEvent(i, 'mousemove'),
            this.dispatchUIEvent(i, 'pointerdown'),
            this.dispatchUIEvent(i, 'mousedown')),
            xt(t),
            l && (this.dispatchUIEvent(i, 'pointerup'), this.dispatchUIEvent(i, 'mouseup')),
            n(i),
            l && this.dispatchUIEvent(i, 'click'),
            yield cr(this[Ee]);
        }
      else if (c.length === 1) {
        let i = this[Ee].pointerEventsCheck === 0 ? !0 : Ao(this[Ee], t);
        i ? yield this.click(t) : xt(t),
          n(c[0]),
          i &&
            (this.dispatchUIEvent(t, 'pointerover'),
            this.dispatchUIEvent(t, 'pointerenter'),
            this.dispatchUIEvent(t, 'mouseover'),
            this.dispatchUIEvent(t, 'mouseenter'),
            this.dispatchUIEvent(t, 'pointerup'),
            this.dispatchUIEvent(t, 'mouseup'),
            this.dispatchUIEvent(t, 'click')),
          yield cr(this[Ee]);
      } else
        throw ge().getElementError('Cannot select multiple options on a non-multiple select', t);
    else if (t.getAttribute('role') === 'listbox')
      for (let i of c) yield this.click(i), yield this.unhover(i);
    else
      throw ge().getElementError(
        'Cannot select options on elements that are neither select nor listbox elements',
        t,
      );
  });
}
function rS(e, t) {
  return be(
    this,
    arguments,
    function* (
      r,
      o,
      {
        skipClick: a = this[Ee].skipClick,
        skipAutoClose: c = this[Ee].skipAutoClose,
        initialSelectionStart: n,
        initialSelectionEnd: i,
      } = {},
    ) {
      r.disabled ||
        (a || (yield this.click(r)),
        n !== void 0 && wr(r, n, i ?? n),
        yield this.keyboard(o),
        c || (yield Rw(this[Ee])));
    },
  );
}
function nS(e, t) {
  return be(this, null, function* () {
    let r = fe(e, 'label') ? e.control : e;
    if (!r || !fe(r, 'input', { type: 'file' }))
      throw new TypeError(
        `The ${r === e ? 'given' : 'associated'} ${
          r == null ? void 0 : r.tagName
        } element does not accept file uploads`,
      );
    if (ot(e)) return;
    let o = (Array.isArray(t) ? t : [t])
        .filter((c) => !this[Ee].applyAccept || oS(c, r.accept))
        .slice(0, r.multiple ? void 0 : 1),
      a = () => {
        var c;
        (o.length === ((c = r.files) == null ? void 0 : c.length) &&
          o.every((n, i) => {
            var l;
            return n === ((l = r.files) == null ? void 0 : l.item(i));
          })) ||
          (wE(r, ga(Et(e), o)),
          this.dispatchUIEvent(r, 'input'),
          this.dispatchUIEvent(r, 'change'));
      };
    r.addEventListener('fileDialog', a),
      yield this.click(e),
      r.removeEventListener('fileDialog', a);
  });
}
function oS(e, t) {
  if (!t) return !0;
  let r = ['audio/*', 'image/*', 'video/*'];
  return t
    .split(',')
    .some((o) =>
      o.startsWith('.')
        ? e.name.endsWith(o)
        : r.includes(o)
          ? e.type.startsWith(o.substr(0, o.length - 1))
          : e.type === o,
    );
}
function aS(e) {
  return ge().asyncWrapper(e);
}
function Md(e = {}, t = VE, r) {
  let o = uS(e, r, t),
    { keyboardState: a = jw(), pointerState: c = Uw(o) } = e;
  return je(he(he({}, t), e), { document: o, keyboardState: a, pointerState: c });
}
function iS(e = {}) {
  var t;
  let r = Md(e);
  Od(r.document);
  let o = (t = r.document.defaultView) != null ? t : globalThis.window;
  return sE(o), Pa(r);
}
function $e(e = {}, t) {
  let r = Md(e, hd, t);
  return Od(r.document), { config: r, api: Pa(r) };
}
function lS(e) {
  return Pa(he(he({}, this[Ee]), e));
}
function sS(e, t) {
  function r(...o) {
    return (
      Nr(e[Ee], 1),
      aS(() =>
        t.apply(e, o).then((a) =>
          be(this, null, function* () {
            return yield cr(e[Ee]), a;
          }),
        ),
      )
    );
  }
  return Object.defineProperty(r, 'name', { get: () => t.name }), r;
}
function Pa(e) {
  let t = he({ [Ee]: e, dispatchUIEvent: iw(e) }, Mo);
  return je(he({}, Object.fromEntries(Object.entries(Mo).map(([r, o]) => [r, sS(t, o)]))), {
    setup: lS.bind(t),
  });
}
function uS(e, t, r) {
  var o, a;
  return (a = (o = e.document) != null ? o : t && FE(t)) != null ? a : r.document;
}
var jd = {};
Zc(jd, {
  clear: () => cS,
  click: () => dS,
  copy: () => pS,
  cut: () => fS,
  dblClick: () => mS,
  deselectOptions: () => yS,
  hover: () => hS,
  keyboard: () => bS,
  paste: () => vS,
  pointer: () => gS,
  selectOptions: () => _S,
  tab: () => OS,
  tripleClick: () => ES,
  type: () => wS,
  unhover: () => SS,
  upload: () => CS,
});
function cS(e) {
  return $e().api.clear(e);
}
function dS(e, t = {}) {
  return $e(t, e).api.click(e);
}
function pS(e = {}) {
  return $e(e).api.copy();
}
function fS(e = {}) {
  return $e(e).api.cut();
}
function mS(e, t = {}) {
  return $e(t).api.dblClick(e);
}
function yS(e, t, r = {}) {
  return $e(r).api.deselectOptions(e, t);
}
function hS(e, t = {}) {
  return $e(t).api.hover(e);
}
function bS(e) {
  return be(this, arguments, function* (t, r = {}) {
    let { config: o, api: a } = $e(r);
    return a.keyboard(t).then(() => o.keyboardState);
  });
}
function gS(e) {
  return be(this, arguments, function* (t, r = {}) {
    let { config: o, api: a } = $e(r);
    return a.pointer(t).then(() => o.pointerState);
  });
}
function vS(e, t) {
  return $e(t).api.paste(e);
}
function _S(e, t, r = {}) {
  return $e(r).api.selectOptions(e, t);
}
function ES(e, t = {}) {
  return $e(t).api.tripleClick(e);
}
function wS(e, t, r = {}) {
  return $e(r, e).api.type(e, t, r);
}
function SS(e, t = {}) {
  let { config: r, api: o } = $e(t);
  return (r.pointerState.position.mouse.target = e), o.unhover(e);
}
function CS(e, t, r = {}) {
  return $e(r).api.upload(e, t);
}
function OS(e = {}) {
  return $e().api.tab(e);
}
var PS = je(he({}, jd), { setup: iS });
function RS(e) {
  for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
  var o = Array.from(typeof e == 'string' ? [e] : e);
  o[o.length - 1] = o[o.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var a = o.reduce(function (i, l) {
    var s = l.match(/\n([\t ]+|(?!\s).)/g);
    return s
      ? i.concat(
          s.map(function (u) {
            var p, d;
            return (d = (p = u.match(/[\t ]/g)) === null || p === void 0 ? void 0 : p.length) !==
              null && d !== void 0
              ? d
              : 0;
          }),
        )
      : i;
  }, []);
  if (a.length) {
    var c = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, a) +
        '}',
      'g',
    );
    o = o.map(function (i) {
      return i.replace(
        c,
        `
`,
      );
    });
  }
  o[0] = o[0].replace(/^\r?\n/, '');
  var n = o[0];
  return (
    t.forEach(function (i, l) {
      var s = n.match(/(?:^|\n)( *)$/),
        u = s ? s[1] : '',
        p = i;
      typeof i == 'string' &&
        i.includes(`
`) &&
        (p = String(i)
          .split(
            `
`,
          )
          .map(function (d, f) {
            return f === 0 ? d : '' + u + d;
          }).join(`
`)),
        (n += p + o[l + 1]);
    }),
    n
  );
}
var TS = RS,
  jo = ko(
    { ...Iu },
    {
      intercept: (e, t) => t[0] === 'fireEvent' || e.startsWith('find') || e.startsWith('waitFor'),
    },
  );
jo.screen = new Proxy(jo.screen, {
  get(e, t, r) {
    return (
      ef.warn(TS`
          You are using Testing Library's \`screen\` object. Use \`within(canvasElement)\` instead.
          More info: https://storybook.js.org/docs/react/essentials/interactions
        `),
      Reflect.get(e, t, r)
    );
  },
});
var {
    buildQueries: LS,
    configure: FS,
    createEvent: US,
    fireEvent: HS,
    findAllByAltText: zS,
    findAllByDisplayValue: VS,
    findAllByLabelText: WS,
    findAllByPlaceholderText: GS,
    findAllByRole: KS,
    findAllByTestId: YS,
    findAllByText: JS,
    findAllByTitle: XS,
    findByAltText: QS,
    findByDisplayValue: ZS,
    findByLabelText: eC,
    findByPlaceholderText: tC,
    findByRole: rC,
    findByTestId: nC,
    findByText: oC,
    findByTitle: aC,
    getAllByAltText: iC,
    getAllByDisplayValue: lC,
    getAllByLabelText: sC,
    getAllByPlaceholderText: uC,
    getAllByRole: cC,
    getAllByTestId: dC,
    getAllByText: pC,
    getAllByTitle: fC,
    getByAltText: mC,
    getByDisplayValue: yC,
    getByLabelText: hC,
    getByPlaceholderText: bC,
    getByRole: gC,
    getByTestId: vC,
    getByText: _C,
    getByTitle: EC,
    getConfig: wC,
    getDefaultNormalizer: SC,
    getElementError: CC,
    getNodeText: OC,
    getQueriesForElement: PC,
    getRoles: RC,
    getSuggestedQuery: TC,
    isInaccessible: AC,
    logDOM: qC,
    logRoles: xC,
    prettyDOM: MC,
    queries: jC,
    queryAllByAltText: IC,
    queryAllByAttribute: NC,
    queryAllByDisplayValue: BC,
    queryAllByLabelText: $C,
    queryAllByPlaceholderText: DC,
    queryAllByRole: kC,
    queryAllByTestId: LC,
    queryAllByText: FC,
    queryAllByTitle: UC,
    queryByAltText: HC,
    queryByAttribute: zC,
    queryByDisplayValue: VC,
    queryByLabelText: WC,
    queryByPlaceholderText: GC,
    queryByRole: KC,
    queryByTestId: YC,
    queryByText: JC,
    queryByTitle: XC,
    queryHelpers: QC,
    screen: ZC,
    waitFor: eO,
    waitForElementToBeRemoved: tO,
    within: AS,
    prettyFormat: rO,
  } = jo,
  { userEvent: qS } = ko({ userEvent: PS }, { intercept: !0 }),
  { expect: Jn } = ko(
    { expect: ju },
    {
      getKeys: (e, t) => {
        let r = ['assert', '__methods', '__flags', '_obj'];
        if (e.constructor === Kg.Assertion) {
          let o = Object.keys(Object.getPrototypeOf(e)).filter((a) => !r.includes(a));
          return t > 2 ? o : [...o, 'not'];
        }
        return Object.keys(e);
      },
      intercept: (e) => e !== 'expect',
    },
  ),
  xS = ({ parameters: e }) => {
    var t, r, o;
    ((t = e == null ? void 0 : e.test) == null ? void 0 : t.mockReset) === !0
      ? j1()
      : ((r = e == null ? void 0 : e.test) == null ? void 0 : r.clearMocks) === !0
        ? M1()
        : ((o = e == null ? void 0 : e.test) == null ? void 0 : o.restoreMocks) !== !1 && I1();
  };
Yg.__STORYBOOK_TEST_LOADERS__ = [xS];
const Id = () => {
  const [e, t] = kd.useState();
  return xe.jsxs('article', {
    children: [
      xe.jsx(Ld, {
        user: e,
        onLogin: () => t({ name: 'Jane Doe' }),
        onLogout: () => t(void 0),
        onCreateAccount: () => t({ name: 'Jane Doe' }),
      }),
      xe.jsxs('section', {
        className: 'storybook-page',
        children: [
          xe.jsx('h2', { children: 'Pages in Storybook' }),
          xe.jsxs('p', {
            children: [
              'We recommend building UIs with a',
              ' ',
              xe.jsx('a', {
                href: 'https://componentdriven.org',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: xe.jsx('strong', { children: 'component-driven' }),
              }),
              ' ',
              'process starting with atomic components and ending with pages.',
            ],
          }),
          xe.jsx('p', {
            children:
              'Render pages with mock data. This makes it easy to build and review page states without needing to navigate to them in your app. Here are some handy patterns for managing page data in Storybook:',
          }),
          xe.jsxs('ul', {
            children: [
              xe.jsx('li', {
                children:
                  'Use a higher-level connected component. Storybook helps you compose such data from the "args" of child component stories',
              }),
              xe.jsx('li', {
                children:
                  'Assemble data in the page component from your services. You can mock these services out using Storybook.',
              }),
            ],
          }),
          xe.jsxs('p', {
            children: [
              'Get a guided tutorial on component-driven development at',
              ' ',
              xe.jsx('a', {
                href: 'https://storybook.js.org/tutorials/',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'Storybook tutorials',
              }),
              '. Read more in the',
              ' ',
              xe.jsx('a', {
                href: 'https://storybook.js.org/docs',
                target: '_blank',
                rel: 'noopener noreferrer',
                children: 'docs',
              }),
              '.',
            ],
          }),
          xe.jsxs('div', {
            className: 'tip-wrapper',
            children: [
              xe.jsx('span', { className: 'tip', children: 'Tip' }),
              ' Adjust the width of the canvas with the',
              ' ',
              xe.jsx('svg', {
                width: '10',
                height: '10',
                viewBox: '0 0 12 12',
                xmlns: 'http://www.w3.org/2000/svg',
                children: xe.jsx('g', {
                  fill: 'none',
                  fillRule: 'evenodd',
                  children: xe.jsx('path', {
                    d: 'M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z',
                    id: 'a',
                    fill: '#999',
                  }),
                }),
              }),
              'Viewports addon in the toolbar',
            ],
          }),
        ],
      }),
    ],
  });
};
Id.__docgenInfo = { description: '', methods: [], displayName: 'Page' };
const nO = { title: 'Example/Page', component: Id, parameters: { layout: 'fullscreen' } },
  Xr = {},
  Qr = {
    play: async ({ canvasElement: e }) => {
      const t = AS(e),
        r = t.getByRole('button', { name: /Log in/i });
      await Jn(r).toBeInTheDocument(), await qS.click(r), await Jn(r).not.toBeInTheDocument();
      const o = t.getByRole('button', { name: /Log out/i });
      await Jn(o).toBeInTheDocument();
    },
  };
var al, il, ll;
Xr.parameters = {
  ...Xr.parameters,
  docs: {
    ...((al = Xr.parameters) == null ? void 0 : al.docs),
    source: {
      originalSource: '{}',
      ...((ll = (il = Xr.parameters) == null ? void 0 : il.docs) == null ? void 0 : ll.source),
    },
  },
};
var sl, ul, cl;
Qr.parameters = {
  ...Qr.parameters,
  docs: {
    ...((sl = Qr.parameters) == null ? void 0 : sl.docs),
    source: {
      originalSource: `{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const loginButton = canvas.getByRole('button', {
      name: /Log in/i
    });
    await expect(loginButton).toBeInTheDocument();
    await userEvent.click(loginButton);
    await expect(loginButton).not.toBeInTheDocument();
    const logoutButton = canvas.getByRole('button', {
      name: /Log out/i
    });
    await expect(logoutButton).toBeInTheDocument();
  }
}`,
      ...((cl = (ul = Qr.parameters) == null ? void 0 : ul.docs) == null ? void 0 : cl.source),
    },
  },
};
const oO = ['LoggedOut', 'LoggedIn'];
export { Qr as LoggedIn, Xr as LoggedOut, oO as __namedExportsOrder, nO as default };

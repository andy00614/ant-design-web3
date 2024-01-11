import { r as a, a as De, R as T } from './index-f1f749bf.js';
import { j as A } from './jsx-runtime-ccada58e.js';

var nt = Object.defineProperty,
  rt = (e, t, n) =>
    t in e ? nt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : (e[t] = n),
  xe = (e, t, n) => (rt(e, typeof t != 'symbol' ? t + '' : t, n), n);
let ot = class {
    constructor() {
      xe(this, 'current', this.detect()),
        xe(this, 'handoffState', 'pending'),
        xe(this, 'currentId', 0);
    }
    set(t) {
      this.current !== t &&
        ((this.handoffState = 'pending'), (this.currentId = 0), (this.current = t));
    }
    reset() {
      this.set(this.detect());
    }
    nextId() {
      return ++this.currentId;
    }
    get isServer() {
      return this.current === 'server';
    }
    get isClient() {
      return this.current === 'client';
    }
    detect() {
      return typeof window > 'u' || typeof document > 'u' ? 'server' : 'client';
    }
    handoff() {
      this.handoffState === 'pending' && (this.handoffState = 'complete');
    }
    get isHandoffComplete() {
      return this.handoffState === 'complete';
    }
  },
  _ = new ot(),
  C = (e, t) => {
    _.isServer ? a.useEffect(e, t) : a.useLayoutEffect(e, t);
  };
function j(e) {
  let t = a.useRef(e);
  return (
    C(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function _e(e, t) {
  let [n, r] = a.useState(e),
    o = j(e);
  return C(() => r(o.current), [o, r, ...t]), n;
}
let h = function (e) {
  let t = j(e);
  return T.useCallback((...n) => t.current(...n), [t]);
};
function it(e, t, n) {
  let [r, o] = a.useState(n),
    i = e !== void 0,
    l = a.useRef(i),
    u = a.useRef(!1),
    s = a.useRef(!1);
  return (
    i && !l.current && !u.current
      ? ((u.current = !0),
        (l.current = i),
        console.error(
          'A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.',
        ))
      : !i &&
        l.current &&
        !s.current &&
        ((s.current = !0),
        (l.current = i),
        console.error(
          'A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.',
        )),
    [i ? e : r, h((c) => (i || o(c), t == null ? void 0 : t(c)))]
  );
}
function lt(e) {
  typeof queueMicrotask == 'function'
    ? queueMicrotask(e)
    : Promise.resolve()
        .then(e)
        .catch((t) =>
          setTimeout(() => {
            throw t;
          }),
        );
}
function q() {
  let e = [],
    t = {
      addEventListener(n, r, o, i) {
        return n.addEventListener(r, o, i), t.add(() => n.removeEventListener(r, o, i));
      },
      requestAnimationFrame(...n) {
        let r = requestAnimationFrame(...n);
        return t.add(() => cancelAnimationFrame(r));
      },
      nextFrame(...n) {
        return t.requestAnimationFrame(() => t.requestAnimationFrame(...n));
      },
      setTimeout(...n) {
        let r = setTimeout(...n);
        return t.add(() => clearTimeout(r));
      },
      microTask(...n) {
        let r = { current: !0 };
        return (
          lt(() => {
            r.current && n[0]();
          }),
          t.add(() => {
            r.current = !1;
          })
        );
      },
      style(n, r, o) {
        let i = n.style.getPropertyValue(r);
        return (
          Object.assign(n.style, { [r]: o }),
          this.add(() => {
            Object.assign(n.style, { [r]: i });
          })
        );
      },
      group(n) {
        let r = q();
        return n(r), this.add(() => r.dispose());
      },
      add(n) {
        return (
          e.push(n),
          () => {
            let r = e.indexOf(n);
            if (r >= 0) for (let o of e.splice(r, 1)) o();
          }
        );
      },
      dispose() {
        for (let n of e.splice(0)) n();
      },
    };
  return t;
}
function X() {
  let [e] = a.useState(q);
  return a.useEffect(() => () => e.dispose(), [e]), e;
}
function at() {
  let e = typeof document > 'u';
  return 'useSyncExternalStore' in De
    ? ((t) => t.useSyncExternalStore)(De)(
        () => () => {},
        () => !1,
        () => !e,
      )
    : !1;
}
function Le() {
  let e = at(),
    [t, n] = a.useState(_.isHandoffComplete);
  return (
    t && _.isHandoffComplete === !1 && n(!1),
    a.useEffect(() => {
      t !== !0 && n(!0);
    }, [t]),
    a.useEffect(() => _.handoff(), []),
    e ? !1 : t
  );
}
var Ae;
let ce =
  (Ae = T.useId) != null
    ? Ae
    : function () {
        let e = Le(),
          [t, n] = T.useState(e ? () => _.nextId() : null);
        return (
          C(() => {
            t === null && n(_.nextId());
          }, [t]),
          t != null ? '' + t : void 0
        );
      };
function F(e, t, ...n) {
  if (e in t) {
    let o = t[e];
    return typeof o == 'function' ? o(...n) : o;
  }
  let r = new Error(
    `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
      t,
    )
      .map((o) => `"${o}"`)
      .join(', ')}.`,
  );
  throw (Error.captureStackTrace && Error.captureStackTrace(r, F), r);
}
function Qe(e) {
  return _.isServer
    ? null
    : e instanceof Node
      ? e.ownerDocument
      : e != null && e.hasOwnProperty('current') && e.current instanceof Node
        ? e.current.ownerDocument
        : document;
}
let ke = [
  '[contentEditable=true]',
  '[tabindex]',
  'a[href]',
  'area[href]',
  'button:not([disabled])',
  'iframe',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
]
  .map((e) => `${e}:not([tabindex='-1'])`)
  .join(',');
var ut = ((e) => (
    (e[(e.First = 1)] = 'First'),
    (e[(e.Previous = 2)] = 'Previous'),
    (e[(e.Next = 4)] = 'Next'),
    (e[(e.Last = 8)] = 'Last'),
    (e[(e.WrapAround = 16)] = 'WrapAround'),
    (e[(e.NoScroll = 32)] = 'NoScroll'),
    e
  ))(ut || {}),
  st = ((e) => (
    (e[(e.Error = 0)] = 'Error'),
    (e[(e.Overflow = 1)] = 'Overflow'),
    (e[(e.Success = 2)] = 'Success'),
    (e[(e.Underflow = 3)] = 'Underflow'),
    e
  ))(st || {}),
  ct = ((e) => ((e[(e.Previous = -1)] = 'Previous'), (e[(e.Next = 1)] = 'Next'), e))(ct || {}),
  Te = ((e) => ((e[(e.Strict = 0)] = 'Strict'), (e[(e.Loose = 1)] = 'Loose'), e))(Te || {});
function Ke(e, t = 0) {
  var n;
  return e === ((n = Qe(e)) == null ? void 0 : n.body)
    ? !1
    : F(t, {
        [0]() {
          return e.matches(ke);
        },
        [1]() {
          let r = e;
          for (; r !== null; ) {
            if (r.matches(ke)) return !0;
            r = r.parentElement;
          }
          return !1;
        },
      });
}
var dt = ((e) => ((e[(e.Keyboard = 0)] = 'Keyboard'), (e[(e.Mouse = 1)] = 'Mouse'), e))(dt || {});
typeof window < 'u' &&
  typeof document < 'u' &&
  (document.addEventListener(
    'keydown',
    (e) => {
      e.metaKey ||
        e.altKey ||
        e.ctrlKey ||
        (document.documentElement.dataset.headlessuiFocusVisible = '');
    },
    !0,
  ),
  document.addEventListener(
    'click',
    (e) => {
      e.detail === 1
        ? delete document.documentElement.dataset.headlessuiFocusVisible
        : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = '');
    },
    !0,
  ));
function ft(e, t = (n) => n) {
  return e.slice().sort((n, r) => {
    let o = t(n),
      i = t(r);
    if (o === null || i === null) return 0;
    let l = o.compareDocumentPosition(i);
    return l & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : l & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function pt() {
  return (
    /iPhone/gi.test(window.navigator.platform) ||
    (/Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0)
  );
}
function vt() {
  return /Android/gi.test(window.navigator.userAgent);
}
function mt() {
  return pt() || vt();
}
function ie(e, t, n) {
  let r = j(t);
  a.useEffect(() => {
    function o(i) {
      r.current(i);
    }
    return document.addEventListener(e, o, n), () => document.removeEventListener(e, o, n);
  }, [e, n]);
}
function bt(e, t, n) {
  let r = j(t);
  a.useEffect(() => {
    function o(i) {
      r.current(i);
    }
    return window.addEventListener(e, o, n), () => window.removeEventListener(e, o, n);
  }, [e, n]);
}
function gt(e, t, n = !0) {
  let r = a.useRef(!1);
  a.useEffect(() => {
    requestAnimationFrame(() => {
      r.current = n;
    });
  }, [n]);
  function o(l, u) {
    if (!r.current || l.defaultPrevented) return;
    let s = u(l);
    if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
    let c = (function d(m) {
      return typeof m == 'function' ? d(m()) : Array.isArray(m) || m instanceof Set ? m : [m];
    })(e);
    for (let d of c) {
      if (d === null) continue;
      let m = d instanceof HTMLElement ? d : d.current;
      if ((m != null && m.contains(s)) || (l.composed && l.composedPath().includes(m))) return;
    }
    return !Ke(s, Te.Loose) && s.tabIndex !== -1 && l.preventDefault(), t(l, s);
  }
  let i = a.useRef(null);
  ie(
    'pointerdown',
    (l) => {
      var u, s;
      r.current &&
        (i.current =
          ((s = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : s[0]) ||
          l.target);
    },
    !0,
  ),
    ie(
      'mousedown',
      (l) => {
        var u, s;
        r.current &&
          (i.current =
            ((s = (u = l.composedPath) == null ? void 0 : u.call(l)) == null ? void 0 : s[0]) ||
            l.target);
      },
      !0,
    ),
    ie(
      'click',
      (l) => {
        mt() || (i.current && (o(l, () => i.current), (i.current = null)));
      },
      !0,
    ),
    ie('touchend', (l) => o(l, () => (l.target instanceof HTMLElement ? l.target : null)), !0),
    bt(
      'blur',
      (l) =>
        o(l, () =>
          window.document.activeElement instanceof HTMLIFrameElement
            ? window.document.activeElement
            : null,
        ),
      !0,
    );
}
function je(e) {
  var t;
  if (e.type) return e.type;
  let n = (t = e.as) != null ? t : 'button';
  if (typeof n == 'string' && n.toLowerCase() === 'button') return 'button';
}
function ht(e, t) {
  let [n, r] = a.useState(() => je(e));
  return (
    C(() => {
      r(je(e));
    }, [e.type, e.as]),
    C(() => {
      n ||
        (t.current &&
          t.current instanceof HTMLButtonElement &&
          !t.current.hasAttribute('type') &&
          r('button'));
    }, [n, t]),
    n
  );
}
let xt = Symbol();
function Q(...e) {
  let t = a.useRef(e);
  a.useEffect(() => {
    t.current = e;
  }, [e]);
  let n = h((r) => {
    for (let o of t.current) o != null && (typeof o == 'function' ? o(r) : (o.current = r));
  });
  return e.every((r) => r == null || (r == null ? void 0 : r[xt])) ? void 0 : n;
}
function Me(e) {
  return [e.screenX, e.screenY];
}
function yt() {
  let e = a.useRef([-1, -1]);
  return {
    wasMoved(t) {
      let n = Me(t);
      return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : ((e.current = n), !0);
    },
    update(t) {
      e.current = Me(t);
    },
  };
}
function ue(...e) {
  return Array.from(new Set(e.flatMap((t) => (typeof t == 'string' ? t.split(' ') : []))))
    .filter(Boolean)
    .join(' ');
}
var se = ((e) => (
    (e[(e.None = 0)] = 'None'),
    (e[(e.RenderStrategy = 1)] = 'RenderStrategy'),
    (e[(e.Static = 2)] = 'Static'),
    e
  ))(se || {}),
  B = ((e) => ((e[(e.Unmount = 0)] = 'Unmount'), (e[(e.Hidden = 1)] = 'Hidden'), e))(B || {});
function V({
  ourProps: e,
  theirProps: t,
  slot: n,
  defaultTag: r,
  features: o,
  visible: i = !0,
  name: l,
  mergeRefs: u,
}) {
  u = u ?? wt;
  let s = We(t, e);
  if (i) return le(s, n, r, l, u);
  let c = o ?? 0;
  if (c & 2) {
    let { static: d = !1, ...m } = s;
    if (d) return le(m, n, r, l, u);
  }
  if (c & 1) {
    let { unmount: d = !0, ...m } = s;
    return F(d ? 0 : 1, {
      [0]() {
        return null;
      },
      [1]() {
        return le({ ...m, hidden: !0, style: { display: 'none' } }, n, r, l, u);
      },
    });
  }
  return le(s, n, r, l, u);
}
function le(e, t = {}, n, r, o) {
  let { as: i = n, children: l, refName: u = 'ref', ...s } = ye(e, ['unmount', 'static']),
    c = e.ref !== void 0 ? { [u]: e.ref } : {},
    d = typeof l == 'function' ? l(t) : l;
  'className' in s &&
    s.className &&
    typeof s.className == 'function' &&
    (s.className = s.className(t));
  let m = {};
  if (t) {
    let y = !1,
      x = [];
    for (let [v, b] of Object.entries(t)) typeof b == 'boolean' && (y = !0), b === !0 && x.push(v);
    y && (m['data-headlessui-state'] = x.join(' '));
  }
  if (i === a.Fragment && Object.keys(Oe(s)).length > 0) {
    if (!a.isValidElement(d) || (Array.isArray(d) && d.length > 1))
      throw new Error(
        [
          'Passing props on "Fragment"!',
          '',
          `The current component <${r} /> is rendering a "Fragment".`,
          'However we need to passthrough the following props:',
          Object.keys(s).map((b) => `  - ${b}`).join(`
`),
          '',
          'You can apply a few solutions:',
          [
            'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
            'Render a single element as the child so that we can forward the props onto that element.',
          ].map((b) => `  - ${b}`).join(`
`),
        ].join(`
`),
      );
    let y = d.props,
      x =
        typeof (y == null ? void 0 : y.className) == 'function'
          ? (...b) => ue(y == null ? void 0 : y.className(...b), s.className)
          : ue(y == null ? void 0 : y.className, s.className),
      v = x ? { className: x } : {};
    return a.cloneElement(
      d,
      Object.assign({}, We(d.props, Oe(ye(s, ['ref']))), m, c, { ref: o(d.ref, c.ref) }, v),
    );
  }
  return a.createElement(
    i,
    Object.assign({}, ye(s, ['ref']), i !== a.Fragment && c, i !== a.Fragment && m),
    d,
  );
}
function wt(...e) {
  return e.every((t) => t == null)
    ? void 0
    : (t) => {
        for (let n of e) n != null && (typeof n == 'function' ? n(t) : (n.current = t));
      };
}
function We(...e) {
  if (e.length === 0) return {};
  if (e.length === 1) return e[0];
  let t = {},
    n = {};
  for (let r of e)
    for (let o in r)
      o.startsWith('on') && typeof r[o] == 'function'
        ? (n[o] != null || (n[o] = []), n[o].push(r[o]))
        : (t[o] = r[o]);
  if (t.disabled || t['aria-disabled'])
    return Object.assign(t, Object.fromEntries(Object.keys(n).map((r) => [r, void 0])));
  for (let r in n)
    Object.assign(t, {
      [r](o, ...i) {
        let l = n[r];
        for (let u of l) {
          if (
            (o instanceof Event || (o == null ? void 0 : o.nativeEvent) instanceof Event) &&
            o.defaultPrevented
          )
            return;
          u(o, ...i);
        }
      },
    });
  return t;
}
function H(e) {
  var t;
  return Object.assign(a.forwardRef(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Oe(e) {
  let t = Object.assign({}, e);
  for (let n in t) t[n] === void 0 && delete t[n];
  return t;
}
function ye(e, t = []) {
  let n = Object.assign({}, e);
  for (let r of t) r in n && delete n[r];
  return n;
}
let St = 'div';
var ze = ((e) => (
  (e[(e.None = 1)] = 'None'),
  (e[(e.Focusable = 2)] = 'Focusable'),
  (e[(e.Hidden = 4)] = 'Hidden'),
  e
))(ze || {});
function Et(e, t) {
  var n;
  let { features: r = 1, ...o } = e,
    i = {
      ref: t,
      'aria-hidden': (r & 2) === 2 ? !0 : (n = o['aria-hidden']) != null ? n : void 0,
      style: {
        position: 'fixed',
        top: 1,
        left: 1,
        width: 1,
        height: 0,
        padding: 0,
        margin: -1,
        overflow: 'hidden',
        clip: 'rect(0, 0, 0, 0)',
        whiteSpace: 'nowrap',
        borderWidth: '0',
        ...((r & 4) === 4 && (r & 2) !== 2 && { display: 'none' }),
      },
    };
  return V({ ourProps: i, theirProps: o, slot: {}, defaultTag: St, name: 'Hidden' });
}
let Ot = H(Et),
  Fe = a.createContext(null);
Fe.displayName = 'OpenClosedContext';
var $ = ((e) => (
  (e[(e.Open = 1)] = 'Open'),
  (e[(e.Closed = 2)] = 'Closed'),
  (e[(e.Closing = 4)] = 'Closing'),
  (e[(e.Opening = 8)] = 'Opening'),
  e
))($ || {});
function Pe() {
  return a.useContext(Fe);
}
function Ge({ value: e, children: t }) {
  return T.createElement(Fe.Provider, { value: e }, t);
}
function Rt(e) {
  let t = e.parentElement,
    n = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (n = t), (t = t.parentElement);
  let r = (t == null ? void 0 : t.getAttribute('disabled')) === '';
  return r && Lt(n) ? !1 : r;
}
function Lt(e) {
  if (!e) return !1;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement) return !1;
    t = t.previousElementSibling;
  }
  return !0;
}
function Tt(e) {
  throw new Error('Unexpected object: ' + e);
}
var N = ((e) => (
  (e[(e.First = 0)] = 'First'),
  (e[(e.Previous = 1)] = 'Previous'),
  (e[(e.Next = 2)] = 'Next'),
  (e[(e.Last = 3)] = 'Last'),
  (e[(e.Specific = 4)] = 'Specific'),
  (e[(e.Nothing = 5)] = 'Nothing'),
  e
))(N || {});
function Ft(e, t) {
  let n = t.resolveItems();
  if (n.length <= 0) return null;
  let r = t.resolveActiveIndex(),
    o = r ?? -1;
  switch (e.focus) {
    case 0: {
      for (let i = 0; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 1: {
      for (let i = o - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 2: {
      for (let i = o + 1; i < n.length; ++i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 3: {
      for (let i = n.length - 1; i >= 0; --i) if (!t.resolveDisabled(n[i], i, n)) return i;
      return r;
    }
    case 4: {
      for (let i = 0; i < n.length; ++i) if (t.resolveId(n[i], i, n) === e.id) return i;
      return r;
    }
    case 5:
      return null;
    default:
      Tt(e);
  }
}
function Ye(e = {}, t = null, n = []) {
  for (let [r, o] of Object.entries(e)) Ze(n, Xe(t, r), o);
  return n;
}
function Xe(e, t) {
  return e ? e + '[' + t + ']' : t;
}
function Ze(e, t, n) {
  if (Array.isArray(n)) for (let [r, o] of n.entries()) Ze(e, Xe(t, r.toString()), o);
  else
    n instanceof Date
      ? e.push([t, n.toISOString()])
      : typeof n == 'boolean'
        ? e.push([t, n ? '1' : '0'])
        : typeof n == 'string'
          ? e.push([t, n])
          : typeof n == 'number'
            ? e.push([t, `${n}`])
            : n == null
              ? e.push([t, ''])
              : Ye(n, t, e);
}
var L = ((e) => (
  (e.Space = ' '),
  (e.Enter = 'Enter'),
  (e.Escape = 'Escape'),
  (e.Backspace = 'Backspace'),
  (e.Delete = 'Delete'),
  (e.ArrowLeft = 'ArrowLeft'),
  (e.ArrowUp = 'ArrowUp'),
  (e.ArrowRight = 'ArrowRight'),
  (e.ArrowDown = 'ArrowDown'),
  (e.Home = 'Home'),
  (e.End = 'End'),
  (e.PageUp = 'PageUp'),
  (e.PageDown = 'PageDown'),
  (e.Tab = 'Tab'),
  e
))(L || {});
function Ne() {
  let e = a.useRef(!1);
  return (
    C(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      [],
    ),
    e
  );
}
let He =
  /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function Ue(e) {
  var t, n;
  let r = (t = e.innerText) != null ? t : '',
    o = e.cloneNode(!0);
  if (!(o instanceof HTMLElement)) return r;
  let i = !1;
  for (let u of o.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) u.remove(), (i = !0);
  let l = i ? ((n = o.innerText) != null ? n : '') : r;
  return He.test(l) && (l = l.replace(He, '')), l;
}
function Pt(e) {
  let t = e.getAttribute('aria-label');
  if (typeof t == 'string') return t.trim();
  let n = e.getAttribute('aria-labelledby');
  if (n) {
    let r = n
      .split(' ')
      .map((o) => {
        let i = document.getElementById(o);
        if (i) {
          let l = i.getAttribute('aria-label');
          return typeof l == 'string' ? l.trim() : Ue(i).trim();
        }
        return null;
      })
      .filter(Boolean);
    if (r.length > 0) return r.join(', ');
  }
  return Ue(e).trim();
}
function Nt(e) {
  let t = a.useRef(''),
    n = a.useRef('');
  return h(() => {
    let r = e.current;
    if (!r) return '';
    let o = r.innerText;
    if (t.current === o) return n.current;
    let i = Pt(r).trim().toLowerCase();
    return (t.current = o), (n.current = i), i;
  });
}
var $t = ((e) => ((e[(e.Open = 0)] = 'Open'), (e[(e.Closed = 1)] = 'Closed'), e))($t || {}),
  Ct = ((e) => ((e[(e.Single = 0)] = 'Single'), (e[(e.Multi = 1)] = 'Multi'), e))(Ct || {}),
  It = ((e) => ((e[(e.Pointer = 0)] = 'Pointer'), (e[(e.Other = 1)] = 'Other'), e))(It || {}),
  Dt = ((e) => (
    (e[(e.OpenListbox = 0)] = 'OpenListbox'),
    (e[(e.CloseListbox = 1)] = 'CloseListbox'),
    (e[(e.GoToOption = 2)] = 'GoToOption'),
    (e[(e.Search = 3)] = 'Search'),
    (e[(e.ClearSearch = 4)] = 'ClearSearch'),
    (e[(e.RegisterOption = 5)] = 'RegisterOption'),
    (e[(e.UnregisterOption = 6)] = 'UnregisterOption'),
    (e[(e.RegisterLabel = 7)] = 'RegisterLabel'),
    e
  ))(Dt || {});
function we(e, t = (n) => n) {
  let n = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null,
    r = ft(t(e.options.slice()), (i) => i.dataRef.current.domRef.current),
    o = n ? r.indexOf(n) : null;
  return o === -1 && (o = null), { options: r, activeOptionIndex: o };
}
let At = {
    [1](e) {
      return e.dataRef.current.disabled || e.listboxState === 1
        ? e
        : { ...e, activeOptionIndex: null, listboxState: 1 };
    },
    [0](e) {
      if (e.dataRef.current.disabled || e.listboxState === 0) return e;
      let t = e.activeOptionIndex,
        { isSelected: n } = e.dataRef.current,
        r = e.options.findIndex((o) => n(o.dataRef.current.value));
      return r !== -1 && (t = r), { ...e, listboxState: 0, activeOptionIndex: t };
    },
    [2](e, t) {
      var n;
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let r = we(e),
        o = Ft(t, {
          resolveItems: () => r.options,
          resolveActiveIndex: () => r.activeOptionIndex,
          resolveId: (i) => i.id,
          resolveDisabled: (i) => i.dataRef.current.disabled,
        });
      return {
        ...e,
        ...r,
        searchQuery: '',
        activeOptionIndex: o,
        activationTrigger: (n = t.trigger) != null ? n : 1,
      };
    },
    [3]: (e, t) => {
      if (e.dataRef.current.disabled || e.listboxState === 1) return e;
      let n = e.searchQuery !== '' ? 0 : 1,
        r = e.searchQuery + t.value.toLowerCase(),
        o = (
          e.activeOptionIndex !== null
            ? e.options
                .slice(e.activeOptionIndex + n)
                .concat(e.options.slice(0, e.activeOptionIndex + n))
            : e.options
        ).find((l) => {
          var u;
          return (
            !l.dataRef.current.disabled &&
            ((u = l.dataRef.current.textValue) == null ? void 0 : u.startsWith(r))
          );
        }),
        i = o ? e.options.indexOf(o) : -1;
      return i === -1 || i === e.activeOptionIndex
        ? { ...e, searchQuery: r }
        : { ...e, searchQuery: r, activeOptionIndex: i, activationTrigger: 1 };
    },
    [4](e) {
      return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === ''
        ? e
        : { ...e, searchQuery: '' };
    },
    [5]: (e, t) => {
      let n = { id: t.id, dataRef: t.dataRef },
        r = we(e, (o) => [...o, n]);
      return (
        e.activeOptionIndex === null &&
          e.dataRef.current.isSelected(t.dataRef.current.value) &&
          (r.activeOptionIndex = r.options.indexOf(n)),
        { ...e, ...r }
      );
    },
    [6]: (e, t) => {
      let n = we(e, (r) => {
        let o = r.findIndex((i) => i.id === t.id);
        return o !== -1 && r.splice(o, 1), r;
      });
      return { ...e, ...n, activationTrigger: 1 };
    },
    [7]: (e, t) => ({ ...e, labelId: t.id }),
  },
  $e = a.createContext(null);
$e.displayName = 'ListboxActionsContext';
function te(e) {
  let t = a.useContext($e);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, te), n);
  }
  return t;
}
let Ce = a.createContext(null);
Ce.displayName = 'ListboxDataContext';
function ne(e) {
  let t = a.useContext(Ce);
  if (t === null) {
    let n = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
    throw (Error.captureStackTrace && Error.captureStackTrace(n, ne), n);
  }
  return t;
}
function kt(e, t) {
  return F(t.type, At, e, t);
}
let jt = a.Fragment;
function Mt(e, t) {
  let {
    value: n,
    defaultValue: r,
    form: o,
    name: i,
    onChange: l,
    by: u = (g, S) => g === S,
    disabled: s = !1,
    horizontal: c = !1,
    multiple: d = !1,
    ...m
  } = e;
  const y = c ? 'horizontal' : 'vertical';
  let x = Q(t),
    [v = d ? [] : void 0, b] = it(n, l, r),
    [p, f] = a.useReducer(kt, {
      dataRef: a.createRef(),
      listboxState: 1,
      options: [],
      searchQuery: '',
      labelId: null,
      activeOptionIndex: null,
      activationTrigger: 1,
    }),
    w = a.useRef({ static: !1, hold: !1 }),
    R = a.useRef(null),
    I = a.useRef(null),
    K = a.useRef(null),
    E = h(
      typeof u == 'string'
        ? (g, S) => {
            let P = u;
            return (g == null ? void 0 : g[P]) === (S == null ? void 0 : S[P]);
          }
        : u,
    ),
    D = a.useCallback(
      (g) => F(O.mode, { [1]: () => v.some((S) => E(S, g)), [0]: () => E(v, g) }),
      [v],
    ),
    O = a.useMemo(
      () => ({
        ...p,
        value: v,
        disabled: s,
        mode: d ? 1 : 0,
        orientation: y,
        compare: E,
        isSelected: D,
        optionsPropsRef: w,
        labelRef: R,
        buttonRef: I,
        optionsRef: K,
      }),
      [v, s, d, p],
    );
  C(() => {
    p.dataRef.current = O;
  }, [O]),
    gt(
      [O.buttonRef, O.optionsRef],
      (g, S) => {
        var P;
        f({ type: 1 }),
          Ke(S, Te.Loose) || (g.preventDefault(), (P = O.buttonRef.current) == null || P.focus());
      },
      O.listboxState === 0,
    );
  let W = a.useMemo(() => ({ open: O.listboxState === 0, disabled: s, value: v }), [O, s, v]),
    z = h((g) => {
      let S = O.options.find((P) => P.id === g);
      S && M(S.dataRef.current.value);
    }),
    Z = h(() => {
      if (O.activeOptionIndex !== null) {
        let { dataRef: g, id: S } = O.options[O.activeOptionIndex];
        M(g.current.value), f({ type: 2, focus: N.Specific, id: S });
      }
    }),
    G = h(() => f({ type: 0 })),
    J = h(() => f({ type: 1 })),
    ve = h((g, S, P) =>
      g === N.Specific
        ? f({ type: 2, focus: N.Specific, id: S, trigger: P })
        : f({ type: 2, focus: g, trigger: P }),
    ),
    re = h((g, S) => (f({ type: 5, id: g, dataRef: S }), () => f({ type: 6, id: g }))),
    me = h((g) => (f({ type: 7, id: g }), () => f({ type: 7, id: null }))),
    M = h((g) =>
      F(O.mode, {
        [0]() {
          return b == null ? void 0 : b(g);
        },
        [1]() {
          let S = O.value.slice(),
            P = S.findIndex((oe) => E(oe, g));
          return P === -1 ? S.push(g) : S.splice(P, 1), b == null ? void 0 : b(S);
        },
      }),
    ),
    be = h((g) => f({ type: 3, value: g })),
    ge = h(() => f({ type: 4 })),
    Y = a.useMemo(
      () => ({
        onChange: M,
        registerOption: re,
        registerLabel: me,
        goToOption: ve,
        closeListbox: J,
        openListbox: G,
        selectActiveOption: Z,
        selectOption: z,
        search: be,
        clearSearch: ge,
      }),
      [],
    ),
    ee = { ref: x },
    k = a.useRef(null),
    he = X();
  return (
    a.useEffect(() => {
      k.current &&
        r !== void 0 &&
        he.addEventListener(k.current, 'reset', () => {
          b == null || b(r);
        });
    }, [k, b]),
    T.createElement(
      $e.Provider,
      { value: Y },
      T.createElement(
        Ce.Provider,
        { value: O },
        T.createElement(
          Ge,
          { value: F(O.listboxState, { [0]: $.Open, [1]: $.Closed }) },
          i != null &&
            v != null &&
            Ye({ [i]: v }).map(([g, S], P) =>
              T.createElement(Ot, {
                features: ze.Hidden,
                ref:
                  P === 0
                    ? (oe) => {
                        var Ie;
                        k.current =
                          (Ie = oe == null ? void 0 : oe.closest('form')) != null ? Ie : null;
                      }
                    : void 0,
                ...Oe({
                  key: g,
                  as: 'input',
                  type: 'hidden',
                  hidden: !0,
                  readOnly: !0,
                  form: o,
                  name: g,
                  value: S,
                }),
              }),
            ),
          V({ ourProps: ee, theirProps: m, slot: W, defaultTag: jt, name: 'Listbox' }),
        ),
      ),
    )
  );
}
let Ht = 'button';
function Ut(e, t) {
  var n;
  let r = ce(),
    { id: o = `headlessui-listbox-button-${r}`, ...i } = e,
    l = ne('Listbox.Button'),
    u = te('Listbox.Button'),
    s = Q(l.buttonRef, t),
    c = X(),
    d = h((p) => {
      switch (p.key) {
        case L.Space:
        case L.Enter:
        case L.ArrowDown:
          p.preventDefault(),
            u.openListbox(),
            c.nextFrame(() => {
              l.value || u.goToOption(N.First);
            });
          break;
        case L.ArrowUp:
          p.preventDefault(),
            u.openListbox(),
            c.nextFrame(() => {
              l.value || u.goToOption(N.Last);
            });
          break;
      }
    }),
    m = h((p) => {
      switch (p.key) {
        case L.Space:
          p.preventDefault();
          break;
      }
    }),
    y = h((p) => {
      if (Rt(p.currentTarget)) return p.preventDefault();
      l.listboxState === 0
        ? (u.closeListbox(),
          c.nextFrame(() => {
            var f;
            return (f = l.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: !0 });
          }))
        : (p.preventDefault(), u.openListbox());
    }),
    x = _e(() => {
      if (l.labelId) return [l.labelId, o].join(' ');
    }, [l.labelId, o]),
    v = a.useMemo(
      () => ({ open: l.listboxState === 0, disabled: l.disabled, value: l.value }),
      [l],
    ),
    b = {
      ref: s,
      id: o,
      type: ht(e, l.buttonRef),
      'aria-haspopup': 'listbox',
      'aria-controls': (n = l.optionsRef.current) == null ? void 0 : n.id,
      'aria-expanded': l.listboxState === 0,
      'aria-labelledby': x,
      disabled: l.disabled,
      onKeyDown: d,
      onKeyUp: m,
      onClick: y,
    };
  return V({ ourProps: b, theirProps: i, slot: v, defaultTag: Ht, name: 'Listbox.Button' });
}
let Bt = 'label';
function qt(e, t) {
  let n = ce(),
    { id: r = `headlessui-listbox-label-${n}`, ...o } = e,
    i = ne('Listbox.Label'),
    l = te('Listbox.Label'),
    u = Q(i.labelRef, t);
  C(() => l.registerLabel(r), [r]);
  let s = h(() => {
      var d;
      return (d = i.buttonRef.current) == null ? void 0 : d.focus({ preventScroll: !0 });
    }),
    c = a.useMemo(() => ({ open: i.listboxState === 0, disabled: i.disabled }), [i]);
  return V({
    ourProps: { ref: u, id: r, onClick: s },
    theirProps: o,
    slot: c,
    defaultTag: Bt,
    name: 'Listbox.Label',
  });
}
let Vt = 'ul',
  _t = se.RenderStrategy | se.Static;
function Qt(e, t) {
  var n;
  let r = ce(),
    { id: o = `headlessui-listbox-options-${r}`, ...i } = e,
    l = ne('Listbox.Options'),
    u = te('Listbox.Options'),
    s = Q(l.optionsRef, t),
    c = X(),
    d = X(),
    m = Pe(),
    y = (() => (m !== null ? (m & $.Open) === $.Open : l.listboxState === 0))();
  a.useEffect(() => {
    var f;
    let w = l.optionsRef.current;
    w &&
      l.listboxState === 0 &&
      w !== ((f = Qe(w)) == null ? void 0 : f.activeElement) &&
      w.focus({ preventScroll: !0 });
  }, [l.listboxState, l.optionsRef]);
  let x = h((f) => {
      switch ((d.dispose(), f.key)) {
        case L.Space:
          if (l.searchQuery !== '') return f.preventDefault(), f.stopPropagation(), u.search(f.key);
        case L.Enter:
          if ((f.preventDefault(), f.stopPropagation(), l.activeOptionIndex !== null)) {
            let { dataRef: w } = l.options[l.activeOptionIndex];
            u.onChange(w.current.value);
          }
          l.mode === 0 &&
            (u.closeListbox(),
            q().nextFrame(() => {
              var w;
              return (w = l.buttonRef.current) == null ? void 0 : w.focus({ preventScroll: !0 });
            }));
          break;
        case F(l.orientation, { vertical: L.ArrowDown, horizontal: L.ArrowRight }):
          return f.preventDefault(), f.stopPropagation(), u.goToOption(N.Next);
        case F(l.orientation, { vertical: L.ArrowUp, horizontal: L.ArrowLeft }):
          return f.preventDefault(), f.stopPropagation(), u.goToOption(N.Previous);
        case L.Home:
        case L.PageUp:
          return f.preventDefault(), f.stopPropagation(), u.goToOption(N.First);
        case L.End:
        case L.PageDown:
          return f.preventDefault(), f.stopPropagation(), u.goToOption(N.Last);
        case L.Escape:
          return (
            f.preventDefault(),
            f.stopPropagation(),
            u.closeListbox(),
            c.nextFrame(() => {
              var w;
              return (w = l.buttonRef.current) == null ? void 0 : w.focus({ preventScroll: !0 });
            })
          );
        case L.Tab:
          f.preventDefault(), f.stopPropagation();
          break;
        default:
          f.key.length === 1 && (u.search(f.key), d.setTimeout(() => u.clearSearch(), 350));
          break;
      }
    }),
    v = _e(() => {
      var f;
      return (f = l.buttonRef.current) == null ? void 0 : f.id;
    }, [l.buttonRef.current]),
    b = a.useMemo(() => ({ open: l.listboxState === 0 }), [l]),
    p = {
      'aria-activedescendant':
        l.activeOptionIndex === null || (n = l.options[l.activeOptionIndex]) == null
          ? void 0
          : n.id,
      'aria-multiselectable': l.mode === 1 ? !0 : void 0,
      'aria-labelledby': v,
      'aria-orientation': l.orientation,
      id: o,
      onKeyDown: x,
      role: 'listbox',
      tabIndex: 0,
      ref: s,
    };
  return V({
    ourProps: p,
    theirProps: i,
    slot: b,
    defaultTag: Vt,
    features: _t,
    visible: y,
    name: 'Listbox.Options',
  });
}
let Kt = 'li';
function Wt(e, t) {
  let n = ce(),
    { id: r = `headlessui-listbox-option-${n}`, disabled: o = !1, value: i, ...l } = e,
    u = ne('Listbox.Option'),
    s = te('Listbox.Option'),
    c = u.activeOptionIndex !== null ? u.options[u.activeOptionIndex].id === r : !1,
    d = u.isSelected(i),
    m = a.useRef(null),
    y = Nt(m),
    x = j({
      disabled: o,
      value: i,
      domRef: m,
      get textValue() {
        return y();
      },
    }),
    v = Q(t, m);
  C(() => {
    if (u.listboxState !== 0 || !c || u.activationTrigger === 0) return;
    let E = q();
    return (
      E.requestAnimationFrame(() => {
        var D, O;
        (O = (D = m.current) == null ? void 0 : D.scrollIntoView) == null ||
          O.call(D, { block: 'nearest' });
      }),
      E.dispose
    );
  }, [m, c, u.listboxState, u.activationTrigger, u.activeOptionIndex]),
    C(() => s.registerOption(r, x), [x, r]);
  let b = h((E) => {
      if (o) return E.preventDefault();
      s.onChange(i),
        u.mode === 0 &&
          (s.closeListbox(),
          q().nextFrame(() => {
            var D;
            return (D = u.buttonRef.current) == null ? void 0 : D.focus({ preventScroll: !0 });
          }));
    }),
    p = h(() => {
      if (o) return s.goToOption(N.Nothing);
      s.goToOption(N.Specific, r);
    }),
    f = yt(),
    w = h((E) => f.update(E)),
    R = h((E) => {
      f.wasMoved(E) && (o || c || s.goToOption(N.Specific, r, 0));
    }),
    I = h((E) => {
      f.wasMoved(E) && (o || (c && s.goToOption(N.Nothing)));
    }),
    K = a.useMemo(() => ({ active: c, selected: d, disabled: o }), [c, d, o]);
  return V({
    ourProps: {
      id: r,
      ref: v,
      role: 'option',
      tabIndex: o === !0 ? void 0 : -1,
      'aria-disabled': o === !0 ? !0 : void 0,
      'aria-selected': d,
      disabled: void 0,
      onClick: b,
      onFocus: p,
      onPointerEnter: w,
      onMouseEnter: w,
      onPointerMove: R,
      onMouseMove: R,
      onPointerLeave: I,
      onMouseLeave: I,
    },
    theirProps: l,
    slot: K,
    defaultTag: Kt,
    name: 'Listbox.Option',
  });
}
let zt = H(Mt),
  Gt = H(Ut),
  Yt = H(qt),
  Xt = H(Qt),
  Zt = H(Wt),
  ae = Object.assign(zt, { Button: Gt, Label: Yt, Options: Xt, Option: Zt });
function Jt(e = 0) {
  let [t, n] = a.useState(e),
    r = Ne(),
    o = a.useCallback(
      (s) => {
        r.current && n((c) => c | s);
      },
      [t, r],
    ),
    i = a.useCallback((s) => !!(t & s), [t]),
    l = a.useCallback(
      (s) => {
        r.current && n((c) => c & ~s);
      },
      [n, r],
    ),
    u = a.useCallback(
      (s) => {
        r.current && n((c) => c ^ s);
      },
      [n],
    );
  return { flags: t, addFlag: o, hasFlag: i, removeFlag: l, toggleFlag: u };
}
function en(e) {
  let t = { called: !1 };
  return (...n) => {
    if (!t.called) return (t.called = !0), e(...n);
  };
}
function Se(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Ee(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function tn(e, t) {
  let n = q();
  if (!e) return n.dispose;
  let { transitionDuration: r, transitionDelay: o } = getComputedStyle(e),
    [i, l] = [r, o].map((s) => {
      let [c = 0] = s
        .split(',')
        .filter(Boolean)
        .map((d) => (d.includes('ms') ? parseFloat(d) : parseFloat(d) * 1e3))
        .sort((d, m) => m - d);
      return c;
    }),
    u = i + l;
  if (u !== 0) {
    n.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, u),
        c.addEventListener(e, 'transitionrun', (d) => {
          d.target === d.currentTarget && c.dispose();
        });
    });
    let s = n.addEventListener(e, 'transitionend', (c) => {
      c.target === c.currentTarget && (t(), s());
    });
  } else t();
  return n.add(() => t()), n.dispose;
}
function nn(e, t, n, r) {
  let o = n ? 'enter' : 'leave',
    i = q(),
    l = r !== void 0 ? en(r) : () => {};
  o === 'enter' && (e.removeAttribute('hidden'), (e.style.display = ''));
  let u = F(o, { enter: () => t.enter, leave: () => t.leave }),
    s = F(o, { enter: () => t.enterTo, leave: () => t.leaveTo }),
    c = F(o, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return (
    Ee(
      e,
      ...t.base,
      ...t.enter,
      ...t.enterTo,
      ...t.enterFrom,
      ...t.leave,
      ...t.leaveFrom,
      ...t.leaveTo,
      ...t.entered,
    ),
    Se(e, ...t.base, ...u, ...c),
    i.nextFrame(() => {
      Ee(e, ...t.base, ...u, ...c),
        Se(e, ...t.base, ...u, ...s),
        tn(e, () => (Ee(e, ...t.base, ...u), Se(e, ...t.base, ...t.entered), l()));
    }),
    i.dispose
  );
}
function rn({ immediate: e, container: t, direction: n, classes: r, onStart: o, onStop: i }) {
  let l = Ne(),
    u = X(),
    s = j(n);
  C(() => {
    e && (s.current = 'enter');
  }, [e]),
    C(() => {
      let c = q();
      u.add(c.dispose);
      let d = t.current;
      if (d && s.current !== 'idle' && l.current)
        return (
          c.dispose(),
          o.current(s.current),
          c.add(
            nn(d, r.current, s.current === 'enter', () => {
              c.dispose(), i.current(s.current);
            }),
          ),
          c.dispose
        );
    }, [n]);
}
function U(e = '') {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let de = a.createContext(null);
de.displayName = 'TransitionContext';
var on = ((e) => ((e.Visible = 'visible'), (e.Hidden = 'hidden'), e))(on || {});
function ln() {
  let e = a.useContext(de);
  if (e === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.',
    );
  return e;
}
function an() {
  let e = a.useContext(fe);
  if (e === null)
    throw new Error(
      'A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.',
    );
  return e;
}
let fe = a.createContext(null);
fe.displayName = 'NestingContext';
function pe(e) {
  return 'children' in e
    ? pe(e.children)
    : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === 'visible')
        .length > 0;
}
function Je(e, t) {
  let n = j(e),
    r = a.useRef([]),
    o = Ne(),
    i = X(),
    l = h((x, v = B.Hidden) => {
      let b = r.current.findIndex(({ el: p }) => p === x);
      b !== -1 &&
        (F(v, {
          [B.Unmount]() {
            r.current.splice(b, 1);
          },
          [B.Hidden]() {
            r.current[b].state = 'hidden';
          },
        }),
        i.microTask(() => {
          var p;
          !pe(r) && o.current && ((p = n.current) == null || p.call(n));
        }));
    }),
    u = h((x) => {
      let v = r.current.find(({ el: b }) => b === x);
      return (
        v
          ? v.state !== 'visible' && (v.state = 'visible')
          : r.current.push({ el: x, state: 'visible' }),
        () => l(x, B.Unmount)
      );
    }),
    s = a.useRef([]),
    c = a.useRef(Promise.resolve()),
    d = a.useRef({ enter: [], leave: [], idle: [] }),
    m = h((x, v, b) => {
      s.current.splice(0),
        t && (t.chains.current[v] = t.chains.current[v].filter(([p]) => p !== x)),
        t == null ||
          t.chains.current[v].push([
            x,
            new Promise((p) => {
              s.current.push(p);
            }),
          ]),
        t == null ||
          t.chains.current[v].push([
            x,
            new Promise((p) => {
              Promise.all(d.current[v].map(([f, w]) => w)).then(() => p());
            }),
          ]),
        v === 'enter'
          ? (c.current = c.current
              .then(() => (t == null ? void 0 : t.wait.current))
              .then(() => b(v)))
          : b(v);
    }),
    y = h((x, v, b) => {
      Promise.all(d.current[v].splice(0).map(([p, f]) => f))
        .then(() => {
          var p;
          (p = s.current.shift()) == null || p();
        })
        .then(() => b(v));
    });
  return a.useMemo(
    () => ({ children: r, register: u, unregister: l, onStart: m, onStop: y, wait: c, chains: d }),
    [u, l, r, m, y, d, c],
  );
}
function un() {}
let sn = ['beforeEnter', 'afterEnter', 'beforeLeave', 'afterLeave'];
function Be(e) {
  var t;
  let n = {};
  for (let r of sn) n[r] = (t = e[r]) != null ? t : un;
  return n;
}
function cn(e) {
  let t = a.useRef(Be(e));
  return (
    a.useEffect(() => {
      t.current = Be(e);
    }, [e]),
    t
  );
}
let dn = 'div',
  et = se.RenderStrategy;
function fn(e, t) {
  var n, r;
  let {
      beforeEnter: o,
      afterEnter: i,
      beforeLeave: l,
      afterLeave: u,
      enter: s,
      enterFrom: c,
      enterTo: d,
      entered: m,
      leave: y,
      leaveFrom: x,
      leaveTo: v,
      ...b
    } = e,
    p = a.useRef(null),
    f = Q(p, t),
    w = (n = b.unmount) == null || n ? B.Unmount : B.Hidden,
    { show: R, appear: I, initial: K } = ln(),
    [E, D] = a.useState(R ? 'visible' : 'hidden'),
    O = an(),
    { register: W, unregister: z } = O;
  a.useEffect(() => W(p), [W, p]),
    a.useEffect(() => {
      if (w === B.Hidden && p.current) {
        if (R && E !== 'visible') {
          D('visible');
          return;
        }
        return F(E, { hidden: () => z(p), visible: () => W(p) });
      }
    }, [E, p, W, z, R, w]);
  let Z = j({
      base: U(b.className),
      enter: U(s),
      enterFrom: U(c),
      enterTo: U(d),
      entered: U(m),
      leave: U(y),
      leaveFrom: U(x),
      leaveTo: U(v),
    }),
    G = cn({ beforeEnter: o, afterEnter: i, beforeLeave: l, afterLeave: u }),
    J = Le();
  a.useEffect(() => {
    if (J && E === 'visible' && p.current === null)
      throw new Error('Did you forget to passthrough the `ref` to the actual DOM node?');
  }, [p, E, J]);
  let ve = K && !I,
    re = I && R && K,
    me = (() => (!J || ve ? 'idle' : R ? 'enter' : 'leave'))(),
    M = Jt(0),
    be = h((g) =>
      F(g, {
        enter: () => {
          M.addFlag($.Opening), G.current.beforeEnter();
        },
        leave: () => {
          M.addFlag($.Closing), G.current.beforeLeave();
        },
        idle: () => {},
      }),
    ),
    ge = h((g) =>
      F(g, {
        enter: () => {
          M.removeFlag($.Opening), G.current.afterEnter();
        },
        leave: () => {
          M.removeFlag($.Closing), G.current.afterLeave();
        },
        idle: () => {},
      }),
    ),
    Y = Je(() => {
      D('hidden'), z(p);
    }, O),
    ee = a.useRef(!1);
  rn({
    immediate: re,
    container: p,
    classes: Z,
    direction: me,
    onStart: j((g) => {
      (ee.current = !0), Y.onStart(p, g, be);
    }),
    onStop: j((g) => {
      (ee.current = !1), Y.onStop(p, g, ge), g === 'leave' && !pe(Y) && (D('hidden'), z(p));
    }),
  });
  let k = b,
    he = { ref: f };
  return (
    re
      ? (k = { ...k, className: ue(b.className, ...Z.current.enter, ...Z.current.enterFrom) })
      : ee.current &&
        ((k.className = ue(b.className, (r = p.current) == null ? void 0 : r.className)),
        k.className === '' && delete k.className),
    T.createElement(
      fe.Provider,
      { value: Y },
      T.createElement(
        Ge,
        { value: F(E, { visible: $.Open, hidden: $.Closed }) | M.flags },
        V({
          ourProps: he,
          theirProps: k,
          defaultTag: dn,
          features: et,
          visible: E === 'visible',
          name: 'Transition.Child',
        }),
      ),
    )
  );
}
function pn(e, t) {
  let { show: n, appear: r = !1, unmount: o = !0, ...i } = e,
    l = a.useRef(null),
    u = Q(l, t);
  Le();
  let s = Pe();
  if ((n === void 0 && s !== null && (n = (s & $.Open) === $.Open), ![!0, !1].includes(n)))
    throw new Error('A <Transition /> is used but it is missing a `show={true | false}` prop.');
  let [c, d] = a.useState(n ? 'visible' : 'hidden'),
    m = Je(() => {
      d('hidden');
    }),
    [y, x] = a.useState(!0),
    v = a.useRef([n]);
  C(() => {
    y !== !1 && v.current[v.current.length - 1] !== n && (v.current.push(n), x(!1));
  }, [v, n]);
  let b = a.useMemo(() => ({ show: n, appear: r, initial: y }), [n, r, y]);
  a.useEffect(() => {
    if (n) d('visible');
    else if (!pe(m)) d('hidden');
    else {
      let R = l.current;
      if (!R) return;
      let I = R.getBoundingClientRect();
      I.x === 0 && I.y === 0 && I.width === 0 && I.height === 0 && d('hidden');
    }
  }, [n, m]);
  let p = { unmount: o },
    f = h(() => {
      var R;
      y && x(!1), (R = e.beforeEnter) == null || R.call(e);
    }),
    w = h(() => {
      var R;
      y && x(!1), (R = e.beforeLeave) == null || R.call(e);
    });
  return T.createElement(
    fe.Provider,
    { value: m },
    T.createElement(
      de.Provider,
      { value: b },
      V({
        ourProps: {
          ...p,
          as: a.Fragment,
          children: T.createElement(tt, { ref: u, ...p, ...i, beforeEnter: f, beforeLeave: w }),
        },
        theirProps: {},
        defaultTag: a.Fragment,
        features: et,
        visible: c === 'visible',
        name: 'Transition',
      }),
    ),
  );
}
function vn(e, t) {
  let n = a.useContext(de) !== null,
    r = Pe() !== null;
  return T.createElement(
    T.Fragment,
    null,
    !n && r ? T.createElement(Re, { ref: t, ...e }) : T.createElement(tt, { ref: t, ...e }),
  );
}
let Re = H(pn),
  tt = H(fn),
  mn = H(vn),
  bn = Object.assign(Re, { Child: mn, Root: Re });
function gn({ title: e, titleId: t, ...n }, r) {
  return a.createElement(
    'svg',
    Object.assign(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 20 20',
        fill: 'currentColor',
        'aria-hidden': 'true',
        'data-slot': 'icon',
        ref: r,
        'aria-labelledby': t,
      },
      n,
    ),
    e ? a.createElement('title', { id: t }, e) : null,
    a.createElement('path', {
      fillRule: 'evenodd',
      d: 'M10.53 3.47a.75.75 0 0 0-1.06 0L6.22 6.72a.75.75 0 0 0 1.06 1.06L10 5.06l2.72 2.72a.75.75 0 1 0 1.06-1.06l-3.25-3.25Zm-4.31 9.81 3.25 3.25a.75.75 0 0 0 1.06 0l3.25-3.25a.75.75 0 1 0-1.06-1.06L10 14.94l-2.72-2.72a.75.75 0 0 0-1.06 1.06Z',
      clipRule: 'evenodd',
    }),
  );
}
const hn = a.forwardRef(gn),
  xn = hn;
function qe(...e) {
  return e.filter(Boolean).join(' ');
}
const Ve = ({ options: e, onChange: t, value: n, prefix: r, className: o }) => {
  var l;
  const i = ((l = e.find((u) => u.value === n)) == null ? void 0 : l.label) || '';
  return A.jsx(ae, {
    value: n,
    onChange: (u) => {
      const s = e.find((c) => c.value === u);
      s && t(s.value);
    },
    children: A.jsxs('div', {
      className: 'relative mt-1',
      children: [
        A.jsxs(ae.Button, {
          className: qe(
            o,
            'relative flex w-full cursor-default items-center rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6',
          ),
          children: [
            r && r(),
            A.jsx('span', { className: 'block truncate', children: i }),
            A.jsx('span', {
              className: 'pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2',
              children: A.jsx(xn, { className: 'h-5 w-5 text-gray-400', 'aria-hidden': 'true' }),
            }),
          ],
        }),
        A.jsx(bn, {
          as: a.Fragment,
          leave: 'transition ease-in duration-100',
          leaveFrom: 'opacity-100',
          leaveTo: 'opacity-0',
          children: A.jsx(ae.Options, {
            className:
              'absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm',
            children: e.map((u) =>
              A.jsx(
                ae.Option,
                {
                  className: ({ active: s }) =>
                    qe(
                      s ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9',
                    ),
                  value: u.value,
                  children: ({ selected: s }) =>
                    A.jsx(A.Fragment, {
                      children: A.jsx('span', {
                        className: `block truncate ${s ? 'font-medium' : 'font-normal'}`,
                        children: u.label,
                      }),
                    }),
                },
                u.value,
              ),
            ),
          }),
        }),
      ],
    }),
  });
};
try {
  (Ve.displayName = 'Select'),
    (Ve.__docgenInfo = {
      description: '',
      displayName: 'Select',
      props: {
        prefix: {
          defaultValue: null,
          description: '',
          name: 'prefix',
          required: !1,
          type: { name: '(() => ReactNode)' },
        },
        options: {
          defaultValue: null,
          description: '',
          name: 'options',
          required: !0,
          type: { name: 'TSelectOption[]' },
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !0,
          type: { name: '(value: string) => void' },
        },
        value: {
          defaultValue: null,
          description: '',
          name: 'value',
          required: !0,
          type: { name: 'string' },
        },
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !1,
          type: { name: 'string' },
        },
      },
    });
} catch {}
export { Ve as S, qe as c };

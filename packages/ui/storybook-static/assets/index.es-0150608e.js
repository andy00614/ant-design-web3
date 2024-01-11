import { g as $1, c as Br, a as N1 } from './_commonjsHelpers-042e6b4d.js';
import {
  l as _1,
  z as $f,
  y as A1,
  k as b1,
  D as C1,
  G as Df,
  m as E1,
  n as I1,
  t as Kc,
  h as m1,
  x as Nf,
  C as No,
  r as O1,
  q as P1,
  A as R1,
  v as re,
  E as Rn,
  p as S1,
  F as T1,
  u as Tf,
  w as Uo,
  f as v1,
  j as w1,
  o as x1,
} from './ConnectButton.stories-b526cdee.js';
import { _ as y1 } from './iframe-26359f8d.js';

import '../sb-preview/runtime.js';
import './jsx-runtime-ccada58e.js';
import './index-f1f749bf.js';
import './_commonjs-dynamic-modules-146a0c27.js';
import './index-924d9a68.js';

function Vc(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function Lf(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Vc(globalThis.Buffer.allocUnsafe(n))
    : new Uint8Array(n);
}
function $c(n, t) {
  t || (t = n.reduce((a, u) => a + u.length, 0));
  const r = Lf(t);
  let s = 0;
  for (const a of n) r.set(a, s), (s += a.length);
  return Vc(r);
}
const al = { ...v1, ...m1, ...w1, ...b1, ..._1, ...E1, ...I1, ...x1, ...S1, ...P1 };
function Ff(n, t, r, s) {
  return { name: n, prefix: t, encoder: { name: n, prefix: t, encode: r }, decoder: { decode: s } };
}
const cl = Ff(
    'utf8',
    'u',
    (n) => 'u' + new TextDecoder('utf8').decode(n),
    (n) => new TextEncoder().encode(n.substring(1)),
  ),
  gc = Ff(
    'ascii',
    'a',
    (n) => {
      let t = 'a';
      for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
      return t;
    },
    (n) => {
      n = n.substring(1);
      const t = Lf(n.length);
      for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
      return t;
    },
  ),
  Mf = { utf8: cl, 'utf-8': cl, hex: al.base16, latin1: gc, ascii: gc, binary: gc, ...al };
function vr(n, t = 'utf8') {
  const r = Mf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === 'utf8' || t === 'utf-8') &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Vc(globalThis.Buffer.from(n, 'utf-8'))
    : r.decoder.decode(`${r.prefix}${n}`);
}
function ar(n, t = 'utf8') {
  const r = Mf[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === 'utf8' || t === 'utf-8') &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? globalThis.Buffer.from(n.buffer, n.byteOffset, n.byteLength).toString('utf8')
    : r.encoder.encode(n).substring(1);
}
var ul =
    (globalThis && globalThis.__spreadArray) ||
    function (n, t, r) {
      if (r || arguments.length === 2)
        for (var s = 0, a = t.length, u; s < a; s++)
          (u || !(s in t)) && (u || (u = Array.prototype.slice.call(t, 0, s)), (u[s] = t[s]));
      return n.concat(u || Array.prototype.slice.call(t));
    },
  D1 = (function () {
    function n(t, r, s) {
      (this.name = t), (this.version = r), (this.os = s), (this.type = 'browser');
    }
    return n;
  })(),
  L1 = (function () {
    function n(t) {
      (this.version = t), (this.type = 'node'), (this.name = 'node'), (this.os = process.platform);
    }
    return n;
  })(),
  F1 = (function () {
    function n(t, r, s, a) {
      (this.name = t),
        (this.version = r),
        (this.os = s),
        (this.bot = a),
        (this.type = 'bot-device');
    }
    return n;
  })(),
  M1 = (function () {
    function n() {
      (this.type = 'bot'),
        (this.bot = !0),
        (this.name = 'bot'),
        (this.version = null),
        (this.os = null);
    }
    return n;
  })(),
  j1 = (function () {
    function n() {
      (this.type = 'react-native'),
        (this.name = 'react-native'),
        (this.version = null),
        (this.os = null);
    }
    return n;
  })(),
  U1 =
    /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/,
  q1 = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
  hl = 3,
  z1 = [
    ['aol', /AOLShield\/([0-9\._]+)/],
    ['edge', /Edge\/([0-9\._]+)/],
    ['edge-ios', /EdgiOS\/([0-9\._]+)/],
    ['yandexbrowser', /YaBrowser\/([0-9\._]+)/],
    ['kakaotalk', /KAKAOTALK\s([0-9\.]+)/],
    ['samsung', /SamsungBrowser\/([0-9\.]+)/],
    ['silk', /\bSilk\/([0-9._-]+)\b/],
    ['miui', /MiuiBrowser\/([0-9\.]+)$/],
    ['beaker', /BeakerBrowser\/([0-9\.]+)/],
    ['edge-chromium', /EdgA?\/([0-9\.]+)/],
    ['chromium-webview', /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['chrome', /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
    ['phantomjs', /PhantomJS\/([0-9\.]+)(:?\s|$)/],
    ['crios', /CriOS\/([0-9\.]+)(:?\s|$)/],
    ['firefox', /Firefox\/([0-9\.]+)(?:\s|$)/],
    ['fxios', /FxiOS\/([0-9\.]+)/],
    ['opera-mini', /Opera Mini.*Version\/([0-9\.]+)/],
    ['opera', /Opera\/([0-9\.]+)(?:\s|$)/],
    ['opera', /OPR\/([0-9\.]+)(:?\s|$)/],
    ['pie', /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
    [
      'pie',
      /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/,
    ],
    ['netfront', /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
    ['ie', /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
    ['ie', /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
    ['ie', /MSIE\s(7\.0)/],
    ['bb10', /BB10;\sTouch.*Version\/([0-9\.]+)/],
    ['android', /Android\s([0-9\.]+)/],
    ['ios', /Version\/([0-9\._]+).*Mobile.*Safari.*/],
    ['safari', /Version\/([0-9\._]+).*Safari/],
    ['facebook', /FB[AS]V\/([0-9\.]+)/],
    ['instagram', /Instagram\s([0-9\.]+)/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Mobile/],
    ['ios-webview', /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
    ['curl', /^curl\/([0-9\.]+)$/],
    ['searchbot', U1],
  ],
  ll = [
    ['iOS', /iP(hone|od|ad)/],
    ['Android OS', /Android/],
    ['BlackBerry OS', /BlackBerry|BB10/],
    ['Windows Mobile', /IEMobile/],
    ['Amazon OS', /Kindle/],
    ['Windows 3.11', /Win16/],
    ['Windows 95', /(Windows 95)|(Win95)|(Windows_95)/],
    ['Windows 98', /(Windows 98)|(Win98)/],
    ['Windows 2000', /(Windows NT 5.0)|(Windows 2000)/],
    ['Windows XP', /(Windows NT 5.1)|(Windows XP)/],
    ['Windows Server 2003', /(Windows NT 5.2)/],
    ['Windows Vista', /(Windows NT 6.0)/],
    ['Windows 7', /(Windows NT 6.1)/],
    ['Windows 8', /(Windows NT 6.2)/],
    ['Windows 8.1', /(Windows NT 6.3)/],
    ['Windows 10', /(Windows NT 10.0)/],
    ['Windows ME', /Windows ME/],
    ['Windows CE', /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
    ['Open BSD', /OpenBSD/],
    ['Sun OS', /SunOS/],
    ['Chrome OS', /CrOS/],
    ['Linux', /(Linux)|(X11)/],
    ['Mac OS', /(Mac_PowerPC)|(Macintosh)/],
    ['QNX', /QNX/],
    ['BeOS', /BeOS/],
    ['OS/2', /OS\/2/],
  ];
function k1(n) {
  return n
    ? fl(n)
    : typeof document > 'u' && typeof navigator < 'u' && navigator.product === 'ReactNative'
      ? new j1()
      : typeof navigator < 'u'
        ? fl(navigator.userAgent)
        : K1();
}
function H1(n) {
  return (
    n !== '' &&
    z1.reduce(function (t, r) {
      var s = r[0],
        a = r[1];
      if (t) return t;
      var u = a.exec(n);
      return !!u && [s, u];
    }, !1)
  );
}
function fl(n) {
  var t = H1(n);
  if (!t) return null;
  var r = t[0],
    s = t[1];
  if (r === 'searchbot') return new M1();
  var a = s[1] && s[1].split('.').join('_').split('_').slice(0, 3);
  a ? a.length < hl && (a = ul(ul([], a, !0), V1(hl - a.length), !0)) : (a = []);
  var u = a.join('.'),
    f = B1(n),
    g = q1.exec(n);
  return g && g[1] ? new F1(r, u, f, g[1]) : new D1(r, u, f);
}
function B1(n) {
  for (var t = 0, r = ll.length; t < r; t++) {
    var s = ll[t],
      a = s[0],
      u = s[1],
      f = u.exec(n);
    if (f) return a;
  }
  return null;
}
function K1() {
  var n = typeof process < 'u' && process.version;
  return n ? new L1(process.version.slice(1)) : null;
}
function V1(n) {
  for (var t = [], r = 0; r < n; r++) t.push('0');
  return t;
}
const W1 = {
  waku: {
    publish: 'waku_publish',
    batchPublish: 'waku_batchPublish',
    subscribe: 'waku_subscribe',
    batchSubscribe: 'waku_batchSubscribe',
    subscription: 'waku_subscription',
    unsubscribe: 'waku_unsubscribe',
    batchUnsubscribe: 'waku_batchUnsubscribe',
  },
  irn: {
    publish: 'irn_publish',
    batchPublish: 'irn_batchPublish',
    subscribe: 'irn_subscribe',
    batchSubscribe: 'irn_batchSubscribe',
    subscription: 'irn_subscription',
    unsubscribe: 'irn_unsubscribe',
    batchUnsubscribe: 'irn_batchUnsubscribe',
  },
  iridium: {
    publish: 'iridium_publish',
    batchPublish: 'iridium_batchPublish',
    subscribe: 'iridium_subscribe',
    batchSubscribe: 'iridium_batchSubscribe',
    subscription: 'iridium_subscription',
    unsubscribe: 'iridium_unsubscribe',
    batchUnsubscribe: 'iridium_batchUnsubscribe',
  },
};
var Bt = {},
  G1 = {
    get exports() {
      return Bt;
    },
    set exports(n) {
      Bt = n;
    },
  },
  Sn = typeof Reflect == 'object' ? Reflect : null,
  pl =
    Sn && typeof Sn.apply == 'function'
      ? Sn.apply
      : function (t, r, s) {
          return Function.prototype.apply.call(t, r, s);
        },
  Oo;
Sn && typeof Sn.ownKeys == 'function'
  ? (Oo = Sn.ownKeys)
  : Object.getOwnPropertySymbols
    ? (Oo = function (t) {
        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
      })
    : (Oo = function (t) {
        return Object.getOwnPropertyNames(t);
      });
function J1(n) {
  console && console.warn && console.warn(n);
}
var jf =
  Number.isNaN ||
  function (t) {
    return t !== t;
  };
function He() {
  He.init.call(this);
}
G1.exports = He;
Bt.once = Z1;
He.EventEmitter = He;
He.prototype._events = void 0;
He.prototype._eventsCount = 0;
He.prototype._maxListeners = void 0;
var dl = 10;
function qo(n) {
  if (typeof n != 'function')
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof n,
    );
}
Object.defineProperty(He, 'defaultMaxListeners', {
  enumerable: !0,
  get: function () {
    return dl;
  },
  set: function (n) {
    if (typeof n != 'number' || n < 0 || jf(n))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          n +
          '.',
      );
    dl = n;
  },
});
He.init = function () {
  (this._events === void 0 || this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
He.prototype.setMaxListeners = function (t) {
  if (typeof t != 'number' || t < 0 || jf(t))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' + t + '.',
    );
  return (this._maxListeners = t), this;
};
function Uf(n) {
  return n._maxListeners === void 0 ? He.defaultMaxListeners : n._maxListeners;
}
He.prototype.getMaxListeners = function () {
  return Uf(this);
};
He.prototype.emit = function (t) {
  for (var r = [], s = 1; s < arguments.length; s++) r.push(arguments[s]);
  var a = t === 'error',
    u = this._events;
  if (u !== void 0) a = a && u.error === void 0;
  else if (!a) return !1;
  if (a) {
    var f;
    if ((r.length > 0 && (f = r[0]), f instanceof Error)) throw f;
    var g = new Error('Unhandled error.' + (f ? ' (' + f.message + ')' : ''));
    throw ((g.context = f), g);
  }
  var b = u[t];
  if (b === void 0) return !1;
  if (typeof b == 'function') pl(b, this, r);
  else for (var y = b.length, E = Bf(b, y), s = 0; s < y; ++s) pl(E[s], this, r);
  return !0;
};
function qf(n, t, r, s) {
  var a, u, f;
  if (
    (qo(r),
    (u = n._events),
    u === void 0
      ? ((u = n._events = Object.create(null)), (n._eventsCount = 0))
      : (u.newListener !== void 0 &&
          (n.emit('newListener', t, r.listener ? r.listener : r), (u = n._events)),
        (f = u[t])),
    f === void 0)
  )
    (f = u[t] = r), ++n._eventsCount;
  else if (
    (typeof f == 'function' ? (f = u[t] = s ? [r, f] : [f, r]) : s ? f.unshift(r) : f.push(r),
    (a = Uf(n)),
    a > 0 && f.length > a && !f.warned)
  ) {
    f.warned = !0;
    var g = new Error(
      'Possible EventEmitter memory leak detected. ' +
        f.length +
        ' ' +
        String(t) +
        ' listeners added. Use emitter.setMaxListeners() to increase limit',
    );
    (g.name = 'MaxListenersExceededWarning'),
      (g.emitter = n),
      (g.type = t),
      (g.count = f.length),
      J1(g);
  }
  return n;
}
He.prototype.addListener = function (t, r) {
  return qf(this, t, r, !1);
};
He.prototype.on = He.prototype.addListener;
He.prototype.prependListener = function (t, r) {
  return qf(this, t, r, !0);
};
function Q1() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function zf(n, t, r) {
  var s = { fired: !1, wrapFn: void 0, target: n, type: t, listener: r },
    a = Q1.bind(s);
  return (a.listener = r), (s.wrapFn = a), a;
}
He.prototype.once = function (t, r) {
  return qo(r), this.on(t, zf(this, t, r)), this;
};
He.prototype.prependOnceListener = function (t, r) {
  return qo(r), this.prependListener(t, zf(this, t, r)), this;
};
He.prototype.removeListener = function (t, r) {
  var s, a, u, f, g;
  if ((qo(r), (a = this._events), a === void 0)) return this;
  if (((s = a[t]), s === void 0)) return this;
  if (s === r || s.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete a[t], a.removeListener && this.emit('removeListener', t, s.listener || r));
  else if (typeof s != 'function') {
    for (u = -1, f = s.length - 1; f >= 0; f--)
      if (s[f] === r || s[f].listener === r) {
        (g = s[f].listener), (u = f);
        break;
      }
    if (u < 0) return this;
    u === 0 ? s.shift() : Y1(s, u),
      s.length === 1 && (a[t] = s[0]),
      a.removeListener !== void 0 && this.emit('removeListener', t, g || r);
  }
  return this;
};
He.prototype.off = He.prototype.removeListener;
He.prototype.removeAllListeners = function (t) {
  var r, s, a;
  if (((s = this._events), s === void 0)) return this;
  if (s.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : s[t] !== void 0 &&
          (--this._eventsCount === 0 ? (this._events = Object.create(null)) : delete s[t]),
      this
    );
  if (arguments.length === 0) {
    var u = Object.keys(s),
      f;
    for (a = 0; a < u.length; ++a) (f = u[a]), f !== 'removeListener' && this.removeAllListeners(f);
    return (
      this.removeAllListeners('removeListener'),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = s[t]), typeof r == 'function')) this.removeListener(t, r);
  else if (r !== void 0) for (a = r.length - 1; a >= 0; a--) this.removeListener(t, r[a]);
  return this;
};
function kf(n, t, r) {
  var s = n._events;
  if (s === void 0) return [];
  var a = s[t];
  return a === void 0
    ? []
    : typeof a == 'function'
      ? r
        ? [a.listener || a]
        : [a]
      : r
        ? X1(a)
        : Bf(a, a.length);
}
He.prototype.listeners = function (t) {
  return kf(this, t, !0);
};
He.prototype.rawListeners = function (t) {
  return kf(this, t, !1);
};
He.listenerCount = function (n, t) {
  return typeof n.listenerCount == 'function' ? n.listenerCount(t) : Hf.call(n, t);
};
He.prototype.listenerCount = Hf;
function Hf(n) {
  var t = this._events;
  if (t !== void 0) {
    var r = t[n];
    if (typeof r == 'function') return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
He.prototype.eventNames = function () {
  return this._eventsCount > 0 ? Oo(this._events) : [];
};
function Bf(n, t) {
  for (var r = new Array(t), s = 0; s < t; ++s) r[s] = n[s];
  return r;
}
function Y1(n, t) {
  for (; t + 1 < n.length; t++) n[t] = n[t + 1];
  n.pop();
}
function X1(n) {
  for (var t = new Array(n.length), r = 0; r < t.length; ++r) t[r] = n[r].listener || n[r];
  return t;
}
function Z1(n, t) {
  return new Promise(function (r, s) {
    function a(f) {
      n.removeListener(t, u), s(f);
    }
    function u() {
      typeof n.removeListener == 'function' && n.removeListener('error', a),
        r([].slice.call(arguments));
    }
    Kf(n, t, u, { once: !0 }), t !== 'error' && ew(n, a, { once: !0 });
  });
}
function ew(n, t, r) {
  typeof n.on == 'function' && Kf(n, 'error', t, r);
}
function Kf(n, t, r, s) {
  if (typeof n.on == 'function') s.once ? n.once(t, r) : n.on(t, r);
  else if (typeof n.addEventListener == 'function')
    n.addEventListener(t, function a(u) {
      s.once && n.removeEventListener(t, a), r(u);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' + typeof n,
    );
}
const tw = ':';
function rw(n) {
  const [t, r] = n.split(tw);
  return { namespace: t, reference: r };
}
function iw(n, t = []) {
  const r = [];
  return (
    Object.keys(n).forEach((s) => {
      if (t.length && !t.includes(s)) return;
      const a = n[s];
      r.push(...a.accounts);
    }),
    r
  );
}
function Vf(n, t) {
  return n.includes(':') ? [n] : t.chains || [];
}
const Wf = 'base10',
  or = 'base16',
  Dc = 'base64pad',
  Wc = 'utf8',
  Gf = 0,
  Xi = 1,
  nw = 0,
  gl = 1,
  Lc = 12,
  Gc = 32;
function sw() {
  const n = Nf.generateKeyPair();
  return { privateKey: ar(n.secretKey, or), publicKey: ar(n.publicKey, or) };
}
function Fc() {
  const n = Uo.randomBytes(Gc);
  return ar(n, or);
}
function ow(n, t) {
  const r = Nf.sharedKey(vr(n, or), vr(t, or), !0),
    s = new A1(Kc.SHA256, r).expand(Gc);
  return ar(s, or);
}
function aw(n) {
  const t = Kc.hash(vr(n, or));
  return ar(t, or);
}
function Pn(n) {
  const t = Kc.hash(vr(n, Wc));
  return ar(t, or);
}
function cw(n) {
  return vr(`${n}`, Wf);
}
function ls(n) {
  return Number(ar(n, Wf));
}
function uw(n) {
  const t = cw(typeof n.type < 'u' ? n.type : Gf);
  if (ls(t) === Xi && typeof n.senderPublicKey > 'u')
    throw new Error('Missing sender public key for type 1 envelope');
  const r = typeof n.senderPublicKey < 'u' ? vr(n.senderPublicKey, or) : void 0,
    s = typeof n.iv < 'u' ? vr(n.iv, or) : Uo.randomBytes(Lc),
    a = new $f.ChaCha20Poly1305(vr(n.symKey, or)).seal(s, vr(n.message, Wc));
  return lw({ type: t, sealed: a, iv: s, senderPublicKey: r });
}
function hw(n) {
  const t = new $f.ChaCha20Poly1305(vr(n.symKey, or)),
    { sealed: r, iv: s } = $o(n.encoded),
    a = t.open(s, r);
  if (a === null) throw new Error('Failed to decrypt');
  return ar(a, Wc);
}
function lw(n) {
  if (ls(n.type) === Xi) {
    if (typeof n.senderPublicKey > 'u')
      throw new Error('Missing sender public key for type 1 envelope');
    return ar($c([n.type, n.senderPublicKey, n.iv, n.sealed]), Dc);
  }
  return ar($c([n.type, n.iv, n.sealed]), Dc);
}
function $o(n) {
  const t = vr(n, Dc),
    r = t.slice(nw, gl),
    s = gl;
  if (ls(r) === Xi) {
    const g = s + Gc,
      b = g + Lc,
      y = t.slice(s, g),
      E = t.slice(g, b),
      O = t.slice(b);
    return { type: r, sealed: O, iv: E, senderPublicKey: y };
  }
  const a = s + Lc,
    u = t.slice(s, a),
    f = t.slice(a);
  return { type: r, sealed: f, iv: u };
}
function fw(n, t) {
  const r = $o(n);
  return Jf({
    type: ls(r.type),
    senderPublicKey: typeof r.senderPublicKey < 'u' ? ar(r.senderPublicKey, or) : void 0,
    receiverPublicKey: t == null ? void 0 : t.receiverPublicKey,
  });
}
function Jf(n) {
  const t = (n == null ? void 0 : n.type) || Gf;
  if (t === Xi) {
    if (typeof (n == null ? void 0 : n.senderPublicKey) > 'u')
      throw new Error('missing sender public key');
    if (typeof (n == null ? void 0 : n.receiverPublicKey) > 'u')
      throw new Error('missing receiver public key');
  }
  return {
    type: t,
    senderPublicKey: n == null ? void 0 : n.senderPublicKey,
    receiverPublicKey: n == null ? void 0 : n.receiverPublicKey,
  };
}
function yl(n) {
  return (
    n.type === Xi && typeof n.senderPublicKey == 'string' && typeof n.receiverPublicKey == 'string'
  );
}
var pw = Object.defineProperty,
  vl = Object.getOwnPropertySymbols,
  dw = Object.prototype.hasOwnProperty,
  gw = Object.prototype.propertyIsEnumerable,
  ml = (n, t, r) =>
    t in n ? pw(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  wl = (n, t) => {
    for (var r in t || (t = {})) dw.call(t, r) && ml(n, r, t[r]);
    if (vl) for (var r of vl(t)) gw.call(t, r) && ml(n, r, t[r]);
    return n;
  };
const yw = 'ReactNative',
  xr = { reactNative: 'react-native', node: 'node', browser: 'browser', unknown: 'unknown' },
  vw = 'js';
function Jc() {
  return (
    typeof process < 'u' && typeof process.versions < 'u' && typeof process.versions.node < 'u'
  );
}
function Cn() {
  return !R1() && !!Tf() && navigator.product === yw;
}
function Tn() {
  return !Jc() && !!Tf();
}
function fs() {
  return Cn() ? xr.reactNative : Jc() ? xr.node : Tn() ? xr.browser : xr.unknown;
}
function mw() {
  var n;
  try {
    return Cn() &&
      typeof global < 'u' &&
      typeof (global == null ? void 0 : global.Application) < 'u'
      ? (n = global.Application) == null
        ? void 0
        : n.applicationId
      : void 0;
  } catch {
    return;
  }
}
function ww(n, t) {
  let r = No.parse(n);
  return (r = wl(wl({}, r), t)), (n = No.stringify(r)), n;
}
function bw() {
  return O1() || { name: '', description: '', url: '', icons: [''] };
}
function _w() {
  if (
    fs() === xr.reactNative &&
    typeof global < 'u' &&
    typeof (global == null ? void 0 : global.Platform) < 'u'
  ) {
    const { OS: r, Version: s } = global.Platform;
    return [r, s].join('-');
  }
  const n = k1();
  if (n === null) return 'unknown';
  const t = n.os ? n.os.replace(' ', '').toLowerCase() : 'unknown';
  return n.type === 'browser' ? [t, n.name, n.version].join('-') : [t, n.version].join('-');
}
function Ew() {
  var n;
  const t = fs();
  return t === xr.browser ? [t, ((n = C1()) == null ? void 0 : n.host) || 'unknown'].join(':') : t;
}
function Iw(n, t, r) {
  const s = _w(),
    a = Ew();
  return [[n, t].join('-'), [vw, r].join('-'), s, a].join('/');
}
function xw({
  protocol: n,
  version: t,
  relayUrl: r,
  sdkVersion: s,
  auth: a,
  projectId: u,
  useOnCloseEvent: f,
  bundleId: g,
}) {
  const b = r.split('?'),
    y = Iw(n, t, s),
    E = { auth: a, ua: y, projectId: u, useOnCloseEvent: f || void 0, origin: g || void 0 },
    O = ww(b[1] || '', E);
  return b[0] + '?' + O;
}
function Qi(n, t) {
  return n.filter((r) => t.includes(r)).length === n.length;
}
function Qf(n) {
  return Object.fromEntries(n.entries());
}
function Yf(n) {
  return new Map(Object.entries(n));
}
function In(n = re.FIVE_MINUTES, t) {
  const r = re.toMiliseconds(n || re.FIVE_MINUTES);
  let s, a, u;
  return {
    resolve: (f) => {
      u && s && (clearTimeout(u), s(f));
    },
    reject: (f) => {
      u && a && (clearTimeout(u), a(f));
    },
    done: () =>
      new Promise((f, g) => {
        (u = setTimeout(() => {
          g(new Error(t));
        }, r)),
          (s = f),
          (a = g);
      }),
  };
}
function hs(n, t, r) {
  return new Promise(async (s, a) => {
    const u = setTimeout(() => a(new Error(r)), t);
    try {
      const f = await n;
      s(f);
    } catch (f) {
      a(f);
    }
    clearTimeout(u);
  });
}
function Xf(n, t) {
  if (typeof t == 'string' && t.startsWith(`${n}:`)) return t;
  if (n.toLowerCase() === 'topic') {
    if (typeof t != 'string')
      throw new Error('Value must be "string" for expirer target type: topic');
    return `topic:${t}`;
  } else if (n.toLowerCase() === 'id') {
    if (typeof t != 'number') throw new Error('Value must be "number" for expirer target type: id');
    return `id:${t}`;
  }
  throw new Error(`Unknown expirer target type: ${n}`);
}
function Sw(n) {
  return Xf('topic', n);
}
function Pw(n) {
  return Xf('id', n);
}
function Zf(n) {
  const [t, r] = n.split(':'),
    s = { id: void 0, topic: void 0 };
  if (t === 'topic' && typeof r == 'string') s.topic = r;
  else if (t === 'id' && Number.isInteger(Number(r))) s.id = Number(r);
  else throw new Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
  return s;
}
function kr(n, t) {
  return re.fromMiliseconds((t || Date.now()) + re.toMiliseconds(n));
}
function Ci(n) {
  return Date.now() >= re.toMiliseconds(n);
}
function Lt(n, t) {
  return `${n}${t ? `:${t}` : ''}`;
}
function yc(n = [], t = []) {
  return [...new Set([...n, ...t])];
}
async function Ow({ id: n, topic: t, wcDeepLink: r }) {
  try {
    if (!r) return;
    const s = typeof r == 'string' ? JSON.parse(r) : r;
    let a = s == null ? void 0 : s.href;
    if (typeof a != 'string') return;
    a.endsWith('/') && (a = a.slice(0, -1));
    const u = `${a}/wc?requestId=${n}&sessionTopic=${t}`,
      f = fs();
    f === xr.browser
      ? u.startsWith('https://')
        ? window.open(u, '_blank', 'noreferrer noopener')
        : window.open(u, '_self', 'noreferrer noopener')
      : f === xr.reactNative &&
        typeof (global == null ? void 0 : global.Linking) < 'u' &&
        (await global.Linking.openURL(u));
  } catch (s) {
    console.error(s);
  }
}
async function Aw(n, t) {
  try {
    return (await n.getItem(t)) || (Tn() ? localStorage.getItem(t) : void 0);
  } catch (r) {
    console.error(r);
  }
}
const Rw = 'irn';
function Mc(n) {
  return (n == null ? void 0 : n.relay) || { protocol: Rw };
}
function Ao(n) {
  const t = W1[n];
  if (typeof t > 'u') throw new Error(`Relay Protocol not supported: ${n}`);
  return t;
}
var Cw = Object.defineProperty,
  bl = Object.getOwnPropertySymbols,
  Tw = Object.prototype.hasOwnProperty,
  Nw = Object.prototype.propertyIsEnumerable,
  _l = (n, t, r) =>
    t in n ? Cw(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  $w = (n, t) => {
    for (var r in t || (t = {})) Tw.call(t, r) && _l(n, r, t[r]);
    if (bl) for (var r of bl(t)) Nw.call(t, r) && _l(n, r, t[r]);
    return n;
  };
function Dw(n, t = '-') {
  const r = {},
    s = 'relay' + t;
  return (
    Object.keys(n).forEach((a) => {
      if (a.startsWith(s)) {
        const u = a.replace(s, ''),
          f = n[a];
        r[u] = f;
      }
    }),
    r
  );
}
function El(n) {
  (n = n.includes('wc://') ? n.replace('wc://', '') : n),
    (n = n.includes('wc:') ? n.replace('wc:', '') : n);
  const t = n.indexOf(':'),
    r = n.indexOf('?') !== -1 ? n.indexOf('?') : void 0,
    s = n.substring(0, t),
    a = n.substring(t + 1, r).split('@'),
    u = typeof r < 'u' ? n.substring(r) : '',
    f = No.parse(u);
  return {
    protocol: s,
    topic: Lw(a[0]),
    version: parseInt(a[1], 10),
    symKey: f.symKey,
    relay: Dw(f),
  };
}
function Lw(n) {
  return n.startsWith('//') ? n.substring(2) : n;
}
function Fw(n, t = '-') {
  const r = 'relay',
    s = {};
  return (
    Object.keys(n).forEach((a) => {
      const u = r + t + a;
      n[a] && (s[u] = n[a]);
    }),
    s
  );
}
function Mw(n) {
  return (
    `${n.protocol}:${n.topic}@${n.version}?` + No.stringify($w({ symKey: n.symKey }, Fw(n.relay)))
  );
}
function Nn(n) {
  const t = [];
  return (
    n.forEach((r) => {
      const [s, a] = r.split(':');
      t.push(`${s}:${a}`);
    }),
    t
  );
}
function jw(n) {
  const t = [];
  return (
    Object.values(n).forEach((r) => {
      t.push(...Nn(r.accounts));
    }),
    t
  );
}
function Uw(n, t) {
  const r = [];
  return (
    Object.values(n).forEach((s) => {
      Nn(s.accounts).includes(t) && r.push(...s.methods);
    }),
    r
  );
}
function qw(n, t) {
  const r = [];
  return (
    Object.values(n).forEach((s) => {
      Nn(s.accounts).includes(t) && r.push(...s.events);
    }),
    r
  );
}
function zw(n, t) {
  const r = Ro(n, t);
  if (r) throw new Error(r.message);
  const s = {};
  for (const [a, u] of Object.entries(n))
    s[a] = {
      methods: u.methods,
      events: u.events,
      chains: u.accounts.map((f) => `${f.split(':')[0]}:${f.split(':')[1]}`),
    };
  return s;
}
function Qc(n) {
  return n.includes(':');
}
function os(n) {
  return Qc(n) ? n.split(':')[0] : n;
}
const kw = {
    INVALID_METHOD: { message: 'Invalid method.', code: 1001 },
    INVALID_EVENT: { message: 'Invalid event.', code: 1002 },
    INVALID_UPDATE_REQUEST: { message: 'Invalid update request.', code: 1003 },
    INVALID_EXTEND_REQUEST: { message: 'Invalid extend request.', code: 1004 },
    INVALID_SESSION_SETTLE_REQUEST: { message: 'Invalid session settle request.', code: 1005 },
    UNAUTHORIZED_METHOD: { message: 'Unauthorized method.', code: 3001 },
    UNAUTHORIZED_EVENT: { message: 'Unauthorized event.', code: 3002 },
    UNAUTHORIZED_UPDATE_REQUEST: { message: 'Unauthorized update request.', code: 3003 },
    UNAUTHORIZED_EXTEND_REQUEST: { message: 'Unauthorized extend request.', code: 3004 },
    USER_REJECTED: { message: 'User rejected.', code: 5e3 },
    USER_REJECTED_CHAINS: { message: 'User rejected chains.', code: 5001 },
    USER_REJECTED_METHODS: { message: 'User rejected methods.', code: 5002 },
    USER_REJECTED_EVENTS: { message: 'User rejected events.', code: 5003 },
    UNSUPPORTED_CHAINS: { message: 'Unsupported chains.', code: 5100 },
    UNSUPPORTED_METHODS: { message: 'Unsupported methods.', code: 5101 },
    UNSUPPORTED_EVENTS: { message: 'Unsupported events.', code: 5102 },
    UNSUPPORTED_ACCOUNTS: { message: 'Unsupported accounts.', code: 5103 },
    UNSUPPORTED_NAMESPACE_KEY: { message: 'Unsupported namespace key.', code: 5104 },
    USER_DISCONNECTED: { message: 'User disconnected.', code: 6e3 },
    SESSION_SETTLEMENT_FAILED: { message: 'Session settlement failed.', code: 7e3 },
    WC_METHOD_UNSUPPORTED: { message: 'Unsupported wc_ method.', code: 10001 },
  },
  Hw = {
    NOT_INITIALIZED: { message: 'Not initialized.', code: 1 },
    NO_MATCHING_KEY: { message: 'No matching key.', code: 2 },
    RESTORE_WILL_OVERRIDE: { message: 'Restore will override.', code: 3 },
    RESUBSCRIBED: { message: 'Resubscribed.', code: 4 },
    MISSING_OR_INVALID: { message: 'Missing or invalid.', code: 5 },
    EXPIRED: { message: 'Expired.', code: 6 },
    UNKNOWN_TYPE: { message: 'Unknown type.', code: 7 },
    MISMATCHED_TOPIC: { message: 'Mismatched topic.', code: 8 },
    NON_CONFORMING_NAMESPACES: { message: 'Non conforming namespaces.', code: 9 },
  };
function J(n, t) {
  const { message: r, code: s } = Hw[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function xt(n, t) {
  const { message: r, code: s } = kw[n];
  return { message: t ? `${r} ${t}` : r, code: s };
}
function Zr(n, t) {
  return Array.isArray(n) ? (typeof t < 'u' && n.length ? n.every(t) : !0) : !1;
}
function On(n) {
  return Object.getPrototypeOf(n) === Object.prototype && Object.keys(n).length;
}
function sr(n) {
  return typeof n > 'u';
}
function Ht(n, t) {
  return t && sr(n) ? !0 : typeof n == 'string' && !!n.trim().length;
}
function Yc(n, t) {
  return t && sr(n) ? !0 : typeof n == 'number' && !isNaN(n);
}
function Bw(n, t) {
  const { requiredNamespaces: r } = t,
    s = Object.keys(n.namespaces),
    a = Object.keys(r);
  let u = !0;
  return Qi(a, s)
    ? (s.forEach((f) => {
        const { accounts: g, methods: b, events: y } = n.namespaces[f],
          E = Nn(g),
          O = r[f];
        (!Qi(Vf(f, O), E) || !Qi(O.methods, b) || !Qi(O.events, y)) && (u = !1);
      }),
      u)
    : !1;
}
function Do(n) {
  return Ht(n, !1) && n.includes(':') ? n.split(':').length === 2 : !1;
}
function Kw(n) {
  if (Ht(n, !1) && n.includes(':')) {
    const t = n.split(':');
    if (t.length === 3) {
      const r = t[0] + ':' + t[1];
      return !!t[2] && Do(r);
    }
  }
  return !1;
}
function Vw(n) {
  if (Ht(n, !1))
    try {
      return typeof new URL(n) < 'u';
    } catch {
      return !1;
    }
  return !1;
}
function Ww(n) {
  var t;
  return (t = n == null ? void 0 : n.proposer) == null ? void 0 : t.publicKey;
}
function Gw(n) {
  return n == null ? void 0 : n.topic;
}
function Jw(n, t) {
  let r = null;
  return (
    Ht(n == null ? void 0 : n.publicKey, !1) ||
      (r = J('MISSING_OR_INVALID', `${t} controller public key should be a string`)),
    r
  );
}
function Il(n) {
  let t = !0;
  return Zr(n) ? n.length && (t = n.every((r) => Ht(r, !1))) : (t = !1), t;
}
function Qw(n, t, r) {
  let s = null;
  return (
    Zr(t) && t.length
      ? t.forEach((a) => {
          s ||
            Do(a) ||
            (s = xt(
              'UNSUPPORTED_CHAINS',
              `${r}, chain ${a} should be a string and conform to "namespace:chainId" format`,
            ));
        })
      : Do(n) ||
        (s = xt(
          'UNSUPPORTED_CHAINS',
          `${r}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`,
        )),
    s
  );
}
function Yw(n, t, r) {
  let s = null;
  return (
    Object.entries(n).forEach(([a, u]) => {
      if (s) return;
      const f = Qw(a, Vf(a, u), `${t} ${r}`);
      f && (s = f);
    }),
    s
  );
}
function Xw(n, t) {
  let r = null;
  return (
    Zr(n)
      ? n.forEach((s) => {
          r ||
            Kw(s) ||
            (r = xt(
              'UNSUPPORTED_ACCOUNTS',
              `${t}, account ${s} should be a string and conform to "namespace:chainId:address" format`,
            ));
        })
      : (r = xt(
          'UNSUPPORTED_ACCOUNTS',
          `${t}, accounts should be an array of strings conforming to "namespace:chainId:address" format`,
        )),
    r
  );
}
function Zw(n, t) {
  let r = null;
  return (
    Object.values(n).forEach((s) => {
      if (r) return;
      const a = Xw(s == null ? void 0 : s.accounts, `${t} namespace`);
      a && (r = a);
    }),
    r
  );
}
function eb(n, t) {
  let r = null;
  return (
    Il(n == null ? void 0 : n.methods)
      ? Il(n == null ? void 0 : n.events) ||
        (r = xt(
          'UNSUPPORTED_EVENTS',
          `${t}, events should be an array of strings or empty array for no events`,
        ))
      : (r = xt(
          'UNSUPPORTED_METHODS',
          `${t}, methods should be an array of strings or empty array for no methods`,
        )),
    r
  );
}
function ep(n, t) {
  let r = null;
  return (
    Object.values(n).forEach((s) => {
      if (r) return;
      const a = eb(s, `${t}, namespace`);
      a && (r = a);
    }),
    r
  );
}
function tb(n, t, r) {
  let s = null;
  if (n && On(n)) {
    const a = ep(n, t);
    a && (s = a);
    const u = Yw(n, t, r);
    u && (s = u);
  } else s = J('MISSING_OR_INVALID', `${t}, ${r} should be an object with data`);
  return s;
}
function Ro(n, t) {
  let r = null;
  if (n && On(n)) {
    const s = ep(n, t);
    s && (r = s);
    const a = Zw(n, t);
    a && (r = a);
  } else r = J('MISSING_OR_INVALID', `${t}, namespaces should be an object with data`);
  return r;
}
function tp(n) {
  return Ht(n.protocol, !0);
}
function rb(n, t) {
  let r = !1;
  return (
    t && !n
      ? (r = !0)
      : n &&
        Zr(n) &&
        n.length &&
        n.forEach((s) => {
          r = tp(s);
        }),
    r
  );
}
function ib(n) {
  return typeof n == 'number';
}
function yr(n) {
  return typeof n < 'u' && typeof n !== null;
}
function nb(n) {
  return !(
    !n ||
    typeof n != 'object' ||
    !n.code ||
    !Yc(n.code, !1) ||
    !n.message ||
    !Ht(n.message, !1)
  );
}
function sb(n) {
  return !(sr(n) || !Ht(n.method, !1));
}
function ob(n) {
  return !(sr(n) || (sr(n.result) && sr(n.error)) || !Yc(n.id, !1) || !Ht(n.jsonrpc, !1));
}
function ab(n) {
  return !(sr(n) || !Ht(n.name, !1));
}
function xl(n, t) {
  return !(!Do(t) || !jw(n).includes(t));
}
function cb(n, t, r) {
  return Ht(r, !1) ? Uw(n, t).includes(r) : !1;
}
function ub(n, t, r) {
  return Ht(r, !1) ? qw(n, t).includes(r) : !1;
}
function Sl(n, t, r) {
  let s = null;
  const a = hb(n),
    u = lb(t),
    f = Object.keys(a),
    g = Object.keys(u),
    b = Pl(Object.keys(n)),
    y = Pl(Object.keys(t)),
    E = b.filter((O) => !y.includes(O));
  return (
    E.length &&
      (s = J(
        'NON_CONFORMING_NAMESPACES',
        `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${E.toString()}
      Received: ${Object.keys(t).toString()}`,
      )),
    Qi(f, g) ||
      (s = J(
        'NON_CONFORMING_NAMESPACES',
        `${r} namespaces chains don't satisfy required namespaces.
      Required: ${f.toString()}
      Approved: ${g.toString()}`,
      )),
    Object.keys(t).forEach((O) => {
      if (!O.includes(':') || s) return;
      const T = Nn(t[O].accounts);
      T.includes(O) ||
        (s = J(
          'NON_CONFORMING_NAMESPACES',
          `${r} namespaces accounts don't satisfy namespace accounts for ${O}
        Required: ${O}
        Approved: ${T.toString()}`,
        ));
    }),
    f.forEach((O) => {
      s ||
        (Qi(a[O].methods, u[O].methods)
          ? Qi(a[O].events, u[O].events) ||
            (s = J(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces events don't satisfy namespace events for ${O}`,
            ))
          : (s = J(
              'NON_CONFORMING_NAMESPACES',
              `${r} namespaces methods don't satisfy namespace methods for ${O}`,
            )));
    }),
    s
  );
}
function hb(n) {
  const t = {};
  return (
    Object.keys(n).forEach((r) => {
      var s;
      r.includes(':')
        ? (t[r] = n[r])
        : (s = n[r].chains) == null ||
          s.forEach((a) => {
            t[a] = { methods: n[r].methods, events: n[r].events };
          });
    }),
    t
  );
}
function Pl(n) {
  return [...new Set(n.map((t) => (t.includes(':') ? t.split(':')[0] : t)))];
}
function lb(n) {
  const t = {};
  return (
    Object.keys(n).forEach((r) => {
      if (r.includes(':')) t[r] = n[r];
      else {
        const s = Nn(n[r].accounts);
        s == null ||
          s.forEach((a) => {
            t[a] = {
              accounts: n[r].accounts.filter((u) => u.includes(`${a}:`)),
              methods: n[r].methods,
              events: n[r].events,
            };
          });
      }
    }),
    t
  );
}
function fb(n, t) {
  return Yc(n, !1) && n <= t.max && n >= t.min;
}
function Ol() {
  const n = fs();
  return new Promise((t) => {
    switch (n) {
      case xr.browser:
        t(pb());
        break;
      case xr.reactNative:
        t(db());
        break;
      case xr.node:
        t(gb());
        break;
      default:
        t(!0);
    }
  });
}
function pb() {
  return Tn() && (navigator == null ? void 0 : navigator.onLine);
}
async function db() {
  if (Cn() && typeof global < 'u' && global != null && global.NetInfo) {
    const n = await (global == null ? void 0 : global.NetInfo.fetch());
    return n == null ? void 0 : n.isConnected;
  }
  return !0;
}
function gb() {
  return !0;
}
function yb(n) {
  switch (fs()) {
    case xr.browser:
      vb(n);
      break;
    case xr.reactNative:
      mb(n);
      break;
  }
}
function vb(n) {
  !Cn() &&
    Tn() &&
    (window.addEventListener('online', () => n(!0)),
    window.addEventListener('offline', () => n(!1)));
}
function mb(n) {
  Cn() &&
    typeof global < 'u' &&
    global != null &&
    global.NetInfo &&
    (global == null ||
      global.NetInfo.addEventListener((t) => n(t == null ? void 0 : t.isConnected)));
}
const vc = {};
let _o = class {
  static get(t) {
    return vc[t];
  }
  static set(t, r) {
    vc[t] = r;
  }
  static delete(t) {
    delete vc[t];
  }
};
const wb =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  bb =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  _b = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function Eb(n, t) {
  if (n === '__proto__' || (n === 'constructor' && t && typeof t == 'object' && 'prototype' in t)) {
    Ib(n);
    return;
  }
  return t;
}
function Ib(n) {
  console.warn(`[destr] Dropping "${n}" key to prevent prototype pollution.`);
}
function Eo(n, t = {}) {
  if (typeof n != 'string') return n;
  const r = n.trim();
  if (n[0] === '"' && n.at(-1) === '"' && !n.includes('\\')) return r.slice(1, -1);
  if (r.length <= 9) {
    const s = r.toLowerCase();
    if (s === 'true') return !0;
    if (s === 'false') return !1;
    if (s === 'undefined') return;
    if (s === 'null') return null;
    if (s === 'nan') return Number.NaN;
    if (s === 'infinity') return Number.POSITIVE_INFINITY;
    if (s === '-infinity') return Number.NEGATIVE_INFINITY;
  }
  if (!_b.test(n)) {
    if (t.strict) throw new SyntaxError('[destr] Invalid JSON');
    return n;
  }
  try {
    if (wb.test(n) || bb.test(n)) {
      if (t.strict) throw new Error('[destr] Possible prototype pollution');
      return JSON.parse(n, Eb);
    }
    return JSON.parse(n);
  } catch (s) {
    if (t.strict) throw s;
    return n;
  }
}
function xb(n) {
  return !n || typeof n.then != 'function' ? Promise.resolve(n) : n;
}
function kt(n, ...t) {
  try {
    return xb(n(...t));
  } catch (r) {
    return Promise.reject(r);
  }
}
function Sb(n) {
  const t = typeof n;
  return n === null || (t !== 'object' && t !== 'function');
}
function Pb(n) {
  const t = Object.getPrototypeOf(n);
  return !t || t.isPrototypeOf(Object);
}
function Co(n) {
  if (Sb(n)) return String(n);
  if (Pb(n) || Array.isArray(n)) return JSON.stringify(n);
  if (typeof n.toJSON == 'function') return Co(n.toJSON());
  throw new Error('[unstorage] Cannot stringify value!');
}
function rp() {
  if (typeof Buffer === void 0) throw new TypeError('[unstorage] Buffer is not supported!');
}
const jc = 'base64:';
function Ob(n) {
  if (typeof n == 'string') return n;
  rp();
  const t = Buffer.from(n).toString('base64');
  return jc + t;
}
function Ab(n) {
  return typeof n != 'string' || !n.startsWith(jc)
    ? n
    : (rp(), Buffer.from(n.slice(jc.length), 'base64'));
}
function gr(n) {
  return n ? n.split('?')[0].replace(/[/\\]/g, ':').replace(/:+/g, ':').replace(/^:|:$/g, '') : '';
}
function Rb(...n) {
  return gr(n.join(':'));
}
function Io(n) {
  return (n = gr(n)), n ? n + ':' : '';
}
const Cb = 'memory',
  Tb = () => {
    const n = new Map();
    return {
      name: Cb,
      options: {},
      hasItem(t) {
        return n.has(t);
      },
      getItem(t) {
        return n.get(t) ?? null;
      },
      getItemRaw(t) {
        return n.get(t) ?? null;
      },
      setItem(t, r) {
        n.set(t, r);
      },
      setItemRaw(t, r) {
        n.set(t, r);
      },
      removeItem(t) {
        n.delete(t);
      },
      getKeys() {
        return Array.from(n.keys());
      },
      clear() {
        n.clear();
      },
      dispose() {
        n.clear();
      },
    };
  };
function Nb(n = {}) {
  const t = {
      mounts: { '': n.driver || Tb() },
      mountpoints: [''],
      watching: !1,
      watchListeners: [],
      unwatch: {},
    },
    r = (y) => {
      for (const E of t.mountpoints)
        if (y.startsWith(E))
          return { base: E, relativeKey: y.slice(E.length), driver: t.mounts[E] };
      return { base: '', relativeKey: y, driver: t.mounts[''] };
    },
    s = (y, E) =>
      t.mountpoints
        .filter((O) => O.startsWith(y) || (E && y.startsWith(O)))
        .map((O) => ({
          relativeBase: y.length > O.length ? y.slice(O.length) : void 0,
          mountpoint: O,
          driver: t.mounts[O],
        })),
    a = (y, E) => {
      if (t.watching) {
        E = gr(E);
        for (const O of t.watchListeners) O(y, E);
      }
    },
    u = async () => {
      if (!t.watching) {
        t.watching = !0;
        for (const y in t.mounts) t.unwatch[y] = await Al(t.mounts[y], a, y);
      }
    },
    f = async () => {
      if (t.watching) {
        for (const y in t.unwatch) await t.unwatch[y]();
        (t.unwatch = {}), (t.watching = !1);
      }
    },
    g = (y, E, O) => {
      const T = new Map(),
        U = (C) => {
          let K = T.get(C.base);
          return K || ((K = { driver: C.driver, base: C.base, items: [] }), T.set(C.base, K)), K;
        };
      for (const C of y) {
        const K = typeof C == 'string',
          ie = gr(K ? C : C.key),
          he = K ? void 0 : C.value,
          le = K || !C.options ? E : { ...E, ...C.options },
          fe = r(ie);
        U(fe).items.push({ key: ie, value: he, relativeKey: fe.relativeKey, options: le });
      }
      return Promise.all([...T.values()].map((C) => O(C))).then((C) => C.flat());
    },
    b = {
      hasItem(y, E = {}) {
        y = gr(y);
        const { relativeKey: O, driver: T } = r(y);
        return kt(T.hasItem, O, E);
      },
      getItem(y, E = {}) {
        y = gr(y);
        const { relativeKey: O, driver: T } = r(y);
        return kt(T.getItem, O, E).then((U) => Eo(U));
      },
      getItems(y, E) {
        return g(y, E, (O) =>
          O.driver.getItems
            ? kt(
                O.driver.getItems,
                O.items.map((T) => ({ key: T.relativeKey, options: T.options })),
                E,
              ).then((T) => T.map((U) => ({ key: Rb(O.base, U.key), value: Eo(U.value) })))
            : Promise.all(
                O.items.map((T) =>
                  kt(O.driver.getItem, T.relativeKey, T.options).then((U) => ({
                    key: T.key,
                    value: Eo(U),
                  })),
                ),
              ),
        );
      },
      getItemRaw(y, E = {}) {
        y = gr(y);
        const { relativeKey: O, driver: T } = r(y);
        return T.getItemRaw ? kt(T.getItemRaw, O, E) : kt(T.getItem, O, E).then((U) => Ab(U));
      },
      async setItem(y, E, O = {}) {
        if (E === void 0) return b.removeItem(y);
        y = gr(y);
        const { relativeKey: T, driver: U } = r(y);
        U.setItem && (await kt(U.setItem, T, Co(E), O), U.watch || a('update', y));
      },
      async setItems(y, E) {
        await g(y, E, async (O) => {
          O.driver.setItems &&
            (await kt(
              O.driver.setItems,
              O.items.map((T) => ({ key: T.relativeKey, value: Co(T.value), options: T.options })),
              E,
            )),
            O.driver.setItem &&
              (await Promise.all(
                O.items.map((T) => kt(O.driver.setItem, T.relativeKey, Co(T.value), T.options)),
              ));
        });
      },
      async setItemRaw(y, E, O = {}) {
        if (E === void 0) return b.removeItem(y, O);
        y = gr(y);
        const { relativeKey: T, driver: U } = r(y);
        if (U.setItemRaw) await kt(U.setItemRaw, T, E, O);
        else if (U.setItem) await kt(U.setItem, T, Ob(E), O);
        else return;
        U.watch || a('update', y);
      },
      async removeItem(y, E = {}) {
        typeof E == 'boolean' && (E = { removeMeta: E }), (y = gr(y));
        const { relativeKey: O, driver: T } = r(y);
        T.removeItem &&
          (await kt(T.removeItem, O, E),
          (E.removeMeta || E.removeMata) && (await kt(T.removeItem, O + '$', E)),
          T.watch || a('remove', y));
      },
      async getMeta(y, E = {}) {
        typeof E == 'boolean' && (E = { nativeOnly: E }), (y = gr(y));
        const { relativeKey: O, driver: T } = r(y),
          U = Object.create(null);
        if ((T.getMeta && Object.assign(U, await kt(T.getMeta, O, E)), !E.nativeOnly)) {
          const C = await kt(T.getItem, O + '$', E).then((K) => Eo(K));
          C &&
            typeof C == 'object' &&
            (typeof C.atime == 'string' && (C.atime = new Date(C.atime)),
            typeof C.mtime == 'string' && (C.mtime = new Date(C.mtime)),
            Object.assign(U, C));
        }
        return U;
      },
      setMeta(y, E, O = {}) {
        return this.setItem(y + '$', E, O);
      },
      removeMeta(y, E = {}) {
        return this.removeItem(y + '$', E);
      },
      async getKeys(y, E = {}) {
        y = Io(y);
        const O = s(y, !0);
        let T = [];
        const U = [];
        for (const C of O) {
          const ie = (await kt(C.driver.getKeys, C.relativeBase, E))
            .map((he) => C.mountpoint + gr(he))
            .filter((he) => !T.some((le) => he.startsWith(le)));
          U.push(...ie), (T = [C.mountpoint, ...T.filter((he) => !he.startsWith(C.mountpoint))]);
        }
        return y
          ? U.filter((C) => C.startsWith(y) && !C.endsWith('$'))
          : U.filter((C) => !C.endsWith('$'));
      },
      async clear(y, E = {}) {
        (y = Io(y)),
          await Promise.all(
            s(y, !1).map(async (O) => {
              if (O.driver.clear) return kt(O.driver.clear, O.relativeBase, E);
              if (O.driver.removeItem) {
                const T = await O.driver.getKeys(O.relativeBase || '', E);
                return Promise.all(T.map((U) => O.driver.removeItem(U, E)));
              }
            }),
          );
      },
      async dispose() {
        await Promise.all(Object.values(t.mounts).map((y) => Rl(y)));
      },
      async watch(y) {
        return (
          await u(),
          t.watchListeners.push(y),
          async () => {
            (t.watchListeners = t.watchListeners.filter((E) => E !== y)),
              t.watchListeners.length === 0 && (await f());
          }
        );
      },
      async unwatch() {
        (t.watchListeners = []), await f();
      },
      mount(y, E) {
        if (((y = Io(y)), y && t.mounts[y])) throw new Error(`already mounted at ${y}`);
        return (
          y && (t.mountpoints.push(y), t.mountpoints.sort((O, T) => T.length - O.length)),
          (t.mounts[y] = E),
          t.watching &&
            Promise.resolve(Al(E, a, y))
              .then((O) => {
                t.unwatch[y] = O;
              })
              .catch(console.error),
          b
        );
      },
      async unmount(y, E = !0) {
        (y = Io(y)),
          !(!y || !t.mounts[y]) &&
            (t.watching && y in t.unwatch && (t.unwatch[y](), delete t.unwatch[y]),
            E && (await Rl(t.mounts[y])),
            (t.mountpoints = t.mountpoints.filter((O) => O !== y)),
            delete t.mounts[y]);
      },
      getMount(y = '') {
        y = gr(y) + ':';
        const E = r(y);
        return { driver: E.driver, base: E.base };
      },
      getMounts(y = '', E = {}) {
        return (y = gr(y)), s(y, E.parents).map((T) => ({ driver: T.driver, base: T.mountpoint }));
      },
    };
  return b;
}
function Al(n, t, r) {
  return n.watch ? n.watch((s, a) => t(s, r + a)) : () => {};
}
async function Rl(n) {
  typeof n.dispose == 'function' && (await kt(n.dispose));
}
function Zi(n) {
  return new Promise((t, r) => {
    (n.oncomplete = n.onsuccess = () => t(n.result)), (n.onabort = n.onerror = () => r(n.error));
  });
}
function ip(n, t) {
  const r = indexedDB.open(n);
  r.onupgradeneeded = () => r.result.createObjectStore(t);
  const s = Zi(r);
  return (a, u) => s.then((f) => u(f.transaction(t, a).objectStore(t)));
}
let mc;
function ps() {
  return mc || (mc = ip('keyval-store', 'keyval')), mc;
}
function Cl(n, t = ps()) {
  return t('readonly', (r) => Zi(r.get(n)));
}
function $b(n, t, r = ps()) {
  return r('readwrite', (s) => (s.put(t, n), Zi(s.transaction)));
}
function Db(n, t = ps()) {
  return t('readwrite', (r) => (r.delete(n), Zi(r.transaction)));
}
function Lb(n = ps()) {
  return n('readwrite', (t) => (t.clear(), Zi(t.transaction)));
}
function Fb(n, t) {
  return (
    (n.openCursor().onsuccess = function () {
      this.result && (t(this.result), this.result.continue());
    }),
    Zi(n.transaction)
  );
}
function Mb(n = ps()) {
  return n('readonly', (t) => {
    if (t.getAllKeys) return Zi(t.getAllKeys());
    const r = [];
    return Fb(t, (s) => r.push(s.key)).then(() => r);
  });
}
const jb = (n) => JSON.stringify(n, (t, r) => (typeof r == 'bigint' ? r.toString() + 'n' : r)),
  Ub = (n) => {
    const t =
        /([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g,
      r = n.replace(t, '$1"$2n"$3');
    return JSON.parse(r, (s, a) =>
      typeof a == 'string' && a.match(/^\d+n$/) ? BigInt(a.substring(0, a.length - 1)) : a,
    );
  };
function ds(n) {
  if (typeof n != 'string') throw new Error(`Cannot safe json parse value of type ${typeof n}`);
  try {
    return Ub(n);
  } catch {
    return n;
  }
}
function Yi(n) {
  return typeof n == 'string' ? n : jb(n) || '';
}
const qb = 'idb-keyval';
var zb = (n = {}) => {
  const t = n.base && n.base.length > 0 ? `${n.base}:` : '',
    r = (a) => t + a;
  let s;
  return (
    n.dbName && n.storeName && (s = ip(n.dbName, n.storeName)),
    {
      name: qb,
      options: n,
      async hasItem(a) {
        return !(typeof (await Cl(r(a), s)) > 'u');
      },
      async getItem(a) {
        return (await Cl(r(a), s)) ?? null;
      },
      setItem(a, u) {
        return $b(r(a), u, s);
      },
      removeItem(a) {
        return Db(r(a), s);
      },
      getKeys() {
        return Mb(s);
      },
      clear() {
        return Lb(s);
      },
    }
  );
};
const kb = 'WALLET_CONNECT_V2_INDEXED_DB',
  Hb = 'keyvaluestorage';
let Bb = class {
  constructor() {
    this.indexedDb = Nb({ driver: zb({ dbName: kb, storeName: Hb }) });
  }
  async getKeys() {
    return this.indexedDb.getKeys();
  }
  async getEntries() {
    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map((t) => [
      t.key,
      t.value,
    ]);
  }
  async getItem(t) {
    const r = await this.indexedDb.getItem(t);
    if (r !== null) return r;
  }
  async setItem(t, r) {
    await this.indexedDb.setItem(t, Yi(r));
  }
  async removeItem(t) {
    await this.indexedDb.removeItem(t);
  }
};
var wc =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  To = { exports: {} };
(function () {
  let n;
  function t() {}
  (n = t),
    (n.prototype.getItem = function (r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }),
    (n.prototype.setItem = function (r, s) {
      this[r] = String(s);
    }),
    (n.prototype.removeItem = function (r) {
      delete this[r];
    }),
    (n.prototype.clear = function () {
      const r = this;
      Object.keys(r).forEach(function (s) {
        (r[s] = void 0), delete r[s];
      });
    }),
    (n.prototype.key = function (r) {
      return (r = r || 0), Object.keys(this)[r];
    }),
    n.prototype.__defineGetter__('length', function () {
      return Object.keys(this).length;
    }),
    typeof wc < 'u' && wc.localStorage
      ? (To.exports = wc.localStorage)
      : typeof window < 'u' && window.localStorage
        ? (To.exports = window.localStorage)
        : (To.exports = new t());
})();
function Kb(n) {
  var t;
  return [n[0], ds((t = n[1]) != null ? t : '')];
}
class Vb {
  constructor() {
    this.localStorage = To.exports;
  }
  async getKeys() {
    return Object.keys(this.localStorage);
  }
  async getEntries() {
    return Object.entries(this.localStorage).map(Kb);
  }
  async getItem(t) {
    const r = this.localStorage.getItem(t);
    if (r !== null) return ds(r);
  }
  async setItem(t, r) {
    this.localStorage.setItem(t, Yi(r));
  }
  async removeItem(t) {
    this.localStorage.removeItem(t);
  }
}
const Wb = 'wc_storage_version',
  Tl = 1,
  Gb = async (n, t, r) => {
    const s = Wb,
      a = await t.getItem(s);
    if (a && a >= Tl) {
      r(t);
      return;
    }
    const u = await n.getKeys();
    if (!u.length) {
      r(t);
      return;
    }
    const f = [];
    for (; u.length; ) {
      const g = u.shift();
      if (!g) continue;
      const b = g.toLowerCase();
      if (
        b.includes('wc@') ||
        b.includes('walletconnect') ||
        b.includes('wc_') ||
        b.includes('wallet_connect')
      ) {
        const y = await n.getItem(g);
        await t.setItem(g, y), f.push(g);
      }
    }
    await t.setItem(s, Tl), r(t), Jb(n, f);
  },
  Jb = async (n, t) => {
    t.length &&
      t.forEach(async (r) => {
        await n.removeItem(r);
      });
  };
let Qb = class {
  constructor() {
    (this.initialized = !1),
      (this.setInitialized = (r) => {
        (this.storage = r), (this.initialized = !0);
      });
    const t = new Vb();
    this.storage = t;
    try {
      const r = new Bb();
      Gb(t, r, this.setInitialized);
    } catch {
      this.initialized = !0;
    }
  }
  async getKeys() {
    return await this.initialize(), this.storage.getKeys();
  }
  async getEntries() {
    return await this.initialize(), this.storage.getEntries();
  }
  async getItem(t) {
    return await this.initialize(), this.storage.getItem(t);
  }
  async setItem(t, r) {
    return await this.initialize(), this.storage.setItem(t, r);
  }
  async removeItem(t) {
    return await this.initialize(), this.storage.removeItem(t);
  }
  async initialize() {
    this.initialized ||
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.initialized && (clearInterval(r), t());
        }, 20);
      }));
  }
};
var $n = {},
  Zn = {},
  bc = {},
  es = {};
let en = class {};
const Yb = Object.freeze(
    Object.defineProperty({ __proto__: null, IEvents: en }, Symbol.toStringTag, {
      value: 'Module',
    }),
  ),
  Xb = N1(Yb);
var Nl;
function Zb() {
  if (Nl) return es;
  (Nl = 1), Object.defineProperty(es, '__esModule', { value: !0 }), (es.IHeartBeat = void 0);
  const n = Xb;
  class t extends n.IEvents {
    constructor(s) {
      super();
    }
  }
  return (es.IHeartBeat = t), es;
}
var $l;
function np() {
  return (
    $l ||
      (($l = 1),
      (function (n) {
        Object.defineProperty(n, '__esModule', { value: !0 }), Rn.__exportStar(Zb(), n);
      })(bc)),
    bc
  );
}
var _c = {},
  Gi = {},
  Dl;
function e_() {
  if (Dl) return Gi;
  (Dl = 1),
    Object.defineProperty(Gi, '__esModule', { value: !0 }),
    (Gi.HEARTBEAT_EVENTS = Gi.HEARTBEAT_INTERVAL = void 0);
  const n = re;
  return (
    (Gi.HEARTBEAT_INTERVAL = n.FIVE_SECONDS),
    (Gi.HEARTBEAT_EVENTS = { pulse: 'heartbeat_pulse' }),
    Gi
  );
}
var Ll;
function sp() {
  return (
    Ll ||
      ((Ll = 1),
      (function (n) {
        Object.defineProperty(n, '__esModule', { value: !0 }), Rn.__exportStar(e_(), n);
      })(_c)),
    _c
  );
}
var Fl;
function t_() {
  if (Fl) return Zn;
  (Fl = 1), Object.defineProperty(Zn, '__esModule', { value: !0 }), (Zn.HeartBeat = void 0);
  const n = Rn,
    t = Bt,
    r = re,
    s = np(),
    a = sp();
  class u extends s.IHeartBeat {
    constructor(g) {
      super(g),
        (this.events = new t.EventEmitter()),
        (this.interval = a.HEARTBEAT_INTERVAL),
        (this.interval = (g == null ? void 0 : g.interval) || a.HEARTBEAT_INTERVAL);
    }
    static init(g) {
      return n.__awaiter(this, void 0, void 0, function* () {
        const b = new u(g);
        return yield b.init(), b;
      });
    }
    init() {
      return n.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(g, b) {
      this.events.on(g, b);
    }
    once(g, b) {
      this.events.once(g, b);
    }
    off(g, b) {
      this.events.off(g, b);
    }
    removeListener(g, b) {
      this.events.removeListener(g, b);
    }
    initialize() {
      return n.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return (Zn.HeartBeat = u), Zn;
}
(function (n) {
  Object.defineProperty(n, '__esModule', { value: !0 });
  const t = Rn;
  t.__exportStar(t_(), n), t.__exportStar(np(), n), t.__exportStar(sp(), n);
})($n);
var Ce = {},
  Ec,
  Ml;
function r_() {
  if (Ml) return Ec;
  Ml = 1;
  function n(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Ec = t;
  function t(r, s, a) {
    var u = (a && a.stringify) || n,
      f = 1;
    if (typeof r == 'object' && r !== null) {
      var g = s.length + f;
      if (g === 1) return r;
      var b = new Array(g);
      b[0] = u(r);
      for (var y = 1; y < g; y++) b[y] = u(s[y]);
      return b.join(' ');
    }
    if (typeof r != 'string') return r;
    var E = s.length;
    if (E === 0) return r;
    for (var O = '', T = 1 - f, U = -1, C = (r && r.length) || 0, K = 0; K < C; ) {
      if (r.charCodeAt(K) === 37 && K + 1 < C) {
        switch (((U = U > -1 ? U : 0), r.charCodeAt(K + 1))) {
          case 100:
          case 102:
            if (T >= E || s[T] == null) break;
            U < K && (O += r.slice(U, K)), (O += Number(s[T])), (U = K + 2), K++;
            break;
          case 105:
            if (T >= E || s[T] == null) break;
            U < K && (O += r.slice(U, K)), (O += Math.floor(Number(s[T]))), (U = K + 2), K++;
            break;
          case 79:
          case 111:
          case 106:
            if (T >= E || s[T] === void 0) break;
            U < K && (O += r.slice(U, K));
            var ie = typeof s[T];
            if (ie === 'string') {
              (O += "'" + s[T] + "'"), (U = K + 2), K++;
              break;
            }
            if (ie === 'function') {
              (O += s[T].name || '<anonymous>'), (U = K + 2), K++;
              break;
            }
            (O += u(s[T])), (U = K + 2), K++;
            break;
          case 115:
            if (T >= E) break;
            U < K && (O += r.slice(U, K)), (O += String(s[T])), (U = K + 2), K++;
            break;
          case 37:
            U < K && (O += r.slice(U, K)), (O += '%'), (U = K + 2), K++, T--;
            break;
        }
        ++T;
      }
      ++K;
    }
    return U === -1 ? r : (U < C && (O += r.slice(U)), O);
  }
  return Ec;
}
var Ic, jl;
function i_() {
  if (jl) return Ic;
  jl = 1;
  const n = r_();
  Ic = a;
  const t = de().console || {},
    r = {
      mapHttpRequest: C,
      mapHttpResponse: C,
      wrapRequestSerializer: K,
      wrapResponseSerializer: K,
      wrapErrorSerializer: K,
      req: C,
      res: C,
      err: T,
    };
  function s(L, z) {
    return Array.isArray(L)
      ? L.filter(function (ve) {
          return ve !== '!stdSerializers.err';
        })
      : L === !0
        ? Object.keys(z)
        : !1;
  }
  function a(L) {
    (L = L || {}), (L.browser = L.browser || {});
    const z = L.browser.transmit;
    if (z && typeof z.send != 'function')
      throw Error('pino: transmit option must have a send function');
    const G = L.browser.write || t;
    L.browser.write && (L.browser.asObject = !0);
    const ve = L.serializers || {},
      ne = s(L.browser.serialize, ve);
    let ue = L.browser.serialize;
    Array.isArray(L.browser.serialize) &&
      L.browser.serialize.indexOf('!stdSerializers.err') > -1 &&
      (ue = !1);
    const Te = ['error', 'fatal', 'warn', 'info', 'debug', 'trace'];
    typeof G == 'function' && (G.error = G.fatal = G.warn = G.info = G.debug = G.trace = G),
      L.enabled === !1 && (L.level = 'silent');
    const qe = L.level || 'info',
      m = Object.create(G);
    m.log || (m.log = ie),
      Object.defineProperty(m, 'levelVal', { get: X }),
      Object.defineProperty(m, 'level', { get: ce, set: V });
    const x = {
      transmit: z,
      serialize: ne,
      asObject: L.browser.asObject,
      levels: Te,
      timestamp: U(L),
    };
    (m.levels = a.levels),
      (m.level = qe),
      (m.setMaxListeners =
        m.getMaxListeners =
        m.emit =
        m.addListener =
        m.on =
        m.prependListener =
        m.once =
        m.prependOnceListener =
        m.removeListener =
        m.removeAllListeners =
        m.listeners =
        m.listenerCount =
        m.eventNames =
        m.write =
        m.flush =
          ie),
      (m.serializers = ve),
      (m._serialize = ne),
      (m._stdErrSerialize = ue),
      (m.child = k),
      z && (m._logEvent = O());
    function X() {
      return this.level === 'silent' ? 1 / 0 : this.levels.values[this.level];
    }
    function ce() {
      return this._level;
    }
    function V(B) {
      if (B !== 'silent' && !this.levels.values[B]) throw Error('unknown level ' + B);
      (this._level = B),
        u(x, m, 'error', 'log'),
        u(x, m, 'fatal', 'error'),
        u(x, m, 'warn', 'error'),
        u(x, m, 'info', 'log'),
        u(x, m, 'debug', 'log'),
        u(x, m, 'trace', 'log');
    }
    function k(B, W) {
      if (!B) throw new Error('missing bindings for child Pino');
      (W = W || {}), ne && B.serializers && (W.serializers = B.serializers);
      const Qe = W.serializers;
      if (ne && Qe) {
        var Be = Object.assign({}, ve, Qe),
          Kr = L.browser.serialize === !0 ? Object.keys(Be) : ne;
        delete B.serializers, b([B], Kr, Be, this._stdErrSerialize);
      }
      function Ie(St) {
        (this._childLevel = (St._childLevel | 0) + 1),
          (this.error = y(St, B, 'error')),
          (this.fatal = y(St, B, 'fatal')),
          (this.warn = y(St, B, 'warn')),
          (this.info = y(St, B, 'info')),
          (this.debug = y(St, B, 'debug')),
          (this.trace = y(St, B, 'trace')),
          Be && ((this.serializers = Be), (this._serialize = Kr)),
          z && (this._logEvent = O([].concat(St._logEvent.bindings, B)));
      }
      return (Ie.prototype = this), new Ie(this);
    }
    return m;
  }
  (a.levels = {
    values: { fatal: 60, error: 50, warn: 40, info: 30, debug: 20, trace: 10 },
    labels: { 10: 'trace', 20: 'debug', 30: 'info', 40: 'warn', 50: 'error', 60: 'fatal' },
  }),
    (a.stdSerializers = r),
    (a.stdTimeFunctions = Object.assign(
      {},
      { nullTime: he, epochTime: le, unixTime: fe, isoTime: pe },
    ));
  function u(L, z, G, ve) {
    const ne = Object.getPrototypeOf(z);
    (z[G] = z.levelVal > z.levels.values[G] ? ie : ne[G] ? ne[G] : t[G] || t[ve] || ie), f(L, z, G);
  }
  function f(L, z, G) {
    (!L.transmit && z[G] === ie) ||
      (z[G] = (function (ve) {
        return function () {
          const ue = L.timestamp(),
            Te = new Array(arguments.length),
            qe = Object.getPrototypeOf && Object.getPrototypeOf(this) === t ? t : this;
          for (var m = 0; m < Te.length; m++) Te[m] = arguments[m];
          if (
            (L.serialize &&
              !L.asObject &&
              b(Te, this._serialize, this.serializers, this._stdErrSerialize),
            L.asObject ? ve.call(qe, g(this, G, Te, ue)) : ve.apply(qe, Te),
            L.transmit)
          ) {
            const x = L.transmit.level || z.level,
              X = a.levels.values[x],
              ce = a.levels.values[G];
            if (ce < X) return;
            E(
              this,
              {
                ts: ue,
                methodLevel: G,
                methodValue: ce,
                transmitLevel: x,
                transmitValue: a.levels.values[L.transmit.level || z.level],
                send: L.transmit.send,
                val: z.levelVal,
              },
              Te,
            );
          }
        };
      })(z[G]));
  }
  function g(L, z, G, ve) {
    L._serialize && b(G, L._serialize, L.serializers, L._stdErrSerialize);
    const ne = G.slice();
    let ue = ne[0];
    const Te = {};
    ve && (Te.time = ve), (Te.level = a.levels.values[z]);
    let qe = (L._childLevel | 0) + 1;
    if ((qe < 1 && (qe = 1), ue !== null && typeof ue == 'object')) {
      for (; qe-- && typeof ne[0] == 'object'; ) Object.assign(Te, ne.shift());
      ue = ne.length ? n(ne.shift(), ne) : void 0;
    } else typeof ue == 'string' && (ue = n(ne.shift(), ne));
    return ue !== void 0 && (Te.msg = ue), Te;
  }
  function b(L, z, G, ve) {
    for (const ne in L)
      if (ve && L[ne] instanceof Error) L[ne] = a.stdSerializers.err(L[ne]);
      else if (typeof L[ne] == 'object' && !Array.isArray(L[ne]))
        for (const ue in L[ne])
          z && z.indexOf(ue) > -1 && ue in G && (L[ne][ue] = G[ue](L[ne][ue]));
  }
  function y(L, z, G) {
    return function () {
      const ve = new Array(1 + arguments.length);
      ve[0] = z;
      for (var ne = 1; ne < ve.length; ne++) ve[ne] = arguments[ne - 1];
      return L[G].apply(this, ve);
    };
  }
  function E(L, z, G) {
    const ve = z.send,
      ne = z.ts,
      ue = z.methodLevel,
      Te = z.methodValue,
      qe = z.val,
      m = L._logEvent.bindings;
    b(
      G,
      L._serialize || Object.keys(L.serializers),
      L.serializers,
      L._stdErrSerialize === void 0 ? !0 : L._stdErrSerialize,
    ),
      (L._logEvent.ts = ne),
      (L._logEvent.messages = G.filter(function (x) {
        return m.indexOf(x) === -1;
      })),
      (L._logEvent.level.label = ue),
      (L._logEvent.level.value = Te),
      ve(ue, L._logEvent, qe),
      (L._logEvent = O(m));
  }
  function O(L) {
    return { ts: 0, messages: [], bindings: L || [], level: { label: '', value: 0 } };
  }
  function T(L) {
    const z = { type: L.constructor.name, msg: L.message, stack: L.stack };
    for (const G in L) z[G] === void 0 && (z[G] = L[G]);
    return z;
  }
  function U(L) {
    return typeof L.timestamp == 'function' ? L.timestamp : L.timestamp === !1 ? he : le;
  }
  function C() {
    return {};
  }
  function K(L) {
    return L;
  }
  function ie() {}
  function he() {
    return !1;
  }
  function le() {
    return Date.now();
  }
  function fe() {
    return Math.round(Date.now() / 1e3);
  }
  function pe() {
    return new Date(Date.now()).toISOString();
  }
  function de() {
    function L(z) {
      return typeof z < 'u' && z;
    }
    try {
      return (
        typeof globalThis < 'u' ||
          Object.defineProperty(Object.prototype, 'globalThis', {
            get: function () {
              return delete Object.prototype.globalThis, (this.globalThis = this);
            },
            configurable: !0,
          }),
        globalThis
      );
    } catch {
      return L(self) || L(window) || L(this) || {};
    }
  }
  return Ic;
}
var Ji = {},
  Ul;
function op() {
  return (
    Ul ||
      ((Ul = 1),
      Object.defineProperty(Ji, '__esModule', { value: !0 }),
      (Ji.PINO_CUSTOM_CONTEXT_KEY = Ji.PINO_LOGGER_DEFAULTS = void 0),
      (Ji.PINO_LOGGER_DEFAULTS = { level: 'info' }),
      (Ji.PINO_CUSTOM_CONTEXT_KEY = 'custom_context')),
    Ji
  );
}
var nr = {},
  ql;
function n_() {
  if (ql) return nr;
  (ql = 1),
    Object.defineProperty(nr, '__esModule', { value: !0 }),
    (nr.generateChildLogger =
      nr.formatChildLoggerContext =
      nr.getLoggerContext =
      nr.setBrowserLoggerContext =
      nr.getBrowserLoggerContext =
      nr.getDefaultLoggerOptions =
        void 0);
  const n = op();
  function t(g) {
    return Object.assign(Object.assign({}, g), {
      level: (g == null ? void 0 : g.level) || n.PINO_LOGGER_DEFAULTS.level,
    });
  }
  nr.getDefaultLoggerOptions = t;
  function r(g, b = n.PINO_CUSTOM_CONTEXT_KEY) {
    return g[b] || '';
  }
  nr.getBrowserLoggerContext = r;
  function s(g, b, y = n.PINO_CUSTOM_CONTEXT_KEY) {
    return (g[y] = b), g;
  }
  nr.setBrowserLoggerContext = s;
  function a(g, b = n.PINO_CUSTOM_CONTEXT_KEY) {
    let y = '';
    return typeof g.bindings > 'u' ? (y = r(g, b)) : (y = g.bindings().context || ''), y;
  }
  nr.getLoggerContext = a;
  function u(g, b, y = n.PINO_CUSTOM_CONTEXT_KEY) {
    const E = a(g, y);
    return E.trim() ? `${E}/${b}` : b;
  }
  nr.formatChildLoggerContext = u;
  function f(g, b, y = n.PINO_CUSTOM_CONTEXT_KEY) {
    const E = u(g, b, y),
      O = g.child({ context: E });
    return s(O, E, y);
  }
  return (nr.generateChildLogger = f), nr;
}
(function (n) {
  Object.defineProperty(n, '__esModule', { value: !0 }), (n.pino = void 0);
  const t = Rn,
    r = t.__importDefault(i_());
  Object.defineProperty(n, 'pino', {
    enumerable: !0,
    get: function () {
      return r.default;
    },
  }),
    t.__exportStar(op(), n),
    t.__exportStar(n_(), n);
})(Ce);
class s_ extends en {
  constructor(t) {
    super(), (this.opts = t), (this.protocol = 'wc'), (this.version = 2);
  }
}
let o_ = class extends en {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r), (this.records = new Map());
    }
  },
  a_ = class {
    constructor(t, r) {
      (this.logger = t), (this.core = r);
    }
  },
  c_ = class extends en {
    constructor(t, r) {
      super(), (this.relayer = t), (this.logger = r);
    }
  },
  u_ = class extends en {
    constructor(t) {
      super();
    }
  },
  h_ = class {
    constructor(t, r, s, a) {
      (this.core = t), (this.logger = r), (this.name = s);
    }
  };
class l_ extends en {
  constructor(t, r) {
    super(), (this.relayer = t), (this.logger = r);
  }
}
let f_ = class extends en {
    constructor(t, r) {
      super(), (this.core = t), (this.logger = r);
    }
  },
  p_ = class {
    constructor(t, r) {
      (this.projectId = t), (this.logger = r);
    }
  },
  d_ = class {
    constructor(t) {
      (this.opts = t), (this.protocol = 'wc'), (this.version = 2);
    }
  },
  g_ = class {
    constructor(t) {
      this.client = t;
    }
  };
var Xc = {},
  ap = {};
(function (n) {
  Object.defineProperty(n, '__esModule', { value: !0 });
  var t = T1,
    r = Df;
  (n.DIGEST_LENGTH = 64), (n.BLOCK_SIZE = 128);
  var s = (function () {
    function g() {
      (this.digestLength = n.DIGEST_LENGTH),
        (this.blockSize = n.BLOCK_SIZE),
        (this._stateHi = new Int32Array(8)),
        (this._stateLo = new Int32Array(8)),
        (this._tempHi = new Int32Array(16)),
        (this._tempLo = new Int32Array(16)),
        (this._buffer = new Uint8Array(256)),
        (this._bufferLength = 0),
        (this._bytesHashed = 0),
        (this._finished = !1),
        this.reset();
    }
    return (
      (g.prototype._initState = function () {
        (this._stateHi[0] = 1779033703),
          (this._stateHi[1] = 3144134277),
          (this._stateHi[2] = 1013904242),
          (this._stateHi[3] = 2773480762),
          (this._stateHi[4] = 1359893119),
          (this._stateHi[5] = 2600822924),
          (this._stateHi[6] = 528734635),
          (this._stateHi[7] = 1541459225),
          (this._stateLo[0] = 4089235720),
          (this._stateLo[1] = 2227873595),
          (this._stateLo[2] = 4271175723),
          (this._stateLo[3] = 1595750129),
          (this._stateLo[4] = 2917565137),
          (this._stateLo[5] = 725511199),
          (this._stateLo[6] = 4215389547),
          (this._stateLo[7] = 327033209);
      }),
      (g.prototype.reset = function () {
        return (
          this._initState(),
          (this._bufferLength = 0),
          (this._bytesHashed = 0),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.clean = function () {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }),
      (g.prototype.update = function (b, y) {
        if ((y === void 0 && (y = b.length), this._finished))
          throw new Error("SHA512: can't update because hash was finished.");
        var E = 0;
        if (((this._bytesHashed += y), this._bufferLength > 0)) {
          for (; this._bufferLength < n.BLOCK_SIZE && y > 0; )
            (this._buffer[this._bufferLength++] = b[E++]), y--;
          this._bufferLength === this.blockSize &&
            (u(
              this._tempHi,
              this._tempLo,
              this._stateHi,
              this._stateLo,
              this._buffer,
              0,
              this.blockSize,
            ),
            (this._bufferLength = 0));
        }
        for (
          y >= this.blockSize &&
          ((E = u(this._tempHi, this._tempLo, this._stateHi, this._stateLo, b, E, y)),
          (y %= this.blockSize));
          y > 0;

        )
          (this._buffer[this._bufferLength++] = b[E++]), y--;
        return this;
      }),
      (g.prototype.finish = function (b) {
        if (!this._finished) {
          var y = this._bytesHashed,
            E = this._bufferLength,
            O = (y / 536870912) | 0,
            T = y << 3,
            U = y % 128 < 112 ? 128 : 256;
          this._buffer[E] = 128;
          for (var C = E + 1; C < U - 8; C++) this._buffer[C] = 0;
          t.writeUint32BE(O, this._buffer, U - 8),
            t.writeUint32BE(T, this._buffer, U - 4),
            u(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, U),
            (this._finished = !0);
        }
        for (var C = 0; C < this.digestLength / 8; C++)
          t.writeUint32BE(this._stateHi[C], b, C * 8),
            t.writeUint32BE(this._stateLo[C], b, C * 8 + 4);
        return this;
      }),
      (g.prototype.digest = function () {
        var b = new Uint8Array(this.digestLength);
        return this.finish(b), b;
      }),
      (g.prototype.saveState = function () {
        if (this._finished) throw new Error('SHA256: cannot save finished state');
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed,
        };
      }),
      (g.prototype.restoreState = function (b) {
        return (
          this._stateHi.set(b.stateHi),
          this._stateLo.set(b.stateLo),
          (this._bufferLength = b.bufferLength),
          b.buffer && this._buffer.set(b.buffer),
          (this._bytesHashed = b.bytesHashed),
          (this._finished = !1),
          this
        );
      }),
      (g.prototype.cleanSavedState = function (b) {
        r.wipe(b.stateHi),
          r.wipe(b.stateLo),
          b.buffer && r.wipe(b.buffer),
          (b.bufferLength = 0),
          (b.bytesHashed = 0);
      }),
      g
    );
  })();
  n.SHA512 = s;
  var a = new Int32Array([
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548,
    961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560,
    3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868,
    3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933,
    770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956,
    3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936,
    666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627,
    2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008,
    3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280,
    958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899,
    1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427,
    3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992,
    116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676,
    1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591,
  ]);
  function u(g, b, y, E, O, T, U) {
    for (
      var C = y[0],
        K = y[1],
        ie = y[2],
        he = y[3],
        le = y[4],
        fe = y[5],
        pe = y[6],
        de = y[7],
        L = E[0],
        z = E[1],
        G = E[2],
        ve = E[3],
        ne = E[4],
        ue = E[5],
        Te = E[6],
        qe = E[7],
        m,
        x,
        X,
        ce,
        V,
        k,
        B,
        W;
      U >= 128;

    ) {
      for (var Qe = 0; Qe < 16; Qe++) {
        var Be = 8 * Qe + T;
        (g[Qe] = t.readUint32BE(O, Be)), (b[Qe] = t.readUint32BE(O, Be + 4));
      }
      for (var Qe = 0; Qe < 80; Qe++) {
        var Kr = C,
          Ie = K,
          St = ie,
          D = he,
          $ = le,
          R = fe,
          h = pe,
          I = de,
          ee = L,
          ge = z,
          _e = G,
          Ne = ve,
          De = ne,
          Pe = ue,
          Pt = Te,
          wt = qe;
        if (
          ((m = de),
          (x = qe),
          (V = x & 65535),
          (k = x >>> 16),
          (B = m & 65535),
          (W = m >>> 16),
          (m =
            ((le >>> 14) | (ne << (32 - 14))) ^
            ((le >>> 18) | (ne << (32 - 18))) ^
            ((ne >>> (41 - 32)) | (le << (32 - (41 - 32))))),
          (x =
            ((ne >>> 14) | (le << (32 - 14))) ^
            ((ne >>> 18) | (le << (32 - 18))) ^
            ((le >>> (41 - 32)) | (ne << (32 - (41 - 32))))),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (m = (le & fe) ^ (~le & pe)),
          (x = (ne & ue) ^ (~ne & Te)),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (m = a[Qe * 2]),
          (x = a[Qe * 2 + 1]),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (m = g[Qe % 16]),
          (x = b[Qe % 16]),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (k += V >>> 16),
          (B += k >>> 16),
          (W += B >>> 16),
          (X = (B & 65535) | (W << 16)),
          (ce = (V & 65535) | (k << 16)),
          (m = X),
          (x = ce),
          (V = x & 65535),
          (k = x >>> 16),
          (B = m & 65535),
          (W = m >>> 16),
          (m =
            ((C >>> 28) | (L << (32 - 28))) ^
            ((L >>> (34 - 32)) | (C << (32 - (34 - 32)))) ^
            ((L >>> (39 - 32)) | (C << (32 - (39 - 32))))),
          (x =
            ((L >>> 28) | (C << (32 - 28))) ^
            ((C >>> (34 - 32)) | (L << (32 - (34 - 32)))) ^
            ((C >>> (39 - 32)) | (L << (32 - (39 - 32))))),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (m = (C & K) ^ (C & ie) ^ (K & ie)),
          (x = (L & z) ^ (L & G) ^ (z & G)),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (k += V >>> 16),
          (B += k >>> 16),
          (W += B >>> 16),
          (I = (B & 65535) | (W << 16)),
          (wt = (V & 65535) | (k << 16)),
          (m = D),
          (x = Ne),
          (V = x & 65535),
          (k = x >>> 16),
          (B = m & 65535),
          (W = m >>> 16),
          (m = X),
          (x = ce),
          (V += x & 65535),
          (k += x >>> 16),
          (B += m & 65535),
          (W += m >>> 16),
          (k += V >>> 16),
          (B += k >>> 16),
          (W += B >>> 16),
          (D = (B & 65535) | (W << 16)),
          (Ne = (V & 65535) | (k << 16)),
          (K = Kr),
          (ie = Ie),
          (he = St),
          (le = D),
          (fe = $),
          (pe = R),
          (de = h),
          (C = I),
          (z = ee),
          (G = ge),
          (ve = _e),
          (ne = Ne),
          (ue = De),
          (Te = Pe),
          (qe = Pt),
          (L = wt),
          Qe % 16 === 15)
        )
          for (var Be = 0; Be < 16; Be++)
            (m = g[Be]),
              (x = b[Be]),
              (V = x & 65535),
              (k = x >>> 16),
              (B = m & 65535),
              (W = m >>> 16),
              (m = g[(Be + 9) % 16]),
              (x = b[(Be + 9) % 16]),
              (V += x & 65535),
              (k += x >>> 16),
              (B += m & 65535),
              (W += m >>> 16),
              (X = g[(Be + 1) % 16]),
              (ce = b[(Be + 1) % 16]),
              (m = ((X >>> 1) | (ce << (32 - 1))) ^ ((X >>> 8) | (ce << (32 - 8))) ^ (X >>> 7)),
              (x =
                ((ce >>> 1) | (X << (32 - 1))) ^
                ((ce >>> 8) | (X << (32 - 8))) ^
                ((ce >>> 7) | (X << (32 - 7)))),
              (V += x & 65535),
              (k += x >>> 16),
              (B += m & 65535),
              (W += m >>> 16),
              (X = g[(Be + 14) % 16]),
              (ce = b[(Be + 14) % 16]),
              (m =
                ((X >>> 19) | (ce << (32 - 19))) ^
                ((ce >>> (61 - 32)) | (X << (32 - (61 - 32)))) ^
                (X >>> 6)),
              (x =
                ((ce >>> 19) | (X << (32 - 19))) ^
                ((X >>> (61 - 32)) | (ce << (32 - (61 - 32)))) ^
                ((ce >>> 6) | (X << (32 - 6)))),
              (V += x & 65535),
              (k += x >>> 16),
              (B += m & 65535),
              (W += m >>> 16),
              (k += V >>> 16),
              (B += k >>> 16),
              (W += B >>> 16),
              (g[Be] = (B & 65535) | (W << 16)),
              (b[Be] = (V & 65535) | (k << 16));
      }
      (m = C),
        (x = L),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[0]),
        (x = E[0]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[0] = C = (B & 65535) | (W << 16)),
        (E[0] = L = (V & 65535) | (k << 16)),
        (m = K),
        (x = z),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[1]),
        (x = E[1]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[1] = K = (B & 65535) | (W << 16)),
        (E[1] = z = (V & 65535) | (k << 16)),
        (m = ie),
        (x = G),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[2]),
        (x = E[2]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[2] = ie = (B & 65535) | (W << 16)),
        (E[2] = G = (V & 65535) | (k << 16)),
        (m = he),
        (x = ve),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[3]),
        (x = E[3]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[3] = he = (B & 65535) | (W << 16)),
        (E[3] = ve = (V & 65535) | (k << 16)),
        (m = le),
        (x = ne),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[4]),
        (x = E[4]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[4] = le = (B & 65535) | (W << 16)),
        (E[4] = ne = (V & 65535) | (k << 16)),
        (m = fe),
        (x = ue),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[5]),
        (x = E[5]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[5] = fe = (B & 65535) | (W << 16)),
        (E[5] = ue = (V & 65535) | (k << 16)),
        (m = pe),
        (x = Te),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[6]),
        (x = E[6]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[6] = pe = (B & 65535) | (W << 16)),
        (E[6] = Te = (V & 65535) | (k << 16)),
        (m = de),
        (x = qe),
        (V = x & 65535),
        (k = x >>> 16),
        (B = m & 65535),
        (W = m >>> 16),
        (m = y[7]),
        (x = E[7]),
        (V += x & 65535),
        (k += x >>> 16),
        (B += m & 65535),
        (W += m >>> 16),
        (k += V >>> 16),
        (B += k >>> 16),
        (W += B >>> 16),
        (y[7] = de = (B & 65535) | (W << 16)),
        (E[7] = qe = (V & 65535) | (k << 16)),
        (T += 128),
        (U -= 128);
    }
    return T;
  }
  function f(g) {
    var b = new s();
    b.update(g);
    var y = b.digest();
    return b.clean(), y;
  }
  n.hash = f;
})(ap);
(function (n) {
  Object.defineProperty(n, '__esModule', { value: !0 }),
    (n.convertSecretKeyToX25519 =
      n.convertPublicKeyToX25519 =
      n.verify =
      n.sign =
      n.extractPublicKeyFromSecretKey =
      n.generateKeyPair =
      n.generateKeyPairFromSeed =
      n.SEED_LENGTH =
      n.SECRET_KEY_LENGTH =
      n.PUBLIC_KEY_LENGTH =
      n.SIGNATURE_LENGTH =
        void 0);
  const t = Uo,
    r = ap,
    s = Df;
  (n.SIGNATURE_LENGTH = 64),
    (n.PUBLIC_KEY_LENGTH = 32),
    (n.SECRET_KEY_LENGTH = 64),
    (n.SEED_LENGTH = 32);
  function a(D) {
    const $ = new Float64Array(16);
    if (D) for (let R = 0; R < D.length; R++) $[R] = D[R];
    return $;
  }
  const u = new Uint8Array(32);
  u[0] = 9;
  const f = a(),
    g = a([1]),
    b = a([
      30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119,
      27886, 20995,
    ]),
    y = a([
      61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239,
      55772, 9222,
    ]),
    E = a([
      54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502,
      52590, 14035, 8553,
    ]),
    O = a([
      26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214,
      26214, 26214, 26214,
    ]),
    T = a([
      41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417,
      9344, 11139,
    ]);
  function U(D, $) {
    for (let R = 0; R < 16; R++) D[R] = $[R] | 0;
  }
  function C(D) {
    let $ = 1;
    for (let R = 0; R < 16; R++) {
      let h = D[R] + $ + 65535;
      ($ = Math.floor(h / 65536)), (D[R] = h - $ * 65536);
    }
    D[0] += $ - 1 + 37 * ($ - 1);
  }
  function K(D, $, R) {
    const h = ~(R - 1);
    for (let I = 0; I < 16; I++) {
      const ee = h & (D[I] ^ $[I]);
      (D[I] ^= ee), ($[I] ^= ee);
    }
  }
  function ie(D, $) {
    const R = a(),
      h = a();
    for (let I = 0; I < 16; I++) h[I] = $[I];
    C(h), C(h), C(h);
    for (let I = 0; I < 2; I++) {
      R[0] = h[0] - 65517;
      for (let ge = 1; ge < 15; ge++)
        (R[ge] = h[ge] - 65535 - ((R[ge - 1] >> 16) & 1)), (R[ge - 1] &= 65535);
      R[15] = h[15] - 32767 - ((R[14] >> 16) & 1);
      const ee = (R[15] >> 16) & 1;
      (R[14] &= 65535), K(h, R, 1 - ee);
    }
    for (let I = 0; I < 16; I++) (D[2 * I] = h[I] & 255), (D[2 * I + 1] = h[I] >> 8);
  }
  function he(D, $) {
    let R = 0;
    for (let h = 0; h < 32; h++) R |= D[h] ^ $[h];
    return (1 & ((R - 1) >>> 8)) - 1;
  }
  function le(D, $) {
    const R = new Uint8Array(32),
      h = new Uint8Array(32);
    return ie(R, D), ie(h, $), he(R, h);
  }
  function fe(D) {
    const $ = new Uint8Array(32);
    return ie($, D), $[0] & 1;
  }
  function pe(D, $) {
    for (let R = 0; R < 16; R++) D[R] = $[2 * R] + ($[2 * R + 1] << 8);
    D[15] &= 32767;
  }
  function de(D, $, R) {
    for (let h = 0; h < 16; h++) D[h] = $[h] + R[h];
  }
  function L(D, $, R) {
    for (let h = 0; h < 16; h++) D[h] = $[h] - R[h];
  }
  function z(D, $, R) {
    let h,
      I,
      ee = 0,
      ge = 0,
      _e = 0,
      Ne = 0,
      De = 0,
      Pe = 0,
      Pt = 0,
      wt = 0,
      at = 0,
      Fe = 0,
      Xe = 0,
      Ze = 0,
      ct = 0,
      ze = 0,
      et = 0,
      $e = 0,
      Ke = 0,
      lt = 0,
      je = 0,
      Ot = 0,
      Ft = 0,
      Kt = 0,
      Vt = 0,
      Ut = 0,
      Xt = 0,
      cr = 0,
      Vr = 0,
      Zt = 0,
      ei = 0,
      wi = 0,
      Di = 0,
      ft = R[0],
      it = R[1],
      pt = R[2],
      dt = R[3],
      ut = R[4],
      nt = R[5],
      At = R[6],
      Rt = R[7],
      gt = R[8],
      Ct = R[9],
      yt = R[10],
      bt = R[11],
      vt = R[12],
      Ye = R[13],
      Tt = R[14],
      Nt = R[15];
    (h = $[0]),
      (ee += h * ft),
      (ge += h * it),
      (_e += h * pt),
      (Ne += h * dt),
      (De += h * ut),
      (Pe += h * nt),
      (Pt += h * At),
      (wt += h * Rt),
      (at += h * gt),
      (Fe += h * Ct),
      (Xe += h * yt),
      (Ze += h * bt),
      (ct += h * vt),
      (ze += h * Ye),
      (et += h * Tt),
      ($e += h * Nt),
      (h = $[1]),
      (ge += h * ft),
      (_e += h * it),
      (Ne += h * pt),
      (De += h * dt),
      (Pe += h * ut),
      (Pt += h * nt),
      (wt += h * At),
      (at += h * Rt),
      (Fe += h * gt),
      (Xe += h * Ct),
      (Ze += h * yt),
      (ct += h * bt),
      (ze += h * vt),
      (et += h * Ye),
      ($e += h * Tt),
      (Ke += h * Nt),
      (h = $[2]),
      (_e += h * ft),
      (Ne += h * it),
      (De += h * pt),
      (Pe += h * dt),
      (Pt += h * ut),
      (wt += h * nt),
      (at += h * At),
      (Fe += h * Rt),
      (Xe += h * gt),
      (Ze += h * Ct),
      (ct += h * yt),
      (ze += h * bt),
      (et += h * vt),
      ($e += h * Ye),
      (Ke += h * Tt),
      (lt += h * Nt),
      (h = $[3]),
      (Ne += h * ft),
      (De += h * it),
      (Pe += h * pt),
      (Pt += h * dt),
      (wt += h * ut),
      (at += h * nt),
      (Fe += h * At),
      (Xe += h * Rt),
      (Ze += h * gt),
      (ct += h * Ct),
      (ze += h * yt),
      (et += h * bt),
      ($e += h * vt),
      (Ke += h * Ye),
      (lt += h * Tt),
      (je += h * Nt),
      (h = $[4]),
      (De += h * ft),
      (Pe += h * it),
      (Pt += h * pt),
      (wt += h * dt),
      (at += h * ut),
      (Fe += h * nt),
      (Xe += h * At),
      (Ze += h * Rt),
      (ct += h * gt),
      (ze += h * Ct),
      (et += h * yt),
      ($e += h * bt),
      (Ke += h * vt),
      (lt += h * Ye),
      (je += h * Tt),
      (Ot += h * Nt),
      (h = $[5]),
      (Pe += h * ft),
      (Pt += h * it),
      (wt += h * pt),
      (at += h * dt),
      (Fe += h * ut),
      (Xe += h * nt),
      (Ze += h * At),
      (ct += h * Rt),
      (ze += h * gt),
      (et += h * Ct),
      ($e += h * yt),
      (Ke += h * bt),
      (lt += h * vt),
      (je += h * Ye),
      (Ot += h * Tt),
      (Ft += h * Nt),
      (h = $[6]),
      (Pt += h * ft),
      (wt += h * it),
      (at += h * pt),
      (Fe += h * dt),
      (Xe += h * ut),
      (Ze += h * nt),
      (ct += h * At),
      (ze += h * Rt),
      (et += h * gt),
      ($e += h * Ct),
      (Ke += h * yt),
      (lt += h * bt),
      (je += h * vt),
      (Ot += h * Ye),
      (Ft += h * Tt),
      (Kt += h * Nt),
      (h = $[7]),
      (wt += h * ft),
      (at += h * it),
      (Fe += h * pt),
      (Xe += h * dt),
      (Ze += h * ut),
      (ct += h * nt),
      (ze += h * At),
      (et += h * Rt),
      ($e += h * gt),
      (Ke += h * Ct),
      (lt += h * yt),
      (je += h * bt),
      (Ot += h * vt),
      (Ft += h * Ye),
      (Kt += h * Tt),
      (Vt += h * Nt),
      (h = $[8]),
      (at += h * ft),
      (Fe += h * it),
      (Xe += h * pt),
      (Ze += h * dt),
      (ct += h * ut),
      (ze += h * nt),
      (et += h * At),
      ($e += h * Rt),
      (Ke += h * gt),
      (lt += h * Ct),
      (je += h * yt),
      (Ot += h * bt),
      (Ft += h * vt),
      (Kt += h * Ye),
      (Vt += h * Tt),
      (Ut += h * Nt),
      (h = $[9]),
      (Fe += h * ft),
      (Xe += h * it),
      (Ze += h * pt),
      (ct += h * dt),
      (ze += h * ut),
      (et += h * nt),
      ($e += h * At),
      (Ke += h * Rt),
      (lt += h * gt),
      (je += h * Ct),
      (Ot += h * yt),
      (Ft += h * bt),
      (Kt += h * vt),
      (Vt += h * Ye),
      (Ut += h * Tt),
      (Xt += h * Nt),
      (h = $[10]),
      (Xe += h * ft),
      (Ze += h * it),
      (ct += h * pt),
      (ze += h * dt),
      (et += h * ut),
      ($e += h * nt),
      (Ke += h * At),
      (lt += h * Rt),
      (je += h * gt),
      (Ot += h * Ct),
      (Ft += h * yt),
      (Kt += h * bt),
      (Vt += h * vt),
      (Ut += h * Ye),
      (Xt += h * Tt),
      (cr += h * Nt),
      (h = $[11]),
      (Ze += h * ft),
      (ct += h * it),
      (ze += h * pt),
      (et += h * dt),
      ($e += h * ut),
      (Ke += h * nt),
      (lt += h * At),
      (je += h * Rt),
      (Ot += h * gt),
      (Ft += h * Ct),
      (Kt += h * yt),
      (Vt += h * bt),
      (Ut += h * vt),
      (Xt += h * Ye),
      (cr += h * Tt),
      (Vr += h * Nt),
      (h = $[12]),
      (ct += h * ft),
      (ze += h * it),
      (et += h * pt),
      ($e += h * dt),
      (Ke += h * ut),
      (lt += h * nt),
      (je += h * At),
      (Ot += h * Rt),
      (Ft += h * gt),
      (Kt += h * Ct),
      (Vt += h * yt),
      (Ut += h * bt),
      (Xt += h * vt),
      (cr += h * Ye),
      (Vr += h * Tt),
      (Zt += h * Nt),
      (h = $[13]),
      (ze += h * ft),
      (et += h * it),
      ($e += h * pt),
      (Ke += h * dt),
      (lt += h * ut),
      (je += h * nt),
      (Ot += h * At),
      (Ft += h * Rt),
      (Kt += h * gt),
      (Vt += h * Ct),
      (Ut += h * yt),
      (Xt += h * bt),
      (cr += h * vt),
      (Vr += h * Ye),
      (Zt += h * Tt),
      (ei += h * Nt),
      (h = $[14]),
      (et += h * ft),
      ($e += h * it),
      (Ke += h * pt),
      (lt += h * dt),
      (je += h * ut),
      (Ot += h * nt),
      (Ft += h * At),
      (Kt += h * Rt),
      (Vt += h * gt),
      (Ut += h * Ct),
      (Xt += h * yt),
      (cr += h * bt),
      (Vr += h * vt),
      (Zt += h * Ye),
      (ei += h * Tt),
      (wi += h * Nt),
      (h = $[15]),
      ($e += h * ft),
      (Ke += h * it),
      (lt += h * pt),
      (je += h * dt),
      (Ot += h * ut),
      (Ft += h * nt),
      (Kt += h * At),
      (Vt += h * Rt),
      (Ut += h * gt),
      (Xt += h * Ct),
      (cr += h * yt),
      (Vr += h * bt),
      (Zt += h * vt),
      (ei += h * Ye),
      (wi += h * Tt),
      (Di += h * Nt),
      (ee += 38 * Ke),
      (ge += 38 * lt),
      (_e += 38 * je),
      (Ne += 38 * Ot),
      (De += 38 * Ft),
      (Pe += 38 * Kt),
      (Pt += 38 * Vt),
      (wt += 38 * Ut),
      (at += 38 * Xt),
      (Fe += 38 * cr),
      (Xe += 38 * Vr),
      (Ze += 38 * Zt),
      (ct += 38 * ei),
      (ze += 38 * wi),
      (et += 38 * Di),
      (I = 1),
      (h = ee + I + 65535),
      (I = Math.floor(h / 65536)),
      (ee = h - I * 65536),
      (h = ge + I + 65535),
      (I = Math.floor(h / 65536)),
      (ge = h - I * 65536),
      (h = _e + I + 65535),
      (I = Math.floor(h / 65536)),
      (_e = h - I * 65536),
      (h = Ne + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ne = h - I * 65536),
      (h = De + I + 65535),
      (I = Math.floor(h / 65536)),
      (De = h - I * 65536),
      (h = Pe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Pe = h - I * 65536),
      (h = Pt + I + 65535),
      (I = Math.floor(h / 65536)),
      (Pt = h - I * 65536),
      (h = wt + I + 65535),
      (I = Math.floor(h / 65536)),
      (wt = h - I * 65536),
      (h = at + I + 65535),
      (I = Math.floor(h / 65536)),
      (at = h - I * 65536),
      (h = Fe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Fe = h - I * 65536),
      (h = Xe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Xe = h - I * 65536),
      (h = Ze + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ze = h - I * 65536),
      (h = ct + I + 65535),
      (I = Math.floor(h / 65536)),
      (ct = h - I * 65536),
      (h = ze + I + 65535),
      (I = Math.floor(h / 65536)),
      (ze = h - I * 65536),
      (h = et + I + 65535),
      (I = Math.floor(h / 65536)),
      (et = h - I * 65536),
      (h = $e + I + 65535),
      (I = Math.floor(h / 65536)),
      ($e = h - I * 65536),
      (ee += I - 1 + 37 * (I - 1)),
      (I = 1),
      (h = ee + I + 65535),
      (I = Math.floor(h / 65536)),
      (ee = h - I * 65536),
      (h = ge + I + 65535),
      (I = Math.floor(h / 65536)),
      (ge = h - I * 65536),
      (h = _e + I + 65535),
      (I = Math.floor(h / 65536)),
      (_e = h - I * 65536),
      (h = Ne + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ne = h - I * 65536),
      (h = De + I + 65535),
      (I = Math.floor(h / 65536)),
      (De = h - I * 65536),
      (h = Pe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Pe = h - I * 65536),
      (h = Pt + I + 65535),
      (I = Math.floor(h / 65536)),
      (Pt = h - I * 65536),
      (h = wt + I + 65535),
      (I = Math.floor(h / 65536)),
      (wt = h - I * 65536),
      (h = at + I + 65535),
      (I = Math.floor(h / 65536)),
      (at = h - I * 65536),
      (h = Fe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Fe = h - I * 65536),
      (h = Xe + I + 65535),
      (I = Math.floor(h / 65536)),
      (Xe = h - I * 65536),
      (h = Ze + I + 65535),
      (I = Math.floor(h / 65536)),
      (Ze = h - I * 65536),
      (h = ct + I + 65535),
      (I = Math.floor(h / 65536)),
      (ct = h - I * 65536),
      (h = ze + I + 65535),
      (I = Math.floor(h / 65536)),
      (ze = h - I * 65536),
      (h = et + I + 65535),
      (I = Math.floor(h / 65536)),
      (et = h - I * 65536),
      (h = $e + I + 65535),
      (I = Math.floor(h / 65536)),
      ($e = h - I * 65536),
      (ee += I - 1 + 37 * (I - 1)),
      (D[0] = ee),
      (D[1] = ge),
      (D[2] = _e),
      (D[3] = Ne),
      (D[4] = De),
      (D[5] = Pe),
      (D[6] = Pt),
      (D[7] = wt),
      (D[8] = at),
      (D[9] = Fe),
      (D[10] = Xe),
      (D[11] = Ze),
      (D[12] = ct),
      (D[13] = ze),
      (D[14] = et),
      (D[15] = $e);
  }
  function G(D, $) {
    z(D, $, $);
  }
  function ve(D, $) {
    const R = a();
    let h;
    for (h = 0; h < 16; h++) R[h] = $[h];
    for (h = 253; h >= 0; h--) G(R, R), h !== 2 && h !== 4 && z(R, R, $);
    for (h = 0; h < 16; h++) D[h] = R[h];
  }
  function ne(D, $) {
    const R = a();
    let h;
    for (h = 0; h < 16; h++) R[h] = $[h];
    for (h = 250; h >= 0; h--) G(R, R), h !== 1 && z(R, R, $);
    for (h = 0; h < 16; h++) D[h] = R[h];
  }
  function ue(D, $) {
    const R = a(),
      h = a(),
      I = a(),
      ee = a(),
      ge = a(),
      _e = a(),
      Ne = a(),
      De = a(),
      Pe = a();
    L(R, D[1], D[0]),
      L(Pe, $[1], $[0]),
      z(R, R, Pe),
      de(h, D[0], D[1]),
      de(Pe, $[0], $[1]),
      z(h, h, Pe),
      z(I, D[3], $[3]),
      z(I, I, y),
      z(ee, D[2], $[2]),
      de(ee, ee, ee),
      L(ge, h, R),
      L(_e, ee, I),
      de(Ne, ee, I),
      de(De, h, R),
      z(D[0], ge, _e),
      z(D[1], De, Ne),
      z(D[2], Ne, _e),
      z(D[3], ge, De);
  }
  function Te(D, $, R) {
    for (let h = 0; h < 4; h++) K(D[h], $[h], R);
  }
  function qe(D, $) {
    const R = a(),
      h = a(),
      I = a();
    ve(I, $[2]), z(R, $[0], I), z(h, $[1], I), ie(D, h), (D[31] ^= fe(R) << 7);
  }
  function m(D, $, R) {
    U(D[0], f), U(D[1], g), U(D[2], g), U(D[3], f);
    for (let h = 255; h >= 0; --h) {
      const I = (R[(h / 8) | 0] >> (h & 7)) & 1;
      Te(D, $, I), ue($, D), ue(D, D), Te(D, $, I);
    }
  }
  function x(D, $) {
    const R = [a(), a(), a(), a()];
    U(R[0], E), U(R[1], O), U(R[2], g), z(R[3], E, O), m(D, R, $);
  }
  function X(D) {
    if (D.length !== n.SEED_LENGTH) throw new Error(`ed25519: seed must be ${n.SEED_LENGTH} bytes`);
    const $ = (0, r.hash)(D);
    ($[0] &= 248), ($[31] &= 127), ($[31] |= 64);
    const R = new Uint8Array(32),
      h = [a(), a(), a(), a()];
    x(h, $), qe(R, h);
    const I = new Uint8Array(64);
    return I.set(D), I.set(R, 32), { publicKey: R, secretKey: I };
  }
  n.generateKeyPairFromSeed = X;
  function ce(D) {
    const $ = (0, t.randomBytes)(32, D),
      R = X($);
    return (0, s.wipe)($), R;
  }
  n.generateKeyPair = ce;
  function V(D) {
    if (D.length !== n.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${n.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(D.subarray(32));
  }
  n.extractPublicKeyFromSecretKey = V;
  const k = new Float64Array([
    237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 16,
  ]);
  function B(D, $) {
    let R, h, I, ee;
    for (h = 63; h >= 32; --h) {
      for (R = 0, I = h - 32, ee = h - 12; I < ee; ++I)
        ($[I] += R - 16 * $[h] * k[I - (h - 32)]),
          (R = Math.floor(($[I] + 128) / 256)),
          ($[I] -= R * 256);
      ($[I] += R), ($[h] = 0);
    }
    for (R = 0, I = 0; I < 32; I++)
      ($[I] += R - ($[31] >> 4) * k[I]), (R = $[I] >> 8), ($[I] &= 255);
    for (I = 0; I < 32; I++) $[I] -= R * k[I];
    for (h = 0; h < 32; h++) ($[h + 1] += $[h] >> 8), (D[h] = $[h] & 255);
  }
  function W(D) {
    const $ = new Float64Array(64);
    for (let R = 0; R < 64; R++) $[R] = D[R];
    for (let R = 0; R < 64; R++) D[R] = 0;
    B(D, $);
  }
  function Qe(D, $) {
    const R = new Float64Array(64),
      h = [a(), a(), a(), a()],
      I = (0, r.hash)(D.subarray(0, 32));
    (I[0] &= 248), (I[31] &= 127), (I[31] |= 64);
    const ee = new Uint8Array(64);
    ee.set(I.subarray(32), 32);
    const ge = new r.SHA512();
    ge.update(ee.subarray(32)), ge.update($);
    const _e = ge.digest();
    ge.clean(),
      W(_e),
      x(h, _e),
      qe(ee, h),
      ge.reset(),
      ge.update(ee.subarray(0, 32)),
      ge.update(D.subarray(32)),
      ge.update($);
    const Ne = ge.digest();
    W(Ne);
    for (let De = 0; De < 32; De++) R[De] = _e[De];
    for (let De = 0; De < 32; De++) for (let Pe = 0; Pe < 32; Pe++) R[De + Pe] += Ne[De] * I[Pe];
    return B(ee.subarray(32), R), ee;
  }
  n.sign = Qe;
  function Be(D, $) {
    const R = a(),
      h = a(),
      I = a(),
      ee = a(),
      ge = a(),
      _e = a(),
      Ne = a();
    return (
      U(D[2], g),
      pe(D[1], $),
      G(I, D[1]),
      z(ee, I, b),
      L(I, I, D[2]),
      de(ee, D[2], ee),
      G(ge, ee),
      G(_e, ge),
      z(Ne, _e, ge),
      z(R, Ne, I),
      z(R, R, ee),
      ne(R, R),
      z(R, R, I),
      z(R, R, ee),
      z(R, R, ee),
      z(D[0], R, ee),
      G(h, D[0]),
      z(h, h, ee),
      le(h, I) && z(D[0], D[0], T),
      G(h, D[0]),
      z(h, h, ee),
      le(h, I) ? -1 : (fe(D[0]) === $[31] >> 7 && L(D[0], f, D[0]), z(D[3], D[0], D[1]), 0)
    );
  }
  function Kr(D, $, R) {
    const h = new Uint8Array(32),
      I = [a(), a(), a(), a()],
      ee = [a(), a(), a(), a()];
    if (R.length !== n.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${n.SIGNATURE_LENGTH} bytes`);
    if (Be(ee, D)) return !1;
    const ge = new r.SHA512();
    ge.update(R.subarray(0, 32)), ge.update(D), ge.update($);
    const _e = ge.digest();
    return W(_e), m(I, ee, _e), x(ee, R.subarray(32)), ue(I, ee), qe(h, I), !he(R, h);
  }
  n.verify = Kr;
  function Ie(D) {
    let $ = [a(), a(), a(), a()];
    if (Be($, D)) throw new Error('Ed25519: invalid public key');
    let R = a(),
      h = a(),
      I = $[1];
    de(R, g, I), L(h, g, I), ve(h, h), z(R, R, h);
    let ee = new Uint8Array(32);
    return ie(ee, R), ee;
  }
  n.convertPublicKeyToX25519 = Ie;
  function St(D) {
    const $ = (0, r.hash)(D.subarray(0, 32));
    ($[0] &= 248), ($[31] &= 127), ($[31] |= 64);
    const R = new Uint8Array($.subarray(0, 32));
    return (0, s.wipe)($), R;
  }
  n.convertSecretKeyToX25519 = St;
})(Xc);
const y_ = 'EdDSA',
  v_ = 'JWT',
  cp = '.',
  up = 'base64url',
  m_ = 'utf8',
  w_ = 'utf8',
  b_ = ':',
  __ = 'did',
  E_ = 'key',
  zl = 'base58btc',
  I_ = 'z',
  x_ = 'K36',
  S_ = 32;
function Lo(n) {
  return ar(vr(Yi(n), m_), up);
}
function hp(n) {
  const t = vr(x_, zl),
    r = I_ + ar($c([t, n]), zl);
  return [__, E_, r].join(b_);
}
function P_(n) {
  return ar(n, up);
}
function O_(n) {
  return vr([Lo(n.header), Lo(n.payload)].join(cp), w_);
}
function A_(n) {
  return [Lo(n.header), Lo(n.payload), P_(n.signature)].join(cp);
}
function kl(n = Uo.randomBytes(S_)) {
  return Xc.generateKeyPairFromSeed(n);
}
async function R_(n, t, r, s, a = re.fromMiliseconds(Date.now())) {
  const u = { alg: y_, typ: v_ },
    f = hp(s.publicKey),
    g = a + r,
    b = { iss: f, sub: n, aud: t, iat: a, exp: g },
    y = O_({ header: u, payload: b }),
    E = Xc.sign(s.secretKey, y);
  return A_({ header: u, payload: b, signature: E });
}
const C_ = 'PARSE_ERROR',
  T_ = 'INVALID_REQUEST',
  N_ = 'METHOD_NOT_FOUND',
  $_ = 'INVALID_PARAMS',
  lp = 'INTERNAL_ERROR',
  Zc = 'SERVER_ERROR',
  D_ = [-32700, -32600, -32601, -32602, -32603],
  us = {
    [C_]: { code: -32700, message: 'Parse error' },
    [T_]: { code: -32600, message: 'Invalid Request' },
    [N_]: { code: -32601, message: 'Method not found' },
    [$_]: { code: -32602, message: 'Invalid params' },
    [lp]: { code: -32603, message: 'Internal error' },
    [Zc]: { code: -32e3, message: 'Server error' },
  },
  fp = Zc;
function L_(n) {
  return D_.includes(n);
}
function Hl(n) {
  return Object.keys(us).includes(n) ? us[n] : us[fp];
}
function F_(n) {
  const t = Object.values(us).find((r) => r.code === n);
  return t || us[fp];
}
function pp(n, t, r) {
  return n.message.includes('getaddrinfo ENOTFOUND') || n.message.includes('connect ECONNREFUSED')
    ? new Error(`Unavailable ${r} RPC url at ${t}`)
    : n;
}
var dp = {},
  fi = {},
  Bl;
function M_() {
  if (Bl) return fi;
  (Bl = 1),
    Object.defineProperty(fi, '__esModule', { value: !0 }),
    (fi.isBrowserCryptoAvailable = fi.getSubtleCrypto = fi.getBrowerCrypto = void 0);
  function n() {
    return (
      (Br === null || Br === void 0 ? void 0 : Br.crypto) ||
      (Br === null || Br === void 0 ? void 0 : Br.msCrypto) ||
      {}
    );
  }
  fi.getBrowerCrypto = n;
  function t() {
    const s = n();
    return s.subtle || s.webkitSubtle;
  }
  fi.getSubtleCrypto = t;
  function r() {
    return !!n() && !!t();
  }
  return (fi.isBrowserCryptoAvailable = r), fi;
}
var pi = {},
  Kl;
function j_() {
  if (Kl) return pi;
  (Kl = 1),
    Object.defineProperty(pi, '__esModule', { value: !0 }),
    (pi.isBrowser = pi.isNode = pi.isReactNative = void 0);
  function n() {
    return typeof document > 'u' && typeof navigator < 'u' && navigator.product === 'ReactNative';
  }
  pi.isReactNative = n;
  function t() {
    return (
      typeof process < 'u' && typeof process.versions < 'u' && typeof process.versions.node < 'u'
    );
  }
  pi.isNode = t;
  function r() {
    return !n() && !t();
  }
  return (pi.isBrowser = r), pi;
}
(function (n) {
  Object.defineProperty(n, '__esModule', { value: !0 });
  const t = Rn;
  t.__exportStar(M_(), n), t.__exportStar(j_(), n);
})(dp);
function eu(n = 3) {
  const t = Date.now() * Math.pow(10, n),
    r = Math.floor(Math.random() * Math.pow(10, n));
  return t + r;
}
function gp(n = 6) {
  return BigInt(eu(n));
}
function An(n, t, r) {
  return { id: r || eu(), jsonrpc: '2.0', method: n, params: t };
}
function tu(n, t) {
  return { id: n, jsonrpc: '2.0', result: t };
}
function zo(n, t, r) {
  return { id: n, jsonrpc: '2.0', error: U_(t, r) };
}
function U_(n, t) {
  return typeof n > 'u'
    ? Hl(lp)
    : (typeof n == 'string' && (n = Object.assign(Object.assign({}, Hl(Zc)), { message: n })),
      typeof t < 'u' && (n.data = t),
      L_(n.code) && (n = F_(n.code)),
      n);
}
class q_ {}
class z_ extends q_ {
  constructor() {
    super();
  }
}
class k_ extends z_ {
  constructor(t) {
    super();
  }
}
const H_ = '^https?:',
  B_ = '^wss?:';
function K_(n) {
  const t = n.match(new RegExp(/^\w+:/, 'gi'));
  if (!(!t || !t.length)) return t[0];
}
function yp(n, t) {
  const r = K_(n);
  return typeof r > 'u' ? !1 : new RegExp(t).test(r);
}
function Vl(n) {
  return yp(n, H_);
}
function Wl(n) {
  return yp(n, B_);
}
function V_(n) {
  return new RegExp('wss?://localhost(:d{2,5})?').test(n);
}
function vp(n) {
  return typeof n == 'object' && 'id' in n && 'jsonrpc' in n && n.jsonrpc === '2.0';
}
function ru(n) {
  return vp(n) && 'method' in n;
}
function ko(n) {
  return vp(n) && (yi(n) || Hr(n));
}
function yi(n) {
  return 'result' in n;
}
function Hr(n) {
  return 'error' in n;
}
class vi extends k_ {
  constructor(t) {
    super(t),
      (this.events = new Bt.EventEmitter()),
      (this.hasRegisteredEventListeners = !1),
      (this.connection = this.setConnection(t)),
      this.connection.connected && this.registerEventListeners();
  }
  async connect(t = this.connection) {
    await this.open(t);
  }
  async disconnect() {
    await this.close();
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async request(t, r) {
    return this.requestStrict(An(t.method, t.params || [], t.id || gp().toString()), r);
  }
  async requestStrict(t, r) {
    return new Promise(async (s, a) => {
      if (!this.connection.connected)
        try {
          await this.open();
        } catch (u) {
          a(u);
        }
      this.events.on(`${t.id}`, (u) => {
        Hr(u) ? a(u.error) : s(u.result);
      });
      try {
        await this.connection.send(t, r);
      } catch (u) {
        a(u);
      }
    });
  }
  setConnection(t = this.connection) {
    return t;
  }
  onPayload(t) {
    this.events.emit('payload', t),
      ko(t)
        ? this.events.emit(`${t.id}`, t)
        : this.events.emit('message', { type: t.method, data: t.params });
  }
  onClose(t) {
    t &&
      t.code === 3e3 &&
      this.events.emit(
        'error',
        new Error(
          `WebSocket connection closed abnormally with code: ${t.code} ${
            t.reason ? `(${t.reason})` : ''
          }`,
        ),
      ),
      this.events.emit('disconnect');
  }
  async open(t = this.connection) {
    (this.connection === t && this.connection.connected) ||
      (this.connection.connected && this.close(),
      typeof t == 'string' && (await this.connection.open(t), (t = this.connection)),
      (this.connection = this.setConnection(t)),
      await this.connection.open(),
      this.registerEventListeners(),
      this.events.emit('connect'));
  }
  async close() {
    await this.connection.close();
  }
  registerEventListeners() {
    this.hasRegisteredEventListeners ||
      (this.connection.on('payload', (t) => this.onPayload(t)),
      this.connection.on('close', (t) => this.onClose(t)),
      this.connection.on('error', (t) => this.events.emit('error', t)),
      this.connection.on('register_error', (t) => this.onClose()),
      (this.hasRegisteredEventListeners = !0));
  }
}
const W_ = () =>
    typeof WebSocket < 'u'
      ? WebSocket
      : typeof global < 'u' && typeof global.WebSocket < 'u'
        ? global.WebSocket
        : typeof window < 'u' && typeof window.WebSocket < 'u'
          ? window.WebSocket
          : typeof self < 'u' && typeof self.WebSocket < 'u'
            ? self.WebSocket
            : require('ws'),
  G_ = () =>
    typeof WebSocket < 'u' ||
    (typeof global < 'u' && typeof global.WebSocket < 'u') ||
    (typeof window < 'u' && typeof window.WebSocket < 'u') ||
    (typeof self < 'u' && typeof self.WebSocket < 'u'),
  Gl = (n) => n.split('?')[0],
  Jl = 10,
  J_ = W_();
let Q_ = class {
  constructor(t) {
    if (((this.url = t), (this.events = new Bt.EventEmitter()), (this.registering = !1), !Wl(t)))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    this.url = t;
  }
  get connected() {
    return typeof this.socket < 'u';
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    return new Promise((t, r) => {
      if (typeof this.socket > 'u') {
        r(new Error('Connection already closed'));
        return;
      }
      (this.socket.onclose = (s) => {
        this.onClose(s), t();
      }),
        this.socket.close();
    });
  }
  async send(t) {
    typeof this.socket > 'u' && (this.socket = await this.register());
    try {
      this.socket.send(Yi(t));
    } catch (r) {
      this.onError(t.id, r);
    }
  }
  register(t = this.url) {
    if (!Wl(t)) throw new Error(`Provided URL is not compatible with WebSocket connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount('register_error') >= r ||
          this.events.listenerCount('open') >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, a) => {
          this.events.once('register_error', (u) => {
            this.resetMaxListeners(), a(u);
          }),
            this.events.once('open', () => {
              if ((this.resetMaxListeners(), typeof this.socket > 'u'))
                return a(new Error('WebSocket connection is missing or invalid'));
              s(this.socket);
            });
        })
      );
    }
    return (
      (this.url = t),
      (this.registering = !0),
      new Promise((r, s) => {
        const a = new URLSearchParams(t).get('origin'),
          u = dp.isReactNative() ? { headers: { origin: a } } : { rejectUnauthorized: !V_(t) },
          f = new J_(t, [], u);
        G_()
          ? (f.onerror = (g) => {
              const b = g;
              s(this.emitError(b.error));
            })
          : f.on('error', (g) => {
              s(this.emitError(g));
            }),
          (f.onopen = () => {
            this.onOpen(f), r(f);
          });
      })
    );
  }
  onOpen(t) {
    (t.onmessage = (r) => this.onPayload(r)),
      (t.onclose = (r) => this.onClose(r)),
      (this.socket = t),
      (this.registering = !1),
      this.events.emit('open');
  }
  onClose(t) {
    (this.socket = void 0), (this.registering = !1), this.events.emit('close', t);
  }
  onPayload(t) {
    if (typeof t.data > 'u') return;
    const r = typeof t.data == 'string' ? ds(t.data) : t.data;
    this.events.emit('payload', r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      a = s.message || s.toString(),
      u = zo(t, a);
    this.events.emit('payload', u);
  }
  parseError(t, r = this.url) {
    return pp(t, Gl(r), 'WS');
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Jl && this.events.setMaxListeners(Jl);
  }
  emitError(t) {
    const r = this.parseError(
      new Error(
        (t == null ? void 0 : t.message) || `WebSocket connection failed for host: ${Gl(this.url)}`,
      ),
    );
    return this.events.emit('register_error', r), r;
  }
};
var Fo = {},
  Y_ = {
    get exports() {
      return Fo;
    },
    set exports(n) {
      Fo = n;
    },
  };
(function (n, t) {
  var r = 200,
    s = '__lodash_hash_undefined__',
    a = 1,
    u = 2,
    f = 9007199254740991,
    g = '[object Arguments]',
    b = '[object Array]',
    y = '[object AsyncFunction]',
    E = '[object Boolean]',
    O = '[object Date]',
    T = '[object Error]',
    U = '[object Function]',
    C = '[object GeneratorFunction]',
    K = '[object Map]',
    ie = '[object Number]',
    he = '[object Null]',
    le = '[object Object]',
    fe = '[object Promise]',
    pe = '[object Proxy]',
    de = '[object RegExp]',
    L = '[object Set]',
    z = '[object String]',
    G = '[object Symbol]',
    ve = '[object Undefined]',
    ne = '[object WeakMap]',
    ue = '[object ArrayBuffer]',
    Te = '[object DataView]',
    qe = '[object Float32Array]',
    m = '[object Float64Array]',
    x = '[object Int8Array]',
    X = '[object Int16Array]',
    ce = '[object Int32Array]',
    V = '[object Uint8Array]',
    k = '[object Uint8ClampedArray]',
    B = '[object Uint16Array]',
    W = '[object Uint32Array]',
    Qe = /[\\^$.*+?()[\]{}|]/g,
    Be = /^\[object .+?Constructor\]$/,
    Kr = /^(?:0|[1-9]\d*)$/,
    Ie = {};
  (Ie[qe] = Ie[m] = Ie[x] = Ie[X] = Ie[ce] = Ie[V] = Ie[k] = Ie[B] = Ie[W] = !0),
    (Ie[g] =
      Ie[b] =
      Ie[ue] =
      Ie[E] =
      Ie[Te] =
      Ie[O] =
      Ie[T] =
      Ie[U] =
      Ie[K] =
      Ie[ie] =
      Ie[le] =
      Ie[de] =
      Ie[L] =
      Ie[z] =
      Ie[ne] =
        !1);
  var St = typeof Br == 'object' && Br && Br.Object === Object && Br,
    D = typeof self == 'object' && self && self.Object === Object && self,
    $ = St || D || Function('return this')(),
    R = t && !t.nodeType && t,
    h = R && !0 && n && !n.nodeType && n,
    I = h && h.exports === R,
    ee = I && St.process,
    ge = (function () {
      try {
        return ee && ee.binding && ee.binding('util');
      } catch {}
    })(),
    _e = ge && ge.isTypedArray;
  function Ne(v, S) {
    for (var q = -1, Y = v == null ? 0 : v.length, We = 0, me = []; ++q < Y; ) {
      var tt = v[q];
      S(tt, q, v) && (me[We++] = tt);
    }
    return me;
  }
  function De(v, S) {
    for (var q = -1, Y = S.length, We = v.length; ++q < Y; ) v[We + q] = S[q];
    return v;
  }
  function Pe(v, S) {
    for (var q = -1, Y = v == null ? 0 : v.length; ++q < Y; ) if (S(v[q], q, v)) return !0;
    return !1;
  }
  function Pt(v, S) {
    for (var q = -1, Y = Array(v); ++q < v; ) Y[q] = S(q);
    return Y;
  }
  function wt(v) {
    return function (S) {
      return v(S);
    };
  }
  function at(v, S) {
    return v.has(S);
  }
  function Fe(v, S) {
    return v == null ? void 0 : v[S];
  }
  function Xe(v) {
    var S = -1,
      q = Array(v.size);
    return (
      v.forEach(function (Y, We) {
        q[++S] = [We, Y];
      }),
      q
    );
  }
  function Ze(v, S) {
    return function (q) {
      return v(S(q));
    };
  }
  function ct(v) {
    var S = -1,
      q = Array(v.size);
    return (
      v.forEach(function (Y) {
        q[++S] = Y;
      }),
      q
    );
  }
  var ze = Array.prototype,
    et = Function.prototype,
    $e = Object.prototype,
    Ke = $['__core-js_shared__'],
    lt = et.toString,
    je = $e.hasOwnProperty,
    Ot = (function () {
      var v = /[^.]+$/.exec((Ke && Ke.keys && Ke.keys.IE_PROTO) || '');
      return v ? 'Symbol(src)_1.' + v : '';
    })(),
    Ft = $e.toString,
    Kt = RegExp(
      '^' +
        lt
          .call(je)
          .replace(Qe, '\\$&')
          .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
        '$',
    ),
    Vt = I ? $.Buffer : void 0,
    Ut = $.Symbol,
    Xt = $.Uint8Array,
    cr = $e.propertyIsEnumerable,
    Vr = ze.splice,
    Zt = Ut ? Ut.toStringTag : void 0,
    ei = Object.getOwnPropertySymbols,
    wi = Vt ? Vt.isBuffer : void 0,
    Di = Ze(Object.keys, Object),
    ft = mr($, 'DataView'),
    it = mr($, 'Map'),
    pt = mr($, 'Promise'),
    dt = mr($, 'Set'),
    ut = mr($, 'WeakMap'),
    nt = mr(Object, 'create'),
    At = ri(ft),
    Rt = ri(it),
    gt = ri(pt),
    Ct = ri(dt),
    yt = ri(ut),
    bt = Ut ? Ut.prototype : void 0,
    vt = bt ? bt.valueOf : void 0;
  function Ye(v) {
    var S = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++S < q; ) {
      var Y = v[S];
      this.set(Y[0], Y[1]);
    }
  }
  function Tt() {
    (this.__data__ = nt ? nt(null) : {}), (this.size = 0);
  }
  function Nt(v) {
    var S = this.has(v) && delete this.__data__[v];
    return (this.size -= S ? 1 : 0), S;
  }
  function Ko(v) {
    var S = this.__data__;
    if (nt) {
      var q = S[v];
      return q === s ? void 0 : q;
    }
    return je.call(S, v) ? S[v] : void 0;
  }
  function Vo(v) {
    var S = this.__data__;
    return nt ? S[v] !== void 0 : je.call(S, v);
  }
  function Wo(v, S) {
    var q = this.__data__;
    return (this.size += this.has(v) ? 0 : 1), (q[v] = nt && S === void 0 ? s : S), this;
  }
  (Ye.prototype.clear = Tt),
    (Ye.prototype.delete = Nt),
    (Ye.prototype.get = Ko),
    (Ye.prototype.has = Vo),
    (Ye.prototype.set = Wo);
  function Sr(v) {
    var S = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++S < q; ) {
      var Y = v[S];
      this.set(Y[0], Y[1]);
    }
  }
  function Go() {
    (this.__data__ = []), (this.size = 0);
  }
  function Jo(v) {
    var S = this.__data__,
      q = Li(S, v);
    if (q < 0) return !1;
    var Y = S.length - 1;
    return q == Y ? S.pop() : Vr.call(S, q, 1), --this.size, !0;
  }
  function Qo(v) {
    var S = this.__data__,
      q = Li(S, v);
    return q < 0 ? void 0 : S[q][1];
  }
  function Yo(v) {
    return Li(this.__data__, v) > -1;
  }
  function Xo(v, S) {
    var q = this.__data__,
      Y = Li(q, v);
    return Y < 0 ? (++this.size, q.push([v, S])) : (q[Y][1] = S), this;
  }
  (Sr.prototype.clear = Go),
    (Sr.prototype.delete = Jo),
    (Sr.prototype.get = Qo),
    (Sr.prototype.has = Yo),
    (Sr.prototype.set = Xo);
  function ti(v) {
    var S = -1,
      q = v == null ? 0 : v.length;
    for (this.clear(); ++S < q; ) {
      var Y = v[S];
      this.set(Y[0], Y[1]);
    }
  }
  function rn() {
    (this.size = 0), (this.__data__ = { hash: new Ye(), map: new (it || Sr)(), string: new Ye() });
  }
  function Zo(v) {
    var S = bi(this, v).delete(v);
    return (this.size -= S ? 1 : 0), S;
  }
  function nn(v) {
    return bi(this, v).get(v);
  }
  function ea(v) {
    return bi(this, v).has(v);
  }
  function ta(v, S) {
    var q = bi(this, v),
      Y = q.size;
    return q.set(v, S), (this.size += q.size == Y ? 0 : 1), this;
  }
  (ti.prototype.clear = rn),
    (ti.prototype.delete = Zo),
    (ti.prototype.get = nn),
    (ti.prototype.has = ea),
    (ti.prototype.set = ta);
  function sn(v) {
    var S = -1,
      q = v == null ? 0 : v.length;
    for (this.__data__ = new ti(); ++S < q; ) this.add(v[S]);
  }
  function ys(v) {
    return this.__data__.set(v, s), this;
  }
  function vs(v) {
    return this.__data__.has(v);
  }
  (sn.prototype.add = sn.prototype.push = ys), (sn.prototype.has = vs);
  function Lr(v) {
    var S = (this.__data__ = new Sr(v));
    this.size = S.size;
  }
  function ra() {
    (this.__data__ = new Sr()), (this.size = 0);
  }
  function ia(v) {
    var S = this.__data__,
      q = S.delete(v);
    return (this.size = S.size), q;
  }
  function na(v) {
    return this.__data__.get(v);
  }
  function sa(v) {
    return this.__data__.has(v);
  }
  function ms(v, S) {
    var q = this.__data__;
    if (q instanceof Sr) {
      var Y = q.__data__;
      if (!it || Y.length < r - 1) return Y.push([v, S]), (this.size = ++q.size), this;
      q = this.__data__ = new ti(Y);
    }
    return q.set(v, S), (this.size = q.size), this;
  }
  (Lr.prototype.clear = ra),
    (Lr.prototype.delete = ia),
    (Lr.prototype.get = na),
    (Lr.prototype.has = sa),
    (Lr.prototype.set = ms);
  function ws(v, S) {
    var q = cn(v),
      Y = !q && Ts(v),
      We = !q && !Y && Fn(v),
      me = !q && !Y && !We && Ds(v),
      tt = q || Y || We || me,
      $t = tt ? Pt(v.length, String) : [],
      Ae = $t.length;
    for (var Ge in v)
      (S || je.call(v, Ge)) &&
        !(
          tt &&
          (Ge == 'length' ||
            (We && (Ge == 'offset' || Ge == 'parent')) ||
            (me && (Ge == 'buffer' || Ge == 'byteLength' || Ge == 'byteOffset')) ||
            Ps(Ge, Ae))
        ) &&
        $t.push(Ge);
    return $t;
  }
  function Li(v, S) {
    for (var q = v.length; q--; ) if (Cs(v[q][0], S)) return q;
    return -1;
  }
  function Dn(v, S, q) {
    var Y = S(v);
    return cn(v) ? Y : De(Y, q(v));
  }
  function Fi(v) {
    return v == null ? (v === void 0 ? ve : he) : Zt && Zt in Object(v) ? xs(v) : ca(v);
  }
  function Ln(v) {
    return ji(v) && Fi(v) == g;
  }
  function Mi(v, S, q, Y, We) {
    return v === S
      ? !0
      : v == null || S == null || (!ji(v) && !ji(S))
        ? v !== v && S !== S
        : bs(v, S, q, Y, Mi, We);
  }
  function bs(v, S, q, Y, We, me) {
    var tt = cn(v),
      $t = cn(S),
      Ae = tt ? b : Wr(v),
      Ge = $t ? b : Wr(S);
    (Ae = Ae == g ? le : Ae), (Ge = Ge == g ? le : Ge);
    var _t = Ae == le,
      ur = Ge == le,
      Dt = Ae == Ge;
    if (Dt && Fn(v)) {
      if (!Fn(S)) return !1;
      (tt = !0), (_t = !1);
    }
    if (Dt && !_t)
      return (
        me || (me = new Lr()), tt || Ds(v) ? on(v, S, q, Y, We, me) : aa(v, S, Ae, q, Y, We, me)
      );
    if (!(q & a)) {
      var rt = _t && je.call(v, '__wrapped__'),
        er = ur && je.call(S, '__wrapped__');
      if (rt || er) {
        var Fr = rt ? v.value() : v,
          Pr = er ? S.value() : S;
        return me || (me = new Lr()), We(Fr, Pr, q, Y, me);
      }
    }
    return Dt ? (me || (me = new Lr()), Is(v, S, q, Y, We, me)) : !1;
  }
  function oa(v) {
    if (!$s(v) || As(v)) return !1;
    var S = un(v) ? Kt : Be;
    return S.test(ri(v));
  }
  function _s(v) {
    return ji(v) && Ns(v.length) && !!Ie[Fi(v)];
  }
  function Es(v) {
    if (!Rs(v)) return Di(v);
    var S = [];
    for (var q in Object(v)) je.call(v, q) && q != 'constructor' && S.push(q);
    return S;
  }
  function on(v, S, q, Y, We, me) {
    var tt = q & a,
      $t = v.length,
      Ae = S.length;
    if ($t != Ae && !(tt && Ae > $t)) return !1;
    var Ge = me.get(v);
    if (Ge && me.get(S)) return Ge == S;
    var _t = -1,
      ur = !0,
      Dt = q & u ? new sn() : void 0;
    for (me.set(v, S), me.set(S, v); ++_t < $t; ) {
      var rt = v[_t],
        er = S[_t];
      if (Y) var Fr = tt ? Y(er, rt, _t, S, v, me) : Y(rt, er, _t, v, S, me);
      if (Fr !== void 0) {
        if (Fr) continue;
        ur = !1;
        break;
      }
      if (Dt) {
        if (
          !Pe(S, function (Pr, Gr) {
            if (!at(Dt, Gr) && (rt === Pr || We(rt, Pr, q, Y, me))) return Dt.push(Gr);
          })
        ) {
          ur = !1;
          break;
        }
      } else if (!(rt === er || We(rt, er, q, Y, me))) {
        ur = !1;
        break;
      }
    }
    return me.delete(v), me.delete(S), ur;
  }
  function aa(v, S, q, Y, We, me, tt) {
    switch (q) {
      case Te:
        if (v.byteLength != S.byteLength || v.byteOffset != S.byteOffset) return !1;
        (v = v.buffer), (S = S.buffer);
      case ue:
        return !(v.byteLength != S.byteLength || !me(new Xt(v), new Xt(S)));
      case E:
      case O:
      case ie:
        return Cs(+v, +S);
      case T:
        return v.name == S.name && v.message == S.message;
      case de:
      case z:
        return v == S + '';
      case K:
        var $t = Xe;
      case L:
        var Ae = Y & a;
        if (($t || ($t = ct), v.size != S.size && !Ae)) return !1;
        var Ge = tt.get(v);
        if (Ge) return Ge == S;
        (Y |= u), tt.set(v, S);
        var _t = on($t(v), $t(S), Y, We, me, tt);
        return tt.delete(v), _t;
      case G:
        if (vt) return vt.call(v) == vt.call(S);
    }
    return !1;
  }
  function Is(v, S, q, Y, We, me) {
    var tt = q & a,
      $t = an(v),
      Ae = $t.length,
      Ge = an(S),
      _t = Ge.length;
    if (Ae != _t && !tt) return !1;
    for (var ur = Ae; ur--; ) {
      var Dt = $t[ur];
      if (!(tt ? Dt in S : je.call(S, Dt))) return !1;
    }
    var rt = me.get(v);
    if (rt && me.get(S)) return rt == S;
    var er = !0;
    me.set(v, S), me.set(S, v);
    for (var Fr = tt; ++ur < Ae; ) {
      Dt = $t[ur];
      var Pr = v[Dt],
        Gr = S[Dt];
      if (Y) var Mn = tt ? Y(Gr, Pr, Dt, S, v, me) : Y(Pr, Gr, Dt, v, S, me);
      if (!(Mn === void 0 ? Pr === Gr || We(Pr, Gr, q, Y, me) : Mn)) {
        er = !1;
        break;
      }
      Fr || (Fr = Dt == 'constructor');
    }
    if (er && !Fr) {
      var Ui = v.constructor,
        qt = S.constructor;
      Ui != qt &&
        'constructor' in v &&
        'constructor' in S &&
        !(
          typeof Ui == 'function' &&
          Ui instanceof Ui &&
          typeof qt == 'function' &&
          qt instanceof qt
        ) &&
        (er = !1);
    }
    return me.delete(v), me.delete(S), er;
  }
  function an(v) {
    return Dn(v, la, Ss);
  }
  function bi(v, S) {
    var q = v.__data__;
    return Os(S) ? q[typeof S == 'string' ? 'string' : 'hash'] : q.map;
  }
  function mr(v, S) {
    var q = Fe(v, S);
    return oa(q) ? q : void 0;
  }
  function xs(v) {
    var S = je.call(v, Zt),
      q = v[Zt];
    try {
      v[Zt] = void 0;
      var Y = !0;
    } catch {}
    var We = Ft.call(v);
    return Y && (S ? (v[Zt] = q) : delete v[Zt]), We;
  }
  var Ss = ei
      ? function (v) {
          return v == null
            ? []
            : ((v = Object(v)),
              Ne(ei(v), function (S) {
                return cr.call(v, S);
              }));
        }
      : Ve,
    Wr = Fi;
  ((ft && Wr(new ft(new ArrayBuffer(1))) != Te) ||
    (it && Wr(new it()) != K) ||
    (pt && Wr(pt.resolve()) != fe) ||
    (dt && Wr(new dt()) != L) ||
    (ut && Wr(new ut()) != ne)) &&
    (Wr = function (v) {
      var S = Fi(v),
        q = S == le ? v.constructor : void 0,
        Y = q ? ri(q) : '';
      if (Y)
        switch (Y) {
          case At:
            return Te;
          case Rt:
            return K;
          case gt:
            return fe;
          case Ct:
            return L;
          case yt:
            return ne;
        }
      return S;
    });
  function Ps(v, S) {
    return (
      (S = S ?? f), !!S && (typeof v == 'number' || Kr.test(v)) && v > -1 && v % 1 == 0 && v < S
    );
  }
  function Os(v) {
    var S = typeof v;
    return S == 'string' || S == 'number' || S == 'symbol' || S == 'boolean'
      ? v !== '__proto__'
      : v === null;
  }
  function As(v) {
    return !!Ot && Ot in v;
  }
  function Rs(v) {
    var S = v && v.constructor,
      q = (typeof S == 'function' && S.prototype) || $e;
    return v === q;
  }
  function ca(v) {
    return Ft.call(v);
  }
  function ri(v) {
    if (v != null) {
      try {
        return lt.call(v);
      } catch {}
      try {
        return v + '';
      } catch {}
    }
    return '';
  }
  function Cs(v, S) {
    return v === S || (v !== v && S !== S);
  }
  var Ts = Ln(
      (function () {
        return arguments;
      })(),
    )
      ? Ln
      : function (v) {
          return ji(v) && je.call(v, 'callee') && !cr.call(v, 'callee');
        },
    cn = Array.isArray;
  function ua(v) {
    return v != null && Ns(v.length) && !un(v);
  }
  var Fn = wi || ke;
  function ha(v, S) {
    return Mi(v, S);
  }
  function un(v) {
    if (!$s(v)) return !1;
    var S = Fi(v);
    return S == U || S == C || S == y || S == pe;
  }
  function Ns(v) {
    return typeof v == 'number' && v > -1 && v % 1 == 0 && v <= f;
  }
  function $s(v) {
    var S = typeof v;
    return v != null && (S == 'object' || S == 'function');
  }
  function ji(v) {
    return v != null && typeof v == 'object';
  }
  var Ds = _e ? wt(_e) : _s;
  function la(v) {
    return ua(v) ? ws(v) : Es(v);
  }
  function Ve() {
    return [];
  }
  function ke() {
    return !1;
  }
  n.exports = ha;
})(Y_, Fo);
function X_(n, t) {
  if (n.length >= 255) throw new TypeError('Alphabet too long');
  for (var r = new Uint8Array(256), s = 0; s < r.length; s++) r[s] = 255;
  for (var a = 0; a < n.length; a++) {
    var u = n.charAt(a),
      f = u.charCodeAt(0);
    if (r[f] !== 255) throw new TypeError(u + ' is ambiguous');
    r[f] = a;
  }
  var g = n.length,
    b = n.charAt(0),
    y = Math.log(g) / Math.log(256),
    E = Math.log(256) / Math.log(g);
  function O(C) {
    if (
      (C instanceof Uint8Array ||
        (ArrayBuffer.isView(C)
          ? (C = new Uint8Array(C.buffer, C.byteOffset, C.byteLength))
          : Array.isArray(C) && (C = Uint8Array.from(C))),
      !(C instanceof Uint8Array))
    )
      throw new TypeError('Expected Uint8Array');
    if (C.length === 0) return '';
    for (var K = 0, ie = 0, he = 0, le = C.length; he !== le && C[he] === 0; ) he++, K++;
    for (var fe = ((le - he) * E + 1) >>> 0, pe = new Uint8Array(fe); he !== le; ) {
      for (var de = C[he], L = 0, z = fe - 1; (de !== 0 || L < ie) && z !== -1; z--, L++)
        (de += (256 * pe[z]) >>> 0), (pe[z] = de % g >>> 0), (de = (de / g) >>> 0);
      if (de !== 0) throw new Error('Non-zero carry');
      (ie = L), he++;
    }
    for (var G = fe - ie; G !== fe && pe[G] === 0; ) G++;
    for (var ve = b.repeat(K); G < fe; ++G) ve += n.charAt(pe[G]);
    return ve;
  }
  function T(C) {
    if (typeof C != 'string') throw new TypeError('Expected String');
    if (C.length === 0) return new Uint8Array();
    var K = 0;
    if (C[K] !== ' ') {
      for (var ie = 0, he = 0; C[K] === b; ) ie++, K++;
      for (var le = ((C.length - K) * y + 1) >>> 0, fe = new Uint8Array(le); C[K]; ) {
        var pe = r[C.charCodeAt(K)];
        if (pe === 255) return;
        for (var de = 0, L = le - 1; (pe !== 0 || de < he) && L !== -1; L--, de++)
          (pe += (g * fe[L]) >>> 0), (fe[L] = pe % 256 >>> 0), (pe = (pe / 256) >>> 0);
        if (pe !== 0) throw new Error('Non-zero carry');
        (he = de), K++;
      }
      if (C[K] !== ' ') {
        for (var z = le - he; z !== le && fe[z] === 0; ) z++;
        for (var G = new Uint8Array(ie + (le - z)), ve = ie; z !== le; ) G[ve++] = fe[z++];
        return G;
      }
    }
  }
  function U(C) {
    var K = T(C);
    if (K) return K;
    throw new Error(`Non-${t} character`);
  }
  return { encode: O, decodeUnsafe: T, decode: U };
}
var Z_ = X_,
  eE = Z_;
const mp = (n) => {
    if (n instanceof Uint8Array && n.constructor.name === 'Uint8Array') return n;
    if (n instanceof ArrayBuffer) return new Uint8Array(n);
    if (ArrayBuffer.isView(n)) return new Uint8Array(n.buffer, n.byteOffset, n.byteLength);
    throw new Error('Unknown type, must be binary type');
  },
  tE = (n) => new TextEncoder().encode(n),
  rE = (n) => new TextDecoder().decode(n);
class iE {
  constructor(t, r, s) {
    (this.name = t), (this.prefix = r), (this.baseEncode = s);
  }
  encode(t) {
    if (t instanceof Uint8Array) return `${this.prefix}${this.baseEncode(t)}`;
    throw Error('Unknown type, must be binary type');
  }
}
class nE {
  constructor(t, r, s) {
    if (((this.name = t), (this.prefix = r), r.codePointAt(0) === void 0))
      throw new Error('Invalid prefix character');
    (this.prefixCodePoint = r.codePointAt(0)), (this.baseDecode = s);
  }
  decode(t) {
    if (typeof t == 'string') {
      if (t.codePointAt(0) !== this.prefixCodePoint)
        throw Error(
          `Unable to decode multibase string ${JSON.stringify(t)}, ${
            this.name
          } decoder only supports inputs prefixed with ${this.prefix}`,
        );
      return this.baseDecode(t.slice(this.prefix.length));
    } else throw Error('Can only multibase decode strings');
  }
  or(t) {
    return wp(this, t);
  }
}
let sE = class {
  constructor(t) {
    this.decoders = t;
  }
  or(t) {
    return wp(this, t);
  }
  decode(t) {
    const r = t[0],
      s = this.decoders[r];
    if (s) return s.decode(t);
    throw RangeError(
      `Unable to decode multibase string ${JSON.stringify(
        t,
      )}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`,
    );
  }
};
const wp = (n, t) =>
  new sE({ ...(n.decoders || { [n.prefix]: n }), ...(t.decoders || { [t.prefix]: t }) });
class oE {
  constructor(t, r, s, a) {
    (this.name = t),
      (this.prefix = r),
      (this.baseEncode = s),
      (this.baseDecode = a),
      (this.encoder = new iE(t, r, s)),
      (this.decoder = new nE(t, r, a));
  }
  encode(t) {
    return this.encoder.encode(t);
  }
  decode(t) {
    return this.decoder.decode(t);
  }
}
const Ho = ({ name: n, prefix: t, encode: r, decode: s }) => new oE(n, t, r, s),
  gs = ({ prefix: n, name: t, alphabet: r }) => {
    const { encode: s, decode: a } = eE(r, t);
    return Ho({ prefix: n, name: t, encode: s, decode: (u) => mp(a(u)) });
  },
  aE = (n, t, r, s) => {
    const a = {};
    for (let E = 0; E < t.length; ++E) a[t[E]] = E;
    let u = n.length;
    for (; n[u - 1] === '='; ) --u;
    const f = new Uint8Array(((u * r) / 8) | 0);
    let g = 0,
      b = 0,
      y = 0;
    for (let E = 0; E < u; ++E) {
      const O = a[n[E]];
      if (O === void 0) throw new SyntaxError(`Non-${s} character`);
      (b = (b << r) | O), (g += r), g >= 8 && ((g -= 8), (f[y++] = 255 & (b >> g)));
    }
    if (g >= r || 255 & (b << (8 - g))) throw new SyntaxError('Unexpected end of data');
    return f;
  },
  cE = (n, t, r) => {
    const s = t[t.length - 1] === '=',
      a = (1 << r) - 1;
    let u = '',
      f = 0,
      g = 0;
    for (let b = 0; b < n.length; ++b)
      for (g = (g << 8) | n[b], f += 8; f > r; ) (f -= r), (u += t[a & (g >> f)]);
    if ((f && (u += t[a & (g << (r - f))]), s)) for (; (u.length * r) & 7; ) u += '=';
    return u;
  },
  Gt = ({ name: n, prefix: t, bitsPerChar: r, alphabet: s }) =>
    Ho({
      prefix: t,
      name: n,
      encode(a) {
        return cE(a, s, r);
      },
      decode(a) {
        return aE(a, s, r, n);
      },
    }),
  uE = Ho({ prefix: '\0', name: 'identity', encode: (n) => rE(n), decode: (n) => tE(n) });
var hE = Object.freeze({ __proto__: null, identity: uE });
const lE = Gt({ prefix: '0', name: 'base2', alphabet: '01', bitsPerChar: 1 });
var fE = Object.freeze({ __proto__: null, base2: lE });
const pE = Gt({ prefix: '7', name: 'base8', alphabet: '01234567', bitsPerChar: 3 });
var dE = Object.freeze({ __proto__: null, base8: pE });
const gE = gs({ prefix: '9', name: 'base10', alphabet: '0123456789' });
var yE = Object.freeze({ __proto__: null, base10: gE });
const vE = Gt({ prefix: 'f', name: 'base16', alphabet: '0123456789abcdef', bitsPerChar: 4 }),
  mE = Gt({ prefix: 'F', name: 'base16upper', alphabet: '0123456789ABCDEF', bitsPerChar: 4 });
var wE = Object.freeze({ __proto__: null, base16: vE, base16upper: mE });
const bE = Gt({
    prefix: 'b',
    name: 'base32',
    alphabet: 'abcdefghijklmnopqrstuvwxyz234567',
    bitsPerChar: 5,
  }),
  _E = Gt({
    prefix: 'B',
    name: 'base32upper',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567',
    bitsPerChar: 5,
  }),
  EE = Gt({
    prefix: 'c',
    name: 'base32pad',
    alphabet: 'abcdefghijklmnopqrstuvwxyz234567=',
    bitsPerChar: 5,
  }),
  IE = Gt({
    prefix: 'C',
    name: 'base32padupper',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=',
    bitsPerChar: 5,
  }),
  xE = Gt({
    prefix: 'v',
    name: 'base32hex',
    alphabet: '0123456789abcdefghijklmnopqrstuv',
    bitsPerChar: 5,
  }),
  SE = Gt({
    prefix: 'V',
    name: 'base32hexupper',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV',
    bitsPerChar: 5,
  }),
  PE = Gt({
    prefix: 't',
    name: 'base32hexpad',
    alphabet: '0123456789abcdefghijklmnopqrstuv=',
    bitsPerChar: 5,
  }),
  OE = Gt({
    prefix: 'T',
    name: 'base32hexpadupper',
    alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUV=',
    bitsPerChar: 5,
  }),
  AE = Gt({
    prefix: 'h',
    name: 'base32z',
    alphabet: 'ybndrfg8ejkmcpqxot1uwisza345h769',
    bitsPerChar: 5,
  });
var RE = Object.freeze({
  __proto__: null,
  base32: bE,
  base32upper: _E,
  base32pad: EE,
  base32padupper: IE,
  base32hex: xE,
  base32hexupper: SE,
  base32hexpad: PE,
  base32hexpadupper: OE,
  base32z: AE,
});
const CE = gs({ prefix: 'k', name: 'base36', alphabet: '0123456789abcdefghijklmnopqrstuvwxyz' }),
  TE = gs({ prefix: 'K', name: 'base36upper', alphabet: '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' });
var NE = Object.freeze({ __proto__: null, base36: CE, base36upper: TE });
const $E = gs({
    name: 'base58btc',
    prefix: 'z',
    alphabet: '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz',
  }),
  DE = gs({
    name: 'base58flickr',
    prefix: 'Z',
    alphabet: '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
  });
var LE = Object.freeze({ __proto__: null, base58btc: $E, base58flickr: DE });
const FE = Gt({
    prefix: 'm',
    name: 'base64',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
    bitsPerChar: 6,
  }),
  ME = Gt({
    prefix: 'M',
    name: 'base64pad',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
    bitsPerChar: 6,
  }),
  jE = Gt({
    prefix: 'u',
    name: 'base64url',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_',
    bitsPerChar: 6,
  }),
  UE = Gt({
    prefix: 'U',
    name: 'base64urlpad',
    alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=',
    bitsPerChar: 6,
  });
var qE = Object.freeze({
  __proto__: null,
  base64: FE,
  base64pad: ME,
  base64url: jE,
  base64urlpad: UE,
});
const bp = Array.from(
    '🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂',
  ),
  zE = bp.reduce((n, t, r) => ((n[r] = t), n), []),
  kE = bp.reduce((n, t, r) => ((n[t.codePointAt(0)] = r), n), []);
function HE(n) {
  return n.reduce((t, r) => ((t += zE[r]), t), '');
}
function BE(n) {
  const t = [];
  for (const r of n) {
    const s = kE[r.codePointAt(0)];
    if (s === void 0) throw new Error(`Non-base256emoji character: ${r}`);
    t.push(s);
  }
  return new Uint8Array(t);
}
const KE = Ho({ prefix: '🚀', name: 'base256emoji', encode: HE, decode: BE });
var VE = Object.freeze({ __proto__: null, base256emoji: KE }),
  WE = _p,
  Ql = 128,
  GE = 127,
  JE = ~GE,
  QE = Math.pow(2, 31);
function _p(n, t, r) {
  (t = t || []), (r = r || 0);
  for (var s = r; n >= QE; ) (t[r++] = (n & 255) | Ql), (n /= 128);
  for (; n & JE; ) (t[r++] = (n & 255) | Ql), (n >>>= 7);
  return (t[r] = n | 0), (_p.bytes = r - s + 1), t;
}
var YE = Uc,
  XE = 128,
  Yl = 127;
function Uc(n, s) {
  var r = 0,
    s = s || 0,
    a = 0,
    u = s,
    f,
    g = n.length;
  do {
    if (u >= g) throw ((Uc.bytes = 0), new RangeError('Could not decode varint'));
    (f = n[u++]), (r += a < 28 ? (f & Yl) << a : (f & Yl) * Math.pow(2, a)), (a += 7);
  } while (f >= XE);
  return (Uc.bytes = u - s), r;
}
var ZE = Math.pow(2, 7),
  eI = Math.pow(2, 14),
  tI = Math.pow(2, 21),
  rI = Math.pow(2, 28),
  iI = Math.pow(2, 35),
  nI = Math.pow(2, 42),
  sI = Math.pow(2, 49),
  oI = Math.pow(2, 56),
  aI = Math.pow(2, 63),
  cI = function (n) {
    return n < ZE
      ? 1
      : n < eI
        ? 2
        : n < tI
          ? 3
          : n < rI
            ? 4
            : n < iI
              ? 5
              : n < nI
                ? 6
                : n < sI
                  ? 7
                  : n < oI
                    ? 8
                    : n < aI
                      ? 9
                      : 10;
  },
  uI = { encode: WE, decode: YE, encodingLength: cI },
  Ep = uI;
const Xl = (n, t, r = 0) => (Ep.encode(n, t, r), t),
  Zl = (n) => Ep.encodingLength(n),
  qc = (n, t) => {
    const r = t.byteLength,
      s = Zl(n),
      a = s + Zl(r),
      u = new Uint8Array(a + r);
    return Xl(n, u, 0), Xl(r, u, s), u.set(t, a), new hI(n, r, t, u);
  };
class hI {
  constructor(t, r, s, a) {
    (this.code = t), (this.size = r), (this.digest = s), (this.bytes = a);
  }
}
const Ip = ({ name: n, code: t, encode: r }) => new lI(n, t, r);
class lI {
  constructor(t, r, s) {
    (this.name = t), (this.code = r), (this.encode = s);
  }
  digest(t) {
    if (t instanceof Uint8Array) {
      const r = this.encode(t);
      return r instanceof Uint8Array ? qc(this.code, r) : r.then((s) => qc(this.code, s));
    } else throw Error('Unknown type, must be binary type');
  }
}
const xp = (n) => async (t) => new Uint8Array(await crypto.subtle.digest(n, t)),
  fI = Ip({ name: 'sha2-256', code: 18, encode: xp('SHA-256') }),
  pI = Ip({ name: 'sha2-512', code: 19, encode: xp('SHA-512') });
var dI = Object.freeze({ __proto__: null, sha256: fI, sha512: pI });
const Sp = 0,
  gI = 'identity',
  Pp = mp,
  yI = (n) => qc(Sp, Pp(n)),
  vI = { code: Sp, name: gI, encode: Pp, digest: yI };
var mI = Object.freeze({ __proto__: null, identity: vI });
new TextEncoder(), new TextDecoder();
const ef = { ...hE, ...fE, ...dE, ...yE, ...wE, ...RE, ...NE, ...LE, ...qE, ...VE };
({ ...dI, ...mI });
function Op(n) {
  return globalThis.Buffer != null ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : n;
}
function wI(n = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null
    ? Op(globalThis.Buffer.allocUnsafe(n))
    : new Uint8Array(n);
}
function Ap(n, t, r, s) {
  return { name: n, prefix: t, encoder: { name: n, prefix: t, encode: r }, decoder: { decode: s } };
}
const tf = Ap(
    'utf8',
    'u',
    (n) => 'u' + new TextDecoder('utf8').decode(n),
    (n) => new TextEncoder().encode(n.substring(1)),
  ),
  xc = Ap(
    'ascii',
    'a',
    (n) => {
      let t = 'a';
      for (let r = 0; r < n.length; r++) t += String.fromCharCode(n[r]);
      return t;
    },
    (n) => {
      n = n.substring(1);
      const t = wI(n.length);
      for (let r = 0; r < n.length; r++) t[r] = n.charCodeAt(r);
      return t;
    },
  ),
  bI = { utf8: tf, 'utf-8': tf, hex: ef.base16, latin1: xc, ascii: xc, binary: xc, ...ef };
function _I(n, t = 'utf8') {
  const r = bI[t];
  if (!r) throw new Error(`Unsupported encoding "${t}"`);
  return (t === 'utf8' || t === 'utf-8') &&
    globalThis.Buffer != null &&
    globalThis.Buffer.from != null
    ? Op(globalThis.Buffer.from(n, 'utf-8'))
    : r.decoder.decode(`${r.prefix}${n}`);
}
const Rp = 'wc',
  EI = 2,
  iu = 'core',
  Ti = `${Rp}@2:${iu}:`,
  II = { name: iu, logger: 'error' },
  xI = { database: ':memory:' },
  SI = 'crypto',
  rf = 'client_ed25519_seed',
  PI = re.ONE_DAY,
  OI = 'keychain',
  AI = '0.3',
  RI = 'messages',
  CI = '0.3',
  TI = re.SIX_HOURS,
  NI = 'publisher',
  Cp = 'irn',
  $I = 'error',
  Tp = 'wss://relay.walletconnect.com',
  nf = 'wss://relay.walletconnect.org',
  DI = 'relayer',
  Yt = {
    message: 'relayer_message',
    message_ack: 'relayer_message_ack',
    connect: 'relayer_connect',
    disconnect: 'relayer_disconnect',
    error: 'relayer_error',
    connection_stalled: 'relayer_connection_stalled',
    transport_closed: 'relayer_transport_closed',
    publish: 'relayer_publish',
  },
  LI = '_subscription',
  di = { payload: 'payload', connect: 'connect', disconnect: 'disconnect', error: 'error' },
  FI = re.ONE_SECOND,
  MI = '2.10.6',
  jI = 1e4,
  UI = '0.3',
  qI = 'WALLETCONNECT_CLIENT_ID',
  zr = {
    created: 'subscription_created',
    deleted: 'subscription_deleted',
    expired: 'subscription_expired',
    disabled: 'subscription_disabled',
    sync: 'subscription_sync',
    resubscribed: 'subscription_resubscribed',
  },
  zI = 'subscription',
  kI = '0.3',
  HI = re.FIVE_SECONDS * 1e3,
  BI = 'pairing',
  KI = '0.3',
  ts = {
    wc_pairingDelete: {
      req: { ttl: re.ONE_DAY, prompt: !1, tag: 1e3 },
      res: { ttl: re.ONE_DAY, prompt: !1, tag: 1001 },
    },
    wc_pairingPing: {
      req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1002 },
      res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1003 },
    },
    unregistered_method: {
      req: { ttl: re.ONE_DAY, prompt: !1, tag: 0 },
      res: { ttl: re.ONE_DAY, prompt: !1, tag: 0 },
    },
  },
  as = {
    create: 'pairing_create',
    expire: 'pairing_expire',
    delete: 'pairing_delete',
    ping: 'pairing_ping',
  },
  Xr = {
    created: 'history_created',
    updated: 'history_updated',
    deleted: 'history_deleted',
    sync: 'history_sync',
  },
  VI = 'history',
  WI = '0.3',
  GI = 'expirer',
  Dr = {
    created: 'expirer_created',
    deleted: 'expirer_deleted',
    expired: 'expirer_expired',
    sync: 'expirer_sync',
  },
  JI = '0.3',
  Sc = 'verify-api',
  xn = 'https://verify.walletconnect.com',
  zc = 'https://verify.walletconnect.org',
  QI = [xn, zc];
class YI {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.keychain = new Map()),
      (this.name = OI),
      (this.version = AI),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        if (!this.initialized) {
          const s = await this.getKeyChain();
          typeof s < 'u' && (this.keychain = s), (this.initialized = !0);
        }
      }),
      (this.has = (s) => (this.isInitialized(), this.keychain.has(s))),
      (this.set = async (s, a) => {
        this.isInitialized(), this.keychain.set(s, a), await this.persist();
      }),
      (this.get = (s) => {
        this.isInitialized();
        const a = this.keychain.get(s);
        if (typeof a > 'u') {
          const { message: u } = J('NO_MATCHING_KEY', `${this.name}: ${s}`);
          throw new Error(u);
        }
        return a;
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.keychain.delete(s), await this.persist();
      }),
      (this.core = t),
      (this.logger = Ce.generateChildLogger(r, this.name));
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name;
  }
  async setKeyChain(t) {
    await this.core.storage.setItem(this.storageKey, Qf(t));
  }
  async getKeyChain() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < 'u' ? Yf(t) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class XI {
  constructor(t, r, s) {
    (this.core = t),
      (this.logger = r),
      (this.name = SI),
      (this.initialized = !1),
      (this.init = async () => {
        this.initialized || (await this.keychain.init(), (this.initialized = !0));
      }),
      (this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a))),
      (this.getClientId = async () => {
        this.isInitialized();
        const a = await this.getClientSeed(),
          u = kl(a);
        return hp(u.publicKey);
      }),
      (this.generateKeyPair = () => {
        this.isInitialized();
        const a = sw();
        return this.setPrivateKey(a.publicKey, a.privateKey);
      }),
      (this.signJWT = async (a) => {
        this.isInitialized();
        const u = await this.getClientSeed(),
          f = kl(u),
          g = Fc();
        return await R_(g, a, PI, f);
      }),
      (this.generateSharedKey = (a, u, f) => {
        this.isInitialized();
        const g = this.getPrivateKey(a),
          b = ow(g, u);
        return this.setSymKey(b, f);
      }),
      (this.setSymKey = async (a, u) => {
        this.isInitialized();
        const f = u || aw(a);
        return await this.keychain.set(f, a), f;
      }),
      (this.deleteKeyPair = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.deleteSymKey = async (a) => {
        this.isInitialized(), await this.keychain.del(a);
      }),
      (this.encode = async (a, u, f) => {
        this.isInitialized();
        const g = Jf(f),
          b = Yi(u);
        if (yl(g)) {
          const T = g.senderPublicKey,
            U = g.receiverPublicKey;
          a = await this.generateSharedKey(T, U);
        }
        const y = this.getSymKey(a),
          { type: E, senderPublicKey: O } = g;
        return uw({ type: E, symKey: y, message: b, senderPublicKey: O });
      }),
      (this.decode = async (a, u, f) => {
        this.isInitialized();
        const g = fw(u, f);
        if (yl(g)) {
          const b = g.receiverPublicKey,
            y = g.senderPublicKey;
          a = await this.generateSharedKey(b, y);
        }
        try {
          const b = this.getSymKey(a),
            y = hw({ symKey: b, encoded: u });
          return ds(y);
        } catch (b) {
          this.logger.error(
            `Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`,
          ),
            this.logger.error(b);
        }
      }),
      (this.getPayloadType = (a) => {
        const u = $o(a);
        return ls(u.type);
      }),
      (this.getPayloadSenderPublicKey = (a) => {
        const u = $o(a);
        return u.senderPublicKey ? ar(u.senderPublicKey, or) : void 0;
      }),
      (this.core = t),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.keychain = s || new YI(this.core, this.logger));
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  async setPrivateKey(t, r) {
    return await this.keychain.set(t, r), t;
  }
  getPrivateKey(t) {
    return this.keychain.get(t);
  }
  async getClientSeed() {
    let t = '';
    try {
      t = this.keychain.get(rf);
    } catch {
      (t = Fc()), await this.keychain.set(rf, t);
    }
    return _I(t, 'base16');
  }
  getSymKey(t) {
    return this.keychain.get(t);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class ZI extends a_ {
  constructor(t, r) {
    super(t, r),
      (this.logger = t),
      (this.core = r),
      (this.messages = new Map()),
      (this.name = RI),
      (this.version = CI),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        if (!this.initialized) {
          this.logger.trace('Initialized');
          try {
            const s = await this.getRelayerMessages();
            typeof s < 'u' && (this.messages = s),
              this.logger.debug(`Successfully Restored records for ${this.name}`),
              this.logger.trace({ type: 'method', method: 'restore', size: this.messages.size });
          } catch (s) {
            this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(s);
          } finally {
            this.initialized = !0;
          }
        }
      }),
      (this.set = async (s, a) => {
        this.isInitialized();
        const u = Pn(a);
        let f = this.messages.get(s);
        return (
          typeof f > 'u' && (f = {}),
          typeof f[u] < 'u' || ((f[u] = a), this.messages.set(s, f), await this.persist()),
          u
        );
      }),
      (this.get = (s) => {
        this.isInitialized();
        let a = this.messages.get(s);
        return typeof a > 'u' && (a = {}), a;
      }),
      (this.has = (s, a) => {
        this.isInitialized();
        const u = this.get(s),
          f = Pn(a);
        return typeof u[f] < 'u';
      }),
      (this.del = async (s) => {
        this.isInitialized(), this.messages.delete(s), await this.persist();
      }),
      (this.logger = Ce.generateChildLogger(t, this.name)),
      (this.core = r);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name;
  }
  async setRelayerMessages(t) {
    await this.core.storage.setItem(this.storageKey, Qf(t));
  }
  async getRelayerMessages() {
    const t = await this.core.storage.getItem(this.storageKey);
    return typeof t < 'u' ? Yf(t) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class ex extends c_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.events = new Bt.EventEmitter()),
      (this.name = NI),
      (this.queue = new Map()),
      (this.publishTimeout = re.toMiliseconds(re.TEN_SECONDS)),
      (this.needsTransportRestart = !1),
      (this.publish = async (s, a, u) => {
        var f;
        this.logger.debug('Publishing Payload'),
          this.logger.trace({
            type: 'method',
            method: 'publish',
            params: { topic: s, message: a, opts: u },
          });
        try {
          const g = (u == null ? void 0 : u.ttl) || TI,
            b = Mc(u),
            y = (u == null ? void 0 : u.prompt) || !1,
            E = (u == null ? void 0 : u.tag) || 0,
            O = (u == null ? void 0 : u.id) || gp().toString(),
            T = { topic: s, message: a, opts: { ttl: g, relay: b, prompt: y, tag: E, id: O } },
            U = setTimeout(() => this.queue.set(O, T), this.publishTimeout);
          try {
            await await hs(
              this.rpcPublish(s, a, g, b, y, E, O),
              this.publishTimeout,
              'Failed to publish payload, please try again.',
            ),
              this.removeRequestFromQueue(O),
              this.relayer.events.emit(Yt.publish, T);
          } catch (C) {
            if (
              (this.logger.debug('Publishing Payload stalled'),
              (this.needsTransportRestart = !0),
              (f = u == null ? void 0 : u.internal) != null && f.throwOnFailedPublish)
            )
              throw (this.removeRequestFromQueue(O), C);
            return;
          } finally {
            clearTimeout(U);
          }
          this.logger.debug('Successfully Published Payload'),
            this.logger.trace({
              type: 'method',
              method: 'publish',
              params: { topic: s, message: a, opts: u },
            });
        } catch (g) {
          throw (this.logger.debug('Failed to Publish Payload'), this.logger.error(g), g);
        }
      }),
      (this.on = (s, a) => {
        this.events.on(s, a);
      }),
      (this.once = (s, a) => {
        this.events.once(s, a);
      }),
      (this.off = (s, a) => {
        this.events.off(s, a);
      }),
      (this.removeListener = (s, a) => {
        this.events.removeListener(s, a);
      }),
      (this.relayer = t),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      this.registerEventListeners();
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  rpcPublish(t, r, s, a, u, f, g) {
    var b, y, E, O;
    const T = {
      method: Ao(a.protocol).publish,
      params: { topic: t, message: r, ttl: s, prompt: u, tag: f },
      id: g,
    };
    return (
      sr((b = T.params) == null ? void 0 : b.prompt) && ((y = T.params) == null || delete y.prompt),
      sr((E = T.params) == null ? void 0 : E.tag) && ((O = T.params) == null || delete O.tag),
      this.logger.debug('Outgoing Relay Payload'),
      this.logger.trace({ type: 'message', direction: 'outgoing', request: T }),
      this.relayer.request(T)
    );
  }
  removeRequestFromQueue(t) {
    this.queue.delete(t);
  }
  checkQueue() {
    this.queue.forEach(async (t) => {
      const { topic: r, message: s, opts: a } = t;
      await this.publish(r, s, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on($n.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        (this.needsTransportRestart = !1), this.relayer.events.emit(Yt.connection_stalled);
        return;
      }
      this.checkQueue();
    }),
      this.relayer.on(Yt.message_ack, (t) => {
        this.removeRequestFromQueue(t.id.toString());
      });
  }
}
class tx {
  constructor() {
    (this.map = new Map()),
      (this.set = (t, r) => {
        const s = this.get(t);
        this.exists(t, r) || this.map.set(t, [...s, r]);
      }),
      (this.get = (t) => this.map.get(t) || []),
      (this.exists = (t, r) => this.get(t).includes(r)),
      (this.delete = (t, r) => {
        if (typeof r > 'u') {
          this.map.delete(t);
          return;
        }
        if (!this.map.has(t)) return;
        const s = this.get(t);
        if (!this.exists(t, r)) return;
        const a = s.filter((u) => u !== r);
        if (!a.length) {
          this.map.delete(t);
          return;
        }
        this.map.set(t, a);
      }),
      (this.clear = () => {
        this.map.clear();
      });
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var rx = Object.defineProperty,
  ix = Object.defineProperties,
  nx = Object.getOwnPropertyDescriptors,
  sf = Object.getOwnPropertySymbols,
  sx = Object.prototype.hasOwnProperty,
  ox = Object.prototype.propertyIsEnumerable,
  of = (n, t, r) =>
    t in n ? rx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  rs = (n, t) => {
    for (var r in t || (t = {})) sx.call(t, r) && of(n, r, t[r]);
    if (sf) for (var r of sf(t)) ox.call(t, r) && of(n, r, t[r]);
    return n;
  },
  Pc = (n, t) => ix(n, nx(t));
class ax extends l_ {
  constructor(t, r) {
    super(t, r),
      (this.relayer = t),
      (this.logger = r),
      (this.subscriptions = new Map()),
      (this.topicMap = new tx()),
      (this.events = new Bt.EventEmitter()),
      (this.name = zI),
      (this.version = kI),
      (this.pending = new Map()),
      (this.cached = []),
      (this.initialized = !1),
      (this.pendingSubscriptionWatchLabel = 'pending_sub_watch_label'),
      (this.pollingInterval = 20),
      (this.storagePrefix = Ti),
      (this.subscribeTimeout = 1e4),
      (this.restartInProgress = !1),
      (this.batchSubscribeTopicsLimit = 500),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace('Initialized'),
          this.registerEventListeners(),
          (this.clientId = await this.relayer.core.crypto.getClientId()));
      }),
      (this.subscribe = async (s, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          this.logger.debug('Subscribing Topic'),
          this.logger.trace({ type: 'method', method: 'subscribe', params: { topic: s, opts: a } });
        try {
          const u = Mc(a),
            f = { topic: s, relay: u };
          this.pending.set(s, f);
          const g = await this.rpcSubscribe(s, u);
          return (
            this.onSubscribe(g, f),
            this.logger.debug('Successfully Subscribed Topic'),
            this.logger.trace({
              type: 'method',
              method: 'subscribe',
              params: { topic: s, opts: a },
            }),
            g
          );
        } catch (u) {
          throw (this.logger.debug('Failed to Subscribe Topic'), this.logger.error(u), u);
        }
      }),
      (this.unsubscribe = async (s, a) => {
        await this.restartToComplete(),
          this.isInitialized(),
          typeof (a == null ? void 0 : a.id) < 'u'
            ? await this.unsubscribeById(s, a.id, a)
            : await this.unsubscribeByTopic(s, a);
      }),
      (this.isSubscribed = async (s) =>
        this.topics.includes(s)
          ? !0
          : await new Promise((a, u) => {
              const f = new re.Watch();
              f.start(this.pendingSubscriptionWatchLabel);
              const g = setInterval(() => {
                !this.pending.has(s) &&
                  this.topics.includes(s) &&
                  (clearInterval(g), f.stop(this.pendingSubscriptionWatchLabel), a(!0)),
                  f.elapsed(this.pendingSubscriptionWatchLabel) >= HI &&
                    (clearInterval(g),
                    f.stop(this.pendingSubscriptionWatchLabel),
                    u(new Error('Subscription resolution timeout')));
              }, this.pollingInterval);
            }).catch(() => !1)),
      (this.on = (s, a) => {
        this.events.on(s, a);
      }),
      (this.once = (s, a) => {
        this.events.once(s, a);
      }),
      (this.off = (s, a) => {
        this.events.off(s, a);
      }),
      (this.removeListener = (s, a) => {
        this.events.removeListener(s, a);
      }),
      (this.restart = async () => {
        (this.restartInProgress = !0),
          await this.restore(),
          await this.reset(),
          (this.restartInProgress = !1);
      }),
      (this.relayer = t),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.clientId = '');
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return (
      this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + '//' + this.name
    );
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(t, r) {
    let s = !1;
    try {
      s = this.getSubscription(t).topic === r;
    } catch {}
    return s;
  }
  onEnable() {
    (this.cached = []), (this.initialized = !0);
  }
  onDisable() {
    (this.cached = this.values), this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(t, r) {
    const s = this.topicMap.get(t);
    await Promise.all(s.map(async (a) => await this.unsubscribeById(t, a, r)));
  }
  async unsubscribeById(t, r, s) {
    this.logger.debug('Unsubscribing Topic'),
      this.logger.trace({
        type: 'method',
        method: 'unsubscribe',
        params: { topic: t, id: r, opts: s },
      });
    try {
      const a = Mc(s);
      await this.rpcUnsubscribe(t, r, a);
      const u = xt('USER_DISCONNECTED', `${this.name}, ${t}`);
      await this.onUnsubscribe(t, r, u),
        this.logger.debug('Successfully Unsubscribed Topic'),
        this.logger.trace({
          type: 'method',
          method: 'unsubscribe',
          params: { topic: t, id: r, opts: s },
        });
    } catch (a) {
      throw (this.logger.debug('Failed to Unsubscribe Topic'), this.logger.error(a), a);
    }
  }
  async rpcSubscribe(t, r) {
    const s = { method: Ao(r.protocol).subscribe, params: { topic: t } };
    this.logger.debug('Outgoing Relay Payload'),
      this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
    try {
      await await hs(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug('Outgoing Relay Subscribe Payload stalled'),
        this.relayer.events.emit(Yt.connection_stalled);
    }
    return Pn(t + this.clientId);
  }
  async rpcBatchSubscribe(t) {
    if (!t.length) return;
    const r = t[0].relay,
      s = { method: Ao(r.protocol).batchSubscribe, params: { topics: t.map((a) => a.topic) } };
    this.logger.debug('Outgoing Relay Payload'),
      this.logger.trace({ type: 'payload', direction: 'outgoing', request: s });
    try {
      return await await hs(this.relayer.request(s), this.subscribeTimeout);
    } catch {
      this.logger.debug('Outgoing Relay Payload stalled'),
        this.relayer.events.emit(Yt.connection_stalled);
    }
  }
  rpcUnsubscribe(t, r, s) {
    const a = { method: Ao(s.protocol).unsubscribe, params: { topic: t, id: r } };
    return (
      this.logger.debug('Outgoing Relay Payload'),
      this.logger.trace({ type: 'payload', direction: 'outgoing', request: a }),
      this.relayer.request(a)
    );
  }
  onSubscribe(t, r) {
    this.setSubscription(t, Pc(rs({}, r), { id: t })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(t) {
    t.length &&
      t.forEach((r) => {
        this.setSubscription(r.id, rs({}, r)), this.pending.delete(r.topic);
      });
  }
  async onUnsubscribe(t, r, s) {
    this.events.removeAllListeners(r),
      this.hasSubscription(r, t) && this.deleteSubscription(r, s),
      await this.relayer.messages.del(t);
  }
  async setRelayerSubscriptions(t) {
    await this.relayer.core.storage.setItem(this.storageKey, t);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(t, r) {
    this.subscriptions.has(t) ||
      (this.logger.debug('Setting subscription'),
      this.logger.trace({ type: 'method', method: 'setSubscription', id: t, subscription: r }),
      this.addSubscription(t, r));
  }
  addSubscription(t, r) {
    this.subscriptions.set(t, rs({}, r)),
      this.topicMap.set(r.topic, t),
      this.events.emit(zr.created, r);
  }
  getSubscription(t) {
    this.logger.debug('Getting subscription'),
      this.logger.trace({ type: 'method', method: 'getSubscription', id: t });
    const r = this.subscriptions.get(t);
    if (!r) {
      const { message: s } = J('NO_MATCHING_KEY', `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  deleteSubscription(t, r) {
    this.logger.debug('Deleting subscription'),
      this.logger.trace({ type: 'method', method: 'deleteSubscription', id: t, reason: r });
    const s = this.getSubscription(t);
    this.subscriptions.delete(t),
      this.topicMap.delete(s.topic, t),
      this.events.emit(zr.deleted, Pc(rs({}, s), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(zr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const t = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < t; r++) {
        const s = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(s);
      }
    }
    this.events.emit(zr.resubscribed);
  }
  async restore() {
    try {
      const t = await this.getRelayerSubscriptions();
      if (typeof t > 'u' || !t.length) return;
      if (this.subscriptions.size) {
        const { message: r } = J('RESTORE_WILL_OVERRIDE', this.name);
        throw (
          (this.logger.error(r),
          this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`),
          new Error(r))
        );
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored subscriptions for ${this.name}`),
        this.logger.trace({ type: 'method', method: 'restore', subscriptions: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(t);
    }
  }
  async batchSubscribe(t) {
    if (!t.length) return;
    const r = await this.rpcBatchSubscribe(t);
    Zr(r) && this.onBatchSubscribe(r.map((s, a) => Pc(rs({}, t[a]), { id: s })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
    const t = [];
    this.pending.forEach((r) => {
      t.push(r);
    }),
      await this.batchSubscribe(t);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on($n.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }),
      this.relayer.on(Yt.connect, async () => {
        await this.onConnect();
      }),
      this.relayer.on(Yt.disconnect, () => {
        this.onDisconnect();
      }),
      this.events.on(zr.created, async (t) => {
        const r = zr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, data: t }),
          await this.persist();
      }),
      this.events.on(zr.deleted, async (t) => {
        const r = zr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, data: t }),
          await this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
  async restartToComplete() {
    this.restartInProgress &&
      (await new Promise((t) => {
        const r = setInterval(() => {
          this.restartInProgress || (clearInterval(r), t());
        }, this.pollingInterval);
      }));
  }
}
var cx = Object.defineProperty,
  af = Object.getOwnPropertySymbols,
  ux = Object.prototype.hasOwnProperty,
  hx = Object.prototype.propertyIsEnumerable,
  cf = (n, t, r) =>
    t in n ? cx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  lx = (n, t) => {
    for (var r in t || (t = {})) ux.call(t, r) && cf(n, r, t[r]);
    if (af) for (var r of af(t)) hx.call(t, r) && cf(n, r, t[r]);
    return n;
  };
class fx extends u_ {
  constructor(t) {
    super(t),
      (this.protocol = 'wc'),
      (this.version = 2),
      (this.events = new Bt.EventEmitter()),
      (this.name = DI),
      (this.transportExplicitlyClosed = !1),
      (this.initialized = !1),
      (this.connectionAttemptInProgress = !1),
      (this.connectionStatusPollingInterval = 20),
      (this.staleConnectionErrors = ['socket hang up', 'socket stalled']),
      (this.hasExperiencedNetworkDisruption = !1),
      (this.request = async (r) => {
        this.logger.debug('Publishing Request Payload');
        try {
          return await this.toEstablishConnection(), await this.provider.request(r);
        } catch (s) {
          throw (this.logger.debug('Failed to Publish Request'), this.logger.error(s), s);
        }
      }),
      (this.onPayloadHandler = (r) => {
        this.onProviderPayload(r);
      }),
      (this.onConnectHandler = () => {
        this.events.emit(Yt.connect);
      }),
      (this.onDisconnectHandler = () => {
        this.onProviderDisconnect();
      }),
      (this.onProviderErrorHandler = (r) => {
        this.logger.error(r),
          this.events.emit(Yt.error, r),
          this.logger.info('Fatal socket error received, closing transport'),
          this.transportClose();
      }),
      (this.registerProviderListeners = () => {
        this.provider.on(di.payload, this.onPayloadHandler),
          this.provider.on(di.connect, this.onConnectHandler),
          this.provider.on(di.disconnect, this.onDisconnectHandler),
          this.provider.on(di.error, this.onProviderErrorHandler);
      }),
      (this.core = t.core),
      (this.logger =
        typeof t.logger < 'u' && typeof t.logger != 'string'
          ? Ce.generateChildLogger(t.logger, this.name)
          : Ce.pino(Ce.getDefaultLoggerOptions({ level: t.logger || $I }))),
      (this.messages = new ZI(this.logger, t.core)),
      (this.subscriber = new ax(this, this.logger)),
      (this.publisher = new ex(this, this.logger)),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Tp),
      (this.projectId = t.projectId),
      (this.bundleId = mw()),
      (this.provider = {});
  }
  async init() {
    this.logger.trace('Initialized'),
      this.registerEventListeners(),
      await this.createProvider(),
      await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(
        `Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${nf}...`,
      ),
        await this.restartTransport(nf);
    }
    (this.initialized = !0),
      setTimeout(async () => {
        this.subscriber.topics.length === 0 &&
          (this.logger.info('No topics subscribed to after init, closing transport'),
          await this.transportClose(),
          (this.transportExplicitlyClosed = !1));
      }, jI);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(t, r, s) {
    this.isInitialized(),
      await this.publisher.publish(t, r, s),
      await this.recordMessageEvent({ topic: t, message: r, publishedAt: Date.now() });
  }
  async subscribe(t, r) {
    var s;
    this.isInitialized();
    let a = ((s = this.subscriber.topicMap.get(t)) == null ? void 0 : s[0]) || '';
    if (a) return a;
    let u;
    const f = (g) => {
      g.topic === t && (this.subscriber.off(zr.created, f), u());
    };
    return (
      await Promise.all([
        new Promise((g) => {
          (u = g), this.subscriber.on(zr.created, f);
        }),
        new Promise(async (g) => {
          (a = await this.subscriber.subscribe(t, r)), g();
        }),
      ]),
      a
    );
  }
  async unsubscribe(t, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(t, r);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async transportClose() {
    (this.transportExplicitlyClosed = !0),
      this.hasExperiencedNetworkDisruption && this.connected
        ? await hs(this.provider.disconnect(), 1e3, 'provider.disconnect()').catch(() =>
            this.onProviderDisconnect(),
          )
        : this.connected && (await this.provider.disconnect());
  }
  async transportOpen(t) {
    if (
      ((this.transportExplicitlyClosed = !1),
      await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress)
    ) {
      t &&
        t !== this.relayUrl &&
        ((this.relayUrl = t), await this.transportClose(), await this.createProvider()),
        (this.connectionAttemptInProgress = !0);
      try {
        await Promise.all([
          new Promise((r) => {
            if (!this.initialized) return r();
            this.subscriber.once(zr.resubscribed, () => {
              r();
            });
          }),
          new Promise(async (r, s) => {
            try {
              await hs(
                this.provider.connect(),
                1e4,
                `Socket stalled when trying to connect to ${this.relayUrl}`,
              );
            } catch (a) {
              s(a);
              return;
            }
            r();
          }),
        ]);
      } catch (r) {
        this.logger.error(r);
        const s = r;
        if (!this.isConnectionStalled(s.message)) throw r;
        this.provider.events.emit(di.disconnect);
      } finally {
        (this.connectionAttemptInProgress = !1), (this.hasExperiencedNetworkDisruption = !1);
      }
    }
  }
  async restartTransport(t) {
    await this.confirmOnlineStateOrThrow(),
      !this.connectionAttemptInProgress &&
        ((this.relayUrl = t || this.relayUrl),
        await this.transportClose(),
        await this.createProvider(),
        await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!(await Ol()))
      throw new Error(
        'No internet connection detected. Please restart your network and try again.',
      );
  }
  isConnectionStalled(t) {
    return this.staleConnectionErrors.some((r) => t.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const t = await this.core.crypto.signJWT(this.relayUrl);
    (this.provider = new vi(
      new Q_(
        xw({
          sdkVersion: MI,
          protocol: this.protocol,
          version: this.version,
          relayUrl: this.relayUrl,
          projectId: this.projectId,
          auth: t,
          useOnCloseEvent: !0,
          bundleId: this.bundleId,
        }),
      ),
    )),
      this.registerProviderListeners();
  }
  async recordMessageEvent(t) {
    const { topic: r, message: s } = t;
    await this.messages.set(r, s);
  }
  async shouldIgnoreMessageEvent(t) {
    const { topic: r, message: s } = t;
    if (!s || s.length === 0) return this.logger.debug(`Ignoring invalid/empty message: ${s}`), !0;
    if (!(await this.subscriber.isSubscribed(r)))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const a = this.messages.has(r, s);
    return a && this.logger.debug(`Ignoring duplicate message: ${s}`), a;
  }
  async onProviderPayload(t) {
    if (
      (this.logger.debug('Incoming Relay Payload'),
      this.logger.trace({ type: 'payload', direction: 'incoming', payload: t }),
      ru(t))
    ) {
      if (!t.method.endsWith(LI)) return;
      const r = t.params,
        { topic: s, message: a, publishedAt: u } = r.data,
        f = { topic: s, message: a, publishedAt: u };
      this.logger.debug('Emitting Relayer Payload'),
        this.logger.trace(lx({ type: 'event', event: r.id }, f)),
        this.events.emit(r.id, f),
        await this.acknowledgePayload(t),
        await this.onMessageEvent(f);
    } else ko(t) && this.events.emit(Yt.message_ack, t);
  }
  async onMessageEvent(t) {
    (await this.shouldIgnoreMessageEvent(t)) ||
      (this.events.emit(Yt.message, t), await this.recordMessageEvent(t));
  }
  async acknowledgePayload(t) {
    const r = tu(t.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(di.payload, this.onPayloadHandler),
      this.provider.off(di.connect, this.onConnectHandler),
      this.provider.off(di.disconnect, this.onDisconnectHandler),
      this.provider.off(di.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Yt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let t = await Ol();
    yb(async (r) => {
      this.initialized &&
        t !== r &&
        ((t = r),
        r
          ? await this.restartTransport().catch((s) => this.logger.error(s))
          : ((this.hasExperiencedNetworkDisruption = !0),
            await this.transportClose().catch((s) => this.logger.error(s))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Yt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed ||
      (this.logger.info('attemptToReconnect called. Connecting...'),
      setTimeout(async () => {
        await this.restartTransport().catch((t) => this.logger.error(t));
      }, re.toMiliseconds(FI)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
  async toEstablishConnection() {
    if ((await this.confirmOnlineStateOrThrow(), !this.connected)) {
      if (this.connectionAttemptInProgress)
        return await new Promise((t) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), t());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var px = Object.defineProperty,
  uf = Object.getOwnPropertySymbols,
  dx = Object.prototype.hasOwnProperty,
  gx = Object.prototype.propertyIsEnumerable,
  hf = (n, t, r) =>
    t in n ? px(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  lf = (n, t) => {
    for (var r in t || (t = {})) dx.call(t, r) && hf(n, r, t[r]);
    if (uf) for (var r of uf(t)) gx.call(t, r) && hf(n, r, t[r]);
    return n;
  };
class Bo extends h_ {
  constructor(t, r, s, a = Ti, u = void 0) {
    super(t, r, s, a),
      (this.core = t),
      (this.logger = r),
      (this.name = s),
      (this.map = new Map()),
      (this.version = UI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace('Initialized'),
          await this.restore(),
          this.cached.forEach((f) => {
            this.getKey && f !== null && !sr(f)
              ? this.map.set(this.getKey(f), f)
              : Ww(f)
                ? this.map.set(f.id, f)
                : Gw(f) && this.map.set(f.topic, f);
          }),
          (this.cached = []),
          (this.initialized = !0));
      }),
      (this.set = async (f, g) => {
        this.isInitialized(),
          this.map.has(f)
            ? await this.update(f, g)
            : (this.logger.debug('Setting value'),
              this.logger.trace({ type: 'method', method: 'set', key: f, value: g }),
              this.map.set(f, g),
              await this.persist());
      }),
      (this.get = (f) => (
        this.isInitialized(),
        this.logger.debug('Getting value'),
        this.logger.trace({ type: 'method', method: 'get', key: f }),
        this.getData(f)
      )),
      (this.getAll = (f) => (
        this.isInitialized(),
        f ? this.values.filter((g) => Object.keys(f).every((b) => Fo(g[b], f[b]))) : this.values
      )),
      (this.update = async (f, g) => {
        this.isInitialized(),
          this.logger.debug('Updating value'),
          this.logger.trace({ type: 'method', method: 'update', key: f, update: g });
        const b = lf(lf({}, this.getData(f)), g);
        this.map.set(f, b), await this.persist();
      }),
      (this.delete = async (f, g) => {
        this.isInitialized(),
          this.map.has(f) &&
            (this.logger.debug('Deleting value'),
            this.logger.trace({ type: 'method', method: 'delete', key: f, reason: g }),
            this.map.delete(f),
            await this.persist());
      }),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.storagePrefix = a),
      (this.getKey = u);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(t) {
    const r = this.map.get(t);
    if (!r) {
      const { message: s } = J('NO_MATCHING_KEY', `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const t = await this.getDataStore();
      if (typeof t > 'u' || !t.length) return;
      if (this.map.size) {
        const { message: r } = J('RESTORE_WILL_OVERRIDE', this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored value for ${this.name}`),
        this.logger.trace({ type: 'method', method: 'restore', value: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class yx {
  constructor(t, r) {
    (this.core = t),
      (this.logger = r),
      (this.name = BI),
      (this.version = KI),
      (this.events = new Bt()),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.ignoredPayloadTypes = [Xi]),
      (this.registeredMethods = []),
      (this.init = async () => {
        this.initialized ||
          (await this.pairings.init(),
          await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          (this.initialized = !0),
          this.logger.trace('Initialized'));
      }),
      (this.register = ({ methods: s }) => {
        this.isInitialized(),
          (this.registeredMethods = [...new Set([...this.registeredMethods, ...s])]);
      }),
      (this.create = async () => {
        this.isInitialized();
        const s = Fc(),
          a = await this.core.crypto.setSymKey(s),
          u = kr(re.FIVE_MINUTES),
          f = { protocol: Cp },
          g = { topic: a, expiry: u, relay: f, active: !1 },
          b = Mw({
            protocol: this.core.protocol,
            version: this.core.version,
            topic: a,
            symKey: s,
            relay: f,
          });
        return (
          await this.pairings.set(a, g),
          await this.core.relayer.subscribe(a),
          this.core.expirer.set(a, u),
          { topic: a, uri: b }
        );
      }),
      (this.pair = async (s) => {
        this.isInitialized(), this.isValidPair(s);
        const { topic: a, symKey: u, relay: f } = El(s.uri);
        let g;
        if (this.pairings.keys.includes(a) && ((g = this.pairings.get(a)), g.active))
          throw new Error(
            `Pairing already exists: ${a}. Please try again with a new connection URI.`,
          );
        const b = kr(re.FIVE_MINUTES),
          y = { topic: a, relay: f, expiry: b, active: !1 };
        return (
          await this.pairings.set(a, y),
          this.core.expirer.set(a, b),
          s.activatePairing && (await this.activate({ topic: a })),
          this.events.emit(as.create, y),
          this.core.crypto.keychain.has(a) ||
            (await this.core.crypto.setSymKey(u, a),
            await this.core.relayer.subscribe(a, { relay: f })),
          y
        );
      }),
      (this.activate = async ({ topic: s }) => {
        this.isInitialized();
        const a = kr(re.THIRTY_DAYS);
        await this.pairings.update(s, { active: !0, expiry: a }), this.core.expirer.set(s, a);
      }),
      (this.ping = async (s) => {
        this.isInitialized(), await this.isValidPing(s);
        const { topic: a } = s;
        if (this.pairings.keys.includes(a)) {
          const u = await this.sendRequest(a, 'wc_pairingPing', {}),
            { done: f, resolve: g, reject: b } = In();
          this.events.once(Lt('pairing_ping', u), ({ error: y }) => {
            y ? b(y) : g();
          }),
            await f();
        }
      }),
      (this.updateExpiry = async ({ topic: s, expiry: a }) => {
        this.isInitialized(), await this.pairings.update(s, { expiry: a });
      }),
      (this.updateMetadata = async ({ topic: s, metadata: a }) => {
        this.isInitialized(), await this.pairings.update(s, { peerMetadata: a });
      }),
      (this.getPairings = () => (this.isInitialized(), this.pairings.values)),
      (this.disconnect = async (s) => {
        this.isInitialized(), await this.isValidDisconnect(s);
        const { topic: a } = s;
        this.pairings.keys.includes(a) &&
          (await this.sendRequest(a, 'wc_pairingDelete', xt('USER_DISCONNECTED')),
          await this.deletePairing(a));
      }),
      (this.sendRequest = async (s, a, u) => {
        const f = An(a, u),
          g = await this.core.crypto.encode(s, f),
          b = ts[a].req;
        return this.core.history.set(s, f), this.core.relayer.publish(s, g, b), f.id;
      }),
      (this.sendResult = async (s, a, u) => {
        const f = tu(s, u),
          g = await this.core.crypto.encode(a, f),
          b = await this.core.history.get(a, s),
          y = ts[b.request.method].res;
        await this.core.relayer.publish(a, g, y), await this.core.history.resolve(f);
      }),
      (this.sendError = async (s, a, u) => {
        const f = zo(s, u),
          g = await this.core.crypto.encode(a, f),
          b = await this.core.history.get(a, s),
          y = ts[b.request.method] ? ts[b.request.method].res : ts.unregistered_method.res;
        await this.core.relayer.publish(a, g, y), await this.core.history.resolve(f);
      }),
      (this.deletePairing = async (s, a) => {
        await this.core.relayer.unsubscribe(s),
          await Promise.all([
            this.pairings.delete(s, xt('USER_DISCONNECTED')),
            this.core.crypto.deleteSymKey(s),
            a ? Promise.resolve() : this.core.expirer.del(s),
          ]);
      }),
      (this.cleanup = async () => {
        const s = this.pairings.getAll().filter((a) => Ci(a.expiry));
        await Promise.all(s.map((a) => this.deletePairing(a.topic)));
      }),
      (this.onRelayEventRequest = (s) => {
        const { topic: a, payload: u } = s;
        switch (u.method) {
          case 'wc_pairingPing':
            return this.onPairingPingRequest(a, u);
          case 'wc_pairingDelete':
            return this.onPairingDeleteRequest(a, u);
          default:
            return this.onUnknownRpcMethodRequest(a, u);
        }
      }),
      (this.onRelayEventResponse = async (s) => {
        const { topic: a, payload: u } = s,
          f = (await this.core.history.get(a, u.id)).request.method;
        switch (f) {
          case 'wc_pairingPing':
            return this.onPairingPingResponse(a, u);
          default:
            return this.onUnknownRpcMethodResponse(f);
        }
      }),
      (this.onPairingPingRequest = async (s, a) => {
        const { id: u } = a;
        try {
          this.isValidPing({ topic: s }),
            await this.sendResult(u, s, !0),
            this.events.emit(as.ping, { id: u, topic: s });
        } catch (f) {
          await this.sendError(u, s, f), this.logger.error(f);
        }
      }),
      (this.onPairingPingResponse = (s, a) => {
        const { id: u } = a;
        setTimeout(() => {
          yi(a)
            ? this.events.emit(Lt('pairing_ping', u), {})
            : Hr(a) && this.events.emit(Lt('pairing_ping', u), { error: a.error });
        }, 500);
      }),
      (this.onPairingDeleteRequest = async (s, a) => {
        const { id: u } = a;
        try {
          this.isValidDisconnect({ topic: s }),
            await this.deletePairing(s),
            this.events.emit(as.delete, { id: u, topic: s });
        } catch (f) {
          await this.sendError(u, s, f), this.logger.error(f);
        }
      }),
      (this.onUnknownRpcMethodRequest = async (s, a) => {
        const { id: u, method: f } = a;
        try {
          if (this.registeredMethods.includes(f)) return;
          const g = xt('WC_METHOD_UNSUPPORTED', f);
          await this.sendError(u, s, g), this.logger.error(g);
        } catch (g) {
          await this.sendError(u, s, g), this.logger.error(g);
        }
      }),
      (this.onUnknownRpcMethodResponse = (s) => {
        this.registeredMethods.includes(s) || this.logger.error(xt('WC_METHOD_UNSUPPORTED', s));
      }),
      (this.isValidPair = (s) => {
        var a;
        if (!yr(s)) {
          const { message: f } = J('MISSING_OR_INVALID', `pair() params: ${s}`);
          throw new Error(f);
        }
        if (!Vw(s.uri)) {
          const { message: f } = J('MISSING_OR_INVALID', `pair() uri: ${s.uri}`);
          throw new Error(f);
        }
        const u = El(s.uri);
        if (!((a = u == null ? void 0 : u.relay) != null && a.protocol)) {
          const { message: f } = J('MISSING_OR_INVALID', 'pair() uri#relay-protocol');
          throw new Error(f);
        }
        if (!(u != null && u.symKey)) {
          const { message: f } = J('MISSING_OR_INVALID', 'pair() uri#symKey');
          throw new Error(f);
        }
      }),
      (this.isValidPing = async (s) => {
        if (!yr(s)) {
          const { message: u } = J('MISSING_OR_INVALID', `ping() params: ${s}`);
          throw new Error(u);
        }
        const { topic: a } = s;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidDisconnect = async (s) => {
        if (!yr(s)) {
          const { message: u } = J('MISSING_OR_INVALID', `disconnect() params: ${s}`);
          throw new Error(u);
        }
        const { topic: a } = s;
        await this.isValidPairingTopic(a);
      }),
      (this.isValidPairingTopic = async (s) => {
        if (!Ht(s, !1)) {
          const { message: a } = J('MISSING_OR_INVALID', `pairing topic should be a string: ${s}`);
          throw new Error(a);
        }
        if (!this.pairings.keys.includes(s)) {
          const { message: a } = J('NO_MATCHING_KEY', `pairing topic doesn't exist: ${s}`);
          throw new Error(a);
        }
        if (Ci(this.pairings.get(s).expiry)) {
          await this.deletePairing(s);
          const { message: a } = J('EXPIRED', `pairing topic: ${s}`);
          throw new Error(a);
        }
      }),
      (this.core = t),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.pairings = new Bo(this.core, this.logger, this.name, this.storagePrefix));
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Yt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (
        !this.pairings.keys.includes(r) ||
        this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(s))
      )
        return;
      const a = await this.core.crypto.decode(r, s);
      try {
        ru(a)
          ? (this.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a }))
          : ko(a) &&
            (await this.core.history.resolve(a),
            await this.onRelayEventResponse({ topic: r, payload: a }),
            this.core.history.delete(r, a.id));
      } catch (u) {
        this.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Dr.expired, async (t) => {
      const { topic: r } = Zf(t.target);
      r &&
        this.pairings.keys.includes(r) &&
        (await this.deletePairing(r, !0), this.events.emit(as.expire, { topic: r }));
    });
  }
}
class vx extends o_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.records = new Map()),
      (this.events = new Bt.EventEmitter()),
      (this.name = VI),
      (this.version = WI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace('Initialized'),
          await this.restore(),
          this.cached.forEach((s) => this.records.set(s.id, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.set = (s, a, u) => {
        if (
          (this.isInitialized(),
          this.logger.debug('Setting JSON-RPC request history record'),
          this.logger.trace({ type: 'method', method: 'set', topic: s, request: a, chainId: u }),
          this.records.has(a.id))
        )
          return;
        const f = {
          id: a.id,
          topic: s,
          request: { method: a.method, params: a.params || null },
          chainId: u,
          expiry: kr(re.THIRTY_DAYS),
        };
        this.records.set(f.id, f), this.events.emit(Xr.created, f);
      }),
      (this.resolve = async (s) => {
        if (
          (this.isInitialized(),
          this.logger.debug('Updating JSON-RPC response history record'),
          this.logger.trace({ type: 'method', method: 'update', response: s }),
          !this.records.has(s.id))
        )
          return;
        const a = await this.getRecord(s.id);
        typeof a.response > 'u' &&
          ((a.response = Hr(s) ? { error: s.error } : { result: s.result }),
          this.records.set(a.id, a),
          this.events.emit(Xr.updated, a));
      }),
      (this.get = async (s, a) => (
        this.isInitialized(),
        this.logger.debug('Getting record'),
        this.logger.trace({ type: 'method', method: 'get', topic: s, id: a }),
        await this.getRecord(a)
      )),
      (this.delete = (s, a) => {
        this.isInitialized(),
          this.logger.debug('Deleting record'),
          this.logger.trace({ type: 'method', method: 'delete', id: a }),
          this.values.forEach((u) => {
            if (u.topic === s) {
              if (typeof a < 'u' && u.id !== a) return;
              this.records.delete(u.id), this.events.emit(Xr.deleted, u);
            }
          });
      }),
      (this.exists = async (s, a) => (
        this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === s : !1
      )),
      (this.on = (s, a) => {
        this.events.on(s, a);
      }),
      (this.once = (s, a) => {
        this.events.once(s, a);
      }),
      (this.off = (s, a) => {
        this.events.off(s, a);
      }),
      (this.removeListener = (s, a) => {
        this.events.removeListener(s, a);
      }),
      (this.logger = Ce.generateChildLogger(r, this.name));
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const t = [];
    return (
      this.values.forEach((r) => {
        if (typeof r.response < 'u') return;
        const s = {
          topic: r.topic,
          request: An(r.request.method, r.request.params, r.id),
          chainId: r.chainId,
        };
        return t.push(s);
      }),
      t
    );
  }
  async setJsonRpcRecords(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(t) {
    this.isInitialized();
    const r = this.records.get(t);
    if (!r) {
      const { message: s } = J('NO_MATCHING_KEY', `${this.name}: ${t}`);
      throw new Error(s);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(Xr.sync);
  }
  async restore() {
    try {
      const t = await this.getJsonRpcRecords();
      if (typeof t > 'u' || !t.length) return;
      if (this.records.size) {
        const { message: r } = J('RESTORE_WILL_OVERRIDE', this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored records for ${this.name}`),
        this.logger.trace({ type: 'method', method: 'restore', records: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(t);
    }
  }
  registerEventListeners() {
    this.events.on(Xr.created, (t) => {
      const r = Xr.created;
      this.logger.info(`Emitting ${r}`),
        this.logger.debug({ type: 'event', event: r, record: t }),
        this.persist();
    }),
      this.events.on(Xr.updated, (t) => {
        const r = Xr.updated;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, record: t }),
          this.persist();
      }),
      this.events.on(Xr.deleted, (t) => {
        const r = Xr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, record: t }),
          this.persist();
      }),
      this.core.heartbeat.on($n.HEARTBEAT_EVENTS.pulse, () => {
        this.cleanup();
      });
  }
  cleanup() {
    try {
      this.records.forEach((t) => {
        re.toMiliseconds(t.expiry || 0) - Date.now() <= 0 &&
          (this.logger.info(`Deleting expired history log: ${t.id}`), this.delete(t.topic, t.id));
      });
    } catch (t) {
      this.logger.warn(t);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class mx extends f_ {
  constructor(t, r) {
    super(t, r),
      (this.core = t),
      (this.logger = r),
      (this.expirations = new Map()),
      (this.events = new Bt.EventEmitter()),
      (this.name = GI),
      (this.version = JI),
      (this.cached = []),
      (this.initialized = !1),
      (this.storagePrefix = Ti),
      (this.init = async () => {
        this.initialized ||
          (this.logger.trace('Initialized'),
          await this.restore(),
          this.cached.forEach((s) => this.expirations.set(s.target, s)),
          (this.cached = []),
          this.registerEventListeners(),
          (this.initialized = !0));
      }),
      (this.has = (s) => {
        try {
          const a = this.formatTarget(s);
          return typeof this.getExpiration(a) < 'u';
        } catch {
          return !1;
        }
      }),
      (this.set = (s, a) => {
        this.isInitialized();
        const u = this.formatTarget(s),
          f = { target: u, expiry: a };
        this.expirations.set(u, f),
          this.checkExpiry(u, f),
          this.events.emit(Dr.created, { target: u, expiration: f });
      }),
      (this.get = (s) => {
        this.isInitialized();
        const a = this.formatTarget(s);
        return this.getExpiration(a);
      }),
      (this.del = (s) => {
        if ((this.isInitialized(), this.has(s))) {
          const a = this.formatTarget(s),
            u = this.getExpiration(a);
          this.expirations.delete(a), this.events.emit(Dr.deleted, { target: a, expiration: u });
        }
      }),
      (this.on = (s, a) => {
        this.events.on(s, a);
      }),
      (this.once = (s, a) => {
        this.events.once(s, a);
      }),
      (this.off = (s, a) => {
        this.events.off(s, a);
      }),
      (this.removeListener = (s, a) => {
        this.events.removeListener(s, a);
      }),
      (this.logger = Ce.generateChildLogger(r, this.name));
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + '//' + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(t) {
    if (typeof t == 'string') return Sw(t);
    if (typeof t == 'number') return Pw(t);
    const { message: r } = J('UNKNOWN_TYPE', `Target type: ${typeof t}`);
    throw new Error(r);
  }
  async setExpirations(t) {
    await this.core.storage.setItem(this.storageKey, t);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Dr.sync);
  }
  async restore() {
    try {
      const t = await this.getExpirations();
      if (typeof t > 'u' || !t.length) return;
      if (this.expirations.size) {
        const { message: r } = J('RESTORE_WILL_OVERRIDE', this.name);
        throw (this.logger.error(r), new Error(r));
      }
      (this.cached = t),
        this.logger.debug(`Successfully Restored expirations for ${this.name}`),
        this.logger.trace({ type: 'method', method: 'restore', expirations: this.values });
    } catch (t) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(t);
    }
  }
  getExpiration(t) {
    const r = this.expirations.get(t);
    if (!r) {
      const { message: s } = J('NO_MATCHING_KEY', `${this.name}: ${t}`);
      throw (this.logger.error(s), new Error(s));
    }
    return r;
  }
  checkExpiry(t, r) {
    const { expiry: s } = r;
    re.toMiliseconds(s) - Date.now() <= 0 && this.expire(t, r);
  }
  expire(t, r) {
    this.expirations.delete(t), this.events.emit(Dr.expired, { target: t, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((t, r) => this.checkExpiry(r, t));
  }
  registerEventListeners() {
    this.core.heartbeat.on($n.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()),
      this.events.on(Dr.created, (t) => {
        const r = Dr.created;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, data: t }),
          this.persist();
      }),
      this.events.on(Dr.expired, (t) => {
        const r = Dr.expired;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, data: t }),
          this.persist();
      }),
      this.events.on(Dr.deleted, (t) => {
        const r = Dr.deleted;
        this.logger.info(`Emitting ${r}`),
          this.logger.debug({ type: 'event', event: r, data: t }),
          this.persist();
      });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
  }
}
class wx extends p_ {
  constructor(t, r) {
    super(t, r),
      (this.projectId = t),
      (this.logger = r),
      (this.name = Sc),
      (this.initialized = !1),
      (this.queue = []),
      (this.verifyDisabled = !1),
      (this.init = async (s) => {
        if (this.verifyDisabled || Cn() || !Tn()) return;
        const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        this.verifyUrl !== a && this.removeIframe(), (this.verifyUrl = a);
        try {
          await this.createIframe();
        } catch (u) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(u);
        }
        if (!this.initialized) {
          this.removeIframe(), (this.verifyUrl = zc);
          try {
            await this.createIframe();
          } catch (u) {
            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`),
              this.logger.info(u),
              (this.verifyDisabled = !0);
          }
        }
      }),
      (this.register = async (s) => {
        this.initialized
          ? this.sendPost(s.attestationId)
          : (this.addToQueue(s.attestationId), await this.init());
      }),
      (this.resolve = async (s) => {
        if (this.isDevEnv) return '';
        const a = this.getVerifyUrl(s == null ? void 0 : s.verifyUrl);
        let u;
        try {
          u = await this.fetchAttestation(s.attestationId, a);
        } catch (f) {
          this.logger.info(`failed to resolve attestation: ${s.attestationId} from url: ${a}`),
            this.logger.info(f),
            (u = await this.fetchAttestation(s.attestationId, zc));
        }
        return u;
      }),
      (this.fetchAttestation = async (s, a) => {
        this.logger.info(`resolving attestation: ${s} from url: ${a}`);
        const u = this.startAbortTimer(re.ONE_SECOND * 2),
          f = await fetch(`${a}/attestation/${s}`, { signal: this.abortController.signal });
        return clearTimeout(u), f.status === 200 ? await f.json() : void 0;
      }),
      (this.addToQueue = (s) => {
        this.queue.push(s);
      }),
      (this.processQueue = () => {
        this.queue.length !== 0 && (this.queue.forEach((s) => this.sendPost(s)), (this.queue = []));
      }),
      (this.sendPost = (s) => {
        var a;
        try {
          if (!this.iframe) return;
          (a = this.iframe.contentWindow) == null || a.postMessage(s, '*'),
            this.logger.info(`postMessage sent: ${s} ${this.verifyUrl}`);
        } catch {}
      }),
      (this.createIframe = async () => {
        let s;
        const a = (u) => {
          u.data === 'verify_ready' &&
            ((this.initialized = !0),
            this.processQueue(),
            window.removeEventListener('message', a),
            s());
        };
        await Promise.race([
          new Promise((u) => {
            if (document.getElementById(Sc)) return u();
            window.addEventListener('message', a);
            const f = document.createElement('iframe');
            (f.id = Sc),
              (f.src = `${this.verifyUrl}/${this.projectId}`),
              (f.style.display = 'none'),
              document.body.append(f),
              (this.iframe = f),
              (s = u);
          }),
          new Promise((u, f) =>
            setTimeout(() => {
              window.removeEventListener('message', a), f('verify iframe load timeout');
            }, re.toMiliseconds(re.FIVE_SECONDS)),
          ),
        ]);
      }),
      (this.removeIframe = () => {
        this.iframe && (this.iframe.remove(), (this.iframe = void 0), (this.initialized = !1));
      }),
      (this.getVerifyUrl = (s) => {
        let a = s || xn;
        return (
          QI.includes(a) ||
            (this.logger.info(
              `verify url: ${a}, not included in trusted list, assigning default: ${xn}`,
            ),
            (a = xn)),
          a
        );
      }),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.verifyUrl = xn),
      (this.abortController = new AbortController()),
      (this.isDevEnv = Jc() && {}.IS_VITEST);
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  startAbortTimer(t) {
    return (
      (this.abortController = new AbortController()),
      setTimeout(() => this.abortController.abort(), re.toMiliseconds(t))
    );
  }
}
var bx = Object.defineProperty,
  ff = Object.getOwnPropertySymbols,
  _x = Object.prototype.hasOwnProperty,
  Ex = Object.prototype.propertyIsEnumerable,
  pf = (n, t, r) =>
    t in n ? bx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  df = (n, t) => {
    for (var r in t || (t = {})) _x.call(t, r) && pf(n, r, t[r]);
    if (ff) for (var r of ff(t)) Ex.call(t, r) && pf(n, r, t[r]);
    return n;
  };
class nu extends s_ {
  constructor(t) {
    super(t),
      (this.protocol = Rp),
      (this.version = EI),
      (this.name = iu),
      (this.events = new Bt.EventEmitter()),
      (this.initialized = !1),
      (this.on = (s, a) => this.events.on(s, a)),
      (this.once = (s, a) => this.events.once(s, a)),
      (this.off = (s, a) => this.events.off(s, a)),
      (this.removeListener = (s, a) => this.events.removeListener(s, a)),
      (this.projectId = t == null ? void 0 : t.projectId),
      (this.relayUrl = (t == null ? void 0 : t.relayUrl) || Tp),
      (this.customStoragePrefix =
        t != null && t.customStoragePrefix ? `:${t.customStoragePrefix}` : '');
    const r =
      typeof (t == null ? void 0 : t.logger) < 'u' &&
      typeof (t == null ? void 0 : t.logger) != 'string'
        ? t.logger
        : Ce.pino(
            Ce.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || II.logger }),
          );
    (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.heartbeat = new $n.HeartBeat()),
      (this.crypto = new XI(this, this.logger, t == null ? void 0 : t.keychain)),
      (this.history = new vx(this, this.logger)),
      (this.expirer = new mx(this, this.logger)),
      (this.storage =
        t != null && t.storage
          ? t.storage
          : new Qb(df(df({}, xI), t == null ? void 0 : t.storageOptions))),
      (this.relayer = new fx({
        core: this,
        logger: this.logger,
        relayUrl: this.relayUrl,
        projectId: this.projectId,
      })),
      (this.pairing = new yx(this, this.logger)),
      (this.verify = new wx(this.projectId || '', this.logger));
  }
  static async init(t) {
    const r = new nu(t);
    await r.initialize();
    const s = await r.crypto.getClientId();
    return await r.storage.setItem(qI, s), r;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || (await this.initialize());
  }
  async initialize() {
    this.logger.trace('Initialized');
    try {
      await this.crypto.init(),
        await this.history.init(),
        await this.expirer.init(),
        await this.relayer.init(),
        await this.heartbeat.init(),
        await this.pairing.init(),
        (this.initialized = !0),
        this.logger.info('Core Initialization Success');
    } catch (t) {
      throw (
        (this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, t),
        this.logger.error(t.message),
        t)
      );
    }
  }
}
const Ix = nu,
  Np = 'wc',
  $p = 2,
  Dp = 'client',
  su = `${Np}@${$p}:${Dp}:`,
  Oc = { name: Dp, logger: 'error', controller: !1, relayUrl: 'wss://relay.walletconnect.com' },
  gf = 'WALLETCONNECT_DEEPLINK_CHOICE',
  xx = 'proposal',
  Lp = 'Proposal expired',
  Sx = 'session',
  xo = re.SEVEN_DAYS,
  Px = 'engine',
  is = {
    wc_sessionPropose: {
      req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1100 },
      res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1101 },
    },
    wc_sessionSettle: {
      req: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1102 },
      res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1103 },
    },
    wc_sessionUpdate: {
      req: { ttl: re.ONE_DAY, prompt: !1, tag: 1104 },
      res: { ttl: re.ONE_DAY, prompt: !1, tag: 1105 },
    },
    wc_sessionExtend: {
      req: { ttl: re.ONE_DAY, prompt: !1, tag: 1106 },
      res: { ttl: re.ONE_DAY, prompt: !1, tag: 1107 },
    },
    wc_sessionRequest: {
      req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1108 },
      res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1109 },
    },
    wc_sessionEvent: {
      req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1110 },
      res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1111 },
    },
    wc_sessionDelete: {
      req: { ttl: re.ONE_DAY, prompt: !1, tag: 1112 },
      res: { ttl: re.ONE_DAY, prompt: !1, tag: 1113 },
    },
    wc_sessionPing: {
      req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1114 },
      res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1115 },
    },
  },
  Ac = { min: re.FIVE_MINUTES, max: re.SEVEN_DAYS },
  gi = { idle: 'IDLE', active: 'ACTIVE' },
  Ox = 'request',
  Ax = ['wc_sessionPropose', 'wc_sessionRequest', 'wc_authRequest'];
var Rx = Object.defineProperty,
  Cx = Object.defineProperties,
  Tx = Object.getOwnPropertyDescriptors,
  yf = Object.getOwnPropertySymbols,
  Nx = Object.prototype.hasOwnProperty,
  $x = Object.prototype.propertyIsEnumerable,
  vf = (n, t, r) =>
    t in n ? Rx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  dr = (n, t) => {
    for (var r in t || (t = {})) Nx.call(t, r) && vf(n, r, t[r]);
    if (yf) for (var r of yf(t)) $x.call(t, r) && vf(n, r, t[r]);
    return n;
  },
  ns = (n, t) => Cx(n, Tx(t));
class Dx extends g_ {
  constructor(t) {
    super(t),
      (this.name = Px),
      (this.events = new Bt()),
      (this.initialized = !1),
      (this.ignoredPayloadTypes = [Xi]),
      (this.requestQueue = { state: gi.idle, queue: [] }),
      (this.sessionRequestQueue = { state: gi.idle, queue: [] }),
      (this.requestQueueDelay = re.ONE_SECOND),
      (this.init = async () => {
        this.initialized ||
          (await this.cleanup(),
          this.registerRelayerEvents(),
          this.registerExpirerEvents(),
          this.registerPairingEvents(),
          this.client.core.pairing.register({ methods: Object.keys(is) }),
          (this.initialized = !0),
          setTimeout(() => {
            (this.sessionRequestQueue.queue = this.getPendingSessionRequests()),
              this.processSessionRequestQueue();
          }, re.toMiliseconds(this.requestQueueDelay)));
      }),
      (this.connect = async (r) => {
        await this.isInitialized();
        const s = ns(dr({}, r), {
          requiredNamespaces: r.requiredNamespaces || {},
          optionalNamespaces: r.optionalNamespaces || {},
        });
        await this.isValidConnect(s);
        const {
          pairingTopic: a,
          requiredNamespaces: u,
          optionalNamespaces: f,
          sessionProperties: g,
          relays: b,
        } = s;
        let y = a,
          E,
          O = !1;
        if ((y && (O = this.client.core.pairing.pairings.get(y).active), !y || !O)) {
          const { topic: fe, uri: pe } = await this.client.core.pairing.create();
          (y = fe), (E = pe);
        }
        const T = await this.client.core.crypto.generateKeyPair(),
          U = dr(
            {
              requiredNamespaces: u,
              optionalNamespaces: f,
              relays: b ?? [{ protocol: Cp }],
              proposer: { publicKey: T, metadata: this.client.metadata },
            },
            g && { sessionProperties: g },
          ),
          { reject: C, resolve: K, done: ie } = In(re.FIVE_MINUTES, Lp);
        if (
          (this.events.once(Lt('session_connect'), async ({ error: fe, session: pe }) => {
            if (fe) C(fe);
            else if (pe) {
              pe.self.publicKey = T;
              const de = ns(dr({}, pe), {
                requiredNamespaces: pe.requiredNamespaces,
                optionalNamespaces: pe.optionalNamespaces,
              });
              await this.client.session.set(pe.topic, de),
                await this.setExpiry(pe.topic, pe.expiry),
                y &&
                  (await this.client.core.pairing.updateMetadata({
                    topic: y,
                    metadata: pe.peer.metadata,
                  })),
                K(de);
            }
          }),
          !y)
        ) {
          const { message: fe } = J('NO_MATCHING_KEY', `connect() pairing topic: ${y}`);
          throw new Error(fe);
        }
        const he = await this.sendRequest({ topic: y, method: 'wc_sessionPropose', params: U }),
          le = kr(re.FIVE_MINUTES);
        return await this.setProposal(he, dr({ id: he, expiry: le }, U)), { uri: E, approval: ie };
      }),
      (this.pair = async (r) => (
        await this.isInitialized(), await this.client.core.pairing.pair(r)
      )),
      (this.approve = async (r) => {
        await this.isInitialized(), await this.isValidApprove(r);
        const { id: s, relayProtocol: a, namespaces: u, sessionProperties: f } = r,
          g = this.client.proposal.get(s);
        let { pairingTopic: b, proposer: y, requiredNamespaces: E, optionalNamespaces: O } = g;
        (b = b || ''), On(E) || (E = zw(u, 'approve()'));
        const T = await this.client.core.crypto.generateKeyPair(),
          U = y.publicKey,
          C = await this.client.core.crypto.generateSharedKey(T, U);
        b &&
          s &&
          (await this.client.core.pairing.updateMetadata({ topic: b, metadata: y.metadata }),
          await this.sendResult({
            id: s,
            topic: b,
            result: { relay: { protocol: a ?? 'irn' }, responderPublicKey: T },
          }),
          await this.client.proposal.delete(s, xt('USER_DISCONNECTED')),
          await this.client.core.pairing.activate({ topic: b }));
        const K = dr(
          {
            relay: { protocol: a ?? 'irn' },
            namespaces: u,
            requiredNamespaces: E,
            optionalNamespaces: O,
            pairingTopic: b,
            controller: { publicKey: T, metadata: this.client.metadata },
            expiry: kr(xo),
          },
          f && { sessionProperties: f },
        );
        await this.client.core.relayer.subscribe(C),
          await this.sendRequest({
            topic: C,
            method: 'wc_sessionSettle',
            params: K,
            throwOnFailedPublish: !0,
          });
        const ie = ns(dr({}, K), {
          topic: C,
          pairingTopic: b,
          acknowledged: !1,
          self: K.controller,
          peer: { publicKey: y.publicKey, metadata: y.metadata },
          controller: T,
        });
        return (
          await this.client.session.set(C, ie),
          await this.setExpiry(C, kr(xo)),
          {
            topic: C,
            acknowledged: () =>
              new Promise((he) => setTimeout(() => he(this.client.session.get(C)), 500)),
          }
        );
      }),
      (this.reject = async (r) => {
        await this.isInitialized(), await this.isValidReject(r);
        const { id: s, reason: a } = r,
          { pairingTopic: u } = this.client.proposal.get(s);
        u &&
          (await this.sendError(s, u, a),
          await this.client.proposal.delete(s, xt('USER_DISCONNECTED')));
      }),
      (this.update = async (r) => {
        await this.isInitialized(), await this.isValidUpdate(r);
        const { topic: s, namespaces: a } = r,
          u = await this.sendRequest({
            topic: s,
            method: 'wc_sessionUpdate',
            params: { namespaces: a },
          }),
          { done: f, resolve: g, reject: b } = In();
        return (
          this.events.once(Lt('session_update', u), ({ error: y }) => {
            y ? b(y) : g();
          }),
          await this.client.session.update(s, { namespaces: a }),
          { acknowledged: f }
        );
      }),
      (this.extend = async (r) => {
        await this.isInitialized(), await this.isValidExtend(r);
        const { topic: s } = r,
          a = await this.sendRequest({ topic: s, method: 'wc_sessionExtend', params: {} }),
          { done: u, resolve: f, reject: g } = In();
        return (
          this.events.once(Lt('session_extend', a), ({ error: b }) => {
            b ? g(b) : f();
          }),
          await this.setExpiry(s, kr(xo)),
          { acknowledged: u }
        );
      }),
      (this.request = async (r) => {
        await this.isInitialized(), await this.isValidRequest(r);
        const { chainId: s, request: a, topic: u, expiry: f } = r,
          g = eu(),
          { done: b, resolve: y, reject: E } = In(f, 'Request expired. Please try again.');
        return (
          this.events.once(Lt('session_request', g), ({ error: O, result: T }) => {
            O ? E(O) : y(T);
          }),
          await Promise.all([
            new Promise(async (O) => {
              await this.sendRequest({
                clientRpcId: g,
                topic: u,
                method: 'wc_sessionRequest',
                params: { request: a, chainId: s },
                expiry: f,
                throwOnFailedPublish: !0,
              }).catch((T) => E(T)),
                this.client.events.emit('session_request_sent', {
                  topic: u,
                  request: a,
                  chainId: s,
                  id: g,
                }),
                O();
            }),
            new Promise(async (O) => {
              const T = await Aw(this.client.core.storage, gf);
              Ow({ id: g, topic: u, wcDeepLink: T }), O();
            }),
            b(),
          ]).then((O) => O[2])
        );
      }),
      (this.respond = async (r) => {
        await this.isInitialized(), await this.isValidRespond(r);
        const { topic: s, response: a } = r,
          { id: u } = a;
        yi(a)
          ? await this.sendResult({ id: u, topic: s, result: a.result, throwOnFailedPublish: !0 })
          : Hr(a) && (await this.sendError(u, s, a.error)),
          this.cleanupAfterResponse(r);
      }),
      (this.ping = async (r) => {
        await this.isInitialized(), await this.isValidPing(r);
        const { topic: s } = r;
        if (this.client.session.keys.includes(s)) {
          const a = await this.sendRequest({ topic: s, method: 'wc_sessionPing', params: {} }),
            { done: u, resolve: f, reject: g } = In();
          this.events.once(Lt('session_ping', a), ({ error: b }) => {
            b ? g(b) : f();
          }),
            await u();
        } else
          this.client.core.pairing.pairings.keys.includes(s) &&
            (await this.client.core.pairing.ping({ topic: s }));
      }),
      (this.emit = async (r) => {
        await this.isInitialized(), await this.isValidEmit(r);
        const { topic: s, event: a, chainId: u } = r;
        await this.sendRequest({
          topic: s,
          method: 'wc_sessionEvent',
          params: { event: a, chainId: u },
        });
      }),
      (this.disconnect = async (r) => {
        await this.isInitialized(), await this.isValidDisconnect(r);
        const { topic: s } = r;
        this.client.session.keys.includes(s)
          ? (await this.sendRequest({
              topic: s,
              method: 'wc_sessionDelete',
              params: xt('USER_DISCONNECTED'),
              throwOnFailedPublish: !0,
            }),
            await this.deleteSession(s))
          : await this.client.core.pairing.disconnect({ topic: s });
      }),
      (this.find = (r) => (
        this.isInitialized(), this.client.session.getAll().filter((s) => Bw(s, r))
      )),
      (this.getPendingSessionRequests = () => (
        this.isInitialized(), this.client.pendingRequest.getAll()
      )),
      (this.cleanupDuplicatePairings = async (r) => {
        if (r.pairingTopic)
          try {
            const s = this.client.core.pairing.pairings.get(r.pairingTopic),
              a = this.client.core.pairing.pairings.getAll().filter((u) => {
                var f, g;
                return (
                  ((f = u.peerMetadata) == null ? void 0 : f.url) &&
                  ((g = u.peerMetadata) == null ? void 0 : g.url) === r.peer.metadata.url &&
                  u.topic &&
                  u.topic !== s.topic
                );
              });
            if (a.length === 0) return;
            this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`),
              await Promise.all(
                a.map((u) => this.client.core.pairing.disconnect({ topic: u.topic })),
              ),
              this.client.logger.info('Duplicate pairings clean up finished');
          } catch (s) {
            this.client.logger.error(s);
          }
      }),
      (this.deleteSession = async (r, s) => {
        const { self: a } = this.client.session.get(r);
        await this.client.core.relayer.unsubscribe(r),
          this.client.session.delete(r, xt('USER_DISCONNECTED')),
          this.client.core.crypto.keychain.has(a.publicKey) &&
            (await this.client.core.crypto.deleteKeyPair(a.publicKey)),
          this.client.core.crypto.keychain.has(r) &&
            (await this.client.core.crypto.deleteSymKey(r)),
          s || this.client.core.expirer.del(r),
          this.client.core.storage.removeItem(gf).catch((u) => this.client.logger.warn(u));
      }),
      (this.deleteProposal = async (r, s) => {
        await Promise.all([
          this.client.proposal.delete(r, xt('USER_DISCONNECTED')),
          s ? Promise.resolve() : this.client.core.expirer.del(r),
        ]);
      }),
      (this.deletePendingSessionRequest = async (r, s, a = !1) => {
        await Promise.all([
          this.client.pendingRequest.delete(r, s),
          a ? Promise.resolve() : this.client.core.expirer.del(r),
        ]),
          (this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(
            (u) => u.id !== r,
          )),
          a && (this.sessionRequestQueue.state = gi.idle);
      }),
      (this.setExpiry = async (r, s) => {
        this.client.session.keys.includes(r) &&
          (await this.client.session.update(r, { expiry: s })),
          this.client.core.expirer.set(r, s);
      }),
      (this.setProposal = async (r, s) => {
        await this.client.proposal.set(r, s), this.client.core.expirer.set(r, s.expiry);
      }),
      (this.setPendingSessionRequest = async (r) => {
        const s = is.wc_sessionRequest.req.ttl,
          { id: a, topic: u, params: f, verifyContext: g } = r;
        await this.client.pendingRequest.set(a, { id: a, topic: u, params: f, verifyContext: g }),
          s && this.client.core.expirer.set(a, kr(s));
      }),
      (this.sendRequest = async (r) => {
        const {
            topic: s,
            method: a,
            params: u,
            expiry: f,
            relayRpcId: g,
            clientRpcId: b,
            throwOnFailedPublish: y,
          } = r,
          E = An(a, u, b);
        if (Tn() && Ax.includes(a)) {
          const U = Pn(JSON.stringify(E));
          this.client.core.verify.register({ attestationId: U });
        }
        const O = await this.client.core.crypto.encode(s, E),
          T = is[a].req;
        return (
          f && (T.ttl = f),
          g && (T.id = g),
          this.client.core.history.set(s, E),
          y
            ? ((T.internal = ns(dr({}, T.internal), { throwOnFailedPublish: !0 })),
              await this.client.core.relayer.publish(s, O, T))
            : this.client.core.relayer.publish(s, O, T).catch((U) => this.client.logger.error(U)),
          E.id
        );
      }),
      (this.sendResult = async (r) => {
        const { id: s, topic: a, result: u, throwOnFailedPublish: f } = r,
          g = tu(s, u),
          b = await this.client.core.crypto.encode(a, g),
          y = await this.client.core.history.get(a, s),
          E = is[y.request.method].res;
        f
          ? ((E.internal = ns(dr({}, E.internal), { throwOnFailedPublish: !0 })),
            await this.client.core.relayer.publish(a, b, E))
          : this.client.core.relayer.publish(a, b, E).catch((O) => this.client.logger.error(O)),
          await this.client.core.history.resolve(g);
      }),
      (this.sendError = async (r, s, a) => {
        const u = zo(r, a),
          f = await this.client.core.crypto.encode(s, u),
          g = await this.client.core.history.get(s, r),
          b = is[g.request.method].res;
        this.client.core.relayer.publish(s, f, b), await this.client.core.history.resolve(u);
      }),
      (this.cleanup = async () => {
        const r = [],
          s = [];
        this.client.session.getAll().forEach((a) => {
          Ci(a.expiry) && r.push(a.topic);
        }),
          this.client.proposal.getAll().forEach((a) => {
            Ci(a.expiry) && s.push(a.id);
          }),
          await Promise.all([
            ...r.map((a) => this.deleteSession(a)),
            ...s.map((a) => this.deleteProposal(a)),
          ]);
      }),
      (this.onRelayEventRequest = async (r) => {
        this.requestQueue.queue.push(r), await this.processRequestsQueue();
      }),
      (this.processRequestsQueue = async () => {
        if (this.requestQueue.state === gi.active) {
          this.client.logger.info('Request queue already active, skipping...');
          return;
        }
        for (
          this.client.logger.info(
            `Request queue starting with ${this.requestQueue.queue.length} requests`,
          );
          this.requestQueue.queue.length > 0;

        ) {
          this.requestQueue.state = gi.active;
          const r = this.requestQueue.queue.shift();
          if (r)
            try {
              this.processRequest(r), await new Promise((s) => setTimeout(s, 300));
            } catch (s) {
              this.client.logger.warn(s);
            }
        }
        this.requestQueue.state = gi.idle;
      }),
      (this.processRequest = (r) => {
        const { topic: s, payload: a } = r,
          u = a.method;
        switch (u) {
          case 'wc_sessionPropose':
            return this.onSessionProposeRequest(s, a);
          case 'wc_sessionSettle':
            return this.onSessionSettleRequest(s, a);
          case 'wc_sessionUpdate':
            return this.onSessionUpdateRequest(s, a);
          case 'wc_sessionExtend':
            return this.onSessionExtendRequest(s, a);
          case 'wc_sessionPing':
            return this.onSessionPingRequest(s, a);
          case 'wc_sessionDelete':
            return this.onSessionDeleteRequest(s, a);
          case 'wc_sessionRequest':
            return this.onSessionRequest(s, a);
          case 'wc_sessionEvent':
            return this.onSessionEventRequest(s, a);
          default:
            return this.client.logger.info(`Unsupported request method ${u}`);
        }
      }),
      (this.onRelayEventResponse = async (r) => {
        const { topic: s, payload: a } = r,
          u = (await this.client.core.history.get(s, a.id)).request.method;
        switch (u) {
          case 'wc_sessionPropose':
            return this.onSessionProposeResponse(s, a);
          case 'wc_sessionSettle':
            return this.onSessionSettleResponse(s, a);
          case 'wc_sessionUpdate':
            return this.onSessionUpdateResponse(s, a);
          case 'wc_sessionExtend':
            return this.onSessionExtendResponse(s, a);
          case 'wc_sessionPing':
            return this.onSessionPingResponse(s, a);
          case 'wc_sessionRequest':
            return this.onSessionRequestResponse(s, a);
          default:
            return this.client.logger.info(`Unsupported response method ${u}`);
        }
      }),
      (this.onRelayEventUnknownPayload = (r) => {
        const { topic: s } = r,
          { message: a } = J(
            'MISSING_OR_INVALID',
            `Decoded payload on topic ${s} is not identifiable as a JSON-RPC request or a response.`,
          );
        throw new Error(a);
      }),
      (this.onSessionProposeRequest = async (r, s) => {
        const { params: a, id: u } = s;
        try {
          this.isValidConnect(dr({}, s.params));
          const f = kr(re.FIVE_MINUTES),
            g = dr({ id: u, pairingTopic: r, expiry: f }, a);
          await this.setProposal(u, g);
          const b = Pn(JSON.stringify(s)),
            y = await this.getVerifyContext(b, g.proposer.metadata);
          this.client.events.emit('session_proposal', { id: u, params: g, verifyContext: y });
        } catch (f) {
          await this.sendError(u, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionProposeResponse = async (r, s) => {
        const { id: a } = s;
        if (yi(s)) {
          const { result: u } = s;
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            result: u,
          });
          const f = this.client.proposal.get(a);
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            proposal: f,
          });
          const g = f.proposer.publicKey;
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            selfPublicKey: g,
          });
          const b = u.responderPublicKey;
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            peerPublicKey: b,
          });
          const y = await this.client.core.crypto.generateSharedKey(g, b);
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            sessionTopic: y,
          });
          const E = await this.client.core.relayer.subscribe(y);
          this.client.logger.trace({
            type: 'method',
            method: 'onSessionProposeResponse',
            subscriptionId: E,
          }),
            await this.client.core.pairing.activate({ topic: r });
        } else
          Hr(s) &&
            (await this.client.proposal.delete(a, xt('USER_DISCONNECTED')),
            this.events.emit(Lt('session_connect'), { error: s.error }));
      }),
      (this.onSessionSettleRequest = async (r, s) => {
        const { id: a, params: u } = s;
        try {
          this.isValidSessionSettleRequest(u);
          const {
              relay: f,
              controller: g,
              expiry: b,
              namespaces: y,
              requiredNamespaces: E,
              optionalNamespaces: O,
              sessionProperties: T,
              pairingTopic: U,
            } = s.params,
            C = dr(
              {
                topic: r,
                relay: f,
                expiry: b,
                namespaces: y,
                acknowledged: !0,
                pairingTopic: U,
                requiredNamespaces: E,
                optionalNamespaces: O,
                controller: g.publicKey,
                self: { publicKey: '', metadata: this.client.metadata },
                peer: { publicKey: g.publicKey, metadata: g.metadata },
              },
              T && { sessionProperties: T },
            );
          await this.sendResult({ id: s.id, topic: r, result: !0 }),
            this.events.emit(Lt('session_connect'), { session: C }),
            this.cleanupDuplicatePairings(C);
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionSettleResponse = async (r, s) => {
        const { id: a } = s;
        yi(s)
          ? (await this.client.session.update(r, { acknowledged: !0 }),
            this.events.emit(Lt('session_approve', a), {}))
          : Hr(s) &&
            (await this.client.session.delete(r, xt('USER_DISCONNECTED')),
            this.events.emit(Lt('session_approve', a), { error: s.error }));
      }),
      (this.onSessionUpdateRequest = async (r, s) => {
        const { params: a, id: u } = s;
        try {
          const f = `${r}_session_update`,
            g = _o.get(f);
          if (g && this.isRequestOutOfSync(g, u)) {
            this.client.logger.info(`Discarding out of sync request - ${u}`);
            return;
          }
          this.isValidUpdate(dr({ topic: r }, a)),
            await this.client.session.update(r, { namespaces: a.namespaces }),
            await this.sendResult({ id: u, topic: r, result: !0 }),
            this.client.events.emit('session_update', { id: u, topic: r, params: a }),
            _o.set(f, u);
        } catch (f) {
          await this.sendError(u, r, f), this.client.logger.error(f);
        }
      }),
      (this.isRequestOutOfSync = (r, s) =>
        parseInt(s.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3))),
      (this.onSessionUpdateResponse = (r, s) => {
        const { id: a } = s;
        yi(s)
          ? this.events.emit(Lt('session_update', a), {})
          : Hr(s) && this.events.emit(Lt('session_update', a), { error: s.error });
      }),
      (this.onSessionExtendRequest = async (r, s) => {
        const { id: a } = s;
        try {
          this.isValidExtend({ topic: r }),
            await this.setExpiry(r, kr(xo)),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit('session_extend', { id: a, topic: r });
        } catch (u) {
          await this.sendError(a, r, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionExtendResponse = (r, s) => {
        const { id: a } = s;
        yi(s)
          ? this.events.emit(Lt('session_extend', a), {})
          : Hr(s) && this.events.emit(Lt('session_extend', a), { error: s.error });
      }),
      (this.onSessionPingRequest = async (r, s) => {
        const { id: a } = s;
        try {
          this.isValidPing({ topic: r }),
            await this.sendResult({ id: a, topic: r, result: !0 }),
            this.client.events.emit('session_ping', { id: a, topic: r });
        } catch (u) {
          await this.sendError(a, r, u), this.client.logger.error(u);
        }
      }),
      (this.onSessionPingResponse = (r, s) => {
        const { id: a } = s;
        setTimeout(() => {
          yi(s)
            ? this.events.emit(Lt('session_ping', a), {})
            : Hr(s) && this.events.emit(Lt('session_ping', a), { error: s.error });
        }, 500);
      }),
      (this.onSessionDeleteRequest = async (r, s) => {
        const { id: a } = s;
        try {
          this.isValidDisconnect({ topic: r, reason: s.params }),
            await Promise.all([
              new Promise((u) => {
                this.client.core.relayer.once(Yt.publish, async () => {
                  u(await this.deleteSession(r));
                });
              }),
              this.sendResult({ id: a, topic: r, result: !0 }),
            ]),
            this.client.events.emit('session_delete', { id: a, topic: r });
        } catch (u) {
          this.client.logger.error(u);
        }
      }),
      (this.onSessionRequest = async (r, s) => {
        const { id: a, params: u } = s;
        try {
          this.isValidRequest(dr({ topic: r }, u));
          const f = Pn(JSON.stringify(An('wc_sessionRequest', u, a))),
            g = this.client.session.get(r),
            b = await this.getVerifyContext(f, g.peer.metadata),
            y = { id: a, topic: r, params: u, verifyContext: b };
          await this.setPendingSessionRequest(y),
            this.addSessionRequestToSessionRequestQueue(y),
            this.processSessionRequestQueue();
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.onSessionRequestResponse = (r, s) => {
        const { id: a } = s;
        yi(s)
          ? this.events.emit(Lt('session_request', a), { result: s.result })
          : Hr(s) && this.events.emit(Lt('session_request', a), { error: s.error });
      }),
      (this.onSessionEventRequest = async (r, s) => {
        const { id: a, params: u } = s;
        try {
          const f = `${r}_session_event_${u.event.name}`,
            g = _o.get(f);
          if (g && this.isRequestOutOfSync(g, a)) {
            this.client.logger.info(`Discarding out of sync request - ${a}`);
            return;
          }
          this.isValidEmit(dr({ topic: r }, u)),
            this.client.events.emit('session_event', { id: a, topic: r, params: u }),
            _o.set(f, a);
        } catch (f) {
          await this.sendError(a, r, f), this.client.logger.error(f);
        }
      }),
      (this.addSessionRequestToSessionRequestQueue = (r) => {
        this.sessionRequestQueue.queue.push(r);
      }),
      (this.cleanupAfterResponse = (r) => {
        this.deletePendingSessionRequest(r.response.id, { message: 'fulfilled', code: 0 }),
          setTimeout(() => {
            (this.sessionRequestQueue.state = gi.idle), this.processSessionRequestQueue();
          }, re.toMiliseconds(this.requestQueueDelay));
      }),
      (this.processSessionRequestQueue = () => {
        if (this.sessionRequestQueue.state === gi.active) {
          this.client.logger.info('session request queue is already active.');
          return;
        }
        const r = this.sessionRequestQueue.queue[0];
        if (!r) {
          this.client.logger.info('session request queue is empty.');
          return;
        }
        try {
          (this.sessionRequestQueue.state = gi.active),
            this.client.events.emit('session_request', r);
        } catch (s) {
          this.client.logger.error(s);
        }
      }),
      (this.onPairingCreated = (r) => {
        if (r.active) return;
        const s = this.client.proposal.getAll().find((a) => a.pairingTopic === r.topic);
        s &&
          this.onSessionProposeRequest(
            r.topic,
            An(
              'wc_sessionPropose',
              {
                requiredNamespaces: s.requiredNamespaces,
                optionalNamespaces: s.optionalNamespaces,
                relays: s.relays,
                proposer: s.proposer,
                sessionProperties: s.sessionProperties,
              },
              s.id,
            ),
          );
      }),
      (this.isValidConnect = async (r) => {
        if (!yr(r)) {
          const { message: b } = J('MISSING_OR_INVALID', `connect() params: ${JSON.stringify(r)}`);
          throw new Error(b);
        }
        const {
          pairingTopic: s,
          requiredNamespaces: a,
          optionalNamespaces: u,
          sessionProperties: f,
          relays: g,
        } = r;
        if ((sr(s) || (await this.isValidPairingTopic(s)), !rb(g, !0))) {
          const { message: b } = J('MISSING_OR_INVALID', `connect() relays: ${g}`);
          throw new Error(b);
        }
        !sr(a) && On(a) !== 0 && this.validateNamespaces(a, 'requiredNamespaces'),
          !sr(u) && On(u) !== 0 && this.validateNamespaces(u, 'optionalNamespaces'),
          sr(f) || this.validateSessionProps(f, 'sessionProperties');
      }),
      (this.validateNamespaces = (r, s) => {
        const a = tb(r, 'connect()', s);
        if (a) throw new Error(a.message);
      }),
      (this.isValidApprove = async (r) => {
        if (!yr(r)) throw new Error(J('MISSING_OR_INVALID', `approve() params: ${r}`).message);
        const { id: s, namespaces: a, relayProtocol: u, sessionProperties: f } = r;
        await this.isValidProposalId(s);
        const g = this.client.proposal.get(s),
          b = Ro(a, 'approve()');
        if (b) throw new Error(b.message);
        const y = Sl(g.requiredNamespaces, a, 'approve()');
        if (y) throw new Error(y.message);
        if (!Ht(u, !0)) {
          const { message: E } = J('MISSING_OR_INVALID', `approve() relayProtocol: ${u}`);
          throw new Error(E);
        }
        sr(f) || this.validateSessionProps(f, 'sessionProperties');
      }),
      (this.isValidReject = async (r) => {
        if (!yr(r)) {
          const { message: u } = J('MISSING_OR_INVALID', `reject() params: ${r}`);
          throw new Error(u);
        }
        const { id: s, reason: a } = r;
        if ((await this.isValidProposalId(s), !nb(a))) {
          const { message: u } = J('MISSING_OR_INVALID', `reject() reason: ${JSON.stringify(a)}`);
          throw new Error(u);
        }
      }),
      (this.isValidSessionSettleRequest = (r) => {
        if (!yr(r)) {
          const { message: y } = J('MISSING_OR_INVALID', `onSessionSettleRequest() params: ${r}`);
          throw new Error(y);
        }
        const { relay: s, controller: a, namespaces: u, expiry: f } = r;
        if (!tp(s)) {
          const { message: y } = J(
            'MISSING_OR_INVALID',
            'onSessionSettleRequest() relay protocol should be a string',
          );
          throw new Error(y);
        }
        const g = Jw(a, 'onSessionSettleRequest()');
        if (g) throw new Error(g.message);
        const b = Ro(u, 'onSessionSettleRequest()');
        if (b) throw new Error(b.message);
        if (Ci(f)) {
          const { message: y } = J('EXPIRED', 'onSessionSettleRequest()');
          throw new Error(y);
        }
      }),
      (this.isValidUpdate = async (r) => {
        if (!yr(r)) {
          const { message: b } = J('MISSING_OR_INVALID', `update() params: ${r}`);
          throw new Error(b);
        }
        const { topic: s, namespaces: a } = r;
        await this.isValidSessionTopic(s);
        const u = this.client.session.get(s),
          f = Ro(a, 'update()');
        if (f) throw new Error(f.message);
        const g = Sl(u.requiredNamespaces, a, 'update()');
        if (g) throw new Error(g.message);
      }),
      (this.isValidExtend = async (r) => {
        if (!yr(r)) {
          const { message: a } = J('MISSING_OR_INVALID', `extend() params: ${r}`);
          throw new Error(a);
        }
        const { topic: s } = r;
        await this.isValidSessionTopic(s);
      }),
      (this.isValidRequest = async (r) => {
        if (!yr(r)) {
          const { message: b } = J('MISSING_OR_INVALID', `request() params: ${r}`);
          throw new Error(b);
        }
        const { topic: s, request: a, chainId: u, expiry: f } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: g } = this.client.session.get(s);
        if (!xl(g, u)) {
          const { message: b } = J('MISSING_OR_INVALID', `request() chainId: ${u}`);
          throw new Error(b);
        }
        if (!sb(a)) {
          const { message: b } = J('MISSING_OR_INVALID', `request() ${JSON.stringify(a)}`);
          throw new Error(b);
        }
        if (!cb(g, u, a.method)) {
          const { message: b } = J('MISSING_OR_INVALID', `request() method: ${a.method}`);
          throw new Error(b);
        }
        if (f && !fb(f, Ac)) {
          const { message: b } = J(
            'MISSING_OR_INVALID',
            `request() expiry: ${f}. Expiry must be a number (in seconds) between ${Ac.min} and ${Ac.max}`,
          );
          throw new Error(b);
        }
      }),
      (this.isValidRespond = async (r) => {
        if (!yr(r)) {
          const { message: u } = J('MISSING_OR_INVALID', `respond() params: ${r}`);
          throw new Error(u);
        }
        const { topic: s, response: a } = r;
        if ((await this.isValidSessionTopic(s), !ob(a))) {
          const { message: u } = J(
            'MISSING_OR_INVALID',
            `respond() response: ${JSON.stringify(a)}`,
          );
          throw new Error(u);
        }
      }),
      (this.isValidPing = async (r) => {
        if (!yr(r)) {
          const { message: a } = J('MISSING_OR_INVALID', `ping() params: ${r}`);
          throw new Error(a);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.isValidEmit = async (r) => {
        if (!yr(r)) {
          const { message: g } = J('MISSING_OR_INVALID', `emit() params: ${r}`);
          throw new Error(g);
        }
        const { topic: s, event: a, chainId: u } = r;
        await this.isValidSessionTopic(s);
        const { namespaces: f } = this.client.session.get(s);
        if (!xl(f, u)) {
          const { message: g } = J('MISSING_OR_INVALID', `emit() chainId: ${u}`);
          throw new Error(g);
        }
        if (!ab(a)) {
          const { message: g } = J('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(a)}`);
          throw new Error(g);
        }
        if (!ub(f, u, a.name)) {
          const { message: g } = J('MISSING_OR_INVALID', `emit() event: ${JSON.stringify(a)}`);
          throw new Error(g);
        }
      }),
      (this.isValidDisconnect = async (r) => {
        if (!yr(r)) {
          const { message: a } = J('MISSING_OR_INVALID', `disconnect() params: ${r}`);
          throw new Error(a);
        }
        const { topic: s } = r;
        await this.isValidSessionOrPairingTopic(s);
      }),
      (this.getVerifyContext = async (r, s) => {
        const a = {
          verified: { verifyUrl: s.verifyUrl || xn, validation: 'UNKNOWN', origin: s.url || '' },
        };
        try {
          const u = await this.client.core.verify.resolve({
            attestationId: r,
            verifyUrl: s.verifyUrl,
          });
          u &&
            ((a.verified.origin = u.origin),
            (a.verified.isScam = u.isScam),
            (a.verified.validation = u.origin === new URL(s.url).origin ? 'VALID' : 'INVALID'));
        } catch (u) {
          this.client.logger.info(u);
        }
        return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a;
      }),
      (this.validateSessionProps = (r, s) => {
        Object.values(r).forEach((a) => {
          if (!Ht(a, !1)) {
            const { message: u } = J(
              'MISSING_OR_INVALID',
              `${s} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`,
            );
            throw new Error(u);
          }
        });
      });
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: t } = J('NOT_INITIALIZED', this.name);
      throw new Error(t);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Yt.message, async (t) => {
      const { topic: r, message: s } = t;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(s))) return;
      const a = await this.client.core.crypto.decode(r, s);
      try {
        ru(a)
          ? (this.client.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a }))
          : ko(a)
            ? (await this.client.core.history.resolve(a),
              await this.onRelayEventResponse({ topic: r, payload: a }),
              this.client.core.history.delete(r, a.id))
            : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (u) {
        this.client.logger.error(u);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Dr.expired, async (t) => {
      const { topic: r, id: s } = Zf(t.target);
      if (s && this.client.pendingRequest.keys.includes(s))
        return await this.deletePendingSessionRequest(s, J('EXPIRED'), !0);
      r
        ? this.client.session.keys.includes(r) &&
          (await this.deleteSession(r, !0), this.client.events.emit('session_expire', { topic: r }))
        : s &&
          (await this.deleteProposal(s, !0), this.client.events.emit('proposal_expire', { id: s }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(as.create, (t) => this.onPairingCreated(t));
  }
  isValidPairingTopic(t) {
    if (!Ht(t, !1)) {
      const { message: r } = J('MISSING_OR_INVALID', `pairing topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(t)) {
      const { message: r } = J('NO_MATCHING_KEY', `pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Ci(this.client.core.pairing.pairings.get(t).expiry)) {
      const { message: r } = J('EXPIRED', `pairing topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(t) {
    if (!Ht(t, !1)) {
      const { message: r } = J('MISSING_OR_INVALID', `session topic should be a string: ${t}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(t)) {
      const { message: r } = J('NO_MATCHING_KEY', `session topic doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Ci(this.client.session.get(t).expiry)) {
      await this.deleteSession(t);
      const { message: r } = J('EXPIRED', `session topic: ${t}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(t) {
    if (this.client.session.keys.includes(t)) await this.isValidSessionTopic(t);
    else if (this.client.core.pairing.pairings.keys.includes(t)) this.isValidPairingTopic(t);
    else if (Ht(t, !1)) {
      const { message: r } = J('NO_MATCHING_KEY', `session or pairing topic doesn't exist: ${t}`);
      throw new Error(r);
    } else {
      const { message: r } = J(
        'MISSING_OR_INVALID',
        `session or pairing topic should be a string: ${t}`,
      );
      throw new Error(r);
    }
  }
  async isValidProposalId(t) {
    if (!ib(t)) {
      const { message: r } = J('MISSING_OR_INVALID', `proposal id should be a number: ${t}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(t)) {
      const { message: r } = J('NO_MATCHING_KEY', `proposal id doesn't exist: ${t}`);
      throw new Error(r);
    }
    if (Ci(this.client.proposal.get(t).expiry)) {
      await this.deleteProposal(t);
      const { message: r } = J('EXPIRED', `proposal id: ${t}`);
      throw new Error(r);
    }
  }
}
class Lx extends Bo {
  constructor(t, r) {
    super(t, r, xx, su), (this.core = t), (this.logger = r);
  }
}
class Fx extends Bo {
  constructor(t, r) {
    super(t, r, Sx, su), (this.core = t), (this.logger = r);
  }
}
class Mx extends Bo {
  constructor(t, r) {
    super(t, r, Ox, su, (s) => s.id), (this.core = t), (this.logger = r);
  }
}
let jx = class Fp extends d_ {
  constructor(t) {
    super(t),
      (this.protocol = Np),
      (this.version = $p),
      (this.name = Oc.name),
      (this.events = new Bt.EventEmitter()),
      (this.on = (s, a) => this.events.on(s, a)),
      (this.once = (s, a) => this.events.once(s, a)),
      (this.off = (s, a) => this.events.off(s, a)),
      (this.removeListener = (s, a) => this.events.removeListener(s, a)),
      (this.removeAllListeners = (s) => this.events.removeAllListeners(s)),
      (this.connect = async (s) => {
        try {
          return await this.engine.connect(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.pair = async (s) => {
        try {
          return await this.engine.pair(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.approve = async (s) => {
        try {
          return await this.engine.approve(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.reject = async (s) => {
        try {
          return await this.engine.reject(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.update = async (s) => {
        try {
          return await this.engine.update(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.extend = async (s) => {
        try {
          return await this.engine.extend(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.request = async (s) => {
        try {
          return await this.engine.request(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.respond = async (s) => {
        try {
          return await this.engine.respond(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.ping = async (s) => {
        try {
          return await this.engine.ping(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.emit = async (s) => {
        try {
          return await this.engine.emit(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.disconnect = async (s) => {
        try {
          return await this.engine.disconnect(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.find = (s) => {
        try {
          return this.engine.find(s);
        } catch (a) {
          throw (this.logger.error(a.message), a);
        }
      }),
      (this.getPendingSessionRequests = () => {
        try {
          return this.engine.getPendingSessionRequests();
        } catch (s) {
          throw (this.logger.error(s.message), s);
        }
      }),
      (this.name = (t == null ? void 0 : t.name) || Oc.name),
      (this.metadata = (t == null ? void 0 : t.metadata) || bw());
    const r =
      typeof (t == null ? void 0 : t.logger) < 'u' &&
      typeof (t == null ? void 0 : t.logger) != 'string'
        ? t.logger
        : Ce.pino(
            Ce.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || Oc.logger }),
          );
    (this.core = (t == null ? void 0 : t.core) || new Ix(t)),
      (this.logger = Ce.generateChildLogger(r, this.name)),
      (this.session = new Fx(this.core, this.logger)),
      (this.proposal = new Lx(this.core, this.logger)),
      (this.pendingRequest = new Mx(this.core, this.logger)),
      (this.engine = new Dx(this));
  }
  static async init(t) {
    const r = new Fp(t);
    return await r.initialize(), r;
  }
  get context() {
    return Ce.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace('Initialized');
    try {
      await this.core.start(),
        await this.session.init(),
        await this.proposal.init(),
        await this.pendingRequest.init(),
        await this.engine.init(),
        this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }),
        this.logger.info('SignClient Initialization Success');
    } catch (t) {
      throw (
        (this.logger.info('SignClient Initialization Failure'), this.logger.error(t.message), t)
      );
    }
  }
};
var Mo = {},
  Ux = {
    get exports() {
      return Mo;
    },
    set exports(n) {
      Mo = n;
    },
  };
(function (n, t) {
  var r = typeof self < 'u' ? self : Br,
    s = (function () {
      function u() {
        (this.fetch = !1), (this.DOMException = r.DOMException);
      }
      return (u.prototype = r), new u();
    })();
  (function (u) {
    (function (f) {
      var g = {
        searchParams: 'URLSearchParams' in u,
        iterable: 'Symbol' in u && 'iterator' in Symbol,
        blob:
          'FileReader' in u &&
          'Blob' in u &&
          (function () {
            try {
              return new Blob(), !0;
            } catch {
              return !1;
            }
          })(),
        formData: 'FormData' in u,
        arrayBuffer: 'ArrayBuffer' in u,
      };
      function b(m) {
        return m && DataView.prototype.isPrototypeOf(m);
      }
      if (g.arrayBuffer)
        var y = [
            '[object Int8Array]',
            '[object Uint8Array]',
            '[object Uint8ClampedArray]',
            '[object Int16Array]',
            '[object Uint16Array]',
            '[object Int32Array]',
            '[object Uint32Array]',
            '[object Float32Array]',
            '[object Float64Array]',
          ],
          E =
            ArrayBuffer.isView ||
            function (m) {
              return m && y.indexOf(Object.prototype.toString.call(m)) > -1;
            };
      function O(m) {
        if ((typeof m != 'string' && (m = String(m)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(m)))
          throw new TypeError('Invalid character in header field name');
        return m.toLowerCase();
      }
      function T(m) {
        return typeof m != 'string' && (m = String(m)), m;
      }
      function U(m) {
        var x = {
          next: function () {
            var X = m.shift();
            return { done: X === void 0, value: X };
          },
        };
        return (
          g.iterable &&
            (x[Symbol.iterator] = function () {
              return x;
            }),
          x
        );
      }
      function C(m) {
        (this.map = {}),
          m instanceof C
            ? m.forEach(function (x, X) {
                this.append(X, x);
              }, this)
            : Array.isArray(m)
              ? m.forEach(function (x) {
                  this.append(x[0], x[1]);
                }, this)
              : m &&
                Object.getOwnPropertyNames(m).forEach(function (x) {
                  this.append(x, m[x]);
                }, this);
      }
      (C.prototype.append = function (m, x) {
        (m = O(m)), (x = T(x));
        var X = this.map[m];
        this.map[m] = X ? X + ', ' + x : x;
      }),
        (C.prototype.delete = function (m) {
          delete this.map[O(m)];
        }),
        (C.prototype.get = function (m) {
          return (m = O(m)), this.has(m) ? this.map[m] : null;
        }),
        (C.prototype.has = function (m) {
          return this.map.hasOwnProperty(O(m));
        }),
        (C.prototype.set = function (m, x) {
          this.map[O(m)] = T(x);
        }),
        (C.prototype.forEach = function (m, x) {
          for (var X in this.map) this.map.hasOwnProperty(X) && m.call(x, this.map[X], X, this);
        }),
        (C.prototype.keys = function () {
          var m = [];
          return (
            this.forEach(function (x, X) {
              m.push(X);
            }),
            U(m)
          );
        }),
        (C.prototype.values = function () {
          var m = [];
          return (
            this.forEach(function (x) {
              m.push(x);
            }),
            U(m)
          );
        }),
        (C.prototype.entries = function () {
          var m = [];
          return (
            this.forEach(function (x, X) {
              m.push([X, x]);
            }),
            U(m)
          );
        }),
        g.iterable && (C.prototype[Symbol.iterator] = C.prototype.entries);
      function K(m) {
        if (m.bodyUsed) return Promise.reject(new TypeError('Already read'));
        m.bodyUsed = !0;
      }
      function ie(m) {
        return new Promise(function (x, X) {
          (m.onload = function () {
            x(m.result);
          }),
            (m.onerror = function () {
              X(m.error);
            });
        });
      }
      function he(m) {
        var x = new FileReader(),
          X = ie(x);
        return x.readAsArrayBuffer(m), X;
      }
      function le(m) {
        var x = new FileReader(),
          X = ie(x);
        return x.readAsText(m), X;
      }
      function fe(m) {
        for (var x = new Uint8Array(m), X = new Array(x.length), ce = 0; ce < x.length; ce++)
          X[ce] = String.fromCharCode(x[ce]);
        return X.join('');
      }
      function pe(m) {
        if (m.slice) return m.slice(0);
        var x = new Uint8Array(m.byteLength);
        return x.set(new Uint8Array(m)), x.buffer;
      }
      function de() {
        return (
          (this.bodyUsed = !1),
          (this._initBody = function (m) {
            (this._bodyInit = m),
              m
                ? typeof m == 'string'
                  ? (this._bodyText = m)
                  : g.blob && Blob.prototype.isPrototypeOf(m)
                    ? (this._bodyBlob = m)
                    : g.formData && FormData.prototype.isPrototypeOf(m)
                      ? (this._bodyFormData = m)
                      : g.searchParams && URLSearchParams.prototype.isPrototypeOf(m)
                        ? (this._bodyText = m.toString())
                        : g.arrayBuffer && g.blob && b(m)
                          ? ((this._bodyArrayBuffer = pe(m.buffer)),
                            (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                          : g.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(m) || E(m))
                            ? (this._bodyArrayBuffer = pe(m))
                            : (this._bodyText = m = Object.prototype.toString.call(m))
                : (this._bodyText = ''),
              this.headers.get('content-type') ||
                (typeof m == 'string'
                  ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                  : this._bodyBlob && this._bodyBlob.type
                    ? this.headers.set('content-type', this._bodyBlob.type)
                    : g.searchParams &&
                      URLSearchParams.prototype.isPrototypeOf(m) &&
                      this.headers.set(
                        'content-type',
                        'application/x-www-form-urlencoded;charset=UTF-8',
                      ));
          }),
          g.blob &&
            ((this.blob = function () {
              var m = K(this);
              if (m) return m;
              if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
              if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
              if (this._bodyFormData) throw new Error('could not read FormData body as blob');
              return Promise.resolve(new Blob([this._bodyText]));
            }),
            (this.arrayBuffer = function () {
              return this._bodyArrayBuffer
                ? K(this) || Promise.resolve(this._bodyArrayBuffer)
                : this.blob().then(he);
            })),
          (this.text = function () {
            var m = K(this);
            if (m) return m;
            if (this._bodyBlob) return le(this._bodyBlob);
            if (this._bodyArrayBuffer) return Promise.resolve(fe(this._bodyArrayBuffer));
            if (this._bodyFormData) throw new Error('could not read FormData body as text');
            return Promise.resolve(this._bodyText);
          }),
          g.formData &&
            (this.formData = function () {
              return this.text().then(ve);
            }),
          (this.json = function () {
            return this.text().then(JSON.parse);
          }),
          this
        );
      }
      var L = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
      function z(m) {
        var x = m.toUpperCase();
        return L.indexOf(x) > -1 ? x : m;
      }
      function G(m, x) {
        x = x || {};
        var X = x.body;
        if (m instanceof G) {
          if (m.bodyUsed) throw new TypeError('Already read');
          (this.url = m.url),
            (this.credentials = m.credentials),
            x.headers || (this.headers = new C(m.headers)),
            (this.method = m.method),
            (this.mode = m.mode),
            (this.signal = m.signal),
            !X && m._bodyInit != null && ((X = m._bodyInit), (m.bodyUsed = !0));
        } else this.url = String(m);
        if (
          ((this.credentials = x.credentials || this.credentials || 'same-origin'),
          (x.headers || !this.headers) && (this.headers = new C(x.headers)),
          (this.method = z(x.method || this.method || 'GET')),
          (this.mode = x.mode || this.mode || null),
          (this.signal = x.signal || this.signal),
          (this.referrer = null),
          (this.method === 'GET' || this.method === 'HEAD') && X)
        )
          throw new TypeError('Body not allowed for GET or HEAD requests');
        this._initBody(X);
      }
      G.prototype.clone = function () {
        return new G(this, { body: this._bodyInit });
      };
      function ve(m) {
        var x = new FormData();
        return (
          m
            .trim()
            .split('&')
            .forEach(function (X) {
              if (X) {
                var ce = X.split('='),
                  V = ce.shift().replace(/\+/g, ' '),
                  k = ce.join('=').replace(/\+/g, ' ');
                x.append(decodeURIComponent(V), decodeURIComponent(k));
              }
            }),
          x
        );
      }
      function ne(m) {
        var x = new C(),
          X = m.replace(/\r?\n[\t ]+/g, ' ');
        return (
          X.split(/\r?\n/).forEach(function (ce) {
            var V = ce.split(':'),
              k = V.shift().trim();
            if (k) {
              var B = V.join(':').trim();
              x.append(k, B);
            }
          }),
          x
        );
      }
      de.call(G.prototype);
      function ue(m, x) {
        x || (x = {}),
          (this.type = 'default'),
          (this.status = x.status === void 0 ? 200 : x.status),
          (this.ok = this.status >= 200 && this.status < 300),
          (this.statusText = 'statusText' in x ? x.statusText : 'OK'),
          (this.headers = new C(x.headers)),
          (this.url = x.url || ''),
          this._initBody(m);
      }
      de.call(ue.prototype),
        (ue.prototype.clone = function () {
          return new ue(this._bodyInit, {
            status: this.status,
            statusText: this.statusText,
            headers: new C(this.headers),
            url: this.url,
          });
        }),
        (ue.error = function () {
          var m = new ue(null, { status: 0, statusText: '' });
          return (m.type = 'error'), m;
        });
      var Te = [301, 302, 303, 307, 308];
      (ue.redirect = function (m, x) {
        if (Te.indexOf(x) === -1) throw new RangeError('Invalid status code');
        return new ue(null, { status: x, headers: { location: m } });
      }),
        (f.DOMException = u.DOMException);
      try {
        new f.DOMException();
      } catch {
        (f.DOMException = function (x, X) {
          (this.message = x), (this.name = X);
          var ce = Error(x);
          this.stack = ce.stack;
        }),
          (f.DOMException.prototype = Object.create(Error.prototype)),
          (f.DOMException.prototype.constructor = f.DOMException);
      }
      function qe(m, x) {
        return new Promise(function (X, ce) {
          var V = new G(m, x);
          if (V.signal && V.signal.aborted) return ce(new f.DOMException('Aborted', 'AbortError'));
          var k = new XMLHttpRequest();
          function B() {
            k.abort();
          }
          (k.onload = function () {
            var W = {
              status: k.status,
              statusText: k.statusText,
              headers: ne(k.getAllResponseHeaders() || ''),
            };
            W.url = 'responseURL' in k ? k.responseURL : W.headers.get('X-Request-URL');
            var Qe = 'response' in k ? k.response : k.responseText;
            X(new ue(Qe, W));
          }),
            (k.onerror = function () {
              ce(new TypeError('Network request failed'));
            }),
            (k.ontimeout = function () {
              ce(new TypeError('Network request failed'));
            }),
            (k.onabort = function () {
              ce(new f.DOMException('Aborted', 'AbortError'));
            }),
            k.open(V.method, V.url, !0),
            V.credentials === 'include'
              ? (k.withCredentials = !0)
              : V.credentials === 'omit' && (k.withCredentials = !1),
            'responseType' in k && g.blob && (k.responseType = 'blob'),
            V.headers.forEach(function (W, Qe) {
              k.setRequestHeader(Qe, W);
            }),
            V.signal &&
              (V.signal.addEventListener('abort', B),
              (k.onreadystatechange = function () {
                k.readyState === 4 && V.signal.removeEventListener('abort', B);
              })),
            k.send(typeof V._bodyInit > 'u' ? null : V._bodyInit);
        });
      }
      return (
        (qe.polyfill = !0),
        u.fetch || ((u.fetch = qe), (u.Headers = C), (u.Request = G), (u.Response = ue)),
        (f.Headers = C),
        (f.Request = G),
        (f.Response = ue),
        (f.fetch = qe),
        Object.defineProperty(f, '__esModule', { value: !0 }),
        f
      );
    })({});
  })(s),
    (s.fetch.ponyfill = !0),
    delete s.fetch.polyfill;
  var a = s;
  (t = a.fetch),
    (t.default = a.fetch),
    (t.fetch = a.fetch),
    (t.Headers = a.Headers),
    (t.Request = a.Request),
    (t.Response = a.Response),
    (n.exports = t);
})(Ux, Mo);
const mf = $1(Mo),
  qx = { Accept: 'application/json', 'Content-Type': 'application/json' },
  zx = 'POST',
  wf = { headers: qx, method: zx },
  bf = 10;
class $i {
  constructor(t, r = !1) {
    if (
      ((this.url = t),
      (this.disableProviderPing = r),
      (this.events = new Bt.EventEmitter()),
      (this.isAvailable = !1),
      (this.registering = !1),
      !Vl(t))
    )
      throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    (this.url = t), (this.disableProviderPing = r);
  }
  get connected() {
    return this.isAvailable;
  }
  get connecting() {
    return this.registering;
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  async open(t = this.url) {
    await this.register(t);
  }
  async close() {
    if (!this.isAvailable) throw new Error('Connection already closed');
    this.onClose();
  }
  async send(t, r) {
    this.isAvailable || (await this.register());
    try {
      const s = Yi(t),
        u = await (await mf(this.url, Object.assign(Object.assign({}, wf), { body: s }))).json();
      this.onPayload({ data: u });
    } catch (s) {
      this.onError(t.id, s);
    }
  }
  async register(t = this.url) {
    if (!Vl(t)) throw new Error(`Provided URL is not compatible with HTTP connection: ${t}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (
        (this.events.listenerCount('register_error') >= r ||
          this.events.listenerCount('open') >= r) &&
          this.events.setMaxListeners(r + 1),
        new Promise((s, a) => {
          this.events.once('register_error', (u) => {
            this.resetMaxListeners(), a(u);
          }),
            this.events.once('open', () => {
              if ((this.resetMaxListeners(), typeof this.isAvailable > 'u'))
                return a(new Error('HTTP connection is missing or invalid'));
              s();
            });
        })
      );
    }
    (this.url = t), (this.registering = !0);
    try {
      if (!this.disableProviderPing) {
        const r = Yi({ id: 1, jsonrpc: '2.0', method: 'test', params: [] });
        await mf(t, Object.assign(Object.assign({}, wf), { body: r }));
      }
      this.onOpen();
    } catch (r) {
      const s = this.parseError(r);
      throw (this.events.emit('register_error', s), this.onClose(), s);
    }
  }
  onOpen() {
    (this.isAvailable = !0), (this.registering = !1), this.events.emit('open');
  }
  onClose() {
    (this.isAvailable = !1), (this.registering = !1), this.events.emit('close');
  }
  onPayload(t) {
    if (typeof t.data > 'u') return;
    const r = typeof t.data == 'string' ? ds(t.data) : t.data;
    this.events.emit('payload', r);
  }
  onError(t, r) {
    const s = this.parseError(r),
      a = s.message || s.toString(),
      u = zo(t, a);
    this.events.emit('payload', u);
  }
  parseError(t, r = this.url) {
    return pp(t, r, 'HTTP');
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > bf && this.events.setMaxListeners(bf);
  }
}
const _f = 'error',
  kx = 'wss://relay.walletconnect.com',
  Hx = 'wc',
  Bx = 'universal_provider',
  Ef = `${Hx}@2:${Bx}:`,
  Kx = 'https://rpc.walletconnect.com/v1/',
  mi = { DEFAULT_CHAIN_CHANGED: 'default_chain_changed' };
var ss =
    typeof globalThis < 'u'
      ? globalThis
      : typeof window < 'u'
        ? window
        : typeof global < 'u'
          ? global
          : typeof self < 'u'
            ? self
            : {},
  kc = { exports: {} }; /**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function (n, t) {
  (function () {
    var r,
      s = '4.17.21',
      a = 200,
      u = 'Unsupported core-js use. Try https://npms.io/search?q=ponyfill.',
      f = 'Expected a function',
      g = 'Invalid `variable` option passed into `_.template`',
      b = '__lodash_hash_undefined__',
      y = 500,
      E = '__lodash_placeholder__',
      O = 1,
      T = 2,
      U = 4,
      C = 1,
      K = 2,
      ie = 1,
      he = 2,
      le = 4,
      fe = 8,
      pe = 16,
      de = 32,
      L = 64,
      z = 128,
      G = 256,
      ve = 512,
      ne = 30,
      ue = '...',
      Te = 800,
      qe = 16,
      m = 1,
      x = 2,
      X = 3,
      ce = 1 / 0,
      V = 9007199254740991,
      k = 17976931348623157e292,
      B = 0 / 0,
      W = 4294967295,
      Qe = W - 1,
      Be = W >>> 1,
      Kr = [
        ['ary', z],
        ['bind', ie],
        ['bindKey', he],
        ['curry', fe],
        ['curryRight', pe],
        ['flip', ve],
        ['partial', de],
        ['partialRight', L],
        ['rearg', G],
      ],
      Ie = '[object Arguments]',
      St = '[object Array]',
      D = '[object AsyncFunction]',
      $ = '[object Boolean]',
      R = '[object Date]',
      h = '[object DOMException]',
      I = '[object Error]',
      ee = '[object Function]',
      ge = '[object GeneratorFunction]',
      _e = '[object Map]',
      Ne = '[object Number]',
      De = '[object Null]',
      Pe = '[object Object]',
      Pt = '[object Promise]',
      wt = '[object Proxy]',
      at = '[object RegExp]',
      Fe = '[object Set]',
      Xe = '[object String]',
      Ze = '[object Symbol]',
      ct = '[object Undefined]',
      ze = '[object WeakMap]',
      et = '[object WeakSet]',
      $e = '[object ArrayBuffer]',
      Ke = '[object DataView]',
      lt = '[object Float32Array]',
      je = '[object Float64Array]',
      Ot = '[object Int8Array]',
      Ft = '[object Int16Array]',
      Kt = '[object Int32Array]',
      Vt = '[object Uint8Array]',
      Ut = '[object Uint8ClampedArray]',
      Xt = '[object Uint16Array]',
      cr = '[object Uint32Array]',
      Vr = /\b__p \+= '';/g,
      Zt = /\b(__p \+=) '' \+/g,
      ei = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
      wi = /&(?:amp|lt|gt|quot|#39);/g,
      Di = /[&<>"']/g,
      ft = RegExp(wi.source),
      it = RegExp(Di.source),
      pt = /<%-([\s\S]+?)%>/g,
      dt = /<%([\s\S]+?)%>/g,
      ut = /<%=([\s\S]+?)%>/g,
      nt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
      At = /^\w*$/,
      Rt =
        /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
      gt = /[\\^$.*+?()[\]{}|]/g,
      Ct = RegExp(gt.source),
      yt = /^\s+/,
      bt = /\s/,
      vt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
      Ye = /\{\n\/\* \[wrapped with (.+)\] \*/,
      Tt = /,? & /,
      Nt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
      Ko = /[()=,{}\[\]\/\s]/,
      Vo = /\\(\\)?/g,
      Wo = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
      Sr = /\w*$/,
      Go = /^[-+]0x[0-9a-f]+$/i,
      Jo = /^0b[01]+$/i,
      Qo = /^\[object .+?Constructor\]$/,
      Yo = /^0o[0-7]+$/i,
      Xo = /^(?:0|[1-9]\d*)$/,
      ti = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
      rn = /($^)/,
      Zo = /['\n\r\u2028\u2029\\]/g,
      nn = '\\ud800-\\udfff',
      ea = '\\u0300-\\u036f',
      ta = '\\ufe20-\\ufe2f',
      sn = '\\u20d0-\\u20ff',
      ys = ea + ta + sn,
      vs = '\\u2700-\\u27bf',
      Lr = 'a-z\\xdf-\\xf6\\xf8-\\xff',
      ra = '\\xac\\xb1\\xd7\\xf7',
      ia = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
      na = '\\u2000-\\u206f',
      sa =
        ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
      ms = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
      ws = '\\ufe0e\\ufe0f',
      Li = ra + ia + na + sa,
      Dn = "['’]",
      Fi = '[' + nn + ']',
      Ln = '[' + Li + ']',
      Mi = '[' + ys + ']',
      bs = '\\d+',
      oa = '[' + vs + ']',
      _s = '[' + Lr + ']',
      Es = '[^' + nn + Li + bs + vs + Lr + ms + ']',
      on = '\\ud83c[\\udffb-\\udfff]',
      aa = '(?:' + Mi + '|' + on + ')',
      Is = '[^' + nn + ']',
      an = '(?:\\ud83c[\\udde6-\\uddff]){2}',
      bi = '[\\ud800-\\udbff][\\udc00-\\udfff]',
      mr = '[' + ms + ']',
      xs = '\\u200d',
      Ss = '(?:' + _s + '|' + Es + ')',
      Wr = '(?:' + mr + '|' + Es + ')',
      Ps = '(?:' + Dn + '(?:d|ll|m|re|s|t|ve))?',
      Os = '(?:' + Dn + '(?:D|LL|M|RE|S|T|VE))?',
      As = aa + '?',
      Rs = '[' + ws + ']?',
      ca = '(?:' + xs + '(?:' + [Is, an, bi].join('|') + ')' + Rs + As + ')*',
      ri = '\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])',
      Cs = '\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])',
      Ts = Rs + As + ca,
      cn = '(?:' + [oa, an, bi].join('|') + ')' + Ts,
      ua = '(?:' + [Is + Mi + '?', Mi, an, bi, Fi].join('|') + ')',
      Fn = RegExp(Dn, 'g'),
      ha = RegExp(Mi, 'g'),
      un = RegExp(on + '(?=' + on + ')|' + ua + Ts, 'g'),
      Ns = RegExp(
        [
          mr + '?' + _s + '+' + Ps + '(?=' + [Ln, mr, '$'].join('|') + ')',
          Wr + '+' + Os + '(?=' + [Ln, mr + Ss, '$'].join('|') + ')',
          mr + '?' + Ss + '+' + Ps,
          mr + '+' + Os,
          Cs,
          ri,
          bs,
          cn,
        ].join('|'),
        'g',
      ),
      $s = RegExp('[' + xs + nn + ys + ws + ']'),
      ji = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
      Ds = [
        'Array',
        'Buffer',
        'DataView',
        'Date',
        'Error',
        'Float32Array',
        'Float64Array',
        'Function',
        'Int8Array',
        'Int16Array',
        'Int32Array',
        'Map',
        'Math',
        'Object',
        'Promise',
        'RegExp',
        'Set',
        'String',
        'Symbol',
        'TypeError',
        'Uint8Array',
        'Uint8ClampedArray',
        'Uint16Array',
        'Uint32Array',
        'WeakMap',
        '_',
        'clearTimeout',
        'isFinite',
        'parseInt',
        'setTimeout',
      ],
      la = -1,
      Ve = {};
    (Ve[lt] = Ve[je] = Ve[Ot] = Ve[Ft] = Ve[Kt] = Ve[Vt] = Ve[Ut] = Ve[Xt] = Ve[cr] = !0),
      (Ve[Ie] =
        Ve[St] =
        Ve[$e] =
        Ve[$] =
        Ve[Ke] =
        Ve[R] =
        Ve[I] =
        Ve[ee] =
        Ve[_e] =
        Ve[Ne] =
        Ve[Pe] =
        Ve[at] =
        Ve[Fe] =
        Ve[Xe] =
        Ve[ze] =
          !1);
    var ke = {};
    (ke[Ie] =
      ke[St] =
      ke[$e] =
      ke[Ke] =
      ke[$] =
      ke[R] =
      ke[lt] =
      ke[je] =
      ke[Ot] =
      ke[Ft] =
      ke[Kt] =
      ke[_e] =
      ke[Ne] =
      ke[Pe] =
      ke[at] =
      ke[Fe] =
      ke[Xe] =
      ke[Ze] =
      ke[Vt] =
      ke[Ut] =
      ke[Xt] =
      ke[cr] =
        !0),
      (ke[I] = ke[ee] = ke[ze] = !1);
    var v = {
        À: 'A',
        Á: 'A',
        Â: 'A',
        Ã: 'A',
        Ä: 'A',
        Å: 'A',
        à: 'a',
        á: 'a',
        â: 'a',
        ã: 'a',
        ä: 'a',
        å: 'a',
        Ç: 'C',
        ç: 'c',
        Ð: 'D',
        ð: 'd',
        È: 'E',
        É: 'E',
        Ê: 'E',
        Ë: 'E',
        è: 'e',
        é: 'e',
        ê: 'e',
        ë: 'e',
        Ì: 'I',
        Í: 'I',
        Î: 'I',
        Ï: 'I',
        ì: 'i',
        í: 'i',
        î: 'i',
        ï: 'i',
        Ñ: 'N',
        ñ: 'n',
        Ò: 'O',
        Ó: 'O',
        Ô: 'O',
        Õ: 'O',
        Ö: 'O',
        Ø: 'O',
        ò: 'o',
        ó: 'o',
        ô: 'o',
        õ: 'o',
        ö: 'o',
        ø: 'o',
        Ù: 'U',
        Ú: 'U',
        Û: 'U',
        Ü: 'U',
        ù: 'u',
        ú: 'u',
        û: 'u',
        ü: 'u',
        Ý: 'Y',
        ý: 'y',
        ÿ: 'y',
        Æ: 'Ae',
        æ: 'ae',
        Þ: 'Th',
        þ: 'th',
        ß: 'ss',
        Ā: 'A',
        Ă: 'A',
        Ą: 'A',
        ā: 'a',
        ă: 'a',
        ą: 'a',
        Ć: 'C',
        Ĉ: 'C',
        Ċ: 'C',
        Č: 'C',
        ć: 'c',
        ĉ: 'c',
        ċ: 'c',
        č: 'c',
        Ď: 'D',
        Đ: 'D',
        ď: 'd',
        đ: 'd',
        Ē: 'E',
        Ĕ: 'E',
        Ė: 'E',
        Ę: 'E',
        Ě: 'E',
        ē: 'e',
        ĕ: 'e',
        ė: 'e',
        ę: 'e',
        ě: 'e',
        Ĝ: 'G',
        Ğ: 'G',
        Ġ: 'G',
        Ģ: 'G',
        ĝ: 'g',
        ğ: 'g',
        ġ: 'g',
        ģ: 'g',
        Ĥ: 'H',
        Ħ: 'H',
        ĥ: 'h',
        ħ: 'h',
        Ĩ: 'I',
        Ī: 'I',
        Ĭ: 'I',
        Į: 'I',
        İ: 'I',
        ĩ: 'i',
        ī: 'i',
        ĭ: 'i',
        į: 'i',
        ı: 'i',
        Ĵ: 'J',
        ĵ: 'j',
        Ķ: 'K',
        ķ: 'k',
        ĸ: 'k',
        Ĺ: 'L',
        Ļ: 'L',
        Ľ: 'L',
        Ŀ: 'L',
        Ł: 'L',
        ĺ: 'l',
        ļ: 'l',
        ľ: 'l',
        ŀ: 'l',
        ł: 'l',
        Ń: 'N',
        Ņ: 'N',
        Ň: 'N',
        Ŋ: 'N',
        ń: 'n',
        ņ: 'n',
        ň: 'n',
        ŋ: 'n',
        Ō: 'O',
        Ŏ: 'O',
        Ő: 'O',
        ō: 'o',
        ŏ: 'o',
        ő: 'o',
        Ŕ: 'R',
        Ŗ: 'R',
        Ř: 'R',
        ŕ: 'r',
        ŗ: 'r',
        ř: 'r',
        Ś: 'S',
        Ŝ: 'S',
        Ş: 'S',
        Š: 'S',
        ś: 's',
        ŝ: 's',
        ş: 's',
        š: 's',
        Ţ: 'T',
        Ť: 'T',
        Ŧ: 'T',
        ţ: 't',
        ť: 't',
        ŧ: 't',
        Ũ: 'U',
        Ū: 'U',
        Ŭ: 'U',
        Ů: 'U',
        Ű: 'U',
        Ų: 'U',
        ũ: 'u',
        ū: 'u',
        ŭ: 'u',
        ů: 'u',
        ű: 'u',
        ų: 'u',
        Ŵ: 'W',
        ŵ: 'w',
        Ŷ: 'Y',
        ŷ: 'y',
        Ÿ: 'Y',
        Ź: 'Z',
        Ż: 'Z',
        Ž: 'Z',
        ź: 'z',
        ż: 'z',
        ž: 'z',
        Ĳ: 'IJ',
        ĳ: 'ij',
        Œ: 'Oe',
        œ: 'oe',
        ŉ: "'n",
        ſ: 's',
      },
      S = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' },
      q = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'" },
      Y = { '\\': '\\', "'": "'", '\n': 'n', '\r': 'r', '\u2028': 'u2028', '\u2029': 'u2029' },
      We = parseFloat,
      me = parseInt,
      tt = typeof ss == 'object' && ss && ss.Object === Object && ss,
      $t = typeof self == 'object' && self && self.Object === Object && self,
      Ae = tt || $t || Function('return this')(),
      Ge = t && !t.nodeType && t,
      _t = Ge && !0 && n && !n.nodeType && n,
      ur = _t && _t.exports === Ge,
      Dt = ur && tt.process,
      rt = (function () {
        try {
          var P = _t && _t.require && _t.require('util').types;
          return P || (Dt && Dt.binding && Dt.binding('util'));
        } catch {}
      })(),
      er = rt && rt.isArrayBuffer,
      Fr = rt && rt.isDate,
      Pr = rt && rt.isMap,
      Gr = rt && rt.isRegExp,
      Mn = rt && rt.isSet,
      Ui = rt && rt.isTypedArray;
    function qt(P, F, N) {
      switch (N.length) {
        case 0:
          return P.call(F);
        case 1:
          return P.call(F, N[0]);
        case 2:
          return P.call(F, N[0], N[1]);
        case 3:
          return P.call(F, N[0], N[1], N[2]);
      }
      return P.apply(F, N);
    }
    function Up(P, F, N, Z) {
      for (var ye = -1, Le = P == null ? 0 : P.length; ++ye < Le; ) {
        var Mt = P[ye];
        F(Z, Mt, N(Mt), P);
      }
      return Z;
    }
    function Or(P, F) {
      for (var N = -1, Z = P == null ? 0 : P.length; ++N < Z && F(P[N], N, P) !== !1; );
      return P;
    }
    function qp(P, F) {
      for (var N = P == null ? 0 : P.length; N-- && F(P[N], N, P) !== !1; );
      return P;
    }
    function cu(P, F) {
      for (var N = -1, Z = P == null ? 0 : P.length; ++N < Z; ) if (!F(P[N], N, P)) return !1;
      return !0;
    }
    function _i(P, F) {
      for (var N = -1, Z = P == null ? 0 : P.length, ye = 0, Le = []; ++N < Z; ) {
        var Mt = P[N];
        F(Mt, N, P) && (Le[ye++] = Mt);
      }
      return Le;
    }
    function Ls(P, F) {
      var N = P == null ? 0 : P.length;
      return !!N && hn(P, F, 0) > -1;
    }
    function fa(P, F, N) {
      for (var Z = -1, ye = P == null ? 0 : P.length; ++Z < ye; ) if (N(F, P[Z])) return !0;
      return !1;
    }
    function st(P, F) {
      for (var N = -1, Z = P == null ? 0 : P.length, ye = Array(Z); ++N < Z; )
        ye[N] = F(P[N], N, P);
      return ye;
    }
    function Ei(P, F) {
      for (var N = -1, Z = F.length, ye = P.length; ++N < Z; ) P[ye + N] = F[N];
      return P;
    }
    function pa(P, F, N, Z) {
      var ye = -1,
        Le = P == null ? 0 : P.length;
      for (Z && Le && (N = P[++ye]); ++ye < Le; ) N = F(N, P[ye], ye, P);
      return N;
    }
    function zp(P, F, N, Z) {
      var ye = P == null ? 0 : P.length;
      for (Z && ye && (N = P[--ye]); ye--; ) N = F(N, P[ye], ye, P);
      return N;
    }
    function da(P, F) {
      for (var N = -1, Z = P == null ? 0 : P.length; ++N < Z; ) if (F(P[N], N, P)) return !0;
      return !1;
    }
    var kp = ga('length');
    function Hp(P) {
      return P.split('');
    }
    function Bp(P) {
      return P.match(Nt) || [];
    }
    function uu(P, F, N) {
      var Z;
      return (
        N(P, function (ye, Le, Mt) {
          if (F(ye, Le, Mt)) return (Z = Le), !1;
        }),
        Z
      );
    }
    function Fs(P, F, N, Z) {
      for (var ye = P.length, Le = N + (Z ? 1 : -1); Z ? Le-- : ++Le < ye; )
        if (F(P[Le], Le, P)) return Le;
      return -1;
    }
    function hn(P, F, N) {
      return F === F ? rd(P, F, N) : Fs(P, hu, N);
    }
    function Kp(P, F, N, Z) {
      for (var ye = N - 1, Le = P.length; ++ye < Le; ) if (Z(P[ye], F)) return ye;
      return -1;
    }
    function hu(P) {
      return P !== P;
    }
    function lu(P, F) {
      var N = P == null ? 0 : P.length;
      return N ? va(P, F) / N : B;
    }
    function ga(P) {
      return function (F) {
        return F == null ? r : F[P];
      };
    }
    function ya(P) {
      return function (F) {
        return P == null ? r : P[F];
      };
    }
    function fu(P, F, N, Z, ye) {
      return (
        ye(P, function (Le, Mt, Je) {
          N = Z ? ((Z = !1), Le) : F(N, Le, Mt, Je);
        }),
        N
      );
    }
    function Vp(P, F) {
      var N = P.length;
      for (P.sort(F); N--; ) P[N] = P[N].value;
      return P;
    }
    function va(P, F) {
      for (var N, Z = -1, ye = P.length; ++Z < ye; ) {
        var Le = F(P[Z]);
        Le !== r && (N = N === r ? Le : N + Le);
      }
      return N;
    }
    function ma(P, F) {
      for (var N = -1, Z = Array(P); ++N < P; ) Z[N] = F(N);
      return Z;
    }
    function Wp(P, F) {
      return st(F, function (N) {
        return [N, P[N]];
      });
    }
    function pu(P) {
      return P && P.slice(0, vu(P) + 1).replace(yt, '');
    }
    function wr(P) {
      return function (F) {
        return P(F);
      };
    }
    function wa(P, F) {
      return st(F, function (N) {
        return P[N];
      });
    }
    function jn(P, F) {
      return P.has(F);
    }
    function du(P, F) {
      for (var N = -1, Z = P.length; ++N < Z && hn(F, P[N], 0) > -1; );
      return N;
    }
    function gu(P, F) {
      for (var N = P.length; N-- && hn(F, P[N], 0) > -1; );
      return N;
    }
    function Gp(P, F) {
      for (var N = P.length, Z = 0; N--; ) P[N] === F && ++Z;
      return Z;
    }
    var Jp = ya(v),
      Qp = ya(S);
    function Yp(P) {
      return '\\' + Y[P];
    }
    function Xp(P, F) {
      return P == null ? r : P[F];
    }
    function ln(P) {
      return $s.test(P);
    }
    function Zp(P) {
      return ji.test(P);
    }
    function ed(P) {
      for (var F, N = []; !(F = P.next()).done; ) N.push(F.value);
      return N;
    }
    function ba(P) {
      var F = -1,
        N = Array(P.size);
      return (
        P.forEach(function (Z, ye) {
          N[++F] = [ye, Z];
        }),
        N
      );
    }
    function yu(P, F) {
      return function (N) {
        return P(F(N));
      };
    }
    function Ii(P, F) {
      for (var N = -1, Z = P.length, ye = 0, Le = []; ++N < Z; ) {
        var Mt = P[N];
        (Mt === F || Mt === E) && ((P[N] = E), (Le[ye++] = N));
      }
      return Le;
    }
    function Ms(P) {
      var F = -1,
        N = Array(P.size);
      return (
        P.forEach(function (Z) {
          N[++F] = Z;
        }),
        N
      );
    }
    function td(P) {
      var F = -1,
        N = Array(P.size);
      return (
        P.forEach(function (Z) {
          N[++F] = [Z, Z];
        }),
        N
      );
    }
    function rd(P, F, N) {
      for (var Z = N - 1, ye = P.length; ++Z < ye; ) if (P[Z] === F) return Z;
      return -1;
    }
    function id(P, F, N) {
      for (var Z = N + 1; Z--; ) if (P[Z] === F) return Z;
      return Z;
    }
    function fn(P) {
      return ln(P) ? sd(P) : kp(P);
    }
    function Mr(P) {
      return ln(P) ? od(P) : Hp(P);
    }
    function vu(P) {
      for (var F = P.length; F-- && bt.test(P.charAt(F)); );
      return F;
    }
    var nd = ya(q);
    function sd(P) {
      for (var F = (un.lastIndex = 0); un.test(P); ) ++F;
      return F;
    }
    function od(P) {
      return P.match(un) || [];
    }
    function ad(P) {
      return P.match(Ns) || [];
    }
    var cd = function P(F) {
        F = F == null ? Ae : pn.defaults(Ae.Object(), F, pn.pick(Ae, Ds));
        var N = F.Array,
          Z = F.Date,
          ye = F.Error,
          Le = F.Function,
          Mt = F.Math,
          Je = F.Object,
          _a = F.RegExp,
          ud = F.String,
          Ar = F.TypeError,
          js = N.prototype,
          hd = Le.prototype,
          dn = Je.prototype,
          Us = F['__core-js_shared__'],
          qs = hd.toString,
          Ue = dn.hasOwnProperty,
          ld = 0,
          mu = (function () {
            var e = /[^.]+$/.exec((Us && Us.keys && Us.keys.IE_PROTO) || '');
            return e ? 'Symbol(src)_1.' + e : '';
          })(),
          zs = dn.toString,
          fd = qs.call(Je),
          pd = Ae._,
          dd = _a(
            '^' +
              qs
                .call(Ue)
                .replace(gt, '\\$&')
                .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
              '$',
          ),
          ks = ur ? F.Buffer : r,
          xi = F.Symbol,
          Hs = F.Uint8Array,
          wu = ks ? ks.allocUnsafe : r,
          Bs = yu(Je.getPrototypeOf, Je),
          bu = Je.create,
          _u = dn.propertyIsEnumerable,
          Ks = js.splice,
          Eu = xi ? xi.isConcatSpreadable : r,
          Un = xi ? xi.iterator : r,
          qi = xi ? xi.toStringTag : r,
          Vs = (function () {
            try {
              var e = Ki(Je, 'defineProperty');
              return e({}, '', {}), e;
            } catch {}
          })(),
          gd = F.clearTimeout !== Ae.clearTimeout && F.clearTimeout,
          yd = Z && Z.now !== Ae.Date.now && Z.now,
          vd = F.setTimeout !== Ae.setTimeout && F.setTimeout,
          Ws = Mt.ceil,
          Gs = Mt.floor,
          Ea = Je.getOwnPropertySymbols,
          md = ks ? ks.isBuffer : r,
          Iu = F.isFinite,
          wd = js.join,
          bd = yu(Je.keys, Je),
          jt = Mt.max,
          Jt = Mt.min,
          _d = Z.now,
          Ed = F.parseInt,
          xu = Mt.random,
          Id = js.reverse,
          Ia = Ki(F, 'DataView'),
          qn = Ki(F, 'Map'),
          xa = Ki(F, 'Promise'),
          gn = Ki(F, 'Set'),
          zn = Ki(F, 'WeakMap'),
          kn = Ki(Je, 'create'),
          Js = zn && new zn(),
          yn = {},
          xd = Vi(Ia),
          Sd = Vi(qn),
          Pd = Vi(xa),
          Od = Vi(gn),
          Ad = Vi(zn),
          Qs = xi ? xi.prototype : r,
          Hn = Qs ? Qs.valueOf : r,
          Su = Qs ? Qs.toString : r;
        function p(e) {
          if (mt(e) && !we(e) && !(e instanceof Oe)) {
            if (e instanceof Rr) return e;
            if (Ue.call(e, '__wrapped__')) return Ph(e);
          }
          return new Rr(e);
        }
        var vn = (function () {
          function e() {}
          return function (i) {
            if (!ht(i)) return {};
            if (bu) return bu(i);
            e.prototype = i;
            var o = new e();
            return (e.prototype = r), o;
          };
        })();
        function Ys() {}
        function Rr(e, i) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__chain__ = !!i),
            (this.__index__ = 0),
            (this.__values__ = r);
        }
        (p.templateSettings = {
          escape: pt,
          evaluate: dt,
          interpolate: ut,
          variable: '',
          imports: { _: p },
        }),
          (p.prototype = Ys.prototype),
          (p.prototype.constructor = p),
          (Rr.prototype = vn(Ys.prototype)),
          (Rr.prototype.constructor = Rr);
        function Oe(e) {
          (this.__wrapped__ = e),
            (this.__actions__ = []),
            (this.__dir__ = 1),
            (this.__filtered__ = !1),
            (this.__iteratees__ = []),
            (this.__takeCount__ = W),
            (this.__views__ = []);
        }
        function Rd() {
          var e = new Oe(this.__wrapped__);
          return (
            (e.__actions__ = hr(this.__actions__)),
            (e.__dir__ = this.__dir__),
            (e.__filtered__ = this.__filtered__),
            (e.__iteratees__ = hr(this.__iteratees__)),
            (e.__takeCount__ = this.__takeCount__),
            (e.__views__ = hr(this.__views__)),
            e
          );
        }
        function Cd() {
          if (this.__filtered__) {
            var e = new Oe(this);
            (e.__dir__ = -1), (e.__filtered__ = !0);
          } else (e = this.clone()), (e.__dir__ *= -1);
          return e;
        }
        function Td() {
          var e = this.__wrapped__.value(),
            i = this.__dir__,
            o = we(e),
            c = i < 0,
            l = o ? e.length : 0,
            d = Hg(0, l, this.__views__),
            w = d.start,
            _ = d.end,
            A = _ - w,
            M = c ? _ : w - 1,
            j = this.__iteratees__,
            H = j.length,
            Q = 0,
            te = Jt(A, this.__takeCount__);
          if (!o || (!c && l == A && te == A)) return Ju(e, this.__actions__);
          var oe = [];
          e: for (; A-- && Q < te; ) {
            M += i;
            for (var Ee = -1, ae = e[M]; ++Ee < H; ) {
              var Se = j[Ee],
                Re = Se.iteratee,
                Er = Se.type,
                ir = Re(ae);
              if (Er == x) ae = ir;
              else if (!ir) {
                if (Er == m) continue e;
                break e;
              }
            }
            oe[Q++] = ae;
          }
          return oe;
        }
        (Oe.prototype = vn(Ys.prototype)), (Oe.prototype.constructor = Oe);
        function zi(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Nd() {
          (this.__data__ = kn ? kn(null) : {}), (this.size = 0);
        }
        function $d(e) {
          var i = this.has(e) && delete this.__data__[e];
          return (this.size -= i ? 1 : 0), i;
        }
        function Dd(e) {
          var i = this.__data__;
          if (kn) {
            var o = i[e];
            return o === b ? r : o;
          }
          return Ue.call(i, e) ? i[e] : r;
        }
        function Ld(e) {
          var i = this.__data__;
          return kn ? i[e] !== r : Ue.call(i, e);
        }
        function Fd(e, i) {
          var o = this.__data__;
          return (this.size += this.has(e) ? 0 : 1), (o[e] = kn && i === r ? b : i), this;
        }
        (zi.prototype.clear = Nd),
          (zi.prototype.delete = $d),
          (zi.prototype.get = Dd),
          (zi.prototype.has = Ld),
          (zi.prototype.set = Fd);
        function ii(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function Md() {
          (this.__data__ = []), (this.size = 0);
        }
        function jd(e) {
          var i = this.__data__,
            o = Xs(i, e);
          if (o < 0) return !1;
          var c = i.length - 1;
          return o == c ? i.pop() : Ks.call(i, o, 1), --this.size, !0;
        }
        function Ud(e) {
          var i = this.__data__,
            o = Xs(i, e);
          return o < 0 ? r : i[o][1];
        }
        function qd(e) {
          return Xs(this.__data__, e) > -1;
        }
        function zd(e, i) {
          var o = this.__data__,
            c = Xs(o, e);
          return c < 0 ? (++this.size, o.push([e, i])) : (o[c][1] = i), this;
        }
        (ii.prototype.clear = Md),
          (ii.prototype.delete = jd),
          (ii.prototype.get = Ud),
          (ii.prototype.has = qd),
          (ii.prototype.set = zd);
        function ni(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.clear(); ++i < o; ) {
            var c = e[i];
            this.set(c[0], c[1]);
          }
        }
        function kd() {
          (this.size = 0),
            (this.__data__ = { hash: new zi(), map: new (qn || ii)(), string: new zi() });
        }
        function Hd(e) {
          var i = ho(this, e).delete(e);
          return (this.size -= i ? 1 : 0), i;
        }
        function Bd(e) {
          return ho(this, e).get(e);
        }
        function Kd(e) {
          return ho(this, e).has(e);
        }
        function Vd(e, i) {
          var o = ho(this, e),
            c = o.size;
          return o.set(e, i), (this.size += o.size == c ? 0 : 1), this;
        }
        (ni.prototype.clear = kd),
          (ni.prototype.delete = Hd),
          (ni.prototype.get = Bd),
          (ni.prototype.has = Kd),
          (ni.prototype.set = Vd);
        function ki(e) {
          var i = -1,
            o = e == null ? 0 : e.length;
          for (this.__data__ = new ni(); ++i < o; ) this.add(e[i]);
        }
        function Wd(e) {
          return this.__data__.set(e, b), this;
        }
        function Gd(e) {
          return this.__data__.has(e);
        }
        (ki.prototype.add = ki.prototype.push = Wd), (ki.prototype.has = Gd);
        function jr(e) {
          var i = (this.__data__ = new ii(e));
          this.size = i.size;
        }
        function Jd() {
          (this.__data__ = new ii()), (this.size = 0);
        }
        function Qd(e) {
          var i = this.__data__,
            o = i.delete(e);
          return (this.size = i.size), o;
        }
        function Yd(e) {
          return this.__data__.get(e);
        }
        function Xd(e) {
          return this.__data__.has(e);
        }
        function Zd(e, i) {
          var o = this.__data__;
          if (o instanceof ii) {
            var c = o.__data__;
            if (!qn || c.length < a - 1) return c.push([e, i]), (this.size = ++o.size), this;
            o = this.__data__ = new ni(c);
          }
          return o.set(e, i), (this.size = o.size), this;
        }
        (jr.prototype.clear = Jd),
          (jr.prototype.delete = Qd),
          (jr.prototype.get = Yd),
          (jr.prototype.has = Xd),
          (jr.prototype.set = Zd);
        function Pu(e, i) {
          var o = we(e),
            c = !o && Wi(e),
            l = !o && !c && Ri(e),
            d = !o && !c && !l && _n(e),
            w = o || c || l || d,
            _ = w ? ma(e.length, ud) : [],
            A = _.length;
          for (var M in e)
            (i || Ue.call(e, M)) &&
              !(
                w &&
                (M == 'length' ||
                  (l && (M == 'offset' || M == 'parent')) ||
                  (d && (M == 'buffer' || M == 'byteLength' || M == 'byteOffset')) ||
                  ci(M, A))
              ) &&
              _.push(M);
          return _;
        }
        function Ou(e) {
          var i = e.length;
          return i ? e[La(0, i - 1)] : r;
        }
        function eg(e, i) {
          return lo(hr(e), Hi(i, 0, e.length));
        }
        function tg(e) {
          return lo(hr(e));
        }
        function Sa(e, i, o) {
          ((o !== r && !Ur(e[i], o)) || (o === r && !(i in e))) && si(e, i, o);
        }
        function Bn(e, i, o) {
          var c = e[i];
          (!(Ue.call(e, i) && Ur(c, o)) || (o === r && !(i in e))) && si(e, i, o);
        }
        function Xs(e, i) {
          for (var o = e.length; o--; ) if (Ur(e[o][0], i)) return o;
          return -1;
        }
        function rg(e, i, o, c) {
          return (
            Si(e, function (l, d, w) {
              i(c, l, o(l), w);
            }),
            c
          );
        }
        function Au(e, i) {
          return e && Qr(i, zt(i), e);
        }
        function ig(e, i) {
          return e && Qr(i, fr(i), e);
        }
        function si(e, i, o) {
          i == '__proto__' && Vs
            ? Vs(e, i, { configurable: !0, enumerable: !0, value: o, writable: !0 })
            : (e[i] = o);
        }
        function Pa(e, i) {
          for (var o = -1, c = i.length, l = N(c), d = e == null; ++o < c; )
            l[o] = d ? r : oc(e, i[o]);
          return l;
        }
        function Hi(e, i, o) {
          return e === e && (o !== r && (e = e <= o ? e : o), i !== r && (e = e >= i ? e : i)), e;
        }
        function Cr(e, i, o, c, l, d) {
          var w,
            _ = i & O,
            A = i & T,
            M = i & U;
          if ((o && (w = l ? o(e, c, l, d) : o(e)), w !== r)) return w;
          if (!ht(e)) return e;
          var j = we(e);
          if (j) {
            if (((w = Kg(e)), !_)) return hr(e, w);
          } else {
            var H = Qt(e),
              Q = H == ee || H == ge;
            if (Ri(e)) return Xu(e, _);
            if (H == Pe || H == Ie || (Q && !l)) {
              if (((w = A || Q ? {} : vh(e)), !_)) return A ? Dg(e, ig(w, e)) : $g(e, Au(w, e));
            } else {
              if (!ke[H]) return l ? e : {};
              w = Vg(e, H, _);
            }
          }
          d || (d = new jr());
          var te = d.get(e);
          if (te) return te;
          d.set(e, w),
            Vh(e)
              ? e.forEach(function (ae) {
                  w.add(Cr(ae, i, o, ae, e, d));
                })
              : Bh(e) &&
                e.forEach(function (ae, Se) {
                  w.set(Se, Cr(ae, i, o, Se, e, d));
                });
          var oe = M ? (A ? Va : Ka) : A ? fr : zt,
            Ee = j ? r : oe(e);
          return (
            Or(Ee || e, function (ae, Se) {
              Ee && ((Se = ae), (ae = e[Se])), Bn(w, Se, Cr(ae, i, o, Se, e, d));
            }),
            w
          );
        }
        function ng(e) {
          var i = zt(e);
          return function (o) {
            return Ru(o, e, i);
          };
        }
        function Ru(e, i, o) {
          var c = o.length;
          if (e == null) return !c;
          for (e = Je(e); c--; ) {
            var l = o[c],
              d = i[l],
              w = e[l];
            if ((w === r && !(l in e)) || !d(w)) return !1;
          }
          return !0;
        }
        function Cu(e, i, o) {
          if (typeof e != 'function') throw new Ar(f);
          return Yn(function () {
            e.apply(r, o);
          }, i);
        }
        function Kn(e, i, o, c) {
          var l = -1,
            d = Ls,
            w = !0,
            _ = e.length,
            A = [],
            M = i.length;
          if (!_) return A;
          o && (i = st(i, wr(o))),
            c ? ((d = fa), (w = !1)) : i.length >= a && ((d = jn), (w = !1), (i = new ki(i)));
          e: for (; ++l < _; ) {
            var j = e[l],
              H = o == null ? j : o(j);
            if (((j = c || j !== 0 ? j : 0), w && H === H)) {
              for (var Q = M; Q--; ) if (i[Q] === H) continue e;
              A.push(j);
            } else d(i, H, c) || A.push(j);
          }
          return A;
        }
        var Si = ih(Jr),
          Tu = ih(Aa, !0);
        function sg(e, i) {
          var o = !0;
          return (
            Si(e, function (c, l, d) {
              return (o = !!i(c, l, d)), o;
            }),
            o
          );
        }
        function Zs(e, i, o) {
          for (var c = -1, l = e.length; ++c < l; ) {
            var d = e[c],
              w = i(d);
            if (w != null && (_ === r ? w === w && !_r(w) : o(w, _)))
              var _ = w,
                A = d;
          }
          return A;
        }
        function og(e, i, o, c) {
          var l = e.length;
          for (
            o = be(o),
              o < 0 && (o = -o > l ? 0 : l + o),
              c = c === r || c > l ? l : be(c),
              c < 0 && (c += l),
              c = o > c ? 0 : Gh(c);
            o < c;

          )
            e[o++] = i;
          return e;
        }
        function Nu(e, i) {
          var o = [];
          return (
            Si(e, function (c, l, d) {
              i(c, l, d) && o.push(c);
            }),
            o
          );
        }
        function Wt(e, i, o, c, l) {
          var d = -1,
            w = e.length;
          for (o || (o = Gg), l || (l = []); ++d < w; ) {
            var _ = e[d];
            i > 0 && o(_) ? (i > 1 ? Wt(_, i - 1, o, c, l) : Ei(l, _)) : c || (l[l.length] = _);
          }
          return l;
        }
        var Oa = nh(),
          $u = nh(!0);
        function Jr(e, i) {
          return e && Oa(e, i, zt);
        }
        function Aa(e, i) {
          return e && $u(e, i, zt);
        }
        function eo(e, i) {
          return _i(i, function (o) {
            return ui(e[o]);
          });
        }
        function Bi(e, i) {
          i = Oi(i, e);
          for (var o = 0, c = i.length; e != null && o < c; ) e = e[Yr(i[o++])];
          return o && o == c ? e : r;
        }
        function Du(e, i, o) {
          var c = i(e);
          return we(e) ? c : Ei(c, o(e));
        }
        function tr(e) {
          return e == null ? (e === r ? ct : De) : qi && qi in Je(e) ? kg(e) : ty(e);
        }
        function Ra(e, i) {
          return e > i;
        }
        function ag(e, i) {
          return e != null && Ue.call(e, i);
        }
        function cg(e, i) {
          return e != null && i in Je(e);
        }
        function ug(e, i, o) {
          return e >= Jt(i, o) && e < jt(i, o);
        }
        function Ca(e, i, o) {
          for (
            var c = o ? fa : Ls, l = e[0].length, d = e.length, w = d, _ = N(d), A = 1 / 0, M = [];
            w--;

          ) {
            var j = e[w];
            w && i && (j = st(j, wr(i))),
              (A = Jt(j.length, A)),
              (_[w] = !o && (i || (l >= 120 && j.length >= 120)) ? new ki(w && j) : r);
          }
          j = e[0];
          var H = -1,
            Q = _[0];
          e: for (; ++H < l && M.length < A; ) {
            var te = j[H],
              oe = i ? i(te) : te;
            if (((te = o || te !== 0 ? te : 0), !(Q ? jn(Q, oe) : c(M, oe, o)))) {
              for (w = d; --w; ) {
                var Ee = _[w];
                if (!(Ee ? jn(Ee, oe) : c(e[w], oe, o))) continue e;
              }
              Q && Q.push(oe), M.push(te);
            }
          }
          return M;
        }
        function hg(e, i, o, c) {
          return (
            Jr(e, function (l, d, w) {
              i(c, o(l), d, w);
            }),
            c
          );
        }
        function Vn(e, i, o) {
          (i = Oi(i, e)), (e = _h(e, i));
          var c = e == null ? e : e[Yr(Nr(i))];
          return c == null ? r : qt(c, e, o);
        }
        function Lu(e) {
          return mt(e) && tr(e) == Ie;
        }
        function lg(e) {
          return mt(e) && tr(e) == $e;
        }
        function fg(e) {
          return mt(e) && tr(e) == R;
        }
        function Wn(e, i, o, c, l) {
          return e === i
            ? !0
            : e == null || i == null || (!mt(e) && !mt(i))
              ? e !== e && i !== i
              : pg(e, i, o, c, Wn, l);
        }
        function pg(e, i, o, c, l, d) {
          var w = we(e),
            _ = we(i),
            A = w ? St : Qt(e),
            M = _ ? St : Qt(i);
          (A = A == Ie ? Pe : A), (M = M == Ie ? Pe : M);
          var j = A == Pe,
            H = M == Pe,
            Q = A == M;
          if (Q && Ri(e)) {
            if (!Ri(i)) return !1;
            (w = !0), (j = !1);
          }
          if (Q && !j)
            return d || (d = new jr()), w || _n(e) ? dh(e, i, o, c, l, d) : qg(e, i, A, o, c, l, d);
          if (!(o & C)) {
            var te = j && Ue.call(e, '__wrapped__'),
              oe = H && Ue.call(i, '__wrapped__');
            if (te || oe) {
              var Ee = te ? e.value() : e,
                ae = oe ? i.value() : i;
              return d || (d = new jr()), l(Ee, ae, o, c, d);
            }
          }
          return Q ? (d || (d = new jr()), zg(e, i, o, c, l, d)) : !1;
        }
        function dg(e) {
          return mt(e) && Qt(e) == _e;
        }
        function Ta(e, i, o, c) {
          var l = o.length,
            d = l,
            w = !c;
          if (e == null) return !d;
          for (e = Je(e); l--; ) {
            var _ = o[l];
            if (w && _[2] ? _[1] !== e[_[0]] : !(_[0] in e)) return !1;
          }
          for (; ++l < d; ) {
            _ = o[l];
            var A = _[0],
              M = e[A],
              j = _[1];
            if (w && _[2]) {
              if (M === r && !(A in e)) return !1;
            } else {
              var H = new jr();
              if (c) var Q = c(M, j, A, e, i, H);
              if (!(Q === r ? Wn(j, M, C | K, c, H) : Q)) return !1;
            }
          }
          return !0;
        }
        function Fu(e) {
          if (!ht(e) || Qg(e)) return !1;
          var i = ui(e) ? dd : Qo;
          return i.test(Vi(e));
        }
        function gg(e) {
          return mt(e) && tr(e) == at;
        }
        function yg(e) {
          return mt(e) && Qt(e) == Fe;
        }
        function vg(e) {
          return mt(e) && mo(e.length) && !!Ve[tr(e)];
        }
        function Mu(e) {
          return typeof e == 'function'
            ? e
            : e == null
              ? pr
              : typeof e == 'object'
                ? we(e)
                  ? qu(e[0], e[1])
                  : Uu(e)
                : sl(e);
        }
        function Na(e) {
          if (!Qn(e)) return bd(e);
          var i = [];
          for (var o in Je(e)) Ue.call(e, o) && o != 'constructor' && i.push(o);
          return i;
        }
        function mg(e) {
          if (!ht(e)) return ey(e);
          var i = Qn(e),
            o = [];
          for (var c in e) (c == 'constructor' && (i || !Ue.call(e, c))) || o.push(c);
          return o;
        }
        function $a(e, i) {
          return e < i;
        }
        function ju(e, i) {
          var o = -1,
            c = lr(e) ? N(e.length) : [];
          return (
            Si(e, function (l, d, w) {
              c[++o] = i(l, d, w);
            }),
            c
          );
        }
        function Uu(e) {
          var i = Ga(e);
          return i.length == 1 && i[0][2]
            ? wh(i[0][0], i[0][1])
            : function (o) {
                return o === e || Ta(o, e, i);
              };
        }
        function qu(e, i) {
          return Qa(e) && mh(i)
            ? wh(Yr(e), i)
            : function (o) {
                var c = oc(o, e);
                return c === r && c === i ? ac(o, e) : Wn(i, c, C | K);
              };
        }
        function to(e, i, o, c, l) {
          e !== i &&
            Oa(
              i,
              function (d, w) {
                if ((l || (l = new jr()), ht(d))) wg(e, i, w, o, to, c, l);
                else {
                  var _ = c ? c(Xa(e, w), d, w + '', e, i, l) : r;
                  _ === r && (_ = d), Sa(e, w, _);
                }
              },
              fr,
            );
        }
        function wg(e, i, o, c, l, d, w) {
          var _ = Xa(e, o),
            A = Xa(i, o),
            M = w.get(A);
          if (M) {
            Sa(e, o, M);
            return;
          }
          var j = d ? d(_, A, o + '', e, i, w) : r,
            H = j === r;
          if (H) {
            var Q = we(A),
              te = !Q && Ri(A),
              oe = !Q && !te && _n(A);
            (j = A),
              Q || te || oe
                ? we(_)
                  ? (j = _)
                  : Et(_)
                    ? (j = hr(_))
                    : te
                      ? ((H = !1), (j = Xu(A, !0)))
                      : oe
                        ? ((H = !1), (j = Zu(A, !0)))
                        : (j = [])
                : Xn(A) || Wi(A)
                  ? ((j = _), Wi(_) ? (j = Jh(_)) : (!ht(_) || ui(_)) && (j = vh(A)))
                  : (H = !1);
          }
          H && (w.set(A, j), l(j, A, c, d, w), w.delete(A)), Sa(e, o, j);
        }
        function zu(e, i) {
          var o = e.length;
          if (o) return (i += i < 0 ? o : 0), ci(i, o) ? e[i] : r;
        }
        function ku(e, i, o) {
          i.length
            ? (i = st(i, function (d) {
                return we(d)
                  ? function (w) {
                      return Bi(w, d.length === 1 ? d[0] : d);
                    }
                  : d;
              }))
            : (i = [pr]);
          var c = -1;
          i = st(i, wr(se()));
          var l = ju(e, function (d, w, _) {
            var A = st(i, function (M) {
              return M(d);
            });
            return { criteria: A, index: ++c, value: d };
          });
          return Vp(l, function (d, w) {
            return Ng(d, w, o);
          });
        }
        function bg(e, i) {
          return Hu(e, i, function (o, c) {
            return ac(e, c);
          });
        }
        function Hu(e, i, o) {
          for (var c = -1, l = i.length, d = {}; ++c < l; ) {
            var w = i[c],
              _ = Bi(e, w);
            o(_, w) && Gn(d, Oi(w, e), _);
          }
          return d;
        }
        function _g(e) {
          return function (i) {
            return Bi(i, e);
          };
        }
        function Da(e, i, o, c) {
          var l = c ? Kp : hn,
            d = -1,
            w = i.length,
            _ = e;
          for (e === i && (i = hr(i)), o && (_ = st(e, wr(o))); ++d < w; )
            for (var A = 0, M = i[d], j = o ? o(M) : M; (A = l(_, j, A, c)) > -1; )
              _ !== e && Ks.call(_, A, 1), Ks.call(e, A, 1);
          return e;
        }
        function Bu(e, i) {
          for (var o = e ? i.length : 0, c = o - 1; o--; ) {
            var l = i[o];
            if (o == c || l !== d) {
              var d = l;
              ci(l) ? Ks.call(e, l, 1) : ja(e, l);
            }
          }
          return e;
        }
        function La(e, i) {
          return e + Gs(xu() * (i - e + 1));
        }
        function Eg(e, i, o, c) {
          for (var l = -1, d = jt(Ws((i - e) / (o || 1)), 0), w = N(d); d--; )
            (w[c ? d : ++l] = e), (e += o);
          return w;
        }
        function Fa(e, i) {
          var o = '';
          if (!e || i < 1 || i > V) return o;
          do i % 2 && (o += e), (i = Gs(i / 2)), i && (e += e);
          while (i);
          return o;
        }
        function xe(e, i) {
          return Za(bh(e, i, pr), e + '');
        }
        function Ig(e) {
          return Ou(En(e));
        }
        function xg(e, i) {
          var o = En(e);
          return lo(o, Hi(i, 0, o.length));
        }
        function Gn(e, i, o, c) {
          if (!ht(e)) return e;
          i = Oi(i, e);
          for (var l = -1, d = i.length, w = d - 1, _ = e; _ != null && ++l < d; ) {
            var A = Yr(i[l]),
              M = o;
            if (A === '__proto__' || A === 'constructor' || A === 'prototype') return e;
            if (l != w) {
              var j = _[A];
              (M = c ? c(j, A, _) : r), M === r && (M = ht(j) ? j : ci(i[l + 1]) ? [] : {});
            }
            Bn(_, A, M), (_ = _[A]);
          }
          return e;
        }
        var Ku = Js
            ? function (e, i) {
                return Js.set(e, i), e;
              }
            : pr,
          Sg = Vs
            ? function (e, i) {
                return Vs(e, 'toString', {
                  configurable: !0,
                  enumerable: !1,
                  value: uc(i),
                  writable: !0,
                });
              }
            : pr;
        function Pg(e) {
          return lo(En(e));
        }
        function Tr(e, i, o) {
          var c = -1,
            l = e.length;
          i < 0 && (i = -i > l ? 0 : l + i),
            (o = o > l ? l : o),
            o < 0 && (o += l),
            (l = i > o ? 0 : (o - i) >>> 0),
            (i >>>= 0);
          for (var d = N(l); ++c < l; ) d[c] = e[c + i];
          return d;
        }
        function Og(e, i) {
          var o;
          return (
            Si(e, function (c, l, d) {
              return (o = i(c, l, d)), !o;
            }),
            !!o
          );
        }
        function ro(e, i, o) {
          var c = 0,
            l = e == null ? c : e.length;
          if (typeof i == 'number' && i === i && l <= Be) {
            for (; c < l; ) {
              var d = (c + l) >>> 1,
                w = e[d];
              w !== null && !_r(w) && (o ? w <= i : w < i) ? (c = d + 1) : (l = d);
            }
            return l;
          }
          return Ma(e, i, pr, o);
        }
        function Ma(e, i, o, c) {
          var l = 0,
            d = e == null ? 0 : e.length;
          if (d === 0) return 0;
          i = o(i);
          for (var w = i !== i, _ = i === null, A = _r(i), M = i === r; l < d; ) {
            var j = Gs((l + d) / 2),
              H = o(e[j]),
              Q = H !== r,
              te = H === null,
              oe = H === H,
              Ee = _r(H);
            if (w) var ae = c || oe;
            else
              M
                ? (ae = oe && (c || Q))
                : _
                  ? (ae = oe && Q && (c || !te))
                  : A
                    ? (ae = oe && Q && !te && (c || !Ee))
                    : te || Ee
                      ? (ae = !1)
                      : (ae = c ? H <= i : H < i);
            ae ? (l = j + 1) : (d = j);
          }
          return Jt(d, Qe);
        }
        function Vu(e, i) {
          for (var o = -1, c = e.length, l = 0, d = []; ++o < c; ) {
            var w = e[o],
              _ = i ? i(w) : w;
            if (!o || !Ur(_, A)) {
              var A = _;
              d[l++] = w === 0 ? 0 : w;
            }
          }
          return d;
        }
        function Wu(e) {
          return typeof e == 'number' ? e : _r(e) ? B : +e;
        }
        function br(e) {
          if (typeof e == 'string') return e;
          if (we(e)) return st(e, br) + '';
          if (_r(e)) return Su ? Su.call(e) : '';
          var i = e + '';
          return i == '0' && 1 / e == -ce ? '-0' : i;
        }
        function Pi(e, i, o) {
          var c = -1,
            l = Ls,
            d = e.length,
            w = !0,
            _ = [],
            A = _;
          if (o) (w = !1), (l = fa);
          else if (d >= a) {
            var M = i ? null : jg(e);
            if (M) return Ms(M);
            (w = !1), (l = jn), (A = new ki());
          } else A = i ? [] : _;
          e: for (; ++c < d; ) {
            var j = e[c],
              H = i ? i(j) : j;
            if (((j = o || j !== 0 ? j : 0), w && H === H)) {
              for (var Q = A.length; Q--; ) if (A[Q] === H) continue e;
              i && A.push(H), _.push(j);
            } else l(A, H, o) || (A !== _ && A.push(H), _.push(j));
          }
          return _;
        }
        function ja(e, i) {
          return (i = Oi(i, e)), (e = _h(e, i)), e == null || delete e[Yr(Nr(i))];
        }
        function Gu(e, i, o, c) {
          return Gn(e, i, o(Bi(e, i)), c);
        }
        function io(e, i, o, c) {
          for (var l = e.length, d = c ? l : -1; (c ? d-- : ++d < l) && i(e[d], d, e); );
          return o ? Tr(e, c ? 0 : d, c ? d + 1 : l) : Tr(e, c ? d + 1 : 0, c ? l : d);
        }
        function Ju(e, i) {
          var o = e;
          return (
            o instanceof Oe && (o = o.value()),
            pa(
              i,
              function (c, l) {
                return l.func.apply(l.thisArg, Ei([c], l.args));
              },
              o,
            )
          );
        }
        function Ua(e, i, o) {
          var c = e.length;
          if (c < 2) return c ? Pi(e[0]) : [];
          for (var l = -1, d = N(c); ++l < c; )
            for (var w = e[l], _ = -1; ++_ < c; ) _ != l && (d[l] = Kn(d[l] || w, e[_], i, o));
          return Pi(Wt(d, 1), i, o);
        }
        function Qu(e, i, o) {
          for (var c = -1, l = e.length, d = i.length, w = {}; ++c < l; ) {
            var _ = c < d ? i[c] : r;
            o(w, e[c], _);
          }
          return w;
        }
        function qa(e) {
          return Et(e) ? e : [];
        }
        function za(e) {
          return typeof e == 'function' ? e : pr;
        }
        function Oi(e, i) {
          return we(e) ? e : Qa(e, i) ? [e] : Sh(Me(e));
        }
        var Ag = xe;
        function Ai(e, i, o) {
          var c = e.length;
          return (o = o === r ? c : o), !i && o >= c ? e : Tr(e, i, o);
        }
        var Yu =
          gd ||
          function (e) {
            return Ae.clearTimeout(e);
          };
        function Xu(e, i) {
          if (i) return e.slice();
          var o = e.length,
            c = wu ? wu(o) : new e.constructor(o);
          return e.copy(c), c;
        }
        function ka(e) {
          var i = new e.constructor(e.byteLength);
          return new Hs(i).set(new Hs(e)), i;
        }
        function Rg(e, i) {
          var o = i ? ka(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.byteLength);
        }
        function Cg(e) {
          var i = new e.constructor(e.source, Sr.exec(e));
          return (i.lastIndex = e.lastIndex), i;
        }
        function Tg(e) {
          return Hn ? Je(Hn.call(e)) : {};
        }
        function Zu(e, i) {
          var o = i ? ka(e.buffer) : e.buffer;
          return new e.constructor(o, e.byteOffset, e.length);
        }
        function eh(e, i) {
          if (e !== i) {
            var o = e !== r,
              c = e === null,
              l = e === e,
              d = _r(e),
              w = i !== r,
              _ = i === null,
              A = i === i,
              M = _r(i);
            if (
              (!_ && !M && !d && e > i) ||
              (d && w && A && !_ && !M) ||
              (c && w && A) ||
              (!o && A) ||
              !l
            )
              return 1;
            if (
              (!c && !d && !M && e < i) ||
              (M && o && l && !c && !d) ||
              (_ && o && l) ||
              (!w && l) ||
              !A
            )
              return -1;
          }
          return 0;
        }
        function Ng(e, i, o) {
          for (var c = -1, l = e.criteria, d = i.criteria, w = l.length, _ = o.length; ++c < w; ) {
            var A = eh(l[c], d[c]);
            if (A) {
              if (c >= _) return A;
              var M = o[c];
              return A * (M == 'desc' ? -1 : 1);
            }
          }
          return e.index - i.index;
        }
        function th(e, i, o, c) {
          for (
            var l = -1,
              d = e.length,
              w = o.length,
              _ = -1,
              A = i.length,
              M = jt(d - w, 0),
              j = N(A + M),
              H = !c;
            ++_ < A;

          )
            j[_] = i[_];
          for (; ++l < w; ) (H || l < d) && (j[o[l]] = e[l]);
          for (; M--; ) j[_++] = e[l++];
          return j;
        }
        function rh(e, i, o, c) {
          for (
            var l = -1,
              d = e.length,
              w = -1,
              _ = o.length,
              A = -1,
              M = i.length,
              j = jt(d - _, 0),
              H = N(j + M),
              Q = !c;
            ++l < j;

          )
            H[l] = e[l];
          for (var te = l; ++A < M; ) H[te + A] = i[A];
          for (; ++w < _; ) (Q || l < d) && (H[te + o[w]] = e[l++]);
          return H;
        }
        function hr(e, i) {
          var o = -1,
            c = e.length;
          for (i || (i = N(c)); ++o < c; ) i[o] = e[o];
          return i;
        }
        function Qr(e, i, o, c) {
          var l = !o;
          o || (o = {});
          for (var d = -1, w = i.length; ++d < w; ) {
            var _ = i[d],
              A = c ? c(o[_], e[_], _, o, e) : r;
            A === r && (A = e[_]), l ? si(o, _, A) : Bn(o, _, A);
          }
          return o;
        }
        function $g(e, i) {
          return Qr(e, Ja(e), i);
        }
        function Dg(e, i) {
          return Qr(e, gh(e), i);
        }
        function no(e, i) {
          return function (o, c) {
            var l = we(o) ? Up : rg,
              d = i ? i() : {};
            return l(o, e, se(c, 2), d);
          };
        }
        function mn(e) {
          return xe(function (i, o) {
            var c = -1,
              l = o.length,
              d = l > 1 ? o[l - 1] : r,
              w = l > 2 ? o[2] : r;
            for (
              d = e.length > 3 && typeof d == 'function' ? (l--, d) : r,
                w && rr(o[0], o[1], w) && ((d = l < 3 ? r : d), (l = 1)),
                i = Je(i);
              ++c < l;

            ) {
              var _ = o[c];
              _ && e(i, _, c, d);
            }
            return i;
          });
        }
        function ih(e, i) {
          return function (o, c) {
            if (o == null) return o;
            if (!lr(o)) return e(o, c);
            for (
              var l = o.length, d = i ? l : -1, w = Je(o);
              (i ? d-- : ++d < l) && c(w[d], d, w) !== !1;

            );
            return o;
          };
        }
        function nh(e) {
          return function (i, o, c) {
            for (var l = -1, d = Je(i), w = c(i), _ = w.length; _--; ) {
              var A = w[e ? _ : ++l];
              if (o(d[A], A, d) === !1) break;
            }
            return i;
          };
        }
        function Lg(e, i, o) {
          var c = i & ie,
            l = Jn(e);
          function d() {
            var w = this && this !== Ae && this instanceof d ? l : e;
            return w.apply(c ? o : this, arguments);
          }
          return d;
        }
        function sh(e) {
          return function (i) {
            i = Me(i);
            var o = ln(i) ? Mr(i) : r,
              c = o ? o[0] : i.charAt(0),
              l = o ? Ai(o, 1).join('') : i.slice(1);
            return c[e]() + l;
          };
        }
        function wn(e) {
          return function (i) {
            return pa(il(rl(i).replace(Fn, '')), e, '');
          };
        }
        function Jn(e) {
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return new e();
              case 1:
                return new e(i[0]);
              case 2:
                return new e(i[0], i[1]);
              case 3:
                return new e(i[0], i[1], i[2]);
              case 4:
                return new e(i[0], i[1], i[2], i[3]);
              case 5:
                return new e(i[0], i[1], i[2], i[3], i[4]);
              case 6:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5]);
              case 7:
                return new e(i[0], i[1], i[2], i[3], i[4], i[5], i[6]);
            }
            var o = vn(e.prototype),
              c = e.apply(o, i);
            return ht(c) ? c : o;
          };
        }
        function Fg(e, i, o) {
          var c = Jn(e);
          function l() {
            for (var d = arguments.length, w = N(d), _ = d, A = bn(l); _--; ) w[_] = arguments[_];
            var M = d < 3 && w[0] !== A && w[d - 1] !== A ? [] : Ii(w, A);
            if (((d -= M.length), d < o)) return hh(e, i, so, l.placeholder, r, w, M, r, r, o - d);
            var j = this && this !== Ae && this instanceof l ? c : e;
            return qt(j, this, w);
          }
          return l;
        }
        function oh(e) {
          return function (i, o, c) {
            var l = Je(i);
            if (!lr(i)) {
              var d = se(o, 3);
              (i = zt(i)),
                (o = function (_) {
                  return d(l[_], _, l);
                });
            }
            var w = e(i, o, c);
            return w > -1 ? l[d ? i[w] : w] : r;
          };
        }
        function ah(e) {
          return ai(function (i) {
            var o = i.length,
              c = o,
              l = Rr.prototype.thru;
            for (e && i.reverse(); c--; ) {
              var d = i[c];
              if (typeof d != 'function') throw new Ar(f);
              if (l && !w && uo(d) == 'wrapper') var w = new Rr([], !0);
            }
            for (c = w ? c : o; ++c < o; ) {
              d = i[c];
              var _ = uo(d),
                A = _ == 'wrapper' ? Wa(d) : r;
              A && Ya(A[0]) && A[1] == (z | fe | de | G) && !A[4].length && A[9] == 1
                ? (w = w[uo(A[0])].apply(w, A[3]))
                : (w = d.length == 1 && Ya(d) ? w[_]() : w.thru(d));
            }
            return function () {
              var M = arguments,
                j = M[0];
              if (w && M.length == 1 && we(j)) return w.plant(j).value();
              for (var H = 0, Q = o ? i[H].apply(this, M) : j; ++H < o; ) Q = i[H].call(this, Q);
              return Q;
            };
          });
        }
        function so(e, i, o, c, l, d, w, _, A, M) {
          var j = i & z,
            H = i & ie,
            Q = i & he,
            te = i & (fe | pe),
            oe = i & ve,
            Ee = Q ? r : Jn(e);
          function ae() {
            for (var Se = arguments.length, Re = N(Se), Er = Se; Er--; ) Re[Er] = arguments[Er];
            if (te)
              var ir = bn(ae),
                Ir = Gp(Re, ir);
            if (
              (c && (Re = th(Re, c, l, te)), d && (Re = rh(Re, d, w, te)), (Se -= Ir), te && Se < M)
            ) {
              var It = Ii(Re, ir);
              return hh(e, i, so, ae.placeholder, o, Re, It, _, A, M - Se);
            }
            var qr = H ? o : this,
              li = Q ? qr[e] : e;
            return (
              (Se = Re.length),
              _ ? (Re = ry(Re, _)) : oe && Se > 1 && Re.reverse(),
              j && A < Se && (Re.length = A),
              this && this !== Ae && this instanceof ae && (li = Ee || Jn(li)),
              li.apply(qr, Re)
            );
          }
          return ae;
        }
        function ch(e, i) {
          return function (o, c) {
            return hg(o, e, i(c), {});
          };
        }
        function oo(e, i) {
          return function (o, c) {
            var l;
            if (o === r && c === r) return i;
            if ((o !== r && (l = o), c !== r)) {
              if (l === r) return c;
              typeof o == 'string' || typeof c == 'string'
                ? ((o = br(o)), (c = br(c)))
                : ((o = Wu(o)), (c = Wu(c))),
                (l = e(o, c));
            }
            return l;
          };
        }
        function Ha(e) {
          return ai(function (i) {
            return (
              (i = st(i, wr(se()))),
              xe(function (o) {
                var c = this;
                return e(i, function (l) {
                  return qt(l, c, o);
                });
              })
            );
          });
        }
        function ao(e, i) {
          i = i === r ? ' ' : br(i);
          var o = i.length;
          if (o < 2) return o ? Fa(i, e) : i;
          var c = Fa(i, Ws(e / fn(i)));
          return ln(i) ? Ai(Mr(c), 0, e).join('') : c.slice(0, e);
        }
        function Mg(e, i, o, c) {
          var l = i & ie,
            d = Jn(e);
          function w() {
            for (
              var _ = -1,
                A = arguments.length,
                M = -1,
                j = c.length,
                H = N(j + A),
                Q = this && this !== Ae && this instanceof w ? d : e;
              ++M < j;

            )
              H[M] = c[M];
            for (; A--; ) H[M++] = arguments[++_];
            return qt(Q, l ? o : this, H);
          }
          return w;
        }
        function uh(e) {
          return function (i, o, c) {
            return (
              c && typeof c != 'number' && rr(i, o, c) && (o = c = r),
              (i = hi(i)),
              o === r ? ((o = i), (i = 0)) : (o = hi(o)),
              (c = c === r ? (i < o ? 1 : -1) : hi(c)),
              Eg(i, o, c, e)
            );
          };
        }
        function co(e) {
          return function (i, o) {
            return (
              (typeof i == 'string' && typeof o == 'string') || ((i = $r(i)), (o = $r(o))), e(i, o)
            );
          };
        }
        function hh(e, i, o, c, l, d, w, _, A, M) {
          var j = i & fe,
            H = j ? w : r,
            Q = j ? r : w,
            te = j ? d : r,
            oe = j ? r : d;
          (i |= j ? de : L), (i &= ~(j ? L : de)), i & le || (i &= ~(ie | he));
          var Ee = [e, i, l, te, H, oe, Q, _, A, M],
            ae = o.apply(r, Ee);
          return Ya(e) && Eh(ae, Ee), (ae.placeholder = c), Ih(ae, e, i);
        }
        function Ba(e) {
          var i = Mt[e];
          return function (o, c) {
            if (((o = $r(o)), (c = c == null ? 0 : Jt(be(c), 292)), c && Iu(o))) {
              var l = (Me(o) + 'e').split('e'),
                d = i(l[0] + 'e' + (+l[1] + c));
              return (l = (Me(d) + 'e').split('e')), +(l[0] + 'e' + (+l[1] - c));
            }
            return i(o);
          };
        }
        var jg =
          gn && 1 / Ms(new gn([, -0]))[1] == ce
            ? function (e) {
                return new gn(e);
              }
            : fc;
        function lh(e) {
          return function (i) {
            var o = Qt(i);
            return o == _e ? ba(i) : o == Fe ? td(i) : Wp(i, e(i));
          };
        }
        function oi(e, i, o, c, l, d, w, _) {
          var A = i & he;
          if (!A && typeof e != 'function') throw new Ar(f);
          var M = c ? c.length : 0;
          if (
            (M || ((i &= ~(de | L)), (c = l = r)),
            (w = w === r ? w : jt(be(w), 0)),
            (_ = _ === r ? _ : be(_)),
            (M -= l ? l.length : 0),
            i & L)
          ) {
            var j = c,
              H = l;
            c = l = r;
          }
          var Q = A ? r : Wa(e),
            te = [e, i, o, c, l, j, H, d, w, _];
          if (
            (Q && Zg(te, Q),
            (e = te[0]),
            (i = te[1]),
            (o = te[2]),
            (c = te[3]),
            (l = te[4]),
            (_ = te[9] = te[9] === r ? (A ? 0 : e.length) : jt(te[9] - M, 0)),
            !_ && i & (fe | pe) && (i &= ~(fe | pe)),
            !i || i == ie)
          )
            var oe = Lg(e, i, o);
          else
            i == fe || i == pe
              ? (oe = Fg(e, i, _))
              : (i == de || i == (ie | de)) && !l.length
                ? (oe = Mg(e, i, o, c))
                : (oe = so.apply(r, te));
          var Ee = Q ? Ku : Eh;
          return Ih(Ee(oe, te), e, i);
        }
        function fh(e, i, o, c) {
          return e === r || (Ur(e, dn[o]) && !Ue.call(c, o)) ? i : e;
        }
        function ph(e, i, o, c, l, d) {
          return ht(e) && ht(i) && (d.set(i, e), to(e, i, r, ph, d), d.delete(i)), e;
        }
        function Ug(e) {
          return Xn(e) ? r : e;
        }
        function dh(e, i, o, c, l, d) {
          var w = o & C,
            _ = e.length,
            A = i.length;
          if (_ != A && !(w && A > _)) return !1;
          var M = d.get(e),
            j = d.get(i);
          if (M && j) return M == i && j == e;
          var H = -1,
            Q = !0,
            te = o & K ? new ki() : r;
          for (d.set(e, i), d.set(i, e); ++H < _; ) {
            var oe = e[H],
              Ee = i[H];
            if (c) var ae = w ? c(Ee, oe, H, i, e, d) : c(oe, Ee, H, e, i, d);
            if (ae !== r) {
              if (ae) continue;
              Q = !1;
              break;
            }
            if (te) {
              if (
                !da(i, function (Se, Re) {
                  if (!jn(te, Re) && (oe === Se || l(oe, Se, o, c, d))) return te.push(Re);
                })
              ) {
                Q = !1;
                break;
              }
            } else if (!(oe === Ee || l(oe, Ee, o, c, d))) {
              Q = !1;
              break;
            }
          }
          return d.delete(e), d.delete(i), Q;
        }
        function qg(e, i, o, c, l, d, w) {
          switch (o) {
            case Ke:
              if (e.byteLength != i.byteLength || e.byteOffset != i.byteOffset) return !1;
              (e = e.buffer), (i = i.buffer);
            case $e:
              return !(e.byteLength != i.byteLength || !d(new Hs(e), new Hs(i)));
            case $:
            case R:
            case Ne:
              return Ur(+e, +i);
            case I:
              return e.name == i.name && e.message == i.message;
            case at:
            case Xe:
              return e == i + '';
            case _e:
              var _ = ba;
            case Fe:
              var A = c & C;
              if ((_ || (_ = Ms), e.size != i.size && !A)) return !1;
              var M = w.get(e);
              if (M) return M == i;
              (c |= K), w.set(e, i);
              var j = dh(_(e), _(i), c, l, d, w);
              return w.delete(e), j;
            case Ze:
              if (Hn) return Hn.call(e) == Hn.call(i);
          }
          return !1;
        }
        function zg(e, i, o, c, l, d) {
          var w = o & C,
            _ = Ka(e),
            A = _.length,
            M = Ka(i),
            j = M.length;
          if (A != j && !w) return !1;
          for (var H = A; H--; ) {
            var Q = _[H];
            if (!(w ? Q in i : Ue.call(i, Q))) return !1;
          }
          var te = d.get(e),
            oe = d.get(i);
          if (te && oe) return te == i && oe == e;
          var Ee = !0;
          d.set(e, i), d.set(i, e);
          for (var ae = w; ++H < A; ) {
            Q = _[H];
            var Se = e[Q],
              Re = i[Q];
            if (c) var Er = w ? c(Re, Se, Q, i, e, d) : c(Se, Re, Q, e, i, d);
            if (!(Er === r ? Se === Re || l(Se, Re, o, c, d) : Er)) {
              Ee = !1;
              break;
            }
            ae || (ae = Q == 'constructor');
          }
          if (Ee && !ae) {
            var ir = e.constructor,
              Ir = i.constructor;
            ir != Ir &&
              'constructor' in e &&
              'constructor' in i &&
              !(
                typeof ir == 'function' &&
                ir instanceof ir &&
                typeof Ir == 'function' &&
                Ir instanceof Ir
              ) &&
              (Ee = !1);
          }
          return d.delete(e), d.delete(i), Ee;
        }
        function ai(e) {
          return Za(bh(e, r, Rh), e + '');
        }
        function Ka(e) {
          return Du(e, zt, Ja);
        }
        function Va(e) {
          return Du(e, fr, gh);
        }
        var Wa = Js
          ? function (e) {
              return Js.get(e);
            }
          : fc;
        function uo(e) {
          for (var i = e.name + '', o = yn[i], c = Ue.call(yn, i) ? o.length : 0; c--; ) {
            var l = o[c],
              d = l.func;
            if (d == null || d == e) return l.name;
          }
          return i;
        }
        function bn(e) {
          var i = Ue.call(p, 'placeholder') ? p : e;
          return i.placeholder;
        }
        function se() {
          var e = p.iteratee || hc;
          return (e = e === hc ? Mu : e), arguments.length ? e(arguments[0], arguments[1]) : e;
        }
        function ho(e, i) {
          var o = e.__data__;
          return Jg(i) ? o[typeof i == 'string' ? 'string' : 'hash'] : o.map;
        }
        function Ga(e) {
          for (var i = zt(e), o = i.length; o--; ) {
            var c = i[o],
              l = e[c];
            i[o] = [c, l, mh(l)];
          }
          return i;
        }
        function Ki(e, i) {
          var o = Xp(e, i);
          return Fu(o) ? o : r;
        }
        function kg(e) {
          var i = Ue.call(e, qi),
            o = e[qi];
          try {
            e[qi] = r;
            var c = !0;
          } catch {}
          var l = zs.call(e);
          return c && (i ? (e[qi] = o) : delete e[qi]), l;
        }
        var Ja = Ea
            ? function (e) {
                return e == null
                  ? []
                  : ((e = Je(e)),
                    _i(Ea(e), function (i) {
                      return _u.call(e, i);
                    }));
              }
            : pc,
          gh = Ea
            ? function (e) {
                for (var i = []; e; ) Ei(i, Ja(e)), (e = Bs(e));
                return i;
              }
            : pc,
          Qt = tr;
        ((Ia && Qt(new Ia(new ArrayBuffer(1))) != Ke) ||
          (qn && Qt(new qn()) != _e) ||
          (xa && Qt(xa.resolve()) != Pt) ||
          (gn && Qt(new gn()) != Fe) ||
          (zn && Qt(new zn()) != ze)) &&
          (Qt = function (e) {
            var i = tr(e),
              o = i == Pe ? e.constructor : r,
              c = o ? Vi(o) : '';
            if (c)
              switch (c) {
                case xd:
                  return Ke;
                case Sd:
                  return _e;
                case Pd:
                  return Pt;
                case Od:
                  return Fe;
                case Ad:
                  return ze;
              }
            return i;
          });
        function Hg(e, i, o) {
          for (var c = -1, l = o.length; ++c < l; ) {
            var d = o[c],
              w = d.size;
            switch (d.type) {
              case 'drop':
                e += w;
                break;
              case 'dropRight':
                i -= w;
                break;
              case 'take':
                i = Jt(i, e + w);
                break;
              case 'takeRight':
                e = jt(e, i - w);
                break;
            }
          }
          return { start: e, end: i };
        }
        function Bg(e) {
          var i = e.match(Ye);
          return i ? i[1].split(Tt) : [];
        }
        function yh(e, i, o) {
          i = Oi(i, e);
          for (var c = -1, l = i.length, d = !1; ++c < l; ) {
            var w = Yr(i[c]);
            if (!(d = e != null && o(e, w))) break;
            e = e[w];
          }
          return d || ++c != l
            ? d
            : ((l = e == null ? 0 : e.length), !!l && mo(l) && ci(w, l) && (we(e) || Wi(e)));
        }
        function Kg(e) {
          var i = e.length,
            o = new e.constructor(i);
          return (
            i &&
              typeof e[0] == 'string' &&
              Ue.call(e, 'index') &&
              ((o.index = e.index), (o.input = e.input)),
            o
          );
        }
        function vh(e) {
          return typeof e.constructor == 'function' && !Qn(e) ? vn(Bs(e)) : {};
        }
        function Vg(e, i, o) {
          var c = e.constructor;
          switch (i) {
            case $e:
              return ka(e);
            case $:
            case R:
              return new c(+e);
            case Ke:
              return Rg(e, o);
            case lt:
            case je:
            case Ot:
            case Ft:
            case Kt:
            case Vt:
            case Ut:
            case Xt:
            case cr:
              return Zu(e, o);
            case _e:
              return new c();
            case Ne:
            case Xe:
              return new c(e);
            case at:
              return Cg(e);
            case Fe:
              return new c();
            case Ze:
              return Tg(e);
          }
        }
        function Wg(e, i) {
          var o = i.length;
          if (!o) return e;
          var c = o - 1;
          return (
            (i[c] = (o > 1 ? '& ' : '') + i[c]),
            (i = i.join(o > 2 ? ', ' : ' ')),
            e.replace(
              vt,
              `{
/* [wrapped with ` +
                i +
                `] */
`,
            )
          );
        }
        function Gg(e) {
          return we(e) || Wi(e) || !!(Eu && e && e[Eu]);
        }
        function ci(e, i) {
          var o = typeof e;
          return (
            (i = i ?? V),
            !!i && (o == 'number' || (o != 'symbol' && Xo.test(e))) && e > -1 && e % 1 == 0 && e < i
          );
        }
        function rr(e, i, o) {
          if (!ht(o)) return !1;
          var c = typeof i;
          return (c == 'number' ? lr(o) && ci(i, o.length) : c == 'string' && i in o)
            ? Ur(o[i], e)
            : !1;
        }
        function Qa(e, i) {
          if (we(e)) return !1;
          var o = typeof e;
          return o == 'number' || o == 'symbol' || o == 'boolean' || e == null || _r(e)
            ? !0
            : At.test(e) || !nt.test(e) || (i != null && e in Je(i));
        }
        function Jg(e) {
          var i = typeof e;
          return i == 'string' || i == 'number' || i == 'symbol' || i == 'boolean'
            ? e !== '__proto__'
            : e === null;
        }
        function Ya(e) {
          var i = uo(e),
            o = p[i];
          if (typeof o != 'function' || !(i in Oe.prototype)) return !1;
          if (e === o) return !0;
          var c = Wa(o);
          return !!c && e === c[0];
        }
        function Qg(e) {
          return !!mu && mu in e;
        }
        var Yg = Us ? ui : dc;
        function Qn(e) {
          var i = e && e.constructor,
            o = (typeof i == 'function' && i.prototype) || dn;
          return e === o;
        }
        function mh(e) {
          return e === e && !ht(e);
        }
        function wh(e, i) {
          return function (o) {
            return o == null ? !1 : o[e] === i && (i !== r || e in Je(o));
          };
        }
        function Xg(e) {
          var i = yo(e, function (c) {
              return o.size === y && o.clear(), c;
            }),
            o = i.cache;
          return i;
        }
        function Zg(e, i) {
          var o = e[1],
            c = i[1],
            l = o | c,
            d = l < (ie | he | z),
            w =
              (c == z && o == fe) ||
              (c == z && o == G && e[7].length <= i[8]) ||
              (c == (z | G) && i[7].length <= i[8] && o == fe);
          if (!(d || w)) return e;
          c & ie && ((e[2] = i[2]), (l |= o & ie ? 0 : le));
          var _ = i[3];
          if (_) {
            var A = e[3];
            (e[3] = A ? th(A, _, i[4]) : _), (e[4] = A ? Ii(e[3], E) : i[4]);
          }
          return (
            (_ = i[5]),
            _ && ((A = e[5]), (e[5] = A ? rh(A, _, i[6]) : _), (e[6] = A ? Ii(e[5], E) : i[6])),
            (_ = i[7]),
            _ && (e[7] = _),
            c & z && (e[8] = e[8] == null ? i[8] : Jt(e[8], i[8])),
            e[9] == null && (e[9] = i[9]),
            (e[0] = i[0]),
            (e[1] = l),
            e
          );
        }
        function ey(e) {
          var i = [];
          if (e != null) for (var o in Je(e)) i.push(o);
          return i;
        }
        function ty(e) {
          return zs.call(e);
        }
        function bh(e, i, o) {
          return (
            (i = jt(i === r ? e.length - 1 : i, 0)),
            function () {
              for (var c = arguments, l = -1, d = jt(c.length - i, 0), w = N(d); ++l < d; )
                w[l] = c[i + l];
              l = -1;
              for (var _ = N(i + 1); ++l < i; ) _[l] = c[l];
              return (_[i] = o(w)), qt(e, this, _);
            }
          );
        }
        function _h(e, i) {
          return i.length < 2 ? e : Bi(e, Tr(i, 0, -1));
        }
        function ry(e, i) {
          for (var o = e.length, c = Jt(i.length, o), l = hr(e); c--; ) {
            var d = i[c];
            e[c] = ci(d, o) ? l[d] : r;
          }
          return e;
        }
        function Xa(e, i) {
          if (!(i === 'constructor' && typeof e[i] == 'function') && i != '__proto__') return e[i];
        }
        var Eh = xh(Ku),
          Yn =
            vd ||
            function (e, i) {
              return Ae.setTimeout(e, i);
            },
          Za = xh(Sg);
        function Ih(e, i, o) {
          var c = i + '';
          return Za(e, Wg(c, iy(Bg(c), o)));
        }
        function xh(e) {
          var i = 0,
            o = 0;
          return function () {
            var c = _d(),
              l = qe - (c - o);
            if (((o = c), l > 0)) {
              if (++i >= Te) return arguments[0];
            } else i = 0;
            return e.apply(r, arguments);
          };
        }
        function lo(e, i) {
          var o = -1,
            c = e.length,
            l = c - 1;
          for (i = i === r ? c : i; ++o < i; ) {
            var d = La(o, l),
              w = e[d];
            (e[d] = e[o]), (e[o] = w);
          }
          return (e.length = i), e;
        }
        var Sh = Xg(function (e) {
          var i = [];
          return (
            e.charCodeAt(0) === 46 && i.push(''),
            e.replace(Rt, function (o, c, l, d) {
              i.push(l ? d.replace(Vo, '$1') : c || o);
            }),
            i
          );
        });
        function Yr(e) {
          if (typeof e == 'string' || _r(e)) return e;
          var i = e + '';
          return i == '0' && 1 / e == -ce ? '-0' : i;
        }
        function Vi(e) {
          if (e != null) {
            try {
              return qs.call(e);
            } catch {}
            try {
              return e + '';
            } catch {}
          }
          return '';
        }
        function iy(e, i) {
          return (
            Or(Kr, function (o) {
              var c = '_.' + o[0];
              i & o[1] && !Ls(e, c) && e.push(c);
            }),
            e.sort()
          );
        }
        function Ph(e) {
          if (e instanceof Oe) return e.clone();
          var i = new Rr(e.__wrapped__, e.__chain__);
          return (
            (i.__actions__ = hr(e.__actions__)),
            (i.__index__ = e.__index__),
            (i.__values__ = e.__values__),
            i
          );
        }
        function ny(e, i, o) {
          (o ? rr(e, i, o) : i === r) ? (i = 1) : (i = jt(be(i), 0));
          var c = e == null ? 0 : e.length;
          if (!c || i < 1) return [];
          for (var l = 0, d = 0, w = N(Ws(c / i)); l < c; ) w[d++] = Tr(e, l, (l += i));
          return w;
        }
        function sy(e) {
          for (var i = -1, o = e == null ? 0 : e.length, c = 0, l = []; ++i < o; ) {
            var d = e[i];
            d && (l[c++] = d);
          }
          return l;
        }
        function oy() {
          var e = arguments.length;
          if (!e) return [];
          for (var i = N(e - 1), o = arguments[0], c = e; c--; ) i[c - 1] = arguments[c];
          return Ei(we(o) ? hr(o) : [o], Wt(i, 1));
        }
        var ay = xe(function (e, i) {
            return Et(e) ? Kn(e, Wt(i, 1, Et, !0)) : [];
          }),
          cy = xe(function (e, i) {
            var o = Nr(i);
            return Et(o) && (o = r), Et(e) ? Kn(e, Wt(i, 1, Et, !0), se(o, 2)) : [];
          }),
          uy = xe(function (e, i) {
            var o = Nr(i);
            return Et(o) && (o = r), Et(e) ? Kn(e, Wt(i, 1, Et, !0), r, o) : [];
          });
        function hy(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c ? ((i = o || i === r ? 1 : be(i)), Tr(e, i < 0 ? 0 : i, c)) : [];
        }
        function ly(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c ? ((i = o || i === r ? 1 : be(i)), (i = c - i), Tr(e, 0, i < 0 ? 0 : i)) : [];
        }
        function fy(e, i) {
          return e && e.length ? io(e, se(i, 3), !0, !0) : [];
        }
        function py(e, i) {
          return e && e.length ? io(e, se(i, 3), !0) : [];
        }
        function dy(e, i, o, c) {
          var l = e == null ? 0 : e.length;
          return l
            ? (o && typeof o != 'number' && rr(e, i, o) && ((o = 0), (c = l)), og(e, i, o, c))
            : [];
        }
        function Oh(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : be(o);
          return l < 0 && (l = jt(c + l, 0)), Fs(e, se(i, 3), l);
        }
        function Ah(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c - 1;
          return (
            o !== r && ((l = be(o)), (l = o < 0 ? jt(c + l, 0) : Jt(l, c - 1))),
            Fs(e, se(i, 3), l, !0)
          );
        }
        function Rh(e) {
          var i = e == null ? 0 : e.length;
          return i ? Wt(e, 1) : [];
        }
        function gy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Wt(e, ce) : [];
        }
        function yy(e, i) {
          var o = e == null ? 0 : e.length;
          return o ? ((i = i === r ? 1 : be(i)), Wt(e, i)) : [];
        }
        function vy(e) {
          for (var i = -1, o = e == null ? 0 : e.length, c = {}; ++i < o; ) {
            var l = e[i];
            c[l[0]] = l[1];
          }
          return c;
        }
        function Ch(e) {
          return e && e.length ? e[0] : r;
        }
        function my(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = o == null ? 0 : be(o);
          return l < 0 && (l = jt(c + l, 0)), hn(e, i, l);
        }
        function wy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 0, -1) : [];
        }
        var by = xe(function (e) {
            var i = st(e, qa);
            return i.length && i[0] === e[0] ? Ca(i) : [];
          }),
          _y = xe(function (e) {
            var i = Nr(e),
              o = st(e, qa);
            return (
              i === Nr(o) ? (i = r) : o.pop(), o.length && o[0] === e[0] ? Ca(o, se(i, 2)) : []
            );
          }),
          Ey = xe(function (e) {
            var i = Nr(e),
              o = st(e, qa);
            return (
              (i = typeof i == 'function' ? i : r),
              i && o.pop(),
              o.length && o[0] === e[0] ? Ca(o, r, i) : []
            );
          });
        function Iy(e, i) {
          return e == null ? '' : wd.call(e, i);
        }
        function Nr(e) {
          var i = e == null ? 0 : e.length;
          return i ? e[i - 1] : r;
        }
        function xy(e, i, o) {
          var c = e == null ? 0 : e.length;
          if (!c) return -1;
          var l = c;
          return (
            o !== r && ((l = be(o)), (l = l < 0 ? jt(c + l, 0) : Jt(l, c - 1))),
            i === i ? id(e, i, l) : Fs(e, hu, l, !0)
          );
        }
        function Sy(e, i) {
          return e && e.length ? zu(e, be(i)) : r;
        }
        var Py = xe(Th);
        function Th(e, i) {
          return e && e.length && i && i.length ? Da(e, i) : e;
        }
        function Oy(e, i, o) {
          return e && e.length && i && i.length ? Da(e, i, se(o, 2)) : e;
        }
        function Ay(e, i, o) {
          return e && e.length && i && i.length ? Da(e, i, r, o) : e;
        }
        var Ry = ai(function (e, i) {
          var o = e == null ? 0 : e.length,
            c = Pa(e, i);
          return (
            Bu(
              e,
              st(i, function (l) {
                return ci(l, o) ? +l : l;
              }).sort(eh),
            ),
            c
          );
        });
        function Cy(e, i) {
          var o = [];
          if (!(e && e.length)) return o;
          var c = -1,
            l = [],
            d = e.length;
          for (i = se(i, 3); ++c < d; ) {
            var w = e[c];
            i(w, c, e) && (o.push(w), l.push(c));
          }
          return Bu(e, l), o;
        }
        function ec(e) {
          return e == null ? e : Id.call(e);
        }
        function Ty(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c
            ? (o && typeof o != 'number' && rr(e, i, o)
                ? ((i = 0), (o = c))
                : ((i = i == null ? 0 : be(i)), (o = o === r ? c : be(o))),
              Tr(e, i, o))
            : [];
        }
        function Ny(e, i) {
          return ro(e, i);
        }
        function $y(e, i, o) {
          return Ma(e, i, se(o, 2));
        }
        function Dy(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = ro(e, i);
            if (c < o && Ur(e[c], i)) return c;
          }
          return -1;
        }
        function Ly(e, i) {
          return ro(e, i, !0);
        }
        function Fy(e, i, o) {
          return Ma(e, i, se(o, 2), !0);
        }
        function My(e, i) {
          var o = e == null ? 0 : e.length;
          if (o) {
            var c = ro(e, i, !0) - 1;
            if (Ur(e[c], i)) return c;
          }
          return -1;
        }
        function jy(e) {
          return e && e.length ? Vu(e) : [];
        }
        function Uy(e, i) {
          return e && e.length ? Vu(e, se(i, 2)) : [];
        }
        function qy(e) {
          var i = e == null ? 0 : e.length;
          return i ? Tr(e, 1, i) : [];
        }
        function zy(e, i, o) {
          return e && e.length ? ((i = o || i === r ? 1 : be(i)), Tr(e, 0, i < 0 ? 0 : i)) : [];
        }
        function ky(e, i, o) {
          var c = e == null ? 0 : e.length;
          return c ? ((i = o || i === r ? 1 : be(i)), (i = c - i), Tr(e, i < 0 ? 0 : i, c)) : [];
        }
        function Hy(e, i) {
          return e && e.length ? io(e, se(i, 3), !1, !0) : [];
        }
        function By(e, i) {
          return e && e.length ? io(e, se(i, 3)) : [];
        }
        var Ky = xe(function (e) {
            return Pi(Wt(e, 1, Et, !0));
          }),
          Vy = xe(function (e) {
            var i = Nr(e);
            return Et(i) && (i = r), Pi(Wt(e, 1, Et, !0), se(i, 2));
          }),
          Wy = xe(function (e) {
            var i = Nr(e);
            return (i = typeof i == 'function' ? i : r), Pi(Wt(e, 1, Et, !0), r, i);
          });
        function Gy(e) {
          return e && e.length ? Pi(e) : [];
        }
        function Jy(e, i) {
          return e && e.length ? Pi(e, se(i, 2)) : [];
        }
        function Qy(e, i) {
          return (i = typeof i == 'function' ? i : r), e && e.length ? Pi(e, r, i) : [];
        }
        function tc(e) {
          if (!(e && e.length)) return [];
          var i = 0;
          return (
            (e = _i(e, function (o) {
              if (Et(o)) return (i = jt(o.length, i)), !0;
            })),
            ma(i, function (o) {
              return st(e, ga(o));
            })
          );
        }
        function Nh(e, i) {
          if (!(e && e.length)) return [];
          var o = tc(e);
          return i == null
            ? o
            : st(o, function (c) {
                return qt(i, r, c);
              });
        }
        var Yy = xe(function (e, i) {
            return Et(e) ? Kn(e, i) : [];
          }),
          Xy = xe(function (e) {
            return Ua(_i(e, Et));
          }),
          Zy = xe(function (e) {
            var i = Nr(e);
            return Et(i) && (i = r), Ua(_i(e, Et), se(i, 2));
          }),
          ev = xe(function (e) {
            var i = Nr(e);
            return (i = typeof i == 'function' ? i : r), Ua(_i(e, Et), r, i);
          }),
          tv = xe(tc);
        function rv(e, i) {
          return Qu(e || [], i || [], Bn);
        }
        function iv(e, i) {
          return Qu(e || [], i || [], Gn);
        }
        var nv = xe(function (e) {
          var i = e.length,
            o = i > 1 ? e[i - 1] : r;
          return (o = typeof o == 'function' ? (e.pop(), o) : r), Nh(e, o);
        });
        function $h(e) {
          var i = p(e);
          return (i.__chain__ = !0), i;
        }
        function sv(e, i) {
          return i(e), e;
        }
        function fo(e, i) {
          return i(e);
        }
        var ov = ai(function (e) {
          var i = e.length,
            o = i ? e[0] : 0,
            c = this.__wrapped__,
            l = function (d) {
              return Pa(d, e);
            };
          return i > 1 || this.__actions__.length || !(c instanceof Oe) || !ci(o)
            ? this.thru(l)
            : ((c = c.slice(o, +o + (i ? 1 : 0))),
              c.__actions__.push({ func: fo, args: [l], thisArg: r }),
              new Rr(c, this.__chain__).thru(function (d) {
                return i && !d.length && d.push(r), d;
              }));
        });
        function av() {
          return $h(this);
        }
        function cv() {
          return new Rr(this.value(), this.__chain__);
        }
        function uv() {
          this.__values__ === r && (this.__values__ = Wh(this.value()));
          var e = this.__index__ >= this.__values__.length,
            i = e ? r : this.__values__[this.__index__++];
          return { done: e, value: i };
        }
        function hv() {
          return this;
        }
        function lv(e) {
          for (var i, o = this; o instanceof Ys; ) {
            var c = Ph(o);
            (c.__index__ = 0), (c.__values__ = r), i ? (l.__wrapped__ = c) : (i = c);
            var l = c;
            o = o.__wrapped__;
          }
          return (l.__wrapped__ = e), i;
        }
        function fv() {
          var e = this.__wrapped__;
          if (e instanceof Oe) {
            var i = e;
            return (
              this.__actions__.length && (i = new Oe(this)),
              (i = i.reverse()),
              i.__actions__.push({ func: fo, args: [ec], thisArg: r }),
              new Rr(i, this.__chain__)
            );
          }
          return this.thru(ec);
        }
        function pv() {
          return Ju(this.__wrapped__, this.__actions__);
        }
        var dv = no(function (e, i, o) {
          Ue.call(e, o) ? ++e[o] : si(e, o, 1);
        });
        function gv(e, i, o) {
          var c = we(e) ? cu : sg;
          return o && rr(e, i, o) && (i = r), c(e, se(i, 3));
        }
        function yv(e, i) {
          var o = we(e) ? _i : Nu;
          return o(e, se(i, 3));
        }
        var vv = oh(Oh),
          mv = oh(Ah);
        function wv(e, i) {
          return Wt(po(e, i), 1);
        }
        function bv(e, i) {
          return Wt(po(e, i), ce);
        }
        function _v(e, i, o) {
          return (o = o === r ? 1 : be(o)), Wt(po(e, i), o);
        }
        function Dh(e, i) {
          var o = we(e) ? Or : Si;
          return o(e, se(i, 3));
        }
        function Lh(e, i) {
          var o = we(e) ? qp : Tu;
          return o(e, se(i, 3));
        }
        var Ev = no(function (e, i, o) {
          Ue.call(e, o) ? e[o].push(i) : si(e, o, [i]);
        });
        function Iv(e, i, o, c) {
          (e = lr(e) ? e : En(e)), (o = o && !c ? be(o) : 0);
          var l = e.length;
          return (
            o < 0 && (o = jt(l + o, 0)),
            wo(e) ? o <= l && e.indexOf(i, o) > -1 : !!l && hn(e, i, o) > -1
          );
        }
        var xv = xe(function (e, i, o) {
            var c = -1,
              l = typeof i == 'function',
              d = lr(e) ? N(e.length) : [];
            return (
              Si(e, function (w) {
                d[++c] = l ? qt(i, w, o) : Vn(w, i, o);
              }),
              d
            );
          }),
          Sv = no(function (e, i, o) {
            si(e, o, i);
          });
        function po(e, i) {
          var o = we(e) ? st : ju;
          return o(e, se(i, 3));
        }
        function Pv(e, i, o, c) {
          return e == null
            ? []
            : (we(i) || (i = i == null ? [] : [i]),
              (o = c ? r : o),
              we(o) || (o = o == null ? [] : [o]),
              ku(e, i, o));
        }
        var Ov = no(
          function (e, i, o) {
            e[o ? 0 : 1].push(i);
          },
          function () {
            return [[], []];
          },
        );
        function Av(e, i, o) {
          var c = we(e) ? pa : fu,
            l = arguments.length < 3;
          return c(e, se(i, 4), o, l, Si);
        }
        function Rv(e, i, o) {
          var c = we(e) ? zp : fu,
            l = arguments.length < 3;
          return c(e, se(i, 4), o, l, Tu);
        }
        function Cv(e, i) {
          var o = we(e) ? _i : Nu;
          return o(e, vo(se(i, 3)));
        }
        function Tv(e) {
          var i = we(e) ? Ou : Ig;
          return i(e);
        }
        function Nv(e, i, o) {
          (o ? rr(e, i, o) : i === r) ? (i = 1) : (i = be(i));
          var c = we(e) ? eg : xg;
          return c(e, i);
        }
        function $v(e) {
          var i = we(e) ? tg : Pg;
          return i(e);
        }
        function Dv(e) {
          if (e == null) return 0;
          if (lr(e)) return wo(e) ? fn(e) : e.length;
          var i = Qt(e);
          return i == _e || i == Fe ? e.size : Na(e).length;
        }
        function Lv(e, i, o) {
          var c = we(e) ? da : Og;
          return o && rr(e, i, o) && (i = r), c(e, se(i, 3));
        }
        var Fv = xe(function (e, i) {
            if (e == null) return [];
            var o = i.length;
            return (
              o > 1 && rr(e, i[0], i[1]) ? (i = []) : o > 2 && rr(i[0], i[1], i[2]) && (i = [i[0]]),
              ku(e, Wt(i, 1), [])
            );
          }),
          go =
            yd ||
            function () {
              return Ae.Date.now();
            };
        function Mv(e, i) {
          if (typeof i != 'function') throw new Ar(f);
          return (
            (e = be(e)),
            function () {
              if (--e < 1) return i.apply(this, arguments);
            }
          );
        }
        function Fh(e, i, o) {
          return (i = o ? r : i), (i = e && i == null ? e.length : i), oi(e, z, r, r, r, r, i);
        }
        function Mh(e, i) {
          var o;
          if (typeof i != 'function') throw new Ar(f);
          return (
            (e = be(e)),
            function () {
              return --e > 0 && (o = i.apply(this, arguments)), e <= 1 && (i = r), o;
            }
          );
        }
        var rc = xe(function (e, i, o) {
            var c = ie;
            if (o.length) {
              var l = Ii(o, bn(rc));
              c |= de;
            }
            return oi(e, c, i, o, l);
          }),
          jh = xe(function (e, i, o) {
            var c = ie | he;
            if (o.length) {
              var l = Ii(o, bn(jh));
              c |= de;
            }
            return oi(i, c, e, o, l);
          });
        function Uh(e, i, o) {
          i = o ? r : i;
          var c = oi(e, fe, r, r, r, r, r, i);
          return (c.placeholder = Uh.placeholder), c;
        }
        function qh(e, i, o) {
          i = o ? r : i;
          var c = oi(e, pe, r, r, r, r, r, i);
          return (c.placeholder = qh.placeholder), c;
        }
        function zh(e, i, o) {
          var c,
            l,
            d,
            w,
            _,
            A,
            M = 0,
            j = !1,
            H = !1,
            Q = !0;
          if (typeof e != 'function') throw new Ar(f);
          (i = $r(i) || 0),
            ht(o) &&
              ((j = !!o.leading),
              (H = 'maxWait' in o),
              (d = H ? jt($r(o.maxWait) || 0, i) : d),
              (Q = 'trailing' in o ? !!o.trailing : Q));
          function te(It) {
            var qr = c,
              li = l;
            return (c = l = r), (M = It), (w = e.apply(li, qr)), w;
          }
          function oe(It) {
            return (M = It), (_ = Yn(Se, i)), j ? te(It) : w;
          }
          function Ee(It) {
            var qr = It - A,
              li = It - M,
              ol = i - qr;
            return H ? Jt(ol, d - li) : ol;
          }
          function ae(It) {
            var qr = It - A,
              li = It - M;
            return A === r || qr >= i || qr < 0 || (H && li >= d);
          }
          function Se() {
            var It = go();
            if (ae(It)) return Re(It);
            _ = Yn(Se, Ee(It));
          }
          function Re(It) {
            return (_ = r), Q && c ? te(It) : ((c = l = r), w);
          }
          function Er() {
            _ !== r && Yu(_), (M = 0), (c = A = l = _ = r);
          }
          function ir() {
            return _ === r ? w : Re(go());
          }
          function Ir() {
            var It = go(),
              qr = ae(It);
            if (((c = arguments), (l = this), (A = It), qr)) {
              if (_ === r) return oe(A);
              if (H) return Yu(_), (_ = Yn(Se, i)), te(A);
            }
            return _ === r && (_ = Yn(Se, i)), w;
          }
          return (Ir.cancel = Er), (Ir.flush = ir), Ir;
        }
        var jv = xe(function (e, i) {
            return Cu(e, 1, i);
          }),
          Uv = xe(function (e, i, o) {
            return Cu(e, $r(i) || 0, o);
          });
        function qv(e) {
          return oi(e, ve);
        }
        function yo(e, i) {
          if (typeof e != 'function' || (i != null && typeof i != 'function')) throw new Ar(f);
          var o = function () {
            var c = arguments,
              l = i ? i.apply(this, c) : c[0],
              d = o.cache;
            if (d.has(l)) return d.get(l);
            var w = e.apply(this, c);
            return (o.cache = d.set(l, w) || d), w;
          };
          return (o.cache = new (yo.Cache || ni)()), o;
        }
        yo.Cache = ni;
        function vo(e) {
          if (typeof e != 'function') throw new Ar(f);
          return function () {
            var i = arguments;
            switch (i.length) {
              case 0:
                return !e.call(this);
              case 1:
                return !e.call(this, i[0]);
              case 2:
                return !e.call(this, i[0], i[1]);
              case 3:
                return !e.call(this, i[0], i[1], i[2]);
            }
            return !e.apply(this, i);
          };
        }
        function zv(e) {
          return Mh(2, e);
        }
        var kv = Ag(function (e, i) {
            i = i.length == 1 && we(i[0]) ? st(i[0], wr(se())) : st(Wt(i, 1), wr(se()));
            var o = i.length;
            return xe(function (c) {
              for (var l = -1, d = Jt(c.length, o); ++l < d; ) c[l] = i[l].call(this, c[l]);
              return qt(e, this, c);
            });
          }),
          ic = xe(function (e, i) {
            var o = Ii(i, bn(ic));
            return oi(e, de, r, i, o);
          }),
          kh = xe(function (e, i) {
            var o = Ii(i, bn(kh));
            return oi(e, L, r, i, o);
          }),
          Hv = ai(function (e, i) {
            return oi(e, G, r, r, r, i);
          });
        function Bv(e, i) {
          if (typeof e != 'function') throw new Ar(f);
          return (i = i === r ? i : be(i)), xe(e, i);
        }
        function Kv(e, i) {
          if (typeof e != 'function') throw new Ar(f);
          return (
            (i = i == null ? 0 : jt(be(i), 0)),
            xe(function (o) {
              var c = o[i],
                l = Ai(o, 0, i);
              return c && Ei(l, c), qt(e, this, l);
            })
          );
        }
        function Vv(e, i, o) {
          var c = !0,
            l = !0;
          if (typeof e != 'function') throw new Ar(f);
          return (
            ht(o) &&
              ((c = 'leading' in o ? !!o.leading : c), (l = 'trailing' in o ? !!o.trailing : l)),
            zh(e, i, { leading: c, maxWait: i, trailing: l })
          );
        }
        function Wv(e) {
          return Fh(e, 1);
        }
        function Gv(e, i) {
          return ic(za(i), e);
        }
        function Jv() {
          if (!arguments.length) return [];
          var e = arguments[0];
          return we(e) ? e : [e];
        }
        function Qv(e) {
          return Cr(e, U);
        }
        function Yv(e, i) {
          return (i = typeof i == 'function' ? i : r), Cr(e, U, i);
        }
        function Xv(e) {
          return Cr(e, O | U);
        }
        function Zv(e, i) {
          return (i = typeof i == 'function' ? i : r), Cr(e, O | U, i);
        }
        function em(e, i) {
          return i == null || Ru(e, i, zt(i));
        }
        function Ur(e, i) {
          return e === i || (e !== e && i !== i);
        }
        var tm = co(Ra),
          rm = co(function (e, i) {
            return e >= i;
          }),
          Wi = Lu(
            (function () {
              return arguments;
            })(),
          )
            ? Lu
            : function (e) {
                return mt(e) && Ue.call(e, 'callee') && !_u.call(e, 'callee');
              },
          we = N.isArray,
          im = er ? wr(er) : lg;
        function lr(e) {
          return e != null && mo(e.length) && !ui(e);
        }
        function Et(e) {
          return mt(e) && lr(e);
        }
        function nm(e) {
          return e === !0 || e === !1 || (mt(e) && tr(e) == $);
        }
        var Ri = md || dc,
          sm = Fr ? wr(Fr) : fg;
        function om(e) {
          return mt(e) && e.nodeType === 1 && !Xn(e);
        }
        function am(e) {
          if (e == null) return !0;
          if (
            lr(e) &&
            (we(e) ||
              typeof e == 'string' ||
              typeof e.splice == 'function' ||
              Ri(e) ||
              _n(e) ||
              Wi(e))
          )
            return !e.length;
          var i = Qt(e);
          if (i == _e || i == Fe) return !e.size;
          if (Qn(e)) return !Na(e).length;
          for (var o in e) if (Ue.call(e, o)) return !1;
          return !0;
        }
        function cm(e, i) {
          return Wn(e, i);
        }
        function um(e, i, o) {
          o = typeof o == 'function' ? o : r;
          var c = o ? o(e, i) : r;
          return c === r ? Wn(e, i, r, o) : !!c;
        }
        function nc(e) {
          if (!mt(e)) return !1;
          var i = tr(e);
          return (
            i == I ||
            i == h ||
            (typeof e.message == 'string' && typeof e.name == 'string' && !Xn(e))
          );
        }
        function hm(e) {
          return typeof e == 'number' && Iu(e);
        }
        function ui(e) {
          if (!ht(e)) return !1;
          var i = tr(e);
          return i == ee || i == ge || i == D || i == wt;
        }
        function Hh(e) {
          return typeof e == 'number' && e == be(e);
        }
        function mo(e) {
          return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= V;
        }
        function ht(e) {
          var i = typeof e;
          return e != null && (i == 'object' || i == 'function');
        }
        function mt(e) {
          return e != null && typeof e == 'object';
        }
        var Bh = Pr ? wr(Pr) : dg;
        function lm(e, i) {
          return e === i || Ta(e, i, Ga(i));
        }
        function fm(e, i, o) {
          return (o = typeof o == 'function' ? o : r), Ta(e, i, Ga(i), o);
        }
        function pm(e) {
          return Kh(e) && e != +e;
        }
        function dm(e) {
          if (Yg(e)) throw new ye(u);
          return Fu(e);
        }
        function gm(e) {
          return e === null;
        }
        function ym(e) {
          return e == null;
        }
        function Kh(e) {
          return typeof e == 'number' || (mt(e) && tr(e) == Ne);
        }
        function Xn(e) {
          if (!mt(e) || tr(e) != Pe) return !1;
          var i = Bs(e);
          if (i === null) return !0;
          var o = Ue.call(i, 'constructor') && i.constructor;
          return typeof o == 'function' && o instanceof o && qs.call(o) == fd;
        }
        var sc = Gr ? wr(Gr) : gg;
        function vm(e) {
          return Hh(e) && e >= -V && e <= V;
        }
        var Vh = Mn ? wr(Mn) : yg;
        function wo(e) {
          return typeof e == 'string' || (!we(e) && mt(e) && tr(e) == Xe);
        }
        function _r(e) {
          return typeof e == 'symbol' || (mt(e) && tr(e) == Ze);
        }
        var _n = Ui ? wr(Ui) : vg;
        function mm(e) {
          return e === r;
        }
        function wm(e) {
          return mt(e) && Qt(e) == ze;
        }
        function bm(e) {
          return mt(e) && tr(e) == et;
        }
        var _m = co($a),
          Em = co(function (e, i) {
            return e <= i;
          });
        function Wh(e) {
          if (!e) return [];
          if (lr(e)) return wo(e) ? Mr(e) : hr(e);
          if (Un && e[Un]) return ed(e[Un]());
          var i = Qt(e),
            o = i == _e ? ba : i == Fe ? Ms : En;
          return o(e);
        }
        function hi(e) {
          if (!e) return e === 0 ? e : 0;
          if (((e = $r(e)), e === ce || e === -ce)) {
            var i = e < 0 ? -1 : 1;
            return i * k;
          }
          return e === e ? e : 0;
        }
        function be(e) {
          var i = hi(e),
            o = i % 1;
          return i === i ? (o ? i - o : i) : 0;
        }
        function Gh(e) {
          return e ? Hi(be(e), 0, W) : 0;
        }
        function $r(e) {
          if (typeof e == 'number') return e;
          if (_r(e)) return B;
          if (ht(e)) {
            var i = typeof e.valueOf == 'function' ? e.valueOf() : e;
            e = ht(i) ? i + '' : i;
          }
          if (typeof e != 'string') return e === 0 ? e : +e;
          e = pu(e);
          var o = Jo.test(e);
          return o || Yo.test(e) ? me(e.slice(2), o ? 2 : 8) : Go.test(e) ? B : +e;
        }
        function Jh(e) {
          return Qr(e, fr(e));
        }
        function Im(e) {
          return e ? Hi(be(e), -V, V) : e === 0 ? e : 0;
        }
        function Me(e) {
          return e == null ? '' : br(e);
        }
        var xm = mn(function (e, i) {
            if (Qn(i) || lr(i)) {
              Qr(i, zt(i), e);
              return;
            }
            for (var o in i) Ue.call(i, o) && Bn(e, o, i[o]);
          }),
          Qh = mn(function (e, i) {
            Qr(i, fr(i), e);
          }),
          bo = mn(function (e, i, o, c) {
            Qr(i, fr(i), e, c);
          }),
          Sm = mn(function (e, i, o, c) {
            Qr(i, zt(i), e, c);
          }),
          Pm = ai(Pa);
        function Om(e, i) {
          var o = vn(e);
          return i == null ? o : Au(o, i);
        }
        var Am = xe(function (e, i) {
            e = Je(e);
            var o = -1,
              c = i.length,
              l = c > 2 ? i[2] : r;
            for (l && rr(i[0], i[1], l) && (c = 1); ++o < c; )
              for (var d = i[o], w = fr(d), _ = -1, A = w.length; ++_ < A; ) {
                var M = w[_],
                  j = e[M];
                (j === r || (Ur(j, dn[M]) && !Ue.call(e, M))) && (e[M] = d[M]);
              }
            return e;
          }),
          Rm = xe(function (e) {
            return e.push(r, ph), qt(Yh, r, e);
          });
        function Cm(e, i) {
          return uu(e, se(i, 3), Jr);
        }
        function Tm(e, i) {
          return uu(e, se(i, 3), Aa);
        }
        function Nm(e, i) {
          return e == null ? e : Oa(e, se(i, 3), fr);
        }
        function $m(e, i) {
          return e == null ? e : $u(e, se(i, 3), fr);
        }
        function Dm(e, i) {
          return e && Jr(e, se(i, 3));
        }
        function Lm(e, i) {
          return e && Aa(e, se(i, 3));
        }
        function Fm(e) {
          return e == null ? [] : eo(e, zt(e));
        }
        function Mm(e) {
          return e == null ? [] : eo(e, fr(e));
        }
        function oc(e, i, o) {
          var c = e == null ? r : Bi(e, i);
          return c === r ? o : c;
        }
        function jm(e, i) {
          return e != null && yh(e, i, ag);
        }
        function ac(e, i) {
          return e != null && yh(e, i, cg);
        }
        var Um = ch(function (e, i, o) {
            i != null && typeof i.toString != 'function' && (i = zs.call(i)), (e[i] = o);
          }, uc(pr)),
          qm = ch(function (e, i, o) {
            i != null && typeof i.toString != 'function' && (i = zs.call(i)),
              Ue.call(e, i) ? e[i].push(o) : (e[i] = [o]);
          }, se),
          zm = xe(Vn);
        function zt(e) {
          return lr(e) ? Pu(e) : Na(e);
        }
        function fr(e) {
          return lr(e) ? Pu(e, !0) : mg(e);
        }
        function km(e, i) {
          var o = {};
          return (
            (i = se(i, 3)),
            Jr(e, function (c, l, d) {
              si(o, i(c, l, d), c);
            }),
            o
          );
        }
        function Hm(e, i) {
          var o = {};
          return (
            (i = se(i, 3)),
            Jr(e, function (c, l, d) {
              si(o, l, i(c, l, d));
            }),
            o
          );
        }
        var Bm = mn(function (e, i, o) {
            to(e, i, o);
          }),
          Yh = mn(function (e, i, o, c) {
            to(e, i, o, c);
          }),
          Km = ai(function (e, i) {
            var o = {};
            if (e == null) return o;
            var c = !1;
            (i = st(i, function (d) {
              return (d = Oi(d, e)), c || (c = d.length > 1), d;
            })),
              Qr(e, Va(e), o),
              c && (o = Cr(o, O | T | U, Ug));
            for (var l = i.length; l--; ) ja(o, i[l]);
            return o;
          });
        function Vm(e, i) {
          return Xh(e, vo(se(i)));
        }
        var Wm = ai(function (e, i) {
          return e == null ? {} : bg(e, i);
        });
        function Xh(e, i) {
          if (e == null) return {};
          var o = st(Va(e), function (c) {
            return [c];
          });
          return (
            (i = se(i)),
            Hu(e, o, function (c, l) {
              return i(c, l[0]);
            })
          );
        }
        function Gm(e, i, o) {
          i = Oi(i, e);
          var c = -1,
            l = i.length;
          for (l || ((l = 1), (e = r)); ++c < l; ) {
            var d = e == null ? r : e[Yr(i[c])];
            d === r && ((c = l), (d = o)), (e = ui(d) ? d.call(e) : d);
          }
          return e;
        }
        function Jm(e, i, o) {
          return e == null ? e : Gn(e, i, o);
        }
        function Qm(e, i, o, c) {
          return (c = typeof c == 'function' ? c : r), e == null ? e : Gn(e, i, o, c);
        }
        var Zh = lh(zt),
          el = lh(fr);
        function Ym(e, i, o) {
          var c = we(e),
            l = c || Ri(e) || _n(e);
          if (((i = se(i, 4)), o == null)) {
            var d = e && e.constructor;
            l ? (o = c ? new d() : []) : ht(e) ? (o = ui(d) ? vn(Bs(e)) : {}) : (o = {});
          }
          return (
            (l ? Or : Jr)(e, function (w, _, A) {
              return i(o, w, _, A);
            }),
            o
          );
        }
        function Xm(e, i) {
          return e == null ? !0 : ja(e, i);
        }
        function Zm(e, i, o) {
          return e == null ? e : Gu(e, i, za(o));
        }
        function e0(e, i, o, c) {
          return (c = typeof c == 'function' ? c : r), e == null ? e : Gu(e, i, za(o), c);
        }
        function En(e) {
          return e == null ? [] : wa(e, zt(e));
        }
        function t0(e) {
          return e == null ? [] : wa(e, fr(e));
        }
        function r0(e, i, o) {
          return (
            o === r && ((o = i), (i = r)),
            o !== r && ((o = $r(o)), (o = o === o ? o : 0)),
            i !== r && ((i = $r(i)), (i = i === i ? i : 0)),
            Hi($r(e), i, o)
          );
        }
        function i0(e, i, o) {
          return (i = hi(i)), o === r ? ((o = i), (i = 0)) : (o = hi(o)), (e = $r(e)), ug(e, i, o);
        }
        function n0(e, i, o) {
          if (
            (o && typeof o != 'boolean' && rr(e, i, o) && (i = o = r),
            o === r &&
              (typeof i == 'boolean'
                ? ((o = i), (i = r))
                : typeof e == 'boolean' && ((o = e), (e = r))),
            e === r && i === r
              ? ((e = 0), (i = 1))
              : ((e = hi(e)), i === r ? ((i = e), (e = 0)) : (i = hi(i))),
            e > i)
          ) {
            var c = e;
            (e = i), (i = c);
          }
          if (o || e % 1 || i % 1) {
            var l = xu();
            return Jt(e + l * (i - e + We('1e-' + ((l + '').length - 1))), i);
          }
          return La(e, i);
        }
        var s0 = wn(function (e, i, o) {
          return (i = i.toLowerCase()), e + (o ? tl(i) : i);
        });
        function tl(e) {
          return cc(Me(e).toLowerCase());
        }
        function rl(e) {
          return (e = Me(e)), e && e.replace(ti, Jp).replace(ha, '');
        }
        function o0(e, i, o) {
          (e = Me(e)), (i = br(i));
          var c = e.length;
          o = o === r ? c : Hi(be(o), 0, c);
          var l = o;
          return (o -= i.length), o >= 0 && e.slice(o, l) == i;
        }
        function a0(e) {
          return (e = Me(e)), e && it.test(e) ? e.replace(Di, Qp) : e;
        }
        function c0(e) {
          return (e = Me(e)), e && Ct.test(e) ? e.replace(gt, '\\$&') : e;
        }
        var u0 = wn(function (e, i, o) {
            return e + (o ? '-' : '') + i.toLowerCase();
          }),
          h0 = wn(function (e, i, o) {
            return e + (o ? ' ' : '') + i.toLowerCase();
          }),
          l0 = sh('toLowerCase');
        function f0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? fn(e) : 0;
          if (!i || c >= i) return e;
          var l = (i - c) / 2;
          return ao(Gs(l), o) + e + ao(Ws(l), o);
        }
        function p0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? fn(e) : 0;
          return i && c < i ? e + ao(i - c, o) : e;
        }
        function d0(e, i, o) {
          (e = Me(e)), (i = be(i));
          var c = i ? fn(e) : 0;
          return i && c < i ? ao(i - c, o) + e : e;
        }
        function g0(e, i, o) {
          return o || i == null ? (i = 0) : i && (i = +i), Ed(Me(e).replace(yt, ''), i || 0);
        }
        function y0(e, i, o) {
          return (o ? rr(e, i, o) : i === r) ? (i = 1) : (i = be(i)), Fa(Me(e), i);
        }
        function v0() {
          var e = arguments,
            i = Me(e[0]);
          return e.length < 3 ? i : i.replace(e[1], e[2]);
        }
        var m0 = wn(function (e, i, o) {
          return e + (o ? '_' : '') + i.toLowerCase();
        });
        function w0(e, i, o) {
          return (
            o && typeof o != 'number' && rr(e, i, o) && (i = o = r),
            (o = o === r ? W : o >>> 0),
            o
              ? ((e = Me(e)),
                e && (typeof i == 'string' || (i != null && !sc(i))) && ((i = br(i)), !i && ln(e))
                  ? Ai(Mr(e), 0, o)
                  : e.split(i, o))
              : []
          );
        }
        var b0 = wn(function (e, i, o) {
          return e + (o ? ' ' : '') + cc(i);
        });
        function _0(e, i, o) {
          return (
            (e = Me(e)),
            (o = o == null ? 0 : Hi(be(o), 0, e.length)),
            (i = br(i)),
            e.slice(o, o + i.length) == i
          );
        }
        function E0(e, i, o) {
          var c = p.templateSettings;
          o && rr(e, i, o) && (i = r), (e = Me(e)), (i = bo({}, i, c, fh));
          var l = bo({}, i.imports, c.imports, fh),
            d = zt(l),
            w = wa(l, d),
            _,
            A,
            M = 0,
            j = i.interpolate || rn,
            H = "__p += '",
            Q = _a(
              (i.escape || rn).source +
                '|' +
                j.source +
                '|' +
                (j === ut ? Wo : rn).source +
                '|' +
                (i.evaluate || rn).source +
                '|$',
              'g',
            ),
            te =
              '//# sourceURL=' +
              (Ue.call(i, 'sourceURL')
                ? (i.sourceURL + '').replace(/\s/g, ' ')
                : 'lodash.templateSources[' + ++la + ']') +
              `
`;
          e.replace(Q, function (ae, Se, Re, Er, ir, Ir) {
            return (
              Re || (Re = Er),
              (H += e.slice(M, Ir).replace(Zo, Yp)),
              Se &&
                ((_ = !0),
                (H +=
                  `' +
__e(` +
                  Se +
                  `) +
'`)),
              ir &&
                ((A = !0),
                (H +=
                  `';
` +
                  ir +
                  `;
__p += '`)),
              Re &&
                (H +=
                  `' +
((__t = (` +
                  Re +
                  `)) == null ? '' : __t) +
'`),
              (M = Ir + ae.length),
              ae
            );
          }),
            (H += `';
`);
          var oe = Ue.call(i, 'variable') && i.variable;
          if (!oe)
            H =
              `with (obj) {
` +
              H +
              `
}
`;
          else if (Ko.test(oe)) throw new ye(g);
          (H = (A ? H.replace(Vr, '') : H).replace(Zt, '$1').replace(ei, '$1;')),
            (H =
              'function(' +
              (oe || 'obj') +
              `) {
` +
              (oe
                ? ''
                : `obj || (obj = {});
`) +
              "var __t, __p = ''" +
              (_ ? ', __e = _.escape' : '') +
              (A
                ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`
                : `;
`) +
              H +
              `return __p
}`);
          var Ee = nl(function () {
            return Le(d, te + 'return ' + H).apply(r, w);
          });
          if (((Ee.source = H), nc(Ee))) throw Ee;
          return Ee;
        }
        function I0(e) {
          return Me(e).toLowerCase();
        }
        function x0(e) {
          return Me(e).toUpperCase();
        }
        function S0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return pu(e);
          if (!e || !(i = br(i))) return e;
          var c = Mr(e),
            l = Mr(i),
            d = du(c, l),
            w = gu(c, l) + 1;
          return Ai(c, d, w).join('');
        }
        function P0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return e.slice(0, vu(e) + 1);
          if (!e || !(i = br(i))) return e;
          var c = Mr(e),
            l = gu(c, Mr(i)) + 1;
          return Ai(c, 0, l).join('');
        }
        function O0(e, i, o) {
          if (((e = Me(e)), e && (o || i === r))) return e.replace(yt, '');
          if (!e || !(i = br(i))) return e;
          var c = Mr(e),
            l = du(c, Mr(i));
          return Ai(c, l).join('');
        }
        function A0(e, i) {
          var o = ne,
            c = ue;
          if (ht(i)) {
            var l = 'separator' in i ? i.separator : l;
            (o = 'length' in i ? be(i.length) : o), (c = 'omission' in i ? br(i.omission) : c);
          }
          e = Me(e);
          var d = e.length;
          if (ln(e)) {
            var w = Mr(e);
            d = w.length;
          }
          if (o >= d) return e;
          var _ = o - fn(c);
          if (_ < 1) return c;
          var A = w ? Ai(w, 0, _).join('') : e.slice(0, _);
          if (l === r) return A + c;
          if ((w && (_ += A.length - _), sc(l))) {
            if (e.slice(_).search(l)) {
              var M,
                j = A;
              for (
                l.global || (l = _a(l.source, Me(Sr.exec(l)) + 'g')), l.lastIndex = 0;
                (M = l.exec(j));

              )
                var H = M.index;
              A = A.slice(0, H === r ? _ : H);
            }
          } else if (e.indexOf(br(l), _) != _) {
            var Q = A.lastIndexOf(l);
            Q > -1 && (A = A.slice(0, Q));
          }
          return A + c;
        }
        function R0(e) {
          return (e = Me(e)), e && ft.test(e) ? e.replace(wi, nd) : e;
        }
        var C0 = wn(function (e, i, o) {
            return e + (o ? ' ' : '') + i.toUpperCase();
          }),
          cc = sh('toUpperCase');
        function il(e, i, o) {
          return (e = Me(e)), (i = o ? r : i), i === r ? (Zp(e) ? ad(e) : Bp(e)) : e.match(i) || [];
        }
        var nl = xe(function (e, i) {
            try {
              return qt(e, r, i);
            } catch (o) {
              return nc(o) ? o : new ye(o);
            }
          }),
          T0 = ai(function (e, i) {
            return (
              Or(i, function (o) {
                (o = Yr(o)), si(e, o, rc(e[o], e));
              }),
              e
            );
          });
        function N0(e) {
          var i = e == null ? 0 : e.length,
            o = se();
          return (
            (e = i
              ? st(e, function (c) {
                  if (typeof c[1] != 'function') throw new Ar(f);
                  return [o(c[0]), c[1]];
                })
              : []),
            xe(function (c) {
              for (var l = -1; ++l < i; ) {
                var d = e[l];
                if (qt(d[0], this, c)) return qt(d[1], this, c);
              }
            })
          );
        }
        function $0(e) {
          return ng(Cr(e, O));
        }
        function uc(e) {
          return function () {
            return e;
          };
        }
        function D0(e, i) {
          return e == null || e !== e ? i : e;
        }
        var L0 = ah(),
          F0 = ah(!0);
        function pr(e) {
          return e;
        }
        function hc(e) {
          return Mu(typeof e == 'function' ? e : Cr(e, O));
        }
        function M0(e) {
          return Uu(Cr(e, O));
        }
        function j0(e, i) {
          return qu(e, Cr(i, O));
        }
        var U0 = xe(function (e, i) {
            return function (o) {
              return Vn(o, e, i);
            };
          }),
          q0 = xe(function (e, i) {
            return function (o) {
              return Vn(e, o, i);
            };
          });
        function lc(e, i, o) {
          var c = zt(i),
            l = eo(i, c);
          o == null &&
            !(ht(i) && (l.length || !c.length)) &&
            ((o = i), (i = e), (e = this), (l = eo(i, zt(i))));
          var d = !(ht(o) && 'chain' in o) || !!o.chain,
            w = ui(e);
          return (
            Or(l, function (_) {
              var A = i[_];
              (e[_] = A),
                w &&
                  (e.prototype[_] = function () {
                    var M = this.__chain__;
                    if (d || M) {
                      var j = e(this.__wrapped__),
                        H = (j.__actions__ = hr(this.__actions__));
                      return H.push({ func: A, args: arguments, thisArg: e }), (j.__chain__ = M), j;
                    }
                    return A.apply(e, Ei([this.value()], arguments));
                  });
            }),
            e
          );
        }
        function z0() {
          return Ae._ === this && (Ae._ = pd), this;
        }
        function fc() {}
        function k0(e) {
          return (
            (e = be(e)),
            xe(function (i) {
              return zu(i, e);
            })
          );
        }
        var H0 = Ha(st),
          B0 = Ha(cu),
          K0 = Ha(da);
        function sl(e) {
          return Qa(e) ? ga(Yr(e)) : _g(e);
        }
        function V0(e) {
          return function (i) {
            return e == null ? r : Bi(e, i);
          };
        }
        var W0 = uh(),
          G0 = uh(!0);
        function pc() {
          return [];
        }
        function dc() {
          return !1;
        }
        function J0() {
          return {};
        }
        function Q0() {
          return '';
        }
        function Y0() {
          return !0;
        }
        function X0(e, i) {
          if (((e = be(e)), e < 1 || e > V)) return [];
          var o = W,
            c = Jt(e, W);
          (i = se(i)), (e -= W);
          for (var l = ma(c, i); ++o < e; ) i(o);
          return l;
        }
        function Z0(e) {
          return we(e) ? st(e, Yr) : _r(e) ? [e] : hr(Sh(Me(e)));
        }
        function e1(e) {
          var i = ++ld;
          return Me(e) + i;
        }
        var t1 = oo(function (e, i) {
            return e + i;
          }, 0),
          r1 = Ba('ceil'),
          i1 = oo(function (e, i) {
            return e / i;
          }, 1),
          n1 = Ba('floor');
        function s1(e) {
          return e && e.length ? Zs(e, pr, Ra) : r;
        }
        function o1(e, i) {
          return e && e.length ? Zs(e, se(i, 2), Ra) : r;
        }
        function a1(e) {
          return lu(e, pr);
        }
        function c1(e, i) {
          return lu(e, se(i, 2));
        }
        function u1(e) {
          return e && e.length ? Zs(e, pr, $a) : r;
        }
        function h1(e, i) {
          return e && e.length ? Zs(e, se(i, 2), $a) : r;
        }
        var l1 = oo(function (e, i) {
            return e * i;
          }, 1),
          f1 = Ba('round'),
          p1 = oo(function (e, i) {
            return e - i;
          }, 0);
        function d1(e) {
          return e && e.length ? va(e, pr) : 0;
        }
        function g1(e, i) {
          return e && e.length ? va(e, se(i, 2)) : 0;
        }
        return (
          (p.after = Mv),
          (p.ary = Fh),
          (p.assign = xm),
          (p.assignIn = Qh),
          (p.assignInWith = bo),
          (p.assignWith = Sm),
          (p.at = Pm),
          (p.before = Mh),
          (p.bind = rc),
          (p.bindAll = T0),
          (p.bindKey = jh),
          (p.castArray = Jv),
          (p.chain = $h),
          (p.chunk = ny),
          (p.compact = sy),
          (p.concat = oy),
          (p.cond = N0),
          (p.conforms = $0),
          (p.constant = uc),
          (p.countBy = dv),
          (p.create = Om),
          (p.curry = Uh),
          (p.curryRight = qh),
          (p.debounce = zh),
          (p.defaults = Am),
          (p.defaultsDeep = Rm),
          (p.defer = jv),
          (p.delay = Uv),
          (p.difference = ay),
          (p.differenceBy = cy),
          (p.differenceWith = uy),
          (p.drop = hy),
          (p.dropRight = ly),
          (p.dropRightWhile = fy),
          (p.dropWhile = py),
          (p.fill = dy),
          (p.filter = yv),
          (p.flatMap = wv),
          (p.flatMapDeep = bv),
          (p.flatMapDepth = _v),
          (p.flatten = Rh),
          (p.flattenDeep = gy),
          (p.flattenDepth = yy),
          (p.flip = qv),
          (p.flow = L0),
          (p.flowRight = F0),
          (p.fromPairs = vy),
          (p.functions = Fm),
          (p.functionsIn = Mm),
          (p.groupBy = Ev),
          (p.initial = wy),
          (p.intersection = by),
          (p.intersectionBy = _y),
          (p.intersectionWith = Ey),
          (p.invert = Um),
          (p.invertBy = qm),
          (p.invokeMap = xv),
          (p.iteratee = hc),
          (p.keyBy = Sv),
          (p.keys = zt),
          (p.keysIn = fr),
          (p.map = po),
          (p.mapKeys = km),
          (p.mapValues = Hm),
          (p.matches = M0),
          (p.matchesProperty = j0),
          (p.memoize = yo),
          (p.merge = Bm),
          (p.mergeWith = Yh),
          (p.method = U0),
          (p.methodOf = q0),
          (p.mixin = lc),
          (p.negate = vo),
          (p.nthArg = k0),
          (p.omit = Km),
          (p.omitBy = Vm),
          (p.once = zv),
          (p.orderBy = Pv),
          (p.over = H0),
          (p.overArgs = kv),
          (p.overEvery = B0),
          (p.overSome = K0),
          (p.partial = ic),
          (p.partialRight = kh),
          (p.partition = Ov),
          (p.pick = Wm),
          (p.pickBy = Xh),
          (p.property = sl),
          (p.propertyOf = V0),
          (p.pull = Py),
          (p.pullAll = Th),
          (p.pullAllBy = Oy),
          (p.pullAllWith = Ay),
          (p.pullAt = Ry),
          (p.range = W0),
          (p.rangeRight = G0),
          (p.rearg = Hv),
          (p.reject = Cv),
          (p.remove = Cy),
          (p.rest = Bv),
          (p.reverse = ec),
          (p.sampleSize = Nv),
          (p.set = Jm),
          (p.setWith = Qm),
          (p.shuffle = $v),
          (p.slice = Ty),
          (p.sortBy = Fv),
          (p.sortedUniq = jy),
          (p.sortedUniqBy = Uy),
          (p.split = w0),
          (p.spread = Kv),
          (p.tail = qy),
          (p.take = zy),
          (p.takeRight = ky),
          (p.takeRightWhile = Hy),
          (p.takeWhile = By),
          (p.tap = sv),
          (p.throttle = Vv),
          (p.thru = fo),
          (p.toArray = Wh),
          (p.toPairs = Zh),
          (p.toPairsIn = el),
          (p.toPath = Z0),
          (p.toPlainObject = Jh),
          (p.transform = Ym),
          (p.unary = Wv),
          (p.union = Ky),
          (p.unionBy = Vy),
          (p.unionWith = Wy),
          (p.uniq = Gy),
          (p.uniqBy = Jy),
          (p.uniqWith = Qy),
          (p.unset = Xm),
          (p.unzip = tc),
          (p.unzipWith = Nh),
          (p.update = Zm),
          (p.updateWith = e0),
          (p.values = En),
          (p.valuesIn = t0),
          (p.without = Yy),
          (p.words = il),
          (p.wrap = Gv),
          (p.xor = Xy),
          (p.xorBy = Zy),
          (p.xorWith = ev),
          (p.zip = tv),
          (p.zipObject = rv),
          (p.zipObjectDeep = iv),
          (p.zipWith = nv),
          (p.entries = Zh),
          (p.entriesIn = el),
          (p.extend = Qh),
          (p.extendWith = bo),
          lc(p, p),
          (p.add = t1),
          (p.attempt = nl),
          (p.camelCase = s0),
          (p.capitalize = tl),
          (p.ceil = r1),
          (p.clamp = r0),
          (p.clone = Qv),
          (p.cloneDeep = Xv),
          (p.cloneDeepWith = Zv),
          (p.cloneWith = Yv),
          (p.conformsTo = em),
          (p.deburr = rl),
          (p.defaultTo = D0),
          (p.divide = i1),
          (p.endsWith = o0),
          (p.eq = Ur),
          (p.escape = a0),
          (p.escapeRegExp = c0),
          (p.every = gv),
          (p.find = vv),
          (p.findIndex = Oh),
          (p.findKey = Cm),
          (p.findLast = mv),
          (p.findLastIndex = Ah),
          (p.findLastKey = Tm),
          (p.floor = n1),
          (p.forEach = Dh),
          (p.forEachRight = Lh),
          (p.forIn = Nm),
          (p.forInRight = $m),
          (p.forOwn = Dm),
          (p.forOwnRight = Lm),
          (p.get = oc),
          (p.gt = tm),
          (p.gte = rm),
          (p.has = jm),
          (p.hasIn = ac),
          (p.head = Ch),
          (p.identity = pr),
          (p.includes = Iv),
          (p.indexOf = my),
          (p.inRange = i0),
          (p.invoke = zm),
          (p.isArguments = Wi),
          (p.isArray = we),
          (p.isArrayBuffer = im),
          (p.isArrayLike = lr),
          (p.isArrayLikeObject = Et),
          (p.isBoolean = nm),
          (p.isBuffer = Ri),
          (p.isDate = sm),
          (p.isElement = om),
          (p.isEmpty = am),
          (p.isEqual = cm),
          (p.isEqualWith = um),
          (p.isError = nc),
          (p.isFinite = hm),
          (p.isFunction = ui),
          (p.isInteger = Hh),
          (p.isLength = mo),
          (p.isMap = Bh),
          (p.isMatch = lm),
          (p.isMatchWith = fm),
          (p.isNaN = pm),
          (p.isNative = dm),
          (p.isNil = ym),
          (p.isNull = gm),
          (p.isNumber = Kh),
          (p.isObject = ht),
          (p.isObjectLike = mt),
          (p.isPlainObject = Xn),
          (p.isRegExp = sc),
          (p.isSafeInteger = vm),
          (p.isSet = Vh),
          (p.isString = wo),
          (p.isSymbol = _r),
          (p.isTypedArray = _n),
          (p.isUndefined = mm),
          (p.isWeakMap = wm),
          (p.isWeakSet = bm),
          (p.join = Iy),
          (p.kebabCase = u0),
          (p.last = Nr),
          (p.lastIndexOf = xy),
          (p.lowerCase = h0),
          (p.lowerFirst = l0),
          (p.lt = _m),
          (p.lte = Em),
          (p.max = s1),
          (p.maxBy = o1),
          (p.mean = a1),
          (p.meanBy = c1),
          (p.min = u1),
          (p.minBy = h1),
          (p.stubArray = pc),
          (p.stubFalse = dc),
          (p.stubObject = J0),
          (p.stubString = Q0),
          (p.stubTrue = Y0),
          (p.multiply = l1),
          (p.nth = Sy),
          (p.noConflict = z0),
          (p.noop = fc),
          (p.now = go),
          (p.pad = f0),
          (p.padEnd = p0),
          (p.padStart = d0),
          (p.parseInt = g0),
          (p.random = n0),
          (p.reduce = Av),
          (p.reduceRight = Rv),
          (p.repeat = y0),
          (p.replace = v0),
          (p.result = Gm),
          (p.round = f1),
          (p.runInContext = P),
          (p.sample = Tv),
          (p.size = Dv),
          (p.snakeCase = m0),
          (p.some = Lv),
          (p.sortedIndex = Ny),
          (p.sortedIndexBy = $y),
          (p.sortedIndexOf = Dy),
          (p.sortedLastIndex = Ly),
          (p.sortedLastIndexBy = Fy),
          (p.sortedLastIndexOf = My),
          (p.startCase = b0),
          (p.startsWith = _0),
          (p.subtract = p1),
          (p.sum = d1),
          (p.sumBy = g1),
          (p.template = E0),
          (p.times = X0),
          (p.toFinite = hi),
          (p.toInteger = be),
          (p.toLength = Gh),
          (p.toLower = I0),
          (p.toNumber = $r),
          (p.toSafeInteger = Im),
          (p.toString = Me),
          (p.toUpper = x0),
          (p.trim = S0),
          (p.trimEnd = P0),
          (p.trimStart = O0),
          (p.truncate = A0),
          (p.unescape = R0),
          (p.uniqueId = e1),
          (p.upperCase = C0),
          (p.upperFirst = cc),
          (p.each = Dh),
          (p.eachRight = Lh),
          (p.first = Ch),
          lc(
            p,
            (function () {
              var e = {};
              return (
                Jr(p, function (i, o) {
                  Ue.call(p.prototype, o) || (e[o] = i);
                }),
                e
              );
            })(),
            { chain: !1 },
          ),
          (p.VERSION = s),
          Or(['bind', 'bindKey', 'curry', 'curryRight', 'partial', 'partialRight'], function (e) {
            p[e].placeholder = p;
          }),
          Or(['drop', 'take'], function (e, i) {
            (Oe.prototype[e] = function (o) {
              o = o === r ? 1 : jt(be(o), 0);
              var c = this.__filtered__ && !i ? new Oe(this) : this.clone();
              return (
                c.__filtered__
                  ? (c.__takeCount__ = Jt(o, c.__takeCount__))
                  : c.__views__.push({ size: Jt(o, W), type: e + (c.__dir__ < 0 ? 'Right' : '') }),
                c
              );
            }),
              (Oe.prototype[e + 'Right'] = function (o) {
                return this.reverse()[e](o).reverse();
              });
          }),
          Or(['filter', 'map', 'takeWhile'], function (e, i) {
            var o = i + 1,
              c = o == m || o == X;
            Oe.prototype[e] = function (l) {
              var d = this.clone();
              return (
                d.__iteratees__.push({ iteratee: se(l, 3), type: o }),
                (d.__filtered__ = d.__filtered__ || c),
                d
              );
            };
          }),
          Or(['head', 'last'], function (e, i) {
            var o = 'take' + (i ? 'Right' : '');
            Oe.prototype[e] = function () {
              return this[o](1).value()[0];
            };
          }),
          Or(['initial', 'tail'], function (e, i) {
            var o = 'drop' + (i ? '' : 'Right');
            Oe.prototype[e] = function () {
              return this.__filtered__ ? new Oe(this) : this[o](1);
            };
          }),
          (Oe.prototype.compact = function () {
            return this.filter(pr);
          }),
          (Oe.prototype.find = function (e) {
            return this.filter(e).head();
          }),
          (Oe.prototype.findLast = function (e) {
            return this.reverse().find(e);
          }),
          (Oe.prototype.invokeMap = xe(function (e, i) {
            return typeof e == 'function'
              ? new Oe(this)
              : this.map(function (o) {
                  return Vn(o, e, i);
                });
          })),
          (Oe.prototype.reject = function (e) {
            return this.filter(vo(se(e)));
          }),
          (Oe.prototype.slice = function (e, i) {
            e = be(e);
            var o = this;
            return o.__filtered__ && (e > 0 || i < 0)
              ? new Oe(o)
              : (e < 0 ? (o = o.takeRight(-e)) : e && (o = o.drop(e)),
                i !== r && ((i = be(i)), (o = i < 0 ? o.dropRight(-i) : o.take(i - e))),
                o);
          }),
          (Oe.prototype.takeRightWhile = function (e) {
            return this.reverse().takeWhile(e).reverse();
          }),
          (Oe.prototype.toArray = function () {
            return this.take(W);
          }),
          Jr(Oe.prototype, function (e, i) {
            var o = /^(?:filter|find|map|reject)|While$/.test(i),
              c = /^(?:head|last)$/.test(i),
              l = p[c ? 'take' + (i == 'last' ? 'Right' : '') : i],
              d = c || /^find/.test(i);
            l &&
              (p.prototype[i] = function () {
                var w = this.__wrapped__,
                  _ = c ? [1] : arguments,
                  A = w instanceof Oe,
                  M = _[0],
                  j = A || we(w),
                  H = function (Se) {
                    var Re = l.apply(p, Ei([Se], _));
                    return c && Q ? Re[0] : Re;
                  };
                j && o && typeof M == 'function' && M.length != 1 && (A = j = !1);
                var Q = this.__chain__,
                  te = !!this.__actions__.length,
                  oe = d && !Q,
                  Ee = A && !te;
                if (!d && j) {
                  w = Ee ? w : new Oe(this);
                  var ae = e.apply(w, _);
                  return ae.__actions__.push({ func: fo, args: [H], thisArg: r }), new Rr(ae, Q);
                }
                return oe && Ee
                  ? e.apply(this, _)
                  : ((ae = this.thru(H)), oe ? (c ? ae.value()[0] : ae.value()) : ae);
              });
          }),
          Or(['pop', 'push', 'shift', 'sort', 'splice', 'unshift'], function (e) {
            var i = js[e],
              o = /^(?:push|sort|unshift)$/.test(e) ? 'tap' : 'thru',
              c = /^(?:pop|shift)$/.test(e);
            p.prototype[e] = function () {
              var l = arguments;
              if (c && !this.__chain__) {
                var d = this.value();
                return i.apply(we(d) ? d : [], l);
              }
              return this[o](function (w) {
                return i.apply(we(w) ? w : [], l);
              });
            };
          }),
          Jr(Oe.prototype, function (e, i) {
            var o = p[i];
            if (o) {
              var c = o.name + '';
              Ue.call(yn, c) || (yn[c] = []), yn[c].push({ name: i, func: o });
            }
          }),
          (yn[so(r, he).name] = [{ name: 'wrapper', func: r }]),
          (Oe.prototype.clone = Rd),
          (Oe.prototype.reverse = Cd),
          (Oe.prototype.value = Td),
          (p.prototype.at = ov),
          (p.prototype.chain = av),
          (p.prototype.commit = cv),
          (p.prototype.next = uv),
          (p.prototype.plant = lv),
          (p.prototype.reverse = fv),
          (p.prototype.toJSON = p.prototype.valueOf = p.prototype.value = pv),
          (p.prototype.first = p.prototype.head),
          Un && (p.prototype[Un] = hv),
          p
        );
      },
      pn = cd();
    _t ? (((_t.exports = pn)._ = pn), (Ge._ = pn)) : (Ae._ = pn);
  }).call(ss);
})(kc, kc.exports);
var Vx = Object.defineProperty,
  Wx = Object.defineProperties,
  Gx = Object.getOwnPropertyDescriptors,
  If = Object.getOwnPropertySymbols,
  Jx = Object.prototype.hasOwnProperty,
  Qx = Object.prototype.propertyIsEnumerable,
  xf = (n, t, r) =>
    t in n ? Vx(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  So = (n, t) => {
    for (var r in t || (t = {})) Jx.call(t, r) && xf(n, r, t[r]);
    if (If) for (var r of If(t)) Qx.call(t, r) && xf(n, r, t[r]);
    return n;
  },
  Yx = (n, t) => Wx(n, Gx(t));
function Ni(n, t, r) {
  var s;
  const a = rw(n);
  return (
    ((s = t.rpcMap) == null ? void 0 : s[a.reference]) ||
    `${Kx}?chainId=${a.namespace}:${a.reference}&projectId=${r}`
  );
}
function tn(n) {
  return n.includes(':') ? n.split(':')[1] : n;
}
function Mp(n) {
  return n.map((t) => `${t.split(':')[0]}:${t.split(':')[1]}`);
}
function Xx(n, t) {
  const r = Object.keys(t.namespaces).filter((a) => a.includes(n));
  if (!r.length) return [];
  const s = [];
  return (
    r.forEach((a) => {
      const u = t.namespaces[a].accounts;
      s.push(...u);
    }),
    s
  );
}
function Zx(n = {}, t = {}) {
  const r = Sf(n),
    s = Sf(t);
  return kc.exports.merge(r, s);
}
function Sf(n) {
  var t, r, s, a;
  const u = {};
  if (!On(n)) return u;
  for (const [f, g] of Object.entries(n)) {
    const b = Qc(f) ? [f] : g.chains,
      y = g.methods || [],
      E = g.events || [],
      O = g.rpcMap || {},
      T = os(f);
    u[T] = Yx(So(So({}, u[T]), g), {
      chains: yc(b, (t = u[T]) == null ? void 0 : t.chains),
      methods: yc(y, (r = u[T]) == null ? void 0 : r.methods),
      events: yc(E, (s = u[T]) == null ? void 0 : s.events),
      rpcMap: So(So({}, O), (a = u[T]) == null ? void 0 : a.rpcMap),
    });
  }
  return u;
}
function eS(n) {
  return n.includes(':') ? n.split(':')[2] : n;
}
function tS(n) {
  const t = {};
  for (const [r, s] of Object.entries(n)) {
    const a = s.methods || [],
      u = s.events || [],
      f = s.accounts || [],
      g = Qc(r) ? [r] : s.chains ? s.chains : Mp(s.accounts);
    t[r] = { chains: g, methods: a, events: u, accounts: f };
  }
  return t;
}
function Rc(n) {
  return typeof n == 'number'
    ? n
    : n.includes('0x')
      ? parseInt(n, 16)
      : n.includes(':')
        ? Number(n.split(':')[1])
        : Number(n);
}
const jp = {},
  ot = (n) => jp[n],
  Cc = (n, t) => {
    jp[n] = t;
  };
class rS {
  constructor(t) {
    (this.name = 'polkadot'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t.filter((r) => r.split(':')[1] === this.chainId.toString()).map((r) => r.split(':')[2]) ||
          []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = tn(r);
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class iS {
  constructor(t) {
    (this.name = 'eip155'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.httpProviders = this.createHttpProviders()),
      (this.chainId = parseInt(this.getDefaultChain()));
  }
  async request(t) {
    switch (t.request.method) {
      case 'eth_requestAccounts':
        return this.getAccounts();
      case 'eth_accounts':
        return this.getAccounts();
      case 'wallet_switchEthereumChain':
        return await this.handleSwitchChain(t);
      case 'eth_chainId':
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(t.request.method)
      ? await this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(parseInt(t), r),
      (this.chainId = parseInt(t)),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId.toString();
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  createHttpProvider(t, r) {
    const s = r || Ni(`${this.name}:${t}`, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = parseInt(tn(r));
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  getHttpProvider() {
    const t = this.chainId,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  async handleSwitchChain(t) {
    var r, s;
    let a = t.request.params ? ((r = t.request.params[0]) == null ? void 0 : r.chainId) : '0x0';
    a = a.startsWith('0x') ? a : `0x${a}`;
    const u = parseInt(a, 16);
    if (this.isChainApproved(u)) this.setDefaultChain(`${u}`);
    else if (this.namespace.methods.includes('wallet_switchEthereumChain'))
      await this.client.request({
        topic: t.topic,
        request: { method: t.request.method, params: [{ chainId: a }] },
        chainId: (s = this.namespace.chains) == null ? void 0 : s[0],
      }),
        this.setDefaultChain(`${u}`);
    else
      throw new Error(
        `Failed to switch to chain 'eip155:${u}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`,
      );
    return null;
  }
  isChainApproved(t) {
    return this.namespace.chains.includes(`${this.name}:${t}`);
  }
}
class nS {
  constructor(t) {
    (this.name = 'solana'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = tn(r);
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class sS {
  constructor(t) {
    (this.name = 'cosmos'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = tn(r);
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class oS {
  constructor(t) {
    (this.name = 'cip34'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        const s = this.getCardanoRPCUrl(r),
          a = tn(r);
        t[a] = this.createHttpProvider(a, s);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  getCardanoRPCUrl(t) {
    const r = this.namespace.rpcMap;
    if (r) return r[t];
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || this.getCardanoRPCUrl(t);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class aS {
  constructor(t) {
    (this.name = 'elrond'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = tn(r);
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class cS {
  constructor(t) {
    (this.name = 'multiversx'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    this.httpProviders[t] || this.setHttpProvider(t, r),
      (this.chainId = t),
      this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${t}`);
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? [
          ...new Set(
            t
              .filter((r) => r.split(':')[1] === this.chainId.toString())
              .map((r) => r.split(':')[2]),
          ),
        ]
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        const a = tn(r);
        t[a] = this.createHttpProvider(a, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace, this.client.core.projectId);
    if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
    return new vi(new $i(s, ot('disableProviderPing')));
  }
}
class uS {
  constructor(t) {
    (this.name = 'near'),
      (this.namespace = t.namespace),
      (this.events = ot('events')),
      (this.client = ot('client')),
      (this.chainId = this.getDefaultChain()),
      (this.httpProviders = this.createHttpProviders());
  }
  updateNamespace(t) {
    this.namespace = Object.assign(this.namespace, t);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId) return this.chainId;
    if (this.namespace.defaultChain) return this.namespace.defaultChain;
    const t = this.namespace.chains[0];
    if (!t) throw new Error('ChainId not found');
    return t.split(':')[1];
  }
  request(t) {
    return this.namespace.methods.includes(t.request.method)
      ? this.client.request(t)
      : this.getHttpProvider().request(t.request);
  }
  setDefaultChain(t, r) {
    if (((this.chainId = t), !this.httpProviders[t])) {
      const s = r || Ni(`${this.name}:${t}`, this.namespace);
      if (!s) throw new Error(`No RPC url provided for chainId: ${t}`);
      this.setHttpProvider(t, s);
    }
    this.events.emit(mi.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const t = this.namespace.accounts;
    return t
      ? t.filter((r) => r.split(':')[1] === this.chainId.toString()).map((r) => r.split(':')[2]) ||
          []
      : [];
  }
  createHttpProviders() {
    const t = {};
    return (
      this.namespace.chains.forEach((r) => {
        var s;
        t[r] = this.createHttpProvider(r, (s = this.namespace.rpcMap) == null ? void 0 : s[r]);
      }),
      t
    );
  }
  getHttpProvider() {
    const t = `${this.name}:${this.chainId}`,
      r = this.httpProviders[t];
    if (typeof r > 'u') throw new Error(`JSON-RPC provider for ${t} not found`);
    return r;
  }
  setHttpProvider(t, r) {
    const s = this.createHttpProvider(t, r);
    s && (this.httpProviders[t] = s);
  }
  createHttpProvider(t, r) {
    const s = r || Ni(t, this.namespace);
    return typeof s > 'u' ? void 0 : new vi(new $i(s, ot('disableProviderPing')));
  }
}
var hS = Object.defineProperty,
  lS = Object.defineProperties,
  fS = Object.getOwnPropertyDescriptors,
  Pf = Object.getOwnPropertySymbols,
  pS = Object.prototype.hasOwnProperty,
  dS = Object.prototype.propertyIsEnumerable,
  Of = (n, t, r) =>
    t in n ? hS(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  Po = (n, t) => {
    for (var r in t || (t = {})) pS.call(t, r) && Of(n, r, t[r]);
    if (Pf) for (var r of Pf(t)) dS.call(t, r) && Of(n, r, t[r]);
    return n;
  },
  Tc = (n, t) => lS(n, fS(t));
class ou {
  constructor(t) {
    (this.events = new Bt()),
      (this.rpcProviders = {}),
      (this.shouldAbortPairingAttempt = !1),
      (this.maxPairingAttempts = 10),
      (this.disableProviderPing = !1),
      (this.providerOpts = t),
      (this.logger =
        typeof (t == null ? void 0 : t.logger) < 'u' &&
        typeof (t == null ? void 0 : t.logger) != 'string'
          ? t.logger
          : Ce.pino(Ce.getDefaultLoggerOptions({ level: (t == null ? void 0 : t.logger) || _f }))),
      (this.disableProviderPing = (t == null ? void 0 : t.disableProviderPing) || !1);
  }
  static async init(t) {
    const r = new ou(t);
    return await r.initialize(), r;
  }
  async request(t, r) {
    const [s, a] = this.validateChain(r);
    if (!this.session) throw new Error('Please call connect() before request()');
    return await this.getProvider(s).request({
      request: Po({}, t),
      chainId: `${s}:${a}`,
      topic: this.session.topic,
    });
  }
  sendAsync(t, r, s) {
    this.request(t, s)
      .then((a) => r(null, a))
      .catch((a) => r(a, void 0));
  }
  async enable() {
    if (!this.client) throw new Error('Sign Client not initialized');
    return (
      this.session ||
        (await this.connect({
          namespaces: this.namespaces,
          optionalNamespaces: this.optionalNamespaces,
          sessionProperties: this.sessionProperties,
        })),
      await this.requestAccounts()
    );
  }
  async disconnect() {
    var t;
    if (!this.session) throw new Error('Please call connect() before enable()');
    await this.client.disconnect({
      topic: (t = this.session) == null ? void 0 : t.topic,
      reason: xt('USER_DISCONNECTED'),
    }),
      await this.cleanup();
  }
  async connect(t) {
    if (!this.client) throw new Error('Sign Client not initialized');
    if ((this.setNamespaces(t), await this.cleanupPendingPairings(), !t.skipPairing))
      return await this.pair(t.pairingTopic);
  }
  on(t, r) {
    this.events.on(t, r);
  }
  once(t, r) {
    this.events.once(t, r);
  }
  removeListener(t, r) {
    this.events.removeListener(t, r);
  }
  off(t, r) {
    this.events.off(t, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(t) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt) throw new Error('Pairing aborted');
      if (r >= this.maxPairingAttempts) throw new Error('Max auto pairing attempts reached');
      const { uri: s, approval: a } = await this.client.connect({
        pairingTopic: t,
        requiredNamespaces: this.namespaces,
        optionalNamespaces: this.optionalNamespaces,
        sessionProperties: this.sessionProperties,
      });
      s && ((this.uri = s), this.events.emit('display_uri', s)),
        await a()
          .then((u) => {
            (this.session = u),
              this.namespaces ||
                ((this.namespaces = tS(u.namespaces)), this.persist('namespaces', this.namespaces));
          })
          .catch((u) => {
            if (u.message !== Lp) throw u;
            r++;
          });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(t, r) {
    try {
      if (!this.session) return;
      const [s, a] = this.validateChain(t);
      this.getProvider(s).setDefaultChain(a, r);
    } catch (s) {
      if (!/Please call connect/.test(s.message)) throw s;
    }
  }
  async cleanupPendingPairings(t = {}) {
    this.logger.info('Cleaning up inactive pairings...');
    const r = this.client.pairing.getAll();
    if (Zr(r)) {
      for (const s of r)
        t.deletePairings
          ? this.client.core.expirer.set(s.topic, 0)
          : await this.client.core.relayer.subscriber.unsubscribe(s.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (
      ((this.namespaces = await this.getFromStore('namespaces')),
      (this.optionalNamespaces = (await this.getFromStore('optionalNamespaces')) || {}),
      this.client.session.length)
    ) {
      const t = this.client.session.keys.length - 1;
      (this.session = this.client.session.get(this.client.session.keys[t])), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace('Initialized'),
      await this.createClient(),
      await this.checkStorage(),
      this.registerEventListeners();
  }
  async createClient() {
    (this.client =
      this.providerOpts.client ||
      (await jx.init({
        logger: this.providerOpts.logger || _f,
        relayUrl: this.providerOpts.relayUrl || kx,
        projectId: this.providerOpts.projectId,
        metadata: this.providerOpts.metadata,
        storageOptions: this.providerOpts.storageOptions,
        storage: this.providerOpts.storage,
        name: this.providerOpts.name,
      }))),
      this.logger.trace('SignClient Initialized');
  }
  createProviders() {
    if (!this.client) throw new Error('Sign Client not initialized');
    if (!this.session)
      throw new Error('Session not initialized. Please call connect() before enable()');
    const t = [...new Set(Object.keys(this.session.namespaces).map((r) => os(r)))];
    Cc('client', this.client),
      Cc('events', this.events),
      Cc('disableProviderPing', this.disableProviderPing),
      t.forEach((r) => {
        if (!this.session) return;
        const s = Xx(r, this.session),
          a = Mp(s),
          u = Zx(this.namespaces, this.optionalNamespaces),
          f = Tc(Po({}, u[r]), { accounts: s, chains: a });
        switch (r) {
          case 'eip155':
            this.rpcProviders[r] = new iS({ namespace: f });
            break;
          case 'solana':
            this.rpcProviders[r] = new nS({ namespace: f });
            break;
          case 'cosmos':
            this.rpcProviders[r] = new sS({ namespace: f });
            break;
          case 'polkadot':
            this.rpcProviders[r] = new rS({ namespace: f });
            break;
          case 'cip34':
            this.rpcProviders[r] = new oS({ namespace: f });
            break;
          case 'elrond':
            this.rpcProviders[r] = new aS({ namespace: f });
            break;
          case 'multiversx':
            this.rpcProviders[r] = new cS({ namespace: f });
            break;
          case 'near':
            this.rpcProviders[r] = new uS({ namespace: f });
            break;
        }
      });
  }
  registerEventListeners() {
    if (typeof this.client > 'u') throw new Error('Sign Client is not initialized');
    this.client.on('session_ping', (t) => {
      this.events.emit('session_ping', t);
    }),
      this.client.on('session_event', (t) => {
        const { params: r } = t,
          { event: s } = r;
        if (s.name === 'accountsChanged') {
          const a = s.data;
          a && Zr(a) && this.events.emit('accountsChanged', a.map(eS));
        } else if (s.name === 'chainChanged') {
          const a = r.chainId,
            u = r.event.data,
            f = os(a),
            g = Rc(a) !== Rc(u) ? `${f}:${Rc(u)}` : a;
          this.onChainChanged(g);
        } else this.events.emit(s.name, s.data);
        this.events.emit('session_event', t);
      }),
      this.client.on('session_update', ({ topic: t, params: r }) => {
        var s;
        const { namespaces: a } = r,
          u = (s = this.client) == null ? void 0 : s.session.get(t);
        (this.session = Tc(Po({}, u), { namespaces: a })),
          this.onSessionUpdate(),
          this.events.emit('session_update', { topic: t, params: r });
      }),
      this.client.on('session_delete', async (t) => {
        await this.cleanup(),
          this.events.emit('session_delete', t),
          this.events.emit('disconnect', Tc(Po({}, xt('USER_DISCONNECTED')), { data: t.topic }));
      }),
      this.on(mi.DEFAULT_CHAIN_CHANGED, (t) => {
        this.onChainChanged(t, !0);
      });
  }
  getProvider(t) {
    if (!this.rpcProviders[t]) throw new Error(`Provider not found: ${t}`);
    return this.rpcProviders[t];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((t) => {
      var r;
      this.getProvider(t).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[t]);
    });
  }
  setNamespaces(t) {
    const { namespaces: r, optionalNamespaces: s, sessionProperties: a } = t;
    r && Object.keys(r).length && (this.namespaces = r),
      s && Object.keys(s).length && (this.optionalNamespaces = s),
      (this.sessionProperties = a),
      this.persist('namespaces', r),
      this.persist('optionalNamespaces', s);
  }
  validateChain(t) {
    const [r, s] = (t == null ? void 0 : t.split(':')) || ['', ''];
    if (!this.namespaces || !Object.keys(this.namespaces).length) return [r, s];
    if (
      r &&
      !Object.keys(this.namespaces || {})
        .map((f) => os(f))
        .includes(r)
    )
      throw new Error(
        `Namespace '${r}' is not configured. Please call connect() first with namespace config.`,
      );
    if (r && s) return [r, s];
    const a = os(Object.keys(this.namespaces)[0]),
      u = this.rpcProviders[a].getDefaultChain();
    return [a, u];
  }
  async requestAccounts() {
    const [t] = this.validateChain();
    return await this.getProvider(t).requestAccounts();
  }
  onChainChanged(t, r = !1) {
    var s;
    if (!this.namespaces) return;
    const [a, u] = this.validateChain(t);
    r || this.getProvider(a).setDefaultChain(u),
      (((s = this.namespaces[a]) != null ? s : this.namespaces[`${a}:${u}`]).defaultChain = u),
      this.persist('namespaces', this.namespaces),
      this.events.emit('chainChanged', u);
  }
  onConnect() {
    this.createProviders(), this.events.emit('connect', { session: this.session });
  }
  async cleanup() {
    (this.session = void 0),
      (this.namespaces = void 0),
      (this.optionalNamespaces = void 0),
      (this.sessionProperties = void 0),
      this.persist('namespaces', void 0),
      this.persist('optionalNamespaces', void 0),
      this.persist('sessionProperties', void 0),
      await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(t, r) {
    this.client.core.storage.setItem(`${Ef}/${t}`, r);
  }
  async getFromStore(t) {
    return await this.client.core.storage.getItem(`${Ef}/${t}`);
  }
}
const gS = ou,
  yS = 'wc',
  vS = 'ethereum_provider',
  mS = `${yS}@2:${vS}:`,
  wS = 'https://rpc.walletconnect.com/v1/',
  Hc = ['eth_sendTransaction', 'personal_sign'],
  bS = [
    'eth_accounts',
    'eth_requestAccounts',
    'eth_sendRawTransaction',
    'eth_sign',
    'eth_signTransaction',
    'eth_signTypedData',
    'eth_signTypedData_v3',
    'eth_signTypedData_v4',
    'eth_sendTransaction',
    'personal_sign',
    'wallet_switchEthereumChain',
    'wallet_addEthereumChain',
    'wallet_getPermissions',
    'wallet_requestPermissions',
    'wallet_registerOnboarding',
    'wallet_watchAsset',
    'wallet_scanQRCode',
  ],
  Bc = ['chainChanged', 'accountsChanged'],
  _S = ['chainChanged', 'accountsChanged', 'message', 'disconnect', 'connect'];
var ES = Object.defineProperty,
  IS = Object.defineProperties,
  xS = Object.getOwnPropertyDescriptors,
  Af = Object.getOwnPropertySymbols,
  SS = Object.prototype.hasOwnProperty,
  PS = Object.prototype.propertyIsEnumerable,
  Rf = (n, t, r) =>
    t in n ? ES(n, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : (n[t] = r),
  cs = (n, t) => {
    for (var r in t || (t = {})) SS.call(t, r) && Rf(n, r, t[r]);
    if (Af) for (var r of Af(t)) PS.call(t, r) && Rf(n, r, t[r]);
    return n;
  },
  Cf = (n, t) => IS(n, xS(t));
function jo(n) {
  return Number(n[0].split(':')[1]);
}
function Nc(n) {
  return `0x${n.toString(16)}`;
}
function OS(n) {
  const {
    chains: t,
    optionalChains: r,
    methods: s,
    optionalMethods: a,
    events: u,
    optionalEvents: f,
    rpcMap: g,
  } = n;
  if (!Zr(t)) throw new Error('Invalid chains');
  const b = {
      chains: t,
      methods: s || Hc,
      events: u || Bc,
      rpcMap: cs({}, t.length ? { [jo(t)]: g[jo(t)] } : {}),
    },
    y = u == null ? void 0 : u.filter((U) => !Bc.includes(U)),
    E = s == null ? void 0 : s.filter((U) => !Hc.includes(U));
  if (!r && !f && !a && !(y != null && y.length) && !(E != null && E.length))
    return { required: t.length ? b : void 0 };
  const O = ((y == null ? void 0 : y.length) && (E == null ? void 0 : E.length)) || !r,
    T = {
      chains: [...new Set(O ? b.chains.concat(r || []) : r)],
      methods: [...new Set(b.methods.concat(a != null && a.length ? a : bS))],
      events: [...new Set(b.events.concat(f != null && f.length ? f : _S))],
      rpcMap: g,
    };
  return { required: t.length ? b : void 0, optional: r.length ? T : void 0 };
}
class au {
  constructor() {
    (this.events = new Bt.EventEmitter()),
      (this.namespace = 'eip155'),
      (this.accounts = []),
      (this.chainId = 1),
      (this.STORAGE_KEY = mS),
      (this.on = (t, r) => (this.events.on(t, r), this)),
      (this.once = (t, r) => (this.events.once(t, r), this)),
      (this.removeListener = (t, r) => (this.events.removeListener(t, r), this)),
      (this.off = (t, r) => (this.events.off(t, r), this)),
      (this.parseAccount = (t) =>
        this.isCompatibleChainId(t) ? this.parseAccountId(t).address : t),
      (this.signer = {}),
      (this.rpc = {});
  }
  static async init(t) {
    const r = new au();
    return await r.initialize(t), r;
  }
  async request(t) {
    return await this.signer.request(t, this.formatChainId(this.chainId));
  }
  sendAsync(t, r) {
    this.signer.sendAsync(t, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return (
      this.session || (await this.connect()), await this.request({ method: 'eth_requestAccounts' })
    );
  }
  async connect(t) {
    if (!this.signer.client) throw new Error('Provider not initialized. Call init() first');
    this.loadConnectOpts(t);
    const { required: r, optional: s } = OS(this.rpc);
    try {
      const a = await new Promise(async (f, g) => {
        var b;
        this.rpc.showQrModal &&
          ((b = this.modal) == null ||
            b.subscribeModal((y) => {
              !y.open &&
                !this.signer.session &&
                (this.signer.abortPairingAttempt(),
                g(new Error('Connection request reset. Please try again.')));
            })),
          await this.signer
            .connect(
              Cf(
                cs(
                  { namespaces: cs({}, r && { [this.namespace]: r }) },
                  s && { optionalNamespaces: { [this.namespace]: s } },
                ),
                { pairingTopic: t == null ? void 0 : t.pairingTopic },
              ),
            )
            .then((y) => {
              f(y);
            })
            .catch((y) => {
              g(new Error(y.message));
            });
      });
      if (!a) return;
      const u = iw(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : u),
        this.setAccounts(u),
        this.events.emit('connect', { chainId: Nc(this.chainId) });
    } catch (a) {
      throw (this.signer.logger.error(a), a);
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && (await this.signer.disconnect()), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on('session_event', (t) => {
      const { params: r } = t,
        { event: s } = r;
      s.name === 'accountsChanged'
        ? ((this.accounts = this.parseAccounts(s.data)),
          this.events.emit('accountsChanged', this.accounts))
        : s.name === 'chainChanged'
          ? this.setChainId(this.formatChainId(s.data))
          : this.events.emit(s.name, s.data),
        this.events.emit('session_event', t);
    }),
      this.signer.on('chainChanged', (t) => {
        const r = parseInt(t);
        (this.chainId = r), this.events.emit('chainChanged', Nc(this.chainId)), this.persist();
      }),
      this.signer.on('session_update', (t) => {
        this.events.emit('session_update', t);
      }),
      this.signer.on('session_delete', (t) => {
        this.reset(),
          this.events.emit('session_delete', t),
          this.events.emit(
            'disconnect',
            Cf(cs({}, xt('USER_DISCONNECTED')), { data: t.topic, name: 'USER_DISCONNECTED' }),
          );
      }),
      this.signer.on('display_uri', (t) => {
        var r, s;
        this.rpc.showQrModal &&
          ((r = this.modal) == null || r.closeModal(),
          (s = this.modal) == null || s.openModal({ uri: t })),
          this.events.emit('display_uri', t);
      });
  }
  switchEthereumChain(t) {
    this.request({ method: 'wallet_switchEthereumChain', params: [{ chainId: t.toString(16) }] });
  }
  isCompatibleChainId(t) {
    return typeof t == 'string' ? t.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(t) {
    return `${this.namespace}:${t}`;
  }
  parseChainId(t) {
    return Number(t.split(':')[1]);
  }
  setChainIds(t) {
    const r = t.filter((s) => this.isCompatibleChainId(s)).map((s) => this.parseChainId(s));
    r.length &&
      ((this.chainId = r[0]), this.events.emit('chainChanged', Nc(this.chainId)), this.persist());
  }
  setChainId(t) {
    if (this.isCompatibleChainId(t)) {
      const r = this.parseChainId(t);
      (this.chainId = r), this.switchEthereumChain(r);
    }
  }
  parseAccountId(t) {
    const [r, s, a] = t.split(':');
    return { chainId: `${r}:${s}`, address: a };
  }
  setAccounts(t) {
    (this.accounts = t
      .filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId)
      .map((r) => this.parseAccountId(r).address)),
      this.events.emit('accountsChanged', this.accounts);
  }
  getRpcConfig(t) {
    var r, s;
    const a = (r = t == null ? void 0 : t.chains) != null ? r : [],
      u = (s = t == null ? void 0 : t.optionalChains) != null ? s : [],
      f = a.concat(u);
    if (!f.length) throw new Error('No chains specified in either `chains` or `optionalChains`');
    const g = a.length ? (t == null ? void 0 : t.methods) || Hc : [],
      b = a.length ? (t == null ? void 0 : t.events) || Bc : [],
      y = (t == null ? void 0 : t.optionalMethods) || [],
      E = (t == null ? void 0 : t.optionalEvents) || [],
      O = (t == null ? void 0 : t.rpcMap) || this.buildRpcMap(f, t.projectId),
      T = (t == null ? void 0 : t.qrModalOptions) || void 0;
    return {
      chains: a == null ? void 0 : a.map((U) => this.formatChainId(U)),
      optionalChains: u.map((U) => this.formatChainId(U)),
      methods: g,
      events: b,
      optionalMethods: y,
      optionalEvents: E,
      rpcMap: O,
      showQrModal: !!(t != null && t.showQrModal),
      qrModalOptions: T,
      projectId: t.projectId,
      metadata: t.metadata,
    };
  }
  buildRpcMap(t, r) {
    const s = {};
    return (
      t.forEach((a) => {
        s[a] = this.getRpcUrl(a, r);
      }),
      s
    );
  }
  async initialize(t) {
    if (
      ((this.rpc = this.getRpcConfig(t)),
      (this.chainId = this.rpc.chains.length ? jo(this.rpc.chains) : jo(this.rpc.optionalChains)),
      (this.signer = await gS.init({
        projectId: this.rpc.projectId,
        metadata: this.rpc.metadata,
        disableProviderPing: t.disableProviderPing,
        relayUrl: t.relayUrl,
        storageOptions: t.storageOptions,
      })),
      this.registerEventListeners(),
      await this.loadPersistedSession(),
      this.rpc.showQrModal)
    ) {
      let r;
      try {
        const { WalletConnectModal: s } = await y1(
          () => import('./index-c300e2ee.js').then((a) => a.i),
          ['./index-c300e2ee.js', './iframe-26359f8d.js'],
          import.meta.url,
        );
        r = s;
      } catch {
        throw new Error('To use QR modal, please install @walletconnect/modal package');
      }
      if (r)
        try {
          this.modal = new r(
            cs(
              {
                walletConnectVersion: 2,
                projectId: this.rpc.projectId,
                standaloneChains: this.rpc.chains,
              },
              this.rpc.qrModalOptions,
            ),
          );
        } catch (s) {
          throw (
            (this.signer.logger.error(s),
            new Error('Could not generate WalletConnectModal Instance'))
          );
        }
    }
  }
  loadConnectOpts(t) {
    if (!t) return;
    const { chains: r, optionalChains: s, rpcMap: a } = t;
    r &&
      Zr(r) &&
      ((this.rpc.chains = r.map((u) => this.formatChainId(u))),
      r.forEach((u) => {
        this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
      })),
      s &&
        Zr(s) &&
        ((this.rpc.optionalChains = []),
        (this.rpc.optionalChains = s == null ? void 0 : s.map((u) => this.formatChainId(u))),
        s.forEach((u) => {
          this.rpc.rpcMap[u] = (a == null ? void 0 : a[u]) || this.getRpcUrl(u);
        }));
  }
  getRpcUrl(t, r) {
    var s;
    return (
      ((s = this.rpc.rpcMap) == null ? void 0 : s[t]) ||
      `${wS}?chainId=eip155:${t}&projectId=${r || this.rpc.projectId}`
    );
  }
  async loadPersistedSession() {
    if (!this.session) return;
    const t = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
      r = this.session.namespaces[`${this.namespace}:${t}`]
        ? this.session.namespaces[`${this.namespace}:${t}`]
        : this.session.namespaces[this.namespace];
    this.setChainIds(t ? [this.formatChainId(t)] : r == null ? void 0 : r.accounts),
      this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    (this.chainId = 1), (this.accounts = []);
  }
  persist() {
    this.session &&
      this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(t) {
    return typeof t == 'string' || t instanceof String
      ? [this.parseAccount(t)]
      : t.map((r) => this.parseAccount(r));
  }
}
const YS = au;
export {
  YS as EthereumProvider,
  _S as OPTIONAL_EVENTS,
  bS as OPTIONAL_METHODS,
  Bc as REQUIRED_EVENTS,
  Hc as REQUIRED_METHODS,
  au as default,
};

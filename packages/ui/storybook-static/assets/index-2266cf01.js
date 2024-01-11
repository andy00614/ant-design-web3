import { c as hu } from './_commonjsHelpers-042e6b4d.js';

function ir(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = Array(t); ++r < t; ) a[r] = e(u[r], r, u);
  return a;
}
var sr = ir;
function Dr() {
  (this.__data__ = []), (this.size = 0);
}
var Ar = Dr;
function or(u, e) {
  return u === e || (u !== u && e !== e);
}
var Se = or,
  Fr = Se;
function Cr(u, e) {
  for (var r = u.length; r--; ) if (Fr(u[r][0], e)) return r;
  return -1;
}
var mu = Cr,
  lr = mu,
  cr = Array.prototype,
  Er = cr.splice;
function pr(u) {
  var e = this.__data__,
    r = lr(e, u);
  if (r < 0) return !1;
  var t = e.length - 1;
  return r == t ? e.pop() : Er.call(e, r, 1), --this.size, !0;
}
var fr = pr,
  Br = mu;
function hr(u) {
  var e = this.__data__,
    r = Br(e, u);
  return r < 0 ? void 0 : e[r][1];
}
var yr = hr,
  dr = mu;
function vr(u) {
  return dr(this.__data__, u) > -1;
}
var gr = vr,
  mr = mu;
function _r(u, e) {
  var r = this.__data__,
    t = mr(r, u);
  return t < 0 ? (++this.size, r.push([u, e])) : (r[t][1] = e), this;
}
var xr = _r,
  Tr = Ar,
  br = fr,
  Sr = yr,
  $r = gr,
  wr = xr;
function uu(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
uu.prototype.clear = Tr;
uu.prototype.delete = br;
uu.prototype.get = Sr;
uu.prototype.has = $r;
uu.prototype.set = wr;
var _u = uu,
  Or = _u;
function Nr() {
  (this.__data__ = new Or()), (this.size = 0);
}
var Pr = Nr;
function Ir(u) {
  var e = this.__data__,
    r = e.delete(u);
  return (this.size = e.size), r;
}
var Rr = Ir;
function Lr(u) {
  return this.__data__.get(u);
}
var Mr = Lr;
function kr(u) {
  return this.__data__.has(u);
}
var Ur = kr,
  jr = typeof hu == 'object' && hu && hu.Object === Object && hu,
  $e = jr,
  Gr = $e,
  Kr = typeof self == 'object' && self && self.Object === Object && self,
  Hr = Gr || Kr || Function('return this')(),
  H = Hr,
  qr = H,
  Wr = qr.Symbol,
  xu = Wr,
  Zu = xu,
  we = Object.prototype,
  zr = we.hasOwnProperty,
  Vr = we.toString,
  su = Zu ? Zu.toStringTag : void 0;
function Jr(u) {
  var e = zr.call(u, su),
    r = u[su];
  try {
    u[su] = void 0;
    var t = !0;
  } catch {}
  var a = Vr.call(u);
  return t && (e ? (u[su] = r) : delete u[su]), a;
}
var Qr = Jr,
  Yr = Object.prototype,
  Xr = Yr.toString;
function Zr(u) {
  return Xr.call(u);
}
var ut = Zr,
  ue = xu,
  et = Qr,
  rt = ut,
  tt = '[object Null]',
  at = '[object Undefined]',
  ee = ue ? ue.toStringTag : void 0;
function nt(u) {
  return u == null ? (u === void 0 ? at : tt) : ee && ee in Object(u) ? et(u) : rt(u);
}
var cu = nt;
function it(u) {
  var e = typeof u;
  return u != null && (e == 'object' || e == 'function');
}
var Ku = it,
  st = cu,
  Dt = Ku,
  At = '[object AsyncFunction]',
  ot = '[object Function]',
  Ft = '[object GeneratorFunction]',
  Ct = '[object Proxy]';
function lt(u) {
  if (!Dt(u)) return !1;
  var e = st(u);
  return e == ot || e == Ft || e == At || e == Ct;
}
var Oe = lt,
  ct = H,
  Et = ct['__core-js_shared__'],
  pt = Et,
  Nu = pt,
  re = (function () {
    var u = /[^.]+$/.exec((Nu && Nu.keys && Nu.keys.IE_PROTO) || '');
    return u ? 'Symbol(src)_1.' + u : '';
  })();
function ft(u) {
  return !!re && re in u;
}
var Bt = ft,
  ht = Function.prototype,
  yt = ht.toString;
function dt(u) {
  if (u != null) {
    try {
      return yt.call(u);
    } catch {}
    try {
      return u + '';
    } catch {}
  }
  return '';
}
var Ne = dt,
  vt = Oe,
  gt = Bt,
  mt = Ku,
  _t = Ne,
  xt = /[\\^$.*+?()[\]{}|]/g,
  Tt = /^\[object .+?Constructor\]$/,
  bt = Function.prototype,
  St = Object.prototype,
  $t = bt.toString,
  wt = St.hasOwnProperty,
  Ot = RegExp(
    '^' +
      $t
        .call(wt)
        .replace(xt, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function Nt(u) {
  if (!mt(u) || gt(u)) return !1;
  var e = vt(u) ? Ot : Tt;
  return e.test(_t(u));
}
var Pt = Nt;
function It(u, e) {
  return u == null ? void 0 : u[e];
}
var Rt = It,
  Lt = Pt,
  Mt = Rt;
function kt(u, e) {
  var r = Mt(u, e);
  return Lt(r) ? r : void 0;
}
var Y = kt,
  Ut = Y,
  jt = H,
  Gt = Ut(jt, 'Map'),
  Hu = Gt,
  Kt = Y,
  Ht = Kt(Object, 'create'),
  Tu = Ht,
  te = Tu;
function qt() {
  (this.__data__ = te ? te(null) : {}), (this.size = 0);
}
var Wt = qt;
function zt(u) {
  var e = this.has(u) && delete this.__data__[u];
  return (this.size -= e ? 1 : 0), e;
}
var Vt = zt,
  Jt = Tu,
  Qt = '__lodash_hash_undefined__',
  Yt = Object.prototype,
  Xt = Yt.hasOwnProperty;
function Zt(u) {
  var e = this.__data__;
  if (Jt) {
    var r = e[u];
    return r === Qt ? void 0 : r;
  }
  return Xt.call(e, u) ? e[u] : void 0;
}
var u0 = Zt,
  e0 = Tu,
  r0 = Object.prototype,
  t0 = r0.hasOwnProperty;
function a0(u) {
  var e = this.__data__;
  return e0 ? e[u] !== void 0 : t0.call(e, u);
}
var n0 = a0,
  i0 = Tu,
  s0 = '__lodash_hash_undefined__';
function D0(u, e) {
  var r = this.__data__;
  return (this.size += this.has(u) ? 0 : 1), (r[u] = i0 && e === void 0 ? s0 : e), this;
}
var A0 = D0,
  o0 = Wt,
  F0 = Vt,
  C0 = u0,
  l0 = n0,
  c0 = A0;
function eu(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
eu.prototype.clear = o0;
eu.prototype.delete = F0;
eu.prototype.get = C0;
eu.prototype.has = l0;
eu.prototype.set = c0;
var E0 = eu,
  ae = E0,
  p0 = _u,
  f0 = Hu;
function B0() {
  (this.size = 0), (this.__data__ = { hash: new ae(), map: new (f0 || p0)(), string: new ae() });
}
var h0 = B0;
function y0(u) {
  var e = typeof u;
  return e == 'string' || e == 'number' || e == 'symbol' || e == 'boolean'
    ? u !== '__proto__'
    : u === null;
}
var d0 = y0,
  v0 = d0;
function g0(u, e) {
  var r = u.__data__;
  return v0(e) ? r[typeof e == 'string' ? 'string' : 'hash'] : r.map;
}
var bu = g0,
  m0 = bu;
function _0(u) {
  var e = m0(this, u).delete(u);
  return (this.size -= e ? 1 : 0), e;
}
var x0 = _0,
  T0 = bu;
function b0(u) {
  return T0(this, u).get(u);
}
var S0 = b0,
  $0 = bu;
function w0(u) {
  return $0(this, u).has(u);
}
var O0 = w0,
  N0 = bu;
function P0(u, e) {
  var r = N0(this, u),
    t = r.size;
  return r.set(u, e), (this.size += r.size == t ? 0 : 1), this;
}
var I0 = P0,
  R0 = h0,
  L0 = x0,
  M0 = S0,
  k0 = O0,
  U0 = I0;
function ru(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.clear(); ++e < r; ) {
    var t = u[e];
    this.set(t[0], t[1]);
  }
}
ru.prototype.clear = R0;
ru.prototype.delete = L0;
ru.prototype.get = M0;
ru.prototype.has = k0;
ru.prototype.set = U0;
var qu = ru,
  j0 = _u,
  G0 = Hu,
  K0 = qu,
  H0 = 200;
function q0(u, e) {
  var r = this.__data__;
  if (r instanceof j0) {
    var t = r.__data__;
    if (!G0 || t.length < H0 - 1) return t.push([u, e]), (this.size = ++r.size), this;
    r = this.__data__ = new K0(t);
  }
  return r.set(u, e), (this.size = r.size), this;
}
var W0 = q0,
  z0 = _u,
  V0 = Pr,
  J0 = Rr,
  Q0 = Mr,
  Y0 = Ur,
  X0 = W0;
function tu(u) {
  var e = (this.__data__ = new z0(u));
  this.size = e.size;
}
tu.prototype.clear = V0;
tu.prototype.delete = J0;
tu.prototype.get = Q0;
tu.prototype.has = Y0;
tu.prototype.set = X0;
var Pe = tu,
  Z0 = '__lodash_hash_undefined__';
function ua(u) {
  return this.__data__.set(u, Z0), this;
}
var ea = ua;
function ra(u) {
  return this.__data__.has(u);
}
var ta = ra,
  aa = qu,
  na = ea,
  ia = ta;
function du(u) {
  var e = -1,
    r = u == null ? 0 : u.length;
  for (this.__data__ = new aa(); ++e < r; ) this.add(u[e]);
}
du.prototype.add = du.prototype.push = na;
du.prototype.has = ia;
var sa = du;
function Da(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length; ++r < t; ) if (e(u[r], r, u)) return !0;
  return !1;
}
var Aa = Da;
function oa(u, e) {
  return u.has(e);
}
var Fa = oa,
  Ca = sa,
  la = Aa,
  ca = Fa,
  Ea = 1,
  pa = 2;
function fa(u, e, r, t, a, i) {
  var n = r & Ea,
    l = u.length,
    p = e.length;
  if (l != p && !(n && p > l)) return !1;
  var B = i.get(u),
    T = i.get(e);
  if (B && T) return B == e && T == u;
  var x = -1,
    F = !0,
    m = r & pa ? new Ca() : void 0;
  for (i.set(u, e), i.set(e, u); ++x < l; ) {
    var d = u[x],
      c = e[x];
    if (t) var E = n ? t(c, d, x, e, u, i) : t(d, c, x, u, e, i);
    if (E !== void 0) {
      if (E) continue;
      F = !1;
      break;
    }
    if (m) {
      if (
        !la(e, function (I, L) {
          if (!ca(m, L) && (d === I || a(d, I, r, t, i))) return m.push(L);
        })
      ) {
        F = !1;
        break;
      }
    } else if (!(d === c || a(d, c, r, t, i))) {
      F = !1;
      break;
    }
  }
  return i.delete(u), i.delete(e), F;
}
var Ie = fa,
  Ba = H,
  ha = Ba.Uint8Array,
  ya = ha;
function da(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (t, a) {
      r[++e] = [a, t];
    }),
    r
  );
}
var va = da;
function ga(u) {
  var e = -1,
    r = Array(u.size);
  return (
    u.forEach(function (t) {
      r[++e] = t;
    }),
    r
  );
}
var ma = ga,
  ne = xu,
  ie = ya,
  _a = Se,
  xa = Ie,
  Ta = va,
  ba = ma,
  Sa = 1,
  $a = 2,
  wa = '[object Boolean]',
  Oa = '[object Date]',
  Na = '[object Error]',
  Pa = '[object Map]',
  Ia = '[object Number]',
  Ra = '[object RegExp]',
  La = '[object Set]',
  Ma = '[object String]',
  ka = '[object Symbol]',
  Ua = '[object ArrayBuffer]',
  ja = '[object DataView]',
  se = ne ? ne.prototype : void 0,
  Pu = se ? se.valueOf : void 0;
function Ga(u, e, r, t, a, i, n) {
  switch (r) {
    case ja:
      if (u.byteLength != e.byteLength || u.byteOffset != e.byteOffset) return !1;
      (u = u.buffer), (e = e.buffer);
    case Ua:
      return !(u.byteLength != e.byteLength || !i(new ie(u), new ie(e)));
    case wa:
    case Oa:
    case Ia:
      return _a(+u, +e);
    case Na:
      return u.name == e.name && u.message == e.message;
    case Ra:
    case Ma:
      return u == e + '';
    case Pa:
      var l = Ta;
    case La:
      var p = t & Sa;
      if ((l || (l = ba), u.size != e.size && !p)) return !1;
      var B = n.get(u);
      if (B) return B == e;
      (t |= $a), n.set(u, e);
      var T = xa(l(u), l(e), t, a, i, n);
      return n.delete(u), T;
    case ka:
      if (Pu) return Pu.call(u) == Pu.call(e);
  }
  return !1;
}
var Ka = Ga;
function Ha(u, e) {
  for (var r = -1, t = e.length, a = u.length; ++r < t; ) u[a + r] = e[r];
  return u;
}
var qa = Ha,
  Wa = Array.isArray,
  W = Wa,
  za = qa,
  Va = W;
function Ja(u, e, r) {
  var t = e(u);
  return Va(u) ? t : za(t, r(u));
}
var Qa = Ja;
function Ya(u, e) {
  for (var r = -1, t = u == null ? 0 : u.length, a = 0, i = []; ++r < t; ) {
    var n = u[r];
    e(n, r, u) && (i[a++] = n);
  }
  return i;
}
var Xa = Ya;
function Za() {
  return [];
}
var un = Za,
  en = Xa,
  rn = un,
  tn = Object.prototype,
  an = tn.propertyIsEnumerable,
  De = Object.getOwnPropertySymbols,
  nn = De
    ? function (u) {
        return u == null
          ? []
          : ((u = Object(u)),
            en(De(u), function (e) {
              return an.call(u, e);
            }));
      }
    : rn,
  sn = nn;
function Dn(u, e) {
  for (var r = -1, t = Array(u); ++r < u; ) t[r] = e(r);
  return t;
}
var An = Dn;
function on(u) {
  return u != null && typeof u == 'object';
}
var Eu = on,
  Fn = cu,
  Cn = Eu,
  ln = '[object Arguments]';
function cn(u) {
  return Cn(u) && Fn(u) == ln;
}
var En = cn,
  Ae = En,
  pn = Eu,
  Re = Object.prototype,
  fn = Re.hasOwnProperty,
  Bn = Re.propertyIsEnumerable,
  hn = Ae(
    (function () {
      return arguments;
    })(),
  )
    ? Ae
    : function (u) {
        return pn(u) && fn.call(u, 'callee') && !Bn.call(u, 'callee');
      },
  Le = hn,
  lu = {},
  yn = {
    get exports() {
      return lu;
    },
    set exports(u) {
      lu = u;
    },
  };
function dn() {
  return !1;
}
var vn = dn;
(function (u, e) {
  var r = H,
    t = vn,
    a = e && !e.nodeType && e,
    i = a && !0 && u && !u.nodeType && u,
    n = i && i.exports === a,
    l = n ? r.Buffer : void 0,
    p = l ? l.isBuffer : void 0,
    B = p || t;
  u.exports = B;
})(yn, lu);
var gn = 9007199254740991,
  mn = /^(?:0|[1-9]\d*)$/;
function _n(u, e) {
  var r = typeof u;
  return (
    (e = e ?? gn),
    !!e && (r == 'number' || (r != 'symbol' && mn.test(u))) && u > -1 && u % 1 == 0 && u < e
  );
}
var Me = _n,
  xn = 9007199254740991;
function Tn(u) {
  return typeof u == 'number' && u > -1 && u % 1 == 0 && u <= xn;
}
var Wu = Tn,
  bn = cu,
  Sn = Wu,
  $n = Eu,
  wn = '[object Arguments]',
  On = '[object Array]',
  Nn = '[object Boolean]',
  Pn = '[object Date]',
  In = '[object Error]',
  Rn = '[object Function]',
  Ln = '[object Map]',
  Mn = '[object Number]',
  kn = '[object Object]',
  Un = '[object RegExp]',
  jn = '[object Set]',
  Gn = '[object String]',
  Kn = '[object WeakMap]',
  Hn = '[object ArrayBuffer]',
  qn = '[object DataView]',
  Wn = '[object Float32Array]',
  zn = '[object Float64Array]',
  Vn = '[object Int8Array]',
  Jn = '[object Int16Array]',
  Qn = '[object Int32Array]',
  Yn = '[object Uint8Array]',
  Xn = '[object Uint8ClampedArray]',
  Zn = '[object Uint16Array]',
  ui = '[object Uint32Array]',
  S = {};
S[Wn] = S[zn] = S[Vn] = S[Jn] = S[Qn] = S[Yn] = S[Xn] = S[Zn] = S[ui] = !0;
S[wn] =
  S[On] =
  S[Hn] =
  S[Nn] =
  S[qn] =
  S[Pn] =
  S[In] =
  S[Rn] =
  S[Ln] =
  S[Mn] =
  S[kn] =
  S[Un] =
  S[jn] =
  S[Gn] =
  S[Kn] =
    !1;
function ei(u) {
  return $n(u) && Sn(u.length) && !!S[bn(u)];
}
var ri = ei;
function ti(u) {
  return function (e) {
    return u(e);
  };
}
var ai = ti,
  vu = {},
  ni = {
    get exports() {
      return vu;
    },
    set exports(u) {
      vu = u;
    },
  };
(function (u, e) {
  var r = $e,
    t = e && !e.nodeType && e,
    a = t && !0 && u && !u.nodeType && u,
    i = a && a.exports === t,
    n = i && r.process,
    l = (function () {
      try {
        var p = a && a.require && a.require('util').types;
        return p || (n && n.binding && n.binding('util'));
      } catch {}
    })();
  u.exports = l;
})(ni, vu);
var ii = ri,
  si = ai,
  oe = vu,
  Fe = oe && oe.isTypedArray,
  Di = Fe ? si(Fe) : ii,
  ke = Di,
  Ai = An,
  oi = Le,
  Fi = W,
  Ci = lu,
  li = Me,
  ci = ke,
  Ei = Object.prototype,
  pi = Ei.hasOwnProperty;
function fi(u, e) {
  var r = Fi(u),
    t = !r && oi(u),
    a = !r && !t && Ci(u),
    i = !r && !t && !a && ci(u),
    n = r || t || a || i,
    l = n ? Ai(u.length, String) : [],
    p = l.length;
  for (var B in u)
    (e || pi.call(u, B)) &&
      !(
        n &&
        (B == 'length' ||
          (a && (B == 'offset' || B == 'parent')) ||
          (i && (B == 'buffer' || B == 'byteLength' || B == 'byteOffset')) ||
          li(B, p))
      ) &&
      l.push(B);
  return l;
}
var Bi = fi,
  hi = Object.prototype;
function yi(u) {
  var e = u && u.constructor,
    r = (typeof e == 'function' && e.prototype) || hi;
  return u === r;
}
var di = yi;
function vi(u, e) {
  return function (r) {
    return u(e(r));
  };
}
var Ue = vi,
  gi = Ue,
  mi = gi(Object.keys, Object),
  _i = mi,
  xi = di,
  Ti = _i,
  bi = Object.prototype,
  Si = bi.hasOwnProperty;
function $i(u) {
  if (!xi(u)) return Ti(u);
  var e = [];
  for (var r in Object(u)) Si.call(u, r) && r != 'constructor' && e.push(r);
  return e;
}
var wi = $i,
  Oi = Oe,
  Ni = Wu;
function Pi(u) {
  return u != null && Ni(u.length) && !Oi(u);
}
var Ii = Pi,
  Ri = Bi,
  Li = wi,
  Mi = Ii;
function ki(u) {
  return Mi(u) ? Ri(u) : Li(u);
}
var zu = ki,
  Ui = Qa,
  ji = sn,
  Gi = zu;
function Ki(u) {
  return Ui(u, Gi, ji);
}
var Hi = Ki,
  Ce = Hi,
  qi = 1,
  Wi = Object.prototype,
  zi = Wi.hasOwnProperty;
function Vi(u, e, r, t, a, i) {
  var n = r & qi,
    l = Ce(u),
    p = l.length,
    B = Ce(e),
    T = B.length;
  if (p != T && !n) return !1;
  for (var x = p; x--; ) {
    var F = l[x];
    if (!(n ? F in e : zi.call(e, F))) return !1;
  }
  var m = i.get(u),
    d = i.get(e);
  if (m && d) return m == e && d == u;
  var c = !0;
  i.set(u, e), i.set(e, u);
  for (var E = n; ++x < p; ) {
    F = l[x];
    var I = u[F],
      L = e[F];
    if (t) var z = n ? t(L, I, F, e, u, i) : t(I, L, F, u, e, i);
    if (!(z === void 0 ? I === L || a(I, L, r, t, i) : z)) {
      c = !1;
      break;
    }
    E || (E = F == 'constructor');
  }
  if (c && !E) {
    var M = u.constructor,
      _ = e.constructor;
    M != _ &&
      'constructor' in u &&
      'constructor' in e &&
      !(typeof M == 'function' && M instanceof M && typeof _ == 'function' && _ instanceof _) &&
      (c = !1);
  }
  return i.delete(u), i.delete(e), c;
}
var Ji = Vi,
  Qi = Y,
  Yi = H,
  Xi = Qi(Yi, 'DataView'),
  Zi = Xi,
  us = Y,
  es = H,
  rs = us(es, 'Promise'),
  ts = rs,
  as = Y,
  ns = H,
  is = as(ns, 'Set'),
  ss = is,
  Ds = Y,
  As = H,
  os = Ds(As, 'WeakMap'),
  Fs = os,
  Ru = Zi,
  Lu = Hu,
  Mu = ts,
  ku = ss,
  Uu = Fs,
  je = cu,
  au = Ne,
  le = '[object Map]',
  Cs = '[object Object]',
  ce = '[object Promise]',
  Ee = '[object Set]',
  pe = '[object WeakMap]',
  fe = '[object DataView]',
  ls = au(Ru),
  cs = au(Lu),
  Es = au(Mu),
  ps = au(ku),
  fs = au(Uu),
  Q = je;
((Ru && Q(new Ru(new ArrayBuffer(1))) != fe) ||
  (Lu && Q(new Lu()) != le) ||
  (Mu && Q(Mu.resolve()) != ce) ||
  (ku && Q(new ku()) != Ee) ||
  (Uu && Q(new Uu()) != pe)) &&
  (Q = function (u) {
    var e = je(u),
      r = e == Cs ? u.constructor : void 0,
      t = r ? au(r) : '';
    if (t)
      switch (t) {
        case ls:
          return fe;
        case cs:
          return le;
        case Es:
          return ce;
        case ps:
          return Ee;
        case fs:
          return pe;
      }
    return e;
  });
var Bs = Q,
  Iu = Pe,
  hs = Ie,
  ys = Ka,
  ds = Ji,
  Be = Bs,
  he = W,
  ye = lu,
  vs = ke,
  gs = 1,
  de = '[object Arguments]',
  ve = '[object Array]',
  yu = '[object Object]',
  ms = Object.prototype,
  ge = ms.hasOwnProperty;
function _s(u, e, r, t, a, i) {
  var n = he(u),
    l = he(e),
    p = n ? ve : Be(u),
    B = l ? ve : Be(e);
  (p = p == de ? yu : p), (B = B == de ? yu : B);
  var T = p == yu,
    x = B == yu,
    F = p == B;
  if (F && ye(u)) {
    if (!ye(e)) return !1;
    (n = !0), (T = !1);
  }
  if (F && !T)
    return i || (i = new Iu()), n || vs(u) ? hs(u, e, r, t, a, i) : ys(u, e, p, r, t, a, i);
  if (!(r & gs)) {
    var m = T && ge.call(u, '__wrapped__'),
      d = x && ge.call(e, '__wrapped__');
    if (m || d) {
      var c = m ? u.value() : u,
        E = d ? e.value() : e;
      return i || (i = new Iu()), a(c, E, r, t, i);
    }
  }
  return F ? (i || (i = new Iu()), ds(u, e, r, t, a, i)) : !1;
}
var xs = _s,
  Ts = xs,
  me = Eu;
function Ge(u, e, r, t, a) {
  return u === e
    ? !0
    : u == null || e == null || (!me(u) && !me(e))
      ? u !== u && e !== e
      : Ts(u, e, r, t, Ge, a);
}
var Ke = Ge,
  bs = Pe,
  Ss = Ke,
  $s = 1,
  ws = 2;
function Os(u, e, r, t) {
  var a = r.length,
    i = a,
    n = !t;
  if (u == null) return !i;
  for (u = Object(u); a--; ) {
    var l = r[a];
    if (n && l[2] ? l[1] !== u[l[0]] : !(l[0] in u)) return !1;
  }
  for (; ++a < i; ) {
    l = r[a];
    var p = l[0],
      B = u[p],
      T = l[1];
    if (n && l[2]) {
      if (B === void 0 && !(p in u)) return !1;
    } else {
      var x = new bs();
      if (t) var F = t(B, T, p, u, e, x);
      if (!(F === void 0 ? Ss(T, B, $s | ws, t, x) : F)) return !1;
    }
  }
  return !0;
}
var Ns = Os,
  Ps = Ku;
function Is(u) {
  return u === u && !Ps(u);
}
var He = Is,
  Rs = He,
  Ls = zu;
function Ms(u) {
  for (var e = Ls(u), r = e.length; r--; ) {
    var t = e[r],
      a = u[t];
    e[r] = [t, a, Rs(a)];
  }
  return e;
}
var ks = Ms;
function Us(u, e) {
  return function (r) {
    return r == null ? !1 : r[u] === e && (e !== void 0 || u in Object(r));
  };
}
var qe = Us,
  js = Ns,
  Gs = ks,
  Ks = qe;
function Hs(u) {
  var e = Gs(u);
  return e.length == 1 && e[0][2]
    ? Ks(e[0][0], e[0][1])
    : function (r) {
        return r === u || js(r, u, e);
      };
}
var qs = Hs,
  Ws = cu,
  zs = Eu,
  Vs = '[object Symbol]';
function Js(u) {
  return typeof u == 'symbol' || (zs(u) && Ws(u) == Vs);
}
var Vu = Js,
  Qs = W,
  Ys = Vu,
  Xs = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Zs = /^\w*$/;
function uD(u, e) {
  if (Qs(u)) return !1;
  var r = typeof u;
  return r == 'number' || r == 'symbol' || r == 'boolean' || u == null || Ys(u)
    ? !0
    : Zs.test(u) || !Xs.test(u) || (e != null && u in Object(e));
}
var Ju = uD,
  We = qu,
  eD = 'Expected a function';
function Qu(u, e) {
  if (typeof u != 'function' || (e != null && typeof e != 'function')) throw new TypeError(eD);
  var r = function () {
    var t = arguments,
      a = e ? e.apply(this, t) : t[0],
      i = r.cache;
    if (i.has(a)) return i.get(a);
    var n = u.apply(this, t);
    return (r.cache = i.set(a, n) || i), n;
  };
  return (r.cache = new (Qu.Cache || We)()), r;
}
Qu.Cache = We;
var rD = Qu,
  tD = rD,
  aD = 500;
function nD(u) {
  var e = tD(u, function (t) {
      return r.size === aD && r.clear(), t;
    }),
    r = e.cache;
  return e;
}
var iD = nD,
  sD = iD,
  DD =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  AD = /\\(\\)?/g,
  oD = sD(function (u) {
    var e = [];
    return (
      u.charCodeAt(0) === 46 && e.push(''),
      u.replace(DD, function (r, t, a, i) {
        e.push(a ? i.replace(AD, '$1') : t || r);
      }),
      e
    );
  }),
  FD = oD,
  _e = xu,
  CD = sr,
  lD = W,
  cD = Vu,
  ED = 1 / 0,
  xe = _e ? _e.prototype : void 0,
  Te = xe ? xe.toString : void 0;
function ze(u) {
  if (typeof u == 'string') return u;
  if (lD(u)) return CD(u, ze) + '';
  if (cD(u)) return Te ? Te.call(u) : '';
  var e = u + '';
  return e == '0' && 1 / u == -ED ? '-0' : e;
}
var pD = ze,
  fD = pD;
function BD(u) {
  return u == null ? '' : fD(u);
}
var hD = BD,
  yD = W,
  dD = Ju,
  vD = FD,
  gD = hD;
function mD(u, e) {
  return yD(u) ? u : dD(u, e) ? [u] : vD(gD(u));
}
var Ve = mD,
  _D = Vu,
  xD = 1 / 0;
function TD(u) {
  if (typeof u == 'string' || _D(u)) return u;
  var e = u + '';
  return e == '0' && 1 / u == -xD ? '-0' : e;
}
var Su = TD,
  bD = Ve,
  SD = Su;
function $D(u, e) {
  e = bD(e, u);
  for (var r = 0, t = e.length; u != null && r < t; ) u = u[SD(e[r++])];
  return r && r == t ? u : void 0;
}
var Je = $D,
  wD = Je;
function OD(u, e, r) {
  var t = u == null ? void 0 : wD(u, e);
  return t === void 0 ? r : t;
}
var ND = OD;
function PD(u, e) {
  return u != null && e in Object(u);
}
var ID = PD,
  RD = Ve,
  LD = Le,
  MD = W,
  kD = Me,
  UD = Wu,
  jD = Su;
function GD(u, e, r) {
  e = RD(e, u);
  for (var t = -1, a = e.length, i = !1; ++t < a; ) {
    var n = jD(e[t]);
    if (!(i = u != null && r(u, n))) break;
    u = u[n];
  }
  return i || ++t != a
    ? i
    : ((a = u == null ? 0 : u.length), !!a && UD(a) && kD(n, a) && (MD(u) || LD(u)));
}
var KD = GD,
  HD = ID,
  qD = KD;
function WD(u, e) {
  return u != null && qD(u, e, HD);
}
var zD = WD,
  VD = Ke,
  JD = ND,
  QD = zD,
  YD = Ju,
  XD = He,
  ZD = qe,
  u1 = Su,
  e1 = 1,
  r1 = 2;
function t1(u, e) {
  return YD(u) && XD(e)
    ? ZD(u1(u), e)
    : function (r) {
        var t = JD(r, u);
        return t === void 0 && t === e ? QD(r, u) : VD(e, t, e1 | r1);
      };
}
var a1 = t1;
function n1(u) {
  return u;
}
var i1 = n1;
function s1(u) {
  return function (e) {
    return e == null ? void 0 : e[u];
  };
}
var D1 = s1,
  A1 = Je;
function o1(u) {
  return function (e) {
    return A1(e, u);
  };
}
var F1 = o1,
  C1 = D1,
  l1 = F1,
  c1 = Ju,
  E1 = Su;
function p1(u) {
  return c1(u) ? C1(E1(u)) : l1(u);
}
var f1 = p1,
  B1 = qs,
  h1 = a1,
  y1 = i1,
  d1 = W,
  v1 = f1;
function g1(u) {
  return typeof u == 'function'
    ? u
    : u == null
      ? y1
      : typeof u == 'object'
        ? d1(u)
          ? h1(u[0], u[1])
          : B1(u)
        : v1(u);
}
var m1 = g1,
  _1 = Y,
  x1 = (function () {
    try {
      var u = _1(Object, 'defineProperty');
      return u({}, '', {}), u;
    } catch {}
  })(),
  T1 = x1,
  be = T1;
function b1(u, e, r) {
  e == '__proto__' && be
    ? be(u, e, { configurable: !0, enumerable: !0, value: r, writable: !0 })
    : (u[e] = r);
}
var S1 = b1,
  $1 = Ue,
  w1 = $1(Object.getPrototypeOf, Object),
  no = w1;
function O1(u) {
  return function (e, r, t) {
    for (var a = -1, i = Object(e), n = t(e), l = n.length; l--; ) {
      var p = n[u ? l : ++a];
      if (r(i[p], p, i) === !1) break;
    }
    return e;
  };
}
var N1 = O1,
  P1 = N1,
  I1 = P1(),
  R1 = I1,
  L1 = R1,
  M1 = zu;
function k1(u, e) {
  return u && L1(u, e, M1);
}
var U1 = k1,
  j1 = S1,
  G1 = U1,
  K1 = m1;
function H1(u, e) {
  var r = {};
  return (
    (e = K1(e)),
    G1(u, function (t, a, i) {
      j1(r, a, e(t, a, i));
    }),
    r
  );
}
var q1 = H1,
  Qe = {},
  ou = {},
  ju = {},
  W1 = {
    get exports() {
      return ju;
    },
    set exports(u) {
      ju = u;
    },
  };
(function () {
  function u(n) {
    if (n == null) return !1;
    switch (n.type) {
      case 'ArrayExpression':
      case 'AssignmentExpression':
      case 'BinaryExpression':
      case 'CallExpression':
      case 'ConditionalExpression':
      case 'FunctionExpression':
      case 'Identifier':
      case 'Literal':
      case 'LogicalExpression':
      case 'MemberExpression':
      case 'NewExpression':
      case 'ObjectExpression':
      case 'SequenceExpression':
      case 'ThisExpression':
      case 'UnaryExpression':
      case 'UpdateExpression':
        return !0;
    }
    return !1;
  }
  function e(n) {
    if (n == null) return !1;
    switch (n.type) {
      case 'DoWhileStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'WhileStatement':
        return !0;
    }
    return !1;
  }
  function r(n) {
    if (n == null) return !1;
    switch (n.type) {
      case 'BlockStatement':
      case 'BreakStatement':
      case 'ContinueStatement':
      case 'DebuggerStatement':
      case 'DoWhileStatement':
      case 'EmptyStatement':
      case 'ExpressionStatement':
      case 'ForInStatement':
      case 'ForStatement':
      case 'IfStatement':
      case 'LabeledStatement':
      case 'ReturnStatement':
      case 'SwitchStatement':
      case 'ThrowStatement':
      case 'TryStatement':
      case 'VariableDeclaration':
      case 'WhileStatement':
      case 'WithStatement':
        return !0;
    }
    return !1;
  }
  function t(n) {
    return r(n) || (n != null && n.type === 'FunctionDeclaration');
  }
  function a(n) {
    switch (n.type) {
      case 'IfStatement':
        return n.alternate != null ? n.alternate : n.consequent;
      case 'LabeledStatement':
      case 'ForStatement':
      case 'ForInStatement':
      case 'WhileStatement':
      case 'WithStatement':
        return n.body;
    }
    return null;
  }
  function i(n) {
    var l;
    if (n.type !== 'IfStatement' || n.alternate == null) return !1;
    l = n.consequent;
    do {
      if (l.type === 'IfStatement' && l.alternate == null) return !0;
      l = a(l);
    } while (l);
    return !1;
  }
  W1.exports = {
    isExpression: u,
    isStatement: r,
    isIterationStatement: e,
    isSourceElement: t,
    isProblematicIfStatement: i,
    trailingStatement: a,
  };
})();
var gu = {},
  z1 = {
    get exports() {
      return gu;
    },
    set exports(u) {
      gu = u;
    },
  };
(function () {
  var u, e, r, t, a, i;
  (e = {
    NonAsciiIdentifierStart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
    NonAsciiIdentifierPart:
      /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
  }),
    (u = {
      NonAsciiIdentifierStart:
        /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
      NonAsciiIdentifierPart:
        /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
    });
  function n(E) {
    return 48 <= E && E <= 57;
  }
  function l(E) {
    return (48 <= E && E <= 57) || (97 <= E && E <= 102) || (65 <= E && E <= 70);
  }
  function p(E) {
    return E >= 48 && E <= 55;
  }
  r = [
    5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288,
    65279,
  ];
  function B(E) {
    return (
      E === 32 || E === 9 || E === 11 || E === 12 || E === 160 || (E >= 5760 && r.indexOf(E) >= 0)
    );
  }
  function T(E) {
    return E === 10 || E === 13 || E === 8232 || E === 8233;
  }
  function x(E) {
    if (E <= 65535) return String.fromCharCode(E);
    var I = String.fromCharCode(Math.floor((E - 65536) / 1024) + 55296),
      L = String.fromCharCode(((E - 65536) % 1024) + 56320);
    return I + L;
  }
  for (t = new Array(128), i = 0; i < 128; ++i)
    t[i] = (i >= 97 && i <= 122) || (i >= 65 && i <= 90) || i === 36 || i === 95;
  for (a = new Array(128), i = 0; i < 128; ++i)
    a[i] =
      (i >= 97 && i <= 122) || (i >= 65 && i <= 90) || (i >= 48 && i <= 57) || i === 36 || i === 95;
  function F(E) {
    return E < 128 ? t[E] : e.NonAsciiIdentifierStart.test(x(E));
  }
  function m(E) {
    return E < 128 ? a[E] : e.NonAsciiIdentifierPart.test(x(E));
  }
  function d(E) {
    return E < 128 ? t[E] : u.NonAsciiIdentifierStart.test(x(E));
  }
  function c(E) {
    return E < 128 ? a[E] : u.NonAsciiIdentifierPart.test(x(E));
  }
  z1.exports = {
    isDecimalDigit: n,
    isHexDigit: l,
    isOctalDigit: p,
    isWhiteSpace: B,
    isLineTerminator: T,
    isIdentifierStartES5: F,
    isIdentifierPartES5: m,
    isIdentifierStartES6: d,
    isIdentifierPartES6: c,
  };
})();
var Gu = {},
  V1 = {
    get exports() {
      return Gu;
    },
    set exports(u) {
      Gu = u;
    },
  };
(function () {
  var u = gu;
  function e(F) {
    switch (F) {
      case 'implements':
      case 'interface':
      case 'package':
      case 'private':
      case 'protected':
      case 'public':
      case 'static':
      case 'let':
        return !0;
      default:
        return !1;
    }
  }
  function r(F, m) {
    return !m && F === 'yield' ? !1 : t(F, m);
  }
  function t(F, m) {
    if (m && e(F)) return !0;
    switch (F.length) {
      case 2:
        return F === 'if' || F === 'in' || F === 'do';
      case 3:
        return F === 'var' || F === 'for' || F === 'new' || F === 'try';
      case 4:
        return (
          F === 'this' ||
          F === 'else' ||
          F === 'case' ||
          F === 'void' ||
          F === 'with' ||
          F === 'enum'
        );
      case 5:
        return (
          F === 'while' ||
          F === 'break' ||
          F === 'catch' ||
          F === 'throw' ||
          F === 'const' ||
          F === 'yield' ||
          F === 'class' ||
          F === 'super'
        );
      case 6:
        return (
          F === 'return' ||
          F === 'typeof' ||
          F === 'delete' ||
          F === 'switch' ||
          F === 'export' ||
          F === 'import'
        );
      case 7:
        return F === 'default' || F === 'finally' || F === 'extends';
      case 8:
        return F === 'function' || F === 'continue' || F === 'debugger';
      case 10:
        return F === 'instanceof';
      default:
        return !1;
    }
  }
  function a(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || r(F, m);
  }
  function i(F, m) {
    return F === 'null' || F === 'true' || F === 'false' || t(F, m);
  }
  function n(F) {
    return F === 'eval' || F === 'arguments';
  }
  function l(F) {
    var m, d, c;
    if (F.length === 0 || ((c = F.charCodeAt(0)), !u.isIdentifierStartES5(c))) return !1;
    for (m = 1, d = F.length; m < d; ++m)
      if (((c = F.charCodeAt(m)), !u.isIdentifierPartES5(c))) return !1;
    return !0;
  }
  function p(F, m) {
    return (F - 55296) * 1024 + (m - 56320) + 65536;
  }
  function B(F) {
    var m, d, c, E, I;
    if (F.length === 0) return !1;
    for (I = u.isIdentifierStartES6, m = 0, d = F.length; m < d; ++m) {
      if (((c = F.charCodeAt(m)), 55296 <= c && c <= 56319)) {
        if ((++m, m >= d || ((E = F.charCodeAt(m)), !(56320 <= E && E <= 57343)))) return !1;
        c = p(c, E);
      }
      if (!I(c)) return !1;
      I = u.isIdentifierPartES6;
    }
    return !0;
  }
  function T(F, m) {
    return l(F) && !a(F, m);
  }
  function x(F, m) {
    return B(F) && !i(F, m);
  }
  V1.exports = {
    isKeywordES5: r,
    isKeywordES6: t,
    isReservedWordES5: a,
    isReservedWordES6: i,
    isRestrictedWord: n,
    isIdentifierNameES5: l,
    isIdentifierNameES6: B,
    isIdentifierES5: T,
    isIdentifierES6: x,
  };
})();
(function () {
  (ou.ast = ju), (ou.code = gu), (ou.keyword = Gu);
})();
var Du = {},
  X = {};
const J1 = 'doctrine',
  Q1 = 'JSDoc parser',
  Y1 = 'https://github.com/eslint/doctrine',
  X1 = 'lib/doctrine.js',
  Z1 = '3.0.0',
  uA = { node: '>=6.0.0' },
  eA = { lib: './lib' },
  rA = ['lib'],
  tA = [
    {
      name: 'Nicholas C. Zakas',
      email: 'nicholas+npm@nczconsulting.com',
      web: 'https://www.nczonline.net',
    },
    {
      name: 'Yusuke Suzuki',
      email: 'utatane.tea@gmail.com',
      web: 'https://github.com/Constellation',
    },
  ],
  aA = 'eslint/doctrine',
  nA = {
    coveralls: '^3.0.1',
    dateformat: '^1.0.11',
    eslint: '^1.10.3',
    'eslint-release': '^1.0.0',
    linefix: '^0.1.1',
    mocha: '^3.4.2',
    'npm-license': '^0.3.1',
    nyc: '^10.3.2',
    semver: '^5.0.3',
    shelljs: '^0.5.3',
    'shelljs-nodecli': '^0.1.1',
    should: '^5.0.1',
  },
  iA = 'Apache-2.0',
  sA = {
    pretest: 'npm run lint',
    test: 'nyc mocha',
    coveralls: 'nyc report --reporter=text-lcov | coveralls',
    lint: 'eslint lib/',
    'generate-release': 'eslint-generate-release',
    'generate-alpharelease': 'eslint-generate-prerelease alpha',
    'generate-betarelease': 'eslint-generate-prerelease beta',
    'generate-rcrelease': 'eslint-generate-prerelease rc',
    'publish-release': 'eslint-publish-release',
  },
  DA = { esutils: '^2.0.2' },
  AA = {
    name: J1,
    description: Q1,
    homepage: Y1,
    main: X1,
    version: Z1,
    engines: uA,
    directories: eA,
    files: rA,
    maintainers: tA,
    repository: aA,
    devDependencies: nA,
    license: iA,
    scripts: sA,
    dependencies: DA,
  };
function oA(u, e) {
  if (!u) throw new Error(e || 'unknown assertion error');
}
var FA = oA;
(function () {
  var u;
  (u = AA.version), (X.VERSION = u);
  function e(t) {
    (this.name = 'DoctrineError'), (this.message = t);
  }
  (e.prototype = (function () {
    var t = function () {};
    return (t.prototype = Error.prototype), new t();
  })()),
    (e.prototype.constructor = e),
    (X.DoctrineError = e);
  function r(t) {
    throw new e(t);
  }
  (X.throwError = r), (X.assert = FA);
})();
(function () {
  var u, e, r, t, a, i, n, l, p, B, T, x;
  (p = ou),
    (B = X),
    (u = {
      NullableLiteral: 'NullableLiteral',
      AllLiteral: 'AllLiteral',
      NullLiteral: 'NullLiteral',
      UndefinedLiteral: 'UndefinedLiteral',
      VoidLiteral: 'VoidLiteral',
      UnionType: 'UnionType',
      ArrayType: 'ArrayType',
      RecordType: 'RecordType',
      FieldType: 'FieldType',
      FunctionType: 'FunctionType',
      ParameterType: 'ParameterType',
      RestType: 'RestType',
      NonNullableType: 'NonNullableType',
      OptionalType: 'OptionalType',
      NullableType: 'NullableType',
      NameExpression: 'NameExpression',
      TypeApplication: 'TypeApplication',
      StringLiteralType: 'StringLiteralType',
      NumericLiteralType: 'NumericLiteralType',
      BooleanLiteralType: 'BooleanLiteralType',
    }),
    (e = {
      ILLEGAL: 0,
      DOT_LT: 1,
      REST: 2,
      LT: 3,
      GT: 4,
      LPAREN: 5,
      RPAREN: 6,
      LBRACE: 7,
      RBRACE: 8,
      LBRACK: 9,
      RBRACK: 10,
      COMMA: 11,
      COLON: 12,
      STAR: 13,
      PIPE: 14,
      QUESTION: 15,
      BANG: 16,
      EQUAL: 17,
      NAME: 18,
      STRING: 19,
      NUMBER: 20,
      EOF: 21,
    });
  function F(s) {
    return (
      '><(){}[],:*|?!='.indexOf(String.fromCharCode(s)) === -1 &&
      !p.code.isWhiteSpace(s) &&
      !p.code.isLineTerminator(s)
    );
  }
  function m(s, D, y, o) {
    (this._previous = s), (this._index = D), (this._token = y), (this._value = o);
  }
  (m.prototype.restore = function () {
    (i = this._previous), (a = this._index), (n = this._token), (l = this._value);
  }),
    (m.save = function () {
      return new m(i, a, n, l);
    });
  function d(s, D) {
    return x && (s.range = [D[0] + T, D[1] + T]), s;
  }
  function c() {
    var s = r.charAt(a);
    return (a += 1), s;
  }
  function E(s) {
    var D,
      y,
      o,
      A = 0;
    for (y = s === 'u' ? 4 : 2, D = 0; D < y; ++D)
      if (a < t && p.code.isHexDigit(r.charCodeAt(a)))
        (o = c()), (A = A * 16 + '0123456789abcdef'.indexOf(o.toLowerCase()));
      else return '';
    return String.fromCharCode(A);
  }
  function I() {
    var s = '',
      D,
      y,
      o,
      A,
      h;
    for (D = r.charAt(a), ++a; a < t; )
      if (((y = c()), y === D)) {
        D = '';
        break;
      } else if (y === '\\')
        if (((y = c()), p.code.isLineTerminator(y.charCodeAt(0))))
          y === '\r' && r.charCodeAt(a) === 10 && ++a;
        else
          switch (y) {
            case 'n':
              s += `
`;
              break;
            case 'r':
              s += '\r';
              break;
            case 't':
              s += '	';
              break;
            case 'u':
            case 'x':
              (h = a), (A = E(y)), A ? (s += A) : ((a = h), (s += y));
              break;
            case 'b':
              s += '\b';
              break;
            case 'f':
              s += '\f';
              break;
            case 'v':
              s += '\v';
              break;
            default:
              p.code.isOctalDigit(y.charCodeAt(0))
                ? ((o = '01234567'.indexOf(y)),
                  a < t &&
                    p.code.isOctalDigit(r.charCodeAt(a)) &&
                    ((o = o * 8 + '01234567'.indexOf(c())),
                    '0123'.indexOf(y) >= 0 &&
                      a < t &&
                      p.code.isOctalDigit(r.charCodeAt(a)) &&
                      (o = o * 8 + '01234567'.indexOf(c()))),
                  (s += String.fromCharCode(o)))
                : (s += y);
              break;
          }
      else {
        if (p.code.isLineTerminator(y.charCodeAt(0))) break;
        s += y;
      }
    return D !== '' && B.throwError('unexpected quote'), (l = s), e.STRING;
  }
  function L() {
    var s, D;
    if (((s = ''), (D = r.charCodeAt(a)), D !== 46)) {
      if (((s = c()), (D = r.charCodeAt(a)), s === '0')) {
        if (D === 120 || D === 88) {
          for (s += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isHexDigit(D)); ) s += c();
          return (
            s.length <= 2 && B.throwError('unexpected token'),
            a < t &&
              ((D = r.charCodeAt(a)),
              p.code.isIdentifierStartES5(D) && B.throwError('unexpected token')),
            (l = parseInt(s, 16)),
            e.NUMBER
          );
        }
        if (p.code.isOctalDigit(D)) {
          for (s += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isOctalDigit(D)); ) s += c();
          return (
            a < t &&
              ((D = r.charCodeAt(a)),
              (p.code.isIdentifierStartES5(D) || p.code.isDecimalDigit(D)) &&
                B.throwError('unexpected token')),
            (l = parseInt(s, 8)),
            e.NUMBER
          );
        }
        p.code.isDecimalDigit(D) && B.throwError('unexpected token');
      }
      for (; a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) s += c();
    }
    if (D === 46)
      for (s += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) s += c();
    if (D === 101 || D === 69)
      if (
        ((s += c()),
        (D = r.charCodeAt(a)),
        (D === 43 || D === 45) && (s += c()),
        (D = r.charCodeAt(a)),
        p.code.isDecimalDigit(D))
      )
        for (s += c(); a < t && ((D = r.charCodeAt(a)), !!p.code.isDecimalDigit(D)); ) s += c();
      else B.throwError('unexpected token');
    return (
      a < t &&
        ((D = r.charCodeAt(a)), p.code.isIdentifierStartES5(D) && B.throwError('unexpected token')),
      (l = parseFloat(s)),
      e.NUMBER
    );
  }
  function z() {
    var s, D;
    for (l = c(); a < t && F(r.charCodeAt(a)); ) {
      if (((s = r.charCodeAt(a)), s === 46)) {
        if (a + 1 >= t) return e.ILLEGAL;
        if (((D = r.charCodeAt(a + 1)), D === 60)) break;
      }
      l += c();
    }
    return e.NAME;
  }
  function M() {
    var s;
    for (i = a; a < t && p.code.isWhiteSpace(r.charCodeAt(a)); ) c();
    if (a >= t) return (n = e.EOF), n;
    switch (((s = r.charCodeAt(a)), s)) {
      case 39:
      case 34:
        return (n = I()), n;
      case 58:
        return c(), (n = e.COLON), n;
      case 44:
        return c(), (n = e.COMMA), n;
      case 40:
        return c(), (n = e.LPAREN), n;
      case 41:
        return c(), (n = e.RPAREN), n;
      case 91:
        return c(), (n = e.LBRACK), n;
      case 93:
        return c(), (n = e.RBRACK), n;
      case 123:
        return c(), (n = e.LBRACE), n;
      case 125:
        return c(), (n = e.RBRACE), n;
      case 46:
        if (a + 1 < t) {
          if (((s = r.charCodeAt(a + 1)), s === 60)) return c(), c(), (n = e.DOT_LT), n;
          if (s === 46 && a + 2 < t && r.charCodeAt(a + 2) === 46)
            return c(), c(), c(), (n = e.REST), n;
          if (p.code.isDecimalDigit(s)) return (n = L()), n;
        }
        return (n = e.ILLEGAL), n;
      case 60:
        return c(), (n = e.LT), n;
      case 62:
        return c(), (n = e.GT), n;
      case 42:
        return c(), (n = e.STAR), n;
      case 124:
        return c(), (n = e.PIPE), n;
      case 63:
        return c(), (n = e.QUESTION), n;
      case 33:
        return c(), (n = e.BANG), n;
      case 61:
        return c(), (n = e.EQUAL), n;
      case 45:
        return (n = L()), n;
      default:
        return p.code.isDecimalDigit(s) ? ((n = L()), n) : (B.assert(F(s)), (n = z()), n);
    }
  }
  function _(s, D) {
    B.assert(n === s, D || 'consumed token not matched'), M();
  }
  function C(s, D) {
    n !== s && B.throwError(D || 'unexpected token'), M();
  }
  function k() {
    var s,
      D = a - 1;
    if ((_(e.LPAREN, 'UnionType should start with ('), (s = []), n !== e.RPAREN))
      for (; s.push(U()), n !== e.RPAREN; ) C(e.PIPE);
    return (
      _(e.RPAREN, 'UnionType should end with )'), d({ type: u.UnionType, elements: s }, [D, i])
    );
  }
  function f() {
    var s,
      D = a - 1,
      y;
    for (_(e.LBRACK, 'ArrayType should start with ['), s = []; n !== e.RBRACK; ) {
      if (n === e.REST) {
        (y = a - 3), _(e.REST), s.push(d({ type: u.RestType, expression: U() }, [y, i]));
        break;
      } else s.push(U());
      n !== e.RBRACK && C(e.COMMA);
    }
    return C(e.RBRACK), d({ type: u.ArrayType, elements: s }, [D, i]);
  }
  function j() {
    var s = l;
    if (n === e.NAME || n === e.STRING) return M(), s;
    if (n === e.NUMBER) return _(e.NUMBER), String(s);
    B.throwError('unexpected token');
  }
  function G() {
    var s,
      D = i;
    return (
      (s = j()),
      n === e.COLON
        ? (_(e.COLON), d({ type: u.FieldType, key: s, value: U() }, [D, i]))
        : d({ type: u.FieldType, key: s, value: null }, [D, i])
    );
  }
  function g() {
    var s,
      D = a - 1,
      y;
    if ((_(e.LBRACE, 'RecordType should start with {'), (s = []), n === e.COMMA)) _(e.COMMA);
    else for (; n !== e.RBRACE; ) s.push(G()), n !== e.RBRACE && C(e.COMMA);
    return (y = a), C(e.RBRACE), d({ type: u.RecordType, fields: s }, [D, y]);
  }
  function nu() {
    var s = l,
      D = a - s.length;
    return (
      C(e.NAME),
      n === e.COLON &&
        (s === 'module' || s === 'external' || s === 'event') &&
        (_(e.COLON), (s += ':' + l), C(e.NAME)),
      d({ type: u.NameExpression, name: s }, [D, i])
    );
  }
  function pu() {
    var s = [];
    for (s.push(K()); n === e.COMMA; ) _(e.COMMA), s.push(K());
    return s;
  }
  function V() {
    var s,
      D,
      y = a - l.length;
    return (
      (s = nu()),
      n === e.DOT_LT || n === e.LT
        ? (M(),
          (D = pu()),
          C(e.GT),
          d({ type: u.TypeApplication, expression: s, applications: D }, [y, i]))
        : s
    );
  }
  function fu() {
    return (
      _(e.COLON, 'ResultType should start with :'),
      n === e.NAME && l === 'void' ? (_(e.NAME), { type: u.VoidLiteral }) : U()
    );
  }
  function $() {
    for (var s = [], D = !1, y, o = !1, A, h = a - 3, v; n !== e.RPAREN; )
      n === e.REST && (_(e.REST), (o = !0)),
        (A = i),
        (y = U()),
        y.type === u.NameExpression &&
          n === e.COLON &&
          ((v = i - y.name.length),
          _(e.COLON),
          (y = d({ type: u.ParameterType, name: y.name, expression: U() }, [v, i]))),
        n === e.EQUAL
          ? (_(e.EQUAL), (y = d({ type: u.OptionalType, expression: y }, [A, i])), (D = !0))
          : D && B.throwError('unexpected token'),
        o && (y = d({ type: u.RestType, expression: y }, [h, i])),
        s.push(y),
        n !== e.RPAREN && C(e.COMMA);
    return s;
  }
  function wu() {
    var s,
      D,
      y,
      o,
      A,
      h = a - l.length;
    return (
      B.assert(n === e.NAME && l === 'function', "FunctionType should start with 'function'"),
      _(e.NAME),
      C(e.LPAREN),
      (s = !1),
      (y = []),
      (D = null),
      n !== e.RPAREN &&
        (n === e.NAME && (l === 'this' || l === 'new')
          ? ((s = l === 'new'),
            _(e.NAME),
            C(e.COLON),
            (D = V()),
            n === e.COMMA && (_(e.COMMA), (y = $())))
          : (y = $())),
      C(e.RPAREN),
      (o = null),
      n === e.COLON && (o = fu()),
      (A = d({ type: u.FunctionType, params: y, result: o }, [h, i])),
      D && ((A.this = D), s && (A.new = !0)),
      A
    );
  }
  function iu() {
    var s, D;
    switch (n) {
      case e.STAR:
        return _(e.STAR), d({ type: u.AllLiteral }, [i - 1, i]);
      case e.LPAREN:
        return k();
      case e.LBRACK:
        return f();
      case e.LBRACE:
        return g();
      case e.NAME:
        if (((D = a - l.length), l === 'null'))
          return _(e.NAME), d({ type: u.NullLiteral }, [D, i]);
        if (l === 'undefined') return _(e.NAME), d({ type: u.UndefinedLiteral }, [D, i]);
        if (l === 'true' || l === 'false')
          return _(e.NAME), d({ type: u.BooleanLiteralType, value: l === 'true' }, [D, i]);
        if (((s = m.save()), l === 'function'))
          try {
            return wu();
          } catch {
            s.restore();
          }
        return V();
      case e.STRING:
        return M(), d({ type: u.StringLiteralType, value: l }, [i - l.length - 2, i]);
      case e.NUMBER:
        return M(), d({ type: u.NumericLiteralType, value: l }, [i - String(l).length, i]);
      default:
        B.throwError('unexpected token');
    }
  }
  function U() {
    var s, D;
    return n === e.QUESTION
      ? ((D = a - 1),
        _(e.QUESTION),
        n === e.COMMA ||
        n === e.EQUAL ||
        n === e.RBRACE ||
        n === e.RPAREN ||
        n === e.PIPE ||
        n === e.EOF ||
        n === e.RBRACK ||
        n === e.GT
          ? d({ type: u.NullableLiteral }, [D, i])
          : d({ type: u.NullableType, expression: iu(), prefix: !0 }, [D, i]))
      : n === e.BANG
        ? ((D = a - 1),
          _(e.BANG),
          d({ type: u.NonNullableType, expression: iu(), prefix: !0 }, [D, i]))
        : ((D = i),
          (s = iu()),
          n === e.BANG
            ? (_(e.BANG), d({ type: u.NonNullableType, expression: s, prefix: !1 }, [D, i]))
            : n === e.QUESTION
              ? (_(e.QUESTION), d({ type: u.NullableType, expression: s, prefix: !1 }, [D, i]))
              : n === e.LBRACK
                ? (_(e.LBRACK),
                  C(e.RBRACK, 'expected an array-style type declaration (' + l + '[])'),
                  d(
                    {
                      type: u.TypeApplication,
                      expression: d({ type: u.NameExpression, name: 'Array' }, [D, i]),
                      applications: [s],
                    },
                    [D, i],
                  ))
                : s);
  }
  function K() {
    var s, D;
    if (((s = U()), n !== e.PIPE)) return s;
    for (D = [s], _(e.PIPE); D.push(U()), n === e.PIPE; ) _(e.PIPE);
    return d({ type: u.UnionType, elements: D }, [0, a]);
  }
  function J() {
    var s;
    return n === e.REST
      ? (_(e.REST), d({ type: u.RestType, expression: K() }, [0, a]))
      : ((s = K()),
        n === e.EQUAL ? (_(e.EQUAL), d({ type: u.OptionalType, expression: s }, [0, a])) : s);
  }
  function Bu(s, D) {
    var y;
    return (
      (r = s),
      (t = r.length),
      (a = 0),
      (i = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = K()),
      D && D.midstream
        ? { expression: y, index: i }
        : (n !== e.EOF && B.throwError('not reach to EOF'), y)
    );
  }
  function Ou(s, D) {
    var y;
    return (
      (r = s),
      (t = r.length),
      (a = 0),
      (i = 0),
      (x = D && D.range),
      (T = (D && D.startIndex) || 0),
      M(),
      (y = J()),
      D && D.midstream
        ? { expression: y, index: i }
        : (n !== e.EOF && B.throwError('not reach to EOF'), y)
    );
  }
  function w(s, D, y) {
    var o, A, h;
    switch (s.type) {
      case u.NullableLiteral:
        o = '?';
        break;
      case u.AllLiteral:
        o = '*';
        break;
      case u.NullLiteral:
        o = 'null';
        break;
      case u.UndefinedLiteral:
        o = 'undefined';
        break;
      case u.VoidLiteral:
        o = 'void';
        break;
      case u.UnionType:
        for (y ? (o = '') : (o = '('), A = 0, h = s.elements.length; A < h; ++A)
          (o += w(s.elements[A], D)), A + 1 !== h && (o += D ? '|' : ' | ');
        y || (o += ')');
        break;
      case u.ArrayType:
        for (o = '[', A = 0, h = s.elements.length; A < h; ++A)
          (o += w(s.elements[A], D)), A + 1 !== h && (o += D ? ',' : ', ');
        o += ']';
        break;
      case u.RecordType:
        for (o = '{', A = 0, h = s.fields.length; A < h; ++A)
          (o += w(s.fields[A], D)), A + 1 !== h && (o += D ? ',' : ', ');
        o += '}';
        break;
      case u.FieldType:
        s.value ? (o = s.key + (D ? ':' : ': ') + w(s.value, D)) : (o = s.key);
        break;
      case u.FunctionType:
        for (
          o = D ? 'function(' : 'function (',
            s.this &&
              (s.new ? (o += D ? 'new:' : 'new: ') : (o += D ? 'this:' : 'this: '),
              (o += w(s.this, D)),
              s.params.length !== 0 && (o += D ? ',' : ', ')),
            A = 0,
            h = s.params.length;
          A < h;
          ++A
        )
          (o += w(s.params[A], D)), A + 1 !== h && (o += D ? ',' : ', ');
        (o += ')'), s.result && (o += (D ? ':' : ': ') + w(s.result, D));
        break;
      case u.ParameterType:
        o = s.name + (D ? ':' : ': ') + w(s.expression, D);
        break;
      case u.RestType:
        (o = '...'), s.expression && (o += w(s.expression, D));
        break;
      case u.NonNullableType:
        s.prefix ? (o = '!' + w(s.expression, D)) : (o = w(s.expression, D) + '!');
        break;
      case u.OptionalType:
        o = w(s.expression, D) + '=';
        break;
      case u.NullableType:
        s.prefix ? (o = '?' + w(s.expression, D)) : (o = w(s.expression, D) + '?');
        break;
      case u.NameExpression:
        o = s.name;
        break;
      case u.TypeApplication:
        for (o = w(s.expression, D) + '.<', A = 0, h = s.applications.length; A < h; ++A)
          (o += w(s.applications[A], D)), A + 1 !== h && (o += D ? ',' : ', ');
        o += '>';
        break;
      case u.StringLiteralType:
        o = '"' + s.value + '"';
        break;
      case u.NumericLiteralType:
        o = String(s.value);
        break;
      case u.BooleanLiteralType:
        o = String(s.value);
        break;
      default:
        B.throwError('Unknown type ' + s.type);
    }
    return o;
  }
  function O(s, D) {
    return D == null && (D = {}), w(s, D.compact, D.topLevel);
  }
  (Du.parseType = Bu), (Du.parseParamType = Ou), (Du.stringify = O), (Du.Syntax = u);
})();
(function (u) {
  (function () {
    var e, r, t, a, i;
    (a = ou), (e = Du), (r = X);
    function n(C, k, f) {
      return C.slice(k, f);
    }
    i = (function () {
      var C = Object.prototype.hasOwnProperty;
      return function (f, j) {
        return C.call(f, j);
      };
    })();
    function l(C) {
      var k = {},
        f;
      for (f in C) C.hasOwnProperty(f) && (k[f] = C[f]);
      return k;
    }
    function p(C) {
      return (C >= 97 && C <= 122) || (C >= 65 && C <= 90) || (C >= 48 && C <= 57);
    }
    function B(C) {
      return C === 'param' || C === 'argument' || C === 'arg';
    }
    function T(C) {
      return C === 'return' || C === 'returns';
    }
    function x(C) {
      return C === 'property' || C === 'prop';
    }
    function F(C) {
      return B(C) || x(C) || C === 'alias' || C === 'this' || C === 'mixes' || C === 'requires';
    }
    function m(C) {
      return F(C) || C === 'const' || C === 'constant';
    }
    function d(C) {
      return x(C) || B(C);
    }
    function c(C) {
      return x(C) || B(C);
    }
    function E(C) {
      return (
        B(C) ||
        T(C) ||
        C === 'define' ||
        C === 'enum' ||
        C === 'implements' ||
        C === 'this' ||
        C === 'type' ||
        C === 'typedef' ||
        x(C)
      );
    }
    function I(C) {
      return (
        E(C) ||
        C === 'throws' ||
        C === 'const' ||
        C === 'constant' ||
        C === 'namespace' ||
        C === 'member' ||
        C === 'var' ||
        C === 'module' ||
        C === 'constructor' ||
        C === 'class' ||
        C === 'extends' ||
        C === 'augments' ||
        C === 'public' ||
        C === 'private' ||
        C === 'protected'
      );
    }
    var L = '[ \\f\\t\\v\\u00a0\\u1680\\u180e\\u2000-\\u200a\\u202f\\u205f\\u3000\\ufeff]',
      z =
        '(' +
        L +
        '*(?:\\*' +
        L +
        `?)?)(.+|[\r
\u2028\u2029])`;
    function M(C) {
      return C.replace(/^\/\*\*?/, '')
        .replace(/\*\/$/, '')
        .replace(new RegExp(z, 'g'), '$2')
        .replace(/\s*$/, '');
    }
    function _(C, k) {
      for (var f = C.replace(/^\/\*\*?/, ''), j = 0, G = new RegExp(z, 'g'), g; (g = G.exec(f)); )
        if (((j += g[1].length), g.index + g[0].length > k + j)) return k + j + C.length - f.length;
      return C.replace(/\*\/$/, '').replace(/\s*$/, '').length;
    }
    (function (C) {
      var k, f, j, G, g, nu, pu, V, fu;
      function $() {
        var o = g.charCodeAt(f);
        return (
          (f += 1),
          a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(f) === 10) && (j += 1),
          String.fromCharCode(o)
        );
      }
      function wu() {
        var o = '';
        for ($(); f < G && p(g.charCodeAt(f)); ) o += $();
        return o;
      }
      function iu() {
        var o,
          A,
          h = f;
        for (A = !1; h < G; ) {
          if (
            ((o = g.charCodeAt(h)),
            a.code.isLineTerminator(o) && !(o === 13 && g.charCodeAt(h + 1) === 10))
          )
            A = !0;
          else if (A) {
            if (o === 64) break;
            a.code.isWhiteSpace(o) || (A = !1);
          }
          h += 1;
        }
        return h;
      }
      function U(o, A, h) {
        for (var v, N, b, R, q = !1; f < A; )
          if (((v = g.charCodeAt(f)), a.code.isWhiteSpace(v))) $();
          else if (v === 123) {
            $();
            break;
          } else {
            q = !0;
            break;
          }
        if (q) return null;
        for (N = 1, b = ''; f < A; )
          if (((v = g.charCodeAt(f)), a.code.isLineTerminator(v))) $();
          else {
            if (v === 125) {
              if (((N -= 1), N === 0)) {
                $();
                break;
              }
            } else v === 123 && (N += 1);
            b === '' && (R = f), (b += $());
          }
        return N !== 0
          ? r.throwError('Braces are not balanced')
          : c(o)
            ? e.parseParamType(b, { startIndex: w(R), range: h })
            : e.parseType(b, { startIndex: w(R), range: h });
      }
      function K(o) {
        var A;
        if (!a.code.isIdentifierStartES5(g.charCodeAt(f)) && !g[f].match(/[0-9]/)) return null;
        for (A = $(); f < o && a.code.isIdentifierPartES5(g.charCodeAt(f)); ) A += $();
        return A;
      }
      function J(o) {
        for (
          ;
          f < o &&
          (a.code.isWhiteSpace(g.charCodeAt(f)) || a.code.isLineTerminator(g.charCodeAt(f)));

        )
          $();
      }
      function Bu(o, A, h) {
        var v = '',
          N,
          b;
        if ((J(o), f >= o)) return null;
        if (g.charCodeAt(f) === 91)
          if (A) (N = !0), (v = $());
          else return null;
        if (((v += K(o)), h))
          for (
            g.charCodeAt(f) === 58 &&
              (v === 'module' || v === 'external' || v === 'event') &&
              ((v += $()), (v += K(o))),
              g.charCodeAt(f) === 91 && g.charCodeAt(f + 1) === 93 && ((v += $()), (v += $()));
            g.charCodeAt(f) === 46 ||
            g.charCodeAt(f) === 47 ||
            g.charCodeAt(f) === 35 ||
            g.charCodeAt(f) === 45 ||
            g.charCodeAt(f) === 126;

          )
            (v += $()), (v += K(o));
        if (N) {
          if ((J(o), g.charCodeAt(f) === 61)) {
            (v += $()), J(o);
            for (var R, q = 1; f < o; ) {
              if (
                ((R = g.charCodeAt(f)),
                a.code.isWhiteSpace(R) && (b || (J(o), (R = g.charCodeAt(f)))),
                R === 39 && (b ? b === "'" && (b = '') : (b = "'")),
                R === 34 && (b ? b === '"' && (b = '') : (b = '"')),
                R === 91)
              )
                q++;
              else if (R === 93 && --q === 0) break;
              v += $();
            }
          }
          if ((J(o), f >= o || g.charCodeAt(f) !== 93)) return null;
          v += $();
        }
        return v;
      }
      function Ou() {
        for (; f < G && g.charCodeAt(f) !== 64; ) $();
        return f >= G ? !1 : (r.assert(g.charCodeAt(f) === 64), !0);
      }
      function w(o) {
        return g === nu ? o : _(nu, o);
      }
      function O(o, A) {
        (this._options = o),
          (this._title = A.toLowerCase()),
          (this._tag = { title: A, description: null }),
          this._options.lineNumbers && (this._tag.lineNumber = j),
          (this._first = f - A.length - 1),
          (this._last = 0),
          (this._extra = {});
      }
      (O.prototype.addError = function (A) {
        var h = Array.prototype.slice.call(arguments, 1),
          v = A.replace(/%(\d)/g, function (N, b) {
            return r.assert(b < h.length, 'Message reference must be in range'), h[b];
          });
        return (
          this._tag.errors || (this._tag.errors = []),
          fu && r.throwError(v),
          this._tag.errors.push(v),
          pu
        );
      }),
        (O.prototype.parseType = function () {
          if (E(this._title))
            try {
              if (
                ((this._tag.type = U(this._title, this._last, this._options.range)),
                !this._tag.type &&
                  !B(this._title) &&
                  !T(this._title) &&
                  !this.addError('Missing or invalid tag type'))
              )
                return !1;
            } catch (o) {
              if (((this._tag.type = null), !this.addError(o.message))) return !1;
            }
          else if (I(this._title))
            try {
              this._tag.type = U(this._title, this._last, this._options.range);
            } catch {}
          return !0;
        }),
        (O.prototype._parseNamePath = function (o) {
          var A;
          return (
            (A = Bu(this._last, V && c(this._title), !0)),
            !A && !o && !this.addError('Missing or invalid tag name')
              ? !1
              : ((this._tag.name = A), !0)
          );
        }),
        (O.prototype.parseNamePath = function () {
          return this._parseNamePath(!1);
        }),
        (O.prototype.parseNamePathOptional = function () {
          return this._parseNamePath(!0);
        }),
        (O.prototype.parseName = function () {
          var o, A;
          if (m(this._title))
            if (
              ((this._tag.name = Bu(this._last, V && c(this._title), d(this._title))),
              this._tag.name)
            )
              (A = this._tag.name),
                A.charAt(0) === '[' &&
                  A.charAt(A.length - 1) === ']' &&
                  ((o = A.substring(1, A.length - 1).split('=')),
                  o.length > 1 && (this._tag.default = o.slice(1).join('=')),
                  (this._tag.name = o[0]),
                  this._tag.type &&
                    this._tag.type.type !== 'OptionalType' &&
                    (this._tag.type = { type: 'OptionalType', expression: this._tag.type }));
            else {
              if (!F(this._title)) return !0;
              if (B(this._title) && this._tag.type && this._tag.type.name)
                (this._extra.name = this._tag.type),
                  (this._tag.name = this._tag.type.name),
                  (this._tag.type = null);
              else if (!this.addError('Missing or invalid tag name')) return !1;
            }
          return !0;
        }),
        (O.prototype.parseDescription = function () {
          var A = n(g, f, this._last).trim();
          return A && (/^-\s+/.test(A) && (A = A.substring(2)), (this._tag.description = A)), !0;
        }),
        (O.prototype.parseCaption = function () {
          var A = n(g, f, this._last).trim(),
            h = '<caption>',
            v = '</caption>',
            N = A.indexOf(h),
            b = A.indexOf(v);
          return (
            N >= 0 && b >= 0
              ? ((this._tag.caption = A.substring(N + h.length, b).trim()),
                (this._tag.description = A.substring(b + v.length).trim()))
              : (this._tag.description = A),
            !0
          );
        }),
        (O.prototype.parseKind = function () {
          var A, h;
          return (
            (h = {
              class: !0,
              constant: !0,
              event: !0,
              external: !0,
              file: !0,
              function: !0,
              member: !0,
              mixin: !0,
              module: !0,
              namespace: !0,
              typedef: !0,
            }),
            (A = n(g, f, this._last).trim()),
            (this._tag.kind = A),
            !(!i(h, A) && !this.addError("Invalid kind name '%0'", A))
          );
        }),
        (O.prototype.parseAccess = function () {
          var A;
          return (
            (A = n(g, f, this._last).trim()),
            (this._tag.access = A),
            !(
              A !== 'private' &&
              A !== 'protected' &&
              A !== 'public' &&
              !this.addError("Invalid access name '%0'", A)
            )
          );
        }),
        (O.prototype.parseThis = function () {
          var A = n(g, f, this._last).trim();
          if (A && A.charAt(0) === '{') {
            var h = this.parseType();
            return (h && this._tag.type.type === 'NameExpression') ||
              this._tag.type.type === 'UnionType'
              ? ((this._tag.name = this._tag.type.name), !0)
              : this.addError('Invalid name for this');
          } else return this.parseNamePath();
        }),
        (O.prototype.parseVariation = function () {
          var A, h;
          return (
            (h = n(g, f, this._last).trim()),
            (A = parseFloat(h, 10)),
            (this._tag.variation = A),
            !(isNaN(A) && !this.addError("Invalid variation '%0'", h))
          );
        }),
        (O.prototype.ensureEnd = function () {
          var o = n(g, f, this._last).trim();
          return !(o && !this.addError("Unknown content '%0'", o));
        }),
        (O.prototype.epilogue = function () {
          var A;
          return (
            (A = this._tag.description),
            !(
              c(this._title) &&
              !this._tag.type &&
              A &&
              A.charAt(0) === '[' &&
              ((this._tag.type = this._extra.name),
              this._tag.name || (this._tag.name = void 0),
              !V && !this.addError('Missing or invalid tag name'))
            )
          );
        }),
        (k = {
          access: ['parseAccess'],
          alias: ['parseNamePath', 'ensureEnd'],
          augments: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          constructor: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          class: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          extends: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          example: ['parseCaption'],
          deprecated: ['parseDescription'],
          global: ['ensureEnd'],
          inner: ['ensureEnd'],
          instance: ['ensureEnd'],
          kind: ['parseKind'],
          mixes: ['parseNamePath', 'ensureEnd'],
          mixin: ['parseNamePathOptional', 'ensureEnd'],
          member: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          method: ['parseNamePathOptional', 'ensureEnd'],
          module: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          func: ['parseNamePathOptional', 'ensureEnd'],
          function: ['parseNamePathOptional', 'ensureEnd'],
          var: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          name: ['parseNamePath', 'ensureEnd'],
          namespace: ['parseType', 'parseNamePathOptional', 'ensureEnd'],
          private: ['parseType', 'parseDescription'],
          protected: ['parseType', 'parseDescription'],
          public: ['parseType', 'parseDescription'],
          readonly: ['ensureEnd'],
          requires: ['parseNamePath', 'ensureEnd'],
          since: ['parseDescription'],
          static: ['ensureEnd'],
          summary: ['parseDescription'],
          this: ['parseThis', 'ensureEnd'],
          todo: ['parseDescription'],
          typedef: ['parseType', 'parseNamePathOptional'],
          variation: ['parseVariation'],
          version: ['parseDescription'],
        }),
        (O.prototype.parse = function () {
          var A, h, v, N;
          if (!this._title && !this.addError('Missing or invalid title')) return null;
          for (
            this._last = iu(this._title),
              this._options.range &&
                (this._tag.range = [
                  this._first,
                  g.slice(0, this._last).replace(/\s*$/, '').length,
                ].map(w)),
              i(k, this._title)
                ? (v = k[this._title])
                : (v = ['parseType', 'parseName', 'parseDescription', 'epilogue']),
              A = 0,
              h = v.length;
            A < h;
            ++A
          )
            if (((N = v[A]), !this[N]())) return null;
          return this._tag;
        });
      function s(o) {
        var A, h, v;
        if (!Ou()) return null;
        for (A = wu(), h = new O(o, A), v = h.parse(); f < h._last; ) $();
        return v;
      }
      function D(o) {
        var A = '',
          h,
          v;
        for (v = !0; f < G && ((h = g.charCodeAt(f)), !(v && h === 64)); )
          a.code.isLineTerminator(h) ? (v = !0) : v && !a.code.isWhiteSpace(h) && (v = !1),
            (A += $());
        return o ? A : A.trim();
      }
      function y(o, A) {
        var h = [],
          v,
          N,
          b,
          R,
          q;
        if (
          (A === void 0 && (A = {}),
          typeof A.unwrap == 'boolean' && A.unwrap ? (g = M(o)) : (g = o),
          (nu = o),
          A.tags)
        )
          if (Array.isArray(A.tags))
            for (b = {}, R = 0, q = A.tags.length; R < q; R++)
              typeof A.tags[R] == 'string'
                ? (b[A.tags[R]] = !0)
                : r.throwError('Invalid "tags" parameter: ' + A.tags);
          else r.throwError('Invalid "tags" parameter: ' + A.tags);
        for (
          G = g.length,
            f = 0,
            j = 0,
            pu = A.recoverable,
            V = A.sloppy,
            fu = A.strict,
            N = D(A.preserveWhitespace);
          (v = s(A)), !!v;

        )
          (!b || b.hasOwnProperty(v.title)) && h.push(v);
        return { description: N, tags: h };
      }
      C.parse = y;
    })((t = {})),
      (u.version = r.VERSION),
      (u.parse = t.parse),
      (u.parseType = e.parseType),
      (u.parseParamType = e.parseParamType),
      (u.unwrapComment = M),
      (u.Syntax = l(e.Syntax)),
      (u.Error = r.DoctrineError),
      (u.type = {
        Syntax: u.Syntax,
        parseType: e.parseType,
        parseParamType: e.parseParamType,
        stringify: e.stringify,
      });
  })();
})(Qe);
const { combineParameters: CA } = __STORYBOOK_MODULE_PREVIEW_API__;
var Ye = /^['"]|['"]$/g,
  lA = (u) => u.replace(Ye, ''),
  cA = (u) => Ye.test(u),
  Xe = (u) => {
    let e = lA(u);
    return cA(u) || Number.isNaN(Number(e)) ? e : Number(e);
  },
  EA = (u) => {
    switch (u.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Fu(r.value);
          }),
          { name: 'object', value: e }
        );
      default:
        throw new Error(`Unknown: ${u}`);
    }
  },
  Fu = (u) => {
    let { name: e, raw: r } = u,
      t = {};
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...t, name: e };
      case 'Array':
        return { ...t, name: 'array', value: u.elements.map(Fu) };
      case 'signature':
        return { ...t, ...EA(u) };
      case 'union':
        let a;
        return (
          u.elements.every((i) => i.name === 'literal')
            ? (a = { ...t, name: 'enum', value: u.elements.map((i) => Xe(i.value)) })
            : (a = { ...t, name: e, value: u.elements.map(Fu) }),
          a
        );
      case 'intersection':
        return { ...t, name: e, value: u.elements.map(Fu) };
      default:
        return { ...t, name: 'other', value: e };
    }
  },
  pA = (u) => u.name === 'literal',
  fA = (u) => u.value.replace(/['|"]/g, ''),
  BA = (u) => {
    switch (u.type) {
      case 'function':
        return { name: 'function' };
      case 'object':
        let e = {};
        return (
          u.signature.properties.forEach((r) => {
            e[r.key] = Cu(r.value);
          }),
          { name: 'object', value: e }
        );
      default:
        throw new Error(`Unknown: ${u}`);
    }
  },
  Cu = (u) => {
    let { name: e, raw: r } = u,
      t = {};
    switch ((typeof r < 'u' && (t.raw = r), u.name)) {
      case 'literal':
        return { ...t, name: 'other', value: u.value };
      case 'string':
      case 'number':
      case 'symbol':
      case 'boolean':
        return { ...t, name: e };
      case 'Array':
        return { ...t, name: 'array', value: u.elements.map(Cu) };
      case 'signature':
        return { ...t, ...BA(u) };
      case 'union':
        return u.elements.every(pA)
          ? { ...t, name: 'enum', value: u.elements.map(fA) }
          : { ...t, name: e, value: u.elements.map(Cu) };
      case 'intersection':
        return { ...t, name: e, value: u.elements.map(Cu) };
      default:
        return { ...t, name: 'other', value: e };
    }
  },
  hA = /^\(.*\) => /,
  Au = (u) => {
    let { name: e, raw: r, computed: t, value: a } = u,
      i = {};
    switch ((typeof r < 'u' && (i.raw = r), e)) {
      case 'enum': {
        let l = t ? a : a.map((p) => Xe(p.value));
        return { ...i, name: e, value: l };
      }
      case 'string':
      case 'number':
      case 'symbol':
        return { ...i, name: e };
      case 'func':
        return { ...i, name: 'function' };
      case 'bool':
      case 'boolean':
        return { ...i, name: 'boolean' };
      case 'arrayOf':
      case 'array':
        return { ...i, name: 'array', value: a && Au(a) };
      case 'object':
        return { ...i, name: e };
      case 'objectOf':
        return { ...i, name: e, value: Au(a) };
      case 'shape':
      case 'exact':
        let n = q1(a, (l) => Au(l));
        return { ...i, name: 'object', value: n };
      case 'union':
        return { ...i, name: 'union', value: a.map((l) => Au(l)) };
      case 'instanceOf':
      case 'element':
      case 'elementType':
      default: {
        if ((e == null ? void 0 : e.indexOf('|')) > 0)
          try {
            let B = e.split('|').map((T) => JSON.parse(T));
            return { ...i, name: 'enum', value: B };
          } catch {}
        let l = a ? `${e}(${a})` : e,
          p = hA.test(e) ? 'function' : 'other';
        return { ...i, name: p, value: l };
      }
    }
  },
  Yu = (u) => {
    let { type: e, tsType: r, flowType: t } = u;
    return e != null ? Au(e) : r != null ? Fu(r) : t != null ? Cu(t) : null;
  },
  yA = ((u) => (
    (u.JAVASCRIPT = 'JavaScript'),
    (u.FLOW = 'Flow'),
    (u.TYPESCRIPT = 'TypeScript'),
    (u.UNKNOWN = 'Unknown'),
    u
  ))(yA || {}),
  dA = ['null', 'undefined'];
function Xu(u) {
  return dA.some((e) => e === u);
}
var vA = (u) => {
  if (!u) return '';
  if (typeof u == 'string') return u;
  throw new Error(`Description: expected string, got: ${JSON.stringify(u)}`);
};
function Ze(u) {
  return !!u.__docgenInfo;
}
function gA(u) {
  return u != null && Object.keys(u).length > 0;
}
function mA(u, e) {
  return Ze(u) ? u.__docgenInfo[e] : null;
}
function _A(u) {
  return Ze(u) && vA(u.__docgenInfo.description);
}
function xA(u) {
  return u != null && u.includes('@');
}
function TA(u, e) {
  let r;
  try {
    r = Qe.parse(u, { tags: e, sloppy: !0 });
  } catch (t) {
    throw (console.error(t), new Error('Cannot parse JSDoc tags.'));
  }
  return r;
}
var bA = { tags: ['param', 'arg', 'argument', 'returns', 'ignore', 'deprecated'] },
  SA = (u, e = bA) => {
    if (!xA(u)) return { includesJsDoc: !1, ignore: !1 };
    let r = TA(u, e.tags),
      t = $A(r);
    return t.ignore
      ? { includesJsDoc: !0, ignore: !0 }
      : { includesJsDoc: !0, ignore: !1, description: r.description, extractedTags: t };
  };
function $A(u) {
  let e = { params: null, deprecated: null, returns: null, ignore: !1 };
  for (let r = 0; r < u.tags.length; r += 1) {
    let t = u.tags[r];
    if (t.title === 'ignore') {
      e.ignore = !0;
      break;
    } else
      switch (t.title) {
        case 'param':
        case 'arg':
        case 'argument': {
          let a = wA(t);
          a != null && (e.params == null && (e.params = []), e.params.push(a));
          break;
        }
        case 'deprecated': {
          let a = OA(t);
          a != null && (e.deprecated = a);
          break;
        }
        case 'returns': {
          let a = NA(t);
          a != null && (e.returns = a);
          break;
        }
      }
  }
  return e;
}
function wA(u) {
  let e = u.name;
  return e != null && e !== 'null-null'
    ? {
        name: u.name,
        type: u.type,
        description: u.description,
        getPrettyName: () =>
          e.includes('null') ? e.replace('-null', '').replace('.null', '') : u.name,
        getTypeName: () => (u.type != null ? Z(u.type) : null),
      }
    : null;
}
function OA(u) {
  return u.title != null ? u.description : null;
}
function NA(u) {
  return u.type != null
    ? { type: u.type, description: u.description, getTypeName: () => Z(u.type) }
    : null;
}
function Z(u) {
  return u.type === 'NameExpression'
    ? u.name
    : u.type === 'RecordType'
      ? `({${u.fields
          .map((e) => {
            if (e.value != null) {
              let r = Z(e.value);
              return `${e.key}: ${r}`;
            }
            return e.key;
          })
          .join(', ')}})`
      : u.type === 'UnionType'
        ? `(${u.elements.map(Z).join('|')})`
        : u.type === 'ArrayType'
          ? '[]'
          : u.type === 'TypeApplication' && u.expression != null && u.expression.name === 'Array'
            ? `${Z(u.applications[0])}[]`
            : u.type === 'NullableType' || u.type === 'NonNullableType' || u.type === 'OptionalType'
              ? Z(u.expression)
              : u.type === 'AllLiteral'
                ? 'any'
                : null;
}
function ur(u) {
  return u.length > 90;
}
function PA(u) {
  return u.length > 50;
}
function P(u, e) {
  return u === e ? { summary: u } : { summary: u, detail: e };
}
function er({ name: u, value: e, elements: r, raw: t }) {
  return e ?? (r != null ? r.map(er).join(' | ') : t ?? u);
}
function IA({ name: u, raw: e, elements: r }) {
  return r != null ? P(r.map(er).join(' | ')) : e != null ? P(e.replace(/^\|\s*/, '')) : P(u);
}
function RA({ type: u, raw: e }) {
  return e != null ? P(e) : P(u);
}
function LA({ type: u, raw: e }) {
  return e != null ? (ur(e) ? P(u, e) : P(e)) : P(u);
}
function MA(u) {
  let { type: e } = u;
  return e === 'object' ? LA(u) : RA(u);
}
function kA({ name: u, raw: e }) {
  return e != null ? (ur(e) ? P(u, e) : P(e)) : P(u);
}
function UA(u) {
  if (u == null) return null;
  switch (u.name) {
    case 'union':
      return IA(u);
    case 'signature':
      return MA(u);
    default:
      return kA(u);
  }
}
function jA(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Xu(r)) return PA(r) ? P(e.name, r) : P(r);
  }
  return null;
}
var GA = (u, e) => {
  let { flowType: r, description: t, required: a, defaultValue: i } = e;
  return { name: u, type: UA(r), required: a, description: t, defaultValue: jA(i, r) };
};
function KA({ tsType: u, required: e }) {
  if (u == null) return null;
  let r = u.name;
  return (
    e || (r = r.replace(' | undefined', '')),
    P(['Array', 'Record', 'signature'].includes(u.name) ? u.raw : r)
  );
}
function HA({ defaultValue: u }) {
  if (u != null) {
    let { value: e } = u;
    if (!Xu(e)) return P(e);
  }
  return null;
}
var qA = (u, e) => {
  let { description: r, required: t } = e;
  return { name: u, type: KA(e), required: t, description: r, defaultValue: HA(e) };
};
function WA(u) {
  return u != null ? P(u.name) : null;
}
function zA(u) {
  let { computed: e, func: r } = u;
  return typeof e > 'u' && typeof r > 'u';
}
function VA(u) {
  return u
    ? u.name === 'string'
      ? !0
      : u.name === 'enum'
        ? Array.isArray(u.value) &&
          u.value.every(
            ({ value: e }) => typeof e == 'string' && e[0] === '"' && e[e.length - 1] === '"',
          )
        : !1
    : !1;
}
function JA(u, e) {
  if (u != null) {
    let { value: r } = u;
    if (!Xu(r)) return zA(u) && VA(e) ? P(JSON.stringify(r)) : P(r);
  }
  return null;
}
function rr(u, e, r) {
  let { description: t, required: a, defaultValue: i } = r;
  return { name: u, type: WA(e), required: a, description: t, defaultValue: JA(i, e) };
}
function $u(u, e) {
  var r;
  if (e.includesJsDoc) {
    let { description: t, extractedTags: a } = e;
    t != null && (u.description = e.description);
    let i = {
      ...a,
      params:
        (r = a == null ? void 0 : a.params) == null
          ? void 0
          : r.map((n) => ({ name: n.getPrettyName(), description: n.description })),
    };
    Object.values(i).filter(Boolean).length > 0 && (u.jsDocTags = i);
  }
  return u;
}
var QA = (u, e, r) => {
    let t = rr(u, e.type, e);
    return (t.sbType = Yu(e)), $u(t, r);
  },
  YA = (u, e, r) => {
    let t = qA(u, e);
    return (t.sbType = Yu(e)), $u(t, r);
  },
  XA = (u, e, r) => {
    let t = GA(u, e);
    return (t.sbType = Yu(e)), $u(t, r);
  },
  ZA = (u, e, r) => {
    let t = rr(u, { name: 'unknown' }, e);
    return $u(t, r);
  },
  tr = (u) => {
    switch (u) {
      case 'JavaScript':
        return QA;
      case 'TypeScript':
        return YA;
      case 'Flow':
        return XA;
      default:
        return ZA;
    }
  },
  ar = (u) =>
    u.type != null
      ? 'JavaScript'
      : u.flowType != null
        ? 'Flow'
        : u.tsType != null
          ? 'TypeScript'
          : 'Unknown',
  uo = (u) => {
    let e = ar(u[0]),
      r = tr(e);
    return u.map((t) => {
      var i;
      let a = t;
      return (
        (i = t.type) != null &&
          i.elements &&
          (a = { ...t, type: { ...t.type, value: t.type.elements } }),
        nr(a.name, a, e, r)
      );
    });
  },
  eo = (u) => {
    let e = Object.keys(u),
      r = ar(u[e[0]]),
      t = tr(r);
    return e
      .map((a) => {
        let i = u[a];
        return i != null ? nr(a, i, r, t) : null;
      })
      .filter(Boolean);
  },
  io = (u, e) => {
    let r = mA(u, e);
    return gA(r) ? (Array.isArray(r) ? uo(r) : eo(r)) : [];
  };
function nr(u, e, r, t) {
  let a = SA(e.description);
  return a.includesJsDoc && a.ignore
    ? null
    : { propDef: t(u, e, a), jsDocTags: a.extractedTags, docgenInfo: e, typeSystem: r };
}
function so(u) {
  return u != null && _A(u);
}
var Do = (u) => {
    let {
        component: e,
        argTypes: r,
        parameters: { docs: t = {} },
      } = u,
      { extractArgTypes: a } = t,
      i = a && e ? a(e) : {};
    return i ? CA(i, r) : r;
  },
  ro = 'storybook/docs',
  Ao = `${ro}/snippet-rendered`,
  to = ((u) => ((u.AUTO = 'auto'), (u.CODE = 'code'), (u.DYNAMIC = 'dynamic'), u))(to || {});
export {
  di as A,
  Bi as B,
  Ii as C,
  Qa as D,
  sr as E,
  m1 as F,
  ss as G,
  ma as H,
  sa as I,
  Fa as J,
  zu as K,
  ya as L,
  xu as M,
  Bs as N,
  vu as O,
  ai as P,
  Pe as Q,
  lu as R,
  Ao as S,
  yA as T,
  Hi as U,
  vA as V,
  H as _,
  Vu as a,
  cu as b,
  no as c,
  Eu as d,
  W as e,
  so as f,
  Do as g,
  P as h,
  Ku as i,
  mA as j,
  to as k,
  Oe as l,
  Ze as m,
  io as n,
  PA as o,
  ur as p,
  S1 as q,
  Se as r,
  Ve as s,
  Me as t,
  ou as u,
  Su as v,
  Je as w,
  qa as x,
  sn as y,
  un as z,
};

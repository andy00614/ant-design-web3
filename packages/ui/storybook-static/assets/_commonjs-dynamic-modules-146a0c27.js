function o() {
  return (
    (o = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var r = 1; r < arguments.length; r++) {
            var e = arguments[r];
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
          }
          return t;
        }),
    o.apply(this, arguments)
  );
}
function i(t, r) {
  return (
    (i = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, c) {
          return (n.__proto__ = c), n;
        }),
    i(t, r)
  );
}
function a(t) {
  return (
    (a = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        }),
    a(t)
  );
}
function f() {
  if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == 'function') return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
  } catch {
    return !1;
  }
}
function u(t) {
  if (t === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t;
}
function s(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
export { i as _, f as a, a as b, s as c, u as d, o as e };

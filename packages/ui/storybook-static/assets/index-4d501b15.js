var o = {},
  c = {
    get exports() {
      return o;
    },
    set exports(e) {
      o = e;
    },
  },
  i = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  y = i,
  m = y;
function n() {}
function a() {}
a.resetWarningCache = n;
var u = function () {
  function e(T, h, f, l, v, s) {
    if (s !== m) {
      var p = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      );
      throw ((p.name = 'Invariant Violation'), p);
    }
  }
  e.isRequired = e;
  function r() {
    return e;
  }
  var t = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: r,
    element: e,
    elementType: e,
    instanceOf: r,
    node: e,
    objectOf: r,
    oneOf: r,
    oneOfType: r,
    shape: r,
    exact: r,
    checkPropTypes: a,
    resetWarningCache: n,
  };
  return (t.PropTypes = t), t;
};
c.exports = u();
export { o as p };

import { _ as p } from './iframe-26359f8d.js';
import { H as d, A as E, C as h, D as x } from './index-db1f4591.js';
import { r as c, R as e } from './index-f1f749bf.js';
import { r as l, u } from './react-18-598911a0.js';

import '../sb-preview/runtime.js';
import './_commonjsHelpers-042e6b4d.js';
import './index-924d9a68.js';
import './_commonjs-dynamic-modules-146a0c27.js';
import './index-11d98b33.js';
import './index-2266cf01.js';
import './index-356e4a49.js';

var _ = { code: h, a: E, ...d },
  D = class extends c.Component {
    constructor() {
      super(...arguments), (this.state = { hasError: !1 });
    }
    static getDerivedStateFromError() {
      return { hasError: !0 };
    }
    componentDidCatch(t) {
      let { showException: r } = this.props;
      r(t);
    }
    render() {
      let { hasError: t } = this.state,
        { children: r } = this.props;
      return t ? null : e.createElement(e.Fragment, null, r);
    }
  },
  O = class {
    constructor() {
      (this.render = async (t, r, o) => {
        let n = { ..._, ...(r == null ? void 0 : r.components) },
          s = x;
        return new Promise((m, i) => {
          p(
            () => import('./index-a42a4a37.js'),
            [
              './index-a42a4a37.js',
              './index-4fb8b842.js',
              './index-f1f749bf.js',
              './_commonjsHelpers-042e6b4d.js',
            ],
            import.meta.url,
          )
            .then(({ MDXProvider: a }) =>
              l(
                e.createElement(
                  D,
                  { showException: i, key: Math.random() },
                  e.createElement(
                    a,
                    { components: n },
                    e.createElement(s, { context: t, docsParameter: r }),
                  ),
                ),
                o,
              ),
            )
            .then(() => m());
        });
      }),
        (this.unmount = (t) => {
          u(t);
        });
    }
  };
export { O as DocsRenderer, _ as defaultComponents };

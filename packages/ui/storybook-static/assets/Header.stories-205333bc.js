import { H as c } from './Header-eae9a791.js';

import './jsx-runtime-ccada58e.js';
import './index-f1f749bf.js';
import './_commonjsHelpers-042e6b4d.js';
import './index-4d501b15.js';
import './Button-42bbe43d.js';

const H = {
    title: 'Example/Header',
    component: c,
    tags: ['autodocs'],
    parameters: { layout: 'fullscreen' },
  },
  e = { args: { user: { name: 'Jane Doe' } } },
  r = {};
var o, a, s;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `{
  args: {
    user: {
      name: 'Jane Doe'
    }
  }
}`,
      ...((s = (a = e.parameters) == null ? void 0 : a.docs) == null ? void 0 : s.source),
    },
  },
};
var t, n, m;
r.parameters = {
  ...r.parameters,
  docs: {
    ...((t = r.parameters) == null ? void 0 : t.docs),
    source: {
      originalSource: '{}',
      ...((m = (n = r.parameters) == null ? void 0 : n.docs) == null ? void 0 : m.source),
    },
  },
};
const L = ['LoggedIn', 'LoggedOut'];
export { e as LoggedIn, r as LoggedOut, L as __namedExportsOrder, H as default };

import { r as l } from './index-f1f749bf.js';
import { j as n } from './jsx-runtime-ccada58e.js';
import { c as N, S as y } from './Select-5bb91fc0.js';

import './_commonjsHelpers-042e6b4d.js';

async function x() {
  try {
    const r = await fetch('https://whyindian.ddns.net/wallet/network/list', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', requestId: Date.now().toString() },
    });
    if (!r.ok) throw new Error(`Error! status: ${r.status}`);
    return (await r.json()).data;
  } catch (r) {
    console.error('There was a problem fetching the data:', r);
  }
}
const d = ({ className: r, onChange: c }) => {
  const [a, f] = l.useState(),
    [S, i] = l.useState('');
  l.useEffect(() => {
    async function e() {
      var m;
      const t = await x();
      f(t);
      const o =
        typeof window < 'u' && (localStorage == null ? void 0 : localStorage.getItem('nodeId'));
      i(o || ((m = t == null ? void 0 : t[0]) == null ? void 0 : m.id.toString()));
    }
    e();
  }, []);
  const h = (e, t) => {
      localStorage.setItem('nodeId', e), localStorage.setItem('nodeUrl', t);
    },
    w = (e) => {
      const t = a.find((o) => o.id.toString() === e.toString());
      t && (c && c(t), h(e.toString(), t.url), i(t.id.toString()), window.location.reload());
    };
  return a
    ? n.jsx(y, {
        className: r,
        prefix: () =>
          n.jsx('span', {
            'aria-label': 'Online',
            className: N('bg-green-400', 'inline-block h-2 w-2 flex-shrink-0 rounded-full mr-2'),
          }),
        options:
          (a == null ? void 0 : a.map((e) => ({ label: e.name, value: e.id.toString() }))) || [],
        onChange: (e) => w(e),
        value: S || '',
      })
    : n.jsx(n.Fragment, {});
};
try {
  (d.displayName = 'NodeSelect'),
    (d.__docgenInfo = {
      description: '',
      displayName: 'NodeSelect',
      props: {
        className: {
          defaultValue: null,
          description: '',
          name: 'className',
          required: !0,
          type: { name: 'string' },
        },
        onChange: {
          defaultValue: null,
          description: '',
          name: 'onChange',
          required: !1,
          type: { name: '((v: NetworkData) => void)' },
        },
      },
    });
} catch {}
const b = {
    title: 'Example/NodeSelect',
    component: d,
    parameters: { layout: 'centered' },
    args: {},
    tags: ['autodocs'],
    argTypes: {},
  },
  s = { args: {} };
var p, u, g;
s.parameters = {
  ...s.parameters,
  docs: {
    ...((p = s.parameters) == null ? void 0 : p.docs),
    source: {
      originalSource: `{
  args: {}
}`,
      ...((g = (u = s.parameters) == null ? void 0 : u.docs) == null ? void 0 : g.source),
    },
  },
};
const k = ['Primary'];
export { s as Primary, k as __namedExportsOrder, b as default };

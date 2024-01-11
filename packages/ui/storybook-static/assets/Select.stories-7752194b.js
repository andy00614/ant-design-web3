import { r as t } from './index-f1f749bf.js';
import { j as m } from './jsx-runtime-ccada58e.js';
import { S as n } from './Select-5bb91fc0.js';

import './_commonjsHelpers-042e6b4d.js';

const b = {
    title: 'Example/Select',
    component: n,
    parameters: { layout: 'centered' },
    args: {
      value: '1',
      options: [
        { label: 'Wade Cooper', value: '1' },
        { label: 'Arlene Mccoy', value: '2' },
        { label: 'Devon Webb', value: '3' },
        { label: 'Tom Cook', value: '4' },
        { label: 'Tanya Fox', value: '5' },
        { label: 'Hellen Schmidt', value: '6' },
      ],
    },
    tags: ['autodocs'],
    argTypes: {},
  },
  e = (s) => {
    const [c, a] = t.useState('1'),
      [u, p] = t.useState([]);
    return (
      t.useEffect(() => {
        p(s.options), a(s.value);
      }, []),
      m.jsx(n, { value: c, options: u, onChange: (i) => a(i) })
    );
  };
var o, r, l;
e.parameters = {
  ...e.parameters,
  docs: {
    ...((o = e.parameters) == null ? void 0 : o.docs),
    source: {
      originalSource: `args => {
  const [v, setV] = useState('1');
  const [list, setList] = useState<TSelectOption[]>([]);
  useEffect(() => {
    setList(args.options);
    setV(args.value);
  }, []);
  return <Select value={v} options={list} onChange={(_v: string) => setV(_v)} />;
}`,
      ...((l = (r = e.parameters) == null ? void 0 : r.docs) == null ? void 0 : l.source),
    },
  },
};
const f = ['Template'];
export { e as Template, f as __namedExportsOrder, b as default };

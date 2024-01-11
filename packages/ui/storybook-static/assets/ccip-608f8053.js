import {
  b as E,
  d as g,
  I as h,
  c as k,
  B as l,
  e as L,
  H as m,
  a as O,
  i as p,
  g as w,
  s as y,
} from './ConnectButton.stories-b526cdee.js';

import './jsx-runtime-ccada58e.js';
import './index-f1f749bf.js';
import './_commonjsHelpers-042e6b4d.js';
import './_commonjs-dynamic-modules-146a0c27.js';
import './index-924d9a68.js';
import './iframe-26359f8d.js';
import '../sb-preview/runtime.js';

class x extends l {
  constructor({ callbackSelector: e, cause: r, data: n, extraData: c, sender: d, urls: t }) {
    var i;
    super(r.shortMessage || 'An error occurred while fetching for an offchain result.', {
      cause: r,
      metaMessages: [
        ...(r.metaMessages || []),
        (i = r.metaMessages) != null && i.length ? '' : [],
        'Offchain Gateway Call:',
        t && ['  Gateway URL(s):', ...t.map((u) => `    ${w(u)}`)],
        `  Sender: ${d}`,
        `  Data: ${n}`,
        `  Callback selector: ${e}`,
        `  Extra data: ${c}`,
      ].flat(),
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupError',
      });
  }
}
class M extends l {
  constructor({ result: e, url: r }) {
    super('Offchain gateway response is malformed. Response data must be a hex value.', {
      metaMessages: [`Gateway URL: ${w(r)}`, `Response: ${y(e)}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupResponseMalformedError',
      });
  }
}
class R extends l {
  constructor({ sender: e, to: r }) {
    super('Reverted sender address does not match target contract address (`to`).', {
      metaMessages: [`Contract address: ${r}`, `OffchainLookup sender address: ${e}`],
    }),
      Object.defineProperty(this, 'name', {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 'OffchainLookupSenderMismatchError',
      });
  }
}
function $(o, e) {
  if (!p(o)) throw new h({ address: o });
  if (!p(e)) throw new h({ address: e });
  return o.toLowerCase() === e.toLowerCase();
}
const I = '0x556f1830',
  S = {
    name: 'OffchainLookup',
    type: 'error',
    inputs: [
      { name: 'sender', type: 'address' },
      { name: 'urls', type: 'string[]' },
      { name: 'callData', type: 'bytes' },
      { name: 'callbackFunction', type: 'bytes4' },
      { name: 'extraData', type: 'bytes' },
    ],
  };
async function U(o, { blockNumber: e, blockTag: r, data: n, to: c }) {
  const { args: d } = g({ data: n, abi: [S] }),
    [t, i, u, a, s] = d;
  try {
    if (!$(c, t)) throw new R({ sender: t, to: c });
    const f = await A({ data: u, sender: t, urls: i }),
      { data: b } = await k(o, {
        blockNumber: e,
        blockTag: r,
        data: O([a, L([{ type: 'bytes' }, { type: 'bytes' }], [f, s])]),
        to: c,
      });
    return b;
  } catch (f) {
    throw new x({ callbackSelector: a, cause: f, data: n, extraData: s, sender: t, urls: i });
  }
}
async function A({ data: o, sender: e, urls: r }) {
  var c;
  let n = new Error('An unknown error occurred.');
  for (let d = 0; d < r.length; d++) {
    const t = r[d],
      i = t.includes('{data}') ? 'GET' : 'POST',
      u = i === 'POST' ? { data: o, sender: e } : void 0;
    try {
      const a = await fetch(t.replace('{sender}', e).replace('{data}', o), {
        body: JSON.stringify(u),
        method: i,
      });
      let s;
      if (
        ((c = a.headers.get('Content-Type')) != null && c.startsWith('application/json')
          ? (s = (await a.json()).data)
          : (s = await a.text()),
        !a.ok)
      ) {
        n = new m({
          body: u,
          details: s != null && s.error ? y(s.error) : a.statusText,
          headers: a.headers,
          status: a.status,
          url: t,
        });
        continue;
      }
      if (!E(s)) {
        n = new M({ result: s, url: t });
        continue;
      }
      return s;
    } catch (a) {
      n = new m({ body: u, details: a.message, url: t });
    }
  }
  throw n;
}
export {
  A as ccipFetch,
  U as offchainLookup,
  S as offchainLookupAbiItem,
  I as offchainLookupSignature,
};

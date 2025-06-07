
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 546, hash: 'b3bd2453bdffbd528858fca15dde3a46c06b82325e795d76cbe3cc340509a644', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 948, hash: 'f7eabefa72de93525b16b5d958ddebce185f711cd174ae52cbc8f17fa738ccc4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7079, hash: '4d547045f9f3be563c52d785f2bb556b9d57e17206da7fe1e841b164147f7645', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-M4FUCC4T.css': {size: 280, hash: 'ZfdRRzIQc30', text: () => import('./assets-chunks/styles-M4FUCC4T_css.mjs').then(m => m.default)}
  },
};

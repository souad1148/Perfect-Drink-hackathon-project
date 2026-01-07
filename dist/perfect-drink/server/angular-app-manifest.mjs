
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
    'index.csr.html': {size: 14104, hash: '5b3c542f235359d6df751dc2997e46d12ab1150c5fd1663642b9008979206012', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8872, hash: 'a01fd77b889e0931d6c9a45c6c82f99badf7fa764ebccf189cd3412ee02c3076', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 35973, hash: '4875daf779898bfff35471c327d9cae9d9ceac5b6bdd3e7886ede2a32f46fba6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-VIJRCGWA.css': {size: 22853, hash: 'qgtK4blZ6JU', text: () => import('./assets-chunks/styles-VIJRCGWA_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Perfect-Drink-hackathon-project/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Perfect-Drink-hackathon-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14493, hash: '02f473a64169d1c2b3d95090b0790e2d17b10f80341acc189b597741d114b6e7', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8904, hash: 'ae668686d7dc2581b556409a85b00e241aa6885c7876d6c9b775c04029e33357', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 36417, hash: '5c59e480a5f7c9cf1aae965b509d43ce2e73c4d357456840146a7022db0d4454', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-7NWEUDIG.css': {size: 24226, hash: 'akk+qZIrnlo', text: () => import('./assets-chunks/styles-7NWEUDIG_css.mjs').then(m => m.default)}
  },
};

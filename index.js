const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Change this or set TARGET_URL env var on Railway
const nggUrl = process.env.TARGET_URL || 'https://now.gg';

const proxy = createProxyMiddleware({
  target: nggUrl,
  changeOrigin: true,
  secure: true,
  logLevel: 'debug',
  onProxyReq: (proxyReq, req, res) => {
    // Strip common proxy-detect headers
    proxyReq.removeHeader('x-forwarded-for');
    proxyReq.removeHeader('x-real-ip');
    proxyReq.removeHeader('via');
    proxyReq.removeHeader('forwarded');
  }
});

app.use('/', proxy);

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`Now.gg-X Fixed running on 0.0.0.0:${port}`);
  console.log(`Proxying to: ${nggUrl}`);
});

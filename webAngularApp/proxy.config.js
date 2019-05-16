const proxy = [{
  context: '/api',
  target: 'http://localhost:5050',
  // pathRewrite: {
  //   '^/api': ''
  // }
}];
module.exports = proxy;

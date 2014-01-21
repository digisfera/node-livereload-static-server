var connect = require('connect');
var path = require('path');
var tinyLr = require('tiny-lr');

module.exports = function(base, port, lrPort) {
  base = base || '.';
  port = port || 8080;
  lrPort = lrPort || 35729;
  connect()
    .use(require('connect-disable-304')())
    .use(require('connect-livereload')())
    .use(connect.static(path.resolve(base)))
    .use(connect.directory(path.resolve(base)))
    .listen(port);

  lrServer = tinyLr();
  lrServer.listen(lrPort);

  return function(file) {
    lrServer.changed({ body: { files: [file] }});
  };
}
var connect = require('connect'),
    path = require('path'),
    tinyLr = require('tiny-lr'),
    _ = require('lodash');

module.exports = function(base, port, lrPort) {
  base = base || '.';
  port = port || 8080;
  lrPort = lrPort || 35729;
  connect()
    .use(require('connect-disable-304')())
    .use(require('connect-livereload')({ port: lrPort }))
    .use(connect.static(path.resolve(base)))
    .use(connect.directory(path.resolve(base)))
    .listen(port);

  lrServer = tinyLr();
  lrServer.listen(lrPort);

  return function(file) {
    lrServer.changed({ body: { files: [file] }});
    return _.size(lrServer.clients);
  };
};

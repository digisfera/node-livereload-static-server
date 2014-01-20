connect = require('connect')
path = require('path')
tinyLr = require('tiny-lr')

module.exports = (base, port = 8080, lrPort = 35729) ->
  connect()
    .use(require('connect-disable-304')())
    .use(require('connect-livereload')())
    .use(connect.static(path.resolve(base)))
    .use(connect.directory(path.resolve(base)))
    .listen(port)

  lrServer = tinyLr()
  lrServer.listen(lrPort)
  (file) -> lrServer.changed({ body: { files: [file] }})
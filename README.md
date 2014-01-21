# livereload-static-server

Static server with livereload powered by connect

## Usage

`npm install livereload-static-server`

**server(basePath = ".", port = 8080, liveReloadPort = 35729)**

    var server = require('livereload-static-server');
    var livereload = server()

    // Whenever a file changes
    livereload(filename)
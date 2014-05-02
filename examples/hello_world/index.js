var wabisabi = require('wabisabi.js');

var controllers = require("./controllers");

var mapping = {
  "/$": controllers.Controller1,
  "/2/?$": controllers.Controller2,
  "/(\\d+).(\\d+)/?$": controllers.Controller2
};

var app = new wabisabi.core.Application(mapping);
app.start();
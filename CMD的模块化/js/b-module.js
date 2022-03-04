define(function (require, exports) {
  var moduleA = require("./a-module");
  exports.b = moduleA.a + 1;
});

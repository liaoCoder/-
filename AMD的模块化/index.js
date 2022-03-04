
require.config({
  paths: {
    moduleA: "js/a-module",
    moduleB: "js/b-module",
  },
});

require(["moduleA", "moduleB"], function (moduleA, moduleB) {
  console.log(moduleA);
  console.log(moduleB);
});

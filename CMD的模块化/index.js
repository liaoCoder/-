seajs.use(["./js/a-module.js", "./js/b-module.js"], function (moduleA, moduleB) {
  console.log(moduleA);
  console.log(moduleB);
});


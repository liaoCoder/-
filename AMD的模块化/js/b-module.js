define("moduleB", ["moduleA"], function (moduleA) {
  return {
    b: moduleA.a + 1,
  };
});

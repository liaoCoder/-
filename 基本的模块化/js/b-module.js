var moduleB = (function (moduleA) {
  return {
    b: moduleA.b,
    c: 4,
  };
})(moduleA);

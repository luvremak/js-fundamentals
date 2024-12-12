function contract(fn, ...types) {
  return function(...args) {
    types.slice(0, -1).forEach((type, index) => {
      if (typeof args[index] !== type.name.toLowerCase()) {
        throw new TypeError(`Argument ${index + 1} should be of type ${type.name}`);
      }
    });
    const result = fn(...args);
    const returnType = types[types.length - 1];
    if (typeof result !== returnType.name.toLowerCase()) {
      throw new TypeError(`Return value should be of type ${returnType.name}`);
    }
    return result;
  };
}

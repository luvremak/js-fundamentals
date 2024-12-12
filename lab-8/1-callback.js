function iterate(object, callback) {
  for (const [key, value] of Object.entries(object)) {
    callback(key, value, object);
  }
}

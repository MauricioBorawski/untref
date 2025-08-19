class StorageWrapper {
  constructor(namespace) {
    this.namespace = namespace ?? "";
  }

  parseKey(key) {
    return `${this.namespace}-${key}`;
  }

  set(key, value) {
    if (typeof key !== "string") {
      return null;
    }

    // Validaciones para el value

    localStorage.setItem(parseKey(key), value);

    return true;
  }

  get(key) {
    // Validan el tipado de la key

    return localStorage.getItem(parseKey(key));
  }

  remove(key) {
    // Validan el tipado de la key

    const result = localStorage.removeItem(parseKey(key));

    if (result === null) return null;

    return true;
  }
}

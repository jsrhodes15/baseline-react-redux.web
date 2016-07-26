/**
 * saves an item to local storage
 */
export function save(key, data) {
  return new Promise(
    (resolve) => {
      let localStorage = window.localStorage;

      if (typeof data === 'object') {
        data = JSON.stringify(data);
      }

      localStorage.setItem(key, data);

      return resolve(key);
    });
}

/**
 * loads a key from local storage
 */
export function load(key) {
  return new Promise(
    (resolve) => {
      let localStorage = window.localStorage;
      let item = localStorage.getItem(key);

      try {
        let parsed = JSON.parse(item);
        return resolve(parsed);
      }
      catch (ex) {
        return resolve(item);
      }
    });
}

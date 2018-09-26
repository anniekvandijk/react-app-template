class Api {
  static get(path) {
    return fetch(path)
      .then(response => response.json())
      .catch(error => error);
  }

  // static post(path) {
  //   return put(path)
  //     .then(response => response.json())
  //     .catch(error => error);
  // }
}

export default Api;

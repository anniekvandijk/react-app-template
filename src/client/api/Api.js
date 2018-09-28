class Api {
  static get(path) {
    const request = new Request(path, {
      method: 'GET'
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }

  static post(path, bod) {
    const body = JSON.stringify(bod);
    console.log(body);
    const request = new Request(path, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;

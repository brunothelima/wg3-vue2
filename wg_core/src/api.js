/* eslint-disable */
export default class {
  static get(url = '', data = {}) {
    url = (typeof url === 'URL') ? url : new URL(url);
    for(const key in data) {
      url.searchParams.append(key, data[key])
    }
    return  new Promise((resolve, reject) => {
      fetch(url, { method: 'GET' })
        .then(raw => raw.json())
        .then(res => resolve(res))
    })
  }
  static post(url = '', data = {}) {
    const form = new FormData();
    for(const key in data) {
      form.append(key, data[key])
    }
    return new Promise((resolve, reject) => {
      fetch(url, { method: 'POST', body: form })
        .then(raw => raw.json())
        .then(res => resolve(res));
    })
  }
}
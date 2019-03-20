
const server = 'http://localhost/wg_api';

export function GET(url = '', data = {}) {
  url = (typeof url === 'URL') ? url : new URL(server + url);
  for (const key in data) {
    url.searchParams.append(key, data[key])
  }
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then(raw => raw.json())
      .then(res => resolve(res))
  })
}
export function POST(url = '', data = {}) {
  // const form = new FormData();
  // for (const key in data) {
  //   form.append(key, data[key])
  // }
  return new Promise((resolve, reject) => {
    fetch(url, { 
      method: 'POST', 
      body: JSON.stringify(data),
    }).then(raw => raw.json())
    .then(res => resolve(res));
  })
}

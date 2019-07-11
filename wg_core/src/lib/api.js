/**
 * This function build a absolute URL object from a given endpoint  
 * 
 * @param {String} endpoint - The final url endpoint
 * 
 * @return {URL}
 */
const urlFromServer = (endpoint) => new URL(`http://localhost/widgrid/wg_api/${endpoint}`);
/**
 * Fetch data from a given endpoint via GET method,
 *  passing data properties as a query string
 * 
 * @param {String} endpoint - The server endpoint 
 * @param {Object} data - Data to passed as query string
 */
export function GET(endpoint = '', data = {}) {
  const url = urlFromServer(endpoint);
  for (const key in data) {
    url.searchParams.append(key, data[key])
  }
  return new Promise((resolve, reject) => {
    fetch(url, { method: 'GET' })
      .then(raw => raw.json())
      .then(res => resolve(res))
  })
}
/**
 * This function send data to a given endpoint via fetch POST method
 * 
 * @param {String} endpoint - The server endpoint 
 * @param {Object} data - Data to passed as query string
 */
export function POST(endpoint = '', data = {}) {
  const url = urlFromServer(endpoint);
  const body = new FormData();
  for (const input in data) {
    body.append(input, data[input]);
  }
  return new Promise((resolve, reject) => {
    fetch(url, { 
      method: 'POST', 
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data'
      },
      body: body 
    })
    .then(raw => raw.json())
    .then(res => resolve(res));
  })
}
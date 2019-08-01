import store from '@/store/index.js'

/**
 * This function build a absolute URL object from a given endpoint
 *
 * @param {String} endpoint - The final url endpoint
 *
 * @return {URL}
 */
export function urlFromServer (endpoint) {
  return new URL(`http://localhost/widgrid/api/${endpoint}`)
}
/**
 * Fetch data from a given endpoint via GET method,
 *  passing data properties as a query string
 *
 * @param {String} endpoint - The server endpoint
 * @param {Object} data - Data to passed as query string
 */
export function GET (endpoint = '', data = {}) {
  const url = urlFromServer(endpoint)
  for (const key in data) {
    url.searchParams.append(key, data[key])
  }
  return fetch(url, { method: 'GET' })
    .then(raw => raw.json())
}
/**
 * This function send data to a given endpoint via fetch POST method
 *
 * @param {String} endpoint - The server endpoint
 * @param {Object} data - Data to passed as query string
 */
export function POST (endpoint = '', data = {}) {
  const body = JSON.stringify({
    ...data,
    time: Date.now(),
    jwt: (store.getters['auth/isAuthorized'])
      ? store.getters['auth/getJWT']
      : null
  })

  return fetch(urlFromServer(endpoint), { method: 'POST', body: body })
    .then(raw => raw.json())
}

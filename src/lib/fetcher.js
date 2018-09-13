export function checkFetchResponse (response) {
  if (response.ok) return response
  return response.text().then(function (text) {
    const error = new Error(text || response.statusText)
    error.status = response.status
    error.statusText = response.statusText
    throw error
  })
}

export default function Fetcher ({ baseUrl }) {
  function fetcher (url, opts) {
    if (baseUrl) url = (baseUrl+url).replace(/([^:]\/)\/+/g, "$1")
    return fetch(url, opts).then(checkFetchResponse)
  }

  fetcher.jsonFullResponse = function fetchJsonFullResponse (url, opts) {
    opts = Object.assign({}, opts)
    opts.headers = Object.assign({
      'content-type': 'application/json',
      'accept': 'application/json'
    }, opts.headers)
    if (opts.body && typeof opts.body !== 'string') {
      try {
        opts.body = JSON.stringify(opts.body)
      } catch (e) {
        return Promise.reject(e)
      }
    }
    return fetcher(url, opts)
  }

  fetcher.json = function fetchJson (url, opts) {
    return fetcher.jsonFullResponse(url, opts).then(function (x) { return x.json() })
  }

  return fetcher
}

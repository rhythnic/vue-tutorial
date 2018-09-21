import { Fetcher } from '../lib/fetcher'

// Pixabay API docs
// https://pixabay.com/api/docs/

class PixabayApi {
  constructor ({ apiKey }) {
    this.fetch = Fetcher({ baseUrl: 'https://pixabay.com/api/' })
    this.apiKey = apiKey
  }
  getImages (page = 1, perPage = 20) {
    const url = `?key=${this.apiKey}&safesearch=true&page=${page}&per_page=${perPage}`
    // using fetch instead of fetch.json because Pixabay throws an error on the OPTIONS request
    // so to avoid adding the content-type header, we're sending the request with fetch
    return this.fetch(url).then(x => x.json())
  }
}

export default new PixabayApi({
  apiKey: process.env.PIXABAY_API_KEY
})

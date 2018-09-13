import Fetcher from '../lib/fetcher'

// Pixabay API docs
// https://pixabay.com/api/docs/

class PixabayApi {
  constructor ({ apiKey }) {
    this.fetch = Fetcher({ baseUrl: 'https://pixabay.com/api' })
    this.apiKey = apiKey
  }
  getImages (page=1, per_page=20) {
    const url = `?key=${this.apiKey}&safesearch=true&page=${page}&per_page=${per_page}`
    return this.fetch.json(url)
  }
}

export default new PixabayApi({
  apiKey: process.env.PIXABAY_API_KEY
})
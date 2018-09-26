import { Fetcher } from '../lib/fetcher'

// Pixabay API docs
// https://pixabay.com/api/docs/

class PixabayApi {
  constructor ({ apiKey }) {
    this.fetch = Fetcher({ baseUrl: 'https://pixabay.com/api/' })
    this.apiKey = apiKey
  }
  async getImages (page = 1, perPage = 20) {
    const url = `?key=${this.apiKey}&safesearch=true&page=${page}&per_page=${perPage}`
    // using fetch instead of fetch.json because Pixabay throws an error on the OPTIONS request
    // so to avoid adding the content-type header, we're sending the request with fetch
    const data = await this.fetch(url).then(x => x.json())
    if (!data || !data.hits) return data
    return { ...data, hits: data.hits.map(x => this.addCreatedAt(x)) }
  }
  addCreatedAt (data) {
    const randomInt = Math.floor(Math.random() * 100000000000)
    const randomDate = new Date(Date.now() - randomInt)
    return { ...data, createdAt: randomDate.toISOString() }
  }
}

export default new PixabayApi({
  apiKey: process.env.PIXABAY_API_KEY
})

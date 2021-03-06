import _fetch, { fetchJson } from '@/lib/fetcher'

function mockFetch(data, status = 200) {
  return jest.fn().mockImplementation(() =>
    Promise.resolve({
      status,
      ok: status >= 200 && status < 300,
      json: () => data
    })
  );
}

describe('Fetch Lib', () => {
  const responseData = { a: 1 }
  global.fetch = mockFetch(responseData)
  const BASE_URL = 'http://myapi'

  it("calls window.fetch", async () => {
    const response = await _fetch(BASE_URL)
    expect(global.fetch.mock.calls.length).toBe(1)
  })

  describe('fetch.json', () => {
    it('adds json headers', async () => {
      const response = await fetchJson(BASE_URL)
      const { headers } = global.fetch.mock.calls[1][1]
      expect(headers['content-type']).toBe('application/json')
      expect(headers['accept']).toBe('application/json')
    })

    it('stringifies json body', async () => {
      const body = { a: 1 }
      await fetchJson(BASE_URL, { body })
      const requestBody = global.fetch.mock.calls[2][1].body
      expect(requestBody).toBe(JSON.stringify(body))
    })

    it('returns response as json', async () => {
      const response = await fetchJson(BASE_URL)
      expect(response).toBe(responseData)
    })
  })
})

# Step - 2

In step 2 we add a small library of helpers for window.fetch to make it easier to use.

## Changes

- Added fetch wrapper at `/src/lib/fetcher.js`
- Added unit test for fetch wrapper at `/test/unit/specs/lib/fetcher.spec.js`

## Fetch Gotchas

1.  If the HTTP contains an error code, fetch will not reject the promise.  Fetch only
rejects a promise due to a network failure.  As a user of fetch, we generally want the
request to fail if the HTTP response doesn't have a success status (200 - 299 is success).
To accomodate for this, each fetch request is passed to `checkFetchResponse`, which constructs
and throws an error if the reponse is not ok.

2.  If you add a "content-type" header to a fetch request, the request is preceeded by an
method=OPTIONS request to see if the server supports that content-type on your intended HTTP
method. Usually this is fine, but some APIs will return an error for the OPTIONS request,
even though they allow the content-type on the GET/POST/PUT/DELETE that you intend to do.
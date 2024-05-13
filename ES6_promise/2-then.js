// This function handles the response from an API.
// It returns an object with the status and body of the response if successful,
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => console.log('Got a response from the API'));
}

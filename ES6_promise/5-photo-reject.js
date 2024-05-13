// Write and export a function named uploadPhoto. It should accept one argument fileName (string).

export default function uploadPhoto(fileName) {
  const error = new Error(`${fileName} cannot be processed`);

  return Promise.reject(error);
}

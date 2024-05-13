// In this file, import uploadPhoto and createUser from utils.js

import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const photoPromise = uploadPhoto();

  const userPromise = createUser();

  return Promise.all([photoPromise, userPromise])
    .then(([photoResp, userResp]) => {
      const { body } = photoResp;
      const { firstName, lastName } = userResp;
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}

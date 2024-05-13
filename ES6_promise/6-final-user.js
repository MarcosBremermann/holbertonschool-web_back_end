// Import signUpUser from 4-user-promise.js and uploadPhoto from 5-photo-reject.js.

import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName = '', lastName = '', fileName = '') {
  const photoPromise = uploadPhoto(fileName);
  const userPromise = signUpUser(firstName, lastName);

  return Promise.allSettled([photoPromise, userPromise]);
}

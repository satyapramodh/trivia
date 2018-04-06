import axios from 'axios';

const ROOT = 'http://localhost:3001';

// Basic Header Auth to API
const basicAuth = () => "Basic ".concat(localStorage.getItem('user-token') || "");

const req = axios.create({
  baseURL: ROOT,
  timeout: 1000,
  headers: {
    Authorization: basicAuth(),
    "Content-Type": "application/json"
  }
});

/**
* Description [User]
* @params { object } options
* @return { Object } user object
*/

export const userCreate = (options) => {
  const URL = `/api/v1/users`;
  /** options =
  * @params { String } username
  * @params { String } email
  * @params { String } password
  * @params { String } password_confirmation
  */
  console.log("api options", options);
  return req
    .post(URL, options)
    .then(function(response) {
      console.log(response);
      return response;
    })
}
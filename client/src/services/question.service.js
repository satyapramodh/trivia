import { userHeader } from "../helpers";
import axios from "axios";

export const questionService = {
  get,
  submit,
  create
};

const req = axios.create({
  // baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json"
  }
});

function get() {
  return req.get(`api/v1/trivia`, {
    headers: {
      ...userHeader()
    }
  }).then(response => {
    return response;
  });
}

function submit(q_id, a_id) {
  return req
    .post(`api/v1/trivia`, {
      q_id, a_id, headers: {
        ...userHeader()
      } })
    .then(response => {
      return response;
    });
}

function create(options) {
  options.headers = userHeader();
  return req.post(`api/v1/questions`, options).then(response => {
    return response;
  });
}

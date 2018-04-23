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
    ...userHeader(),
    "Content-Type": "application/json"
  }
});

function get() {
  return req.get(`api/v1/trivia`).then(response => {
    return response;
  });
}

function submit(q_id, a_id) {
  return req
    .post(`api/v1/trivia`, { q_id, a_id })
    .then(response => {
      return response;
    });
}

function create(options) {
  return req.post(`api/v1/questions`, options).then(response => {
    return response;
  });
}

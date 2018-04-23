let user = JSON.parse(localStorage.getItem("user"));

export default {
  questions: [],
  userQuestions: [],
  scores: [],
  user: user || {},
  alert: {}
};

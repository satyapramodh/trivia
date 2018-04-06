import * as types from '../constants/actionTypes';

export const registerUser = (options) => ({
  type: types.REGISTER_USER,
  options
});

export const registerUserSuccess = (options) => ({
  type: types.REGISTER_USER_SUCCESS,
  options
});

export const registerUserError = (error) => ({
  type: types.REGISTER_USER_ERROR,
  error
});

export const loginUser = (username, password) => ({
  type: types.LOGIN_USER,
  username,
  password
});
export const addRadioQuestion = (options) => ({
  type: types.ADD_RADIO_QUESTION,
  options
});
export const addTextQuestion = (options) => ({
  type: types.ADD_TEXT_QUESTION,
  options
});
export const getQuestions = () => ({
  type: types.GET_QUESTIONS
});
export const nextQuestion = (i) => ({
  type: types.NEXT_QUESTION,
  i
});
export const solveQuestion = (options) => ({
  type: types.SOLVE_QUESTION,
  options
});

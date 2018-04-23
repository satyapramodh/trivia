import { takeLatest, all } from "redux-saga/effects";
import { registerUserSaga, loginUserSaga, logoutUserSaga } from "./authentication.saga";
import { getQuestionsSaga, submitTriviaSaga, createQuestionSaga } from "./question.saga";
import * as types from "../constants";

// Watches for action types asynchronously
export function* watchQuestions() {
  console.log("watchQuestions");

  yield all([
    takeLatest(types.questionConstants.REQUEST, getQuestionsSaga),
    takeLatest(types.questionConstants.SUBMIT, submitTriviaSaga),
    takeLatest(types.questionConstants.CREATE, createQuestionSaga),
  ])
}

export function* watchUsers() {
  yield all([
    takeLatest(types.questionConstants.REQUEST, getQuestionsSaga),
    takeLatest(types.questionConstants.SUBMIT, submitTriviaSaga),
    takeLatest(types.questionConstants.CREATE, createQuestionSaga),

    takeLatest(types.userConstants.REGISTER_REQUEST, registerUserSaga),
    takeLatest(types.userConstants.LOGIN_REQUEST, loginUserSaga),
    takeLatest(types.userConstants.LOGOUT, logoutUserSaga)
  ])
}

export function* watchUserLogout() {
  yield takeLatest(types.userConstants.LOGOUT, logoutUserSaga);
}

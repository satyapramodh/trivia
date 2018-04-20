import { takeLatest } from "redux-saga/effects";
import { registerUserSaga, loginUserSaga } from "./authentication.saga";
import * as types from "../constants";

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export function* watchUserRegister() {
  yield takeLatest(types.userConstants.REGISTER_REQUEST, registerUserSaga);
}

export function* watchUserLogin() {
  yield takeLatest(types.userConstants.LOGIN_REQUEST, loginUserSaga);
}

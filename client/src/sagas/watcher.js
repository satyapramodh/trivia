import { takeLatest } from "redux-saga/effects";
import { registerUserSaga } from "./userSaga";
import * as types from "../constants/actionTypes";

// Watches for REGISTER_USER action type asynchronously
export function* watchRegisterUser() {
  yield takeLatest(types.REGISTER_USER, registerUserSaga);
}

export function* watchRegisterUserError() {
  yield takeLatest(types.REGISTER_USER_SUCCESS, registerUserSaga);
}

export function* watchRegisterUserSuccess() {
  yield takeLatest(types.REGISTER_USER_ERROR, registerUserSaga);
}

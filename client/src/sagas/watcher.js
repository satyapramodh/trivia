import { takeLatest, all } from "redux-saga/effects";
import { registerUserSaga, loginUserSaga, logoutUserSaga } from "./authentication.saga";
import * as types from "../constants";

// Watches for SEARCH_MEDIA_REQUEST action type asynchronously
export function* watchUserRegister() {
  yield takeLatest(types.userConstants.REGISTER_REQUEST, registerUserSaga);
}

export function* watchUserLogin() {
  yield all([
    takeLatest(types.userConstants.REGISTER_REQUEST, registerUserSaga),
    takeLatest(types.userConstants.LOGIN_REQUEST, loginUserSaga),
    takeLatest(types.userConstants.LOGOUT, logoutUserSaga)
  ])
}

export function* watchUserLogout() {
  yield takeLatest(types.userConstants.LOGOUT, logoutUserSaga);
}

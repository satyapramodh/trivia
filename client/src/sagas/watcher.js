import { takeLatest } from "redux-saga/effects";
import { registerUserSaga } from "./userSaga";
import * as types from "../constants/actionTypes";

// Watches for REGISTER_USER action type asynchronously
export default function* watchRegisterUser() {
  yield takeLatest(types.REGISTER_USER, registerUserSaga);
}

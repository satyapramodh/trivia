import { put, call } from "redux-saga/effects";
import { userCreate } from "../api/api";
import * as types from "../constants/actionTypes";

// Responsible for user, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* registerUserSaga({ options }) {
  try {
    const response = yield call(userCreate, options);
    console.log("registerUsersaga options", options)
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response }),
    ];
  } catch (error) {
    console.log("registerUser saga error", error)
    yield put({ type: types.REGISTER_USER_ERROR, error });
  }
}

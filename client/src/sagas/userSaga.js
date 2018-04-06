import { put, call } from "redux-saga/effects";
import { userCreate } from "../Api/api";
import * as types from "../constants/actionTypes";

// Responsible for user, making calls to the API
// and instructing the redux-saga middle ware on the next line of action,
// for success or failure operation.
export function* registerUserSaga({ options }) {
  try {
    const response = yield call(userCreate, options);
    yield [
      put({ type: types.REGISTER_USER_SUCCESS, response }),
    ];
  } catch (error) {
    yield put({ type: "REGISTER_USER_ERROR", error });
  }
}

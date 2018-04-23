import { push } from "react-router-redux";
import { put, call } from "redux-saga/effects";

import { authService } from "../services/auth.service";
import * as types from "../constants";
import formatHelper from "../helpers/formatAlerts";

export function* registerUserSaga({user}) {
  try{
    const response = yield call(authService.register, user);
    yield [
      put({ type: types.alertConstants.SUCCESS, message: response.data.username + ' created' }),
      put(push("/login"))
    ];
  } catch (error){
    yield put({ type: types.alertConstants.ERROR, message: formatHelper.error(error) });
  }
}

export function* loginUserSaga({username, password}) {
  try{
    const response = yield call(authService.login, username, password);
    localStorage.setItem("user", JSON.stringify(response.data));
    yield put({ type: types.userConstants.LOGIN_SUCCESS, response });
    yield put(push("/"));
  } catch (error){
    yield put({ type: types.alertConstants.ERROR, message: formatHelper.error(error) });
  }
}

export function* logoutUserSaga() {
  try {
    const response = yield call(authService.logout);
    localStorage.clear();
    yield put({ type: types.alertConstants.SUCCESS, message: "Logged out!" });
    yield put(push("/"));
  } catch (error) {
    localStorage.clear();
    yield put({ type: types.alertConstants.ERROR, message: formatHelper.error(error) });
    yield put(push("/"));
  }
}

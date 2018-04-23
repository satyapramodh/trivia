import { push } from "react-router-redux";
import { put, call } from "redux-saga/effects";

import { authService } from "../services/auth.service";
import * as types from "../constants";

export function* registerUserSaga({user}) {
  try{
    console.log("register user saga", user);

    const response = yield call(authService.register, user);
    console.log("register user saga success", response);

    yield [
      put({ type: types.userConstants.REGISTER_SUCCESS, response }),
      put(push("/login"))
    ];
  } catch (error){
    console.log("register user saga fail", error);
    yield put({ type: types.userConstants.REGISTER_FAILURE, error });
  }
}

export function* loginUserSaga({username, password}) {
  try{
    console.log("login user saga", username, password);

    const response = yield call(authService.login, username, password);
    console.log("login user saga success", response);
    localStorage.setItem("user", JSON.stringify(response.data));
    yield put({ type: types.userConstants.LOGIN_SUCCESS, response });

    console.log("login user saga go to /", response);
    yield put(push("/"));
  } catch (error){
    console.log("login user saga fail", types.userConstants.LOGIN_FAILURE, error);
    yield put({ type: types.userConstants.LOGIN_FAILURE, error });
  }
}

export function* logoutUserSaga() {
  try {
    console.log("logout user saga");

    const response = yield call(authService.logout);
    console.log("logout user saga success", response);
    localStorage.clear();
    // yield put({ type: types.userConstants.LOGOUT, response });
    yield put(push("/"));
  } catch (error) {
    console.log("logout user saga fail", error);
    localStorage.clear();
    // yield put({type: types.userConstants.LOGOUT, error});
    yield put(push("/"));
  }
}

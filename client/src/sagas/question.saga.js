import { push } from "react-router-redux";
import { put, call } from "redux-saga/effects";

import { questionService } from "../services/question.service";
import * as types from "../constants";
import formatAlerts from "../helpers/formatAlerts";

export function* getQuestionsSaga() {
  try {
    const response = yield call(questionService.get);
    console.log("response", response);

    yield [
      put({
        type: types.questionConstants.GET,
        response
      })
    ];
  } catch (error) {
    yield put({
      type: types.alertConstants.ERROR,
      message: formatAlerts.error(error)
    });
  }
}

export function* submitTriviaSaga({ q_id, a_id }) {
  try {
    const response = yield call(questionService.submit, q_id, a_id);
    yield [
      put({ type: types.alertConstants.SUCCESS, response }),
      put({ type: types.questionConstants.QUESTION_GET_RESULT, response })
    ];
  } catch (error) {
    yield put({
      type: types.alertConstants.ERROR,
      message: formatAlerts.error(error)
    });
  }
}

export function* createQuestionSaga(options) {
  try {
    const response = yield call(questionService.create, options);
    yield put({ type: types.alertConstants.SUCCESS, message: formatAlerts.success(response) });
  } catch (error) {
    yield put({
      type: types.alertConstants.ERROR,
      message: formatAlerts.error(error)
    });
    yield put(push("/"));
  }
}

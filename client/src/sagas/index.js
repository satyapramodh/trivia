import { fork } from "redux-saga/effects";
import { watchQuestions, watchUsers } from "./watcher";

// Here, we register our watcher saga(s) and export as a single generator
// function (startForeman) as our root Saga.
export default function* startForman() {
  yield fork([watchQuestions, watchUsers]);
}

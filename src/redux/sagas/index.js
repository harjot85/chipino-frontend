import { spawn, all } from "redux-saga/effects";
import rootTextSaga from "./rootTextSaga";
import rootSocialMediaSaga from "./rootsocialMediaSaga";

export default function* rootSaga() {
  yield all([spawn(rootTextSaga), spawn(rootSocialMediaSaga)]);
}

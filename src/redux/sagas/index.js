import { spawn, all } from "redux-saga/effects";
import rootTextSaga from "./rootTextSaga";
import rootSocialMediaSaga from "./rootsocialMediaSaga";
import rootMediaSaga from "./rootMediaSaga";
import rootGithubSaga from "./rootGithubSaga";

export default function* rootSaga() {
  yield all([spawn(rootTextSaga), spawn(rootSocialMediaSaga), spawn(rootGithubSaga), spawn(rootMediaSaga)]);
}

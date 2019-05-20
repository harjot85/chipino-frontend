import { put, spawn, all, takeLatest } from "redux-saga/effects";
import * as socialMediaAPI from "../../api/socialMedia/socialMedia";
import * as actionType from "../actionTypes";

function* getAllSocialMediaIcons() {
  try {
      const response = yield socialMediaAPI.getSocialMediaIcons();
      yield put ({
          type: actionType.GET_SOCIAL_MEDIA_SUCCESS,
          payload: {
              socialMedia: response.data
          }
      })
  } catch(error) {
    yield put({
        type: actionType.GET_SOCIAL_MEDIA_ERROR,
        payload: {
            error
        }
    })
  }
}

function* watchgetAllSocialMediaIcons() {
    yield takeLatest(actionType.GET_SOCIAL_MEDIA, getAllSocialMediaIcons)
}

export default function* rootSocialMediaSaga() {
  yield all([spawn(watchgetAllSocialMediaIcons)]);
}


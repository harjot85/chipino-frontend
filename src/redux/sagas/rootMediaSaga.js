import {put, spawn, takeLatest, all} from "redux-saga/effects"
import * as mediaAPI from "../../api/media/media"
import * as actionType from "../actionTypes"

export function* getAllImages(){
    
    try {
        const response = yield mediaAPI.getImages()
        yield put({
          type: actionType.GET_ALL_IMAGES_SUCCESS,
          payload: {
              images: response.data
          }  
        })
    }
    catch (error){
        yield put({
            type: actionType.GET_ALL_IMAGES_ERROR,
            payload: {
                error
            }
        })
    }
}

function* watchgetAllImages(){
    yield takeLatest(actionType.GET_ALL_IMAGES, getAllImages)
}

export default function* rootMediaSaga(){
    yield all([spawn(watchgetAllImages)])
}
import {put, spawn, takeLatest, all} from "redux-saga/effects"
import * as carouselAPI from "../../api/carousel/carousel"
import * as actionType from "../actionTypes"

export function* getCarousel(){
    
    try {
        const response = yield carouselAPI.getCarousel()
        yield put({
          type: actionType.GET_CAROUSEL_SUCCESS,
          payload: {
              carousel: response.data
          }  
        })
    }
    catch (error){
        yield put({
            type: actionType.GET_CAROUSEL_ERROR,
            payload: {
                error
            }
        })
    }
}

function* watchgetCarousel(){
    yield takeLatest(actionType.GET_CAROUSEL, getCarousel)
}

export default function* rootCarouselSaga(){
    yield all([spawn(watchgetCarousel)])
}
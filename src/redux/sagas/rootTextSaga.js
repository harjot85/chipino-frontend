import {put, takeLatest, spawn, all} from 'redux-saga/effects';
import * as textApi from '../../api/text/index';
import * as action from '../actionTypes';

function* getSocialMediaIconLinks(){
    try{
        const response = yield textApi.getSocialMediaContent()
        yield put ({
            type: action.GET_SOCIALMEDIACLASSES_FULFILLED,
            payload:{
                data: response.data
            }
        })
    }
    catch(error){
        yield put ({
            type: action.GET_SOCIALMEDIACLASSES_ERROR,
            payload: {
                error,
            }
        })
    }
}

function* watchgetSocialMediaIconLinks(){
    yield takeLatest(action.GET_SOCIALMEDIACLASSES_FULFILLED, getSocialMediaIconLinks)
}

export default function* rootTextSaga(){
    yield all([
        spawn(watchgetSocialMediaIconLinks)
    ])
}
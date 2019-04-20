import {put, takeLatest, spawn, all} from 'redux-saga/effects';
import * as textApi from '../../api/text/index';
import * as action from '../actionTypes';

function* getSocialMedia(){
    try{
        const response = yield textApi.getSocialMediaContent()
        yield put ({
            type: action.GET_SOCIALMEDIA_SUCCESS,
            payload:{
                socialMedia: response.data
            }
        })
    }
    catch(error){
        yield put ({
            type: action.GET_SOCIALMEDIA_ERROR,
            payload: {
                error,
            }
        })
    }
}

function* watchgetSocialMedia(){
    yield takeLatest(action.GET_SOCIALMEDIA, getSocialMedia);
}

export default function* rootTextSaga(){
    yield all([
        spawn(watchgetSocialMedia)
    ])
}
import {put, takeLatest, spawn, all} from 'redux-saga/effects';
import * as textApi from '../../api/text/index';
import * as action from '../actionTypes';

function* getAllText(){
    try{
        const response = yield textApi.getAllTextContent()
        yield put ({
            type: action.GET_ALL_TEXT_SUCCESS,
            payload:{
                allText: response.data
            }
        })
    }
    catch(error){
        yield put ({
            type: action.GET_ALL_TEXT_ERROR,
            payload: {
                error,
            }
        })
    }
}

function* watchgetAllText(){
    yield takeLatest(action.GET_ALL_TEXT, getAllText);
}

export default function* rootTextSaga(){
    yield all([
        spawn(watchgetAllText)
    ])
}
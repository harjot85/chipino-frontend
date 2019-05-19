import {put, takeLatest, spawn, all} from 'redux-saga/effects';
import * as textApi from '../../api/text/text';
import * as actionType from '../actionTypes';

function* getAllText(){
    try{
        const response = yield textApi.getAllTextContent()
        yield put ({
            type: actionType.GET_ALL_TEXT_SUCCESS,
            payload:{
                allText: response.data
            }
        })
    }
    catch(error){
        yield put ({
            type: actionType.GET_ALL_TEXT_ERROR,
            payload: {
                error,
            }
        })
    }
}

function* watchgetAllText(){
    yield takeLatest(actionType.GET_ALL_TEXT, getAllText);
}

export default function* rootTextSaga(){
    yield all([
        spawn(watchgetAllText)
    ])
}
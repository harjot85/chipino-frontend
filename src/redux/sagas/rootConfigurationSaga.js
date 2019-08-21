import {put, takeLatest, spawn, all} from 'redux-saga/effects';
import * as textApi from '../../api/configuration/configuration';
import * as actionType from '../actionTypes';

function* getConfiguration(){
    try{
        const response = yield textApi.getConfiguration()
        yield put ({
            type: actionType.GET_CONFIGURATION_SUCCESS,
            payload:{
                configuration: response.data
            }
        })
    }
    catch(error){
        yield put ({
            type: actionType.GET_CONFIGURATION_ERROR,
            payload: {
                error,
            }
        })
    }
}

function* watchgetConfiguration(){
    yield takeLatest(actionType.GET_CONFIGURATION, getConfiguration);
}

export default function* rootConfigurationSaga(){
    yield all([
        spawn(watchgetConfiguration)
    ])
}
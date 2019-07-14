import {put, spawn, takeLatest, all} from "redux-saga/effects"
import * as navbarAPI from "../../api/navbar/navbar"
import * as actionType from "../actionTypes"

export function* getNavbar(){
    
    try {
        const response = yield navbarAPI.getNavbarItems()
        yield put({
          type: actionType.GET_NAVBAR_SUCCESS,
          payload: {
              navbar: response.data
          }  
        })
    }
    catch (error){
        yield put({
            type: actionType.GET_NAVBAR_ERROR,
            payload: {
                error
            }
        })
    }
}

function* watchgetNavbar(){
    yield takeLatest(actionType.GET_NAVBAR, getNavbar)
}

export default function* rootNavbarSaga(){
    yield all([spawn(watchgetNavbar)])
}
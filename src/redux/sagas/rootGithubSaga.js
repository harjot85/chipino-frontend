import {put, spawn, takeLatest, all} from "redux-saga/effects"
import * as githubAPI from "../../api/github/github"
import * as actionType from "../actionTypes"

export function* getAllRepos(){
    
    try {
        const response = yield githubAPI.getRepos()
        yield put({
          type: actionType.GET_GITHUB_REPOS_SUCCESS,
          payload: {
              repos: response.data
          }  
        })
    }
    catch (error){
        yield put({
            type: actionType.GET_GITHUB_REPOS_ERROR,
            payload: {
                error
            }
        })
    }
}

export function* getFilteredRepos(action){
    try {
        const response = yield githubAPI.getFilteredRepos(action.val)
        yield put({
          type: actionType.GET_FILTERED_REPOS_SUCCESS,
          payload: {
              repos: response.data
          }
        })
    }
    catch (error){
        yield put({
            type: actionType.GET_FILTERED_REPOS_ERROR,
            payload: {
                error
            }
        })
    }
}

function* watchgetAllRepos(){
    yield takeLatest(actionType.GET_GITHUB_REPOS, getAllRepos);
    yield takeLatest(actionType.GET_FILTERED_REPOS, getFilteredRepos);
}

export default function* rootGithubSaga(){
    yield all([spawn(watchgetAllRepos)])
}

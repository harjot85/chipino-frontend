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

function* watchgetAllRepos(){
    yield takeLatest(actionType.GET_GITHUB_REPOS, getAllRepos)
}

export default function* rootGithubSaga(){
    yield all([spawn(watchgetAllRepos)])
}

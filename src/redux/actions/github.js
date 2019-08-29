import * as actionType from '../actionTypes'

export function getAllPublicRepos(){
    return {
        type: actionType.GET_GITHUB_REPOS
    }
}

export function getFilteredRepos(){
    return {
        type: actionType.GET_FILTERED_REPOS
    }
}
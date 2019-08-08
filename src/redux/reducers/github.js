import * as actionType from "../actionTypes";

export const githubReducer = (state = { repos: [] }, action) => {
  switch (action.type) {
    case actionType.GET_GITHUB_REPOS_SUCCESS:
      state = {
        ...state,
        repos: action.payload.repos,
      };

      break;
    case actionType.GET_FILTERED_REPOS_SUCCESS:
      state = {
        ...state,
        repos: action.payload.repos,
      };

      break;

    default: {
      break;
    }
  }
  return state;
};

export default githubReducer;
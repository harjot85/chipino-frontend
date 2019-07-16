import * as actionType from "../actionTypes";

export const navbarReducer = (
  state = { navbar: [] },
  action
) => {
  switch (action.type) {
    case actionType.GET_NAVBAR_SUCCESS: {
      state = {
        ...state,
        navbar: action.payload.navbar
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
};

export default navbarReducer;

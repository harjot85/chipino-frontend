import * as actionType from "../actionTypes";

export const carouselReducer = (
  state = { carousel: [] },
  action
) => {
  switch (action.type) {
    case actionType.GET_CAROUSEL_SUCCESS: {
      state = {
        ...state,
        carousel: action.payload.carousel
      };
      break;
    }
    default: {
      break;
    }
  }

  return state;
};

export default carouselReducer;

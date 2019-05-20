import * as actionType from "../actionTypes";

export const mediaReducer = (state = { images: [] }, action) => {
  switch (action.type) {
    case actionType.GET_ALL_IMAGES_SUCCESS:
      state = {
        ...state,
        images: action.payload.images
      };

      break;

    default: {
      break;
    }
  }
  return state;
};

export default mediaReducer;

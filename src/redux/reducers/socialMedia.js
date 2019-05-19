import * as actionType from "../actionTypes";

export const socialMediaReducer = (
  state = { socialMediaIcons: [] },
  action
) => {
  switch (action.type) {
    case actionType.GET_SOCIAL_MEDIA_SUCCESS: {
      state = {
        ...state,
        socialMediaIcons: action.payload.socialMedia
      };

      break;
    }

    default: {
      break;
    }
  }

  return state;
};

export default socialMediaReducer;

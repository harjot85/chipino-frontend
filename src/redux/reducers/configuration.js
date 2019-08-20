import * as actionType from "../actionTypes";

export const configReducer = (
  state = {
    configuration: []
  },
  action
) => {
  switch (action.type) {
    case actionType.GET_CONFIGURATION_SUCCESS: {
      state = {
        ...state,
        configuration: action.payload.configuration
      };
      break;
    }

    default: {
      break;
    }
  }
  return state;
};

export default configReducer;

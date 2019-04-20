import * as actionType from '../actionTypes';

export const textReducer = (state = {
    socialMedia: false,
}, action) => {
    switch (action.type){
        case actionType.GET_SOCIALMEDIA_SUCCESS:{
            state = {
                ...state, 
                socialMedia: action.payload
            };
            break;
        }

        default: {
            break;
        }
    }
    return state;
};

export default textReducer;
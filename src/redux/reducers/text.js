import * as actionType from '../actionTypes';

export const textReducer = (state = {
    smLinkFB: "",
}, action) => {
    switch (action.type){
        case actionType.GET_SOCIALMEDIACLASSES_SUCCESS:{
            state = {
                ...state, 
                smLinkFB: ""
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
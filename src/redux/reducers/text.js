import * as actionType from '../actionTypes';

export const textReducer = (state = {
    allText: false,
}, action) => {
    switch (action.type){
        case actionType.GET_ALL_TEXT_SUCCESS:{
            state = {
                ...state, 
                allText: action.payload.allText
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
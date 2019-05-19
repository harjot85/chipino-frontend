import {combineReducers} from 'redux';
import { textReducer } from './text'
import socialMediaReducer from './socialMedia';

export const Reducers = combineReducers({
    text: textReducer,
    socialMedia: socialMediaReducer,
});
import {combineReducers} from 'redux';
import { textReducer } from './text'
import socialMediaReducer from './socialMedia';
import mediaReducer from './media'


export const Reducers = combineReducers({
    text: textReducer,
    socialMedia: socialMediaReducer,
    media: mediaReducer,
});
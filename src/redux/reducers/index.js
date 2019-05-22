import {combineReducers} from 'redux';
import { textReducer } from './text'
import socialMediaReducer from './socialMedia';
import mediaReducer from './media';
import { githubReducer } from './github';


export const Reducers = combineReducers({
    text: textReducer,
    socialMedia: socialMediaReducer,
    media: mediaReducer,
    github: githubReducer,
});
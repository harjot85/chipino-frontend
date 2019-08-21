import {combineReducers} from 'redux';
import { textReducer } from './text'
import socialMediaReducer from './socialMedia';
import mediaReducer from './media';
import carouselReducer from './carousel'
import { githubReducer } from './github';
import navbarReducer from './navbar';
import {configReducer} from './configuration';


export const Reducers = combineReducers({
    text: textReducer,
    socialMedia: socialMediaReducer,
    media: mediaReducer,
    github: githubReducer,
    carousel: carouselReducer,
    navbar: navbarReducer,
    configuration: configReducer
});
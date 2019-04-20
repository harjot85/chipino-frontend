import {combineReducers} from 'redux';
import { textReducer } from './text'

export const Reducers = combineReducers({
    text: textReducer,
});
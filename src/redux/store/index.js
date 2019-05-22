import { applyMiddleware, createStore } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { Reducers } from "../../redux/reducers";
import rootSaga from "../sagas/index";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;
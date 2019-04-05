import {spawn , all} from 'redux-saga/effects';
import rootTextSaga from './rootTextSaga';

export default function* rootSaga() {
    yield all([spawn(rootTextSaga),

    ])
}
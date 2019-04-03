import {spawen , all} from 'redux-saga/effects';
import rootTextSaga from './rootTextSaga';
import { spawn } from 'child_process';

export default function* rootSaga() {
    yield all([spawn(rootTextSaga),

    ])
}
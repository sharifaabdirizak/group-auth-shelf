import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fnName() {
  try {

  } catch (error) {
    console.log('', error);
  }
}

function* userSaga() {
  yield takeLatest('', fnName);
}

export default userSaga;

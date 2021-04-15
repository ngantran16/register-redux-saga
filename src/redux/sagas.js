import { all } from 'redux-saga/effects';
import registerSagas from './RegisterRedux/sagas';

export default function* root() {
  yield all([
    registerSagas(),
  ]);
}


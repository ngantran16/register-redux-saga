
import { put, call, takeLatest } from 'redux-saga/effects';
import RegisterActions, { RegisterTypes } from './actions';
import { otpPhoneNumber } from '../../api/otp';

export function* registerSaga({ data }) {
  console.log('Hellos');
  try {
    console.log("f");
    const response = yield call(otpPhoneNumber, data);
    console.log(response);
    const newResponse = {
      data: response.data,
    };
    yield put(RegisterActions.userRegisterSuccess(newResponse));
  } catch (error) {
    console.log(error);
    yield put(RegisterActions.userRegisterFailure(error.data.message));
  }
}

const registerSagas = () => takeLatest(RegisterTypes.USER_REGISTER, registerSaga);

export default registerSagas;


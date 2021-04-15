/* eslint-disable import/no-anonymous-default-export */
import { makeActionCreator, makeConstantCreator } from '../../utils/ReduxUtils';

export const RegisterTypes = makeConstantCreator(
  'USER_REGISTER',
  'USER_REGISTER_SUCCESS',
  'USER_REGISTER_FAILURE',
);
const userRegister = (data) => makeActionCreator(RegisterTypes.USER_REGISTER, { data });
const userRegisterSuccess = (response) =>
  makeActionCreator(RegisterTypes.USER_REGISTER_SUCCESS, { response });
const userRegisterFailure = (error) => makeActionCreator(RegisterTypes.USER_REGISTER_FAILURE, { error });

export default {
    userRegister,
    userRegisterSuccess,
    userRegisterFailure,
};

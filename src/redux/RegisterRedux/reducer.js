import Immutable from 'seamless-immutable';
import { makeReducerCreator } from '../../utils/ReduxUtils';
import { RegisterTypes } from './actions';

export const INITIAL_STATE = Immutable({
  loading: false,
  response: null,
  error: null,
});

export const userRegister = (state, { response }) =>
  state.merge({
    loading: true,
    error: null,
  });

export const userRegisterSuccess = (state, { response }) =>
  state.merge({
    loading: false,
    response: response.data,
    error: null,
  });
export const userRegisterFailure = (state, { error }) =>
  state.merge({ loading: false, error: error });
  
const reducer = makeReducerCreator(INITIAL_STATE, {
  [RegisterTypes.USER_REGISTER]: userRegister,
  [RegisterTypes.USER_REGISTER_SUCCESS]: userRegisterSuccess,
  [RegisterTypes.USER_REGISTER_FAILURE]: userRegisterFailure,
});

export default reducer;

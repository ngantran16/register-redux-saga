import React from 'react';
import '../../containers/Register/Register.css';
import Images from '../../themes/Images';
import { useFormik } from 'formik';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import RegisterTypes from '../../redux/RegisterRedux/actions';

import {
    validationRules,
    validateValuesByRule
  } from '../../utils/validation';
  

const RegisterForm = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          phone: '',
        },
        validate: (values) => {
          return validateValuesByRule({
            phone: validationRules.phoneNumber
          })(values);
        },
        onSubmit: (values, actions) => {
          console.log(values);
          dispatch(RegisterTypes.userRegister(values));
          //console.log("hi");
          // setTimeout(() => {
          //   actions.setSubmitting(false);
          //   alert(JSON.stringify(values, null, 2));
          // }, 400);
        }
      });

    return (
        <form
            onSubmit={formik.handleSubmit}>
            <div className={classNames({
                'form-group': true,
                'has-error': formik.touched.phone && formik.errors.phone
                })}>
                <div className ="phone-input">
                    <label className="label-input">+84 </label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        className="form-control"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        placeholder="Enter your mobile number" />
                    {formik.touched.phone && formik.errors.phone && (
                    <span className="help-block">
                    {formik.errors.phone}
                    </span>
                    )}
                </div>
            </div>
            <div>
            <p>
                <label className="checkbox-inline">
                    <input type="checkbox" />&nbsp;
                    Agree Terms and Conditions
                </label>
            </p>
            </div>

            <div className="submit-button">
                <button 
                    type="submit"
                    // disabled={!formik.isValid || formik.isSubmitting}
                    className="radius-button"
                >
                    <img src={Images.arrow} alt="arrow-img" />
                </button>
            </div>
        </form>

    );
}

export default RegisterForm;
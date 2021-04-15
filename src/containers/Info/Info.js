import React from 'react';
import './Info.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Images from '../../themes/Images';
import { useFormik } from 'formik';
import classNames from 'classnames';

import {
  validationRules,
  validateValuesByRule
} from '../../utils/validation';

const Info = () => {
    const formik = useFormik({
        initialValues: {
          name: '',
        },
        validate: (values) => {
          return validateValuesByRule({
            name: validationRules.required
          })(values);
        },
        onSubmit: (values, actions) => {
          setTimeout(() => {
            actions.setSubmitting(false);
            alert(JSON.stringify(values, null, 2));
          }, 400);
        }
      });

    return (
        <div>
            <Header />
            <div className="register-page">
                <div className="register-session">
                    <div>
                        <h3 className="title-form">Enter your Info</h3>
                    </div>
                    <form
                        method="post"
                        onSubmit={formik.handleSubmit}>
                        <div className={classNames({
                            'form-group': true,
                            'has-error': formik.touched.name && formik.errors.name
                            })}>
                                <div className ="phone-input">
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        onBlur={formik.handleBlur}
                                        onChange={formik.handleChange}
                                        placeholder="Enter your full name" />
                                    {formik.touched.name && formik.errors.name && (
                                    <span className="help-block">
                                    {formik.errors.name}
                                    </span>
                                    )}
                                </div>
                        </div>
                        <div>
                            <p className="text-gender">Select gender</p>
                            <div>
                                <img src={Images.female} className="img-female" alt="" />
                                <img src={Images.male} className="img-female" alt="" />
                            </div>
                            
                            <div className="upload-session">
                                <img src={Images.upload} className="img-female" alt="" />
                                <div className="text-upload">
                                    <p>Upload profile picture</p>
                                </div>
                            </div>
                        </div>

                        <div className="submit-button">
                            <button 
                                type="submit"
                                disabled={!formik.isValid || formik.isSubmitting}
                                className="radius-button"
                            >
                                <img src={Images.arrow} alt="arrow-img" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Info;
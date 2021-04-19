import React, { useState } from 'react';
import '../../containers/Register/Register.css';
import Images from '../../themes/Images';
import { useSelector } from 'react-redux';

const ConfirmForm = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');

    const response = useSelector((state) => state.register.response);
    response && console.log(response.otp);

    const onSubmitOtp = () => {
        const otp = num1 + num2 + num3 + num4;
        if (response && (response.otp === otp)) {
            alert('Register successfull!');
        } else {
            alert('The OTP not match!');
        }
    }

    return (
        <form>
                <div className ="otp-input">
                    <input onChange={(event) => setNum1(event.target.value)} className="input-item" />
                    <input onChange={(event) => setNum2(event.target.value)} className="input-item"/>
                    <input onChange={(event) => setNum3(event.target.value)} className="input-item"/>
                    <input onChange={(event) => setNum4(event.target.value)} className="input-item"/>
                    
                </div>

            <div className="confirm-button">
                <div>
                    <a href="reactjs.org" className="request-link">I didn't receive code</a>
                </div>
                <button onClick = {onSubmitOtp} className="radius-button">
                    <img src={Images.arrow} alt="arrow-img" />
                </button>
            </div>
        </form>
    );
}

export default ConfirmForm;
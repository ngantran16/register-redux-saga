import React, { useState } from 'react';
import '../../containers/Register/Register.css';
import Images from '../../themes/Images';

const ConfirmForm = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [num4, setNum4] = useState('');

    return (
        <form method="post">
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
                <button type="submit" className="radius-button">
                    <img src={Images.arrow} alt="arrow-img" />
                </button>
            </div>
        </form>
    );
}

export default ConfirmForm;
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';
import './ThirdStep.css';

export const ThirdStep = (): JSX.Element => {
    const [otp, handleChangeOtp] = useState('');
    const [timer, setTimer] = useState(15)
    const [activateTimer, setActivateTimer] = useState(false);
    useEffect(() => {        
        if (activateTimer) {
            const interval = setInterval(() => {
                setTimer(timer - 1);
            },
            1000);
            if (timer <= 0) {
                setActivateTimer(false);
            }
            return () => clearInterval(interval);
        }
        return () => {};
    }, [timer, activateTimer]);

    const resetCode = () => {
        setTimer(15);
        setActivateTimer(true);
    }

    return (
        <div className='otp-container'>
            <h3>Verification code</h3>
                <OtpInput value={otp}
                    onChange={handleChangeOtp}
                    numInputs={4}
                    separator={<span>-</span>}
                    inputStyle='input-field'
                />
            <small className='otp-description'>A verification code has been sent to your mobile device</small>
            <Button className='send-again-button'
                variant="outlined"
                disabled={timer > 0}
                onClick={resetCode}>
              Send again
            </Button>
            { timer > 0 && <small>You can send new one after {timer} seconds</small>}
            <input type="file" name="" id="" />
        </div>
    );
}
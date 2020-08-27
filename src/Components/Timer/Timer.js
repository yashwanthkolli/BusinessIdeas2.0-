import React from 'react';

import Countdown from 'react-countdown';

import './Timer.Styles.css'
import { Redirect } from 'react-router-dom';

const Timer = ({time, currentPath}) => {
    console.log(currentPath)
    return(
        <Countdown date={Date.now() + time*1000}>
        {
            currentPath !== 'round1' ? <Redirect to='/round1/score' /> : console.log(currentPath)
        }
        </Countdown>
    )
}


export default Timer;
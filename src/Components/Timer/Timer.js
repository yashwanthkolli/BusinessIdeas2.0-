import React, { Component } from 'react';

import Countdown from 'react-countdown';

import './Timer.Styles.css'
import { Redirect } from 'react-router-dom';

class Timer extends Component {
    render() {
        if (sessionStorage.round === 'round1') {
            const date = Date.parse(new Date("2020-09-24 20:00:00"))
            return (
                <Countdown Countdown date={date} >
                    {
                        <Redirect to='/round1/score' />
                    }
                </Countdown>
            )
        }

        if (sessionStorage.round === 'round2') {
            const date = Date.parse(new Date("2020-09-24 20:30:00"))
            return (
                <Countdown Countdown date={date} >
                    {
                        <Redirect to='/crisis/production/1' />
                    }
                </Countdown>
            )
        }

        if (sessionStorage.round === 'round3') {
            const date = Date.parse(new Date("2020-09-24 20:40:00"))
            return (
                <Countdown Countdown date={date} >
                    {
                        <Redirect to='/round3/score' />
                    }
                </Countdown>
            )
        }
        else {
            return (null)
        }
    }
}


export default Timer;
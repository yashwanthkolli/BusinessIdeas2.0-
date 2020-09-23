import React, { Component } from 'react';

import './NavBar.Styles.css';
import Timer from '../Timer/Timer';

class NavBar extends Component {
    render() {
        return (
            <div className='navbar'>
                <button onClick={() => window.location = '/'} className='logout-btn'>LogOut</button>
                <div className='timer'>
                    <Timer />
                </div>
            </div>
        )
    }
}

export default NavBar
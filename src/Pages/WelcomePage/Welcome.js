import Axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import url from '../../Components/Url/Url';

import './Welcome.Styles.css'

export default class Welcome extends Component {
    constructor() {
        super();
        this.state = {
            control: 0
        }
    }

    componentDidMount() {
        if (sessionStorage.round) {
            sessionStorage.clear()
            window.location.reload(false)
        }
        Axios.get(url + 'admin/control')
            .then(response => {
                this.setState({ control: response.data[0].round1 });
            })
        if (this.state.control === "0") {
            toast.error("Round 1 is yet to start", { className: 'round2-toast', position: toast.POSITION.TOP_CENTER })
        }
        window.history.pushState(null, null, '/')
    }

    createSquare = () => {
        const section = document.getElementById('welcome-page');
        const square = document.createElement('span');
        square.setAttribute('class', 'square')

        var size = Math.random() * 50;
        const colors = [
            '#2ba15f',
            '#f7db69',
            '#f26a44',
            '#ec1b4b',
            '#4cbb17'
        ]

        const bg = colors[Math.floor(Math.random() * colors.length)];

        square.style.width = 20 + size + 'px';
        square.style.height = 20 + size + 'px';

        square.style.top = (Math.random() * window.innerHeight) - 100 + 'px';
        square.style.bottom = (Math.random() * window.innerHeight) - 100 + 'px';
        square.style.left = (Math.random() * window.innerWidth) - 70 + 'px';
        square.style.right = (Math.random() * window.innerWidth) - 100 + 'px';

        square.style.background = bg;

        if (document.getElementById('welcome-page')) {
            section.appendChild(square)
        }

        setTimeout(() => {
            square.remove()
        }, 5000)
    }

    render() {
        setTimeout(() => { setInterval(() => { this.createSquare() }, 150); }, 4000)
        return (
            <div className='welcome-page' id='welcome-page'>
                <div className='img-container'>
                    <img src={require('../../Assets/logo2.png')} alt='bi-logo' />
                    <img id='logo1' src={require('../../Assets/logo2_1.png')} alt='bi-logo' />
                    <img id='logo2' src={require('../../Assets/logo2_2.png')} alt='bi-logo' />
                    <img id='logo3' src={require('../../Assets/logo2_3.png')} alt='bi-logo' />
                    <img id='logo4' src={require('../../Assets/logo2_4.png')} alt='bi-logo' />
                    <img id='logo5' src={require('../../Assets/logo2_5.png')} alt='bi-logo' />
                </div>
                <h1 className='slogan'>Solve It | Sell It | Win It</h1>
                <Link></Link>
                <h1>Welcome to Business Ideas 2.0</h1>
                <Link to='/login'><button onClick={this.onclick}>Log In</button></Link>
            </div>
        )
    }
}

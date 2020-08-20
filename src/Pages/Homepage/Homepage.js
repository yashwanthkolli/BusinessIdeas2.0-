import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../Assets/business.svg';

import './Homepage.Styles.css';

export default class HomePage extends Component {
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        const { email, password } = this.state;

        console.log(email, password)
    }

    handleChange = e => {
        const {name,value} =e.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='container'>
                <div className='logo-container'>
                    <Logo className='logo' />
                </div>
                <div className='login'>
                    <div className='login-form'>
                        <h2 className='title'>Login</h2>

                        <form className='input' onSubmit={this.handleSubmit}>
                            <div className='input-box'>
                                <label>Email</label>
                                <input name='email' placeholder='John@gmail.com' type='email' onChange={this.handleChange} required />
                            </div>
                            <div className='input-box'>
                                <label>Password</label>
                                <input name='password' placeholder='******' type='password' onChange={this.handleChange} required />
                            </div>
                            <div className='button'>
                                <button type='submit'><Link to='/intro'>Login</Link></button>
                            </div>
                        </form>

                    </div>    
                </div>
            </div>
        )
    }
}
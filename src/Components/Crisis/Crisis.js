import React from 'react';

import './Crisis.Styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateScoreCrisis } from '../../Redux/User/UserActions';

const Crisis = ({crisis, question, options, redirect, currentUser}) => {

    const response=[]

    const onchange = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onsubmit = (e) => {
        e.preventDefault();
        const respons = response[response.length-1];
        console.log(respons.value)
        updateScoreCrisis({currentScore: currentUser.score, addScore: respons.value})
    }
    return(
        <div className='crisis-container' onChange={onchange}>
            <p className='crisis'>{crisis}<strong className='question'>{question}</strong></p>
            <form onSubmit={onsubmit}>
            {
                options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name='prod-crisis-1' value={option.value} /><label>{option.option}</label></div>)
            }
                <Link to={redirect}><button type='submit'>Submit</button></Link>
            </form>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
    updateScore: score => dispatch(updateScoreCrisis(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Crisis);
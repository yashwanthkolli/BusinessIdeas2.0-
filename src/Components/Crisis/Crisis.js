import React from 'react';

import './Crisis.Styles.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateScoreCrisis } from '../../Redux/User/UserActions';

const Crisis = ({heading, crisis, question, options, redirect, currentUser, updateScoreCrisis}) => {

    const response=[]

    const onchange = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onsubmit = (e) => {
        e.preventDefault();
        document.getElementById('redirect').click()
        if(response.length>0){
            const respons = response[response.length-1];
            updateScoreCrisis({currentScore: currentUser.score, addScore: respons.value})
        }
    }

    function rankToScore(rank){
        switch(rank){
            case 1:
                return 4000;
            case 2:
                return 3000;
            case 3:
                return 2000;
            case 4:
                return 1000;
            default:
                return 0;
        }

    }

    return(
        <div className='crisis-container' onChange={onchange}>
            <h1>{heading.toUpperCase()}</h1>
            <div className='crisis'>
                {
                    crisis.split('#').map((para, index) => <p key={index}>{para}</p>)
                }
                <p className='question'>{question}</p>
            </div>
            <form onSubmit={onsubmit}>
            {
                options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name='prod-crisis-1' value={rankToScore(option.rank)} /><label>{option.option}</label></div>)
            }
                <button type='submit' id='submit'>Submit</button>
            </form>
            <Link to={redirect}><button id='redirect'></button></Link>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
    updateScoreCrisis: score => dispatch(updateScoreCrisis(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(Crisis);
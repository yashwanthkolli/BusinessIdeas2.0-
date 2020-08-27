import React from 'react';
import { connect } from 'react-redux';

import './QuestionCard.Styles.css';
import { updateScore } from '../../Redux/User/UserActions';
import Axios from 'axios';

const QuestionCard = ({questionDetails, index, currentUser, updateScore}) => {
    const { _id, question, answer } = questionDetails;

    const options=[questionDetails.option1, questionDetails.option2, questionDetails.option3, questionDetails.option4]

    const response=[]

    const result=[]

    const onChangeMcqs = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onSubmitMcqs = (e) => {
        e.preventDefault();
        const respons = response[response.length-1];
        respons.value === answer ? result.push(true)  : result.push(false)
        console.log(result[result.length-1])
        if(result[result.length-1] === true) {
            updateScore(currentUser.score)
            const points = {
                score: currentUser.score
            }
            //Axios.post('http://localhost:5000/score/'+currentUser.currentUser._id, points)
            //.then(res => console.log(res.data));
        }
        var form = document.getElementById(respons.name)
        var elements = form.elements
        for(var i=0; i<elements.length;i++){
            elements[i].disabled = true
        }
    }
    return(
        <div className='mcq-container'>
            <div className='mcq' onChange={onChangeMcqs}>
                {index<9? <h2>0{index+1}</h2>:<h2>{index+1}</h2>}
                <h3>{question}</h3>
                <form id={_id} onSubmit={onSubmitMcqs}>
                    {
                        options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name={_id} value={String.fromCharCode(97+index)} /><label>{option.toUpperCase()}</label></div> )
                    }
                    <button type='submit' id='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
});

const mapDispatchToProps = dispatch => ({
    updateScore: score => dispatch(updateScore(score))
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
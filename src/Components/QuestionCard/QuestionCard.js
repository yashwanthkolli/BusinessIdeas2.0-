import React from 'react';

import './QuestionCard.Styles.css';

const QuestionCard = ({questionDetails, index}) => {
    const { id, question, answer } = questionDetails;

    const options=[questionDetails.option1, questionDetails.option2, questionDetails.option3, questionDetails.option4]

    const response=[]

    const onChangeMcqs = (e) => {
        const {name,value} =e.target;
        const data = {name, value}
        response.push(data)
    }

    const onSubmitMcqs = (e) => {
        e.preventDefault();
        const respons = response;
        console.log(respons);
    }
    return(
        <div className='mcq-container'>
            <div className='mcq' onChange={onChangeMcqs}>
                {index<9? <h2>0{index+1}</h2>:<h2>{index+1}</h2>}
                <h3>{question}</h3>
                <form onSubmit={onSubmitMcqs}>
                    {
                        options.map( (option, index) => <div className='options' key={index+1}><input type='radio' name={id} value={option} /><label>{option.toUpperCase()}</label></div> )
                    }
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default QuestionCard
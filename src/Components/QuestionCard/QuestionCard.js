import React from 'react';

import './QuestionCard.Styles.css';

const QuestionCard = ({questionDetails, index}) => {
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

export default QuestionCard
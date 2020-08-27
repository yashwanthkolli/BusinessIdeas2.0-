import React, { Component } from 'react';
import Axios from 'axios';
import Questions from '../../Components/Questions/Questions';

export default class SalesQuestions extends Component {
    constructor(){
        super()
        this.state = {
            salesQuestions: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/'+this.props.match.params.companyName+'/getsales')
        .then(res => this.setState({salesQuestions: res.data}))
    }

    render() {
        if(localStorage.getItem('usertoken'))
        {
        return (
            this.state.salesQuestions ?
            <div>
                <Questions redirect={'/round2'} questions={this.state.salesQuestions} questionsName='Sales Questions' />
            </div>
            : <div className='loading'>Loading...</div>
        )
        }
        else{window.location='/';}
    }
}

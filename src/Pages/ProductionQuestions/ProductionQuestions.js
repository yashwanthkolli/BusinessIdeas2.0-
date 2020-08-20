import React, { Component } from 'react';
import Axios from 'axios';
import Questions from '../../Components/Questions/Questions';

export default class ProductionQuestions extends Component {
    constructor(){
        super()
        this.state = {
            productionQuestions: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/'+this.props.match.params.companyName+'/getproduction')
        .then(res => this.setState({productionQuestions: res.data}))
    }

    render() {
        return (
            this.state.productionQuestions ?
            <div>
                <Questions redirect={'/comprehension/'+this.props.match.params.companyName+'/Finance'} questions={this.state.productionQuestions} questionsName='Production Questions' />
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

import React, { Component } from 'react'
import Comprehension from '../../Components/Comprehension/Comprehension';

import './FinanceComprehension.Styles.css'

export default class FinanceComprehension extends Component {
    constructor(){
        super()
        this.state={
            financeComprehension: ''
        }
    }

    componentDidMount(){
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({financeComprehension: data[0]}))
    }

    render() {
        return (
            this.state.financeComprehension ? 
            <div className='finance-comprehension-page'>
               <Comprehension comprehensionName='finance' comprehension={this.state.financeComprehension} redirect={this.props.match.url+'Questions'} />
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

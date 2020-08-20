import React, { Component } from 'react'
import Comprehension from '../../Components/Comprehension/Comprehension';

import './SalesComprehension.Styles.css'

export default class SalesComprehension extends Component {
    constructor(){
        super()
        this.state={
            salesComprehension: ''
        }
    }

    componentDidMount(){
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({salesComprehension: data[0]}))
    }

    render() {
        return (
            this.state.salesComprehension ? 
            <div className='sales-comprehension-page'>
               <Comprehension comprehensionName='sales' comprehension={this.state.salesComprehension} redirect={this.props.match.url+'Questions'} />
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

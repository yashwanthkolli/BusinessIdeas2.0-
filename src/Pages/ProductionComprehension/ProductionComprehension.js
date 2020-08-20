import React, { Component } from 'react'
import Comprehension from '../../Components/Comprehension/Comprehension';

import './ProductionComprehension.Styles.css'

export default class ProductionComprehension extends Component {
    constructor(){
        super()
        this.state={
            productionComprehension: ''
        }
    }

    componentDidMount(){
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({productionComprehension: data[0]}))
    }

    render() {
        return (
            this.state.productionComprehension ? 
            <div className='production-comprehension-page'>
               <Comprehension comprehensionName='production' comprehension={this.state.productionComprehension} redirect={this.props.match.url+'Questions'} />
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

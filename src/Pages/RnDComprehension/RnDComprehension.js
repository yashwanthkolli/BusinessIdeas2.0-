import React, { Component } from 'react'
import Comprehension from '../../Components/Comprehension/Comprehension';

import './RnDComprehension.Styles.css'

export default class RnDComprehension extends Component {
    constructor(){
        super()
        this.state={
            rndComprehension: ''
        }
    }

    componentDidMount(){
        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({rndComprehension: data[0]}))
    }

    render() {
        return (
            this.state.rndComprehension ? 
            <div className='rnd-comprehension-page'>
               <Comprehension comprehensionName='r&d' comprehension={this.state.rndComprehension} redirect={this.props.match.url+'Questions'} />
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
}

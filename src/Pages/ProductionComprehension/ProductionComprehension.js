import React, { Component } from 'react'
import Comprehension from '../../Components/Comprehension/Comprehension';

import './ProductionComprehension.Styles.css'
import Axios from 'axios';

export default class ProductionComprehension extends Component {
    constructor(){
        super()
        this.state={
            productionComprehension: ''
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/company/info')
        .then(res => res.data.map( company => company.name === this.props.match.params.companyName ?
                this.setState({productionComprehension: company.production})
                : console.log()
            ))
    }

    render() {
        if(localStorage.getItem('usertoken'))
        {
        return (
            this.state.productionComprehension ? 
            <div className='production-comprehension-page'>
               <Comprehension comprehensionName='production' comprehension={this.state.productionComprehension} redirect={this.props.match.url+'Questions'} />
            </div>
            : <div className='loading'>Loading...</div>
        )
        }
        else{window.location='/';}
    }
}

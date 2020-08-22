import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './IntroductionPage.Styles.css';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
import Axios from 'axios';

class IntroductionPage extends Component {
    constructor(){
        super()
        this.state = {
            Companies: []
        }
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/company/info')
        .then(res => this.setState({Companies: res.data}))
    }

    componentDidUpdate(){
        const allotedCompany = this.state.Companies[Math.floor(Math.random()*this.state.Companies.length)]
        return allotedCompany
    }

    render(){
        console.log(this.componentDidUpdate())
        return (
            this.state.Companies && this.componentDidUpdate() ?
            <div className='introduction-page'>
                <div className='company-introduction'>
                    <Header heading={this.componentDidUpdate().name} />
                    <Body body={this.componentDidUpdate().info} />
                    <div className='button'>
                        <button><Link to={'/comprehensionRules/'+this.componentDidUpdate().name}>Comprehensions &#8594;</Link></button>
                    </div>
                </div>
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
    
}

export default IntroductionPage;
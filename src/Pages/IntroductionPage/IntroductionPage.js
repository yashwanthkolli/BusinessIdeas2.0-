import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './IntroductionPage.Styles.css';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';

class IntroductionPage extends Component {
    constructor(){
        super()
        this.state = {
            Companies: ['lnt', 'reliance', 'sony', 'tata'],
            allotedCompany: '',
            allotedCompanyIntro: ''
        }
    }

    componentDidMount(){
        this.setState((prevState) => {
            return{ allotedCompany: prevState.Companies[Math.floor(Math.random()*prevState.Companies.length)]}
        })

        fetch('https://baconipsum.com/api/?type=meat-and-filler')
        .then(res => res.json())
        .then(data => this.setState({allotedCompanyIntro: data[0]}))
    }

    render(){
        return (
            this.state.allotedCompany && this.state.allotedCompanyIntro ? 
            <div className='introduction-page'>
                <div className='company-introduction'>
                    <Header heading={this.state.allotedCompany} />
                    <Body body={this.state.allotedCompanyIntro} />
                    <div className='button'>
                        <button><Link to={'/comprehensionRules/'+this.state.allotedCompany}>Comprehensions &#8594;</Link></button>
                    </div>
                </div>
            </div>
            : <div className='loading'>Loading...</div>
        )
    }
    
}

export default IntroductionPage;
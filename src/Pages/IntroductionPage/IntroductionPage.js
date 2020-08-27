import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import { setCurrentUser } from '../../Redux/User/UserActions';

import './IntroductionPage.Styles.css';

import Header from '../../Components/Header/Header';
import Body from '../../Components/Body/Body';
import Axios from 'axios';

class IntroductionPage extends Component {
    constructor(){
        super()
        this.state = {
            
            CompanyName:'',
            info:'',
           
        }
    }



    componentDidMount(){

        Axios.get('http://localhost:5000/user/'+this.props.match.params.id)
        .then(response => {
          if (response.status === 200) {
            this.setState({
              CompanyName: response.data.company,
            })
            this.props.setCurrentUser(response.data)
            alert('You are alloted with the company '+response.data.company.toUpperCase())
          }
        })
        .catch((error) => {
          console.log(error);
        })


        Axios.get('http://localhost:5000/company/info')
        .then(res => res.data.map( company => company.name.toUpperCase() === this.state.CompanyName.toUpperCase() ?
                this.setState({info: company.production})
                : console.log()
            ))
    }



   /* componentDidMount(){
        Axios.get('http://localhost:5000/company/info')
        .then(res => this.setState({Companies: res.data}))
    }

    componentDidUpdate(){
        
        axios.get('http://localhost:5000/user/'+this.props.match.params.id)
        .then(response => {
          if (response.data.length > 0) {
            this.setState({
              name: response.data.company,
            })
          }
        })
        .catch((error) => {
          console.log(error);
        })
        
        
        
        /*const allotedCompany = this.state.Companies[Math.floor(Math.random()*this.state.Companies.length)]
        return allotedCompany
    }*/
    

    render(){

      if(localStorage.getItem('usertoken'))  
      {
        return (
            this.state.CompanyName?
            <div className='introduction-page'>
                <div className='company-introduction'>
                    <Header heading={this.state.CompanyName} />
                    <Body body={this.state.info} />
                    <div className='button'>
                        <button><Link to={'/comprehensionRules/'+this.state.CompanyName}>Comprehensions &#8594;</Link></button>
                    </div>
                </div>
            </div>
            :
            <div>
                LOADING....
            </div>
            
        )
      }
      else
      {window.location='/';}
    }
    
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null , mapDispatchToProps)(IntroductionPage);
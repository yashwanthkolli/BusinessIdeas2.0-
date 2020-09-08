import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';

import './Comprehension.Styles.css';

import Header from '../Header/Header';
import Body from '../Body/Body';
import { connect } from 'react-redux';
import Axios from 'axios';

 const Comprehension = ({currentPath, comprehensionName, redirect, comprehension, currentUser}) => {
    useEffect(()=>{
        const route = {
            path: currentPath+'Questions',
          }
          Axios.post('http://localhost:5000/user/path/'+ currentUser.currentUser._id,route)
    })

    return (
        <div className='comprehension-page'>
            <div className='comprehension-image' >
                <img src={require('../../Assets/'+comprehensionName+'.svg')} alt='ComprehensionImage'/>
            </div>
            <div className='comprehension'>
                <Header heading={comprehensionName+' Comprehension'} />
                <Body body={comprehension} />
                <div className='button'>
                    <Link to={redirect}><button>Questions</button></Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    currentUser: state.user
})

export default connect(mapStateToProps)(Comprehension);

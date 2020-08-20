import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './ComprehensionRules.Styles.css';

const ComprehensionRules = ({match, comprehensionData}) => {
    const allotedCompanyName = match.params.companyName;
    return(
        <div className='comprehension-rules-container'>
            <div className='comprehesion-rules'>
                <h1 className='header'>Comprehension Round Rules</h1>
                <div className='rules'>
                    <ol>
                        <li>
                            You will be given a company randomly which has the following departments:
                            <ul>
                                <li>Finance</li>
                                <li>Sales</li>
                                <li>Production</li>
                                <li>Research and Development</li>
                            </ul>
                        </li>
                        <li>You will be given a comprehension and will have to answer 10 questions about each of the verticals that is 40 questions in total</li>
                        <li>Each question will consist of four options out of which one will be the correct answer.</li>
                        <li>Each correct answer will earn you ₹1000 of investment capital (these will be the score).</li>
                        <li>There is no negative marking so for every wrong answer you will receive ₹0 of investment capital.</li>
                        <li>The time-limit for this round is 1 hour that means you must finish answering all 40 questions in 1 hour.</li>
                        <li>There will be no elimination pertaining to this round.</li>
                    </ol>
                </div>
                <div className='button'>
                    <button><Link to={'/comprehension/'+allotedCompanyName+'/Production'}>Start Comprehension</Link></button>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    comprehensionData: state.comprehension.comprehensionData
})

export default connect(mapStateToProps)(ComprehensionRules);
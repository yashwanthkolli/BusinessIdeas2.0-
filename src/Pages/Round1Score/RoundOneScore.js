import React from 'react'
import { connect } from 'react-redux';

import './RoundOneScore.Styles.css'

const RoundOneScore = ({currentUser}) => {
    const onclick = () => {
        window.location = '/round3/rules/'+currentUser.currentUser._id
    }

    return (
        <div className='round-one-score-page'>
            <div className='round-one-score'>
                <p className='round-text'>Round-1 Completed!!</p>
                <p className='score-text'>Your score is</p>
                <p className='score'>Rs. {currentUser.score}</p>
                <button onClick={onclick}>Round-2</button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    currentUser: state.user
})

export default connect(mapStateToProps)(RoundOneScore);
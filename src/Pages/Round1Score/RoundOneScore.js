import React from 'react'
import { connect } from 'react-redux';

const RoundOneScore = ({currentUser}) => {
    console.log(currentUser)
    return (
        <div className='round-one-score-page'>
            Fuck
        </div>
    )
}


const mapStateToProps = (state) => ({
    currentUser: state.user
})

export default connect(mapStateToProps)(RoundOneScore);
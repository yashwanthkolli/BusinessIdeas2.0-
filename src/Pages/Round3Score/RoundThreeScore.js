import Axios from 'axios';
import React, { Component } from 'react'
import { connect } from 'react-redux';

import ScoreCard from '../../Components/ScoreCard/ScoreCard';

class RoundThreeScore extends Component {
    componentDidMount() {
        const route = {
            path: '/round3/score',
        }
        Axios.post('http://localhost:5000/user/path/' + this.props.currentUser.currentUser._id, route)
    }

    render() {
        if (sessionStorage.usertoken && this.props.currentUser.currentUser) {
            return (
                <React.Fragment>
                    <ScoreCard
                        redirect={'/scoresheet/' + this.props.currentUser.currentUser._id}
                        score={this.props.currentUser.score}
                        round="Round-3"
                        nextRound="ScoreSheet" />
                </React.Fragment>
            )
        }
        else {
            window.location = '/';
        }
    }
}


const mapStateToProps = (state) => ({
    currentUser: state.user
})

export default connect(mapStateToProps)(RoundThreeScore);
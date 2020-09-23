import React, { Component } from 'react'

export default class PseudoRoundSet extends Component {
    componentDidMount() {
        if (!sessionStorage.round) {
            sessionStorage.setItem('round', 'round1')
        }
    }
    render() {
        window.location = '/redirect/' + this.props.match.params.id
        return (
            <div>Hello</div>
        )
    }
}

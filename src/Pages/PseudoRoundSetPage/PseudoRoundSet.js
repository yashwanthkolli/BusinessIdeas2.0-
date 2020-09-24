import Axios from 'axios'
import React, { Component } from 'react'
import url from '../../Components/Url/Url'

export default class PseudoRoundSet extends Component {
    render() {
        Axios.get(url + 'admin/gettimer')
            .then(res => sessionStorage.setItem('round', res.data[0].round))
        window.location = '/redirect/' + this.props.match.params.id
        return (
            <div>Hello</div>
        )
    }
}

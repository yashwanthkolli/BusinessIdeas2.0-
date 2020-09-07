import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setCurrentUser } from '../../Redux/User/UserActions';

import './ScoreSheet.Styles.css'
import FinalGraph from '../../Components/FinalGraph/FinalGraph';

class ScoreSheet extends Component {
    state = {
        round1Score: 25000,
        investedCompanies: [
            {
                name: 'sony', 
                investedAmount: 10000, 
                returns: 11000, 
                data: [{
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e377"
                    },
                    "date": "03-05-2020",
                    "price": 999.5
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e378"
                    },
                    "date": "10-05-2020",
                    "price": 969
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e379"
                    },
                    "date": "17-05-2020",
                    "price": 986
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37a"
                    },
                    "date": "24-05-2020",
                    "price": 1025
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37b"
                    },
                    "date": "31-05-2020",
                    "price": 1171
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37c"
                    },
                    "date": "07-06-2020",
                    "price": 1091
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37d"
                    },
                    "date": "14-06-2020",
                    "price": 1094
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37e"
                    },
                    "date": "21-06-2020",
                    "price": 1096
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37f"
                    },
                    "date": "28-06-2020",
                    "price": 1111
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e380"
                    },
                    "date": "05-07-2020",
                    "price": 1098
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e381"
                    },
                    "date": "12-07-2020",
                    "price": 1138
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e382"
                    },
                    "date": "19-07-2020",
                    "price": 1136
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e383"
                    },
                    "date": "26-07-2020",
                    "price": 1206
                }]
            },
            {
                name: 'reliance', 
                investedAmount: 10000, 
                returns: 9000,
                data: [{
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e377"
                    },
                    "date": "03-05-2020",
                    "price": 999.5
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e378"
                    },
                    "date": "10-05-2020",
                    "price": 969
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e379"
                    },
                    "date": "17-05-2020",
                    "price": 986
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37a"
                    },
                    "date": "24-05-2020",
                    "price": 1025
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37b"
                    },
                    "date": "31-05-2020",
                    "price": 1171
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37c"
                    },
                    "date": "07-06-2020",
                    "price": 1091
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37d"
                    },
                    "date": "14-06-2020",
                    "price": 1094
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37e"
                    },
                    "date": "21-06-2020",
                    "price": 1096
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e37f"
                    },
                    "date": "28-06-2020",
                    "price": 1111
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e380"
                    },
                    "date": "05-07-2020",
                    "price": 1098
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e381"
                    },
                    "date": "12-07-2020",
                    "price": 1138
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e382"
                    },
                    "date": "19-07-2020",
                    "price": 1136
                }, {
                    "_id": {
                        "$oid": "5f4e9e1a0fa8b744acc0e383"
                    },
                    "date": "26-07-2020",
                    "price": 1206
                }]
            }
            ],
        round3Score: 40000
    }

    componentDidMount(){
        Axios.get('http://localhost:5000/user/'+this.props.match.params.id,
        {
          headers:{
            "authorization":"Bearer "+sessionStorage.usertoken
          }
        })
        .then(response => {
          if (response.status === 200) {
            this.props.setCurrentUser(response.data)
          }
        })
        .catch((error) => {
          console.log(error);
        })
    }

    checkGainOrLoss(value){
        return(value >= 0 ? 'green' : 'red') 
    }

    render() {
        return (
            <div className='scoresheet-page'>
                <div className='round1'>
                    <h1>Round 1</h1>
                    <h3>Earnings: Rs.{this.state.round1Score}</h3>
                </div>
                {
                    this.state.investedCompanies.length ? 
                    <div className='round2'>
                        <h1>Round 2</h1>
                        <div className='companies'>
                        {
                            this.state.investedCompanies.map(company => 
                                <div key={company.name} className='company'>
                                    <h3>{company.name.toUpperCase()}</h3>
                                    <p>Invested Amount: {company.investedAmount}</p>
                                    <p>Total Returns: {company.returns}</p>
                                    <p className={this.checkGainOrLoss(company.returns - company.investedAmount)}>Profit: {company.returns - company.investedAmount}</p>
                                    <p className={this.checkGainOrLoss(company.returns - company.investedAmount)}>Returns Percentage: {(company.returns - company.investedAmount)*100/company.investedAmount}%</p>
                                    <FinalGraph stockData={company.data} color={this.checkGainOrLoss(company.returns - company.investedAmount)} />
                                </div>
                            )
                        }
                        </div>
                    </div>
                    : 
                    <div className='round2'>
                        <h1>Round 2</h1>
                        <p>You haven't invested in any company.</p>
                    </div>
                }
                <div className='round3'>
                    <h1>Round 3</h1>
                    <h3>Score: {this.state.round3Score}</h3>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSheet);
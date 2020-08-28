
import React, { Component } from 'react';
import{ Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/Homepage';
import IntroductionPage from './Pages/IntroductionPage/IntroductionPage';
import ComprehensionRules from './Pages/ComprehensionRules/ComprehensionRules';
import ProductionComprehension from './Pages/ProductionComprehension/ProductionComprehension';
import ProductionQuestions from './Pages/ProductionQuestions/ProductionQuestions';
import FinanceComprehension from './Pages/FinanceComprehension/FinanceComprehension';
import FinanceQuestions from './Pages/FinanceQuestions/FinanceQuestions';
import RnDComprehension from './Pages/RnDComprehension/RnDComprehension';
import RnDQuestions from './Pages/RnDQuestions/RnDQuestions';
import SalesComprehension from './Pages/SalesComprehension/SalesComprehension';
import SalesQuestions from './Pages/SalesQuestions/SalesQuestions';
import Timer from './Components/Timer/Timer';
import RoundOneScore from './Pages/Round1Score/RoundOneScore';
import { Provider } from 'react-redux';

import store from './Redux/Store';
import Round3Rules from './Pages/Round3Rules/Round3Rules';

class App extends Component{ 
  constructor(){
    super();
    this.state = {
        flag: false,

    }
    this.userUpdate=this.userUpdate.bind(this);
  }

  userUpdate (userObject) {
    this.setState(userObject)
  }

  render(){
  return (
    <div className="App">
    <div className='timer'>
      {window.location.pathname.substr(1,5) === 'intro' ? <Timer time={3600} currentPath='round1' /> : null}
      {window.location.pathname.substr(1,6) === 'round3' ? <Timer time={3600} currentPath='round2' /> : null}
    </div>
    
    <Provider store={store}>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/intro/:id' component={IntroductionPage} />
      <Route exact path='/comprehensionRules/:companyName' component={ComprehensionRules} />
      <Route exact path='/comprehension/:companyName/Production' component={ProductionComprehension} />
      <Route exact path='/comprehension/:companyName/ProductionQuestions' component={ProductionQuestions} />
      <Route exact path='/comprehension/:companyName/Finance' component={FinanceComprehension} />
      <Route exact path='/comprehension/:companyName/FinanceQuestions' component={FinanceQuestions} />
      <Route exact path='/comprehension/:companyName/Resdev' component={RnDComprehension} />
      <Route exact path='/comprehension/:companyName/ResdevQuestions' component={RnDQuestions} />
      <Route exact path='/comprehension/:companyName/Sales' component={SalesComprehension} />
      <Route exact path='/comprehension/:companyName/SalesQuestions' component={SalesQuestions} />
      <Route exact path='/round1/score' component={RoundOneScore} />
      <Route exact patch='/round3/rules/:id' component={Round3Rules} />
    </Switch>
    </Provider>
    </div>
  );
  }
}

export default App;


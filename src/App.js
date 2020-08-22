import React from 'react';
import{ Switch, Route, Redirect } from 'react-router-dom';

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

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/intro' component={IntroductionPage} />
      <Route exact path='/comprehensionRules/:companyName' component={ComprehensionRules} />
      <Route exact path='/comprehension/:companyName/Production' component={ProductionComprehension} />
      <Route exact path='/comprehension/:companyName/ProductionQuestions' component={ProductionQuestions} />
      <Route exact path='/comprehension/:companyName/Finance' component={FinanceComprehension} />
      <Route exact path='/comprehension/:companyName/FinanceQuestions' component={FinanceQuestions} />
      <Route exact path='/comprehension/:companyName/Resdev' component={RnDComprehension} />
      <Route exact path='/comprehension/:companyName/ResdevQuestions' component={RnDQuestions} />
      <Route exact path='/comprehension/:companyName/Sales' component={SalesComprehension} />
      <Route exact path='/comprehension/:companyName/SalesQuestions' component={SalesQuestions} />
    </Switch>
    </div>
  );
}

export default App;


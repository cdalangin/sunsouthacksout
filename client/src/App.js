import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FourChoices from './FourChoices'
import Main from './Main'
import Fizz from './Fizz';
import Sours from './Sours';
import Old from './Old';
import Three from './Three';

function App() {
  return (
    <Switch>
      <Route path='/Fizz'>
        <Fizz />
      </Route>
      <Route path='/Sours'>
        <Sours />
      </Route>
      <Route path='/Old'>
        <Old />
      </Route>
      <Route path='/Three'>
        <Three />
      </Route>
      <Route path='/FourChoices'>
        <FourChoices />
      </Route>
      <Route path='/'>
        <Main />
      </Route>

    </Switch>

  );
}

export default App;

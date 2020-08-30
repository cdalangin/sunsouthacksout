import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FourChoices from './FourChoices'
import Main from './Main'

function App() {
  return (<Router>
    
    <Switch>              
        <Route path='/FourChoices' component={FourChoices} />
        <Route path='/' component={Main} />
    </Switch>
    </Router>
  );
}

export default App;

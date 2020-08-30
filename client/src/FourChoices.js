import React from 'react';
import './App.css';
import { Router } from 'react-router-dom';
import { BrowserRouter as  Switch, Route } from "react-router-dom";
import Sours from './Sours';
import Old from './Old';
import Three from './Three';
import Fizz from './Fizz';

function FourChoices (){
            return(
             <Router>
                <div className="four">
                   <div style={{zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent:'center', alignItems:'center'}}>
                       
                            <div className="card" id="sour">
                                <a href="/Sours" className="borderLeftRight">Sours</a>
                            </div>
                            <div className="card" id="old">
                            <a href="/Old" className="borderLeftRight">Old</a>
                            </div>
                    
                           <div className="card" id="fizz">
                           <a href="/Fizz" className="borderLeftRight">Fizz</a>
                            </div>
                            <div className="card" id="three">
                            <a href="/Three" className="borderLeftRight">Blended</a>
                            </div>
                   </div>
                </div>
                 <Switch>              
                <Route path='/Sours' component={Sours} />
                <Route path='/Old' component={Old} />
                <Route path='/Three' component={Three} />
                <Route path='/Fizz' component={Fizz} />
            </Switch>
            </Router> 
            )
        }


export default FourChoices;


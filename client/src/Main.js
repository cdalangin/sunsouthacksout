import React from 'react';
import heroimg from './assets/hero.jpg'
import './App.css';
import { Router, Switch } from 'react-router-dom';
import { BrowserRouter as Route } from "react-router-dom";
import FourChoices from './FourChoices';

function Main() {
  return (
    <div className="hero">
      <div className="myrow">
        <img className="heroImg" src={heroimg} />
        <div className="mycolumn" style={{ textAlign: "left" }}>
          <h1>Mixologist</h1>
          <h2>The best drink suggesting web app. Mixologist lets you pick what type of drink you want, whether you want the drink to have alcohol or not, and suggests drinks based on the ingredients you have.</h2>
          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <a href="/Alcohol"><button className="button circle">
              Lets go!
          </button></a></div>
        </div>
      </div>
    </div>

  );
}

export default Main;

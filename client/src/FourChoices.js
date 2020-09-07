import React, { Component } from 'react';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";
import './App.css';
// import { Router } from 'react-router-dom';
// import { BrowserRouter as Switch, Route } from "react-router-dom";
// import Sours from './Sours';
// import Old from './Old';
// import Three from './Three';
// import Fizz from './Fizz';
function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function FourChoices() {
    let query = useQuery();
    let param = query.get("a");
    let SoursUrl = `/Sours?a=${param}`;
    let OldUrl = `/Old?a=${param}`;
    let FizzUrl = `/Fizz?a=${param}`;
    let ThreeUrl = `/Three?a=${param}`;
    return (
        <div className="four">
            <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                <div className="card" id="sour">
                    <a href={SoursUrl} className="borderLeftRight">Sours</a>
                </div>
                <div className="card" id="old">
                    <a href={OldUrl} className="borderLeftRight">Old</a>
                </div>

                <div className="card" id="fizz">
                    <a href={FizzUrl} className="borderLeftRight">Fizz</a>
                </div>
                <div className="card" id="three">
                    <a href={ThreeUrl} className="borderLeftRight">Blended</a>
                </div>
            </div>
        </div>
    )
}
export default FourChoices

// export default class FourChoices extends Component {
//     render() {
//         return (
//             <div className="four">
//                 <div style={{ zIndex: '0', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

//                     <div className="card" id="sour">
//                         <a href="/Sours" className="borderLeftRight">Sours</a>
//                     </div>
//                     <div className="card" id="old">
//                         <a href="/Old" className="borderLeftRight">Old</a>
//                     </div>

//                     <div className="card" id="fizz">
//                         <a href="/Fizz" className="borderLeftRight">Fizz</a>
//                     </div>
//                     <div className="card" id="three">
//                         <a href="/Three" className="borderLeftRight">Blended</a>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }
import React, { Component } from "react";
import axios from "axios";
import './App.css';
import drink1 from "./assets/drink1.png"

export default class Fizz extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: ""
        }
    }
    componentDidMount = () => {
        axios.get('/Collins/Alcoholic')
            .then(response => {
                // handle success
                this.setState({
                    ingredients: response.data
                })
            })
            .catch(error => {
                // handle error
                console.log(error);
            });
    }
    render() {
        return (
            <div className="row">
                <div className="col left">
                    <img className="graphic" src={drink1} />
                    <h1 className="category">Fizzy</h1>
                </div>
                <div className="col right">
                    <h2 className="question">Which ingredients do you want to use?</h2>
                    <div className="choices">
                        <button className="options border">{this.state.ingredients.ingredient1}</button>
                        <button className="options border">{this.state.ingredients.ingredient2}</button>
                        <button className="options border">{this.state.ingredients.ingredient3}</button>
                        <button className="options border">{this.state.ingredients.ingredient4}</button>
                        <button className="options border">{this.state.ingredients.ingredient5}</button>
                    </div>
                </div>
            </div>
        )
    }
}

// function Fizz() {
//     return (
        // <div className="row">
        //     <div className="col left">
        //         <img className="graphic" src={drink1} />
        //         <h1 className="category">Fizzy</h1>
        //     </div>
        //     <div className="col right">
        //         <h2 className="question">Which ingredients do you want to use?</h2>
        //         <div className="choices">
        //             <button className="options border">Lemon</button>
        //             <button className="options border">Soda</button>
        //             <button className="options border">Grapefruit</button>
        //             <button className="options border">Cucumber</button>
        //             <button className="options border">Mint</button>
        //         </div>
        //     </div>
        // </div>
//     )
// }

// export default Fizz;
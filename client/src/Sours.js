import React, { Component } from "react";
import Reactrouter from "react-router-dom";
import axios from "axios";
import './App.css';
import drink5 from "./assets/drink5.png"
import { useLocation } from "react-router-dom";

export default class Sours extends Component {
    constructor() {
        super();
        this.state = {
            ingredients: ""
        };
    }

    componentDidMount = () => {
        let search = window.location.search;
        let params = new URLSearchParams(search);
        let aparam = params.get('a');
        axios.get(`/Sours/${aparam}`)
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
    };

    render() {
        return (
            <div className="row">
                <div className="col left">
                    <img className="graphic" src={drink5} />
                    <h1 className="category">Sours</h1>
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
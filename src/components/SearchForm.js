import React, { Component } from "react";

// API de OMDb - http://www.omdbapi.com/?apikey=[yourkey]&
// Key - 69ed5237

const API_KEY = '69ed5237'

export class SearchForm extends Component {
    state = {
        inputMovie: "",
    };

    _handleChange = (busqueda) => {
        this.setState({ inputMovie: busqueda.target.value })
    }

    _handleSubmit = (e) => {
        e.preventDefault()
        const { inputMovie } = this.state
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${inputMovie}`)
            .then(res => res.json())
            .then(results => {
                const { Search = [], totalResults = "0" } = results
                console.log({Search, totalResults})
                this.props.onResults(Search)
            })
    }

    render() {
        return (
            <form onSubmit={this._handleSubmit}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input"
                            onChange={this._handleChange}
                            type="text"
                            placeholder="Movies to search..."/>
                    </div>
                    <div className="control">
                        <button className="button is-info">Search</button>
                    </div>
                </div>
            </form>
        );
    }
}

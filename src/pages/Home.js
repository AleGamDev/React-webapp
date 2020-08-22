import React, { Component } from 'react'

import { Title } from "../components/Title.js" // Con .. le decimos que está arriba
import { SearchForm } from "../components/SearchForm.js"
import { MoviesList } from "../components/MoviesList.js"

export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = (results) => {
        this.setState({ results, usedSearch: true })
    }

    _renderResults() {
        return this.state.results.length === 0
            ? <p style={{ color: "red", padding: "15px" }}>Results not found!</p>
            : <MoviesList movies={this.state.results} />
    }

    render() {
        return (
            <div>
                <Title>Search Movies</Title>
                <div className="SearchForm-wrapper">
                    <SearchForm onResults={this._handleResults}/>
                </div>
                    { this.state.usedSearch
                        ? this._renderResults()
                        : <small>Use the form to search a movie</small>
                    }
            </div>
        )
    }
}
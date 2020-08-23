import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBackToHome } from '../components/ButtonBackToHome'

const API_KEY = '69ed5237'

export class Detail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { movie: {} }

    _fetchMovie ({ id }) {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
            .then(res => res.json())
            .then(movie => {
                console.log({movie})
                this.setState({ movie })
            })
    }

    componentDidMount () {
        console.log(this.props)
        const { id } = this.props.match.params
        this._fetchMovie({ id })
    }

    render() {
        const { Title, Poster, Actors, Metascore, Plot } = this.state.movie
        return (
            <div>
                <h1 className="title is-2">{Title}</h1>
                <img style={{ paddingBottom: "25px" }} alt={this.props.id} src={Poster} />
                <h3 className="subtitle is-6"><strong>Actors: </strong>{Actors}</h3>
                <p className="subtitle is-6"><strong>Metacritic rating: </strong>{Metascore}</p>
                <p className="subtitle is-6" style={{ paddingBottom: "20px" }}><strong>Plot: </strong>{Plot}</p>
                <ButtonBackToHome />
            </div>
        )
    }
}
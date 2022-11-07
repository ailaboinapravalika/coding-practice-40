// Write your code here
import {Component} from 'react'
import './index.css'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionList = moviesList.filter(movie => movie.categoryId === 'ACTION')
    const comedyList = moviesList.filter(movie => movie.categoryId === 'COMEDY')

    return (
      <div className="prime-bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
        <div className="movie-list-container">
          <h1 className="movies-genre">Action Movies</h1>
          <MoviesSlider movieData={actionList} />

          <h1 className="movies-genre">Comedy Movies</h1>
          <MoviesSlider movieData={comedyList} />
        </div>
      </div>
    )
  }
}

export default PrimeVideo

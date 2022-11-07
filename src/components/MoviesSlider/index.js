// Write your code here
import Slider from 'react-slick'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieData} = props

  const renderNextArrow = () => (
    <p style={{display: 'inline', color: 'white', backgroundColor: 'yellow'}}>
      front
    </p>
  )

  const renderPrevArrow = () => (
    <p style={{display: 'inline', color: 'white', backgroundColor: 'yellow'}}>
      back
    </p>
  )

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    swipeToSlide: true,
    nextArrow: renderNextArrow(),
    prevArrow: renderPrevArrow(),
  }
  return (
    <Slider {...settings}>
      {movieData.map(movie => (
        <MovieItem movieDetails={movie} key={movie.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider

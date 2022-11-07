// Write your code here
import ReactPlayer from 'react-player'
import Popup from 'reactjs-popup'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {movieDetails} = props
  const {thumbnailUrl, videoUrl, id} = movieDetails
  console.log(movieDetails)

  return (
    <Popup
      modal
      trigger={
        <div className="each-slide-item" key={id}>
          <img src={thumbnailUrl} alt="thumbnail" className="movie-thumbnail" />
        </div>
      }
      className="popup-content"
    >
      {close => (
        <div className="video-modal-bg">
          <div className="close-btn-bg">
            <button className="close-btn" type="button" onClick={close}>
              <IoMdClose className="close" />
            </button>
          </div>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem

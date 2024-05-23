// eslint-disable-next-line no-unused-vars
import {Link, Redirect} from 'react-router-dom'
import Header from '../Header'
import './index.css'

const Home = props => {
  const onRedirectToJobs = () => {
    const {history} = props
    history.replace('/flat')
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <h1 className="home-heading">
          Find The Flats That <br />
          Fits Your Life
        </h1>
        <p className="home-paragraph">
          Millions of people are searching for Flats, Houses, room
          reviews. Find the flats based on your requirment.
        </p>
        <Link className="retry-btn-link" to="/jobs">
          <button
            className="home-jobs-button"
            type="button"
            onClick={onRedirectToJobs}
          >
            Find Flats
          </button>
        </Link>
      </div>
    </>
  )
}

export default Home
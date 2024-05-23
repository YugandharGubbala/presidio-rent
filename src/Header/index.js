/* eslint-disable react/button-has-type */
import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <nav className="nav-container">
      <ul className="header-ul-container">
        <li className="logo-container">
          <Link className="link" to="/">
            <h1 className='logoname'>Rentify</h1>
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link className="link" to="/">
            <ImHome className="home-icon" />
            <h1 className="nav-text">Home</h1>
          </Link>
          <Link className="link" to="/flat">
            <h1 className="nav-text">Flats</h1>

            <button className="home-jobs-btn"> Flats</button>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button type="button" className="btn-logout" onClick={onClickLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
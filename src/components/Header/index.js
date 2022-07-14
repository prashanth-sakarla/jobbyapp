import {AiFillHome} from 'react-icons/ai'
import {BsFillBriefcaseFill} from 'react-icons/bs'
import {FiLogOut} from 'react-icons/fi'
import {Link, withRouter} from 'react-router-dom'
import {Cookies} from 'js-cookie'

import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div>
      <div className="mobile-nav-bar">
        <div>
          <img
            className="logo"
            alt="website logo"
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          />
        </div>
        <div className="icons-container">
          <AiFillHome className="icon" />
          <BsFillBriefcaseFill className="icon" />
          <button
            onClick={onClickLogout}
            type="button"
            className="log-out-icon"
          >
            <FiLogOut className="icon" />
          </button>
        </div>
      </div>
      <div className="desktop-nav-bar">
        <img
          className="desktop-logo"
          alt="website logo"
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        />
        <div className="text-container">
          <Link className="link" to="/">
            <h1 className="text-content">Home</h1>
          </Link>
          <Link className="link" to="/jobs">
            <h1 className="text-content">Jobs</h1>
          </Link>
        </div>
        <button
          onClick={onClickLogout}
          type="button"
          className="log-out-button"
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)

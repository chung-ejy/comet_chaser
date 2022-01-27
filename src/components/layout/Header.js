import React, { useContext} from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/data/dataContext'
const Header = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user,logout} = dataContext

    const onClick = (e) => {
        logout()
    }
    const authLinks = (
    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <span className="navbar-text mr-3">
        <strong>{user != null ? `Welcome ${user.username}` : ''}</strong>
        </span>
        <li className="nav-item">
            <Link to="/onboarding" className="nav-link">
            Onboarding
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/profile" className="nav-link">
            Profile
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/backtest" className="nav-link">
            Backtesting
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/tracking" className="nav-link">
            Tracking
            </Link>
        </li>  
        <li className="nav-item">
        <button onClick={onClick} className="nav-link btn btn-info btn-sm text-light">
            Logout
        </button>
        </li>
    </ul>
    );
    
    const guestLinks = (
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
            <Link to="/" className="nav-link">
            Home
            </Link>
        </li> 
        <li className="nav-item">
            <Link to="/onboarding" className="nav-link">
            Onboarding
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/backtest" className="nav-link">
            Backtesting
            </Link>
        </li> 
        <li className="nav-item">
            <Link to="/register" className="nav-link">
            Register
            </Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className="nav-link">
            Login
            </Link>
        </li> 
        </ul>
    );
    
        return (
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="/">
                    CometChaser
                </a>
              </div>
                {isAuth ? authLinks : guestLinks}
            </div>
          </nav>
        );
}

export default Header

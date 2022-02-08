import React, { useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/data/dataContext'
const Header = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user,logout} = dataContext
    const [state,setState] = useState(false)
    const onClick = (e) => {
        e.preventDefault()
        logout()
        setState(false)
    }
    const onToggle = (e) => {
        e.preventDefault()
        setState(!state)

    }

    const onSelect = (e) => {
        setState(false)
    }
    
    const authLinks = (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link onClick={onSelect} to="/onboarding" className="nav-link">
                Onboarding
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={onSelect} to="/profile" className="nav-link">
                Profile
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={onSelect} to="/backtest" className="nav-link">
                Backtesting
                </Link>
            </li>
            <li className="nav-item">
                <Link onClick={onSelect} to="/tracking" className="nav-link">
                Tracking
                </Link>
            </li>  
            <li className="nav-item">
                <Link onClick={onSelect} onClick={onClick} className="nav-link" to="/">Logout</Link>
            </li>
        </ul>
    );
    
    const guestLinks = (
        <div className="navbar-nav">
            <Link onClick={onSelect} to="/" className="nav-item nav-link">
            Home
            </Link> 
            <Link onClick={onSelect} to="/onboarding" className="nav-item nav-link">
            Onboarding
            </Link>
            <Link onClick={onSelect} to="/backtest" className="nav-item nav-link">
            Backtesting
            </Link> 
            <Link onClick={onSelect} to="/register" className="nav-item nav-link">
            Register
            </Link>
            <Link onClick={onSelect} to="/login" className="nav-item nav-link">
            Login
            </Link> 
        </div>
    );
    
        return (
            
          <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top mb-5">
              <div className="container">
              <div className="col-4">
                    <button className="btn" onClick={onToggle} type="button">
                        <span className="navbar-toggler-icon" />
                    </button>  
                </div>
            <div className="row"> 
                <div className="col-8">         
                    <Link onClick={onSelect} className="navbar-brand nav-link" to="/">
                        CometChaser
                    </Link>
                    {state ? isAuth ? authLinks : guestLinks : null}
                </div>    
                </div>
            </div>
          </nav>
        );
}

export default Header

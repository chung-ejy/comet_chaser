import React, { useContext,useState} from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../../context/data/dataContext'
const Header = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user,logout} = dataContext
    const [state,setState] = useState(true)
    const onClick = (e) => {
        e.preventDefault()
        logout()
    }
    const onToggle = (e) => {
        e.preventDefault()
        setState(!state)

    }
    const authLinks = (
        <ul className="navbar-nav">
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
                <Link onClick={onClick} className="nav-link" to="/">Logout</Link>
            </li>
        </ul>
    );
    
    const guestLinks = (
        <div className="navbar-nav">
            <Link to="/" className="nav-item nav-link">
            Home
            </Link> 
            <Link to="/onboarding" className="nav-item nav-link">
            Onboarding
            </Link>
            <Link to="/backtest" className="nav-item nav-link">
            Backtesting
            </Link> 
            <Link to="/register" className="nav-item nav-link">
            Register
            </Link>
            <Link to="/login" className="nav-item nav-link">
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
                    <Link className="navbar-brand nav-link" to="/">
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

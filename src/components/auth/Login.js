import {React, useState, useContext} from 'react';
import { Link, Navigate } from 'react-router-dom'
import DataContext from "../../context/data/dataContext"
const Login = () => {
    const [state,setState] = useState({
        username:'',
        password:'',
    })
    const {login,isAuth} = useContext(DataContext)
    const onSubmit = (e) => {
        e.preventDefault()
        login(state)
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }
    const {
        username,
        password,
    } = state
    if (isAuth)  {
        return  <Navigate to="/profile"/>
    } else {
            return <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2 className="text-center">Login</h2>
                <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                    type="text"
                    className="form-control"
                    name="username"
                    onChange={onChange}
                    value={username}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                    type="password"
                    className="form-control"
                    name="password"
                    onChange={onChange}
                    value={password}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3">
                    Login
                    </button>
                </div>
                <p>
                    Don't have an account? <Link to="/register">Register</Link>
                </p>
                </form>
            </div>
            </div>
            }
};


export default Login
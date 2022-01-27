import {React, useState, useContext} from 'react';
import DataContext from "../../context/data/dataContext"
import { Navigate,Link } from 'react-router-dom'
const Register = () => {
    const {register,isAuth} = useContext(DataContext)

    const [state,setState] = useState({
        username:'',
        email:'',
        password:'',
        password2:''
    })

    const onSubmit = (e) => {
        e.preventDefault()
        register(state)
    }

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }
    const {
        username,
        email,
        password,
        password2
    } = state
    if (isAuth)  {
        return  <Navigate to="/profile"/>
    } else {
        return <div className="col-md-6 m-auto">
            <div className="card card-body mt-5">
                <h2 className="text-center">Register</h2>
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
                    <label>Email</label>
                    <input
                    type="email"
                    className="form-control"
                    name="email"
                    onChange={onChange}
                    value={email}
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
                    <label>Confirm Password</label>
                    <input
                    type="password"
                    className="form-control"
                    name="password2"
                    onChange={onChange}
                    value={password2}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary mt-3">
                    Register
                    </button>
                </div>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                </form>
            </div>
            </div>
    }
};


export default Register
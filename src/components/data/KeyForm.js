import React, { useContext,useState } from 'react'
import DataContext from '../../context/data/dataContext'

const KeyForm = () => {
    const dataContext = useContext(DataContext)
    const {user, isAuth,loading,updateKeys} = dataContext
    const [state,setState] = useState(
        {apikey:"",
        secret:"",
        passphrase:"",
        sandboxapikey:"",
        sandboxsecret:"",
        sandboxpassphrase:""
    })

    const onChange = (e) => {
        setState({...state,[e.target.name]:e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault()
        updateKeys(state)
        setState( {apikey:"",
        secret:"",
        passphrase:"",
        sandboxapikey:"",
        sandboxsecret:"",
        sandboxpassphrase:""
    })
    }
    return (loading || !isAuth || user == null ? "" :
        <div className="card card-body mt-4 mb-4">
            <h5>Coinbase Key Update Form</h5>
            <form onSubmit={onSubmit}>
                {Object.keys(state).map(key =>
                                (<div key={key}className=" row mt-2 form-group">
                                <label>{key}</label>
                                <input
                                type="password"
                                className="form-control"
                                name={key}
                                onChange={onChange}
                                value={state[key]}
                                />
                            </div>))}
                <div className="form-group row mt-2">
                    <div className="col">
                    <button type="submit" className="btn btn-primary form-control col">Update Keys</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default KeyForm

import React, { useContext } from 'react'
import DataContext from '../../context/data/dataContext'

const ProfileTable = () => {
    const dataContext = useContext(DataContext)
    const {user,loading, isAuth} = dataContext
    return ( loading || !isAuth ? "" :
        <div className="card card-body mt-4 mb-4">
             <h5>Account Info</h5>
            <table className="table table-responsive-sm">
                <tbody> 
                        {Object.keys(user).map(key => 
                            ["username","email"].includes(key) 
                            ?                     <tr><td>{key}</td><td key={key}>{user[key]}</td></tr>
                            : null)}
                </tbody>
            </table>
        {/* // </div> */}
        </div>
    )
}

export default ProfileTable

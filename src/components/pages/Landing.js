import React, {useContext,useEffect} from 'react';
import DataContext from "../../context/data/dataContext"
import Alert from "../alerts/Alert"

const Landing = () => {
    const dataContext = useContext(DataContext)
    const {isAuth,user,loadUser} = dataContext
    useEffect(() => {
            loadUser()
    },//eslint-disable-next-line
    [user,isAuth]
    );
    return (<div className='card text-center'>
                <div className='card-body'>
                             <Alert />
                            <h1 className="card-title justify-content-center">
                                CometChaser
                            </h1>
                        <p>
                            Welcome to CometChaser!
                            {isAuth ? `Hi ${user.username}` : `` }
                        </p>
            </div>
        </div>
    );
};

export default Landing

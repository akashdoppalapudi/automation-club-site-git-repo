import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './Login.css';

const Login = ({ authorized, setAuthorized }) => {

    const history = useHistory();

    const [credentials, setCredentials] = useState({
        'username':'',
        'password':''
    });

    const handleLogin = (e) => {
        e.preventDefault();
        if (credentials.username === process.env.REACT_APP_USERNAME){
            if (credentials.password === process.env.REACT_APP_PASSWORD){
                setAuthorized(true);
                history.push('/admin', authorized);
            }else{
                window.alert("Wrong Password!");
            }
        }else{
            window.alert("Wrong Credentials!");
        }
    };
    
    return(
        <div className="row" id="login-form">
            <div className="col-md-4"></div>
            <div className="col-md-4 col-offset-md-4">
                <h2>Login</h2>
            <form className="form-signin" onSubmit={ handleLogin }>
                <input type="text" className="form-control" placeholder="USERNAME" onChange={(e) => setCredentials({ ...credentials, username:e.target.value })} ></input>
                <input type="password" className="form-control" placeholder="PASSWORD" onChange={(e) => setCredentials({ ...credentials, password:e.target.value })} ></input>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
            </div>
            <div className="col-md-4"></div>
        </div>
    );
};

export default Login;
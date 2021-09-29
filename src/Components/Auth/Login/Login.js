import React, { useState } from 'react';
import axios from 'axios';
import { Link , Redirect} from 'react-router-dom';
import Cookies from 'js-cookie';

import './Login.css';

const Login = (props) => {
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handler 
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitHandler = () => {
        const data = {
            email, 
            password
        }
        console.log(data)
        axios.post('http://localhost:5000/api/v1/auth/login', data, {withCredentials: true})
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
            })
            .catch(error => console.log(error.message));
    }
    if(props.isLogin){
        return (
            <Redirect to="/" />
        )
    }else {
        // HTML file to show to the user 
        return (
            <div className="Container">
                <div class="container" id="container">
                    <div class="form-container sign-in-container">
                        <div className="form">
                            <h1>Login</h1>
                            <input type="email" placeholder="Email" onChange={emailHandler}/>
                            <input type="password" placeholder="Password"  onChange={passwordHandler} />
                            <a href="#">Forgot your password?</a>
                            <button onClick={submitHandler}>Login</button>
                        </div>
                    </div>
                    <div class="overlay-container">
                        <div class="overlay">
                            <div class="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <button class="ghost" id="signUp"><Link to="/auth/signup" > signup</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

};


export default Login;
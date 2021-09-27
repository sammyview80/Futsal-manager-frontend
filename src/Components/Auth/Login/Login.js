import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const Login = (props) => {
    console.log(props.isLogin)
    // Send params : { email, password}
    const [email , setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Handler 
    const emailHandler = (event) => {
        setEmail(event.target.value);
        console.log(email)
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        console.log(password)
    }

    const submitHandler = async() => {
        const data = {
            email, 
            password
        }
        axios.post('http://localhost:5000/api/v1/auth/login', data, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data);
                window.location.reload(false);
            })
            .catch(error => console.log(error.response.data));
    }
    if(props.isLogin){
        return (
            <div>You are logined!</div>
        )
    }else {
        // HTML file to show to the user 
        return (
            <div className="Container">
                <h3>Login</h3>
                    <div>
                        <h4>Email</h4>
                        <input type="email" name="InputEmail" placeholder='Email' onChange={emailHandler}></input>
                    </div>
                    <div>
                        <h4>Password</h4>
                        <input type='password' name="InputPassword" placeholder='Password' onChange={passwordHandler}></input>
                    </div>
                    <div>
                        <button type="submit" onClick={submitHandler} >Login</button>
                    </div>
            </div>
        )
    }

};


export default Login;
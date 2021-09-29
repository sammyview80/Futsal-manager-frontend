import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
 

const Signup = (props) => {
    console.log(props.isLogin)
    // Send params : { email, name , role, password}
    const [email , setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
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

    const nameHandler = (event) => {
        setName(event.target.value);
        console.log(name)
    }

    // RoleSelector
    const roleSelector = (event) => {
        console.log(role)
        setRole(event.target.value);
    }
    const submitHandler = async() => {
        const data = {
            email, 
            name, 
            role, 
            password
        }
        axios.post('http://localhost:5000/api/v1/auth/register', data, {withCredentials: true})
            .then(response => {
                
                console.log(response.data.token);
                window.location.reload(false);
                
            })
            .catch(error => console.log(error.message));
    }

    if(props.isLogin){
        return (
            <Redirect to='/' />
        )
    }else {
        // HTML file to show to the user 
    return (
        <div className="Container">
        <div class="container" id="container">
            <div class="form-container sign-in-container">
                <div className="form">
                    <h1>Sign Up</h1>
                    <input type="text" placeholder="Name" onChange={nameHandler}/>
                    <input type="email" placeholder="Email" onChange={emailHandler}/>
                    <input type="password" placeholder="Password"  onChange={passwordHandler} />
                       <div>
                     <h4 className="label" >Role</h4>
                      <select value={role} onChange={roleSelector}>
                                <option value="" >...</option>
                             <option value="publisher" >Publisher</option>
                              <option value="user">User</option>
                           </select>
                    </div>
                    <a></a>
                    <button onClick={submitHandler}>Sign Up</button>
                </div>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" id="signUp"><Link to="/donate" > Donate</Link></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
        // <div className="Singup">
        //     <h3 className="title">Signup for users</h3>
        //         <div>
        //             <h4 className="label">Name</h4>
        //             <input type="text" name="InputName" placeholder='Name' onChange={nameHandler}></input>
        //         </div>
        //         <div>
        //             <h4 className="label" >Role</h4>
        //                 <select value={role} onChange={roleSelector}>
        //                     <option value="" >...</option>
        //                     <option value="publisher" >Publisher</option>
        //                     <option value="user">User</option>
        //                 </select>
        //         </div>
        //         <div>
        //             <h4 className="label">Email</h4>
        //             <input type="email" name="InputEmail" placeholder='Email' onChange={emailHandler}></input>
        //         </div>
        //         <div>
        //             <h4 className="label">Password</h4>
        //             <input type='password' name="InputPassword" placeholder='Password' onChange={passwordHandler}></input>
        //         </div>
        //         <div>
        //             <button type="submit" onClick={submitHandler} >Login</button>
        //         </div>
        // </div>
    )
    }

};

export default Signup;
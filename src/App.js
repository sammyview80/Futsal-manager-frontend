import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Logout from './Components/Auth/Logout';
import Signup from './Components/Auth/Signup/Signup';
import CreateFutsal from './Components/Futsals/CreateFutsal/CreateFutsal';
import GetPublisherFutsals from './Components/Futsals/GetPublisherFutsal/GetPublisherFutsals';
import Navlinks from './Components/Navigation/Navlinks/Navlinks';
import News from './Components/News/News';
import Home from './Containers/Home/Home';
import useGeoLocation from './Helper/geoLocation';



function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}


  
function App() {
  const [isLogginIn, setIsLogginIn] = useState();
  const [role, setRole] = useState();
  // const location = useGeoLocation();

  const getMe = () => {
    axios.get('http://localhost:5000/api/v1/auth/me', {withCredentials: true} )
      .then(response => {
        setRole(response.data.data.role)
        console.log(role)
        setIsLogginIn(true)
      })
      .catch(error => {
        console.log(error.message)
        // Asses denied 
        setIsLogginIn(false)
      })
    ;
  
  }
  

  // Every time when you be in the website check the auth
  useEffect( () => {
    getMe();
  })
  return (
    <BrowserRouter>
    {/* { location.loaded ? JSON.stringify(location) : ""} */}
    <Navlinks isLogin={isLogginIn} role={role===undefined? role : capitalize(role)}/>
    <Switch>
      <Route path="/auth/login" exact component={() => <Login isLogin = {isLogginIn} />}/>
      <Route path="/news" exact component={() => <News full/>}/>
      <Route path="/auth/signup" exact component={() => <Signup isLogin = {isLogginIn} />}/>
      <Route path="/create-futsal" exact component={CreateFutsal}/>
      <Route path="/futsals/my" exact component={GetPublisherFutsals}/>
      <Route path="/auth/logout" exact component={Logout}/>
      <Route path="/" exact component={() => <Home isLogin={isLogginIn} />}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
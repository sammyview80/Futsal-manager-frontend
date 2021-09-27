import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Components/Auth/Login/Login';
import Logout from './Components/Auth/Logout';
import Signup from './Components/Auth/Signup/Signup';
import CreateFutsal from './Components/Futsals/CreateFutsal';
import GetPublisherFutsals from './Components/Futsals/GetPublisherFutsals';
import Navlinks from './Components/Navigation/Navlinks/Navlinks';
import News from './Components/News/News';
import Home from './Containers/Home/Home';
import useGeoLocation from './Helper/geoLocation';


let NewsFetch = [];

function capitalize(s)
{
    return s[0].toUpperCase() + s.slice(1);
}

const FetchNews = () => {
  axios.get('http://127.0.0.1:8000/api/fetch-news/')
    .catch(error => console.log(error.message)); // For reloading the news
  axios.get('http://127.0.0.1:8000/api/getskysportsnews/')
    .then(response => {
      NewsFetch = response.data;
    }).catch(error => console.log(error.message));
}
FetchNews();
  
function App() {
  const [isLogginIn, setIsLogginIn] = useState();
  const [role, setRole] = useState();
  const location = useGeoLocation();

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
    {(NewsFetch.length === 0)? <div>Loading</div>: <News NewsFetch={NewsFetch} />}
    <Switch>
      <Route path="/auth/login" exact component={() => <Login isLogin = {isLogginIn} />}/>
      <Route path="/news" exact component={() => <News full NewsFetch={NewsFetch}/>}/>
      <Route path="/auth/signup" exact component={() => <Signup isLogin = {isLogginIn} />}/>
      <Route path="/create-futsal" exact component={CreateFutsal}/>
      <Route path="/futsals/my" exact component={GetPublisherFutsals}/>
      <Route path="/auth/logout" exact component={Logout}/>
      <Route path="/" exact component={Home}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../../Search/Search';

import './Navlinks.css';

const Navlinks = (props) => {
    return (
        <div>
            <div className="Navs">
                <div className="Navs-start">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/News'>News</Link></li>
                </div>
                {/* <div className="Navs-search">
                    <li><Search /></li>
                </div> */}
                <div className="Navs-end">
                    {props.isLogin && props.role==='User' || props.role=="Publisher"? <li><Link to="/reservation/my">Reservations</Link></li> : ''}
                    {props.isLogin && props.role==='Publisher'? <li><Link to="/futsals/my">My profile</Link></li> : ''}
                    {props.isLogin && props.role==='Publisher'? <li><Link to="/create-futsal">Create Futsal</Link></li> : ''}
                    {props.isLogin? <li>{props.role}</li> : <li><Link to='/auth/signup'>Signup</Link></li>}
                    {props.isLogin? <li><Link to="/auth/logout">Logout</Link></li> : <li><Link to='/auth/login'>Login</Link></li>}
                    <Link to='/donate' class="btn btn-primary navbar-btn" title="">Donate</Link>
                </div>
            </div>
        </div>
    );
};

export default Navlinks;
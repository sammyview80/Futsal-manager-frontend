import React from 'react';
import { Link } from 'react-router-dom';
import GetAllFutsals from '../../Components/Futsals/GetAllFutsal/GetAllFutsals';
import News from '../../Components/News/News';
import './Home.css';

const Home = (props) => {
    return (
        <div>
            <News />
            <div className="white-text-container background-image-container">
            <div className="container">
                <div className="row">
                
                    <div className="col-md-6">
                        <h1>Welcome to FutsalManager</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                            et dolore magna aliqua. Adipiscing commodo elit at imperdiet dui accumsan sit. Ipsum dolor sit
                            amet consectetur adipiscing elit. </p>
                        <Link to='/donate' title="" className="btn btn-lg btn-primary">Donate</Link>
                    </div>

                </div>
            </div>
        </div>
            <GetAllFutsals isLogin={props.isLogin} />
        </div>
    );
};

export default Home;
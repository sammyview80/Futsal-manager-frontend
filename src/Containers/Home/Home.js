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
                        <h1>Welcome to your own futsal site</h1>
                        <p> PLAY FUTSAL AT EASE.
                            </p>
                            <p>
                                We bring futsal around you much closer .
                                </p>

                              
                            <p>

                            </p>
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
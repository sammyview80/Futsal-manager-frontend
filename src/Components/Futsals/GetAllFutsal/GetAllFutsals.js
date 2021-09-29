import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import FutsalReservation from '../FutsalReservation/FutsalReservation';

import './GetAllFutsal.css';

const GetAllFutsals = (props) => {
    const [futsals, setFutsals] = useState([]);
    const [reservationFutsalId, setReservatinFutsalId] = useState();
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/futsals',{
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data.data);
                setFutsals(response.data.data);
            })
            .catch(error => console.log(error.message));
    }, [])

    const reservationHandler = (futsalId) => {
        setReservatinFutsalId(futsalId)
    }

    const futsalList  = [];
    futsals.forEach(element => {
        futsalList.push(
            <div className="card">
                    <div className='image'>
                            <img src={element.photo} />
                            </div>
                        <div className="info">
                            <li>Name: {element.name}</li>
                            <li>Description: {element.description}</li>
                            <li>ContactNumber: {element.contactNumber}</li>
                            <li>Email: {element.email}</li>
                            <li>Price: {element.price}</li>
                            <li>Status: {element.status}</li>
                            <li>Address: {element.address}</li>
                            <li>AverageRating: {element.averageRating}</li>
                            <li>OpenAt: {element.openAt}</li>
                            <li>CloseAt: {element.closeAt}</li>
                            
                            {reservationFutsalId === element.id || !props.isLogin? null : <div className="btn btn-primary navbar-btn" onClick={() => reservationHandler(element.id)}>Reservation</div> }
                            <div>
                            {reservationFutsalId === element.id ? <FutsalReservation futsalId={reservationFutsalId} setFutsalId={setReservatinFutsalId}/> : ''}
                            </div>
                        </div>
                        
                        
                </div>
        )
    })

    return (
        <div className="GetAllFutsal">
            {futsalList}
        </div>
    );
};

export default GetAllFutsals;
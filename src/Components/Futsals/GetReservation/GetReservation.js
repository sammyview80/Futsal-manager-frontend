import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

import './GetReservation.css';

const GetReservation = () => {
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/v1/reservations`, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                // console.log(response.data);
                setReservations(response.data.data);
            })
            .catch(error => {
                console.log(error)
            });
    }, []);

    // Handler 
    const reservationDeleteHandler = (reservationId) => {
        axios.delete(`http://localhost:5000/api/v1/reservations/${reservationId}/`, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data.data);
                setReservations(response.data.data);
                console.log('Deleting reservation sucess')
                // setReservations(response.data.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    const reservationList = [];

    reservations.forEach(element => {
        reservationList.push(
        <div className="card">
                <div className="info">
                    <li>Name: {element.reserverName}</li>
                    <li>Description: {element.description}</li>
                    <li>ContactNumber: {element.verifiedNo}</li>
                    <li>Email: {element.email}</li>
                    <li>OpenAt: {element.startsAt}</li>
                    <li>CloseAt: {element.endsAt}</li>
                    <div className="btn btn-primary navbar-btn" onClick={() => reservationDeleteHandler(element._id)}>Delete</div>
                </div>
        </div>
        )
    })
    return (
        <div className="ResevationContainer" >
            <div> <h1>Your reservations:</h1></div>
            <div className="GetReservation">
                {reservations.length === 0? <div>Loading</div>: reservationList}
            </div>
        </div>
    );
};

export default GetReservation;
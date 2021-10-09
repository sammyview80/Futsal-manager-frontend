import axios from 'axios';
import React, {useState} from 'react';

import './ShowReservationForFutsal.css';

const ShowReservationForFutsal = (props) => {
    const reservationList = [];

    // Handler 
    const reservationDeleteHandler = (reservationId) => {
        axios.delete(`http://localhost:5000/api/v1/reservations/${reservationId}/`, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data);
                props.setReservations(response.data.data);
            })
            .catch(error => {
                console.log(error)
            });
    }

    props.reservations.forEach(element => {
        if(element.futsal === props.futsalId){
            console.log('Yes matring futsalsdf')
            reservationList.push(
                <div className="card">
                            <li>Name: {element.reserverName}</li>
                            <li>Description: {element.description}</li>
                            <li>ContactNumber: {element.verifiedNo}</li>
                            <li>Email: {element.email}</li>
                            <li>StartsAt: {element.startsAt}</li>
                            <li>EndsAt: {element.endsAt}</li>
                            <div className="btn btn-primary navbar-btn" onClick={() => reservationDeleteHandler(element._id)}>Delete</div>
                </div>
                )
        }
    })
    return (
        <div className="ShowReservationForFutsal">
            <h1>Reservations: </h1>
            {reservationList.length === 0? 'No Reservation..' : reservationList}
        </div>
    );
};

export default ShowReservationForFutsal;
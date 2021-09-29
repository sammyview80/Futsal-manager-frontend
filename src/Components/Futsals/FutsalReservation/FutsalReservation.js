import axios from 'axios';
import React, {useState} from 'react';

import './FutsalReservation.css';

const FutsalReservation = (props) => {
    const [email , setEmail] = useState("");
    const [reserverName, setReserverName] = useState("");
    const [verifiedNo, setVerifiedNo] = useState("");
    const [description, setDescrition] = useState("");
    const [startsAt, setStartAt] = useState();
    const [endsAt, setEndAt] = useState();
    const [error, setError] = useState();

    // Handler 
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const nameHandler = (event) => {
        setReserverName(event.target.value);
    }
    const VerifiedNoHandler = (event) => {
        setVerifiedNo(event.target.value);
    }

    const descriptionHandler = (event) => {
        setDescrition(event.target.value);
    }
    const startAtHandler = (event) => {
        setStartAt(event.target.value);
    }
    const endAtHandler = (event) => {
        setEndAt(event.target.value);
    }
    const submitHandler = async() => {
        const data = {
            email, 
            reserverName,
            description,
            verifiedNo,
            startsAt,
            endsAt
        }
        axios.post(`http://localhost:5000/api/v1/futsals/${props.futsalId}/reservations`, data, {
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data);
                console.log(response.data.message);
                setError(response.data.message);
                // props.setFutsalId(undefined); 
            })
            .catch(error => {
                // setError(error.message);
                console.log(error)
            });
    }
    return (
        <div className="FutsalReservation">
            <p>{error === undefined? '': <div className="Error">{error}</div>}</p>
            <p>Please provide valid information: </p>
            <div className="Fields">
            <div className="Input-fields">
                <input type='text' placeholder="Name" onChange={nameHandler}/>
                <input type='email' placeholder="Email" onChange={emailHandler}/>
                <input type='text' placeholder="Verified No" onChange={VerifiedNoHandler} />
                <input type='text' placeholder="Desciption"  onChange={descriptionHandler}/>
                <input type="text" placeholder="Start At" onChange={startAtHandler} />
                <input type='text' placeholder="End At"  onChange={endAtHandler}/>
            </div>
            <div className="btn btn-primary navbar-btn" onClick={submitHandler}>Proceed</div>
        </div>
        </div>
    );
};

export default FutsalReservation;
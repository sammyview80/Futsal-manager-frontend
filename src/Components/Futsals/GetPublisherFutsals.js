import axios from 'axios';
import React, {useEffect, useState} from 'react';


const GetPublisherFutsals = () => {
    const [myFutsals, setMyFutsals] = useState([]);
    useEffect( () => {
        axios.get('http://localhost:5000/api/v1/futsals/my',{
            headers: {
              'Content-Type': 'application/json'
            },
            withCredentials: true
          })
            .then(response => {
                console.log(response.data.data);
                setMyFutsals(response.data.data);
            })
            .catch(error => console.log(error.response.data));
    }, [])


    const onDeleteFutsal = (id) => {
        console.log('Deleted Clicked!')
        axios.delete(`http://localhost:5000/api/v1/futsals/${id}/`,
            {withCredentials: true}
          )
            .then(response => {
                console.log(response.data);
                setMyFutsals(response.data.data)
            })
            .catch(error => console.log(error));
    }


    let myFutsalsList = [];
    myFutsals.forEach(element => {
            myFutsalsList.push(<ol>
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
                <button type="button" onClick={() => onDeleteFutsal(element._id)}>Delete</button>
            </ol>)
    })
    return (
        <div>
            {myFutsalsList}
        </div>
    );
};

export default GetPublisherFutsals;
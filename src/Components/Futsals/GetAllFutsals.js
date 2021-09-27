import axios from 'axios';
import React, {useEffect, useState} from 'react';

const GetAllFutsals = () => {
    const [futsals, setFutsals] = useState([]);
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

    const futsalList  = [];
    futsals.forEach(element => {
        futsalList.push(<ol>
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
        </ol>)
    })

    return (
        <div>
            {futsalList}
        </div>
    );
};

export default GetAllFutsals;
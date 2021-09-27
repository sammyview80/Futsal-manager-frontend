import axios from 'axios';
import React, {useState} from 'react';


const CreateFutsal = () => {
    const [error, setError] = useState();
    const [ownerName , setOwnerName] = useState();
    const [ownerAddress , setOwnerAddress] = useState();
    const [ownerEmail , setOwnerEmail] = useState();
    const [ownerContact , setOwnerContact] = useState();
    const [status , setStatus] = useState("");
    const [photo , setPhoto] = useState();
    const [contactNumber , setContactNumber] = useState();
    const [description , setDescription] = useState();
    const [email , setEmail] = useState("");
    const [price , setPrice] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [averageRating, setAverageRating] = useState("");
    const [openAt, setOpenAt] = useState("");
    const [closeAt, setCloseAt] = useState("");

    // Handler 
    const emailHandler = (event) => {
        setEmail(event.target.value);
    }
    const statusHandler = (event) => {
        setStatus(event.target.value);
    }
    const contactNumberHandler = (event) => {
        setContactNumber(event.target.value);
    }

    const descriptionHandler = (event) => {
        setDescription(event.target.value);
    }
    const priceHandler = (event) => {
        setPrice(event.target.value);
    }
    const addressHandler = (event) => {
        setAddress(event.target.value);
    }
    const averageRatingHandler = (event) => {
        setAverageRating(event.target.value);
    }
    const openAtHandler = (event) => {
        setOpenAt(event.target.value);
    }
    const closeAtHandler = (event) => {
        setCloseAt(event.target.value);
    }
    const nameHandler = (event) => {
        setName(event.target.value);
    }
    const ownerNameHandler = (event) => {
        setOwnerName(event.target.value);
    }
    const ownerContactHandler = (event) => {
        setOwnerContact(event.target.value);
    }
    const ownerEmailHandler = (event) => {
        setOwnerEmail(event.target.value);
    }


    const ownerAddressHandler = (event) => {
        setOwnerAddress(event.target.value);
    }

    const submitHandler = async() => {
        
        const data = {
            owner: {
                name: ownerName,
                address: ownerAddress,
                contact: ownerContact,
                email: ownerEmail
            },
            status,
            photo: null,
            name,
            contactNumber,
            description,
            email,
            price,
            address,
            averageRating,
            openAt,
            closeAt
        }
        axios.post('http://localhost:5000/api/v1/futsals', data, {withCredentials: true})
            .then(response => {
                console.log(response.data)
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);
            });
    }

    
    return (
        <div className="Singup">
            {error}
            <h3 className="title">Register futsal</h3>
                <div>
                    <h4 className="label">Owner Name</h4>
                    <input type="text" name="InputName" placeholder='Owner Name' onChange={ownerNameHandler}></input>
                </div>
                <div>
                    <h4 className="label">Owner Address</h4>
                    <input type="text" name="InputName" placeholder='Owner Address' onChange={ownerAddressHandler}></input>
                </div>
                <div>
                    <h4 className="label">Owner Email</h4>
                    <input type="text" name="InputName" placeholder='Owner Email' onChange={ownerEmailHandler}></input>
                </div>
                <div>
                    <h4 className="label">Owner Contact</h4>
                    <input type="text" name="InputName" placeholder='Owner Contact' onChange={ownerContactHandler}></input>
                </div>
                <div>
                    <h4 className="label" >Status</h4>
                        <select value={status} onChange={statusHandler}>
                            <option value="" >...</option>
                            <option value="open" >Open</option>
                            <option value="close">Close</option>
                        </select>
                </div>
                <div>
                    <h4 className="label">Name</h4>
                    <input type="text" name="InputEmail" placeholder='Name' onChange={nameHandler}></input>
                </div>
                <div>
                    <h4 className="label">Description</h4>
                    <input type="text" name="InputEmail" placeholder='Description' onChange={descriptionHandler}></input>
                </div>
                <div>
                    <h4 className="label">ContactNumber</h4>
                    <input type="text" name="InputEmail" placeholder='ContactNumber' onChange={contactNumberHandler}></input>
                </div>
                <div>
                    <h4 className="label">Price</h4>
                    <input type="text" name="InputEmail" placeholder='Price' onChange={priceHandler}></input>
                </div>
                <div>
                    <h4 className="label">Address</h4>
                    <input type="text" name="InputEmail" placeholder='Address' onChange={addressHandler}></input>
                </div>
                <div>
                    <h4 className="label">AverageRating</h4>
                    <input type="text" name="InputEmail" placeholder='AverageRating' onChange={averageRatingHandler}></input>
                </div>
                <div>
                    <h4 className="label">OpenAt</h4>
                    <input type="text" name="InputEmail" placeholder='OpenAt' onChange={openAtHandler}></input>
                </div>
                <div>
                    <h4 className="label">CloseAt</h4>
                    <input type="text" name="InputEmail" placeholder='CloseAt' onChange={closeAtHandler}></input>
                </div>
                <div>
                    <h4 className="label">Email</h4>
                    <input type="email" name="InputEmail" placeholder='Email' onChange={emailHandler}></input>
                </div>
                <div>
                    <button type="submit" onClick={submitHandler} >Register Futsal</button>
                </div>
        </div>
    )
};

export default CreateFutsal;
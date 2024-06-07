import React, { useEffect, useState } from 'react'
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
    const [userData, setUserData] = useState([]);
    const params = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`)
            .then(response => response.json())
            .then(userInfo => setUserData(userInfo))
            .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            {
                userData.length === 0
                    ? <Spinner animation='border' size='xl' />
                    : <>
                        <h1>USER DETAILS</h1>
                        <h2>{userData.name}</h2>
                        <h2>{userData.email}</h2>
                        <h2>{userData.phone}</h2>
                    </>
            }
        </Container>
    )
}

export default UserDetails;
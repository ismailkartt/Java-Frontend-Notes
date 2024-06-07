import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(userInfo => setData(userInfo))
            .catch(error => console.log(error))
    }, [])

    return (
        <Container>
            <h1>USERS</h1>
            <ul>
                {
                    data.map(user => <li key={user.id}>
                        <Link to={`/users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>)
                }
            </ul>
        </Container>
    )
}

export default Users;
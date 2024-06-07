import React, { useEffect, useState } from 'react'
import { Container, ListGroup } from 'react-bootstrap'

const Fetch1 = () => {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer djkgnirtugidtjnhkfhnujfithujfiyjhfikh"
            }
        })
            .then(response => response.json())
            .then(data => {
                // console.log(data);
                setUsers(data);
            })
    }, []);

    return (
        <Container>
            <h1>FETCH 1</h1>
            <ListGroup>
                {
                    users.map(user => {
                        // console.log(user);
                        return (
                            <ListGroup.Item key={user.id}>
                                {user.name}
                            </ListGroup.Item>
                        )
                    })
                }
            </ListGroup>
        </Container>
    )
}

export default Fetch1
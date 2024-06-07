import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UserCard from './02-user-card';

const BASE_URL = process.env.REACT_APP_API_URL;

const Fetch2 = () => {
    const [users, setUsers] = useState();
    const [flag, setFlag] = useState(false);

    // console.log(BASE_URL);
    // 1 - oncelikle iki tane olusturulacak

    useEffect(() => {
        fetch(`${BASE_URL}/react-basics/users`)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUsers(data);
            })
    }, [flag]);

    const userInfo = {
        avatar: "https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60",
        firstName: "Laurian",
        lastName: "LAURIAN",
        birthDate: "1968-04-24T03:58:45.988Z",
        email: "example@hotmail.com",
        username: "llllll5555",
    }

    const handleCreate = async (payload) => {
        await fetch(`${BASE_URL}/react-basics/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        })
            .then((response) => {
                // console.log(response);
            })
            .catch((error) => {
                // console.log(error);
            })

        setFlag(prevFlag => !prevFlag)
    }

    return (
        <Container className='my-5'>
            <h1>MOCK API</h1>
            <Row className='row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 gy-3'>
                {
                    users && users.map((user) => (
                        <Col key={user.id}>
                            <UserCard {...user} />
                        </Col>
                    ))
                }
            </Row>
            <Button onClick={() => handleCreate(userInfo)}>CREATE USER</Button>
        </Container>
    )
}

export default Fetch2
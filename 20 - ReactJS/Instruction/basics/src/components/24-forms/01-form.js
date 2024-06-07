import React, { useState } from 'react'
import { Container } from 'react-bootstrap';
import axios from "axios"

const Form1 = () => {
    const [username, setUsername] = useState("");


    const handleChange = (e) => {
        // console.log("e.target.value: ", e.target.value)
        setUsername(e.target.value)
    };

    // console.log("render oldu mu?")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post("https://jsonplaceholder.typicode.com/users", {
            username: username
        })
    }

    return (
        <Container>
            <h1>FORM 1</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <br />
                <input
                    type="text"
                    id='username'
                    value={username}
                    onChange={handleChange}
                />
                <button type='submit'>SEND</button>
            </form>
        </Container>
    )
}

export default Form1
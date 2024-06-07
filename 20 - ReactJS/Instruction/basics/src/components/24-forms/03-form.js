import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Form3 = () => {
    const [form, setForm] = useState({
        firstName: "John",
        lastName: "Doe",
        email: "example@gmail.com",
        phoneNumber: "+999999999",
    });


    // onceki state ile su anki state im ayni, o zaman neden yeniden render yapayim ki?
    // setForm({firstName: e.target.value})
    // form = {firstName: e.target.value}

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(form);
    };

    return (
        <Container>
            <h1>Form 3</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your first name'
                        name='firstName'
                        value={form.firstName}
                        onChange={(e) => setForm(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your last name'
                        name='lastName'
                        value={form.lastName}
                        onChange={(e) => setForm(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        name='email'
                        value={form.email}
                        onChange={(e) => setForm(prev => ({ ...prev, email: e.target.value }))}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type='tel'
                        placeholder='Enter your phone number'
                        name='phoneNumber'
                        value={form.phoneNumber}
                        onChange={(e) => setForm(prev => ({ ...prev, phoneNumber: e.target.value }))}
                    />
                </Form.Group>
                <Button
                    variant='danger'
                    type='submit'
                    className='w-100'
                >
                    SEND
                </Button>
            </Form>
        </Container>
    )
}

export default Form3;
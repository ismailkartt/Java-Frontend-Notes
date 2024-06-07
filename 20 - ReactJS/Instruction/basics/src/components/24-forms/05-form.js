import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useParams } from 'react-router-dom';

const Form5 = () => {
    const [form, setForm] = useState({
        firstName: 'Jane',
        lastName: 'Doe',
        email: 'janedoe@example.com',
        phoneNumber: '+999999999',
        gender: 'kadin',
        terms: false
    });
    const params = useParams();

    console.log(params);

    const [error, setError] = useState({
        firstName: false,
        lastName: false,
        email: false,
        phoneNumber: false,
        gender: false,
        terms: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.terms) {
            setError(prev => ({ ...prev, terms: true }))
            return;
        }
        setError(prev => ({ ...prev, terms: false }));

        if (form.firstName.length < 3) {
            setError(prev => ({ ...prev, firstName: true }))
            return;
        }
        setError(prev => ({ ...prev, firstName: false }));


        console.log("Form gonderildi");
    };

    const handleChange = (e) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value
        }))
    };


    return (
        <Container>
            <h1>Form 5 — Manuel Dogrulama</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId='firstName' className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='firstName'
                        placeholder='Enter your first name'
                        value={form.firstName}
                        onChange={handleChange}
                    />
                    {
                        error.firstName
                        &&
                        <p className='text-danger'>
                            *First name must be at least 3 characters
                        </p>
                    }
                </Form.Group>
                <Form.Group controlId='lastName' className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        name='lastName'
                        placeholder='Enter your last name'
                        value={form.lastName}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='text'
                        name='email'
                        placeholder='Enter your email'
                        value={form.email}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId='phoneNumber' className='mb-3'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                        type='text'
                        name='phoneNumber'
                        placeholder='Enter your phone number'
                        value={form.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Gender</Form.Label>
                    <Form.Group>
                        <Form.Check
                            type='radio'
                            label="Woman"
                            name="gender"
                            value="woman"
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            type='radio'
                            label="Man"
                            name="gender"
                            value="man"
                            onChange={handleChange}
                            inline
                        />
                        <Form.Check
                            type='radio'
                            label="Other"
                            name="gender"
                            value="other"
                            onChange={handleChange}
                            inline
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group controlId='terms' className='mb-3'>
                    <Form.Check
                        label="I accept the terms and conditions"
                        type='checkbox'
                        name='terms'
                        checked={form.terms}
                        onChange={handleChange}
                    />
                    {
                        error.terms
                        &&
                        <p className='text-danger'>
                            *You must accept the terms and conditions
                        </p>
                    }
                </Form.Group>
                <Button variant='warning' className='w-100' type='submit'>SEND</Button>
            </Form>
        </Container>
    )
}

export default Form5
import { useFormik } from 'formik'
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import * as Yup from 'yup';
import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const FormikYup2 = () => {

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            id: ''
        },

        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "En az 2 karakter olmalidir")
                .required("Isim kismi bos birakilamaz"),
            lastName: Yup.string()
                .min(2, "En az 2 karakter olmalidir")
                .required("Soyisim kismi bos birakilamaz"),
            email: Yup.string()
                .email("Gecerli bir email girinizi")
                .required("Email kismi bos birakilamaz"),
            password: Yup.string()
                .min(6, "Sifre en az 6 karakter olmalidir")
                .max(15, "Sifre en fazla 15 karakter olmalidir")
                .required("Sifre kismi bos birakilamaz"),
        }),

        onSubmit: async (values) => {
            const dto = {
                firstName: values.firstName,
                lastName: values.lastName,
                email: values.email,
                password: values.password
            }

            try {
                const response = await axios.post(`${BASE_URL}/react-basics/user-information`, values)
                console.log(response.data);
                alert(JSON.stringify(response.data));
            } catch (error) {
                alert("Hata olustu");
            } finally {
                console.log("Gittik geldik")
            }
        }
    })

    const handleDelete = () => {
        axios.delete(`${BASE_URL}/react-basics/user-information/${formik.values.id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
            .finally(() => console.log("Biz de gittik geldik"))
    }

    return (
        <Container>
            <h1>Formik Yup 2</h1>
            <p>*Doldurulmasi zorunlu olan alanlar</p>
            <Form noValidate onSubmit={formik.handleSubmit}>
                <Form.Group controlId='id'>
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your id'
                        {...formik.getFieldProps("id")}
                    />
                </Form.Group>
                <Form.Group controlId='firstName' className='mb-3'>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your first name'
                        {...formik.getFieldProps("firstName")}
                    />
                    {
                        formik.errors.firstName && formik.touched.firstName &&
                        <p className='text-danger'>
                            {formik.errors.firstName}
                        </p>
                    }
                </Form.Group>
                <Form.Group controlId='lastName' className='mb-3'>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter your last name'
                        {...formik.getFieldProps("lastName")}
                    />
                    {
                        formik.errors.lastName && formik.touched.lastName &&
                        <p className='text-danger'>
                            {formik.errors.lastName}
                        </p>
                    }
                </Form.Group>
                <Form.Group controlId='email' className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter your email'
                        {...formik.getFieldProps("email")}
                    />
                    {
                        formik.errors.email && formik.touched.email &&
                        <p className='text-danger'>
                            {formik.errors.email}
                        </p>
                    }
                </Form.Group>
                <Form.Group controlId='password' className='mb-3'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter your password'
                        {...formik.getFieldProps("password")}
                    />
                    {
                        formik.errors.password && formik.touched.password &&
                        <p className='text-danger'>
                            {formik.errors.password}
                        </p>
                    }
                </Form.Group>
                <Button
                    variant='success'
                    className='w-100'
                    type='submit'
                >
                    SEND FORM
                </Button>
                <Button variant='danger' onClick={handleDelete}>ID'LI VERIYI SIL</Button>
            </Form>
        </Container>
    )
}

export default FormikYup2
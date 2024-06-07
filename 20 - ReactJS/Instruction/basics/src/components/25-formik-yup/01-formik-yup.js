import { useFormik } from 'formik';
import React from 'react'
import { Container } from 'react-bootstrap';
import * as Yup from "yup";

const FormikYup1 = () => {

    const initialValues = {
        isminiz: '',
        sifreniz: ''
    }

    const validationSchema = Yup.object({
        isminiz: Yup.string().required("Isminiz zorunlu bir alandir. Bos birakmayiniz"),
        sifreniz: Yup.string().required("Sifreniz zorunlu bir alandir. Bos birakmayiniz")
    })

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: onSubmit
    })

    // console.log(formik.errors.sifreniz);
    // console.log(formik.touched);

    return (
        <Container className='my-5'>
            <h1>Formik Yup 1</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="isminiz">Isminiz</label>
                <br />
                <input
                    type="text"
                    name='isminiz'
                    id='isminiz'
                    placeholder='Lutfen isminizi giriniz'
                    value={formik.values.isminiz}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <br />
                {
                    formik.errors.isminiz
                    && formik.touched.isminiz &&
                    <p className='text-danger'>
                        *{formik.errors.isminiz}
                    </p>
                }
                <br />
                <label htmlFor="sifreniz">Sifreniz</label>
                <br />
                <input
                    type="password"
                    name='sifreniz'
                    id='sifreniz'
                    placeholder='Lutfen sifrenizi giriniz'
                    value={formik.values.sifreniz}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <br />
                {
                    formik.errors.sifreniz
                    && formik.touched.sifreniz &&
                    <p className='text-danger'>
                        *{formik.errors.sifreniz}
                    </p>
                }
                <br />
                <button type='submit'>FORMU GONDER</button>
            </form>
        </Container>
    )
}

export default FormikYup1

































































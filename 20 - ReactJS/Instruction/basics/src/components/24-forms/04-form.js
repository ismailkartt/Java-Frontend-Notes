import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap';

const formArray = [
    {
        id: 'ad',
        name: 'ad',
        label: 'Ad',
        type: 'text',
        placeholder: 'Adınızı giriniz'
    },
    {
        id: 'soyad',
        name: 'soyad',
        label: 'Soyad',
        type: 'text',
        placeholder: 'Soyadinizi giriniz'
    },
    {
        id: 'telefon',
        name: 'telefon',
        label: 'Telefon Numarasi',
        type: 'text',
        placeholder: 'Telefon numaranizi giriniz'
    }
]

const Form4 = () => {
    const [formData, setFormData] = useState({
        ad: '',
        soyad: '',
        telefon: '',
        cinsiyet: '',
        sozlesme: false
    });

    const handleChange = (e) => {
        // const [name, value] = e.target;

        // console.log(e.target.checked);

        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.type === "checkbox"
                ? e.target.checked
                : e.target.value
            // e.target.type === "checkbox" 
            // ? !prev[e.target.name] 
            // : e.target.value
        }))
    };

    // console.log(formData['ad']);
    // formData.ad === formData['ad']


    return (
        <Container className='my-5'>
            <h1>Form 4</h1>
            <Form>
                {
                    formArray.map((formItem) => (
                        <Form.Group key={formItem.id} className='mb-3'>
                            <Form.Label htmlFor={formItem.id}>
                                {formItem.label}
                            </Form.Label>
                            <Form.Control
                                {...formItem}
                                value={formData[formItem.name]}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    ))
                }
                <Form.Group className='mb-3'>
                    <Form.Label>Cinsiyet</Form.Label>
                    <Form.Group>
                        <Form.Check
                            type='radio'
                            label="Kadin"
                            name="cinsiyet"
                            id="kadin"
                            value="kadin"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type='radio'
                            label="Erkek"
                            name="cinsiyet"
                            id="erkek"
                            value="erkek"
                            onChange={handleChange}
                        />
                        <Form.Check
                            type='radio'
                            label="Diger"
                            name="cinsiyet"
                            id="diger"
                            value="diger"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Check
                        type='checkbox'
                        label="Kullanım şartlarını kabul ediyorum"
                        name='sozlesme'
                        id='sozlesme'
                        checked={formData.sozlesme}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant='info' className='w-100'>GONDER</Button>
            </Form>
        </Container>
    )
}

export default Form4
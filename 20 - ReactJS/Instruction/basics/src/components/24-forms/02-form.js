import React, { useEffect, useRef, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';

const Form2 = () => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    // const [thirdNumber, setThirdNumber] = useState(0);
    // const birinciSayiRef = useRef(null);
    // const ikinciSayiRef = useRef(null);

    const toplam = +firstNumber + +secondNumber;
    // console.log("render")


    // const handleClick = () => {
    //     setThirdNumber(+birinciSayiRef.current.value + +ikinciSayiRef.current.value)
    // }

    return (
        <Container className='my-5'>
            <h1>Form 2</h1>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Birinci Sayi</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Birinci sayiyi giriniz'
                        value={firstNumber}
                        onChange={(e) => setFirstNumber(+e.target.value)}
                    // ref={birinciSayiRef}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Ikinci Sayi</Form.Label>
                    <Form.Control
                        type='number'
                        placeholder='Ikinci sayiyi giriniz'
                        value={secondNumber}
                        onChange={(e) => setSecondNumber(+e.target.value)}
                    // ref={ikinciSayiRef}
                    />
                </Form.Group>
                {/* <Button onClick={handleClick}>TOPLA</Button> */}
                <Form.Group className='mb-3'>
                    <Form.Label>Toplam: </Form.Label>
                    <Form.Control
                        type='number'
                        value={toplam}
                        disabled
                    />
                </Form.Group>
            </Form>
        </Container>
    )
}

export default Form2
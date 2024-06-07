import { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleCounter = (e) => {
        // dogrudan state'i manipule etmemiz gerektiginde setter fonksiyonunun icerisinde bir callback cagrilmasi gerekir. Cagrilan callback parametreden state'in son degerini alir. Return ifadesi icerisinde de state'in yeni degeri belirtilir.

        if (e.target.id === 'btnPlus') {
            setCounter((prev) => prev + 1);
        } else if (e.target.id === 'btnMinus') {
            setCounter((prev) => prev - 1);
        } else {
            setCounter(0);
        }
    }

    return (
        <Container>
            <h1>Counter 1</h1>
            <ButtonGroup>
                <Button
                    id='btnPlus'
                    variant='danger'
                    className='fs-1'
                    onClick={handleCounter}
                >+</Button>
                <Button
                    variant='secondary'
                    className='fs-1'
                    disabled>{counter}</Button>
                <Button
                    id='btnMinus'
                    variant='success'
                    className='fs-1'
                    onClick={handleCounter}
                >-</Button>
                <Button
                    id='btnReset'
                    className='fs-1'
                    onClick={handleCounter}
                >Sifirla</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Counter
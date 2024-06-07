import { useState } from 'react'
import { Button, ButtonGroup, Container } from 'react-bootstrap';

const State = () => {
    const [mode, setMode] = useState();

    let classNames = "bg-dark text-white p-5 text-center";

    if (mode === "light") {
        classNames = "bg-white text-dark p-5 text-center"
    }

    let number = 10;

    const handleDarkMode = () => {
        setMode("dark");
        console.log(mode);
    }

    // setMode("dark");

    return (
        <Container className={classNames}>
            <h1 className='text-uppercase'>DARK/LIGHT Mode</h1>
            <ButtonGroup>
                <Button variant='danger' onClick={() => number += 5}>Dark Mode</Button>
                <Button variant='success' onClick={handleDarkMode}>Light Mode</Button>

            </ButtonGroup>
            <p className='fs-2'>
                {number}
            </p>
        </Container>
    )
}

export default State
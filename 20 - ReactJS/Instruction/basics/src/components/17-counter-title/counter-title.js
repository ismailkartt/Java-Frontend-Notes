import { useEffect, useState } from 'react';
import { Button, Container } from "react-bootstrap";

const CounterTitle = () => {
    const [counter, setCounter] = useState(0);
    // const [isButtonClicked, setIsButtonClicked] = useState(false);

    const handleCounter = () => {
        setCounter(prev => prev + 1);
        // setIsButtonClicked(true);
    }

    useEffect(() => {
        // insallah ilk renderda calismaz
        if (counter > 0) {
            window.document.title = `Butona ${counter} kez tiklandi...`
        }
    }, [counter])

    return (
        <Container className='my-5 text-center'>
            <h1>Counter Title</h1>
            <h2>{counter} kere asagidaki butona tiklandi.</h2>
            <Button onClick={handleCounter}>Tikla</Button>
        </Container>
    )
}

export default CounterTitle;
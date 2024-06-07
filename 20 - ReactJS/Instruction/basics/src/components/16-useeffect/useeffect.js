import { useEffect, useState } from 'react';
import { Alert, Button, ButtonGroup, Container } from 'react-bootstrap';

const UseEffect = () => {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState('Mesaj');

    // console.log("Benim calisma siram 1")

    useEffect(() => {
        // console.log("Herhangi bir state degistiginde calisir")
    })

    useEffect(() => {
        // console.log("Yalnizca component mount edildikten sonra calisir")
        // verileri al gel, geldiginde de setData()
    }, []);

    useEffect(() => {
        // console.log("component ilk mount edildiginde calisir ve counter state'i degistiginde calisir")
    }, [counter])

    useEffect(() => {
        return () => {
            // console.log("component unmount edildiginde calisir")
        }
    }, [])


    // console.log("Benim calisma siram 2")

    const handleCounter = () => {
        setCounter(prev => {
            console.log("Counter degisti");
            return prev + 1;
        });
        console.log("Counter degisecek");
    }

    const newMessage = () => {
        // console.log("newMessage calisti");
        return "Yeni Mesaj";
    }


    return (
        <Container>
            <h1>useEffect Hook'u</h1>
            <Alert>
                {message} {newMessage()}
            </Alert>
            <ButtonGroup>
                <Button onClick={() => setMessage("STATE DEGISTI")}>MESAJI DEGISTIR</Button>
                <Button onClick={handleCounter} variant='danger'>{counter}</Button>
            </ButtonGroup>
        </Container>
    )
}

export default UseEffect;
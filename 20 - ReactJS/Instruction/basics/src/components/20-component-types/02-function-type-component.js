import React, { useEffect, useState } from 'react'
import { Button, Container } from 'react-bootstrap'

function FunctionTypeComponent() {
    const [counter, setCounter] = useState(0);

    // console.log("FTC, JavaScript yazabildigimiz kisim")

    useEffect(() => {
        // console.log("FTC: component mount edildiginde yani ilk render gerceklestikten sonra calisir")

        return () => {
            // console.log("FTC: component unmount edildiginde yani componentin kaldirildigi durumlarda calisir");
        }
    }, []);

    useEffect(() => {
        // console.log("FTC: component update edildiginde calisir")

        if (counter % 2 === 0) {
            // console.log("FTC: counter state'i cift sayiya esit")
        }
    }, [counter])


    return (
        <Container>
            <h1>FUNCTION TURUNDE COMPONENTLER</h1>
            <p>
                Function turunde componentler, class turunde componentlerin yerine kullanilabilir. Ancak function turunde componentlerin kendi icinde state tutamadigi icin, class turunde componentlerden daha az ozellik barindirir.
            </p>
            <Button onClick={() => setCounter(prev => prev + 1)}>+</Button>
            <span>{counter}</span>
        </Container>
    )
}

export default FunctionTypeComponent
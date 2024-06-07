import React, { useRef } from 'react'
import { Button, Container } from 'react-bootstrap'

const UseRef = () => {
    const inputRef = useRef(null);

    // console.log("Render gerceklesti");

    const handleIncrease = () => {
        //   console.log("calisti");
        inputRef.current.value = +(inputRef.current.value) + 1;
    }

    return (
        <Container>
            <h1>useRef Hook'u</h1>
            <p>useRef Hook'u, React uygulamalarinda DOM elemanlari uzerinde islem yapmak icin kullanilir.</p>
            <input type="button" value={0} ref={inputRef} />
            <Button onClick={handleIncrease}>TIKLA</Button>
            <p>{inputRef.current?.value}</p>
        </Container>
    )
}

export default UseRef
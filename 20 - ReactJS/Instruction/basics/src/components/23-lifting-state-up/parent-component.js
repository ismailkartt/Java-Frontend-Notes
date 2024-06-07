import React, { useState } from 'react';
import { Container } from "react-bootstrap";
import ChildComponent from './child-component';

const ParentComponent = () => {
    const [count, setCount] = useState(0);

    const parentCallback = (dataFromChild) => {
        setCount(prev => prev + dataFromChild)
    }

    return (
        <Container>
            <h1>PARENT COMPONENT</h1>
            <h2>{count} kez tiklandi</h2>
            <ChildComponent parentCallback={parentCallback} />
        </Container>
    )
}

export default ParentComponent
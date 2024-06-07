import { Button, Col, Container, Row } from 'react-bootstrap';

const BootstrapComponents = () => {
    return (
        <Container>
            <h1>BootstrapComponents</h1>
            <Button variant="warning">CLICK ME</Button>
            <Button as="input" type="button" variant="outline-danger" value="CLICK ME" />
            <Container>
                <Row>
                    <Col className="bg-primary">H</Col>
                    <Col className="bg-secondary">E</Col>
                    <Col className="bg-warning">L</Col>
                    <Col className="bg-danger">L</Col>
                    <Col className="bg-success">O</Col>
                </Row>
            </Container>
        </Container>
    )
}

export default BootstrapComponents
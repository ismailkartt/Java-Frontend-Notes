import { Button, Container, Form, Nav, Navbar } from "react-bootstrap"

const ProductHeader = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">Product Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarMenu" />
                <Navbar.Collapse id="navbarMenu">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#products">Products</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control type="search" placeholder="Search" className="me-2" />
                        <Button variant="outline-warning">SEARCH</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default ProductHeader
import { Container } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { GiAxeInStump } from "react-icons/gi";

const ReactIcons = () => {
    return (
        <Container>
            <h1 className="text-center">React Icons</h1>
            <AiOutlineMenu className="fs-1 text-primary me-5" />
            <GiAxeInStump className="fs-1 text-warning" />
        </Container>
    )
}

export default ReactIcons
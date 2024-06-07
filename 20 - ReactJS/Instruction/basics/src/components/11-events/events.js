import { Button, Container } from "react-bootstrap";

const Events = () => {

    const handleClick = () => {
        console.log("Parametresiz Event");
    }

    const handleParametreliClick = (parametre) => {
        console.log("Parametreli Event", parametre)
    }

    return (
        <Container>
            <h1 className="text-center text-warning">Events</h1>
            <Button
                variant="secondary"
                onClick={handleClick}
            >
                Parametresiz Event
            </Button>
            <Button
                variant="danger"
                onClick={() => handleParametreliClick("XYZ")}
            >
                Parametreli Event
            </Button>
        </Container>
    )
}

export default Events;
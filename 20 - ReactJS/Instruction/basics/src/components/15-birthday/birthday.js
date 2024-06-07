import { Button, ButtonGroup, Col, Container, Row } from "react-bootstrap"
import Person from "./person";
import peopleData from "../../assets/data/people.json";
import { useState } from "react";

const Birthday = () => {
    const [people, setPeople] = useState(peopleData);

    const handleData = (type) => {
        if (type === "del") setPeople([]);
        else if (type === "fetch") setPeople(peopleData);
    };

    const deletePerson = (id) => {
        const filteredArray = people.filter((person) => person.id === id);
        setPeople(filteredArray);
    };

    return (
        <Container className="my-5">
            <h1>Bugun Doganlar</h1>
            <p>Bugun dogan {people.length} kisi var</p>
            <Row className="row-cols-2 row-cols-md-3 row-cols-lg-4 gy-4">
                {
                    people.map((person) => (
                        <Col key={person.id}>
                            <Person
                                // setPeople={setPeople}
                                // people={people}
                                deletePerson={deletePerson}
                                {...person}
                            />
                        </Col>
                    ))
                }
            </Row>

            <ButtonGroup className="my-5">
                <Button variant="danger" onClick={() => handleData("del")}>Verileri Temizle</Button>
                <Button variant="success" onClick={() => handleData("fetch")}>Verileri Geri Getir</Button>
            </ButtonGroup>
        </Container>
    )
}

export default Birthday
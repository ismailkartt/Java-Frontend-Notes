import { Card } from "react-bootstrap";
import { BsFillTrashFill } from "react-icons/bs";

const Person = (props) => {
    const imageSource = require(`../../assets/img/${props.image || "person1.jpg"}`);

    // const deletePerson = (id) => {
    //     console.log(id)
    //     const filteredArray = props.people.filter((person) => person.id !== id);
    //     props.setPeople(filteredArray);
    // };


    return (
        <Card style={{ maxWidth: "300px" }}>
            <Card.Img src={imageSource} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.age} yasinda
                </Card.Text>
                <BsFillTrashFill
                    className="text-danger"
                    title={`${props.name}'i Sil`}
                    style={{ cursor: "pointer" }}
                    // onClick={() => deletePerson(props.id)}
                    onClick={() => props.deletePerson(props.id)}
                />
            </Card.Body>
        </Card>
    )
}

export default Person
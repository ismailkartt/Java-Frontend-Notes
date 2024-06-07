import { Card } from "react-bootstrap"
import moment from "moment";

const UserCard = (props) => {
    const birthDate = moment(props.birthDate).format('DD/MM/YYYY')

    return (
        <Card className="h-100" style={{ maxWidth: 300 }}>
            <Card.Img src={props.avatar} />
            <Card.Body>
                <Card.Title>
                    {props.firstName} {props.lastName}
                </Card.Title>
                <Card.Subtitle>{props.email}</Card.Subtitle>
                <Card.Text>{birthDate}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default UserCard
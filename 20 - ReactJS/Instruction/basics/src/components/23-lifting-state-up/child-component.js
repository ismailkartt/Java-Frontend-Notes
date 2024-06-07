import { Button } from "react-bootstrap"

const ChildComponent = (props) => {

    return (
        <div>
            <h3>CHILD COMPONENT</h3>
            <Button onClick={() => props.parentCallback(1)}>SAYACI DEGISTIR</Button>
        </div>
    )
}

export default ChildComponent;
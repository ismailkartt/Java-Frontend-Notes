import { Component } from 'react'
import { Button, Container } from 'react-bootstrap'

class ClassTypeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log("CTC: component update edildiginde calisir")

        if (prevState.counter !== this.state.counter) {
           // console.log("CTC: counter state'i degisti")
        }
    }

    componentDidMount() {
        //  console.log("CTC: component mount edildiginde yani ilk render gerceklestikten sonra calisir")
    }

    componentWillUnmount() {
        // console.log("CTC: component unmount edildiginde yani componentin kaldirildigi durumlarda calisir");
    }

    render() {

        // console.log("1. CTC render kismi calisti")

        return (
            <Container>
                <h1>CLASS TURUNDE COMPONENTLER</h1>
                <p>Class turunde componentler, fonksiyon turunde componentlerin yerine kullanilabilir. Ancak class turunde componentlerin kendi icinde state tutabildigi icin, fonksiyon turunde componentlerden daha fazla ozellik barindirir.</p>
                <Button onClick={() => this.setState(prev => ({ counter: prev.counter + 1 }))}>+</Button>
                <span>{this.state.counter}</span>
            </Container>
        )
    }
}

export default ClassTypeComponent;
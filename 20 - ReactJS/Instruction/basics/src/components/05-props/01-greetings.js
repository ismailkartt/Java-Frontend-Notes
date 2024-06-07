import Welcome1 from "./02-welcome"
import Welcome2 from "./03-welcome"

function Greetings() {
    return (
        <div className="greetings">
            <Welcome1 firstName="Adam" lastName="BORN" admin />
            <Welcome2 age={30} authenticated={false} />
        </div>
    )
}

export default Greetings
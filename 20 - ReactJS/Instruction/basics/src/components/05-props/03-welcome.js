import Welcome1 from "./02-welcome";

const Welcome2 = ({ age, authenticated }) => {
    // const { age, authenticated } = props;
    // TODO: Add a condition to show a message if the user is not authenticated.
    return (
        <div>
            <p>I'm {age} years old.</p>
            {
                authenticated || <p>You need to login.</p>
            }
            <Welcome1 firstName={age} lastName={authenticated} />
        </div>
    )
}

export default Welcome2;
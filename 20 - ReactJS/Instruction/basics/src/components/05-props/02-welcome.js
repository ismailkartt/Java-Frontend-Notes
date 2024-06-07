const Welcome1 = (props) => {
    // console.log(props.admin);
    return (
        <div className="welcome">
            <h1>Welcome {props.firstName} {props.lastName} </h1>
            {
                props.admin && <ul>
                    <li>Admin Dashboard</li>
                    <li>Admin Profile</li>
                    <li>Admin Settings</li>
                </ul>
            }
        </div>
    )
}

export default Welcome1
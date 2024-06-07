const Country = (props) => {
    return (
        <tr>
            <td>{props.index + 1}</td>
            <td>
                <img
                    src={props.flags?.svg}
                    alt={props.name?.common}
                    title={props.name?.common}
                    width={70}
                />
            </td>
            <td>{props.name?.common}</td>
            <td>{props.capital && props.capital[0]}</td>
            <td>{props.population}</td>
            <td>{props.region}</td>
        </tr>
    )
}

export default Country
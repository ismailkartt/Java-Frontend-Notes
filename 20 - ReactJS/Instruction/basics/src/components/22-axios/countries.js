import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import Country from './country';
import axios from 'axios';

const countriesBaseUrl = process.env.REACT_APP_COUNTRIES_API_URL;

const Countries = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(`${countriesBaseUrl}/all`)
            .then(response => setCountries(response.data))
    }, []);

    return (
        <Container className='my-5'>
            <h1>Axios — Countries API</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Bayrak</th>
                        <th>Ülke</th>
                        <th>Başkent</th>
                        <th>Nüfus</th>
                        <th>Kıta</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        countries && countries.map((country, index) => (
                            <Country
                                {...country}
                                key={country.cca3}
                                index={index}
                            />
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    )
}

export default Countries
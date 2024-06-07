import React from 'react'

const Jsx4 = () => {
    const names = ["Ahmet", "Mehmet", "Ayşe", "Fatma"];
    const cities = ["İstanbul", "Ankara", "İzmir", "Bursa"];

    // const users = [
    //     {
    //         firstName: 'John',
    //         lastName: 'Doe',
    //         age: 17,
    //     },
    //     {
    //         firstName: 'Jane',
    //         lastName: 'Doe',
    //         age: 18,
    //     },
    //     {
    //         firstName: 'Jack',
    //         lastName: 'Doe',
    //         age: 19,
    //     }
    // ];

    return (
        <div>
            <ul>
                {
                    names.map((name, index) => <li key={index}>{name}</li>)
                }
            </ul>
            <select>
                {
                    cities.map((city, index) => <option key={index}>{city}</option>)
                }
            </select>
        </div>
    )
}

export default Jsx4
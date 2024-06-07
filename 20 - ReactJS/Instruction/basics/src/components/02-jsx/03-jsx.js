import React from 'react'

const Jsx3 = () => {
    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 17,
        email: "john@example.com",
        occupation: 'Developer',
        isAdmin: true
    }

    const { age, isAdmin } = user;

    return (
        <div>
            {
                isAdmin && <h2>Admin Menu</h2>
            }
            {
                age > 18 && <h2>Buy a beer</h2>
            }
            {
                age > 18 || <h2>Go home</h2>
            }
        </div>
    )
}

export default Jsx3
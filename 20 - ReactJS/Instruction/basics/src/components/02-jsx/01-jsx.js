import React from 'react'

const Jsx1 = () => {
    // const x = 5;
    // console.log(x);

    const user = {
        firstName: 'John',
        lastName: 'Doe',
        age: 25,
    }

    // bu satir da bir yorum satiridir

    return (
        <>
            <h1 className=''>Merhaba {user.firstName} </h1>
            <h2>Yaşınız: {user.age}</h2>
            <h3>Adınız: {user.firstName}</h3>
            <h4>Soyadınız: {user.lastName}</h4>
            {/* BURASI YORUM SATIRI */}
        </>
    )
}

export default Jsx1
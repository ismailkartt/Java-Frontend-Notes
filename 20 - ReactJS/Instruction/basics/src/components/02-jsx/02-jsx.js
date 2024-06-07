import React from 'react'

const Jsx2 = () => {
    const isAdmin = true;
    const isLoading = false;

    // if (isLoading) {
    //     console.log('Loading...')
    // }

    // if (isAdmin) {
    //     console.log('Admin');
    // }

    return (
        isLoading
            ? <div>Loading...</div>
            : <>
                {
                    isAdmin
                        ? <>
                            <h2>Admin Menu</h2>
                            <ul>
                                <li>Kullanici Olustur</li>
                                <li>Kullanici Sil</li>
                                <li>Kullanici Guncelle</li>
                            </ul>
                        </>
                        : <>
                            <h2>Kullanici Menu</h2>
                            <ul>
                                <li>Profilim</li>
                                <li>Siparislerim</li>
                                <li>Adreslerim</li>
                            </ul>
                        </>
                }
            </>
    )
}

export default Jsx2
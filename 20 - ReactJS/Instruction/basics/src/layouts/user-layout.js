import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from '../components/header/header';

const UserLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <footer>
                &copy; 2023 Techpro Education
            </footer>
        </div>
    )
}

export default UserLayout
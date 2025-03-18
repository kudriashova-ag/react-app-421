import React from 'react';
import { Outlet } from 'react-router';

const Menu = () => {
    return (
        <div>
            <h1>Menu</h1>
            <Outlet />
        </div>
    );
}

export default Menu;

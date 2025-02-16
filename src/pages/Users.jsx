import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router';

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
     }, []);


    const getUsers = async () => { 
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
    }

    return (
        <div>
            <h1>Users</h1>
            {users.map(user => <div key={user.id}>
                <NavLink to={`/users/${user.id}`}>{user.name}</NavLink>
            </div>)}
            <Outlet />
        </div>
    );
}

export default Users;

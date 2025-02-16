import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const User = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

     useEffect(() => {
       getUser();
     }, [id]);

     const getUser = async () => {
       const response = await axios.get(
         "https://jsonplaceholder.typicode.com/users/" + id
       );
       setUser(response.data);
     };

    return (
        <div>
            <h1>User</h1>
            {user && <div>{user.name}, {user.email}, {user.phone}</div>}
        </div>
    );
}

export default User;

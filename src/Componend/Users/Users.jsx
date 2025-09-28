import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const user = useLoaderData();
    console.log(user);
    
    return (
        <div>
            <h2>This is Users Data</h2>
        </div>
    );
};

export default Users;
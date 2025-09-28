import React, { use } from 'react';

const Suspience = ({userpa}) => {
    const user = use(userpa)
    console.log(user);
    
    return (
        <div>
            <h3>this is Suspiences Data Loading</h3>
            {
                user.map(my => <li>{my.email}</li>)
            }
        </div>
    );
};

export default Suspience;
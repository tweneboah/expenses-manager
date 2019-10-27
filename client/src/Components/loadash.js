import React from 'react';

const Loadash = (props) => {


    var users = [
        { 'user': 'barney', 'age': 36, 'active': true },
        { 'user': 'fred', 'age': 40, 'active': false }
    ];

    console.log(users)
    return (

        <div>
            <h1>Loadash</h1>
        </div>
    );
};

export default Loadash;
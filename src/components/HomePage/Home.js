import React, { useEffect, useState } from 'react';
import Table from './Table';

const Home = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('users.json')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);


    return (
        <div>
            <Table users={users} />
        </div>
    );
};

export default Home;
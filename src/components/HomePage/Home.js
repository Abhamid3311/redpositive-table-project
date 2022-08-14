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
            <h2 className='text-4xl text-neutral font-bold text-center pt-5'>Welcome To <span className='text-orange-700'>RedPositive</span> Table</h2>
            <Table users={users} />
        </div>
    );
};

export default Home;
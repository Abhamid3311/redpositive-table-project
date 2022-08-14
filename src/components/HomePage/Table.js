import React, { useEffect, useState } from 'react';
import Form from './Form';
import TableRow from './TableRow';

const Table = ({ users, setUsers }) => {


    const [sortType, setSortType] = useState('');
    //Sort Products By price
    useEffect(() => {
        if (sortType === 'aToz') {
            const pro = users.sort((a, b) => b.name.localeCompare(a.name));
            setUsers(pro);
        } else if (sortType === 'zToa') {
            const pro = users.sort((a, b) => a.name.localeCompare(b.name));
            setUsers(pro);
        }
    }, [users, setUsers, sortType]);



    return (
        <div className='mt-24 px-10 mx-auto'>
            <div className='mb-3 flex justify-between items-center'>
                <div >
                    <label htmlFor="pop-up-form" className="btn btn-outline btn-primary modal-button mr-3">Add New Entry</label>

                    <button className="btn btn-outline btn-primary">Send</button>
                </div>
                <div>
                    <select className="select w-full select-primary max-w-xs" onChange={(e) => setSortType(e.target.value)}>
                        <option disabled defaultValue>sort by</option>
                        <option value={"aToz"}>A to Z</option>
                        <option value={"zToa"}>Z to A</option>
                    </select>
                </div>
            </div>

            <div>
                <Form></Form>
            </div>


            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead >
                        <tr >
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            <th>Hobby</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    {
                        users.map((user, index) => <tbody> <TableRow
                            key={user._id}
                            user={user}
                            index={index}

                        ></TableRow></tbody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Table;
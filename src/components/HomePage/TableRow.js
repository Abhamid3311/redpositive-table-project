import React from 'react';

const TableRow = ({ user, index }) => {
    const { _id, name, email, number, hobby } = user;
    return (

        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
            <td>{index + 1}</td>
            <td>{name}</td>
            <td>{number}</td>
            <td>{email}</td>
            <td>{hobby}</td>
            <td>
                <button className="btn btn-ghost btn-xs">Update</button>|
                <button className="btn btn-ghost btn-xs">delete</button>
            </td>
        </tr>

    );
};

export default TableRow;
import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
    console.log(props.users);
    return (
        <div>
            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
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
                        props.users.map((user, index) => <tbody> <TableRow
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
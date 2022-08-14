import React from 'react';
import TableRow from './TableRow';

const Table = (props) => {
    console.log(props.users);
    return (
        <div className='mt-24 px-10 mx-auto'>
            <div className='mb-3 flex justify-between items-center'>
                <div >
                    <button class="btn mr-3">Add New Entry</button>
                    <button class="btn ">Send</button>
                </div>
                <div>
                    <select class="select w-full select-primary max-w-xs">
                        <option disabled selected>sort by</option>
                        <option value={"aToz"}>A to Z</option>
                        <option value={"zToa"}>Z to A</option>
                    </select>
                </div>
            </div>


            <div class="overflow-x-auto w-full">
                <table class="table w-full">
                    <thead >
                        <tr >
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
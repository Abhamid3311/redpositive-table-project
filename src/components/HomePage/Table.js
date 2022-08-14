import React from 'react';

const Table = () => {
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
                    <tbody>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" class="checkbox" />
                                </label>
                            </th>
                            <td>1</td>
                            <td>Rohim</td>
                            <td>01469546</td>
                            <td>rohim@h.com</td>
                            <td>reading</td>
                            <td>
                                <button class="btn btn-ghost btn-xs">Update</button>|
                                <button class="btn btn-ghost btn-xs">delete</button>
                            </td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Table;
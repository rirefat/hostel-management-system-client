import React from 'react';

const Visitors = () => {
    return (
        <div className='visitors-details'>
            <h1 className='text-center font-medium text-2xl'>Visitor's Information</h1>
            <div className="overflow-x-auto">
                <table className="table my-4 w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Relation</th>
                            <th>Arrival Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Brother</td>
                            <th>12 June 2022</th>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Cousin</td>
                            <th>12 June 2022</th>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Uncle</td>
                            <th>12 June 2022</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Visitors;
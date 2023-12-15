import { useState } from "react";
import { GoDotFill } from 'react-icons/go'
import { AdminTable, TodoList } from "../Paths";

const Admin = () => {
    const initialUser = { username: '', email: '' };
    const [newUser, setNewUser] = useState(initialUser);
    const [users, setUsers] = useState([{ id: '1', username: 'John Doe', email: 'john@example.com' }]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddUser = () => {
        setUsers([...users, { id: `${users.length + 1}`, ...newUser }]);
        setNewUser(initialUser);
    };

    const handleDeleteUser = (userId: string) => {
        const updatedUsers = users.filter(user => user.id !== userId);
        setUsers(updatedUsers);
    };
    return (


        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-2xl font-semibold text-gray-900 mb-6">User Management</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* User Management Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">User Management</h2>
                        {/* Form for adding users */}
                        <form onSubmit={(e) => { }}>
                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={newUser.username}
                                        onChange={handleInputChange}
                                        className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        // value={newUser.email}
                                        // onChange={handleInputChange}
                                        className="border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-2"
                                        required
                                    />
                                </div>
                                <div>
                                    <button type="submit" className="bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700">Add User</button>
                                </div>
                            </div>
                        </form>

                        {/* Displaying user list */}
                        <ul className="mt-6">
                            {users.map(user => (
                                <li key={user.id} className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                                    <div>
                                        <p className="font-semibold">{user.username}</p>
                                        <p className="text-sm text-gray-500">{user.email}</p>
                                    </div>
                                    <button onClick={() => handleDeleteUser(user.id)} className="text-red-500 hover:text-red-700 font-semibold">Delete</button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Track User Activity - Placeholder */}
                    <TodoList />

                    {/*Admin Chat panel */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Chat panel</h2>
                        <div className="flex flex-col h-screen">

                            {/* <!-- Top nav --> */}


                            <div className="flex-1 overflow-hidden flex">



                                {/* <!-- Main content --> */}
                                <div className="flex-1 ">

                                    {/* <!-- Chat bot --> */}
                                    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
                                        <div className="py-4">

                                            <div className="flex justify-start mb-4">
                                                <div className="relative">
                                                    <img className="w-10 h-10  rounded-full object-fill" src="https://buffer.com/library/content/images/2022/03/amina.png" alt="chat image" />
                                                    <GoDotFill className="text-green-700 absolute text-[25px] -right-[10px] bottom-[15px]" />
                                                </div>
                                                <div className="ml-3 pt-1">


                                                    {/* <!-- Another user message --> */}
                                                    <div className="flex justify-end mb-4">
                                                        <div className="bg-blue-500 text-[13px] text-white py-2 px-4 rounded-lg max-w-md">
                                                            Can you help me with my query?
                                                            <span className="text-[10px] text-gray-500/50" >21/12/2023 9:00 AM</span>
                                                        </div>
                                                    </div>

                                                    {/* <!-- Another bot response --> */}
                                                    <div className="flex mb-4">
                                                        <div className="bg-gray-300 text-[13px] py-2 px-4 rounded-lg max-w-md">
                                                            Sure! What do you need help with?
                                                            <span className="text-[10px] text-gray-500/50" >21/12/2023 9:00 AM</span>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>



                                        </div>
                                        <div className=" pt-4 pb-2">
                                            <textarea className="shadow appearance-none border rounded w-full p-2 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your message..."></textarea>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                {/* CREATE A TABLE FOR USERS */}


                <AdminTable />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Track User Activity */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Track User Activity</h2>
                        {/* Fields for tracking user activity */}
                        {/* Monitoring logins, actions, usage patterns, etc. */}
                    </div>

                    {/* Set Security Policies */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Set Security Policies</h2>
                        {/* Fields for setting security policies */}
                        {/* Password requirements, access controls, data encryption, etc. */}
                    </div>

                    {/* System Configuration Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">System Configuration</h2>
                        {/* Include content for system configuration */}
                    </div>

                    {/* Data Management Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-4">Data Management</h2>
                        {/* Include content for data management */}
                    </div>

                    {/* Reporting and Analytics Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-2">
                        <h2 className="text-xl font-semibold mb-4">Reporting and Analytics</h2>
                        {/* Include content for reporting and analytics */}
                    </div>

                    {/* Additional Features Content */}
                    <div className="bg-white p-6 rounded-lg shadow-md col-span-3">
                        <h2 className="text-xl font-semibold mb-4">Additional Features</h2>
                        {/* Include content for additional features */}
                    </div>
                </div>



            </div>
        </main>

    );
}

export default Admin;

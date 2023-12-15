interface DataProps {
    id: number;
    name: string;
    email: string;
    role: string;

}
const usersData: DataProps[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Alice Johnson', email: 'alice@example.com', role: 'User' },
    { id: 3, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: 4, name: 'Emma Brown', email: 'emma@example.com', role: 'Admin' },
    { id: 5, name: 'Oliver Wilson', email: 'oliver@example.com', role: 'User' },
    { id: 6, name: 'Sophia Anderson', email: 'sophia@example.com', role: 'User' },
    { id: 7, name: 'William Clark', email: 'william@example.com', role: 'Admin' },
    { id: 8, name: 'Charlotte Lee', email: 'charlotte@example.com', role: 'User' },
    { id: 9, name: 'James Garcia', email: 'james@example.com', role: 'Admin' },
    { id: 10, name: 'Ava Martinez', email: 'ava@example.com', role: 'User' },
];

export const AdminTable = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700 border">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {/* <!-- Example user data --> */}
                    {usersData?.map(({ id, name, email, role }) => <tr key={id}>
                        <td className="px-6 py-4 whitespace-nowrap">{id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{role}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-2">Edit</button>
                            <button className="text-red-600 hover:text-red-900">Delete</button>
                        </td>
                    </tr>)}
                    {/* <!-- Add more rows for other users --> */}
                </tbody>
            </table>
        </div>

    );
};

import { useState, useEffect } from 'react';
// import { getUsers, deleteUser } from '../api/userAPI'; // Import your user-related API functions

const Users = () => {
    const users = [
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
      },
      {
        id: 2,
        name: 'Alice Johnson',
        email: 'alice@example.com',
      },
      {
        id: 3,
        name: 'Bob Smith',
        email: 'bob@example.com',
      },
      // ... more user objects
    ];

    useEffect(() => {
        // Fetch users when the component mounts
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const fetchedUsers = await getUsers(); // Fetch users from the API
            setUsers(fetchedUsers);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleDeleteUser = async (userId) => {
        try {
            await deleteUser(userId); // Delete user via API
            setUsers(users.filter(user => user.id !== userId)); // Update users state after deletion
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
      <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">User Management</h1>
      <ul className="divide-y divide-gray-200">
          {users.map(user => (
              <li key={user.id} className="py-4 flex items-center justify-between">
                  <div className="flex flex-col">
                      <h2 className="text-lg font-semibold mb-1">{user.name}</h2>
                      <p className="text-gray-600">{user.email}</p>
                  </div>
                  <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteUser(user.id)}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M15.293 4.293a1 1 0 011.414 1.414L11.414 12l5.293 5.293a1 1 0 11-1.414 1.414L10 13.414l-5.293 5.293a1 1 0 01-1.414-1.414L8.586 12 3.293 6.707a1 1 0 011.414-1.414L10 10.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                  </button>
              </li>
          ))}
      </ul>
  </div>
  
  
    )
    }

export default Users;

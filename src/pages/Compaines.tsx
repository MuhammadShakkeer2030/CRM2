import React, { useState } from 'react';
import { Company } from '../types/Company'; // Import your Company interface

export interface Company {
  id: number;
  name: string;
  industry: string;
  // Other relevant company details
}

const Companies: React.FC = () => {
    const [companies, setCompanies] = useState<Company[]>([
        { id: 1, name: 'Company A', industry: 'Technology' },
        { id: 2, name: 'Company B', industry: 'Finance' },
        { id: 3, name: 'Company A', industry: 'Technology' },
        { id: 4, name: 'Company B', industry: 'Finance' },
        { id: 5, name: 'Company A', industry: 'Technology' },
        { id: 6, name: 'Company B', industry: 'Finance' },
        { id: 7, name: 'Company A', industry: 'Technology' },
        { id: 8, name: 'Company B', industry: 'Finance' },
        { id: 9, name: 'Company A', industry: 'Technology' },
        { id: 10, name: 'Company B', industry: 'Finance' },
        // Add more sample companies or fetch from an API
    ]);

    // Function to delete a company
    const deleteCompany = (id: number) => {
        setCompanies(prevCompanies => prevCompanies.filter(company => company.id !== id));
        // Implement logic to delete from the backend (API/database)
    };

    return (
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
      <div className="container mx-auto px-6 py-8">
        <div className="container mx-auto mt-8">
            <h1 className="text-3xl font-semibold mb-4">Companies</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {companies.map(company => (
                    <div key={company.id} className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold mb-2">{company.name}</h2>
                        <p className="text-sm text-gray-500 mb-2">{company.industry}</p>
                        {/* Add other company details here */}
                        <div className="flex justify-end">
                            <button
                                className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                onClick={() => deleteCompany(company.id)}
                            >
                                Delete
                            </button>
                            {/* Implement edit or view functionality */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </div>
        </main>
    );
};

export default Companies;

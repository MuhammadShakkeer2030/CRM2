

const ProfilePage = () => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Profile Information</h1>
      
      {/* User Information */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">User Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName">Full Name</label>
            <input type="text" id="fullName" className="w-full border rounded-md px-3 py-2" />
          </div>
          {/* Other fields: Email, Mobile Number, Location, Job Title, Department */}
          {/* Add similar input fields with appropriate labels */}
        </div>
      </div>
      
      {/* CRM Access */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">CRM Access</h2>
        {/* Fields for CRM Access */}
        {/* User ID, Security Role, Assigned Teams/Groups, Communication Channels */}
        {/* Add similar input fields with appropriate labels */}
      </div>
      
      {/* CRM Usage */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">CRM Usage</h2>
        {/* Fields for CRM Usage */}
        {/* Primary Responsibilities, Assigned Leads/Contacts/Opportunities, Recent Activity, Custom Fields */}
        {/* Add similar input fields with appropriate labels */}
      </div>
      
      {/* Additional Information */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Additional Information</h2>
        {/* Fields for Additional Information */}
        {/* Bio/Profile Picture, Notes/Internal Tags, Last Login/Active Status */}
        {/* Add similar input fields with appropriate labels */}
      </div>
      
      {/* Save Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Save
      </button>
    </div>
  );
};

export default ProfilePage;

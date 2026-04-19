import { useState } from 'react';
import Navbar from '../components/Navbar';

const Profile = () => {
  const storedUser = JSON.parse(localStorage.getItem('user'));
  const [isEditing, setIsEditing] = useState(false);
  const [bio, setBio] = useState("Chandigarh University student | Tech enthusiast | Fitness journey 🚀");

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto py-12 px-4">
        
        {/* Profile Header Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="h-32 bg-gradient-to-r from-blue-500 to-indigo-600"></div>
          <div className="px-8 pb-8">
            <div className="relative flex justify-between items-end -mt-12 mb-6">
              <div className="w-24 h-24 bg-white p-1 rounded-2xl shadow-md">
                <div className="w-full h-full bg-blue-100 rounded-xl flex items-center justify-center text-3xl font-bold text-blue-600 uppercase">
                  {storedUser?.name[0]}
                </div>
              </div>
              <button 
                onClick={() => setIsEditing(!isEditing)}
                className="bg-gray-900 text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-gray-800 transition"
              >
                {isEditing ? "Save Profile" : "Edit Profile"}
              </button>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">{storedUser?.name}</h2>
            <p className="text-gray-500 font-medium">{storedUser?.email}</p>
            
            <div className="mt-4">
              {isEditing ? (
                <textarea 
                  className="w-full p-3 border border-gray-200 rounded-xl text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              ) : (
                <p className="text-gray-600 text-sm leading-relaxed">{bio}</p>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Fitness</p>
            <p className="text-2xl font-black text-gray-900">74.5 kg</p>
            <p className="text-[10px] text-green-500 font-bold mt-1">Target: 70 kg</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Study Hours</p>
            <p className="text-2xl font-black text-gray-900">128h</p>
            <p className="text-[10px] text-blue-500 font-bold mt-1">Top 5% in CU</p>
          </div>
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
            <p className="text-gray-400 text-xs font-bold uppercase mb-1">Marketplace</p>
            <p className="text-2xl font-black text-gray-900">3 Items</p>
            <p className="text-[10px] text-orange-500 font-bold mt-1">Active Listings</p>
          </div>
        </div>

        {/* Settings Links */}
        <div className="mt-8 bg-white rounded-2xl border border-gray-100 divide-y divide-gray-50 overflow-hidden">
          <button className="w-full px-6 py-4 text-left hover:bg-gray-50 flex justify-between items-center transition">
            <span className="text-sm font-semibold text-gray-700">Account Settings</span>
            <span className="text-gray-300">→</span>
          </button>
          <button className="w-full px-6 py-4 text-left hover:bg-gray-50 flex justify-between items-center transition text-red-600">
            <span className="text-sm font-semibold">Delete Account</span>
            <span className="text-red-200">→</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Profile;
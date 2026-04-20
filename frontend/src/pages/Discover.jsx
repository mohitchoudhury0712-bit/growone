import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Discover = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
// NEW WAY (Relative - Vercel handles the rest)
const response = await axios.post('/api/auth/login', formData);        setStudents(response.data);
      } catch (error) {
        console.error("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4">
        <header className="mb-10">
          <h2 className="text-3xl font-bold text-gray-900">Discover Peers</h2>
          <p className="text-gray-500 mt-2">Connecting students across Chandigarh University.</p>
        </header>

        {loading ? (
          <div className="text-center py-20 text-gray-400">Loading your future squad...</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {students.map((student) => (
              <div key={student._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 flex items-center justify-center font-bold text-xl uppercase">
                  {student.name[0]}
                </div>
                <h3 className="text-lg font-bold text-gray-900">{student.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{student.age} years old • {student.gender}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition-colors">
                  Connect
                </button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Discover;
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', age: '', gender: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
// NEW WAY (Relative - Vercel handles the rest)
const response = await axios.post('/api/auth/login', formData);            alert("Registration Successful!");
            navigate('/login');
        } catch (err) {
            alert("Error: " + err.response.data.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-black text-blue-600 tracking-tighter">GROWONE</h1>
                    <p className="text-gray-500 font-medium mt-2">Create your student account</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <input type="email" placeholder="University Email" className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    <input type="password" placeholder="Password" className="w-full p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    <div className="flex gap-4">
                        <input type="number" placeholder="Age" className="w-1/2 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, age: e.target.value})} />
                        <select className="w-1/2 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                            <option value="">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-4 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                        Join Growone
                    </button>
                </form>
                <p className="text-center mt-6 text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
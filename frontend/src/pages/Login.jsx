import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
// NEW WAY (Relative - Vercel handles the rest)
const response = await axios.post('/api/auth/login', formData);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('user', JSON.stringify(res.data.user));
            navigate('/home');
        } catch (err) {
            alert("Login Failed: " + (err.response?.data?.message || "Server Error"));
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-blue-600 tracking-tighter italic">GROWONE</h1>
                    <p className="text-gray-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">Student Super App</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">Email Address</label>
                        <input type="email" placeholder="name@cuchd.in" className="w-full mt-1 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, email: e.target.value})} />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-gray-400 uppercase ml-1">Password</label>
                        <input type="password" placeholder="••••••••" className="w-full mt-1 p-4 bg-gray-50 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition" onChange={(e) => setFormData({...formData, password: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full bg-gray-900 text-white p-4 rounded-2xl font-bold hover:bg-blue-600 transition shadow-xl">
                        Log In
                    </button>
                </form>
                <div className="text-center mt-8">
                    <p className="text-sm text-gray-500">
                        New to the community? <Link to="/register" className="text-blue-600 font-bold hover:underline">Register Now</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
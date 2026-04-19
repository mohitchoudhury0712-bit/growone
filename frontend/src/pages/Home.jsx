import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4">
        
        {/* WELCOME HEADER UPDATED TO GROWONE */}
        <header className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight">
            Welcome to <span className="text-blue-600">Growone</span>, {user?.name}!
          </h2>
          <p className="text-gray-500 mt-1 font-medium italic">Empowering your journey at Chandigarh University.</p>
        </header>

        {/* Action Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Fitness Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">💪</div>
            <h3 className="text-xl font-bold text-gray-900">Fitness Tracking</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Monitor your daily calories and stay on top of your health goals.</p>
            <Link to="/fitness" className="inline-block mt-6 text-blue-600 font-bold text-sm hover:underline tracking-tight">Open Tracker →</Link>
          </div>

          {/* Studies Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">📚</div>
            <h3 className="text-xl font-bold text-gray-900">Academic Skills</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Access placement roadmaps and download subject notes instantly.</p>
            <Link to="/skills" className="inline-block mt-6 text-blue-600 font-bold text-sm hover:underline tracking-tight">Explore Skills →</Link>
          </div>

          {/* Market Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all">
            <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6 text-2xl shadow-inner">🛒</div>
            <h3 className="text-xl font-bold text-gray-900">Campus Market</h3>
            <p className="text-sm text-gray-500 mt-2 leading-relaxed">Buy and sell books, cycles, and essentials with fellow students.</p>
            <Link to="/market" className="inline-block mt-6 text-blue-600 font-bold text-sm hover:underline tracking-tight">Visit Market →</Link>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Home;
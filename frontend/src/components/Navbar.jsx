import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-600 hover:text-blue-600";

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex items-center gap-10">
            {/* BRAND NAME UPDATED TO GROWONE */}
            <Link to="/home" className="text-2xl font-black text-blue-600 tracking-tighter">
              GROW<span className="text-gray-900">ONE</span>
            </Link>
            
            <div className="hidden lg:flex space-x-6 text-sm font-bold uppercase tracking-tight">
              <Link to="/home" className={`pb-1 transition-all ${isActive('/home')}`}>Home</Link>
              <Link to="/discover" className={`pb-1 transition-all ${isActive('/discover')}`}>Discover</Link>
              <Link to="/fitness" className={`pb-1 transition-all ${isActive('/fitness')}`}>Fitness</Link>
              <Link to="/diet" className={`pb-1 transition-all ${isActive('/diet')}`}>Diet</Link>
              <Link to="/skills" className={`pb-1 transition-all ${isActive('/skills')}`}>Skills</Link>
              <Link to="/market" className={`pb-1 transition-all ${isActive('/market')}`}>Market</Link>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/profile" className="flex items-center gap-3 group">
              <div className="text-right hidden sm:block">
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-none">Student</p>
                <p className="text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                  {user?.name || "Profile"}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 font-bold border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                {user?.name ? user.name[0].toUpperCase() : "U"}
              </div>
            </Link>

            <button 
              onClick={handleLogout} 
              className="bg-red-50 text-red-600 p-2 rounded-xl hover:bg-red-600 hover:text-white transition-all border border-red-100"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Fitness from './pages/Fitness';
import Diet from './pages/Diet'; // Import the Diet page
import Discover from './pages/Discover';
import Skills from './pages/Skills';
import Market from './pages/Market';
import Profile from './pages/Profile';
function App() {
  return (
    <Router>
      <Routes>
        {/* Default route */}
        <Route path="/" element={<Navigate to="/login" />} />
        
        {/* Auth routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        
        {/* Feature routes */}
        <Route path="/home" element={<Home />} />
        <Route path="/fitness" element={<Fitness />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/market" element={<Market />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
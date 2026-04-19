import { useState } from 'react';
import Navbar from '../components/Navbar';

const Market = () => {
  // Mock data for university listings
  const [listings] = useState([
    { id: 1, title: "Engineering Graphics Set", price: "450", category: "Stationery", seller: "Aman", image: "📏" },
    { id: 2, title: "Hero Hercules Cycle", price: "2200", category: "Transport", seller: "Ishaan", image: "🚲" },
    { id: 3, title: "DSA Hand-written Notes", price: "100", category: "Education", seller: "Sana", image: "📝" },
    { id: 4, title: "Scientific Calculator", price: "600", category: "Electronics", seller: "Vikram", image: "🧮" },
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto py-10 px-4">
        
        {/* Header with Call to Action */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Student Marketplace</h2>
            <p className="text-gray-500">Buy and sell items within the CU campus.</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            + Post an Item
          </button>
        </header>

        {/* Filter Chips */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-2">
          {['All', 'Books', 'Electronics', 'Cycles', 'Hostel Essentials'].map((cat) => (
            <button key={cat} className="whitespace-nowrap bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 hover:border-blue-200 transition">
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {listings.map((item) => (
            <div key={item.id} className="bg-white rounded-3xl border border-gray-100 overflow-hidden hover:shadow-xl transition-all group">
              <div className="h-48 bg-gray-100 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform">
                {item.image}
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <span className="text-blue-600 font-black text-lg">₹{item.price}</span>
                </div>
                <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">{item.category}</p>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-[10px] font-bold">
                      {item.seller[0]}
                    </div>
                    <span className="text-sm text-gray-600 font-medium">{item.seller}</span>
                  </div>
                  <button className="text-blue-600 text-sm font-bold hover:underline">Chat</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Market;
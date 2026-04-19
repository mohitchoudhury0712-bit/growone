import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Fitness = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', calories: '' });
  const dailyGoal = 2000;

  const totalCalories = foodItems.reduce((sum, item) => sum + Number(item.calories), 0);
  const remaining = dailyGoal - totalCalories;

  const addFood = (e) => {
    e.preventDefault();
    if (!newItem.name || !newItem.calories) return;
    setFoodItems([...foodItems, newItem]);
    setNewItem({ name: '', calories: '' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-4xl mx-auto py-10 px-4">
        
        {/* Calorie Progress Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-4xl font-black text-gray-900">{remaining}</h2>
            <p className="text-gray-500 font-medium uppercase tracking-wider text-sm">Calories Remaining</p>
          </div>
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-xl font-bold text-blue-600">{dailyGoal}</p>
              <p className="text-xs text-gray-400 uppercase">Goal</p>
            </div>
            <div>
              <p className="text-xl font-bold text-orange-500">{totalCalories}</p>
              <p className="text-xs text-gray-400 uppercase">Food</p>
            </div>
          </div>
        </div>

        {/* Add Food Form */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8">
          <h3 className="text-lg font-bold mb-4">Log Food Item</h3>
          <form onSubmit={addFood} className="flex flex-col md:flex-row gap-4">
            <input 
              type="text" placeholder="What did you eat?" 
              value={newItem.name} onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              className="flex-1 px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input 
              type="number" placeholder="Calories" 
              value={newItem.calories} onChange={(e) => setNewItem({...newItem, calories: e.target.value})}
              className="w-full md:w-32 px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl font-bold hover:bg-blue-700 transition">
              Add
            </button>
          </form>
        </div>

        {/* Food List */}
        <div className="space-y-4">
          <h3 className="text-gray-500 font-bold text-sm uppercase px-2">Today's Meals</h3>
          {foodItems.map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 flex justify-between items-center shadow-sm">
              <span className="font-medium text-gray-800">{item.name}</span>
              <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-bold">
                {item.calories} kcal
              </span>
            </div>
          ))}
          {foodItems.length === 0 && <p className="text-center text-gray-400 py-10 italic">No food logged yet. Start eating!</p>}
        </div>
      </main>
    </div>
  );
};

export default Fitness;
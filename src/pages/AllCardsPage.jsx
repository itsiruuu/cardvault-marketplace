import React, { useState } from 'react';
import { 
  Flame, 
  Droplet, 
  Leaf, 
  Zap, 
  Eye, 
  ShieldAlert, 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import { ALL_CARDS_CATEGORIES } from '../data/mockData';

export default function AllCardsPage({ setCurrentPage }) {
  const [selectedType, setSelectedType] = useState('Fire Type');
  const [selectedRarities, setSelectedRarities] = useState([]);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const cardTypes = [
    { name: 'Fire Type', icon: Flame, color: 'text-orange-500' },
    { name: 'Water Type', icon: Droplet, color: 'text-blue-500' },
    { name: 'Grass Type', icon: Leaf, color: 'text-emerald-500' },
    { name: 'Lightning Type', icon: Zap, color: 'text-amber-500' },
    { name: 'Psychic Type', icon: Eye, color: 'text-purple-500' },
    { name: 'Fighting Type', icon: ShieldAlert, color: 'text-red-500' },
  ];

  const rarities = ['Ultra Rare', 'Secret Rare', 'Holo Rare', 'Vintage Base'];

  const toggleRarity = (r) => {
    if (selectedRarities.includes(r)) {
      setSelectedRarities(selectedRarities.filter(item => item !== r));
    } else {
      setSelectedRarities([...selectedRarities, r]);
    }
  };

  const clearFilters = () => {
    setSelectedType('Fire Type');
    setSelectedRarities([]);
    setCurrentPageNum(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          All Cards
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Explore the complete card catalog categorized by elemental energy and expansion sets.
        </p>
      </div>

      {/* Main Layout: Sidebar + 3x3 Grid */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Sidebar Filter */}
        <aside className="w-full lg:w-72 bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm space-y-6 flex-shrink-0">
          
          {/* Card Types Filter */}
          <div>
            <h3 className="text-sm font-bold text-slate-900">
              Card Types
            </h3>
            <p className="text-[11px] text-slate-400 mb-3">
              Filter by elemental energy
            </p>

            <div className="space-y-1.5">
              {cardTypes.map((type) => {
                const Icon = type.icon;
                const isSelected = selectedType === type.name;
                return (
                  <button
                    key={type.name}
                    onClick={() => setSelectedType(type.name)}
                    className={`w-full flex items-center space-x-2.5 px-3.5 py-2.5 rounded-xl text-xs font-bold transition text-left ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 border border-blue-200 shadow-sm'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isSelected ? 'text-blue-600' : type.color}`} />
                    <span>{type.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Rarity Checkboxes */}
          <div className="pt-2 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-900">
              Rarity
            </h3>
            <p className="text-[11px] text-slate-400 mb-3">
              Browse by card scarcity
            </p>

            <div className="space-y-2">
              {rarities.map((rarity) => (
                <label
                  key={rarity}
                  className="flex items-center space-x-2.5 text-xs text-slate-700 cursor-pointer hover:text-blue-600 transition"
                >
                  <input
                    type="checkbox"
                    checked={selectedRarities.includes(rarity)}
                    onChange={() => toggleRarity(rarity)}
                    className="w-3.5 h-3.5 rounded text-blue-600 border-slate-300 focus:ring-blue-500"
                  />
                  <span>{rarity}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Clear Filters Button */}
          <div className="pt-2">
            <button
              onClick={clearFilters}
              className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-2.5 rounded-xl text-xs transition"
            >
              Clear All Filters
            </button>
          </div>
        </aside>

        {/* Right Main Grid (3 columns x 3 rows) */}
        <div className="flex-1 w-full space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ALL_CARDS_CATEGORIES.map((cat, idx) => (
              <div
                key={idx}
                onClick={() => setCurrentPage('shop')}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
              >
                <div className="h-44 sm:h-48 overflow-hidden bg-slate-100 relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {cat.subtitle}
                    </p>
                    <span className="text-xs font-bold text-blue-600 mt-2 inline-flex items-center gap-1 group-hover:underline">
                      Shop Now <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pt-6 flex items-center justify-center space-x-2 text-xs font-bold">
            <button
              onClick={() => setCurrentPageNum(Math.max(1, currentPageNum - 1))}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition flex items-center space-x-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            {[1, 2, 3].map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPageNum(num)}
                className={`w-9 h-9 rounded-xl transition ${
                  currentPageNum === num
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {num}
              </button>
            ))}

            <span className="text-slate-400 px-1">...</span>

            <button
              onClick={() => setCurrentPageNum(151)}
              className="w-9 h-9 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
            >
              151
            </button>

            <button
              onClick={() => setCurrentPageNum(currentPageNum + 1)}
              className="px-3.5 py-2 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 transition flex items-center space-x-1"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { Search, Home, Compass } from 'lucide-react';

export default function NotFoundPage({ setCurrentPage, onPerformSearch }) {
  const [searchVal, setSearchVal] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onPerformSearch) {
      onPerformSearch(searchVal || 'Pikachu');
    } else {
      setCurrentPage('search-results');
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 text-center max-w-xl mx-auto">
      {/* 404 Big Heading */}
      <h1 className="text-7xl sm:text-8xl font-black text-[#2563EB] tracking-tight drop-shadow-sm select-none">
        404
      </h1>

      {/* Oops Title */}
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-4 tracking-tight">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-slate-500 text-sm sm:text-base max-w-md mx-auto mt-2.5 leading-relaxed">
        Looks like this Pokémon got away! The page you're looking for doesn't exist or has been moved.
      </p>

      {/* Search Input Box */}
      <form onSubmit={handleSearch} className="w-full max-w-md mt-6 relative">
        <input
          type="text"
          placeholder="Search for cards or products..."
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          className="w-full pl-4 pr-11 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-slate-800 placeholder-slate-400 shadow-sm transition bg-white"
        />
        <button 
          type="submit" 
          title="Search"
          className="absolute right-3.5 top-3 text-slate-400 hover:text-blue-600 transition"
        >
          <Search className="w-4 h-4" />
        </button>
      </form>

      {/* Action Buttons Row */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
        <button
          onClick={() => setCurrentPage('home')}
          className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold text-sm px-6 py-2.5 rounded-lg flex items-center space-x-2 shadow-sm transition active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Go to Homepage</span>
        </button>

        <button
          onClick={() => setCurrentPage('all-cards')}
          className="border border-[#2563EB] text-[#2563EB] hover:bg-blue-50 font-semibold text-sm px-6 py-2.5 rounded-lg transition active:scale-95 bg-white shadow-sm"
        >
          Browse Cards
        </button>
      </div>
    </div>
  );
}

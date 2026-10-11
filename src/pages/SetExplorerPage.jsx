import React, { useState } from 'react';
import { ShoppingCart, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { EXPLORER_SETS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function SetExplorerPage({ setCurrentPage }) {
  const { totalItemsCount } = useCart();
  const [activeTab, setActiveTab] = useState('All');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const tabs = ['All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header and Filter Tabs */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Card Set Explorer
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Browse and track market trends across all trading card game expansions.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                  activeTab === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage('cart')}
            className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1.5 shadow-sm transition"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>{totalItemsCount} items</span>
          </button>
        </div>
      </div>

      {/* 3 Columns x 4 Rows Set Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EXPLORER_SETS.map((set, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentPage('product')}
            className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center space-x-4 cursor-pointer group"
          >
            {/* Left: Thumbnail */}
            <div className="w-20 h-28 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex-shrink-0 flex items-center justify-center p-1">
              <img
                src={set.image}
                alt={set.name}
                className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
              />
            </div>

            {/* Right: Info, Market Value & Trend */}
            <div className="flex-1 min-w-0 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition truncate">
                  {set.name}
                </h3>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                  {set.badge}
                </span>
              </div>

              <p className="text-[11px] text-slate-400">
                {set.cardsInfo}
              </p>

              <div className="pt-1">
                <span className="text-[10px] text-slate-400 block font-medium">Market Value</span>
                <div className="flex items-center justify-between">
                  <span className="text-base font-black text-slate-900">
                    ${set.marketValue.toFixed(2)}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center space-x-0.5">
                    <TrendingUp className="w-3 h-3" />
                    <span>{set.trend}</span>
                  </span>
                </div>
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
  );
}

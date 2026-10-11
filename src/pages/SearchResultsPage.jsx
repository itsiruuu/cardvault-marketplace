import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';
import { SEARCH_RESULTS_ITEMS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function SearchResultsPage({ query = 'Pikachu', setCurrentPage }) {
  const { totalItemsCount, addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('All');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const tabs = ['All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
        <button 
          onClick={() => setCurrentPage('home')}
          className="hover:text-blue-600 transition"
        >
          Home
        </button>
        <span>&gt;</span>
        <span className="text-slate-900 font-bold">Search Results</span>
      </div>

      {/* Header & Match Count */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Results for <span className="text-blue-600">'{query}'</span>
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          <strong className="text-blue-600 font-bold">1,248</strong> matching items found
        </p>
      </div>

      {/* Filter Tabs & Cart Counter */}
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

      {/* 4 Columns x 3 Rows Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {SEARCH_RESULTS_ITEMS.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Image with Badge */}
              <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-3 h-52 flex items-center justify-center p-3">
                {/* Badge based on type */}
                {item.badgeType === 'in-stock' && (
                  <span className="absolute top-2.5 right-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    In Stock
                  </span>
                )}
                {item.badgeType === 'low-stock' && (
                  <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Low Stock
                  </span>
                )}
                {item.badgeType === 'pre-order' && (
                  <span className="absolute top-2.5 right-2.5 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                    Pre-Order
                  </span>
                )}

                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                />
              </div>

              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                {item.category}
              </span>
              <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition truncate mt-0.5">
                {item.title}
              </h3>

              <div className="text-base font-black text-slate-900 mt-2">
                ${item.price.toFixed(2)}
              </div>
            </div>

            <div className="mt-4">
              <button
                onClick={() => {
                  addToCart({
                    id: item.id,
                    name: item.title,
                    subtitle: `${item.category} · In Stock`,
                    price: item.price,
                    image: item.image,
                    trend: '+3.4%',
                    badge: item.badge
                  }, 1);
                }}
                className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm"
              >
                Add to Cart
              </button>
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

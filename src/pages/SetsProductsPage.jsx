import React, { useState } from 'react';
import { ShoppingCart, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CARD_SETS_PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function SetsProductsPage({ setCurrentPage, onSelectSet }) {
  const { totalItemsCount, addToCart } = useCart();
  const [activeTab, setActiveTab] = useState('All');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const tabs = ['All', 'Individual Cards', 'Booster Packs', 'Bundles', 'Pre-Orders', 'Accessories'];

  const exploreSets = CARD_SETS_PRODUCTS.slice(0, 4);
  const latestSets = CARD_SETS_PRODUCTS.slice(4, 12);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Page Title & Top Filter Tabs */}
      <div className="space-y-6">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Pokémon Sets Products
        </h1>

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

      {/* Section 1: Explore Card Sets */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Explore Card Sets
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Browse through the history of the Trading Card Game. From vintage base sets to the latest expansions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {exploreSets.map((set, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 mb-3 relative">
                  <img
                    src={set.image}
                    alt={set.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {set.name}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 truncate">
                  {set.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {set.subtitle}
                </p>

                {/* 3-Column Stats Bar */}
                <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-500 mt-3 bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
                  <div>
                    <span className="block text-slate-400 text-[9px]">Cards</span>
                    <strong className="text-slate-800 font-bold">{set.cardsCount}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px]">Released</span>
                    <strong className="text-slate-800 font-bold">{set.released}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px]">Trend</span>
                    <strong className="text-emerald-600 font-bold">{set.trend}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('product')}
                className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-bold py-2 rounded-xl text-xs"
              >
                View Set Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Latest Sets in Pokemon */}
      <section className="space-y-4">
        <div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Latest Sets in Pokemon
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Browse through the history of the Trading Card Game. From vintage base sets to the latest expansions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestSets.map((set, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition flex flex-col justify-between group"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 mb-3 relative">
                  <img
                    src={set.image}
                    alt={set.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  <span className="absolute bottom-2.5 left-2.5 bg-slate-950/80 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {set.name}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-slate-900 truncate">
                  {set.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  {set.subtitle}
                </p>

                {/* 3-Column Stats Bar */}
                <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-500 mt-3 bg-slate-50 p-2 rounded-xl text-center border border-slate-100">
                  <div>
                    <span className="block text-slate-400 text-[9px]">Cards</span>
                    <strong className="text-slate-800 font-bold">{set.cardsCount}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px]">Released</span>
                    <strong className="text-slate-800 font-bold">{set.released}</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400 text-[9px]">Trend</span>
                    <strong className="text-emerald-600 font-bold">{set.trend}</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentPage('product')}
                className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-bold py-2 rounded-xl text-xs"
              >
                View Set Details
              </button>
            </div>
          ))}
        </div>
      </section>

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

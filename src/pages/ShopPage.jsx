import React, { useState, useMemo } from 'react';
import { 
  Filter, 
  RotateCcw, 
  ChevronDown, 
  Star, 
  Plus, 
  SlidersHorizontal,
  Eye,
  Check,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function ShopPage({ onSelectProduct, setCurrentPage }) {
  const { addToCart } = useCart();
  
  // Filter States
  const [showFilters, setShowFilters] = useState(true);
  const [priceMax, setPriceMax] = useState(300);
  const [selectedSets, setSelectedSets] = useState([]);
  const [selectedRarity, setSelectedRarity] = useState('All');
  const [selectedCardType, setSelectedCardType] = useState('All Type');
  const [sortBy, setSortBy] = useState('featured');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const availableSets = [
    'Silver Tempest',
    'Lost Origin',
    'Astral Radiance',
    'Brilliant Stars',
    'Paldean Fates',
    'Pokemon 151',
    'Crown Zenith',
    'Ancient Origins',
    'Fusion Strike',
    'Evolving Skies'
  ];

  const rarityOptions = ['All', 'Common', 'Rare', 'Holo Rare', 'Ultra Rare', 'Secret Rare'];
  const cardTypes = ['All Type', 'Fire', 'Water', 'Grass', 'Lightning', 'Psychic', 'Darkness', 'Dragon', 'Colorless'];

  const handleToggleSet = (setName) => {
    if (selectedSets.includes(setName)) {
      setSelectedSets(selectedSets.filter(s => s !== setName));
    } else {
      setSelectedSets([...selectedSets, setName]);
    }
  };

  const handleResetFilters = () => {
    setPriceMax(300);
    setSelectedSets([]);
    setSelectedRarity('All');
    setSelectedCardType('All Type');
    setSortBy('featured');
    setCurrentPageNum(1);
  };

  // Filtered and Sorted Cards
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(item => {
      // Price filter
      if (item.price > priceMax) return false;

      // Set filter
      if (selectedSets.length > 0 && !selectedSets.includes(item.set)) {
        return false;
      }

      // Rarity filter
      if (selectedRarity !== 'All' && item.rarity !== selectedRarity) {
        return false;
      }

      // Card type filter
      if (selectedCardType !== 'All Type' && item.cardType !== selectedCardType) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0;
    });
  }, [priceMax, selectedSets, selectedRarity, selectedCardType, sortBy]);

  const handleCardClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    setCurrentPage('product');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Shop Pokémon Cards
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Explore singles, booster boxes, and graded slabs with authenticated escrow protection.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* Left Filter Sidebar */}
        {showFilters && (
          <aside className="w-full lg:w-72 bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-6 flex-shrink-0 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <SlidersHorizontal className="w-3.5 h-3.5 text-blue-600" />
                FILTER
              </span>
              <button
                onClick={handleResetFilters}
                className="text-xs text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 hover:underline"
              >
                <RotateCcw className="w-3 h-3" />
                Reset
              </button>
            </div>

            {/* Price Range Slider */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-2">
                Price Range: <span className="text-blue-600 font-black">${priceMax}</span>
              </label>
              <input
                type="range"
                min="5"
                max="500"
                step="5"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex items-center justify-between text-xs text-slate-500 mt-2 font-medium">
                <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">
                  $5
                </div>
                <span>To</span>
                <div className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-lg">
                  ${priceMax}
                </div>
              </div>
            </div>

            {/* Expansion Sets */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-3">
                Expansion Set
              </label>
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {availableSets.map((setName) => {
                  const isChecked = selectedSets.includes(setName);
                  return (
                    <label
                      key={setName}
                      className="flex items-center space-x-2 text-xs text-slate-700 cursor-pointer hover:text-blue-600 transition"
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => handleToggleSet(setName)}
                        className="rounded text-blue-600 focus:ring-blue-500 w-3.5 h-3.5 border-slate-300"
                      />
                      <span>{setName}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Rarity Buttons */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-2.5">
                Rarity
              </label>
              <div className="flex flex-wrap gap-1.5">
                {rarityOptions.map((rarity) => (
                  <button
                    key={rarity}
                    onClick={() => setSelectedRarity(rarity)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                      selectedRarity === rarity
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {rarity}
                  </button>
                ))}
              </div>
            </div>

            {/* Card Type Dropdown */}
            <div>
              <label className="text-xs font-bold text-slate-800 block mb-2">
                Card Type
              </label>
              <select
                value={selectedCardType}
                onChange={(e) => setSelectedCardType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {cardTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </aside>
        )}

        {/* Main Content Area */}
        <div className="flex-1 w-full">
          {/* Top Sort & Toggle Bar */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 mb-6 shadow-sm flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center space-x-3 text-xs text-slate-600">
              <span className="font-semibold">Showing:</span>
              <strong className="text-slate-900 font-bold">{filteredProducts.length} Results</strong>
            </div>

            <div className="flex items-center space-x-3">
              {/* Sort By */}
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-slate-500 font-medium hidden sm:inline">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Card Name (A-Z)</option>
                </select>
              </div>

              {/* Hide / Show Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
              >
                {showFilters ? 'Hide Filter' : 'Show Filter'}
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <p className="text-base font-bold text-slate-700">No collectibles match your filters</p>
              <p className="text-xs text-slate-400 mt-1">Try resetting the price range or expansion set.</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 bg-blue-600 text-white font-bold px-5 py-2 rounded-xl text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={`grid grid-cols-1 sm:grid-cols-2 ${showFilters ? 'xl:grid-cols-2' : 'md:grid-cols-3 xl:grid-cols-4'} gap-6`}>
              {filteredProducts.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Image Box */}
                    <div 
                      onClick={() => handleCardClick(card)}
                      className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-3 h-60 flex items-center justify-center p-3 cursor-pointer"
                    >
                      {/* Rarity Pill Badge */}
                      {card.badge && (
                        <span className="absolute top-2.5 right-2.5 bg-blue-100 text-blue-700 border border-blue-200 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                          {card.badge}
                        </span>
                      )}
                      {card.grade && (
                        <span className="absolute top-2.5 left-2.5 bg-amber-400 text-amber-950 text-[10px] font-black px-2 py-0.5 rounded shadow-sm">
                          {card.grade}
                        </span>
                      )}

                      <img
                        src={card.image || card.fallbackImage}
                        alt={card.name}
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Card Title & Subtitle */}
                    <h3 
                      onClick={() => handleCardClick(card)}
                      className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition truncate cursor-pointer"
                      title={card.name}
                    >
                      {card.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5 truncate">
                      {card.set} · {card.subtitle || card.setCode}
                    </p>
                    <div className="text-[11px] text-slate-400 mt-1">
                      Condition: <strong className="text-slate-600 font-semibold">{card.condition || 'Near Mint'}</strong>
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-base font-black text-slate-900">
                        ${card.price.toFixed(2)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleCardClick(card)}
                        className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition text-xs font-semibold"
                        title="View card details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => addToCart(card, 1)}
                        className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white transition text-xs font-bold flex items-center space-x-1 shadow-sm"
                        title="Add to cart"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          <div className="mt-10 flex items-center justify-center space-x-2 text-xs font-bold">
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

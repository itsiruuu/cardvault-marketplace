import React, { useState, useRef, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Globe, 
  DollarSign, 
  ShieldCheck, 
  ChevronDown, 
  Menu, 
  X,
  Layers,
  Compass,
  FileText
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { PRODUCTS } from '../data/mockData';

export default function Header({ 
  currentPage, 
  setCurrentPage, 
  onSelectProduct, 
  openSellModal, 
  openSupportModal,
  searchQuery,
  setSearchQuery,
  onPerformSearch
}) {
  const { totalItemsCount } = useCart();
  const [localSearch, setLocalSearch] = useState(searchQuery || '');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cardsDropdownOpen, setCardsDropdownOpen] = useState(false);
  const [setsDropdownOpen, setSetsDropdownOpen] = useState(false);
  const searchRef = useRef(null);

  // Filter products for dropdown search suggestions
  const searchResults = localSearch.trim() === '' 
    ? [] 
    : PRODUCTS.filter(p => 
        p.name.toLowerCase().includes(localSearch.toLowerCase()) ||
        p.set.toLowerCase().includes(localSearch.toLowerCase()) ||
        (p.grade && p.grade.toLowerCase().includes(localSearch.toLowerCase()))
      ).slice(0, 5);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelectSearchResult = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    setCurrentPage('product');
    setShowSearchResults(false);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onPerformSearch) {
      onPerformSearch(localSearch || 'Pikachu');
    }
    setShowSearchResults(false);
  };

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Notification & Utility Bar */}
      <div className="bg-[#0B1120] text-gray-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Region & Currency */}
          <div className="flex items-center space-x-6 text-[11px] font-medium tracking-wide">
            <div className="flex items-center space-x-1.5 hover:text-white cursor-pointer transition">
              <Globe className="w-3.5 h-3.5 text-blue-400" />
              <span>Region: <strong className="text-white font-semibold">Global</strong></span>
            </div>
            <div className="flex items-center space-x-1 hover:text-white cursor-pointer transition border-l border-slate-700 pl-4">
              <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
              <span>Currency: <strong className="text-white font-semibold">USD</strong></span>
            </div>
          </div>

          {/* Right: Authenticated & Support links */}
          <div className="flex items-center space-x-6 text-[11px]">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Authenticated PSA/CGC Graded Cards</span>
            </div>
            <button 
              onClick={openSupportModal}
              className="hover:text-white transition hidden sm:inline-block"
            >
              Support
            </button>
            <button 
              onClick={openSellModal}
              className="text-blue-300 hover:text-white font-medium hover:underline transition hidden sm:inline-block"
            >
              Sell With Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#1947D1] via-[#1D4ED8] to-[#2563EB] text-white px-4 py-3.5 transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Logo & Brand */}
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center space-x-2 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <span className="text-xl font-black tracking-tighter bg-gradient-to-br from-white via-blue-100 to-amber-300 bg-clip-text text-transparent">
                  CV
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-wider leading-none text-white drop-shadow-sm flex items-center gap-1">
                  CARD<span className="text-blue-200">VAULT</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse inline-block"></span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-blue-200 font-semibold opacity-90">
                  Poké Collectibles
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-1 text-sm font-semibold">
              <button 
                onClick={() => setCurrentPage('home')}
                className={`px-3 py-2 rounded-lg transition ${currentPage === 'home' ? 'bg-white/15 text-white shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
              >
                Home
              </button>

              {/* All Cards Dropdown */}
              <div className="relative" onMouseLeave={() => setCardsDropdownOpen(false)}>
                <button 
                  onMouseEnter={() => setCardsDropdownOpen(true)}
                  onClick={() => { setCurrentPage('all-cards'); setCardsDropdownOpen(!cardsDropdownOpen); }}
                  className={`px-3 py-2 rounded-lg flex items-center space-x-1 transition ${currentPage === 'all-cards' || currentPage === 'shop' ? 'bg-white/15 text-white shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
                >
                  <span>All Cards</span>
                  <ChevronDown className="w-4 h-4 opacity-80" />
                </button>

                {cardsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-60 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => { setCurrentPage('all-cards'); setCardsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 text-xs font-semibold text-slate-700 flex items-center justify-between"
                    >
                      <span>🔥 All Cards (Energy Types)</span>
                      <span className="text-[10px] text-blue-600 bg-blue-100 px-1.5 py-0.5 rounded font-bold">Figma</span>
                    </button>
                    <button 
                      onClick={() => { setCurrentPage('shop'); setCardsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 text-xs font-semibold text-slate-700 flex items-center justify-between"
                    >
                      <span>🃏 Shop Singles & Catalog</span>
                    </button>
                    <button 
                      onClick={() => { setCurrentPage('shop'); setCardsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 text-xs font-semibold text-slate-700 flex items-center justify-between"
                    >
                      <span>⭐ PSA 10 Graded Slabs</span>
                      <span className="text-[10px] text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">PSA</span>
                    </button>
                  </div>
                )}
              </div>

              {/* All Sets Dropdown */}
              <div className="relative" onMouseLeave={() => setSetsDropdownOpen(false)}>
                <button 
                  onMouseEnter={() => setSetsDropdownOpen(true)}
                  onClick={() => { setCurrentPage('sets-products'); setSetsDropdownOpen(!setsDropdownOpen); }}
                  className={`px-3 py-2 rounded-lg flex items-center space-x-1 transition ${currentPage === 'sets-products' || currentPage === 'set-explorer' ? 'bg-white/15 text-white shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
                >
                  <span>All Sets</span>
                  <ChevronDown className="w-4 h-4 opacity-80" />
                </button>

                {setsDropdownOpen && (
                  <div className="absolute left-0 mt-1 w-64 bg-white text-slate-800 rounded-xl shadow-2xl border border-slate-100 py-2 z-50 animate-fadeIn">
                    <button 
                      onClick={() => { setCurrentPage('sets-products'); setSetsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 text-xs font-bold text-slate-800 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-600" />
                        Pokémon Sets Products
                      </span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">Frame 1</span>
                    </button>
                    <button 
                      onClick={() => { setCurrentPage('set-explorer'); setSetsDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2 hover:bg-blue-50 text-xs font-bold text-slate-800 flex items-center justify-between"
                    >
                      <span className="flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5 text-amber-600" />
                        Card Set Explorer (151)
                      </span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Frame 2</span>
                    </button>
                  </div>
                )}
              </div>

              {/* News & Articles */}
              <button 
                onClick={() => setCurrentPage('news')}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition ${currentPage === 'news' ? 'bg-white/15 text-white shadow-sm' : 'text-blue-100 hover:text-white hover:bg-white/10'}`}
              >
                News & Articles
              </button>
            </div>
          </div>

          {/* Center/Right: Search Bar with Enter key navigation */}
          <div className="flex-1 max-w-md mx-4 relative" ref={searchRef}>
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                type="text"
                placeholder="Search items, sets, PSA... (press Enter)"
                value={localSearch}
                onChange={(e) => {
                  setLocalSearch(e.target.value);
                  setShowSearchResults(true);
                }}
                onFocus={() => setShowSearchResults(true)}
                className="w-full bg-white/15 text-white placeholder-blue-200 text-sm pl-10 pr-4 py-2.5 rounded-full border border-white/25 focus:outline-none focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:ring-2 focus:ring-blue-300 transition shadow-inner"
              />
              <Search className="w-4 h-4 text-blue-200 absolute left-3.5 top-3 pointer-events-none" />
              {localSearch && (
                <button 
                  type="button"
                  onClick={() => setLocalSearch('')}
                  className="absolute right-3 top-3 text-xs text-blue-200 hover:text-white"
                >
                  ✕
                </button>
              )}
            </form>

            {/* Live Search Suggestions Dropdown */}
            {showSearchResults && searchResults.length > 0 && (
              <div className="absolute top-12 left-0 right-0 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-2 z-50 animate-fadeIn">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 py-1.5 border-b border-slate-100 flex items-center justify-between">
                  <span>Matching Collectibles</span>
                  <button 
                    onClick={() => {
                      if (onPerformSearch) onPerformSearch(localSearch);
                      setShowSearchResults(false);
                    }}
                    className="text-blue-600 hover:underline capitalize"
                  >
                    View All Results &rarr;
                  </button>
                </div>
                {searchResults.map((card) => (
                  <div
                    key={card.id}
                    onClick={() => handleSelectSearchResult(card)}
                    className="flex items-center space-x-3 p-2.5 rounded-xl hover:bg-blue-50 cursor-pointer transition"
                  >
                    <img 
                      src={card.image || card.fallbackImage} 
                      alt={card.name} 
                      className="w-9 h-12 object-contain rounded border border-slate-200 bg-white" 
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 truncate">{card.name}</div>
                      <div className="text-[11px] text-slate-500 truncate">{card.set} · {card.rarity}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-extrabold text-blue-600">${card.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action Icons (User Account & Cart) */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={openSupportModal}
              title="User Account"
              className="p-2 rounded-full hover:bg-white/15 text-white transition focus:outline-none flex items-center justify-center"
            >
              <User className="w-5 h-5" />
            </button>

            <button
              onClick={() => setCurrentPage('cart')}
              className="relative p-2 rounded-full hover:bg-white/15 text-white transition focus:outline-none flex items-center justify-center group"
              title="View Cart"
            >
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-white text-blue-700 font-extrabold text-[11px] w-5 h-5 rounded-full flex items-center justify-center shadow-lg border border-blue-600">
                  {totalItemsCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-white/15 text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-white/20 mt-3 space-y-2 text-sm font-semibold animate-fadeIn">
            <button 
              onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentPage('all-cards'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15"
            >
              All Cards (Energy Filter)
            </button>
            <button 
              onClick={() => { setCurrentPage('sets-products'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15"
            >
              Pokémon Sets Products
            </button>
            <button 
              onClick={() => { setCurrentPage('set-explorer'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15"
            >
              Card Set Explorer (151)
            </button>
            <button 
              onClick={() => { setCurrentPage('news'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15"
            >
              News & Articles
            </button>
            <button 
              onClick={() => { setCurrentPage('cart'); setMobileMenuOpen(false); }}
              className="block w-full text-left px-3 py-2 rounded-lg hover:bg-white/15 flex items-center justify-between"
            >
              <span>View Cart</span>
              <span className="bg-white text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold">
                {totalItemsCount} items
              </span>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

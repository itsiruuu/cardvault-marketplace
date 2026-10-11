import React, { useState } from 'react';
import { 
  TrendingUp, 
  ShoppingCart, 
  Heart, 
  Share2, 
  ShieldCheck, 
  Check, 
  Calendar, 
  Flame, 
  ArrowLeft,
  Sparkles,
  Info
} from 'lucide-react';
import { PRODUCTS, GRADING_TIERS, CHART_DATA_POINTS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function ProductDetailPage({ product, onSelectProduct, setCurrentPage }) {
  const { addToCart, showToast } = useCart();

  // If no product passed, default to Charizard VMAX
  const currentProduct = product || PRODUCTS.find(p => p.id === 'charizard-vmax');

  const [quantity, setQuantity] = useState(1);
  const [selectedGrade, setSelectedGrade] = useState('PSA 10');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [wishlisted, setWishlisted] = useState(false);
  const [hoveredMonth, setHoveredMonth] = useState(null);

  // Price adjustment based on grade selection
  const gradeTier = GRADING_TIERS.find(t => t.grade === selectedGrade);
  const displayPrice = selectedGrade === 'PSA 10' 
    ? (currentProduct.price || 425.00) 
    : (gradeTier ? gradeTier.price : currentProduct.price);

  const relatedCards = PRODUCTS.filter(p => 
    p.id !== currentProduct.id && 
    (p.id === 'pikachu-vmax' || p.id === 'mewtwo-ex' || p.id === 'umbreon-vmax' || p.id === 'rayquaza-v')
  );

  const boosterSetProducts = PRODUCTS.filter(p => 
    p.category === 'booster-boxes' || p.category === 'special-sets'
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${currentProduct.name} on CardVault`,
        text: `Check out ${currentProduct.name} PSA 10 on CardVault!`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast('Product link copied to clipboard!');
    }
  };

  const handleToggleWishlist = () => {
    setWishlisted(!wishlisted);
    showToast(wishlisted ? 'Removed from wishlist' : 'Saved to your collector wishlist!');
  };

  // Chart months data for the spline
  const chartPoints = CHART_DATA_POINTS['2024'];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Back to Shop / Breadcrumb */}
      <div className="flex items-center space-x-2 text-xs text-slate-500">
        <button 
          onClick={() => setCurrentPage('shop')}
          className="hover:text-blue-600 transition flex items-center gap-1 font-semibold"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Shop</span>
        </button>
        <span>/</span>
        <span className="text-slate-400">{currentProduct.set}</span>
        <span>/</span>
        <span className="text-slate-900 font-bold">{currentProduct.name}</span>
      </div>

      {/* Main 2-Column Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* Left Column: Image & Set Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm flex items-center justify-center relative overflow-hidden group">
            {/* Holographic background sheen */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50/50 via-slate-50/20 to-amber-50/30 opacity-70"></div>
            
            <div className="relative z-10 max-w-sm w-full py-4 flex justify-center holo-card-shine">
              <img
                src={currentProduct.image || currentProduct.fallbackImage}
                alt={currentProduct.name}
                className="w-full max-w-[320px] h-auto object-contain rounded-xl drop-shadow-[0_15px_25px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Under-Image Metadata Info Box */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm space-y-2">
            <h3 className="text-sm font-bold text-slate-900">
              Prices for Pokemon {currentProduct.set} Pokemon Cards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Pokemon {currentProduct.set} card list & price guide. Ungraded & graded values for all Pokemon {currentProduct.setCode || 'TCG'} Cards with real-time liquidity scoring.
            </p>
            <div className="text-xs font-bold text-blue-600 pt-1">
              Set Code: <span className="text-slate-800 font-mono">{currentProduct.setCode || 'PAF'}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Pricing, Specs, Attacks & Cart Actions */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Header Title & Price */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {currentProduct.name}
            </h1>
            <p className="text-sm font-medium text-slate-500 mt-1">
              {currentProduct.subtitle || `${currentProduct.set} - 074/073`}
            </p>

            <div className="flex items-center space-x-3 mt-4">
              <span className="text-3xl sm:text-4xl font-black text-blue-600">
                ${displayPrice.toFixed(2)}
              </span>
              <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 text-xs font-bold px-2.5 py-1 rounded-full flex items-center space-x-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+12% this month</span>
              </span>
            </div>
          </div>

          {/* Card Details Box */}
          <div className="bg-slate-50/80 rounded-2xl border border-slate-200/80 p-4">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
              Card Details
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">Rarity</span>
                <strong className="text-slate-900">{currentProduct.rarity || 'Secret Rare'}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">Type</span>
                <strong className="text-slate-900">{currentProduct.cardType || 'Fire'}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">HP</span>
                <strong className="text-slate-900">{currentProduct.hp || 330}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">Artist</span>
                <strong className="text-slate-900">{currentProduct.artist || 'aky CG Works'}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">Condition</span>
                <strong className="text-slate-900">{currentProduct.condition || 'Near Mint'}</strong>
              </div>
              <div className="bg-white p-2.5 rounded-xl border border-slate-200/60">
                <span className="text-slate-400 block text-[10px] font-semibold">Grading</span>
                <strong className="text-amber-600 font-bold">{selectedGrade}</strong>
              </div>
            </div>
          </div>

          {/* Attacks Box */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">
              Attacks & Moves
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900">Claw Slash</span>
                <span className="font-mono font-bold text-slate-700">100 damage</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900">G-Max Wildfire</span>
                <span className="font-mono font-extrabold text-red-600">300 damage</span>
              </div>
            </div>
          </div>

          {/* Market Price Range */}
          <div className="bg-blue-50/60 rounded-2xl border border-blue-100 p-4">
            <div className="flex items-center justify-between text-xs font-bold text-blue-900 mb-2">
              <span>Market Price Range</span>
              <span className="text-[10px] font-semibold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-full">
                Past 30 Days
              </span>
            </div>
            <div className="grid grid-cols-4 gap-2 text-center text-xs">
              <div className="bg-white p-2 rounded-xl border border-blue-100 shadow-2xl">
                <span className="text-[10px] text-slate-400 block">Low</span>
                <strong className="text-slate-800">$410.00</strong>
              </div>
              <div className="bg-white p-2 rounded-xl border border-blue-100 shadow-2xl">
                <span className="text-[10px] text-slate-400 block">Mid</span>
                <strong className="text-slate-800">$440.00</strong>
              </div>
              <div className="bg-white p-2 rounded-xl border border-blue-100 shadow-2xl">
                <span className="text-[10px] text-slate-400 block">High</span>
                <strong className="text-slate-800">$490.00</strong>
              </div>
              <div className="bg-white p-2 rounded-xl border border-blue-100 shadow-2xl">
                <span className="text-[10px] text-slate-400 block">Avg</span>
                <strong className="text-blue-600 font-extrabold">$447.00</strong>
              </div>
            </div>
          </div>

          {/* Quantity & CTA Buttons */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3">
              {/* Quantity Counter */}
              <div className="flex items-center border border-slate-200 rounded-xl bg-white overflow-hidden shadow-sm">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-11 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-sm font-bold transition"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-slate-900 text-sm">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-11 flex items-center justify-center text-slate-600 hover:bg-slate-100 text-sm font-bold transition"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={() => {
                  addToCart({
                    ...currentProduct,
                    price: displayPrice,
                    subtitle: `${currentProduct.set} · ${selectedGrade}`
                  }, quantity);
                }}
                className="flex-1 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold h-11 rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center space-x-2 text-sm"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>Add to Cart</span>
              </button>
            </div>

            {/* Wishlist and Share */}
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleToggleWishlist}
                className={`h-10 rounded-xl border text-xs font-bold transition flex items-center justify-center space-x-1.5 ${
                  wishlisted 
                    ? 'bg-rose-50 border-rose-200 text-rose-600' 
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${wishlisted ? 'fill-rose-600 text-rose-600' : ''}`} />
                <span>{wishlisted ? 'In Wishlist' : 'Add to Wishlist'}</span>
              </button>

              <button
                onClick={handleShare}
                className="h-10 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-50 text-xs font-bold transition flex items-center justify-center space-x-1.5"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Card</span>
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* 2. PRICE INDEX CHART SECTION */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Price Index: Pokemon {currentProduct.set}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Average ungraded base card value (excludes variants) for Pokemon {currentProduct.set}
            </p>
          </div>

          {/* Year selector pills */}
          <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl self-start sm:self-auto">
            {['2024', '2025', '2026'].map((yr) => (
              <button
                key={yr}
                onClick={() => setSelectedYear(yr)}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                  selectedYear === yr
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                {yr}
              </button>
            ))}
          </div>
        </div>

        {/* Custom Interactive SVG Spline Line Chart */}
        <div className="border border-slate-100 rounded-2xl bg-gradient-to-b from-blue-50/20 to-white p-4 sm:p-6 relative">
          <div className="h-64 sm:h-72 w-full relative">
            
            {/* SVG Line Graph matching Figma bell curve */}
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1000 300" preserveAspectRatio="none">
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid Lines */}
              <line x1="0" y1="50" x2="1000" y2="50" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="1000" y2="120" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="0" y1="190" x2="1000" y2="190" stroke="#f1f5f9" strokeDasharray="4 4" />
              <line x1="0" y1="260" x2="1000" y2="260" stroke="#e2e8f0" />

              {/* Shaded Area Under Primary Line */}
              <path
                d="M 50 240 Q 200 240, 350 180 T 500 50 T 650 190 T 800 230 T 950 240 L 950 260 L 50 260 Z"
                fill="url(#chartGradient)"
              />

              {/* Year Line 1 (Teal/Cyan) */}
              <path
                d="M 50 240 Q 200 235, 350 160 T 500 35 T 650 180 T 800 225 T 950 238"
                fill="none"
                stroke="#06b6d4"
                strokeWidth="2.5"
              />

              {/* Year Line 2 (Orange/Red) */}
              <path
                d="M 50 245 Q 200 242, 350 190 T 500 80 T 650 210 T 800 235 T 950 242"
                fill="none"
                stroke="#f97316"
                strokeWidth="2"
                strokeDasharray="3 3"
              />

              {/* Year Line 3 (Primary Blue) */}
              <path
                d="M 50 250 Q 200 248, 350 210 T 500 120 T 650 230 T 800 245 T 950 248"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
              />

              {/* May Peak Marker */}
              <circle cx="500" cy="35" r="5" fill="#06b6d4" stroke="#ffffff" strokeWidth="2" />
              <text x="500" y="20" textAnchor="middle" fill="#0284c7" fontSize="12" fontWeight="bold">
                Peak: $949.50
              </text>
            </svg>

            {/* X-Axis Month Labels */}
            <div className="flex justify-between text-[11px] font-semibold text-slate-400 mt-4 px-2">
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((m) => (
                <span 
                  key={m} 
                  className={`hover:text-blue-600 cursor-pointer ${m === 'May' ? 'text-blue-600 font-bold' : ''}`}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grading Price Comparison Cards (Interactive Selection) */}
        <div>
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-3">
            Select Grade Tier
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {GRADING_TIERS.map((tier) => {
              const isSelected = selectedGrade === tier.grade;
              return (
                <div
                  key={tier.grade}
                  onClick={() => setSelectedGrade(tier.grade)}
                  className={`p-3.5 rounded-2xl border transition cursor-pointer text-left ${
                    isSelected
                      ? 'border-blue-600 bg-blue-50/60 shadow-md ring-2 ring-blue-500/20'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">
                      {tier.grade}
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-blue-600" />
                    )}
                  </div>
                  <div className="text-base font-black text-slate-900 mt-1">
                    ${tier.price.toFixed(2)}
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-0.5">
                    {tier.change}
                  </div>
                  <div className="text-[9px] text-slate-400 mt-1 truncate">
                    {tier.volume}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* 3. STRATEGY & TIPS SECTION */}
      <section className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-4">
        <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <Flame className="w-5 h-5 text-amber-500" />
          Strategy & Tips
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          Charizard VMAX is a powerful Fire-type Pokémon card that can deal massive damage with its G-Max Wildfire attack (300 base damage). This Secret Rare version from Champion's Path is highly sought after by collectors and competitive masters due to its stunning foil artwork and limited booster pack pull rates.
        </p>
        <div className="bg-amber-50/70 border border-amber-200/80 rounded-2xl p-4">
          <h4 className="text-xs font-black uppercase text-amber-900 mb-1">
            Investment Potential
          </h4>
          <p className="text-xs text-amber-800 leading-relaxed">
            This card has shown consistent growth over the past year, making it an excellent anchor asset for any long-term collection or alternative investment portfolio. The PSA 10 gem mint grade ensures maximum liquidity and preservation value over time.
          </p>
        </div>
      </section>


      {/* 4. RELATED CARDS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Related Cards
          </h2>
          <button
            onClick={() => setCurrentPage('shop')}
            className="text-xs font-bold text-blue-600 hover:underline"
          >
            View More
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedCards.map((card) => (
            <div
              key={card.id}
              onClick={() => {
                if (onSelectProduct) onSelectProduct(card);
              }}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-xl transition cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="h-44 bg-slate-50 rounded-xl p-3 flex items-center justify-center mb-3">
                  <img
                    src={card.image || card.fallbackImage}
                    alt={card.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition"
                  />
                </div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition truncate">
                  {card.name}
                </h4>
                <p className="text-[11px] text-slate-400 mt-0.5 truncate">
                  {card.set}
                </p>
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-sm font-black text-blue-600">
                  ${card.price.toFixed(2)}
                </span>
                <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {card.rarity}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. STORE PRODUCTS / BOOSTER PACKS GRID */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-black text-slate-900 tracking-tight">
            Store Products & Sealed Sets
          </h2>
          <button
            onClick={() => setCurrentPage('shop')}
            className="text-xs font-bold text-blue-600 hover:underline"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {boosterSetProducts.map((setProduct) => (
            <div
              key={setProduct.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="h-44 rounded-xl overflow-hidden bg-slate-100 mb-3 relative">
                  <img
                    src={setProduct.image || setProduct.fallbackImage}
                    alt={setProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-slate-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded backdrop-blur">
                    {setProduct.set}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-900 truncate">
                  {setProduct.name}
                </h4>
                <div className="grid grid-cols-3 gap-1 text-[10px] text-slate-500 mt-2 bg-slate-50 p-2 rounded-xl text-center">
                  <div>
                    <span className="block text-slate-400">Cards</span>
                    <strong className="text-slate-800">198</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400">Released</span>
                    <strong className="text-slate-800">Mar 2024</strong>
                  </div>
                  <div>
                    <span className="block text-slate-400">Trend</span>
                    <strong className="text-emerald-600">+12.4%</strong>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  addToCart(setProduct, 1);
                }}
                className="mt-4 w-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition font-bold py-2 rounded-xl text-xs"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

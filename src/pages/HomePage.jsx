import React, { useState } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Star, 
  ShieldCheck, 
  RotateCw, 
  CheckCircle2, 
  Plus, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  TrendingUp, 
  Award,
  ExternalLink,
  Flame,
  Zap
} from 'lucide-react';
import { CATEGORIES, PRODUCTS, REVIEWS, FAQS } from '../data/mockData';
import { useCart } from '../context/CartContext';

export default function HomePage({ setCurrentPage, onSelectProduct, openSupportModal }) {
  const { addToCart, showToast } = useCart();
  const [activeFeaturedFilter, setActiveFeaturedFilter] = useState('All');
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Filter featured products
  const featuredProducts = PRODUCTS.filter(p => {
    if (activeFeaturedFilter === 'All') return p.isFeatured;
    if (activeFeaturedFilter === 'TCG') return p.category === 'single-cards';
    if (activeFeaturedFilter === 'Booster') return p.category === 'booster-boxes' || p.category === 'booster-packs';
    if (activeFeaturedFilter === 'Sets') return p.category === 'special-sets' || p.category === 'elite-trainer-boxes';
    return p.isFeatured;
  });

  // Fresh restock products
  const restockProducts = PRODUCTS.filter(p => p.isRestock);

  // Graded cards
  const gradedCards = PRODUCTS.filter(p => p.isGraded).slice(0, 3);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      showToast('Welcome to the CardVault Collector Guild! 10% coupon code sent.');
      setNewsletterEmail('');
    }
  };

  const handleProductClick = (product) => {
    if (onSelectProduct) {
      onSelectProduct(product);
    }
    setCurrentPage('product');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-[#070D1E] text-white overflow-hidden py-14 lg:py-20 border-b border-blue-900/40">
        {/* Ambient Gradient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Hero Text & CTAs */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Pill Badge */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-semibold text-amber-300">
                <Flame className="w-3.5 h-3.5 text-amber-400" />
                <span className="tracking-wide">1ST EDITION SHADOWLESS</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                1st Edition Shadowless <br />
                <span className="bg-gradient-to-r from-blue-300 via-amber-200 to-amber-400 bg-clip-text text-transparent">
                  Charizard PSA 10
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-slate-300 text-base sm:text-lg max-w-xl leading-relaxed">
                The undisputed holy grail of Pokémon trading cards. Authenticated and permanently encapsulated in pristine Gem Mint 10 condition with verifiable blockchain provenance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => setCurrentPage('shop')}
                  className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-105 active:scale-95 transition flex items-center space-x-2 text-sm"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    const charizard = PRODUCTS.find(p => p.id === 'charizard-vmax');
                    handleProductClick(charizard);
                  }}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold px-7 py-3.5 rounded-xl backdrop-blur-md border border-white/20 hover:border-white/40 transition text-sm flex items-center space-x-2"
                >
                  <span>View Price Index</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </button>
              </div>

              {/* Social Proof Star Rating */}
              <div className="flex items-center space-x-3 pt-4 border-t border-slate-800/80">
                <div className="flex text-amber-400 space-x-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <div className="text-xs text-slate-300">
                  <strong className="text-white font-bold">4.9 / 5</strong> from over <span className="underline decoration-blue-500">1,240+ verified collectors</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Slabs Visual Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group cursor-pointer" onClick={() => {
                const charizard = PRODUCTS.find(p => p.id === 'charizard-vmax');
                handleProductClick(charizard);
              }}>
                {/* Glow Backdrop */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-amber-500 to-red-500 rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition duration-500"></div>

                {/* Main Featured Slab Frame */}
                <div className="relative bg-[#0d162d]/90 backdrop-blur-xl border border-blue-400/30 rounded-2xl p-4 shadow-2xl holo-card-shine transform group-hover:-translate-y-2 group-hover:rotate-1 transition-all duration-300">
                  {/* PSA Style Header Banner */}
                  <div className="bg-gradient-to-r from-red-600 via-red-500 to-amber-500 text-white rounded-t-lg px-3 py-1.5 flex items-center justify-between text-xs font-black tracking-wider shadow">
                    <span>PSA 10 GEM MT</span>
                    <span className="text-[10px] tracking-normal font-mono opacity-90">#48910244</span>
                  </div>

                  {/* Card Art Image */}
                  <div className="bg-slate-950 p-2 rounded-b-lg overflow-hidden flex justify-center relative">
                    <img 
                      src="https://images.pokemontcg.io/swsh35/74_hires.png" 
                      alt="Charizard VMAX PSA 10" 
                      className="w-64 sm:w-72 h-auto object-contain rounded drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]"
                    />
                    
                    {/* Floating Live Market Badge */}
                    <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center space-x-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      <span>$425.00 (+12%)</span>
                    </div>
                  </div>

                  <div className="mt-3 pt-2 border-t border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-semibold">1999 Base Set Shadowless</span>
                    <span className="text-amber-400 font-bold flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Authentic
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* 2. SHOP BY CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Shop by Category
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Explore authentic sealed booster boxes, graded slabs, and rare singles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => (
            <div
              key={category.id}
              onClick={() => setCurrentPage('shop')}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="h-44 sm:h-48 overflow-hidden bg-slate-100 relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                  {category.count}
                </span>
              </div>
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {category.subtitle}
                  </p>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 3. FEATURED PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Products
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Hand-picked verified grails and sealed collector bundles
            </p>
          </div>

          {/* Filter Pills (All, TCG, Booster, Sets) */}
          <div className="flex items-center space-x-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200 self-start sm:self-auto">
            {['All', 'TCG', 'Booster', 'Sets'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFeaturedFilter(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition ${
                  activeFeaturedFilter === tab
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid (3 Columns x 2 Rows) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Top Badge & Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-4 h-56 flex items-center justify-center p-3 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-2.5 left-2.5 z-10 bg-blue-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded shadow">
                      {product.badge}
                    </span>
                  )}
                  <img
                    src={product.image || product.fallbackImage}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <h3
                  onClick={() => handleProductClick(product)}
                  className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition cursor-pointer truncate"
                  title={product.name}
                >
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 truncate">
                  {product.subtitle}
                </p>

                {/* Rating */}
                <div className="flex items-center space-x-1.5 mt-2">
                  <div className="flex text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                  </div>
                  <span className="text-xs font-bold text-slate-700">
                    {product.rating}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    ({product.reviewsCount})
                  </span>
                </div>
              </div>

              {/* Price & Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="text-lg font-black text-slate-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="text-xs text-slate-400 line-through ml-2">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => addToCart(product, 1)}
                  className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-95 text-white flex items-center justify-center shadow-md shadow-blue-600/30 transition"
                  title="Add to cart"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 4. FRESH RESTOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-2">
          <RotateCw className="w-5 h-5 text-blue-600 animate-spin-slow" />
          <h2 className="text-2xl font-black text-slate-900 tracking-tight">
            Fresh Restocks
          </h2>
        </div>
        <p className="text-xs text-slate-500 mb-6">
          Restocked right now! Get them before they're gone
        </p>

        {/* 4-Item Restock Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {restockProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div 
                  className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-3 h-48 flex items-center justify-center p-3 cursor-pointer"
                  onClick={() => handleProductClick(item)}
                >
                  {/* Green In Stock Badge */}
                  <span className="absolute top-2.5 left-2.5 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    In Stock
                  </span>
                  <img
                    src={item.image || item.fallbackImage}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition"
                  />
                </div>

                <h3 
                  onClick={() => handleProductClick(item)}
                  className="text-xs font-bold text-slate-900 hover:text-blue-600 transition truncate cursor-pointer"
                >
                  {item.name}
                </h3>
                <p className="text-[11px] text-slate-500 truncate mt-0.5">
                  {item.subtitle}
                </p>

                <div className="mt-2 text-base font-extrabold text-slate-900">
                  ${item.price.toFixed(2)}
                </div>
              </div>

              <div className="mt-4">
                <button
                  onClick={() => addToCart(item, 1)}
                  className="w-full bg-blue-600 hover:bg-blue-500 active:scale-95 text-white font-bold py-2 rounded-xl text-xs transition shadow-sm"
                >
                  To Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 5. GRADED CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-amber-500" />
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                Graded Cards
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Premium, authenticated cards from PSA, CGC, and BGS
            </p>
          </div>

          <button
            onClick={() => setCurrentPage('shop')}
            className="text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline flex items-center space-x-1"
          >
            <span>View All Graded</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 3 Graded Slabs Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gradedCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-5 shadow-sm hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                {/* Slab visual showcase */}
                <div 
                  className="relative rounded-xl overflow-hidden bg-slate-50 border border-slate-100 mb-4 h-64 flex items-center justify-center p-4 cursor-pointer"
                  onClick={() => handleProductClick(card)}
                >
                  {/* PSA 10 Gold Badge */}
                  <div className="absolute top-3 right-3 bg-amber-400 text-amber-950 text-xs font-black px-2.5 py-1 rounded-md shadow flex items-center space-x-1">
                    <span>{card.grade || 'PSA 10'}</span>
                  </div>

                  <img
                    src={card.image || card.fallbackImage}
                    alt={card.name}
                    className="max-h-full max-w-full object-contain filter drop-shadow-md hover:scale-105 transition"
                  />
                </div>

                <h3 
                  onClick={() => handleProductClick(card)}
                  className="text-sm font-bold text-slate-900 hover:text-blue-600 transition truncate cursor-pointer"
                >
                  {card.name}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  {card.subtitle}
                </p>

                <div className="mt-3 flex items-baseline space-x-2">
                  <span className="text-xl font-black text-slate-900">
                    ${card.price.toFixed(2)}
                  </span>
                  <span className="text-[11px] text-emerald-600 font-semibold">
                    ✓ Authenticated & Insured
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <button
                  onClick={() => handleProductClick(card)}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition shadow-sm flex items-center justify-center space-x-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. VERIFIED REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Verified Reviews
          </h2>
          <div className="flex items-center justify-center space-x-2 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-slate-700">4.9 / 5</span>
            <span className="text-xs text-slate-500">(1,450+ Collector Reviews)</span>
          </div>
        </div>

        {/* 2x2 Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm hover:shadow-md transition space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                      {review.name}
                      <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-medium">
                        ✓ Verified
                      </span>
                    </h4>
                    <span className="text-[11px] text-slate-400">
                      {review.date}
                    </span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              <h5 className="text-xs font-bold text-slate-800">
                "{review.title}"
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </section>


      {/* 7. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Everything you need to know about purchasing, shipping, and authenticating cards on CardVault.
          </p>
        </div>

        {/* 2 Columns FAQ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {FAQS.map((faq, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-4 flex items-center justify-between text-xs font-bold text-slate-900 hover:text-blue-600 transition"
                >
                  <span className="pr-2">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs text-slate-600 leading-relaxed border-t border-slate-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="text-center mt-8">
          <p className="text-xs text-slate-500">
            Still have questions? Can't find what you're looking for?
          </p>
          <button
            onClick={openSupportModal}
            className="mt-3 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition shadow-sm"
          >
            Contact Us
          </button>
        </div>
      </section>


      {/* 8. NEWSLETTER CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center mx-auto mb-4 shadow-md shadow-blue-600/30">
            <Mail className="w-6 h-6" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Join Our Newsletter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto mt-2 leading-relaxed">
            Get instant notifications on secret restocks, market price drop alerts, and exclusive subscriber deals.
          </p>

          <form onSubmit={handleNewsletterSubmit} className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="w-full sm:flex-1 bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-xs shadow-md transition"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-600 font-bold mt-3">
              ✓ Subscribed! Check your inbox for your 10% welcome coupon.
            </p>
          )}
        </div>
      </section>

    </div>
  );
}

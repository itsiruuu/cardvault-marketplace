import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Footer({ setCurrentPage, openSupportModal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      showToast('Thank you for subscribing to CardVault drops!');
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#0B1120] text-gray-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info (2 Columns) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg">
                <span className="text-lg font-black text-white">CV</span>
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                CARD<span className="text-blue-400">VAULT</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted marketplace for authentic Pokémon cards, sealed booster packs, and investment-grade PSA & CGC graded slabs.
            </p>
            <div className="flex items-center space-x-3 text-xs text-emerald-400 pt-2 font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Authenticity Guarantee · CardVault™ Escrow Protected</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={() => setCurrentPage('home')}
                  className="hover:text-blue-400 transition"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('all-cards')}
                  className="hover:text-blue-400 transition"
                >
                  All Cards (Energy Filter)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('sets-products')}
                  className="hover:text-blue-400 transition"
                >
                  Pokémon Sets Products
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('set-explorer')}
                  className="hover:text-blue-400 transition"
                >
                  Card Set Explorer (151)
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('news')}
                  className="hover:text-blue-400 transition"
                >
                  News & Articles
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('product')}
                  className="hover:text-blue-400 transition"
                >
                  Charizard VMAX Tracker
                </button>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Customer Service
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button 
                  onClick={openSupportModal}
                  className="hover:text-blue-400 transition"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={openSupportModal}
                  className="hover:text-blue-400 transition"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button 
                  onClick={openSupportModal}
                  className="hover:text-blue-400 transition"
                >
                  FAQs
                </button>
              </li>
              <li>
                <button 
                  onClick={openSupportModal}
                  className="hover:text-blue-400 transition"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={openSupportModal}
                  className="hover:text-blue-400 transition"
                >
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe for exclusive restocks, secret sales & drops!
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex rounded-lg overflow-hidden border border-slate-700 focus-within:border-blue-500">
                <input 
                  type="email" 
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="bg-slate-900/90 text-white text-xs px-3 py-2.5 w-full focus:outline-none placeholder-slate-500"
                />
                <button 
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-500 text-white px-3 py-2.5 text-xs font-bold transition flex items-center justify-center"
                >
                  Join
                </button>
              </div>
              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-medium">
                  ✓ Subscribed successfully!
                </div>
              )}
            </form>

            {/* Social Icons (SVG) */}
            <div className="flex items-center space-x-3 pt-4 text-slate-400">
              <a href="#facebook" className="p-2 rounded-lg bg-slate-900 hover:bg-blue-600 hover:text-white transition" aria-label="Facebook">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#instagram" className="p-2 rounded-lg bg-slate-900 hover:bg-pink-600 hover:text-white transition" aria-label="Instagram">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#twitter" className="p-2 rounded-lg bg-slate-900 hover:bg-sky-500 hover:text-white transition" aria-label="X / Twitter">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#youtube" className="p-2 rounded-lg bg-slate-900 hover:bg-red-600 hover:text-white transition" aria-label="YouTube">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Payment Badges */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © 2026 CARDVAULT. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-[11px] mr-1 text-slate-400">We Accept:</span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
              VISA
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
              MasterCard
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
              PayPal
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-slate-300 border border-slate-700">
              Amex
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

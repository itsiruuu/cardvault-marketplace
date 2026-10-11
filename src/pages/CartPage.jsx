import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Trash2, 
  Lock, 
  ShieldCheck, 
  Tag, 
  TrendingUp, 
  ShoppingBag,
  Plus,
  Minus
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function CartPage({ setCurrentPage }) {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    subtotal, 
    estimatedTax, 
    insuredShipping, 
    total, 
    totalItemsCount,
    promoCode,
    setPromoCode,
    applyPromo,
    promoApplied,
    discountAmount
  } = useCart();

  const [inputCode, setInputCode] = useState('');
  const [promoFeedback, setPromoFeedback] = useState(null);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (inputCode) {
      const res = applyPromo(inputCode);
      setPromoFeedback(res);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Continue Shopping Link */}
      <button
        onClick={() => setCurrentPage('shop')}
        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1.5 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Continue Shopping</span>
      </button>

      {/* Cart Title */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Your Cart
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          {totalItemsCount} {totalItemsCount === 1 ? 'collector item' : 'collectors items'} ready for checkout
        </p>
      </div>

      {cartItems.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200/90 p-12 text-center space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <ShoppingBag className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-slate-800">Your cart is currently empty</h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Discover rare Pokémon singles, sealed booster boxes, and PSA 10 slabs in our marketplace.
          </p>
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl text-xs transition shadow-md"
          >
            Explore Pokémon Cards
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Cart Items List */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 transition hover:border-slate-300"
              >
                {/* Left: Thumbnail and Item Details */}
                <div className="flex items-center space-x-4 w-full sm:w-auto">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-bold text-slate-900 truncate">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 truncate mt-0.5">
                      {item.subtitle}
                    </p>

                    <div className="flex items-center space-x-2 mt-2">
                      <span className="text-base sm:text-lg font-black text-slate-900">
                        ${item.price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                      {item.trend && (
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center space-x-0.5">
                          <TrendingUp className="w-3 h-3" />
                          <span>{item.trend}</span>
                        </span>
                      )}
                      {item.badge && (
                        <span className="text-[10px] font-bold text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Quantity Stepper & Remove */}
                <div className="flex items-center space-x-3 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100">
                  <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50/80 overflow-hidden">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition"
                      title={item.quantity === 1 ? 'Remove item' : 'Decrease quantity'}
                    >
                      {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5 text-rose-500" /> : <Minus className="w-3.5 h-3.5" />}
                    </button>
                    <span className="w-8 text-center text-xs font-bold text-slate-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-200 transition"
                      title="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">
              Order Summary
            </h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({totalItemsCount} items)</span>
                <span className="font-bold text-slate-900">
                  ${subtotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-600 text-xs font-bold">
                  <span>Promo Discount</span>
                  <span>-${discountAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                </div>
              )}

              <div className="flex justify-between text-slate-600">
                <span>Estimated Tax (8%)</span>
                <span className="font-bold text-slate-900">
                  ${estimatedTax.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="flex justify-between text-slate-600">
                <span>Insured Shipping</span>
                <span className="font-bold text-slate-900">
                  ${insuredShipping.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>

              <div className="pt-3 border-t border-slate-200 flex justify-between text-lg sm:text-xl font-black text-slate-900">
                <span>Total</span>
                <span className="text-blue-600">
                  ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
              </div>
            </div>

            {/* Promo Code Form */}
            <div className="pt-2">
              <label className="text-xs font-bold text-slate-700 block mb-2">
                Promo Code
              </label>
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code (Try: VAULT10)"
                  value={inputCode}
                  onChange={(e) => setInputCode(e.target.value)}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 uppercase font-mono tracking-wider focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-[#0B1120] hover:bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs transition"
                >
                  Apply
                </button>
              </form>
              {promoFeedback && (
                <p className={`text-xs mt-1.5 font-semibold ${promoFeedback.success ? 'text-emerald-600' : 'text-rose-500'}`}>
                  {promoFeedback.message}
                </p>
              )}
            </div>

            {/* Proceed to Checkout CTA */}
            <button
              onClick={() => setCurrentPage('checkout')}
              className="w-full bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center space-x-2 text-sm"
            >
              <Lock className="w-4 h-4" />
              <span>Proceed to Checkout</span>
            </button>

            <div className="text-center">
              <p className="text-[11px] text-slate-400 flex items-center justify-center gap-1 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                Protected by CardVault™ Escrow Guarantee
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

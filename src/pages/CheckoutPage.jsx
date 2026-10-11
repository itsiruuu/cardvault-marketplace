import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Truck, 
  CreditCard, 
  ShieldCheck, 
  Lock, 
  CheckCircle,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useCart } from '../context/CartContext';

export default function CheckoutPage({ setCurrentPage, onOrderSuccess }) {
  const { total, clearCart, totalItemsCount } = useCart();

  // Form states
  const [formData, setFormData] = useState({
    firstName: 'Ash',
    lastName: 'Ketchum',
    address: '123 Pallet Town Way',
    city: 'Kanto Region',
    postalCode: '00151',
    cardNumber: '4532 •••• •••• 8812',
    expiryDate: '12/28',
    cvv: '•••',
  });

  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setOrderComplete(true);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {}

      if (onOrderSuccess) {
        onOrderSuccess();
      }
    }, 1200);
  };

  if (orderComplete) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-lg animate-bounce">
          <CheckCircle className="w-10 h-10" />
        </div>
        
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">
          Order Placed Successfully!
        </h1>
        <p className="text-sm text-slate-600 max-w-md mx-auto">
          Your order <strong className="font-mono text-blue-600">#CV-892419</strong> is protected by CardVault™ Escrow. Funds are safely secured until your cards arrive authenticated.
        </p>

        <div className="bg-white rounded-2xl border border-slate-200 p-6 max-w-md mx-auto text-left space-y-3 text-xs shadow-sm">
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-400">Total Paid</span>
            <span className="font-extrabold text-slate-900 text-sm">
              ${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-400">Recipient</span>
            <span className="font-bold text-slate-800">{formData.firstName} {formData.lastName}</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span className="text-slate-400">Shipping To</span>
            <span className="font-bold text-slate-800">{formData.address}, {formData.city}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Escrow Status</span>
            <span className="font-bold text-emerald-600 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              Secured in Vault Escrow
            </span>
          </div>
        </div>

        <button
          onClick={() => {
            clearCart();
            setCurrentPage('home');
          }}
          className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3.5 rounded-xl text-sm transition shadow-lg shadow-blue-600/30"
        >
          Return to Marketplace
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Back to Cart */}
      <button
        onClick={() => setCurrentPage('cart')}
        className="text-xs font-bold text-blue-600 hover:text-blue-700 flex items-center space-x-1.5 transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Cart</span>
      </button>

      {/* Header */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          Checkout
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          Secure transaction protected by CardVault™ escrow
        </p>
      </div>

      <form onSubmit={handleSubmitOrder} className="space-y-6">
        
        {/* 1. SHIPPING DETAILS CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Truck className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900">
              Shipping Details
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                First Name
              </label>
              <input
                type="text"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                Last Name
              </label>
              <input
                type="text"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-slate-700 font-bold mb-1.5">
                Street Address
              </label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                required
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                City
              </label>
              <input
                type="text"
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                required
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                Postal Code
              </label>
              <input
                type="text"
                value={formData.postalCode}
                onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                required
                className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>


        {/* 2. PAYMENT METHOD CARD */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-100">
            <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <h2 className="text-base font-bold text-slate-900">
              Payment Method
            </h2>
          </div>

          {/* Radio Option: Credit Card */}
          <div className="border-2 border-blue-600 bg-blue-50/40 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-white rounded-xl border border-blue-200 text-blue-600">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">
                  Credit or Debit Card
                </h4>
                <p className="text-[11px] text-slate-500">
                  Secure, encrypted payment processing
                </p>
              </div>
            </div>

            <div className="w-5 h-5 rounded-full border-2 border-blue-600 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600"></div>
            </div>
          </div>

          {/* Card Inputs */}
          <div className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-700 font-bold mb-1.5">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  placeholder="0000 0000 0000 0000"
                  required
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Lock className="w-4 h-4 text-slate-400 absolute right-3.5 top-3" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-slate-700 font-bold mb-1.5">
                  Expiry Date
                </label>
                <input
                  type="text"
                  value={formData.expiryDate}
                  onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                  placeholder="MM / YY"
                  required
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1.5">
                  CVV
                </label>
                <input
                  type="text"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  placeholder="•••"
                  required
                  className="w-full bg-slate-50/80 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Place Order CTA */}
        <div className="space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-500 active:scale-98 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/30 transition flex items-center justify-center space-x-2 text-sm disabled:opacity-75"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>{isSubmitting ? 'Securing Transaction...' : `Place Order · $${total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}</span>
          </button>

          <p className="text-[11px] text-center text-slate-400">
            By placing your order, you agree to CardVault Terms of Service & Escrow Safeguard.
          </p>
        </div>

      </form>
    </div>
  );
}

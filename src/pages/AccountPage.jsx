import React, { useState } from 'react';
import { 
  User, 
  Package, 
  Heart, 
  Settings, 
  ArrowRight, 
  Check, 
  X, 
  ShieldCheck, 
  Truck, 
  Clock, 
  ChevronRight,
  ExternalLink,
  Eye,
  Trash2,
  Lock,
  Bell
} from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function AccountPage({ setCurrentPage, initialTab = 'profile' }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const { 
    wishlistItems, 
    removeFromWishlist, 
    addToCart, 
    showToast 
  } = useCart();

  // Profile State
  const [profile, setProfile] = useState({
    firstName: 'john',
    lastName: 'doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: ''
  });

  // Settings Notifications State
  const [notifications, setNotifications] = useState({
    emailOffers: true,
    priceDropAlerts: true,
    newsletterUpdates: false,
    orderStatusUpdates: true
  });

  // Password State
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Selected Order for Details Modal
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Pagination for wishlist
  const [wishlistPage, setWishlistPage] = useState(1);

  // Orders mock data matching Image 2
  const orders = [
    {
      id: 'ORD-001',
      date: '2026-01-10',
      itemCount: 1,
      total: 425.00,
      status: 'Delivered',
      statusColor: 'emerald',
      items: [
        {
          name: 'Charizard VMAX PSA 10 Gem Mint',
          set: "Champion's Path #074/073",
          price: 425.00,
          qty: 1,
          image: 'https://images.pokemontcg.io/swsh35/74_hires.png'
        }
      ],
      trackingNumber: 'PSA-EXP-992819024',
      shippingAddress: '742 Evergreen Terrace, Springfield, OR'
    },
    {
      id: 'ORD-002',
      date: '2026-01-08',
      itemCount: 2,
      total: 189.98,
      status: 'Shipped',
      statusColor: 'blue',
      items: [
        {
          name: 'Paldean Fates Booster Box',
          set: 'Paldean Fates (36 Packs)',
          price: 120.00,
          qty: 1,
          image: 'https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&w=600&q=80'
        },
        {
          name: 'Pikachu VMAX (Rainbow)',
          set: 'Vivid Voltage - 188/185',
          price: 69.98,
          qty: 1,
          image: 'https://images.pokemontcg.io/swsh4/188_hires.png'
        }
      ],
      trackingNumber: 'FEDEX-TCG-78219011',
      shippingAddress: '742 Evergreen Terrace, Springfield, OR'
    },
    {
      id: 'ORD-003',
      date: '2026-01-05',
      itemCount: 1,
      total: 189.98,
      status: 'Processing',
      statusColor: 'amber',
      items: [
        {
          name: 'Scarlet & Violet Booster Box Bundle',
          set: 'Factory Sealed English Edition',
          price: 189.98,
          qty: 1,
          image: '/booster-pack.jpg'
        }
      ],
      trackingNumber: 'Pending Carrier Assignment',
      shippingAddress: '742 Evergreen Terrace, Springfield, OR'
    }
  ];

  const handleProfileSave = (e) => {
    e.preventDefault();
    showToast('Profile information saved successfully!');
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (!passwordForm.currentPassword) {
      showToast('Please enter your current password.');
      return;
    }
    if (passwordForm.newPassword !== passwordForm.confirmPassword) {
      showToast('New passwords do not match!');
      return;
    }
    if (passwordForm.newPassword.length < 6) {
      showToast('Password must be at least 6 characters.');
      return;
    }
    showToast('Password updated successfully!');
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Are you sure you want to permanently delete your Poké Pixels account? This action cannot be undone.')) {
      showToast('Account deletion request initiated.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Page Title */}
      <h1 className="text-3xl font-extrabold text-[#0F172A] tracking-tight mb-8">
        My Account
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Sidebar Navigation */}
        <aside className="md:col-span-4 lg:col-span-3">
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-3 space-y-1.5">
            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'profile'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <User className="w-5 h-5" />
              <span>Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('orders')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'orders'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Package className="w-5 h-5" />
              <span>Orders</span>
            </button>

            <button
              onClick={() => setActiveTab('wishlist')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'wishlist'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Heart className="w-5 h-5" />
              <span>Wishlist</span>
            </button>

            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-semibold transition ${
                activeTab === 'settings'
                  ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/20'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </button>
          </div>
        </aside>

        {/* Right Main Content Area */}
        <main className="md:col-span-8 lg:col-span-9">
          
          {/* TAB 1: PROFILE */}
          {activeTab === 'profile' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Profile Information
              </h2>

              <form onSubmit={handleProfileSave} className="space-y-4">
                {/* First and Last Name */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      First Name
                    </label>
                    <input
                      type="text"
                      value={profile.firstName}
                      onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Last Name
                    </label>
                    <input
                      type="text"
                      value={profile.lastName}
                      onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                  />
                </div>

                {/* Address */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                    Address
                  </label>
                  <textarea
                    rows={4}
                    value={profile.address}
                    onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                    placeholder="Enter your shipping address..."
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400 resize-y"
                  />
                </div>

                {/* Save Changes Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg text-sm shadow-sm transition active:scale-95"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 2: ORDERS */}
          {activeTab === 'orders' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Order History
              </h2>

              <div className="space-y-4">
                {orders.map((order) => {
                  let badgeStyles = 'bg-emerald-50 text-emerald-700 border-emerald-200';
                  if (order.statusColor === 'blue') badgeStyles = 'bg-blue-50 text-blue-700 border-blue-200';
                  if (order.statusColor === 'amber') badgeStyles = 'bg-amber-50 text-amber-700 border-amber-200';

                  return (
                    <div
                      key={order.id}
                      className="border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:shadow-sm transition"
                    >
                      {/* Top Row: Order ID & Status Badge */}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-sm text-slate-900">
                          {order.id}
                        </span>
                        <span className={`text-[11px] font-semibold px-3 py-0.5 rounded-full border ${badgeStyles}`}>
                          {order.status}
                        </span>
                      </div>

                      {/* Middle Row: Date, Items Count & Total Price */}
                      <div className="flex items-baseline justify-between mt-2">
                        <div>
                          <div className="text-xs text-slate-500">{order.date}</div>
                          <div className="text-xs text-slate-600 mt-0.5 font-medium">
                            {order.itemCount} item(s)
                          </div>
                        </div>
                        <div className="text-base font-extrabold text-slate-900">
                          ${order.total.toFixed(2)}
                        </div>
                      </div>

                      {/* Bottom Row: View Details Link */}
                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedOrder(order)}
                          className="text-xs font-semibold text-blue-600 hover:text-blue-700 flex items-center space-x-1 group"
                        >
                          <span>View Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </button>

                        <span className="text-[11px] text-slate-400">
                          Authenticated & Insured
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: WISHLIST */}
          {activeTab === 'wishlist' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-slate-900">
                  My Wishlist
                </h2>
                <span className="text-xs text-slate-500 font-medium">
                  {wishlistItems.length} saved item(s)
                </span>
              </div>

              {wishlistItems.length === 0 ? (
                <div className="text-center py-12">
                  <Heart className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <p className="text-slate-600 font-semibold text-sm">Your wishlist is currently empty.</p>
                  <button
                    onClick={() => setCurrentPage('all-cards')}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-lg hover:bg-blue-700 transition"
                  >
                    Explore Pokémon Cards
                  </button>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {wishlistItems.map((item) => (
                      <div
                        key={item.id}
                        className="rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition overflow-hidden bg-white p-3.5 flex flex-col justify-between group"
                      >
                        {/* Image Container with In Stock Badge */}
                        <div className="relative rounded-xl overflow-hidden bg-slate-100 aspect-[16/10] mb-3">
                          <img
                            src={item.image || '/booster-pack.jpg'}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <span className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[11px] font-bold px-2 py-0.5 rounded shadow-sm">
                            In Stock
                          </span>
                        </div>

                        {/* Card Info */}
                        <div className="space-y-1">
                          <div className="text-xs text-slate-500 font-medium">
                            {item.category || 'Booster Packs'}
                          </div>
                          <div className="text-sm font-bold text-slate-900 line-clamp-1">
                            {item.name}
                          </div>
                          <div className="text-sm font-extrabold text-blue-600">
                            ${Number(item.price).toFixed(2)}
                          </div>
                        </div>

                        {/* Action Buttons Row */}
                        <div className="mt-4 flex items-center space-x-2">
                          <button
                            onClick={() => addToCart(item)}
                            className="flex-1 bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-semibold py-2.5 px-4 rounded-lg transition text-center shadow-sm active:scale-95"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => removeFromWishlist(item.id)}
                            className="p-2.5 rounded-lg border border-slate-200 hover:bg-red-50 text-red-500 transition shadow-sm active:scale-95"
                            title="Remove from wishlist"
                          >
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Matching Screenshot */}
                  <div className="flex items-center justify-center space-x-2 pt-8">
                    <button
                      onClick={() => setWishlistPage(Math.max(1, wishlistPage - 1))}
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                    >
                      Previous
                    </button>
                    <button
                      onClick={() => setWishlistPage(1)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                        wishlistPage === 1 ? 'bg-blue-600 text-white shadow-sm' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      1
                    </button>
                    <button
                      onClick={() => setWishlistPage(2)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                        wishlistPage === 2 ? 'bg-blue-600 text-white shadow-sm' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      2
                    </button>
                    <button
                      onClick={() => setWishlistPage(3)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition ${
                        wishlistPage === 3 ? 'bg-blue-600 text-white shadow-sm' : 'border border-slate-200 text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      3
                    </button>
                    <button
                      onClick={() => setWishlistPage(Math.min(3, wishlistPage + 1))}
                      className="px-3.5 py-1.5 rounded-lg border border-slate-200 text-xs font-medium text-slate-600 hover:bg-slate-50 transition"
                    >
                      Next
                    </button>
                  </div>
                </>
              )}
            </div>
          )}

          {/* TAB 4: SETTINGS */}
          {activeTab === 'settings' && (
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 sm:p-8">
              <h2 className="text-lg font-bold text-slate-900 mb-6">
                Account Settings
              </h2>

              {/* Section 1: Notifications */}
              <div className="space-y-4">
                <div className="flex items-center space-x-2 text-sm font-bold text-slate-900">
                  <span className="text-base">🔔</span>
                  <span>Notifications</span>
                </div>

                <div className="space-y-3 pl-1">
                  <label className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={notifications.emailOffers}
                      onChange={(e) => setNotifications({ ...notifications, emailOffers: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
                    />
                    <span>Email notifications for new offers</span>
                  </label>

                  <label className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={notifications.priceDropAlerts}
                      onChange={(e) => setNotifications({ ...notifications, priceDropAlerts: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
                    />
                    <span>Price drop alerts for wishlist items</span>
                  </label>

                  <label className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={notifications.newsletterUpdates}
                      onChange={(e) => setNotifications({ ...notifications, newsletterUpdates: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
                    />
                    <span>Newsletter and product updates</span>
                  </label>

                  <label className="flex items-center space-x-3 text-xs sm:text-sm font-medium text-slate-700 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={notifications.orderStatusUpdates}
                      onChange={(e) => setNotifications({ ...notifications, orderStatusUpdates: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
                    />
                    <span>Order status updates</span>
                  </label>
                </div>
              </div>

              {/* Section 2: Change Password */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-sm font-bold text-slate-900 mb-4">
                  Change Password
                </h3>

                <form onSubmit={handlePasswordUpdate} className="space-y-4 max-w-md">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Current Password
                    </label>
                    <input
                      type="password"
                      value={passwordForm.currentPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, currentPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      New Password
                    </label>
                    <input
                      type="password"
                      value={passwordForm.newPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, newPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      value={passwordForm.confirmPassword}
                      onChange={(e) => setPasswordForm({ ...passwordForm, confirmPassword: e.target.value })}
                      placeholder="••••••••"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-slate-800 placeholder-slate-400"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="bg-[#2563EB] hover:bg-blue-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm transition active:scale-95"
                    >
                      Update Password
                    </button>
                  </div>
                </form>
              </div>

              {/* Divider */}
              <hr className="my-8 border-slate-200" />

              {/* Section 3: Delete Account */}
              <div>
                <button
                  type="button"
                  onClick={handleDeleteAccount}
                  className="bg-[#DC2626] hover:bg-red-700 text-white font-semibold px-5 py-2.5 rounded-lg text-sm shadow-sm transition active:scale-95"
                >
                  Delete Account
                </button>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* Interactive Order Details Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedOrder(null)}
              className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">Order {selectedOrder.id} Details</h3>
                <p className="text-xs text-slate-500">Placed on {selectedOrder.date}</p>
              </div>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-xl text-xs space-y-2 mb-4 border border-slate-100">
              <div className="flex justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="font-bold text-slate-900">{selectedOrder.status}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Tracking Code:</span>
                <span className="font-mono text-blue-600 font-semibold">{selectedOrder.trackingNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Ship to:</span>
                <span className="text-slate-700 truncate max-w-[220px]">{selectedOrder.shippingAddress}</span>
              </div>
            </div>

            <div className="divide-y divide-slate-100 max-h-48 overflow-y-auto mb-4">
              {selectedOrder.items.map((item, idx) => (
                <div key={idx} className="py-2.5 flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-10 h-14 object-contain rounded bg-slate-50 border border-slate-200" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-slate-900 truncate">{item.name}</p>
                    <p className="text-[11px] text-slate-500">{item.set}</p>
                    <p className="text-[11px] text-slate-400">Qty: {item.qty}</p>
                  </div>
                  <div className="text-xs font-extrabold text-slate-900">
                    ${item.price.toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">Total Paid:</span>
              <span className="text-lg font-black text-blue-600">${selectedOrder.total.toFixed(2)}</span>
            </div>

            <button
              onClick={() => {
                showToast('Official Poké Pixels escrow invoice receipt downloaded!');
                setSelectedOrder(null);
              }}
              className="mt-4 w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl shadow-sm transition"
            >
              Download PDF Invoice
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

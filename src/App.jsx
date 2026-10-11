import React, { useState, useEffect } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AllCardsPage from './pages/AllCardsPage';
import SetsProductsPage from './pages/SetsProductsPage';
import SetExplorerPage from './pages/SetExplorerPage';
import NewsPage from './pages/NewsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import SupportModal from './components/SupportModal';
import SellModal from './components/SellModal';
import { PRODUCTS } from './data/mockData';

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [searchQuery, setSearchQuery] = useState('Pikachu');
  const [isSupportOpen, setIsSupportOpen] = useState(false);
  const [isSellOpen, setIsSellOpen] = useState(false);
  const { toastMessage } = useCart();

  // Scroll to top on page switch
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
    setCurrentPage('product');
  };

  const handlePerformSearch = (query) => {
    setSearchQuery(query || 'Pikachu');
    setCurrentPage('search-results');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-blue-600 selection:text-white">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B1120] text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs font-bold flex items-center space-x-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onSelectProduct={handleSelectProduct}
        openSupportModal={() => setIsSupportOpen(true)}
        openSellModal={() => setIsSellOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onPerformSearch={handlePerformSearch}
      />

      {/* Dynamic Page Routing for All Figma Frames */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            setCurrentPage={setCurrentPage}
            onSelectProduct={handleSelectProduct}
            openSupportModal={() => setIsSupportOpen(true)}
          />
        )}

        {currentPage === 'all-cards' && (
          <AllCardsPage
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'sets-products' && (
          <SetsProductsPage
            setCurrentPage={setCurrentPage}
            onSelectSet={() => setCurrentPage('product')}
          />
        )}

        {currentPage === 'set-explorer' && (
          <SetExplorerPage
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'news' && (
          <NewsPage
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'search-results' && (
          <SearchResultsPage
            query={searchQuery}
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'shop' && (
          <ShopPage
            setCurrentPage={setCurrentPage}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'product' && (
          <ProductDetailPage
            product={selectedProduct}
            setCurrentPage={setCurrentPage}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentPage === 'cart' && (
          <CartPage
            setCurrentPage={setCurrentPage}
          />
        )}

        {currentPage === 'checkout' && (
          <CheckoutPage
            setCurrentPage={setCurrentPage}
            onOrderSuccess={() => {}}
          />
        )}
      </main>

      {/* Global Footer */}
      <Footer
        setCurrentPage={setCurrentPage}
        openSupportModal={() => setIsSupportOpen(true)}
      />

      {/* Modals */}
      <SupportModal
        isOpen={isSupportOpen}
        onClose={() => setIsSupportOpen(false)}
      />

      <SellModal
        isOpen={isSellOpen}
        onClose={() => setIsSellOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}

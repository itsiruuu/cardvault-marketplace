import React, { createContext, useContext, useState, useEffect } from 'react';
import { PRODUCTS } from '../data/mockData';

const CartContext = createContext();

export function CartProvider({ children }) {
  // Pre-loaded with 3 items matching Figma design screenshot (Base Set Unlimited Booster Box, etc.)
  const [cartItems, setCartItems] = useState([
    {
      id: 'base-set-unlimited-box',
      name: 'Base Set Unlimited Booster Box',
      subtitle: 'Condition: Factory Sealed | Series: WotC',
      price: 15000.00,
      image: 'https://images.pokemontcg.io/base1/4_hires.png',
      quantity: 1,
      trend: '+2.4%',
      badge: 'Rare'
    },
    {
      id: 'charizard-vmax',
      name: 'Charizard VMAX PSA 10',
      subtitle: "Champion's Path #074/073 · PSA 10 Gem Mint",
      price: 425.00,
      image: 'https://images.pokemontcg.io/swsh35/74_hires.png',
      quantity: 1,
      trend: '+12%',
      badge: 'Secret Rare'
    },
    {
      id: 'evolving-skies-pack',
      name: 'Evolving Skies Booster Pack',
      subtitle: 'Factory Sealed | Series: Sword & Shield',
      price: 11.99,
      image: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80',
      quantity: 2,
      trend: '+4.1%',
      badge: 'Popular'
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (message) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const addToCart = (product, quantity = 1) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prev, {
          id: product.id,
          name: product.name,
          subtitle: product.subtitle || `${product.set} · ${product.condition || 'Mint'}`,
          price: product.price,
          image: product.image || product.fallbackImage,
          quantity: quantity,
          trend: product.monthlyTrend || '+3.2%',
          badge: product.rarity || product.badge || 'Rare'
        }];
      }
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const updateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id);
      return;
    }
    setCartItems(prev =>
      prev.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
    showToast('Item removed from cart');
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const applyPromo = (code) => {
    const trimmed = code.trim().toUpperCase();
    if (trimmed === 'VAULT10' || trimmed === 'POKE10' || trimmed === 'PIXEL10') {
      setDiscountPercent(10);
      setPromoApplied(true);
      showToast('10% Discount promo code applied!');
      return { success: true, message: '10% discount applied!' };
    } else if (trimmed === 'VIP20') {
      setDiscountPercent(20);
      setPromoApplied(true);
      showToast('20% VIP collector discount applied!');
      return { success: true, message: '20% VIP discount applied!' };
    } else {
      showToast('Invalid promo code. Try VAULT10');
      return { success: false, message: 'Invalid code. Use VAULT10' };
    }
  };

  // Calculations
  const rawSubtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = (rawSubtotal * discountPercent) / 100;
  const subtotal = rawSubtotal - discountAmount;
  const estimatedTax = rawSubtotal > 0 ? (subtotal * 0.08) : 0; // 8% tax
  const insuredShipping = rawSubtotal > 500 ? 45.00 : (rawSubtotal > 0 ? 15.00 : 0);
  const total = subtotal + estimatedTax + insuredShipping;
  const totalItemsCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        promoCode,
        setPromoCode,
        promoApplied,
        discountPercent,
        applyPromo,
        rawSubtotal,
        discountAmount,
        subtotal,
        estimatedTax,
        insuredShipping,
        total,
        totalItemsCount,
        isCartDrawerOpen,
        setIsCartDrawerOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

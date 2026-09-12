'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface CartItem extends Product {
  quantity: number;
}

export default function MaterialsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    paymentMethod: 'Cash on Delivery',
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch data from server');
        return res.json();
      })
      .then((data: Product[]) => {
        const customizedData = data.map((item, index) => {
          let customTitle = item.title;
          let customCategory = "Worker Safety & Gear";
          
          if (index % 4 === 0) {
            customTitle = "Heavy-Duty Worker Safety Helmet";
            customCategory = "Protection Gear";
          } else if (index % 4 === 1) {
            customTitle = "Professional Construction Leather Gloves";
            customCategory = "Labor Essentials";
          } else if (index % 4 === 2) {
            customTitle = "Industrial Steel-Toe Safety Boots";
            customCategory = "Footwear";
          } else {
            customTitle = "High-Visibility Labor Safety Vest";
            customCategory = "Apparel";
          }

          return { ...item, title: customTitle, category: customCategory };
        });
        setProducts(customizedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setCartItemState: setCart([]);
    setTimeout(() => {
      setOrderSuccess(false);
      setIsCheckoutOpen(false);
      setIsCartOpen(false);
    }, 5000);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-200 transition-colors duration-300">
      <Navbar />

      {/* রিয়েল প্রফেশনাল শপিং কার্ট ফ্লোটিং বাটন */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsCartOpen(true)}
          className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3.5 rounded-full shadow-2xl font-bold flex items-center space-x-3 transition-all transform hover:scale-105 cursor-pointer"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span>Cart</span>
          <span className="bg-white text-amber-600 px-2 py-0.5 rounded-full text-xs">
            {cart.reduce((acc, item) => acc + item.quantity, 0)}
          </span>
        </button>
      </div>

      {/* কার্ট সাইডবার ড্রয়ার */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-sm flex justify-end">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl flex flex-col p-6 transition-all">
            <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-800">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H19m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Your Equipment Cart
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="text-slate-500 hover:text-red-500 font-bold text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-slate-400 py-20">Your cart is empty.</p>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between bg-slate-100 dark:bg-slate-800 p-4 rounded-xl">
                    <div>
                      <h4 className="font-bold text-sm line-clamp-1">{item.title}</h4>
                      <p className="text-xs text-amber-600 font-semibold">${item.price} × {item.quantity}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-xs font-bold hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                  </div>
                ))
              )}
            </div>

            {cart.length > 0 && (
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total:</span>
                  <span className="text-amber-600">${totalPrice.toFixed(2)}</span>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    setIsCheckoutOpen(true);
                  }}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-colors cursor-pointer"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* চেকআউট ও পেমেন্ট মোডাল */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white dark:bg-slate-900 w-full max-w-lg rounded-3xl shadow-2xl p-8 relative">
            <button 
              onClick={() => setIsCheckoutOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-red-500 font-bold cursor-pointer"
            >
              ✕
            </button>

            {orderSuccess ? (
              <div className="text-center py-10 space-y-4">
                {/* রিয়েল গ্রিন এনিমেটেড চেকমার্ক আইকন */}
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner animate-bounce">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-green-600">Order Placed Successfully!</h3>
                <p className="text-sm text-slate-500">Thank you! Your equipment order has been registered for site delivery.</p>
              </div>
            ) : (
              <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold mb-4">Checkout & Payment</h3>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Delivery Address</label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Construction site address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase mb-1">Payment Method</label>
                  <select
                    value={formData.paymentMethod}
                    onChange={(e) => setFormData({ ...formData, paymentMethod: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Cash on Delivery">Cash on Delivery (COD)</option>
                    <option value="Credit Card">Credit / Debit Card</option>
                    <option value="Bank Transfer">Company Bank Transfer</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 rounded-xl transition-colors mt-4 cursor-pointer"
                >
                  Confirm Order (${totalPrice.toFixed(2)})
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Worker <span className="text-amber-600">Safety & Equipment Inventory</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto text-sm md:text-base mb-8">
            Live fetched inventory with active shopping cart and secure checkout system.
          </p>

          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search worker safety gear & tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-3 rounded-2xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-sm transition-all text-sm"
            />
          </div>
        </div>

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block w-10 h-10 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-lg font-medium">Loading worker inventory...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20 text-red-500 font-semibold">
            <p>Error: {error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-800 flex flex-col justify-between transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div>
                  <div className="relative w-full h-48 mb-4 bg-white rounded-xl p-2 flex items-center justify-center">
                    <Image src={product.image} alt={product.title} fill className="object-contain p-2" />
                  </div>
                  <span className="text-xs uppercase font-bold text-amber-600 tracking-wider">{product.category}</span>
                  <h3 className="font-bold text-base mt-1 mb-2 line-clamp-1">{product.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mb-4">Essential certified gear designed for daily construction site workers.</p>
                </div>
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-lg font-bold text-amber-600">${product.price}</span>
                  <button 
                    onClick={() => addToCart(product)}
                    className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors active:scale-95 cursor-pointer"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
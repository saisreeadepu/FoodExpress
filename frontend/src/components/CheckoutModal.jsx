import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, Banknote, CheckCircle, Loader2 } from 'lucide-react';

const CheckoutModal = ({ isOpen, onClose, item }) => {
  const [paymentMethod, setPaymentMethod] = useState('razorpay');
  const [status, setStatus] = useState('idle'); // 'idle', 'processing', 'success'

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setStatus('idle');
      setPaymentMethod('razorpay');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen || !item) return null;

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    setStatus('processing');

    // Simulate network delay for payment processing
    setTimeout(() => {
      setStatus('success');
    }, paymentMethod === 'razorpay' ? 2500 : 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      >
        {/* Dark Blurred Backdrop */}
        <div 
          className="absolute inset-0 bg-darkHero/80 backdrop-blur-md cursor-pointer"
          onClick={() => status !== 'processing' && onClose()}
        ></div>

        <motion.div
          initial={{ scale: 0.95, y: 30, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-white rounded-[2rem] w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
        >
          {status !== 'success' && (
            <button 
              onClick={onClose}
              disabled={status === 'processing'}
              className="absolute top-6 right-6 z-20 bg-gray-100 hover:bg-gray-200 text-gray-800 p-2 rounded-full transition-colors disabled:opacity-50"
            >
              <X size={20} />
            </button>
          )}

          {/* Left Column: Order Summary */}
          <div className="w-full md:w-2/5 bg-gray-50 p-8 flex flex-col border-r border-gray-100">
            <h3 className="text-2xl font-black text-gray-900 mb-6">Order Summary</h3>
            
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 mb-6">
              <img src={item.img} alt={item.name} className="w-20 h-20 rounded-xl object-cover" />
              <div>
                <h4 className="font-bold text-gray-900 leading-tight">{item.name}</h4>
                <p className="text-primary font-black mt-1">{item.price}</p>
              </div>
            </div>

            <div className="space-y-3 text-sm text-gray-600 mb-6 border-b border-gray-200 pb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-gray-900">{item.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span className="font-semibold text-gray-900">₹40</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span className="font-semibold text-gray-900">₹25</span>
              </div>
            </div>

            <div className="flex justify-between items-center mt-auto">
              <span className="text-lg font-bold text-gray-900">Total</span>
              <span className="text-2xl font-black text-primary">
                {/* Simple parse of price for display purposes, assuming format '₹XXX' */}
                ₹{(parseInt(item.price.replace('₹', '')) + 65).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Right Column: Checkout Flow */}
          <div className="w-full md:w-3/5 bg-white relative">
            
            {/* Idle State (Form) */}
            {status === 'idle' && (
              <form onSubmit={handleConfirmOrder} className="p-8 h-full flex flex-col overflow-y-auto custom-scrollbar">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Delivery Details</h3>
                
                <div className="space-y-4 mb-8">
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Delivery Address</label>
                    <textarea required rows="2" placeholder="123 Food Street, Apt 4B" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all resize-none"></textarea>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Phone Number</label>
                    <input required type="tel" placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Method</h3>
                <div className="space-y-3 mb-8">
                  {/* Razorpay Option */}
                  <label className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'razorpay' ? 'border-primary bg-yellow-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="razorpay" 
                      checked={paymentMethod === 'razorpay'} 
                      onChange={() => setPaymentMethod('razorpay')}
                      className="hidden" 
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${paymentMethod === 'razorpay' ? 'border-primary' : 'border-gray-300'}`}>
                      {paymentMethod === 'razorpay' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                    </div>
                    <CreditCard className={`mr-3 ${paymentMethod === 'razorpay' ? 'text-primary' : 'text-gray-400'}`} size={24} />
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-900">Razorpay</h4>
                      <p className="text-xs text-gray-500">Credit Card, Debit Card, UPI, NetBanking</p>
                    </div>
                  </label>

                  {/* COD Option */}
                  <label className={`flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-primary bg-yellow-50' : 'border-gray-100 hover:border-gray-200 bg-white'}`}>
                    <input 
                      type="radio" 
                      name="payment" 
                      value="cod" 
                      checked={paymentMethod === 'cod'} 
                      onChange={() => setPaymentMethod('cod')}
                      className="hidden" 
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 ${paymentMethod === 'cod' ? 'border-primary' : 'border-gray-300'}`}>
                      {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 bg-primary rounded-full"></div>}
                    </div>
                    <Banknote className={`mr-3 ${paymentMethod === 'cod' ? 'text-primary' : 'text-gray-400'}`} size={24} />
                    <div className="flex-grow">
                      <h4 className="font-bold text-gray-900">Cash on Delivery</h4>
                      <p className="text-xs text-gray-500">Pay directly to the delivery partner</p>
                    </div>
                  </label>
                </div>

                <button type="submit" className="mt-auto w-full py-4 bg-gradient-to-r from-darkHero to-gray-900 hover:from-black hover:to-black text-white rounded-xl font-bold text-lg shadow-lg transform hover:-translate-y-1 transition-all">
                  Confirm Order
                </button>
              </form>
            )}

            {/* Processing State */}
            {status === 'processing' && (
              <div className="p-8 h-full flex flex-col items-center justify-center text-center">
                <Loader2 className="animate-spin text-primary mb-6" size={64} />
                <h2 className="text-2xl font-black text-gray-900 mb-2">Processing Payment</h2>
                <p className="text-gray-500">Please do not close this window or press back.</p>
                {paymentMethod === 'razorpay' && (
                   <div className="mt-8 px-6 py-3 bg-gray-50 rounded-xl border border-gray-100 inline-flex items-center gap-2">
                     <span className="text-sm font-bold text-gray-600">Secure Payment via</span>
                     <span className="font-black tracking-wider text-[#3395FF]">Razorpay</span>
                   </div>
                )}
              </div>
            )}

            {/* Success State */}
            {status === 'success' && (
              <div className="p-8 h-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-white to-green-50 overflow-y-auto custom-scrollbar">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-full max-w-sm rounded-3xl overflow-hidden shadow-xl mb-6 relative border-4 border-green-100"
                >
                  <video 
                    src="/success-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-green-500 shadow-md">
                    <CheckCircle size={24} />
                  </div>
                </motion.div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">Order Successful!</h2>
                <p className="text-gray-600 mb-6 max-w-xs mx-auto text-sm">
                  Your order for <strong>{item.name}</strong> has been confirmed and is being prepared.
                </p>
                
                <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-green-100 mb-6 w-full max-w-xs text-left flex justify-between items-center">
                   <div>
                     <p className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mb-1">Order ID</p>
                     <p className="font-mono font-bold text-gray-900 text-base">#FEX-{Math.floor(100000 + Math.random() * 900000)}</p>
                   </div>
                   <CheckCircle className="text-green-500" size={20} />
                </div>

                <button 
                  onClick={onClose}
                  className="w-full max-w-xs py-3.5 bg-primary hover:bg-yellow-500 text-darkHero rounded-xl font-bold shadow-md transition-all"
                >
                  Continue Browsing
                </button>
              </div>
            )}

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default CheckoutModal;

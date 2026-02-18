import React from 'react';
// Is line ko PromoBanner.jsx mein update karo
import { Truck, PhoneCall, RotateCcw, BadgePercent, ArrowRight } from "lucide-react";

export default function TrustSection() {
  return (
    // Section Background: Light Gray
    <section className="bg-gray-50 py-16 relative overflow-hidden">
      
      {/* --- BACKGROUND PIXEL HEARTS (Decorative) --- */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none select-none" 
           style={{ backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 20 20"><path fill="%23FFB1B1" d="M5 2h2v2H5V2zm2 2h2v2H7V4zm4-2h2v2h-2V2zm2 2h2v2h-2V4zM3 4h2v2H3V4zm0 2h2v2H3V6zm2 2h2v2H5V8zm2 2h2v2H7v-2zm4-2h2v2h-2V8zm2-2h2v2h-2V6zm2-2h2v2h-2V4zm0 2h2v2h-2V6zM9 12h2v2H9v-2zm2 2h2v2h-2v-2zm2 2h2v2h-2v-2zM7 14h2v2H7v-2zm-2 2h2v2H5v-2z"/></svg>')` }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        
        {/* --- 1. TRUST FEATURES STRIP --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Fast Delivery */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
              <Truck size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#4A3434] uppercase tracking-tighter">Fast Delivery</h4>
              <p className="text-[10px] text-gray-400 font-medium">Fast shipping on all orders</p>
            </div>
          </div>

          {/* Online Support */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
              <PhoneCall size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#4A3434] uppercase tracking-tighter">Online Support 24/7</h4>
              <p className="text-[10px] text-gray-400 font-medium">Support online 24 hours a day</p>
            </div>
          </div>

          {/* Money Return */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
              <RotateCcw size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#4A3434] uppercase tracking-tighter">Money Return</h4>
              <p className="text-[10px] text-gray-400 font-medium">Back guarantee under 7 days</p>
            </div>
          </div>

          {/* Member Discount */}
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-white rounded-2xl shadow-sm text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
              <BadgePercent size={28} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="text-sm font-black text-[#4A3434] uppercase tracking-tighter">Member Discount</h4>
              <p className="text-[10px] text-gray-400 font-medium">On every order over ₹5000.00</p>
            </div>
          </div>

        </div>

        {/* --- 2. PROMO BANNER (Blue Accent like Screenshot) --- */}
        <div className="bg-[#D1E1F0] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm border border-white/50">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <h2 className="text-lg md:text-xl font-black text-[#2B5BA9] uppercase tracking-tighter">
              Super discount for your <span className="underline decoration-wavy underline-offset-4">first purchase</span>
            </h2>
            
            <div className="flex items-center gap-3">
               <div className="border-2 border-dashed border-[#2B5BA9] px-4 py-2 rounded-lg bg-white/50 font-bold text-[#2B5BA9] tracking-widest">
                 WELCOME10
               </div>
               <p className="text-[11px] font-bold text-[#2B5BA9]/70 uppercase">Use discount code in the checkout!</p>
            </div>
          </div>

          <button className="bg-[#2B5BA9] text-white px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:bg-[#4A3434] transition-all shadow-md active:scale-95">
            Shop Now <ArrowRight size={16} />
          </button>
        </div>

      </div>
    </section>
  );
}
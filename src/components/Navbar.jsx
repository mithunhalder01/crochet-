import React, { useState } from "react";
import {
  Menu, Search, User, ShoppingCart, ChevronDown, Phone, X,
  Mail, Instagram, Facebook, Twitter, MessageCircle
} from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      
      {/* --- SIDEBAR OVERLAY --- */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[60] transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* --- SIDEBAR MENU (Ab White hai) --- */}
      <div className={`fixed top-0 left-0 h-full w-[320px] bg-white z-[70] shadow-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex flex-col h-full overflow-y-auto custom-scrollbar">
          
          {/* Sidebar Header */}
          <div className="p-6 flex justify-between items-center border-b border-gray-100">
             <h2 className="text-xl font-bold text-[#4A3434]">The Crochet Land</h2>
             <X size={24} className="cursor-pointer text-gray-400" onClick={() => setIsOpen(false)} />
          </div>

          <div className="p-6">
            {/* 1. BROWSE CATEGORIES */}
            <div className="mb-8">
              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">Browse Categories</p>
              <nav className="flex flex-col gap-4 text-[#4A3434] font-medium">
                <div className="flex justify-between items-center cursor-pointer hover:text-[#FFB1B1] transition">
                  Accessories <ChevronDown size={16}/>
                </div>
                {["Bags", "Blankets", "Bouquets", "VALENTINES COLLECTION", "Flower Pots", "Home Decor", "Plushies", "फूल"].map((item) => (
                  <span key={item} className="cursor-pointer hover:text-[#FFB1B1] transition">{item}</span>
                ))}
              </nav>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* 2. MAIN MENU */}
            <div className="mb-8">
              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">Main Menu</p>
              <nav className="flex flex-col gap-4 text-[#4A3434] font-medium">
                {["Home", "Shop", "About Us", "Privacy Policy", "Refund and Returns Policy", "FAQ"].map((item) => (
                  <span key={item} className="cursor-pointer hover:text-[#FFB1B1] transition">{item}</span>
                ))}
              </nav>
            </div>

            <hr className="my-6 border-gray-100" />

            {/* 3. CONTACT DETAILS */}
            <div className="mb-8">
              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">Helps</p>
              <div className="flex items-center gap-2 mb-6 cursor-pointer hover:text-[#FFB1B1] text-[#4A3434]">
                <MessageCircle size={18} />
                <span className="font-medium">Contact Support</span>
              </div>

              <p className="text-[11px] font-bold text-gray-400 tracking-widest uppercase mb-4">Contact Details</p>
              <div className="space-y-6 text-[#4A3434]">
                <div className="flex items-start gap-3">
                  <Phone size={20} className="text-[#FFB1B1] mt-1" />
                  <div>
                    <p className="font-bold text-lg">+91 87804 06864</p>
                    <p className="text-xs text-gray-400">Available 9 am to 6 pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={20} className="text-[#FFB1B1] mt-1" />
                  <div>
                    <p className="font-bold">contact@thecrochetland.in</p>
                    <p className="text-xs text-gray-400">Response within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 4. SOCIAL ICONS */}
            <div className="flex gap-4 mb-8">
              <Instagram size={20} className="text-gray-400 cursor-pointer hover:text-[#FFB1B1] transition" />
              <Facebook size={20} className="text-gray-400 cursor-pointer hover:text-[#FFB1B1] transition" />
              <Twitter size={20} className="text-gray-400 cursor-pointer hover:text-[#FFB1B1] transition" />
            </div>
          </div>

          {/* Sidebar Footer */}
          <div className="mt-auto p-6 bg-gray-50 border-t border-gray-100 text-[11px] text-gray-400">
            <p>Copyright 2026 © The Crochet Land.</p>
            <p className="mt-1 font-medium text-[#FFB1B1]">Powered by Mithun's Dev Studio.</p>
          </div>
        </div>
      </div>

      {/* --- MAIN HEADER (Ab White hai) --- */}
      <div className="bg-white px-4 md:px-8 py-4 md:py-6 relative border-b border-gray-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-6">
            <Menu size={24} className="md:hidden cursor-pointer text-[#4A3434]" onClick={() => setIsOpen(true)} />
            <h1 className="text-lg md:text-2xl font-bold tracking-tight text-[#4A3434]">The Crochet Land</h1>
            <button onClick={() => setIsOpen(true)} className="hidden md:flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-full bg-white text-[#4A3434] hover:border-[#FFB1B1] hover:text-[#FFB1B1] transition-all">
              <Menu size={16} />
              <span className="font-medium text-sm">Menu</span>
            </button>
          </div>
          
          <div className="flex items-center gap-4 md:gap-10">
            <Search size={20} className="md:hidden cursor-pointer text-[#4A3434]" />
            <div className="flex items-center gap-2 cursor-pointer text-[#4A3434] hover:text-[#FFB1B1] transition group">
              <User size={20} />
              <div className="text-sm hidden md:block">
                <p className="text-gray-400 text-[10px]">Sign In</p>
                <p className="font-bold group-hover:text-[#FFB1B1]">Account</p>
              </div>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-[#4A3434] hover:text-[#FFB1B1] relative transition group">
              <ShoppingCart size={20} />
              <div className="text-sm hidden md:block">
                <p className="text-gray-400 text-[10px]">Total</p>
                <p className="font-bold group-hover:text-[#FFB1B1]">₹0.00</p>
              </div>
              <span className="absolute -top-2 left-4 bg-[#FFB1B1] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full shadow-sm">0</span>
            </div>
          </div>
        </div>

        {/* Search Bar - Desktop Only */}
        <div className="hidden md:block md:w-[40%] md:absolute md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2">
          <div className="flex items-center w-full bg-gray-50 border border-transparent rounded-full px-5 py-2 shadow-sm focus-within:bg-white focus-within:border-gray-200 transition-all">
            <input type="text" placeholder="Search for products..." className="w-full px-2 py-1 outline-none text-sm bg-transparent text-[#4A3434]" />
            <Search size={18} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* CATEGORY NAVIGATION */}
      <nav className="bg-white border-b border-gray-100 px-4 md:px-8 py-3 flex md:justify-center gap-6 md:gap-10 text-[#4A3434] font-medium text-[11px] tracking-widest overflow-x-auto whitespace-nowrap scrollbar-hide uppercase">
        {["Accessories", "Bags", "Blankets", "Bouquets", "Flower Pots"].map((cat) => (
          <span key={cat} className="hover:text-[#FFB1B1] cursor-pointer transition">{cat}</span>
        ))}
        <span className="hover:text-[#FFB1B1] cursor-pointer text-[#FFB1B1] font-bold">Best Discounts</span>
      </nav>
    </header>
  );
};

export default Navbar;
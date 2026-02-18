import { Store, Truck, MapPin, ThumbsUp } from "lucide-react";

export default function FeaturesStrip() {
  return (
    // Background pure white aur border ekdam light gray
    <div className="bg-white border-b border-gray-100 py-8">

      <div className="
        max-w-6xl 
        mx-auto 
        px-4 
        grid 
        grid-cols-2 
        md:grid-cols-4 
        gap-y-8 
        gap-x-4
        text-[10px] sm:text-xs
        font-bold
        text-[#4A3434]
      ">

        {/* Item 1 */}
        <div className="flex flex-col items-center text-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center bg-[#FFB1B1]/10 rounded-full text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
            <Store size={20} strokeWidth={2} />
          </div>
          <span className="tracking-widest uppercase leading-tight">Free pickup <br/> in stores</span>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center text-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center bg-[#FFB1B1]/10 rounded-full text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
            <Truck size={20} strokeWidth={2} />
          </div>
          <span className="tracking-widest uppercase leading-tight">Free delivery <br/> ₹2999+</span>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center text-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center bg-[#FFB1B1]/10 rounded-full text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
            <MapPin size={20} strokeWidth={2} />
          </div>
          <span className="tracking-widest uppercase leading-tight">Track your <br/> order</span>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col items-center text-center gap-3 group">
          <div className="w-12 h-12 flex items-center justify-center bg-[#FFB1B1]/10 rounded-full text-[#FFB1B1] group-hover:bg-[#FFB1B1] group-hover:text-white transition-all duration-300">
            <ThumbsUp size={20} strokeWidth={2} />
          </div>
          <span className="tracking-widest uppercase leading-tight">100% <br/> Satisfaction</span>
        </div>

      </div>
    </div>
  );
}
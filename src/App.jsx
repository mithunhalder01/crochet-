import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import FeaturesStrip from "./components/FeaturesStrip";
import BottomNav from "./components/BottomNav";
import ProductSlider from "./components/ProductSlider";
import PromoBanner from "./components/PromoBanner";
import CategoryGrid from "./components/categoryGrid";


function App() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <FeaturesStrip />
      <ProductSlider />
      <PromoBanner />
      <CategoryGrid />
      <BottomNav />

    </>
  );
  
}

export default App;

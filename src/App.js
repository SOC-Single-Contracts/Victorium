import Navbar from "./components/Navbar";
import HeroSection from "./sections/Hero";
import AboutSection from "./sections/About";
import ProductsSection from "./sections/Products";
import NewsSection from "./sections/News";
import DirectorsSection from "./sections/Directors";
import FAQSection from "./sections/FAQ";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="dark:bg-[#111920] scroll-smooth">
      <header>
        <Navbar />
      </header>

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <NewsSection />
      <DirectorsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;

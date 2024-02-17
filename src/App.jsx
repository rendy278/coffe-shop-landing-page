import Navbar from "../src/components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Stats from "./components/Stats/Stats";
import OpenSection from "./components/Open Section/OpenSection";
import FlowerSection from "./components/FlowerSection/FlowerSection";
import Cta from "./components/Cta/Cta";
import Pastries from "./components/Pastries/Pastries";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";
const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <OpenSection />
      <FlowerSection />
      <Cta />
      <Pastries />
      <Reservation />
      <Footer />
    </div>
  );
};

export default App;

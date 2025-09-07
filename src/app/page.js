import Navbar from "./Components/layout/Navbar";
import Hero from "./Components/layout/Hero";
import Powerful from "./Components/layout/Powerful";
import Creators from "./Components/layout/Creators";
import PricingCard from "./Components/layout/PricingCard";
import Footer from "./Components/layout/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-[url(/gradientBackground.png)] bg-cover bg-no-repeat h-[100vh]">
        <Navbar />
        <Hero />
        <Powerful />
        <Creators />
        <PricingCard />
        <Footer />
      </div>
    </>
  );
}

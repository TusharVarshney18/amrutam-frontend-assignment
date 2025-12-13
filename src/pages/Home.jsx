import { memo } from "react";
import ProductSection from "../components/ProductSlider";
import SEO from "../components/SEO";

const Home = () => {
  <SEO
    title="Amrutam Ayurveda – Shop, Learn & Heal Naturally"
    description="Explore Ayurvedic products, find doctors, learn about herbs, and join the Ayurveda forum."
    canonical="https://yourdomain.com/"
  />;

  return (
    <div>
      <ProductSection />
    </div>
  );
};

export default memo(Home);

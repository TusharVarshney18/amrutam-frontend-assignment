import { memo } from "react";
import ProductSection from "../components/ProductSlider";
import StoreHero from "../components/StoreHero";
import SEO from "../components/SEO";

const Home = () => {
  <SEO
    title="Shop Ayurvedic Wellness Products – Amrutam Store"
    description="Buy Ayurvedic oils, powders, supplements, skincare and authentic herbal products from Amrutam."
    canonical="https://yourdomain.com/shop"
  />;
  return (
    <div>
      <StoreHero />
      <ProductSection />
    </div>
  );
};

export default memo(Home);

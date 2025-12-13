import storeImage from "../assets/store.png";
import SEO from "../components/SEO";

function StoreHero() {
  <SEO
    title="Shop Ayurvedic Wellness Products – Amrutam Store"
    description="Buy Ayurvedic oils, powders, supplements, skincare and authentic herbal products from Amrutam."
    canonical="https://yourdomain.com/shop"
  />;

  return (
    <div
      className="w-full bg-cover bg-center bg-no-repeat py-10 px-4"
      style={{ backgroundImage: `url(${storeImage})` }}
    >
      {/* Heading */}
      <h1 className="text-center text-2xl font-semibold text-[#0C5C4C] mb-6">
        Store
      </h1>

      {/* Search bar container */}
      <div className="max-w-[600px] mx-auto flex items-center bg-white rounded-xl shadow-sm px-4 py-3 gap-3">
        <span className="text-xl">🔍</span>
        <input
          type="text"
          placeholder="Search for Kuntal Care"
          className="flex-1 outline-none text-sm"
        />
        <button className="h-8 w-8 border border-gray-400 rounded-lg flex items-center justify-center">
          📦
        </button>
      </div>
    </div>
  );
}

export default StoreHero;

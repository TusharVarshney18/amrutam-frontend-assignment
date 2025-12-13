import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

import ProductGallery from "../components/product/ProductGallery";
import ProductMainInfo from "../components/product/ProductMainInfo";
import ProductHighlights from "../components/product/ProductHighlights";
import ProductIngredients from "../components/product/ProductIngredients";
import ProductUsage from "../components/product/ProductUsage";
import CategoryFilter from "../components/CategoryFilter";
import ProductGeneral from "../components/product/ProductGeneral";
import ProductFAQ from "../components/product/ProductFAQ";
import ProductVideo from "../components/product/ProductVideo";
import ProductReviews from "../components/product/ProductReviews";
import ProductRelated from "../components/product/ProductRelated";
import ExpertsCarousel from "../components/expert/ExpertCarousel";
import SEO from "../components/SEO";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h1 className="text-center mt-10">Product not found</h1>;
  }

  <SEO
    title={`${product.name} – Ayurvedic Product by Amrutam`}
    description={product.shortDescription}
    canonical={`https://yourwebsite.com/product/${product.id}`}
    image={product.images?.[0]}
  />;

  return (
    <div className="max-w-full mx-auto px-4 bg-[#FFF9E9]">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="mt-6 mb-4 border border-[#0C5C4C] text-[#0C5C4C] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0C5C4C] hover:text-white transition"
      >
        ← Back
      </button>

      <div className="mt-4">
        <CategoryFilter selected="All" setSelected={() => {}} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 md:mt-16 lg:px-12 items-start">
        <ProductGallery images={product.gallery} main={product.image} />

        <div className="flex flex-col gap-8">
          <ProductMainInfo product={product} />
          <ProductHighlights items={product.highlights} />
          <ProductIngredients
            ingredients={product.ingredients}
            onViewAll={() => navigate("/ingredients")}
          />
          <ProductUsage howToUse={product.howToUse} />
          <ProductGeneral instructions={product.instructions} />
          <ProductFAQ faq={product.faq} />
          <ProductVideo video={product.video} />
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12">
        <ProductReviews
          rating={product.rating}
          reviews={product.reviews}
          reviewsList={product.reviewsList}
        />
      </div>

      <ProductRelated
        currentId={product.id}
        relatedProducts={product.relatedProducts}
        title="You may also like"
      />

      <ExpertsCarousel />
    </div>
  );
}

export default ProductDetail;

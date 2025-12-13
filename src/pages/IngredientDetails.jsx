// src/pages/IngredientDetail.jsx
import { useParams, useNavigate } from "react-router-dom";
import { ingredients } from "../data/ingredients";
import { products } from "../data/products";

import IngredientHeader from "../components/ingredient/IngredientHeader";
import IngredientWhy from "../components/ingredient/IngredientWhy";
import IngredientPrakriti from "../components/ingredient/IngredientPrakriti";
import IngredientBenefits from "../components/ingredient/IngredientBenefits";
import IngredientProperties from "../components/ingredient/IngredientProperties";
import IngredientFormulations from "../components/ingredient/IngredientFormulations";
import IngredientTherapeutic from "../components/ingredient/IngredientTherapeutic";
import IngredientPlants from "../components/ingredient/IngredientPlants";
import IngredientBestCombine from "../components/ingredient/IngredientCombined";
import IngredientGeoLocations from "../components/ingredient/IngredientLocation";
import IngredientRelatedProducts from "../components/ingredient/IngredientRelatedProducts";
import SEO from "../components/SEO";

function IngredientDetail({ addToCart }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const ingredient = ingredients.find((i) => i.id === id);
  <SEO
    title={`${ingredient.name} – Benefits, Origins & Ayurvedic Use`}
    description={ingredient.shortDescription}
    canonical={`https://yourwebsite.com/ingredients/${ingredient.id}`}
    image={ingredient.image}
  />;

  if (!ingredient)
    return <h2 className="text-center mt-10">Ingredient Not Found</h2>;

  const relatedProducts = products.filter((p) =>
    ingredient.products?.includes(p.id)
  );

  return (
    <div className="bg-[#FFF9E9] min-h-screen px-4 lg:px-16 py-10">
      <button
        onClick={() => navigate(-1)}
        className="border border-[#0C5C4C] text-[#0C5C4C] px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0C5C4C] hover:text-white transition mb-6"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* LEFT IMAGE */}
        <div className="flex justify-center bg-[#FDEAD2] rounded-2xl p-6">
          <img
            src={ingredient.image}
            alt={ingredient.name}
            className="w-full max-w-[330px] object-contain"
          />
        </div>

        {/* RIGHT CONTENT STACK VERTICAL */}
        <div className="flex flex-col gap-10">
          <IngredientHeader ingredient={ingredient} />
          <IngredientWhy name={ingredient.name} why={ingredient.why} />
          <div className="mb-10">
            <IngredientPrakriti prakriti={ingredient.prakritiImpact} />
          </div>

          <IngredientBenefits benefits={ingredient.benefits} />
          <IngredientProperties properties={ingredient.properties} />
          <IngredientFormulations formulations={ingredient.formulations} />
          <IngredientTherapeutic uses={ingredient.therapeuticUses} />
          <IngredientPlants plantParts={ingredient.plantParts} />
          <div className="mr-9 mb-10">
            <IngredientBestCombine text={ingredient.bestCombinedWith} />
            <IngredientGeoLocations geo={ingredient.geoLocations} />
          </div>
        </div>
      </div>

      <IngredientRelatedProducts
        products={relatedProducts}
        addToCart={addToCart}
      />
    </div>
  );
}

export default IngredientDetail;

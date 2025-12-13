import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";

function ProductIngredients({ ingredients = [] }) {
  const navigate = useNavigate();

  if (!ingredients || ingredients.length === 0) return null;

  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-bold text-[#2E2F2E] ">Key Ingredients</h2>

        <button
          onClick={() => navigate("/ingredients")}
          className="text-green-600 font-medium text-sm hover:underline"
        >
          View All Ingredients
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ingredients.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/ingredients/${item.id}`)}
            className="cursor-pointer flex items-center justify-between p-4 bg-[#FDEAD2] rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="h-14 w-14 rounded-full object-cover"
              />

              <div>
                <p className="text-base font-semibold">{item.name}</p>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>

            <FiChevronRight className="text-green-700 text-xl" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductIngredients;

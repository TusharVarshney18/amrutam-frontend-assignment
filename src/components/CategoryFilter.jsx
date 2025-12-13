import AllIcon from "../assets/picons/all.svg?react";
import HairIcon from "../assets/picons/hair.svg?react";
import SkinIcon from "../assets/picons/skin.svg?react";
import DigestIcon from "../assets/picons/digestion.svg?react";
import BonesIcon from "../assets/picons/bones.svg?react";
import ImmunityIcon from "../assets/picons/immunity.svg?react";
import MoreIcon from "../assets/picons/more.svg?react";

const categories = [
  { id: 1, name: "All", icon: AllIcon },
  { id: 2, name: "Hair", icon: HairIcon },
  { id: 3, name: "Skin", icon: SkinIcon },
  { id: 4, name: "Digestion", icon: DigestIcon },
  { id: 5, name: "Bones", icon: BonesIcon },
  { id: 6, name: "Immunity", icon: ImmunityIcon },
  { id: 7, name: "More", icon: MoreIcon },
];

function CategoryFilter({ selected, setSelected }) {
  return (
    <div className="w-full  overflow-x-auto scroll-hide">
      <div className="flex items-center justify-center gap-4 py-4">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelected(cat.name)}
            className={`flex flex-col items-center justify-center gap-1
              w-20 h-20 md:w-24 md:h-24 rounded-full shadow-sm
              transition whitespace-nowrap
              ${
                selected === cat.name
                  ? "bg-[#E6EFE6] border border-[#0C5C4C] text-[#0C5C4C]"
                  : "bg-white text-gray-600"
              }`}
          >
            <cat.icon className="w-[84px] h-[99px] md:w-[84px] md:h-[99px]" />
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;

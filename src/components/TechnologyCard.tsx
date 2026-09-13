import { FiStar } from "react-icons/fi";
import type { Technology } from "../types/technology";

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
}

function TechnologyCard({ technology, isAdded, onAdd }: TechnologyCardProps) {
  const { name, category, description, icon, rating, difficulty, badge } = technology;

  return (
    <div className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between">
        <img src={icon} alt={`${name} logo`} className="h-10 w-10 object-contain" />
        {badge && (
          <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-600">
            {badge}
          </span>
        )}
      </div>

      <h3 className="mt-4 text-lg font-bold text-slate-900">{name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">{description}</p>

      <div className="mt-5 flex items-center justify-between text-xs">
        <span className="rounded-md bg-slate-100 px-2.5 py-1 font-medium text-slate-600">
          {category}
        </span>
        <span className="font-medium text-slate-500">{difficulty}</span>
        <span className="flex items-center gap-1 font-semibold text-slate-700">
          <FiStar className="fill-amber-400 text-amber-400" />
          {rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(technology)}
        className={`mt-5 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors ${
          isAdded
            ? "cursor-not-allowed bg-slate-200 text-slate-500"
            : "bg-slate-900 text-white hover:bg-slate-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;

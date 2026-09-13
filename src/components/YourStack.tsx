import { FiPackage, FiTrash2, FiX } from "react-icons/fi";
import type { Technology } from "../types/technology";

interface YourStackProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

function YourStack({ stack, onRemove, onRemoveAll }: YourStackProps) {
  const count = stack.length;

  return (
    <aside className="h-fit w-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm lg:sticky lg:top-24 lg:w-80">
      <div className="flex items-center justify-between gap-2">
        <h2 className="text-xl font-bold text-slate-900">Your Stack</h2>
        <span className="brand-gradient-bg rounded-full px-3 py-1 text-xs font-semibold text-white">
          {count} {count === 1 ? "Technology" : "Technologies"} Selected
        </span>
      </div>

      {/* Conditional rendering: empty vs. filled stack */}
      {count === 0 ? (
        <div className="mt-6 flex flex-col items-center rounded-xl border-2 border-dashed border-slate-200 px-4 py-10 text-center">
          <FiPackage size={28} className="text-slate-300" />
          <p className="mt-3 text-sm font-semibold text-slate-600">
            Your stack is empty
          </p>
          <p className="mt-1 text-xs text-slate-400">
            Add technologies from the list to start building your stack.
          </p>
        </div>
      ) : (
        <>
          <ul className="mt-6 flex flex-col gap-3">
            {stack.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 p-3"
              >
                <img src={item.icon} alt={item.name} className="h-8 w-8 shrink-0 object-contain" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-slate-800">{item.name}</p>
                  <p className="truncate text-xs text-slate-500">{item.category}</p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${item.name}`}
                  onClick={() => onRemove(item.id)}
                  className="shrink-0 rounded-full p-1.5 text-slate-400 hover:bg-red-50 hover:text-red-500"
                >
                  <FiX />
                </button>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            <FiTrash2 /> Remove All
          </button>
        </>
      )}
    </aside>
  );
}

export default YourStack;

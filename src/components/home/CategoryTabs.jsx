export default function CategoryTabs({ items, active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {items.map((c) => {
        const selected = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={`pb-1 font-medium transition ${
              selected ? "text-rose-600" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            {c}
            <span
              className={`block h-[3px] rounded-full ${
                selected ? "bg-rose-500" : "bg-transparent"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}

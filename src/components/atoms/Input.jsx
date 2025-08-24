export default function Input({ id, type="text", placeholder="", value, onChange, rightAdornment }) {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="h-11 w-full rounded-md border border-gray-300 bg-white px-3 pr-12 text-[15px] outline-none transition focus:border-green-500"
      />
      {rightAdornment && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {rightAdornment}
        </div>
      )}
    </div>
  );
}


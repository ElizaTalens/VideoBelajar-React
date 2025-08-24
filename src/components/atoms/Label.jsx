export default function Label({ htmlFor, children, required = false }) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1 inline-flex items-center gap-1 text-[13px] text-gray-700"
    >
      <span>{children}</span>
      {required && <span className="text-red-500">*</span>}
    </label>
  );
}

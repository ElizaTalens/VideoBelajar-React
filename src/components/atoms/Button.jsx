export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled,
}) {
  const base =
    "h-11 w-full rounded-md text-[15px] font-semibold transition active:scale-[.99] disabled:opacity-60";
  const variants = {
    primary: "bg-green-500 text-white hover:bg-green-600",
    secondary: "bg-green-100 text-green-700 hover:bg-green-200",
    neutral: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300",
  };
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={[base, variants[variant]].join(" ")}
    >
      {children}
    </button>
  );
}

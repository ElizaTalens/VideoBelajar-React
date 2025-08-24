import Input from "../atoms/Input.jsx";
import Label from "../atoms/Label.jsx";

export default function PhoneField({
  id = "phone",
  label = "No. Hp",
  value,
  onChange,
  countryCode = "+62",
  onCountryChange,
  placeholder = "81234567890",
}) {
  return (
    <div className="space-y-1.5">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="flex gap-2">
        <select
          aria-label="Kode negara"
          value={countryCode}
          onChange={(e) => onCountryChange?.(e.target.value)}
          className="h-11 w-28 rounded-md border border-gray-300 bg-white px-2 text-[15px] outline-none transition focus:border-green-500"
        >
          <option value="+62">🇮🇩 +62</option>
          <option value="+60">🇲🇾 +60</option>
          <option value="+65">🇸🇬 +65</option>
          <option value="+1">🇺🇸 +1</option>
        </select>

        <div className="flex-1">
          <Input
            id={id}
            type="tel"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete="tel"
          />
        </div>
      </div>
    </div>
  );
}

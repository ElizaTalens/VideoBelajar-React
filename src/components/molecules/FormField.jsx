import Label from "../atoms/Label.jsx";
import Input from "../atoms/Input.jsx";

export default function Form({ id, label, required, type="text", placeholder, value, onChange, rightAdornment }) {
  return (
    <div className="space-y-1">
      <Label htmlFor={id} required={required}>{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} value={value} onChange={onChange} rightAdornment={rightAdornment}/>
    </div>
  );
}

import { useState } from "react";
import FormField from "../molecules/FormField.jsx";
import PasswordField from "../molecules/PasswordField.jsx";
import PhoneField from "../molecules/PhoneField.jsx";
import Button from "../atoms/Button.jsx";

const Divider = ({ children }) => (
  <div className="my-2 flex items-center gap-4">
    <div className="h-px flex-1 bg-gray-200" />
    <span className="text-xs text-gray-500">{children}</span>
    <div className="h-px flex-1 bg-gray-200" />
  </div>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 48 48" aria-hidden className="h-5 w-5">
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.5 16.1 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.9 6.1 29.7 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"/>
    <path fill="#4CAF50" d="M24 44c5.2 0 10-2 13.6-5.3l-6.3-5.2C29 35.5 26.6 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.6 5.1C9.7 39.7 16.3 44 24 44z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.1-3.5 5.4-6.7 6.9l6.3 5.2C37.9 41.1 44 36 44 24c0-1.3-.1-2.7-.4-3.5z"/>
  </svg>
);

export default function RegisterCard({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+62",
    password: "",
    confirmPassword: "",
  });

  const update = (k) => (eOrVal) => {
    const value = eOrVal?.target ? eOrVal.target.value : eOrVal;
    setForm((f) => ({ ...f, [k]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert("Kata sandi dan konfirmasi tidak sama");
      return;
    }
    onSubmit?.(form); 
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-5 shadow">
      <h1 className="text-center text-2xl font-bold text-gray-800">Pendaftaran Akun</h1>
      <p className="mt-1 text-center text-sm text-gray-500">
        Yuk, daftarkan akunmu sekarang juga!
      </p>

      <form onSubmit={handleSubmit} className="mt-5 space-y-3">
        <FormField
          id="name"
          label="Nama Lengkap"
          placeholder="Nama lengkap"
          value={form.name}
          onChange={update("name")}
          autoComplete="name"
        />

        <FormField
          id="email"
          label="E-Mail"
          type="email"
          placeholder="nama@email.com"
          value={form.email}
          onChange={update("email")}
          autoComplete="email"
        />

        <PhoneField
          id="phone"
          label="No. Hp"
          value={form.phone}
          onChange={update("phone")}
          countryCode={form.countryCode}
          onCountryChange={update("countryCode")}
        />

        <PasswordField
          id="password"
          label="Kata Sandi"
          value={form.password}
          onChange={update("password")}
          autoComplete="new-password"
        />

        <PasswordField
          id="confirm"
          label="Konfirmasi Kata Sandi"
          value={form.confirmPassword}
          onChange={update("confirmPassword")}
          autoComplete="new-password"
        />

        <Button type="submit" className="w-full">Daftar</Button>

        <Divider>atau</Divider>

        <button
          type="button"
          className="h-11 w-full rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          onClick={() => alert("Integrasi Google SSO di sini")}
        >
          <span className="mx-auto flex items-center justify-center gap-2">
            <GoogleIcon />
            <span>Daftar dengan Google</span>
          </span>
        </button>
      </form>
    </div>
  );
}

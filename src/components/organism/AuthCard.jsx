import { useState } from "react";
import FormField from "../molecules/FormField.jsx";
import PasswordField from "../molecules/PasswordField.jsx";
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
    <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"/>
    <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 15.6 18.9 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.6 6 29.6 4 24 4 16 4 9.2 8.6 6.3 14.7z"/>
    <path fill="#607061ff" d="M24 44c5.2 0 10-2 13.6-5.3L32.3 33c-2.1 1.6-4.8 2.5-8.3 2.5-5.2 0-9.6-3.4-11.2-8l-6.5 5c3 6 9.8 11.5 17.7 11.5z"/>
    <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1 3.2-3.4 5.6-6.7 7.2l.1.1 5.3 5.7c-.4.3 8-4.7 8-16 0-1.3-.1-2.7-.4-3.5z"/>
  </svg>
);

export default function AuthCard({ onSubmit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="w-[520px] max-w-full rounded-xl bg-white p-8 shadow-sm ring-1 ring-black/5">
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-extrabold text-gray-800">Masuk ke Akun</h1>
        <p className="mt-1 text-sm text-gray-500">
          Yuk, lanjutin belajarmu di videobelajar.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit?.({ email, password });
        }}
      >
        <FormField
          id="email"
          label="E-Mail"
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="space-y-1">
          <PasswordField
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex justify-end">
            <a
              href="#"
              className="text-xs font-medium text-gray-500 hover:text-gray-700"
            >
              Lupa Password?
            </a>
          </div>
        </div>

        <Button type="submit" variant="primary">
          Masuk
        </Button>
        <Button type="button" variant="secondary">
          Daftar
        </Button>

        <Divider>atau</Divider>

        <button
          type="button"
          className="h-11 w-full rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        >
          <span className="mx-auto flex items-center justify-center gap-2">
            <GoogleIcon />
            <span>Masuk dengan Google</span>
          </span>
        </button>
      </form>
    </div>
  );
}

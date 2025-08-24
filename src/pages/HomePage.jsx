import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-500">
      <div className="rounded-xl bg-white p-8 shadow text-center">
        <h1 className="text-xl font-bold text-gray-800">
          Selamat datang di VideoBelajar!
        </h1>

        <div className="mt-4 flex justify-center gap-3">
          <Link to="/login" className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
            Masuk
          </Link>
          <Link to="/register" className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
            Daftar
          </Link>
        </div>

        <div className="mt-3 flex justify-center gap-3">
          <Link to="/beranda" className="px-4 py-2 rounded-full bg-emerald-500 text-white hover:bg-emerald-600">
            Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}

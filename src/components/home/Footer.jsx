import Brand from "../Brand.jsx";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-3 py-10 sm:px-4 md:grid-cols-4">
        <div>
          <Brand />
          <p className="mt-3 text-sm text-gray-600">
            Gali Potensi Anda Melalui Pembelajaran Video di hariesok.id
          </p>
          <p className="mt-3 text-sm text-gray-600">
            Jl. Utama Eliten No. 50 Lowokwaru, Malang<br/>+62-877-9333-1234
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Kategori</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/">Digital & Teknologi</Link></li>
            <li><Link to="/">Pemasaran</Link></li>
            <li><Link to="/">Manajemen Bisnis</Link></li>
            <li><Link to="/">Pengembangan Diri</Link></li>
            <li><Link to="/">Desain</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Perusahaan</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/">Tentang Kami</Link></li>
            <li><Link to="/">FAQ</Link></li>
            <li><Link to="/">Kebijakan Privasi</Link></li>
            <li><Link to="/">Ketentuan Layanan</Link></li>
            <li><Link to="/">Bantuan</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Komunitas</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><Link to="/">Tips Sukses</Link></li>
            <li><Link to="/">Blog</Link></li>
          </ul>
          <div className="mt-4 flex gap-3">
            {["fb","ig","tw","yt"].map((k) => (
              <span key={k} className="grid h-8 w-8 place-items-center rounded-full border border-gray-300 text-gray-600">◇</span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        ©2025 Videobelajar. All rights reserved.
      </div>
    </footer>
  );
}

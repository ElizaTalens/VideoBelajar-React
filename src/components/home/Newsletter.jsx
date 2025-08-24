import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-10">
      <div className="relative overflow-hidden rounded-xl bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative p-8 sm:p-12 text-white text-center">
          <h3 className="text-2xl font-extrabold">Mau Belajar Lebih Banyak?</h3>
          <p className="mt-2 text-white/90">
            Daftarkan e-mailmu untuk mendapatkan informasi terbaru & promo.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); alert(`Subscribed: ${email}`); }}
            className="mx-auto mt-5 flex max-w-md gap-2"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Masukkan Emailmu"
              className="h-11 flex-1 rounded-md border border-white/30 bg-white/90 px-3 text-gray-900 outline-none"
            />
            <button className="h-11 rounded-md bg-amber-500 px-4 font-semibold text-black hover:bg-amber-400">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

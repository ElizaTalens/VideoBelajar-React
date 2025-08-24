export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-6">
      <div className="relative overflow-hidden rounded-xl bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1600&auto=format&fit=crop"
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative p-6 sm:p-10 lg:p-14 text-white">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight">
            Revolusi Pembelajaran: Temukan
            <br className="hidden sm:block" />
            Ilmu Baru melalui Platform Video
            <br className="hidden sm:block" />
            Interaktif!
          </h1>
          <p className="mt-3 max-w-2xl text-white/90">
            Temukan ilmu baru yang menarik dan mendalam melalui koleksi video
            pembelajaran berkualitas tinggi.
          </p>
          <button className="mt-5 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
            Temukan Video Course untuk Dipelajari!
          </button>
        </div>
      </div>
    </section>
  );
}

import { useMemo, useState } from "react";
import CourseCard from "./CourseCard.jsx";
import CategoryTabs from "./CategoryTabs.jsx";

const CATEGORIES = ["Semua Kelas", "Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"];

export default function CoursesSection({ courses }) {
  const [active, setActive] = useState(CATEGORIES[0]);

  const visible = useMemo(() => {
    if (active === "Semua Kelas") return courses;
    return courses.filter((c) => c.category === active);
  }, [active, courses]);

  return (
    <section className="mx-auto max-w-7xl px-3 sm:px-4 mt-8">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        Koleksi Video Pembelajaran Unggulan
      </h2>
      <p className="mt-1 text-sm text-gray-600">
        Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
      </p>

      <div className="mt-4">
        <CategoryTabs items={CATEGORIES} active={active} onChange={setActive} />
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((c) => (
          <CourseCard key={c.id} course={c} />
        ))}
      </div>
    </section>
  );
}

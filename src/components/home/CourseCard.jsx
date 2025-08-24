function Stars({ value = 4.8 }) {
  return (
    <div className="flex items-center gap-1 text-[13px]">
      <svg viewBox="0 0 20 20" className="h-4 w-4 text-amber-400" fill="currentColor">
        <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.562-.954L10 0l2.948 5.956 6.562.954-4.755 4.635 1.123 6.545z"/>
      </svg>
      <span className="text-gray-700">{value}</span>
    </div>
  );
}

export default function CourseCard({ course }) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] bg-gray-100">
        <img src={course.thumbnail} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="p-4">
        <h3 className="line-clamp-2 text-[15px] font-semibold text-gray-900">
          {course.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-[13px] text-gray-600">
          {course.subtitle}
        </p>

        <div className="mt-3 flex items-center gap-2">
          <img
            src={course.avatar}
            alt=""
            className="h-7 w-7 rounded-full object-cover"
          />
          <div className="text-[12px] leading-tight">
            <div className="font-medium text-gray-900">{course.instructor}</div>
            <div className="text-gray-500">{course.role}</div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between">
          <Stars value={course.rating} />
          <div className="font-semibold text-emerald-600">Rp {course.price}</div>
        </div>
      </div>
    </article>
  );
}

import Brand from "../Brand.jsx";

export default function NavBar({
  avatarSrc = "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
}) {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-3 sm:px-4">
        <Brand />

      
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-gray-600">Kategori</span>
          <img
            src={avatarSrc}
            alt="avatar"
            className="h-8 w-8 rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  );
}

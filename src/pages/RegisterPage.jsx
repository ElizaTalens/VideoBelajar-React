import Brand from "../components/Brand.jsx";
import RegisterCard from "../components/organism/RegisterCard.jsx";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#FFF9EC]">
      <header className="w-full bg-white border-b border-gray-200 h-12 md:h-14">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-2 px-3 sm:px-4">
          <Brand />
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl items-start justify-center px-6 py-8 md:py-16">
        <RegisterCard onSubmit={(data) => console.log("register", data)} />
      </main>
    </div>
  );
}

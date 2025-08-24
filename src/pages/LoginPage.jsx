import { useState } from "react";
import Brand from "../components/Brand.jsx";
import AuthCard from "../components/organism/AuthCard.jsx";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-[#FFF9EC]">
      <header className="w-full bg-white border-b border-gray-200 h-12 md:h-14">
        <div className="mx-auto flex h-full max-w-7xl items-center gap-2 px-3 sm:px-4">
          <Brand />
        </div>
      </header>

      <main className="mx-auto flex max-w-7xl items-start justify-center px-6 py-8 md:py-16">
        <AuthCard onSubmit={(data) => console.log("submit", data)} />
      </main>
    </div>
  );
}

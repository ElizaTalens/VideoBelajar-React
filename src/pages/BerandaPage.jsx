import NavBar from "../components/home/NavBar.jsx";
import Hero from "../components/home/Hero.jsx";
import CoursesSection from "../components/home/CoursesSection.jsx";
import Newsletter from "../components/home/Newsletter.jsx";
import Footer from "../components/home/Footer.jsx";

const courses = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  category: ["Pemasaran", "Desain", "Pengembangan Diri", "Bisnis"][i % 4],
  title: "Big 4 Auditor Financial Analyst",
  subtitle:
    "Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan materi yang relevan.",
  instructor: "Jenna Ortega",
  role: "Senior Accountant di Gojek",
  rating: 4.8,
  price: "300K",
  thumbnail:
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?q=80&w=1200&auto=format&fit=crop",
  avatar:
    "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=200&auto=format&fit=crop",
}));

export default function BerandaPage() {
  return (
    <div className="min-h-screen bg-[#FFF9EC]">
      <NavBar />
      <Hero />
      <CoursesSection courses={courses} />
      <Newsletter />
      <Footer />
    </div>
  );
}

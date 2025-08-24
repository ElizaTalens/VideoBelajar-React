import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";       
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import BerandaPage from "./pages/BerandaPage.jsx";  

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />           
      <Route path="/beranda" element={<BerandaPage />} /> 
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

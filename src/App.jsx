import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import ProjectCategory from "./pages/ProjectCategory.jsx"; // ⬅️ yeni
import ProjectDetail from "./pages/ProjectDetail.jsx"; 
import Projects from "./pages/Projects.jsx";
import Products from "./pages/Products.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";


import "./app.css"; // 🌟 global stiller buradan geliyor

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:cat" element={<ProjectCategory />} /> {/* ⬅️ EKLENDİ */}
        <Route path="/projects/:cat/:slug" element={<ProjectDetail />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* bilinmeyen rota -> ana sayfa */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

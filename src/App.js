import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import AssuntoPage from "./pages/AssuntoPage";
import AutorPage from "./pages/AutorPage";
import LivroPage from "./pages/LivroPage";
import CreateLivroPage from "./pages/CreateLivroPage";
import CreateAutorPage from "./pages/CreateAutorPage";
import CreateAssuntoPage from "./pages/CreateAssuntoPage";
import EditLivroPage from "./pages/EditLivroPage";
import EditAssuntoPage from "./pages/EditAssuntoPage";
import EditAutorPage from "./pages/EditAutorPage";
import RelatorioPage from "./pages/RelatorioPage";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/livro/novo" element={<CreateLivroPage />} />
        <Route path="/autor/novo" element={<CreateAutorPage />} />
        <Route path="/assunto/novo" element={<CreateAssuntoPage />} />
        <Route path="/autor/editar" element={<EditAutorPage />} />
        <Route path="/assunto/editar" element={<EditAssuntoPage />} />
        <Route path="/livro/editar" element={<EditLivroPage />} />
        <Route path="/relatorio" element={<RelatorioPage />} />
        <Route path="/livros" element={<LivroPage />} />
        <Route path="/assuntos" element={<AssuntoPage />} />
        <Route path="/autores" element={<AutorPage />} />
        <Route path="/" element={<AutorPage />} />
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
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
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/livros" component={LivroPage} />
        <Route exact path="/assuntos" component={AssuntoPage} />
        <Route exact path="/autores" component={AutorPage} />
        <Route path="/livro/novo" component={CreateLivroPage} />
        <Route path="/autor/novo" component={CreateAutorPage} />
        <Route path="/assunto/novo" component={CreateAssuntoPage} />
        <Route path="/autor/editar" component={EditAutorPage} />
        <Route path="/assunto/editar" component={EditAssuntoPage} />
        <Route path="/livro/editar" component={EditLivroPage} />
        <Route path="/relatorio" component={RelatorioPage} />
        <Route exact path="/" component={AutorPage} />
      </Switch>
    </Router>
  );
}

export default App;

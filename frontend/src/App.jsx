import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import NoticiaDetalle from "./pages/NoticiaDetalle";
import "./App.css";

function App() {
  return (
    <>
      <header className="site-header">
        <Link to="/" className="site-logo">
          Drupal Headless Lab
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/noticias/:id" element={<NoticiaDetalle />} />
      </Routes>
    </>
  );
}

export default App;
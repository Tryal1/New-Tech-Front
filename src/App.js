import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto";
import Inicio from "./components/inicio";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

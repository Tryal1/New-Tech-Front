import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./components/contacto";
import Home from "./components/home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

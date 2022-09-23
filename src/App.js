import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from './pages/Accueil';
import Employe from './pages/Employe';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={<Accueil />} />
          <Route path="employe" element={<Employe />} />
          <Route path="contact" element={<Contact />} />
        </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


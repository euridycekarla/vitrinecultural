import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage.jsx';
import Navbar from './components/Navbar.jsx';
import CadastroArtista from './components/CadastroArtista.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/cadastro-artista" element={<CadastroArtista/>} />


      </Routes>
    </Router>
  );
};

export default App;

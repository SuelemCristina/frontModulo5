import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './components/Layout/Footer';
import NavBar from './components/Layout/NavBar';
import Contato from './components/Pages/Contato';
import Destinos from './components/Pages/Destinos';
import Home from './components/Pages/Home';
import Promocoes from './components/Pages/Promocoes';

function App() {
  return (
    <Router>
      <NavBar/>
      <div className="container-fluid mb-5 justify-content-center align-content-center">
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/Destinos" element={<Destinos/>}>Destinos</Route>
        <Route path="/Promocoes" element={<Promocoes/>}>Promoções</Route>
        <Route path="/Contato" element={<Contato/>}>Contato</Route>
      </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;

import './App.css';
import { Routes,Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './components/SingleCocktail';
import Error from './pages/Error';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="main--page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;

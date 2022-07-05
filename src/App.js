import './App.css';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Footer from './pages/Footer/Footer';
import Projetos from './pages/Projetos/Projetos';

function App() {
  return (
    <div>
      <div className="top-content">
        { Header() }
        { Carousel() }
      </div>
      { Projetos() }
      { Footer() }
    </div>
  );
}

export default App;

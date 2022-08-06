import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="App">
      {Header()}
      {Slider()}
      {Projects()}
    </div>
  )
}

export default App

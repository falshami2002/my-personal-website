import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id='home'>
        <Home/>
      </div>
      <div id='about'>
        <Skills/>
      </div>
      <div id='projects'> 
        <Projects/>
      </div>
    </div>
  );
}

export default App;

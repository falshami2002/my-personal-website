import './App.css';
import Navbar from './components/Navbar';
import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Navbar2/>
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

import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Pavan from './Components/Pavan';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
      <Header/>
      <Pavan/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;

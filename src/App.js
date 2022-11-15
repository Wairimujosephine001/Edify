import './App.css';
import Footer from './Components/Footer';
import About from './Components/About';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Skill from './Components/Skill';
import Project from './Components/Project';
import Contact from './Components/Contact';



function App() {
  return (
    <div>
    <Navbar/>
    <Home/>
    <About/>
    <Skill/>
    <Project/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;


    // <Route path="/" element={< />} />

import './App.css'
import About from './components/About';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

export default function App() {
  return(
    <main className="text-white bg-blue-400 body-font">
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
  



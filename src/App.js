import Navbar from '../src/components/NavBar/navbar';
import Intro from '../src/components/Intro/intro';
import Skills from '../src/components/Skills/skills';
import Works from './components/Works/works';

import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      { <Works/> }
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;

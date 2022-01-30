import ReactGA from 'react-ga';
import React, {useEffect} from 'react'

//Import Components
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('G-9KXNZ3VJ8K');
    ReactGA.pageview(window.location.pathname + window.location.search)
    },[]);
  
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <About/>
      <Projects />
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

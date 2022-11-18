import NavBar from './app/components/NavBar';
import Home from './app/components/Home';
import SocialLinks from './app/components/SocialLinks';
import About from './app/components/About';
import Portfolio from './app/components/Portfolio';
import Experience from './app/components/Experience';
import Contact from './app/components/Contact';



export default function App(){
  return(
    <div className='App'>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <SocialLinks />
    </div>
  )
}
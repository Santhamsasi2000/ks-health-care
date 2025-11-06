import './App.css'
// blur effect
import 'react-lazy-load-image-component/src/effects/blur.css';
import NavBar from './NavBar';
import Services from './Services';
import OurDoctors from './OurDoctors';
import Contact from './Contact';
import Footer from './Footer';
import HeroSection from './HeroSection';

function App() {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <Services/>
      <OurDoctors/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

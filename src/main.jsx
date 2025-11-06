import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Services from './Services.jsx'
import OurDoctors from './OurDoctors.jsx'
import Contact from './Contact.jsx'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      {/* <Services/> */}
      {/* <OurDoctors/> */}
      {/* <Contact/> */}
      {/* <NavBar/> */}
      {/* <Footer/> */}
    </BrowserRouter>
  </StrictMode>,
)

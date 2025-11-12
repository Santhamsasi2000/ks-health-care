import { FiPhoneCall } from "react-icons/fi"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { motion } from "framer-motion"

const NavBar = () => {
  return (
    <motion.nav 
      initial={{ y: -50, opacity: 0 }}
      whileInView={{y: 0, opacity: 1}}
      transition={{ duration: 1, ease: "easeOut"}}
      className="px-4 md:px-6 py-2 bg-gray-100">
      <div className="flex items-center justify-between">
        {/* Left Section - Logo + Title */}
        <motion.div 
        className="flex items-center gap-3 xs:gap-4"
        whileHover={{scale: 1.02}}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}>
          {/* Logo */}
          <motion.div
           whileHover={{ rotate: [0, -5, 5, 0]}}
           transition={{ duration: 0.5}}>
            <LazyLoadImage className="w-[45px] h-[45px] xs:w-[50px] xs:h-[50px] mt-1.5" 
            src="/Navbar/ks-health-center-logo.jpeg"
            effect="blur" threshold={200}/>  
          </motion.div>
          <div>
            <h1 className="font-neuton font-bold text-[26px] xs:text-3xl text-blue-600">K.S. Health Care Centre</h1>
            <p className="text-sm xs:text-base text-green-600 font-semibold">24/7 Medical Care</p>
          </div>
        </motion.div>
        {/* Right Section - Call Button */}
        <div className="hidden sm:block">
          <a className="flex items-center gap-2
          bg-green-600 text-white px-6 py-2 
          font-semibold rounded-lg 
          hover:bg-green-700 hover:scale-105 active:scale-95
          transition-all duration-300 ease-in-out
          shadow-lg shadow-green-300/50"
          href="tel:+9193637 25757"
          target="_blank"
          rel="noopener noreferrer"
          >
            <FiPhoneCall className="text-xl"/>
            Call Now
          </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default NavBar

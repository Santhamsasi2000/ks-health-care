import { motion } from "framer-motion"
const Footer = () => {
  return (
   <motion.footer 
   initial={{ opacity: 0, y: 40 }}
   whileInView={{ opacity: 1, y: 0 }}
   transition={{ duration: 0.8, ease: "easeOut"}}
   viewport={{ once: true}}
   className='p-3 bg-gray-800 text-white'>
      <p className='text-center mb-1'>© 2025 K.S. Health Care Centre. 
       <span className="block xs:inline">All Rights Reserved.</span>
      </p>
      <motion.p
        className="text-center text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        Developed by{" "}
        <motion.a
          href="https://www.sasikumar.online/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 text-gray-300 hover:text-green-400 transition-all duration-300"
          whileHover={{
            textShadow: "0px 0px 8px rgba(34,197,94,0.7)",
          }}
        >
          Sasikumar.online
        </motion.a>
      </motion.p>
   </motion.footer>
  ) 
}

export default Footer

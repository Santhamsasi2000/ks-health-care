import { FaUserDoctor } from "react-icons/fa6";
import { motion } from "framer-motion"
import { LazyLoadImage } from "react-lazy-load-image-component";

const OurDoctors = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true}} className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
      <h2 className="text-center text-green-700 font-neuton
       font-bold text-3xl sm:text-4xl mb-1">
        Our Doctor
      </h2>
      <p className="text-sm sm:text-base text-gray-700 text-center mb-6">
       Meet our team of experienced and dedicated medical professionals committed to your health and well-being
      </p>
      
      <div className="flex justify-center gap-x-8 gap-y-10 flex-wrap">
        {
        doctors.map(({ id, title, education, specialization}) => (
         <div className="w-full xs:w-[80%] sm:w-[45%] md:w-[30%] flex flex-col items-center
          rounded-2xl shadow-2xl p-4 transition-all duration-300 ease-in-out bg-gray-50
           hover:-translate-y-1"
           key={id}>
            <LazyLoadImage className="w-[60px] h-[60px] rounded-full" src="/Doctor/doctor.png" 
            threshold={200} effect="blur"/>
            <h5 className="font-bold text-blue-800 text-lg mb-1">{title}</h5>
            <p className="text-sm text-center">{education}</p>
            <p className="text-sm text-center text-gray-600">{specialization}</p>
         </div>
        ))
        }
      </div>
    </motion.section>
  )
}

export default OurDoctors

export const doctors = [
  {
    id: 1,
    title: "Prithiviraj",
    education: "MBBS, MD",
    specialization: "General Medicine",
  },
];


import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion"

const Services = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true}}
      className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">
      {/* Heading */}
      <div>
        <h2 className="text-center text-green-700 font-bold font-neuton
        text-3xl sm:text-4xl mb-1">Our Services</h2>
        <p className="text-sm sm:text-base text-gray-700 text-center mb-6">
          Comprehensive healthcare services delivered with care and expertise
        </p>
      </div>
      {/* Services grid */}
      <div className="flex justify-center gap-x-8 gap-y-10 flex-wrap">
      {
        ourServices.map(({ id, icon, title, description }) => (
          <motion.div 
          whileHover={{
              boxShadow: "0px 10px 25px #9dd0f3",
            }}
          className="w-full xs:w-[80%] sm:w-[45%] md:w-[30%] flex flex-col items-center
            rounded-2xl shadow-xl/30 p-4 transition-all duration-300 ease-in-out 
            hover:-translate-y-1 hover:bg-blue-50"
            key={id}>
              <LazyLoadImage className="w-[60px] h-[60px] mb-1" src={icon} effect="blur" threshold={200}/>
              <h5 className="font-bold text-blue-800 text-lg mb-1">{title}</h5>
              <p className="text-sm text-center text-gray-600">{description}</p>
          </motion.div>
          ))
        }
      </div>
    </motion.section>
  )
}

export default Services

export const ourServices = [
  {
    id: 1,
    icon: "/Services/general-medicine.png",
    title: "General Medicine",
    description: "Comprehensive primary care and general medical consultations for all age groups",
  },
  {
    id: 2,
    icon: "/Services/specialist-consultations.png",
    title: "Specialist Consultations",
    description: "Expert consultations in Gastroenterology, Orthopedics, Neurosurgery, and more",
  },
  {
    id: 3,
    icon: "/Services/lab-x-ray.png",
    title: "24/7 Lab, ECG & Digital X-Ray",
    description: "Round-the-clock diagnostic services with modern equipment and quick results",
  },
  {
    id: 4,
    icon: "/Services/physiotherapy.png",
    title: "Physiotherapy & Rehabilitation",
    description: "Professional physiotherapy services for injury recovery and pain management",
  },
  {
    id: 5,
    icon: "/Services/pharmacy.png",
    title: "24-hour Pharmacy",
    description: "On-site pharmacy stocked with essential medications available anytime",
  },
  {
    id: 6,
    icon: "/Services/emergency-care.png",
    title: "Emergency Care",
    description: "Immediate medical attention and emergency services available 24/7",
  },
];

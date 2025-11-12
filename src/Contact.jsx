import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion"
const Contact = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true}} className="p-4 sm:p-5 md:p-6 lg:p-7 xl:p-8">

        {/* Title */}
        <h2 className="font-bold font-neuton text-center text-3xl 
        sm:text-4xl mb-1 text-green-700">
          Contact Us
        </h2>
        
        {/* Subtitle */}
        <p className="text-sm sm:text-base text-center text-gray-800 text-sm sm:text-base mb-6">
          We're here for you 24/7. Reach out to us anytime for medical assistance
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full xs:w-[80%] sm:w-[45%] lg:w-[30%] xl:w-[23%]">
              <div className="flex flex-col h-full
               rounded-2xl shadow-xl/30 p-4 bg-gray-100 transition-all duration-300 ease-in-out
                hover:-translate-y-1">
                <LazyLoadImage className="w-[40px] h-[40px] mb-1" src="/contact/address.png" effect="blur" threshold={200}/>
                <h5 className="font-bold text-base xs:text-lg text-blue-800 mb-1">Address</h5>
                <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm sm:text-base"
                >
                  <span>Nochili Road, K.G. Kandigai, Thiruvallur District,Tamil Nadu – 631205</span>
                </a>
              </div>
            </div>
            <div className="w-full xs:w-[80%] sm:w-[45%] lg:w-[30%] xl:w-[23%]">
              <div className="flex flex-col h-full
               rounded-2xl shadow-xl/30 p-4 bg-gray-100 transition-all duration-300 ease-in-out
                hover:-translate-y-1">
                 <LazyLoadImage className="w-[40px] h-[40px] mb-1" src="/contact/mobile.png" effect="blur" threshold={200}/>
                 <h5 className="font-bold text-base xs:text-lg text-blue-800 mb-1">Mobile Number</h5>
                 <a
                href="tel:85259 55836"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 text-sm sm:text-base hover:underline hover:text-blue-800 mb-1"
                >
                  85259 55836
                 </a>
                 <a
                href="tel:93637 25757"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:underline hover:text-teal-800"
                >
                  93637 25757
                 </a>
              </div>
            </div>
            <div className="w-full xs:w-[80%] sm:w-[50%] lg:w-[30%] xl:w-[23%]">
              <div className="flex flex-col h-full
               rounded-2xl shadow-xl/30 p-4 bg-gray-100 transition-all duration-300 ease-in-out
                hover:-translate-y-1">
                 <LazyLoadImage className="w-[40px] h-[40px] mb-1" src="/contact/email.png" effect="blur" threshold={200}/>
                 <div>
                    <h5 className="font-bold text-base xs:text-lg text-blue-800 mb-1">Email</h5>
                    <a
                    href="mailto:kshealthcarecenter10@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-800 text-sm sm:text-base hover:underline hover:text-blue-800 mb-1"
                    >
                      kshealthcarecenter10@gmail.com
                    </a>
                 </div>
              </div>
               
            </div>
            <div className="w-full xs:w-[80%] sm:w-[45%] lg:w-[30%] xl:w-[23%]">
              <div className="flex flex-col h-full
               rounded-2xl shadow-xl/30 p-4 bg-gray-100 transition-all duration-300 ease-in-out
                hover:-translate-y-1">
                 <LazyLoadImage className="w-[40px] h-[40px] mb-1" src="/contact/working-hours.png"
                  effect="blur" threshold={200}/>
                    <h5 className="font-bold text-base xs:text-lg text-blue-800 mb-1">Working Hours</h5>
                    <p className="text-gray-800 text-sm sm:text-base font-medium">Open 24 Hours</p>
                    <p className="text-gray-800 text-sm sm:text-base">Lab • ECG • X-Ray • Pharmacy • Physiotherapy</p>
              </div>
            </div>
        </div>
    </motion.section>
  )
};

export default Contact

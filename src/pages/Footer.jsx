import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { TfiTwitter } from "react-icons/tfi";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden border-t border-gray-800">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-[#FFD700]/10 to-[#D4AF37]/10"></div>
      
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16"
          >
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-4"
              >
                <div>
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-[#FFD700] to-[#C0C0C0] bg-clip-text text-transparent">
                    SIMPLY BETTER
                  </h3>
                </div>
              </motion.div>
              <p className="text-xl text-gray-400 leading-relaxed">
                Building production-grade applications with cutting-edge technology and premium execution.
              </p>
              
              <div className="pt-6">
                <h4 className="text-2xl font-semibold mb-6">Follow Us</h4>
                <div className="flex space-x-6">
                  {[
                    { icon: <FaLinkedinIn className="w-6 h-6"/>, color: "from-blue-500 to-blue-700" },
                    { icon: <FaGithub className="w-6 h-6"/>, color: "from-gray-400 to-gray-600" },
                    { icon: <FaInstagram className="w-6 h-6"/>, color: "from-purple-500 to-pink-500" },
                    { icon: <TfiTwitter className="w-6 h-6"/>, color: "from-blue-400 to-cyan-400" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href="/coming-soon"
                      whileHover={{ y: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${social.color} shadow-lg hover:shadow-xl transition-all`}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Quick Links</h3>
              <ul className="space-y-6">
                {["Home", "About Us", "Services", "Blog", "Contact"].map((item, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      className="text-xl text-gray-400 hover:text-white transition-colors flex items-center group" 
                      href={`/${item.toLowerCase().replace(' ', '-')}`}
                    >
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Our Services */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Our Services</h3>
              <ul className="space-y-6">
                {["1 Day Delivery", "Fast Execution", "Secure Solutions", "Premium Support"].map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a 
                      className="text-xl text-gray-400 hover:text-white transition-colors flex items-center group" 
                      href="#"
                    >
                      <span className="w-2 h-2 bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold">Get In Touch</h3>
              <div className="space-y-6 text-xl text-gray-400">
                <motion.div 
                  whileHover={{ x: 5 }}
                  className="flex items-start space-x-4"
                >
                  <div>
                    <p>
                      SIMPLY BETTER<br />
                      The LNM Institute Of Information Technology<br />
                      Jaipur, 302031
                    </p>
                  </div>
                </motion.div>
                
                <motion.a 
                  href="tel:+918979560165" 
                  className="flex items-center space-x-4 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>+91 9478514595</span>
                </motion.a>
                
                <motion.a 
                  href="mailto:piyushaga2005@gmail.com" 
                  className="flex items-center space-x-4 hover:text-white transition-colors"
                  whileHover={{ x: 5 }}
                >
                  <span>team.simplybetter@gmail.com</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-800 py-12 relative z-10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="text-2xl text-gray-400"
            >
              ©2025 SIMPLY BETTER. All rights reserved.
            </motion.div>
            
            <div className="flex space-x-8 text-lg">
              <motion.a 
                href="/privacy" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="/terms" 
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (isMobileMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getNavLinkClass = (path) => {
    return `relative px-6 py-3 text-xl font-medium transition-all duration-300 group ${
      location.pathname === path ? 'text-white' : 'text-gray-200 hover:text-white'
    }`;
  };

  const getMobileNavLinkClass = (path) => {
    return `block px-8 py-5 text-3xl transition-all duration-300 font-semibold ${
      location.pathname === path 
        ? 'text-white bg-white/10' 
        : 'text-gray-200 hover:text-white hover:bg-white/5'
    }`;
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/20 backdrop-blur-lg shadow-lg' 
            : 'bg-transparent backdrop-blur-sm'
        } border-b border-white/10`}
      >
        <div className="container mx-auto px-8 lg:px-12">
          <div className="flex justify-between items-center h-24">
            <NavLink className="flex items-center space-x-4 group" to="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <div className="relative">
                  <motion.h1 
                    className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                    style={{ fontFamily: "serif" }}
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'reverse',
                    }}
                  >
                    SIMPLY <span className="font-light text-white">BETTER</span>
                  </motion.h1>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-xl opacity-20 -z-10"></div>
                </div>
              </motion.div>
            </NavLink>

            <div className="hidden lg:flex items-center space-x-6">
              {["/", "/about", "/services", "/blog", "/contact"].map((path, index) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <NavLink className={getNavLinkClass(path)} to={path}>
                    <motion.span 
                      className="relative z-10"
                      whileHover={{ scale: 1.1 }}
                    >
                      {path.slice(1).charAt(0).toUpperCase() + path.slice(2) || "Home"}
                    </motion.span>
                    {location.pathname === path && (
                      <motion.div 
                        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                        layoutId="navIndicator"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 to-purple-500/0 group-hover:from-blue-400/10 group-hover:to-purple-500/10 transition-all duration-300 rounded-xl"></div>
                  </NavLink>
                </motion.div>
              ))}
            </div>

            <motion.button
              className="lg:hidden p-4 text-gray-200 hover:text-white rounded-xl transition-all duration-200"
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-10 h-10">
                <span className={`absolute block w-10 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-3 bg-white' : 'bg-gray-200'
                }`}></span>
                <span className={`absolute block w-10 h-0.5 bg-current transform transition-all duration-300 top-5 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100 bg-gray-200'
                }`}></span>
                <span className={`absolute block w-10 h-0.5 bg-current transform transition-all duration-300 top-7 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-3 bg-white' : 'bg-gray-200'
                }`}></span>
              </div>
            </motion.button>
          </div>
        </div>

        <motion.div
          ref={menuRef}
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className={`lg:hidden overflow-hidden ${isMobileMenuOpen ? 'visible' : 'invisible'}`}
        >
          <div className="bg-black/30 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-8 py-8">
              <div className="space-y-6">
                {["/", "/about", "/services", "/blog", "/contact"].map((path, index) => (
                  <motion.div
                    key={path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <NavLink 
                      className={getMobileNavLinkClass(path)} 
                      to={path}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="flex items-center justify-between">
                        <span>{path.slice(1).charAt(0).toUpperCase() + path.slice(2) || "Home"}</span>
                        {location.pathname === path && (
                          <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                        )}
                      </div>
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.nav>
      {/* <div className="h-24"></div> */}
    </>
  );
};
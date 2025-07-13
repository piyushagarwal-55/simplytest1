import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const teamMembers = [
  { name: 'Emily Kim', role: 'Founder', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Michael Steward', role: 'Creative Director', img: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
  { name: 'Emma Rodriguez', role: 'Lead Developer', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww' },
  { name: 'Julia Gimmel', role: 'UX Designer', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmVzc2lvbmFsJTIwcGVvcGxlfGVufDB8fDB8fHww' },
  { name: 'Lisa Anderson', role: 'Marketing Manager', img: 'https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHByb2Zlc3Npb25hbCUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'James Wilson', role: 'Product Manager', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
];

export default function TeamCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const nameRef = useRef();
  const roleRef = useRef();

  const updateIndex = (newIndex, dir) => {
    setDirection(dir);
    setCurrentIndex((newIndex + teamMembers.length) % teamMembers.length);
    
    // Text fade animation
    nameRef.current.style.opacity = 0;
    roleRef.current.style.opacity = 0;
    setTimeout(() => {
      nameRef.current.textContent = teamMembers[newIndex].name;
      roleRef.current.textContent = teamMembers[newIndex].role;
      nameRef.current.style.opacity = 1;
      roleRef.current.style.opacity = 1;
    }, 300);
  };

  const handlePrev = () => updateIndex(currentIndex - 1, -1);
  const handleNext = () => updateIndex(currentIndex + 1, 1);

  // Auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);

 const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.7, ease: "easeInOut" }
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: "easeInOut" }
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.9,
    transition: { duration: 0.7, ease: "easeInOut" }
  })
};


  const getAdjacentIndex = (offset) => 
    (currentIndex + offset + teamMembers.length) % teamMembers.length;

  return (
   <div className="bg-black min-h-screen py-16 px-4 flex flex-col items-center justify-center">
 <h2 className="text-7xl font-bold mb-9 font-serif">
              OUR <span className="text-yellow-400">TEAM</span>
            </h2>

<div className="relative w-full max-w-[1000px] h-[510px] flex items-center justify-center px-8">

    {/* Left Card */}
    <motion.div 
    className="absolute left-[10%] w-80 h-[400px] rounded-xl overflow-hidden shadow-lg z-10"
      initial={{ x: -100, opacity: 0.7, scale: 0.9 }}
      animate={{ x: 0, opacity: 0.8, scale: 0.95, transition: { duration: 0.5 } }}
      onClick={handlePrev}
    >
      <img 
        src={teamMembers[getAdjacentIndex(-1)].img} 
        alt="Previous team member" 
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Center Card (Main) */}
   <div className="relative z-20 w-[420px] h-[440px] mx-8">

      <AnimatePresence custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute w-full h-full rounded-2xl overflow-hidden shadow-xl cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          <img 
            src={teamMembers[currentIndex].img} 
            alt={teamMembers[currentIndex].name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
            <div>
              <h3 className="text-white text-2xl font-bold">{teamMembers[currentIndex].name}</h3>
              <p className="text-amber-400">{teamMembers[currentIndex].role}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Right Card */}
    <motion.div 
      className="absolute right-[10%] w-80 h-[400px] rounded-xl overflow-hidden shadow-lg z-10"
  
      initial={{ x: 100, opacity: 0.7, scale: 0.9 }}
      animate={{ x: 0, opacity: 0.8, scale: 0.95, transition: { duration: 0.5 } }}
      onClick={handleNext}
    >
      <img 
        src={teamMembers[getAdjacentIndex(1)].img} 
        alt="Next team member" 
        className="w-full h-full object-cover"
      />
    </motion.div>

    {/* Navigation Arrows */}
    <motion.button
  initial={{ x: -30, opacity: 0 }}
  animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }}
  whileHover={{ scale: 1.15, rotate: -10 }}
  whileTap={{ scale: 0.95 }}
  className="absolute -left-10 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center ring-2 ring-amber-400/40 shadow-md transition-all"
  onClick={handlePrev}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</motion.button>

 <motion.button
  initial={{ x: 30, opacity: 0 }}
  animate={{ x: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }}
  whileHover={{ scale: 1.15, rotate: 10 }}
  whileTap={{ scale: 0.95 }}
  className="absolute -right-10 top-1/2 -translate-y-1/2 z-30 bg-black/60 hover:bg-black/80 text-white rounded-full w-12 h-12 flex items-center justify-center ring-2 ring-amber-400/40 shadow-md transition-all"
  onClick={handleNext}
>
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</motion.button>

  </div>

  {/* Member Info */}
  <div className="text-center mt-12">
    <h2 ref={nameRef} className="text-3xl md:text-4xl font-bold text-white mb-2 transition-opacity duration-300">
      {teamMembers[currentIndex].name}
    </h2>
    <p ref={roleRef} className="text-xl text-amber-400 transition-opacity duration-300">
      {teamMembers[currentIndex].role}
    </p>
  </div>

  {/* Dots Navigation */}
  <div className="flex justify-center mt-8 space-x-2">
    {teamMembers.map((_, i) => (
      <button
        key={i}
        className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-amber-500 w-6' : 'bg-gray-600 hover:bg-gray-400'}`}
        onClick={() => updateIndex(i, i > currentIndex ? 1 : -1)}
      />
    ))}
  </div>
</div>

  );
}
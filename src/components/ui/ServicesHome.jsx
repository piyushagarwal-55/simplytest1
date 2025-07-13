// import React, { useState, useEffect, useRef } from 'react';

// const PremiumPortfolioSection = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Wellness TCYS",
//       description: "Comprehensive wellness platform for practitioners and clients with AI-powered recommendations.",
//       image: "https://i.imgur.com/h3ht9MD.jpeg",
//       caseStudyLink: "#",
//       websiteLink: "https://wellnesstcys.com",
//       tech: ["React", "Node.js", "AI/ML"],
//       color: "#A3D1FF"
//     },
//     {
//       id: 2,
//       title: "E-Commerce Pro",
//       description: "Next-gen e-commerce platform with AI recommendations and real-time analytics.",
//       image: "https://i.imgur.com/J5SE8vO.jpg",
//       caseStudyLink: "#",
//       websiteLink: "https://example.com/ecommerce",
//       tech: ["Vue.js", "Python", "PostgreSQL"],
//       color: "#FF6B6B"
//     },
//     {
//       id: 3,
//       title: "Health Tracker",
//       description: "Mobile app for tracking health metrics and workouts with social features.",
//       image: "https://i.imgur.com/7QkG2hZ.jpg",
//       caseStudyLink: "#",
//       websiteLink: "https://example.com/healthtracker",
//       tech: ["React Native", "Firebase", "ML"],
//       color: "#4ECDC4"
//     },
//     {
//       id: 4,
//       title: "Smart Home Hub",
//       description: "Centralized control for all your smart home devices with voice commands.",
//       image: "https://i.imgur.com/3qYQZ1L.jpg",
//       caseStudyLink: "#",
//       websiteLink: "https://example.com/smarthome",
//       tech: ["IoT", "Arduino", "React"],
//       color: "#45B7D1"
//     },
//     {
//       id: 5,
//       title: "Finance Dashboard",
//       description: "Real-time financial data visualization tool with predictive analytics.",
//       image: "https://i.imgur.com/5wYV9dT.jpg",
//       caseStudyLink: "#",
//       websiteLink: "https://example.com/financedash",
//       tech: ["D3.js", "Express", "MongoDB"],
//       color: "#96CEB4"
//     }
//   ];

//   const [currentProject, setCurrentProject] = useState(0);
//   const [isScrolling, setIsScrolling] = useState(false);
//   const [hasScrolledPastSection, setHasScrolledPastSection] = useState(false);
//   const [isAtBottom, setIsAtBottom] = useState(false);
//   const [isAtTop, setIsAtTop] = useState(false);
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const sectionRef = useRef(null);
//   const projectRefs = useRef([]);
//   const scrollTimeoutRef = useRef(null);
//   const lastScrollTime = useRef(0);
//   const accumulatedScroll = useRef(0);
//   const isTransitioning = useRef(false);

//   useEffect(() => {
//     const handleWheel = (e) => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;
//       const sectionHeight = rect.height;

//       // Check if section is in viewport
//       const sectionTop = rect.top;
//       const sectionBottom = rect.bottom;
//       const isInViewport = sectionTop <= windowHeight && sectionBottom >= 0;

//       if (!isInViewport) {
//         setIsAtBottom(false);
//         setIsAtTop(false);
//         accumulatedScroll.current = 0;
//         return;
//       }

//       // Calculate scroll position within section
//       const scrolledInSection = Math.max(0, windowHeight - sectionTop);
//       const progressInSection = Math.min(1, scrolledInSection / sectionHeight);
//       setScrollProgress(progressInSection);

//       // Define trigger zones
//       const topTriggerZone = progressInSection >= 0.1 && progressInSection <= 0.3;
//       const bottomTriggerZone = progressInSection >= 0.7 && progressInSection <= 0.95;

//       setIsAtTop(topTriggerZone);
//       setIsAtBottom(bottomTriggerZone);

//       // Block scrolling down until last project is shown
//       if (bottomTriggerZone && e.deltaY > 0 && currentProject === projects.length - 1) {
//         e.preventDefault();
//         return;
//       }

//       // Block scrolling up until first project is shown
//       if (topTriggerZone && e.deltaY < 0 && currentProject === 0) {
//         e.preventDefault();
//         return;
//       }

//       // Handle scroll interactions in trigger zones
//       if ((topTriggerZone || bottomTriggerZone) && !isTransitioning.current) {
//         e.preventDefault();

//         // Accumulate scroll for smoother transitions
//         accumulatedScroll.current += Math.abs(e.deltaY);

//         // Require significant scroll to trigger transition
//         const scrollThreshold = 100;

//         if (accumulatedScroll.current >= scrollThreshold) {
//           const now = Date.now();

//           // Debounce rapid scrolling
//           if (now - lastScrollTime.current < 600) {
//             return;
//           }

//           // Handle scroll direction and project navigation
//           if (bottomTriggerZone && e.deltaY > 0 && currentProject < projects.length - 1) {
//             // Scrolling down at bottom - next project
//             isTransitioning.current = true;
//             setIsScrolling(true);
//             setCurrentProject(prev => prev + 1);
//             lastScrollTime.current = now;
//             accumulatedScroll.current = 0;

//             setTimeout(() => {
//               setIsScrolling(false);
//               isTransitioning.current = false;
//             }, 800);
//           } else if (topTriggerZone && e.deltaY < 0 && currentProject > 0) {
//             // Scrolling up at top - previous project
//             isTransitioning.current = true;
//             setIsScrolling(true);
//             setCurrentProject(prev => prev - 1);
//             lastScrollTime.current = now;
//             accumulatedScroll.current = 0;

//             setTimeout(() => {
//               setIsScrolling(false);
//               isTransitioning.current = false;
//             }, 800);
//           }
//         }
//       } else {
//         // Reset accumulated scroll when not in trigger zones
//         accumulatedScroll.current = 0;
//       }
//     };

//     const handleScroll = () => {
//       if (!sectionRef.current) return;

//       const rect = sectionRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Reset flags when scrolling away from section
//       if (rect.top > windowHeight || rect.bottom < 0) {
//         setHasScrolledPastSection(false);
//         setIsAtBottom(false);
//         setIsAtTop(false);
//         setScrollProgress(0);
//         accumulatedScroll.current = 0;
//       }

//       // Calculate and update scroll progress
//       if (rect.top <= windowHeight && rect.bottom >= 0) {
//         const scrolledInSection = Math.max(0, windowHeight - rect.top);
//         const progressInSection = Math.min(1, scrolledInSection / rect.height);
//         setScrollProgress(progressInSection);
//       }
//     };

//     // Add event listeners
//     document.addEventListener('wheel', handleWheel, { passive: false });
//     window.addEventListener('scroll', handleScroll, { passive: true });

//     // Store timeout reference for cleanup
//     const currentTimeoutRef = scrollTimeoutRef.current;

//     return () => {
//       document.removeEventListener('wheel', handleWheel);
//       window.removeEventListener('scroll', handleScroll);
//       if (currentTimeoutRef) {
//         clearTimeout(currentTimeoutRef);
//       }
//     };
//   }, [currentProject, isScrolling, hasScrolledPastSection, projects.length]);

//   useEffect(() => {
//     // Enhanced project transition with premium animations
//     if (projectRefs.current[currentProject]) {
//       const currentRef = projectRefs.current[currentProject];

//       // Reset all project refs first
//       projectRefs.current.forEach((ref, index) => {
//         if (ref && index !== currentProject) {
//           ref.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
//           ref.style.opacity = '0';
//           ref.style.transform = 'translateY(30px) scale(0.95)';
//           ref.style.filter = 'blur(4px)';
//         }
//       });

//       // Animate current project with premium effects
//       currentRef.style.opacity = '0';
//       currentRef.style.transform = 'translateY(40px) scale(0.9)';
//       currentRef.style.filter = 'blur(8px)';

//       setTimeout(() => {
//         currentRef.style.transition = 'all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
//         currentRef.style.opacity = '1';
//         currentRef.style.transform = 'translateY(0) scale(1)';
//         currentRef.style.filter = 'blur(0px)';
//       }, 100);
//     }
//   }, [currentProject]);

//   const handleManualNext = () => {
//     if (currentProject < projects.length - 1 && !isTransitioning.current) {
//       isTransitioning.current = true;
//       setIsScrolling(true);
//       setCurrentProject(prev => prev + 1);
//       setTimeout(() => {
//         setIsScrolling(false);
//         isTransitioning.current = false;
//       }, 800);
//     }
//   };

//   const handleManualPrev = () => {
//     if (currentProject > 0 && !isTransitioning.current) {
//       isTransitioning.current = true;
//       setIsScrolling(true);
//       setCurrentProject(prev => prev - 1);
//       setTimeout(() => {
//         setIsScrolling(false);
//         isTransitioning.current = false;
//       }, 800);
//     }
//   };

//   const handleDotClick = (index) => {
//     if (index !== currentProject && !isTransitioning.current) {
//       isTransitioning.current = true;
//       setIsScrolling(true);
//       setCurrentProject(index);
//       setTimeout(() => {
//         setIsScrolling(false);
//         isTransitioning.current = false;
//       }, 800);
//     }
//   };

//   const currentProjectData = projects[currentProject];

//   return (
//     <div 
//       ref={sectionRef}
//       className="py-16 sm:py-20 bg-black relative overflow-hidden"
//       style={{ 
//         background: `linear-gradient(135deg, #000000 0%, #1a1a1a 50%, #000000 100%)`,
//         minHeight: '100vh',
//       }}
//     >
//       {/* Animated background particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-1 h-1 bg-white rounded-full opacity-10"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 3}s`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Premium scroll zone indicators */}
//       <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
//         <div className="flex flex-col items-center space-y-2">
//           {/* Top scroll zone indicator */}
//           <div 
//             className={`w-2 h-16 rounded-full transition-all duration-300 ${
//               isAtTop ? 'opacity-100 scale-110' : 'opacity-30 scale-100'
//             }`}
//             style={{
//               background: isAtTop 
//                 ? `linear-gradient(to bottom, ${currentProjectData.color}, transparent)` 
//                 : 'linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)',
//               boxShadow: isAtTop ? `0 0 20px ${currentProjectData.color}60` : 'none',
//             }}
//           />
          
//           {/* Middle section indicator */}
//           <div className="w-1 h-8 bg-white/20 rounded-full" />
          
//           {/* Bottom scroll zone indicator */}
//           <div 
//             className={`w-2 h-16 rounded-full transition-all duration-300 ${
//               isAtBottom ? 'opacity-100 scale-110' : 'opacity-30 scale-100'
//             }`}
//             style={{
//               background: isAtBottom 
//                 ? `linear-gradient(to top, ${currentProjectData.color}, transparent)` 
//                 : 'linear-gradient(to top, rgba(255,255,255,0.3), transparent)',
//               boxShadow: isAtBottom ? `0 0 20px ${currentProjectData.color}60` : 'none',
//             }}
//           />
//         </div>
//       </div>

//       {/* Right side scroll progress */}
//       <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
//         <div className="flex flex-col items-center space-y-1">
//           {projects.map((_, index) => (
//             <div
//               key={index}
//               className={`w-1 h-8 rounded-full transition-all duration-500 ${
//                 index === currentProject ? 'scale-110' : 'scale-100'
//               }`}
//               style={{
//                 backgroundColor: index === currentProject 
//                   ? currentProjectData.color 
//                   : index < currentProject 
//                     ? 'rgba(255,255,255,0.5)' 
//                     : 'rgba(255,255,255,0.2)',
//                 boxShadow: index === currentProject ? `0 0 15px ${currentProjectData.color}80` : 'none',
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-white/10 text-white text-sm mb-6">
//             <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
//               Featured Projects
//             </span>
//           </div>
          
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
//             Interactive Portfolio
//           </h2>
          
//           <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-4">
//             <span className="text-white font-semibold">Scroll to the bottom to explore</span> our innovative solutions that delivered{' '}
//             <span className="text-white font-semibold">exceptional results</span> for clients worldwide.
//           </p>
//         </div>

//         {/* Main project display */}
//         <div className="relative mb-12">
//           <div className="relative bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden">
//             {/* Glow effect */}
//             <div 
//               className="absolute inset-0 opacity-20 blur-xl transition-all duration-1000"
//               style={{
//                 background: `radial-gradient(circle at 50% 50%, ${currentProjectData.color}60 0%, transparent 70%)`,
//               }}
//             />
            
//             {/* Project content */}
//             <div className="grid lg:grid-cols-2 gap-8 items-center">
//               {/* Image side */}
//               <div className="order-2 lg:order-1 relative">
//                 <div 
//                   ref={el => projectRefs.current[currentProject] = el}
//                   className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden"
//                   style={{
//                     background: `linear-gradient(45deg, ${currentProjectData.color}20, transparent)`,
//                   }}
//                 >
//                   <img
//                     src={currentProjectData.image}
//                     alt={currentProjectData.title}
//                     className="w-full h-full object-cover rounded-xl transition-all duration-1000"
//                     style={{
//                       filter: `drop-shadow(0 20px 40px ${currentProjectData.color}30)`,
//                     }}
//                   />
//                   <div 
//                     className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-xl"
//                   />
//                 </div>
//               </div>

//               {/* Content side */}
//               <div className="order-1 lg:order-2 flex flex-col justify-center p-8 md:p-12 relative z-10">
//                 <div className="space-y-6">
//                   {/* Tech stack */}
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {currentProjectData.tech.map((tech, index) => (
//                       <span
//                         key={index}
//                         className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 text-white backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//                         style={{
//                           animationDelay: `${index * 0.1}s`,
//                         }}
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>

//                   {/* Title */}
//                   <h3 
//                     className="text-3xl md:text-4xl font-bold text-white mb-4 transition-all duration-500"
//                     style={{
//                       textShadow: `0 0 30px ${currentProjectData.color}40`,
//                     }}
//                   >
//                     {currentProjectData.title}
//                   </h3>

//                   {/* Description */}
//                   <p className="text-gray-300 text-lg leading-relaxed mb-6">
//                     {currentProjectData.description}
//                   </p>

//                   {/* Action buttons */}
//                   <div className="flex flex-wrap gap-4">
//                     <button 
//                       className="group px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden"
//                       style={{
//                         background: `linear-gradient(45deg, ${currentProjectData.color}, ${currentProjectData.color}cc)`,
//                         color: '#000',
//                         boxShadow: `0 8px 25px ${currentProjectData.color}30`,
//                       }}
//                     >
//                       <span className="relative z-10 flex items-center gap-2">
//                         View Case Study
//                         <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </span>
//                       <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
//                     </button>

//                     <a
//                       href={currentProjectData.websiteLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="group px-6 py-3 rounded-xl font-semibold border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl backdrop-blur-sm"
//                       style={{
//                         borderColor: currentProjectData.color,
//                         color: currentProjectData.color,
//                         boxShadow: `0 0 20px ${currentProjectData.color}20`,
//                       }}
//                     >
//                       <span className="flex items-center gap-2">
//                         Visit Website
//                         <svg className="w-4 h-4 transition-transform group-hover:rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Navigation arrows */}
//           <button
//             onClick={handleManualPrev}
//             disabled={currentProject === 0}
//             className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 z-10"
//             style={{
//               boxShadow: `0 0 20px ${currentProjectData.color}30`,
//             }}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//           </button>

//           <button
//             onClick={handleManualNext}
//             disabled={currentProject === projects.length - 1}
//             className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed hover:scale-110 z-10"
//             style={{
//               boxShadow: `0 0 20px ${currentProjectData.color}30`,
//             }}
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//             </svg>
//           </button>
//         </div>

//         {/* Progress indicator */}
//         <div className="flex items-center justify-center gap-6 mb-8">
//           <div className="text-white/60 text-sm font-medium">
//             {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
//           </div>
          
//           <div className="w-48 h-2 bg-white/10 rounded-full overflow-hidden">
//             <div 
//               className="h-full rounded-full transition-all duration-1000 ease-out"
//               style={{
//                 width: `${((currentProject + 1) / projects.length) * 100}%`,
//                 background: `linear-gradient(90deg, ${currentProjectData.color}, ${currentProjectData.color}aa)`,
//                 boxShadow: `0 0 15px ${currentProjectData.color}60`,
//               }}
//             />
//           </div>
          
//           <div className="flex gap-2">
//             {projects.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => handleDotClick(index)}
//                 className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
//                   index === currentProject ? 'scale-125' : 'scale-100'
//                 }`}
//                 style={{
//                   backgroundColor: index === currentProject ? currentProjectData.color : 'rgba(255,255,255,0.3)',
//                   boxShadow: index === currentProject ? `0 0 15px ${currentProjectData.color}80` : 'none',
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Scroll hint with enhanced visual feedback */}
//         <div className="text-center">
//           <div className="text-white/60 text-sm mb-4">
//             {isAtTop && currentProject > 0 ? (
//               <span className="text-cyan-400 font-semibold animate-pulse">
//                 ⬆️ Scroll up to see previous project
//               </span>
//             ) : isAtBottom && currentProject < projects.length - 1 ? (
//               <span className="text-cyan-400 font-semibold animate-pulse">
//                 ⬇️ Scroll down to see next project
//               </span>
//             ) : isAtBottom && currentProject >= projects.length - 1 ? (
//               <span className="text-green-400 font-semibold animate-pulse">
//                 ⬇️ Continue scrolling to proceed
//               </span>
//             ) : (
//               <span>
//                 Scroll to explore projects • Project {currentProject + 1} of {projects.length}
//               </span>
//             )}
//           </div>
          
//           {/* Enhanced scroll indicator */}
//           <div className="relative inline-flex flex-col items-center">
//             <div 
//               className="w-6 h-10 border-2 rounded-full flex justify-center relative overflow-hidden"
//               style={{
//                 borderColor: isAtTop || isAtBottom ? currentProjectData.color : 'rgba(255,255,255,0.3)',
//                 boxShadow: isAtTop || isAtBottom ? `0 0 15px ${currentProjectData.color}40` : 'none',
//                 background: isAtTop || isAtBottom ? `${currentProjectData.color}10` : 'transparent',
//               }}
//             >
//               <div 
//                 className="w-1 h-3 rounded-full mt-2 transition-all duration-300"
//                 style={{
//                   backgroundColor: isAtTop || isAtBottom ? currentProjectData.color : 'rgba(255,255,255,0.6)',
//                   animation: isAtTop || isAtBottom ? 'pulse 1s infinite' : 'bounce 2s infinite',
//                   transform: isAtTop ? 'rotate(180deg)' : 'rotate(0deg)',
//                 }}
//               />
//             </div>
            
//             {/* Progress ring around scroll indicator */}
//             <div 
//               className="absolute inset-0 w-6 h-10"
//               style={{
//                 background: `conic-gradient(${currentProjectData.color} ${scrollProgress * 360}deg, transparent 0deg)`,
//                 borderRadius: '20px',
//                 opacity: 0.3,
//                 mask: 'radial-gradient(circle at center, transparent 60%, black 65%)',
//               }}
//             />
//           </div>
          
//           {/* Scroll progress text */}
//           <div className="mt-2 text-xs text-white/40">
//             {Math.round(scrollProgress * 100)}% through section
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes twinkle {
//           0%, 100% { opacity: 0.1; transform: scale(1); }
//           50% { opacity: 0.3; transform: scale(1.2); }
//         }
        
//         @keyframes bounce {
//           0%, 20%, 53%, 80%, 100% { 
//             transform: translateY(0); 
//           }
//           40%, 43% { 
//             transform: translateY(-10px); 
//           }
//         }
        
//         @keyframes pulse {
//           0%, 100% { 
//             opacity: 0.6; 
//             transform: scale(1);
//           }
//           50% { 
//             opacity: 1; 
//             transform: scale(1.1);
//           }
//         }

//         @keyframes slideInUp {
//           from {
//             opacity: 0;
//             transform: translateY(30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes slideInDown {
//           from {
//             opacity: 0;
//             transform: translateY(-30px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         @keyframes glow {
//           0%, 100% {
//             box-shadow: 0 0 20px currentColor;
//           }
//           50% {
//             box-shadow: 0 0 40px currentColor, 0 0 60px currentColor;
//           }
//         }

//         .project-transition-enter {
//           animation: slideInUp 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }

//         .project-transition-exit {
//           animation: slideInDown 0.6s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .scroll-zone-glow {
//           animation: glow 2s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default PremiumPortfolioSection;
import { useState, useEffect } from 'react';

export const Fixedblue = () => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
     
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      
     
      const scrolled = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollWidth(Math.min(scrolled, 100));
    };


    window.addEventListener('scroll', handleScroll, { passive: true });
    
   
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 transition-all duration-100 ease-out shadow-lg" 
        style={{ width: `${scrollWidth}%` }}
      ></div>
    </div>
  );
};
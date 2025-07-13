import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gsap from "gsap";

const ModesIncHomepage = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    show: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1], delay },
    }),
  };

  const stagger = {
    show: { transition: { staggerChildren: 0.17 } },
  };

  // Reveal component for scroll animations
  const Reveal = ({ children, delay = 0 }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.23 });
    
    useEffect(() => {
      if (inView) controls.start("show");
    }, [controls, inView]);

    return (
      <motion.div 
        ref={ref} 
        initial="hidden" 
        animate={controls} 
        variants={fadeUp} 
        custom={delay}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div style={{
      fontFamily: "'Montserrat', Arial, sans-serif",
      color: "#141B2B",
      backgroundColor: "black",
      minHeight: "100vh",
      overflowX: "hidden",
      padding: "0 24px"
    }}>
      {/* Hero Section */}
      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "80px 0" }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ textAlign: "center" }}
        >
          <motion.h1
            style={{
              fontSize: "clamp(40px, 6vw, 60px)",
              fontWeight: 700,
              lineHeight: 1.05,
              marginBottom: 18,
            }}
            variants={fadeUp}
            custom={0.12}
          >
            Let's co-create<br />your digital culture
          </motion.h1>
          
          <Reveal delay={0.26}>
            <h2 style={{ 
              fontWeight: 700, 
              fontSize: "clamp(20px, 3vw, 26px)", 
              marginBottom: 18, 
              lineHeight: 1.13 
            }}>
              Taking a people-first approach to digital enablement
            </h2>
            <p style={{ 
              fontSize: "clamp(16px, 2vw, 19px)", 
              lineHeight: 1.7, 
              color: "#222b34", 
              maxWidth: 800,
              margin: "0 auto 32px"
            }}>
              At Modes, we support financial services organizations in optimizing digital and data ecosystems that drive successful business outcomes.
            </p>
          </Reveal>
          
          {/* Call to Actions */}
          <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: 16, 
            marginTop: 28,
            flexWrap: "wrap"
          }}>
            <Reveal delay={0.36}>
              <a href="/services"
                style={{
                  fontWeight: 700, 
                  fontSize: 18, 
                  color: "#fff", 
                  background: "#141B2B", 
                  padding: "18px 34px",
                  borderRadius: 70, 
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center"
                }}
              >
                Explore our services
                <img 
                  src="https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/618d7c356cbe86d13fc25d4a_arrow-right.svg" 
                  alt="" 
                  style={{ marginLeft: 10, height: 14 }} 
                />
              </a>
            </Reveal>
          </div>
        </motion.div>
      </div>

      {/* Client Logos Section */}
      <div style={{ 
        maxWidth: 1440, 
        margin: "0 auto", 
        padding: "58px 0 80px",
        textAlign: "center"
      }}>
        <Reveal>
          <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 40 }}>
            Amazing organizations we have been co-creating with
          </h2>
        </Reveal>
        
        <div style={{ 
          display: "flex", 
          justifyContent: "center", 
          gap: "40px", 
          flexWrap: "wrap"
        }}>
          {[
            "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/66202b19a077b8f57c625bd3_logo-webflow.svg",
            "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/618bd76544bba46e9b8fa1a8_logo-modes.svg",
            "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/66202b19a077b8f57c625bd3_logo-webflow.svg",
            "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/618bd76544bba46e9b8fa1a8_logo-modes.svg",
          ].map((url, idx) => (
            <Reveal key={idx} delay={0.03 * idx}>
              <img
                src={url}
                alt="Client logo"
                style={{ 
                  height: 50, 
                  objectFit: "contain", 
                  filter: "grayscale(1)",
                  opacity: 0.7
                }}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Transformation Section */}
      <div style={{ 
        maxWidth: 1440, 
        margin: "0 auto", 
        padding: "84px 0 28px",
        textAlign: "center"
      }}>
        <Reveal>
          <h2 style={{ fontWeight: 700, fontSize: 26, marginBottom: 16 }}>Transformation</h2>
        </Reveal>
        <Reveal>
          <h3 style={{ fontWeight: 600, fontSize: 22, marginBottom: 14, color: "#374366" }}>
            Rewire for digital
          </h3>
        </Reveal>
        
        {/* Card row */}
        <div style={{ 
          display: "flex", 
          gap: 16, 
          justifyContent: "center", 
          marginBottom: 32, 
          flexWrap: "wrap" 
        }}>
          {[
            {
              icon: "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/619d0df6c1c71a3cc883e216_icon-strategy_1.svg",
              heading: "Strategy",
              text: "Map out a digital journey that fits your culture"
            },
            {
              icon: "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/619d0df7b263b6ce5c5f1867_icon-design_1.svg",
              heading: "Design",
              text: "Cocreate digital solutions with the people who use them"
            },
            {
              icon: "https://cdn.prod.website-files.com/618bcfd8f178447ade4b3ba0/619d0df66f087ed03c7c5def_icon-build_1.svg",
              heading: "DIGITAL",
              text: "Prototype, test, build, and bring your ideas to life"
            }
          ].map((card, idx) => (
            <Reveal key={card.heading} delay={0.07 * idx}>
              <div style={{
                width: 240, 
                background: "#fff", 
                borderRadius: 20, 
                padding: "34px 20px 28px",
                boxShadow: "0 3px 16px rgba(0,0,0,0.05)"
              }}>
                <img 
                  src={card.icon} 
                  style={{ width: 40, marginBottom: 16 }} 
                  alt={card.heading} 
                />
                <div style={{ fontWeight: 700, fontSize: 18 }}>{card.heading}</div>
                <div style={{ fontSize: 15, marginTop: 10, color: "#37404F" }}>
                  {card.text}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ModesIncHomepage;
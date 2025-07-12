import React, { useState, useEffect } from 'react';
import { ChevronRight, ArrowRight, Star, TrendingUp, Target, Zap, Users, Award, Globe, CheckCircle } from 'lucide-react';
import HeroFlash from '../components/Hero-section';
import FAQSection from '../components/ui/Faq';
import TiltedCard from '../components/ui/TiltedCard'; // adjust path if needed
import { Link } from 'react-router-dom';

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: <Target className="w-12 h-12" />,
      title: "Strategic Brand Positioning",
      description: "Elevate your brand's market position with data-driven strategies that resonate with your ideal customers.",
      features: ["Brand Architecture", "Market Analysis", "Competitive Intelligence"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Performance Marketing",
      description: "Scale your revenue with precision-targeted campaigns that deliver measurable ROI across all channels.",
      features: ["Paid Advertising", "Conversion Optimization", "Analytics & Reporting"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Digital Transformation",
      description: "Future-proof your business with cutting-edge technology and innovative digital solutions.",
      features: ["Tech Consulting", "Process Automation", "Digital Strategy"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Executive Consulting",
      description: "Strategic guidance for visionary leaders ready to scale their impact and build legacy businesses.",
      features: ["Leadership Development", "Growth Strategy", "Operational Excellence"]
    }
  ];

  const caseStudies = [
    {
      client: "TechVision AI",
      industry: "SaaS",
      result: "340% Revenue Growth",
      timeline: "8 months",
      description: "Transformed a struggling AI startup into a market leader through strategic positioning and performance marketing."
    },
    {
      client: "LuxurySpace",
      industry: "Real Estate",
      result: "$50M+ Portfolio Value",
      timeline: "12 months",
      description: "Elevated a boutique real estate firm to premium market positioning, attracting high-net-worth clients globally."
    },
    {
      client: "NeoFinance",
      industry: "FinTech",
      result: "10x Lead Generation",
      timeline: "6 months",
      description: "Revolutionized digital presence for a financial services company, establishing thought leadership and trust."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CEO, TechVision AI",
      location: "Singapore",
      quote: "SimplyBetter didn't just transform our marketing—they transformed our entire business philosophy. The results speak for themselves.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez",
      title: "Founder, LuxurySpace",
      location: "Dubai, UAE",
      quote: "Working with SimplyBetter was like having a world-class consulting firm dedicated to our success. Exceptional strategic thinking.",
      rating: 5
    },
    {
      name: "Elena Petrov",
      title: "CMO, NeoFinance",
      location: "New York, USA",
      quote: "The sophistication and precision of their approach is unmatched. They understand the psychology of premium brands.",
      rating: 5
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <HeroFlash/>
     

      {/* About Section */}
      <section className="py-36 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-7xl font-bold mb-12 font-serif">
                Built for <span className="text-yellow-400">Excellence</span>
              </h2>
              <p className="text-3xl text-gray-300 mb-12 leading-relaxed">
                SimplyBetter isn't just another agency. We're strategic partners for ambitious leaders who refuse to settle for ordinary results.
              </p>
              <p className="text-2xl text-gray-400 mb-12 leading-relaxed">
                Our philosophy is rooted in the belief that exceptional businesses are built through the intersection of strategic thinking, creative execution, and relentless optimization. We don't just deliver campaigns—we architect transformations.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-9 h-9 text-yellow-400" />
                  <span className="text-2xl">Strategic Excellence</span>
                </div>
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-9 h-9 text-yellow-400" />
                  <span className="text-2xl">Premium Execution</span>
                </div>
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-9 h-9 text-yellow-400" />
                  <span className="text-2xl">Measurable Impact</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/50 p-12 rounded-3xl border border-gray-800">
                <div className="grid grid-cols-2 gap-12 text-center">
                  <div>
                    <div className="text-6xl font-bold text-yellow-400 mb-3">500%</div>
                    <div className="text-2xl text-gray-300">Average ROI</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-yellow-400 mb-3">50+</div>
                    <div className="text-2xl text-gray-300">Global Clients</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-yellow-400 mb-3">$100M+</div>
                    <div className="text-2xl text-gray-300">Revenue Generated</div>
                  </div>
                  <div>
                    <div className="text-6xl font-bold text-yellow-400 mb-3">98%</div>
                    <div className="text-2xl text-gray-300">Client Retention</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    <section className="py-28 px-6 sm:px-8 bg-gradient-to-b from-gray-900/20 to-gray-900/50 relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-400/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    {/* Enhanced heading with decorative elements */}
    <div className="text-center mb-20">
      <h2 className="text-6xl md:text-8xl font-bold font-serif mb-6">
        Our <span className="text-yellow-400 relative">Core
          <span className="absolute -bottom-2 left-0 w-full h-2 bg-yellow-400/30 transform scale-x-110"></span>
        </span> Beliefs
      </h2>
      <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
        These principles guide every decision we make and every solution we create for our partners.
      </p>
    </div>

    {/* Belief cards with expanded content */}
    <div className="grid md:grid-cols-3 gap-8">
      {/* Belief 1 */}
      <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 group">
        <span className="text-yellow-400 font-bold text-3xl block mb-6">01</span>
        <h3 className="text-3xl font-bold mb-6 group-hover:text-yellow-400 transition-colors">
          Psychology-First Branding
        </h3>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          Branding without psychology is just decoration. We dive deep into human behavior to create brands that resonate on a subconscious level.
        </p>
        <div className="text-yellow-400/80 text-lg">
          <p className="mb-2">✓ Cognitive triggers</p>
          <p className="mb-2">✓ Emotional connections</p>
          <p>✓ Behavioral science</p>
        </div>
      </div>

      {/* Belief 2 */}
      <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 group">
        <span className="text-yellow-400 font-bold text-3xl block mb-6">02</span>
        <h3 className="text-3xl font-bold mb-6 group-hover:text-yellow-400 transition-colors">
          Strategic Foundation
        </h3>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          Strategy isn't a luxury—it's the bedrock of success. We build comprehensive roadmaps that align every tactic with your business objectives.
        </p>
        <div className="text-yellow-400/80 text-lg">
          <p className="mb-2">✓ Data-driven decisions</p>
          <p className="mb-2">✓ Competitive advantage</p>
          <p>✓ Future-proof planning</p>
        </div>
      </div>

      {/* Belief 3 */}
      <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800 hover:border-yellow-400/30 transition-all duration-300 group">
        <span className="text-yellow-400 font-bold text-3xl block mb-6">03</span>
        <h3 className="text-3xl font-bold mb-6 group-hover:text-yellow-400 transition-colors">
          Clarity Over Content
        </h3>
        <p className="text-xl text-gray-300 mb-6 leading-relaxed">
          In a noisy digital world, clarity cuts through. We help you communicate your value with precision that converts audiences into advocates.
        </p>
        <div className="text-yellow-400/80 text-lg">
          <p className="mb-2">✓ Message distillation</p>
          <p className="mb-2">✓ Value proposition</p>
          <p>✓ Conversion-focused</p>
        </div>
      </div>
    </div>

   
  </div>
</section>

      {/* Services Section */}
      <section className="py-36 px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-7xl font-bold mb-9 font-serif">
              Our <span className="text-yellow-400">Services</span>
            </h2>
            <p className="text-3xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive solutions designed to elevate your business to the next level of performance and market leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service, index) => (
  <TiltedCard
    key={index}
    containerHeight="auto"
    containerWidth="100%"
    imageHeight="auto"
    imageWidth="100%"
    scaleOnHover={1.03}
    rotateAmplitude={8}
    showMobileWarning={false}
    showTooltip={false}
    displayOverlayContent={false}
    overlayContent={null}
  >
    <div className="bg-black/50 p-12 rounded-3xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-500">
      <div className="text-yellow-400 mb-9">
        {service.icon}
      </div>
      <h3 className="text-3xl font-bold mb-6">{service.title}</h3>
      <p className="text-2xl text-gray-300 mb-9 leading-relaxed">{service.description}</p>
      <div className="space-y-3">
        {service.features.map((feature, i) => (
          <div key={i} className="flex items-center gap-4 text-xl text-gray-400">
            <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full"></div>
            {feature}
          </div>
        ))}
      </div>
    </div>
  </TiltedCard>
))}

          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-36 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-7xl font-bold mb-9 font-serif">
              Success <span className="text-yellow-400">Stories</span>
            </h2>
            <p className="text-3xl text-gray-300 max-w-4xl mx-auto">
              Real transformations. Measurable results. Extraordinary outcomes for extraordinary businesses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-black p-12 rounded-3xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-500 group">
                <div className="flex items-center gap-6 mb-9">
                  <Award className="w-12 h-12 text-yellow-400" />
                  <div>
                    <h3 className="text-3xl font-bold">{study.client}</h3>
                    <p className="text-2xl text-gray-400">{study.industry}</p>
                  </div>
                </div>
                
                <div className="mb-9">
                  <div className="text-5xl font-bold text-yellow-400 mb-3">{study.result}</div>
                  <div className="text-2xl text-gray-300">in {study.timeline}</div>
                </div>
                
                <p className="text-2xl text-gray-300 leading-relaxed">{study.description}</p>
                
                <button className="mt-9 text-yellow-400 hover:text-yellow-300 font-semibold flex items-center gap-3 group-hover:gap-4 transition-all text-xl">
                  Read Case Study
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-36 px-8 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-bold mb-24 font-serif">
            Client <span className="text-yellow-400">Testimonials</span>
          </h2>
          
          <div className="relative">
            <div className="bg-black/50 p-16 rounded-3xl border border-gray-800">
              <div className="flex justify-center mb-9">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-9 h-9 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-4xl font-light mb-12 leading-relaxed italic">
                "{testimonials[activeTestimonial].quote}"
              </blockquote>
              
              <div className="flex items-center justify-center gap-6">
                <Globe className="w-7 h-7 text-yellow-400" />
                <div>
                  <div className="text-2xl font-semibold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-2xl text-gray-400">{testimonials[activeTestimonial].title}</div>
                  <div className="text-xl text-yellow-400">{testimonials[activeTestimonial].location}</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-12 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all ${
                    activeTestimonial === index ? 'bg-yellow-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Schedule Call Section */}
<section className="py-36 px-8 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
  {/* Decorative elements */}
  <div className="absolute top-1/4 -left-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
  <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
  
  <div className="max-w-7xl mx-auto relative z-10">
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h2 className="text-7xl font-bold mb-12 font-serif">
          Let's Build Your <span className="text-yellow-400">Success Roadmap</span>
        </h2>
        <p className="text-3xl text-gray-300 mb-12 leading-relaxed">
          Schedule a 30-minute strategy session with our executive team to explore how we can transform your business.
        </p>
        
        <div className="space-y-8">
          <div className="flex items-start gap-6">
            <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
              <Target className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Clarity First</h3>
              <p className="text-xl text-gray-400">We'll help identify your most pressing opportunities and challenges.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
              <TrendingUp className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Growth Focused</h3>
              <p className="text-xl text-gray-400">Walk away with actionable insights to accelerate your growth.</p>
            </div>
          </div>
          
          <div className="flex items-start gap-6">
            <div className="bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">No Pressure</h3>
              <p className="text-xl text-gray-400">This is about finding the right fit - no sales pitch.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-900/50 p-12 rounded-3xl border border-gray-800 backdrop-blur-sm">
        <h3 className="text-4xl font-bold mb-8">Schedule Your Call</h3>
        <p className="text-xl text-gray-400 mb-12">Select a time that works best for you.</p>
        
        <div className="space-y-6">
          <div>
            <label className="block text-xl text-gray-300 mb-3">Full Name</label>
            <input 
              type="text" 
              className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-xl text-gray-300 mb-3">Email Address</label>
            <input 
              type="email" 
              className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
              placeholder="your@email.com"
            />
          </div>
          
          <div>
            <label className="block text-xl text-gray-300 mb-3">Company</label>
            <input 
              type="text" 
              className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
              placeholder="Company name"
            />
          </div>
          
          <div>
            <label className="block text-xl text-gray-300 mb-3">Preferred Date & Time</label>
            <input 
              type="datetime-local" 
              className="w-full bg-gray-900/70 border border-gray-800 rounded-xl px-6 py-4 text-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
            />
          </div>
          
          <button className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-5 rounded-xl font-semibold text-2xl hover:scale-[1.02] transition-all duration-300 mt-6">
            Schedule Now
          </button>
          
          <p className="text-gray-500 text-center mt-6">
            By scheduling, you agree to our <a href="#" className="text-yellow-400 hover:underline">privacy policy</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="py-36 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-7xl font-bold mb-12 font-serif">
            Ready to Build Something <span className="text-yellow-400">Simply Better?</span>
          </h2>
          <p className="text-3xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            Join the ranks of visionary entrepreneurs who've transformed their businesses with strategic excellence and intelligent execution.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-9 justify-center">
           {/* <Link 
  to="/schedule-call" 
  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all flex items-center gap-2"
>
  Schedule Call   <ChevronRight className="w-9 h-9 group-hover:translate-x-1.5 transition-transform" />
</Link> */}
            
          
            
            <button className="border border-yellow-400 text-yellow-400 px-16 py-7 rounded-full font-semibold text-3xl hover:bg-yellow-400 hover:text-black transition-all duration-300">
              Download Brand Guide
            </button>
          </div>
          
          <div className="mt-16 flex justify-center items-center gap-12 text-xl text-gray-400">
            <div>✓ Free 30-min consultation</div>
            <div>✓ Custom strategy roadmap</div>
            <div>✓ No commitment required</div>
          </div>
        </div>
      </section>
      <section>
        <FAQSection />
      </section>
    </div>
  );
};
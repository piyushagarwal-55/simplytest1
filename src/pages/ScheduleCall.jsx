import { useState } from 'react';
import { CheckCircle, ChevronRight, Clock, Calendar, Users, Zap, Target } from 'lucide-react';

export const ScheduleCall = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    goals: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
    setStep(3);
  };

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen">
      {/* Hero Section */}
      <section className="py-24 px-6 sm:px-8 relative">
        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 font-serif">
            Schedule Your <span className="text-yellow-400">Strategy Call</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Book a 30-minute consultation with our executive team.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24 px-6 sm:px-8 relative">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="flex justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-800 -z-10"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-yellow-400 -z-10 transition-all duration-500" 
              style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}
            ></div>
            
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-2 transition-all ${step >= num ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-400'}`}>
                  {num}
                </div>
                <span className={`text-lg ${step >= num ? 'text-yellow-400' : 'text-gray-500'}`}>
                  {num === 1 ? 'Details' : num === 2 ? 'Schedule' : 'Confirm'}
                </span>
              </div>
            ))}
          </div>

          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Tell Us About Yourself</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg text-gray-300 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg text-gray-300 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-lg text-gray-300 mb-2">Company</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
                    placeholder="Company name"
                  />
                </div>
                
                <div>
                  <label className="block text-lg text-gray-300 mb-2">What are your primary goals?</label>
                  <textarea 
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    rows="3"
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-lg focus:outline-none focus:ring-1 focus:ring-yellow-400/50 focus:border-yellow-400/30 transition-all" 
                    placeholder="Briefly describe what you'd like to achieve"
                  ></textarea>
                </div>
                
                <button 
                  onClick={() => setStep(2)}
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-6 py-4 rounded-lg font-semibold text-xl hover:scale-[1.02] transition-all duration-300 mt-4 flex items-center justify-center gap-2"
                >
                  Continue to Scheduling <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Scheduling */}
          {step === 2 && (
            <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800">
              <h2 className="text-3xl font-bold mb-6">Select Your Time</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Calendar className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold">Available Dates</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {['2023-11-15', '2023-11-16', '2023-11-17', '2023-11-20'].map(date => (
                      <button
                        key={date}
                        onClick={() => setFormData({...formData, date})}
                        className={`py-2 rounded-md border transition-all text-sm ${formData.date === date ? 'border-yellow-400 bg-yellow-400/10' : 'border-gray-700 hover:border-yellow-400/30'}`}
                      >
                        {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </button>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-yellow-400" />
                    <h3 className="text-xl font-bold">Available Times</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {['09:00', '10:30', '12:00', '14:00'].map(time => (
                      <button
                        key={time}
                        onClick={() => setFormData({...formData, time})}
                        className={`py-2 rounded-md border transition-all text-sm ${formData.time === time ? 'border-yellow-400 bg-yellow-400/10' : 'border-gray-700 hover:border-yellow-400/30'}`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                  <h3 className="text-xl font-bold mb-4">Your Consultation</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">30-Minute Session</h4>
                        <p className="text-gray-400 text-sm">With our executive team</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold">Goals Identification</h4>
                        <p className="text-gray-400 text-sm">Clarify your objectives</p>
                      </div>
                    </div>
                  </div>
                  
                  {formData.date && formData.time && (
                    <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 mb-6">
                      <h4 className="text-lg font-semibold mb-1">Selected Time</h4>
                      <p className="text-xl">
                        {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                        <span className="text-yellow-400 mx-2">•</span>
                        {formData.time}
                      </p>
                    </div>
                  )}
                  
                  <button 
                    onClick={handleSubmit}
                    disabled={!formData.date || !formData.time}
                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all ${formData.date && formData.time ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black hover:scale-[1.02]' : 'bg-gray-700 text-gray-400 cursor-not-allowed'}`}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="bg-gray-900/80 p-12 rounded-2xl border border-gray-800 text-center">
              <div className="w-20 h-20 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-yellow-400/20">
                <CheckCircle className="w-10 h-10 text-yellow-400" />
              </div>
              
              <h2 className="text-3xl font-bold mb-4">Appointment Confirmed!</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
                Your strategy session has been scheduled. We've sent the details to your email.
              </p>
              
              <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 max-w-md mx-auto mb-8">
                <h3 className="text-xl font-semibold mb-3">Session Details</h3>
                <p className="text-lg mb-1">
                  <span className="text-gray-400">Date:</span> {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                </p>
                <p className="text-lg mb-1">
                  <span className="text-gray-400">Time:</span> {formData.time}
                </p>
                <p className="text-lg">
                  <span className="text-gray-400">Duration:</span> 30 minutes
                </p>
              </div>
              
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                A calendar invitation has been sent to {formData.email}.
              </p>
              
              <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-8 py-3 rounded-lg font-semibold hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-2">
                Add to Calendar <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-6 sm:px-8 bg-[#0B0B0B] border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 font-serif">
            What to Expect Next
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                <span className="text-xl font-bold text-yellow-400">1</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Confirmation Email</h3>
              <p className="text-gray-400 text-sm">
                Calendar invite with Zoom link within 5 minutes.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                <span className="text-xl font-bold text-yellow-400">2</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Pre-Call Form</h3>
              <p className="text-gray-400 text-sm">
                Brief questionnaire about your business.
              </p>
            </div>
            
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <div className="w-12 h-12 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-yellow-400/20">
                <span className="text-xl font-bold text-yellow-400">3</span>
              </div>
              <h3 className="text-lg font-bold mb-2">Strategy Session</h3>
              <p className="text-gray-400 text-sm">
                Meet to explore opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
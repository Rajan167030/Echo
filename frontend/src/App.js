import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from './landing/Navbar';
import TeamPage from './landing/TeamPage';
import Footer from './components/Footer';
import './App.css';


import ListenToEchoModal from './modals/ListenToEchoModal';
import AddMomentModal from './modals/AddMomentModal';
import RecordMemoryModal from './modals/RecordMemoryModal';
import MemoryJournalModal from './modals/MemoryJournalModal';
import RemindersModal from './modals/RemindersModal';
import AddWriteUpModal from './modals/AddWriteUpModal';
import DashboardModal from './modals/DashboardModal';
import ViewportLazyPixelBlast from './components/ViewportLazyPixelBlast';

const App = () => {
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [userProfile, setUserProfile] = useState({ name: 'User', dob: '', gender: '' });

  // Commented out for now - dashboard not ready
  // const handleGetStarted = () => {
  //   navigate('/dashboard');
  // };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const handleLogout = () => {
    navigate('/');
    setActiveModal(null);
  };

  const handleBackToLanding = () => {
    navigate('/');
  };

  const renderModal = () => {
    switch (activeModal) {
      case 'listen-echo':
        return (
          <ListenToEchoModal
            onClose={handleCloseModal}
          />
        );
      case 'add-moment':
        return (
          <AddMomentModal
            onClose={handleCloseModal}
            onSaveMoment={(title, type) => {
              console.log('Moment saved:', { title, type });
              handleCloseModal();
            }}
          />
        );
      case 'record-memory':
        return (
          <RecordMemoryModal
            onClose={handleCloseModal}
            onSaveMemory={(title, audioBlob) => {
              console.log('Memory saved:', { title, audioBlob });
              handleCloseModal();
            }}
          />
        );
      case 'memory-journal':
        return (
          <MemoryJournalModal
            onClose={handleCloseModal}
          />
        );
      case 'reminders':
        return (
          <RemindersModal
            onClose={handleCloseModal}
          />
        );
      case 'add-writeup':
        return (
          <AddWriteUpModal
            onClose={handleCloseModal}
            onSaveWriteUp={(title, content) => {
              console.log('Write-up saved:', { title, content });
              handleCloseModal();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Routes>
        <Route path="/teams" element={
          <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', zIndex: 1, flex: 1 }}>
              <Navbar onGetStartedClick={() => {}} onTeamClick={() => navigate('/teams')} currentPage="team" />
              <TeamPage onBack={() => navigate('/')} />
            </div>
            <Footer />
          </div>
        } />
        
        <Route path="/dashboard" element={
          <div style={{ minHeight: '100vh', position: 'relative', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', zIndex: -1, flex: 1 }}>
              <Navbar onGetStartedClick={() => {}} onTeamClick={() => navigate('/teams')} currentPage="dashboard" />
              <DashboardModal
                onClose={handleBackToLanding}
                onLogout={handleLogout}
                userProfile={userProfile}
              />
            </div>
            <Footer />
          </div>
        } />
        
        <Route path="/" element={
    <div style={{ minHeight: '100vh', position: 'relative', backgroundColor: '#000000' }}>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar onGetStartedClick={() => {}} onTeamClick={() => navigate('/teams')} currentPage="landing" />
        <main className="pt-16 sm:pt-20">
          <section id="home" className="relative flex flex-col items-center justify-center" style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <iframe 
                src='https://my.spline.design/claritystream-ffDXp5GK0BOraYABqFxbqISp/' 
                frameBorder='0' 
                width='100%' 
                height='100%'
                title="3D Visualization"
                loading="eager"
                style={{ display: 'block', pointerEvents: 'none' }}
              />
              {/* Cover Spline watermark */}
              <div
                className="absolute bottom-0 left-0 right-0 sm:bottom-0 sm:right-0 sm:left-auto pointer-events-none"
                style={{
                  width: '100%',
                  height: '60px',
                  background: '#000000',
                  zIndex: 5
                }}
              />
            </div>
            <div className="relative z-10 text-center px-4 sm:px-6 py-16 sm:py-24">
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 sm:mb-6 leading-tight text-white">
                Preserving Memories,<br /> Empowering Lives
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-8 sm:mb-10 text-white leading-relaxed">
                ECHO is an AI-powered memory preservation system designed for individuals with memory challenges. Through advanced speech recognition, emotional intelligence, and blockchain security, we help preserve life's precious moments while providing real-time support for both patients and caregivers.
              </p>
            </div>
          </section>

          <section id="how-it-works" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative" style={{ backgroundColor: '#000000' }}>
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center text-white">How ECHO Works</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {[{title: 'Speak Naturally', desc: 'Share your memories through natural conversation. Our advanced speech recognition captures every precious detail in real-time.'}, {title: 'AI Processing', desc: 'Our AI analyzes emotions, categorizes memories, and identifies important patterns while ensuring everything is securely stored on-chain.'}, {title: 'Recall & Connect', desc: 'Effortlessly revisit memories, receive contextual reminders, and keep caregivers informed with intelligent alerts and insights.'}].map((step, idx) => (
                    <div key={step.title} className="p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl text-center transition-all duration-300 hover:scale-[1.03] cursor-pointer group" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', transform: 'translateZ(0)' }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full flex items-center justify-center text-base sm:text-lg font-bold text-white" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }}>{idx + 1}</div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 text-white">{step.title}</h3>
                      <p className="text-gray-400 text-xs sm:text-sm">{step.desc}</p>
                    </div>
                  ))}
                </div>
            </div>
          </section>

          <section id="features" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative" style={{ backgroundColor: '#000000' }}>
            <ViewportLazyPixelBlast
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ zIndex: 0 }}
              variant="circle"
              pixelSize={6}
              color="#B19EEF"
              patternScale={3}
              patternDensity={1.0}
              pixelSizeJitter={0.3}
              enableRipples
              rippleSpeed={0.3}
              rippleThickness={0.1}
              rippleIntensityScale={1.2}
              liquid
              liquidStrength={0.08}
              liquidRadius={1.0}
              liquidWobbleSpeed={4}
              speed={0.4}
              edgeFade={0.2}
              transparent
            />
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center text-white">Powerful Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  {title: "Internet Computer Protocol (ICP)", desc: "Privacy-first memory assistant built on the Internet Computer Protocol (ICP). Memories and personal data are cryptographically secured on-chain, ensuring privacy, ownership, and immutability for future generations."},
                  {title: "Smart Memory Recall", desc: "AI-powered memory retrieval with caregiver anchoring helps trigger and reinforce important memories through contextual reminders."},
                  {title: "Emotion Detection", desc: "Advanced sentiment analysis identifies emotional states and behavioral patterns, enabling empathetic responses and early intervention."},
                  {title: "Real-Time Speech Processing", desc: "State-of-the-art speech recognition captures conversations naturally, transcribing and analyzing in real-time with high accuracy."},
                  {title: "Caregiver Dashboard", desc: "Comprehensive monitoring tools provide caregivers with insights, alerts, and analytics to better support their loved ones' wellbeing."},
                  {title: "Adaptive Intelligence", desc: "Machine learning models continuously improve, personalizing interactions and adapting to individual needs and communication patterns."}
                ].map((feature) => (
                  <div key={feature.title} className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', transform: 'translateZ(0)' }}>
                    <div className="h-8 w-8 sm:h-10 sm:w-10 rounded-lg mb-3 sm:mb-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.15)' }} />
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">{feature.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="stories" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative" style={{ backgroundColor: '#000000' }}>
            <ViewportLazyPixelBlast
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ zIndex: 0 }}
              variant="circle"
              pixelSize={6}
              color="#B19EEF"
              patternScale={3}
              patternDensity={1.0}
              pixelSizeJitter={0.3}
              enableRipples
              rippleSpeed={0.3}
              rippleThickness={0.1}
              rippleIntensityScale={1.2}
              liquid
              liquidStrength={0.08}
              liquidRadius={1.0}
              liquidWobbleSpeed={4}
              speed={0.4}
              edgeFade={0.2}
              transparent
            />
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center text-white">Impact Stories</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  "ECHO has given my mother a way to hold onto her most treasured memories. The emotion detection feature helps me understand when she needs support, even from miles away.",
                  "As a caregiver, the real-time alerts have been invaluable. I can see patterns in my father's memory and mood, helping me provide better care and maintain his dignity.",
                  "Recording our family stories has become a daily ritual. My grandmother loves hearing her own voice tell stories from her youth. It's preserving our legacy for generations."
                ].map((quote, i) => (
                  <div key={i} className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl transition-all duration-300 hover:scale-[1.03] cursor-pointer" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', transform: 'translateZ(0)' }}>
                    <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
                      "{quote}"
                    </p>
                    <div className="mt-3 sm:mt-4 h-1 w-10 sm:w-12 rounded" style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="resources" className="py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 relative" style={{ backgroundColor: '#000000' }}>
            <ViewportLazyPixelBlast
              className="absolute inset-0 pointer-events-none hidden lg:block"
              style={{ zIndex: 0 }}
              variant="circle"
              pixelSize={6}
              color="#B19EEF"
              patternScale={3}
              patternDensity={1.0}
              pixelSizeJitter={0.3}
              enableRipples
              rippleSpeed={0.3}
              rippleThickness={0.1}
              rippleIntensityScale={1.2}
              liquid
              liquidStrength={0.08}
              liquidRadius={1.0}
              liquidWobbleSpeed={4}
              speed={0.4}
              edgeFade={0.2}
              transparent
            />
            <div className="max-w-6xl mx-auto relative" style={{ zIndex: 2 }}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 sm:mb-10 md:mb-12 text-center text-white" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Learn More</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {[
                  {title: 'Research & Technology', desc: 'Explore the cutting-edge AI, blockchain, and speech processing technology powering ECHO.'},
                  {title: 'For Caregivers', desc: 'Discover how ECHO can help you provide better care with real-time insights and intelligent monitoring.'},
                  {title: 'Privacy & Security', desc: 'Learn about our blockchain-based security measures and commitment to protecting precious memories.'}
                ].map((res) => (
                  <button key={res.title} onClick={() => {}} className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl block transition-all duration-300 hover:scale-[1.03] text-left w-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)', transform: 'translateZ(0)' }}>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 text-white">{res.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm">{res.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>

      {/* Modal Overlay */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {renderModal()}
          </div>
        </div>
      )}
    </div>
        } />
      </Routes>

      {/* Modal Overlay for all routes */}
      {activeModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            {renderModal()}
          </div>
        </div>
      )}
    </>
  );
};

export default App;

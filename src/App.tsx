import React, { useEffect, useState } from 'react';
import { MessageCircle, Users, Zap, Sparkles, Twitter, Github, MessageSquare, ArrowRight, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream font-inter text-gray antialiased">
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <img 
                src="/talkado-real-logo.png" 
                alt="Talkado.ai Logo" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  // Fallback to icon if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
              <div className="w-8 h-8 bg-teal rounded-lg items-center justify-center hidden">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-gray hover:text-navy transition-colors duration-200 font-medium"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('demo')} 
                className="text-gray hover:text-navy transition-colors duration-200 font-medium"
              >
                Demo
              </button>
              <button 
                onClick={() => scrollToSection('why-talkado')} 
                className="text-gray hover:text-navy transition-colors duration-200 font-medium"
              >
                Why Talkado
              </button>
              <PremiumButton onClick={() => {}}>Start Creating</PremiumButton>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray/10 py-4">
              <nav className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('features')} className="text-gray hover:text-navy text-left">
                  Features
                </button>
                <button onClick={() => scrollToSection('demo')} className="text-gray hover:text-navy text-left">
                  Demo
                </button>
                <button onClick={() => scrollToSection('why-talkado')} className="text-gray hover:text-navy text-left">
                  Why Talkado
                </button>
                <div className="pt-2">
                  <PremiumButton onClick={() => {}}>Start Creating</PremiumButton>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 400 400" fill="none">
            <path d="M0 200C100 100 300 100 400 200C300 300 100 300 0 200Z" fill="currentColor" className="text-teal" />
            <path d="M0 150C150 50 250 150 400 150C250 250 150 350 0 250Z" fill="currentColor" className="text-navy" />
          </svg>
        </div>

        {/* Floating Chat Bubbles */}
        <div className="floating-chat floating-chat-1">
          💡 "Hello! I'm Einstein. Let's discuss relativity!"
        </div>
        <div className="floating-chat floating-chat-2">
          ✍️ "I'm your creative writing companion!"
        </div>
        <div className="floating-chat floating-chat-3">
          🤔 "Ready to explore philosophy?"
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-manrope text-navy mb-6 animate-fade-in">
              Your AI, Your 
              <span className="text-teal relative inline-block">
                Conversation
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-teal/30 rounded-full"></div>
              </span>
              .
            </h1>
            <p className="text-xl md:text-2xl text-gray mb-10 leading-relaxed animate-slide-up">
              Talkado.ai gives you the power to talk with intelligent AI characters or design your own — 
              from inspiring thinkers to fun digital companions.
            </p>
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <PremiumButton onClick={() => {}} className="text-lg">
                Start Creating
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </PremiumButton>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-navy mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Everything you need to create and engage with AI characters
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <FeatureCard 
              icon={<Users className="w-8 h-8 text-teal" />}
              title="Explore AI Characters"
              description="Browse and chat instantly with a diverse library of AI personalities, each with unique traits and conversation styles."
              delay="0s"
            />
            <FeatureCard 
              icon={<Sparkles className="w-8 h-8 text-teal" />}
              title="Custom Personality Builder"
              description="Tailor an AI's behavior and style to match your vision. Create characters that think and speak exactly how you want."
              delay="0.1s"
            />
            <FeatureCard 
              icon={<Zap className="w-8 h-8 text-teal" />}
              title="Seamless Experience"
              description="Enjoy smooth, responsive chats across all your devices with real-time synchronization and intelligent responses."
              delay="0.2s"
            />
            <FeatureCard 
              icon={<MessageCircle className="w-8 h-8 text-teal" />}
              title="Engaging & Natural"
              description="Experience conversations that feel alive with contextual understanding and dynamic personality expressions."
              delay="0.3s"
            />
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="py-16 lg:py-24 bg-white/50 relative">
        {/* Additional floating chat for demo section */}
        <div className="floating-chat" style={{ top: '15%', right: '8%', animationDelay: '1s' }}>
          🚀 "Let's brainstorm together!"
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-navy mb-6">
              See Talkado in Action
            </h2>
            <p className="text-xl text-gray max-w-2xl mx-auto">
              Experience the magic of AI conversations with our interactive preview
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <ChatDemo />
          </div>
        </div>
      </section>

      {/* Why Talkado.ai Section */}
      <section id="why-talkado" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold font-manrope text-navy mb-8">
                Why Choose Talkado.ai?
              </h2>
              <div className="space-y-6">
                <BulletPoint text="Unleash your creativity with unlimited character customization" />
                <BulletPoint text="Flexible conversations that adapt to your mood and interests" />
                <BulletPoint text="Fun and engaging interactions that never get boring" />
                <BulletPoint text="Privacy-focused platform with secure, encrypted conversations" />
                <BulletPoint text="Community-driven content with shared characters and stories" />
              </div>
            </div>
            <div className="animate-float">
              <div className="bg-gradient-to-br from-teal/20 to-navy/20 rounded-3xl p-8 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-20 h-20 bg-teal rounded-full flex items-center justify-center mx-auto mb-6">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold font-manrope text-navy mb-4">
                    Endless Possibilities
                  </h3>
                  <p className="text-gray">
                    From philosophical discussions to creative storytelling, 
                    your AI companions are ready for any conversation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Banner */}
      <section className="py-16 lg:py-24 enhanced-cta-bg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-manrope text-white mb-6 drop-shadow-lg">
              Unleash Your Imagination with AI Conversations
            </h2>
            <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Join thousands of users who are already creating amazing AI characters and having incredible conversations.
            </p>
            <PremiumButton onClick={() => {}} className="text-lg shadow-2xl">
              Join Now
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </PremiumButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-footer py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/talkado-real-logo.png" 
                  alt="Talkado.ai Logo" 
                  className="h-6 w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = 'flex';
                  }}
                />
                <div className="w-6 h-6 bg-teal rounded-lg items-center justify-center hidden">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
              </div>
              <p className="text-gray mb-6 text-sm leading-relaxed">
                Empowering conversations with AI. Create, explore, and connect with intelligent characters.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="mailto:hello@talkado.ai"
                  aria-label="Email"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray hover:text-teal hover:shadow-lg transition-all duration-200"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <FooterColumn 
              title="Navigation"
              links={[
                { text: 'Features', href: '#features', isScroll: true },
                { text: 'Demo', href: '#demo', isScroll: true },
                { text: 'Why Talkado.ai', href: '#why-talkado', isScroll: true }
              ]}
            />
            
            <FooterColumn 
              title="Get Started"
              links={[
                { text: 'Start Creating', href: '#', isButton: true },
                { text: 'Join Community', href: '#', isButton: true }
              ]}
            />
            
            <FooterColumn 
              title="Connect"
              links={[
                { text: 'Contact Support', href: 'mailto:support@talkado.ai' },
                { text: 'Feature Requests', href: 'mailto:feedback@talkado.ai' }
              ]}
            />
          </div>
          
          <div className="border-t border-gray/20 mt-12 pt-8 text-center">
            <p className="text-gray text-sm">
              © 2024 Talkado.ai. All rights reserved. Made with love for AI enthusiasts.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Premium Button Component
const PremiumButton: React.FC<{
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}> = ({ children, onClick, className = "" }) => {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      <div>
        <span>{children}</span>
      </div>
    </button>
  );
};

// Feature Card Component
const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
}> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-2xl p-8 shadow-lg border border-gray/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-slide-up"
      style={{animationDelay: delay}}
    >
      <div className="mb-6">{icon}</div>
      <h3 className="text-2xl font-bold font-manrope text-navy mb-4">{title}</h3>
      <p className="text-gray leading-relaxed">{description}</p>
    </div>
  );
};

// Chat Demo Component
const ChatDemo: React.FC = () => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const messages = [
    { user: true, text: "Hi there! I'm looking for creative writing inspiration." },
    { user: false, text: "Hello! I'd love to help spark your creativity. What type of story are you thinking about?" },
    { user: true, text: "Maybe something about space exploration?" },
    { user: false, text: "Fascinating! Picture this: In 2087, humanity discovers an ancient signal from the Andromeda galaxy..." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray/10 overflow-hidden">
      <div className="bg-gradient-to-r from-teal to-navy p-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h4 className="text-white font-semibold">Creative Writer AI</h4>
            <p className="text-white/80 text-sm">Online • Ready to inspire</p>
          </div>
        </div>
      </div>
      
      <div className="p-6 h-96 overflow-y-auto">
        <div className="space-y-4">
          {messages.slice(0, currentMessage + 1).map((message, index) => (
            <div 
              key={index}
              className={`flex ${message.user ? 'justify-end' : 'justify-start'} animate-slide-up`}
              style={{animationDelay: `${index * 0.5}s`}}
            >
              <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                message.user 
                  ? 'bg-teal text-white' 
                  : 'bg-gray-100 text-gray-800'
              }`}>
                {message.text}
              </div>
            </div>
          ))}
          {currentMessage < messages.length - 1 && (
            <div className="flex justify-start">
              <div className="bg-gray-100 px-4 py-3 rounded-2xl">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Bullet Point Component
const BulletPoint: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-start space-x-3">
      <div className="w-2 h-2 bg-teal rounded-full mt-3 flex-shrink-0"></div>
      <p className="text-lg text-gray">{text}</p>
    </div>
  );
};

// Footer Column Component
const FooterColumn: React.FC<{ 
  title: string; 
  links: Array<{ text: string; href: string; isScroll?: boolean; isButton?: boolean }> 
}> = ({ title, links }) => {
  const handleLinkClick = (link: { text: string; href: string; isScroll?: boolean; isButton?: boolean }) => {
    if (link.isScroll && link.href.startsWith('#')) {
      const element = document.getElementById(link.href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (link.isButton) {
      // Trigger the same action as main CTA buttons
      console.log(`${link.text} clicked`);
    }
  };

  return (
    <div>
      <h4 className="text-lg font-semibold font-manrope text-navy mb-6">{title}</h4>
      <ul className="space-y-3">
        {links.map((link, index) => (
          <li key={index}>
            {link.isScroll || link.isButton ? (
              <button 
                onClick={() => handleLinkClick(link)}
                className="text-gray hover:text-navy transition-colors duration-200 text-sm text-left"
              >
                {link.text}
              </button>
            ) : (
              <a 
                href={link.href} 
                className="text-gray hover:text-navy transition-colors duration-200 text-sm"
                {...(link.href.startsWith('mailto:') ? {} : link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {link.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

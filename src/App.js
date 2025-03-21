import React, { useState, useEffect, useRef } from 'react';
import ImageComparisonSlider from './ImageComparisonSlider';
import { TextReveal, GradientText, FloatingElement, AnimatedButton, StaggeredList } from './AnimationComponents';
import './AnimationStyles.css';

const NormalNetApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Refs for scroll navigation
  const homeRef = useRef(null);
  const examplesRef = useRef(null);
  const supportRef = useRef(null);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  // Scroll to section functions
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center border-b border-gray-800 animate-fade-in sticky top-0 bg-black z-10">
        <div className="text-xl font-bold tracking-wide">
          Normal-Net
        </div>
        <div className="flex space-x-6">
          <a 
            href="#" 
            className="nav-link-effect hover:text-gray-300 text-sm animate-slide-in"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(homeRef);
            }}
            style={{ 
              animationDelay: '500ms',
              animationFillMode: 'both',
              opacity: 0
            }}
            onAnimationEnd={(e) => e.target.style.opacity = 1}
          >
            home
          </a>
          <a 
            href="#" 
            className="nav-link-effect hover:text-gray-300 text-sm animate-slide-in"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(examplesRef);
            }}
            style={{ 
              animationDelay: '600ms',
              animationFillMode: 'both',
              opacity: 0
            }}
            onAnimationEnd={(e) => e.target.style.opacity = 1}
          >
            examples
          </a>
          <a 
            href="#" 
            className="nav-link-effect hover:text-gray-300 text-sm animate-slide-in"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(supportRef);
            }}
            style={{ 
              animationDelay: '700ms',
              animationFillMode: 'both',
              opacity: 0
            }}
            onAnimationEnd={(e) => e.target.style.opacity = 1}
          >
            support
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="py-16 px-8 md:px-16">
        <div className="flex flex-col md:flex-row justify-center items-center">
          {/* Left side - Text content */}
          <div className="md:w-1/2 text-center mb-8 md:mb-0">
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${isLoaded ? 'animate-slide-in' : ''}`}>
              Seamless <GradientText withHoverEffect={true}>One-Click</GradientText>
            </h1>
            <h1 className={`text-5xl md:text-6xl font-bold mb-8 ${isLoaded ? 'animate-slide-in-delayed-1' : ''}`}>
              PBR Generation
            </h1>
            <div className={`flex flex-row justify-center space-x-4 ${isLoaded ? 'animate-slide-in-delayed-2' : ''}`}>
              <AnimatedButton className="bg-transparent">
                <a href="https://github.com/soheilchavo/NormalNetAddon" target="_blank" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">blender addon</a>
              </AnimatedButton>
              <AnimatedButton className="bg-transparent">
                <a href="https://github.com/soheilchavo/NormalNet" target="_blank" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">gen ai app</a>
              </AnimatedButton>
            </div>
            <div className={`mt-2 ${isLoaded ? 'animate-slide-in-delayed-3' : ''}`}>
              <AnimatedButton className="bg-transparent">
                <a href="https://medium.com/@soheil.chavo/albedo-to-pbr-generating-realistic-materials-using-a-cgan-e1c2847e5bbc" target="_blank" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">medium article</a>
              </AnimatedButton>
            </div>
          </div>

          {/* Right side - Sphere visualization with comparison slider */}
          <div className="md:w-1/2 flex justify-center">
            <FloatingElement className={`${isLoaded ? 'animate-fade-in' : 'opacity-0'}`} amplitude={8} duration={6}>
              <ImageComparisonSlider
                beforeImage="/Assets/Banner-Before.png"
                afterImage="/Assets/Banner.png"
                alt=""
                className="rounded-full w-64 h-64 md:w-80 md:h-80 shadow-lg"
              />
            </FloatingElement>
          </div>
        </div>
      </section>

      {/* Examples Section - Now clearly separate */}
      <section ref={examplesRef} className="py-16 px-8 md:px-16 border-t border-gray-800">
        <h2 className={`text-3xl font-bold text-center mb-12 ${isLoaded ? 'animate-slide-in-delayed-3' : ''}`}>
          <GradientText>Material Examples</GradientText>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 p-4">
          {/* Sphere 1 - Pebbles texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-1' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={7}>
              <ImageComparisonSlider
                beforeImage="/Assets/Pebbles-Before.png"
                afterImage="/Assets/Pebbles-After.png"
                alt=""
                className="rounded-full w-48 h-48 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-300">Pebbles</p>
            </FloatingElement>
          </div>

          {/* Sphere 2 - Wood texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-2' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={8}>
              <ImageComparisonSlider
                beforeImage="/Assets/Wood-Before.png"
                afterImage="/Assets/Wood-After.png"
                alt=""
                className="rounded-full w-48 h-48 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-300">Wood</p>
            </FloatingElement>
          </div>

          {/* Sphere 3 - Concrete texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-3' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={6.5}>
              <ImageComparisonSlider
                beforeImage="/Assets/Concrete-Before.png"
                afterImage="/Assets/Concrete-After.png"
                alt=""
                className="rounded-full w-48 h-48 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
              <p className="text-center mt-4 text-gray-300">Concrete</p>
            </FloatingElement>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg max-w-3xl mx-auto mb-8 text-gray-300">
            Normal-Net generates complete PBR texture sets from a single albedo input. 
            Simply provide a base color texture, and our AI generates matching normal, roughness, 
            metallic, and height maps for realistic rendering.
          </p>
          
          <AnimatedButton className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl">
            <a href="https://github.com/soheilchavo/NormalNet" target="_blank">
              Try Normal-Net Today
            </a>
          </AnimatedButton>
        </div>
      </section>
      
      {/* Support Section (Merged Contact, Contribute, and Donate) */}
      <section ref={supportRef} className="py-16 px-8 md:px-16 border-t border-gray-800 bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">
          <GradientText>Support & Connect</GradientText>
        </h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Contribute Column */}
          <div 
            className={`flex flex-col justify-between bg-black bg-opacity-40 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-70 h-full ${isLoaded ? 'animate-slide-in-delayed-1' : 'opacity-0'}`}
            style={{ 
              backgroundImage: 'radial-gradient(circle at top right, rgba(139, 92, 246, 0.1), transparent 70%)'
            }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-purple-400">Contribute</h3>
                <div className="w-12 h-12 rounded-full bg-purple-500 bg-opacity-20"></div>
              </div>
              <div className="w-16 h-1 bg-purple-400 mb-6"></div>
              <p className="text-gray-300 mb-8">
                Normal-Net is open-source and welcomes contributions from developers, designers, and 3D artists. Help improve the project by contributing code, documentation, or sharing your creations.
              </p>
            </div>
            <div className="flex justify-start">
              <AnimatedButton className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                <a 
                  href="https://github.com/soheilchavo/NormalNet/pulls" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                  <span>GitHub</span>
                </a>
              </AnimatedButton>
            </div>
          </div>
          
          {/* Donate Column */}
          <div 
            className={`flex flex-col justify-between bg-black bg-opacity-40 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-70 h-full ${isLoaded ? 'animate-slide-in-delayed-2' : 'opacity-0'}`}
            style={{ 
              backgroundImage: 'radial-gradient(circle at top left, rgba(244, 114, 182, 0.1), transparent 70%)'
            }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-pink-400">Donate</h3>
                <div className="w-12 h-12 rounded-full bg-pink-500 bg-opacity-20"></div>
              </div>
              <div className="w-16 h-1 bg-pink-400 mb-6"></div>
              <p className="text-gray-300 mb-8">
                Support the ongoing development of Normal-Net. Your donations help maintain the project, improve features, and keep the tool free and accessible to the entire community.
              </p>
            </div>
            <div className="flex justify-start">
              <AnimatedButton className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                <a 
                  href="https://donate.normal-net.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span>Donate</span>
                </a>
              </AnimatedButton>
            </div>
          </div>
          
          {/* Contact Column */}
          <div 
            className={`flex flex-col justify-between bg-black bg-opacity-40 p-8 rounded-lg shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:bg-opacity-70 h-full ${isLoaded ? 'animate-slide-in-delayed-3' : 'opacity-0'}`}
            style={{ 
              backgroundImage: 'radial-gradient(circle at top right, rgba(96, 165, 250, 0.1), transparent 70%)'
            }}
          >
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-blue-400">Contact</h3>
                <div className="w-12 h-12 rounded-full bg-blue-500 bg-opacity-20"></div>
              </div>
              <div className="w-16 h-1 bg-blue-400 mb-6"></div>
              <p className="text-gray-300 mb-8">
                Have questions, feedback, or ideas for Normal-Net? I'd love to hear from you! Reach out via email and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="flex justify-start">
              <AnimatedButton className="px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-700 transition-all duration-300 hover:scale-105">
                <a 
                  href="mailto:soheil.chavo@gmail.com" 
                  className="flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email Me</span>
                </a>
              </AnimatedButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-400 text-sm">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} Normal-Net. All rights reserved.</p>
          <p className="mt-2">A one-click solution for PBR texture generation.</p>
        </div>
      </footer>
    </div>
  );
};

export default NormalNetApp;
import React, { useState, useEffect } from 'react';
import ImageComparisonSlider from './ImageComparisonSlider';
import { TextReveal, GradientText, FloatingElement, AnimatedButton, StaggeredList } from './AnimationComponents';
import './AnimationStyles.css';

const NormalNetApp = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center border-b border-gray-800 animate-fade-in">
        <div className="text-xl font-bold tracking-wide">
          Normal-Net
        </div>
        <div className="flex space-x-6">
          {['home', 'examples', 'contribute', 'donate', 'contact'].map((item, index) => (
            <a 
              key={item} 
              href="#" 
              className="nav-link-effect hover:text-gray-300 text-sm animate-slide-in"
              style={{ 
                animationDelay: `${500 + (index * 100)}ms`,
                animationFillMode: 'both',
                opacity: 0
              }}
              onAnimationEnd={(e) => e.target.style.opacity = 1}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-center items-center p-8 md:p-16">
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
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">blender addon</a>
            </AnimatedButton>
            <AnimatedButton className="bg-transparent">
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">gen ai app</a>
            </AnimatedButton>
          </div>
          <div className={`mt-2 ${isLoaded ? 'animate-slide-in-delayed-3' : ''}`}>
            <AnimatedButton className="bg-transparent">
              <a href="#" className="text-purple-400 hover:text-purple-300 inline-block transform transition-transform duration-300 hover:translate-y-[-2px]">medium article</a>
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

      {/* Showcase Section */}
      <div className="mt-12 mb-10">
        <h2 className={`text-3xl font-bold text-center mb-8 ${isLoaded ? 'animate-slide-in-delayed-3' : ''}`}>
          <GradientText>Material Examples</GradientText>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 p-8">
          {/* Sphere 1 - Brick texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-1' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={7}>
              <ImageComparisonSlider
                beforeImage="/Assets/Brick-Before.png"
                afterImage="/Assets/Brick-After.png"
                alt=""
                className="rounded-full w-48 h-48 shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </FloatingElement>
          </div>

          {/* Sphere 2 - Purple texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-2' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={8}>
              <img
                src="/api/placeholder/200/200"
                alt="Purple textured sphere"
                className="rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </FloatingElement>
          </div>

          {/* Sphere 3 - Blue texture */}
          <div className={`flex justify-center ${isLoaded ? 'animate-slide-in-delayed-3' : 'opacity-0'}`}>
            <FloatingElement amplitude={6} duration={6.5}>
              <img
                src="/api/placeholder/200/200"
                alt="Blue textured sphere"
                className="rounded-full w-48 h-48 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </FloatingElement>
          </div>
        </div>
      </div>
      
      {/* Call to action */}
      <div className={`text-center pb-16 ${isLoaded ? 'animate-slide-in-delayed-3' : 'opacity-0'}`}>
        <AnimatedButton className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-lg font-semibold shadow-lg hover:shadow-xl">
          Try Normal-Net Today
        </AnimatedButton>
      </div>
    </div>
  );
};

export default NormalNetApp;
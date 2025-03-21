import React, { useState, useEffect } from 'react';

// Text animation that reveals character by character
export const TextReveal = ({ text, className = "", delay = 0, speed = 50 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Make sure text is a valid string
    if (typeof text !== 'string') {
      console.error('TextReveal component received invalid text:', text);
      return;
    }
    
    let timer;
    let currentIndex = 0;
    
    // Initial delay before starting animation
    const initialTimeout = setTimeout(() => {
      setIsStarted(true); // Mark animation as started
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text.charAt(currentIndex));
          currentIndex++;
        } else {
          clearInterval(timer);
          setIsComplete(true);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(timer);
    };
  }, [text, delay, speed]);

  // Show the full text if animation hasn't started yet
  // This prevents empty/undefined text from showing
  if (!isStarted) {
    return <span className={className}>{text}</span>;
  }

  return (
    <span className={`${className} ${isComplete ? 'completed' : ''}`}>
      {displayedText}
    </span>
  );
};

// Modified GradientText with nav-link-effect
export const GradientText = ({ children, className = "", withHoverEffect = false }) => {
  return (
    <span 
      className={`bg-gradient-to-r from-yellow-500 via-red-400 to-pink-500 text-transparent bg-clip-text animate-gradient ${withHoverEffect ? 'nav-link-effect' : ''} ${className}`}
    >
      {children}
    </span>
  );
};

// Animated list items that appear with staggered delay
export const StaggeredList = ({ items, renderItem, className = "" }) => {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <div 
          key={index} 
          className="animate-slide-in" 
          style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
};

// Floating element animation
export const FloatingElement = ({ children, className = "", amplitude = 10, duration = 6 }) => {
  return (
    <div 
      className={`animate-float ${className}`}
      style={{ 
        '--float-amplitude': `${amplitude}px`,
        '--float-duration': `${duration}s`
      }}
    >
      {children}
    </div>
  );
};

// Animated counter that counts up to a target number
export const AnimatedCounter = ({ end, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      if (progress < duration) {
        setCount(Math.floor((progress / duration) * end));
        animationFrame = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return <span className={className}>{count}</span>;
};

// Button with hover effects
export const AnimatedButton = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
};
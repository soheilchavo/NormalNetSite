import React, { useState, useRef, useEffect } from 'react';

const ImageComparisonSlider = ({ beforeImage, afterImage, alt, className }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  
  // Handle mouse movement - track position automatically on hover
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    e.preventDefault(); // Prevent default selection behavior
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const containerWidth = rect.width;
    
    // Only update position if hovering over the component
    if (isHovering) {
      const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
      setSliderPosition(newPosition);
    }
  };
  
  // Handle touch movement
  const handleTouchMove = (e) => {
    if (!containerRef.current) return;
    
    e.preventDefault(); // Prevent default behavior
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const containerWidth = rect.width;
    
    const newPosition = Math.max(0, Math.min(100, (x / containerWidth) * 100));
    setSliderPosition(newPosition);
  };
  
  // Add event listeners for touch prevention
  useEffect(() => {
    // Prevention of text selection
    const preventSelection = (e) => {
      if (isHovering) {
        e.preventDefault();
      }
    };
    
    document.addEventListener('selectstart', preventSelection);
    
    // Clean up
    return () => {
      document.removeEventListener('selectstart', preventSelection);
    };
  }, [isHovering]);
  
  const handleMouseEnter = () => {
    setIsHovering(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div 
      ref={containerRef}
      className={`relative rounded-full overflow-hidden cursor-none select-none ${className}`}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      onTouchStart={(e) => e.preventDefault()}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
    >
      {/* Container to ensure proper circular clipping */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {/* After Image (Full) */}
        <div className="w-full h-full select-none">
          <img 
            src={afterImage} 
            alt=""  
            className="w-full h-full object-cover select-none"
            draggable="false"
            style={{ userSelect: 'none', WebkitUserSelect: 'none' }}
          />
        </div>
        
        {/* Before Image (Clipped) with precise edge handling */}
        <div 
          className="absolute top-0 left-0 h-full overflow-hidden select-none rounded-r-none"
          style={{ 
            width: `${sliderPosition}%`,
            borderRight: 'none'
          }}
        >
          <img 
            src={beforeImage} 
            alt=""
            className="h-full object-cover select-none"
            draggable="false"
            style={{ 
              width: `${100 / (sliderPosition / 100)}%`, 
              maxWidth: '100vw', 
              userSelect: 'none', 
              WebkitUserSelect: 'none'
            }}
          />
        </div>
        
        {/* Slider divider line - thinner with no overflow */}
        <div 
          className="absolute top-0 bottom-0 bg-white"
          style={{ 
            left: `${sliderPosition}%`, 
            transform: 'translateX(-50%)',
            width: '1px',
            height: '100%'
          }}
        >
          {/* Slider handle */}
          <div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-lg flex items-center justify-center"
            style={{
              width: '20px',
              height: '20px'
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-400" style={{ width: '1px', height: '10px' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageComparisonSlider;
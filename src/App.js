import React from 'react';

// Using static images for the textured spheres
const NormalNetApp = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      {/* Navigation Bar */}
      <nav className="p-4 flex justify-between items-center border-b border-gray-800">
        <div className="text-xl font-bold tracking-wide">Normal-Net</div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-300 text-sm">home</a>
          <a href="#" className="hover:text-gray-300 text-sm">examples</a>
          <a href="#" className="hover:text-gray-300 text-sm">contribute</a>
          <a href="#" className="hover:text-gray-300 text-sm">donate</a>
          <a href="#" className="hover:text-gray-300 text-sm">contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-16">
        {/* Left side - Text content */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Seamless <span className="bg-gradient-to-r from-yellow-500 via-red-400 to-pink-500 text-transparent bg-clip-text">One-Click</span>
          </h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            PBR Generation
          </h1>
          
          <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-4">
            <a href="#" className="text-purple-400 hover:text-purple-300">blender addon</a>
            <a href="#" className="text-purple-400 hover:text-purple-300">gen ai app</a>
          </div>
          <div className="mt-2">
            <a href="#" className="text-purple-400 hover:text-purple-300">medium article</a>
          </div>
        </div>

        {/* Right side - Sphere visualization */}
        <div className="md:w-1/2 flex justify-center">
          <img 
            src="/api/placeholder/400/400" 
            alt="Brick textured sphere" 
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
          />
        </div>
      </div>

      {/* Showcase Section */}
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {/* Sphere 1 - Brick texture */}
        <div className="flex justify-center">
          <img 
            src="/api/placeholder/200/200" 
            alt="Brick textured sphere" 
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
        
        {/* Sphere 2 - Purple texture */}
        <div className="flex justify-center">
          <img 
            src="/api/placeholder/200/200" 
            alt="Purple textured sphere" 
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
        
        {/* Sphere 3 - Blue texture */}
        <div className="flex justify-center">
          <img 
            src="/api/placeholder/200/200" 
            alt="Blue textured sphere" 
            className="rounded-full w-48 h-48 object-cover shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NormalNetApp;
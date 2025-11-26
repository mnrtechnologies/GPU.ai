import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePageLogo from '../../assets/datacenter2.jpg';

const HeroSection = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://cdn.gpteng.co/gptengineer.js";
    script.type = "module";
    script.async = true;
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  return (
    <div className="bg-white text-[#0f172a] min-h-screen flex items-center justify-center px-4 sm:px-8 font-sans overflow-hidden relative">
      
      <div className="max-w-7xl w-full mt-36 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left z-10 md:col-span-4 py-12"> 
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Large <br className="hidden sm:block" /> Scale AI <br className="hidden sm:block" /> Datacenters
          </h1>
          <p className="text-[#475569] text-base sm:text-lg mb-8 max-w-md">
            Custom buildouts available for US$100 million+ datacenters for AI
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/contact')}
              className="bg-[#A800FF] text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-[rgb(162,0,138)] transition"
            >
              Get Started <span className="inline-block ml-2">→</span>
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="border border-[#cbd5e1] text-[#0f172a] px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-medium hover:bg-[#f1f5f9] transition"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="md:col-span-8 w-full h-full min-h-[500px] md:min-h-0 relative">
          <div 
            className="md:absolute md:inset-0 w-full h-full bg-cover bg-center rounded-xl overflow-hidden shadow-2xl relative"
            style={{ 
              backgroundImage: `url(${HomePageLogo})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Left side fade INCLUDING corners */}
            <div 
              className="absolute inset-0 pointer-events-none rounded-xl"
              style={{
                background: `
                  linear-gradient(
                    to right,
                    rgba(255, 255, 255, 0.9) 0%,
                    rgba(255, 255, 255, 0.6) 10%,
                    rgba(255, 255, 255, 0.2) 25%,
                    rgba(255, 255, 255, 0) 45%
                  )
                `
              }}
            ></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;

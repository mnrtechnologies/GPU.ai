import React from "react";
import MIT from "../../assets/companyLogos/mit.png";
import DeepInfra from "../../assets/companyLogos/deepinfra.png";
import Neets from "../../assets/companyLogos/neets2.png";
import DeepMotion from "../../assets/companyLogos/deepmotion.png";
import Exabits from "../../assets/companyLogos/exanits2.png";
import Cornell from "../../assets/companyLogos/Cornell-University-Logo.png";
import NYU from "../../assets/companyLogos/nyu.png";
import USE from "../../assets/companyLogos/use.png";

const CustomerLogos = ({
  bgColor = "#f3f4f6",
  gridColor = "rgba(0,0,0,0.03)",
  titleColor = "#1f2937",
  descriptionColor = "#4b5563",
  btnColor = "#A800FF",
}) => {
  const logos = [
    { name: "MIT", src: MIT },
    { name: "DeepInfra", src: DeepInfra },
    { name: "Neets.ai", src: Neets },
    { name: "DeepMotion", src: DeepMotion },
    { name: "Exabits.ai", src: Exabits },
    { name: "Cornell University", src: Cornell },
    { name: "NYU", src: NYU },
    { name: "US Department of Energy", src: USE },
  ];

  const duplicatedLogos = [...logos, ...logos];

  const animationStyle = `
    @keyframes scroll-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-50%); }
    }

    .animate-scroll {
      /* Desktop speed: 25s */
      animation: scroll-left 28s linear infinite; 
      animation-play-state: running;
    }

    /* Pause on hover */
    .animate-scroll:hover {
      animation-play-state: paused;
    }

    /* MOBILE SPEED ADJUSTMENT */
    @media (max-width: 640px) {
      .animate-scroll {
        /* Updated Mobile Speed to 14s */
        animation-duration: 16s !important; 
      }
    }

    .logo-filter {
      filter: grayscale(100%) opacity(0.5);
      transition: all 0.5s ease;
    }
    .logo-filter:hover {
      filter: grayscale(0%) opacity(1);
    }
  `;


  return (
    <>
      <style>{animationStyle}</style>

      <div className="max-w-7xl mx-auto px-3 py-20 font-sans">
        <div
          className="rounded-3xl py-20 px-10 text-center"
          style={{
            backgroundColor: bgColor,
            backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        >
          <p
            className="text-xl tracking-widest mb-4"
            style={{ color: descriptionColor }}
          >
            TRUSTED INNOVATORS
          </p>

          <h1
            className="text-4xl sm:text-5xl leading-tight mb-10"
            style={{ color: titleColor }}
          >
            Global Leaders in AI and Research
          </h1>
          
          <div className="overflow-hidden relative w-full py-5">
            {/* The w-max and gap-x-8 from the previous fix remain for tight spacing */}
            <div className="flex animate-scroll w-max gap-x-8"> 
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  /* w-32 for mobile, sm:w-[200px] for desktop */
                  className="flex-shrink-0 w-32 sm:w-[200px] h-20 flex items-center justify-center" 
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-12 max-w-full object-contain " 
                  />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default CustomerLogos;
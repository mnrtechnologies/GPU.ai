import React from "react";

const Hero = ({
  title,
  description,
  gradientRight,
  gradientBottom,
  bgColor = "bg-[#A800FF]",
  titleColor = "text-white",
  descriptionColor = "text-white",
  buttons = [],
}) => {
  return (
    <section
      className={`min-h-screen ${bgColor} grid place-items-center px-4 sm:px-6 lg:px-8`}
      style={{
        backgroundImage: `
          linear-gradient(to right, ${gradientRight} 1px, transparent 1px),
          linear-gradient(to bottom, ${gradientBottom} 1px, transparent 1px)
        `,
        backgroundSize: "40px 40px",
      }}
    >
      <div className="text-center max-w-4xl py-16 mt-20 sm:py-20 md:py-32 px-2">
        <h1
          className={`text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-sans font-bold mb-4 sm:mb-6 ${titleColor} break-words`}
        >
          {title}
        </h1>
        <p
          className={`text-sm sm:text-base md:text-lg lg:text-xl font-sans leading-relaxed mb-8 sm:mb-10 ${descriptionColor} max-w-xl mx-auto`}
        >
          {description}
        </p>
        {buttons.length > 0 && (
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 flex-wrap max-w-md mx-auto">
            {buttons.map((btn, idx) => (
              <button
                key={idx}
                className={`w-full sm:w-auto px-4 py-2 sm:px-6 sm:py-3 rounded-md text-sm sm:text-base font-sans transition ${btn.className}`}
                onClick={btn.onClick}
                type="button"
              >
                {btn.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Hero;

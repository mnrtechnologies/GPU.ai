import React from "react";

const TestimonialCard = ({
  quote = "Thank you for the great GPU service. It has been instrumental to our R&D.",
  companyLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1200px-Disney%2B_logo.svg.png",
}) => {
  const accentColor = "#A800FF"; 
  const quoteTextColor = "#1f2937";
  const authorTitle = "Former CTO of Disney";

  return (
    <div className="py-20 bg-white font-sans">
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Section Title */}
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4 tracking-wide"
          
        >
          What Our Clients Say
        </h2>

        <p className="text-center text-lg text-gray-600 max-w-2xl mx-auto mb-14">
          Hear from industry leaders who trust our cutting-edge GPU acceleration solutions.
        </p>

        {/* Testimonial Card */}
        <div className="flex justify-center">
          <div className="bg-white p-10 rounded-2xl shadow-2xl border border-gray-100 max-w-xl w-full text-center relative">
            
            {/* Fancy Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md p-3">
              <span className="text-4xl" style={{ color: accentColor }}>&ldquo;</span>
            </div>

            <p
              className="mt-6 mb-8 text-xl leading-relaxed italic"
              style={{ color: quoteTextColor }}
            >
              {quote}
            </p>

            <div className="border-t border-gray-200 pt-6">
              <p
                className="text-sm font-semibold tracking-widest uppercase"
                style={{ color: accentColor }}
              >
                {authorTitle}
              </p>

              {companyLogo && (
                <img
                  src={companyLogo}
                  alt="Company Logo"
                  className="h-10 object-contain mx-auto mt-4 opacity-80 hover:opacity-100 transition"
                />
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestimonialCard;

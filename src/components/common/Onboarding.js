import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Onboarding = ({
  title = "ONBOARDING EARLY ACCESS CLIENTS NOW",
  btnlabel = " GET EARLY ACCESS",
  description = "Test the performance and ease\nof use for yourself",
  bgColor = "#f3f4f6",
  gridColor = "rgba(0,0,0,0.03)",
  titleColor = "#1f2937",
  descriptionColor = "#4b5563",
  btnColor = "#a349a4",
  btnTextColor = "white",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  return (
    <div className="max-w-7xl mx-auto px-3 font-mono py-20">
      <div
        className="rounded-3xl py-20 px-10 text-center"
        style={{
          backgroundColor: bgColor,
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      >
        <p
          className="text-xl tracking-widest mb-4"
          style={{ color: descriptionColor }}
        >
          {title}
        </p>
        <h1
          className="text-4xl sm:text-5xl leading-tight mb-10"
          style={{ color: titleColor }}
        >
          {description.split("\n").map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </h1>

        <button
          onClick={handleClick}
          className="group text-md tracking-widest py-4 px-7 rounded-full shadow-md inline-flex items-center justify-center"
          style={{
            backgroundColor: btnColor,
            color: btnTextColor,
          }}
          type="button"
        >
          {btnlabel}
          <FaArrowRight className="ml-2 transform transition-transform group-hover:translate-x-2" />
        </button>
      </div>
    </div>
  );
};

export default Onboarding;

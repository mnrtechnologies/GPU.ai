import React from "react";
import Footer from "../../components/common/Footer";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";

const APIServices = () => {
  return (
    <>
      <FadeInWhenVisible>
        <div className="bg-white text-[#030517] min-h-[500px] flex items-center justify-center font-sans">
          <div className="text-center px-4">
            <h1 className="text-5xl font-semibold leading-tight">Coming Soon</h1>
            <p className="mt-4 text-lg">
              We're working hard to bring you something amazing!
            </p>
          </div>
        </div>
      </FadeInWhenVisible>

      <FadeInWhenVisible>
        <Footer />
      </FadeInWhenVisible>
    </>
  );
};

export default APIServices;

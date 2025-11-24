import React from "react";
import Footer from "../../components/common/Footer";

const ComingSoon = () => {
  return (
    <>
      <div className="bg-white text-[#030517] min-h-[500px] flex items-center justify-center font-mono">
        <div className="text-center px-4">
          <h1 className="text-5xl font-semibold leading-tight">Coming Soon</h1>
          <p className="mt-4 text-lg">
            We're working hard to bring you something amazing!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ComingSoon;

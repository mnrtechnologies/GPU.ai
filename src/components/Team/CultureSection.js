import React from "react";

const CultureSection = () => {
  return (
    <div className="bg-[#E9EBEB] min-h-screen font-sans flex items-center justify-center p-6">
      <main className="max-w-7xl w-full flex flex-col lg:flex-row gap-10 lg:gap-20">
        {/* Text Section */}
        <section className="flex flex-col mb-9 mt-9 max-w-xl space-y-6">
          <h2 className="text-[#121826] text-4xl font-semibold tracking-wide">
            Our Culture
          </h2>
          <p className="text-[#121826] text-md leading-relaxed max-w-md">
            We are a diverse team with a deep commitment to innovation and
            collaboration. We believe in a culture of continuous learning,
            growth mindset, and open communication.
          </p>
          <div className="space-y-6 ">
            {/* Card 1 */}
            <article className="bg-white rounded-lg p-6 flex items-start gap-6 max-w-md shadow-sm">
              <div className="bg-[#FFF5F5] p-4 rounded-md flex items-center justify-center">
                <i className="fas fa-rocket text-[#121826] text-5xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#121826] text-lg mb-1">
                  Innovation First
                </h3>
                <p className="text-[#121826] text-sm leading-relaxed max-w-xs">
                  We foster a culture of continuous innovation, encouraging our
                  team to push boundaries
                </p>
              </div>
            </article>

            {/* Card 2 */}
            <article className="bg-white rounded-lg p-6 flex items-start gap-6 max-w-md shadow-sm">
              <div className="bg-[#F0F6FF] p-4 rounded-md flex items-center justify-center">
                <i className="fas fa-users text-[#121826] text-5xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#121826] text-lg mb-1">
                  Collaboration
                </h3>
                <p className="text-[#121826] text-sm leading-relaxed max-w-xs">
                  Our success is built on strong teamwork and open communication
                  across all levels of the organization.
                </p>
              </div>
            </article>

            {/* Card 3 */}
            <article className="bg-white rounded-lg p-6 flex items-start gap-6 max-w-md shadow-sm">
              <div className="bg-[#FFFBEA] p-4 rounded-md flex items-center justify-center">
                <i className="fas fa-brain text-[#121826] text-5xl"></i>
              </div>
              <div>
                <h3 className="font-semibold text-[#121826] text-lg mb-1">
                  Growth Mindset
                </h3>
                <p className="text-[#121826] text-sm leading-relaxed max-w-xs">
                  We invest in our team's professional development and encourage
                  learning at every step.
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* Image Section */}
        <section className="flex-1 flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800"
            alt="Three people working on laptops"
            className="rounded-xl shadow-lg  h-4/5 object-cover"

          />
        </section>
      </main>
    </div>
  );
};

export default CultureSection;

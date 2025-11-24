import React from "react";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Aryamaan Singhania",
    role: "Director | Co Founder",
    image: "https://novacore-df106.web.app/assets/aryaman-CUdQwMgR.jpg",
    alt: "Portrait of Aryamaan Singhania",
    description:
      "Co-founder of Novacore Innovations, with expertise in cloud technology, business development, and sustainable investment, leveraging experience from private equity and strategic leadership roles.",
    linkedin: "https://www.linkedin.com/in/aryamaansinghania",
  },
  {
    name: "Ranbir Badwal",
    role: "Director | Co Founder",
    image: "https://novacore-df106.web.app/assets/Ranbir-badwal-profile-U-UPCbLM.jpg",
    alt: "Portrait of Ranbir Badwal",
    description:
      "Co-founder of Novacore Innovations, with expertise in data protection, financial strategy, and product operations, leveraging leadership experience at Druva and Harmonic Inc. to drive growth and innovation in the cloud services industry.",
    linkedin: "https://www.linkedin.com/in/ranbir-badwal-216015204/",
  },
  // {
  //   name: "Narendra Reddy",
  //   role: "CTO / CIO",
  //   image: "https://novacore-df106.web.app/assets/Narendra-T5oIfjv6.jpeg",
  //   alt: "Portrait of Narendra Reddy",
  //   description:
  //     "Chief Technology Officer (CTO) / Chief Information officer (CIO) at Novacore Innovations, with over 20 years of experience in technology strategy, cloud solutions, and business operations. Previously served as CTO at Aveva and held leadership roles at Microsoft, Xerox, Dell, and DXC, driving innovation.",
  //   linkedin: "https://www.linkedin.com/in/narendra-reddy-g/",
  // },
];

const TeamSection = () => {
  return (
    <main className="max-w-7xl mx-auto mb-20 px-4 sm:px-6 py-8 font-mono">
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <article
            key={index}
            className="w-full sm:w-[350px] bg-white rounded-xl shadow-md overflow-hidden text-center transition transform hover:scale-105 hover:shadow-lg duration-300"
          >
            <div className="relative h-[450px] w-full bg-white flex items-center justify-center overflow-hidden group">
              <img
                src={member.image}
                alt={member.alt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bottom-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 hover:opacity-50 transition-all duration-300"></div>
              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 text-white text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
            <div className="p-6 text-left">
              <h3 className="font-bold text-xl text-gray-900">{member.name}</h3>
              <p className="text-[#a349a4] text-sm mb-2">{member.role}</p>
              <p className="text-gray-700 text-sm text-justify">{member.description}</p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default TeamSection;

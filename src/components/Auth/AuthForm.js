import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const AuthForm = ({
  title,
  buttonText,
  alternateText,
  alternateLink,
  alternateLinkText,
  onSubmit,
  setEmail,
  setPassword,
}) => {
  const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
  const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const REDIRECT_URI = window.location.origin + "/callback";

  const providers = [
    { label: "GitHub", icon: <FaGithub size={28} />, connection: "github" },
    { label: "Google", icon: <FaGoogle size={28} />, connection: "google-oauth2" },
  ];

  const handleSocialLogin = (connection) => {
    const authUrl = `https://${AUTH0_DOMAIN}/authorize?response_type=token&client_id=${AUTH0_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&connection=${connection}`;
    window.location.href = authUrl;
  };

  return (
    <div className="flex-1 bg-white flex items-center justify-center px-4 py-10 sm:px-8 md:p-20">
      <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-normal text-sky-600 mb-6 sm:mb-8">
          {title}
        </h1>

        <form className="space-y-5 sm:space-y-6" onSubmit={onSubmit}>
          <div>
            <label className="sr-only" htmlFor="email">Email Address</label>
            <div className="flex items-center bg-[#F3F9FF] rounded-md px-4 py-3 text-[#0B7AFF]">
              <i className="fas fa-envelope mr-3"></i>
              <input
                id="email"
                type="email"
                placeholder="Email Address"
                required
                onChange={(e) => setEmail(e.target.value)}
                className="bg-[#F3F9FF] placeholder:text-[#9CA3AF] text-base w-full focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="sr-only" htmlFor="password">Password</label>
            <div className="flex items-center bg-[#F3F9FF] rounded-md px-4 py-3 text-[#0B7AFF]">
              <i className="fas fa-lock mr-3"></i>
              <input
                id="password"
                type="password"
                placeholder="Password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="bg-[#F3F9FF] placeholder:text-[#9CA3AF] text-base w-full focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white text-base sm:text-lg rounded-md py-3 sm:py-4 flex justify-between items-center px-6 hover:bg-[#0a6ae6] transition"
          >
            {buttonText}
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        <div className="text-center text-gray-600 mt-6 sm:mt-8 mb-4">OR</div>

        <div className="flex justify-center gap-6 sm:gap-10 mb-6">
          {providers.map(({ label, icon, connection }) => (
            <button
              key={label}
              onClick={() => handleSocialLogin(connection)}
              className="flex flex-col items-center text-gray-700 text-sm space-y-1 border border-gray-300 rounded-md p-2 sm:p-3 w-20 hover:bg-gray-100 transition"
            >
              {icon}
              <span>{label}</span>
            </button>
          ))}
        </div>

        <div className="text-center text-gray-700 text-sm">
          {alternateText}{" "}
          <a href={alternateLink} className="text-sky-600 hover:underline">
            {alternateLinkText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

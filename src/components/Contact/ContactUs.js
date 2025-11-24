import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    details: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, company, phone, details } = formData;

    const subject = encodeURIComponent(`Inquiry from ${firstName} ${lastName}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nEmail: ${email}\nCompany: ${company}\nPhone: ${phone}\n\nMessage:\n${details}`
    );

    window.location.href = `mailto:contact@novacorein.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="bg-white text-[#1a202c] max-w-7xl mx-auto px-4 mt-24 sm:px-6 lg:px-8 py-12 font-mono">
      <header className="text-center mb-12">
        <h1 className="text-3xl font-semibold tracking-wide">Contact us</h1>
        <p className="mt-2 text-sm text-gray-600">
          We'd love to talk about how we can help you.
        </p>
      </header>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
        {/* Left form container */}
        <section className="flex-1 w-full max-w-lg mx-auto lg:mx-0 rounded-lg border border-[#d1e3f8] p-6 sm:p-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Fill in the form</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First Name"
                required
                className="flex-1 border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              />
              <input
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last Name"
                required
                className="flex-1 border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
              />
            </div>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="w-full border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
            />
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              type="text"
              placeholder="Company"
              className="w-full border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1e90ff]"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#a349a4]"
            />
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="6"
              placeholder="Details"
              className="w-full border border-[#d1e3f8] rounded-md px-4 py-2 text-sm placeholder:text-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#a349a4]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#a349a4] text-white font-semibold text-md py-3 rounded-md hover:bg-[#005a9e] transition-colors"
            >
              Send inquiry
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            We'll get back to you in 1-2 business days.
          </p>
        </section>

        {/* Right info container */}
        <section className="flex-1 w-full max-w-lg mx-auto lg:mx-0 space-y-8 text-base text-gray-600">
          {/* Knowledgebase */}
          <div>
            <div className="flex items-center gap-3 mb-1 text-[#a349a4]">
              <i className="fas fa-question-circle text-lg"></i>
              <h3 className="font-semibold text-gray-900">Knowledgebase</h3>
            </div>
            <p className="mb-1">
              We're here to help with any questions or code.
            </p>
            <a
              href="#"
              className="text-[#a349a4] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Contact support <i className="fas fa-arrow-right"></i>
            </a>
            <hr className="mt-6 border-t border-gray-200" />
          </div>

          {/* FAQ */}
          <div>
            <div className="flex items-center gap-3 mb-1 text-[#a349a4]">
              <i className="far fa-comment-alt text-lg"></i>
              <h3 className="font-semibold text-gray-900">FAQ</h3>
            </div>
            <p className="mb-1">
              Search our FAQ for answers to anything you might ask.
            </p>
            <a
              href="#"
              className="text-[#a349a4] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Visit FAQ <i className="fas fa-arrow-right"></i>
            </a>
            <hr className="mt-6 border-t border-gray-200" />
          </div>

          {/* Developer APIs */}
          <div>
            <div className="flex items-center gap-3 mb-1 text-[#a349a4]">
              <i className="fas fa-code text-lg"></i>
              <h3 className="font-semibold text-gray-900">Developer APIs</h3>
            </div>
            <p className="mb-1">Check out our development quickstart guide.</p>
            <a
              href="#"
              className="text-[#a349a4] font-semibold hover:underline inline-flex items-center gap-1"
            >
              Contact sales <i className="fas fa-arrow-right"></i>
            </a>
            <hr className="mt-6 border-t border-gray-200" />
          </div>

          {/* Contact us by email */}
          <div>
            <div className="flex items-center gap-3 mb-1 text-[#a349a4]">
              <i className="far fa-envelope text-lg"></i>
              <h3 className="font-semibold text-gray-900">
                Contact us by email
              </h3>
            </div>
            <p className="mb-1">
              If you wish to write us an email instead please use
            </p>
            <a
              href="mailto:contact@novacorein.com"
              className="text-[#a349a4] font-semibold hover:underline"
            >
              contact@novacorein.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactUs;

import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaCommentDots,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 px-6 md:px-12 py-16 font-sans border-t border-gray-200 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo + Socials */}
        <div>
          <h2 className="text-2xl font-bold mb-6">GPU.ai</h2>
          <div className="flex gap-4 text-xl text-gray-600">
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
            <FaTwitter />
            <FaCommentDots />
          </div>
        </div>

        {/* Discover */}
        <div>
          <h3 className="font-semibold mb-4">Discover</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/discover/next-gen-gpus">Next Gen GPUs</Link></li>
            <li><Link to="/discover/vision">Vision</Link></li>
            <li><Link to="/discover/hardware-solutions">Hardware Solutions</Link></li>
            <li><Link to="/discover/infrastructure">Infrastructure</Link></li>
            <li><Link to="/discover/cloud-platform">Cloud Platform</Link></li>
            <li><Link to="/discover/security-compliance">Security & Compliance</Link></li>
            <li><Link to="/discover/authentication">Authentication</Link></li>
            <li><Link to="/discover/performance">Performance</Link></li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/product/gpu-servers">GPU Servers</Link></li>
            <li><Link to="/product/developer-tools">Developer Tools</Link></li>
            <li><Link to="/product/gpu-clusters">GPU Clusters</Link></li>
            <li><Link to="/product/api-services">API Services</Link></li>
            <li><Link to="/product/analytics-platform">Analytics Platform</Link></li>
            <li><Link to="/product/gpu-stack">GPU Stack</Link></li>
            <li><Link to="/product/sdk-libraries">SDK Libraries</Link></li>
            <li><Link to="/product/accelerators">Accelerators</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-4">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/solutions/enterprise-solutions">Enterprise Solutions</Link></li>
            <li><Link to="/solutions/ai-machine-learning">AI & Machine Learning</Link></li>
            <li><Link to="/solutions/deep-learning">Deep Learning</Link></li>
            <li><Link to="/solutions/workflow-automation">Workflow Automation</Link></li>
            <li><Link to="/solutions/research-solutions">Research Solutions</Link></li>
            <li><Link to="/solutions/collaboration-tools">Collaboration Tools</Link></li>
            <li><Link to="/solutions/industry-specific">Industry Specific</Link></li>
            <li><Link to="/solutions/startup-program">Startup Program</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/why-gpu-ai">Why GPU.ai</Link></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 mt-10 mb-6"></div>

      {/* Legal & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4 text-sm text-gray-600">
        <ul className="flex flex-wrap justify-center gap-6">
          <li><Link to="/legal-documents" className="hover:text-gray-800">Legal Documents</Link></li>
          <li><Link to="/terms-of-use" className="hover:text-gray-800">Terms of Use</Link></li>
          <li><Link to="/cookie-policy" className="hover:text-gray-800">Cookie Policy</Link></li>
          <li><Link to="/privacy-policy" className="hover:text-gray-800">Privacy Policy</Link></li>
        </ul>
        <p className="text-center">&copy; 2025 GPU.ai</p>
      </div>
    </footer>
  );
};

export default Footer;

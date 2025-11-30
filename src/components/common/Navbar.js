import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Cpu,
  Eye,
  HardDrive,
  Server,
  Cloud,
  ShieldCheck,
  Fingerprint,
  Gauge,
  Briefcase,
  BrainCircuit,
  Layers3,
  Workflow,
  Microscope,
  Users,
  Building2,
  Rocket,
  Code,
  BarChart3,
  Shield,
  BookOpen,
  ActivitySquare,
  Menu,
  X,
} from "lucide-react";
import logo from "../../assets/gpu.png"
const links = [
  { name: "Discover" },
  { name: "Products" },
  { name: "Research", path: "/research" },
  { name: "Services", path: "/services" },
  { name: "Solutions" },
  { name: "Pricing", path: "/pricing" },
  { name: "Why GPU.ai", path: "/why-gpu-ai" },
  { name: "Open Source", path: "/open-source" },
];

const discoverItems = [
  {
    icon: <Cpu className="text-[#A800FF]" />,
    title: "Next Gen GPUs",
    desc: "Explore our next-gen GPU architecture and innovations",
    path: "/discover/next-gen-gpus",
  },
  {
    icon: <Eye className="text-[#A800FF]" />,
    title: "Vision",
    desc: "Our vision for the future of GPU computing",
    path: "/discover/vision",
  },
  {
    icon: <HardDrive className="text-[#A800FF]" />,
    title: "Hardware Solutions",
    desc: "Discover our range of GPU hardware solutions",
    path: "/discover/hardware-solutions",
  },
  {
    icon: <Server className="text-[#A800FF]" />,
    title: "Infrastructure",
    desc: "Explore our robust computing infrastructure",
    path: "/discover/infrastructure",
  },
  {
    icon: <Cloud className="text-[#A800FF]" />,
    title: "Cloud Platform",
    desc: "Learn about our cloud computing capabilities",
    path: "/discover/cloud-platform",
  },
  {
    icon: <ShieldCheck className="text-[#A800FF]" />,
    title: "Security & Compliance",
    desc: "Understanding our security frameworks and compliance",
    path: "/discover/security-compliance",
  },
  {
    icon: <Fingerprint className="text-[#A800FF]" />,
    title: "Authentication",
    desc: "Secure access and identity management solutions",
    path: "/discover/authentication",
  },
  {
    icon: <Gauge className="text-[#A800FF]" />,
    title: "Performance",
    desc: "Benchmarks and performance optimization guides",
    path: "/discover/performance",
  },
];

const productItems = [
  {
    icon: <Cpu className="text-[#A800FF]" />,
    title: "GPU Servers",
    desc: "High-performance GPU server solutions",
    path: "/product/gpu-servers",
  },
  {
    icon: <Code className="text-[#A800FF]" />,
    title: "Developer Tool",
    desc: "Comprehensive SDK and development tools",
    path: "/product/developer-tools",
  },
  {
    icon: <Server className="text-[#A800FF]" />,
    title: "GPU Clusters",
    desc: "Scalable GPU cluster management solutions",
    path: "/product/gpu-clusters",
  },
  {
    icon: <Cloud className="text-[#A800FF]" />,
    title: "API Services",
    desc: "RESTful APIs for GPU resource management",
    path: "/product/api-services",
  },
  {
    icon: <BarChart3 className="text-[#A800FF]" />,
    title: "Analytics Platform",
    desc: "Real-time GPU analytics and monitoring",
    path: "/product/analytics-platform",
  },
  {
    icon: <Shield className="text-[#A800FF]" />,
    title: "GPU Stack",
    desc: "Full-stack GPU computing platform",
    path: "/product/gpu-stack",
  },
  {
    icon: <BookOpen className="text-[#A800FF]" />,
    title: "SDK Libraries",
    desc: "Extensive libraries for GPU development",
    path: "/product/sdk-libraries",
  },
  {
    icon: <ActivitySquare className="text-[#A800FF]" />,
    title: "Accelerators",
    desc: "Hardware acceleration modules and plugins",
    path: "/product/accelerators",
  },
];

const solutionItems = [
  {
    icon: <Briefcase className="text-[#A800FF]" />,
    title: "Enterprise Solutions",
    desc: "Customized GPU solutions for enterprises",
    path: "/solutions/enterprise-solutions",
  },
  {
    icon: <BrainCircuit className="text-[#A800FF]" />,
    title: "AI & Machine Learning",
    desc: "Advanced AI/ML computing solutions",
    path: "/solutions/ai-machine-learning",
  },
  {
    icon: <Layers3 className="text-[#A800FF]" />,
    title: "Deep Learning",
    desc: "Specialized deep learning infrastructures",
    path: "/solutions/deep-learning",
  },
  {
    icon: <Workflow className="text-[#A800FF]" />,
    title: "Workflow Automation",
    desc: "Streamline your GPU computing workflows",
    path: "/solutions/workflow-automation",
  },
  {
    icon: <Microscope className="text-[#A800FF]" />,
    title: "Research Solutions",
    desc: "GPU solutions for scientific research",
    path: "/solutions/research-solutions",
  },
  {
    icon: <Users className="text-[#A800FF]" />,
    title: "Collaboration Tools",
    desc: "Team-based GPU resource management",
    path: "/solutions/collaboration-tools",
  },
  {
    icon: <Building2 className="text-[#A800FF]" />,
    title: "Industry Specific",
    desc: "Tailored solutions for different industries",
    path: "/solutions/industry-specific",
  },
  {
    icon: <Rocket className="text-[#A800FF]" />,
    title: "Startup Program",
    desc: "Accelerate your startup with GPU power",
    path: "/solutions/startup-program",
  },
];

const Navbar = () => {

  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState({
    discover: false,
    products: false,
    solutions: false,
  });

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState({
    discover: false,
    products: false,
    solutions: false,
  });

  // Paths where header background is colored (to decide button/text styles)
  const whiteBgPaths = [
    "/",
    "/research",
    "/services",
    "/think-tank",
    "/releases",
    "/docs",
    "/team",
    "/legal",
    "/company",
    "/contact",
    // Discover sub-pages
    "/discover/vision",
    "/discover/hardware-solutions",
    "/discover/infrastructure",
    "/discover/security-compliance",
    "/discover/performance",
    // Product sub-pages
    "/product/developer-tools",
    "/product/sdk-libraries",
    "/product/api-services",
    "/product/analytics-platform",
    "/product/accelerators",
    // Solution sub-pages
    "/solutions/ai-machine-learning",
    "/solutions/workflow-automation",
    "/solutions/research-solutions",
    "/solutions/industry-specific",
  ];
  const isWhitePage = whiteBgPaths.includes(location.pathname);
  // const navBgClass = isWhitePage
  //   ? "bg-sky-600 text-white"
  //   : "bg-white text-gray-900";

      const navBgClass = "bg-white text-gray-900";

  return (
    <nav className="fixed top-0 left-0 w-full z-50 font-sans bg-transparent">
      <div
        className={`px-8 py-6 rounded-b-2xl shadow-md max-w-[90rem] mx-auto ${navBgClass} outline outline-2 outline-[#A800FF]`}
      >
        {/* Top Row: Logo + (Desktop links) + Hamburger */}
        <div className="flex justify-between items-center mb-4">
          <Link to="/" onClick={() => setMobileOpen(false)}>
            <img
              src={logo}
              alt="GPU.ai Logo"
              className="h-5 w-auto object-contain"
            />
          </Link>


          {/* Desktop Top Links (Team / Legal / Company / Login / Contact) */}
          <div className="hidden lg:flex items-center gap-4 text-sm">
            <a href="/team" className="hover:underline">
              Team
            </a>
            <a href="/legal" className="hover:underline">
              Legal
            </a>
            <a href="/company" className="hover:underline">
              Company
            </a>
            <a href="/contact" className="hover:underline">
              Contact
            </a>

          </div>

          {/* Hamburger (Mobile toggle) */}
          <div className="lg:hidden">
            <button onClick={() => setMobileOpen((prev) => !prev)}>
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-300 mb-4" />

        {/* Desktop Bottom Navigation (Discover / Products / Solutions / Other links) */}
        <div className="hidden lg:flex flex-wrap gap-20 text-md justify-center relative">
          {links.map((link) =>
            link.name === "Discover" ||
            link.name === "Products" ||
            link.name === "Solutions" ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() =>
                  setShowDropdown((prev) => ({
                    ...prev,
                    [link.name.toLowerCase()]: true,
                  }))
                }
                onMouseLeave={() =>
                  setShowDropdown((prev) => ({
                    ...prev,
                    [link.name.toLowerCase()]: false,
                  }))
                }
              >
                <span className="cursor-pointer hover:underline">
                  {link.name}
                </span>

                {/* Fixed-Position Desktop Dropdown */}
                <div
                  className={`fixed top-36 left-11 w-[93vw] max-w-9xl bg-gray-100 text-gray-800 shadow-xl rounded-xl p-6 z-50 transition-all duration-200 ${
                    showDropdown[link.name.toLowerCase()]
                      ? "opacity-100 visible"
                      : "opacity-0 invisible"
                  }`}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {link.name === "Discover" &&
                      discoverItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1">{item.icon}</div>
                          <Link to={item.path}>
                            <div>
                              <h4 className="font-semibold">
                                <p className="hover:underline">{item.title}</p>
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    {link.name === "Products" &&
                      productItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1">{item.icon}</div>
                          <Link to={item.path}>
                            <div>
                              <h4 className="font-semibold">
                                <p className="hover:underline">{item.title}</p>
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    {link.name === "Solutions" &&
                      solutionItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="mt-1">{item.icon}</div>
                          <Link to={item.path}>
                            <div>
                              <h4 className="font-semibold">
                                <p className="hover:underline">{item.title}</p>
                              </h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            ) : (
              <div key={link.name}>
                <Link to={link.path}>
                  <span className="cursor-pointer hover:underline">
                    {link.name}
                  </span>
                </Link>
              </div>
            )
          )}
        </div>

        {/* Mobile Menu (slides down when the hamburger is open) */}
        {/* <div
          className={`lg:hidden transition-max-height duration-300 ease-in-out overflow-y-auto ${
            mobileOpen ? "max-h-screen" : "max-h-0"
          }`}
        > */}
        <div
          className={`lg:hidden transition-max-height duration-300 ease-in-out overflow-y-auto ${
            mobileOpen ? "max-h-[calc(100vh-64px)]" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1">
            {/* ====== Team / Legal / Company / Contact (always visible at top) ====== */}
            <Link
              to="/team"
              className="block py-3 text-lg hover:bg-gray-100 hover:text-sky-600 rounded-md px-4"
              onClick={() => setMobileOpen(false)}
            >
              Team
            </Link>
            <Link
              to="/legal"
              className="block py-3 text-lg hover:bg-gray-100 hover:text-sky-600 rounded-md px-4"
              onClick={() => setMobileOpen(false)}
            >
              Legal
            </Link>
            <Link
              to="/company"
              className="block py-3 text-lg hover:bg-gray-100 hover:text-sky-600 rounded-md px-4"
              onClick={() => setMobileOpen(false)}
            >
              Company
            </Link>
            <Link
              to="/contact"
              className="block py-3 text-lg hover:bg-gray-100 hover:text-sky-600 rounded-md px-4"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            {/* ==================================================================== */}

            {links.map((link) =>
              link.name === "Discover" ||
              link.name === "Products" ||
              link.name === "Solutions" ? (
                <div key={link.name} className="border-b border-gray-200">
                  <button
                    onClick={() =>
                      setMobileSubmenu((prev) => ({
                        ...prev,
                        [link.name.toLowerCase()]:
                          !prev[link.name.toLowerCase()],
                      }))
                    }
                    className="w-full flex justify-between items-center py-3 text-lg font-medium px-4"
                  >
                    <span>{link.name}</span>
                    {mobileSubmenu[link.name.toLowerCase()] ? (
                      <X size={18} />
                    ) : (
                      <Menu size={18} />
                    )}
                  </button>
                  {mobileSubmenu[link.name.toLowerCase()] && (
                    <div className="flex flex-col pl-8 pb-3">
                      {link.name === "Discover" &&
                        discoverItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="flex items-start gap-2 py-2 hover:bg-gray-100 hover:text-sky-600 rounded-md"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="mt-1">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      {link.name === "Products" &&
                        productItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="flex items-start gap-2 py-2 hover:bg-gray-100 hover:text-sky-600 rounded-md"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="mt-1">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                      {link.name === "Solutions" &&
                        solutionItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="flex items-start gap-2 py-2 hover:bg-gray-100 hover:text-sky-600 rounded-md"
                            onClick={() => setMobileOpen(false)}
                          >
                            <div className="mt-1">{item.icon}</div>
                            <div>
                              <h4 className="font-semibold">{item.title}</h4>
                              <p className="text-sm text-gray-600">
                                {item.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ) : (
                <div key={link.name} className="border-b border-gray-200">
                  <Link
                    to={link.path}
                    className="block py-3 text-lg hover:bg-gray-100 hover:text-sky-600 rounded-md px-4"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.name}
                  </Link>
                </div>
              )
            )}

            <div className="h-4" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

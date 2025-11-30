import React, { useState } from "react";
import Footer from "../../components/common/Footer";
import FadeInWhenVisible from "../../components/common/FadeInWhenVisible";
import { Github, Book, Terminal, Zap, Shield, DollarSign, Cpu, Copy, Check, Usb, Network, Rocket, ArrowRight, Quote, ChevronDown } from "lucide-react";
import mitLogo from "../../assets/companyLogos/mit.png";
import deepinfraLogo from "../../assets/companyLogos/deepinfra.png";
import neetsLogo from "../../assets/companyLogos/neet.jpg";

const CodeBlock = ({ title, code, description }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800">
      <div className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <div>
          <h4 className="text-white font-semibold text-lg">{title}</h4>
          <p className="text-gray-400 text-sm mt-1">{description}</p>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4" />
              Copied!
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              Copy
            </>
          )}
        </button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm text-gray-300 font-mono">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg px-6 py-5 flex items-center justify-between text-left transition-colors"
      >
        <span className="text-lg font-semibold text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-[#A800FF] flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-5 bg-white border-l-4 border-[#A800FF] text-gray-600 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

const OpenSource = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <FadeInWhenVisible>
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white flex items-center justify-center px-4">
          <div className="max-w-6xl mx-auto text-center pt-20">
            {/* Title */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              GPU.ai <span className="text-[#A800FF]">Bare Metal</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              Open Source GPU Cloud Provisioning
            </p>

            {/* Description */}
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
              Lightweight, production-ready solution for bare metal GPU instance management.
              A simpler alternative to complex systems like RedHat and OpenStack Ironic.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://github.com/gpu-ai/bare-metal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#A800FF] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[rgb(162,0,138)] transition-all transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <button
                onClick={() => {
                  const element = document.getElementById('api-docs');
                  const yOffset = -100;
                  const y = element?.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all"
              >
                <Book className="w-5 h-5" />
                Read Documentation
              </button>
            </div>

            {/* Used by section */}
            <div className="mt-16">
              <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">
                Trusted by leading organizations
              </p>
              <div className="flex flex-wrap items-center justify-center gap-12">
                <img src={mitLogo} alt="MIT" className="h-12 object-contain hover:scale-110 transition-transform" />
                <img src={deepinfraLogo} alt="DeepInfra" className="h-12 object-contain hover:scale-110 transition-transform" />
                <img src={neetsLogo} alt="Neets.ai" className="h-12 object-contain hover:scale-110 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* Key Features Section */}
      <FadeInWhenVisible>
        <div className="py-20 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Why GPU.ai Bare Metal?
              </h2>
              <p className="text-xl text-gray-600">
                Built for GPU cloud infrastructure, eliminating complexity without sacrificing functionality
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#A800FF] to-purple-600 mb-4">
                  <Zap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Lightweight & Simple
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Purpose-built for GPU clouds. No over-engineering, no bloat. Just what you need to provision and manage bare metal GPU instances.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#A800FF] to-purple-600 mb-4">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Production Ready
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Battle-tested by leading organizations including MIT, Disney, DeepInfra, and Neets.ai. Proven at scale.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#A800FF] to-purple-600 mb-4">
                  <DollarSign className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Cost Effective
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Eliminates hidden engineering costs of complex solutions. Reduce infrastructure team size and reallocate talent.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-gradient-to-br from-[#A800FF] to-purple-600 mb-4">
                  <Cpu className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Direct Integration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Works directly with NVIDIA environments. No middleware required. Simple CLI-based remote management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* How It Works Section */}
      <FadeInWhenVisible>
        <div className="py-20 px-4 bg-gradient-to-br from-gray-900 to-purple-900 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Get your GPU infrastructure running in three simple steps
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A800FF] mb-6">
                    <Usb className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white/20 mb-4">01</div>
                  <h3 className="text-2xl font-bold mb-4">Flash ISO Image</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Flash the script as an ISO image onto a USB drive. One-time physical installation onto your GPU server with a blank Ubuntu OS.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#A800FF]" />
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A800FF] mb-6">
                    <Network className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white/20 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Bind IP Addresses</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Configure IP addresses for remote management from the command line. Enable full CLI-based control of your infrastructure.
                  </p>
                </div>
                {/* Arrow for desktop */}
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-[#A800FF]" />
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 hover:bg-white/15 transition-all">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#A800FF] mb-6">
                    <Rocket className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-white/20 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Deploy & Manage</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Start provisioning GPU instances via API or CLI. Request, reset, and delete instances remotely with simple commands.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* API Documentation Section */}
      <FadeInWhenVisible>
        <div id="api-docs" className="py-20 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Simple, Powerful API
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three endpoints to manage your entire GPU infrastructure. Request, reset, and delete instances with simple HTTP requests.
              </p>
            </div>

            <div className="space-y-8">
              {/* Request Instance */}
              <CodeBlock
                title="POST /RequestInstance"
                description="Allocate a new GPU instance and receive login credentials via email"
                code={`curl -X POST https://message.gpu.ai/RequestInstance \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "gpu_model": "H100",
    "api_key": "api_key_we_will_provide"
  }'

# Response: Allocates instance and emails credentials
# Billing starts once credentials are issued`}
              />

              {/* Reset Instance */}
              <CodeBlock
                title="POST /ResetInstance"
                description="Reset an active GPU instance to its initial state"
                code={`curl -X POST https://message.gpu.ai/ResetInstance \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "server_ip": "1.1.1.1",
    "api_key": "api_key_we_will_provide"
  }'

# Response: Resets instance identified by IP
# Removes all data, installed software, and user configs`}
              />

              {/* Delete Instance */}
              <CodeBlock
                title="POST /DeleteInstance"
                description="Release the GPU instance and stop billing immediately"
                code={`curl -X POST https://message.gpu.ai/DeleteInstance \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@example.com",
    "server_ip": "1.1.1.1",
    "api_key": "api_key_we_will_provide"
  }'

# Response: Releases instance and stops billing
# Instance becomes available for next customer`}
              />
            </div>

            {/* API Notes */}
            <div className="mt-12 bg-purple-50 border border-purple-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">API Notes</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">email:</span> Where you want to receive login information and notifications
                </p>
                <p>
                  <span className="font-semibold">server_ip:</span> Each instance is assigned a unique IP for identification
                </p>
                <p>
                  <span className="font-semibold">gpu_model:</span> Options include A100, H100, H200 (upgrades to H200 if H100 unavailable)
                </p>
                <p>
                  <span className="font-semibold">api_key:</span> Provided once you start using the service
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      {/* FAQ Section */}
      <FadeInWhenVisible>
        <div className="py-10 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about GPU.ai Bare Metal
              </p>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="When starting a VM, do we get an API response with server IP, or are VM credentials sent via email?"
                answer="There is a fetch API you can use to retrieve the server credentials with your API key. It's through secure POST requests so the process can be fully automated without relying on emails."
              />

              <FAQItem
                question="Do you provide VM stopping or hibernation features? How do we select storage volume?"
                answer="Currently we do not support stop or hibernation features. Each instance comes with a pre-configured storage volume which you can modify after gaining SSH access. All GPUs are physically located in the US, with data centers in Pennsylvania and Delaware. The OS image is fixed to Ubuntu 22.04 LTS. Let us know if you have special requirements with storage volume or OS, we can accommodate that."
              />

              <FAQItem
                question="Do you offer spot instances?"
                answer="Currently we don't offer spot instances."
              />

              <FAQItem
                question="Is the GPU instance a VM or Containers?"
                answer="It's a VM (Virtual Machine)."
              />

              <FAQItem
                question="What is the reset API? What functionality does it provide?"
                answer="The Reset API restores the instance to its initial state as delivered, removing all data, installed software, and user configurations. It's essentially a clean slate for the next use."
              />

              <FAQItem
                question="How is the 25% discount applied? What payment methods do you accept?"
                answer="The 25% discount is applied on top of our standard website pricing. We accept credit cards, ACH transfers, and cryptocurrency payments. For on-demand usage, we require a pre-paid deposit and will notify you when balance is running out."
              />

              <FAQItem
                question="In case of VMs error or downtime, how can we handle this?"
                answer="Our uptime is 99.995%. In case of any error, you can always use the Reset API to restore your environment to a clean state. We also have on-site system engineers to assist you with any system-level issues."
              />
            </div>
          </div>
        </div>
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default OpenSource;

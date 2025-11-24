import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Pricing from "./pages/MainPages/Pricing";
import ComingSoon from "./pages/MainPages/ComingSoon";
import Home from "./pages/MainPages/Home";
import LoginPage from "./pages/MainPages/LoginPage";
import SignupPage from "./pages/MainPages/SignupPage";
import About from "./pages/MainPages/About";
import Payment from "./pages/MainPages/Payment";
import Research from "./pages/MainPages/Research";
import Services from "./pages/MainPages/Services";
import Why from "./pages/MainPages/Why";
import Team from "./pages/MainPages/Team";
import Legal from "./pages/MainPages/Legal";
import Contact from "./pages/MainPages/Contact";

// Product
import APIServices from "./pages/Products/APIServices"
import GPUServer from "./pages/Products/GPUServer"
import GPUCluster from "./pages/Products/GPUCluster"
import DeveloperTool from "./pages/Products/DeveloperTool"
import AnalyticsPlatform from "./pages/Products/AnalyticsPlatform"
import GPUStack from "./pages/Products/GPUStack"
import SDKLibraries from "./pages/Products/SDKLibraries"
import Accelerators from "./pages/Products/Accelerators"
import EnterpriceSolution from "./pages/Solutions/EnterpriceSolution";
import AI_ML from "./pages/Solutions/AI_ML";
import WorkAutomation from "./pages/Solutions/WorkAutomation";
import ResearchSolution from "./pages/Solutions/ResearchSolution";
import IndustrySpecific from "./pages/Solutions/IndustrySpecific";
import DeepLearning from "./pages/Solutions/DeepLearning";
import CollaborationsTool from "./pages/Solutions/CollaborationsTool";
import StartupProgram from "./pages/Solutions/StartupProgram";
import Authentication from "./pages/Discover/Authentication"
import CloudPlatform from "./pages/Discover/CloudPlatform"
import NextGenGPU from "./pages/Discover/NextGenGPU"
import Vision from "./pages/Discover/Vision";
import Infrastructure from "./pages/Discover/Infrastructure";
import HardwareSolutions from "./pages/Discover/HardwareSolutions";
import SecurityNComplaince from "./pages/Discover/SecurityNComplaince";
import Performance from "./pages/Discover/Performance";
import Callback from "./components/Auth/Callback";

const App = () => {
  const location = useLocation();

  const hideNavbarPaths = ["/login", "/signup"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {!hideNavbarPaths.includes(location.pathname) && (
        <div>
          <Navbar />
        </div>
      )}

      {/* Main Route Content */}
      <div
        className={`${!hideNavbarPaths.includes(location.pathname) ? "" : ""}`}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/callback" element={<Callback />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/company" element={<About />} />
          <Route path="/research" element={<Research />} />
          <Route path="/services" element={<Services />} />
          <Route path="why-gpu-ai" element={<Why />} />
          <Route path="/team" element={<Team />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/payment" element={<Payment />} />

          {/* Discover Routes */}
          <Route path="/discover/next-gen-gpus" element={<NextGenGPU />} />
          <Route path="/discover/vision" element={<Vision/>} />
          <Route path="/discover/hardware-solutions" element={<HardwareSolutions />} />
          <Route path="/discover/infrastructure" element={<Infrastructure/> } />
          <Route path="/discover/cloud-platform" element={<CloudPlatform/>} />
          <Route path="/discover/security-compliance" element={<SecurityNComplaince />} />
          <Route path="/discover/authentication" element={<Authentication/>} />
          <Route path="/discover/performance" element={<Performance />} />

          {/* Product Routes */}
          <Route path="/product/gpu-servers" element={<GPUServer/>} />
          <Route path="/product/developer-tools" element={<DeveloperTool/>} />
          <Route path="/product/gpu-clusters" element={<GPUCluster/>} />
          <Route path="/product/api-services" element={<APIServices/>} />
          <Route path="/product/analytics-platform" element={<AnalyticsPlatform />} />
          <Route path="/product/gpu-stack" element={<GPUStack />} />
          <Route path="/product/sdk-libraries" element={<SDKLibraries />} />
          <Route path="/product/accelerators" element={<Accelerators />} />

          {/* Solution Routes */}
          <Route path="/solutions/enterprise-solutions" element={<EnterpriceSolution/>} />
          <Route path="/solutions/ai-machine-learning" element={<AI_ML/>} />
          <Route path="/solutions/deep-learning" element={<DeepLearning/>} />
          <Route path="/solutions/workflow-automation" element={<WorkAutomation/>} />
          <Route path="/solutions/research-solutions" element={<ResearchSolution/>} />
          <Route path="/solutions/collaboration-tools" element={<CollaborationsTool/>} />
          <Route path="/solutions/industry-specific" element={<IndustrySpecific/>} />
          <Route path="/solutions/startup-program" element={<StartupProgram/>} />

          {/* Other */}
          <Route path="/legal-documents" element={<ComingSoon/>}/>
          <Route path="/terms-of-use" element={<ComingSoon/>}/>
          <Route path="/cookie-policy" element={<ComingSoon/>}/>
          <Route path="/privacy-policy" element={<ComingSoon/>}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
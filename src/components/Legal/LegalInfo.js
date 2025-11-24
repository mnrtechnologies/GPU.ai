import React from "react";

const LegalInfo = () => {
  return (
    <main className="max-w-5xl mx-auto mt-10 space-y-8 px-4 bg-white text-gray-800 font-mono">
      {/* Partnership & Integration Guidelines */}
      <section className="bg-gray-100 rounded-lg p-6 text-md text-gray-600">
        <h2 className="flex items-center gap-2 font-semibold text-gray-900 mb-3 text-2xl">
          <i className="fas fa-handshake text-green-600"></i>
          Partnership & Integration Guidelines
        </h2>
        <p className="mb-6">
          As a technology partner, NovaCore provides comprehensive support and
          guidelines for successful integration and deployment of our AI
          solutions. Our partnership framework ensures both parties maintain
          high standards of security, performance, and ethical AI usage.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-between gap-6 mb-6">
          <div className="sm:w-1/2">
            <p className="font-semibold text-gray-900 mb-2">
              Integration Requirements
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Secure API implementation</li>
              <li>Data encryption standards</li>
              <li>Authentication protocols</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
          <div className="sm:w-1/2">
            <p className="font-semibold text-gray-900 mb-2">Support Services</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Technical documentation</li>
              <li>Integration assistance</li>
              <li>24/7 support access</li>
              <li>Regular updates</li>
            </ul>
          </div>
        </div>
        <div className="bg-gray-50 rounded-md p-4 flex flex-col sm:flex-row gap-4">
          <div className="bg-white rounded-md p-3 flex-1">
            <p className="font-semibold text-gray-900 mb-1">Standard</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Basic API access</li>
              <li>Community support</li>
              <li>Standard SLA</li>
            </ul>
          </div>
          <div className="bg-white rounded-md p-3 flex-1">
            <p className="font-semibold text-gray-900 mb-1">Professional</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Advanced features</li>
              <li>Priority support</li>
              <li>Enhanced SLA</li>
            </ul>
          </div>
          <div className="bg-white rounded-md p-3 flex-1">
            <p className="font-semibold text-gray-900 mb-1">Enterprise</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Custom solutions</li>
              <li>Dedicated support</li>
              <li>Custom SLA</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="bg-gray-100 rounded-lg p-6 text-md text-gray-600 ">
        <h2 className="flex items-center gap-2 font-semibold text-gray-900 mb-3 text-2xl">
          <i className="fas fa-building text-[#a349a4]"></i>
          Company Information
        </h2>
        <p className="mb-4">NovaCore Technologies Inc.</p>
        <p className="mb-4">Registration Number: DE-123456789</p>
        <p className="mb-4">Incorporated: Delaware, United States</p>
        <p className="mb-4">Tax ID: XX-XXXXXXX</p>
        <p>D&amp;B Number: XXXXXXXXX</p>
      </section>
      {/* Licensing & Compliance */}
      <section className="bg-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold  flex items-center gap-2 mb-3">
          <i className="fas fa-handshake text-[#a349a4]"></i>
          Licensing &amp; Compliance
        </h2>
        <div className="text-md text-gray-700 space-y-3">
          <div>
            <p className="font-semibold mb-1">Software Licenses</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Commercial License Agreement</li>
              <li>Open Source Components</li>
              <li>Third-party Licenses</li>
              <li>API Usage Terms</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">Compliance Certifications</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>ISO 27001 Certified</li>
              <li>GDPR Compliant</li>
              <li>CCPA Compliant</li>
              <li>SOC 2 Type II Certified</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Legal Resources */}
      <section className="bg-gray-200 rounded-lg p-6">
        <h2 className="text-2xl font-bold  flex items-center gap-2 mb-3">
          <i className="fas fa-gavel text-[#a349a4]"></i>
          Legal Resources
        </h2>
        <div className="text-md text-gray-700 flex flex-col sm:flex-row sm:justify-between gap-6">
          <div>
            <p className="font-semibold mb-1">For Businesses</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Master Service Agreement</li>
              <li>Service Level Agreement</li>
              <li>Data Processing Agreement</li>
              <li>Business Associate Agreement</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-1">For Developers</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>API Terms of Service</li>
              <li>SDK License Agreement</li>
              <li>Developer Guidelines</li>
              <li>Code of Conduct</li>
            </ul>
          </div>
        </div>
      </section>

      {/* International Operations */}
      <section className="bg-gray-200 rounded-lg p-6 text-gray-700 leading-relaxed">
        <h2 className="font-semibold text-2xl text-gray-900 mb-3 flex items-center gap-2">
          <i className="fas fa-globe text-[#a349a4]"></i>
          International Operations
        </h2>
        <p className="mb-3">
          NovaCore operates globally and complies with regional regulations
          including:
        </p>
        <ul className="list-disc list-inside space-y-1">
          <li>European Union (GDPR)</li>
          <li>California, USA (CCPA)</li>
          <li>Canada (PIPEDA)</li>
          <li>Australia (Privacy Act)</li>
          <li>Brazil (LGPD)</li>
        </ul>
      </section>

      {/* Contact Legal Department */}
      <section className="bg-gray-200 rounded-lg p-6  text-gray-700 leading-relaxed">
        <h2 className="font-semibold text-2xl text-gray-900 mb-3 flex items-center gap-2">
          <i className="fas fa-file-alt text-[#a349a4]"></i>
          Contact Legal Department
        </h2>
        <p className="mb-4">For legal inquiries and documentation requests:</p>
        <div className="flex flex-col md:flex-row md:justify-between text-md font-mono">
          <div className="space-y-4">
            <div>
              <span className="font-semibold">General Legal Inquiries:</span>
              <br />
              legal@novacore.com
            </div>
            <div>
              <span className="font-semibold">Compliance Office:</span>
              <br />
              compliance@novacore.com
            </div>
            <div>
              <span className="font-semibold">Mailing Address:</span>
              <br />
              NovaCore Legal Department
              <br />
              123 Innovation Drive
              <br />
              Silicon Valley, CA 94025
              <br />
              United States
            </div>
          </div>
          <div className="space-y-4 mt-6 md:mt-0 md:text-right">
            <div>
              <span className="font-semibold">Privacy Concerns:</span>
              <br />
              privacy@novacore.com
            </div>
            <div>
              <span className="font-semibold">Press & Media:</span>
              <br />
              press@novacore.com
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LegalInfo;

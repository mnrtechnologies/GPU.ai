import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What security measures does NovaCore implement to protect AI workloads?",
      answer:
        "NovaCore implements enterprise-grade security measures including end-to-end encryption, secure enclaves, regular security audits, and compliance with SOC2 Type II and ISO 27001 standards. We also provide dedicated instances and VPCs for enhanced isolation.",
    },
    {
      question: "How does NovaCore handle data privacy and GDPR compliance?",
      answer:
        "We maintain strict GDPR compliance by implementing data minimization, purpose limitation, and user consent mechanisms. All data is processed within GDPR-compliant data centers, and we provide tools for data portability and the right to be forgotten.",
    },
    {
      question: "What are the terms for terminating a NovaCore subscription?",
      answer:
        "Subscriptions can be terminated with 30 days written notice. Upon termination, we ensure secure data deletion and provide export options for your data. Pro-rated refunds are available for annual subscriptions.",
    },
    {
      question: "Can I transfer my NovaCore license to another organization?",
      answer:
        "License transfers require written approval from NovaCore and are subject to our transfer policy. Enterprise licenses may have specific transfer restrictions based on the agreement terms.",
    },
    {
      question: "What is NovaCore's uptime guarantee and SLA terms?",
      answer:
        "We guarantee 99.9% uptime for our infrastructure, backed by our SLA. In case of downtime, credits are automatically applied to your account based on the duration and impact of the service interruption.",
    },
    {
      question: "How does NovaCore handle intellectual property rights for AI models?",
      answer:
        "Any AI models trained on our infrastructure remain your intellectual property. We maintain strict data segregation and do not claim any rights to your models, training data, or outputs.",
    },
    {
      question: "What are the payment terms and billing cycles?",
      answer:
        "We offer monthly and annual billing cycles. Payments are processed at the start of each billing period. Enterprise customers can arrange custom billing terms. We accept major credit cards and wire transfers.",
    },
    {
      question: "How does NovaCore ensure compliance with industry regulations?",
      answer:
        "We maintain compliance with major regulations including HIPAA, GDPR, and SOC2. Regular audits are conducted, and we provide compliance reports upon request. Industry-specific compliance requirements can be addressed through custom agreements.",
    },
    {
      question: "What support options are available for enterprise customers?",
      answer:
        "Enterprise customers receive 24/7 priority support, dedicated account managers, and access to our technical architects. We offer custom SLAs, training sessions, and quarterly business reviews.",
    },
    {
      question: "How are disputes and legal matters handled?",
      answer:
        "Disputes are initially handled through our support system. If needed, we offer mediation services. Legal matters are governed by the jurisdiction specified in your service agreement.",
    },
    {
      question: "What happens to my data if NovaCore is acquired or ceases operations?",
      answer:
        "Our contingency plan ensures data protection and provides a minimum 90-day notice for data export. We maintain escrow arrangements for critical services and provide transition assistance.",
    },
    {
      question: "Are there any restrictions on the types of AI workloads that can be run?",
      answer:
        "While we support most AI workloads, certain restrictions apply to illegal or harmful applications. Our acceptable use policy outlines specific restrictions and compliance requirements.",
    },
    {
      question: "What are the backup and disaster recovery policies?",
      answer:
        "We maintain automated backups with configurable retention periods. Our disaster recovery plan includes multi-region failover and guarantees data recovery within specified timeframes.",
    },
  ];
  
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="max-w-[975px] mx-auto mt-10 font-sans bg-[#e6e6e6] rounded-xl p-6">
      <h2 className="text-2xl font-bold flex items-center space-x-2 mb-6">
        <span className="text-[#9b59b6] text-[28px] select-none">❓</span>
        <span>Frequently Asked Questions</span>
      </h2>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqData.map((faq, index) => (
          <article key={index} className="bg-white rounded-xl p-5">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAnswer(index)}
            >
              <div className="flex items-center space-x-3">
                <div
                  className={`${
                    openIndex === index ? 'bg-[#a349a4] text-white' : 'bg-[#d9eafc] text-[#a349a4]'
                  } font-bold rounded-md w-7 h-7 flex items-center justify-center select-none`}
                >
                  {index + 1}
                </div>
                <p className="text-[15px] leading-snug text-gray-950 font-sans max-w-[280px]">{faq.question}</p>
              </div>
              <i
                className={`fas ${openIndex === index ? 'fa-chevron-up' : 'fa-chevron-down'} text-gray-600 mt-1`}
              ></i>
            </div>
            {openIndex === index && (
              <p className="mt-4 ml-10 text-[14px] font-sans text-gray-700 leading-relaxed max-w-[350px]">
                {faq.answer}
              </p>
            )}
          </article>
        ))}
      </section>
    </main>
  );
};

export default FAQ;

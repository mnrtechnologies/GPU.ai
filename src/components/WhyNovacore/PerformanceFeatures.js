

const PerformanceFeatures = ({performanceData,title="Performance Features", description="Industry-leading specifications of our B200 GPU architecture, delivering unprecedented performance for AI and HPC workloads"}) => {
  return (
    <div className="bg-white text-[#1f2937] font-sans">
      <div className="max-w-7xl mx-auto p-6 sm:p-10 bg-[#f0f1f3] rounded-2xl mt-10 mb-10">
        <h2 className="text-center text-4xl font-semibold mb-2">
          {title}
        </h2>
        <p className="text-center text-md text-[#4b5563] mb-10 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {performanceData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-5 flex items-center space-x-4 ${
                item.title === "LLM Training"
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="bg-[#dbeeff] p-3 rounded-md">
                <item.icon className="w-8 h-8 text-[#a349a4]" />
              </div>
              <div>
                <p className="text-md text-[#6b7280]">{item.title}</p>
                <p className="text-xl font-extrabold text-[#111827]">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PerformanceFeatures;

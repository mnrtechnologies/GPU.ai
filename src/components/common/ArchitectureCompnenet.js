import React from "react";
import Architecture from "./Architecture";

const ArchitectureData = [
  {
    title: "B200",
    description:
      "Industry-leading specifications of our B200 GPU architecture, delivering unprecedented performance for AI and HPC workloads",
    pricing: [
      { label: "$ 3.9 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 2,299 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 339 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      {
        label: "₹ 1,99,680 / mo",
        bg: "bg-pink-100",
        text: "text-pink-900",
      },
    ],
    heading: "Latest Hopper Architecture",
    features: [
      "141GB HBM3e Memory",
      "4.8TB/s Memory Bandwidth",
      "2X FP8 Performance",
      "Gen5 PCIe Support",
      "4th Gen Tensor Cores",
      "900GB/s NVLink",
      "-40% Inference Latency",
      "Hopper Architecture",
      "3.5X Power Efficiency",
    ],
    specBgColor: "bg-[#f0f4ff]",
  },
  {
    title: "H100",
    description:
      "Revolutionary Hopper architecture bringing exceptional performance and scalability for transformative AI and high performance computing applications",
    pricing: [
      { label: "$ 1.9 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 999 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 165 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 86,764 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Hopper Architecture",
    features: [
      "Memory 80GB HBM3",
      "Memory Bandwidth 3.35 TB/s",
      "FP8 Compute 2000 TFLOPS",
      "PCIe Gen5",
      "Tensor Cores 4th Generation",
      "NVLink 900 GB/s",
      "HGX H100 platform support",
      "Dynamic Programming",
      "Transformer Engine",
    ],
    specBgColor: "bg-[#f0f4ff]",
  },
  {
    title: "A100 80GB",
    description:
      "Powerful Ampere architecture providing breakthrough performance acceleration and flexibility for AI, data analytics, and scientific computing workloads",
    pricing: [
      { label: "$ 0.50 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 229 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 44 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 19,890 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ampere Architecture",
    features: [
      "Memory 80GB HBM2e",
      "Memory Bandwidth 2 TB/s",
      "FP64 19.5 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 3rd Generation",
      "NVLink 600 GB/s",
      "Multi-Instance GPU (MIG)",
      "TensorFloat-32 (TF32)",
      "Sparsity acceleration",
    ],
    specBgColor: "bg-[#f7fef9]",
  },
  {
    title: "A100 40GB",
    description:
      "Enterprise AI and HPC powerhouse delivering exceptional performance for diverse computing workloads",
    pricing: [
      { label: "$ 0.30 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 159 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 26 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 13,810 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ampere Architecture",
    features: [
      "Memory 40GB HBM2e",
      "Memory Bandwidth 1.6 TB/s",
      "FP64 9.7 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 3rd Generation",
      "NVLink 600 GB/s",
      "Multi-Instance GPU (MIG)",
      "TensorFloat-32 (TF32)",
      "Sparsity acceleration",
    ],
    specBgColor: "bg-[#f8faff]",
  },
  {
    title: "L40S",
    description:
      "Advanced AI inference and graphics in a versatile data center GPU",
    pricing: [
      { label: "$ 0.69 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 319 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 60 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 27,706 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ada Lovelace Architecture",
    features: [
      "Memory 48GB GDDR6",
      "Memory Bandwidth 864 GB/s",
      "FP8 362 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 4th Generation",
      "NVIDIA® Optical Flow 2.0",
      "Ray Tracing Cores",
      "AV1 Encode/Decode",
      "Maximum 300W",
    ],
    specBgColor: "bg-[#eaf4ff]",
  },
  {
    title: "L4",
    description:
      "Efficient AI inference and graphics processing for mainstream servers",
    pricing: [
      { label: "$ 0.35 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 179 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 31 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 15,547 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ada Lovelace Architecture",
    features: [
      "Memory 24GB GDDR6",
      "Memory Bandwidth 432 GB/s",
      "FP8 181 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 4th Generation",
      "Maximum 72W",
      "AV1 Encode/Decode",
      "Small Form Factor",
      "Low Power Design",
    ],
    specBgColor: "bg-[#f1f6ee]",
  },
  {
    title: "A40",
    description:
      "Professional visualization and data center compute GPU for demanding enterprise workloads",
    pricing: [
      { label: "$ 0.25 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 129 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 22 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 11,204 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ampere Architecture",
    features: [
      "Memory 48GB GDDR6",
      "Memory Bandwidth 696 GB/s",
      "FP32 37.4 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 3rd Generation",
      "Maximum 300W",
      "Ray Tracing Cores",
      "Virtual Workstation",
      "Enterprise Support",
    ],
    specBgColor: "bg-[#eaf4ff]",
  },
  {
    title: "A30",
    description:
      "Versatile compute accelerator optimized for mainstream enterprise compute and AI inference",
    pricing: [
      { label: "$ 0.22 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "$ 109 / mo", bg: "bg-pink-100", text: "text-pink-900" },
      { label: "₹ 20 / hr", bg: "bg-blue-100", text: "text-blue-900" },
      { label: "₹ 9,467 / mo", bg: "bg-pink-100", text: "text-pink-900" },
    ],
    heading: "Ampere Architecture",
    features: [
      "Memory 24GB HBM2",
      "Memory Bandwidth 933 GB/s",
      "FP32 10.3 TFLOPS",
      "PCIe Gen4",
      "Tensor Cores 3rd Generation",
      "Maximum 165W",
      "Multi-Instance GPU (MIG)",
      "TensorFloat-32 (TF32)",
      "Cost-Efficient Design",
    ],
    specBgColor: "bg-[#fffaf1]",
  },
];

const ArchitectureCompnenet = () => {
  return (
    <div>
      {ArchitectureData.map((item, index) => (
        <Architecture key={index} {...item} />
      ))}
    </div>
  );
};

export default ArchitectureCompnenet;

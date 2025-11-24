import React from "react";
import Blackwell from "./Blackwell";
import { useNavigate } from "react-router-dom";

const BlackwellData = [
  {
    id: 1,
    title: "B200",
    description:
      "Cutting-edge specifications of the Blackwell B200 GPU architecture, delivering extreme performance for AI and HPC workloads.",
    boxBgColor: "#d4f7f1",
  },
  // {
  //   id: 2,
  //   title: "GB200",
  //   description:
  //     "Cutting-edge specifications of the Blackwell B200 GPU architecture, delivering extreme performance for AI and HPC workloads.",
  //   boxBgColor: "#ecf9d6",
  // },
];

const BlackwellComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="mt-20">
      {BlackwellData.map(({ id, title, description, boxBgColor }) => (
        <Blackwell
          key={id}
          title={title}
          description={description}
          boxBgColor={boxBgColor}
          onButtonClick={() => navigate("/contact") }
        />
      ))}
    </div>
  );
};

export default BlackwellComponent;

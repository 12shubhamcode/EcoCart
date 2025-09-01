import { PiPlant } from "react-icons/pi";
import Heading from "./Heading";
import { MdOutlineFactory } from "react-icons/md";
import { IoRibbonOutline } from "react-icons/io5";
import { PiVanLight } from "react-icons/pi";
import {
  TbCircleNumber1Filled,
  TbCircleNumber2Filled,
  TbCircleNumber3Filled,
  TbCircleNumber4Filled,
} from "react-icons/tb";
const Process = () => {
  const renderStep = step.map((items) => {
    return (
      <div
        className={`flex-1 md:basis-[100px] basis-[200px] ${
          items.id % 2 === 0 ? "md:-mt-70" : ""
        }`}
      >
        <span className="flex w-18 h-18 mx-auto justify-center items-center bg-zinc-800 text-white rounded-full text-7xl outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed">
          {items.number}
        </span>
        <div className="flex md:items-end items-start mt-10 gap-x-4 flex-col">
          <span className="flex  w-16 h-16 justify-center items-center bg-gradient-to-b from-lime-400 to-lime-700 rounded-full text-white text-3xl shrink-0 ">
            {items.icon}
          </span>

          <div>
            <h4 className="text-zinc-800  text-2xl font-bold">{items.title}</h4>
            <p className="text-zinc-600">{items.para}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        <div className="w-fit mr-auto">
          <Heading highlight="Our" content="Process" />
        </div>

        <div className="flex flex-wrap md:mt-15 mt-10  justify-center items-center md:p-30 gap-30 ">
          {renderStep}
        </div>
      </div>
    </section>
  );
};

export default Process;

const step = [
  {
    id: 1,
    number: <TbCircleNumber1Filled />,
    title: "Sourcing",
    para: "We carefully select the best raw materials from trusted farms and suppliers to ensure top quality from the start.",
    icon: <PiPlant />,
  },
  {
    id: 2,
    number: <TbCircleNumber2Filled />,
    title: "Manufacturing",
    para: "Our modern facilities process ingredients with care, maintaining freshness and nutrition at every stage.",
    icon: <MdOutlineFactory />,
  },
  {
    id: 3,
    number: <TbCircleNumber3Filled />,
    title: "Quality Control",
    para: "Every product goes through strict quality checks to guarantee safety, purity, and customer satisfaction",
    icon: <IoRibbonOutline />,
  },
  {
    id: 4,
    number: <TbCircleNumber4Filled />,
    title: "Logistics",
    para: "With efficient storage and fast delivery, we ensure products reach you fresh and on time.",
    icon: <PiVanLight />,
  },
];

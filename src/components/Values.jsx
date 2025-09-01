import Heading from "./Heading";
import basket from "../assets/basket-full-vegetables.png";
import { FaHeart, FaLeaf, FaSeedling, FaShieldAlt } from "react-icons/fa";
const Values = () => {
  const leftValue = value.slice(0, 2).map((item) => {
    return (
      <div className="flex md:flex-row-reverse items-center gap-6" key={item.id}>
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-lime-400 to-lime-700 h-15 w-15 rounded-full text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div className="md:text-right">
          <h3 className="text-3xl text-zinc-800 font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  const righttValue = value.slice(2, 4).map((item) => {
    return (
      <div className="flex items-center gap-6  " key={item.id}>
        <div>
          <span className="flex justify-center items-center bg-gradient-to-b from-lime-400 to-lime-700 h-15 w-15 rounded-full text-3xl text-white">
            {item.icon}
          </span>
        </div>
        <div className="">
          <h3 className="text-3xl text-zinc-800 font-bold">{item.title}</h3>
          <p className="text-zinc-600 mt-2">{item.para}</p>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        <Heading highlight="Our" content="Value" />
        <div className="flex md:flex-row flex-col gap-6 mt-9">
          <div className="md:min-h-100 flex flex-col justify-between gap-10">
            {leftValue}
          </div>
          <div>
            <img className="md:flex w-3/2 hidden" src={basket} alt="" />
          </div>
          <div className="md:min-h-100 flex flex-col justify-between gap-10">
            {righttValue}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;

const value = [
  {
    id: 1,
    title: "Trust",
    para: "We believe in building long-lasting relationships with our customers by delivering only the best products with honesty and care.",
    icon: <FaHeart />,
  },
  {
    id: 2,
    title: "Always Fresh",
    para: "Our products are sourced daily to ensure you enjoy the freshest and most flavorful groceries every time.",
    icon: <FaLeaf />,
  },
  {
    id: 3,
    title: "Food Safety",
    para: "We follow strict hygiene and safety standards so that every item you receive is clean, safe, and healthy.",
    icon: <FaShieldAlt />,
  },
  {
    id: 4,
    title: "100% Organic",
    para: "From farm to table, our organic products are free from harmful chemicals, ensuring pure goodness for your family.",
    icon: <FaSeedling />,
  },
];

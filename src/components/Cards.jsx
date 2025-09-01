import { FaHeart, FaPlus } from "react-icons/fa";
import Button from "./Button";
const Cards = ({ image, title, para, price }) => {
  return (
    <div className="bg-zinc-100 p-4 rounded-xl">
      <div className="flex justify-between ">
        <span className="text-3xl text-zinc-300">
          <FaHeart className="cursor-pointer" />
        </span>
        <button className="bg-gradient-to-b from-lime-400 to-lime-700 text-white px-4 py-3 rounded-lg cursor-pointer">
          <FaPlus />
        </button>
      </div>
      <div className="w-full h-50">
        <img src={image} className="w-full h-full object-contain" />
      </div>
      <div className="text-center">
        <h3 className="text-zinc-800 text-2xl font-semibold mt-3">{title}</h3>
        <p className="text-zinc-800 text-3xl font-bold mt-4 mb-3">₹{price}</p>
        <Button content="Shop now" />
      </div>
    </div>
  );
};

export default Cards;

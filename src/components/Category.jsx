import Heading from "./Heading";
import fruitsVeggies from "../assets/fruits-and-veggies.png";
import meatSeaFood from "../assets/meat-and-seafood.png";
import dairyAndEggs from "../assets/dairy-and-eggs.png";
import Button from "./Button";
import { Link } from "react-router-dom";
const Category = () => {
  const renderCard = category.map((card) => {
    return (
      <div className="flex-1 basis-[400px]" key={card.id}>
        <div className="relative w-full min-h-[25vh] -mb-10">
          <img
            src={card.image}
            className="absolute bottom-0 object-contain max-h-full"
          />
        </div>
        <div className="bg-zinc-100 pt-17 p-8 rounded-2xl">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-8">{card.description}</p>
          {/* <Button content="See all" /> */}
          <Link
            to={card.path}
            className="bg-gradient-to-b from-lime-400 to-lime-700 text-white px-8 py-3 md:text-xl text-md rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            See all
          </Link>
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className=" max-w-[1200px] mx-auto px-8 py-20">
        <Heading highlight="Shop" content="by Category" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 ">
          {" "}
          {renderCard}
        </div>
      </div>
    </section>
  );
};

export default Category;

const category = [
  {
    id: 1,
    title: "Veggies & Fruits",
    description:
      "Fresh, organic produce sourced daily from local farms. Explore a wide range of seasonal fruits and crisp vegetables.",
    image: fruitsVeggies,
    path: "/fruits",
  },
  {
    id: 2,
    title: "Dairy & Eggs",
    description:
      "Wholesome dairy products and free-range eggs. From creamy milk and yogurt to artisanal cheeses",
    image: dairyAndEggs,
    path: "/dairy",
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-quality, responsibly sourced meat and seafood. Choose from fresh cuts, marinated options, and more.",
    image: meatSeaFood,
    path: "/seeFood",
  },
];

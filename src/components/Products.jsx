import { useState } from "react";
import Heading from "./Heading";
import productList from "./productList";
import Cards from "./Cards";
import Button from "./Button";
import { Link } from "react-router-dom";
const Products = () => {
  const categories = ["All", "Fruits", "Vegetables", "Dairy", "SeaFood"];
  const [activeTab, setactiveTab] = useState("All");

  const filterdItem =
    activeTab === "All"
      ? productList
      : productList.filter((item) => item.category === activeTab);

  const renderProduct = filterdItem.slice(0, 8).map((items) => {
    return (
      <Cards
        image={items.image}
        title={items.name}
        price={items.price}
        para={items.category}
        key={items.id}
      />
    );
  });

  return (
    <section>
      <div className="max-w-[1200px] mx-auto px-8 py-20">
        <Heading highlight="Our" content="Products" />
        <div className="flex flex-wrap justify-center gap-3 mt-5">
          {categories.map((category) => {
            return (
              <button
                key={category}
                className={` px-5 py-2 text-lg rounded-xl cursor-pointer ${
                  activeTab === category
                    ? "bg-gradient-to-b from-lime-400 to-lime-700 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => {
                  setactiveTab(category);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* product */}
        <div className="grid md:grid-cols-4 grid-cols-1 mt-20 md:gap-9 gap-7">
          {renderProduct}
        </div>

        <div className="mt-15 mx-auto w-fit">
          {/* <Button content="View all" /> */}
          <Link
            to="/allproduct"
            className="bg-gradient-to-b from-lime-400 to-lime-700 text-white px-8 py-3 md:text-xl text-md rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;

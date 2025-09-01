import Button from "./Button";
import background from "../assets/fresh-fruits.png";
const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-right bg-contain bg-no-repeat"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="md:bg-transparent bg-zinc-100 flex md:flex-row flex-col py-10 max-w-[1200px] mx-auto px-8 ">
        <span className="text-lime-700 md:text-9xl text-6xl font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[700px]">
          <h3 className="md:text-7xl text-4xl text-zinc-800 font-bold">
            First Order Discount!
          </h3>
          <p className="text-zinc-600 my-5">
            Enjoy an exclusive first order discount on our grocery website! Shop
            fresh essentials and save big on your first purchase. Fast delivery
            and quality guaranteed.
          </p>
          <Button content="Get a discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;

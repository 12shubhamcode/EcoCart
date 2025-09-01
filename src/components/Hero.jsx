import Grocery from "../assets/grocery.png";
import Button from "./Button";
const Hero = () => {
  return (
    <section>
      <div className="min-h-screen max-w-[1200px] mx-auto px-8 flex md:flex-row flex-col items-center pt-40  ">
        <div className="flex-1">
          <span className="bg-lime-100 text-lime-700 px-5 py-2 rounded-full text-lg">
            Export Best Quality...
          </span>
          <h1 className="md:text-7xl/20 text-5xl/14 font-bold mt-5 ">
            Tasty Organic <span className="text-lime-700">Veggies</span> &{" "}
            <span className="text-lime-700">Fruits</span> In Your City
          </h1>
          <p className="text-zinc-600 md:text-lg text-md mt-6 mb-8">
            Bread for a high content of beneficial substances. Our products are
            all fresh and healthy.
          </p>
          <Button content="Shop now" />
        </div>

        <div className="flex-1">
          <img src={Grocery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

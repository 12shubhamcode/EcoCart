import Category from "./Category";
import Discount from "./Discount";
import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Process from "./Process";
import Products from "./Products";
import Testimonial from "./Testimonial";
import Values from "./Values";

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Values />
      <Products />
      <Discount />
      <Process />
      <Testimonial />
    </div>
  );
};

export default Home;

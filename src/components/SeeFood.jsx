import CategoryPage from "./CategoryPage";
import seefood from "../assets/seafood-banner.jpg";

const SeeFood = () => {
  return (
    <div>
      <CategoryPage title="Meat & SeaFoods" bgImage={seefood} categories={['SeaFood']} />
    </div>
  );
};

export default SeeFood;

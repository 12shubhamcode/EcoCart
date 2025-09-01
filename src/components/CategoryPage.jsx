import Banner from "./Banner";
import Cards from "./Cards";
import productList from "./productList";

const CategoryPage = ({ title, bgImage, categories = [] }) => {
  const filterItem = categories.includes("All")
    ? productList
    : productList.filter((item) => categories.includes(item.category));

  const renderProduct = filterItem.map((item) => {
    return <Cards image={item.image} title={item.name} price={item.price} />;
  });

  return (
    <div className="">
      <Banner title={title} bgImage={bgImage} />

      <div className="grid md:grid-cols-4 gap-6 grid-cols-1 max-w-[1200px] mx-auto px-8 py-20">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;

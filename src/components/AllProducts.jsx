import allProduct from "../assets/all-banner.jpg"
import CategoryPage from "./CategoryPage"
const AllProducts = () => {
  return (
    <div>
    <CategoryPage title="All Products" bgImage={allProduct} categories={['All']} />
    </div>
  )
}

export default AllProducts

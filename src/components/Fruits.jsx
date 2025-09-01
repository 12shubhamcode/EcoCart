import CategoryPage from "./CategoryPage"
import fruits from "../assets/fruits-banner.jpg"

const Fruits = () => {
  return (
    <div>
      <CategoryPage title="Fruits & Veggies " bgImage={fruits} categories={['Fruits']} />
    </div>
  )
}

export default Fruits

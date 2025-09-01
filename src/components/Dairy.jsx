import CategoryPage from "./CategoryPage"
import dairy from "../assets/dairy-banner.jpg"

const Dairy = () => {
  return (
    <div>
  <CategoryPage title="Dairy & Eggs" bgImage={dairy}categories={['Dairy']}/>
    </div>
  )
}

export default Dairy

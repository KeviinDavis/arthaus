import HeroShelves from '../../components/HeroShelves';
import ProductsGrid from '../../components/ProductsGrid';
import shelvesData from '../../data/shelvesData';
import About from '../../components/About/index.jsx'



export default function Products() {
  return (
    <main>
      <HeroShelves />
      {/* <About /> */}
      <ProductsGrid  items={shelvesData}/>
    </main>
  )
}
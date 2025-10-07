import Hero from '../../components/Hero';
import ProductsGrid from '../../components/ProductsGrid';
import shelvesData from '../../data/shelvesData';


export default function Products() {
  return (
    <main>
      <Hero />
      <ProductsGrid  items={shelvesData}/>
    </main>
  )
}
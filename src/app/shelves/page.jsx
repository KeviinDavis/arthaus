import Hero from '../../components/Hero';
import ProductsGrid from '../../components/ProductsGrid';
import shelvesData from '../../data/shelvesData';
import About from '../../components/About/index.jsx'



export default function Products() {
  return (
    <main>
      <Hero />
      <About />
      <ProductsGrid  items={shelvesData}/>
    </main>
  )
}
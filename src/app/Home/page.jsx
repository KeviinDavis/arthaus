import HeroHome from '../../components/HeroHome';
import ProductsGrid from '../../components/ProductsGrid';
import HomeData from '../../Data/HomeData';
import About from '../../components/About/index.jsx'



export default function Products() {
  return (
    <main>
      <HeroHome />
      {/* <About /> */}
      <ProductsGrid  items={HomeData}/>
    </main>
  )
}
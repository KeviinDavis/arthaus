import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../components/Hero/index.jsx'
import FeaturedProduct from '../components/FeaturedProduct/index.jsx'
import Philosophy from '../components/Philosophy/index.jsx'
import About from '../components/About/index.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <Philosophy />
      <About />
      <FeaturedProduct />
    </div>
  );
}

import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../components/Hero/index.jsx'
import FeaturedProduct from '../components/FeaturedProduct/index.jsx'

export default function Home() {
  return (
    <div>
      <Hero />
      <FeaturedProduct />
    </div>
  );
}

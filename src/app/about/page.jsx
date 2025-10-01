import AboutHero from '../../components/AboutHero';
import AboutHistory from '../../components/AboutHistory';
import AboutImage from '../../components/AboutImage';
import FeaturedProduct from '../../components/FeaturedProduct';

export default function AboutPage() {
  return (
    <main>
        {/* <AboutImage /> */}
        <AboutHero />
        <AboutHistory />
        <AboutImage />
        {/* <FeaturedProduct /> */}
    </main>
  )
}
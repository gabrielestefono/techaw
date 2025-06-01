import Landing from "@/layouts/Landing";
import styles from "../styles/Landing.module.scss";
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/landing/About/About";
import Services from "@/components/sections/landing/Services/Services";
import ProductsCategories from "@/components/sections/landing/ProductsCategories/ProductsCategories";

export default function Home() {
  return (
    <Landing>
      <div className={styles.landing}>
        <div>
          <HeroSection />
          <About />
          <Services />
          <ProductsCategories />
        </div>
      </div>
    </Landing>
  );
}

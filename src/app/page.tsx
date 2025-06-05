import Landing from "@/layouts/Landing";
import styles from "../styles/Landing.module.scss";
import HeroSection from "@/components/sections/landing/Hero/HeroSection";
import About from "@/components/sections/landing/About/About";
import Services from "@/components/sections/landing/Services/Services";
import ProductsCategories from "@/components/sections/landing/ProductsCategories/ProductsCategories";
import Testimonials from "@/components/sections/landing/Testimonials/Testimonials";
import Contact from "@/components/sections/landing/contact/Contact";

export default function Home() {
  return (
    <Landing>
      <div className={styles.landing}>
        <div>
          <HeroSection />
          <About />
          <Services />
          <ProductsCategories />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </Landing>
  );
}

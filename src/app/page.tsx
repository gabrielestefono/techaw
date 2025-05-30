import Landing from "@/layouts/Landing";
import styles from "../styles/Landing.module.scss";
import HeroSection from "@/components/sections/HeroSection";
import About from "@/components/sections/landing/About/About";

export default function Home() {
  return (
    <Landing>
      <div className={styles.landing}>
        <div>
          <HeroSection />
          <About/>
        </div>
      </div>
    </Landing>
  );
}

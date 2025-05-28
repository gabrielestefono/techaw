import Footer from "@/components/layout/landing/Footer/Footer";
import Header from "@/components/layout/landing/Header/Header";
import { PropsWithChildren } from "react";
import styles from "./Landing.module.scss";

export default function Landing({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      <main className={styles.landing}>{children}</main>
      <Footer />
    </>
  );
}

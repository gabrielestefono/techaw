import { PropsWithChildren } from "react";
import styles from "./H2.module.scss";

type Variants = "primary" | "secondary";

interface H2Props {
  variant?: Variants;
}

export default function H2({
  children,
  variant,
}: Readonly<PropsWithChildren<H2Props>>) {
  const style = variant == "secondary" ? styles.h2Secodary : styles.h2;
  return <h2 className={style}>{children}</h2>;
}

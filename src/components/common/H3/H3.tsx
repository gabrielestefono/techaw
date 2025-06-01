import { PropsWithChildren } from "react";
import styles from "./H3.module.scss";

type Variation = "primary" | "secondary";

interface H3Props {
  variation?: Variation;
}

export default function H3({
  children,
  variation,
}: Readonly<PropsWithChildren<H3Props>>) {
  const variationType = ((variation?: Variation) => {
    switch (variation) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secundary;
      default:
        return styles.primary;
    }
  })(variation);
  return <h3 className={variationType}>{children}</h3>;
}

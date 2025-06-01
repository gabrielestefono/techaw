"use client";

import { PropsWithChildren } from "react";
import styles from "./P.module.scss";

type Variation = "subtitle" | "primary" | "primary-centered";

export default function P({
  children,
  variation,
}: Readonly<PropsWithChildren<{ variation: Variation }>>) {
  const variationType = ((variation: Variation) => {
    switch (variation) {
      case "subtitle":
        return styles.subtitle;
      case "primary":
        return styles.textPrimary;
      case "primary-centered":
        return styles.textPrimaryCentered;
      default:
        return "Oi";
    }
  })(variation);
  console.log(variationType);
  return <p className={variationType}>{children}</p>;
}

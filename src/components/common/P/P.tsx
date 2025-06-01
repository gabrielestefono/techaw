"use client";

import { PropsWithChildren } from "react";
import styles from "./P.module.scss";

type Variation =
  | "subtitle"
  | "primary"
  | "section-subtitle"
  | "secondary"
  | "terciary"
  | "quaternary";

type Alignment = "left" | "right" | "center";

type Style = "italic" | "normal";

type Weight =
  | "thin"
  | "extra-light"
  | "light"
  | "normal"
  | "medium"
  | "semi-bold"
  | "bold"
  | "extra-bold"
  | "black";

interface PProps {
  variation?: Variation;
  style?: Style;
  weight?: Weight;
  alignment?: Alignment;
}

export default function P({
  children,
  variation,
  style,
  weight,
  alignment,
}: Readonly<PropsWithChildren<PProps>>) {
  const variationType = ((variation?: Variation) => {
    switch (variation) {
      case "subtitle":
        return styles.subtitle;
      case "section-subtitle":
        return styles.sectionSubtitle;
      case "primary":
        return styles.textPrimary;
      case "secondary":
        return styles.textSecondary;
      case "terciary":
        return styles.textTerciary;
      case "quaternary":
        return styles.textQuaternary;
      default:
        return styles.textPrimary;
    }
  })(variation);

  const styleType = ((style?: Style) => {
    switch (style) {
      case "italic":
        return styles.italic;
      case "normal":
        return styles.normalStyle;
      default:
        return styles.normal;
    }
  })(style);

  const weigthType = ((weigth?: Weight) => {
    switch (weigth) {
      case "thin":
        return styles.thin;
      case "extra-light":
        return styles.extraLight;
      case "light":
        return styles.light;
      case "normal":
        return styles.normalWeigth;
      case "medium":
        return styles.medium;
      case "semi-bold":
        return styles.semiBold;
      case "bold":
        return styles.bold;
      case "extra-bold":
        return styles.extraBold;
      case "black":
        return styles.black;
      default:
        return styles.normalWeigth;
    }
  })(weight);

  const alignmentType = ((alignment?: Alignment) => {
    switch (alignment) {
      case "left":
        return styles.left;
      case "right":
        return styles.right;
      case "center":
        return styles.center;
      default:
        return styles.left;
    }
  })(alignment);
  return (
    <p
      className={`${styles.p} ${variationType} ${styleType} ${weigthType} ${alignmentType}`}
    >
      {children}
    </p>
  );
}

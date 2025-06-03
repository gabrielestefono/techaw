"use client";

import { PropsWithChildren } from "react";
import styles from "./ButtonFilled.module.scss";
import { BackgroundColorsType } from "@/constants/BackgroundColors";
import { ColorsType } from "@/constants/Colors";
import { HoverColorsType } from "@/constants/HoverColors";
import { BackgroundHoverColorsType } from "@/constants/BackgroundHoverColors";

interface ButtonFilledProps {
  onClick: () => void;
  backgroundColor: BackgroundColorsType;
  color: ColorsType;
  hoverColor: HoverColorsType;
  backgroundHoverColor: BackgroundHoverColorsType;
}

export default function ButtonFilled({
  onClick,
  children,
  backgroundColor,
  backgroundHoverColor,
  color,
  hoverColor,
}: Readonly<PropsWithChildren<ButtonFilledProps>>) {
  return (
    <button
      onClick={onClick}
      className={`${styles.buttonFilled} ${backgroundColor} ${color} ${hoverColor} ${backgroundHoverColor}`}
    >
      {children}
    </button>
  );
}

import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./AFilled.module.scss";
import { BackgroundColorsType } from "@/constants/BackgroundColors";
import { ColorsType } from "@/constants/Colors";
import { HoverColorsType } from "@/constants/HoverColors";
import { BackgroundHoverColorsType } from "@/constants/BackgroundHoverColors";

interface AFilledProps {
  href: string;
  backgroundColor: BackgroundColorsType;
  color: ColorsType;
  hoverColor: HoverColorsType;
  backgroundHoverColor: BackgroundHoverColorsType;
}

export default function AFilled({
  href,
  children,
  backgroundColor,
  backgroundHoverColor,
  color,
  hoverColor,
}: Readonly<PropsWithChildren<AFilledProps>>) {
  return (
    <Link
      href={href}
      className={`${styles.aFilled} ${backgroundColor} ${color} ${hoverColor} ${backgroundHoverColor}`}
    >
      {children}
    </Link>
  );
}

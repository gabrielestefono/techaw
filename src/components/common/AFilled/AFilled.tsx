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
  external?: boolean;
}

export default function AFilled({
  href,
  children,
  backgroundColor,
  backgroundHoverColor,
  color,
  hoverColor,
  external,
}: Readonly<PropsWithChildren<AFilledProps>>) {
  return (
    <Link
      href={href}
      className={`${styles.aFilled} ${backgroundColor} ${color} ${hoverColor} ${backgroundHoverColor}`}
      target={external ? "_blank" : "_self"}
    >
      {children}
    </Link>
  );
}

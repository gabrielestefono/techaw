import Link from "next/link";
import { PropsWithChildren } from "react";
import styles from "./AFilledOutlined.module.scss";
import { BackgroundColorsType } from "@/constants/BackgroundColors";
import { ColorsType } from "@/constants/Colors";
import { HoverColorsType } from "@/constants/HoverColors";
import { BackgroundHoverColorsType } from "@/constants/BackgroundHoverColors";
import { BorderColorType } from "@/constants/BorderColor";
import { BorderHoverColorType } from "@/constants/BorderHoverColor";

interface AFilledOutlinedProps {
  href: string;
  backgroundColor: BackgroundColorsType;
  color: ColorsType;
  hoverColor: HoverColorsType;
  backgroundHoverColor: BackgroundHoverColorsType;
  borderColor: BorderColorType;
  borderHoverColor: BorderHoverColorType;
}

export default function AFilledOutlined({
  href,
  children,
  backgroundColor,
  backgroundHoverColor,
  color,
  hoverColor,
  borderColor,
  borderHoverColor,
}: Readonly<PropsWithChildren<AFilledOutlinedProps>>) {
  return (
    <Link
      href={href}
      className={`${styles.aFilledOutlined} ${backgroundColor} ${color} ${hoverColor} ${backgroundHoverColor} ${borderColor} ${borderHoverColor}`}
    >
      {children}
    </Link>
  );
}

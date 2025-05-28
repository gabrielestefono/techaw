import { PropsWithChildren, ReactNode } from "react";
import styles from "./ButtonWithIconLeftFilledOutlined.module.scss";
import { OutlineColors } from "@/enums/OutlineColors.enum";
import { BackgroundColors } from "@/enums/BackgroundColors.enum";
import { Colors } from "@/enums/Colors.enum";

interface ButtonWithIconLeftFilledOutlinedProps {
  icon: ReactNode;
  outlineColor: OutlineColors;
  backgroundColor: BackgroundColors;
  color?: Colors;
}

export default function ButtonWithIconLeftFilledOutlined({
  icon,
  backgroundColor,
  outlineColor,
  children,
  color,
}: Readonly<PropsWithChildren<ButtonWithIconLeftFilledOutlinedProps>>) {
  return (
    <button
      className={`${
        styles.buttonWithIconLeftFilledOutlined
      } ${outlineColor} ${backgroundColor} ${color ?? ""}`}
    >
      {icon}
      {children}
    </button>
  );
}

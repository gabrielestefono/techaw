import { PropsWithChildren } from "react";
import styles from "./ButtonWithIconCenterFilledOutlined.module.scss";
import { OutlineColors } from "@/enums/OutlineColors.enum";
import { BackgroundColors } from "@/enums/BackgroundColors.enum";
import { Colors } from "@/enums/Colors.enum";

interface ButtonWithIconCenterFilledOutlinedProps {
  outlineColor: OutlineColors;
  backgroundColor: BackgroundColors;
  color?: Colors;
}

export default function ButtonWithIconCenterFilledOutlined({
  backgroundColor,
  outlineColor,
  children,
  color,
}: Readonly<PropsWithChildren<ButtonWithIconCenterFilledOutlinedProps>>) {
  return (
    <button
      className={`${
        styles.buttonWithIconCenterFilledOutlined
      } ${outlineColor} ${backgroundColor} ${color ?? ""}`}
    >
      {children}
    </button>
  );
}

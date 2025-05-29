import { PropsWithChildren } from "react";
import styles from "./ButtonWithIconCenterFilledOutlined.module.scss";
import { OutlineColorsType } from "@/constants/OutlineColors";
import { BackgroundColorsType } from "@/constants/BackgroundColors";
import { ColorsType } from "@/constants/Colors";
interface ButtonWithIconCenterFilledOutlinedProps {
  outlineColor: OutlineColorsType;
  backgroundColor: BackgroundColorsType;
  color?: ColorsType;
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

import { PropsWithChildren, ReactNode } from "react";
import styles from "./ButtonWithIconLeftFilledOutlined.module.scss";
import { OutlineColorsType } from "@/constants/OutlineColors";
import { BackgroundColorsType } from "@/constants/BackgroundColors";
import { ColorsType } from "@/constants/Colors";

interface ButtonWithIconLeftFilledOutlinedProps {
  icon: ReactNode;
  outlineColor: OutlineColorsType;
  backgroundColor: BackgroundColorsType;
  color?: ColorsType;
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

import { ReactNode } from "react";
import styles from "./ProductCategoryCardOutlined.module.scss";
import P from "@/components/common/P/P";
import AFilledOutlined from "@/components/common/AFilledOutlined/AFilledOutlined";
import { BackgroundColors } from "@/constants/BackgroundColors";
import { BackgroundHoverColors } from "@/constants/BackgroundHoverColors";
import { Colors } from "@/constants/Colors";
import { HoverColors } from "@/constants/HoverColors";
import { BorderColor } from "@/constants/BorderColor";
import { BorderHoverColor } from "@/constants/BorderHoverColor";

interface ProductCategoryCardOutlinedProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ProductCategoryCardOutlined({
  icon,
  title,
  description,
}: Readonly<ProductCategoryCardOutlinedProps>) {
  return (
    <div className={styles.productCategoryCardOutlined}>
      <div>{icon}</div>
      <h3>{title}</h3>
      <P variation="primary-centered">{description}</P>
      <AFilledOutlined
        backgroundColor={BackgroundColors.WHITE}
        backgroundHoverColor={BackgroundHoverColors.PRIMARY}
        color={Colors.PRIMARY}
        hoverColor={HoverColors.WHITE}
        borderColor={BorderColor.PRIMARY}
        borderHoverColor={BorderHoverColor.PRIMARY}
        href="/"
      >
        Ver Produtos
      </AFilledOutlined>
    </div>
  );
}

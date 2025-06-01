import styles from "./ServiceCardOutlined.module.scss";
import H3 from "@/components/common/H3/H3";
import P from "@/components/common/P/P";
import { ReactNode } from "react";

interface ServiceCardOutlinedProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ServiceCardOutlined({
  description,
  icon,
  title,
}: Readonly<ServiceCardOutlinedProps>) {
  return (
    <div className={styles.serviceCardOutlined}>
      <div>{icon}</div>
      <H3>{title}</H3>
      <P variation="primary" alignment="center">
        {description}
      </P>
    </div>
  );
}

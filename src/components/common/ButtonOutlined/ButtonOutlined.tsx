import { PropsWithChildren } from "react";
import styles from "./ButtonOutlined.module.scss";

export default function ButtonOutlined({
  children,
}: Readonly<PropsWithChildren>) {
  return <button className={styles.buttonOutlined}>{children}</button>;
}

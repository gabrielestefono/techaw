import { PropsWithChildren } from "react";
import style from "./H2.module.scss";

export default function H2({ children }: Readonly<PropsWithChildren>) {
  return <h2 className={style.h2}>{children}</h2>;
}

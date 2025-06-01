import { PropsWithChildren } from "react";
import style from "./H1.module.scss";

export default function H1({ children }: Readonly<PropsWithChildren>) {
  return <h1 className={style.h1}>{children}</h1>;
}

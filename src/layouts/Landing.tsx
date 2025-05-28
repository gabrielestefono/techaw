import Header from "@/components/layout/landing/Header/Header";
import { PropsWithChildren } from "react";

export default function Landing({ children }: Readonly<PropsWithChildren>) {
  return (
    <>
      <Header />
      {children}
      <div></div>
    </>
  );
}

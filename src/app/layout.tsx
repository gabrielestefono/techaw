import type { Metadata } from "next";
import "../styles/global.scss";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Haw Tec | Equipamentos e Serviços de Informática em Brasília",
  description:
    "Venda de computadores, suprimentos e manutenção com entrega gratuita em Brasília - DF. Soluções completas para empresas e usuários.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <head>
        <JsonLdLocalBusiness />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}

function JsonLdLocalBusiness() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ComputerStore",
    name: "Haw Tec",
    description:
      "Venda de equipamentos, suprimentos e manutenção de informática em Brasília - DF.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Brasília",
      addressRegion: "DF",
      addressCountry: "BR",
    },
    areaServed: "Brasília",
    logo: "https://seudominio.com.br/images/logo.png",
    telephone: "(61) 99999-9999",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

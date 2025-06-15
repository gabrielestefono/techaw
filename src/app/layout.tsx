import type { Metadata } from "next";
import "../styles/global.scss";
import { inter } from "./fonts";

export const metadata: Metadata = {
  title: "Haw Tec | Equipamentos e Manutenção de Informática em Brasília",
  description: "A Haw Tec oferece equipamentos, serviços, suprimentos e manutenção de informática em Brasília. Entrega gratuita para sua empresa ou residência.",
  alternates: {
    languages: {
      "pt-BR": "https://techaw.com.br",
      "x-default": "https://techaw.com.br",
    }
  },
  openGraph: {
    title: "Haw Tec | Equipamentos e Manutenção de Informática em Brasília",
    description: "Soluções em informática, manutenção, equipamentos e suprimentos para empresas e residências em Brasília. Entrega gratuita.",
    type: "website",
    url: "https://www.techaw.com.br",
    images: [
      {
        url: "https://www.techaw.com.br/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Haw Tec - Equipamentos e Manutenção de Informática em Brasília",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haw Tec | Equipamentos e Manutenção de Informática em Brasília",
    description: "Venda de equipamentos, manutenção e suprimentos de informática em Brasília. Entrega gratuita e suporte especializado.",
    images: ["https://www.techaw.com.br/images/logo.png"],
  },
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
        <link rel="canonical" href="https://www.hawtec.com.br/" />
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
    logo: "https://www.techaw.com.br/images/logo.png",
    telephone: "(61) 99999-9999",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

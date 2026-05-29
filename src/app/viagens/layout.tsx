import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viagens com Pastor Alexandre — Israel, Egito & Turquia",
  description:
    "Pague parcelado e realize seu sonho de pisar na Terra Santa. Viagens a Israel, Egito e às 7 Igrejas da Turquia com o Pastor Alexandre Mendes — historiador e pesquisador há 25+ anos. Aberto para todos.",
  openGraph: {
    title: "Viagens com Pastor Alexandre — Israel, Egito & Turquia",
    description:
      "Pague parcelado e realize seu sonho. Viagens a Israel & Egito, 7 Igrejas da Turquia e Israel com Pastor Alexandre Mendes. 25+ anos de experiência. Aberto para todos.",
    url: "https://pastoralexandre.com/viagens",
    siteName: "Pastor Alexandre Mendes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/israel/jerusalem-group-1.jpg",
        width: 1200,
        height: 630,
        alt: "Viagens com Pastor Alexandre — Israel, Egito e Turquia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viagens com Pastor Alexandre — Israel, Egito & Turquia",
    description:
      "Pague parcelado e realize seu sonho. Israel, Egito e 7 Igrejas da Turquia. 25+ anos de experiência. Aberto para todos.",
    images: ["/images/israel/jerusalem-group-1.jpg"],
  },
};

export default function ViagensLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

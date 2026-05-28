import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viagem a Israel — Pise Onde Jesus Pisou",
  description:
    "Somente 37 vagas! Viagem de 10 dias à Terra Santa com o Pastor Alexandre Mendes — historiador de Israel há 25+ anos. Batismo no Rio Jordão, Jerusalém, Mar da Galileia. Passagens com excelente preço. Aberto para todos.",
  openGraph: {
    title: "Viagem a Israel — Pise Onde Jesus Pisou",
    description:
      "Somente 37 vagas! 10 dias na Terra Santa com Pastor Alexandre Mendes. Batismo no Rio Jordão, Jerusalém, Galileia. 25+ anos de experiência. Aberto para todos — qualquer pessoa, de qualquer igreja. Reserve agora!",
    url: "https://pastoralexandre.com/israel",
    siteName: "Pastor Alexandre Mendes",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/images/israel/jordan-river-group.jpg",
        width: 1200,
        height: 630,
        alt: "Grupo do Pastor Alexandre no Rio Jordão — Viagem a Israel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viagem a Israel — Pise Onde Jesus Pisou | 37 Vagas",
    description:
      "10 dias na Terra Santa com Pastor Alexandre. Batismo no Jordão, Jerusalém, Galileia. Aberto para todos. Reserve agora!",
    images: ["/images/israel/jordan-river-group.jpg"],
  },
};

export default function IsraelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

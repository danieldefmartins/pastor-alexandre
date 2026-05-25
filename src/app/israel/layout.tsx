import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viagem a Israel",
  description:
    "Pise onde Jesus pisou. Conheça a Terra Santa com o Pastor Alexandre Mendes — historiador e pesquisador de Israel há 25+ anos. Batismo no Rio Jordão, Jerusalém, Mar da Galileia e muito mais. Vagas limitadas.",
};

export default function IsraelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

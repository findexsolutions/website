export interface Product {
  title?: string;
  descriptionTitle: string;
  descriptionText: string;
  image?: string;
  imageDark?: string;
  href?: string;
}

export const products: Product[] = [
  {
    descriptionTitle: "Alfred",
    descriptionText:
      "Bot de gestão financeira pessoal que organiza seus gastos, acompanha suas metas e ajuda você a cuidar do seu dinheiro de forma simples, direto no seu dia a dia.",
    image: "/alfred.png",
    imageDark: "/alfred-claro.png",
    href: "https://alfred.findexsolutions.com",
  },
  {
    title: "Em breve",
    descriptionTitle: "Produto 2",
    descriptionText: "Novo produto digital em desenvolvimento",
  },
  {
    title: "Em breve",
    descriptionTitle: "Produto 3",
    descriptionText: "Novo produto digital em desenvolvimento",
  },
];

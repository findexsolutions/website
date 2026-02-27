import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  CodeXml,
  ShoppingCart,
  LayoutTemplate,
  Ellipsis,
} from "lucide-react";

export interface Solution {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const solutions: Solution[] = [
  {
    icon: Bot,
    title: "Bots Inteligentes",
    description:
      "Bots independentes para envio automatizado de e-mails e mensagens no WhatsApp, otimizando sua comunicação.",
  },
  {
    icon: BrainCircuit,
    title: "Integração de IA",
    description:
      "Integração de Inteligência Artificial em projetos já existentes, agregando valor e automação aos seus sistemas.",
  },
  {
    icon: CodeXml,
    title: "Desenvolvimento com IA",
    description:
      "Desenvolvimento de software com IA integrada desde o início, criando soluções inteligentes do zero.",
  },
  {
    icon: ShoppingCart,
    title: "Softwares Sob Demanda",
    description:
      "E-commerces, sistemas de gestão e soluções personalizadas para as necessidades do seu negócio.",
  },
  {
    icon: LayoutTemplate,
    title: "Portfólios Profissionais",
    description:
      "Portfólios modernos e responsivos para profissionais e empresas que querem se destacar no digital.",
  },
  {
    icon: Ellipsis,
    title: "E Muito Mais",
    description:
      "Consulte-nos para descobrir como podemos transformar suas ideias em soluções tecnológicas sob medida.",
  },
];

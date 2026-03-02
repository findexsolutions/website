import type { LucideIcon } from "lucide-react";
import {
  Bot,
  BrainCircuit,
  ShoppingCart,
  LayoutTemplate,
  Ellipsis,
  Webhook,
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
      "Criamos bots para impulsionar o seu negócio, seja para envio de e-mails, mensagens no WhatsApp, ou até mesmo para automação de tarefas.",
  },
  {
    icon: BrainCircuit,
    title: "Integração de IA",
    description:
      "Integração de Inteligência Artificial em projetos já existentes, agregando valor e automação aos seus sistemas.",
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
    icon: Webhook,
    title: "APIs & Integrações",
    description:
      "Conectamos seus sistemas via APIs, webhooks e microsserviços, eliminando retrabalho e centralizando dados.",
  },
  {
    icon: Ellipsis,
    title: "E Muito Mais",
    description:
      "Consulte-nos para descobrir como podemos transformar suas ideias em soluções tecnológicas sob medida.",
  },
];

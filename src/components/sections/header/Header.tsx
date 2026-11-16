import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="flex justify-end px-6 py-2">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center mt-4 px-4 sm:mt-4 sm:px-6">
        <Logo size={250} showTitle />
      </div>
      <p className="mx-auto mt-4 max-w-2xl px-4 text-center font-exo2 text-base text-foreground/70 sm:mt-6 sm:px-6 sm:text-lg">
        Empresa especializada em entregar soluções tecnológicas para pessoas e
        empresas.
      </p>
      <div className="mt-4 flex items-center justify-center gap-4">
        <a
          href="https://wa.me/5561936182922"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="text-brand transition-opacity hover:opacity-70"
        >
          <FaWhatsapp size={24} />
        </a>
        <a
          href="mailto:admin@findexsolutions.com"
          aria-label="E-mail"
          className="text-brand transition-opacity hover:opacity-70"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
      <hr  className="mt-10"/>
    </>
  );
}

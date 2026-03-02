import { Copyright } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-10 border-t border-brand/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 px-4 py-6 text-center font-exo2 text-xs text-foreground/60 sm:flex-row sm:gap-3 sm:px-6 sm:text-sm">
        <span>2026</span>
        <Copyright className="h-4 w-4" />
        <span>Findex Solutions, todos os direitos reservados</span>
      </div>
    </footer>
  );
}

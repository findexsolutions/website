import { Logo } from "@/components/homepage/atoms/logo";
import { ThemeToggle } from "@/components/homepage/atoms/theme-toggle";

export default function Header() {
  return (
    <>
      <div className="flex justify-end px-6 py-2">
        <ThemeToggle />
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-center mt-24 px-6">
        <Logo size={250} showTitle />
      </div>
    </>
  );
}

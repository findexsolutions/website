"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-2 text-brand transition-colors"
    >
      <Sun size={20} className="hidden dark:block cursor-pointer" />
      <Moon size={20} className="dark:hidden cursor-pointer" />
    </button>
  );
}

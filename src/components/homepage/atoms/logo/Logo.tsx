"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { LogoProps } from "./types";

export default function Logo({ size = 80, showTitle = false }: LogoProps) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={isDark ? "/findexgolden.png" : "/findexblue.png"}
        alt="Findex Solutions"
        width={size}
        height={size}
      />
      {showTitle && (
        <h1
          className={`font-exo2 text-2xl font-bold tracking-[0.25em] ${
            isDark ? "text-fsgold" : "text-fsblue"
          }`}
        >
          Findex Solutions
        </h1>
      )}
    </div>
  );
}

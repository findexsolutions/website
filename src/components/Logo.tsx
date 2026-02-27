import Image from "next/image";

interface LogoProps {
  size?: number;
  showTitle?: boolean;
}

export default function Logo({ size = 100, showTitle = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src="/findexblue.png"
        alt="Findex Solutions"
        width={size}
        height={size}
        className="block max-w-[60vw] h-auto dark:hidden sm:max-w-none"
      />
      <Image
        src="/findexgolden.png"
        alt="Findex Solutions"
        width={size}
        height={size}
        className="hidden max-w-[60vw] h-auto dark:block sm:max-w-none"
      />
      {showTitle && (
        <h1 className="font-exo2 text-xl font-bold tracking-[0.15em] text-brand sm:text-2xl sm:tracking-[0.25em]">
          Findex Solutions
        </h1>
      )}
    </div>
  );
}

import Image from "next/image";

interface LogoProps {
  size?: number;
  showTitle?: boolean;
}

export default function Logo({ size = 100, showTitle = false }: LogoProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="relative max-h-[60vw] max-w-[60vw] sm:max-h-none sm:max-w-none"
        style={{ width: size, height: size }}
      >
        <Image
          src="/findexblue.png"
          alt="Findex Solutions"
          fill
          sizes={`(max-width: 640px) 60vw, ${size}px`}
          className="block object-contain dark:hidden"
        />
        <Image
          src="/findexgolden.png"
          alt="Findex Solutions"
          fill
          sizes={`(max-width: 640px) 60vw, ${size}px`}
          className="hidden object-contain dark:block"
        />
      </div>
      {showTitle && (
        <h1 className="font-exo2 text-xl font-bold tracking-[0.15em] text-brand sm:text-2xl sm:tracking-[0.25em]">
          Findex Solutions
        </h1>
      )}
    </div>
  );
}

import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Product } from "./productsData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const card = (
    <Card
      className={`group relative aspect-video overflow-hidden border-brand/15 bg-card sm:aspect-square ${
        product.href ? "cursor-pointer" : ""
      }`}
    >
        {product.image ? (
          <>
            {/* Fundo branco com leve tonalidade (modo claro) */}
            <div className="absolute inset-0 bg-[#EDF1F6] dark:hidden" />
            <Image
              src={product.image}
              alt={product.descriptionTitle}
              width={300}
              height={300}
              className={`absolute inset-0 m-auto h-3/4 w-3/4 object-contain p-2 transition-transform duration-300 group-hover:scale-105 ${
                product.imageDark ? "dark:hidden" : ""
              }`}
            />
            {product.imageDark && (
              <Image
                src={product.imageDark}
                alt={product.descriptionTitle}
                width={300}
                height={300}
                className="absolute inset-0 m-auto hidden h-3/4 w-3/4 object-contain p-2 transition-transform duration-300 group-hover:scale-105 dark:block"
              />
            )}
          </>
        ) : (
          <>
            <Image
              src="/logo-light.png"
              alt=""
              width={300}
              height={300}
              className="absolute inset-0 m-auto h-3/4 w-3/4 object-contain opacity-10 dark:hidden"
            />
            <Image
              src="/logo-dark.png"
              alt=""
              width={300}
              height={300}
              className="absolute inset-0 m-auto hidden h-3/4 w-3/4 object-contain opacity-10 dark:block"
            />
            {product.title && (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-exo2 text-xl font-bold text-brand sm:text-2xl">
                  {product.title}
                </span>
              </div>
            )}
          </>
        )}
    </Card>
  );

  return (
    <div>
      {product.href ? (
        <a href={product.href} target="_blank" rel="noopener noreferrer">
          {card}
        </a>
      ) : (
        card
      )}
      <div className="mt-3 text-center">
        <h3 className="font-exo2 text-sm font-semibold text-foreground">
          {product.descriptionTitle}
        </h3>
        <p className="mt-1 text-sm text-foreground/60">
          {product.descriptionText}
        </p>
      </div>
    </div>
  );
}

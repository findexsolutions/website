import Image from "next/image";
import { Card } from "@/components/ui/card";
import type { Product } from "./productsData";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div>
      <Card className="group relative aspect-video overflow-hidden border-brand/15 bg-card cursor-pointer sm:aspect-square">
        <Image
          src="/findexblue.png"
          alt=""
          width={300}
          height={300}
          className="absolute inset-0 m-auto h-3/4 w-3/4 object-contain opacity-10 dark:hidden"
        />
        <Image
          src="/findexgolden.png"
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
      </Card>
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

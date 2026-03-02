import ProductCard from "./ProductCard";
import { products } from "./productsData";

export default function Products() {
  return (
    <section id="products" className="mx-auto mt-10 max-w-7xl px-4 sm:mt-10 sm:px-6">
      <div className="mb-6 text-center sm:mb-10 lg:mb-14">
        <h2 className="font-exo2 text-2xl font-bold text-brand sm:text-3xl">
          Contrate Nossos Produtos
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
           Desenvolvidos para atender às necessidades do mercado, nossos produtos oferecem soluções inovadoras e eficientes para impulsionar o seu negócio. Explore nossas opções e escolha a melhor solução para você.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      <hr className="mt-10"/>
    </section>
  );
}

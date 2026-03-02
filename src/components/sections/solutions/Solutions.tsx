import { solutions } from "./solutionsData";
import SolutionCard from "./SolutionCard";

export default function Solutions() {
  return (
    <section id="solutions" className="mx-auto mt-16 max-w-7xl px-4 sm:mt-12 sm:px-6">
      <div className="mb-6 text-center sm:mb-10 lg:mb-14">
        <h2 className="font-exo2 text-2xl font-bold text-brand sm:text-3xl">
          Nossas Soluções
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-foreground/60 sm:text-base">
          Transformamos ideias em soluções tecnológicas eficientes para
          impulsionar o seu negócio.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
        {solutions.map((solution) => (
          <SolutionCard key={solution.title} solution={solution} />
        ))}
      </div>
      <hr className="mt-10" />
    </section>
  );
}

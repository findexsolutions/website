import Header from "@/components/sections/header/Header";
import Solutions from "@/components/sections/solutions/Solutions";
import Products from "@/components/sections/products/Products";
import Contact from "@/components/sections/contact/Contact";
import Maps from "@/components/sections/contact/Maps";

export default function Home() {
  return (
    <main>
        <Header />
        <Solutions />
        <Products />
        <section className="mx-auto mt-10 max-w-7xl px-4 sm:mt-16 sm:px-6">
          <div className="mx-auto max-w-2xl">
            <Contact />
          </div>
          <div className="mx-auto mt-8 max-w-2xl">
            <Maps />
          </div>
          <hr className="mt-10"/>
        </section>
    </main>
  );
}

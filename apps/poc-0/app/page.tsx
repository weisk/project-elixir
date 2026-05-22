import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductCard from "@/components/ProductCard";
import Section from "@/components/Section";

import { products } from "@/data/products";

export default function HomePage() {
  return (
    <main>
      <Header />

      <Hero />

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[var(--green-soft)] uppercase tracking-[0.2em] text-sm mb-4">
                Featured Collection
              </p>

              <h2 className="text-4xl font-bold">
                Premium CBD Selection
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                subtitle={product.subtitle}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Descubre la esencia más pura"
        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />

      <Footer />
    </main>
  );
}

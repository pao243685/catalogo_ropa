import { getProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  const products = getProducts();

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      <header style={{ backgroundColor: "var(--text-primary)", padding: "2rem 1.5rem", textAlign: "center", borderBottom: "4px solid var(--accent)" }}>
        <h1 style={{ color: "var(--bg)", fontSize: "clamp(1.5rem, 4vw, 2.5rem)", fontFamily: "Georgia, serif", letterSpacing: "0.05em", margin: 0, fontWeight: "normal" }}>
          Artículos de Piel &amp; Accesorios
        </h1>
        <p style={{ color: "var(--accent-light)", marginTop: "0.5rem", fontSize: "1rem", letterSpacing: "0.08em", fontStyle: "italic" }}>
          {products.length} productos disponibles
        </p>
      </header>

      <section style={{ maxWidth: "1300px", margin: "0 auto", padding: "2.5rem 1rem", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "1.5rem" }}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>

      <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-secondary)", fontSize: "0.8rem", borderTop: "1px solid var(--border)" }}>
        Todos los productos son nuevos · Piel genuina
      </footer>
    </main>
  );
}

import Link from "next/link";
import Image from "next/image";
import { getProductById, getProducts } from "@/lib/products";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getProducts().map((p) => ({ id: String(p.id) }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = getProductById(Number(id));
  if (!product) notFound();

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg)" }}>
      {/* Header */}
      <header
        style={{
          backgroundColor: "var(--text-primary)",
          padding: "1.2rem 1.5rem",
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          borderBottom: "4px solid var(--accent)",
        }}
      >
        <Link
          href="/"
          style={{
            color: "var(--accent-light)",
            textDecoration: "none",
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            whiteSpace: "nowrap",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Catálogo
        </Link>
        <h1
          style={{
            color: "var(--bg)",
            fontSize: "1rem",
            fontFamily: "Georgia, serif",
            margin: 0,
            fontWeight: "normal",
            flex: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {product.titulo}
        </h1>
      </header>

      {/* Content */}
      <div className="product-layout">
        {/* Image — large on detail page */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: "12px",
            overflow: "hidden",
            backgroundColor: "var(--border)",
            border: "1px solid var(--border)",
          }}
        >
          <Image
            src={`/images/${product.imagen}`}
            alt={product.titulo}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>

        {/* Details */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <span
            style={{
              backgroundColor: "var(--badge)",
              color: "var(--bg)",
              fontSize: "0.7rem",
              padding: "0.25rem 0.75rem",
              borderRadius: "20px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              alignSelf: "flex-start",
            }}
          >
            {product.condicion}
          </span>

          <h2
            style={{
              fontSize: "1.7rem",
              fontFamily: "Georgia, serif",
              color: "var(--text-primary)",
              margin: 0,
              lineHeight: 1.25,
              fontWeight: "normal",
            }}
          >
            {product.titulo}
          </h2>

          <p
            style={{
              fontSize: "2rem",
              color: "var(--accent)",
              fontWeight: "700",
              margin: 0,
              fontFamily: "Georgia, serif",
            }}
          >
            ${product.precio.toLocaleString("es-MX")} MXN
          </p>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
            <p
              style={{
                fontSize: "0.7rem",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "var(--text-secondary)",
                marginBottom: "0.6rem",
                fontFamily: "sans-serif",
              }}
            >
              Descripción
            </p>
            <p style={{ color: "var(--text-primary)", lineHeight: 1.75, fontSize: "1rem", margin: 0 }}>
              {product.descripcion}
            </p>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <Row label="Categoría" value={product.categoria} />
            <Row label="Condición" value={product.condicion} />
          </div>
        </div>
      </div>

      <footer style={{ textAlign: "center", padding: "2rem", color: "var(--text-secondary)", fontSize: "0.8rem", borderTop: "1px solid var(--border)", marginTop: "3rem" }}>
        Todos los productos son nuevos · Piel genuina
      </footer>
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", fontSize: "0.9rem" }}>
      <span style={{ color: "var(--text-secondary)", minWidth: "85px" }}>{label}:</span>
      <span style={{ color: "var(--text-primary)", fontWeight: "500" }}>{value}</span>
    </div>
  );
}

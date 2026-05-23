"use client";
import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/producto/${product.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <article
        style={{
          backgroundColor: "var(--bg-card)",
          border: "1px solid var(--border)",
          borderRadius: "10px",
          overflow: "hidden",
          transition: "transform 0.2s, box-shadow 0.2s",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(61,43,31,0.15)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "none";
        }}
      >
        <div style={{ width: "100%", aspectRatio: "1 / 1", position: "relative", backgroundColor: "var(--border)", overflow: "hidden" }}>
          <Image
            src={`/images/${product.imagen}`}
            alt={product.titulo}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div style={{ padding: "0.85rem 1rem 1rem" }}>
          <h2 style={{ fontSize: "0.9rem", fontWeight: "600", color: "var(--text-primary)", margin: "0 0 0.5rem", lineHeight: 1.3, fontFamily: "Georgia, serif" }}>
            {product.titulo}
          </h2>
          <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--accent)", margin: 0, fontFamily: "Georgia, serif" }}>
            ${product.precio.toLocaleString("es-MX")} MXN
          </p>
        </div>
      </article>
    </Link>
  );
}

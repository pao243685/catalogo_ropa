"use client";

import { useState, useMemo } from "react";
import { Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

type TipoFilter = "todos" | Product["tipo"];
type GeneroFilter = "todos" | Product["genero"];

const TIPO_LABELS: Record<string, string> = {
  todos: "Todos",
  bolsa: "Bolsas",
  cartera: "Carteras",
  monedero: "Monederos",
  perfume: "Perfumes",
  vestido: "Vestidos",
  labial: "Labiales",
  otro: "Otro",
};

const PRECIO_RANGES = [
  { label: "Todos los precios", min: 0, max: Infinity },
  { label: "Hasta $100",       min: 0, max: 100 },
  { label: "$100 – $250",      min: 100, max: 250 },
  { label: "$250 – $400",      min: 250, max: 400 },
  { label: "Más de $400",      min: 400, max: Infinity },
];

export default function CatalogoClient({ products }: { products: Product[] }) {
  const [tipo, setTipo] = useState<TipoFilter>("todos");
  const [genero, setGenero] = useState<GeneroFilter>("todos");
  const [precioIdx, setPrecioIdx] = useState(0);

  // Derive available tipos from actual products
  const tiposDisponibles = useMemo(() => {
    const set = new Set(products.map((p) => p.tipo));
    return ["todos", ...Array.from(set)] as TipoFilter[];
  }, [products]);

  const filtered = useMemo(() => {
    const { min, max } = PRECIO_RANGES[precioIdx];
    return products.filter((p) => {
      if (tipo !== "todos" && p.tipo !== tipo) return false;
      if (genero !== "todos" && p.genero !== genero) return false;
      if (p.precio < min || p.precio > max) return false;
      return true;
    });
  }, [products, tipo, genero, precioIdx]);

  const activeFilters = (tipo !== "todos" ? 1 : 0) + (genero !== "todos" ? 1 : 0) + (precioIdx !== 0 ? 1 : 0);

  function resetAll() {
    setTipo("todos");
    setGenero("todos");
    setPrecioIdx(0);
  }

  return (
    <>
      {/* ── Filter bar ── */}
      <div
        style={{
          backgroundColor: "var(--bg-card)",
          borderBottom: "1px solid var(--border)",
          padding: "1rem 1.5rem",
          position: "sticky",
          top: 0,
          zIndex: 10,
          boxShadow: "0 2px 8px rgba(61,43,31,0.07)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
          }}
        >
          {/* Tipo */}
          <FilterGroup label="Tipo">
            {tiposDisponibles.map((t) => (
              <Chip key={t} active={tipo === t} onClick={() => setTipo(t)}>
                {TIPO_LABELS[t] ?? t}
              </Chip>
            ))}
          </FilterGroup>

          {/* Género */}
          <FilterGroup label="Para">
            {(["todos", "dama", "caballero", "unisex"] as GeneroFilter[]).map((g) => (
              <Chip key={g} active={genero === g} onClick={() => setGenero(g)}>
                {g === "todos" ? "Todos" : g.charAt(0).toUpperCase() + g.slice(1)}
              </Chip>
            ))}
          </FilterGroup>

          {/* Precio */}
          <FilterGroup label="Precio">
            {PRECIO_RANGES.map((r, i) => (
              <Chip key={i} active={precioIdx === i} onClick={() => setPrecioIdx(i)}>
                {r.label}
              </Chip>
            ))}
          </FilterGroup>

          {/* Reset */}
          {activeFilters > 0 && (
            <button
              onClick={resetAll}
              style={{
                marginLeft: "auto",
                background: "none",
                border: "1px solid var(--accent)",
                color: "var(--accent)",
                borderRadius: "20px",
                padding: "0.3rem 0.85rem",
                fontSize: "0.78rem",
                cursor: "pointer",
                fontFamily: "Georgia, serif",
                whiteSpace: "nowrap",
              }}
            >
              Limpiar ({activeFilters})
            </button>
          )}
        </div>
      </div>

      {/* ── Results count ── */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "1.25rem 1rem 0",
          color: "var(--text-secondary)",
          fontSize: "0.82rem",
          fontStyle: "italic",
        }}
      >
        {filtered.length === products.length
          ? `${products.length} productos`
          : `${filtered.length} de ${products.length} productos`}
      </div>

      {/* ── Grid ── */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "4rem 1rem",
            color: "var(--text-secondary)",
            fontStyle: "italic",
          }}
        >
          No hay productos con esos filtros.
          <br />
          <button
            onClick={resetAll}
            style={{
              marginTop: "1rem",
              background: "none",
              border: "none",
              color: "var(--accent)",
              cursor: "pointer",
              textDecoration: "underline",
              fontSize: "0.9rem",
            }}
          >
            Ver todos
          </button>
        </div>
      ) : (
        <section
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            padding: "1.25rem 1rem 3rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", flexWrap: "wrap" }}>
      <span
        style={{
          fontSize: "0.7rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: "var(--text-secondary)",
          fontFamily: "sans-serif",
          whiteSpace: "nowrap",
        }}
      >
        {label}:
      </span>
      {children}
    </div>
  );
}

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "0.3rem 0.75rem",
        borderRadius: "20px",
        border: active ? "1.5px solid var(--accent)" : "1.5px solid var(--border)",
        backgroundColor: active ? "var(--accent)" : "transparent",
        color: active ? "var(--bg)" : "var(--text-primary)",
        fontSize: "0.78rem",
        cursor: "pointer",
        fontFamily: "Georgia, serif",
        transition: "all 0.15s",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}
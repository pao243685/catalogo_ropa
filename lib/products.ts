export interface Product {
  id: number;
  imagen: string;
  titulo: string;
  precio: number;
  descripcion: string;
  categoria: string;
  condicion: string;
}

const products: Product[] = [
  { id: 1, imagen: "WhatsApp Image 2026-05-18 at 11.25.36 AM.jpeg", titulo: "Perfume caballero", precio: 200, descripcion: "Perfume para caballero.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 2, imagen: "WhatsApp Image 2026-05-18 at 11.28.51 AM.jpeg", titulo: "Cartera de piel para caballero", precio: 300, descripcion: "Cartera de piel 100% genuina para caballero. Elegante y duradera.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 3, imagen: "WhatsApp Image 2026-05-18 at 11.29.38 AM.jpeg", titulo: "Cartera de piel para caballero", precio: 300, descripcion: "Cartera de piel 100% genuina para caballero. Elegante y duradera.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 4, imagen: "WhatsApp Image 2026-05-18 at 11.30.33 AM.jpeg", titulo: "Cartera de piel para caballero", precio: 350, descripcion: "Cartera de piel para caballero. 100% piel genuina.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 5, imagen: "WhatsApp Image 2026-05-18 at 11.43.36 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 6, imagen: "WhatsApp Image 2026-05-18 at 11.45.16 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 7, imagen: "WhatsApp Image 2026-05-18 at 11.46.29 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 8, imagen: "WhatsApp Image 2026-05-18 at 11.47.54 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 9, imagen: "WhatsApp Image 2026-05-18 at 11.49.59 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 10, imagen: "WhatsApp Image 2026-05-18 at 11.51.18 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 11, imagen: "WhatsApp Image 2026-05-18 at 11.53.05 AM.jpeg", titulo: "Bolsa de piel para dama", precio: 150, descripcion: "Bolsa de piel para dama. Medidas: 22 cms x 16 cms. Práctica y elegante.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 12, imagen: "WhatsApp Image 2026-05-18 at 11.58.55 AM.jpeg", titulo: "Monedero llavero de piel dama", precio: 30, descripcion: "Monedero llavero de piel para dama. Medidas: 11 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 13, imagen: "WhatsApp Image 2026-05-18 at 12.00.26 PM.jpeg", titulo: "Monedero llavero piel", precio: 30, descripcion: "Monedero llavero de piel. Medidas: 11 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 14, imagen: "WhatsApp Image 2026-05-18 at 12.04.10 PM.jpeg", titulo: "Monedero de piel dama", precio: 30, descripcion: "Monedero de piel para dama. Medidas: 8 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 15, imagen: "WhatsApp Image 2026-05-18 at 12.07.28 PM.jpeg", titulo: "Monedero llavero de piel", precio: 30, descripcion: "Monedero llavero de piel. Medidas: 8 cms x 7 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 16, imagen: "WhatsApp Image 2026-05-18 at 12.10.36 PM.jpeg", titulo: "Monedero de piel dama", precio: 30, descripcion: "Monedero de piel para dama. Medidas: 8 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 17, imagen: "WhatsApp Image 2026-05-18 at 12.13.59 PM.jpeg", titulo: "Monedero de piel dama", precio: 30, descripcion: "Monedero de piel para dama. Medidas: 8 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 18, imagen: "WhatsApp Image 2026-05-18 at 12.15.33 PM.jpeg", titulo: "Monedero de piel dama", precio: 30, descripcion: "Monedero de piel para dama. Medidas: 8 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 19, imagen: "WhatsApp Image 2026-05-18 at 12.19.42 PM.jpeg", titulo: "Monedero llavero de piel dama", precio: 50, descripcion: "Monedero llavero de piel para dama. Medidas: 10 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 20, imagen: "WhatsApp Image 2026-05-18 at 12.25.35 PM.jpeg", titulo: "Monedero de piel bordado dama", precio: 200, descripcion: "Monedero de piel con diseño bordado para dama. Medidas: 12 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 21, imagen: "WhatsApp Image 2026-05-18 at 12.28.25 PM.jpeg", titulo: "Monedero de piel bordado dama", precio: 200, descripcion: "Monedero de piel con diseño bordado para dama. Medidas: 12 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 22, imagen: "WhatsApp Image 2026-05-18 at 12.33.01 PM.jpeg", titulo: "Monedero de piel dama", precio: 200, descripcion: "Monedero de piel para dama. Medidas: 12 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 23, imagen: "WhatsApp Image 2026-05-18 at 12.39.58 PM.jpeg", titulo: "Monedero de piel bordado dama", precio: 200, descripcion: "Monedero de piel con diseño bordado para dama. Medidas: 12 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 24, imagen: "WhatsApp Image 2026-05-18 at 12.48.56 PM.jpeg", titulo: "Cartera piel dama", precio: 300, descripcion: "Cartera de piel para dama. Medidas: 18 cms x 11 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 25, imagen: "WhatsApp Image 2026-05-18 at 12.51.20 PM.jpeg", titulo: "Cartera de piel dama", precio: 300, descripcion: "Cartera de piel para dama. Medidas: 18 cms x 11 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 26, imagen: "WhatsApp Image 2026-05-18 at 12.52.38 PM.jpeg", titulo: "Cartera de piel dama", precio: 300, descripcion: "Cartera de piel para dama. Medidas: 18 cms x 11 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 27, imagen: "WhatsApp Image 2026-05-18 at 12.54.41 PM.jpeg", titulo: "Cartera de piel dama", precio: 300, descripcion: "Cartera de piel para dama. Medidas: 18 cms x 11 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 28, imagen: "WhatsApp Image 2026-05-18 at 1.00.51 PM.jpeg", titulo: "Monedero de piel dama", precio: 80, descripcion: "Monedero de piel para dama. Medidas: 15 cms x 10 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 29, imagen: "WhatsApp Image 2026-05-18 at 1.09.39 PM.jpeg", titulo: "Labial indeleble máxima duración", precio: 35, descripcion: "Labial indeleble de máxima duración. Precio por pieza.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 30, imagen: "WhatsApp Image 2026-05-18 at 1.15.28 PM.jpeg", titulo: "Monedero de piel dama", precio: 250, descripcion: "Monedero de piel para dama. Medidas: 11 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 31, imagen: "WhatsApp Image 2026-05-18 at 1.17.26 PM.jpeg", titulo: "Monedero de piel dama", precio: 250, descripcion: "Monedero de piel para dama. Medidas: 11 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 32, imagen: "WhatsApp Image 2026-05-18 at 1.18.23 PM.jpeg", titulo: "Monedero de piel con charol dama", precio: 250, descripcion: "Monedero de piel con charol para dama. Medidas: 11 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 33, imagen: "WhatsApp Image 2026-05-18 at 1.19.30 PM.jpeg", titulo: "Monedero de piel con charol dama", precio: 250, descripcion: "Monedero de piel con charol para dama. Medidas: 11 cms x 8 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 34, imagen: "WhatsApp Image 2026-05-18 at 1.20.33 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 17 cms x 15 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 35, imagen: "WhatsApp Image 2026-05-18 at 1.27.11 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 17 cms x 15 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 36, imagen: "WhatsApp Image 2026-05-18 at 1.30.57 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 18 cms x 16 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 37, imagen: "WhatsApp Image 2026-05-18 at 1.33.02 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 18 cms x 16 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 38, imagen: "WhatsApp Image 2026-05-18 at 1.34.53 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 18 cms x 16 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 39, imagen: "WhatsApp Image 2026-05-18 at 1.38.12 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 18 cms x 16 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 40, imagen: "WhatsApp Image 2026-05-18 at 1.39.55 PM.jpeg", titulo: "Bolsa de piel dama", precio: 100, descripcion: "Bolsa de piel para dama. Medidas: 18 cms x 16 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 41, imagen: "WhatsApp Image 2026-05-18 at 1.49.34 PM.jpeg", titulo: "Bolsa de piel para caballero gris oxford", precio: 260, descripcion: "Bolsa de piel para caballero color gris oxford. Medidas: 20 cms x 12 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 42, imagen: "WhatsApp Image 2026-05-18 at 2.01.12 PM.jpeg", titulo: "Bolsa de piel amplia para caballero", precio: 320, descripcion: "Bolsa de piel para caballero amplia. Medidas: 20 cms x 14 cms. x 10 de ancho", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 43, imagen: "WhatsApp Image 2026-05-18 at 2.05.00 PM.jpeg", titulo: "Bolsa de piel dama", precio: 250, descripcion: "Bolsa de piel para dama. Medidas: 25 cms x 20 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 44, imagen: "WhatsApp Image 2026-05-18 at 2.05.51 PM.jpeg", titulo: "Bolsa de piel dama", precio: 250, descripcion: "Bolsa de piel para dama. Medidas: 25 cms x 20 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 45, imagen: "WhatsApp Image 2026-05-18 at 2.13.45 PM.jpeg", titulo: "Bolsa de piel dama", precio: 420, descripcion: "Bolsa de piel para dama. Medidas: 33 cms x 23 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 46, imagen: "WhatsApp Image 2026-05-18 at 2.18.14 PM.jpeg", titulo: "Bolsa de piel dama", precio: 500, descripcion: "Bolsa de piel para dama. Medidas: 30 cms x 20 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 47, imagen: "WhatsApp Image 2026-05-18 at 2.23.18 PM.jpeg", titulo: "Vestido fresco para el verano unitalla", precio: 130, descripcion: "Vestido fresco y ligero para el verano. Unitalla. Colores vibrantes.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 48, imagen: "WhatsApp Image 2026-05-18 at 2.25.43 PM.jpeg", titulo: "Bolsa de piel dama", precio: 500, descripcion: "Bolsa de piel para dama. Medidas: 30 cms x 20 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
  { id: 49, imagen: "WhatsApp Image 2026-05-18 at 3.48.20 PM.jpeg", titulo: "Monedero de piel dama", precio: 50, descripcion: "Monedero de piel para dama. Medidas: 12 cms x 9 cms.", categoria: "Ropa y accesorios", condicion: "Nuevo" },
];

export function getProducts(): Product[] {
  return products;
}

export function getProductById(id: number): Product | undefined {
  return products.find((p) => p.id === id);
}

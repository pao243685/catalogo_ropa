# Catálogo de Productos

## Cómo agregar tus fotos

1. Crea la carpeta `public/images/` en este proyecto
2. Copia tus fotos de WhatsApp ahí (con los mismos nombres exactos)
3. En `app/page.tsx` y `app/producto/[id]/page.tsx`, reemplaza el bloque `<div>` placeholder por:

```jsx
<Image
  src={`/images/${product.imagen}`}
  alt={product.titulo}
  fill
  style={{ objectFit: "cover" }}
/>
```

## Deploy en Vercel (gratis)

1. Sube esta carpeta a un repositorio en GitHub
2. Ve a https://vercel.com → "Add New Project"
3. Conecta tu repo de GitHub
4. Vercel detecta Next.js automáticamente → clic en "Deploy"
5. En ~1 minuto tienes tu link 🎉

## Desarrollo local

```bash
npm install
npm run dev
# Abre http://localhost:3000
```

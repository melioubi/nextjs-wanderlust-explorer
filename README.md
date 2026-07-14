# Wanderlust Explorer 🌍

Una aplicación interactiva para descubrir y guardar experiencias únicas alrededor del mundo. Construida con Next.js 16, TypeScript, Tailwind CSS y el App Router.

## Design References

Estas son las interfaces reales que inspiraron el diseño de esta aplicación:

1. **Airbnb Experiences** — [airbnb.com/experiences](https://www.airbnb.com/experiences)
   - Cuadrícula de tarjetas con imágenes grandes, precios claros y sistema de reseñas con estrellas. Inspiró el diseño de `ExperienceCard` y la disposición en grid del explorador.

2. **GetYourGuide** — [getyourguide.com](https://www.getyourguide.com)
   - Barra de búsqueda prominente, filtros por categoría y destino, y páginas de detalle con sidebar de precios. Inspiró el sistema de filtros combinados y la estructura de la página de detalle.

3. **Dribbble (Travel UI Collection)** — [dribbble.com/search/travel-ui](https://dribbble.com/search/travel-ui)
   - Varios conceptos de UI de viajes con hero sections de pantalla completa, navegación sticky con backdrop blur, y badges de categoría sobre imágenes. Inspiró la estética general, la navbar y la página de inicio.

## Pages

- **`/`** — Home: Hero section con CTA a explorer + categorías destacadas
- **`/experiences`** — Explorer: Grid de 100 tarjetas con búsqueda y filtros (categoría + destino) vía URL query params
- **`/experiences/[id]`** — Detail: Información completa de una experiencia
- **`/favorites`** — Favorites: Experiencias marcadas con ❤️
- **`/profile`** — Profile: Perfil simulado con estadísticas

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **ESLint**

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

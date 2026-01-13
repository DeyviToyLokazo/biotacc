export const products = [
  // Granulados (4 productos)
  {
    id: "granulado-1",
    name: "Fertilizante Granulado Premium",
    category: "Granulados",
    price: 85.0,
    image: "/images/products/granulado-1.png",
    description:
      "Fertilizante granulado de liberación lenta para cultivos extensivos.",
    pdf: "/documents/ficha-tecnica.pdf",
  },
  {
    id: "granulado-2",
    name: "Bio-Suelo Granular",
    category: "Granulados",
    price: 90.0,
    image: "/images/products/granulado-2.png",
    description: "Mejorador de suelo granulado con materia orgánica.",
    pdf: "/documents/ficha-tecnica.pdf",
  },
  {
    id: "granulado-3",
    name: "Nitro-Organik",
    category: "Granulados",
    price: 75.0,
    image: "/images/products/granulado-3.png",
    description: "Fuente de nitrógeno orgánico en presentación granulada.",
    pdf: "/documents/ficha-tecnica.pdf",
  },
  {
    id: "granulado-4",
    name: "Fosfo-Active",
    category: "Granulados",
    price: 88.0,
    image: "/images/products/granulado-4.png",
    description: "Alto contenido de fósforo asimilable.",
    pdf: "/documents/ficha-tecnica.pdf",
  },

  // Foliares (12 productos)
  ...Array.from({ length: 12 }).map((_, i) => ({
    id: `foliar-${i + 1}`,
    name: `Foliar Orgánico ${i + 1}`,
    category: "Foliares",
    price: 45.0 + i * 2,
    image: `/images/products/foliar-${i + 1}.png`,
    description: "Nutrición foliar líquida de rápida absorción.",
    pdf: "/documents/ficha-tecnica.pdf",
  })),
];

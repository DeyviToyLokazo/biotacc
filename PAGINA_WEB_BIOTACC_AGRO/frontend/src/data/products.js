export const CATEGORY_STRUCTURE = [
  {
    name: "Fertilizantes",
    subcategories: [
      "Biotacc suelo",
      "Biosilix",
      "Nitrorganico",
      "Silmag-ok"
    ]
  },
  {
    name: "Foliares",
    subcategories: [
      "Bioestimulantes",
      "Correctores nutricionales",
      "Protección para cultivos",
      "Complementos"
    ]
  }
];

export const products = [
  // Fertilizantes Orgánicos - Suelo / Edáficos (4 productos)
  {
    id: "granulado-2",
    name: "BIOTACC SUELO",
    category: "Fertilizantes",
    subcategory: "Biotacc suelo",
    price: 90.0,
    image: "/images/products/granulado-2.png",
    description:
      "Fertilizante orgánico edáfico con fósforo, calcio, silicio y materia orgánica para el mejoramiento integral del suelo.",
    benefits: [
      "Aporta fósforo, calcio, silicio y materia orgánica.",
      "Permite una mejor estructura del suelo.",
      "Favorece el desarrollo radicular.",
      "Incrementa la producción en cantidad y calidad de todos los cultivos.",
    ],
    pdf: "/documents/FICHA TECNICA BIOTACC SUELO.pdf",
  },
  {
    id: "granulado-3",
    name: "BIOSILIX",
    category: "Fertilizantes",
    subcategory: "Biosilix",
    price: 75.0,
    image: "/images/products/BIOSILIX.webp",
    description:
      "Fertilizante edáfico a base de silicio que mejora la estructura del suelo y fortalece las plantas.",
    benefits: [
      "Mejora la estructura del suelo.",
      "Incrementa la resistencia de las plantas.",
      "Favorece el desarrollo radicular.",
      "Contribuye a cultivos más vigorosos y productivos.",
    ],
    pdf: "/documents/FICHA TECNICA BIOSILIX.pdf",
  },
  {
    id: "granulado-4",
    name: "NITRORGÁNICO ESSENTIAL MICROMIX",
    category: "Fertilizantes",
    subcategory: "Nitrorganico",
    price: 88.0,
    image: "/images/products/granulado-4.png",
    description:
      "Fertilizante orgánico granulado con microelementos esenciales para una nutrición uniforme y eficiente del suelo.",
    benefits: [
      "Mejora la fertilidad del suelo.",
      "Favorece el desarrollo radicular.",
      "Incrementa la disponibilidad de nutrientes.",
      "Asegura una nutrición uniforme y eficiente.",
    ],
    pdf: "/documents/FICHA TECNICA NITRORGANICO.pdf",
  },
  {
    id: "granulado-1",
    name: "SILMAG - PK",
    category: "Fertilizantes",
    subcategory: "Silmag-ok",
    price: 85.0,
    image: "/images/products/granulado-1.png",
    description:
      "Fertilizante granulado con silicio, magnesio, fósforo y potasio para estimular el crecimiento radicular y mejorar la calidad de frutos.",
    benefits: [
      "Estimula el crecimiento radicular.",
      "Incrementa el tamaño y peso de granos y frutos.",
      "Mejora la resistencia a plagas y enfermedades.",
      "Promueve una mejor utilización de N y P.",
    ],
    pdf: "/documents/FICHA TECNICA SILMAG PK.pdf",
  },

  // Foliares - Bioestimulantes (8 productos)
  {
    id: "foliar-10",
    name: "AMINO PLUS",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/AMINOPLUS.webp",
    description:
      "Bioestimulante foliar a base de aminoácidos que estimula el crecimiento vegetativo y mejora el cuajado de frutos.",
    benefits: [
      "Estimula el crecimiento vegetativo.",
      "Mejora el cuajado y crecimiento de frutos.",
      "Aumenta brotes y raíces.",
      "Desintoxica y reduce el estrés.",
    ],
    pdf: "/documents/FT AMINO PLUS.pdf",
  },
  {
    id: "foliar-14",
    name: "BIOSILIX",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/BIOSILIX.webp",
    description:
      "Bioestimulante vegetal a base de silicio que fortalece las plantas y mejora su resistencia a factores adversos.",
    benefits: [
      "Mayor resistencia a factores adversos.",
      "Mejora la absorción de nutrientes.",
      "Plantas más fuertes y saludables.",
      "Cultivos más productivos y resilientes.",
    ],
    pdf: "/documents/FT BIOLSILIX FOLIAR.pdf",
  },
  {
    id: "foliar-3",
    name: "CITOQ TACC",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/CITOQ TACC.webp",
    description:
      "Bioestimulante foliar con citoquininas que promueve la división celular y mejora el tamaño y calibre de frutos.",
    benefits: [
      "Promueve la división celular.",
      "Mayor tamaño y calibre de frutos.",
      "Resistencia al estrés.",
      "Uniformidad y mejor calidad.",
    ],
    pdf: "/documents/FT CITOQ TACC.pdf",
  },
  {
    id: "foliar-impulsor",
    name: "IMPULSOR",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/IMPULSOR.webp",
    description:
      "Bioestimulante foliar que estimula el crecimiento, la floración y la fructificación para mayor producción.",
    benefits: [
      "Estimula el crecimiento.",
      "Mayor floración y fructificación.",
      "Resistencia al estrés.",
      "Mejor absorción de nutrientes.",
    ],
    pdf: "/documents/FT IMPULSOR.pdf",
  },
  {
    id: "foliar-4",
    name: "RUTACC MAX",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/RUTACC-MAX.webp",
    description:
      "Enraizante foliar que estimula la formación de raíces y mejora el vigor vegetativo de los cultivos.",
    benefits: [
      "Estimula la formación de raíces.",
      "Mayor crecimiento y vigor vegetativo.",
      "Mejora la absorción de nutrientes.",
      "Mayor producción y calidad.",
    ],
    pdf: "/documents/FT RUTACC MAX.pdf",
  },
  {
    id: "foliar-5",
    name: "SPIGAL",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/SPIGAL.webp",
    description:
      "Bioestimulante foliar que estimula el metabolismo y favorece la floración y fecundación de los cultivos.",
    benefits: [
      "Estimula el metabolismo.",
      "Mejora el desarrollo vegetativo.",
      "Favorece la floración y fecundación.",
      "Mayor producción y calidad.",
    ],
    pdf: "/documents/FT SPIGAL FOLIAR.pdf",
  },
  {
    id: "foliar-6",
    name: "STIMULUS",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/STIMULUS.webp",
    description:
      "Bioestimulante foliar que estimula el crecimiento vegetativo, la floración y la fructificación.",
    benefits: [
      "Estimula el crecimiento vegetativo.",
      "Promueve la floración y fructificación.",
      "Mayor resistencia al estrés.",
      "Favorece el desarrollo de raíces.",
    ],
    pdf: "/documents/FT STIMULUS.pdf",
  },
  {
    id: "foliar-7",
    name: "BIOTACC TRIHORMONAL",
    category: "Foliares",
    subcategory: "Bioestimulantes",
    price: 45.0,
    image: "/images/products/TRIHORMONAL.webp",
    description:
      "Regulador de crecimiento foliar con tres hormonas vegetales que estimulan la división celular y el brotamiento.",
    benefits: [
      "Estimula la división celular.",
      "Favorece el brotamiento de yemas.",
      "Promueve el desarrollo radicular.",
      "Mayor producción y calidad.",
    ],
    pdf: "/documents/FT TRIHORMONAL.pdf",
  },

  // Foliares - Correctores Nutricionales (8 productos)
  {
    id: "foliar-15",
    name: "FÓSFORO 45%",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/FOSFORO-45_.webp",
    description:
      "Corrector nutricional foliar con alto contenido de fósforo que estimula la floración y mejora la calidad de frutos.",
    benefits: [
      "Estimula la floración.",
      "Mejora el cuajado.",
      "Mayores rendimientos.",
      "Frutos de mejor calidad.",
    ],
    pdf: "/documents/FT FOSFORO 45%.pdf",
  },
  {
    id: "foliar-9",
    name: "POTASIO 0-0-40",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/POTASIO-0-0-40.webp",
    description:
      "Corrector nutricional foliar con alto contenido de potasio que mejora el desarrollo y maduración de frutos.",
    benefits: [
      "Estimula la floración.",
      "Mejora el cuajado de frutos.",
      "Mayor desarrollo y maduración.",
      "Previene deficiencias nutricionales.",
    ],
    pdf: "/documents/FT POTASIO 0-0-40.pdf",
  },
  {
    id: "foliar-12",
    name: "COMBO PK (28/45)",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/COMBO PK 28_45.webp",
    description:
      "Corrector nutricional foliar combinado de fósforo y potasio para una mayor floración y mejor calidad de frutos.",
    benefits: [
      "Más floración.",
      "Mejor cuajado.",
      "Frutos de mayor calidad.",
      "Cultivos más rentables.",
    ],
    pdf: "/documents/FT COMBO PK 28-45.pdf",
  },
  {
    id: "foliar-calcio-boro-zinc",
    name: "CALCIO-BORO-ZINC",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/CALCIO-BORO-ZINC.webp",
    description:
      "Corrector nutricional foliar triple que mejora la floración, el cuajado y el desarrollo vegetativo.",
    benefits: [
      "Más floración.",
      "Mejor cuajado de frutos.",
      "Desarrollo vegetativo saludable.",
      "Plantas más resistentes.",
    ],
    pdf: "/documents/FT CALCIO-BORO-ZINC.pdf",
  },
  {
    id: "foliar-11",
    name: "BIOMAG",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/BIOMAG.webp",
    description:
      "Corrector nutricional foliar a base de magnesio que mejora la síntesis de clorofila y la calidad de los cultivos.",
    benefits: [
      "Síntesis de clorofila más eficiente.",
      "Mejora la maduración y calidad.",
      "Previene desórdenes fisiológicos.",
      "Estimula el desarrollo radicular.",
    ],
    pdf: "/documents/FT BIOMAG.pdf",
  },
  {
    id: "foliar-biozinc",
    name: "BIOZINC",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/BIOZINC.webp",
    description:
      "Corrector nutricional foliar a base de zinc para prevenir y corregir deficiencias en los cultivos.",
    benefits: [
      "Previene y corrige deficiencias.",
      "Mayor absorción foliar.",
      "Mejor adherencia y resistencia.",
      "Cultivos más sanos y productivos.",
    ],
    pdf: "/documents/FT BIOZINC.pdf",
  },
  {
    id: "foliar-8",
    name: "HUMITACC",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/HUMITACC.webp",
    description:
      "Corrector foliar a base de ácidos húmicos y fúlvicos que mejora la estructura del suelo y estimula el desarrollo de raíces.",
    benefits: [
      "Mejora la estructura del suelo.",
      "Mayor retención de agua.",
      "Estimula el desarrollo de raíces.",
      "Cultivos más sanos y productivos.",
    ],
    pdf: "/documents/FT HUMITACC.pdf",
  },
  {
    id: "foliar-1",
    name: "NUTRITACC 20-20-20",
    category: "Foliares",
    subcategory: "Correctores nutricionales",
    price: 45.0,
    image: "/images/products/NUTRITACC-20-20-20.webp",
    description:
      "Fertilizante foliar completo NPK 20-20-20 que favorece el desarrollo vegetativo y la floración de todos los cultivos.",
    benefits: [
      "Mayor desarrollo vegetativo.",
      "Raíces más fuertes.",
      "Floración y fructificación óptima.",
      "Plantas más resistentes.",
    ],
    pdf: "/documents/FT NUTRITACC 20-20-20.pdf",
  },

  // Foliares - Protección para cultivos (3 productos)
  {
    id: "foliar-biofosfito",
    name: "BIOFOSFITO-K",
    category: "Foliares",
    subcategory: "Protección para cultivos",
    price: 55.0,
    image: "/images/products/BIOFOSFITO-K.webp",
    description:
      "Producto de protección vegetal que activa las defensas naturales de la planta con acción sistémica.",
    benefits: [
      "Activa las defensas naturales de la planta.",
      "Protege contra hongos, bacterias y plagas.",
      "Favorece el crecimiento y productividad.",
      "Acción sistémica en toda la planta.",
    ],
    pdf: "/documents/BIOFOSFITO - K.pdf",
  },
  {
    id: "foliar-2",
    name: "BIOCUB",
    category: "Foliares",
    subcategory: "Protección para cultivos",
    price: 45.0,
    image: "/images/products/BIOCUB.webp",
    description:
      "Fungicida y bactericida orgánico a base de cobre que induce las defensas naturales de la planta.",
    benefits: [
      "Induce defensas naturales.",
      "Acción fungicida y bactericida.",
      "Mayor y rápida absorción.",
      "Plantas más sanas y productivas.",
    ],
    pdf: "/documents/FT BIOCUB.pdf",
  },
  {
    id: "foliar-copeo",
    name: "COPEO",
    category: "Foliares",
    subcategory: "Protección para cultivos",
    price: 50.0,
    image: "/images/products/COPEO.webp",
    description:
      "Protector vegetal de origen natural con acción insecticida, fungicida y bactericida.",
    benefits: [
      "Controla plagas y enfermedades.",
      "Acción insecticida, fungicida y bactericida.",
      "De origen natural.",
      "Favorece el desarrollo de las plantas.",
    ],
    pdf: "/documents/FT COPEO.pdf",
  },

  // Foliares - Complementos (2 productos)
  {
    id: "complemento-bioadhiere",
    name: "BIOADHIERE",
    category: "Foliares",
    subcategory: "Complementos",
    price: 35.0,
    image: "/images/products/BIOADHIERE.webp",
    description:
      "Adherente y coadyuvante agrícola que mejora la adherencia y cobertura de los agroinsumos aplicados.",
    benefits: [
      "Mejora la adherencia y cobertura.",
      "Favorece una mayor penetración de los agroinsumos.",
      "Reduce pérdidas por escurrimiento.",
      "Disminuye el riesgo de manchas y quemaduras.",
      "Ideal para todo tipo de cultivos.",
    ],
    pdf: "/documents/BIO ADHIERE.pdf",
  },
  {
    id: "foliar-16",
    name: "FULL ACIDIC",
    category: "Foliares",
    subcategory: "Complementos",
    price: 35.0,
    image: "/images/products/FULL-ACIDIC-PH.webp",
    description:
      "Acidificante y coadyuvante agrícola que optimiza el pH del agua de aplicación mejorando la eficacia de los agroinsumos.",
    benefits: [
      "Optimiza el pH del agua de aplicación.",
      "Mejora la eficacia de los agroinsumos.",
      "Actúa como adherente, humectante y dispersante.",
      "Compatible con la mayoría de agroquímicos y fertilizantes.",
      "Ideal para todo tipo de cultivos.",
    ],
    pdf: "/documents/FT FULL ACIDIC.pdf",
  },
];

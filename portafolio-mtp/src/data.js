export const PALETTE = {
  rose: {
    light: "#fce4ec",
    mid: "#e91e63",
    dark: "#880e4f",
    midAlpha: "rgba(233,30,99,0.18)",
    darkAlpha: "rgba(136,14,79,0.15)",
  },
  amber: {
    light: "#fff8e1",
    mid: "#ff8f00",
    dark: "#e65100",
    midAlpha: "rgba(255,143,0,0.18)",
    darkAlpha: "rgba(230,81,0,0.15)",
  },
  teal: {
    light: "#e0f2f1",
    mid: "#00897b",
    dark: "#004d40",
    midAlpha: "rgba(0,137,123,0.18)",
    darkAlpha: "rgba(0,77,64,0.15)",
  },
  violet: {
    light: "#ede7f6",
    mid: "#7b1fa2",
    dark: "#4a148c",
    midAlpha: "rgba(123,31,162,0.18)",
    darkAlpha: "rgba(74,20,140,0.15)",
  },
  sky: {
    light: "#e1f5fe",
    mid: "#0288d1",
    dark: "#01579b",
    midAlpha: "rgba(2,136,209,0.18)",
    darkAlpha: "rgba(1,87,155,0.15)",
  },
  sage: {
    light: "#f1f8e9",
    mid: "#558b2f",
    dark: "#1b5e20",
    midAlpha: "rgba(85,139,47,0.18)",
    darkAlpha: "rgba(27,94,32,0.15)",
  },
};

export const OBRAS = [
  {
    id: 1,
    nombre: "Dasha",
    tecnica: "Mixta",
    tamaño: "60 cm de diámetro",
    precio: 600000,
    color: "amber",
    imagen: "dasha.png",
    descripcion:
      "Dasha nace de la libertad, unión y amor, en una danza que se expande más allá del tiempo donde todo es uno",
  },
  {
    id: 2,
    nombre: "Vuelo de los Cóndores",
    tecnica: "Mixta",
    tamaño: "1,10 mt x 90 cm",
    precio: 700000,
    color: "sage",
    imagen: "condor.jpg",
    descripcion:
      "El Cóndor señor de los andes, ave del vuelo altivo, alas que rozan los techos del cielo. Desde tiempos ancestrales, su presencia de solemne majestad ha fascinado a los pueblos andinos. Así el gran pájaro se convirtió en símbolo de sabiduría y mensajero de lo divino. ",
  },
  {
    id: 3,
    nombre: "Cervatillo",
    tecnica: "Mixta",
    tamaño: "90 x 90 cm",
    precio: 700000,
    color: "sky",
    imagen: "bambi.jpg",
    descripcion:
      "El cervatillo, con su mirada dulce y curiosa, es un símbolo de inocencia y conexión con la naturaleza. En esta obra, su presencia serena invita a detenerse y contemplar la belleza simple de la vida.",
  },
  {
    id: 4,
    nombre: "El Vals de las Flores",
    tecnica: "Oleo",
    tamaño: "1 mt x 90 cm",
    precio: 800000,
    color: "amber",
    imagen: "valsflores.jpg",
    descripcion:
      "Celebró la vida , pinto  con amor mi Jardín",
  },
  {
    id: 5,
    nombre: "Jardín Interior",
    tecnica: "Óleo",
    tamaño: "60 x 80 cm",
    precio: 380000,
    color: "violet",
    emoji: "💜",
    descripcion:
      "Un espacio íntimo donde los colores del jardín se convierten en emoción pura y contemplación.",
  },
  {
    id: 6,
    nombre: "Amanecer en Calma",
    tecnica: "Acrílico",
    tamaño: "70 x 50 cm",
    precio: 290000,
    color: "teal",
    emoji: "🌅",
    descripcion:
      "La serenidad del amanecer traducida en capas de acrílico. Un recordatorio de que cada día trae renovación.",
  },
];

export const fmtPrecio = (n) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(n);

# 🎨 Portafolio — Maria Teresa Pincheira

Portfolio artístico de **Maria Teresa Pincheira**, artista visual de Mar del Plata. Diseñado y desarrollado para mostrar sus obras, clases de pintura y medios de contacto.

---

## ✨ Vista previa

> **Live site:** [mariateresapincheira.netlify.app](https://portafolio-maria-teresa.vercel.app/)

---

## 🖼️ Secciones

- **Hero** — Presentación con fondo tipo acuarela animado
- **Sobre la artista** — Biografía, técnicas y foto
- **Clases** — Información sobre clases presenciales con dropdown de técnicas
- **Galería** — Obras organizadas por categoría (Cuadros, Tote Bags, Ropa) con modal de detalle
- **Contacto** — Links a WhatsApp, Gmail e Instagram
- **Promo web** — Sección de desarrolladora

---

## 🛠️ Tecnologías

- [React 18](https://react.dev/)
- [Vite](https://vitejs.dev/)
- CSS modular con variables de paleta por obra
- Intersection Observer (animaciones al hacer scroll)
- Google Fonts — Cormorant Garamond + Lato

---

## 📁 Estructura del proyecto

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Sobre.jsx
│   ├── Clases.jsx
│   ├── Galeria.jsx
│   ├── Modal.jsx
│   ├── Contacto.jsx
│   └── Footer.jsx
├── data/
│   └── index.js        ← obras, paleta y datos de contacto
├── hooks/
│   └── useInView.js    ← hook de animación al scroll
├── styles/
│   └── main.css
└── main.jsx

public/
├── dasha.png
├── condor.jpg
├── bambi.jpg
└── ...                 ← imágenes de las obras
```

---

## 🚀 Correr en local

```bash
# Clonar el repo
git clone https://github.com/valentina1610/Portafolio-Maria-Teresa.git

# Entrar a la carpeta
cd portafolio-mtp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## 📦 Deploy en Netlify

El proyecto se despliega automáticamente desde GitHub.

Configuración en Netlify:

| Campo | Valor |
|---|---|
| Base directory | `portafolio-mtp` |
| Build command | `npm run build` |
| Publish directory | `portafolio-mtp/dist` |

---

## 👩‍🎨 Artista

**Maria Teresa Pincheira**
- Instagram: [@mariateresa_pinta](https://instagram.com/Mariateresa_pinta)
- WhatsApp: +54 223 680-1648

---

## 💻 Desarrolladora

Diseñado y desarrollado por **[Valentina](https://valentina-olmos.vercel.app/)**

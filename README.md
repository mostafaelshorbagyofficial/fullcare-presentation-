# ProMedia Presents — FULL CARE
### Interactive Digital Brand Strategy & Strategic Deck

A high-end, production-grade interactive digital presentation for **Full Care**, created and presented by **ProMedia**.

---

## 🌟 Key Features

- **ProMedia Opening Scene**: Cinematic opening with official ProMedia branding, ambient lighting, and interactive **PLAY PRESENTATION** launch.
- **38-Slide Strategic Engine**: 38 custom art-directed slides spanning origin, human truth ("السند"), clinical specialties, manufacturing foundations, 3-phase geographic expansion, B2B/B2C alignment, patient journey, content pillars, hero campaign, founder DNA & portraits, 90-day plan, and strategic grand finale lockup.
- **Strict Bilingual Separation**:
  - **Arabic Mode**: 100% Arabic-first, RTL typography (Tajawal / Cairo).
  - **English Mode**: 100% English-only, LTR typography (Plus Jakarta Sans / Outfit).
- **Mobile-First & iOS Optimized**: Full iOS Safari safe area insets, dynamic viewport handling, and touch swipe gestures.
- **Brand Logo Directions Showcase**: Built-in modal presenting both proposed Full Care visual identity directions alongside ProMedia agency credentials.
- **Interactive Controls**: Arrow keys, Spacebar, Autoplay mode, Fullscreen API support, and top navigation section shortcuts.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom Glassmorphism & Safe-Area utilities
- **Icons**: Lucide React
- **Typography**: Google Fonts (Tajawal, Cairo, Plus Jakarta Sans, Outfit, Syne)

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

---

## 📁 Project Structure

```text
fullcare-presentation/
├── public/
│   └── assets/             # ProMedia logo, 2 proposed Full Care logos, 4 founder portraits
├── src/
│   ├── components/         # OpeningScreen, TopNavigation, NavigationControls, Modals, SlideRenderer
│   │   └── slides/         # Reusable presentation slide layout components
│   ├── context/            # Presentation state, keyboard/touch listeners, language state
│   ├── data/               # Centralized bilingual 38-slide dataset
│   ├── types/              # TypeScript interfaces
│   ├── App.tsx             # Main shell
│   ├── index.css           # Styling & animations
│   └── main.tsx            # Entry point
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

---

*Presented by ProMedia — Digital Brand Strategy & Creative Direction.*

# F1 Project

```bash
docker compose run --rm app npm install
docker compose up --build -d
```

Acesse: http://localhost:5173

---

## 🧠 Roadmap

### Fase 1 — Base
React + CSS  
Componentes: Hero, About, Gallery, Footer

### Fase 2 — Animações
GSAP + ScrollTrigger

### Fase 3 — Scroll
Lenis (scroll suave)

### Fase 4 — 3D
Three.js ou React Three Fiber

### Fase 5 — Microinterações
Rive

---

## 🧱 Arquitetura

- UI Layer → React
- Animation Layer → GSAP hooks
- Scroll Layer → Lenis provider
- 3D Layer → `<Scene />`
- Rive Layer → componentes isolados
# Token Trading Table – Axiom Trade (Frontend Task)

A pixel-inspired, high-performance token discovery dashboard built with **Next.js 14**, designed to replicate Axiom Trade’s token table experience with real-time updates, smooth interactions, and scalable architecture.

---

## Features

### Core Functionality
- Token discovery table with categorized columns:
  - New Pairs
  - Final Stretch
  - Migrated
- Real-time price updates using a WebSocket mock
- Smooth price change animations (green/red flash)
- Sorting by name, price, and percentage change
- Global search across token name and symbol

### Advanced UI / UX
- Favorites (pin/unpin tokens)
- Favorites persist across page reloads (localStorage)
- Tooltips and popovers for detailed token info
- Skeleton loaders and empty-state messages
- Fully responsive (down to 320px width)

### Performance & Architecture
- Redux Toolkit for global state management
- React Query (v5) for data fetching & caching
- Memoized selectors (`createSelector`) to avoid unnecessary re-renders
- Memoized components (`React.memo`)
- Zero layout shifts (CLS-safe)
- Optimized for Lighthouse performance

---

## Design Decisions

### State Management
- **Redux Toolkit** is used for UI and application state (tokens, search, favorites).
- **React Query** handles async data fetching and caching.
- WebSocket updates are handled as side effects without polluting UI logic.

### Performance
- Derived state (filtered tokens, favorites) is computed using memoized selectors.
- Components are designed to be reusable and atomic.
- Strict separation between UI, state, and data layers.

### Accessibility
- Keyboard-accessible buttons
- Semantic HTML structure
- Tooltips and popovers built with Radix UI for accessibility

---

## Tech Stack

- **Next.js 14 (App Router)**
- **TypeScript (strict mode)**
- **Tailwind CSS**
- **Redux Toolkit**
- **React Query (TanStack v5)**
- **Radix UI**
- **WebSocket (mocked)**

---

## Getting Started

### Install dependencies
```bash
npm install

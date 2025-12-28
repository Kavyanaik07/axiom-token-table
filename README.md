# Real-Time Token Trading Table

A real-time token discovery dashboard inspired by modern crypto trading platforms.
This project focuses on **state management, performance optimization, and real-time UI updates**.

---

## Features

- Categorized token columns:
  - New Pairs
  - Final Stretch
  - Migrated
- Live price updates using WebSocket mock
- Optimized rendering using memoized components
- Visual price movement indicators (green/red flash)
- Global state management with Redux Toolkit
- Data fetching and caching with React Query
- Tooltip & Popover interactions (Radix UI)
- Error handling with Next.js error boundaries
- Dark mode UI using Tailwind CSS

---

## Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- State Management: Redux Toolkit
- Data Fetching: React Query
- Real-Time Updates: WebSocket (mock implementation)
- UI: Tailwind CSS, Radix UI

---

## Architecture Overview

1. Initial token data is fetched using React Query.
2. Tokens are normalized and stored in Redux as a `Record`.
3. A WebSocket mock streams live price updates.
4. Only affected rows re-render due to memoization.
5. Tooltip and popover components provide extra token insights.
6. Sorting and categorization are handled at the component level.

---

## Run Locally

```bash
npm install
npm run dev

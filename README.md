# Fullstack App with Docker + Next.js

A short project to demonstrate a fullstack setup with **Next.js**, **PostgreSQL**, and **Docker**.  
Implements a click-tracking card grid with backend persistence and sorting.  

---

## 🚀 Tech Stack

- **Frontend**: Next.js (React + TypeScript)
- **Backend**: Next.js API routes (TypeScript)
- **Database**: PostgreSQL
- **ORM**: Drizzle ORM
- **Styling**: Tailwind
- **Deployment**: Docker

---

## 📦 Running the Project Locally

### Prerequisites

- [Docker](https://www.docker.com/) installed on your machine

### Steps

```bash
# Clone the repository
git clone git@github.com:paulomilitante/fullstack-next.git
cd fullstack-next

# Start the app
docker compose up --build
```

This will:  
1. Spin up a **PostgreSQL** database with seeded data  
2. Run the **Next.js** app in development mode  
3. The app will be available at **http://localhost:3000**  

---

## 📝 Features

- 8 cards in a **2x4 grid**:
  - Displays card number
  - Shows click count
  - Shows first click timestamp
- **Click tracking**:
  - Increments click count on every click
  - Tracks only first click for ordering
- **Sorting**:
  - Most clicks → Fewest clicks
  - First clicked → Last clicked
- **Clear**:
  - Resets counts, timestamps, and order in UI & DB
- **Responsive** layout

---

## 💡 Design & Implementation Notes

- **Why Drizzle ORM instead of Prisma**  
  Lightweight, SQL-like syntax, great for a small project without needing Prisma's codegen and heavier runtime.
  
- **Abstracting API calls into hooks**  
  Keeps UI components focused on rendering, while hooks handle fetch logic.

- **Race condition handling**  
  Implemented **last-write-wins** to ensure the most recent server update is the one reflected in the UI, avoiding stale state from slower responses.

---

## ✅ What Was Familiar/Easy

- Building the backend and frontend in Next.js with TypeScript
- Setting up database models and API routes

---

## ⚠️ What Was New/Challenging

- Setting up and managing **Docker** for multi-service development (frontend + backend + database)  
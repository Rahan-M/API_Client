# Lightweight API Client

A **browser-based API testing tool** inspired by Postman, built as a lightweight, fast alternative for developers who want to test HTTP APIs without installing heavy desktop software.

🔗 **Live Demo:** https://<your-vercel-link>.vercel.app

---

## Features

- Send HTTP requests: **GET, POST, PUT, PATCH, DELETE**
- JSON request body validation before sending
- View response **status code, status text, time taken, and size**
- Pretty-printed JSON responses
- Tab-based response viewer:
  - **Body** (formatted JSON / text)
  - **Headers** (key–value metadata)
  - **Raw** (unformatted response)
- Graceful handling of:
  - Network errors
  - Invalid JSON
  - Non-JSON responses
  - CORS issues (browser limitations)
- Clean, minimal UI focused on developer experience

---

## Why this project?

Tools like Postman and Insomnia are powerful but:
- Heavy on memory
- Slow to start
- Desktop-only
- Increasingly account-gated

This project explores how much of that core functionality can be delivered as a **pure frontend web application**, while remaining fast, simple, and accessible.

---

## 🛠 Tech Stack

- **React** + **TypeScript**
- **Vite** (fast build tooling)
- **Tailwind CSS** (utility-first styling)
- **Native Fetch API**
- **Notistack** (snackbar notifications)
- **Vercel** (deployment)

---

## Architecture Highlights

- Clean separation of concerns:
  - `components/` → UI only
  - `hooks/` → request logic (`useApiRequest`)
  - `types/` → shared TypeScript contracts
- Safe JSON handling:
  - Request body validated before sending
  - Responses parsed defensively (no crashes on non-JSON)
- UI state (tabs, loading) separated from data state (responses)

---

## APIs used for testing

- **JSONPlaceholder** – mock REST APIs  
  https://jsonplaceholder.typicode.com

- **httpbin** – request/response inspection  
  https://httpbin.org

---

## Getting Started (Local)

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev

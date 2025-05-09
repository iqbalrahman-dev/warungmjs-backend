# 🍜 warungmjs – Backend Service

A simple and scalable Node.js backend for managing food ingredient costs and sales, built with Fastify. Designed with a clean architecture to support microservices and separate frontend/backend deployment.

---

## 🚀 Features

- ⚡ Fastify for blazing-fast HTTP performance
- 🛡️ Secure user creation with password hashing
- 🗃️ MySQL database integration
- 🧩 Modular route/service structure
- 🧾 Professional JSON API responses

---

## 📦 Tech Stack

- **Runtime**: Node.js (ES Modules)
- **Framework**: Fastify
- **Database**: MySQL (via `mysql2`)
- **Security**: Bcrypt for password hashing
- **Environment**: Dotenv
- **CORS**: @fastify/cors for cross-origin requests

---

## 📁 Project Structure

```tree
warungmjs/
├── controllers/         # Route logic and request handlers
│   └── user.controller.js
│
├── routes/              # API route definitions
│   └── v1/
│       └── user.routes.js
│
├── services/            # Business logic and service functions
│   └── user.service.js
│
├── configs/             # Configuration files (e.g., DB connection)
│   └── db.js
│
├── utils/               # Utility helpers (e.g., response formatters)
│   └── response.js
│
├── .env                 # Environment variables (do NOT commit this)
├── server.ts            # Application entry point
└── package.json         # Project metadata and dependencies
```

---

## 🧪 Prerequisites

- Node.js ≥ 18
- MySQL database (local or cloud-based like db4free, Railway, etc.)
- Git

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
PORT=3000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASS=your-db-password
DB_NAME=your-db-name
```

---

## 🛠️ Getting Started


### 1. **Clone the repository**

```bash
# 1. Clone the repository
git clone https://github.com/your-username/warungmjs.git
cd warungmjs

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```


---

Let me know if you'd like a `package.json` script like `npm run dev` using `nodemon`, or a `render.yaml` for auto-deploy on Render!

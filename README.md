![CI Status](https://github.com/danicvan/notifyme-backend/actions/workflows/ci.yml/badge.svg)

# NotifyMe Backend API

[![Build](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Deploy](https://img.shields.io/badge/deploy-Railway-blue)]()
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/danicvan/notifyme-backend)](https://github.com/danicvan/notifyme-backend)

---

## 🌐 NotifyMe Backend

NotifyMe is a robust, scalable and easy-to-use backend built with **NestJS**. It provides endpoints for user registration and notification sending, complete with Swagger documentation, JWT authentication, and automatic logging to **AWS S3**.

### 🚀 Live API: [https://notifyme-backend-production.up.railway.app/v1/api](https://notifyme-backend-production.up.railway.app/v1/api)

---

### 📌 Features

- ✅ **NestJS with TypeScript**
- 🔐 JWT-based **Authentication**
- 🧾 **Swagger** API documentation with custom branding
- ☁️ **AWS S3** integration for log storage
- 🚀 Hosted on **Railway**
- 🔁 CI/CD pipeline ready for **Jenkins** and **GitHub Actions**

---

### 📁 Folder Structure

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── user/
│   ├── user.controller.ts
│   └── user.service.ts
├── notification/
│   ├── notification.controller.ts
│   └── notification.service.ts
├── log/
│   └── log.service.ts
├── common/
│   └── guards/jwt-auth.guard.ts
```

---

### 🛠 Requirements

- Node.js 20+
- AWS S3 Bucket and IAM credentials
- Railway or Render account for hosting

---

### ▶️ Getting Started

```bash
git clone https://github.com/danicvan/notifyme-backend.git
cd notifyme-backend
npm install
npm run start:dev
```

Access locally: [http://localhost:3000/v1/api](http://localhost:3000/v1/api)

---

### 🧪 Running Tests & Lint

```bash
npm run test
npm run lint
```

---

### ⚙️ Environment Variables (`.env`)

```env
PORT=3000
AWS_ACCESS_KEY_ID=your_aws_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
AWS_REGION=us-east-2
S3_BUCKET_NAME=notifyme-logs-danicvan
```

---

### 📃 License

This project is licensed under the **MIT** License. See [LICENSE](./LICENSE) for details.

---

## 👤 Author

**Daniel Camilo Evangelista**  
[GitHub](https://github.com/danicvan) · [LinkedIn](https://linkedin.com/in/danicvan)
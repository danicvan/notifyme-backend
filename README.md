![CI](https://github.com/danicvan/notifyme-backend/actions/workflows/ci.yml/badge.svg)
![CI Status](https://github.com/danicvan/notifyme-backend/actions/workflows/ci.yml/badge.svg)

# NotifyMe Backend API

[![Build](https://img.shields.io/badge/build-passing-brightgreen)]()
[![Deploy](https://img.shields.io/badge/deploy-Railway-blue)]()
[![License: MIT](https://img.shields.io/badge/license-MIT-yellow)](./LICENSE)
[![Last Commit](https://img.shields.io/github/last-commit/danicvan/notifyme-backend)](https://github.com/danicvan/notifyme-backend)

---

## 🌐 English Version

NotifyMe is a robust, scalable and easy-to-use backend built with **NestJS**. It offers an endpoint for sending notifications and user registration, with complete Swagger documentation, JWT authentication and logs saved directly to **AWS S3**.

### 🚀 Live API: [https://notifyme-backend-production.up.railway.app/v1/api](https://notifyme-backend-production.up.railway.app/v1/api)

---

### 📌 Features

- ✅ **NestJS with TypeScript**
- 🔒 JWT-based **Authentication** (Bearer Token)
- 📦 **Swagger** documentation with customization (logo, version, contact)
- 🌐 Hosted on **Railway**
- ☁️ Log saving to **AWS S3**
- 🧪 CI via **Jenkins** (optional: GitHub Actions ready)

---

### 📂 Folder Structure

```
src/
├── app.controller.ts
├── app.module.ts
├── app.service.ts
├── user/
│   └── user.controller.ts
│   └── user.service.ts
├── notification/
│   └── notification.controller.ts
│   └── notification.service.ts
├── log/
│   └── log.service.ts
├── common/
│   └── guards/jwt-auth.guard.ts
```

---

### 🛠️ Requirements

- Node.js 20+
- AWS S3 credentials
- Railway account (or Render/EC2)

---

### ▶️ Local Setup

```bash
git clone https://github.com/danicvan/notifyme-backend.git
cd notifyme-backend
npm install
npm run start:dev
```

Access: [http://localhost:3000/v1/api](http://localhost:3000/v1/api)

---

### 🧪 Run Tests & Lint

```bash
npm run test
npm run lint
```

---

### 📦 Environment Variables (`.env`)

```env
PORT=3000
AWS_ACCESS_KEY_ID=your_key
AWS_SECRET_ACCESS_KEY=your_secret
AWS_REGION=us-east-2
S3_BUCKET_NAME=notifyme-logs-danicvan
```

---

## 🌎 Versão em Português

NotifyMe é uma API backend construída com **NestJS** para registro de usuários e envio de notificações. Com documentação completa via Swagger, autenticação JWT e integração com AWS S3 para salvar logs.

### 📌 Funcionalidades

- ✅ **NestJS + TypeScript**
- 🔐 Autenticação JWT (Bearer Token)
- 📘 Swagger customizado com logo e versão
- ☁️ Logs salvos automaticamente na **AWS S3**
- 🚀 Deploy na Railway (alternativa: Render ou EC2)

---

### ▶️ Como rodar localmente

```bash
git clone https://github.com/danicvan/notifyme-backend.git
cd notifyme-backend
npm install
npm run start:dev
```

Acesse: [http://localhost:3000/v1/api](http://localhost:3000/v1/api)

---

### 📃 Licença

Este projeto está sob a licença **MIT**. Veja mais em [LICENSE](./LICENSE).

---

## ❤️ Autor

**Daniel Camilo Evangelista**  
[GitHub](https://github.com/danicvan) · [LinkedIn](https://linkedin.com/in/danicvan)
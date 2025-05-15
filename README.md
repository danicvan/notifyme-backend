
# 📬 NotifyMe Backend

**NotifyMe** is a modern, scalable, and test-driven backend service built with [NestJS](https://nestjs.com/) that allows users to register and send email notifications. This project integrates AWS S3 for log storage, supports CI/CD with Jenkins, and includes auto-generated Swagger documentation for API exploration.

---

## 🚀 Live Demo

🟢 **Production API**: [https://notifyme-backend-production.up.railway.app/v1/api](https://notifyme-backend-production.up.railway.app/v1/api)  
🔒 All routes require a `Bearer Token` in the `Authorization` header.

---

## 📦 Tech Stack

- **Framework:** [NestJS](https://nestjs.com/) (TypeScript)
- **Email Service:** Custom Service Layer
- **Cloud Storage:** AWS S3 (logs)
- **CI/CD:** Jenkins + GitHub
- **Testing:** Jest (unit tests)
- **Documentation:** Swagger (OpenAPI 3)
- **Deployment:** [Railway](https://railway.app/)

---

## 📄 API Documentation

✨ Swagger UI is enabled on:  
📘 [`/v1/api`](https://notifyme-backend-production.up.railway.app/v1/api)

Includes:
- Auth headers with `Bearer Token`
- API grouping via `@ApiTags`
- DTO validation
- Versioning (`v1`)

---

## 🛠️ Setup Instructions

### 1. Clone & Install

```bash
git clone https://github.com/danicvan/notifyme-backend.git
cd notifyme-backend
npm install
```

### 2. Configure Environment

Create a `.env` file based on `.env.example`:

```bash
AWS_REGION=your-region
AWS_ACCESS_KEY_ID=your-access-key
AWS_SECRET_ACCESS_KEY=your-secret
S3_BUCKET_NAME=your-bucket
PORT=3000
```

### 3. Run Locally

```bash
npm run start:dev
```

Access Swagger at: `http://localhost:3000/v1/api`

---

## 🧪 Run Tests

```bash
npm run test
```

To lint and auto-fix code:

```bash
npm run lint
```

---

## ⚙️ CI/CD Pipeline (Jenkins)

The project is integrated with a Jenkins pipeline using a `Jenkinsfile` in the root:

- 🧩 Installs dependencies
- ✅ Runs tests
- 🛠️ Builds the project
- 🚀 Can deploy to Railway/Render/EC2

Example `Jenkinsfile` stages:
```groovy
pipeline {
  agent any
  tools {
    nodejs 'node18'
  }
  stages {
    stage('Install') {
      steps { sh 'npm install' }
    }
    stage('Test') {
      steps { sh 'npm run test' }
    }
    stage('Build') {
      steps { sh 'npm run build' }
    }
  }
}
```

---

## ☁️ Deployment

This project is deployed using [Railway](https://railway.app/):

- 🚀 Automatic build and deploy from GitHub
- 🔐 `.env` variables managed through Railway dashboard
- 🖥️ Single-click rollback

To redeploy, just push to the branch connected to Railway.

---

## 🔐 Authentication

All endpoints require a **JWT Bearer Token**.  
Make sure to send it in your requests:

```http
Authorization: Bearer <your_token_here>
```

In Swagger, click on `Authorize` to enter your token.

---

## 📁 Project Structure

```
src/
├── user/              # User controller, service, DTOs
├── notification/      # Email controller, service, DTOs
├── log/               # Log service (S3 integration)
├── common/            # Shared guards and utilities
└── main.ts            # App bootstrap and Swagger config
```

---

## 📌 Features

- [x] User Registration
- [x] Send Notification Emails
- [x] Swagger Documentation with Tags
- [x] JWT Global Guard
- [x] CI/CD with Jenkins
- [x] AWS S3 Logging
- [x] Environment-Based Configuration
- [x] Full Test Coverage with Jest
- [ ] Rate Limiting (Coming soon)
- [ ] OAuth2 Integration (Coming soon)

---

## 👨‍💻 Author

**Daniel Camilo Evangelista**  
🔗 [GitHub](https://github.com/danicvan) • [LinkedIn](https://linkedin.com/in/seu-perfil)

---

## 📜 License

This project is licensed under the **MIT License**.
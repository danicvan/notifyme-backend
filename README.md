# 📬 NotifyMe Backend

NotifyMe is a backend API built with **NestJS** that enables sending email notifications through a secure and extensible platform. The project was developed with the aim of providing a simple but powerful solution for systems that need to trigger transactional or scheduled email communications.

---

## 🚀 Features

- ✅ User registration with email logging
- ✅ Email notification endpoint
- ✅ Request logging saved to AWS S3
- ✅ Integrated CI/CD with Jenkins
- ✅ Full API documentation via Swagger
- ✅ Modular architecture with DTO validation
- ✅ Ready for deployment (Railway, Render, EC2)

---

## 🔧 Tech Stack

- **Node.js** (v20+)
- **NestJS**
- **TypeScript**
- **AWS SDK** (S3)
- **Jenkins CI/CD**
- **Swagger**
- **Jest** (unit testing)

---

## 📁 Project Structure

```
notifyme-backend/
├── src/
│   ├── user/              # User module (controller, service, DTO)
│   ├── notification/      # Notification module
│   ├── log/               # Logging module (writes to AWS S3)
│   ├── common/            # Common guards and utils
│   ├── main.ts            # Entry point
│   └── app.module.ts      # Root module
├── Jenkinsfile            # CI pipeline
├── .env                   # Environment variables
└── README.md
```

---

## 🔐 Environment Variables

Create a `.env` file with the following:

```env
PORT=3000
AWS_REGION=us-east-2
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret
S3_BUCKET_NAME=notifyme-logs-danicvan
```

---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/danicvan/notifyme-backend.git
cd notifyme-backend

# Install dependencies
npm install
```

---

## 🧪 Running the App Locally

```bash
# Run in development mode
npm run start:dev

# Run tests
npm run test

# Run lint
npm run lint
```

---

## 🔍 Swagger API Docs

After starting the project locally, access:

```
http://localhost:3000/v1/api
```

---

## 🛡️ Authentication

All endpoints are protected with a **global Bearer token guard**.

Add the following to each request header:

```
Authorization: Bearer <your_token>
```

To disable or customize this, go to `JwtAuthGuard` in `common/guards`.

---

## 🚢 CI/CD with Jenkins

1. Install Jenkins + NodeJS plugin
2. Configure a Jenkins job with the included `Jenkinsfile`
3. Steps: Checkout → Install Dependencies → Run Tests → Build

---

## ☁️ Deployment (suggestions)

- [x] Railway (used currently)
- [ ] Render
- [ ] AWS EC2 + Nginx

You can access the deployed API here:

```
https://notifyme-backend-production.up.railway.app
```

---

## ✨ Future Improvements

- [ ] Add rate limiting and throttling
- [ ] Add database integration
- [ ] Add retry logic for failed notifications
- [ ] Admin panel and dashboards

---

## 👤 Author

Made with ❤️ by **[Daniel Camilo Evangelista](https://github.com/danicvan)**

---

## 📄 License

MIT License — feel free to use and modify this project.
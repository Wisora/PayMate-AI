# Onboarding Guide

Overview
Welcome to PayMate AI! This guide helps new contributors set up the project quickly and confidently.  
Follow these steps to get your local environment ready in under 15 minutes.

Prerequisites

- Node.js (v18+ recommended)
- npm (comes with Node.js)
- Git
- k6 (for performance testing)

Step 1: Clone the Repo

````bash
git clone https://github.com/your-org/paymate-ai.git
cd paymate-ai

Step 2: Install Dependencies

```bash
npm install

````

Step 3: Start the Backend

```bash
npm run dev
```

- Server runs at `http://localhost:3000`
- Demo routes available:
  - `GET /api/health`
  - `POST /api/auth/login`
  - `GET /api/dashboard`
  - `GET /api/subscriptions`
  - `GET /api/fraud-alerts`

Step 4: Run Performance Test

```bash
k6 run tests/performance/login-dashboard.test.js
```

Expected output:

✓ health status 200
✓ login succeeded
✓ login has accessToken
✓ dashboard status 200
✓ subscriptions status 200
✓ fraud status 200

Step 5: Demo Credentials

- `username: "testuser"`
- `password: "password123"`

Step 6: Make Your First Contribution

1.Create a new branch:

```bash
git checkout -b feature/your-feature-name
```

2.Make changes and commit:

```bash
git add .
git commit -m "Add new feature"
```

3.Push and open a Pull Request:

```bash
git push origin feature/your-feature-name
```

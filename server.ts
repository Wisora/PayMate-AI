import express, { Request, Response } from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/health", (_req: Request, res: Response) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Extended login route
  app.post("/api/auth/login", (req: Request, res: Response) => {
    const { username, password } = req.body;

    // Demo logic for testing
    if (username === "testuser" && password === "password123") {
      // Fake tokens for now
      const accessToken = "demo-access-token-" + Date.now();
      const refreshToken = "demo-refresh-token-" + Date.now();

      res.json({
        accessToken,
        refreshToken,
        user: {
          id: 1,
          username: "testuser",
          role: "tester",
        },
      });
    } else {
      res.status(401).json({ error: "Invalid credentials" });
    }
  });

  // Dashboard route
  app.get("/api/dashboard", (_req: Request, res: Response) => {
    res.json({
      message: "Dashboard data",
      items: ["overview", "stats", "charts"],
    });
  });

  // Subscriptions route
  app.get("/api/subscriptions", (_req: Request, res: Response) => {
    res.json({ subscriptions: ["Netflix", "Spotify", "PayMate Premium"] });
  });

  // Fraud alerts route
  app.get("/api/fraud-alerts", (_req: Request, res: Response) => {
    res.json({
      alerts: ["Suspicious login attempt", "Unusual transaction detected"],
    });
  });

  // Placeholder for Payment API
  app.post("/api/payments/checkout", (req: Request, res: Response) => {
    const { amount, currency, provider } = req.body;
    console.log(`Processing ${amount} ${currency} via ${provider}`);
    res.json({
      success: true,
      transactionId: "txn_" + Math.random().toString(36).substring(2, 11),
    });
  });

  // Placeholder for AI Assistant Logic
  app.post("/api/ai/chat", (_req: Request, res: Response) => {
    // This will be handled by Gemini in the frontend, but we can have server-side logic too
    res.json({
      reply:
        "I am your PayMate AI assistant. How can I help you with your payments today?",
    });
  });

  // Analytics API (Phase 1)
  app.get("/api/analytics/summary", (_req: Request, res: Response) => {
    res.json({
      revenue: 12450,
      users: 1240,
      growth: 12.5,
      activeSessions: 42,
    });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("(.*)", (_req: Request, res: Response) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`PayMate AI Server running on http://localhost:${PORT}`);
  });
}

startServer();
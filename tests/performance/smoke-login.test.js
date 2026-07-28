import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    "checks{endpoint:health}": ["rate>0.95"],
    "checks{endpoint:login}": ["rate>0.95"],
    "http_req_duration{endpoint:health}": ["p(95)<300"],
    "http_req_duration{endpoint:login}": ["p(95)<500"],
  },
};

export default function () {
  // 1️⃣ Health check
  let healthRes = http.get("http://localhost:3000/api/health", {
    tags: { endpoint: "health" },
  });
  check(healthRes, {
    "health status 200": (r) => r && r.status === 200,
    "health body ok": (r) => r && r.body && r.body.includes('"ok"'),
  });

  // 2️⃣ Login
  let loginRes = http.post(
    "http://localhost:3000/api/auth/login",
    JSON.stringify({
      username: "testuser",
      password: "password123",
    }),
    {
      headers: { "Content-Type": "application/json" },
      tags: { endpoint: "login" },
    },
  );

  let loginPassed = check(loginRes, {
    "login succeeded": (r) => r.status === 200,
  });

  if (!loginPassed) {
    console.log("⚠️ Login failed. Response body:", loginRes.body);
  }

  // Parse JSON safely
  let loginJson;
  try {
    loginJson = loginRes.json();
    console.log("Login JSON parsed:", JSON.stringify(loginJson));
  } catch (e) {
    console.log("⚠️ Could not parse login JSON. Raw body:", loginRes.body);
    loginJson = {};
  }

  // Extract tokens
  let accessToken = loginJson.accessToken || null;
  let refreshToken = loginJson.refreshToken || null;

  let tokenCheck = check(loginRes, {
    "login has accessToken": () => accessToken !== null,
    "login has refreshToken": () => refreshToken !== null,
  });

  if (!tokenCheck) {
    console.log("⚠️ Tokens missing. Parsed JSON:", JSON.stringify(loginJson));
  }

  // Log user info if present
  if (loginJson.user) {
    console.log("User info:", JSON.stringify(loginJson.user));
  }

  sleep(1);
}

import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10,
  duration: "30s",
  thresholds: {
    "checks{endpoint:health}": ["rate>0.95"],
    "checks{endpoint:login}": ["rate>0.95"],
    "checks{endpoint:dashboard}": ["rate>0.95"],
    "http_req_duration{endpoint:health}": ["p(95)<300"],
    "http_req_duration{endpoint:login}": ["p(95)<500"],
    "http_req_duration{endpoint:dashboard}": ["p(95)<700"],
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

  let loginJson;
  try {
    loginJson = loginRes.json();
  } catch (e) {
    loginJson = {};
  }

  let accessToken = loginJson.accessToken || null;
  let refreshToken = loginJson.refreshToken || null;

  check(loginRes, {
    "login has accessToken": () => accessToken !== null,
    "login has refreshToken": () => refreshToken !== null,
  });

  // 3️⃣ Dashboard (protected route)
  if (accessToken) {
    let dashboardRes = http.get("http://localhost:3000/api/dashboard", {
      headers: { Authorization: `Bearer ${accessToken}` },
      tags: { endpoint: "dashboard" },
    });

    check(dashboardRes, {
      "dashboard status 200": (r) => r && r.status === 200,
      "dashboard body contains data": (r) => r && r.body && r.body.length > 0,
    });

    if (dashboardRes.status !== 200) {
      console.log("⚠️ Dashboard failed. Response body:", dashboardRes.body);
    }
  } else {
    console.log("⚠️ No accessToken available, skipping dashboard check.");
  }

  sleep(1);
}

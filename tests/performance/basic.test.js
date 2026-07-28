import http from "k6/http";
import { check, sleep } from "k6";

export let options = {
  vus: 10, // 10 virtual users
  duration: "30s", // run for 30 seconds
};

export default function () {
  // Example: simulate hitting a login endpoint
  let res = http.get("https://test-api.k6.io/public/crocodiles/");

  // Basic check: did we get a 200 OK?
  check(res, {
    "status is 200": (r) => r.status === 200,
  });

  sleep(1); // pause between requests
}

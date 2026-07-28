import { check, sleep } from 'k6';
import http from 'k6/http';

export const options = {
  stages: [
    { duration: '30s', target: 20 }, // Ramp up to 20 users
    { duration: '1m', target: 20 },  // Stay at 20 users
    { duration: '30s', target: 0 },  // Ramp down
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must be below 500ms
  },
};

export default function () {
  const res = http.get('https://ais-dev-fl6otd653i4szkdhrj6qcp-71905196707.europe-west2.run.app');
  check(res, {
    'status is 200': (r) => r.status === 200,
    'page contains title': (r) => r.body.includes('PAYMATE AI'),
  });
  sleep(1);
}

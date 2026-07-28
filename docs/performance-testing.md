# Performance Testing Guide

## Tools

- **k6**: Used for load and performance testing.
- **Chrome DevTools**: For frontend rendering performance.

## Load Testing with k6

Tests are located in `/tests/performance/`.

### Running Tests

1. Install k6: `brew install k6` (macOS) or follow [k6.io](https://k6.io).
2. Run the load test:

   ```bash
   k6 run tests/performance/load.test.js
   ```

## Performance Targets

- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1
- **API Response Time**: < 200ms (p95)

## Scaling Strategy

As we move to Phase 2, we will integrate k6 into our CI/CD pipeline to ensure that new deployments do not degrade performance under load.

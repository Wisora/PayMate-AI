# Analytics Strategy

## Phase 1: Firestore Analytics

In the MVP phase, we use direct Firestore queries to populate our `AnalyticsDashboard`.

- **Metrics**: Total users, active subscriptions, revenue by month.
- **Implementation**: `backend/analytics.js` handles the aggregation logic.

## Phase 2: BigQuery & Looker

For scaling, we export Firestore data to BigQuery.

- **Setup**:
  1. Enable "Export to BigQuery" extension in Firebase.
  2. Create datasets for `transactions`, `users`, and `events`.
  3. Connect BigQuery to Looker Studio for executive dashboards.

## Event Tracking

We track the following custom events:

- `payment_started`
- `payment_completed`
- `ai_assistant_query`
- `theme_toggled`

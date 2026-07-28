# PayMate AI Recurring Calendar

## Overview

The Recurring Calendar provides a visual timeline of all upcoming and past payments.

## Features

- **Monthly View**: Scannable grid of payment dates.
- **Status Indicators**: Color-coded dots for pending (emerald), paused (slate), and completed (blue) payments.
- **Quick Actions**:
  - **Pause/Resume**: Stop a recurring payment without deleting it.
  - **Reschedule**: Drag or click to change the next billing date.
- **Frequency Support**:
  - Daily
  - Weekly
  - Monthly
  - Custom (e.g., every 15 days)

## Technical Details

- Built with `date-fns` for robust date manipulation.
- Localized via `react-i18next`.
- Real-time updates via WebSockets when a payment is triggered.

## Scheduling Logic

The backend uses `node-cron` to check for due payments every minute.

1. Fetch all active schedules from the database.
2. Check if `next_billing_date` <= `now`.
3. Execute payment via the selected provider.
4. Update `last_billing_date` and calculate `next_billing_date` based on frequency.
5. Send notification to user.

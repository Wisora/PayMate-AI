# PayMate AI WebSocket Troubleshooting

## Common Issues

### 1. "Failed to connect to WebSocket"

- **Cause**: The backend server is not running or the port is blocked.
- **Fix**: Run `npm run dev` and ensure port 3000 is accessible.

### 2. "WebSocket closed without opened"

- **Cause**: Client attempted to send data before the connection was established.
- **Fix**: Use a connection state check or a message queue.

### 3. Connection Drops

- **Cause**: Network instability or server timeout.
- **Fix**: Implement exponential backoff for reconnection in the frontend.

## Configuration

- **Development**: `ws://localhost:3000`
- **Production**: `wss://your-app-url.run.app`

Note: In the AI Studio preview environment, HMR is disabled, which might affect some real-time updates during development. Refresh the page if state feels stale.

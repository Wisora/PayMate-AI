# PayMate AI Authentication Guide

## Firebase Integration

PayMate AI uses Firebase for secure, scalable authentication.

### Supported Providers

- **Google**: Primary OAuth provider.
- **Microsoft**: Enterprise-ready OAuth provider.
- **Email/Password**: Fallback for traditional sign-ups.

### Setup Instructions

1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable Authentication and the desired providers.
3. Copy your Web App configuration to `.env`.
4. (Optional) For server-side validation, download your Service Account JSON and set `FIREBASE_SERVICE_ACCOUNT_JSON` in `.env`.

### Token Handling

- The client receives an ID Token upon login.
- This token is sent in the `Authorization: Bearer <token>` header for all API requests.
- The server validates the token using the Firebase Admin SDK.

### Security Tiers

- **Spark**: Free tier, limited to 50k monthly active users.
- **Blaze**: Pay-as-you-go, required for advanced features like Cloud Functions and SMS notifications.

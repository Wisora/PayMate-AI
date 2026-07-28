# PayMate AI Notification Service

## Channels

PayMate AI supports multi-channel notifications to ensure users never miss a payment.

### 1. In-App Alerts

- Real-time toasts using `framer-motion`.
- Persistent notification center in the header.

### 2. Push Notifications

- Web Push API for desktop and mobile browsers.
- Firebase Cloud Messaging (FCM) integration.

### 3. SMS & WhatsApp

- **Twilio**: Used for critical payment failures or 2FA.
- **WhatsApp Business API**: Used for upcoming payment reminders (opt-in).

### 4. Voice Notifications

- The AI Assistant can "speak" reminders using the Gemini TTS model (`gemini-2.5-flash-preview-tts`).
- Configurable in Settings.

## Logic

- **T-3 Days**: Email/WhatsApp reminder for upcoming large payments.
- **T-1 Day**: Push notification reminder.
- **Execution**: Real-time alert when payment is processed.
- **Failure**: Immediate SMS and Push notification.

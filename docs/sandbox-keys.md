# PayMate AI Sandbox Keys

## Testing Environment

Use these keys during development to simulate payment flows without real money.

### Stripe

- **Publishable Key**: `pk_test_...`
- **Secret Key**: `sk_test_...`
- **Test Card**: `4242 4242 4242 4242`

### PayPal

- **Client ID**: `...sandbox...`
- **Secret**: `...sandbox...`

### Alipay / UPI / Pix

- Use the provided sandbox merchant IDs in the `.env.example` file.
- Simulate success by sending `amount > 0`.
- Simulate failure by sending `amount = 0`.

## Security Warning

**NEVER** commit production keys to this repository. Use the AI Studio Secrets panel or a secure vault.

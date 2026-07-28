# PayMate AI Localization Guide

## Multilingual Support

PayMate AI supports 10 major languages:

- English (en)
- Chinese (zh)
- Japanese (ja)
- Korean (ko)
- Hindi (hi)
- Arabic (ar)
- Portuguese (pt)
- German (de)
- French (fr)
- Spanish (es)

## Implementation

We use `react-i18next` for frontend localization.

### Adding a New Language

1. Open `src/i18n.ts`.
2. Add the language code and translations to the `resources` object.
3. Update the `LanguageSelector.tsx` component to include the new option.

### Using Translations in Components

Always use the `useTranslation` hook:

```tsx
import { useTranslation } from "react-i18next";

const MyComponent = () => {
  const { t } = useTranslation();
  return <h1>{t("welcome")}</h1>;
};
```

### Best Practices

- **Keys**: Use snake_case for translation keys (e.g., `pay_now`).
- **Nesting**: Group related keys (e.g., `checkout.amount`).
- **Placeholders**: Use i18next interpolation for dynamic values: `t('hello', { name: 'User' })`.
- **RTL Support**: Arabic (ar) requires Right-to-Left layout. Ensure your CSS handles `dir="rtl"` appropriately.

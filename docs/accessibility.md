# Accessibility Strategy (WCAG 2.1)

## Commitment

PayMate AI is committed to being accessible to all users, including those with visual, auditory, or motor impairments.

## Testing Layers

1. **Automated**: `jest-axe` runs during CI to catch common violations (missing alt tags, low contrast).
2. **Manual**: Periodic audits using Screen Readers (NVDA, VoiceOver).
3. **Keyboard Navigation**: Ensuring all interactive elements are reachable via `Tab`.

## Running Accessibility Tests

```bash
npm test tests/accessibility/axe.test.js
```

## Standards

We aim for **WCAG 2.1 Level AA** compliance.

- Contrast ratio: 4.5:1 for normal text.
- Focus indicators: Clearly visible on all interactive elements.
- Semantic HTML: Proper use of `main`, `nav`, `header`, and `aria-labels`.

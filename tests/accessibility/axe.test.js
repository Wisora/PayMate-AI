import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '../../src/App';
import { ThemeProvider } from '../../src/contexts/ThemeContext';

expect.extend(toHaveNoViolations);

describe('Accessibility Audit', () => {
  it('should have no accessibility violations in the main App', async () => {
    const { container } = render(
      <ThemeProvider>
        <App />
      </ThemeProvider>
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

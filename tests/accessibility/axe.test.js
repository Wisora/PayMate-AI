/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from '../../src/App';
import { ThemeProvider } from '../../src/contexts/ThemeContext';

// Polyfill window.matchMedia for JSDOM
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock Firebase SDK imports
jest.mock('../../src/lib/firebase', () => ({
  auth: {},
  db: {},
}));

// Mock Google GenAI SDK
jest.mock('@google/genai', () => ({
  GoogleGenAI: jest.fn().mockImplementation(() => ({
    models: {
      generateContent: jest.fn().mockResolvedValue({ text: 'mocked text' }),
    },
  })),
  Modality: {
    AUDIO: 'AUDIO',
  },
}));

// Create a STABLE identity function for t to prevent infinite re-render loops
const mockT = (str) => str;

// Mock react-i18next with stable references
jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: mockT,
    i18n: {
      language: 'en',
      changeLanguage: () => Promise.resolve(),
    },
  }),
  initReactI18next: {
    type: '3rdParty',
    init: () => {},
  },
}));

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
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import "@testing-library/react";

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
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

global.window.fetchAPI = jest.fn().mockReturnValue(['17:00', '18:00', '19:00', '20:00']);
global.window.submitAPI = jest.fn().mockReturnValue(true);

const originalError = console.error;
const originalWarn = console.warn;

console.error = (...args) => {
  if (args[0]?.includes?.('Warning:')) return;
  if (args[0]?.includes?.('React Router Future Flag Warning')) return;
  if (args[0]?.includes?.('validateDOMNesting')) return;
  if (args[0]?.includes?.('findDOMNode')) return;
  if (args[0]?.includes?.('non-boolean attribute')) return;
  if (args[0]?.includes?.('strong')) return;
  originalError.call(console, ...args);
};

console.warn = (...args) => {
  if (args[0]?.includes?.('React Router Future Flag Warning')) return;
  if (args[0]?.includes?.('v7_startTransition')) return;
  if (args[0]?.includes?.('v7_relativeSplatPath')) return;
  if (args[0]?.includes?.('componentWillReceiveProps')) return;
  originalWarn.call(console, ...args);
};
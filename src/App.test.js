import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BitCryptic logo', () => {
  render(<App />);
  const logo = screen.getByAltText(/BitCryptic Logo/i);
  expect(logo).toBeInTheDocument();
});

test('renders Word Play Guide link', () => {
  render(<App />);
  const link = screen.getByText(/Word Play Guide/i);
  expect(link).toBeInTheDocument();
});

test('renders BitCryptic brand name', () => {
  render(<App />);
  const brand = screen.getByText(/BitCryptic/i);
  expect(brand).toBeInTheDocument();
});

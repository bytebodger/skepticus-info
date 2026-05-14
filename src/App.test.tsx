import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders left nav and overview page', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument();
  });

  it('shows not found page for unknown route', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/missing']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Page not found' })).toBeInTheDocument();
  });

  it('renders illustrations module route', () => {
    render(
      <HelmetProvider>
        <MemoryRouter initialEntries={['/illustrations']}>
          <App />
        </MemoryRouter>
      </HelmetProvider>
    );

    expect(screen.getByRole('heading', { level: 2, name: 'Illustrations' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /open illustration/i }).length).toBeGreaterThan(0);
  });
});

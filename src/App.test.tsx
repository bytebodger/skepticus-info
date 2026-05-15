import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () =>
{
    it('renders left nav and overview page', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('navigation')).toBeInTheDocument();
        expect(screen.getByRole('link', {
            name: 'Overview',
        })).toHaveAttribute('aria-current', 'page');
        expect(screen.getByRole('heading', {
            level: 1,
            name: /Call in every Tuesday night/i,
        })).toBeInTheDocument();
    });

    it('shows not found page for unknown route', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/missing']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Page not found',
        })).toBeInTheDocument();
    });

    it('renders illustrations module route', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/illustrations']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Illustrations',
        })).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /open illustration/i }).length).toBeGreaterThan(0);
    });

    it('renders bible verses module route', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/bible-verses']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Bible Verses',
        })).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /open verse:/i }).length).toBeGreaterThan(0);
    });

    it('renders syllogism builder module route', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/syllogism-builder']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Syllogism Builder',
        })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: 'Add Premise' })).toBeInTheDocument();
    });

    it('renders syllogisms module route', () =>
    {
        render(
            <HelmetProvider>
                <MemoryRouter initialEntries={['/syllogisms']}>
                    <App/>
                </MemoryRouter>
            </HelmetProvider>,
        );

        expect(screen.getByRole('heading', {
            level: 2,
            name: 'Syllogisms',
        })).toBeInTheDocument();
        expect(screen.getAllByRole('button', { name: /open syllogism:/i }).length).toBeGreaterThan(0);
    });
});

import { Link } from 'react-router-dom';
import { SEO } from '../seo';

export function NotFoundPage() {
  return (
    <section>
      <SEO title="Skepticus Info Hub | Not Found" description="Requested page was not found." />
      <h2>Page not found</h2>
      <p className="muted">The module you requested does not exist.</p>
      <p>
        <Link to="/">Return to overview</Link>
      </p>
    </section>
  );
}

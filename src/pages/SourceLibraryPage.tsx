import { sourceLibrary } from '../data/resources';
import { SEO } from '../seo';

export function SourceLibraryPage() {
  return (
    <section aria-labelledby="library-heading">
      <SEO
        title="Skepticus Info Hub | Source Library"
        description="Public source list of books, papers, articles, and videos used by Skepticus."
      />
      <header className="page-header">
        <h2 id="library-heading">Source Library</h2>
        <p className="muted">Publicly accessible citation list for transparent discussion.</p>
      </header>

      <div className="table-wrap">
        <table>
          <caption className="sr-only">Curated source library</caption>
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Type</th>
              <th scope="col">Link</th>
            </tr>
          </thead>
          <tbody>
            {sourceLibrary.map((source) => (
              <tr key={`${source.title}-${source.author}`}>
                <td>{source.title}</td>
                <td>{source.author}</td>
                <td>{source.type}</td>
                <td>
                  <a href={source.url} target="_blank" rel="noreferrer">
                    Open
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

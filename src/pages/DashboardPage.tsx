import { SEO } from '../seo';
import { quickStats, researchBriefs } from '../data/resources';

export function DashboardPage() {
  return (
    <section aria-labelledby="overview-heading">
      <SEO
        title="Skepticus Info Hub | Overview"
        description="Quick dashboard metrics and latest skeptical research briefs."
      />
    <header className={"page-header"}>
        <h1 id={"livestream-details"}>
            Call in every Tuesday night 5PM CST (until...?) for the Skepticus livestream!
        </h1>
        <h1>
            <a
                aria-label={"Join the Skepticus livestream on YouTube"}
                href={"https://tiny.cc/skepticus"}
                target={"_blank"}
                rel={"noreferrer"}
            >
                Join the livestream
            </a>
        </h1>
    </header>
      <header className="page-header">
        <h2 id="overview-heading">Overview</h2>
        <p className="muted">Compact command center for live discussions and public reference.</p>
      </header>

      <div className="stats-grid" role="list" aria-label="Quick stats">
        {quickStats.map((stat) => (
          <article key={stat.label} className="card stat-card" role="listitem">
            <h3>{stat.label}</h3>
            <p className="value">{stat.value}</p>
            <p className="muted">{stat.hint}</p>
          </article>
        ))}
      </div>

      <section aria-labelledby="latest-briefs-heading" className="section-gap">
        <h3 id="latest-briefs-heading">Latest Research Briefs</h3>
        <div className="table-wrap">
          <table>
            <caption className="sr-only">Recent research topics and review dates</caption>
            <thead>
              <tr>
                <th scope="col">Topic</th>
                <th scope="col">Summary</th>
                <th scope="col">Last Reviewed</th>
              </tr>
            </thead>
            <tbody>
              {researchBriefs.map((brief) => (
                <tr key={brief.topic}>
                  <td>{brief.topic}</td>
                  <td>{brief.summary}</td>
                  <td>{brief.lastReviewed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

import { FormEvent, useMemo, useState } from 'react';
import { SEO } from '../seo';

type Premise = {
  id: number;
  text: string;
};

export function SyllogismBuilderPage() {
  const [premiseInput, setPremiseInput] = useState('');
  const [conclusionInput, setConclusionInput] = useState('');
  const [premises, setPremises] = useState<Premise[]>([]);
  const [conclusion, setConclusion] = useState<string | null>(null);

  const canClear = premises.length > 0 || conclusion !== null;

  const nextPremiseNumber = useMemo(() => premises.length + 1, [premises.length]);

  const handleAddPremise = (event: FormEvent) => {
    event.preventDefault();
    const trimmed = premiseInput.trim();
    if (!trimmed) return;

    setPremises((prev) => [...prev, { id: Date.now() + prev.length, text: trimmed }]);
    setPremiseInput('');
  };

  const handleRemovePremise = (id: number) => {
    setPremises((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSetConclusion = (event: FormEvent) => {
    event.preventDefault();
    if (conclusion !== null) return;

    const trimmed = conclusionInput.trim();
    if (!trimmed) return;

    setConclusion(trimmed);
    setConclusionInput('');
  };

  const handleRemoveConclusion = () => {
    setConclusion(null);
  };

  const handleClearAll = () => {
    setPremises([]);
    setConclusion(null);
    setPremiseInput('');
    setConclusionInput('');
  };

  return (
    <section aria-labelledby="syllogism-builder-heading">
      <SEO
        title="Skepticus Info Hub | Syllogism Builder"
        description="Build syllogisms live with editable premises, single conclusion, and clear controls."
      />
      <header className="page-header">
        <h2 id="syllogism-builder-heading">Syllogism Builder</h2>
        <p className="muted">Add premises and one conclusion to build a clean on-screen syllogism.</p>
      </header>

      <div className="syllogism-grid">
        <article className="card">
          <h3>Premises</h3>
          <form onSubmit={handleAddPremise} className="syllogism-form" aria-label="Add premise form">
            <label htmlFor="premise-input" className="sr-only">
              Add premise
            </label>
            <input
              id="premise-input"
              className="syllogism-input"
              type="text"
              value={premiseInput}
              onChange={(event) => setPremiseInput(event.target.value)}
              placeholder={`Add Premise ${nextPremiseNumber}`}
            />
            <button type="submit" className="syllogism-button">
              Add Premise
            </button>
          </form>

          <ol className="syllogism-list" aria-label="Premises list">
            {premises.map((premise, index) => (
              <li key={premise.id} className="syllogism-item">
                <div>
                  <strong>{`Premise ${index + 1}:`}</strong> {premise.text}
                </div>
                <button
                  type="button"
                  className="syllogism-remove"
                  onClick={() => handleRemovePremise(premise.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ol>
          {premises.length === 0 ? <p className="muted">No premises yet.</p> : null}
        </article>

        <article className="card">
          <h3>Conclusion</h3>
          <form onSubmit={handleSetConclusion} className="syllogism-form" aria-label="Set conclusion form">
            <label htmlFor="conclusion-input" className="sr-only">
              Set conclusion
            </label>
            <input
              id="conclusion-input"
              className="syllogism-input"
              type="text"
              value={conclusionInput}
              onChange={(event) => setConclusionInput(event.target.value)}
              placeholder="Add Conclusion"
              disabled={conclusion !== null}
            />
            <button type="submit" className="syllogism-button" disabled={conclusion !== null}>
              Set Conclusion
            </button>
          </form>

          {conclusion ? (
            <div className="syllogism-conclusion">
              <p>
                <strong>Conclusion:</strong> {conclusion}
              </p>
              <button type="button" className="syllogism-remove" onClick={handleRemoveConclusion}>
                Remove Conclusion
              </button>
            </div>
          ) : (
            <p className="muted">No conclusion yet.</p>
          )}
        </article>
      </div>

      <div className="syllogism-actions">
        <button type="button" className="syllogism-clear" onClick={handleClearAll} disabled={!canClear}>
          Clear All
        </button>
      </div>
    </section>
  );
}

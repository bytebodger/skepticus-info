import { FormEvent, useState } from 'react';
import greenCheck from '/assets/greenCheck.png';
import redX from '/assets/redX.png';
import questionMark from '/assets/questionMark.png';
import { DescriptionAndFulfillmentRow } from '../components/DescriptionAndFulfillmentRow';
import { SEO } from '../seo';
import { TargetVerseRow } from '../components/TargetVerseRow';

const bulletPoints = [
    'Must be a forecast',
    'Prior publication',
    'Intentional prediction',
    'Non-mundane',
    'Future tense',
    'Not from god',
    'No cherry picking',
    'Words matter',
    'Names matter',
    'No allusions',
    'Did it happen???',
];

const createInitialMarks = () => new Array(bulletPoints.length).fill('questionMark');

interface ScorecardValues {
    targetVerse: string,
    description: string,
    fulfillmentVerse: string,
}

export const ProphecyScorecardPage = () => {
    const [draftValues, setDraftValues] = useState<ScorecardValues>({
        targetVerse: '',
        description: '',
        fulfillmentVerse: '',
    });
    const [submittedValues, setSubmittedValues] = useState<ScorecardValues | null>(null);
    const [marks, setMarks] = useState(createInitialMarks());

    const tdStyle = {
        color: 'white',
        fontWeight: 'bold',
        fontSize: '250%',
        padding: 10,
    }

    const isFormComplete =
        draftValues.targetVerse.trim().length > 0 &&
        draftValues.description.trim().length > 0 &&
        draftValues.fulfillmentVerse.trim().length > 0;

    const updateMarks = (index: number) => {
        setMarks(prevMarks => {
            const newMarks = [...prevMarks];
            if (newMarks[index] === 'questionMark') {
                newMarks[index] = 'greenCheck';
            } else if (newMarks[index] === 'greenCheck') {
                newMarks[index] = 'redX';
            } else {
                newMarks[index] = 'questionMark';
            }
            return newMarks;
        });
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!isFormComplete) {
            return;
        }

        setSubmittedValues({
            targetVerse: draftValues.targetVerse.trim(),
            description: draftValues.description.trim(),
            fulfillmentVerse: draftValues.fulfillmentVerse.trim(),
        });
        setMarks(createInitialMarks());
    };

    const handleClear = () => {
        setDraftValues({
            targetVerse: '',
            description: '',
            fulfillmentVerse: '',
        });
        setSubmittedValues(null);
        setMarks(createInitialMarks());
    };

    return (
        <section aria-labelledby='prophecy-scorecard-heading'>
            <SEO
                title='Skepticus Info Hub | Prophecy Scorecard'
                description='Interactive prophecy scorecard template for livestream use.'
            />
            <header className='page-header'>
                <h2 id='prophecy-scorecard-heading'>Prophecy Scorecard</h2>
                {!submittedValues && (
                    <p className='muted'>Enter the fields below to open the scorecard template.</p>
                )}
            </header>

            {!submittedValues ? (
                <form className='prophecy-form'
                    onSubmit={handleSubmit}>
                    <label className='prophecy-field'>
                        <span className='prophecy-label'>Target verse</span>
                        <input
                            className='prophecy-input'
                            type='text'
                            value={draftValues.targetVerse}
                            onChange={(event) => setDraftValues((prev) => ({
                                ...prev,
                                targetVerse: event.target.value,
                            }))}
                            placeholder='Genesis 14:18'
                            aria-label='Target verse'
                            required
                        />
                    </label>

                    <label className='prophecy-field'>
                        <span className='prophecy-label'>Description</span>
                        <textarea
                            className='prophecy-input prophecy-textarea'
                            value={draftValues.description}
                            onChange={(event) => setDraftValues((prev) => ({
                                ...prev,
                                description: event.target.value,
                            }))}
                            placeholder='The Last Supper foreshadowed'
                            aria-label='Description'
                            required
                            rows={3}
                        />
                    </label>

                    <label className='prophecy-field'>
                        <span className='prophecy-label'>Fulfillment verse</span>
                        <input
                            className='prophecy-input'
                            type='text'
                            value={draftValues.fulfillmentVerse}
                            onChange={(event) => setDraftValues((prev) => ({
                                ...prev,
                                fulfillmentVerse: event.target.value,
                            }))}
                            placeholder='Matthew 26:26-29'
                            aria-label='Fulfillment verse'
                            required
                        />
                    </label>

                    <div className='prophecy-actions'>
                        <button
                            type='submit'
                            className='prophecy-button'
                            disabled={!isFormComplete}
                        >
                            Show Scorecard
                        </button>
                    </div>
                </form>
            ) : (
                <>
                    <table className='prophecy-scorecard'>
                        <tbody>
                            <TargetVerseRow text={submittedValues.targetVerse}/>
                            <DescriptionAndFulfillmentRow
                                description={submittedValues.description}
                                fulfillment={submittedValues.fulfillmentVerse}
                            />
                            {bulletPoints.map((bulletPoint, index) => {
                                let alt;
                                let src;

                                if (marks[index] === 'greenCheck') {
                                    alt = 'green check';
                                    src = greenCheck;
                                } else if (marks[index] === 'redX') {
                                    alt = 'red x';
                                    src = redX;
                                } else {
                                    alt = 'question mark';
                                    src = questionMark;
                                }

                                return (
                                    <tr key={`${bulletPoint}-${index}`}>
                                        <td style={{
                                            height: 40,
                                            minWidth: 100,
                                            ...tdStyle,
                                        }}>
                                            <img
                                                alt={alt}
                                                src={src}
                                                height={40}
                                                style={{
                                                    cursor: 'pointer',
                                                    marginLeft: 30,
                                                    marginTop: 10,
                                                }}
                                                onClick={() => updateMarks(index)}
                                            />
                                        </td>
                                        <td style={{
                                            textAlign: 'right',
                                            ...tdStyle,
                                        }}>
                                            {index + 1}.
                                        </td>
                                        <td style={{
                                            textAlign: 'left',
                                            width: '100%',
                                            ...tdStyle,
                                        }}>
                                            {bulletPoint}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>

                    <div className='prophecy-actions'>
                        <button
                            type='button'
                            className='prophecy-button prophecy-reset'
                            onClick={handleClear}
                        >
                            Clear and enter new values
                        </button>
                    </div>
                </>
            )}
        </section>
    );
}

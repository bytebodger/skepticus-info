import { useMemo, useRef, useState } from 'react';
import { christianQuizQuestions, QuizQuestion } from '../data/christianQuiz';
import { SEO } from '../seo';

// Fisher-Yates shuffle — returns a new array
function shuffle<T>(arr: T[]): T[] {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function pointsFor(originalIndex: number): number {
    return Math.max(0, 4 - originalIndex);
}

interface QuizState {
    questions: QuizQuestion[];
    // For each question, an array of original indices in randomised display order
    answerOrders: number[][];
}

function buildQuizState(): QuizState {
    const questions = shuffle(christianQuizQuestions);
    const answerOrders = questions.map(() => shuffle([0, 1, 2, 3, 4]));
    return { questions, answerOrders };
}

export function ChristianQuizPage() {
    const [quiz, setQuiz] = useState<QuizState>(() => buildQuizState());
    const [currentIndex, setCurrentIndex] = useState(0);
    // originalIndex of the chosen answer for each question, or null if not yet answered
    const [selections, setSelections] = useState<(number | null)[]>(() =>
        new Array(christianQuizQuestions.length).fill(null),
    );
    const [complete, setComplete] = useState(false);
    const topRef = useRef<HTMLDivElement>(null);

    const answeredCount = selections.filter((s) => s !== null).length;
    const score = selections.reduce<number>((sum, sel) => sum + (sel !== null ? pointsFor(sel) : 0), 0);
    const maxPossible = answeredCount * 4;
    const percentage = maxPossible > 0 ? ((score / maxPossible) * 100).toFixed(1) : '0.0';

    const finalPercentage = useMemo(() => {
        const total = quiz.questions.length * 4;
        return total > 0 ? ((score / total) * 100).toFixed(1) : '0.0';
    }, [score, quiz.questions.length]);

    const currentQuestion = quiz.questions[currentIndex];
    const currentAnswerOrder = quiz.answerOrders[currentIndex];
    const currentSelection = selections[currentIndex];
    const isAnswered = currentSelection !== null;
    const isLastQuestion = currentIndex === quiz.questions.length - 1;

    function handleSelectAnswer(originalIndex: number) {
        if (isAnswered) return;
        const next = [...selections];
        next[currentIndex] = originalIndex;
        setSelections(next);
    }

    function handleNext() {
        if (isLastQuestion) {
            setComplete(true);
        } else {
            setCurrentIndex((i) => i + 1);
        }
        topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function handleRestart() {
        setQuiz(buildQuizState());
        setCurrentIndex(0);
        setSelections(new Array(christianQuizQuestions.length).fill(null));
        setComplete(false);
        topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function getFinalLabel(pct: number): string {
        if (pct >= 90) return 'True Believer';
        if (pct >= 75) return 'Devout Christian';
        if (pct >= 55) return 'Moderate Christian';
        if (pct >= 35) return 'Cultural Christian';
        if (pct >= 15) return 'Nominal / Lapsed';
        return 'Non-Believer';
    }

    const finalPctNum = parseFloat(finalPercentage);

    return (
        <section aria-labelledby='quiz-heading'>
            <SEO
                title='Skepticus Info Hub | Christian Quiz'
                description='Take the How Christian Are You? quiz and see how your beliefs score.'
            />
            <header className='page-header'>
                <h2 id='quiz-heading'>How Christian Are You?</h2>
                <p className='muted'>
                    Answer each question honestly. Your score is revealed after every answer.
                </p>
            </header>

            <div ref={topRef} />

            {complete ? (
                // ── Final results screen ──────────────────────────────────────
                <div className='quiz-results card'>
                    <h3 className='quiz-results-label'>{getFinalLabel(finalPctNum)}</h3>
                    <p className='quiz-results-score'>
                        Final score:{' '}
                        <strong>
                            {score} / {quiz.questions.length * 4}
                        </strong>{' '}
                        &mdash; <strong>{finalPercentage}%</strong>
                    </p>

                    <div className='quiz-results-bar-wrap' aria-hidden='true'>
                        <div
                            className='quiz-results-bar-fill'
                            style={{ width: `${Math.min(finalPctNum, 100)}%` }}
                        />
                    </div>

                    <div className='quiz-results-breakdown'>
                        {quiz.questions.map((q, qi) => {
                            const sel = selections[qi];
                            const pts = sel !== null ? pointsFor(sel) : 0;
                            return (
                                <div key={qi} className='quiz-result-row'>
                                    <span className='quiz-result-q'>{q.question}</span>
                                    <span className='quiz-result-a'>
                                        {sel !== null ? q.answers[sel] : '—'}
                                    </span>
                                    <span
                                        className={`quiz-result-pts quiz-pts-${pts}`}
                                        aria-label={`${pts} points`}
                                    >
                                        {pts} / 4
                                    </span>
                                </div>
                            );
                        })}
                    </div>

                    <button type='button' className='quiz-next-btn' onClick={handleRestart}>
                        Retake Quiz
                    </button>
                </div>
            ) : (
                // ── Active quiz screen ────────────────────────────────────────
                <div className='quiz-wrap'>
                    {/* Progress + running score */}
                    <div className='quiz-meta'>
                        <span className='quiz-progress'>
                            Question {currentIndex + 1} of {quiz.questions.length}
                        </span>
                        {answeredCount > 0 && (
                            <span className='quiz-running-score'>
                                Score: <strong>{score}</strong> / <strong>{maxPossible}</strong>
                                {' '}—{' '}
                                <strong>{percentage}%</strong>
                            </span>
                        )}
                    </div>

                    {/* Progress bar */}
                    <div className='quiz-progress-bar' aria-hidden='true'>
                        <div
                            className='quiz-progress-fill'
                            style={{
                                width: `${((currentIndex + (isAnswered ? 1 : 0)) / quiz.questions.length) * 100}%`,
                            }}
                        />
                    </div>

                    {/* Question card */}
                    <div className='quiz-card card'>
                        <p className='quiz-reference muted'>{currentQuestion.reference}</p>
                        <p className='quiz-question'>{currentQuestion.question}</p>

                        <ol className='quiz-answers' aria-label='Answer choices'>
                            {currentAnswerOrder.map((originalIndex, displayIndex) => {
                                const pts = pointsFor(originalIndex);
                                const isSelected = currentSelection === originalIndex;
                                const answerLabel = ['A.', 'B.', 'C.', 'D.', 'E.'][displayIndex];
                                let cls = 'quiz-answer-btn';
                                if (isAnswered) {
                                    if (isSelected) {
                                        cls += ` quiz-answer-selected quiz-pts-border-${pts}`;
                                    } else {
                                        cls += ' quiz-answer-revealed';
                                    }
                                }
                                return (
                                    <li key={originalIndex}>
                                        <button
                                            type='button'
                                            className={cls}
                                            onClick={() => handleSelectAnswer(originalIndex)}
                                            disabled={isAnswered && !isSelected}
                                            aria-pressed={isSelected}
                                        >
                                            <span className='quiz-answer-text'>
                                                <strong>{answerLabel}</strong> {currentQuestion.answers[originalIndex]}
                                            </span>
                                            {isAnswered && (
                                                <span
                                                    className={`quiz-pts-badge quiz-pts-${pts}`}
                                                    aria-label={`${pts} points`}
                                                >
                                                    {pts} pt{pts !== 1 ? 's' : ''}
                                                </span>
                                            )}
                                        </button>
                                    </li>
                                );
                            })}
                        </ol>

                        {isAnswered && (
                            <div className='quiz-answered-feedback'>
                                <span className={`quiz-pts-earned quiz-pts-${pointsFor(currentSelection!)}`}>
                                    +{pointsFor(currentSelection!)} point{pointsFor(currentSelection!) !== 1 ? 's' : ''}
                                </span>
                                <button
                                    type='button'
                                    className='quiz-next-btn'
                                    onClick={handleNext}
                                    autoFocus
                                >
                                    {isLastQuestion ? 'See Results' : 'Next Question →'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
}

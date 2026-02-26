import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ChevronRight, ChevronLeft, CheckCircle2, Activity } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Basic Info",
        question: "What is the primary reason for your visit today?",
        options: ["General Checkup", "Chronic Condition Management", "Acute Pain/Illness", "Prescription Refill", "Other"],
        type: "radio"
    },
    {
        id: 2,
        title: "Symptoms",
        question: "How long have you been experiencing these symptoms?",
        options: ["Just today", "A few days", "1-2 weeks", "More than a month"],
        type: "radio"
    },
    {
        id: 3,
        title: "Details",
        question: "Please provide any additional context for the care team:",
        type: "textarea",
        placeholder: "E.g., I've also had a mild fever since yesterday..."
    }
];

const IntakeFlow = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [isCompleted, setIsCompleted] = useState(false);

    const contentRef = useRef(null);
    const progressBarRef = useRef(null);

    useEffect(() => {
        // Animate content on step change
        if (contentRef.current) {
            gsap.fromTo(contentRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
            );
        }

        // Animate progress bar
        if (progressBarRef.current) {
            const progress = isCompleted ? 100 : ((currentStep) / steps.length) * 100;
            gsap.to(progressBarRef.current, { width: `${progress}%`, duration: 0.5, ease: "power2.out" });
        }
    }, [currentStep, isCompleted]);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(curr => curr + 1);
        } else {
            setIsCompleted(true);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) setCurrentStep(curr => curr - 1);
    };

    const currentQuestion = steps[currentStep];

    return (
        <div className="container py-xl" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="glass-panel" style={{ width: '100%', maxWidth: '700px', padding: '3rem', position: 'relative', overflow: 'hidden' }}>

                {/* Progress Bar Container */}
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--border-color)' }}>
                    <div ref={progressBarRef} style={{ height: '100%', background: 'var(--accent-gradient)', width: '0%', borderRadius: '0 4px 4px 0' }} />
                </div>

                {!isCompleted ? (
                    <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--accent-primary)' }}>Step {currentStep + 1} of {steps.length}</span>
                            <span style={{ fontSize: '0.875rem', fontWeight: '500', color: 'var(--text-secondary)' }}>{currentQuestion.title}</span>
                        </div>

                        <div ref={contentRef} style={{ minHeight: '220px' }}>
                            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{currentQuestion.question}</h2>

                            {currentQuestion.type === 'radio' && (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {currentQuestion.options.map((opt, i) => (
                                        <label
                                            key={i}
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                padding: '1rem',
                                                border: `1px solid ${answers[currentQuestion.id] === opt ? 'var(--accent-primary)' : 'var(--border-color)'}`,
                                                borderRadius: 'var(--radius-md)',
                                                cursor: 'pointer',
                                                background: answers[currentQuestion.id] === opt ? 'rgba(0,113,227,0.05)' : 'transparent',
                                                transition: 'all var(--transition-fast)'
                                            }}
                                            onClick={() => setAnswers({ ...answers, [currentQuestion.id]: opt })}
                                        >
                                            <input
                                                type="radio"
                                                name={`q-${currentQuestion.id}`}
                                                checked={answers[currentQuestion.id] === opt}
                                                onChange={() => { }}
                                                style={{ marginRight: '1rem', accentColor: 'var(--accent-primary)' }}
                                            />
                                            <span style={{ fontSize: '1rem', fontWeight: answers[currentQuestion.id] === opt ? '500' : '400' }}>{opt}</span>
                                        </label>
                                    ))}
                                </div>
                            )}

                            {currentQuestion.type === 'textarea' && (
                                <textarea
                                    placeholder={currentQuestion.placeholder}
                                    value={answers[currentQuestion.id] || ''}
                                    onChange={(e) => setAnswers({ ...answers, [currentQuestion.id]: e.target.value })}
                                    style={{
                                        width: '100%',
                                        minHeight: '120px',
                                        padding: '1rem',
                                        borderRadius: 'var(--radius-md)',
                                        border: '1px solid var(--border-color)',
                                        fontFamily: 'var(--font-sans)',
                                        fontSize: '1rem',
                                        resize: 'vertical',
                                        background: 'transparent',
                                        outline: 'none',
                                        transition: 'border var(--transition-fast)'
                                    }}
                                    onFocus={(e) => e.target.style.border = '1px solid var(--accent-primary)'}
                                    onBlur={(e) => e.target.style.border = '1px solid var(--border-color)'}
                                />
                            )}
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-color)' }}>
                            <button
                                onClick={handlePrev}
                                className="btn btn-outline"
                                style={{ opacity: currentStep === 0 ? 0.5 : 1, pointerEvents: currentStep === 0 ? 'none' : 'auto' }}
                            >
                                <ChevronLeft size={18} /> Back
                            </button>

                            <button
                                onClick={handleNext}
                                className="btn btn-accent"
                                disabled={!answers[currentQuestion.id] && currentQuestion.type !== 'textarea'}
                                style={{ opacity: (!answers[currentQuestion.id] && currentQuestion.type !== 'textarea') ? 0.5 : 1 }}
                            >
                                {currentStep === steps.length - 1 ? 'Complete Intake' : 'Continue'} <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div ref={contentRef} style={{ textAlign: 'center', padding: '2rem 0' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(0,199,183,0.1), rgba(0,113,227,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', margin: '0 auto 1.5rem auto' }}>
                            <CheckCircle2 size={40} />
                        </div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>You're all set!</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', maxWidth: '400px', margin: '0 auto 2rem auto' }}>
                            Your smart intake has been securely transmitted to the Algoma care team. This will save valuable time during your appointment.
                        </p>
                        <div className="glass-panel" style={{ textAlign: 'left', background: 'rgba(0,0,0,0.02)', padding: '1.5rem', marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>Summary</h4>
                            {steps.map(s => (
                                <div key={s.id} style={{ marginBottom: '0.5rem' }}>
                                    <span style={{ fontWeight: '500', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{s.title}:</span>
                                    <span style={{ marginLeft: '0.5rem', fontSize: '0.9375rem' }}>{answers[s.id] || 'None provided'}</span>
                                </div>
                            ))}
                        </div>
                        <button onClick={() => window.location.href = "/"} className="btn btn-primary">
                            Return Home
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default IntakeFlow;

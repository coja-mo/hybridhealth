import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Search, PlayCircle, FileText, ArrowRight } from 'lucide-react';

const categories = ["All Topics", "Chronic Care", "Post-Op", "Preventative", "Nutrition"];

const articles = [
    {
        title: "Managing Hypertension in the Algoma Winter",
        category: "Chronic Care",
        type: "Article",
        icon: <FileText size={20} />,
        readTime: "5 min read",
        desc: "Tips for staying active and managing blood pressure during the cold Northern Ontario months."
    },
    {
        title: "Post-Surgery Recovery Exercises",
        category: "Post-Op",
        type: "Video",
        icon: <PlayCircle size={20} />,
        readTime: "12 min watch",
        desc: "Follow along with local physical therapists for safe, guided recovery movements."
    },
    {
        title: "Dietary Guide for Diabetes Management",
        category: "Nutrition",
        type: "Article",
        icon: <FileText size={20} />,
        readTime: "8 min read",
        desc: "A comprehensive guide to eating healthily using locally sourced Sault Ste. Marie ingredients."
    },
    {
        title: "Annual Preventative Checklist",
        category: "Preventative",
        type: "Article",
        icon: <FileText size={20} />,
        readTime: "4 min read",
        desc: "What screenings and checkups you should be requesting from your primary care provider this year."
    }
];

const EducationHub = () => {
    const cardsRef = useRef(null);

    useEffect(() => {
        if (cardsRef.current) {
            gsap.fromTo(cardsRef.current.children,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", delay: 0.2 }
            );
        }
    }, []);

    return (
        <div className="container py-xl">
            <div className="text-center mb-xl" style={{ maxWidth: '700px', margin: '0 auto var(--space-xl) auto' }}>
                <h1 style={{ marginBottom: '1rem' }}>Patient Education Hub</h1>
                <p style={{ margin: '0 auto' }}>
                    Explore curated, premium educational resources to empower your health journey.
                    Customized for the specific needs of our community.
                </p>

                <div style={{ position: 'relative', marginTop: '2rem', maxWidth: '500px', margin: '2rem auto 0 auto' }}>
                    <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                    <input
                        type="text"
                        placeholder="Search symptoms, conditions, or guides..."
                        style={{
                            width: '100%',
                            padding: '1rem 1rem 1rem 3rem',
                            borderRadius: 'var(--radius-full)',
                            border: '1px solid var(--border-color)',
                            background: 'var(--surface-color)',
                            backdropFilter: 'blur(20px)',
                            fontSize: '1rem',
                            fontFamily: 'var(--font-sans)',
                            boxShadow: 'var(--shadow-sm)',
                            outline: 'none',
                            transition: 'all var(--transition-fast)'
                        }}
                        onFocus={(e) => {
                            e.target.style.borderColor = 'var(--accent-primary)';
                            e.target.style.boxShadow = 'var(--shadow-md)';
                        }}
                        onBlur={(e) => {
                            e.target.style.borderColor = 'var(--border-color)';
                            e.target.style.boxShadow = 'var(--shadow-sm)';
                        }}
                    />
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1.5rem' }}>
                    {categories.map((cat, i) => (
                        <button key={i} className={`btn ${i === 0 ? 'btn-primary' : 'btn-outline'}`} style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <div ref={cardsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                {articles.map((article, i) => (
                    <div key={i} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', height: '100%', cursor: 'pointer', padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '160px', background: `linear-gradient(135deg, rgba(0,113,227,0.1), rgba(0,199,183,0.1))`, borderBottom: '1px solid var(--border-color)', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '600', color: 'var(--accent-primary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                {article.category}
                            </div>
                            <div style={{ position: 'absolute', bottom: '1rem', right: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '0.25rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.75rem', fontWeight: '500' }}>
                                {article.icon} {article.type}
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{article.readTime}</span>
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>{article.title}</h3>
                            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1 }}>{article.desc}</p>

                            <div style={{ display: 'flex', alignItems: 'center', color: 'var(--accent-primary)', fontWeight: '500', fontSize: '0.9375rem', gap: '0.5rem' }}>
                                Read more <ArrowRight size={16} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EducationHub;

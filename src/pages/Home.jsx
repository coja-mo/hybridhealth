import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Activity, BookOpen, MapPin, ArrowRight } from 'lucide-react';

const Home = () => {
    const heroRef = useRef(null);
    const featuresRef = useRef(null);

    useEffect(() => {
        // Hero Animations
        const heroElements = heroRef.current.children;
        gsap.fromTo(heroElements,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.1 }
        );

        // Feature Animations (Simple scroll trigger simulation for now)
        const featureCards = featuresRef.current.children;
        gsap.fromTo(featureCards,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power2.out", delay: 0.5 }
        );
    }, []);

    return (
        <div className="home-container">
            {/* Hero Section */}
            <section className="hero-section container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div ref={heroRef} className="text-center" style={{ maxWidth: '800px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1rem', background: 'rgba(0,113,227,0.1)', color: 'var(--accent-primary)', borderRadius: 'var(--radius-full)', marginBottom: 'var(--space-lg)', fontSize: '0.875rem', fontWeight: '500' }}>
                        <MapPin size={16} /> Proudly serving Sault Ste. Marie & Algoma
                    </div>
                    <h1 style={{ marginBottom: 'var(--space-md)' }}>
                        The Future of Local Healthcare is <span className="text-gradient">Here</span>.
                    </h1>
                    <p style={{ margin: '0 auto var(--space-xl) auto', fontSize: '1.25rem' }}>
                        Experience an intelligent, high-tech connection to your care team.
                        Prepare for appointments with dynamic Smart Flows and access premium patient education designed for our community.
                    </p>
                    <div className="flex justify-center gap-md">
                        <Link to="/intake" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Start Smart Intake <ArrowRight size={20} />
                        </Link>
                        <Link to="/education" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>
                            Explore Resources
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Showcase */}
            <section className="features-section" style={{ padding: 'var(--space-2xl) 0', backgroundColor: 'var(--surface-solid)' }}>
                <div className="container">
                    <div className="text-center mb-xl" style={{ maxWidth: '600px', margin: '0 auto var(--space-xl) auto' }}>
                        <h2>Intelligent workflows for better health outcomes.</h2>
                        <p style={{ marginTop: 'var(--space-sm)' }}>
                            Built with precision and care, HybridHealth streamlines the patient experience before you even step through the door.
                        </p>
                    </div>

                    <div ref={featuresRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                        {/* Feature 1 */}
                        <div className="glass-panel" style={{ background: 'var(--bg-color)', border: 'none' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(0,113,227,0.2), rgba(0,199,183,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: 'var(--space-md)' }}>
                                <Activity size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Dynamic Smart Flows</h3>
                            <p style={{ fontSize: '1rem' }}>
                                Our proprietary intake system adapts to your unique health profile, ensuring your care team has exactly what they need, saving you time in the clinic.
                            </p>
                            <Link to="/intake" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: 'var(--space-md)', fontWeight: '500' }}>
                                Try Intake Flow <ArrowRight size={16} />
                            </Link>
                        </div>

                        {/* Feature 2 */}
                        <div className="glass-panel" style={{ background: 'var(--bg-color)', border: 'none' }}>
                            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(0,199,183,0.2), rgba(0,113,227,0.2))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-secondary)', marginBottom: 'var(--space-md)' }}>
                                <BookOpen size={24} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Premium Education Hub</h3>
                            <p style={{ fontSize: '1rem' }}>
                                Access highly curated, modern educational materials specific to chronic condition management and preventative care in the Algoma region.
                            </p>
                            <Link to="/education" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginTop: 'var(--space-md)', fontWeight: '500' }}>
                                View Resources <ArrowRight size={16} />
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;

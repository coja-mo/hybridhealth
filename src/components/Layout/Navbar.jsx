import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, BookOpen, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const navbarStyles = {
    header: {
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderBottom: '1px solid var(--border-color)',
        padding: '1rem 0'
    },
    navContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 var(--space-lg)',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontWeight: '600',
        fontSize: '1.25rem',
        color: 'var(--text-primary)',
        textDecoration: 'none'
    },
    logoIcon: {
        color: 'var(--accent-primary)'
    },
    navLinks: {
        display: 'flex',
        gap: 'var(--space-xl)',
        alignItems: 'center'
    },
    link: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        color: 'var(--text-secondary)',
        fontWeight: '500',
        fontSize: '0.9375rem',
        transition: 'color var(--transition-fast)'
    },
    linkIcon: {
        width: '18px',
        height: '18px'
    }
};

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <header style={navbarStyles.header}>
            <div style={navbarStyles.navContainer}>
                <Link to="/" style={navbarStyles.logo}>
                    <Stethoscope style={navbarStyles.logoIcon} />
                    HybridHealth
                </Link>

                {/* Desktop Nav */}
                <nav style={navbarStyles.navLinks} className="desktop-nav">
                    <Link to="/intake" style={navbarStyles.link} className="nav-link">
                        <Activity style={navbarStyles.linkIcon} />
                        Smart Intake
                    </Link>
                    <Link to="/education" style={navbarStyles.link} className="nav-link">
                        <BookOpen style={navbarStyles.linkIcon} />
                        Education Hub
                    </Link>
                    <button
                        onClick={toggleTheme}
                        className="btn btn-outline"
                        style={{ padding: '0.5rem', borderRadius: '50%', minWidth: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                        aria-label="Toggle Dark Mode"
                    >
                        {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <Link to="/intake" className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                        Book Appointment
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;

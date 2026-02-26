import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Heart, Shield, Mail } from 'lucide-react';

const footerStyles = {
    footer: {
        backgroundColor: 'var(--surface-color)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid var(--border-color)',
        padding: '4rem 0 2rem 0',
        marginTop: 'auto'
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 var(--space-lg)',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '3rem'
    },
    brandCol: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
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
    desc: {
        color: 'var(--text-secondary)',
        fontSize: '0.9375rem',
        lineHeight: '1.6'
    },
    linkCol: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    colTitle: {
        fontWeight: '600',
        color: 'var(--text-primary)',
        marginBottom: '0.5rem'
    },
    link: {
        color: 'var(--text-secondary)',
        textDecoration: 'none',
        fontSize: '0.9375rem',
        transition: 'color var(--transition-fast)'
    },
    bottom: {
        maxWidth: '1200px',
        margin: '3rem auto 0 auto',
        padding: '2rem var(--space-lg) 0 var(--space-lg)',
        borderTop: '1px solid var(--border-color)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'var(--text-secondary)',
        fontSize: '0.875rem'
    }
};

const Footer = () => {
    return (
        <footer style={footerStyles.footer}>
            <div style={footerStyles.container}>
                <div style={footerStyles.brandCol}>
                    <Link to="/" style={footerStyles.logo}>
                        <Stethoscope style={{ color: 'var(--accent-primary)' }} />
                        HybridHealth
                    </Link>
                    <p style={footerStyles.desc}>
                        Empowering the Sault Ste. Marie and Algoma region with premier, smart healthcare solutions. Local focus, global standards.
                    </p>
                </div>

                <div style={footerStyles.linkCol}>
                    <h4 style={footerStyles.colTitle}>Platform</h4>
                    <Link to="/intake" style={footerStyles.link}>Smart Intake</Link>
                    <Link to="/education" style={footerStyles.link}>Education Hub</Link>
                    <Link to="/" style={footerStyles.link}>Virtual Care</Link>
                </div>

                <div style={footerStyles.linkCol}>
                    <h4 style={footerStyles.colTitle}>Support</h4>
                    <a href="#" style={footerStyles.link}>Contact Us</a>
                    <a href="#" style={footerStyles.link}>FAQ</a>
                    <a href="#" style={footerStyles.link}>Privacy Policy</a>
                </div>
            </div>

            <div style={footerStyles.bottom}>
                <p>&copy; {new Date().getFullYear()} HybridHealth Algoma. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Heart size={18} />
                    <Shield size={18} />
                    <Mail size={18} />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

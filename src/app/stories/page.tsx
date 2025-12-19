'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { storiesData } from './storiesData';

const stories = Object.values(storiesData);

export default function Stories() {
  useEffect(() => {
    // Add smooth scrolling
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      if (anchor) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Animate story cards on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.opacity = '1';
          (entry.target as HTMLElement).style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.story-card').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(30px)';
      element.style.transition = 'all 0.6s ease-out';
      observer.observe(el);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      {/* Floating Shapes Background */}
      <div className="floating-shapes">
        <svg className="shape" width="100" height="100" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="#4A90E2"/>
        </svg>
        <svg className="shape" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,10 90,90 10,90" fill="#FF6B9D"/>
        </svg>
        <svg className="shape" width="100" height="100" viewBox="0 0 100 100">
          <rect x="10" y="10" width="80" height="80" fill="#FFD93D"/>
        </svg>
        <svg className="shape" width="100" height="100" viewBox="0 0 100 100">
          <path d="M50,10 L60,40 L90,40 L65,60 L75,90 L50,70 L25,90 L35,60 L10,40 L40,40 Z" fill="#6BCF7F"/>
        </svg>
        <svg className="shape" width="100" height="100" viewBox="0 0 100 100">
          <polygon points="50,20 70,40 70,70 50,90 30,70 30,40" fill="#9B7EDE"/>
        </svg>
      </div>

      {/* Header */}
      <header>
        <div className="nav-container">
          <Link href="/" className="logo">
            <span className="logo-icon">🚀</span>
            <span>Cognitiva</span>
          </Link>
          <Link href="/" className="cta-button">← Volver al Inicio</Link>
        </div>
      </header>

      {/* Hero Section for Stories */}
      <section className="hero" style={{paddingBottom: '4rem'}}>
        <div className="stars">
          <span className="star">⭐</span>
          <span className="star">✨</span>
          <span className="star">🌟</span>
          <span className="star">💫</span>
          <span className="star">⭐</span>
        </div>
        <h1>¡Elige Tu Historia Favorita! 📚✨</h1>
        <p>Cada cuento es una nueva aventura esperando por ti 🌈</p>
      </section>

      {/* Stories Grid */}
      <section className="features" style={{paddingTop: '2rem'}}>
        <div className="features-container">
          <div className="features-grid">
            {stories.map((story, index) => (
              <Link
                href={`/stories/${story.id}`}
                key={story.id}
                className="story-card feature-card"
                style={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                  transitionDelay: `${index * 0.1}s`
                }}
              >
                <div style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '3.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1rem',
                  background: story.color,
                  borderRadius: '50%',
                  transition: 'transform 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                }}>
                  {story.icon}
                </div>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <div style={{
                  marginTop: '1rem',
                  padding: '0.5rem 1rem',
                  background: 'rgba(74, 144, 226, 0.1)',
                  borderRadius: '20px',
                  fontSize: '0.9rem',
                  color: '#4A90E2',
                  fontWeight: '600'
                }}>
                  ⏱️ {story.readTime} de lectura
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="cta-section" style={{marginTop: '4rem'}}>
        <h2>¿Listo para la Aventura? 🎉</h2>
        <p>Haz clic en cualquier historia y comienza a leer</p>
        <div style={{marginTop: '2rem', fontSize: '3rem'}}>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite'}}>📖</span>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite 0.2s'}}>✨</span>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite 0.4s'}}>🌟</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>🌟 Cognitiva - Haciendo que leer sea divertido desde 2024 🌟</p>
        <p>📧 Contacto: hola@cognitiva.com | 📱 WhatsApp: +52 123 456 7890</p>
        <div className="social-links">
          <a href="#" className="social-link">📘</a>
          <a href="#" className="social-link">📷</a>
          <a href="#" className="social-link">🐦</a>
          <a href="#" className="social-link">▶️</a>
        </div>
        <p style={{marginTop: '2rem', fontSize: '0.9rem'}}>© 2024 Cognitiva. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

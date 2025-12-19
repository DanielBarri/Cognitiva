'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { StoryData } from '../storiesData';
import {
  DinosaurIllustration,
  SpaceIllustration,
  PrincessIllustration,
  SuperheroIllustration,
  JungleIllustration,
  PirateIllustration,
  DragonIllustration,
  SoccerIllustration
} from './StoryIllustrations';

interface StoryContentProps {
  story: StoryData;
}

function getStoryIllustration(storyId: string) {
  const illustrations: Record<string, React.ReactElement> = {
    'dinosaurios': <DinosaurIllustration />,
    'astronautas': <SpaceIllustration />,
    'princesas': <PrincessIllustration />,
    'superheroes': <SuperheroIllustration />,
    'animales': <JungleIllustration />,
    'piratas': <PirateIllustration />,
    'dragones': <DragonIllustration />,
    'deportes': <SoccerIllustration />
  };
  return illustrations[storyId] || null;
}

export default function StoryContent({ story }: StoryContentProps) {
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

    // Animate story paragraphs on scroll
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

    document.querySelectorAll('.story-paragraph').forEach(el => {
      const element = el as HTMLElement;
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'all 0.8s ease-out';
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
          <Link href="/stories" className="cta-button">← Ver Todas las Historias</Link>
        </div>
      </header>

      {/* Story Header */}
      <section className="hero" style={{paddingBottom: '3rem'}}>
        <div className="stars">
          <span className="star">⭐</span>
          <span className="star">✨</span>
          <span className="star">🌟</span>
          <span className="star">💫</span>
          <span className="star">⭐</span>
        </div>

        <div style={{
          width: '120px',
          height: '120px',
          fontSize: '5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          background: story.color,
          borderRadius: '50%',
          animation: 'bounce 2s infinite'
        }}>
          {story.icon}
        </div>

        <h1>{story.title}</h1>
        <p style={{fontSize: '1.3rem', marginTop: '1rem'}}>{story.description}</p>

        <div style={{
          marginTop: '1.5rem',
          padding: '0.7rem 1.5rem',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '30px',
          fontSize: '1.1rem',
          color: story.color,
          fontWeight: '700',
          display: 'inline-block'
        }}>
          ⏱️ Tiempo de lectura: {story.readTime}
        </div>

        {/* Story Illustration */}
        <div style={{marginTop: '2rem'}}>
          {getStoryIllustration(story.id)}
        </div>
      </section>

      {/* Story Content */}
      <section style={{
        padding: '4rem 2rem',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        <div style={{
          background: 'white',
          borderRadius: '30px',
          padding: '3rem',
          boxShadow: '0 20px 60px rgba(0,0,0,0.1)',
          border: `5px solid ${story.color}`
        }}>
          {story.content.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="story-paragraph"
              style={{
                fontSize: '1.3rem',
                lineHeight: '2',
                marginBottom: '2rem',
                color: '#2C3E50',
                textAlign: 'left',
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {paragraph}
            </p>
          ))}

          {/* End of Story */}
          <div style={{
            textAlign: 'center',
            marginTop: '3rem',
            padding: '2rem',
            background: `linear-gradient(135deg, ${story.color}22, ${story.color}44)`,
            borderRadius: '20px'
          }}>
            <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>
              ¡Felicitaciones! 🎉
            </h3>
            <p style={{fontSize: '1.2rem', color: '#555'}}>
              Has terminado de leer esta historia
            </p>
            <div style={{fontSize: '3rem', margin: '1rem 0'}}>
              ⭐⭐⭐
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginTop: '3rem',
          flexWrap: 'wrap'
        }}>
          <Link
            href="/stories"
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              textDecoration: 'none'
            }}
          >
            📚 Leer Otra Historia
          </Link>
          <Link
            href="/"
            className="cta-button"
            style={{
              fontSize: '1.2rem',
              padding: '1rem 2rem',
              background: '#6BCF7F',
              textDecoration: 'none'
            }}
          >
            🏠 Volver al Inicio
          </Link>
        </div>
      </section>

      {/* Encouragement Section */}
      <section className="cta-section" style={{marginTop: '4rem'}}>
        <h2>¡Sigue Leyendo y Aprendiendo! 📖</h2>
        <p>Cada historia te hace más inteligente y creativo</p>
        <div style={{marginTop: '2rem', fontSize: '3rem'}}>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite'}}>🌟</span>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite 0.2s'}}>✨</span>
          <span style={{display: 'inline-block', animation: 'bounce 2s infinite 0.4s'}}>💫</span>
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

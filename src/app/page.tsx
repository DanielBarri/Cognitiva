'use client';

import { useEffect } from 'react';

export default function Home() {
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

    // Animate elements on scroll
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

    document.querySelectorAll('.feature-card, .benefit-item').forEach(el => {
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
          <a href="#" className="logo">
            <span className="logo-icon">🚀</span>
            <span>Cognitiva</span>
          </a>
          <a href="#empezar" className="cta-button">¡Empezar Ahora!</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="stars">
          <span className="star">⭐</span>
          <span className="star">✨</span>
          <span className="star">🌟</span>
          <span className="star">💫</span>
          <span className="star">⭐</span>
        </div>
        <h1>¡Aprende a Leer de Forma Divertida! 📚✨</h1>
        <p>Descubre historias mágicas, resuelve acertijos y conviértete en un súper lector 🦸‍♂️</p>

        <div className="hero-image">
          {/* Placeholder for kids illustration */}
          <svg className="kids-illustration" viewBox="0 0 800 500" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <rect width="800" height="500" fill="#E8F4FF"/>

            {/* Sun */}
            <circle cx="700" cy="80" r="50" fill="#FFD93D"/>

            {/* Clouds */}
            <ellipse cx="150" cy="100" rx="60" ry="30" fill="white"/>
            <ellipse cx="180" cy="90" rx="50" ry="25" fill="white"/>
            <ellipse cx="600" cy="120" rx="70" ry="35" fill="white"/>

            {/* Ground */}
            <ellipse cx="400" cy="500" rx="500" ry="100" fill="#6BCF7F"/>

            {/* Kid 1 - Reading book (left) */}
            <circle cx="200" cy="300" r="50" fill="#FFB6C1"/>
            <ellipse cx="200" cy="350" rx="60" ry="80" fill="#4A90E2"/>
            <circle cx="185" cy="295" r="8" fill="#2C3E50"/>
            <circle cx="215" cy="295" r="8" fill="#2C3E50"/>
            <path d="M 185 310 Q 200 320 215 310" stroke="#2C3E50" fill="none" strokeWidth="3"/>
            {/* Book */}
            <rect x="160" y="380" width="50" height="40" fill="#FF6B9D" rx="5"/>
            <line x1="185" y1="380" x2="185" y2="420" stroke="#2C3E50" strokeWidth="2"/>

            {/* Kid 2 - With tablet (center) */}
            <circle cx="400" cy="280" r="45" fill="#D4A574"/>
            <ellipse cx="400" cy="330" rx="55" ry="75" fill="#9B7EDE"/>
            <circle cx="388" cy="275" r="7" fill="#2C3E50"/>
            <circle cx="412" cy="275" r="7" fill="#2C3E50"/>
            <path d="M 388 290 Q 400 298 412 290" stroke="#2C3E50" fill="none" strokeWidth="2"/>
            {/* Tablet */}
            <rect x="360" y="365" width="80" height="60" fill="#34495E" rx="5"/>
            <rect x="365" y="370" width="70" height="50" fill="#4A90E2" rx="3"/>

            {/* Kid 3 - Jumping with book (right) */}
            <circle cx="600" cy="250" r="48" fill="#FFDAB9"/>
            <ellipse cx="600" cy="310" rx="58" ry="70" fill="#FF8C42"/>
            <circle cx="587" cy="245" r="8" fill="#2C3E50"/>
            <circle cx="613" cy="245" r="8" fill="#2C3E50"/>
            <ellipse cx="600" cy="262" rx="15" ry="10" fill="#FF6B9D"/>
            {/* Book in hand */}
            <rect x="640" y="290" width="45" height="35" fill="#6BCF7F" rx="5" transform="rotate(20 662 307)"/>

            {/* Sparkles and stars */}
            <text x="250" y="230" fontSize="30" fill="#FFD93D">✨</text>
            <text x="500" y="200" fontSize="30" fill="#FFD93D">⭐</text>
            <text x="330" y="180" fontSize="25" fill="#FF6B9D">📚</text>
            <text x="550" y="370" fontSize="25" fill="#4A90E2">💡</text>
            <text x="120" y="350" fontSize="25" fill="#9B7EDE">🎨</text>
          </svg>
        </div>

        <a href="#empezar" className="cta-button" style={{fontSize: '1.5rem', padding: '1.5rem 3rem'}}>¡Quiero Aprender! 🎉</a>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          <h2>¿Qué hace especial a Cognitiva? 🌈</h2>

          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">📖</span>
              <h3>Historias Divertidas</h3>
              <p>Lee cuentos emocionantes sobre dinosaurios, astronautas, princesas, superhéroes y ¡mucho más!</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🎮</span>
              <h3>Juegos de Lectura</h3>
              <p>Resuelve acertijos, completa misiones y gana estrellas mientras aprendes. ¡Es súper divertido!</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🎨</span>
              <h3>Elige Tus Temas</h3>
              <p>¿Te gustan los animales? ¿El espacio? ¿Los deportes? ¡Tú decides qué leer!</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h3>Gana Premios</h3>
              <p>Colecciona medallas, desbloquea personajes especiales y conviértete en un campeón de la lectura.</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">👨‍👩‍👧‍👦</span>
              <h3>Para Toda la Familia</h3>
              <p>Papá y mamá pueden ver tu progreso y leer contigo. ¡Aprender juntos es más divertido!</p>
            </div>

            <div className="feature-card">
              <span className="feature-icon">📱</span>
              <h3>Usa Tablet o Computadora</h3>
              <p>Aprende donde quieras: en casa, en el parque o hasta en el coche. ¡Tú decides!</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <div className="how-container">
          <h2>¿Cómo Funciona? 🤔</h2>

          <div className="steps">
            <div className="step">
              <span className="step-number">1️⃣</span>
              <h3>Elige tu Aventura</h3>
              <p>Selecciona una historia que te guste</p>
            </div>

            <div className="step">
              <span className="step-number">2️⃣</span>
              <h3>Lee y Diviértete</h3>
              <p>Disfruta la lectura con colores y dibujos</p>
            </div>

            <div className="step">
              <span className="step-number">3️⃣</span>
              <h3>Responde y Gana</h3>
              <p>Contesta preguntas y colecciona estrellas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="benefits-container">
          <h2>¿Qué Aprenderás? 🌟</h2>

          <div className="benefit-list">
            <div className="benefit-item">
              <span className="benefit-icon">🧠</span>
              <p>Entender mejor lo que lees</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">💭</span>
              <p>Imaginar y crear tus propias ideas</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">📚</span>
              <p>Leer más rápido cada día</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">✍️</span>
              <p>Escribir mejor tus propias historias</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">🎯</span>
              <p>Concentrarte mejor en la escuela</p>
            </div>

            <div className="benefit-item">
              <span className="benefit-icon">❤️</span>
              <p>Amar la lectura para siempre</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section" id="empezar">
        <h2>¡Es Hora de la Aventura! 🚀</h2>
        <p>Únete a miles de niños que ya están aprendiendo</p>
        <a href="#" className="cta-large">¡Empezar Gratis Ahora! 🎉</a>
        <p style={{marginTop: '2rem', fontSize: '1.3rem'}}>✨ Sin tarjeta de crédito • Cancela cuando quieras ✨</p>
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

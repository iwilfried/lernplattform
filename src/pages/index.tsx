import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

// Course Card Component
function CourseCard({title, description, lessons, duration, difficulty, progress, link, featured = false}) {
  return (
    <div className={clsx('course-card', featured && 'featured-course')}>
      <div className="course-header">
        {featured && <span className="featured-badge">🔥 Featured</span>}
        <h3 className="course-title">{title}</h3>
        <p className="course-description">{description}</p>
      </div>
      
      <div className="course-meta">
        <span>📚 {lessons} Lektionen</span>
        <span>⏱️ {duration}</span>
        <span>🎯 {difficulty}</span>
      </div>

      {progress !== undefined && (
        <div className="progress-section">
          <div className="progress-header">
            <span>Fortschritt</span>
            <span>{progress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{width: `${progress}%`}}></div>
          </div>
        </div>
      )}

      <Link to={link} className="cta-button">
        {progress ? 'Weiter lernen' : 'Kurs starten'}
      </Link>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">
          Künstliche Intelligenz von A-Z 2025
        </h1>
        <p className="hero-subtitle">
          Der umfassendste KI-Kurs für 2025. Von Grundlagen bis zu praktischen Anwendungen - 
          alles was Sie über moderne Künstliche Intelligenz wissen müssen.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-number">20+</div>
            <div className="stat-label">Lektionen</div>
          </div>
          <div className="stat">
            <div className="stat-number">8h</div>
            <div className="stat-label">Content</div>
          </div>
          <div className="stat">
            <div className="stat-number">3</div>
            <div className="stat-label">Projekte</div>
          </div>
        </div>
        <Link to="/kurse/einfuehrung" className="cta-button cta-primary">
          🚀 Jetzt starten
        </Link>
      </div>
    </section>
  );
}

// Course Categories Component
function CourseCategories() {
  const courseModules = [
    {
      title: "👋 Willkommen zum Kurs",
      description: "Erste Schritte, Materialien und Ihr erster AI ChatBot",
      lessons: "3",
      duration: "1.5h",
      difficulty: "Beginner",
      progress: 0,
      link: "/kurse/willkommen/course-materials",
      featured: true
    },
    {
      title: "🤖 Agentiv KI",
      description: "Intelligente Agents entwickeln und verstehen",
      lessons: "5",
      duration: "2h",
      difficulty: "Intermediate",
      progress: 0,
      link: "/kurse/agentiv-ki/einfuehrung"
    },
    {
      title: "🧠 Fundamentals of Reinforcement Learning",
      description: "Von Grundlagen bis Policy Gradient Methods",
      lessons: "6",
      duration: "2.5h",
      difficulty: "Intermediate",
      progress: 0,
      link: "/kurse/reinforcement-learning/grundlagen"
    },
    {
      title: "🎯 Q-Learning Intuition",
      description: "Q-Learning verstehen und implementieren",
      lessons: "4",
      duration: "1.5h",
      difficulty: "Advanced",
      progress: 0,
      link: "/kurse/q-learning/intuition"
    },
    {
      title: "🔥 Praktische Projekte",
      description: "Hands-on Projekte: ChatBot, Games und mehr",
      lessons: "3",
      duration: "3h",
      difficulty: "Advanced",
      progress: 0,
      link: "/kurse/projekte/ki-chatbot-projekt"
    }
  ];

  return (
    <section className="courses-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">📚 Kursmodule</h2>
          <p className="section-subtitle">
            Strukturiertes Lernen von den Grundlagen bis zu praktischen Anwendungen
          </p>
        </div>
        
        <div className="courses-grid">
          {courseModules.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Learning Path Component
function LearningPath() {
  const pathSteps = [
    {
      step: "1",
      title: "Setup & Grundlagen",
      description: "Entwicklungsumgebung einrichten und ersten ChatBot erstellen",
      icon: "🚀"
    },
    {
      step: "2", 
      title: "Agentiv KI verstehen",
      description: "Intelligente Agents und Multi-Agent Systeme kennenlernen",
      icon: "🤖"
    },
    {
      step: "3",
      title: "Reinforcement Learning",
      description: "Verstärkendes Lernen und Q-Learning meistern",
      icon: "🧠"
    },
    {
      step: "4",
      title: "Praktische Projekte",
      description: "Gelerntes in realen Projekten anwenden",
      icon: "🔥"
    }
  ];

  return (
    <section className="learning-path-section">
      <div className="container">
        <h2 className="section-title">🎯 Ihr Lernweg</h2>
        <div className="learning-path">
          {pathSteps.map((step, index) => (
            <div key={index} className="path-step">
              <div className="step-icon">{step.icon}</div>
              <div className="step-number">{step.step}</div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
              {index < pathSteps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): React.ReactElement {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title="KI-Kurs 2025"
      description="Künstliche Intelligenz von A-Z 2025 - Der umfassendste KI-Kurs mit praktischen Projekten">
      
      <HeroSection />
      <CourseCategories />
      <LearningPath />
      
    </Layout>
  );
}

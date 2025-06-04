import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import LernplattformFeatures from '@site/src/components/LernplattformFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          🎓 {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/kurse/einfuehrung">
            Jetzt mit dem Lernen beginnen 🚀
          </Link>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to="/kurse">
            Alle Kurse ansehen 📚
          </Link>
        </div>
      </div>
    </header>
  );
}

function StatsSection() {
  return (
    <section className={styles.statsSection}>
      <div className="container">
        <div className="row">
          <div className="col col--3">
            <div className={styles.stat}>
              <h3>📖</h3>
              <h4>15+</h4>
              <p>Lektionen</p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.stat}>
              <h3>🎯</h3>
              <h4>5+</h4>
              <p>Quizzes</p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.stat}>
              <h3>📱</h3>
              <h4>PWA</h4>
              <p>Mobile App</p>
            </div>
          </div>
          <div className="col col--3">
            <div className={styles.stat}>
              <h3>🏆</h3>
              <h4>100%</h4>
              <p>Kostenlos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LearningPathSection() {
  return (
    <section className={styles.learningPath}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Ihr Lernweg</Heading>
          <p className="margin-bottom--lg">
            Folgen Sie unserem strukturierten Ansatz für optimalen Lernerfolg
          </p>
        </div>
        <div className="row">
          <div className="col col--4">
            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>📚 Grundlagen</h3>
              <p>
                Lernen Sie die fundamentalen Konzepte und bauen Sie ein solides Fundament auf.
              </p>
              <Link to="/kurse/grundlagen/kapitel-1/lektion-1">
                Grundlagen starten →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>🚀 Anwenden</h3>
              <p>
                Setzen Sie das Gelernte in praktischen Übungen und Projekten um.
              </p>
              <Link to="/kurse/grundlagen/kapitel-2/lektion-1">
                Anwenden lernen →
              </Link>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.pathStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>🏆 Meistern</h3>
              <p>
                Vertiefen Sie Ihr Wissen und werden Sie zum Experten in Ihrem Bereich.
              </p>
              <Link to="/kurse">
                Fortgeschritten →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Ihre persönliche Lernreise"
      description="Lernen Sie Schritt für Schritt mit strukturierten Kursen, interaktiven Quizzes und praktischen Projekten. Kostenlos und mobil verfügbar.">
      <HomepageHeader />
      <main>
        <StatsSection />
        <LernplattformFeatures />
        <LearningPathSection />
      </main>
    </Layout>
  );
}

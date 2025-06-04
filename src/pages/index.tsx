import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/kurse/einfuehrung">
            Erste Schritte
          </Link>
          <Link
            className={clsx(
              'button button--outline button--secondary button--lg',
              styles.getStarted,
            )}
            to="/kurse">
            Datenbank Struktur
          </Link>
        </div>
      </div>
    </header>
  );
}

function SimpleFeatures() {
  return (
    <section className={styles.simpleFeatures}>
      <div className="container">
        <div className="row">
          <div className="col col--4">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📊</div>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">Datenbank</Heading>
                <p>PostgreSQL Datenbank mit Supabase, optimiert für Lerninhalte</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔗</div>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">API</Heading>
                <p>REST API für einfache Integration und Datenzugriff</p>
              </div>
            </div>
          </div>
          <div className="col col--4">
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <div className="text--center padding-horiz--md">
                <Heading as="h3">Mobile Ready</Heading>
                <p>Optimiert für Web und Mobile Anwendungen</p>
              </div>
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
        <SimpleFeatures />
      </main>
    </Layout>
  );
}

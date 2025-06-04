import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  emoji: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Strukturiert Lernen',
    emoji: '📖',
    description: (
      <>
        Folgen Sie einem durchdachten Curriculum mit aufeinander aufbauenden 
        Lektionen, Quizzes und praktischen Projekten.
      </>
    ),
  },
  {
    title: 'Überall verfügbar',
    emoji: '📱',
    description: (
      <>
        Lernen Sie zu Hause oder unterwegs - unsere PWA-App funktioniert 
        auf allen Geräten und sogar offline.
      </>
    ),
  },
  {
    title: 'Interaktiv & Praktisch',
    emoji: '🎯',
    description: (
      <>
        Testen Sie Ihr Wissen mit Quizzes, arbeiten Sie an realen Projekten 
        und verfolgen Sie Ihren Lernfortschritt.
      </>
    ),
  },
];

function Feature({title, emoji, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.featureEmoji}>{emoji}</div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function LernplattformFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center margin-bottom--lg">
          <Heading as="h2">Warum unsere Lernplattform?</Heading>
          <p>Entdecken Sie die Vorteile unseres Lernansatzes</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
} 
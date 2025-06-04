import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // Lernplattform Sidebar mit verfügbaren Kursen
  kursSidebar: [
    {
      type: 'doc',
      id: 'einfuehrung',
      label: '🚀 Kursübersicht',
    },
    {
      type: 'category',
      label: '👋 Willkommen zum Kurs',
      collapsed: false,
      items: [
        'willkommen/course-materials',
        'willkommen/first-ai-chatbot',
        'willkommen/setup-environment',
      ],
    },
    {
      type: 'category',
      label: '🤖 Agentiv KI',
      collapsed: false,
      items: [
        'agentiv-ki/einfuehrung',
        'agentiv-ki/intelligent-agents',
        'agentiv-ki/multi-agent-systems',
      ],
    },
    {
      type: 'category',
      label: '🧠 Fundamentals of Reinforcement Learning',
      collapsed: false,
      items: [
        'reinforcement-learning/grundlagen',
        'reinforcement-learning/markov-decision-process',
        'reinforcement-learning/policy-gradient',
      ],
    },
    {
      type: 'category',
      label: '🎯 Q-Learning Intuition',
      collapsed: false,
      items: [
        'q-learning/intuition',
        'q-learning/implementation',
        'q-learning/advanced-techniques',
      ],
    },
    {
      type: 'category',
      label: '🔥 Praktische Projekte',
      collapsed: false,
      items: [
        'projekte/ki-chatbot-projekt',
        'projekte/reinforcement-learning-game',
        'projekte/abschlussprojekt',
      ],
    },
  ],
};

export default sidebars;

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
    'einfuehrung',
    {
      type: 'category',
      label: '📚 Grundlagen',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Kapitel 1: Erste Schritte',
          items: [
            'grundlagen/kapitel-1/lektion-1',
            'grundlagen/kapitel-1/lektion-2',
            'grundlagen/kapitel-1/lektion-3',
            'grundlagen/kapitel-1/quiz-1',
          ],
        },
        {
          type: 'category',
          label: 'Kapitel 2: Vertiefung',
          items: [
            'grundlagen/kapitel-2/lektion-1',
          ],
        },
      ],
    },
    // Weitere Kapitel werden hinzugefügt, sobald Inhalte verfügbar sind
  ],
};

export default sidebars;

# 🎓 Lernplattform

Eine moderne, responsive Lernplattform gebaut mit Docusaurus, die strukturiertes Lernen mit interaktiven Elementen ermöglicht.

## ✨ Features

- 📚 **Strukturierte Kurse** - Aufeinander aufbauende Lektionen und Kapitel
- 🎯 **Interaktive Quizzes** - Wissensüberprüfung mit sofortigem Feedback
- 📱 **PWA-Unterstützung** - Mobile App-Erfahrung mit Offline-Funktionalität
- 🌐 **Responsive Design** - Funktioniert perfekt auf allen Geräten
- 🚀 **Schnell & Modern** - Gebaut mit React und modernen Web-Technologien
- 🔍 **Suchfunktion** - Schnell durch alle Inhalte navigieren

## 🏗️ Technologie-Stack

- **Framework**: [Docusaurus 3](https://docusaurus.io/)
- **Sprache**: TypeScript
- **Styling**: CSS Modules + CSS Custom Properties
- **PWA**: @docusaurus/plugin-pwa
- **Deployment**: Netlify
- **Version Control**: Git

## 🚀 Schnellstart

### Lokale Entwicklung

```bash
# Dependencies installieren
npm install

# Entwicklungsserver starten
npm start
```

Die Website ist dann verfügbar unter `http://localhost:3000`

### Build für Produktion

```bash
# Produktions-Build erstellen
npm run build

# Build lokal testen
npm run serve
```

## 📱 PWA-Features

Die Lernplattform unterstützt Progressive Web App Features:

- **Offline-Funktionalität** - Inhalte sind auch ohne Internet verfügbar
- **Installierbar** - Kann als App auf Mobilgeräten installiert werden
- **Push-Benachrichtigungen** - Erinnerungen für Lernziele (geplant)
- **Background-Sync** - Fortschritt wird synchronisiert

## 📖 Kursstruktur

### Grundlagen (📚)
- **Kapitel 1: Erste Schritte**
  - Lektion 1: Die Grundlagen verstehen
  - Lektion 2: Praktische Anwendung
  - Lektion 3: Vertiefung und Teamarbeit
  - Quiz: Kapitel 1 Abschlusstest

- **Kapitel 2: Vertiefung**
  - Lektion 1: Aufbau auf den Grundlagen
  - (Weitere Lektionen in Entwicklung)

### Fortgeschritten (🚀)
- *In Entwicklung*

### Spezialisierung (🎯)
- *In Entwicklung*

## 🌐 Deployment auf Netlify

### Automatisches Deployment

1. **Repository zu Netlify verbinden**:
   - Gehen Sie zu [netlify.com](https://netlify.com)
   - Klicken Sie auf "New site from Git"
   - Verbinden Sie Ihr GitHub/GitLab Repository

2. **Build-Einstellungen**:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
   - **Node version**: `18`

3. **Deploy!**
   - Netlify deployed automatisch bei jedem Git Push

### Manuelles Deployment

```bash
# Build erstellen
npm run build

# Drag & Drop das 'build' Verzeichnis zu Netlify
```

## 🔧 Konfiguration

### Netlify-spezifische Dateien

- `netlify.toml` - Netlify-Konfiguration mit Headers und Redirects
- `static/manifest.json` - PWA-Manifest für App-Installation

### Wichtige Konfigurationsdateien

- `docusaurus.config.ts` - Hauptkonfiguration
- `sidebars.ts` - Navigation und Seitenleiste
- `src/pages/index.tsx` - Homepage
- `src/css/custom.css` - Globale Styles

## 📁 Projektstruktur

```
lernplattform/
├── docs/                      # Markdown-Inhalte
│   ├── einfuehrung.md         # Einführungsseite
│   └── grundlagen/            # Grundlagen-Kurse
├── src/
│   ├── components/            # React-Komponenten
│   ├── pages/                 # Statische Seiten
│   └── css/                   # Styles
├── static/                    # Statische Assets
├── docusaurus.config.ts       # Docusaurus-Konfiguration
├── sidebars.ts               # Navigationsstruktur
└── netlify.toml              # Netlify-Konfiguration
```

## 🎨 Anpassungen

### Farben und Themes

Bearbeiten Sie `src/css/custom.css` für:
- Brand-Farben
- Dark/Light Mode
- Custom CSS-Variablen

### Neue Inhalte hinzufügen

1. **Neue Lektion**: Erstellen Sie eine `.md` Datei in `docs/`
2. **Navigation**: Aktualisieren Sie `sidebars.ts`
3. **Homepage**: Bearbeiten Sie `src/pages/index.tsx`

## 🤝 Beitragen

1. Fork das Repository
2. Erstellen Sie einen Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit Ihre Änderungen (`git commit -m 'Add some AmazingFeature'`)
4. Push zum Branch (`git push origin feature/AmazingFeature`)
5. Öffnen Sie einen Pull Request

## 📝 Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Siehe `LICENSE` Datei für Details.

## 📞 Support

- **Dokumentation**: [Docusaurus Docs](https://docusaurus.io/docs)
- **Issues**: Erstellen Sie ein GitHub Issue
- **Discussions**: Nutzen Sie GitHub Discussions für Fragen

---

**Gebaut mit ❤️ und [Docusaurus](https://docusaurus.io/)**

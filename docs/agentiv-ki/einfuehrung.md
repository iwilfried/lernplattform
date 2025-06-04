# 🤖 Einführung in Agentiv KI

Willkommen zum faszinierenden Bereich der **Agentiv KI**! In diesem Modul lernen Sie, wie intelligente Agents arbeiten und wie Sie eigene autonome KI-Systeme entwickeln können.

## 🎯 Lernziele

Nach diesem Modul können Sie:
- ✅ Konzepte von intelligenten Agents verstehen
- ✅ Verschiedene Agent-Architekturen unterscheiden
- ✅ Einfache Agents implementieren
- ✅ Multi-Agent Systeme entwerfen

## 🧠 Was ist Agentiv KI?

**Agentiv KI** bezieht sich auf KI-Systeme, die autonom handeln können - sie treffen eigenständige Entscheidungen basierend auf ihrer Umgebung und ihren Zielen.

### Eigenschaften von intelligenten Agents:
- **Autonomie** - Eigenständiges Handeln ohne direkte menschliche Kontrolle
- **Reaktivität** - Reagieren auf Umgebungsveränderungen
- **Proaktivität** - Zielbezogenes Verhalten
- **Soziale Fähigkeiten** - Interaktion mit anderen Agents

## 🔧 Praktisches Beispiel

```python
class SimpleAgent:
    def __init__(self, goal):
        self.goal = goal
        self.knowledge = {}
        self.environment = None
    
    def perceive(self, environment):
        """Agent nimmt Umgebung wahr"""
        self.environment = environment
        return environment.get_percepts()
    
    def decide(self, percepts):
        """Agent trifft Entscheidung"""
        # Einfache Regel-basierte Entscheidung
        if "obstacle" in percepts:
            return "avoid"
        elif "goal" in percepts:
            return "move_to_goal"
        else:
            return "explore"
    
    def act(self, action):
        """Agent führt Aktion aus"""
        if self.environment:
            return self.environment.execute_action(action)
```

## 🚀 Nächste Schritte

- **Intelligent Agents** - Detaillierte Agent-Architekturen
- **Multi-Agent Systems** - Agents, die zusammenarbeiten

---

**⏱️ Geschätzte Zeit**: 30 Minuten  
**🎯 Schwierigkeit**: Intermediate 
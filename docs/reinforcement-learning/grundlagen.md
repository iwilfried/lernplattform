# 🧠 Fundamentals of Reinforcement Learning

Tauchen Sie ein in die Welt des verstärkenden Lernens - eine der mächtigsten KI-Techniken für autonome Entscheidungsfindung.

## 🎯 Was ist Reinforcement Learning?

**Reinforcement Learning (RL)** ist ein ML-Ansatz, bei dem ein Agent durch Interaktion mit einer Umgebung lernt, optimale Entscheidungen zu treffen.

### Kernkonzepte:
- **Agent** - Der Lernende
- **Environment** - Die Umgebung  
- **State** - Aktueller Zustand
- **Action** - Mögliche Handlungen
- **Reward** - Belohnung/Bestrafung
- **Policy** - Entscheidungsstrategie

## 🔄 Der RL-Zyklus

```
Agent ──(Action)──> Environment
  ↑                      │
  │                      ↓
(State, Reward) <────────┘
```

## 💻 Grundlegendes Beispiel

```python
import numpy as np

class SimpleQLearning:
    def __init__(self, states, actions, learning_rate=0.1, discount=0.9):
        self.q_table = np.zeros((states, actions))
        self.lr = learning_rate
        self.gamma = discount
        self.epsilon = 0.1  # Exploration rate
    
    def choose_action(self, state):
        if np.random.random() < self.epsilon:
            # Exploration: Zufällige Aktion
            return np.random.randint(self.q_table.shape[1])
        else:
            # Exploitation: Beste bekannte Aktion
            return np.argmax(self.q_table[state])
    
    def update(self, state, action, reward, next_state):
        # Q-Learning Update-Regel
        best_next = np.max(self.q_table[next_state])
        td_target = reward + self.gamma * best_next
        td_error = td_target - self.q_table[state, action]
        self.q_table[state, action] += self.lr * td_error
```

## 🎮 Anwendungsbeispiele

- **Gaming** - AlphaGo, OpenAI Five
- **Robotik** - Autonome Navigation
- **Finanzen** - Algorithmic Trading
- **Verkehr** - Ampelsteuerung

## 🚀 Nächste Schritte

- **Markov Decision Process** - Mathematische Grundlagen
- **Policy Gradient** - Fortgeschrittene Methoden

---

**⏱️ Geschätzte Zeit**: 50 Minuten  
**🎯 Schwierigkeit**: Intermediate 
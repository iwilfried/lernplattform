# 🎯 Q-Learning Intuition

Verstehen Sie die Intuition hinter einem der erfolgreichsten Reinforcement Learning Algorithmen.

## 🧠 Q-Learning Grundidee

Q-Learning lernt eine **Q-Funktion** Q(s,a), die den erwarteten kumulativen Reward für eine Aktion a im Zustand s vorhersagt.

### Die Q-Funktion:
```
Q(s,a) = Erwarteter Gesamtreward, wenn wir Aktion a in Zustand s ausführen
```

## 🔄 Q-Learning Update-Regel

```python
def q_learning_update(q_table, state, action, reward, next_state, alpha=0.1, gamma=0.9):
    """
    Q(s,a) ← Q(s,a) + α[r + γ max_a' Q(s',a') - Q(s,a)]
    """
    current_q = q_table[state, action]
    max_next_q = np.max(q_table[next_state, :])
    new_q = current_q + alpha * (reward + gamma * max_next_q - current_q)
    q_table[state, action] = new_q
    
    return q_table
```

## 🎮 Maze Example

```python
class QMazeAgent:
    def __init__(self, maze_size):
        self.q_table = np.zeros((maze_size, maze_size, 4))  # 4 Aktionen: up,down,left,right
        self.epsilon = 0.1
        
    def choose_action(self, state):
        if np.random.random() < self.epsilon:
            return np.random.randint(4)  # Exploration
        else:
            return np.argmax(self.q_table[state[0], state[1], :])  # Exploitation
    
    def learn(self, state, action, reward, next_state):
        current_q = self.q_table[state[0], state[1], action]
        max_next_q = np.max(self.q_table[next_state[0], next_state[1], :])
        
        self.q_table[state[0], state[1], action] += 0.1 * (
            reward + 0.9 * max_next_q - current_q
        )
```

## 🎯 Exploration vs Exploitation

- **Exploration**: Neue Aktionen ausprobieren (ε-greedy)
- **Exploitation**: Beste bekannte Aktion wählen
- **Balance**: Epsilon-Decay über Zeit

---

**⏱️ Geschätzte Zeit**: 30 Minuten  
**🎯 Schwierigkeit**: Intermediate 
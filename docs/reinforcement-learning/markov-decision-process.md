# 🎲 Markov Decision Process

Die mathematischen Grundlagen des Reinforcement Learning verstehen und anwenden.

## 🧮 MDP Komponenten

Ein MDP ist definiert durch das Tupel (S, A, P, R, γ):
- **S** - Zustandsraum (States)
- **A** - Aktionsraum (Actions) 
- **P** - Übergangswahrscheinlichkeiten
- **R** - Belohnungsfunktion
- **γ** - Diskontierungsfaktor

## 📊 Bellman-Gleichung

```python
def bellman_equation(state, action, transition_probs, rewards, gamma=0.9):
    """
    V(s) = max_a Σ P(s'|s,a) [R(s,a,s') + γV(s')]
    """
    expected_return = 0
    for next_state, prob in transition_probs[state][action].items():
        reward = rewards[state][action][next_state]
        expected_return += prob * (reward + gamma * value_function[next_state])
    
    return expected_return
```

## 🎯 Value Iteration

```python
def value_iteration(mdp, threshold=0.01):
    V = {s: 0 for s in mdp.states}
    
    while True:
        delta = 0
        for state in mdp.states:
            v = V[state]
            V[state] = max([bellman_equation(state, a, mdp) for a in mdp.actions])
            delta = max(delta, abs(v - V[state]))
        
        if delta < threshold:
            break
    
    return V
```

---

**⏱️ Geschätzte Zeit**: 40 Minuten  
**🎯 Schwierigkeit**: Advanced 
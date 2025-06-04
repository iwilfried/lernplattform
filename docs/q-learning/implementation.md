# 💻 Q-Learning Implementation

Praktische Implementierung von Q-Learning für reale Probleme.

## 🛠️ Vollständige Q-Learning Klasse

```python
import numpy as np
import matplotlib.pyplot as plt

class QLearningAgent:
    def __init__(self, n_states, n_actions, learning_rate=0.1, 
                 discount_factor=0.95, epsilon=1.0, epsilon_decay=0.995):
        self.q_table = np.zeros((n_states, n_actions))
        self.lr = learning_rate
        self.gamma = discount_factor
        self.epsilon = epsilon
        self.epsilon_decay = epsilon_decay
        self.epsilon_min = 0.01
        
        # Für Tracking
        self.episode_rewards = []
        self.episode_steps = []
    
    def choose_action(self, state):
        if np.random.random() < self.epsilon:
            return np.random.randint(self.q_table.shape[1])
        return np.argmax(self.q_table[state])
    
    def update_q_table(self, state, action, reward, next_state, done):
        current_q = self.q_table[state, action]
        
        if done:
            target_q = reward
        else:
            target_q = reward + self.gamma * np.max(self.q_table[next_state])
        
        self.q_table[state, action] += self.lr * (target_q - current_q)
    
    def decay_epsilon(self):
        self.epsilon = max(self.epsilon_min, self.epsilon * self.epsilon_decay)
    
    def train(self, environment, episodes=1000):
        for episode in range(episodes):
            state = environment.reset()
            total_reward = 0
            steps = 0
            
            while True:
                action = self.choose_action(state)
                next_state, reward, done = environment.step(action)
                
                self.update_q_table(state, action, reward, next_state, done)
                
                state = next_state
                total_reward += reward
                steps += 1
                
                if done:
                    break
            
            self.episode_rewards.append(total_reward)
            self.episode_steps.append(steps)
            self.decay_epsilon()
            
            if episode % 100 == 0:
                avg_reward = np.mean(self.episode_rewards[-100:])
                print(f"Episode {episode}, Avg Reward: {avg_reward:.2f}, Epsilon: {self.epsilon:.3f}")
    
    def plot_training_progress(self):
        fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(12, 4))
        
        # Rewards über Zeit
        ax1.plot(self.episode_rewards)
        ax1.set_title('Training Rewards')
        ax1.set_xlabel('Episode')
        ax1.set_ylabel('Total Reward')
        
        # Durchschnittliche Rewards (gleitender Durchschnitt)
        window = 100
        avg_rewards = [np.mean(self.episode_rewards[max(0, i-window):i+1]) 
                      for i in range(len(self.episode_rewards))]
        ax2.plot(avg_rewards)
        ax2.set_title(f'Average Reward (Window: {window})')
        ax2.set_xlabel('Episode')
        ax2.set_ylabel('Average Reward')
        
        plt.tight_layout()
        plt.show()
```

## 🎮 Grid World Environment

```python
class GridWorld:
    def __init__(self, size=5):
        self.size = size
        self.goal = (size-1, size-1)
        self.start = (0, 0)
        self.current_pos = self.start
    
    def reset(self):
        self.current_pos = self.start
        return self.pos_to_state(self.current_pos)
    
    def step(self, action):
        # 0: up, 1: down, 2: left, 3: right
        moves = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        
        new_pos = (
            max(0, min(self.size-1, self.current_pos[0] + moves[action][0])),
            max(0, min(self.size-1, self.current_pos[1] + moves[action][1]))
        )
        
        self.current_pos = new_pos
        
        # Reward System
        if new_pos == self.goal:
            reward = 100
            done = True
        else:
            reward = -1  # Living penalty
            done = False
        
        return self.pos_to_state(new_pos), reward, done
    
    def pos_to_state(self, pos):
        return pos[0] * self.size + pos[1]
```

---

**⏱️ Geschätzte Zeit**: 60 Minuten  
**🎯 Schwierigkeit**: Advanced 
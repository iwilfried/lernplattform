# 🎮 Reinforcement Learning Game

Entwickeln Sie ein interaktives Spiel, in dem ein RL-Agent lernt zu spielen und gewinnen.

## 🎯 Snake Game mit Q-Learning

Implementieren Sie das klassische Snake-Spiel mit einem Q-Learning Agent.

```python
import pygame
import numpy as np
import random
from collections import deque

class SnakeGame:
    def __init__(self, width=640, height=480, block_size=20):
        self.width = width
        self.height = height
        self.block_size = block_size
        
        # Game state
        self.reset()
        
        # Colors
        self.BLACK = (0, 0, 0)
        self.GREEN = (0, 255, 0)
        self.RED = (255, 0, 0)
        
        # Pygame init
        pygame.init()
        self.display = pygame.display.set_mode((width, height))
        pygame.display.set_caption('Snake RL')
        self.clock = pygame.time.Clock()
    
    def reset(self):
        # Snake startet in der Mitte
        self.snake = [(self.width//2, self.height//2)]
        self.direction = 'RIGHT'
        
        # Platziere Futter
        self.food = self._place_food()
        
        self.score = 0
        self.frame_iteration = 0
        
        return self.get_state()
    
    def _place_food(self):
        while True:
            x = random.randint(0, (self.width-self.block_size)//self.block_size) * self.block_size
            y = random.randint(0, (self.height-self.block_size)//self.block_size) * self.block_size
            if (x, y) not in self.snake:
                return (x, y)
    
    def get_state(self):
        head = self.snake[0]
        
        # Gefahrenpunkte
        point_l = (head[0] - self.block_size, head[1])
        point_r = (head[0] + self.block_size, head[1])
        point_u = (head[0], head[1] - self.block_size)
        point_d = (head[0], head[1] + self.block_size)
        
        # Aktuelle Richtung
        dir_l = self.direction == 'LEFT'
        dir_r = self.direction == 'RIGHT'
        dir_u = self.direction == 'UP'
        dir_d = self.direction == 'DOWN'
        
        state = [
            # Gefahr geradeaus
            (dir_r and self._is_collision(point_r)) or
            (dir_l and self._is_collision(point_l)) or
            (dir_u and self._is_collision(point_u)) or
            (dir_d and self._is_collision(point_d)),
            
            # Gefahr rechts
            (dir_u and self._is_collision(point_r)) or
            (dir_d and self._is_collision(point_l)) or
            (dir_l and self._is_collision(point_u)) or
            (dir_r and self._is_collision(point_d)),
            
            # Gefahr links
            (dir_d and self._is_collision(point_r)) or
            (dir_u and self._is_collision(point_l)) or
            (dir_r and self._is_collision(point_u)) or
            (dir_l and self._is_collision(point_d)),
            
            # Bewegungsrichtung
            dir_l, dir_r, dir_u, dir_d,
            
            # Futter-Richtung
            self.food[0] < head[0],  # Futter links
            self.food[0] > head[0],  # Futter rechts
            self.food[1] < head[1],  # Futter oben
            self.food[1] > head[1]   # Futter unten
        ]
        
        return np.array(state, dtype=int)
    
    def _is_collision(self, point=None):
        if point is None:
            point = self.snake[0]
        
        # Wand-Kollision
        if (point[0] >= self.width or point[0] < 0 or
            point[1] >= self.height or point[1] < 0):
            return True
        
        # Selbst-Kollision
        if point in self.snake[1:]:
            return True
        
        return False
    
    def play_step(self, action):
        self.frame_iteration += 1
        
        # Benutzer-Events
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                quit()
        
        # Bewegung
        self._move(action)
        self.snake.insert(0, self.snake[0])
        
        # Überprüfe Game Over
        reward = 0
        game_over = False
        
        if self._is_collision() or self.frame_iteration > 100 * len(self.snake):
            game_over = True
            reward = -10
            return reward, game_over, self.score
        
        # Futter gegessen
        if self.snake[0] == self.food:
            self.score += 1
            reward = 10
            self.food = self._place_food()
        else:
            self.snake.pop()
        
        # Update UI
        self._update_ui()
        self.clock.tick(60)
        
        return reward, game_over, self.score
    
    def _move(self, action):
        # action = [straight, right, left]
        clock_wise = ['RIGHT', 'DOWN', 'LEFT', 'UP']
        idx = clock_wise.index(self.direction)
        
        if np.array_equal(action, [1, 0, 0]):
            new_dir = clock_wise[idx]  # geradeaus
        elif np.array_equal(action, [0, 1, 0]):
            next_idx = (idx + 1) % 4
            new_dir = clock_wise[next_idx]  # rechts
        else:  # [0, 0, 1]
            next_idx = (idx - 1) % 4
            new_dir = clock_wise[next_idx]  # links
        
        self.direction = new_dir
        
        head = self.snake[0]
        if self.direction == 'RIGHT':
            self.snake[0] = (head[0] + self.block_size, head[1])
        elif self.direction == 'LEFT':
            self.snake[0] = (head[0] - self.block_size, head[1])
        elif self.direction == 'DOWN':
            self.snake[0] = (head[0], head[1] + self.block_size)
        elif self.direction == 'UP':
            self.snake[0] = (head[0], head[1] - self.block_size)
    
    def _update_ui(self):
        self.display.fill(self.BLACK)
        
        # Snake zeichnen
        for segment in self.snake:
            pygame.draw.rect(self.display, self.GREEN, 
                           pygame.Rect(segment[0], segment[1], self.block_size, self.block_size))
        
        # Futter zeichnen
        pygame.draw.rect(self.display, self.RED, 
                        pygame.Rect(self.food[0], self.food[1], self.block_size, self.block_size))
        
        # Score anzeigen
        text = pygame.font.Font(None, 36).render(f'Score: {self.score}', True, (255, 255, 255))
        self.display.blit(text, [0, 0])
        
        pygame.display.flip()
```

## 🧠 Q-Learning Agent für Snake

```python
class SnakeAgent:
    def __init__(self, state_size=11, action_size=3, lr=0.001):
        self.state_size = state_size
        self.action_size = action_size
        self.memory = deque(maxlen=100000)
        self.epsilon = 1.0
        self.epsilon_decay = 0.995
        self.epsilon_min = 0.01
        self.learning_rate = lr
        
        # Q-Network (Deep Q-Learning)
        self.q_network = self._build_model()
        self.target_network = self._build_model()
        
    def _build_model(self):
        import tensorflow as tf
        
        model = tf.keras.Sequential([
            tf.keras.layers.Dense(256, activation='relu', input_shape=(self.state_size,)),
            tf.keras.layers.Dense(256, activation='relu'),
            tf.keras.layers.Dense(self.action_size, activation='linear')
        ])
        
        model.compile(optimizer=tf.keras.optimizers.Adam(learning_rate=self.learning_rate),
                     loss='mse')
        return model
    
    def remember(self, state, action, reward, next_state, done):
        self.memory.append((state, action, reward, next_state, done))
    
    def act(self, state):
        if np.random.random() <= self.epsilon:
            return random.randrange(self.action_size)
        
        q_values = self.q_network.predict(state, verbose=0)
        return np.argmax(q_values[0])
    
    def replay(self, batch_size=32):
        if len(self.memory) < batch_size:
            return
        
        minibatch = random.sample(self.memory, batch_size)
        
        for state, action, reward, next_state, done in minibatch:
            target = reward
            if not done:
                target = reward + 0.95 * np.amax(self.target_network.predict(next_state, verbose=0)[0])
            
            target_f = self.q_network.predict(state, verbose=0)
            target_f[0][action] = target
            
            self.q_network.fit(state, target_f, epochs=1, verbose=0)
        
        if self.epsilon > self.epsilon_min:
            self.epsilon *= self.epsilon_decay
```

## 🎯 Training Loop

```python
def train_snake_agent():
    game = SnakeGame()
    agent = SnakeAgent()
    
    scores = deque(maxlen=100)
    episodes = 1000
    
    for episode in range(episodes):
        state = game.reset()
        state = np.reshape(state, [1, 11])
        
        total_score = 0
        
        while True:
            action = agent.act(state)
            
            # Action zu One-Hot
            action_one_hot = [0, 0, 0]
            action_one_hot[action] = 1
            
            reward, done, score = game.play_step(action_one_hot)
            next_state = game.get_state()
            next_state = np.reshape(next_state, [1, 11])
            
            agent.remember(state, action, reward, next_state, done)
            state = next_state
            total_score = score
            
            if done:
                break
        
        scores.append(total_score)
        
        # Experience Replay
        if len(agent.memory) > 32:
            agent.replay()
        
        # Target Network Update
        if episode % 100 == 0:
            agent.target_network.set_weights(agent.q_network.get_weights())
        
        # Fortschritt anzeigen
        if episode % 50 == 0:
            avg_score = np.mean(scores)
            print(f'Episode: {episode}, Avg Score: {avg_score:.2f}, Epsilon: {agent.epsilon:.3f}')
    
    # Modell speichern
    agent.q_network.save('snake_dqn_model.h5')

if __name__ == '__main__':
    train_snake_agent()
```

## 🎮 Weitere Game-Ideen

### 1. Flappy Bird RL
- Einfache Aktion: Springen/Nicht springen
- Kontinuierliche Herausforderung

### 2. Pong RL
- Multi-Agent Learning
- Konkurrierendes Training

### 3. Maze Solver
- Pathfinding mit RL
- Verschiedene Maze-Generatoren

---

**⏱️ Geschätzte Zeit**: 6-8 Stunden  
**🎯 Schwierigkeit**: Advanced  
**🎮 Skills**: Pygame, DQN, Game Development 
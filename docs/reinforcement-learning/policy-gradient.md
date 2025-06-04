# 🎯 Policy Gradient Methods

Fortgeschrittene Reinforcement Learning Techniken für kontinuierliche Aktionsräume.

## 📈 Policy Gradient Algorithmus

```python
import torch
import torch.nn as nn

class PolicyNetwork(nn.Module):
    def __init__(self, state_size, action_size):
        super().__init__()
        self.fc1 = nn.Linear(state_size, 128)
        self.fc2 = nn.Linear(128, action_size)
        
    def forward(self, state):
        x = torch.relu(self.fc1(state))
        return torch.softmax(self.fc2(x), dim=-1)

def reinforce_algorithm(policy_net, episodes=1000):
    optimizer = torch.optim.Adam(policy_net.parameters(), lr=0.01)
    
    for episode in range(episodes):
        states, actions, rewards = collect_episode(policy_net)
        
        # Berechne Returns
        returns = []
        G = 0
        for reward in reversed(rewards):
            G = reward + 0.99 * G
            returns.insert(0, G)
        
        # Policy Gradient Update
        loss = 0
        for state, action, G in zip(states, actions, returns):
            probs = policy_net(state)
            loss -= torch.log(probs[action]) * G
        
        optimizer.zero_grad()
        loss.backward()
        optimizer.step()
```

---

**⏱️ Geschätzte Zeit**: 35 Minuten  
**🎯 Schwierigkeit**: Advanced 
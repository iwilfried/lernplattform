# ⚙️ Setup Environment

Bereiten Sie Ihre professionelle Entwicklungsumgebung für fortgeschrittene KI-Projekte vor! Diese Lektion zeigt Ihnen, wie Sie eine optimale Arbeitsumgebung einrichten.

## 🎯 Lernziele

Nach dieser Lektion haben Sie:
- ✅ Eine professionelle Python-Entwicklungsumgebung
- ✅ Alle wichtigen KI/ML Bibliotheken installiert
- ✅ GPU-Support für beschleunigtes Training eingerichtet
- ✅ Jupyter Lab optimal konfiguriert

## 🐍 Python Environment Setup

### Virtual Environment erstellen
```bash
# Python Virtual Environment erstellen
python -m venv ai-env

# Aktivieren (Windows)
ai-env\Scripts\activate

# Aktivieren (macOS/Linux)
source ai-env/bin/activate
```

### Essential Requirements
Erstellen Sie eine `requirements.txt`:

```txt
# Core AI/ML Libraries
tensorflow>=2.13.0
torch>=2.0.0
torchvision>=0.15.0
numpy>=1.24.0
pandas>=2.0.0
matplotlib>=3.7.0
seaborn>=0.12.0
scikit-learn>=1.3.0

# Deep Learning & NLP
transformers>=4.30.0
openai>=1.0.0
langchain>=0.1.0
accelerate>=0.20.0

# Reinforcement Learning
gym>=0.26.0
stable-baselines3>=2.0.0

# Development Tools
jupyter>=1.0.0
jupyterlab>=4.0.0
ipywidgets>=8.0.0
tensorboard>=2.13.0

# Data Processing
pillow>=10.0.0
opencv-python>=4.8.0
plotly>=5.15.0

# Utilities
tqdm>=4.65.0
python-dotenv>=1.0.0
requests>=2.31.0
```

### Installation
```bash
pip install -r requirements.txt
```

## 🚀 GPU Support (Optional)

### NVIDIA GPU Support
```bash
# CUDA-Version prüfen
nvidia-smi

# PyTorch mit CUDA
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# TensorFlow GPU
pip install tensorflow[and-cuda]
```

### Testen der GPU-Unterstützung
```python
import torch
import tensorflow as tf

# PyTorch GPU Test
print(f"PyTorch CUDA verfügbar: {torch.cuda.is_available()}")
print(f"GPU Geräte: {torch.cuda.device_count()}")

# TensorFlow GPU Test
print(f"TensorFlow GPU verfügbar: {len(tf.config.list_physical_devices('GPU')) > 0}")
```

## 📊 Jupyter Lab Konfiguration

### Extensions installieren
```bash
# Jupyter Lab Extensions
jupyter labextension install @jupyter-widgets/jupyterlab-manager
jupyter labextension install jupyter-matplotlib
jupyter labextension install @jupyterlab/toc

# Alternative: JupyterLab Desktop (empfohlen)
# Download von: https://github.com/jupyterlab/jupyterlab-desktop
```

### Konfiguration anpassen
Erstellen Sie `~/.jupyter/jupyter_lab_config.py`:

```python
c = get_config()

# Server-Konfiguration
c.ServerApp.ip = '0.0.0.0'
c.ServerApp.port = 8888
c.ServerApp.open_browser = True

# Sicherheit
c.ServerApp.token = ''
c.ServerApp.password = ''

# Speicher-Limits
c.NotebookApp.max_buffer_size = 10737418240  # 10GB

# Auto-Save
c.FileCheckpoints.checkpoint_dir = '.ipynb_checkpoints'
```

## 🛠️ Development Tools

### VS Code Setup
Empfohlene Extensions:
- **Python** - Microsoft
- **Jupyter** - Microsoft  
- **Pylance** - Microsoft
- **Python Docstring Generator**
- **GitLens**
- **Thunder Client** (API Testing)

### Git Konfiguration
```bash
# Git konfigurieren
git config --global user.name "Ihr Name"
git config --global user.email "ihre.email@domain.com"

# Useful Git Aliases
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.lg "log --oneline --graph --all"
```

## 🔧 Environment Testing

### Test-Notebook erstellen
Erstellen Sie `environment_test.ipynb`:

```python
# Cell 1: Basic Imports
import sys
print(f"Python Version: {sys.version}")

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

print("✅ Basic libraries imported successfully")

# Cell 2: AI/ML Libraries
import tensorflow as tf
import torch
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier

print(f"✅ TensorFlow: {tf.__version__}")
print(f"✅ PyTorch: {torch.__version__}")
print("✅ Scikit-learn imported successfully")

# Cell 3: OpenAI Test
try:
    import openai
    print("✅ OpenAI library available")
except ImportError:
    print("❌ OpenAI library not found")

# Cell 4: Quick ML Test
iris = load_iris()
clf = RandomForestClassifier(n_estimators=10, random_state=42)
clf.fit(iris.data, iris.target)
accuracy = clf.score(iris.data, iris.target)
print(f"✅ ML Test - Accuracy: {accuracy:.2f}")

# Cell 5: Visualization Test
plt.figure(figsize=(8, 6))
sns.scatterplot(data=pd.DataFrame(iris.data), x=0, y=1, hue=iris.target)
plt.title("Environment Test - Iris Dataset")
plt.show()
print("✅ Visualization test completed")
```

## 📋 Environment Checkliste

- [ ] Virtual Environment erstellt und aktiviert
- [ ] Alle Packages aus requirements.txt installiert
- [ ] GPU-Support getestet (falls verfügbar)
- [ ] Jupyter Lab funktioniert
- [ ] VS Code mit Extensions eingerichtet
- [ ] Git konfiguriert
- [ ] Test-Notebook erfolgreich ausgeführt
- [ ] Alle Imports funktionieren
- [ ] Visualisierungen werden korrekt angezeigt

## 🚨 Troubleshooting

### Häufige Probleme

| Problem | Lösung |
|---------|--------|
| **Package Conflicts** | `pip install --upgrade pip setuptools wheel` |
| **CUDA Issues** | CUDA-Treiber aktualisieren, PyTorch neu installieren |
| **Jupyter Kernel** | `python -m ipykernel install --user --name=ai-env` |
| **Import Errors** | Virtual Environment aktiviert? Packages installiert? |

### Performance-Optimierung
```python
# NumPy Threading
import os
os.environ["OMP_NUM_THREADS"] = "4"

# TensorFlow Memory Growth
import tensorflow as tf
gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
    tf.config.experimental.set_memory_growth(gpus[0], True)
```

## 🎯 Nächste Schritte

Perfekt! Ihre Entwicklungsumgebung ist bereit für ernsthafte KI-Projekte! 🎉

Als nächstes tauchen wir ein in: **Agentiv KI** - Intelligente Agents, die selbstständig handeln können.

---

**⏱️ Geschätzte Zeit**: 30-45 Minuten  
**🎯 Schwierigkeit**: Intermediate  
**💡 Tipp**: Bookmarken Sie diese Seite für zukünftige Setup-Referenz! 
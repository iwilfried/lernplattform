# 🤖 How to build the first AI chatbot?

Willkommen zu Ihrem ersten praktischen KI-Projekt! In dieser Lektion erstellen Sie Schritt für Schritt Ihren ersten funktionsfähigen AI ChatBot.

## 🎯 Lernziele

Nach dieser Lektion können Sie:
- ✅ Einen einfachen AI ChatBot von Grund auf erstellen
- ✅ OpenAI API in Python integrieren
- ✅ Chat-Funktionalität implementieren
- ✅ Ihren Bot testen und erweitern

## 🛠️ Voraussetzungen

- ✅ Python 3.9+ installiert
- ✅ `openai` Bibliothek installiert
- ✅ OpenAI API Key (kostenloser Account)

## 🚀 Schritt 1: OpenAI Setup

### API Key einrichten
```bash
# Umgebungsvariable setzen
export OPENAI_API_KEY="your-api-key-here"
```

### Dependencies installieren
```bash
pip install openai python-dotenv
```

## 💻 Schritt 2: Grundgerüst erstellen

Erstellen Sie eine neue Datei `my_first_chatbot.py`:

```python
import openai
import os
from dotenv import load_dotenv

# Umgebungsvariablen laden
load_dotenv()

# OpenAI Client initialisieren
client = openai.OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

def chat_with_ai(message):
    """
    Funktion für Chat mit AI
    """
    try:
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "Du bist ein hilfsreicher AI-Assistent."},
                {"role": "user", "content": message}
            ],
            max_tokens=150,
            temperature=0.7
        )
        
        return response.choices[0].message.content
    
    except Exception as e:
        return f"Fehler: {e}"

# Hauptprogramm
def main():
    print("🤖 Mein erster AI ChatBot")
    print("Schreiben Sie 'quit' zum Beenden\n")
    
    while True:
        user_input = input("Sie: ")
        
        if user_input.lower() == 'quit':
            print("Auf Wiedersehen! 👋")
            break
            
        ai_response = chat_with_ai(user_input)
        print(f"AI: {ai_response}\n")

if __name__ == "__main__":
    main()
```

## 🔧 Schritt 3: Erweiterte Features

### Gesprächsverlauf speichern
```python
class ChatBot:
    def __init__(self):
        self.conversation_history = []
        self.client = openai.OpenAI()
    
    def add_message(self, role, content):
        self.conversation_history.append({
            "role": role,
            "content": content
        })
    
    def chat(self, user_message):
        # Nachricht zur Historie hinzufügen
        self.add_message("user", user_message)
        
        response = self.client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=self.conversation_history,
            max_tokens=150,
            temperature=0.7
        )
        
        ai_message = response.choices[0].message.content
        self.add_message("assistant", ai_message)
        
        return ai_message
```

## 🎨 Schritt 4: GUI Version (Optional)

Erstellen Sie eine einfache GUI mit `tkinter`:

```python
import tkinter as tk
from tkinter import scrolledtext
import threading

class ChatBotGUI:
    def __init__(self):
        self.window = tk.Tk()
        self.window.title("🤖 Mein AI ChatBot")
        self.window.geometry("600x500")
        
        self.setup_ui()
        self.chatbot = ChatBot()
    
    def setup_ui(self):
        # Chat-Display
        self.chat_display = scrolledtext.ScrolledText(
            self.window, 
            height=20, 
            state='disabled'
        )
        self.chat_display.pack(padx=10, pady=10, fill='both', expand=True)
        
        # Eingabefeld
        self.entry = tk.Entry(self.window, font=('Arial', 12))
        self.entry.pack(padx=10, pady=(0,10), fill='x')
        self.entry.bind('<Return>', self.send_message)
        
        # Senden-Button
        self.send_button = tk.Button(
            self.window, 
            text="Senden", 
            command=self.send_message
        )
        self.send_button.pack(pady=(0,10))
    
    def send_message(self, event=None):
        message = self.entry.get()
        if message:
            self.display_message(f"Sie: {message}")
            self.entry.delete(0, tk.END)
            
            # AI Response in separatem Thread
            threading.Thread(
                target=self.get_ai_response, 
                args=(message,)
            ).start()
    
    def get_ai_response(self, message):
        response = self.chatbot.chat(message)
        self.display_message(f"AI: {response}")
    
    def display_message(self, message):
        self.chat_display.config(state='normal')
        self.chat_display.insert(tk.END, message + "\n\n")
        self.chat_display.config(state='disabled')
        self.chat_display.see(tk.END)
    
    def run(self):
        self.window.mainloop()

# GUI starten
if __name__ == "__main__":
    gui = ChatBotGUI()
    gui.run()
```

## 🧪 Testen Sie Ihren ChatBot

1. **Starten Sie das Programm**:
   ```bash
   python my_first_chatbot.py
   ```

2. **Testfragen probieren**:
   - "Hallo, wer bist du?"
   - "Erkläre mir Künstliche Intelligenz"
   - "Wie funktioniert Machine Learning?"

## 🏆 Herausforderungen

:::tip Erweitern Sie Ihren Bot
- **🎯 Persönlichkeit**: Geben Sie Ihrem Bot eine einzigartige Persönlichkeit
- **📚 Spezialisierung**: Machen Sie ihn zum KI-Experten
- **🌐 Web-Interface**: Erstellen Sie eine Flask-Web-App
- **💾 Persistenz**: Speichern Sie Gespräche in einer Datenbank
:::

## 🎯 Nächste Schritte

Glückwunsch! Sie haben Ihren ersten AI ChatBot erstellt! 🎉

Als nächstes: **Setup Environment** - Professionelle Entwicklungsumgebung für komplexere KI-Projekte.

---

**⏱️ Geschätzte Zeit**: 45-60 Minuten  
**🎯 Schwierigkeit**: Beginner-Intermediate  
**📁 Code-Dateien**: `my_first_chatbot.py`, `chatbot_gui.py` 
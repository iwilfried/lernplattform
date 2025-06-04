# 🤖 KI-ChatBot Projekt

Erstellen Sie einen fortgeschrittenen AI-ChatBot mit Persönlichkeit und Kontext-Verständnis.

## 🎯 Projektziele

- Erweiterten ChatBot mit Memory entwickeln
- Verschiedene AI-Modelle integrieren
- Web-Interface erstellen
- Deployment vorbereiten

## 🛠️ Architektur

```python
from dataclasses import dataclass
from typing import List, Dict
import openai
import streamlit as st

@dataclass
class Message:
    role: str
    content: str
    timestamp: str

class AdvancedChatBot:
    def __init__(self):
        self.conversation_history: List[Message] = []
        self.personality = "Du bist ein hilfsreicher KI-Assistent mit Humor."
        self.max_context_length = 10
        
    def add_message(self, role: str, content: str):
        from datetime import datetime
        message = Message(
            role=role,
            content=content,
            timestamp=datetime.now().isoformat()
        )
        self.conversation_history.append(message)
        
        # Kontext-Begrenzung
        if len(self.conversation_history) > self.max_context_length:
            self.conversation_history = self.conversation_history[-self.max_context_length:]
    
    def get_context_messages(self):
        messages = [{"role": "system", "content": self.personality}]
        for msg in self.conversation_history:
            messages.append({"role": msg.role, "content": msg.content})
        return messages
    
    def generate_response(self, user_input: str):
        self.add_message("user", user_input)
        
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=self.get_context_messages(),
                max_tokens=300,
                temperature=0.7
            )
            
            ai_response = response.choices[0].message.content
            self.add_message("assistant", ai_response)
            return ai_response
            
        except Exception as e:
            return f"Entschuldigung, ein Fehler ist aufgetreten: {e}"
```

## 🌐 Streamlit Web-App

```python
import streamlit as st

def main():
    st.set_page_config(page_title="AI ChatBot", page_icon="🤖")
    
    st.title("🤖 Mein AI ChatBot")
    st.markdown("Entwickelt im KI-Kurs 2025")
    
    # Session State für ChatBot
    if 'chatbot' not in st.session_state:
        st.session_state.chatbot = AdvancedChatBot()
    
    # Sidebar für Einstellungen
    with st.sidebar:
        st.header("⚙️ Einstellungen")
        
        personality = st.selectbox(
            "Bot-Persönlichkeit:",
            ["Hilfsreich", "Witzig", "Professionell", "Kreativ"]
        )
        
        if personality == "Witzig":
            st.session_state.chatbot.personality = "Du bist ein witziger AI-Assistent mit viel Humor."
        elif personality == "Professionell":
            st.session_state.chatbot.personality = "Du bist ein professioneller Business-Assistent."
        # ... weitere Persönlichkeiten
        
        if st.button("🗑️ Chat löschen"):
            st.session_state.chatbot.conversation_history = []
            st.rerun()
    
    # Chat-Verlauf anzeigen
    st.subheader("💬 Chat-Verlauf")
    
    chat_container = st.container()
    with chat_container:
        for msg in st.session_state.chatbot.conversation_history:
            if msg.role == "user":
                st.chat_message("user").write(msg.content)
            else:
                st.chat_message("assistant").write(msg.content)
    
    # Chat-Input
    user_input = st.chat_input("Schreiben Sie Ihre Nachricht...")
    
    if user_input:
        # User-Nachricht anzeigen
        st.chat_message("user").write(user_input)
        
        # AI-Antwort generieren
        with st.spinner("🤖 Denkt nach..."):
            response = st.session_state.chatbot.generate_response(user_input)
        
        # AI-Antwort anzeigen
        st.chat_message("assistant").write(response)
        st.rerun()

if __name__ == "__main__":
    main()
```

## 🚀 Erweiterte Features

### 1. Speicher-System
```python
import json

class PersistentChatBot(AdvancedChatBot):
    def save_conversation(self, filename="chat_history.json"):
        data = [
            {
                "role": msg.role,
                "content": msg.content,
                "timestamp": msg.timestamp
            }
            for msg in self.conversation_history
        ]
        
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
    
    def load_conversation(self, filename="chat_history.json"):
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            self.conversation_history = [
                Message(**msg_data) for msg_data in data
            ]
        except FileNotFoundError:
            pass
```

### 2. Sentiment Analysis
```python
from textblob import TextBlob

def analyze_sentiment(text):
    blob = TextBlob(text)
    sentiment = blob.sentiment.polarity
    
    if sentiment > 0.1:
        return "😊 Positiv"
    elif sentiment < -0.1:
        return "😔 Negativ"
    else:
        return "😐 Neutral"
```

## 🎯 Deployment

### Streamlit Cloud
```bash
# requirements.txt
streamlit
openai
textblob
python-dotenv
```

### Docker
```dockerfile
FROM python:3.9-slim

WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 8501

CMD ["streamlit", "run", "app.py", "--server.port=8501", "--server.address=0.0.0.0"]
```

## 🏆 Herausforderungen

1. **Multi-Language Support** - Verschiedene Sprachen
2. **Voice Integration** - Spracheingabe/-ausgabe
3. **Knowledge Base** - Eigene Wissensdatenbank
4. **Analytics Dashboard** - Nutzungsstatistiken

---

**⏱️ Geschätzte Zeit**: 4-6 Stunden  
**🎯 Schwierigkeit**: Advanced  
**💼 Skills**: OpenAI API, Streamlit, Web Development 
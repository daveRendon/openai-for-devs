# 💬 Exercise 3: Using the JavaScript SDK with ReactJS

## 📘 Introduction

This guide walks you through the process of creating a chatbot using **ReactJS** for the front end and **Azure OpenAI** for generating responses.

---

## ✅ Prerequisites

- Basic knowledge of JavaScript and ReactJS
- Node.js installed
- An Azure account
- Access to Azure OpenAI services

---

## 🚀 Step 1: Setting Up Your React Application

1. Open **File Explorer**, then go to **View → Show → Hidden items**.
2. Navigate to:

```
C:\Users\demouser\AppData\Roaming
```

Create a folder named `npm`.

3. Create your project directory:

```bash
cd ..
mkdir [new directory path]
cd [new directory path]
```

4. Initialize the React app:

```bash
npm init react-app my-chatbot
```

> If you get an error, fix it with:

```bash
npm install react@18 react-dom@18
```

5. Navigate into the project:

```bash
cd my-chatbot
```

6. Install required packages:

```bash
npm install axios web-vitals
```

7. Open the project in VS Code:

```bash
code .
```

> Click **Trust** on the popup.

8. Create a file named `Chatbot.js` in the `src` folder for your chatbot UI.

---

## 🧠 Step 2: Integrating Azure OpenAI with React

### Create `api.js` in the `src` folder:

```js
import axios from 'axios';

// Replace these with your actual values
const deploymentName = 'gpt-4o';
const version = '2023-05-15';
const endpoint = 'AZURE_OPENAI_ENDPOINT';
const apiKey = 'AZURE_OPENAI_API_KEY';

const api = axios.create({
    baseURL: `${endpoint}/openai/deployments/${deploymentName}/`,
    headers: {
        'api-key': apiKey,
        'Content-Type': 'application/json',
    },
});

export const fetchResponse = (prompt) => {
    return api.post(`chat/completions?api-version=${version}`, {
        messages: [
            {
                role: "user",
                content: prompt
            }
        ],
        max_tokens: 150,
    });
};
```

Replace `AZURE_OPENAI_API_KEY` and `AZURE_OPENAI_ENDPOINT` with your actual values.  
> ⚠️ Normally we use environment variables, but due to lab setup, use inline values.

---

### Add to `Chatbot.js`:

```js
import React, { useState } from 'react';
import { fetchResponse } from './api';

const Chatbot = () => {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userMessage = userInput.trim();

        if (!userMessage) return;

        setMessages(messages => [...messages, { sender: 'user', text: userMessage }]);
        setUserInput('');

        const response = await fetchResponse(userMessage);
        const botMessage = response.data.choices[0].message['content'];

        setMessages(messages => [...messages, { sender: 'bot', text: botMessage }]);
    };

    return (
        <div className="chatbot">
            <div className="messages">
                {messages.map((message, index) => (
                    <div key={index} className={`message ${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={userInput} onChange={handleInputChange} />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default Chatbot;
```

---

## ⚙️ Modify `App.js`

At the top of `App.js`, import the component:

```js
import Chatbot from './Chatbot';
```

Replace the main `App()` function with:

```js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot />
      </header>
    </div>
  );
}
```

---

## ▶️ Run the App

Save all files, then in the VS Code terminal run:

```bash
npm start
```

> Click **Allow** if prompted.

---

## 🧪 Test the Chatbot

- A browser window will open with the chatbot.
- Try a prompt like:

```
Write me a rap song about cartoons
```

You should receive a generated response from Azure OpenAI.

---

## 🛑 Stop the App

In the terminal, press `CTRL+C` and confirm with `Y`.

Your chatbot is now complete and integrated with Azure OpenAI!

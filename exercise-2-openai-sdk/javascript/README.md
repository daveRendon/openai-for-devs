# 🚀 JavaScript Project with Azure OpenAI Service

## 1. Initialize a New Project

Open a command prompt and run the following commands:

```bash
cd ..
mkdir [javascript project folder path]
cd [javascript project folder path]
```

Initialize the project:

```bash
npm init
```

> Press **Enter** at each prompt to accept the defaults.

---

## 2. Open Project in Visual Studio Code

```bash
code .
```

> **Note:** Click **Trust** on the popup when prompted.

---

## 3. Replace `package.json`

Overwrite the contents of `package.json` with the following:

```json
{
  "name": "javascript",
  "version": "1.0.0",
  "description": "a simple code sample on how to use Azure OpenAI Service with JavaScript",
  "main": "index.js",
  "type": "module",
  "scripts": {
    "start": "nodemon src/index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [
    "nodejs",
    "javascript",
    "ai",
    "artificial intelligence",
    "azure-openai"
  ],
  "dependencies": {
    "@azure/core-auth": "^1.9.0",
    "@azure/openai": "^2.0.0",
    "axios": "^1.7.9",
    "dotenv": "^16.3.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.2"
  }
}
```

---

## 4. Install Required Packages

```bash
npm install @azure/openai@latest @azure/core-auth@latest axios
```

---

## 5. Create `index.js` and Add Code

Create a file named `index.js` and paste the following code:

```js
import axios from 'axios';

const endpoint = "AZURE_OPENAI_ENDPOINT";
const apiKey = "AZURE_OPENAI_API_KEY";
const deploymentId = "gpt-4o"; // Your deployment name
const apiVersion = "2024-02-01";

const messages = [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "When was Microsoft founded?" }
];

async function getChatCompletion() {
    try {
        const url = `${endpoint}openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;
        const response = await axios.post(
            url,
            {
                messages: messages,
                max_tokens: 50
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': apiKey
                }
            }
        );

        const generatedText = response.data.choices[0].message.content;
        console.log("Generated Text:", generatedText);

        console.log("Full Response:", response.data);

    } catch (error) {
        console.error("Error calling Azure OpenAI:", error);
    }
}

getChatCompletion();
```

Update the placeholders:
- Replace `AZURE_OPENAI_API_KEY` with your API key.
- Replace `AZURE_OPENAI_ENDPOINT` with your endpoint URL.

Save the file.

---

## 6. Run the App

Run the app using:

```bash
node index.js
```

> You should see a response from Azure OpenAI printed in your terminal.


import axios from 'axios';

const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.AZURE_OPENAI_API_KEY;
const deploymentId = "gpt-4o";
const apiVersion = "2024-02-01";

const messages = [
    { "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "When was Microsoft founded?" }
];

async function getChatCompletion() {
    const url = \`\${endpoint}openai/deployments/\${deploymentId}/chat/completions?api-version=\${apiVersion}\`;

    try {
        const response = await axios.post(url, { messages, max_tokens: 50 }, {
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            }
        });

        console.log("Generated Text:", response.data.choices[0].message.content);
    } catch (err) {
        console.error("Error:", err.message);
    }
}

getChatCompletion();

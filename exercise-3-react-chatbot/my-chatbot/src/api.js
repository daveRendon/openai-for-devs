import axios from 'axios';

const endpoint = process.env.REACT_APP_AZURE_OPENAI_ENDPOINT;
const apiKey = process.env.REACT_APP_AZURE_OPENAI_API_KEY;
const deploymentName = 'gpt-4o';
const version = '2023-05-15';

const api = axios.create({
  baseURL: \`\${endpoint}/openai/deployments/\${deploymentName}/\`,
  headers: {
    'api-key': apiKey,
    'Content-Type': 'application/json',
  },
});

export const fetchResponse = (prompt) => {
  return api.post(\`chat/completions?api-version=\${version}\`, {
    messages: [{ role: 'user', content: prompt }],
    max_tokens: 150,
  });
};

# OpenAI for Developers 

This repository provides a complete set of hands-on exercises to help developers get started with the Azure OpenAI Service. It covers everything from basic model deployments to integrating embeddings, building chatbots, leveraging Azure Machine Learning, and operationalizing AI with Azure Functions and vector databases like ChromaDB.

---

## 🧠 Modules and Exercises Overview

| Module | Focus Area                                                      | Description |
|--------|------------------------------------------------------------------|-------------|
| 1      | **AI Foundry Copilot + GPT Model Deployment**                    | Create AI Search and GPT-4o deployment, test temperature & stop sequences |
| 2      | **Azure OpenAI SDKs (Python & JavaScript)**                      | Call models using SDKs, generate completions |
| 3      | **ReactJS Chatbot with Azure OpenAI**                            | Build chatbot UI with frontend/backend logic |
| 4      | **Jupyter Notebooks for Q&A, Classification, Embeddings**       | Use notebooks to run semantic search, clustering, and classification |
| 5      | **Azure Machine Learning & Vector Indexing (FAISS)**            | Store documents in blob storage, create vector index with OpenAI |
| 6      | **Azure Functions + Document Intelligence + Chroma DB**         | Build an ingestion pipeline triggered on new file uploads |

---

## ⚙️ Prerequisites

- Azure Subscription with access to Azure OpenAI and Cognitive Services
- VS Code with extensions:
  - Azure Tools
  - Azure Functions
  - Python (3.10+)
  - Jupyter Notebooks
- Node.js (16+), NPM
- Python venv support
- Azurite (for local function testing)
- Git

---
## 📁 Repository Structure

```text
openai-for-developers/
├── exercise-1-ai-foundry/                # AI Foundry setup instructions
├── exercise-2-openai-sdk/                # SDK examples (Python & JS)
├── exercise-3-react-chatbot/             # ReactJS chatbot project
├── exercise-4-notebooks/                 # Jupyter notebooks
├── exercise-5-aml/                       # Azure Machine Learning & Blob data
├── exercise-6-function-docintel/         # Azure Function + ChromaDB integration
├── assets/lab-docs/                      # Supporting documentation
├── README.md                             # This file
├── .gitignore
└── LICENSE



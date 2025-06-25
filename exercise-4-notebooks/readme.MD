# 🧪 Exercise 4: Jupyter Notebooks with Azure OpenAI

This exercise walks you through using Jupyter notebooks in Visual Studio Code to experiment with Azure OpenAI and machine learning workflows.

---

## 📥 Step 1: Download and Extract Required Files

Download the notebook files:

🔗 [WorkingNotebooks.zip](https://opsgilitylabs.blob.core.windows.net/online-labs/openai-in-a-day-workshop/WorkingNotebooks.zip)

Unzip the contents to your lab environment.

---

## 📂 Step 2: Open in Visual Studio Code

1. Open the `WorkingNotebooks` folder in **Visual Studio Code**.
2. Expand the `exercises` folder.
3. Open `quickstart.ipynb`.

---

## ⚙️ Step 3: Setup Python Environment

### Select Kernel

- Click **"Select Kernel"** in the upper right of the notebook interface.
- If prompted, install/enable the recommended extensions by pressing **Enter**.

### Create Virtual Environment

1. Press `Ctrl + Shift + P` and run:

```
Python: Create a Virtual Environment
```

2. Name the environment: `venv`  
3. Confirm by pressing Enter twice.

### Install Required Packages

- Select `requirements.txt` and press **Enter**.
- Let the packages install.

### Troubleshooting Kernel Selection

If you get an error:

- Click **"Select Python Interpreter"**.
- Choose the one with `.venv` and `Python 3.12.0`.

If still incorrect:

1. Click on the Python version at the top-right.
2. Click **"Select Another Kernel…"**
3. Choose **Python Environments**
4. Select `.venv (Python 3.12.0)`

---

## 🔐 Step 4: Set Azure OpenAI Credentials

In all notebooks:

- Replace `AZURE_OPENAI_API_KEY` with your actual API key.
- Replace `OPEN_API_BASE` or `openai.api_base` with your endpoint URL.
- Enclose values in double quotes (`"`).

---

## 📗 Step 5: Run `quickstart.ipynb`

1. Save all files.
2. Open `quickstart.ipynb`.
3. Double-click the first cell and update:

```python
openai.api_base = "your-endpoint"
openai.api_key = "your-api-key"
```

4. Run each cell by clicking the ▶️ icon on the left.

> ⚠️ If you see an error like `tiktoken` not found, open a terminal and run:

```bash
pip install -r requirements.txt
```

---

## 🔄 Step 6: Run `preprocessing.ipynb`

1. Double-click `preprocessing.ipynb`.
2. Select `.venv` as the kernel.
3. Run each cell.

**Goal:** Use a subset of the *Top 10,000 Movies Dataset* to calculate embeddings and apply KMeans clustering. Then extract topics via prompts.

---

## ❓ Step 7: Run `qna_with_embeddings_exercise.ipynb`

1. Open `qna_with_embeddings_exercise.ipynb`.
2. Select `.venv` as the kernel.
3. Run each cell.

**Goal:** Build a simple semantic Q&A system using 3 sample documents from Azure documentation.

---

## 🎬 Step 8: Run `movie_classification_unsupervised_incl_recommendations_exercise.ipynb`

1. Open `movie_classification_unsupervised_incl_recommendations_exercise.ipynb`.
2. Select `.venv` as the kernel.
3. Run each cell.

**Goal:** Perform unsupervised classification and generate movie recommendations based on embeddings.

---

✅ You’ve now completed Exercise 4 using Jupyter Notebooks and Azure OpenAI!


Workaround:

1. Manually install modules
   pip install tiktoken
   pip install numpy
   pip install pandas
   pip install python-dotenv
   pip install azure-identity
   pip install azure
   pip install openai
   pip install tenacity
   pip install --upgrade openai
   pip install langchain
   pip install langchain-community
   pip install -U langchain-openai

2. Updated code here: https://github.com/daveRendon/open-ai/blob/main/quickstart.ipynb

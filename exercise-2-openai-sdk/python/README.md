# 🔧 Initialize a New Python Project

## 1. Create a New Project Folder

Open a **Command Prompt** and run the following commands to create and navigate to your project folder:

```bash
mkdir [project folder path]
cd [project folder path]
```

---

## 2. Open the Folder in Visual Studio Code

Use the following command to open the folder in VS Code:

```bash
code .
```

> **Note:** When prompted by VS Code, click **"Trust"** to enable workspace features.

---

## 3. Install VS Code Extensions for Python

Install the following extensions from the Visual Studio Code Marketplace:

- [✅ Python extension for VS Code](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
- [✅ Python Environment Manager](https://marketplace.visualstudio.com/items?itemName=donjayamanne.python-environment-manager)

---

## 4. Create Your First Python File

In VS Code, create a new file in your project directory and name it:

```
index.py
```

## 5. Configure app to access Azure OpenAI resource

Configuration for each language varies slightly, but they all require the same parameters to be set. The necessary parameters are endpoint, key, and the name of your deployment, which is called the engine when sending your prompt to the model.

Add the following to the index.py file. This will add the library to your app. You will then need to set the required parameters for your client.

## 🔧 Configure and Run the Python App

### 1. Set Your Azure OpenAI Credentials

- Replace `AZURE_OPENAI_API_KEY` with the API key you saved earlier.
- Replace `AZURE_OPENAI_ENDPOINT` with the endpoint URL you saved earlier.

Once complete, **save the file**.

---

### 2. Install Dependencies and Run the App

Open a terminal window in Visual Studio Code and run the following commands:

```bash
pip install openai==1.61.1
python index.py

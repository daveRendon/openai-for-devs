# 🧪 Exercise 5: Azure Machine Learning and OpenAI

> **Note:** Ensure the `text-embedding-ada-002` model is deployed alongside the `gpt-35-turbo` model.

---

## 📦 Setup Azure Blob Storage

1. Go to: [https://portal.azure.com](https://portal.azure.com)
2. Click **+ Create a resource** > search for **Storage account** > **Create**

### Fill the Form:
- **Resource Group**: `OpenAIRG`
- **Storage account name**: *(Enter a unique name)*
- **Region**: `East US`
- **Primary Service**: Azure Blob Storage or Azure Data Lake Gen 2
- **Performance**: Standard
- **Redundancy**: Locally-redundant storage (LRS)

### Advanced Tab:
- Enable **anonymous access on individual containers**

### Create a Container:
- Go to **Data Storage > Containers**
- Click **+ Container**
  - Name: `manuals`
  - Access level: **Container**
- Click **Create**

### Upload Data:
Download and extract:  
📁 [manuals.zip](https://opsgilitylabs.blob.core.windows.net/public/manuals.zip)  
Upload contents to the `manuals` container.

### Access Key:
- Go back to storage account
- Click **Security + networking > Access keys**
- Copy a key to Notepad

---

## ⚙️ Setup Azure Machine Learning

1. Back in Azure Portal: **+ Create a Resource > Azure Machine Learning > Create**

### Fill the Form:
- **Resource Group**: `OpenAIRG`
- **Name**: *(Unique name)*
- **Region**: `East US`
- **Storage Account**: Select the one created earlier

> Wait for deployment to finish and click **Go to resource**

- Click the **Studio web URL** to open Azure ML Studio.

---

## 🤖 Azure OpenAI Integration

1. In Azure ML Studio:
   - Go to **Prompt Flow > Connections**
   - Click **+ Create > Azure OpenAI**

### Fill the Connection Dialog:
- **Name**: *(Unique name)*
- **Subscription**: Select your subscription
- **Azure OpenAI Account Name**: Select existing OpenAI resource
- **API Key**: Paste from Notepad
- **API Base**: Paste Endpoint URL

---

## 💾 Data Store Integration

1. Go to **Assets > Data > Datastores tab > + Create**

### Fill the Form:
- **Datastore name**: *(Unique name)*
- **Storage account**: Select the earlier one
- **Blob container**: `manuals`
- **Account key**: Paste from Notepad

---

## 📁 Data Asset Creation

1. Go to **Data assets tab > + Create**

### Fill the Form:
- **Name**: *(Data asset name)*
- **Type**: Folder
- Source: From Azure Storage

### Select:
- **Datastore**: Your created one
- **Storage Path**: `/` *(root path)*

> Click **Create**

---

## 🧠 Create Vector DB (FAISS)

1. Go to **Prompt flow > Vector index > + Create**

### Fill the Form:
- **Data source type**: `Datasets`
- **Data asset**: Registered one created earlier
- **Vector store**: `Faiss Index`

Click **Next**

- **OpenAI Connection**: Select the one created earlier

Click **Next**

- **Compute**: Select `Standard_DS12_v2`
- Click **Create**

---

## 🔍 Monitor Job

- Go to **Job Details**
- Wait for job to complete

> **Note:** If `LLM - Validate Deployments` fails, you can still continue.

- Expected duration: **40–60 minutes**

> If needed, click **Resubmit** on any failed steps except `Validate Deployments`.

---

⚠️ **Note:** Prompt Flow cannot be created from this type of example due to current limitations.  
➡️ The exercise ends here.


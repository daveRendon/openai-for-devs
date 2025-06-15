# Walkthrough Challenge 6

**Setup Azure Services to Process Stored Documents in an Azure Function**
**Duration:** 1.5 hours

---

## Prerequisites

* **Download & Extract Files**:
  [OpenAI Core.zip](https://adoopenhackguides.blob.core.windows.net/guides/openaichatbot/OpenAI%20Core.zip)

  > You will create an Azure Function later in this exercise from these extracted files.

* Complete the development setup and read through the General Prerequisites.

* **Note:** Only create the resources specified in the lab in your Azure subscription.

---

## Task 1: Create a Storage Account

**Resources:**

* [Create Storage Account | Microsoft Learn](https://learn.microsoft.com/en-us/azure/storage/common/storage-account-create)
* [Quickstart: Create, download, and list blobs with Azure CLI](https://learn.microsoft.com/en-us/azure/storage/blobs/storage-quickstart-blobs-cli)

**Instructions:**

1. In the Azure portal, search for "storage account" in the search bar.
2. On the Storage Account subpage, click **+ Create** at the top.
3. On the configuration page:

   * Select the correct **Azure Subscription** and **Resource Group**.
   * Enter a **Storage Account name**.
   * Choose a **deployment region** (e.g., East US).
   * **Performance** and **Redundancy** options can be left at defaults for this demo.
4. Click **Review + create**.
5. Do **not** modify selections under Advanced, Networking, Data protection, Encryption, or Tags unless required.
6. On the **Review + create** page, click **Create**.
7. After deployment, click **Go to resource**.
8. In the **Overview** tab, click **Disabled** next to Blob anonymous access.
9. Change **Allow Blob anonymous access** to **Enabled**, click **Save**.
10. In the sidebar, under **Data storage**, select **Containers**.
11. Click **+ Container**, name it `documents`, set **Public access level** to **Blob**, then click **Create**.
12. You can now upload data by selecting your container and clicking **Upload**.

---

## Task 2: Setup Azure Document Intelligence

**Resources:**

* [Create a Azure Document Intelligence Resource](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)
* [Azure Document Intelligence Documentation](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/)
* [Pricing](https://azure.microsoft.com/en-us/pricing/details/cognitive-services/form-recognizer/)

**Instructions:**

1. In the Azure portal, search for "Document Intelligence".
2. Click **+ Create**.
3. Configure:

   * Correct **Azure Subscription** and **Resource Group**.
   * **Name** for the Document Intelligence Service.
   * **Deployment region** (e.g., East US).
   * **Pricing tier:** Use the free tier for up to 500 document pages/month.
4. Click **Review + create**, then **Create**.
5. After deployment, click **Go to resource**.
6. Under **Resource Management**, select **Keys and Endpoint**.
7. Copy the **key** and **endpoint** values; you'll need them later.

---

## Task 3: Setup Azure Key Vault and Save Document Intelligence Keys

**Resources:**

* [About Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview)
* [Quickstart: Create a Key Vault using the Azure Portal](https://learn.microsoft.com/en-us/azure/key-vault/general/quick-create-portal)
* [Quickstart: Create a Key Vault using Azure CLI](https://learn.microsoft.com/en-us/azure/key-vault/general/quick-create-cli)
* [Assign a Key Vault Access Policy](https://learn.microsoft.com/en-us/azure/key-vault/general/assign-access-policy-portal)

**Instructions:**

1. In the Azure portal, search for "key vault".
2. Click **+ Create**.
3. Configure:

   * Correct **Azure Subscription** and **Resource Group**.
   * **Name** for the Key Vault.
   * **Deployment region**.
   * **Recovery Options:** Soft-delete enabled (suggested retention: 90 days).
4. Click **Access configuration** tab, select **Vault access policy**.
5. Click **Review + create**, then **Create**.
6. After deployment, click **Go to resource**.
7. Under **Objects**, click **Secrets**.
8. Create the following secrets:

   * `FORM-RECOGNIZER-KEY` (value: Document Intelligence key)
   * `FORM-RECOGNIZER-ENDPOINT` (value: Document Intelligence endpoint)

---

## Task 4: Setup Chroma DB

**Resources:**

* [Create a Linux virtual machine in Azure portal](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/quick-create-portal)
* [Create a VM with static public IP](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/static-public-ip)
* [Run scripts in your Linux VM by using Run Command](https://learn.microsoft.com/en-us/azure/virtual-machines/linux/run-command)
* [Chroma](https://docs.trychroma.com/)
* [Chroma - docker-compose.yml](https://github.com/chroma-core/chroma)

**Instructions:**

1. In Azure Portal, search for "virtual machines" and click **+ Create > Azure virtual machine**.
2. Under **Basics**:

   * **Resource Group**, **VM Name**, **Region** (e.g., North Europe).
   * **Image**: Debian 12 “Bookworm” -x64 Gen2.
   * **Size**: Standard\_D2s\_v3.
   * **Authentication**: SSH public key (download the key when prompted).
3. Set inbound port rules: open 80, 443, 22 (for debugging).
4. Click **Review + create**, then **Create**.
5. After deployment, set up inbound port rules to allow your own IP for SSH and port 8000.
6. Download the [startup.sh](https://adoopenhackguides.blob.core.windows.net/guides/openaichatbot/startup.sh) file.
7. Open Azure Cloud Shell, upload `startup.sh`.
8. Run (replace values as appropriate):

   ```bash
   az vm run-command invoke -g <ResourceGroup> -n <VMName> --command-id RunShellScript --scripts @startup.sh
   ```
9. SSH into your VM:

   ```bash
   ssh -i [Path to private key] azureuser@[VM IP]
   ```
10. Check containers:

    ```bash
    sudo docker ps -a
    ```

---

## Task 5: Create the Azure Function

**Resources:**

* [Introduction to Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview)
* [Getting started with Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/functions-get-started)
* [Azure Tools for VSCode](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-node-azure-pack)

**Instructions:**

1. Install in VS Code:

   * Azure Tools
   * Azure Functions Core
   * Python extension
   * Azurite
   * Python Environments extension
2. Create new folder, open in VS Code.
3. In Azure extension (VS Code), sign in to Azure.
4. Open Command Palette (Ctrl+Shift+P), run:
   `Azure Functions: Create New Project`
5. Select the project folder (root of OpenAI CORE repo).
6. Choose **Python** as language, **Model V1**, and Python **3.10.0**.
7. Select **Azure Blob Storage trigger** as template.
8. Enter a function name.
9. Press Enter to create new local app settings.
10. Select your **Azure Storage account**.
11. Set path to monitor: `documents`.
12. Activate virtual environment and install requirements:

    ```bash
    pip install -r requirements.txt
    ```

---

## Task 6: Test the Azure Function Locally

**Instructions:**

1. Set `AzureWebJobsStorage` to `UseDevelopmentStorage=true` in `local.settings.json`.
2. Install Azurite extension in VS Code, start Blob and Queue services.
3. Ensure `function.json` path matches your storage container.
4. Click **Run > Start Debugging** in VS Code (ensure `__init__.py` is selected).
5. Upload a file to your storage account container via the Azure Portal to trigger the function.

---

## Task 7: Implement Azure Document Intelligence in the Azure Function

**Resources:**

* [Use Azure Functions and Python to process stored Documents](https://learn.microsoft.com/en-us/azure/azure-functions/functions-reference-python)
* [Azure Document Intelligence Python SDK](https://pypi.org/project/azure-ai-formrecognizer/3.2.1/)

**Instructions:**

1. Add the following to your `requirements.txt` and install:

   ```
   azure-identity
   azure-keyvault-secrets
   azure-ai-formrecognizer
   azure-storage-blob
   ```
2. In `__init__.py`, import packages and update the `main()` function to authenticate and retrieve secrets from Key Vault.
3. Implement helper functions as described for chunking, analyzing layout, and processing documents.

---

## Task 8: Create Chroma Collection & Prepare for Embeddings

**Resources:**

* [OpenAI Python Library](https://pypi.org/project/openai/)
* [Explore Azure OpenAI Service embeddings](https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/embeddings)

**Instructions:**

1. Add to `requirements.txt` and install:

   ```
   openai==0.28.1
   num2words
   matplotlib
   plotly
   scipy
   scikit-learn
   chromadb
   ```
2. Update your Python code to:

   * Import ChromaDB and setup client connection.
   * Retrieve `CHROMA-DB-ADDRESS` from Key Vault.
   * Define helper functions to normalize text, generate embeddings, and integrate Azure OpenAI with Chroma.

---

## Task 9: Write Extracted Paragraphs & Embeddings to Chroma Collection

**Instructions:**

1. Retrieve OpenAI secrets from Key Vault.
2. Implement a function to generate unique document IDs for Chroma.
3. In your main function, use Chroma’s API to add paragraphs and embeddings to the collection.

---

## Task 10: Test the Azure Function Locally

* Test again locally as in Task 6 to ensure the entire pipeline works and compiles.

---

## Task 11: Deploy the Azure Function

**Resources:**

* [Develop Azure Functions using VS Code](https://learn.microsoft.com/en-us/azure/azure-functions/functions-develop-vs-code?tabs=csharp)
* [Use Key Vault references for App Service and Functions](https://learn.microsoft.com/en-us/azure/app-service/app-service-key-vault-references)

**Instructions:**

1. In VS Code’s Azure extension, click **Create Resource… > Create Function App in Azure…**.
2. Assign a globally unique name, use **Python 3.10** runtime, select a region.
3. After Function App is created, **Deploy to Azure** from VS Code.
4. In the Azure Portal, enable **System-assigned managed identity** for your Function App.
5. Grant Key Vault access policy to this identity (get secrets).
6. Add the Function App outbound IPs to the inbound port rules for your Chroma VM (port 8000).

---

## Additional: Local Authentication Solution

**Instructions:**

1. In Azure Entra ID, register a new App Registration.
2. Under **Certificates and secrets**, generate a new client secret and copy it.
3. Add another access policy for this App Registration in Key Vault.
4. Add `from azure.identity import ClientSecretCredential` to your code.

---

## Resources & Troubleshooting

* [Install Azure CLI](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)

  * On macOS: `brew install azure-cli`
* [Microsoft C++ Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
* [Visual Studio Code Python Extension](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
* If you encounter “Could not build wheels for hnswlib…” error: [Stack Overflow Fix](https://stackoverflow.com/a/76245995)
* For issues with requirements.txt, use the [provided template file](#).

---

## Testing & Validation

* Debug Azure Function.
* Upload documents and verify they are stored in ChromaDB.
* Use the [sample documents](https://tinyurl.com/yz5tucbk).
* Optional: Use the customized [Chroma viewer](#) for validation:

  ```bash
  pip install -r requirements.txt
  streamlit run viewer.py <Your VM IP>
  ```

---

## 🎉 **Congratulations, you successfully completed Challenge 6 Setup!** 🚀

# Exercise #1 – AI Foundry Copilot

## 1. Create Azure AI Search Resource

Start in the Azure portal: [https://portal.azure.com](https://portal.azure.com)

1. Click **Create a Resource**.
2. Search for `ai search`.
3. In **Azure AI Search**, click **Create**.
4. Fill in the required fields:
   - **Subscription**: Select your available option.
   - **Resource Group**: Select the provided resource group.
   - **Name**: Enter a globally unique name.
   - **Location**: Select `East US`.
   - **Pricing Tier**: Click on *Change Pricing Tier* and choose **Standard**.
5. Click **Review + Create**.
6. Click **Create** after passing validation.

---

## 2. Create a New Project in Azure AI Foundry Portal

1. Go to the AI Foundry Portal: [https://ai.azure.com/](https://ai.azure.com/)
2. Click **Sign in** (top right). Use your Azure credentials (Cloud icon or Lab environment tab).
3. Click **+ Create Project** (top right).
4. In the dialog:
    - Change the **Project name** to `demofoundry` (leave the pre-generated characters at the end).
    - Click the **Customize** button.
5. In the section for **AI Search**, use the dropdown to select the AI Search resource you just created.
6. Click **Next**.
7. Click **Create**.

---

## 3. Deploy a Model

1. In the left navigation, click **Models and endpoints**.
2. Click the **+ Deployment model** dropdown and select **Deploy base model**.
3. Search for `gpt-4o` and select it, then click **Confirm**.
4. Leave defaults, click **Connect and deploy**.

---

## 4. Test the Model in Playground – Chat

1. In the navigation, click **Playgrounds** > **Try the Chat playground**.
2. In the **Deployment** pane, make sure your `gpt-4o` deployment model is selected.
3. Enter the following prompt:

    ```
    What is generative AI?
    ```

4. As a follow-up, enter:

    ```
    What are three benefits it provides?
    ```

   > Review how the session keeps context for the follow-up.

---

## 5. Understand Parameters: Temperature, Max Tokens, Stop Sequence, Top Probabilities

- **Temperature**: Controls randomness. Lower = deterministic, Higher = creative/unexpected.
- **Max Tokens**: Max response length (up to 4000 tokens).
- **Stop Sequences**: Make output stop at a certain string.
- **Top P**: Controls the likelihood range for token selection. Use *either* Temperature or Top P, not both.

---

## 6. Experiment with Parameters

### Adjust Temperature

1. Click **Chat** in the navigation.
2. Expand the **Parameters** section (now on the right).
3. Set **Temperature** to `1`.
4. Enter:

    ```
    Write an email to request a quote from local plumbers for backflow testing. I need it done in the next 2 weeks. Keep it short and casual.
    ```

5. Set **Temperature** to `0` and re-run the same prompt.
6. Compare the outputs.

> **Tip:** At `Temperature = 0` responses are nearly identical; at `1` they're more varied. Best practice is around `0.7`.

---

### Adjust Top P

1. Refresh the page to reset parameters.
2. Set **Top P** to `0`. Use the same plumber quote prompt.
3. Set **Top P** to `1` and try again.
4. Compare outputs.

> **Note:** Adjust *either* Temperature *or* Top P, not both.

---

### Use Stop Sequences

1. Refresh the webpage.
2. In the **Stop sequence** box, enter `Thank you.` and select the dropdown to create the stop sequence.
3. Enter the same plumber quote prompt.
4. The reply will end before "Thank you" is generated.

---

## 7. Use Your Own Data

1. **Download and extract these files**:  
   [https://tinyurl.com/yz5tucbk](https://tinyurl.com/yz5tucbk)
2. In the AI Foundry Portal, click **Playgrounds** > **Try the Chat playground**.
3. Expand the **Add your data** section.
4. Click **+ Add a new data source**.
5. In **Data source** dropdown, select **Upload files**.
6. Click **Upload**, then **Upload files** and select the three files you downloaded.
7. After uploading, click **Next**.

    Your screen should show all three files.

8. In the **Select Azure AI Search Service** dropdown, select the *other* Azure AI Search resource you created/connected.  
   Leave **Index name** as default. Click **Next**.

9. Click **Add connection** next to the previously created AI Search resource.

10. In the dropdown, select the *newly added* resource, then click **Next**.

11. In the **Azure OpenAI Service Connection** dropdown, select the OpenAI resource you created. Click **Next**.

12. Click **Create vector index** (do not navigate away; this will take a while).

    Wait for progress to complete.

13. When ready, set **Search type** to `Keyword`.

14. In the Chat pane, enter:

    ```
    tell me about hotels in Dubai
    ```

    Click **Submit**.

15. Review the results for reference.

---

## 8. API Keys and Endpoints

1. Click **All hubs + projects** (upper right).
2. Click the link in the **Hub** column.
3. In the left navigation, click **Connected resources**.
4. Click the link next to **Azure OpenAI Service**.
5. The **Endpoint** and **Key** are listed here.

   - Copy both to Notepad — you’ll need them later.

---

**End of Exercise #1**

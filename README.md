# 🚀 Nexus_DataLens 2.0
End-to-end automated AWS data analytics pipeline (Nexus DataLens)

**Empowering data insights through automation, intelligence, and visualization.**

Nexus DataLens is a **serverless data pipeline and analytics solution** designed to simplify data ingestion, cleaning, transformation, and visualization. Leveraging **AWS Lambda, Glue, Athena, and QuickSight**, it transforms raw CSVs into interactive dashboards — enabling **faster, smarter decision-making**.

---

## 📌 Features

* **Automated Ingestion**: Upload CSVs directly into S3 and trigger the workflow.
* **Data Cleaning & Transformation**: Glue jobs ensure data quality and readiness.
* **Serverless Architecture**: Fully managed on AWS with minimal operational overhead.
* **Dynamic Dashboards**: Auto-generated QuickSight dashboards tailored per dataset.
* **Scalable & Cost-Efficient**: Pay only for what you use, with seamless scalability.

---

## 🛠️ Tech Stack

* **AWS S3** – Secure data lake
* **AWS Lambda** – Event-driven compute
* **AWS Glue** – Data cleaning & schema discovery
* **Amazon Athena** – Serverless query engine
* **Amazon QuickSight** – BI dashboards & insights
* **Frontend** – Web interface for user interaction

---

## 📂 Repository Structure

```plaintext
nexus-datalens/
│── README.md
│── LICENSE
│── .gitignore
│── docs/
│    └── Nexus_DataLens_Documentation.pdf
│── assets/
│    ├── diagrams/
│    │    └── 02_architecture_diagram.svg
│    └── screenshots/
│         └── 23_quicksight_dashboard.png
│── lambda/
│    └── lambda_function.py
│── glue_jobs/
│    └── csv_cleaning_job.py
│── frontend/
│    ├── index.html
│    ├── manifest.json
│    ├── style.css
│    ├── script.js
│    └── assets/ (logos, icons)
│── infra/
│    ├── kms-policy.json
│    └── cloudformation-template.yaml
```

---

## 🏗️ Architecture

![architecture](https://github.com/user-attachments/assets/a735b7c1-8303-4d77-b72a-ef33d86b8156)


---

## 🎨 Glimpse of the Frontend

<img width="940" height="427" alt="image" src="https://github.com/user-attachments/assets/4b7e96bf-098c-46c4-b116-ca2fbd233408" />


---

## ⚙️ Glimpse of the Backend

<img width="940" height="414" alt="image" src="https://github.com/user-attachments/assets/f0165411-c3f7-4e0f-820e-a6a52db9f200" />


---

## 🎥 Demo Video

▶ Coming soon...
---

## 🚦 Getting Started

### Prerequisites

* AWS account with access to **S3, Lambda, Glue, Athena, and QuickSight**
* Node.js & npm (for frontend, if applicable)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/nexus-datalens.git
   cd nexus-datalens
   ```
2. Deploy Lambda & Glue jobs (via `infra/` or manually in AWS Console).
3. Upload your CSVs into the designated S3 bucket.
4. Open QuickSight to view auto-generated dashboards.
5. (Optional) Run the **frontend** for user interaction:

   ```bash
   cd frontend
   npm install
   npm start
   ```

---

## 📖 Documentation

The full documentation can be found in:

https://github.com/Ruksana-shaikh/Nexus_DataLens_2.0/blob/main/Documents/Nexus_DataLens2.0_Documentation.pdf

---

## 📸 Screenshots

### Example QuickSight Dashboard

<img width="940" height="428" alt="image" src="https://github.com/user-attachments/assets/0941ae61-5492-4f56-97f1-9eac6499753c" />

<img width="940" height="424" alt="image" src="https://github.com/user-attachments/assets/b9416c34-d62b-4dc5-b230-1106eb6d86df" />

### Example PowerBI Dashboard

<img width="940" height="500" alt="image" src="https://github.com/user-attachments/assets/f11beac3-d0db-4050-af3f-7ca4bcb21f0f" />

<img width="940" height="493" alt="image" src="https://github.com/user-attachments/assets/1a5d1def-d59e-4e16-9fac-a843390b7461" />


---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

See `LICENSE` for details.

---

## 📬 Contact

* **LinkedIn**: [www.linkedin.com/in/ruksana-ks]
* **Email**: [shaikhruksana.k@gmail.com]

---

## 💡 Closing Note

Nexus DataLens is not just a project — it’s a step towards **making data accessible, actionable, and insightful**.

✨ *From raw CSVs to rich dashboards — all with the power of serverless AI-driven pipelines.*

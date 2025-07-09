# ⚖️ Legal AI Assistant

A GenAI-powered legal assistant that provides AI-generated legal answers, links to relevant Indian legal citations, and enhances access to legal knowledge with conversational UX.

> 🚀 [Live App](https://legal-ai-assistant-beige.vercel.app) • [Source Code](https://github.com/amit-prajapati-ap/Legal-AI-Assistant)

---

## 📸 Screen Recording

[Legal AI Assistant Screen recording](https://drive.google.com/file/d/1HwaYZPRhTyJOHLdNMZYRAp_gWYS3LjoV/view?usp=sharing)

*Screen Recording: Sample response with linked citation references.*

---

## 🛠️ How to Run the Project Locally

1. **Clone the Repository**

```bash
git clone https://github.com/amit-prajapati-ap/Legal-AI-Assistant.git
cd Legal-AI-Assistant
```
2. **Install Dependencies**

```bash
npm install
```
3. **Start the Dev Server**

```bash
npm run dev
```

---

## 🔗 How Citation Linking Works
The app utilizes a simple yet effective approach to legal citation linking:

1. **Each AI-generated answer is processed with embedded citation references (e.g., Section 164 of the Motor Vehicles Act, 1988).**
2. **These references are matched with a citation metadata structure (like { text: "...", pdfLink: "..." }) stored in the backend or fetched from APIs.**
3. **Citations are dynamically rendered at the bottom of the response card, linking to verified sources such as IndianKanoon.**
4. **This ensures traceability and transparency in AI-generated legal opinions.**

5. **Example Output:**

```
{
  "answer": "Yes, under Section 164 of the Motor Vehicles Act, 1988, the family of a deceased minor is entitled to compensation.",
  "citation": {
    "text": "The absence of a driving licence does not bar compensation under MV Act.",
    "pdfLink": "https://indiankanoon.org/doc/1234567/"
  }
}
```

## 📦 Tech Stack

| Category       | Tech Used                     |
| -------------- | ----------------------------- |
| Frontend       | React 19 + Vite               |
| Styling        | Tailwind CSS                  |
| Icons          | Lucide React                  |
| Toasts         | react-toastify                |
| State & Flow   | Functional Components + Props |
| Linting        | ESLint + React Hooks Plugin   |
| Dev Experience | TypeScript, Vite, Previews    |

## 📦 Project Structure

```Legal-AI-Assistant/
│
├── src/
│   ├── components/         # Reusable UI Components
│   ├── pages/              # Main views/screens
│   ├── assets/             # Application assets
│   ├── App.tsx             # Helper functions
│   └── main.tsx            # App entry point
│   └── index.css           # Global CSS file
│
├── .gitignore              # Git ignore file
├── index.html              # Index file
├── README.md               # Readme file
├── packege-lock.json       
├── package.json            # Packege file
├── tsconfig.json           # TypeScript config
└── vite.config.ts          # Vite bundler config
```

Made with ❤️ by Amit Prajapati – Empowering India with accessible legal AI.

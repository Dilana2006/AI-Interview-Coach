# 🤖 AI Interview Coach - Word Document Generator

An AI-powered interview preparation assistant that creates personalized interview plans and automatically generates a downloadable Word document.

This project combines a simple web application with an n8n AI automation workflow to help candidates prepare for job interviews faster and more effectively.

---

# ✨ Features

## 🤖 AI Interview Preparation
- Generates personalized interview preparation plans using AI
- Creates interview questions based on the user's:
  - Candidate name
  - Target job position
  - Company name

## 📝 Smart Interview Guidance
The AI generates:

- Personalized interview introduction guidance
- 5 likely interview questions
- STAR method answer tips
- Preparation advice for the specific company and role

## 📄 Automatic Word Document Generation
- Converts the AI-generated interview plan into a downloadable `.doc` file
- Creates a professional interview preparation document automatically

## 🌐 Web Application
- Simple and user-friendly interface
- Connects directly with the n8n AI automation workflow
- Can be deployed using Vercel

---

# 🛠️ Technologies Used

## Frontend

- HTML
- CSS
- JavaScript

## AI & Automation

- n8n Workflow Automation
- OpenAI GPT-4o-mini

## Deployment

- Vercel

## Version Control

- Git
- GitHub

---

# ⚙️ How It Works

The application follows this workflow:
User Input
|
↓
Frontend Website
(HTML/CSS/JavaScript)
|
↓
n8n Webhook
|
↓
OpenAI AI Model
|
↓
AI Interview Preparation Plan
|
↓
Word Document Generator
|
↓
User Downloads Interview Plan


---

# 📂 Project Structure
AI-Interview-Coach/
│
├── index.html
│
├── style.css
│
├── index.js
│
├── AI_Interview_Coach_Workflow.json
│
└── README.md


---

# 🚀 Setup Instructions

## 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK

Go into the project folder:
cd AI-Interview-Coach

## 2. Setup the n8n Workflow
1.Create an n8n account.
2.Open your n8n workspace.
3.Import the workflow file:
AI_Interview_Coach_Workflow.json

## 3. Connect the Website to n8n

Open:
index.js

Find the webhook URL:
fetch("YOUR_N8N_WEBHOOK_URL")

Replace it with your own n8n webhook URL.
This allows the website to communicate with the AI workflow

## 4. Run the Website

Open:

index.html

in your browser.

You can also deploy the frontend using:

Vercel
Netlify
Any static website hosting service

## Requirements

Before running this project, you need:

1.n8n account
2.AI provider credentials
3.Web browser
4.Git installed on your computer

## Use Cases

This project can help:

1.Students preparing for interviews
2.New graduates applying for jobs
3.Professionals changing careers
4.Anyone who wants structured interview preparation

Future Improvements

## Possible future improvements:

1.AI mock interview conversations
2.Resume analysis
3.Interview scoring system
4.Voice-based interview practice
5.PDF export support
6.User accounts
7.Saved interview history

Contributing

Contributions are welcome.

## To contribute:

1.Fork this repository.
2.Create a new branch.
3.Make your changes.
4.Submit a pull request.

## License

This project is open-source and available for educational and personal use.

## Support

If you find this project useful, consider giving this repository a star ⭐ on GitHub.

## Built With:

🤖 Artificial Intelligence
⚙️ n8n Automation
💻 JavaScript
🌐 Web Technologies
🚀 Open Source Tools



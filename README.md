# AI Learning Platform

A full-stack web application for AI-powered lesson generation and user management.

---
## 📝 Overview

The **AI Learning Platform** is an intelligent, interactive web application that brings personalized education to everyone. Users can explore a wide range of topics by selecting a category, subcategory, and customizing additional options, then submitting a personalized prompt. The platform’s AI instantly generates tailored learning content based on these unique user inputs, ensuring every lesson is relevant and engaging.

## 🚀 Technologies Used

- **Frontend:** React, Redux Toolkit, React Router
- **Backend:** Node.js, Express, Prisma ORM, JWT Auth, bcrypt, Docker
- **Database:** PostgreSQL (via Docker Compose)
- **AI:** OpenAI API 
## ✨ Key Features

- **User Registration:** Seamless onboarding process allowing new users to quickly create an account and access personalized learning tools.
- **Secure Login & Logout:** Robust authentication system enabling users to securely log in and out of their accounts.
- **Personalized Lesson Generation:** Users select a category, subcategory, and customize details such as lesson length, lesson depth, and inclusion of examples. The system automatically generates a tailored prompt, which is sent to the AI to produce a unique, personalized lesson.
- **AI-Powered Content:** Instantly receive AI-generated lessons crafted specifically for the user’s selected topic and preferences.
- **JWT-Based Authentication & Authorization:** Secure user authentication and role-based access control using industry-standard JSON Web Tokens (JWT) to protect routes and ensure data integrity.
- **Learning History Tracking:** Users can view their complete history of generated lessons and prompts.
- **Admin Dashboard:** Admins can view all users and their learning histories, as well as add and view categories and subcategories.
- **Role-Based Access Control:** Ensures only authorized users can access sensitive features and administrative tools.

## 🛡️ Admin Access

To access the admin dashboard, use:

- **Phone:** `0527639973`
- **Password:** `lp0527639973`

## ⚡ Setup Instructions

### 1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. **Environment Variables**

Copy the example env file and fill in your secrets:

```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` as needed.

## 📝 Assumptions Made

- Node.js and npm are installed on your system.
- Docker and Docker Compose are installed and running.
- The backend and frontend run on separate ports.
- Environment variables are provided via `.env` files.
- The database is managed via Docker Compose for easy setup.

---

## 🛠️ How to Run Locally

1. **Start the database:** **Spin Up the Database (PostgreSQL) with Docker Compose**
   ```bash
   docker compose up -d
   ```

2. **Start the backend:**
   ```bash
   cd backend
   npm install
   npx prisma migrate deploy
   npm run dev
   ```

3. **Start the frontend:**
   ```bash
   cd ../frontend
   npm install
   npm run dev
   ```

---

## 📄 Sample `.env.example` (Backend)

```env
# backend/.env.example

DATABASE_URL="postgresql://postgres:A1rPlatf0rm!Dev2025@localhost:5432/learning_db"
JWT_SECRET=your_jwt_secret_key
OPENAI_API_KEY=your_openai_key
PORT=5000
```

---

## 🐳 Using Docker or Docker Compose

- The provided `docker-compose.yml` will spin up a PostgreSQL database.
- You can view and edit your database using Prisma Studio.

---

🐳 Useful Docker Commands
bash
Copy
Edit
# Stop all containers
docker compose down

# Access database GUI
npx prisma studio

---

## 📧 License

MIT © [Leah Pines]

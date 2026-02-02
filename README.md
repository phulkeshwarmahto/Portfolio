# 🌐 MERN Portfolio Project – Full Stack Developer Showcase

> A modern, scalable, and production-ready **Portfolio Web Application** built using the **MERN Stack**, showcasing my skills, projects, experience, and learning journey as a Computer Engineering student and full-stack developer.

---

## 👨‍💻 About Me

**Name:** Phulkeshwar Mahto  
**Role:** B.Tech Student – Electronics & Computer Engineering  
**Institute:** NIAMT, Ranchi  
**Primary Focus:** Full-Stack Web Development (MERN), C++, DSA, and Applied Engineering  

**Interests & Strengths:**
- Web & App Development (MERN Stack)
- Data Structures & Algorithms (C++)
- System Design (Beginner Level)
- AI-assisted Development Tools
- Technical & Educational Content Creation
- Hackathons & Innovation Labs (D & I Lab)

I actively work on **real-world, industry-oriented projects**, participate in hackathons (including Bharatiya Antariksh Hackathon), and focus on building **production-level applications**, not just academic demos.

---

## 🚀 Project Overview

This project is a **dynamic, full-stack MERN portfolio application**, designed to represent my skills, projects, and journey as a developer in a **professional and scalable manner**.

Unlike static portfolios, this application includes:
- A real backend
- Database-driven content
- Secure authentication
- Admin dashboard
- Deployment-ready architecture

---

## 🧠 Why This Portfolio Is Different

- ✅ Real Backend using Node.js & Express
- ✅ MongoDB Database (No hardcoded data)
- ✅ Admin-controlled content management
- ✅ JWT-based Authentication & Authorization
- ✅ Clean, scalable folder structure
- ✅ Production deployment support
- ✅ Industry-level best practices

---

## 🛠 Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose ODM)
- JSON Web Token (JWT)
- RESTful APIs

### Tools & Platforms
- Git & GitHub
- Postman
- MongoDB Compass
- Visual Studio Code
- Render / Vercel (Deployment)

---

## 🗂️ Features

### 👤 Public Features
- Home / Landing Page
- About Me Section
- Skills & Technology Stack
- Projects Showcase
- Experience & Achievements
- Contact Form
- Resume Download

### 🔐 Admin Features
- Secure Admin Login
- JWT-based Authentication
- Add / Edit / Delete Projects
- Manage Skills Section
- Update About Content
- View Contact Messages

---

## 🏗️ Project Architecture

```
mern-portfolio/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── utils/
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── .env
├── README.md
└── package.json
```

---

## 🧩 Database Schema (MongoDB)

### User (Admin)
```js
{
  name: String,
  email: String,
  password: String,
  role: "admin"
}
```

### Project
```js
{
  title: String,
  description: String,
  techStack: [String],
  githubLink: String,
  liveLink: String,
  createdAt: Date
}
```

### Contact
```js
{
  name: String,
  email: String,
  message: String,
  createdAt: Date
}
```

---

## 🔐 Authentication Flow

1. Admin logs in using credentials
2. Server validates user
3. JWT token is generated
4. Token is sent to client
5. Protected routes require valid token
6. Middleware verifies token on every request

---

## 📡 API Endpoints

### Authentication
```
POST /api/auth/login
```

### Projects
```
GET    /api/projects
POST   /api/projects
PUT    /api/projects/:id
DELETE /api/projects/:id
```

### Contact
```
POST /api/contact
GET  /api/contact
```

---

## 🧪 Development & Testing

- API testing using Postman
- Environment variables handled via `.env`
- Modular and reusable code structure
- Centralized error handling
- Input validation & security best practices

---

## 🌍 Deployment Guide

### Backend Deployment (Render)
1. Push backend code to GitHub
2. Create a new Web Service on Render
3. Set environment variables:
   ```
   MONGO_URI=
   JWT_SECRET=
   PORT=
   ```
4. Deploy backend service

### Frontend Deployment (Vercel)
1. Connect GitHub repository
2. Configure build & output settings
3. Set backend API base URL
4. Deploy frontend application

---

## 🔮 Future Enhancements

- Blog & article publishing system
- Admin analytics dashboard
- Dark / Light mode toggle
- AI-powered resume & portfolio analysis
- Role-based access control
- Performance & SEO optimization

---

## 📚 Learning Outcomes

This project helped me gain practical experience in:
- Full-stack MERN development
- Backend security & authentication
- REST API design
- MongoDB schema design
- Deployment workflows
- Debugging & optimization
- Writing clean, maintainable code

---

## 📫 Contact

- **GitHub:** (Add your GitHub link)
- **LinkedIn:** (Add your LinkedIn link)
- **Email:** (Add your professional email)

---

## ⭐ Final Note

This portfolio represents my **engineering mindset**, **problem-solving ability**, and **commitment to continuous learning**.

If you are a recruiter, mentor, or fellow developer —  
**I would love to connect and collaborate on impactful projects.**

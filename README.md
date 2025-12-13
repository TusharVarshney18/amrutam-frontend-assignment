# Amrutam Frontend Assignment

A responsive frontend web application built as part of the **Amrutam Frontend Assignment**, developed using **React**, **Vite**, and **Tailwind CSS**.  
The project focuses on clean UI, proper routing, reusable components, and basic SEO best practices.

---

## 🔗 Live Demo

**Vercel Deployment:**  
https://amrutam-frontend-assignment.vercel.app

**GitHub Repository:**  
https://github.com/TusharVarshney18/amrutam-frontend-assignment

---

## 📌 Features

### Core Features
- Fully responsive design (mobile, tablet, desktop)
- Component-based architecture
- Clean UI following Figma design
- React Router v6 nested routing
- State management using React hooks

### Forum Module
- View questions and replies
- Like, comment, and save posts
- Filter posts (Recent, Most Liked, Most Commented, Oldest)
- Ask a question using modal flow
- Category selection before posting

### Profile Module
- User profile sidebar
- Nested profile routes:
  - Dashboard
  - Appointments
  - Wallet
  - Chats
  - Orders
  - Saved Posts
- Saved Posts page displays only bookmarked questions

### SEO & Performance
- Meta tags using `react-helmet-async`
- Auto-generated `sitemap.xml`
- `robots.txt` included
- SPA routing support for deployment

---

## 🛠️ Tech Stack

- React 18
- Vite
- React Router DOM
- Tailwind CSS
- React Helmet Async
- Vercel (Deployment)

---

## 📁 Folder Structure

src/
│── components/
│ ├── forum/
│ ├── profile/
│ └── shared components
│
│── pages/
│ ├── Home.jsx
│ ├── Forum.jsx
│ ├── Store.jsx
│ ├── profile/
│ ├── ProfilePage.jsx
│ ├── Dashboard.jsx
│ ├── Appointments.jsx
│ ├── Wallet.jsx
│ ├── Chats.jsx
│ ├── Orders.jsx
│ ├── SavedPosts.jsx
│
│── data/
│ ├── products.js
│ ├── ingredients.js
│ ├── forumSample.js
│
│── context/
│ └── CartContext.jsx
│
│── App.jsx
│── main.jsx
## 🚀 Getting Started

### 1. Clone Repository
```bash
git clone https://github.com/TusharVarshney18/amrutam-frontend-assignment.git
cd amrutam-frontend-assignment

👤 Author

Tushar Varshney
Frontend Developer
GitHub: https://github.com/TusharVarshney18

# 🎓 College Discovery Platform

A full-stack College Discovery Platform built using Next.js, Prisma, NextAuth, and PostgreSQL. Students can browse colleges, search and filter them, view detailed information, create accounts, log in, and save their favorite colleges.

## 🚀 Live Demo

https://college-discovery-platform-tau-olive.vercel.app

## 📌 Features

### Authentication
- User Signup
- User Login
- Secure Password Hashing using bcrypt
- Session Management with NextAuth

### College Discovery
- Browse Colleges
- Search Colleges by Name
- Filter Colleges by Location
- View Detailed College Information

### Saved Colleges
- Save Favorite Colleges
- View Saved Colleges
- Prevent Duplicate Saves using Prisma Upsert

### Responsive UI
- Modern Dark Theme
- Responsive Design
- Clean Navigation Bar

---

## 🛠 Tech Stack

### Frontend
- Next.js 16
- React
- TypeScript
- Tailwind CSS

### Backend
- Next.js API Routes
- NextAuth

### Database
- PostgreSQL
- Prisma ORM

### Deployment
- Vercel

---

## 📂 Project Structure

```bash
src/
│
├── app/
│   ├── api/
│   │   ├── auth/
│   │   ├── colleges/
│   │   ├── save-college/
│   │   └── signup/
│   │
│   ├── colleges/[id]/
│   ├── login/
│   ├── signup/
│   └── saved/
│
├── components/
│   ├── CollegeCard.tsx
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   ├── LocationFilter.tsx
│   ├── SaveCollegeButton.tsx
│   └── UserInfo.tsx
│
├── lib/
│   ├── prisma.ts
│   └── auth.ts
│
└── types/
```

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/JPS133/college-discovery-platform.git

cd college-discovery-platform
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
DATABASE_URL="YOUR_DATABASE_URL"

NEXTAUTH_SECRET="YOUR_SECRET"

NEXTAUTH_URL="http://localhost:3000"
```

### Generate Prisma Client

```bash
npx prisma generate
```

### Run Database Migration

```bash
npx prisma migrate dev
```

### Seed Database

```bash
npx prisma db seed
```

### Start Development Server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🗄 Database Schema

### User

| Field | Type |
|---------|---------|
| id | String |
| name | String |
| email | String |
| password | String |

### College

| Field | Type |
|---------|---------|
| id | String |
| name | String |
| location | String |
| fees | Int |
| rating | Float |
| placementRate | Int |
| description | String |
| courses | String[] |

### SavedCollege

| Field | Type |
|---------|---------|
| id | String |
| userId | String |
| collegeId | String |

---

## 🔍 Key Functionalities

### Search Colleges

Users can search colleges by name.

### Location Filter

Users can filter colleges by city.

### Save Colleges

Authenticated users can save colleges to their personal dashboard.

### Authentication

- Signup with Email and Password
- Login using NextAuth Credentials Provider
- Secure Password Storage using bcrypt

---

## 📸 Screenshots

### Homepage
(Add screenshot here)

### College Details Page
(Add screenshot here)

### Saved Colleges Page
(Add screenshot here)

---

## 🎯 Future Improvements

- College Comparison Feature
- College Reviews & Ratings
- Pagination
- Advanced Filters
- College Images
- User Profiles
- AI-Based College Recommendations

---

## 👨‍💻 Author

**Jai Pratap Singh**

B.Tech Computer Science Engineering

SRMCEM

GitHub: https://github.com/JPS133

---

## 📄 License

This project is developed for educational and internship evaluation purposes.

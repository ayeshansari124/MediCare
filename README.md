# 🏥 CareFlow – Full-Stack Hospital Management Platform

A modern full-stack hospital management system to **manage doctors, patients, and appointments seamlessly**, with real-time availability tracking, secure authentication, and an intuitive admin dashboard.
Built using **Next.js, PostgreSQL (Neon), Prisma, and JWT cookies**, with a strong focus on **scalability and real-world usability**.

---

## 🚀 Features

### 🩺 Doctor Management

* Add, edit, and delete doctors (Admin)
* Profile with specialization, experience, fees, and availability
* Toggle doctor availability in real time
* Doctor-wise appointment tracking

---

### 👤 Patient System

* Secure authentication (register / login / logout)
* Persistent sessions using **HTTP-only JWT cookies**
* Profile management (name, phone, DOB, gender, address)
* View and manage personal appointments

---

### 📅 Appointment System

* Book appointments with date & time selection
* Real-time doctor availability check
* Appointment status tracking:

  * Pending
  * Confirmed
  * Cancelled
  * Completed
* Patients can cancel pending appointments
* Admin can manage and update appointment statuses

---

### 🛠 Admin Dashboard

* Overview of total doctors, patients, users, and appointments
* Manage all doctors and users
* View all appointments in one place
* Status-based filtering with visual indicators

---

### 🌐 Frontend Architecture

* Built with **Next.js App Router**
* Tailwind CSS for responsive UI
* Component-based modular design
* Context API for global authentication state
* Optimized for both desktop and mobile usage
* Deployed on **Vercel**

---

### 🧠 Backend Architecture

* API routes using **Next.js server functions**
* **Prisma ORM** for database operations
* **PostgreSQL (Neon)** as serverless database
* JWT authentication with cookie-based sessions
* Role-based access (Admin / Doctor / Patient)

---

## 🛠 Tech Stack

### Frontend

* Next.js (App Router)
* Tailwind CSS
* Context API
* React Hooks

### Backend

* Next.js API Routes
* Prisma ORM
* PostgreSQL (Neon)
* JWT (cookie-based authentication)

### Deployment

* Vercel – full-stack deployment
* Neon – serverless database

---

## 📚 Learnings

* Building a **full-stack production-ready system** using Next.js App Router
* Implementing **role-based access control** (Admin / Patient / Doctor)
* Managing **secure authentication using HTTP-only cookies**
* Handling **Prisma + Neon deployment issues in production**
* Designing clean and scalable **API architecture inside Next.js**
* Creating responsive, user-friendly healthcare UI systems
* Debugging real-world deployment and environment issues

---

### Built with ❤️ by Ayesha
